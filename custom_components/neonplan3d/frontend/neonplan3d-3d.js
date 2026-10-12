var xf=0,Wc=1,bf=2;var zs=1,vf=2,Jr=3,Pi=0,cn=1,xe=2,Yn=0,Ii=1,Ce=2,Xc=3,ks=4,_f=5;var sr=100,yf=101,Mf=102,Sf=103,wf=104,Tf=200,Ef=201,Af=202,Rf=203,qc=204,Yc=205,Cf=206,Pf=207,If=208,Lf=209,Ff=210,Df=211,Nf=212,Uf=213,Of=214,sa=0,oa=1,aa=2,kr=3,la=4,ca=5,ua=6,ha=7,$c=0,Bf=1,zf=2,Dn=0,Zc=1,Jc=2,Kc=3,Qc=4,jc=5,tu=6,eu=7;var nu=300,Li=301,or=302,za=303,ka=304,Vs=306,tr=1e3,pn=1001,fa=1002,Ge=1003,kf=1004;var Gs=1005;var Xe=1006,Va=1007;var Fi=1008;var gn=1009,iu=1010,ru=1011,Kr=1012,Ga=1013,Nn=1014,Un=1015,On=1016,Ha=1017,Wa=1018,Qr=1020,su=35902,ou=35899,au=1021,lu=1022,Mn=1023,Hn=1026,Di=1027,cu=1028,Xa=1029,Ni=1030,qa=1031;var Ya=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,$a=35840,Za=35841,Ja=35842,Ka=35843,Qa=36196,ja=37492,tl=37496,el=37488,nl=37489,Ys=37490,il=37491,rl=37808,sl=37809,ol=37810,al=37811,ll=37812,cl=37813,ul=37814,hl=37815,fl=37816,dl=37817,pl=37818,ml=37819,gl=37820,xl=37821,bl=36492,vl=36494,_l=36495,yl=36283,Ml=36284,$s=36285,Sl=36286;var vs=2300,da=2301,na=2302,Fc=2303,Dc=2400,Nc=2401,Uc=2402;var Vf=3200;var uu=0,Gf=1,oi="",Le="srgb",_s="srgb-linear",ys="linear",de="srgb";var ia=7680;var Hf=519,Wf=512,Xf=513,qf=514,wl=515,Yf=516,$f=517,Tl=518,Zf=519,Jf=35044,hu=35048;var fu="300 es",Fn=2e3,Ms=2001;function Jm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=Vr("canvas");return i.style.display="block",i}var zh={},Gr=null;function du(...i){let t="THREE."+i.shift();Gr?Gr("log",t,...i):console.log(t,...i)}function Qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in zh||(zh[t]=!0,Bt(...i))}function jf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var td={[sa]:oa,[aa]:ua,[la]:ha,[kr]:ca,[oa]:sa,[ua]:aa,[ha]:la,[ca]:kr},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uc=Math.PI/180,pa=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Qm(i,t){return(i%t+t)%t}function hc(i,t,e){return(1-e)*i+e*t}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bu=class bu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bu.prototype.isVector2=!0;var ee=bu,Xn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,a=Math.sin(a*_)/M,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vu=class vu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vu.prototype.isVector3=!0;var G=vu,fc=new G,kh=new Xn,_u=class _u{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=r[0],g=r[3],p=r[6],_=r[1],M=r[4],v=r[7],y=r[2],w=r[5],R=r[8];return s[0]=o*x+a*_+l*y,s[3]=o*g+a*M+l*w,s[6]=o*p+a*v+l*R,s[1]=c*x+u*_+h*y,s[4]=c*g+u*M+h*w,s[7]=c*p+u*v+h*R,s[2]=f*x+d*_+m*y,s[5]=f*g+d*M+m*w,s[8]=f*p+d*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(r*c-u*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;var Wt=_u,dc=new Wt,Vh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jm(){let i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),i}var re=jm();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Tr===void 0&&(Tr=Vr("canvas")),Tr.width=t.width,Tr.height=t.height;let r=Tr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},t0=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pc(r[o].image)):s.push(pc(r[o]))}else s=pc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var e0=0,mc=new G,tn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,r=pn,s=Xe,o=Fi,a=Mn,l=gn,c=i.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Zs(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=nu;tn.DEFAULT_ANISOTROPY=1;var yu=class yu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,y=(p+1)/2,w=(u+f)/4,R=(h+x)/4,b=(m+g)/4;return M>v&&M>y?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=R/n):v>y?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=b/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=R/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yu.prototype.isVector4=!0;var Re=yu,ga=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new tn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ss=class extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends tn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ba=class Ba{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(n0,t,i0)}lookAt(t,e,n){let r=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),mi.crossVectors(n,fn),mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),mi.crossVectors(n,fn)),mi.normalize(),Io.crossVectors(fn,mi),r[0]=mi.x,r[4]=Io.x,r[8]=fn.x,r[1]=mi.y,r[5]=Io.y,r[9]=fn.y,r[2]=mi.z,r[6]=Io.z,r[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],M=n[7],v=n[11],y=n[15],w=r[0],R=r[4],b=r[8],S=r[12],E=r[1],P=r[5],T=r[9],F=r[13],C=r[2],L=r[6],N=r[10],U=r[14],z=r[3],O=r[7],k=r[11],V=r[15];return s[0]=o*w+a*E+l*C+c*z,s[4]=o*R+a*P+l*L+c*O,s[8]=o*b+a*T+l*N+c*k,s[12]=o*S+a*F+l*U+c*V,s[1]=u*w+h*E+f*C+d*z,s[5]=u*R+h*P+f*L+d*O,s[9]=u*b+h*T+f*N+d*k,s[13]=u*S+h*F+f*U+d*V,s[2]=m*w+x*E+g*C+p*z,s[6]=m*R+x*P+g*L+p*O,s[10]=m*b+x*T+g*N+p*k,s[14]=m*S+x*F+g*U+p*V,s[3]=_*w+M*E+v*C+y*z,s[7]=_*R+M*P+v*L+y*O,s[11]=_*b+M*T+v*N+y*k,s[15]=_*S+M*F+v*U+y*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],_=l*d-c*f,M=a*d-c*h,v=a*f-l*h,y=o*d-c*u,w=o*f-l*u,R=o*h-a*u;return e*(x*_-g*M+p*v)-n*(m*_-g*y+p*w)+r*(m*M-x*y+p*R)-s*(m*v-x*w+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=e*a-n*o,M=e*l-r*o,v=e*c-s*o,y=n*l-r*a,w=n*c-s*a,R=r*c-s*l,b=u*x-h*m,S=u*g-f*m,E=u*p-d*m,P=h*g-f*x,T=h*p-d*x,F=f*p-d*g,C=_*F-M*T+v*P+y*E-w*S+R*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=(a*F-l*T+c*P)*L,t[1]=(r*T-n*F-s*P)*L,t[2]=(x*R-g*w+p*y)*L,t[3]=(f*w-h*R-d*y)*L,t[4]=(l*E-o*F-c*S)*L,t[5]=(e*F-r*E+s*S)*L,t[6]=(g*v-m*R-p*M)*L,t[7]=(u*R-f*v+d*M)*L,t[8]=(o*T-a*E+c*b)*L,t[9]=(n*E-e*T-s*b)*L,t[10]=(m*w-x*v+p*_)*L,t[11]=(h*v-u*w-d*_)*L,t[12]=(a*S-o*P-l*b)*L,t[13]=(e*P-n*S+r*b)*L,t[14]=(x*M-m*y-g*_)*L,t[15]=(u*y-h*M+f*_)*L,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,x=o*u,g=o*h,p=a*h,_=l*c,M=l*u,v=l*h,y=n.x,w=n.y,R=n.z;return r[0]=(1-(x+p))*y,r[1]=(d+v)*y,r[2]=(m-M)*y,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(g+_)*w,r[7]=0,r[8]=(m+M)*R,r[9]=(g-_)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),l=Er.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Cn.copy(this);let c=1/o,u=1/a,h=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Fn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===Fn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ms)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Fn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===Fn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ms)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ba.prototype.isMatrix4=!0;var we=Ba,Er=new G,Cn=new we,n0=new G(0,0,0),i0=new G(1,1,1),mi=new G,Io=new G,fn=new G,Hh=new we,Wh=new Xn,yi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},r0=0,Xh=new G,Ar=new Xn,jn=new we,Lo=new G,ds=new G,s0=new G,o0=new Xn,qh=new G(1,0,0),Yh=new G(0,1,0),$h=new G(0,0,1),Zh={type:"added"},a0={type:"removed"},Rr={type:"childadded",child:null},gc={type:"childremoved",child:null},hn=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new yi,n=new Xn,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Wt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ds,Lo,this.up):jn.lookAt(Lo,ds,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(jn),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a0),gc.child=t,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,s0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,o0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new G(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},l0={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=re.workingColorSpace){if(t=Qm(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xc(o,s,t+1/3),this.g=xc(o,s,t),this.b=xc(o,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=Le){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return re.workingToColorSpace(Ke.copy(this),t),Math.round(se(Ke.r*255,0,255))*65536+Math.round(se(Ke.g*255,0,255))*256+Math.round(se(Ke.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,r=Ke.g,s=Ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Le){re.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,r=Ke.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Fo);let n=hc(gi.h,Fo.h,e),r=hc(gi.s,Fo.s,e),s=hc(gi.l,Fo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new tt;tt.NAMES=ed;var ws=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mi=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new G,ti=new G,bc=new G,ei=new G,Cr=new G,Pr=new G,Jh=new G,vc=new G,_c=new G,yc=new G,Mc=new Re,Sc=new Re,wc=new Re,_i=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Pn.subVectors(t,e),r.cross(Pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Pn.subVectors(r,e),ti.subVectors(n,e),bc.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ti),l=Pn.dot(bc),c=ti.dot(ti),u=ti.dot(bc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Mc.setScalar(0),Sc.setScalar(0),wc.setScalar(0),Mc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,n),wc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Mc,s.x),o.addScaledVector(Sc,s.y),o.addScaledVector(wc,s.z),o}static isFrontFacing(t,e,n,r){return Pn.subVectors(n,e),ti.subVectors(t,e),Pn.cross(ti).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Cr.subVectors(r,n),Pr.subVectors(s,n),vc.subVectors(t,n);let l=Cr.dot(vc),c=Pr.dot(vc);if(l<=0&&c<=0)return e.copy(n);_c.subVectors(t,r);let u=Cr.dot(_c),h=Pr.dot(_c);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Cr,o);yc.subVectors(t,s);let d=Cr.dot(yc),m=Pr.dot(yc);if(m>=0&&d<=m)return e.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Pr,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Jh.subVectors(s,r),a=(h-u)/(h-u+(d-m)),e.copy(r).addScaledVector(Jh,a);let p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},an=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),No.subVectors(this.max,ps),Ir.subVectors(t.a,ps),Lr.subVectors(t.b,ps),Fr.subVectors(t.c,ps),xi.subVectors(Lr,Ir),bi.subVectors(Fr,Lr),Zi.subVectors(Ir,Fr);let e=[0,-xi.z,xi.y,0,-bi.z,bi.y,0,-Zi.z,Zi.y,xi.z,0,-xi.x,bi.z,0,-bi.x,Zi.z,0,-Zi.x,-xi.y,xi.x,0,-bi.y,bi.x,0,-Zi.y,Zi.x,0];return!Tc(e,Ir,Lr,Fr,No)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,Ir,Lr,Fr,No))?!1:(Uo.crossVectors(xi,bi),e=[Uo.x,Uo.y,Uo.z],Tc(e,Ir,Lr,Fr,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new G,new G,new G,new G,new G,new G,new G,new G],In=new G,Do=new an,Ir=new G,Lr=new G,Fr=new G,xi=new G,bi=new G,Zi=new G,ps=new G,No=new G,Uo=new G,Ji=new G;function Tc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ji.fromArray(i,s);let a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ue=new G,Oo=new ee,c0=0,yn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var er=class extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ut=class extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}},u0=new an,ms=new G,Ec=new G,Si=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):u0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ms,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Ec)),this.expandByPoint(ms.copy(t.center).sub(Ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},h0=0,_n=new we,Ac=new hn,Dr=new G,dn=new an,gs=new an,Ve=new G,Yt=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jm(t)?er:Ts)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,gs.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,gs.max),dn.expandByPoint(Ve)):(dn.expandByPoint(gs.min),dn.expandByPoint(gs.max))}dn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ve));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(t,c),Ve.add(Dr)),r=Math.max(r,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new G,l[b]=new G;let c=new G,u=new G,h=new G,f=new ee,d=new ee,m=new ee,x=new G,g=new G;function p(b,S,E){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[b].add(x),a[S].add(x),a[E].add(x),l[b].add(g),l[S].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,S=_.length;b<S;++b){let E=_[b],P=E.start,T=E.count;for(let F=P,C=P+T;F<C;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new G,v=new G,y=new G,w=new G;function R(b){y.fromBufferAttribute(r,b),w.copy(y);let S=a[b];M.copy(S),M.sub(y.multiplyScalar(y.dot(S))).normalize(),v.crossVectors(w,S);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,S=_.length;b<S;++b){let E=_[b],P=E.start,T=E.count;for(let F=P,C=P+T;F<C;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new yn(f,u,h)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rc=new G,f0=new G,d0=new Wt,Ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Rc.subVectors(n,e).cross(f0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Rc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||d0.getNormalMatrix(t),r=this.coplanarPoint(Rc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},p0=0,si=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Ii,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Yc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new G,Cc=new G,Bo=new G,zo=new G,nr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Cc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),zo.copy(this.origin).sub(Cc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=zo.dot(this.direction),l=-zo.dot(Bo),c=zo.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cc).addScaledVector(Bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),r=ii.dot(ii)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),y=Math.abs(c),w=Math.abs(u),R,b,S,E,P,T,F,C,L,N,U,z;if(v>=y&&v>=w?(S=l,T=h,L=m,z=p,l>=0?(R=c,b=u,E=f,P=d,F=x,C=g,N=_,U=M):(R=u,b=c,E=d,P=f,F=g,C=x,N=M,U=_)):y>=w?(S=c,T=f,L=x,z=_,c>=0?(R=u,b=l,E=d,P=h,F=g,C=m,N=M,U=p):(R=l,b=u,E=h,P=d,F=m,C=g,N=p,U=M)):(S=u,T=d,L=g,z=M,u>=0?(R=l,b=c,E=h,P=f,F=m,C=x,N=p,U=_):(R=c,b=l,E=f,P=h,F=x,C=m,N=_,U=p)),S===0)return null;let O=R/S,k=b/S,V=1/S,ot=E-O*T,Z=P-k*T,et=F-O*L,nt=C-k*L,ct=N-O*z,X=U-k*z,$=ct*nt-X*et,rt=ot*X-Z*ct,ft=et*Z-nt*ot;if(r){if($<0||rt<0||ft<0)return null}else if(($<0||rt<0||ft<0)&&($>0||rt>0||ft>0))return null;let ut=$+rt+ft;if(ut===0)return null;let At=V*($*T+rt*L+ft*z);return(ut>0?At<0:At>0)?null:this.at(At/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kh=new we,Ki=new nr,ko=new Si,Qh=new G,Vo=new G,Go=new G,Ho=new G,Pc=new G,Wo=new G,jh=new G,Xo=new G,Gt=class extends hn{constructor(t=new Yt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Pc.fromBufferAttribute(h,t),o?Wo.addScaledVector(Pc,u):Wo.addScaledVector(Pc.sub(e),u))}e.add(Wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(ko.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ko,Qh)===null||Ki.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(Kh.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,y=M;v<y;v+=3){let w=a.getX(v),R=a.getX(v+1),b=a.getX(v+2);r=qo(this,p,t,n,c,u,h,w,R,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);r=qo(this,o,t,n,c,u,h,_,M,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,y=M;v<y;v+=3){let w=v,R=v+1,b=v+2;r=qo(this,p,t,n,c,u,h,w,R,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,M=g+1,v=g+2;r=qo(this,o,t,n,c,u,h,_,M,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function m0(i,t,e,n,r,s,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Pi,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xo);return c<e.near||c>e.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Ho);let u=m0(i,t,e,n,Vo,Go,Ho,jh);if(u){let h=new G;_i.getBarycoord(jh,Vo,Go,Ho,h),r&&(u.uv=_i.getInterpolatedAttribute(r,a,l,c,h,new ee)),s&&(u.uv1=_i.getInterpolatedAttribute(s,a,l,c,h,new ee)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};_i.getNormal(Vo,Go,Ho,f.normal),u.face=f,u.barycoord=h}return u}var ba=class extends tn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Ge,u=Ge,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=new Si,g0=new ee(.5,.5),Yo=new G,Es=class{constructor(t=new Ln,e=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],M=s[13],v=s[14],y=s[15];if(r[0].setComponents(c-o,d-u,p-m,y-_).normalize(),r[1].setComponents(c+o,d+u,p+m,y+_).normalize(),r[2].setComponents(c+a,d+h,p+x,y+M).normalize(),r[3].setComponents(c-a,d-h,p-x,y-M).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,p-g,y-v).normalize();else if(r[4].setComponents(c-l,d-f,p-g,y-v).normalize(),e===Fn)r[5].setComponents(c+l,d+f,p+g,y+v).normalize();else if(e===Ms)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=g0.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Yo.x=r.normal.x>0?t.max.x:t.min.x,Yo.y=r.normal.y>0?t.max.y:t.min.y,Yo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nn=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new G,_a=new G,tf=new we,xs=new nr,$o=new Si,Ic=new G,ef=new G,ya=class extends hn{constructor(t=new Yt,e=new nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)va.fromBufferAttribute(e,r-1),_a.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=va.distanceTo(_a);t.setAttribute("lineDistance",new Ut(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,t.ray.intersectsSphere($o)===!1)return;tf.copy(r).invert(),xs.copy(t.ray).applyMatrix4(tf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),_=u.getX(x+1),M=Zo(this,t,xs,l,p,_,x);M&&e.push(M)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Zo(this,t,xs,l,x,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Zo(this,t,xs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Zo(this,t,xs,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Zo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(va.fromBufferAttribute(a,r),_a.fromBufferAttribute(a,s),e.distanceSqToSegment(va,_a,Ic,ef)>n)return;Ic.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ic);if(!(c<t.near||c>t.far))return{distance:c,point:ef.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var nf=new G,rf=new G,ln=class extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)nf.fromBufferAttribute(e,r),rf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+nf.distanceTo(rf);t.setAttribute("lineDistance",new Ut(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sf=new we,Oc=new nr,Jo=new Si,Ko=new G,qr=class extends hn{constructor(t=new Yt,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,t.ray.intersectsSphere(Jo)===!1)return;sf.copy(r).invert(),Oc.copy(t.ray).applyMatrix4(sf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Ko.fromBufferAttribute(h,g),of(Ko,g,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Ko.fromBufferAttribute(h,m),of(Ko,m,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function of(i,t,e,n,r,s,o){let a=Oc.distanceSqToPoint(i);if(a<e){let l=new G;Oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var As=class extends tn{constructor(t=[],e=Li,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wi=class extends tn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends tn{constructor(t,e,n=Nn,r,s,o,a=Ge,l=Ge,c,u=Hn,h=1){if(u!==Hn&&u!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ma=class extends Ti{constructor(t,e=Nn,n=Li,r,s,o=Ge,a=Ge,l,c=Hn){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rs=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yr=class i extends Yt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,r,o,2),m("x","z","y",1,-1,t,n,-e,r,o,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function m(x,g,p,_,M,v,y,w,R,b,S){let E=v/R,P=y/b,T=v/2,F=y/2,C=w/2,L=R+1,N=b+1,U=0,z=0,O=new G;for(let k=0;k<N;k++){let V=k*P-F;for(let ot=0;ot<L;ot++){let Z=ot*E-T;O[x]=Z*_,O[g]=V*M,O[p]=C,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[p]=w>0?1:-1,u.push(O.x,O.y,O.z),h.push(ot/R),h.push(1-k/b),U+=1}}for(let k=0;k<b;k++)for(let V=0;V<R;V++){let ot=f+V+L*k,Z=f+V+L*(k+1),et=f+(V+1)+L*(k+1),nt=f+(V+1)+L*k;l.push(ot,Z,nt),l.push(Z,et,nt),z+=6}a.addGroup(d,z,S),d+=z,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cs=class i extends Yt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new G,u=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(a,3)),this.setAttribute("uv",new Ut(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function x0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=nd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=M0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ps(s,o,e,a,l,c,0),o}function nd(i,t,e,n,r){let s;if(r===F0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=af(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=af(o/n|0,i[o],i[o+1],s);return s&&$r(s,s.next)&&(Ls(s),s=s.next),s}function rr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,r,s,o){if(!i)return;!o&&s&&A0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?v0(i,n,r,s):b0(i)){t.push(l.i,i.i,c.i),Ls(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=_0(rr(i),t),Ps(i,t,e,n,r,s,2)):o===2&&y0(i,t,e,n,r,s):Ps(rr(i),t,e,n,r,s,1);break}}}function b0(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&bs(r,a,s,l,o,c,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function v0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ae(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),p=Bc(d,m,t,e,n),_=Bc(x,g,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&bs(a,u,l,h,c,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&bs(a,u,l,h,c,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&bs(a,u,l,h,c,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&bs(a,u,l,h,c,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!$r(n,r)&&rd(n,e,e.next,r)&&Is(n,r)&&Is(r,n)&&(t.push(n.i,e.i,r.i),Ls(e),Ls(e.next),e=i=r),e=e.next}while(e!==i);return rr(e)}function y0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&P0(o,a)){let l=sd(o,a);o=rr(o,o.next),l=rr(l,l.next),Ps(o,t,e,n,r,s,0),Ps(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function M0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=nd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(C0(c))}r.sort(S0);for(let s=0;s<r.length;s++)e=w0(r[s],e);return e}function S0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function w0(i,t){let e=T0(i,t);if(!e)return t;let n=sd(e,i);return rr(n,n.next),rr(e,e.next)}function T0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if($r(i,e))return e;do{if($r(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&id(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Is(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&E0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function E0(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function A0(i,t,e,n){let r=i;do r.z===0&&(r.z=Bc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,R0(r)}function R0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Bc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function C0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function id(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function bs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&id(i,t,e,n,r,s,o,a)}function P0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!I0(i,t)&&(Is(i,t)&&Is(t,i)&&L0(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||$r(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){let r=jo(Ae(i,t,e)),s=jo(Ae(i,t,n)),o=jo(Ae(e,n,i)),a=jo(Ae(e,n,t));return!!(r!==s&&o!==a||r===0&&Qo(i,e,t)||s===0&&Qo(i,n,t)||o===0&&Qo(e,i,n)||a===0&&Qo(e,t,n))}function Qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function I0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function L0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sd(i,t){let e=zc(i.i,i.x,i.y),n=zc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function af(i,t,e,n){let r=zc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function F0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var kc=class{static triangulate(t,e,n=2){return x0(t,e,n)}},Fs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];lf(t),cf(n,t);let o=t.length;e.forEach(lf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,cf(n,e[l]);let a=kc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function lf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ei=class i extends Yt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let _=p*f-o;for(let M=0;M<c;M++){let v=M*h-s;m.push(v,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let M=_+c*p,v=_+c*(p+1),y=_+1+c*(p+1),w=_+1+c*p;d.push(M,v,w),d.push(v,y,w)}this.setIndex(d),this.setAttribute("position",new Ut(m,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ds=class i extends Yt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new G,m=new ee;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<r;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,M=_,v=_+n+1,y=_+n+2,w=_+1;a.push(M,v,w),a.push(v,y,w)}}this.setIndex(a),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function ar(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(uf(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(uf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=ar(i[e]);for(let r in n)t[r]=n[r]}return t}function uf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function D0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var od={clone:ar,merge:sn},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=D0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Sa=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wa=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Lc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ai=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ea=class extends Ai{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:s=t,a=2*e-n;break;case Uc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:o=t,l=2*n-e;break;case Uc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,v=d*g-d*x;for(let y=0;y!==a;++y)s[y]=p*o[u+y]+_*o[c+y]+M*o[l+y]+v*o[h+y];return s}},Aa=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ra=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ca=class extends Ai{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(r-e),x=1-m;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*m;return s}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,_=h[p],M=h[p+1],v=t*f+m*2,y=u[v],w=u[v+1],R=B0(n,e,_,y,r);s[m]=ad(R,x,M,w,g)}return s}};function ad(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function O0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function B0(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=ad(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=O0(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var mn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Lc(t.settings)&&(n.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ca(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case na:e=this.InterpolantFactoryMethodSmooth;break;case Fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return na;case this.InterpolantFactoryMethodBezier:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Lc(this.settings)&&(hf(this.settings.inTangents,t),hf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Km(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===na,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Lc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=da;var Ri=class extends mn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=vs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};Pa.prototype.ValueTypeName="color";var Ia=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};Ia.prototype.ValueTypeName="number";var La=class extends Ai{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Xn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ns=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends mn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=vs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends mn{constructor(t,e,n,r){super(t,e,n,r)}};Fa.prototype.ValueTypeName="vector";var ra={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(ff(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!ff(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ff(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Da=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new Da,Zr=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=new WeakMap,Na=class extends Zr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ra.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=Ur.get(o);h===void 0&&(h=[],Ur.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Vr("img");function l(){u(),e&&e(this);let h=Ur.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ur.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),ra.remove(`image:${t}`);let f=Ur.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}Ur.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ra.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Us=class extends Zr{constructor(t){super(t)}load(t,e,n,r){let s=new tn,o=new Na(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var ta=new G,ea=new Xn,Gn=new G,Os=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new G,df=new ee,pf=new ee,Qe=class extends Os{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,df,pf),e.subVectors(pf,df)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qn=class extends Os{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Or=-90,Br=1,Ua=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(Or,Br,t,e);r.layers=this.layers,this.add(r);let s=new Qe(Or,Br,t,e);s.layers=this.layers,this.add(s);let o=new Qe(Or,Br,t,e);o.layers=this.layers,this.add(o);let a=new Qe(Or,Br,t,e);a.layers=this.layers,this.add(a);let l=new Qe(Or,Br,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Or,Br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Oa=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mu="\\[\\]\\.:\\/",z0=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",k0="[^"+mu.replace("\\.","")+"]",V0=/((?:WC+[\/:])*)/.source.replace("WC",gu),G0=/(WCOD+)?/.source.replace("WCOD",k0),H0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),X0=new RegExp("^"+V0+G0+H0+W0+"$"),q0=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let r=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(t){let e=X0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);q0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Vc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LM=new Float32Array(1);var mf=new we,Bs=class{constructor(t,e,n=0,r=1/0){this.ray=new nr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(t,e=!0,n=[]){return Gc(t,this,n,e),n.sort(gf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Gc(t[r],this,n,e);return n.sort(gf),n}};function gf(i,t){return i.distance-t.distance}function Gc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Gc(s[o],t,e,!0)}}var Mu=class Mu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Mu.prototype.isMatrix2=!0;var Hc=Mu;function xu(i,t,e,n){let r=Y0(n);switch(e){case au:return i*t;case cu:return i*t/r.components*r.byteLength;case Xa:return i*t/r.components*r.byteLength;case Ni:return i*t*2/r.components*r.byteLength;case qa:return i*t*2/r.components*r.byteLength;case lu:return i*t*3/r.components*r.byteLength;case Mn:return i*t*4/r.components*r.byteLength;case Ya:return i*t*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case ja:case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case Ys:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case vl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Y0(i){switch(i){case gn:case iu:return{byteLength:1,components:1};case Kr:case ru:case On:return{byteLength:2,components:1};case Ha:case Wa:return{byteLength:2,components:4};case Nn:case Ga:case Un:return{byteLength:4,components:1};case su:case ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pd(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Z0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
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
#endif`,$g=`uniform sampler2D dfgLUT;
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
}`,Zg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ox=`#if defined( USE_POINTS_UV )
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
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,ib=`#if DEPTH_PACKING == 3200
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
}`,rb=`#define DISTANCE
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
}`,sb=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`uniform float scale;
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,hb=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,db=`#define LAMBERT
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
}`,pb=`#define MATCAP
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
}`,mb=`#define MATCAP
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
}`,gb=`#define NORMAL
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
}`,xb=`#define NORMAL
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
}`,bb=`#define PHONG
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
}`,vb=`#define PHONG
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
}`,_b=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,Mb=`#define TOON
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
}`,Sb=`#define TOON
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
}`,wb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,Ab=`uniform vec3 color;
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
}`,Rb=`uniform float rotation;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:J0,alphahash_pars_fragment:K0,alphamap_fragment:Q0,alphamap_pars_fragment:j0,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:rg,batching_vertex:sg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:xg,color_vertex:bg,common:vg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:yg,displacementmap_pars_vertex:Mg,displacementmap_vertex:Sg,emissivemap_fragment:wg,emissivemap_pars_fragment:Tg,colorspace_fragment:Eg,colorspace_pars_fragment:Ag,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Pg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Fg,fog_pars_vertex:Dg,fog_fragment:Ng,fog_pars_fragment:Ug,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:kg,lights_pars_begin:Vg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:Yg,lights_physical_pars_fragment:$g,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Kg,lightprobes_pars_fragment:Qg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:sx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:fx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:xx,normal_vertex:bx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Mx,iridescence_pars_fragment:Sx,opaque_fragment:wx,packing:Tx,premultiplied_alpha_fragment:Ex,project_vertex:Ax,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Fx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Nx,skinbase_vertex:Ux,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:kx,specularmap_pars_fragment:Vx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Hx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:$x,worldpos_vertex:Zx,background_vert:Jx,background_frag:Kx,backgroundCube_vert:Qx,backgroundCube_frag:jx,cube_vert:tb,cube_frag:eb,depth_vert:nb,depth_frag:ib,distance_vert:rb,distance_frag:sb,equirect_vert:ob,equirect_frag:ab,linedashed_vert:lb,linedashed_frag:cb,meshbasic_vert:ub,meshbasic_frag:hb,meshlambert_vert:fb,meshlambert_frag:db,meshmatcap_vert:pb,meshmatcap_frag:mb,meshnormal_vert:gb,meshnormal_frag:xb,meshphong_vert:bb,meshphong_frag:vb,meshphysical_vert:_b,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:Sb,points_vert:wb,points_frag:Tb,shadow_vert:Eb,shadow_frag:Ab,sprite_vert:Rb,sprite_frag:Cb},yt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Zn={basic:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:sn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:sn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:sn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new tt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:sn([yt.points,yt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:sn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:sn([yt.common,yt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:sn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:sn([yt.sprite,yt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:sn([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:sn([yt.lights,yt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Zn.physical={uniforms:sn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var El={r:0,b:0,g:0},Pb=new we,Id=new Wt;Id.set(-1,0,0,0,1,0,0,0,1);function Ib(i,t,e,n,r,s){let o=new tt(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function m(_){let M=!1,v=d(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===Vs)?(c===void 0&&(c=new Gt(new Yr(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ar(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Id),c.material.toneMapped=re.getTransfer(v.colorSpace)!==de,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Gt(new Ei(2,2),new rn({name:"BackgroundMaterial",uniforms:ar(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(El,pu(i)),e.buffers.color.setClear(El.r,El.g,El.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Lb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(P,T,F,C,L){let N=!1,U=h(P,C,F,T);s!==U&&(s=U,c(s.object)),N=d(P,C,F,L),N&&m(P,C,F,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(P,T,F,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,T,F,C){let L=C.wireframe===!0,N=n[T.id];N===void 0&&(N={},n[T.id]=N);let U=P.isInstancedMesh===!0?P.id:0,z=N[U];z===void 0&&(z={},N[U]=z);let O=z[F.id];O===void 0&&(O={},z[F.id]=O);let k=O[L];return k===void 0&&(k=f(l()),O[L]=k),k}function f(P){let T=[],F=[],C=[];for(let L=0;L<e;L++)T[L]=0,F[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:C,object:P,attributes:{},index:null}}function d(P,T,F,C){let L=s.attributes,N=T.attributes,U=0,z=F.getAttributes();for(let O in z)if(z[O].location>=0){let V=L[O],ot=N[O];if(ot===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),V===void 0||V.attribute!==ot||ot&&V.data!==ot.data)return!0;U++}return s.attributesNum!==U||s.index!==C}function m(P,T,F,C){let L={},N=T.attributes,U=0,z=F.getAttributes();for(let O in z)if(z[O].location>=0){let V=N[O];V===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(V=P.instanceColor));let ot={};ot.attribute=V,V&&V.data&&(ot.data=V.data),L[O]=ot,U++}s.attributes=L,s.attributesNum=U,s.index=C}function x(){let P=s.newAttributes;for(let T=0,F=P.length;T<F;T++)P[T]=0}function g(P){p(P,0)}function p(P,T){let F=s.newAttributes,C=s.enabledAttributes,L=s.attributeDivisors;F[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),L[P]!==T&&(i.vertexAttribDivisor(P,T),L[P]=T)}function _(){let P=s.newAttributes,T=s.enabledAttributes;for(let F=0,C=T.length;F<C;F++)T[F]!==P[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function M(P,T,F,C,L,N,U){U===!0?i.vertexAttribIPointer(P,T,F,L,N):i.vertexAttribPointer(P,T,F,C,L,N)}function v(P,T,F,C){x();let L=C.attributes,N=F.getAttributes(),U=T.defaultAttributeValues;for(let z in N){let O=N[z];if(O.location>=0){let k=L[z];if(k===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){let V=k.normalized,ot=k.itemSize,Z=t.get(k);if(Z===void 0)continue;let et=Z.buffer,nt=Z.type,ct=Z.bytesPerElement,X=nt===i.INT||nt===i.UNSIGNED_INT||k.gpuType===Ga;if(k.isInterleavedBufferAttribute){let $=k.data,rt=$.stride,ft=k.offset;if($.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut,$.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<O.locationSize;ut++)g(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ut=0;ut<O.locationSize;ut++)M(O.location+ut,ot/O.locationSize,nt,V,rt*ct,(ft+ot/O.locationSize*ut)*ct,X)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)p(O.location+$,k.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<O.locationSize;$++)g(O.location+$);i.bindBuffer(i.ARRAY_BUFFER,et);for(let $=0;$<O.locationSize;$++)M(O.location+$,ot/O.locationSize,nt,V,ot*ct,ot/O.locationSize*$*ct,X)}}else if(U!==void 0){let V=U[z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(O.location,V);break;case 3:i.vertexAttrib3fv(O.location,V);break;case 4:i.vertexAttrib4fv(O.location,V);break;default:i.vertexAttrib1fv(O.location,V)}}}}_()}function y(){S();for(let P in n){let T=n[P];for(let F in T){let C=T[F];for(let L in C){let N=C[L];for(let U in N)u(N[U].object),delete N[U];delete C[L]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let T=n[P.id];for(let F in T){let C=T[F];for(let L in C){let N=C[L];for(let U in N)u(N[U].object),delete N[U];delete C[L]}}delete n[P.id]}function R(P){for(let T in n){let F=n[T];for(let C in F){let L=F[C];if(L[P.id]===void 0)continue;let N=L[P.id];for(let U in N)u(N[U].object),delete N[U];delete L[P.id]}}}function b(P){for(let T in n){let F=n[T],C=P.isInstancedMesh===!0?P.id:0,L=F[C];if(L!==void 0){for(let N in L){let U=L[N];for(let z in U)u(U[z].object),delete U[z];delete L[N]}delete F[C],Object.keys(F).length===0&&delete n[T]}}}function S(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Fb(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Db(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let b=R===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gn&&R!==Un&&!b&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:w}}function Nb(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ln,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{let _=s?0:n,M=_*4,v=p.clippingState||null;l.value=v,v=u(m,f,M,d);for(let y=0;y!==M;++y)v[y]=e[y];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var ts=4,Ub=6,Ob=20,Bb=256,Js=new qn,cd=new tt,Su=null,wu=0,Tu=0,Eu=!1,zb=new G,lr=new G,Rl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=zb}=s;Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Su,wu,Tu),this._renderer.xr.enabled=Eu,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:On,format:Mn,colorSpace:_s,depthBuffer:!1},r=ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kb(s)),this._blurMaterial=Gb(s,t,e),this._ggxMaterial=Vb(s,t,e)}return r}_compileMaterial(t){let e=new Gt(new Yt,t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(cd),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Yr,new le({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(cd),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));let y=this._cubeSize;jr(r,v*y,M>2?y:0,y,y),h.setRenderTarget(r),p&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Li||t.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-ts?n-m+ts:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,jr(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,jr(t,g,p,3*x,2*x),r.setRenderTarget(t),r.render(a,Js)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-ts?r-this._lodMax+ts:0),f=4*(this._cubeSize-u);jr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Js)}};function kb(i){let t=[],e=[],n=i,r=i-ts+1+Ub;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let _=p%3*2/3-1,M=p>2?0:-1,v=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];m.set(v,d*f*p);for(let y=0;y<f;y++){let w=u[y*2]*2-1,R=u[y*2+1]*2-1;p===0?lr.set(1,R,w):p===1?lr.set(-w,1,-R):p===2?lr.set(-w,R,1):p===3?lr.set(-1,R,-w):p===4?lr.set(-w,-1,R):lr.set(w,R,-1),lr.toArray(x,(p*f+y)*d)}}let g=new Yt;g.setAttribute("position",new yn(m,d)),g.setAttribute("outputDirection",new yn(x,d)),e.push(new Gt(g,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function ud(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Vb(i,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Gb(i,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ob,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function hd(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function fd(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cl=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new As(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yr(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Yn});s.uniforms.tEquirect.value=e;let o=new Gt(r,s),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Xe),new Ua(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Hb(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===za||d===ka)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Cl(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===za||d===ka,x=d===Li||d===or;if(m||x){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Rl(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Rl(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===za?f.mapping=Li:d===ka&&(f.mapping=or),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Wb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function Xb(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,v=_.length;M<v;M+=3){let y=_[M+0],w=_[M+1],R=_[M+2];f.push(y,w,w,R,R,y)}}else{let _=m.array;x=m.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let y=M+0,w=M+1,R=M+2;f.push(y,w,w,R,R,y)}}let g=new(m.count>=65535?er:Ts)(f,1);g.version=x;let p=s.get(h);p&&t.remove(p),s.set(h,g)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qb(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Yb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $b(i,t,e){let n=new WeakMap,r=new Re;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*y*4*h),R=new Ss(w,v,y,h);R.type=Un,R.needsUpdate=!0;let b=M*4;for(let E=0;E<h;E++){let P=g[E],T=p[E],F=_[E],C=v*y*4*E;for(let L=0;L<P.count;L++){let N=L*b;d===!0&&(r.fromBufferAttribute(P,L),w[C+N+0]=r.x,w[C+N+1]=r.y,w[C+N+2]=r.z,w[C+N+3]=0),m===!0&&(r.fromBufferAttribute(T,L),w[C+N+4]=r.x,w[C+N+5]=r.y,w[C+N+6]=r.z,w[C+N+7]=0),x===!0&&(r.fromBufferAttribute(F,L),w[C+N+8]=r.x,w[C+N+9]=r.y,w[C+N+10]=r.z,w[C+N+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new ee(v,y)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Zb(i,t,e,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Jb={[Zc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[tu]:"AGX_TONE_MAPPING",[eu]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function Kb(i,t,e,n,r,s){let o=new en(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Yt;c.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ut([0,2,0,0,2,0],2));let u=new Sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(c,u),f=new qn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],M=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let w=0;w<_.length;w++){let R=_[w];R.setSize&&R.setSize(v,y)}},this.setEffects=function(v){_=v,M=_.length>0&&_[0].isRenderPass===!0;let y=o.width,w=o.height;_.length>0&&a===null&&(a=new en(y,w,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new en(y,w,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){let b=_[R];b.setSize&&b.setSize(y,w)}},this.begin=function(v,y){if(x||v.toneMapping===Dn&&_.length===0)return!1;if(p=y,y!==null){let w=y.width,R=y.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return M===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return M},this.end=function(v,y){v.toneMapping=g,x=!0;let w=o,R=a;for(let b=0;b<_.length;b++){let S=_[b];S.enabled!==!1&&(S.render(v,R,w,y),S.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,u.defines={},re.getTransfer(d)===de&&(u.defines.SRGB_TRANSFER="");let b=Jb[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Ld=new tn,Cu=new Ti(1,1),Fd=new Ss,Dd=new xa,Nd=new As,dd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=dd[r];if(s===void 0&&(s=new Float32Array(r),dd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Il(i,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function nv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),ze(e,n)}}function iv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),ze(e,n)}}function rv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),ze(e,n)}}function sv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function dv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Cu.compareFunction=e.isReversedDepthBuffer()?Tl:wl,s=Cu):s=Ld,e.setTexture2D(t||s,r)}function pv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Dd,r)}function mv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Nd,r)}function gv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fd,r)}function xv(i){switch(i){case 5126:return Qb;case 35664:return jb;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function bv(i,t){i.uniform1fv(this.addr,t)}function vv(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function _v(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function yv(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Mv(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sv(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wv(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tv(i,t){i.uniform1iv(this.addr,t)}function Ev(i,t){i.uniform2iv(this.addr,t)}function Av(i,t){i.uniform3iv(this.addr,t)}function Rv(i,t){i.uniform4iv(this.addr,t)}function Cv(i,t){i.uniform1uiv(this.addr,t)}function Pv(i,t){i.uniform2uiv(this.addr,t)}function Iv(i,t){i.uniform3uiv(this.addr,t)}function Lv(i,t){i.uniform4uiv(this.addr,t)}function Fv(i,t,e){let n=this.cache,r=t.length,s=Il(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cu:o=Ld;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Dv(i,t,e){let n=this.cache,r=t.length,s=Il(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Dd,s[o])}function Nv(i,t,e){let n=this.cache,r=t.length,s=Il(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Nd,s[o])}function Uv(i,t,e){let n=this.cache,r=t.length,s=Il(e,r);Be(n,s)||(i.uniform1iv(this.addr,s),ze(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Fd,s[o])}function Ov(i){switch(i){case 5126:return bv;case 35664:return vv;case 35665:return _v;case 35666:return yv;case 35674:return Mv;case 35675:return Sv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Iv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}var Pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xv(e.type)}},Iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ov(e.type)}},Lu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Au=/(\w+)(\])?(\[|\.)?/g;function bd(i,t){i.seq.push(t),i.map[t.id]=t}function Bv(i,t,e){let n=i.name,r=n.length;for(Au.lastIndex=0;;){let s=Au.exec(n),o=Au.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bd(e,c===void 0?new Pu(a,i,t):new Iu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Lu(a),bd(e,h)),e=h}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Bv(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function vd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zv=37297,kv=0;function Vv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _d=new Wt;function Gv(i){re._getMatrix(_d,re.workingColorSpace,i);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Vv(i.getShaderSource(t),a)}else return s}function Hv(i,t){let e=Gv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wv={[Zc]:"Linear",[Jc]:"Reinhard",[Kc]:"Cineon",[Qc]:"ACESFilmic",[tu]:"AgX",[eu]:"Neutral",[jc]:"Custom"};function Xv(i,t){let e=Wv[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new G;function qv(){re.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function $v(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function Md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(Jv,Qv)}var Kv=new Map;function Qv(i,t){let e=jt[t];if(e===void 0){let n=Kv.get(t);if(n!==void 0)e=jt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fu(e)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(jv,t_)}function t_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Td(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var e_={[zs]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function n_(i){return e_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i_={[Li]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function r_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var s_={[or]:"ENVMAP_MODE_REFRACTION"};function o_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[$c]:"ENVMAP_BLENDING_MULTIPLY",[Bf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function l_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a_[i.combine]||"ENVMAP_BLENDING_NONE"}function c_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function u_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=n_(e),c=r_(e),u=o_(e),h=l_(e),f=c_(e),d=Yv(e),m=$v(s),x=r.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(g=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Hv("linearToOutputTexel",e.outputColorSpace),qv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Fu(o),o=Md(o,e),o=Sd(o,e),a=Fu(a),a=Md(a,e),a=Sd(a,e),o=wd(o),a=wd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+g+o,v=_+p+a,y=vd(r,r.VERTEX_SHADER,M),w=vd(r,r.FRAGMENT_SHADER,v);r.attachShader(x,y),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let T=r.getProgramInfoLog(x)||"",F=r.getShaderInfoLog(y)||"",C=r.getShaderInfoLog(w)||"",L=T.trim(),N=F.trim(),U=C.trim(),z=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,y,w);else{let k=yd(r,y,"vertex"),V=yd(r,w,"fragment");zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+k+`
`+V)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(N===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:z,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}r.deleteShader(y),r.deleteShader(w),b=new es(r,x),S=Zv(r,x)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,zv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}var h_=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nu(t),e.set(t,n)),n}},Nu=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function f_(i){return i===Ni||i===Ys||i===$s}function d_(i,t,e,n,r,s){let o=new Wr,a=new Du,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,E,P,T,F){let C=P.fog,L=T.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=t.get(b.envMap||N,U),O=z&&z.mapping===Vs?z.image.height:null,k=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Bt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ot=V!==void 0?V.length:0,Z=0;L.morphAttributes.position!==void 0&&(Z=1),L.morphAttributes.normal!==void 0&&(Z=2),L.morphAttributes.color!==void 0&&(Z=3);let et,nt,ct,X;if(k){let _e=Zn[k];et=_e.vertexShader,nt=_e.fragmentShader}else{et=b.vertexShader,nt=b.fragmentShader;let _e=a.getVertexShaderStage(b),he=a.getFragmentShaderStage(b);a.update(b,_e,he),ct=_e.id,X=he.id}let $=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ft=T.isInstancedMesh===!0,ut=T.isBatchedMesh===!0,At=!!b.map,Ht=!!b.matcap,Rt=!!z,kt=!!b.aoMap,Kt=!!b.lightMap,$t=!!b.bumpMap&&b.wireframe===!1,pe=!!b.normalMap,Pe=!!b.displacementMap,Oe=!!b.emissiveMap,Ee=!!b.metalnessMap,De=!!b.roughnessMap,q=b.anisotropy>0,$e=b.clearcoat>0,me=b.dispersion>0,B=b.retroreflectivity>0,A=b.iridescence>0,Y=b.sheen>0,Q=b.transmission>0,it=q&&!!b.anisotropyMap,pt=$e&&!!b.clearcoatMap,mt=$e&&!!b.clearcoatNormalMap,st=$e&&!!b.clearcoatRoughnessMap,lt=A&&!!b.iridescenceMap,gt=A&&!!b.iridescenceThicknessMap,Ft=Y&&!!b.sheenColorMap,_t=Y&&!!b.sheenRoughnessMap,xt=!!b.specularMap,Dt=!!b.specularColorMap,Ot=!!b.specularIntensityMap,Zt=Q&&!!b.transmissionMap,W=Q&&!!b.thicknessMap,bt=!!b.gradientMap,at=!!b.alphaMap,vt=b.alphaTest>0,wt=!!b.alphaHash,ht=!!b.extensions,Nt=Dn;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let It={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:et,fragmentShader:nt,defines:b.defines,customVertexShaderID:ct,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ut,batchingColor:ut&&T._colorsTexture!==null,instancing:ft,instancingColor:ft&&T.instanceColor!==null,instancingMorph:ft&&T.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:Ht,envMap:Rt,envMapMode:Rt&&z.mapping,envMapCubeUVHeight:O,aoMap:kt,lightMap:Kt,bumpMap:$t,normalMap:pe,displacementMap:Pe,emissiveMap:Oe,normalMapObjectSpace:pe&&b.normalMapType===Gf,normalMapTangentSpace:pe&&b.normalMapType===uu,packedNormalMap:pe&&b.normalMapType===uu&&f_(b.normalMap.format),metalnessMap:Ee,roughnessMap:De,anisotropy:q,anisotropyMap:it,clearcoat:$e,clearcoatMap:pt,clearcoatNormalMap:mt,clearcoatRoughnessMap:st,dispersion:me,retroreflection:B,iridescence:A,iridescenceMap:lt,iridescenceThicknessMap:gt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Dt,specularIntensityMap:Ot,transmission:Q,transmissionMap:Zt,thicknessMap:W,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Ii&&b.alphaToCoverage===!1,alphaMap:at,alphaTest:vt,alphaHash:wt,combine:b.combine,mapUv:At&&m(b.map.channel),aoMapUv:kt&&m(b.aoMap.channel),lightMapUv:Kt&&m(b.lightMap.channel),bumpMapUv:$t&&m(b.bumpMap.channel),normalMapUv:pe&&m(b.normalMap.channel),displacementMapUv:Pe&&m(b.displacementMap.channel),emissiveMapUv:Oe&&m(b.emissiveMap.channel),metalnessMapUv:Ee&&m(b.metalnessMap.channel),roughnessMapUv:De&&m(b.roughnessMap.channel),anisotropyMapUv:it&&m(b.anisotropyMap.channel),clearcoatMapUv:pt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(b.sheenRoughnessMap.channel),specularMapUv:xt&&m(b.specularMap.channel),specularColorMapUv:Dt&&m(b.specularColorMap.channel),specularIntensityMapUv:Ot&&m(b.specularIntensityMap.channel),transmissionMapUv:Zt&&m(b.transmissionMap.channel),thicknessMapUv:W&&m(b.thicknessMap.channel),alphaMapUv:at&&m(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pe||q),vertexNormals:!!L.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!L.attributes.uv&&(At||at),fog:!!C,useFog:b.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&pe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xe,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)S.push(E),S.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(p(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function p(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function M(b){let S=d[b.type],E;if(S){let P=Zn[S];E=od.clone(P.uniforms)}else E=b.uniforms;return E}function v(b,S){let E=u.get(S);return E!==void 0?++E.usedTimes:(E=new u_(i,S,b,r),c.push(E),u.set(S,E)),E}function y(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:R}}function p_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function m_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ed(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ad(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=p),t++,_}function l(f,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let M=a(f,d,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?r.push(M):e.push(M)}function c(f,d,m,x,g,p){let _=a(f,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(f,d){e.length>1&&e.sort(f||m_),n.length>1&&n.sort(d||Ed),r.length>1&&r.sort(d||Ed)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function g_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Ad,i.set(n,[o])):r>=s.length?(o=new Ad,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new tt};break;case"SpotLight":e={position:new G,direction:new G,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var v_=0;function __(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y_(i){let t=new x_,e=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let r=new G,s=new we,o=new we;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,M=0,v=0,y=0,w=0,R=0,b=0,S=0,E=0;c.sort(__);for(let T=0,F=c.length;T<F;T++){let C=c[T],L=C.color,N=C.intensity,U=C.distance,z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ni?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],N);E++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[m]=V,n.sunShadowMap[m]=z;let ot=k.getViewportCount();for(let Z=0;Z<ot;Z++)n.sunShadowMatrix[x+Z]=k.getMatrix(Z),n.sunShadowCascade[x+Z]=k._cascadeData[Z];x+=ot,m++}n.sun[d]=O,d++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=C.shadow.matrix,y++}n.directional[g]=O,g++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(L).multiplyScalar(N),O.distance=U,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;let k=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,k.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[_]=k.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=z,R++}_++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(L).multiplyScalar(N),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=O,M++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let k=C.shadow,V=e.get(C);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=C.shadow.matrix,w++}n.point[p]=O,p++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(N),O.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[v]=O,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==R||P.numSpotMaps!==b||P.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=R,P.numSpotMaps=b,P.numLightProbes=E,n.version=v_++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let y=n.sun[h];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(v.isSpotLight){let y=n.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Rd(i){let t=new y_(i),e=[],n=[],r=[];function s(f){h.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function M_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Rd(i),t.set(r,[a])):s>=o.length?(a=new Rd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`,T_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],E_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Cd=new we,Ks=new G,Ru=new G;function A_(i,t,e){let n=new Es,r=new ee,s=new ee,o=new Re,a=new wa,l=new Ta,c={},u=e.maxTextureSize,h={[Pi]:cn,[cn]:Pi,[xe]:xe},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:S_,fragmentShader:w_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Yt;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Gt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let p=this.type;this.render=function(w,R,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===vf&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Yn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let F=p!==this.type;F&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=w.length;C<L;C++){let N=w[C],U=N.shadow;if(U===void 0){Bt("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let z=U.getFrameExtents();r.multiply(z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,U.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Jr){if(N.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new en(r.x,r.y,{format:Ni,type:On,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new Ti(r.x,r.y,Un),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Hn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge}else N.isPointLight?(U.map=new Cl(r.x),U.map.depthTexture=new Ma(r.x,Nn)):(U.map=new en(r.x,r.y),U.map.depthTexture=new Ti(r.x,r.y,Nn)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Hn,this.type===zs?(U.map.depthTexture.compareFunction=O?Tl:wl,U.map.depthTexture.minFilter=Xe,U.map.depthTexture.magFilter=Xe):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);let k=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,b);for(let V=0;V<k;V++){let ot=U.getCamera(V);if(N.isPointLight){let Z=U.camera,et=U.matrix,nt=N.distance||Z.far;nt!==Z.far&&(Z.far=nt,Z.updateProjectionMatrix()),Ks.setFromMatrixPosition(N.matrixWorld),Z.position.copy(Ks),Ru.copy(Z.position),Ru.add(T_[V]),Z.up.copy(E_[V]),Z.lookAt(Ru),Z.updateMatrixWorld(),et.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Cd.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Cd,Z.coordinateSystem,Z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,V),i.clear();else{V===0&&(i.setRenderTarget(U.map),i.clear());let Z=U.getViewport(V);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),T.viewport(o)}n=U.getFrustum(V),v(R,b,ot,N,this.type)}U.isPointLightShadow!==!0&&this.type===Jr&&_(U,b),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,P)};function _(w,R){let b=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(r.x,r.y,{format:Ni,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,b,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,b,d,x,null)}function M(w,R,b,S){let E=null,P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let T=E.uuid,F=R.uuid,C=c[T];C===void 0&&(C={},c[T]=C);let L=C[F];L===void 0&&(L=E.clone(),C[F]=L,R.addEventListener("dispose",y)),E=L}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Jr?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let T=i.properties.get(E);T.light=b}return E}function v(w,R,b,S,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Jr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let F=t.update(w),C=w.material;if(Array.isArray(C)){let L=F.groups;for(let N=0,U=L.length;N<U;N++){let z=L[N],O=C[z.materialIndex];if(O&&O.visible){let k=M(w,O,S,E);w.onBeforeShadow(i,w,R,b,F,k,z),i.renderBufferDirect(b,null,F,k,w,z),w.onAfterShadow(i,w,R,b,F,k,z)}}}else if(C.visible){let L=M(w,C,S,E);w.onBeforeShadow(i,w,R,b,F,L,null),i.renderBufferDirect(b,null,F,L,w,null),w.onAfterShadow(i,w,R,b,F,L,null)}}let T=w.children;for(let F=0,C=T.length;F<C;F++)v(T[F],R,b,S,E)}function y(w){w.target.removeEventListener("dispose",y);for(let b in c){let S=c[b],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function R_(i,t){function e(){let W=!1,bt=new Re,at=null,vt=new Re(0,0,0,0);return{setMask:function(wt){at!==wt&&!W&&(i.colorMask(wt,wt,wt,wt),at=wt)},setLocked:function(wt){W=wt},setClear:function(wt,ht,Nt,It,_e){_e===!0&&(wt*=It,ht*=It,Nt*=It),bt.set(wt,ht,Nt,It),vt.equals(bt)===!1&&(i.clearColor(wt,ht,Nt,It),vt.copy(bt))},reset:function(){W=!1,at=null,vt.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,at=null,vt=null,wt=null;return{setReversed:function(ht){if(bt!==ht){let Nt=t.get("EXT_clip_control");ht?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),bt=ht;let It=wt;wt=null,this.setClear(It)}},getReversed:function(){return bt},setTest:function(ht){ht?$(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ht){at!==ht&&!W&&(i.depthMask(ht),at=ht)},setFunc:function(ht){if(bt&&(ht=td[ht]),vt!==ht){switch(ht){case sa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ht}},setLocked:function(ht){W=ht},setClear:function(ht){wt!==ht&&(wt=ht,bt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){W=!1,at=null,vt=null,wt=null,bt=!1}}}function r(){let W=!1,bt=null,at=null,vt=null,wt=null,ht=null,Nt=null,It=null,_e=null;return{setTest:function(he){W||(he?$(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(he){bt!==he&&!W&&(i.stencilMask(he),bt=he)},setFunc:function(he,Rn,kn){(at!==he||vt!==Rn||wt!==kn)&&(i.stencilFunc(he,Rn,kn),at=he,vt=Rn,wt=kn)},setOp:function(he,Rn,kn){(ht!==he||Nt!==Rn||It!==kn)&&(i.stencilOp(he,Rn,kn),ht=he,Nt=Rn,It=kn)},setLocked:function(he){W=he},setClear:function(he){_e!==he&&(i.clearStencil(he),_e=he)},reset:function(){W=!1,bt=null,at=null,vt=null,wt=null,ht=null,Nt=null,It=null,_e=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,v=null,y=null,w=null,R=null,b=new tt(0,0,0),S=0,E=!1,P=null,T=null,F=null,C=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=z>=2);let k=null,V={},ot=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),et=new Re().fromArray(ot),nt=new Re().fromArray(Z);function ct(W,bt,at,vt){let wt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(W,ht),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<at;Nt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(bt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ht}let X={};X[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(kr),$t(!1),pe(Wc),$(i.CULL_FACE),kt(Yn);function $(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function rt(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function ft(W,bt){return f[W]!==bt?(i.bindFramebuffer(W,bt),f[W]=bt,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=bt),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function ut(W,bt){let at=m,vt=!1;if(W){at=d.get(bt),at===void 0&&(at=[],d.set(bt,at));let wt=W.textures;if(at.length!==wt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Nt=wt.length;ht<Nt;ht++)at[ht]=i.COLOR_ATTACHMENT0+ht;at.length=wt.length,vt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,vt=!0);vt&&i.drawBuffers(at)}function At(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let Ht={[sr]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[Mf]:i.FUNC_REVERSE_SUBTRACT};Ht[Sf]=i.MIN,Ht[wf]=i.MAX;let Rt={[Tf]:i.ZERO,[Ef]:i.ONE,[Af]:i.SRC_COLOR,[qc]:i.SRC_ALPHA,[Ff]:i.SRC_ALPHA_SATURATE,[If]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Yc]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Df]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Of]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(W,bt,at,vt,wt,ht,Nt,It,_e,he){if(W===Yn){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),W!==_f){if(W!==p||he!==E){if((_!==sr||y!==sr)&&(i.blendEquation(i.FUNC_ADD),_=sr,y=sr),he)switch(W){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ks:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ce:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ks:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",W);break}M=null,v=null,w=null,R=null,b.set(0,0,0),S=0,p=W,E=he}return}wt=wt||bt,ht=ht||at,Nt=Nt||vt,(bt!==_||wt!==y)&&(i.blendEquationSeparate(Ht[bt],Ht[wt]),_=bt,y=wt),(at!==M||vt!==v||ht!==w||Nt!==R)&&(i.blendFuncSeparate(Rt[at],Rt[vt],Rt[ht],Rt[Nt]),M=at,v=vt,w=ht,R=Nt),(It.equals(b)===!1||_e!==S)&&(i.blendColor(It.r,It.g,It.b,_e),b.copy(It),S=_e),p=W,E=!1}function Kt(W,bt){W.side===xe?rt(i.CULL_FACE):$(i.CULL_FACE);let at=W.side===cn;bt&&(at=!at),$t(at),W.blending===Ii&&W.transparent===!1?kt(Yn):kt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);let vt=W.stencilWrite;a.setTest(vt),vt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Oe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function pe(W){W!==xf?($(i.CULL_FACE),W!==T&&(W===Wc?i.cullFace(i.BACK):W===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),T=W}function Pe(W){W!==F&&(U&&i.lineWidth(W),F=W)}function Oe(W,bt,at){W?($(i.POLYGON_OFFSET_FILL),(C!==bt||L!==at)&&(C=bt,L=at,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,at))):rt(i.POLYGON_OFFSET_FILL)}function Ee(W){W?$(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function De(W){W===void 0&&(W=i.TEXTURE0+N-1),k!==W&&(i.activeTexture(W),k=W)}function q(W,bt,at){at===void 0&&(k===null?at=i.TEXTURE0+N-1:at=k);let vt=V[at];vt===void 0&&(vt={type:void 0,texture:void 0},V[at]=vt),(vt.type!==W||vt.texture!==bt)&&(k!==at&&(i.activeTexture(at),k=at),i.bindTexture(W,bt||X[W]),vt.type=W,vt.texture=bt)}function $e(){let W=V[k];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function A(){try{i.texSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function pt(){try{i.texStorage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function mt(){try{i.texStorage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function st(){try{i.texImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function lt(){try{i.texImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function gt(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Ft(W,bt){h[W]!==bt&&(i.pixelStorei(W,bt),h[W]=bt)}function _t(W){et.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),et.copy(W))}function xt(W){nt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),nt.copy(W))}function Dt(W,bt){let at=c.get(bt);at===void 0&&(at=new WeakMap,c.set(bt,at));let vt=at.get(W);vt===void 0&&(vt=i.getUniformBlockIndex(bt,W.name),at.set(W,vt))}function Ot(W,bt){let vt=c.get(bt).get(W);l.get(bt)!==vt&&(i.uniformBlockBinding(bt,vt,W.__bindingPointIndex),l.set(bt,vt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},k=null,V={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,v=null,y=null,w=null,R=null,b=new tt(0,0,0),S=0,E=!1,P=null,T=null,F=null,C=null,L=null,et.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:rt,bindFramebuffer:ft,drawBuffers:ut,useProgram:At,setBlending:kt,setMaterial:Kt,setFlipSided:$t,setCullFace:pe,setLineWidth:Pe,setPolygonOffset:Oe,setScissorTest:Ee,activeTexture:De,bindTexture:q,unbindTexture:$e,compressedTexImage2D:me,compressedTexImage3D:B,texImage2D:st,texImage3D:lt,pixelStorei:Ft,getParameter:gt,updateUBOMapping:Dt,uniformBlockBinding:Ot,texStorage2D:pt,texStorage3D:mt,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:Q,compressedTexSubImage3D:it,scissor:_t,viewport:xt,reset:Zt}}function C_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,A){return m?new OffscreenCanvas(B,A):Vr("canvas")}function g(B,A,Y){let Q=1,it=me(B);if((it.width>Y||it.height>Y)&&(Q=Y/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let pt=Math.floor(Q*it.width),mt=Math.floor(Q*it.height);f===void 0&&(f=x(pt,mt));let st=A?x(pt,mt):f;return st.width=pt,st.height=mt,st.getContext("2d").drawImage(B,0,0,pt,mt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+mt+")."),st}else return"data"in B&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),B;return B}function p(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function M(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,A,Y,Q,it,pt=!1){if(B!==null){if(i[B]!==void 0)return i[B];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let mt;Q&&(mt=t.get("EXT_texture_norm16"),mt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=A;if(A===i.RED&&(Y===i.FLOAT&&(st=i.R32F),Y===i.HALF_FLOAT&&(st=i.R16F),Y===i.UNSIGNED_BYTE&&(st=i.R8),Y===i.UNSIGNED_SHORT&&mt&&(st=mt.R16_EXT),Y===i.SHORT&&mt&&(st=mt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.R8UI),Y===i.UNSIGNED_SHORT&&(st=i.R16UI),Y===i.UNSIGNED_INT&&(st=i.R32UI),Y===i.BYTE&&(st=i.R8I),Y===i.SHORT&&(st=i.R16I),Y===i.INT&&(st=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(st=i.RG32F),Y===i.HALF_FLOAT&&(st=i.RG16F),Y===i.UNSIGNED_BYTE&&(st=i.RG8),Y===i.UNSIGNED_SHORT&&mt&&(st=mt.RG16_EXT),Y===i.SHORT&&mt&&(st=mt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RG8UI),Y===i.UNSIGNED_SHORT&&(st=i.RG16UI),Y===i.UNSIGNED_INT&&(st=i.RG32UI),Y===i.BYTE&&(st=i.RG8I),Y===i.SHORT&&(st=i.RG16I),Y===i.INT&&(st=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Y===i.UNSIGNED_INT&&(st=i.RGB32UI),Y===i.BYTE&&(st=i.RGB8I),Y===i.SHORT&&(st=i.RGB16I),Y===i.INT&&(st=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Y===i.UNSIGNED_INT&&(st=i.RGBA32UI),Y===i.BYTE&&(st=i.RGBA8I),Y===i.SHORT&&(st=i.RGBA16I),Y===i.INT&&(st=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&mt&&(st=mt.RGB16_EXT),Y===i.SHORT&&mt&&(st=mt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),A===i.RGBA){let lt=pt?ys:re.getTransfer(it);Y===i.FLOAT&&(st=i.RGBA32F),Y===i.HALF_FLOAT&&(st=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(st=lt===de?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&mt&&(st=mt.RGBA16_EXT),Y===i.SHORT&&mt&&(st=mt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function y(B,A){let Y;return B?A===null||A===Nn||A===Qr?Y=i.DEPTH24_STENCIL8:A===Un?Y=i.DEPTH32F_STENCIL8:A===Kr&&(Y=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Nn||A===Qr?Y=i.DEPTH_COMPONENT24:A===Un?Y=i.DEPTH_COMPONENT32F:A===Kr&&(Y=i.DEPTH_COMPONENT16),Y}function w(B,A){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ge&&B.minFilter!==Xe?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function R(B){let A=B.target;A.removeEventListener("dispose",R),S(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function b(B){let A=B.target;A.removeEventListener("dispose",b),P(A)}function S(B){let A=n.get(B);if(A.__webglInit===void 0)return;let Y=B.source,Q=d.get(Y);if(Q){let it=Q[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(B),Object.keys(Q).length===0&&d.delete(Y)}n.remove(B)}function E(B){let A=n.get(B);i.deleteTexture(A.__webglTexture);let Y=B.source,Q=d.get(Y);delete Q[A.__cacheKey],o.memory.textures--}function P(B){let A=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let it=0;it<A.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(A.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=B.textures;for(let Q=0,it=Y.length;Q<it;Q++){let pt=n.get(Y[Q]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(Y[Q])}n.remove(B)}let T=0;function F(){T=0}function C(){return T}function L(B){T=B}function N(){let B=T;return B>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),T+=1,B}function U(B){let A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function z(B,A){let Y=n.get(B);if(B.isVideoTexture&&q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Y.__version!==B.version){let Q=B.image;if(Q===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Y,B,A);return}}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function O(B,A){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){rt(Y,B,A);return}else B.isExternalTexture&&(Y.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function k(B,A){let Y=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Y.__version!==B.version){rt(Y,B,A);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function V(B,A){let Y=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Y.__version!==B.version){ft(Y,B,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}let ot={[tr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},Z={[Ge]:i.NEAREST,[kf]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},et={[Wf]:i.NEVER,[Zf]:i.ALWAYS,[Xf]:i.LESS,[wl]:i.LEQUAL,[qf]:i.EQUAL,[Tl]:i.GEQUAL,[Yf]:i.GREATER,[$f]:i.NOTEQUAL};function nt(B,A){if(A.type===Un&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Xe||A.magFilter===Va||A.magFilter===Gs||A.magFilter===Fi||A.minFilter===Xe||A.minFilter===Va||A.minFilter===Gs||A.minFilter===Fi)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ot[A.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ot[A.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ot[A.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Z[A.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Z[A.minFilter]),A.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ge||A.minFilter!==Gs&&A.minFilter!==Fi||A.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ct(B,A){let Y=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",R));let Q=A.source,it=d.get(Q);it===void 0&&(it={},d.set(Q,it));let pt=U(A);if(pt!==B.__cacheKey){it[pt]===void 0&&(it[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[pt].usedTimes++;let mt=it[B.__cacheKey];mt!==void 0&&(it[B.__cacheKey].usedTimes--,mt.usedTimes===0&&E(A)),B.__cacheKey=pt,B.__webglTexture=it[pt].texture}return Y}function X(B,A,Y){return Math.floor(Math.floor(B/Y)/A)}function $(B,A,Y,Q){let pt=B.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,Q,A.data);else{pt.sort((Ft,_t)=>Ft.start-_t.start);let mt=0;for(let Ft=1;Ft<pt.length;Ft++){let _t=pt[mt],xt=pt[Ft],Dt=_t.start+_t.count,Ot=X(xt.start,A.width,4),Zt=X(_t.start,A.width,4);xt.start<=Dt+1&&Ot===Zt&&X(xt.start+xt.count-1,A.width,4)===Ot?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++mt,pt[mt]=xt)}pt.length=mt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Ft=0,_t=pt.length;Ft<_t;Ft++){let xt=pt[Ft],Dt=Math.floor(xt.start/4),Ot=Math.ceil(xt.count/4),Zt=Dt%A.width,W=Math.floor(Dt/A.width),bt=Ot,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Zt,W,bt,at,Y,Q,A.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function rt(B,A,Y){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);let it=ct(B,A),pt=A.source;e.bindTexture(Q,B.__webglTexture,i.TEXTURE0+Y);let mt=n.get(pt);if(pt.version!==mt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let at=re.getPrimaries(re.workingColorSpace),vt=A.colorSpace===oi?null:re.getPrimaries(A.colorSpace),wt=A.colorSpace===oi||at===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let lt=g(A.image,!1,r.maxTextureSize);lt=$e(A,lt);let gt=s.convert(A.format,A.colorSpace),Ft=s.convert(A.type),_t=v(A.internalFormat,gt,Ft,A.normalized,A.colorSpace,A.isVideoTexture);nt(Q,A);let xt,Dt=A.mipmaps,Ot=A.isVideoTexture!==!0,Zt=mt.__version===void 0||it===!0,W=pt.dataReady,bt=w(A,lt);if(A.isDepthTexture)_t=y(A.format===Di,A.type),Zt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,_t,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,_t,lt.width,lt.height,0,gt,Ft,null));else if(A.isDataTexture)if(Dt.length>0){Ot&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Dt[0].width,Dt[0].height);for(let at=0,vt=Dt.length;at<vt;at++)xt=Dt[at],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,gt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,at,_t,xt.width,xt.height,0,gt,Ft,xt.data);A.generateMipmaps=!1}else Ot?(Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,lt.width,lt.height),W&&$(A,lt,gt,Ft)):e.texImage2D(i.TEXTURE_2D,0,_t,lt.width,lt.height,0,gt,Ft,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ot&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,Dt[0].width,Dt[0].height,lt.depth);for(let at=0,vt=Dt.length;at<vt;at++)if(xt=Dt[at],A.format!==Mn)if(gt!==null)if(Ot){if(W)if(A.layerUpdates.size>0){let wt=xu(xt.width,xt.height,A.format,A.type);for(let ht of A.layerUpdates){let Nt=xt.data.subarray(ht*wt/xt.data.BYTES_PER_ELEMENT,(ht+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,ht,xt.width,xt.height,1,gt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,lt.depth,gt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,_t,xt.width,xt.height,lt.depth,0,xt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,lt.depth,gt,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,_t,xt.width,xt.height,lt.depth,0,gt,Ft,xt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ot&&Zt&&e.texStorage2D(i.TEXTURE_2D,bt,_t,Dt[0].width,Dt[0].height);for(let at=0,vt=Dt.length;at<vt;at++)xt=Dt[at],A.format!==Mn?gt!==null?Ot?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,gt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,_t,xt.width,xt.height,0,xt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,xt.width,xt.height,gt,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,at,_t,xt.width,xt.height,0,gt,Ft,xt.data)}else if(A.isDataArrayTexture)if(Ot){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,_t,lt.width,lt.height,lt.depth),W)if(A.layerUpdates.size>0){let at=xu(lt.width,lt.height,A.format,A.type);for(let vt of A.layerUpdates){let wt=lt.data.subarray(vt*at/lt.data.BYTES_PER_ELEMENT,(vt+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,lt.width,lt.height,1,gt,Ft,wt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,gt,Ft,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,lt.width,lt.height,lt.depth,0,gt,Ft,lt.data);else if(A.isData3DTexture)Ot?(Zt&&e.texStorage3D(i.TEXTURE_3D,bt,_t,lt.width,lt.height,lt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,gt,Ft,lt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,lt.width,lt.height,lt.depth,0,gt,Ft,lt.data);else if(A.isFramebufferTexture){if(Zt)if(Ot)e.texStorage2D(i.TEXTURE_2D,bt,_t,lt.width,lt.height);else{let at=lt.width,vt=lt.height;for(let wt=0;wt<bt;wt++)e.texImage2D(i.TEXTURE_2D,wt,_t,at,vt,0,gt,Ft,null),at>>=1,vt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),h.add(A),at.onpaint=vt=>{let wt=vt.changedElements;for(let ht of h)wt.includes(ht.image)&&(ht.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let wt=i.RGBA,ht=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,ht,Nt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ot&&Zt){let at=me(Dt[0]);e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height)}for(let at=0,vt=Dt.length;at<vt;at++)xt=Dt[at],Ot?W&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,gt,Ft,xt):e.texImage2D(i.TEXTURE_2D,at,_t,gt,Ft,xt);A.generateMipmaps=!1}else if(Ot){if(Zt){let at=me(lt);e.texStorage2D(i.TEXTURE_2D,bt,_t,at.width,at.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ft,lt)}else e.texImage2D(i.TEXTURE_2D,0,_t,gt,Ft,lt);p(A)&&_(Q),mt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ft(B,A,Y){if(A.image.length!==6)return;let Q=ct(B,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+Y);let pt=n.get(it);if(it.version!==pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+Y);let mt=re.getPrimaries(re.workingColorSpace),st=A.colorSpace===oi?null:re.getPrimaries(A.colorSpace),lt=A.colorSpace===oi||mt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let gt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ft=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let ht=0;ht<6;ht++)!gt&&!Ft?_t[ht]=g(A.image[ht],!0,r.maxCubemapSize):_t[ht]=Ft?A.image[ht].image:A.image[ht],_t[ht]=$e(A,_t[ht]);let xt=_t[0],Dt=s.convert(A.format,A.colorSpace),Ot=s.convert(A.type),Zt=v(A.internalFormat,Dt,Ot,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,bt=pt.__version===void 0||Q===!0,at=it.dataReady,vt=w(A,xt);nt(i.TEXTURE_CUBE_MAP,A);let wt;if(gt){W&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,xt.width,xt.height);for(let ht=0;ht<6;ht++){wt=_t[ht].mipmaps;for(let Nt=0;Nt<wt.length;Nt++){let It=wt[Nt];A.format!==Mn?Dt!==null?W?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,Zt,It.width,It.height,0,It.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,0,0,It.width,It.height,Dt,Ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt,Zt,It.width,It.height,0,Dt,Ot,It.data)}}}else{if(wt=A.mipmaps,W&&bt){wt.length>0&&vt++;let ht=me(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Zt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ft){W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,_t[ht].width,_t[ht].height,Dt,Ot,_t[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Zt,_t[ht].width,_t[ht].height,0,Dt,Ot,_t[ht].data);for(let Nt=0;Nt<wt.length;Nt++){let _e=wt[Nt].image[ht].image;W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,_e.width,_e.height,Dt,Ot,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,Zt,_e.width,_e.height,0,Dt,Ot,_e.data)}}else{W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Dt,Ot,_t[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Zt,Dt,Ot,_t[ht]);for(let Nt=0;Nt<wt.length;Nt++){let It=wt[Nt];W?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,0,0,Dt,Ot,It.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt+1,Zt,Dt,Ot,It.image[ht])}}}p(A)&&_(i.TEXTURE_CUBE_MAP),pt.__version=it.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ut(B,A,Y,Q,it,pt){let mt=s.convert(Y.format,Y.colorSpace),st=s.convert(Y.type),lt=v(Y.internalFormat,mt,st,Y.normalized,Y.colorSpace),gt=n.get(A),Ft=n.get(Y);if(Ft.__renderTarget=A,!gt.__hasExternalTextures){let _t=Math.max(1,A.width>>pt),xt=Math.max(1,A.height>>pt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,pt,lt,_t,xt,A.depth,0,mt,st,null):e.texImage2D(it,pt,lt,_t,xt,0,mt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),De(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,0,Ee(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,Ft.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(B,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,B),A.depthBuffer){let Q=A.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,pt=y(A.stencilBuffer,it),mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;De(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(A),pt,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(A),pt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,B)}else{let Q=A.textures;for(let it=0;it<Q.length;it++){let pt=Q[it],mt=s.convert(pt.format,pt.colorSpace),st=s.convert(pt.type),lt=v(pt.internalFormat,mt,st,pt.normalized,pt.colorSpace);De(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(A),lt,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(A),lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,lt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(B,A,Y){let Q=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(A.depthTexture);if(it.__renderTarget=A,(!it.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q){if(it.__webglInit===void 0&&(it.__webglInit=!0,A.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),nt(i.TEXTURE_CUBE_MAP,A.depthTexture);let gt=s.convert(A.depthTexture.format),Ft=s.convert(A.depthTexture.type),_t;A.depthTexture.format===Hn?_t=i.DEPTH_COMPONENT24:A.depthTexture.format===Di&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,A.width,A.height,0,gt,Ft,null)}}else z(A.depthTexture,0);let pt=it.__webglTexture,mt=Ee(A),st=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,lt=A.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Hn)De(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,pt,0);else if(A.depthTexture.format===Di)De(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(B){let A=n.get(B),Y=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){let Q=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){let it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=Q}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let Q=0;Q<6;Q++)Ht(A.__webglFramebuffer[Q],B,Q);else{let Q=B.texture.mipmaps;Q&&Q.length>0?Ht(A.__webglFramebuffer[0],B,0):Ht(A.__webglFramebuffer,B,0)}else if(Y){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),At(A.__webglDepthbuffer[Q],B,!1);else{let it=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}else{let Q=B.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),At(A.__webglDepthbuffer,B,!1);else{let it=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(B,A,Y){let Q=n.get(B);A!==void 0&&ut(Q.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Rt(B)}function Kt(B){let A=B.texture,Y=n.get(B),Q=n.get(A);B.addEventListener("dispose",b);let it=B.textures,pt=B.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,o.memory.textures++),pt){Y.__webglFramebuffer=[];for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[st]=[];for(let lt=0;lt<A.mipmaps.length;lt++)Y.__webglFramebuffer[st][lt]=i.createFramebuffer()}else Y.__webglFramebuffer[st]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let st=0;st<A.mipmaps.length;st++)Y.__webglFramebuffer[st]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(mt)for(let st=0,lt=it.length;st<lt;st++){let gt=n.get(it[st]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&De(B)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let lt=it[st];Y.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[st]);let gt=s.convert(lt.format,lt.colorSpace),Ft=s.convert(lt.type),_t=v(lt.internalFormat,gt,Ft,lt.normalized,lt.colorSpace,B.isXRRenderTarget===!0),xt=Ee(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Y.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),At(Y.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(i.TEXTURE_CUBE_MAP,A);for(let st=0;st<6;st++)if(A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)ut(Y.__webglFramebuffer[st][lt],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else ut(Y.__webglFramebuffer[st],B,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(A)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let st=0,lt=it.length;st<lt;st++){let gt=it[st],Ft=n.get(gt),_t=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(_t=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ft.__webglTexture),nt(_t,gt),ut(Y.__webglFramebuffer,B,gt,i.COLOR_ATTACHMENT0+st,_t,0),p(gt)&&_(_t)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(st=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),nt(st,A),A.mipmaps&&A.mipmaps.length>0)for(let lt=0;lt<A.mipmaps.length;lt++)ut(Y.__webglFramebuffer[lt],B,A,i.COLOR_ATTACHMENT0,st,lt);else ut(Y.__webglFramebuffer,B,A,i.COLOR_ATTACHMENT0,st,0);p(A)&&_(st),e.unbindTexture()}B.depthBuffer&&Rt(B)}function $t(B){let A=B.textures;for(let Y=0,Q=A.length;Y<Q;Y++){let it=A[Y];if(p(it)){let pt=M(B),mt=n.get(it).__webglTexture;e.bindTexture(pt,mt),_(pt),e.unbindTexture()}}}let pe=[],Pe=[];function Oe(B){if(B.samples>0){if(De(B)===!1){let A=B.textures,Y=B.width,Q=B.height,it=i.COLOR_BUFFER_BIT,pt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(B),st=A.length>1;if(st)for(let gt=0;gt<A.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let lt=B.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ft=n.get(A[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,it,i.NEAREST),l===!0&&(pe.length=0,Pe.length=0,pe.push(i.COLOR_ATTACHMENT0+gt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(pe.push(pt),Pe.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let gt=0;gt<A.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Ft=n.get(A[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let A=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Ee(B){return Math.min(r.maxSamples,B.samples)}function De(B){let A=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function q(B){let A=o.render.frame;u.get(B)!==A&&(u.set(B,A),B.update())}function $e(B,A){let Y=B.colorSpace,Q=B.format,it=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Y!==_s&&Y!==oi&&(re.getTransfer(Y)===de?(Q!==Mn||it!==gn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),A}function me(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function P_(i,t){function e(n,r=oi){let s,o=re.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===ru)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===lu)return i.RGB;if(n===Mn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===cu)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ya)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===qs)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Za||n===Ja||n===Ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===ja||n===tl||n===el||n===nl||n===Ys||n===il)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qa||n===ja)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return s.COMPRESSED_R11_EAC;if(n===nl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ys)return s.COMPRESSED_RG11_EAC;if(n===il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===vl||n===_l)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===bl)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Ml||n===$s||n===Sl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:I_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends Wn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Uu,p={},_=e.getContextAttributes(),M=null,v=null,y=[],w=[],R=new ee,b=null,S=null,E=new Qe;E.viewport=new Re;let P=new Qe;P.viewport=new Re;let T=[E,P],F=new Oa,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=y[X];return $===void 0&&($=new Xr,y[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=y[X];return $===void 0&&($=new Xr,y[X]=$),$.getGripSpace()},this.getHand=function(X){let $=y[X];return $===void 0&&($=new Xr,y[X]=$),$.getHandSpace()};function N(X){let $=w.indexOf(X.inputSource);if($===-1)return;let rt=y[$];rt!==void 0&&(rt.update(X.inputSource,X.frame,c||o),rt.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",z);for(let X=0;X<y.length;X++){let $=w[X];$!==null&&(w[X]=null,y[X].disconnect($))}C=null,L=null,g.reset();for(let X in p)delete p[X];if(t.setRenderTarget(M),d=null,f=null,h=null,r=null,v=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",U),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ft=null,ut=null;_.depth&&(ut=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=_.stencil?Di:Hn,ft=_.stencil?Qr:Nn);let At={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(At),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new en(f.textureWidth,f.textureHeight,{format:Mn,type:gn,depthTexture:new Ti(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new en(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(X){for(let $=0;$<X.removed.length;$++){let rt=X.removed[$],ft=w.indexOf(rt);ft>=0&&(w[ft]=null,y[ft].disconnect(rt))}for(let $=0;$<X.added.length;$++){let rt=X.added[$],ft=w.indexOf(rt);if(ft===-1){for(let At=0;At<y.length;At++)if(At>=w.length){w.push(rt),ft=At;break}else if(w[At]===null){w[At]=rt,ft=At;break}if(ft===-1)break}let ut=y[ft];ut&&ut.connect(rt)}}let O=new G,k=new G;function V(X,$,rt){O.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(rt.matrixWorld);let ft=O.distanceTo(k),ut=$.projectionMatrix.elements,At=rt.projectionMatrix.elements,Ht=ut[14]/(ut[10]-1),Rt=ut[14]/(ut[10]+1),kt=(ut[9]+1)/ut[5],Kt=(ut[9]-1)/ut[5],$t=(ut[8]-1)/ut[0],pe=(At[8]+1)/At[0],Pe=Ht*$t,Oe=Ht*pe,Ee=ft/(-$t+pe),De=Ee*-$t;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ut[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let q=Ht+Ee,$e=Rt+Ee,me=Pe-De,B=Oe+(ft-De),A=kt*Rt/$e*q,Y=Kt*Rt/$e*q;X.projectionMatrix.makePerspective(me,B,A,Y,q,$e),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let $=X.near,rt=X.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),F.near=P.near=E.near=$,F.far=P.far=E.far=rt,(C!==F.near||L!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,L=F.far),F.layers.mask=X.layers.mask|6,E.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let ft=X.parent,ut=F.cameras;ot(F,ft);for(let At=0;At<ut.length;At++)ot(ut[At],ft);ut.length===2?V(F,E,P):F.projectionMatrix.copy(E.projectionMatrix),S===null&&X.isPerspectiveCamera&&(S={camera:X,fov:X.fov,zoom:X.zoom}),Z(X,F,ft)};function Z(X,$,rt){rt===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(rt.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(X){return p[X]};let et=null;function nt(X,$){if(u=$.getViewerPose(c||o),m=$,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ft=!1;rt.length!==F.cameras.length&&(F.cameras.length=0,ft=!0);for(let Rt=0;Rt<rt.length;Rt++){let kt=rt[Rt],Kt=null;if(d!==null)Kt=d.getViewport(kt);else{let pe=h.getViewSubImage(f,kt);Kt=pe.viewport,Rt===0&&(t.setRenderTargetTextures(v,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(v))}let $t=T[Rt];$t===void 0&&($t=new Qe,$t.layers.enable(Rt),$t.viewport=new Re,T[Rt]=$t),$t.matrix.fromArray(kt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(kt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Rt===0&&(F.matrix.copy($t.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ft===!0&&F.cameras.push($t)}let ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Rt=h.getDepthInformation(rt[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(Rt,r.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Rt=0;Rt<rt.length;Rt++){let kt=rt[Rt].camera;if(kt){let Kt=p[kt];Kt||(Kt=new Rs,p[kt]=Kt);let $t=h.getCameraImage(kt);Kt.sourceTexture=$t}}}}for(let rt=0;rt<y.length;rt++){let ft=w[rt],ut=y[rt];ft!==null&&ut!==void 0&&ut.update(ft,$,c||o)}et&&et(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let ct=new Pd;ct.setAnimationLoop(nt),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}},F_=new we,Ud=new Wt;Ud.set(-1,0,0,0,1,0,0,0,1);function D_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,pu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),M=_.envMap,v=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ud),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=r[v.id];w===void 0&&(g(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",_));let R=y.program;n.updateUBOMapping(v,R);let b=t.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){let y=h();v.__bindingPointIndex=y;let w=i.createBuffer(),R=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=r[v.id],w=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,S=w.length;b<S;b++){let E=w[b];if(Array.isArray(E))for(let P=0,T=E.length;P<T;P++)d(E[P],b,P,R);else d(E,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,w,R){if(x(v,y,w,R)===!0){let b=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let P=0;P<S.length;P++){let T=S[P],F=p(T);m(T,v.__data,E),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function x(v,y,w,R){let b=v.value,S=y+"_"+w;if(R[S]===void 0)return typeof b=="number"||typeof b=="boolean"?R[S]=b:ArrayBuffer.isView(b)?R[S]=b.slice():R[S]=b.clone(),!0;{let E=R[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return R[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function g(v){let y=v.uniforms,w=0,R=16;for(let S=0,E=y.length;S<E;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let T=0,F=P.length;T<F;T++){let C=P[T],L=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=L.length;N<U;N++){let z=L[N],O=p(z),k=w%R,V=k%O.boundary,ot=k+V;w+=V,ot!==0&&R-ot<O.storage&&(w+=R-ot),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=O.storage}}}let b=w%R;return b>0&&(w+=R-b),v.__size=w,v.__cache={},this}function p(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),y}function _(v){let y=v.target;y.removeEventListener("dispose",_);let w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function M(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function O_(){return $n===null&&($n=new ba(U_,16,16,Ni,On),$n.name="DFG_LUT",$n.minFilter=Xe,$n.magFilter=Xe,$n.wrapS=pn,$n.wrapT=pn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var cr=class{constructor(t={}){let{canvas:e=Kf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=gn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Ya,qa,Xa]),p=new Set([gn,Nn,Kr,Qr,Ha,Wa]),_=new Uint32Array(4),M=new Int32Array(4),v=new G,y=null,w=null,R=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,T=null,F=null,C=null,L=null;this._outputColorSpace=Le;let N=0,U=0,z=null,O=-1,k=null,V=new Re,ot=new Re,Z=null,et=new tt(0),nt=0,ct=e.width,X=e.height,$=1,rt=null,ft=null,ut=new Re(0,0,ct,X),At=new Re(0,0,ct,X),Ht=!1,Rt=new Es,kt=!1,Kt=!1,$t=new we,pe=new G,Pe=new Re,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return z===null?$:1}let q=n;function $e(I,H){return e.getContext(I,H)}let me,B,A,Y,Q,it,pt,mt,st,lt,gt,Ft,_t,xt,Dt,Ot,Zt,W,bt,at,vt,wt,ht;try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Rn,!1),q===null){let H="webgl2";if(q=$e(H,I),q===null)throw $e(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(I){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),zt("WebGLRenderer: "+I.message),I}function Nt(){me=new Wb(q),me.init(),vt=new P_(q,me),B=new Db(q,me,t,vt),A=new R_(q,me),B.reversedDepthBuffer&&f&&A.buffers.depth.setReversed(!0),F=q.createFramebuffer(),C=q.createFramebuffer(),L=q.createFramebuffer(),Y=new Yb(q),Q=new p_,it=new C_(q,me,A,Q,B,vt,Y),pt=new Hb(E),mt=new Z0(q),wt=new Lb(q,mt),st=new Xb(q,mt,Y,wt),lt=new Zb(q,st,mt,wt,Y),W=new $b(q,B,it),Dt=new Nb(Q),gt=new d_(E,pt,me,B,wt,Dt),Ft=new D_(E,Q),_t=new g_,xt=new M_(me),Zt=new Ib(E,pt,A,lt,m,l),Ot=new A_(E,lt,B),ht=new N_(q,Y,B,A),bt=new Fb(q,me,Y),at=new qb(q,me,Y),Y.programs=gt.programs,E.capabilities=B,E.extensions=me,E.properties=Q,E.renderLists=_t,E.shadowMap=Ot,E.state=A,E.info=Y}x!==gn&&(S=new Kb(x,e.width,e.height,a,r,s));let It=new Ou(E,q);this.xr=It,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let I=me.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=me.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(ct,X,!1))},this.getSize=function(I){return I.set(ct,X)},this.setSize=function(I,H,j=!0){if(It.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=I,X=H,e.width=Math.floor(I*$),e.height=Math.floor(H*$),j===!0&&(e.style.width=I+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(ct*$,X*$).floor()},this.setDrawingBufferSize=function(I,H,j){ct=I,X=H,$=j,e.width=Math.floor(I*j),e.height=Math.floor(H*j),this.setViewport(0,0,I,H)},this.setEffects=function(I){if(x===gn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let H=0;H<I.length;H++)if(I[H].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(ut)},this.setViewport=function(I,H,j,J){I.isVector4?ut.set(I.x,I.y,I.z,I.w):ut.set(I,H,j,J),A.viewport(V.copy(ut).multiplyScalar($).round())},this.getScissor=function(I){return I.copy(At)},this.setScissor=function(I,H,j,J){I.isVector4?At.set(I.x,I.y,I.z,I.w):At.set(I,H,j,J),A.scissor(ot.copy(At).multiplyScalar($).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(I){A.setScissorTest(Ht=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(I=!0,H=!0,j=!0){let J=0;if(I){let K=!1;if(z!==null){let St=z.texture.format;K=g.has(St)}if(K){let St=z.texture.type,Et=p.has(St),Mt=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Lt=Mt.r,Qt=Mt.g,ne=Mt.b;Et?(_[0]=Lt,_[1]=Qt,_[2]=ne,_[3]=Ct,q.clearBufferuiv(q.COLOR,0,_)):(M[0]=Lt,M[1]=Qt,M[2]=ne,M[3]=Ct,q.clearBufferiv(q.COLOR,0,M))}else J|=q.COLOR_BUFFER_BIT}H&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),T=I},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),Zt.dispose(),_t.dispose(),xt.dispose(),Q.dispose(),pt.dispose(),lt.dispose(),wt.dispose(),ht.dispose(),gt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Ph),It.removeEventListener("sessionend",Ih),$i.stop()};function _e(I){I.preventDefault(),du("WebGLRenderer: Context Lost."),P=!0}function he(){du("WebGLRenderer: Context Restored."),P=!1;let I=Y.autoReset,H=Ot.enabled,j=Ot.autoUpdate,J=Ot.needsUpdate,K=Ot.type;Nt(),Y.autoReset=I,Ot.enabled=H,Ot.autoUpdate=j,Ot.needsUpdate=J,Ot.type=K}function Rn(I){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function kn(I){let H=I.target;H.removeEventListener("dispose",kn),Hm(H)}function Hm(I){Wm(I),Q.remove(I)}function Wm(I){let H=Q.get(I).programs;H!==void 0&&(H.forEach(function(j){gt.releaseProgram(j)}),I.isShaderMaterial&&gt.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,j,J,K,St){H===null&&(H=Oe);let Et=K.isMesh&&K.matrixWorld.determinantAffine()<0,Mt=Ym(I,H,j,J,K);A.setMaterial(J,Et);let Ct=j.index,Lt=1;if(J.wireframe===!0){if(Ct=st.getWireframeAttribute(j),Ct===void 0)return;Lt=2}let Qt=j.drawRange,ne=j.attributes.position,Pt=Qt.start*Lt,fe=(Qt.start+Qt.count)*Lt;St!==null&&(Pt=Math.max(Pt,St.start*Lt),fe=Math.min(fe,(St.start+St.count)*Lt)),Ct!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,Ct.count)):ne!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,ne.count));let Ne=fe-Pt;if(Ne<0||Ne===1/0)return;wt.setup(K,J,Mt,j,Ct);let Me,be=bt;if(Ct!==null&&(Me=mt.get(Ct),be=at,be.setIndex(Me)),K.isMesh)J.wireframe===!0?(A.setLineWidth(J.wireframeLinewidth*De()),be.setMode(q.LINES)):be.setMode(q.TRIANGLES);else if(K.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),A.setLineWidth(Ze*De()),K.isLineSegments?be.setMode(q.LINES):K.isLineLoop?be.setMode(q.LINE_LOOP):be.setMode(q.LINE_STRIP)}else K.isPoints?be.setMode(q.POINTS):K.isSprite&&be.setMode(q.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))be.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ze=K._multiDrawStarts,Tt=K._multiDrawCounts,on=K._multiDrawCount,ae=Ct?mt.get(Ct).bytesPerElement:1,vn=Q.get(J).currentProgram.getUniforms();for(let Vn=0;Vn<on;Vn++)vn.setValue(q,"_gl_DrawID",Vn),be.render(Ze[Vn]/ae,Tt[Vn])}else if(K.isInstancedMesh)be.renderInstances(Pt,Ne,K.count);else if(j.isInstancedBufferGeometry){let Ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,Ze);be.renderInstances(Pt,Ne,Tt)}else be.render(Pt,Ne)};function Ch(I,H,j,J){T!==null&&I.isNodeMaterial&&T.setObject(J,I),kt===!0&&Dt.setState(I,j,!1),I.transparent===!0&&I.side===xe&&I.forceSinglePass===!1?(I.side=cn,I.needsUpdate=!0,Po(I,H,J),I.side=Pi,I.needsUpdate=!0,Po(I,H,J),I.side=xe):Po(I,H,J)}this.compile=function(I,H,j=null){j===null&&(j=I),T!==null&&T.renderStart(I,H,j),w=xt.get(j),w.init(H),b.push(w),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),I!==j&&I.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),Kt=this.localClippingEnabled,kt=Dt.init(this.clippingPlanes,Kt),kt===!0&&Dt.setGlobalState(this.clippingPlanes,H),T!==null&&Ot.render(w.state.shadowsArray,j,H);let J=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let Et=0;Et<St.length;Et++){let Mt=St[Et];Ch(Mt,j,H,K),J.add(Mt)}else Ch(St,j,H,K),J.add(St)}),w=b.pop(),T!==null&&T.renderEnd(),J},this.compileAsync=function(I,H,j=null){let J=this.compile(I,H,j);return new Promise(K=>{function St(){if(J.forEach(function(Et){let Ct=Q.get(Et).currentProgram;(Ct===void 0||Ct.isReady())&&J.delete(Et)}),J.size===0){K(I);return}setTimeout(St,10)}me.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let lc=null;function Xm(I){lc&&lc(I)}function Ph(){$i.stop()}function Ih(){$i.start()}let $i=new Pd;$i.setAnimationLoop(Xm),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(I){lc=I,It.setAnimationLoop(I),I===null?$i.stop():$i.start()},It.addEventListener("sessionstart",Ph),It.addEventListener("sessionend",Ih),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T!==null&&T.renderStart(I,H);let j=It.enabled===!0&&It.isPresenting===!0,J=S!==null&&(z===null||j)&&S.begin(E,z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(H),H=It.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,H,z),w=xt.get(I,b.length),w.init(H),w.state.textureUnits=it.getTextureUnits(),b.push(w),$t.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Rt.setFromProjectionMatrix($t,Fn,H.reversedDepth),Kt=this.localClippingEnabled,kt=Dt.init(this.clippingPlanes,Kt),y=_t.get(I,R.length),y.init(),R.push(y),It.enabled===!0&&It.isPresenting===!0){let Et=E.xr.getDepthSensingMesh();Et!==null&&cc(Et,H,-1/0,E.sortObjects)}cc(I,H,0,E.sortObjects),y.finish(),T!==null&&T.updateLights(w.state.lightsArray),E.sortObjects===!0&&y.sort(rt,ft),Ee=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Ee&&Zt.addToRenderList(y,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),kt===!0&&Dt.beginShadows();let K=w.state.shadowsArray;if(Ot.render(K,I,H),kt===!0&&Dt.endShadows(),(J&&S.hasRenderPass())===!1){let Et=y.opaque,Mt=y.transmissive;if(w.setupLights(),H.isArrayCamera){let Ct=H.cameras;if(Mt.length>0)for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ne=Ct[Lt];Fh(Et,Mt,I,ne)}Ee&&Zt.render(I);for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ne=Ct[Lt];Lh(y,I,ne,ne.viewport)}}else Mt.length>0&&Fh(Et,Mt,I,H),Ee&&Zt.render(I),Lh(y,I,H)}z!==null&&U===0&&(it.updateMultisampleRenderTarget(z),it.updateRenderTargetMipmap(z)),J&&S.end(E),I.isScene===!0&&I.onAfterRender(E,I,H),wt.resetDefaultState(),O=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],it.setTextureUnits(w.state.textureUnits),kt===!0&&Dt.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,T!==null&&T.renderEnd()};function cc(I,H,j,J){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Rt)){J&&Pe.setFromMatrixPosition(I.matrixWorld).applyMatrix4($t);let Et=lt.update(I),Mt=I.material;Mt.visible&&y.push(I,Et,Mt,j,Pe.z,null,H)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Rt))){let Et=lt.update(I),Mt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Pe.copy(I.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Pe.copy(Et.boundingSphere.center)),Pe.applyMatrix4(I.matrixWorld).applyMatrix4($t)),Array.isArray(Mt)){let Ct=Et.groups;for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ne=Ct[Lt],Pt=Mt[ne.materialIndex];Pt&&Pt.visible&&y.push(I,Et,Pt,j,Pe.z,ne,H)}}else Mt.visible&&y.push(I,Et,Mt,j,Pe.z,null,H)}}let St=I.children;for(let Et=0,Mt=St.length;Et<Mt;Et++)cc(St[Et],H,j,J)}function Lh(I,H,j,J){let{opaque:K,transmissive:St,transparent:Et}=I;w.setupLightsView(j),kt===!0&&Dt.setGlobalState(E.clippingPlanes,j),J&&A.viewport(V.copy(J)),K.length>0&&Co(K,H,j),St.length>0&&Co(St,H,j),Et.length>0&&Co(Et,H,j),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Fh(I,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Pt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new en(1,1,{generateMipmaps:!0,type:Pt?On:gn,minFilter:Fi,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let St=w.state.transmissionRenderTarget[J.id],Et=J.viewport||V;St.setSize(Et.z*E.transmissionResolutionScale,Et.w*E.transmissionResolutionScale);let Mt=E.getRenderTarget(),Ct=E.getActiveCubeFace(),Lt=E.getActiveMipmapLevel();E.setRenderTarget(St),E.getClearColor(et),nt=E.getClearAlpha(),nt<1&&E.setClearColor(16777215,.5),E.clear(),Ee&&Zt.render(j);let Qt=E.toneMapping;E.toneMapping=Dn;let ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),kt===!0&&Dt.setGlobalState(E.clippingPlanes,J),Co(I,j,J),it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St),me.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,Ne=H.length;fe<Ne;fe++){let Me=H[fe],{object:be,geometry:Ze,material:Tt,group:on}=Me;if(Tt.side===xe&&be.layers.test(J.layers)){let ae=Tt.side;Tt.side=cn,Tt.needsUpdate=!0,Dh(be,j,J,Ze,Tt,on),Tt.side=ae,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(it.updateMultisampleRenderTarget(St),it.updateRenderTargetMipmap(St))}E.setRenderTarget(Mt,Ct,Lt),E.setClearColor(et,nt),ne!==void 0&&(J.viewport=ne),E.toneMapping=Qt}function Co(I,H,j){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,St=I.length;K<St;K++){let Et=I[K],{object:Mt,geometry:Ct,group:Lt}=Et,Qt=Et.material;Qt.allowOverride===!0&&J!==null&&(Qt=J),Mt.layers.test(j.layers)&&Dh(Mt,H,j,Ct,Qt,Lt)}}function Dh(I,H,j,J,K,St){T!==null&&K.isNodeMaterial&&T.setObject(I,K),I.onBeforeRender(E,H,j,J,K,St),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(E,H,j,J,I,St),K.transparent===!0&&K.side===xe&&K.forceSinglePass===!1?(K.side=cn,K.needsUpdate=!0,E.renderBufferDirect(j,H,J,K,I,St),K.side=Pi,K.needsUpdate=!0,E.renderBufferDirect(j,H,J,K,I,St),K.side=xe):E.renderBufferDirect(j,H,J,K,I,St),I.onAfterRender(E,H,j,J,K,St)}function Po(I,H,j){H.isScene!==!0&&(H=Oe);let J=Q.get(I),K=w.state.lights,St=w.state.shadowsArray,Et=K.state.version,Mt=gt.getParameters(I,K.state,St,H,j,w.state.lightProbeGridArray),Ct=gt.getProgramCacheKey(Mt),Lt=J.programs;J.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let Qt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;J.envMap=pt.get(I.envMap||J.environment,Qt),J.envMapRotation=J.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Lt===void 0&&(I.addEventListener("dispose",kn),Lt=new Map,J.programs=Lt);let ne=Lt.get(Ct);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===Et)return Uh(I,Mt),ne}else Mt.uniforms=gt.getUniforms(I),T!==null&&I.isNodeMaterial&&T.build(I,j,Mt),I.onBeforeCompile(Mt,E),ne=gt.acquireProgram(Mt,Ct),Lt.set(Ct,ne),J.uniforms=Mt.uniforms;let Pt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Pt.clippingPlanes=Dt.uniform),Uh(I,Mt),J.needsLights=Zm(I),J.lightsStateVersion=Et,J.needsLights&&(Pt.ambientLightColor.value=K.state.ambient,Pt.lightProbe.value=K.state.probe,Pt.sunLights.value=K.state.sun,Pt.sunLightShadows.value=K.state.sunShadow,Pt.directionalLights.value=K.state.directional,Pt.directionalLightShadows.value=K.state.directionalShadow,Pt.spotLights.value=K.state.spot,Pt.spotLightShadows.value=K.state.spotShadow,Pt.rectAreaLights.value=K.state.rectArea,Pt.ltc_1.value=K.state.rectAreaLTC1,Pt.ltc_2.value=K.state.rectAreaLTC2,Pt.pointLights.value=K.state.point,Pt.pointLightShadows.value=K.state.pointShadow,Pt.hemisphereLights.value=K.state.hemi,Pt.sunShadowMatrix.value=K.state.sunShadowMatrix,Pt.sunShadowCascade.value=K.state.sunShadowCascade,Pt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Pt.spotLightMatrix.value=K.state.spotLightMatrix,Pt.spotLightMap.value=K.state.spotLightMap,Pt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=w.state.lightProbeGridArray.length>0,J.currentProgram=ne,J.uniformsList=null,ne}function Nh(I){if(I.uniformsList===null){let H=I.currentProgram.getUniforms();I.uniformsList=es.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function Uh(I,H){let j=Q.get(I);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function qm(I,H){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(H.matrixWorld);for(let j=0,J=I.length;j<J;j++){let K=I[j];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function Ym(I,H,j,J,K){H.isScene!==!0&&(H=Oe),it.resetTextureUnits();let St=H.fog,Et=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Mt=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:re.workingColorSpace,Ct=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Lt=pt.get(J.envMap||Et,Ct),Qt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ne=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Pt=!!j.morphAttributes.position,fe=!!j.morphAttributes.normal,Ne=!!j.morphAttributes.color,Me=Dn;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Me=E.toneMapping);let be=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=be!==void 0?be.length:0,Tt=Q.get(J),on=w.state.lights;if(kt===!0&&(Kt===!0||I!==k)){let ye=I===k&&J.id===O;Dt.setState(J,I,ye)}let ae=!1;J.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==on.state.version||Tt.outputColorSpace!==Mt||K.isBatchedMesh&&Tt.batching===!1||!K.isBatchedMesh&&Tt.batching===!0||K.isBatchedMesh&&Tt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Tt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Tt.instancing===!1||!K.isInstancedMesh&&Tt.instancing===!0||K.isSkinnedMesh&&Tt.skinning===!1||!K.isSkinnedMesh&&Tt.skinning===!0||K.isInstancedMesh&&Tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Tt.instancingMorph===!1&&K.morphTexture!==null||Tt.envMap!==Lt||J.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Dt.numPlanes||Tt.numIntersection!==Dt.numIntersection)||Tt.vertexAlphas!==Qt||Tt.vertexTangents!==ne||Tt.morphTargets!==Pt||Tt.morphNormals!==fe||Tt.morphColors!==Ne||Tt.toneMapping!==Me||Tt.morphTargetsCount!==Ze||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,Tt.__version=J.version);let vn=Tt.currentProgram;ae===!0&&(vn=Po(J,H,K),T&&J.isNodeMaterial&&T.onUpdateProgram(J,vn,Tt));let Vn=!1,fi=!1,Sr=!1,ge=vn.getUniforms(),Ie=Tt.uniforms;if(A.useProgram(vn.program)&&(Vn=!0,fi=!0,Sr=!0),J.id!==O&&(O=J.id,fi=!0),Tt.needsLights){let ye=qm(w.state.lightProbeGridArray,K);Tt.lightProbeGrid!==ye&&(Tt.lightProbeGrid=ye,fi=!0)}if(Vn||k!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ge.setValue(q,"projectionMatrix",I.projectionMatrix),ge.setValue(q,"viewMatrix",I.matrixWorldInverse);let pi=ge.map.cameraPosition;pi!==void 0&&pi.setValue(q,pe.setFromMatrixPosition(I.matrixWorld)),B.logarithmicDepthBuffer&&ge.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ge.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,fi=!0,Sr=!0)}if(Tt.needsLights&&(on.state.sunShadowMap.length>0&&ge.setValue(q,"sunShadowMap",on.state.sunShadowMap,it),on.state.directionalShadowMap.length>0&&ge.setValue(q,"directionalShadowMap",on.state.directionalShadowMap,it),on.state.spotShadowMap.length>0&&ge.setValue(q,"spotShadowMap",on.state.spotShadowMap,it),on.state.pointShadowMap.length>0&&ge.setValue(q,"pointShadowMap",on.state.pointShadowMap,it)),K.isSkinnedMesh){ge.setOptional(q,K,"bindMatrix"),ge.setOptional(q,K,"bindMatrixInverse");let ye=K.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(q,"boneTexture",ye.boneTexture,it))}K.isBatchedMesh&&(ge.setOptional(q,K,"batchingTexture"),ge.setValue(q,"batchingTexture",K._matricesTexture,it),ge.setOptional(q,K,"batchingIdTexture"),ge.setValue(q,"batchingIdTexture",K._indirectTexture,it),ge.setOptional(q,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(q,"batchingColorTexture",K._colorsTexture,it));let di=j.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&W.update(K,j,vn),(fi||Tt.receiveShadow!==K.receiveShadow)&&(Tt.receiveShadow=K.receiveShadow,ge.setValue(q,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Ie.envMapIntensity.value=H.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=O_()),fi){if(ge.setValue(q,"toneMappingExposure",E.toneMappingExposure),Tt.needsLights&&$m(Ie,Sr),St&&J.fog===!0&&Ft.refreshFogUniforms(Ie,St),Ft.refreshMaterialUniforms(Ie,J,$,X,w.state.transmissionRenderTarget[I.id]),Tt.needsLights&&Tt.lightProbeGrid){let ye=Tt.lightProbeGrid;Ie.probesSH.value=ye.texture,Ie.probesMin.value.copy(ye.boundingBox.min),Ie.probesMax.value.copy(ye.boundingBox.max),Ie.probesResolution.value.copy(ye.resolution)}es.upload(q,Nh(Tt),Ie,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(es.upload(q,Nh(Tt),Ie,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ge.setValue(q,"center",K.center),ge.setValue(q,"modelViewMatrix",K.modelViewMatrix),ge.setValue(q,"normalMatrix",K.normalMatrix),ge.setValue(q,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ye=J.uniformsGroups;for(let pi=0,wr=ye.length;pi<wr;pi++){let Bh=ye[pi];ht.update(Bh,vn),ht.bind(Bh,vn)}}return vn}function $m(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.sunLights.needsUpdate=H,I.sunLightShadows.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function Zm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,H,j){let J=Q.get(I);J.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(I.texture).__webglTexture=H,Q.get(I.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,H){let j=Q.get(I);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(I,H=0,j=0){z=I,N=H,U=j;let J=null,K=!1,St=!1;if(I){let Mt=Q.get(I);if(Mt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(q.FRAMEBUFFER,Mt.__webglFramebuffer),V.copy(I.viewport),ot.copy(I.scissor),Z=I.scissorTest,A.viewport(V),A.scissor(ot),A.setScissorTest(Z),O=-1;return}else if(Mt.__webglFramebuffer===void 0)it.setupRenderTarget(I);else if(Mt.__hasExternalTextures)it.rebindTextures(I,Q.get(I.texture).__webglTexture,Q.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qt=I.depthTexture;if(Mt.__boundDepthTexture!==Qt){if(Qt!==null&&Q.has(Qt)&&(I.width!==Qt.image.width||I.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(I)}}let Ct=I.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);let Lt=Q.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Lt[H])?J=Lt[H][j]:J=Lt[H],K=!0):I.samples>0&&it.useMultisampledRTT(I)===!1?J=Q.get(I).__webglMultisampledFramebuffer:Array.isArray(Lt)?J=Lt[j]:J=Lt,V.copy(I.viewport),ot.copy(I.scissor),Z=I.scissorTest}else V.copy(ut).multiplyScalar($).floor(),ot.copy(At).multiplyScalar($).floor(),Z=Ht;if(j!==0&&(J=F),A.bindFramebuffer(q.FRAMEBUFFER,J)&&A.drawBuffers(I,J),A.viewport(V),A.scissor(ot),A.setScissorTest(Z),K){let Mt=Q.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,Mt.__webglTexture,j)}else if(St){let Mt=H;for(let Ct=0;Ct<I.textures.length;Ct++){let Lt=Q.get(I.textures[Ct]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,j,Mt)}}else if(I!==null&&j!==0){let Mt=Q.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Mt.__webglTexture,j)}O=-1};function Oh(I){let H=Q.get(I);return(H.__readFormat!==I.format||H.__readType!==I.type)&&(H.__readFormat=I.format,H.__readType=I.type,H.__formatReadable=B.textureFormatReadable(I.format),H.__typeReadable=B.textureTypeReadable(I.type)),H}this.readRenderTargetPixels=function(I,H,j,J,K,St,Et,Mt=0){if(!(I&&I.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){A.bindFramebuffer(q.FRAMEBUFFER,Ct);try{let Lt=I.textures[Mt],Qt=Lt.format,ne=Lt.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Mt);let Pt=Oh(Lt);if(Pt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-J&&j>=0&&j<=I.height-K&&q.readPixels(H,j,J,K,vt.convert(Qt),vt.convert(ne),St)}finally{let Lt=z!==null?Q.get(z).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,H,j,J,K,St,Et,Mt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(H>=0&&H<=I.width-J&&j>=0&&j<=I.height-K){A.bindFramebuffer(q.FRAMEBUFFER,Ct);let Lt=I.textures[Mt],Qt=Lt.format,ne=Lt.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Mt);let Pt=Oh(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.bufferData(q.PIXEL_PACK_BUFFER,St.byteLength,q.STREAM_READ),q.readPixels(H,j,J,K,vt.convert(Qt),vt.convert(ne),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Ne=z!==null?Q.get(z).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,Ne);let Me=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await jf(q,Me,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,fe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,St),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(fe),q.deleteSync(Me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,H=null,j=0){let J=Math.pow(2,-j),K=Math.floor(I.image.width*J),St=Math.floor(I.image.height*J),Et=H!==null?H.x:0,Mt=H!==null?H.y:0;it.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,Et,Mt,K,St),A.unbindTexture()},this.copyTextureToTexture=function(I,H,j=null,J=null,K=0,St=0){let Et,Mt,Ct,Lt,Qt,ne,Pt,fe,Ne,Me=I.isCompressedTexture?I.mipmaps[St]:I.image;if(j!==null)Et=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,Lt=j.min.x,Qt=j.min.y,ne=j.isBox3?j.min.z:0;else{let Ie=Math.pow(2,-K);Et=Math.floor(Me.width*Ie),Mt=Math.floor(Me.height*Ie),I.isDataArrayTexture?Ct=Me.depth:I.isData3DTexture?Ct=Math.floor(Me.depth*Ie):Ct=1,Lt=0,Qt=0,ne=0}J!==null?(Pt=J.x,fe=J.y,Ne=J.z):(Pt=0,fe=0,Ne=0);let be=vt.convert(H.format),Ze=vt.convert(H.type),Tt;H.isData3DTexture?(it.setTexture3D(H,0),Tt=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),Tt=q.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),Tt=q.TEXTURE_2D),A.activeTexture(q.TEXTURE0),A.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);let on=A.getParameter(q.UNPACK_ROW_LENGTH),ae=A.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=A.getParameter(q.UNPACK_SKIP_PIXELS),Vn=A.getParameter(q.UNPACK_SKIP_ROWS),fi=A.getParameter(q.UNPACK_SKIP_IMAGES);A.pixelStorei(q.UNPACK_ROW_LENGTH,Me.width),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me.height),A.pixelStorei(q.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(q.UNPACK_SKIP_ROWS,Qt),A.pixelStorei(q.UNPACK_SKIP_IMAGES,ne);let Sr=I.isDataArrayTexture||I.isData3DTexture,ge=H.isDataArrayTexture||H.isData3DTexture;if(I.isDepthTexture){let Ie=Q.get(I),di=Q.get(H),ye=Q.get(Ie.__renderTarget),pi=Q.get(di.__renderTarget);A.bindFramebuffer(q.READ_FRAMEBUFFER,ye.__webglFramebuffer),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let wr=0;wr<Ct;wr++)Sr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(I).__webglTexture,K,ne+wr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,St,Ne+wr)),q.blitFramebuffer(Lt,Qt,Et,Mt,Pt,fe,Et,Mt,q.DEPTH_BUFFER_BIT,q.NEAREST);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(K!==0||I.isRenderTargetTexture||Q.has(I)){let Ie=Q.get(I),di=Q.get(H);A.bindFramebuffer(q.READ_FRAMEBUFFER,C),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,L);for(let ye=0;ye<Ct;ye++)Sr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ie.__webglTexture,K,ne+ye):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,K),ge?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,di.__webglTexture,St,Ne+ye):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,di.__webglTexture,St),K!==0?q.blitFramebuffer(Lt,Qt,Et,Mt,Pt,fe,Et,Mt,q.COLOR_BUFFER_BIT,q.NEAREST):ge?q.copyTexSubImage3D(Tt,St,Pt,fe,Ne+ye,Lt,Qt,Et,Mt):q.copyTexSubImage2D(Tt,St,Pt,fe,Lt,Qt,Et,Mt);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ge?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(Tt,St,Pt,fe,Ne,Et,Mt,Ct,be,Ze,Me.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(Tt,St,Pt,fe,Ne,Et,Mt,Ct,be,Me.data):q.texSubImage3D(Tt,St,Pt,fe,Ne,Et,Mt,Ct,be,Ze,Me):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,St,Pt,fe,Et,Mt,be,Ze,Me.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,St,Pt,fe,Me.width,Me.height,be,Me.data):q.texSubImage2D(q.TEXTURE_2D,St,Pt,fe,Et,Mt,be,Ze,Me);A.pixelStorei(q.UNPACK_ROW_LENGTH,on),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ae),A.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),A.pixelStorei(q.UNPACK_SKIP_ROWS,Vn),A.pixelStorei(q.UNPACK_SKIP_IMAGES,fi),St===0&&H.generateMipmaps&&q.generateMipmap(Tt),A.unbindTexture()},this.initRenderTarget=function(I){Q.get(I).__webglFramebuffer===void 0&&it.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?it.setTextureCube(I,0):I.isData3DTexture?it.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?it.setTexture2DArray(I,0):it.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){N=0,U=0,z=null,A.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function js(i,t){let e=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!e&&!n)return(h,f,d)=>[h,f,d];let r=(i.rotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=Math.cos(e),l=Math.sin(e),c=Math.cos(n),u=Math.sin(n);return(h,f,d)=>{let m=h-i.x,x=d-i.z,g=m*s+x*o,p=f-t,_=-m*o+x*s,M=p*a-_*l,v=p*l+_*a,y=g*c-M*u,w=g*u+M*c;return[i.x+y*s-v*o,t+w,i.z+y*o+v*s]}}function Sn(i,t,e,n){if(!e.rotation_x&&!e.rotation_z)return;let r=js(e,n);for(let s=t;s<i.length;s+=3){let[o,a,l]=r(i[s],i[s+1],i[s+2]);i[s]=o,i[s+1]=a,i[s+2]=l}}function Od(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Bd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var B_=[],Bu=new Map,z_=0;function to(i){B_=i,Bu=new Map(i.flatMap(t=>t.items.map(e=>[k_(t.id,e.id),e]))),z_++}function k_(i,t){return`pack:${i}:${t}`}function V_(i){return i.startsWith("pack:")}var G_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function zd(i){return Fe(i)?.parts.find(t=>t.screen)}function Fe(i){if(!V_(i))return;let t=Bu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=G_[e];return r?Bu.get(`pack:${r}:${n.join(":")}`):void 0}function qe(i,t){let e=Fe(t.type),n=wn(i,t.x,t.z);if(t.mount_y!=null)return n+t.mount_y;if(t.type==="lamp_wall")return n+Ll;if(kd.has(t.type))return Math.max(n,is(i,t.x,t.z)-Vd(t.type,t.h));if(t.type==="led_strip")return is(i,t.x,t.z)-.04-Math.max(.02,t.h);switch(e?.mount){case"surface":return Gd(i,t.x,t.z);case"wall":return n+(e.wall_y??1);case"ceiling":return is(i,t.x,t.z)-t.h;default:return n+(e?0:eo(t))}}var no={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ur(i){return i==="hedge"||i==="fence"||i==="pergola"}function io(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function W_(i,t,e,n){return rs(i)+(t.offset??0)+no[t.type]-io(t,e,n)}function rs(i){return i.elevation>.3?0:-.2}function Hd(i,t,e){let n=(i.outdoor??[]).filter(s=>!ur(s.type)&&s.type!=="pool"&&Xt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?W_(i,r,t,e):rs(i)}function zu(i,t){let e=rs(i)+(t.offset??0);return t.above?e+ku(t)-.15:e+no.pool}function ku(i){return i.height&&i.height>.3?i.height:1.2}var X_={type:"none",pitch:35,overhang:.4},mT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...X_}};var Wd=.3;var Xd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ll=1.75;var kd=new Set(["lamp_downlight","lamp_spot"]);function Vd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var qd=new Set(["stairs","stairs_u"]);function Yd(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function $d(i){return Xd.has(i)||!!Fe(i)?.light}var q_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function eo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Gd(i,t,e){let n=wn(i,t,e);for(let r of i.furniture)!(q_.has(r.type)||Fe(r.type)?.surface)||!Xt([t,e],Ui(r))||(n=Math.max(n,wn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var H_=new Set([...Xd,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Y_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],$_=["standard","bars","glass_wall"];function hr(i,t){return i.type==="door"?i.style&&Y_.includes(i.style)?i.style:t?"front":"interior":i.style&&$_.includes(i.style)?i.style:"standard"}function Zd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Jd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function xn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function ro(i){return Math.abs(xn(i))}function fr(i){let t=xn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Kd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Qd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Ui(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Xt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Te(i,t){return(t?.elevation??i.elevation)-i.elevation}function ai(i,t){return t?.ceiling_height??t?.height??i.height}function jd(i,t,e){return i.rooms.find(n=>Xt([t,e],n.points))}function wn(i,t,e){return Te(i,jd(i,t,e))}function is(i,t,e){let n=jd(i,t,e);return Te(i,n)+ai(i,n)}function ke(i){let t=i.rooms.filter(e=>e.points.length>=3);return t.length?Math.max(...t.map(e=>(e.elevation??i.elevation)+ai(i,e))):i.elevation+i.height}var tp=i=>Math.round(i*1e3)/1e3;function Z_(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function ep(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Xt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=xn(a)>=0?1:-1,c=Ui({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Ui({...t,x:u,z:h});for(let m=0;m<a.length;m++){let x=a[m],g=a[(m+1)%a.length],p=Math.hypot(g[0]-x[0],g[1]-x[1]);if(p<.05)continue;let _=[(g[0]-x[0])/p,(g[1]-x[1])/p],M=[-_[1]*l,_[0]*l],v=Z_(i,o.id,x,g)?r/2:0,y=0;d.forEach((w,R)=>{let b=(w[0]-x[0])*_[0]+(w[1]-x[1])*_[1];if(b<-.01||b>p+.01)return;let S=(w[0]-x[0])*M[0]+(w[1]-x[1])*M[1]-v,E=c[R];(E[0]-x[0])*M[0]+(E[1]-x[1])*M[1]-v<-s||S<y&&(y=S)}),y<-1e-4&&(u-=M[0]*y,h-=M[1]*y)}}return[tp(u),tp(h)]}var He=(i,t)=>[i[0]-t[0],i[1]-t[1]],Oi=(i,t)=>[i[0]+t[0],i[1]+t[1]],li=(i,t)=>[i[0]*t,i[1]*t],oo=(i,t)=>i[0]*t[0]+i[1]*t[1],ss=(i,t)=>i[0]*t[1]-i[1]*t[0],so=i=>Math.hypot(i[0],i[1]),Jn=i=>{let t=so(i)||1;return[i[0]/t,i[1]/t]},np=i=>[-i[1],i[0]],ip=i=>[i[1],-i[0]];function Bi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(xn(S))<1e-6)continue;let E=xn(S)>0,P=S.map(a);for(let T=0;T<S.length;T++){let F=P[T],C=P[(T+1)%S.length];F!==C&&l.push(E?{u:F,v:C,room:b.id,edge:T,forward:!0}:{u:C,v:F,room:b.id,edge:T,forward:!1})}}let c=s.map(b=>[a(b.a),a(b.b)]),u=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((E,P)=>{if(!E||P>=S.length)return;let T=S[P],F=He(S[(P+1)%S.length],T),C=so(F);for(let L of E)L>n&&L<C-n&&u.add(a(Oi(T,li(F,L/C))))})}let h=[];for(let b of l){let S=o[b.u],E=o[b.v],P=He(E,S),T=so(P),F=li(P,1/T),C=[];for(let N=0;N<o.length;N++){if(N===b.u||N===b.v)continue;let U=He(o[N],S),z=oo(U,F);z<=n||z>=T-n||Math.abs(ss(F,U))<=n&&C.push({t:z,id:N})}C.sort((N,U)=>N.t-U.t);let L=[{t:0,id:b.u},...C,{t:T,id:b.v}];for(let N=0;N+1<L.length;N++){let U=L[N],z=L[N+1],O=b.forward?U.t:T-z.t,k=b.forward?z.t:T-U.t;h.push({u:U.id,v:z.id,room:b.room,edge:b.edge,t0:O,t1:k})}}let f=new Map;for(let b of h){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,E=f.get(S);E||f.set(S,E=[]),E.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),m=new Map;for(let b of h){let S=`${b.room}:${b.edge}`;m.set(S,[...m.get(S)??[],b.t0].sort((E,P)=>E-P))}let x=b=>{let S=i.find(P=>P.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(S))return S;let E=m.get(`${b.room}:${b.edge}`)??[];return S[E.indexOf(b.t0)]??null},g=b=>{let S=b.map(x).filter(P=>typeof P=="number"&&P>0);if(S.length)return Math.min(...S);let E=b.map(P=>i.find(T=>T.id===P.room)?.ceiling_height);return E.every(P=>typeof P=="number"&&P>0)?Math.max(...E):void 0},p=b=>{let S=b.map(E=>i.find(P=>P.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return S.length?Math.max(...S):void 0},_=b=>b.some(S=>x(S)===0),M=[],v=[];for(let b of f.values()){let S=b[0],E=b.find(P=>P!==S&&P.u===S.v&&P.v===S.u&&P.room!==S.room);for(let P of b)P!==S&&P!==E&&P.room!==S.room&&r.push(`overlap:${S.room}:${P.room}`);if(_(E?[S,E]:[S])){E&&M.push([S.room,E.room]);continue}if(E){let P=p([S,E])??t.interior;v.push({a:S.u,b:S.v,left:P/2,right:P/2,exterior:!1,roomLeft:S.room,roomRight:E.room,sources:[d(S),d(E)],height:g([S,E])})}else v.push({a:S.u,b:S.v,left:0,right:p([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:g([S])})}let y=b=>Jn(He(o[b.b],o[b.a]));for(let b of v){if(b.exterior||b.free)continue;let S=new Set;for(let P of[b.a,b.b])for(let T of v)!T.exterior||T.free||T.a!==P&&T.b!==P||Math.abs(ss(y(b),y(T)))>1e-6||(T.roomLeft===b.roomLeft?S.add("left"):T.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let E=b.left+b.right;S.has("left")?(b.left=0,b.right=E):(b.left=E,b.right=0)}s.forEach((b,S)=>{let[E,P]=c[S];if(E===P)return;let T=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],F=i.find(N=>N.points.length>=3&&Xt(T,N.points))?.id??null,C=(b.thickness??t.interior)/2,L=typeof b.height=="number"&&b.height>0?b.height:void 0;v.push({free:b.id,a:E,b:P,left:C,right:C,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:L})}),v=K_(v,o,u);let w=j_(v,o);return{walls:v.map((b,S)=>{let E=o[b.a],P=o[b.b],T=w.get(`${S}:a`),F=w.get(`${S}:b`),C=ty([T.right,F.left,P,F.right,T.left,E],1e-6);return{id:J_(E,P),a:[E[0],E[1]],b:[P[0],P[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:C,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:M}}function J_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function rp(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function K_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=rp(l)),c.a!==o&&(c=rp(c)),l.a===c.b)continue;let u=Jn(He(t[l.b],t[l.a])),h=Jn(He(t[c.b],t[c.a]));if(Math.abs(ss(u,h))>1e-6||oo(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:Q_(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function Q_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function j_(i,t){let e=new Map;i.forEach((r,s)=>{let o=Jn(He(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:li(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Oi(o,li(np(c.d),c.left)),right:Oi(o,li(ip(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let u=s[c],h=s[(c+1)%s.length],f=Oi(o,li(np(u.d),u.left)),d=Oi(o,li(ip(h.d),h.right)),m=ss(u.d,h.d);if(Math.abs(m)<1e-4)continue;let x=ss(He(d,f),h.d)/m,g=Oi(f,li(u.d,x));so(He(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function ty(i,t){let e=i.filter((r,s)=>so(He(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=He(o,s),c=He(a,o);if(Math.abs(ss(Jn(l),Jn(c)))<1e-7&&oo(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function Vu(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Jn(He(r,n));return Oi(n,li(s,e))}function dr(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Jn(He(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Oi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function pr(i,t,e){if(!t.wall)return ey(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Vu(e.room,0,t.offset);return{wall:n,s:oo(He(r,n.a),Jn(He(n.b,n.a)))}}function ey(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Vu(t,e,n);return{wall:r,s:oo(He(o,r.a),Jn(He(r.b,r.a)))}}return null}var zi=(i,t,e)=>(t[0]-i[0])*(e[1]-i[1])-(t[1]-i[1])*(e[0]-i[0]);function ki(i){return i.reduce((t,e,n)=>{let r=i[(n+1)%i.length];return t+e[0]*r[1]-r[0]*e[1]},0)/2}var ny=(i,t,e)=>Math.abs(zi(t,e,i))<1e-8&&i[0]>=Math.min(t[0],e[0])-1e-8&&i[0]<=Math.max(t[0],e[0])+1e-8&&i[1]>=Math.min(t[1],e[1])-1e-8&&i[1]<=Math.max(t[1],e[1])+1e-8;function ao(i,t){let e=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let s=i[r],o=i[n];if(ny(t,s,o))return!0;s[1]>t[1]!=o[1]>t[1]&&t[0]<(o[0]-s[0])*(t[1]-s[1])/(o[1]-s[1])+s[0]&&(e=!e)}return e}function sp(i){let t=i.map((r,s)=>s);ki(i)<0&&t.reverse();let e=[],n=i.length*i.length;for(;t.length>3&&n-- >0;){let r=!1;for(let s=0;s<t.length;s++){let o=t[(s+t.length-1)%t.length],a=t[s],l=t[(s+1)%t.length],c=zi(i[o],i[a],i[l]);if(Math.abs(c)<1e-8){t.splice(s,1),r=!0;break}if(!(c<0||t.some(u=>u!==o&&u!==a&&u!==l&&zi(i[o],i[a],i[u])>=-1e-8&&zi(i[a],i[l],i[u])>=-1e-8&&zi(i[l],i[o],i[u])>=-1e-8))){e.push([o,a,l]),t.splice(s,1),r=!0;break}}if(!r)return[]}return t.length===3&&Math.abs(zi(i[t[0]],i[t[1]],i[t[2]]))>1e-8&&e.push([...t]),e}function op(i,t){let e=i,n=ki(t)<0?-1:1;for(let r=0;r<t.length&&e.length;r++){let s=t[r],o=t[(r+1)%t.length],a=e;e=[];for(let l=0;l<a.length;l++){let c=a[l],u=a[(l+1)%a.length],h=n*zi(s,o,c),f=n*zi(s,o,u);if(h>=-1e-8&&e.push(c),h>=-1e-8!=f>=-1e-8){let d=h/(h-f);e.push([c[0]+(u[0]-c[0])*d,c[1]+(u[1]-c[1])*d,c[2]+(u[2]-c[2])*d])}}}return e.filter((r,s)=>{let o=e[(s+1)%e.length];return Math.hypot(r[0]-o[0],r[1]-o[1])>1e-8})}function Fl(i,t,e){let n=[0,1],r=e[0]-t[0],s=e[1]-t[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],u=c[0]-l[0],h=c[1]-l[1],f=r*h-s*u;if(Math.abs(f)<1e-8)continue;let d=((l[0]-t[0])*h-(l[1]-t[1])*u)/f,m=((l[0]-t[0])*s-(l[1]-t[1])*r)/f;d>1e-8&&d<1-1e-8&&m>=-1e-8&&m<=1+1e-8&&n.push(d)}n.sort((a,l)=>a-l);let o=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],u=(l+c)/2;c-l>1e-8&&ao(i,[t[0]+r*u,t[1]+s*u])&&o.push([l,c])}return o}function ap(i,t){return t.every((e,n)=>ao(i,e)&&Fl(i,e,t[(n+1)%t.length]).reduce((r,[s,o])=>r+o-s,0)>1-1e-8)}var co=Math.PI/180;function Bn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function bn(i){let t=Bn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*co),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*co);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=hp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var iy=.14;function cp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function up(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Xt([t,e],s.points))continue;let[u,h]=ci(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((f?null:as(Vi(s,{u0:d,u1:d,a:d,b:d}),u,h))??bn(s).y(h))-iy;n=n===null?x:Math.max(n,x)}return n}function Gu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=xn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=lp([a[0]-o[0],a[1]-o[1]]),u=lp([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],m=h[1]+f[1],x=Math.hypot(d,m);if(x<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+m*h[1])/x,p=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*p,a[1]+m/x*t*p])}return r}function lp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function uo(i,t){if(i.points&&i.points.length>=3)return Gu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var lo=Math.tan(30*co);function hp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+lo*(i-o+s))/(2*lo))),u=a+(c-s)*lo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*lo:f<=i-o?l+(i-o-f)*lo:e+(i-f)*r}}function Vi(i,t){let e=ry(i,t);if(!i.points||i.points.length<3)return e;let n=uo(i,Math.max(0,Math.min(t.u0,t.u1,t.a,t.b))).map(([c,u])=>ci(i,c,u)),r=sp(n),s=e.faces.flatMap(c=>r.map(u=>op(c,u.map(h=>n[h])))).filter(c=>c.length>=3&&Math.abs(ki(c))>1e-8),o=(c,u,h)=>[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h],a=e.ridges.flatMap(([c,u])=>Fl(n,c,u).map(([h,f])=>[o(c,u,h),o(c,u,f)])),l=[];return n.forEach((c,u)=>{let h=n[(u+1)%n.length],f=[0,...e.faces.flatMap(d=>Fl(d.map(([m,x])=>[m,x]),c,h).flat())].filter(d=>d<1-1e-8).sort((d,m)=>d-m);for(let d=0;d<f.length;d++){if(d&&f[d]-f[d-1]<1e-8)continue;let m=f[d],x=c[0]+(h[0]-c[0])*m,g=c[1]+(h[1]-c[1])*m;l.push([x,g,as(e,x,g)??bn(i).y(g)])}}),{faces:s,rim:l,ridges:a,gable:null}}function ry(i,t){let e=Bn(i),n=bn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,M)=>[_,M,n.y(M)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*co),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*co);if(i.shape==="pent"){let _=[u,h,f,d];return{faces:[_],rim:_,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],y=i.shape==="pyramid"?[[u,h,M],[h,f,M],[f,d,M],[d,u,M]]:[[u,h,v,M],[M,v,f,d],[d,u,M],[h,f,v]],w=i.shape==="pyramid"?[[u,M],[d,M],[h,M],[f,M]]:[[M,v],[u,M],[d,M],[h,v],[f,v]];return{faces:y,rim:[u,h,f,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),M=_+(n.rh-_)*.55,v=m>1e-6?Math.min(n.vr,(M-i.eave_a)/m):n.vr,y=x>1e-6?Math.max(n.vr,r-(M-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,m)),R=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],S=[a,v,M],E=[a,y,M],P=[l,v,M],T=[l,y,M];return{faces:[[u,h,P,b,R,S],[R,b,T,f,d,E],[E,S,R],[P,T,b]],rim:[u,h,P,T,f,d,E,S],ridges:[[R,b],[S,R],[E,R],[P,b],[T,b]],gable:[[0,n.y(0)],[v,M],[y,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=hp(r,i.eave_a,i.eave_b,m,x),M=[a,_.vla,_.yla],v=[l,_.vla,_.yla],y=[a,r-_.vlb,_.ylb],w=[l,r-_.vlb,_.ylb],R=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[u,h,v,M],[M,v,b,R],[R,b,w,y],[y,w,f,d]],rim:[u,h,v,b,w,f,d,y,R,M],ridges:[[R,b],[M,v],[y,w]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,h,p,g],[g,p,f,d]],rim:[u,h,p,f,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function as(i,t,e){let n=null;for(let r of i.faces){if(!ao(r.map(_=>[_[0],_[1]]),[t,e]))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],u=o[1]-s[1],h=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],m=c*d-u*f,x=u*h-l*d,g=l*f-c*h;if(Math.abs(x)<1e-9)continue;let p=s[2]-(m*(t-s[0])+g*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function ci(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function sy(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Dl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=sy(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Hu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Bn(t),n=bn(t).rh,r=Vi(i,{u0:0,u1:0,a:0,b:0}),s=bn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[p,_]=ci(i,x,g);return as(r,p,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let m=.5;m<h;m+=.05)if(o(l+u*m)>=n-.02){f=l+u*m;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function fp(i,t){let e=Hu(i,t),n=Bn(e),r=bn(e),s=Vi(i,{u0:0,u1:0,a:0,b:0}),o=bn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[x,g]=ci(i,d,m);return as(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,m=c*(f+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),_=1/0,M=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;r.y(S)>p+.02&&(_=Math.min(_,S),M=Math.max(M,S))}if(!(M-_>.05))continue;let v=n.at(x,_),y=n.at(g,M),w=ci(i,v[0],v[1]),R=ci(i,y[0],y[1]);u.push({u0:Math.min(w[0],R[0]),u1:Math.max(w[0],R[0]),v0:Math.min(w[1],R[1]),v1:Math.max(w[1],R[1])})}return u}function os(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),u=r(l);if(c&&s.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function dp(i,t){let e=os(i,0,t.u0,!0),n=os(i,0,t.u1,!1),r=os(os(i,0,t.u0,!1),0,t.u1,!0),s=os(r,1,t.v0,!0),o=os(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(ro(a.map(l=>[l[0],l[1]])))>1e-6)}function Nl(i,t,e){let n=Bn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(u=>r.some(h=>Xt(u,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Ul(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function oy(i){return bn(i).rh}function pp(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Dl(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>oy(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&f>=Math.min(u.z0,u.z1)&&f<=Math.max(u.z0,u.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function Tn(i,t){let e=[t.roomLeft,t.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return e.length?{bottom:Math.min(...e.map(n=>Te(i,n))),top:Math.max(...e.map(n=>Te(i,n)+Math.min(ai(i,n),t.height??1/0)))}:{bottom:0,top:Math.min(i.height,t.height??i.height)}}function Ol(i,t,e){let n=dr(t,i.rooms,i.walls??[]),r=n&&pr(e,t,n);if(!n||!r)return null;let s=r.wall,o=Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1]);if(o<1e-6)return null;let a=[(s.b[0]-s.a[0])/o,(s.b[1]-s.a[1])/o],l=s.roomLeft===n.room.id,c=i.rooms.find(L=>L.id===n.room.id||s.free&&L.id===s.roomLeft)??n.room,u=s.free?void 0:i.rooms.find(L=>L.id===(l?s.roomRight:s.roomLeft)),h=l?[-a[1],a[0]]:[a[1],-a[0]],f=Math.min(t.width,o),d=Math.max(0,Math.min(o-f,r.s-f/2)),m=[s.a[0]+a[0]*d,s.a[1]+a[1]*d],x=Te(i,c),g=u?Te(i,u):x,p=Math.min(x,g),_=Math.max(x,g),M={opening:t,room:c,other:u,wall:s,start:m,axis:a,toRoom:h,width:f,low:p,high:_,threshold:t.type==="window"?x:_,ceiling:Math.min(x+ai(i,c),u?g+ai(i,u):1/0)};if(!t.steps||!u||_-p<.001||t.type==="window")return M;let v=t.steps.side==="room",y=v?c:u,w=v?h:[-h[0],-h[1]],R=Te(i,y),b=R===_,S=v?l?s.left:s.right:l?s.right:s.left,E=t.steps.depth,P=t.steps.count;if(!Number.isFinite(E)||E<.1||E>10||!Number.isInteger(P)||P<1||P>30)return M;let T=(L,N)=>[m[0]+a[0]*L+w[0]*N,m[1]+a[1]*L+w[1]*N],F=[T(0,-.005),T(f,-.005),T(f,S+E),T(0,S+E)],C=[T(.01,S+.01),T(f-.01,S+.01),T(f-.01,S+E-.01),T(.01,S+E-.01)];return C.every((L,N)=>Xt(L,y.points)&&Wu(L,C[(N+1)%C.length],[y.points]).length===0)&&(M.threshold=v?g:x,M.stair={room:y,toward:w,face:S,count:P,depth:E,recess:b,bay:F}),M}function mp(i,t){let e=o=>o.reduce((a,l,c)=>{let u=o[(c+1)%o.length];return a+l[0]*u[1]-u[0]*l[1]},0),n=e(t)>=0?1:-1,r=[],s=i;for(let o=0;o<t.length&&s.length>=3;o++){let a=t[o],l=t[(o+1)%t.length],c=d=>n*((l[0]-a[0])*(d[1]-a[1])-(l[1]-a[1])*(d[0]-a[0])),u=d=>{let m=[];return s.forEach((x,g)=>{let p=s[(g+1)%s.length],_=d*c(x),M=d*c(p);if(_>=-1e-9&&m.push(x),_>=-1e-9!=M>=-1e-9){let v=_/(_-M);m.push([x[0]+(p[0]-x[0])*v,x[1]+(p[1]-x[1])*v])}}),m},h=u(-1),f=u(1);h.length>=3&&Math.abs(e(h))>1e-8&&r.push(h),s=f}return r}function Wu(i,t,e){let n=[0,1],r=t[0]-i[0],s=t[1]-i[1];for(let l of e)l.forEach((c,u)=>{let h=l[(u+1)%l.length],f=h[0]-c[0],d=h[1]-c[1],m=r*d-s*f;if(Math.abs(m)<1e-9)return;let x=((c[0]-i[0])*d-(c[1]-i[1])*f)/m,g=((c[0]-i[0])*s-(c[1]-i[1])*r)/m;x>0&&x<1&&g>=0&&g<=1&&n.push(x)});n.sort((l,c)=>l-c);let o=l=>[i[0]+r*l,i[1]+s*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!e.some(c=>Xt(o((n[l]+n[l-1])/2),c))&&a.push([o(n[l-1]),o(n[l])]);return a}function Bl(i,t){let e=xn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let m=f/(f-d);n.push([u[0]+(h[0]-u[0])*m,u[1]+(h[1]-u[1])*m])}}}return n}function gp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var zn=1e-4;function Xu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function xp(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>zn&&a<1-zn&&l>-zn&&l<1+zn?a:null}function qu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=zn||o>=1-zn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<zn?o:null}function ay(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(xp(n,r,o,a)!==null||qu(o,n,r)!==null||qu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<zn)return!0}}return Xt(i[0],t)||Xt(t[0],i)}function ly(i){let t=i.map(s=>Xu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],u=[0,1];t.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let m=h[d],x=h[(d+1)%h.length],g=xp(l,c,m,x)??qu(m,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<zn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];t.some((g,p)=>p!==o&&Xt(x,g))||e.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<zn&&Math.hypot(p[0]-d[0],p[1]-d[1])<zn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Xu(o)>1e-6&&n.push(o)}return n}function Yu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&ay(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:ly(s))}function cy(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function bp(i,t,e=.03){return i.every(n=>Xt(n,t)||t.some((r,s)=>cy(n,r,t[(s+1)%t.length])<=e))}function $u(i,t){let e=Xu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var Kn=Vt(3662079,.95),Zu=Vt(3662079,1),Qn=Vt(5995775,.34),kl=Vt(5995775,.22),zl=[-.55,.83],te=-1,Vl=16,mr=32,vp=48,Ju=64,oe=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=te,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Yt;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),this.uv&&t.setAttribute("uv",new Ut(this.uv,2)),this.tile&&t.setAttribute("tile",new Ut(this.tile,2)),t.computeBoundingSphere(),t}},We=class{p=[];c=[];f=[];seg(t,e,n=Kn,r=te){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,te);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,te),this.seg(c,a,n,s)}geometry(){let t=new Yt;return t.setAttribute("position",new Ut(this.p,3)),t.setAttribute("color",new Ut(this.c,3)),t.setAttribute("fold",new Ut(this.f,1)),t}};function _p(i,t,e,n){let s=i.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((m,x)=>m+(f.p[x]-m)*d),c:h.c.map((m,x)=>m+(f.c[x]-m)*d),uv:h.uv&&f.uv?h.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let m=0;m<3;m++){let x=h*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=f[m].p[g],i.c[x*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[m].tile[g];i.f[x]=d}},c=(h,f)=>{let d=i.p.length/9;for(let m of h)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(b=>b.p[1]>e+1e-6),m=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),M=f[_],v=f[(_+1)%3],y=f[(_+2)%3],w=g(M,v),R=g(y,M);p===1?(l(h,[M,w,R],n),c([w,v,y],x),c([w,y,R],x)):(l(h,[M,w,R],x),c([w,v,y],n),c([w,y,R],n))}}function yp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ce=Math.PI/180;function Vt(i,t){let e=new tt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function uy(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function gr(i,t=[]){let e=i.map(([n,r])=>new ee(n,r));return Fs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new ee(r,s))))}function Mp(i,t,e,n,r,s,o){let a=new tt(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=t[d],x=t[(d+1)%4],g=e[d],p=e[(d+1)%4],_=x[0]-m[0],M=x[1]-m[1],v=Math.hypot(_,M);if(v<1e-6)continue;let w=.8+.28*((M/v*zl[0]-_/v*zl[1]+1)/2),R=(g[0]+p[0]-m[0]-x[0])/2*(-M/v)+(g[1]+p[1]-m[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,r-n)))),S=Vt(s,l(n)*w).lerp(a,b),E=Vt(s,l(r)*w).lerp(a,b);i.tri([m[0],n,m[1]],[g[0],r,g[1]],[p[0],r,p[1]],S,E,E),i.tri([m[0],n,m[1]],[p[0],r,p[1]],[x[0],n,x[1]],S,E,S)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function Sp(i,t,e,n,r,s,o,a,l,c){let u=new tt(l),h=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;h.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let f=(d,m)=>{let x=t(d,h[m%c].s);return[x[0],h[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=Vt(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(f(e,d),f(n,d+1),f(n,d),x),i.tri(f(e,d),f(e,d+1),f(n,d+1),x)}for(let d of[e,n]){let m=t(d,r),x=[m[0],s,m[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),u)}}function ve(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??te,u=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),h=(o.holes??[]).map(m=>uy(m)>0?[...m].reverse():m),f=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:gr(t,h);if(o.topFace!==!1){let m=new tt(s);for(let[x,g,p]of d){let _=f[x],M=f[g],v=f[p];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[M[0],a(M),M[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=Vt(r,.55);for(let[x,g,p]of d){let _=f[x],M=f[g],v=f[p];i.tri([_[0],e,_[1]],[M[0],e,M[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...h])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],_=p[0]-g[0],M=p[1]-g[1],v=Math.hypot(_,M);if(v<1e-6||o.skipSide?.(g,p))continue;let w=.8+.28*((M/v*zl[0]-_/v*zl[1]+1)/2),R=a(g),b=a(p),S=Vt(r,u(e)*w),E=Vt(r,u(R)*w),P=Vt(r,u(b)*w);i.tri([g[0],e,g[1]],[g[0],R,g[1]],[p[0],b,p[1]],S,E,P,void 0,c),i.tri([g[0],e,g[1]],[p[0],b,p[1]],[p[0],e,p[1]],S,P,S,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},dt=Vt(5995775,.3),Jt=Vt(5995775,.17),qt=Vt(3662079,.45),ls=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Cp(n)}rotated(t,e,n){let r=n*ce,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let u=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];ve(this.buf,Ku(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Ku(l)&&(l.reverse(),c.reverse()),Mp(this.buf,l,c,n,r,s,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,u);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,u),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,u=12,h=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(_,M)=>t==="x"?this.tf(_,M):this.tf(M,_),p=this.buf.p.length;if(Sp(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,u),this.mirrored&&eh(this.buf,p),h)for(let _ of[m-o/2,m+o/2])for(let M=0;M<u;M++){let v=M/u*Math.PI*2,y=(M+1)/u*Math.PI*2;this.line(g(_,x+Math.sin(v)*f),g(_,x+Math.sin(y)*f),d+Math.cos(v)*f,d+Math.cos(y)*f,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(ve(this.buf,Ku(u),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=dt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,te)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Cp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Ku(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function xr(i,t,e,n,r,s,o=D.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function ho(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let h=t+c*u;i.seg(h,n,s,h,r,s,Jt)}for(let u=0;u<o;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,s+.012,h+Math.min(.1,c/4),f,s+.012,qt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,qt)}}}function wp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);xr(i,t,e,.07,.05,.05,D.wood,!0),i.pad(s,o,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,dt),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,D.fabric,D.fabricTop,dt),i.pad(s,s+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,dt),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,dt);let d=(o-c-(s+c))/r;for(let m=0;m<r;m++){let x=s+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,D.cushion)}}function Tp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,m=r?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,D.wood);x(s+.06,a+.06),x(o-.06,a+.06),r||x(o-.06,a+c-.06);for(let b of m)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,D.fabric,D.fabricTop,.04,dt);for(let b of m){let[S,E]=b<0?[s+.02,s+c]:[o-c,o-.02];i.pad(S,E,.07,f-.08,a+c-.02,l,D.fabric,D.fabricTop,.04,dt)}i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,D.fabric,D.fabricTop,dt);for(let b of m)b<0?i.loft([s,s+u,a+u,l],[s,s+u*.5,a+u,l-.01],f-.08,n,D.fabric,D.fabricTop,dt):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],f-.08,n,D.fabric,D.fabricTop,dt);for(let b of m){let[S,E]=b<0?[s+u,s+c]:[o-c,o-u];i.pad(S,E,f-.08,d,l-h,l,D.fabric,D.fabricTop,.04,dt)}r||i.pad(o-h,o,f-.08,d,a+.02,a+c-.02,D.fabric,D.fabricTop,.04,dt);let g=s+u,p=r?o-u:o-h,_=Math.max(1,Math.round((p-g)/.62)),M=(p-g)/_;for(let b=0;b<_;b++){let S=g+M*b+.02,E=S+M-.04;i.pad(S,E,f-.08,f+.05,a+u+.02,a+c-.04,D.cushion,D.cushion,.04),i.loft([S+.01,E-.01,a+u*.55,a+u+.14],[S+.03,E-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,D.cushion)}let v=a+c,y=l-h;if(y-v<.2)return;let w=Math.max(1,Math.round((y-v)/.62)),R=(y-v)/w;for(let b of m)for(let S=0;S<w;S++){let E=v+R*S+.02,P=E+R-.04;b<0?(i.pad(s+u+.02,s+c-.04,f-.08,f+.05,E,P,D.cushion,D.cushion,.04),i.loft([s+u*.55,s+u+.14,E+.01,P-.01],[s+u*.4,s+u*.4+.06,E+.03,P-.03],f+.03,n*.93,D.cushion)):(i.pad(o-c+.04,o-u-.02,f-.08,f+.05,E,P,D.cushion,D.cushion,.04),i.loft([o-u-.14,o-u*.55,E+.01,P-.01],[o-u*.4-.06,o-u*.4,E+.03,P-.03],f+.03,n*.93,D.cushion))}}function hy(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);xr(i,t,e,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,r+.06,s,D.wood,D.woodTop,dt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,D.wood,D.woodTop,dt),i.box(o,a,n-.05,n,r,r+.09,D.wood,D.woodTop,Jt);let c=l+.2,u=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,s-.01,D.cushion,D.fabricTop,.025,Jt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,D.cushion,D.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let m=o+.1+f*d,x=r+.12,g=Math.min(.42,e*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,Jt)}}function fy(i,t,e,n){let r=Math.min(.46,n*.52);xr(i,t,e,r-.04,.035,.02,D.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,D.wood,D.woodTop,dt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,D.cushion,D.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,D.wood,D.woodTop,dt)}function dy(i,t,e,n){xr(i,t,e,n-.04,.06,.05,D.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,D.body)}function py(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,D.wood,D.woodTop,dt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,D.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,D.body,D.bodyTop,dt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Jt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,D.dark,D.dark,qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,D.metal)}function Gi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),ho(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function my(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,D.wood,D.woodTop,dt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,D.wood,D.woodTop,dt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,D.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,D.wood,D.woodTop,Jt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function gy(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Gi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,dt)}function xy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.white,D.whiteTop,dt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Jt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,qt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,qt)}function by(i,t,e,n){let r=e/2-Pp;i.box(-t/2,t/2,.02,n,-e/2,r,D.body,D.bodyTop,dt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,D.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Jt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Jt))}var Pp=.06;function Ip(i,t,e,n,r){let s=i.p.length;vy(i,t,e,n,r),t.mirror&&eh(i,s),Sn(i.p,s,t,e+t.h/2)}function vy(i,t,e,n,r){let s=t.rotation*ce,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,y)=>[t.x+l*v*o-y*a,t.z+l*v*a+y*o],u=e+.05,h=e+t.h-.02,f=new tt(.75,.1,.14),d=new tt(D.dark),m=new tt(D.accent),x=t.w/2-.006,g=(v,y,w)=>{let R=w/p,b=new tt(2043212).lerp(f,R),S=new tt(D.body).lerp(f,R*.8),E=Math.cos(w),P=Math.sin(w),T=(L,N)=>c(v+y*(L*E-N*P),t.d/2+L*P+N*E),F=(L,N,U,z)=>{let[O,k,V,ot]=L;i.tri([O[0],N,O[1]],[k[0],N,k[1]],[V[0],U,V[1]],z),i.tri([O[0],N,O[1]],[V[0],U,V[1]],[ot[0],U,ot[1]],z)},C=(L,N,U,z,O,k,V,ot=V)=>{let Z=[T(L,k),T(N,k),T(N,O),T(L,O)];F([Z[0],Z[1],Z[1],Z[0]],U,z,ot),F([Z[3],Z[2],Z[2],Z[3]],U,z,V),F([Z[0],Z[3],Z[3],Z[0]],U,z,V),F([Z[1],Z[2],Z[2],Z[1]],U,z,V),F([Z[0],Z[1],Z[2],Z[3]],z,z,V),F([Z[3],Z[2],Z[1],Z[0]],U,U,V)};return C(0,x,u,h,-Pp,0,S,b),C(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),C},p=1.83;g(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function _y(i,t,e,n){Gi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.dark,D.dark,dt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,qt)}}function yy(i,t,e,n){Gi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,dt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,dt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,D.whiteTop,D.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,D.metal,D.metal,qt),i.cyl(0,-e/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,D.metal)}function My(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,D.white,D.whiteTop,dt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,D.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,D.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,D.glass,D.glass,qt),i.cyl(-t/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function Sy(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,D.whiteTop,D.whiteTop,dt),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,qt),i.seg(r,n,s,o,n,a,qt),i.seg(o,.05,a,o,n,a,qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,qt)}function wy(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,D.white,D.whiteTop,dt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,D.white,D.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,D.white,D.whiteTop,12,dt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,D.whiteTop)}function Ty(i,t,e,n){Gi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,D.white,D.whiteTop,dt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,D.glass,D.glass,qt),i.cyl(0,-e/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,D.glass,D.glass,qt)}function Ey(i,t,e,n){Gi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,D.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,D.dark,D.dark,qt)}function Ay(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,D.pot,D.pot,10,dt),i.cyl(0,0,r*.08,s,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),u=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-s)*.16,D.plant,D.plantTop,8,a===o-1?Jt:null)}}function Ry(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,dt)}function Cy(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let u=0;u<r;u++){let h=e/2-o*u,f=h-o,d=s*(u+1);i.box(-t/2,t/2,0,d,f,h,D.wood,D.woodTop),i.seg(-t/2,d,h,t/2,d,h,dt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,dt);for(let u of[-t/2,t/2])i.seg(u,s,e/2,u,n,-e/2+o,Jt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),qt);for(let u=0;u<c;u+=3){let h=e/2-o*(u+.5),f=s*(u+1);i.seg(l,f,h,l,f+a,h,Jt)}}function Py(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:u}=Yd(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,m=t/2,x=-e/2+l;for(let R=0;R<s;R++){let b=e/2-c*R,S=u*(R+1);i.box(h,f,0,S,b-c,b,D.wood,D.woodTop),i.seg(h,S,b,f,S,b,dt)}i.seg(h,0,e/2,h,u,e/2,dt);let g=u*r,p=.2;i.box(h,f,0,g,-e/2,x,D.wood,D.woodTop),i.box(f,m,Math.max(0,g-p),g,-e/2,x,D.wood,D.woodTop),i.seg(h,g,x,f,g,x,dt);for(let R=0;R<o;R++){let b=x+c*R,S=u*(r+1+R);i.box(d,m,Math.max(0,S-u-p),S,b,b+c,D.wood,D.woodTop),i.seg(d,S,b,m,S,b,dt)}i.seg(h,u,e/2,h,g,x,Jt),i.seg(m,g,x,m,n,x+c*(o-1),Jt);let _=.9,M=f-.03,v=d+.03,y=x-.03,w=Math.max(1,o-4);i.seg(M,u+_,e/2-c/2,M,g+_,y,qt),i.seg(M,g+_,y,v,g+_,y,qt),i.seg(v,g+_,y,v,u*(r+w)+_,x+c*(w-.5),qt);for(let R=0;R<s;R+=3){let b=e/2-c*(R+.5);i.seg(M,u*(R+1),b,M,u*(R+1)+_,b,Jt)}for(let R of[M,v])i.seg(R,g,y,R,g+_,y,Jt);for(let R=2;R<w;R+=3){let b=x+c*(R+.5);i.seg(v,u*(r+1+R),b,v,u*(r+1+R)+_,b,Jt)}}function Iy(i,t,e,n){xr(i,t,e,.12,.03,.04,D.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,D.wood,D.woodTop,dt),ho(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Ly(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,D.wood,D.woodTop,dt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,D.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Jt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,qt)}}function Fy(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,D.wood,D.woodTop,dt),ho(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,D.body,D.bodyTop,dt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,dt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,D.metal,D.metal)}}function Ep(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,D.wood,D.woodTop,dt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,D.wood,D.woodTop,dt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,D.cushion,D.cushion,Jt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,D.wood,D.woodTop,dt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,D.wood,D.woodTop,dt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,D.cushion,D.cushion,Jt))}function Dy(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,D.metal,D.metal,12,Jt),i.cyl(0,0,r,n-.05,n,D.cushion,D.fabricTop,14,dt)}function Ny(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-r,r,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,D.fabric,D.cushion,dt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,D.fabric,D.fabricTop,dt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,D.metal)}function Uy(i,t,e,n){xr(i,t,e,.08,.04,.05,D.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,D.fabric,D.cushion,dt)}function Oy(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,D.body,D.bodyTop,dt),ho(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function By(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,D.dark,D.dark,qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,qt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Jt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,qt)}function zy(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,D.body,D.bodyTop,dt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,D.dark),ho(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,dt)}function ky(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,D.body,D.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,dt)}function Ap(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,D.white,D.whiteTop,dt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Jt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,qt),r||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Jt)}}function Vy(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,D.wood,D.woodTop,dt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,D.white,D.whiteTop,Jt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,D.whiteTop,D.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,D.wood,D.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,dt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Jt)}function Gy(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,r,n-.04,n,D.wood,D.woodTop,20,dt)}function Hy(i,t,e,n){xr(i,t,e,n-.03,.04,.03,D.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,D.wood,D.woodTop,dt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,D.body,D.bodyTop,Jt)}function Wy(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,D.dark,D.dark,qt)}function Xy(i,t,e,n){let r=ju;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,D.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,D.white,D.whiteTop,dt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Jt)}}function cs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,qt)}}function qy(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.dark,D.body,dt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,dt),cs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,qt);for(let a of[-1,1])cs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,dt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,D.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Jt)}function Yy(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,D.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,D.metal,D.metal,dt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Jt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,D.dark,D.body,14,dt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,D.glass,D.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,qt)}}function $y(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,D.dark,D.dark,16),i.cyl(0,0,s,n*.08,n*.78,D.dark,D.body,18,dt),i.cyl(0,0,s*.75,n*.78,n*.84,D.dark,D.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,D.dark,D.metal,dt),cs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,D.dark,D.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,D.dark,D.metal,16,dt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,qt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,D.dark,D.body)}function Zy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,D.white,D.whiteTop,dt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,D.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;cs(i,s,o,r,e/2+.004,24),cs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Jt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Jt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,D.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Jt)}function Jy(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,D.white,D.whiteTop,dt);for(let s of[-1,1])cs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,qt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,D.white,D.glass,Jt)}function Ky(i,t,e,n){let r=Wd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,D.metal,D.metal,dt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,D.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,D.accent,D.accent)}function Qy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.dark,D.body,dt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,D.dark,D.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Jt)}function jy(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,D.dark,D.body,dt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(u)*s,o+Math.sin(u)*s,e/2+.003,qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,D.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,D.dark,D.body)}function t1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,D.white,D.whiteTop,dt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Jt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Jt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,D.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,D.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,qt)}function e1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,D.white,D.whiteTop,dt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Jt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,D.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,D.dark,D.body,dt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,D.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,D.white,D.whiteTop,dt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,qt)}}var ju=.12;function th(i,t){let e=n1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function n1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=zd(i.type);if(s){let l=t?qe(t,i):0,c=(s.x-s.w/2)*e,u=(s.x+s.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?qe(t,i)-eo(i):0,a=i1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function i1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?qe(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:ju+.02,y1:ju+n-.02,z:e/2+.004};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function r1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new tt(1-r,1-r,1-r),a=new tt(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[m]),o,a,a),i.tri(h(c[d]),h(u[m]),h(c[m]),o,a,o)}Cp(t)&&eh(i,f)}function Gl(i,t,e,n,r=0){let s=i.p.length,o=t.p.length;s1(i,t,n.rotation_x||n.rotation_z?new oe:e,n,r),Sn(i.p,s,n,r+n.h/2),Sn(t.p,o,n,r+n.h/2)}function eh(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function s1(i,t,e,n,r){let s=Fe(n.type)?0:r-eo(n);if(Fe(n.type)||Math.abs(s)<.001)return Rp(i,t,e,n,r);let o=i.p.length,a=t.p.length;Rp(i,t,r<.05?e:new oe,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Rp(i,t,e,n,r){let s=n.rotation*ce,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new ls(i,t,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":wp(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":wp(u,h,f,d,1);break;case"sofa_l":Tp(u,h,f,d,!1);break;case"sofa_u":Tp(u,h,f,d,!0);break;case"bed":hy(u,h,f,d);break;case"chair":fy(u,h,f,d);break;case"table":dy(u,h,f,d);break;case"desk":py(u,h,f,d);break;case"nightstand":Gi(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,Jt);break;case"wardrobe":Gi(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":my(u,h,f,d);break;case"kitchen":gy(u,h,f,d);break;case"fridge":xy(u,h,f,d);break;case"fridge_smart":by(u,h,f,d);break;case"stove":_y(u,h,f,d);break;case"sink":yy(u,h,f,d);break;case"bathtub":My(u,h,f,d);break;case"shower":Sy(u,h,f,d);break;case"wc":wy(u,h,f,d);break;case"washbasin":Ty(u,h,f,d);break;case"tv_board":Ey(u,h,f,d);break;case"plant":Ay(u,h,f,d);break;case"rug":Ry(u,h,f);return;case"stairs":Cy(u,h,f,d);break;case"stairs_u":Py(u,h,f,d);break;case"stairwell":return;case"sideboard":Iy(u,h,f,d);break;case"dresser":Ly(u,h,f,d);break;case"tall_cabinet":Gi(u,h,f,d,1,d*.5);break;case"coat_rack":Fy(u,h,f,d);break;case"bench":Ep(u,h,f,d,!1);break;case"corner_bench":Ep(u,h,f,d,!0);break;case"bar_stool":Dy(u,h,f,d);break;case"office_chair":Ny(u,h,f,d);break;case"stool":Uy(u,h,f,d);break;case"kitchen_wall":Oy(u,h,f,d);return;case"kitchen_tall":By(u,h,f,d);break;case"island":zy(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,dt);return;case"dishwasher":ky(u,h,f,d);break;case"washer":Ap(u,h,f,d,!1);break;case"dryer":Ap(u,h,f,d,!0);break;case"bunk_bed":Vy(u,h,f,d);break;case"table_round":Gy(u,h,f,d);break;case"coffee_table":Hy(u,h,f,d);break;case"tv_wall":Wy(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],Jt);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,dt),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,dt);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,dt),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":Xy(u,h,f,d);return;case"inverter":qy(u,h,f,d,n.variant??null);return;case"grid_point":Qy(u,h,f,d);break;case"wallbox":jy(u,h,f,d);return;case"pool_pump":Yy(u,h,f,d);break;case"pool_filter":$y(u,h,f,d,n.variant??null);break;case"pool_heat_pump":Zy(u,h,f,d);break;case"pool_dosing":Jy(u,h,f,d);break;case"pool_valve":Ky(u,h,f,d);return;case"meter":t1(u,h,f,d);return;case"home_battery":if(e1(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=Fe(n.type);if(m){if(nh(u,m,h,f,d,r,null),r>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,D.body,D.bodyTop,dt)}}r1(e,c,h,f,n.type==="plant"?.35:.5)}function Qu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=D;return(t?e[`${i}Top`]:void 0)??e[i]??null}function nh(i,t,e,n,r,s,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/r),h:c.h+.004/r}:c,h=u.glow&&o!==null,f=h?o:Qu(u.color,!1)??D.body,d=h?o:Qu(u.top,!1)??Qu(u.color,!0)??Vt(f,1.25).getHex(),m=s+u.y*r,x=s+Math.min(r,(u.y+u.h)*r),g=u.edges==="glow"?Kn:u.edges==="faint"?Jt:u.edges?dt:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,m,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,f,d,14,g);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,m,x,f,d,14,g);else if(u.shape==="loft"){let _=u.tx??u.x,M=u.tz??u.z,v=u.tw??u.w,y=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(_-v/2)*e,(_+v/2)*e,(M-y/2)*n,(M+y/2)*n],m,x,f,d,g)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,m,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,f,d,g)}}function Lp(i,t,e,n,r,s){let o=s*ce,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,r+m*l+x*a],u=new ls(i,new We,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Hl(i,t,e,n,r,s=o=>!!o.glow){let o=i.p.length,a=e.rotation*ce,l=Math.cos(a),c=Math.sin(a),u=e.mirror?-1:1,h=(f,d)=>[e.x+u*f*l-d*c,e.z+u*f*c+d*l];nh(new ls(i,new We,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s),Sn(i.p,o,e,n+e.h/2)}function Wl(i,t,e,n,r){let s=i.p.length,o=e.rotation*ce,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];nh(new ls(i,new We,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r),Sn(i.p,s,e,n+e.h/2)}var o1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function a1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((r*f-s*h)/(o*d))>.05)return!1;let m=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*m-n[0],l[1]+f*m-n[1])<.4}))}function Dp(i,t){return t.type==="pool"?zu(i,t):rs(i)+(t.offset??0)+(ur(t.type)?.01:no[t.type])}function fo(i){return xn(i)>=0?i:[...i].reverse()}function l1(i,t){let e=i[t];if(ur(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Xt(o,e.points))&&n.push(fo(s.points))}return n}function Fp(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){ve(i,fo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let m=(v,y)=>[t[0]+f*y,v,t[1]+d*y],x=(v,y)=>[e[0]+f*y,v+l,e[1]+d*y],g=(v,y)=>{i.tri(v[0],v[1],v[2],y,y,y,void 0,te),i.tri(v[0],v[2],v[3],y,y,y,void 0,te),i.tri(v[0],v[2],v[1],y,y,y,void 0,te),i.tri(v[0],v[3],v[2],y,y,y,void 0,te)},p=new tt(a),_=new tt(Vt(o,.9)),M=new tt(Vt(o,.6));g([m(s,1),x(s,1),x(s,-1),m(s,-1)],p),g([m(r,1),x(r,1),x(r,-1),m(r,-1)],M),g([m(r,1),x(r,1),x(s,1),m(s,1)],_),g([m(r,-1),x(r,-1),x(s,-1),m(s,-1)],_),g([m(r,1),m(r,-1),m(s,-1),m(s,1)],_),g([x(r,1),x(r,-1),x(s,-1),x(s,1)],_)}function Np(i,t,e){let n=rs(e),r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=n+(s.offset??0),l=(g,p)=>a-io(s,g,p),c=a-(s.type==="pool"?0:s.slope??0),u=ur(s.type)&&s.height?s.height:no[s.type],h={...o1[s.type],top:u},f=fo(s.points),d=Vt(h.edge,h.edgeAlpha),m=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,x=g=>{if(s.outline!==!1)for(let p=0;p<f.length;p++){if(p===m)continue;let _=f[p],M=f[(p+1)%f.length];t.seg([_[0],g(_[0],_[1]),_[1]],[M[0],g(M[0],M[1]),M[1]],d,te)}};switch(s.type){case"pool":{let g=new tt(h.color),p=new tt(h.side),_=zu(e,s),M=s.above?a+ku(s):a+.06;for(let[v,y,w]of gr(f)){let R=f[v],b=f[y],S=f[w];i.tri([R[0],_,R[1]],[S[0],_,S[1]],[b[0],_,b[1]],g,g,g,void 0,te)}for(let v=0;v<f.length;v++){let y=f[v],w=f[(v+1)%f.length];i.tri([w[0],_,w[1]],[w[0],M,w[1]],[y[0],M,y[1]],p,p,p,void 0,te),i.tri([w[0],_,w[1]],[y[0],M,y[1]],[y[0],_,y[1]],p,p,p,void 0,te)}if(s.above){let v=new tt(2044240),y=new tt(1187123);for(let w=0;w<f.length;w++){let R=f[w],b=f[(w+1)%f.length];i.tri([R[0],a,R[1]],[R[0],M,R[1]],[b[0],M,b[1]],y,v,v,void 0,te),i.tri([R[0],a,R[1]],[b[0],M,b[1]],[b[0],a,b[1]],y,v,y,void 0,te)}x(()=>a+.005)}x(()=>M),x(()=>_+.005);break}case"fence":{for(let g=0;g<f.length;g++){if(g===m)continue;let p=f[g],_=f[(g+1)%f.length],M=Math.hypot(_[0]-p[0],_[1]-p[1]),v=Math.max(1,Math.round(M/2)),y=m>=0&&g===m-1?v:v-1;for(let w=0;w<=y;w++){let R=w/v,b=p[0]+(_[0]-p[0])*R,S=p[1]+(_[1]-p[1])*R,E=l(b,S);ve(i,fo([[b-.04,S-.04],[b+.04,S-.04],[b+.04,S+.04],[b-.04,S+.04]]),E,E+h.top,h.side,h.color)}for(let w of[.35,.85])t.seg([p[0],l(p[0],p[1])+w*h.top,p[1]],[_[0],l(_[0],_[1])+w*h.top,_[1]],d,te)}break}case"pergola":{let g=h.top;for(let[p,_]of f){let M=l(p,_);ve(i,fo([[p-.06,_-.06],[p+.06,_-.06],[p+.06,_+.06],[p-.06,_+.06]]),M,M+g,h.side,h.color)}for(let p=0;p<f.length;p++){if(p===m)continue;let _=f[p],M=f[(p+1)%f.length],v=l(_[0],_[1])+g;if(Fp(i,_,M,.12,v-.16,v,h.side,h.color,l(M[0],M[1])-l(_[0],_[1])),s.bracing){let y=l(_[0],_[1]),w=l(M[0],M[1]);t.seg([_[0],y+.25,_[1]],[M[0],w+g-.25,M[1]],d,te),t.seg([M[0],w+.25,M[1]],[_[0],y+g-.25,_[1]],d,te)}}if(Kd(f)){let p=Qd(f),_=p.x1-p.x0,M=p.z1-p.z0,v=_>=M,y=v?_:M,w=Math.max(1,Math.round(y/.6));for(let R=1;R<w;R++){let b=(v?p.x0:p.z0)+y*R/w,S=v?[b,p.z0+.06]:[p.x0+.06,b],E=v?[b,p.z1-.06]:[p.x1-.06,b],P=l(S[0],S[1])+g;Fp(i,S,E,.06,P-.04,P+.08,h.side,h.color,l(E[0],E[1])-l(S[0],S[1]))}}x((p,_)=>l(p,_)+g+.004);break}case"balcony":{ve(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),x(()=>a+h.top+.004);let p=s.height&&s.height>.3?s.height:1,_=Vt(9417983,.42),M=Vt(3662079,.55);for(let v=0;v<f.length;v++){let y=f[v],w=f[(v+1)%f.length];if(a1(e,y,w))continue;let R=Math.hypot(w[0]-y[0],w[1]-y[1]),b=a+h.top;t.seg([y[0],b+p,y[1]],[w[0],b+p,w[1]],M,te),t.seg([y[0],b+.1,y[1]],[w[0],b+.1,w[1]],_,te);let S=Math.max(1,Math.round(R/.12));for(let E=0;E<=S;E++){let P=E/S,T=y[0]+(w[0]-y[0])*P,F=y[1]+(w[1]-y[1])*P;t.seg([T,b,F],[T,b+p,F],E===0||E===S?M:_,te)}}break}default:{let g=(_,M)=>l(_,M)+h.top,p=l1(r,o);if(ve(i,f,c,s.slope?g:a+h.top,h.side,h.color,{aoFrom:c,holes:p}),x((_,M)=>g(_,M)+.004),s.type==="hedge"&&x((_,M)=>l(_,M)+.004),s.outline!==!1)for(let _ of p)for(let M=0;M<_.length;M++){let v=_[M],y=_[(M+1)%_.length];t.seg([v[0],g(v[0],v[1])+.004,v[1]],[y[0],g(y[0],y[1])+.004,y[1]],d,te)}}}})}var ql=Math.PI/180,c1=1.13,u1=1.72,ih=.025,br=.07,Up=.25;function Op(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Bi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,u=-o/l,h=Tn(n,s),f=h.top-h.bottom,d=s.sources.find(g=>g.room_id===s.roomLeft)?.edge??null,m={floorId:n.id,room:s.roomLeft,edge:d,free:!!s.free},x=(g,p,_,M)=>e.push({key:g,section:null,side:"top",flat:!1,o:p,eu:_,es:[0,1,0],n:M,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[M[0],M[2]],wall:m});x(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation+h.bottom,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&x(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation+h.bottom,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return e}var rh="ground";function sh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Bp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=sh(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Hd(s,o,a)):t.base??0;return{key:rh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function oh(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>ke(n)-ke(e))[0]??null}function Wi(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>{let M=Nl(i,_,_.overhang??t.overhang),v=_.points?.length?uo(_,_.shape==="parapet"?0:Math.max(0,Math.min(M.a,M.b,M.u0,M.u1))):void 0;return h1(_,M).map(y=>v?{...y,footprint:v}:y)});let e=oh(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(M=>M[0])),r=e.rooms.flatMap(_=>_.points.map(M=>M[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=ke(e);if(t.type==="flat")return[zp("main",null,o,l,a,c,u+Up)];let h=a-o>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(t.pitch*ql),x=(_,M,v)=>f?[_,u+v,(l+c)/2+M]:[(o+a)/2+M,u+v,_],[g,p]=f?[o,a]:[l,c];return[-1,1].map(_=>Xl(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(p,_*d,0),x(g,0,m),t.pitch,()=>[0,p-g]))}function h1(i,t){let e=Bn(i),n=bn(i),r=(x,g,p)=>{let[_,M]=e.at(x,g);return[_,p,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),g=e.at(l,e.w+o);return[zp(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+Up)]}if(i.shape==="pent")return[Xl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=u?e.u0+h-a:0,d=u?l-(e.u1-h):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));m.push(Xl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(Xl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-s),g=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,g),r(a,-s,x),r(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,g),r(e.u1-h,n.vr,n.rh)]];for(let[_,M,v,y,w]of p){let R=f1(_,i.id,M,v,y,w);R&&m.push(R)}}return m}function f1(i,t,e,n,r,s){let o=po(vr(r,n));if(o<.3)return null;let a=Hi(vr(r,n)),l=vr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=po(u);if(h<.3)return null;let f=Hi(u),d=Hi(Gp(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=Hi([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/ql;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/h));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function Xl(i,t,e,n,r,s,o,a){let l=Hi(vr(r,n)),c=Hi(vr(s,n)),u=Hi(Gp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=Hi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:po(vr(r,n)),ls:po(vr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function zp(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function kp(i){let t=i.module_w||c1,e=i.module_h||u1;return i.portrait===!1?[e,t]:[t,e]}function d1(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Vp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*ql:i.wall?Math.min(90,Math.max(0,t.tilt??0))*ql:0}function p1(i,t){let[,e]=kp(t),n=Vp(i,t);return i.wall?e*Math.cos(n)+ih:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+ih}function mo(i,t,e=!1){let[n,r]=kp(t),s=[],o=Vp(i,t),a=r*Math.cos(o),l=p1(i,t),c=d1(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(x,g,p)=>[i.o[0]+i.eu[0]*x+i.es[0]*g+i.n[0]*p,i.o[1]+i.eu[1]*x+i.es[1]*g+i.n[1]*p,i.o[2]+i.eu[2]*x+i.es[2]*g+i.n[2]*p],m=(x,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[p,_]=i.span(g);return x>=p-1e-6&&x<=_+1e-6};return c.forEach((x,g)=>{let p=t.align==="right"?u-x:t.align==="center"?(u-x)/2:0;for(let _=0;_<x;_++){let M=`${g}:${_}`,v=h.has(M);if(v&&!e)continue;let y=t.u+(_+p)*(n+ih),w=t.v+g*l,R=y+n,b=w+(i.flat||i.wall?a:r);if(f){if(!(m((y+R)/2,w)&&m((y+R)/2,b)))continue}else if(![[y,w],[R,w],[R,b],[y,b]].every(([C,L])=>m(C,L)))continue;if(i.footprint&&!ap(i.footprint,[[y,w],[R,w],[R,b],[y,b]].map(([C,L])=>{let N=d(C,L,0);return[N[0],N[2]]})))continue;if(i.wall&&o>.001){let C=br+r*Math.sin(o),[L,N]=t.flip?[C,br]:[br,C],U=[d(y,w,L),d(R,w,L),d(R,b,N),d(y,b,N)],z=t.flip?w:b,O=[y+.05,R-.05].map(k=>[d(k,z,0),d(k,z,C)]);s.push({corners:U,posts:O,cell:M,skipped:v});continue}if(!i.flat){s.push({corners:[d(y,w,br),d(R,w,br),d(R,b,br),d(y,b,br)],posts:[],cell:M,skipped:v});continue}let S=.15,E=S+r*Math.sin(o),[P,T]=t.flip?[b,w]:[w,b],F=[d(y,P,S),d(R,P,S),d(R,T,E),d(y,T,E)];s.push({corners:F,posts:[y+.05,R-.05].flatMap(C=>[[d(C,P,0),d(C,P,S)],[d(C,T,0),d(C,T,E)]]),cell:M,skipped:v})}}),s}function vr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function po(i){return Math.hypot(i[0],i[1],i[2])}function Hi(i){let t=po(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Gp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var m1=.78,g1=1.18;function x1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||m1,module_h:i.h||g1}}function go(i,t){let e=mo(i,x1(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Yl(i,t,e,n){let r=t.map((c,u)=>c-i[u]),s=e.map((c,u)=>c-i[u]),o=[r[1]*s[2]-r[2]*s[1],r[2]*s[0]-r[0]*s[2],r[0]*s[1]-r[1]*s[0]],a=Math.hypot(...o)||1,l=o.reduce((c,u,h)=>c+u*n[h],0)<0?-1:1;return o.map(c=>l*c/a)}function xo(i,t,e){return i.setAttribute("solarNormal",new Ut(t,3)),i.setAttribute("solarPoint",new Ut(e,3)),i}function $l(i){let t=i.onBeforeCompile.bind(i),e=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{t(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${e()}-solar-facing`,i}function Hp(i,t,e,n,r){let s=n==="bottom"?0:n==="middle"?.5:1,o=n==="bottom"?-1:1,a=(f,d,m)=>{let x=d.map((_,M)=>_+(m[M]-_)*s),g=f.map((_,M)=>_-x[M]),p=g.reduce((_,M,v)=>_+M*e[v],0);return x.map((_,M)=>_+g[M]*Math.cos(r)-t[M]*p*Math.sin(r)*o)},[l,c,u,h]=i;return[a(l,l,h),a(c,c,u),a(u,c,u),a(h,l,h)]}var bo=1712952,vo=2239816,qp=1318193,_r=Vt(3662079,.9),yr=Vt(5995775,.45),Ye=.14,b1=9427199,ah=13226982,lh=14936565,v1={black:{glass:new tt(329483),edge:Vt(9082544,.32),cells:Vt(2766160,.22)},blue:{glass:new tt(1386842),edge:Vt(10467583,.55),cells:Vt(4025599,.35)}},_1=Vt(13226982,.5),y1=Vt(13226982,.85),M1=Vt(16757575,.95),Wp=new tt(2845583),Xp=new tt(3818072);function Zl(i,t,e,n,r){if(t.length<3)return;let[s,o,a]=t,l=(o[1]-s[1])*(a[2]-s[2])-(o[2]-s[2])*(a[1]-s[1]),c=(o[0]-s[0])*(a[1]-s[1])-(o[1]-s[1])*(a[0]-s[0]),h=l*(s[0]-n[0])+c*(s[2]-n[1])<0?[...t].reverse():t;for(let d=1;d+1<h.length;d++)i.tri(h[0],h[d],h[d+1],e);let f=Math.min(...h.map(d=>d[1]));for(let d=0;d<h.length;d++){let m=h[d],x=h[(d+1)%h.length],g=Math.abs(m[1]-f)<1e-6&&Math.abs(x[1]-f)<1e-6,p=Math.hypot(m[0]-x[0],m[2]-x[2])<1e-6;r.seg(m,x,g?kl:p?Qn:Kn)}}function S1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>ke(n)-ke(e))[0]??null}function Yp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:E1(i),r=e?.type==="custom"?A1(i,e.sections??[],e.overhang):n?[n]:[];return T1(i,r),w1(i,r,t),r}function w1(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Wi(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?go(o,s):null;if(!o||!a)continue;let l=o.section?t.find(S=>S.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,u=S=>[S[0],S[1]-c,S[2]],[h,f,d,m]=a.map(u),x=e.get(s.id)??{open:0,tilt:0,cover:0},g=(S,E)=>[S[0]+o.n[0]*E,S[1]+o.n[1]*E,S[2]+o.n[2]*E],p=(S,E,P)=>[S[0]+(E[0]-S[0])*P,S[1]+(E[1]-S[1])*P,S[2]+(E[2]-S[2])*P],_=x.open>.02||x.tilt>.02?M1:y1,M=[h,f,d,m].map(S=>g(S,.06));for(let S=0;S<4;S++)l.lines.seg(M[S],M[(S+1)%4],_);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*ce,[y,w,R,b]=Hp([h,f,d,m].map(S=>g(S,.065)),o.n,o.es,s.hinge,v);l.solid.tri(y,w,R,Wp),l.solid.tri(y,R,b,Wp);for(let[S,E]of[[y,w],[w,R],[R,b],[b,y]])l.lines.seg(S,E,_);if(x.cover>.02){let S=Math.min(1,x.cover),E=g(p(b,y,S),.01),P=g(p(R,w,S),.01),T=g(b,.01),F=g(R,.01);l.solid.tri(E,P,F,Xp),l.solid.tri(E,F,T,Xp)}}}function T1(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Wi(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];if(o){let a=o.solar??={solid:new oe,lines:new We,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};ch(a.solid,a.lines,s,r,o.floor.elevation+o.base,a.facing)}}}function ch(i,t,e,n,r,s){let o=u=>[u[0],u[1]-r,u[2]],a=v1[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let u of mo(e,n)){let h=i.p.length,f=t.p.length,[d,m,x,g]=u.corners.map(o);i.tri(d,m,x,a.glass),i.tri(d,x,g,a.glass),i.tri(d,x,m,a.glass),i.tri(d,g,x,a.glass);let p=(v,y=.004)=>[v[0]+e.n[0]*y,v[1]+e.n[1]*y,v[2]+e.n[2]*y],_=(v,y,w)=>[v[0]+(y[0]-v[0])*w,v[1]+(y[1]-v[1])*w,v[2]+(y[2]-v[2])*w],M=[d,m,x,g].map(v=>p(v));for(let v=0;v<4;v++)t.seg(M[v],M[(v+1)%4],a.edge);for(let v=1;v<l;v++)t.seg(p(_(d,m,v/l)),p(_(g,x,v/l)),a.cells);for(let v=1;v<c;v++)t.seg(p(_(d,g,v/c)),p(_(m,x,v/c)),a.cells);for(let[v,y]of u.posts)t.seg(o(v),o(y),_1);if(s){let v=Yl(d,m,x,e.n);for(let y=h;y<i.p.length;y+=3)s.normals.push(...v),s.points.push(...d);for(let y=f;y<t.p.length;y+=3)s.lineNormals.push(...v),s.linePoints.push(...d)}}}function E1(i){let t=i.settings.roof,e=S1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(P=>P[0])),r=e.rooms.flatMap(E=>E.points.map(P=>P[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,u=new oe,h=new We;if(t.type==="flat"){ve(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,bo,vo,{bottom:!0});let E=.252;for(let[P,T]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([P[0],E,P[1]],[T[0],E,T[1]],_r),h.seg([P[0],0,P[1]],[T[0],0,T[1]],yr);return{floor:e,base:ke(e)-e.elevation,solid:u,lines:h,glass:new oe}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(t.pitch*ce),g=(E,P,T)=>d?[E,T,(l+c)/2+P]:[(o+a)/2+P,T,E],[p,_]=d?[o,a]:[l,c],M=new tt(vo),v=new tt(bo),y=(E,P,T,F,C)=>{u.tri(E,P,T,C),u.tri(E,T,F,C)};for(let E of[-1,1]){y(g(p,E*m,0),g(_,E*m,0),g(_,0,x),g(p,0,x),M),y(g(p,E*m,-Ye),g(p,0,x-Ye),g(_,0,x-Ye),g(_,E*m,-Ye),v),y(g(p,E*m,-Ye),g(_,E*m,-Ye),g(_,E*m,0),g(p,E*m,0),v);for(let P of[p,_])y(g(P,E*m,-Ye),g(P,E*m,0),g(P,0,x),g(P,0,x-Ye),v);h.seg(g(p,E*m,0),g(_,E*m,0),yr);for(let P of[p,_])h.seg(g(P,E*m,0),g(P,0,x),yr)}let w=t.overhang,R=new tt(qp),b=m-w,S=b*Math.tan(t.pitch*ce);for(let E of[p+w,_-w])Zl(u,[g(E,-b,-Ye),g(E,b,-Ye),g(E,0,S-Ye)],R,[(o+a)/2,(l+c)/2],h);return h.seg(g(p,0,x+.004),g(_,0,x+.004),_r),{floor:e,base:ke(e)-e.elevation,solid:u,lines:h,glass:new oe}}function A1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(Wi(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Ul(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new oe,lines:new We,glass:new oe,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Dl(t,o),h=ke(a)>o.base+.05&&!o.dormer&&!u,f=t.filter(x=>x!==o&&Dl(t,x)===o).flatMap(x=>fp(o,x));for(let x of i.settings.roof.windows??[]){let g=s.get(x.face),p=g&&g.section===o.id?go(g,x):null;if(!p)continue;let _=p.map(M=>ci(o,M[0],M[2]));f.push({u0:Math.min(..._.map(M=>M[0])),u1:Math.max(..._.map(M=>M[0])),v0:Math.min(..._.map(M=>M[1])),v1:Math.max(..._.map(M=>M[1]))})}let d=u?Hu(u,o):o,m=null;if(u){let x=Bn(d),g=Vi(u,{u0:0,u1:0,a:0,b:0}),p=_=>{let[M,v]=x.at(_,x.w/2),[y,w]=ci(u,M,v);return as(g,y,w)??bn(u).y(w)};m=p(x.u0)<=p(x.u1)?0:1}R1(c.solid,c.lines,d,Nl(i,d,d.overhang??e),a.elevation,c.glass,h,f,m)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function R1(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Bn(e),u=bn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),p=(C,L,N)=>{let[U,z]=c.at(C,L);return[U,N-r,z]},_=new tt(vo),M=new tt(bo),v=new tt(qp),y=(C,L)=>{for(let N=1;N+1<C.length;N++)i.tri(C[0],C[N],C[N+1],L)},w=[],R=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,L=e.shape==="parapet",N=e.points&&e.points.length>=3?uo(e,L?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):L?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];ki(N)<0&&(N=[...N].reverse()),ve(i,N,C-r,C-r+.25,bo,vo,{bottom:!0});for(let U=0;U<N.length;U++){let z=N[U],O=N[(U+1)%N.length];t.seg([z[0],C-r+.252,z[1]],[O[0],C-r+.252,O[1]],_r),t.seg([z[0],C-r,z[1]],[O[0],C-r,O[1]],yr)}if(L){let U=V=>ki(V)>=0?V:[...V].reverse(),z=U(N),O=Gu(z,-.2),k=z.length;for(let V=0;V<k;V++){let ot=U([z[V],z[(V+1)%k],O[(V+1)%k],O[V]]);ve(i,ot,C-r+.25,C-r+.65,bo,vo),t.seg([z[V][0],C-r+.652,z[V][1]],[z[(V+1)%k][0],C-r+.652,z[(V+1)%k][1]],_r),t.seg([O[V][0],C-r+.652,O[V][1]],[O[(V+1)%k][0],C-r+.652,O[(V+1)%k][1]],_r)}}}else{let C=Vi(e,h);w=C.faces;for(let L of a)w=w.flatMap(N=>dp(N,L));R=C.rim,b=C.ridges,S=C.gable}let E=!!e.open,P=new tt(b1);for(let C of w){if(E){for(let L=1;L+1<C.length;L++)s.tri(p(C[0][0],C[0][1],C[0][2]),p(C[L][0],C[L][1],C[L][2]),p(C[L+1][0],C[L+1][1],C[L+1][2]),P);continue}y(C.map(([L,N,U])=>p(L,N,U)),_),y(C.map(([L,N,U])=>p(L,N,U-Ye)),M)}for(let C=0;C<R.length;C++){let[L,N,U]=R[C],[z,O,k]=R[(C+1)%R.length];E||y([p(L,N,U),p(z,O,k),p(z,O,k-Ye),p(L,N,U-Ye)],M),t.seg(p(L,N,U),p(z,O,k),E?_r:yr)}if(E){e.points?.length?C1(i,t,e,r):P1(i,t,c,u,h,p,r);return}for(let[[C,L,N],[U,z,O]]of b)t.seg(p(C,L,N+.004),p(U,z,O+.004),_r);let T=e.base;if(o)return;let F=c.at((c.u0+c.u1)/2,m/2);if(e.points?.length){let C=Vi(e,{u0:0,u1:0,a:0,b:0}).rim;C.forEach((L,N)=>{let U=C[(N+1)%C.length],z=L,O=e.shape==="flat"||e.shape==="parapet"?0:Ye,k=L[2]-O,V=U[2]-O;if(Math.max(k,V)<=T+.001)return;let ot=Z=>[L[0]+(U[0]-L[0])*Z,L[1]+(U[1]-L[1])*Z,T+O];k<T&&(z=ot((T-k)/(V-k))),V<T&&(U=ot((T-k)/(V-k))),y([p(z[0],z[1],T),p(U[0],U[1],T),p(U[0],U[1],U[2]-O),p(z[0],z[1],z[2]-O)],v)});return}if(S){let C=I1(S,T-Ye),L=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(C.length>=3)for(let N of L)Zl(i,C.map(([U,z])=>p(N,U,z)),v,F,t)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let C of[0,m]){let L=u.y(C)-Ye;L>T+.02&&Zl(i,[p(c.u0,C,T),p(c.u1,C,T),p(c.u1,C,L),p(c.u0,C,L)],v,F,t)}else if(e.eave_a>T+.02)for(let[C,L,N,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])Zl(i,[p(C,L,T),p(N,U,T),p(N,U,e.eave_a),p(C,L,e.eave_a)],v,F,t)}function C1(i,t,e,n){let o=Bn(e),a=Vi(e,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let u=a.rim[(c+1)%a.rim.length],h=o.at(l[0],l[1]),f=o.at(u[0],u[1]),d=f[0]-h[0],m=f[1]-h[1],x=Math.hypot(d,m);if(x<1e-6)return;let g=-m/x*.12/2,p=d/x*.12/2,_=[[h[0]+g,h[1]+p],[f[0]+g,f[1]+p],[f[0]-g,f[1]-p],[h[0]-g,h[1]-p]];ki(_)<0&&_.reverse();let M=(w,R)=>l[2]+(u[2]-l[2])*((w-h[0])*d+(R-h[1])*m)/(x*x)-n-.03,v=i.p.length;ve(i,_,0,.18,ah,lh,{bottom:!0});for(let w=v;w<i.p.length;w+=3)i.p[w+1]+=M(i.p[w],i.p[w+2])-.18;t.seg([h[0],l[2]-n-.18,h[1]],[f[0],u[2]-n-.18,f[1]],yr);let y=Math.max(1,Math.ceil(x/3.5));for(let w=0;w<y;w++){let R=w/y,b=h[0]+d*R,S=h[1]+m*R,E=M(b,S)-.18;E<=0||ve(i,[[b-.12/2,S-.12/2],[b+.12/2,S-.12/2],[b+.12/2,S+.12/2],[b-.12/2,S+.12/2]],0,E,ah,lh,{bottom:!0})}})}function P1(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,m=(p,_,M,v,y,w)=>{let R=[e.at(p,M),e.at(_,M),e.at(_,v),e.at(p,v)],b=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);ve(i,b<0?[...R].reverse():R,y-o,w-o,ah,lh,{bottom:!0})},x=o;for(let[p,_]of[[0,u],[a,h]]){if(!_)continue;let M=n.y(p)-.03,v=p===0?0:a-l;m(e.u0,e.u1,v,v+l,M-c,M),t.seg(s(e.u0,p,M-c),s(e.u1,p,M-c),yr)}for(let[p,_]of[[e.u0,f],[e.u1-l,d]])if(_)for(let M=0;M<6;M++){let v=a*M/6,y=a*(M+1)/6,w=Math.min(n.y(v),n.y(y))-.03;m(p,p+l,v,y,w-c,w)}let g=[];for(let[p,_]of[[0,u],[a-l,h]]){if(!_)continue;let M=e.u1-e.u0-l,v=Math.max(1,Math.ceil(M/3.5));for(let y=0;y<=v;y++){let w=e.u0+M*y/v;y===0&&!f||y===v&&!d||g.push([w,p])}}if(!u&&!h)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,_]of g){let M=n.y(_+l/2)-.03-c;m(p,p+l,_,_+l,x,M)}}function I1(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var _o={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Jl={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Xi=.2,L1=.01,yo=8,Kl=.42,uh=.42;function Kp(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Bi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=i.openings.map(T=>Ol(i,T,o)).filter(T=>T!==null),c=(T,F,C)=>{let L=s?s(T,F):null;return L===null?C:Math.min(C,L)},u=(T,F,C,L,N)=>{if(!s)return N;let U=N,z=Math.max(2,Math.ceil((L-C)/.25)+1);for(let O=0;O<z;O++){let k=C+(L-C)*O/(z-1);U=Math.min(U,c(T[0]+F[0]*k,T[1]+F[1]*k,N))}return U},h=new oe(!0,!0),f=[],d=new We,m=[];for(let T of i.rooms){if(T.points.length<3)continue;let F=Mo(T.points),C=Te(i,T),L=l.filter(Z=>Z.stair?.recess&&Z.stair.room.id===T.id).map(Z=>Z.stair.bay);m.push(...L);let N=Jl[T.floor_material]??Jl.wood,U=new tt(N.color),z=n.flatMap(Z=>{if(bp(Z,F))return[$u(Z,.003)];if(!gp(Z))return[];let et=Bl(F,Z);return et.length>=3&&Math.abs(ro(et))>.01?[$u(Mo(et),.003)]:[]});m.push(...z);let O=[...F,...z.flat()],k=h.count;for(let[Z,et,nt]of gr(F,z)){let ct=O[Z],X=O[et],$=O[nt],rt=[[ct,X,$]];for(let ft of L)rt=rt.flatMap(ut=>mp(ut,ft));for(let ft of rt)for(let ut=1;ut+1<ft.length;ut++){let[At,Ht,Rt]=[ft[0],ft[ut],ft[ut+1]];h.tri([At[0],C,At[1]],[Rt[0],C,Rt[1]],[Ht[0],C,Ht[1]],U,U,U,[At[0],At[1],Rt[0],Rt[1],Ht[0],Ht[1]],te,N.tile)}}f.push({roomId:T.id,start:k,end:h.count,color:N.color});let V=new tt(_o.slab),ot=Z=>{for(let et=0;et<Z.length;et++)for(let[nt,ct]of Wu(Z[et],Z[(et+1)%Z.length],L))h.tri([nt[0],C-Xi,nt[1]],[nt[0],C,nt[1]],[ct[0],C,ct[1]],V),h.tri([nt[0],C-Xi,nt[1]],[ct[0],C,ct[1]],[ct[0],C-Xi,ct[1]],V)};ot(F);for(let Z of z){ot([...Mo(Z)].reverse());for(let et=0;et<Z.length;et++){let nt=Z[et],ct=Z[(et+1)%Z.length];d.seg([nt[0],C+.006,nt[1]],[ct[0],C+.006,ct[1]],Kn),d.seg([nt[0],C-Xi,nt[1]],[ct[0],C-Xi,ct[1]],Qn)}}}let x=new Map,g=[],p=new Map;for(let T of o){let F="interior",C=null;if(T.exterior){let N=T.b[0]-T.a[0],U=T.b[1]-T.a[1],z=Math.hypot(N,U)||1,O=[U/z,-N/z],k=(Math.round(Math.atan2(O[1],O[0])/(2*Math.PI)*yo)%yo+yo)%yo;F=`s${k}`;let V=k/yo*2*Math.PI;C=[Math.cos(V),Math.sin(V)]}let L=x.get(F);L===void 0&&(L=g.length,x.set(F,L),g.push(C)),p.set(T,L)}let _=new Map,M=[];for(let T of i.openings){let F=dr(T,i.rooms,i.walls??[]);if(!F)continue;let C=pr(o,T,F);if(!C)continue;let{wall:L,s:N}=C,U=jl([L.b[0]-L.a[0],L.b[1]-L.a[1]]),z=Math.hypot(L.b[0]-L.a[0],L.b[1]-L.a[1]),O=Math.min(T.width,z),k=Math.max(0,Math.min(z-O,N-O/2)),V=F.room.points,ot=L.free?U[0]*(V[1][0]-V[0][0])+U[1]*(V[1][1]-V[0][1])>0:L.roomLeft===T.room_id,Z=[-U[1],U[0]],et=ot?Z:[-Z[0],-Z[1]],nt=l.find(Rt=>Rt.opening.id===T.id),ct=nt?.threshold??Te(i,F.room),X=Math.min(nt?.ceiling??1/0,Tn(i,L).top);if(nt?.other&&X-ct<.12)continue;let $=Math.min(u(L.a,U,k,k+O,X)-.02,ct+T.sill+T.height),rt=Math.min(ct+T.sill,$-.1),ft=[et[1],-et[0]],ut=U[0]*ft[0]+U[1]*ft[1]>0,At={opening:T,bucket:p.get(L),start:[L.a[0]+U[0]*k,L.a[1]+U[1]*k],axis:U,width:O,toRoom:et,faceRoom:ot?L.left:L.right,faceOut:ot?L.right:L.left,sill:rt,top:$,hingeAtStart:T.hinge==="left"===ut,exterior:L.exterior};M.push(At);let Ht=_.get(L);Ht||_.set(L,Ht=[]),Ht.push({s0:k,s1:k+O,sill:rt,top:$,info:At})}let v=Math.min(i.cut_height,ke(i)-i.elevation),y=new oe;for(let T of o){let F=p.get(T),C=jl([T.b[0]-T.a[0],T.b[1]-T.a[1]]),L=(_.get(T)??[]).sort((et,nt)=>et.s0-nt.s0),N=Tn(i,T),U=N.top,z=[],O=[-1/0,...new Set(L.flatMap(et=>[et.s0,et.s1])).values(),1/0].sort((et,nt)=>et-nt);for(let et=0;et+1<O.length;et++){let nt=O[et],ct=O[et+1];if(ct-nt<1e-6)continue;let X=Number.isFinite(nt)&&Number.isFinite(ct)?(nt+ct)/2:Number.isFinite(nt)?nt+1:ct-1,$=L.filter(ut=>ut.s0<X&&ut.s1>X).map(ut=>[ut.sill,ut.top]).sort((ut,At)=>ut[0]-At[0]),rt=[],ft=N.bottom-Xi;for(let[ut,At]of $)ut>ft+1e-4&&rt.push([ft,ut<1e-4?-L1:ut]),ft=Math.max(ft,At);U>ft+1e-4&&rt.push([ft,U]),z.push({t0:nt,t1:ct,ranges:rt})}let k=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),V=s&&u(T.a,C,0,k,U)<U-.001,ot=V?z.flatMap(et=>{let nt=Math.max(et.t0,-.5),ct=Math.min(et.t1,k+.5),X=Math.max(1,Math.ceil((ct-nt)/.3));return Array.from({length:X},($,rt)=>({t0:rt===0?et.t0:nt+(ct-nt)*rt/X,t1:rt===X-1?et.t1:nt+(ct-nt)*(rt+1)/X,ranges:et.ranges,inner0:rt>0,inner1:rt<X-1}))}):z.map(et=>({...et,inner0:!1,inner1:!1})),Z=et=>(et[0]-T.a[0])*C[0]+(et[1]-T.a[1])*C[1];for(let et of ot){let nt=D1(T.footprint,T.a,C,et.t0,et.t1);if(nt.length<3)continue;let ct=(rt,ft)=>Math.abs(Z(rt)-ft)<1e-4,X=(rt,ft)=>et.inner0&&ct(rt,et.t0)&&ct(ft,et.t0)||et.inner1&&ct(rt,et.t1)&&ct(ft,et.t1),$=V?Math.min(...nt.map(([rt,ft])=>c(rt,ft,U))):U;for(let[rt,ft]of et.ranges){let ut=Math.min(ft,V?Math.max(...nt.map(([kt,Kt])=>c(kt,Kt,U))):ft);if(ut-rt<1e-4||$-rt<.01)continue;let At=rt>.01,Ht=V&&ft>$,Rt=(kt,Kt)=>Math.min(ft,c(kt,Kt,U));if(rt<v-1e-6){let kt=ut>v+1e-6?vp+F:mr+F,Kt=Ht&&$<v?($t,pe)=>Math.min(v,Rt($t,pe)):Math.min(ut,v);ve(y,nt,rt,Kt,_o.wall,_o.wallTop,{aoFrom:0,bottom:At,fold:mr+F,topFold:kt,skipSide:X})}ut>v+1e-6&&$>v+1e-6&&ve(y,nt,Math.max(rt,v),Ht?Rt:ut,_o.wall,_o.wallTop,{aoFrom:0,fold:F,bottom:At&&rt>=v,skipSide:X})}}}let w=o.flatMap(T=>T.footprint),R=U1(o,w),b=new We;b.p.push(...d.p),b.c.push(...d.c),b.f.push(...d.f);for(let T of l){let F=T.stair;if(!F)continue;let C=(U,z)=>[T.start[0]+T.axis[0]*U+F.toward[0]*z,T.start[1]+T.axis[1]*U+F.toward[1]*z],L=Jl[F.room.floor_material]?.color??Jl.wood.color;for(let U=0;U<F.count;U++){let z=F.face+F.depth*U/F.count,O=F.face+F.depth*(U+1)/F.count,k=F.recess?T.low+(T.high-T.low)*(U+1)/F.count:T.high-(T.high-T.low)*U/F.count,V=Mo([C(0,z),C(T.width,z),C(T.width,O),C(0,O)]);ve(y,V,T.low-.02,k,L,L,{bottom:!0});let ot=C(0,z),Z=C(T.width,z);b.seg([ot[0],k+.003,ot[1]],[Z[0],k+.003,Z[1]],Kn)}let N=Mo([C(0,-T.wall.left-T.wall.right),C(T.width,-T.wall.left-T.wall.right),C(T.width,F.face),C(0,F.face)]);ve(y,N,T.threshold-.02,T.threshold,L,L,{bottom:!0})}let S=(T,F)=>(_.get(T)??[]).filter(F);for(let T of R.edges){let F=p.get(T.wall),C=Tn(i,T.wall).bottom;for(let[N,U]of Ql(T,S(T.wall,z=>z.sill<=C+.005)))b.seg([N[0],C+.004,N[1]],[U[0],C+.004,U[1]],kl);for(let[N,U]of Ql(T,S(T.wall,z=>z.sill<v&&z.top>v)))b.seg([N[0],v,N[1]],[U[0],v,U[1]],Zu,Vl+F);let L=Tn(i,T.wall).top;for(let[N,U]of Ql(T,S(T.wall,z=>z.top>=L-.021))){if(!s){b.seg([N[0],L,N[1]],[U[0],L,U[1]],Kn,L<=v+1e-6?mr+F:F);continue}let z=Math.max(1,Math.ceil(Math.hypot(U[0]-N[0],U[1]-N[1])/.3));for(let O=0;O<z;O++){let k=[N[0]+(U[0]-N[0])*O/z,N[1]+(U[1]-N[1])*O/z],V=[N[0]+(U[0]-N[0])*(O+1)/z,N[1]+(U[1]-N[1])*(O+1)/z],ot=c(k[0],k[1],L),Z=c(V[0],V[1],L);b.seg([k[0],ot,k[1]],[V[0],Z,V[1]],Kn,Math.max(ot,Z)<=v+1e-6?mr+F:F)}}}for(let T of R.corners){let F=c(T.p[0],T.p[1],Tn(i,T.wall).top);b.segSplit([T.p[0],Tn(i,T.wall).bottom+.004,T.p[1]],[T.p[0],F,T.p[1]],Qn,Math.min(v,F),p.get(T.wall))}for(let T of _.values())for(let F of T)F1(b,F,v);let E=O1(R.edges,i,_);Np(y,b,i);for(let T of r)ch(y,b,T.face,T.field,i.elevation);let P=[];for(let T of i.furniture){if($d(T.type))continue;let F=y.count,C=b.p.length/6,L=qe(i,T),N=wn(i,T.x,T.z),U=E.p.length;Gl(y,b,E,T,L-N);for(let z=F*9+1;z<y.p.length;z+=3)y.p[z]+=N;for(let z=C*6+1;z<b.p.length;z+=3)b.p[z]+=N;for(let z=U+1;z<E.p.length;z+=3)E.p[z]+=N;(L+T.h>v+.05||T.rotation_x||T.rotation_z)&&(_p(y,F,v,Ju),yp(b,C,v,Ju)),P.push({id:T.id,start:F,end:y.count})}return{floor:h.geometry(),roomTris:f,holes:m,walls:y.geometry(),lines:b.geometry(),shadow:E.geometry(),buckets:g,openings:M,walls2d:o,openRooms:a,wallBuckets:o.map(T=>p.get(T)),furnitureTris:P,roofUnder:s}}function F1(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:te,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Qn,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Qn,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Qn,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Qn,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Qn,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Zu,Vl+r)}function D1(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=$p(o,a=>s(a)-n)),Number.isFinite(r)&&(o=$p(o,a=>r-s(a))),o}function $p(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var Zp=i=>Math.round(i*1e3),So=i=>`${Zp(i[0])},${Zp(i[1])}`,Jp=(i,t)=>{let e=So(i),n=So(t);return e<n?`${e}|${n}`:`${n}|${e}`};function N1(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+o*h,r[1]+a*h];So(f)!==So(u)&&e.push([u,f]),u=f}e.push([u,s])}return e}function U1(i,t){let e=i.map(l=>({wall:l,edges:N1(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let h=Jp(c,u);n.set(h,(n.get(h)??0)+1)}let r=[],s=new Map,o=(l,c,u)=>{let h=So(l),f=s.get(h);f||s.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,h]of c){if(n.get(Jp(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of s.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Ql(i,t){if(!t.length)return[[i.a,i.b]];let e=jl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=jl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let m=[];return h.s0>f&&m.push([f,h.s0]),h.s1<d&&m.push([h.s1,d]),m});let u=h=>{let f=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>s<=o?[u(h),u(f)]:[u(f),u(h)])}function O1(i,t,e){let n=new oe,r=new tt(uh,uh,uh),s=new tt(1,1,1);for(let o of i){let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l)||1,u=[(o.a[0]+o.b[0])/2+l/c*.05,(o.a[1]+o.b[1])/2-a/c*.05],h=t.rooms.find(m=>Xt(u,m.points)),f=Te(t,h),d=f+.002;for(let[m,x]of Ql(o,(e.get(o.wall)??[]).filter(g=>g.sill<=f+.005))){let g=x[0]-m[0],p=x[1]-m[1],_=Math.hypot(g,p);if(_<.05)continue;let M=[p/_,-g/_],v=[(m[0]+x[0])/2+M[0]*.05,(m[1]+x[1])/2+M[1]*.05];if(!t.rooms.some(R=>R.points.length>=3&&Xt(v,R.points)))continue;let y=[m[0]+M[0]*Kl,m[1]+M[1]*Kl],w=[x[0]+M[0]*Kl,x[1]+M[1]*Kl];n.tri([m[0],d,m[1]],[y[0],d,y[1]],[w[0],d,w[1]],r,s,s),n.tri([m[0],d,m[1]],[w[0],d,w[1]],[x[0],d,x[1]],r,s,r)}}return n}function Qp(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Ui),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Yu(e);let r=n.furniture.filter(s=>(qd.has(s.type)||Fe(s.type)?.hole)&&n.elevation+qe(n,s)+s.h>=t.elevation+wn(t,s.x,s.z)-.3).map(Ui);return Yu([...e,...r])}function jl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Mo(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var B1=500,jp=.12,tm=1.35,z1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,tc=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=z1(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=hh(this.view.phi+this.velocity.phi,jp,tm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},B1)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=hh(this.view.phi+c,jp,tm),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=hh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function hh(i,t,e){return Math.min(e,Math.max(t,i))}function qi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function ec(i,t,e,n){let r=Math.min(1,Math.max(0,(i/t-.62)/.3)),s=e?1:.94*r;return{opacity:s,lift:e?0:(1-(n??s))*2.2}}function em(i,t){return i.onBeforeCompile=e=>{e.uniforms.uRoofDirection=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function nm(i,t,e,n,r,s,o=[]){if(n.elevation<=2||r>=.97)return;let a=n.elevation*Math.PI/180,l=(n.azimuth+(t.settings.north??0))*Math.PI/180,c=[Math.sin(l),-Math.cos(l)],u=[c[0]*Math.cos(a),Math.sin(a),c[1]*Math.cos(a)],h=Math.min(1,n.elevation/12)*(1-.8*r),f=1/Math.tan(a),d=new Map(Wi(t).map(m=>[m.key,m]));for(let m of t.settings.roof.windows??[]){let x=d.get(m.face);if(!x)continue;let g=t.settings.roof.sections?.find(N=>N.id===x.section);if((g?Ul(t,g):oh(t))?.id!==e.id)continue;let _=go(x,m);if(!_)continue;let M=x.n.reduce((N,U,z)=>N+U*u[z],0);if(M<.05)continue;let v=Math.min(1,Math.max(0,s.get(m.id)?.cover??0));if(v>=.99)continue;let y=[_.reduce((N,U)=>N+U[0],0)/4,_.reduce((N,U)=>N+U[2],0)/4],w=e.rooms.find(N=>Xt(y,N.points));if(!w)continue;let R=Te(e,w),b=(N,U,z)=>N.map((O,k)=>O+(U[k]-O)*z),S=(N,U)=>{let z=b(b(_[0],_[1],N),b(_[3],_[2],N),U*(1-v)),O=Math.min(7,(z[1]-e.elevation-R)*f);return[z[0]-c[0]*O,R+.02,z[2]-c[1]*O]},E=(N,U)=>Math.hypot(...N.map((z,O)=>z-U[O])),P=Math.max(1,Math.ceil(E(S(0,0),S(1,0))/.3)),T=Math.max(1,Math.ceil(E(S(0,0),S(0,1))/.25)),F=.14*h*Math.min(1,M*1.5),C=new tt(F,.82*F,.55*F),L=C.clone().multiplyScalar(.45);for(let N=0;N<T;N++)for(let U=0;U<P;U++){let z=U/P,O=(U+1)/P,k=N/T,V=(N+1)/T,ot=S((z+O)/2,(k+V)/2),Z=[ot[0],ot[2]];if(!Xt(Z,w.points)||o.some(ft=>Xt(Z,ft)))continue;let et=S(z,k),nt=S(O,k),ct=S(O,V),X=S(z,V),$=C.clone().lerp(L,k),rt=C.clone().lerp(L,V);i.tri(et,nt,ct,$,$,rt),i.tri(et,ct,X,$,rt,rt)}}}function im(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function rm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=im(s,o),c=im(o,a),u=Math.min(t,l*.45,c*.45),h=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u],m=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u];for(let x=0;x<=e;x++){let g=x/e,p=(1-g)*(1-g),_=2*(1-g)*g,M=g*g;n.push([p*d[0]+_*o[0]+M*m[0],p*d[1]+_*o[1]+M*m[1],p*d[2]+_*o[2]+M*m[2]])}}return n.push(i[i.length-1]),n}var sm=new tt(7568261),om=new tt(4869974),k1=new tt(3116287),am=new tt(3948872),fh=Mr([.35,.85,.4]),lm=10;function Mr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function wo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function cm(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Mr(wo(i,t));return[e,Mr(wo(i,e))]}function ui(i,t){let e=.5+.5*Math.max(0,t[0]*fh[0]+t[1]*fh[1]+t[2]*fh[2]);return i.clone().multiplyScalar(e)}function us(i,t,e,n,r,s=!1){let o=Mr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=cm(o),c=(u,h)=>{let f=h/lm*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<lm;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),m=c(e,u+1);i.tri(h.p,m.p,d.p,ui(r,h.n),ui(r,m.n),ui(r,d.n)),i.tri(h.p,f.p,m.p,ui(r,h.n),ui(r,f.n),ui(r,m.n)),s&&(i.tri([...t],f.p,h.p,ui(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,m.p,ui(r,o)))}}function V1(i,t,e,n,r,s,o,a){let l=Mr(wo(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*h*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*h*r+n[2]*f*s+l[2]*d*o],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=ui(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function um(i,t){if(t.points.length<2)return;let e=t.radius,n=rm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?sm.clone().multiplyScalar(.55):sm;us(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);us(i,o,a,e*1.22,om,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);us(i,o,a,e*1.08,t.water?new tt(...t.water).multiplyScalar(.9):new tt(10475240),!0);for(let l of s(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];us(i,c,u,e*1.3,om,!0)}}else{let[o,a]=s(.055);us(i,o,a,e*1.4,am,!0);let[l]=cm(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];us(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],u,e*.35,am,!0);let h=r.open===!1?Mr(wo(r.dir,c)):r.dir,f=Mr(wo(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];V1(i,d,h,f,.1,.028,.012,k1)}}}var dh=1.62,G1=.2,ph=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let r=Bi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=r.walls;let s=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=dr(o,e.rooms,e.walls??[]);if(!l)continue;let c=pr(this.walls,o,l);if(!c)continue;let u=s.get(c.wall)??[];u.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),s.set(c.wall,u);let h=c.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],m=Math.hypot(f,d)||1,x=f/m,g=d/m,p=[h.a[0]+x*c.s,h.a[1]+g*c.s],_=h.left+.45,M=h.right+.45;this.doors.push({centre:p,p:[[p[0]-g*_,p[1]+x*_],[p[0]+g*M,p[1]-x*M]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:s.get(o)??[]})}}blocked(t,e=G1){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Xt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(h=>h.p).filter(h=>!this.blocked(h))],r=n.length,s=new Array(r).fill(1/0),o=new Array(r).fill(-1),a=new Array(r).fill(!1);s[0]=0;let l=new Map,c=(h,f)=>{let d=h<f?`${h}:${f}`:`${f}:${h}`,m=l.get(d);return m===void 0&&(m=this.clear(n[h],n[f]),l.set(d,m)),m};for(;;){let h=-1;for(let f=0;f<r;f++)!a[f]&&s[f]<1/0&&(h<0||s[f]<s[h])&&(h=f);if(h<0)return null;if(h===1)break;a[h]=!0;for(let f=0;f<r;f++){if(a[f]||f===h)continue;let d=Math.hypot(n[h][0]-n[f][0],n[h][1]-n[f][1]);s[h]+d>=s[f]||c(h,f)&&(s[f]=s[h]+d,o[f]=h)}}let u=[];for(let h=1;h>0;h=o[h])u.unshift(n[h]);return u}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=dr(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=pr(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*o.s,a.a[1]+f*o.s],m=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(m))return{p:m,yaw:this.openYaw(m,Math.atan2(h,-f))}}let e=[...this.rooms].sort((r,s)=>hm(s)-hm(r))[0],n=e?this.freeNear(fr(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function hm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var mh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+wn(this.map.floor,this.state.x,this.state.z)+dh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-dh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(fr(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,u=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/f*d,r.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),m=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],g=[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],p=[-g[0],-g[1],-g[2]],_=[m[0]+x[0]*r*h*f+p[0]*s*h,m[1]+x[1]*r*h*f+p[1]*s*h,m[2]+x[2]*r*h*f+p[2]*s*h];if(_[1]>=-.02)return null;let M=dh/-_[1];return[l+_[0]*M,c+_[2]*M]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function H1(i,t){let e=Fe(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function gh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?H1(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function xh(i,t){let e=[],n=[],r=[],s=[],o=[],a=[],l=[];for(let{face:u,field:h}of i){let f=e.length/3,d=h.portrait===!1?10:6,m=h.portrait===!1?6:10,x=W1(h.id)%1e3/1e3;for(let p of mo(u,h)){let[_,M,v,y]=p.corners.map(b=>[b[0]+u.n[0]*.006,b[1]+u.n[1]*.006-t,b[2]+u.n[2]*.006]),w=Yl(_,M,v,u.n),R=[[_,0,0],[M,1,0],[v,1,1],[y,0,1]];for(let b of[0,1,2,0,2,3]){let[S,E,P]=R[b];e.push(S[0],S[1],S[2]),n.push(E,P),r.push(d,m),s.push(x),a.push(...w),l.push(..._)}}let g=e.length/3-f;g&&o.push({id:h.id,start:f,count:g})}if(!e.length)return null;let c=new Yt;return c.setAttribute("position",new Ut(e,3)),c.setAttribute("uv",new Ut(n,2)),c.setAttribute("aCells",new Ut(r,2)),c.setAttribute("aPhase",new Ut(s,1)),c.setAttribute("aLevel",new Ut(new Float32Array(e.length/3),1)),{geometry:xo(c,a,l),ranges:o}}function To(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function bh(i){let t=new le({transparent:!0,blending:Ce,depthWrite:!1,side:xe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function W1(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var dm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,X1=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    vec3 col = uColor * uLevel * (0.55 + (0.35 + 0.6 * uFlow) * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,q1=dm,Y1=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function fm(i,t){let e=[];for(let[r,s,o]of gr(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Yt;return n.setAttribute("position",new Ut(e,3)),n}function pm(i,t){let e=new je;for(let n of i){if(n.points.length<3)continue;let r=new Gt(fm(n.points,n.y+.004),new rn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0}},vertexShader:dm,fragmentShader:X1,transparent:!0,blending:Ce,depthWrite:!1,side:xe}));if(r.renderOrder=5,r.frustumCulled=!1,e.add(r),n.cover>.02){let s=n.points.map(x=>x[0]),o=n.points.map(x=>x[1]),[a,l,c,u]=[Math.min(...s),Math.max(...s),Math.min(...o),Math.max(...o)],h=l-a>=u-c,f=Math.min(1,n.cover),d=h?[[a-.1,c-.1],[a+(l-a)*f,c-.1],[a+(l-a)*f,u+.1],[a-.1,u+.1]]:[[a-.1,c-.1],[l+.1,c-.1],[l+.1,c+(u-c)*f],[a-.1,c+(u-c)*f]],m=Bl(n.points,d);if(m.length>=3){let x=new Gt(fm(m,n.y+.03),new rn({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:q1,fragmentShader:Y1,transparent:!0,side:xe}));x.renderOrder=6,e.add(x);let g=[];for(let _=0;_<m.length;_++){let M=m[_],v=m[(_+1)%m.length];g.push(M[0],n.y+.032,M[1],v[0],n.y+.032,v[1])}let p=new Yt;p.setAttribute("position",new Ut(g,3)),e.add(new ln(p,new nn({color:5995775,transparent:!0,opacity:.6})))}}}return e}function mm(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var gm=["neon","blueprint","day"];function xm(i){return gm.indexOf(i)}var nc={value:new G(.22,.88,1)},ic={value:0};function bm(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var $1=`
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
`;function En(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=nc,s.uniforms.uAccentOn=ic,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${$1}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Eo(i){return i==="day"?Ii:Ce}var vh=.012,Z1=.012;function _m(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],u=[],h=(p,_,M,v,y,w,R)=>{for(let b of[p,_,M,p,M,v])a.push(b[0],b[1],b[2]),l.push(y[0],y[1],y[2]),c.push(w),u.push(R)};i.rooms.forEach((p,_)=>{if(p.points.length<3)return;let M=p.points.map(P=>P[0]),v=p.points.map(P=>P[1]),y=Math.min(...M),w=Math.min(...v),R=Math.max(...M),b=Math.max(...v),S=Math.max(1,Math.ceil((R-y)/r)),E=Math.max(1,Math.ceil((b-w)/r));for(let P=0;P<S;P++)for(let T=0;T<E;T++){let F=y+(P+.5)*r,C=w+(T+.5)*r;if(!Xt([F,C],p.points)||s.some(k=>Xt([F,C],k)))continue;let L=y+P*r,N=w+T*r,U=Math.min(L+r,R),z=Math.min(N+r,b),O=Te(i,p)+vh;h([L,O,N],[L,O,z],[U,O,z],[U,O,N],[0,1,0],_,-1)}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!ur(p.type));if(d.length){let p=d.flatMap(b=>b.points.map(S=>S[0])),_=d.flatMap(b=>b.points.map(S=>S[1])),M=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(..._)/r)*r,y=Math.max(1,Math.ceil((Math.max(...p)-M)/r)),w=Math.max(1,Math.ceil((Math.max(..._)-v)/r)),R=(b,S,E)=>Dp(i,b)-(b.type==="pool"?0:io(b,S,E))+vh;for(let b=0;b<y;b++)for(let S=0;S<w;S++){let E=M+b*r,P=v+S*r,T,F=[E+r/2,P+r/2];T=d.find(L=>L.type==="pool"&&Xt(F,L.points));for(let L=d.length-1;L>=0&&!T;L--)Xt(F,d[L].points)&&(T=d[L]);if(!T)continue;let C=(L,N)=>[L,R(T,L,N),N];h(C(E,P),C(E,P+r),C(E+r,P+r),C(E+r,P),[0,1,0],f,-1)}}let m=Math.min(i.cut_height,ke(i)-i.elevation),x=[];t.forEach((p,_)=>{let M=Tn(i,p).top,v=p.b[0]-p.a[0],y=p.b[1]-p.a[1],w=Math.hypot(v,y);if(w<.05)return;let R=[v/w,y/w],b=[-R[1],R[0]],S=e[_],E=K1(p,R,w,n),P=(C,L)=>C?i.rooms.findIndex(N=>N.id===C):L?f:-1;x.push({a:p.a,b:p.b,h:M,ra:P(p.roomLeft,!1),rb:P(p.roomRight,p.exterior),gaps:E});let T=(C,L,N)=>[L,N,...C.filter(U=>U>L+.005&&U<N-.005)].sort((U,z)=>U-z).filter((U,z,O)=>z===0||U>O[z-1]+.005),F=T(E.flatMap(C=>[C.s0,C.s1]),0,w);for(let C of[1,-1]){let L=C>0?p.roomLeft:p.roomRight,N=L?i.rooms.findIndex(ct=>ct.id===L):p.exterior?f:-1;if(N<0)continue;let U=L?i.rooms[N]:null,z=U?Te(i,U):Tn(i,p).bottom,O=U?z+Math.min(ai(i,U),p.height??1/0):M,k=Math.min(m,O-.02),V=T([k,(k+O)/2,...E.flatMap(ct=>[ct.y0+.01,ct.y1-.01])],z+.02,O-.02),ot=(C>0?p.left:p.right)+Z1,Z=[b[0]*C,b[1]*C],et=(ct,X)=>[p.a[0]+R[0]*ct+Z[0]*ot,X,p.a[1]+R[1]*ct+Z[1]*ot],nt=ct=>{let X=et(ct,0),$=o?.(X[0],X[2]);return $==null?1/0:$-.02};for(let ct=0;ct<F.length-1;ct++){let X=F[ct+1]-F[ct],$=Math.max(1,Math.ceil(X/r));for(let rt=0;rt<$;rt++){let ft=F[ct]+X/$*rt,ut=F[ct]+X/$*(rt+1),At=(ft+ut)/2;for(let Ht=0;Ht<V.length-1;Ht++){let Rt=V[Ht],kt=V[Ht+1];if(kt-Rt<.01)continue;let Kt=(Rt+kt)/2;if(E.some(Oe=>At>Oe.s0&&At<Oe.s1&&Kt>Oe.y0&&Kt<Oe.y1))continue;let $t=Rt>=m-1e-6?S:mr+S,pe=Math.min(kt,nt(ft)),Pe=Math.min(kt,nt(ut));pe<=Rt+.005&&Pe<=Rt+.005||h(et(ft,Rt),et(ut,Rt),et(ut,Math.max(Rt,Pe)),et(ft,Math.max(Rt,pe)),[Z[0],0,Z[1]],N,$t)}}}}});for(let p of i.openings){let _=Ol(i,p,t),M=_?.stair;if(!_||!M)continue;let v=i.rooms.findIndex(w=>w.id===M.room.id),y=(w,R,b)=>[_.start[0]+_.axis[0]*w+M.toward[0]*R,b,_.start[1]+_.axis[1]*w+M.toward[1]*R];for(let w=0;w<M.count;w++){let R=M.face+M.depth*w/M.count,b=M.face+M.depth*(w+1)/M.count,S=(M.recess?_.low+(_.high-_.low)*(w+1)/M.count:_.high-(_.high-_.low)*w/M.count)+vh;h(y(0,R,S),y(_.width,R,S),y(_.width,b,S),y(0,b,S),[0,1,0],v,-1)}}let g=[];for(let p of n){if(p.opening.type!=="door")continue;let _=t.find(y=>ym(y,p)&&J1(y,p));if(!_||!_.roomLeft||!_.roomRight)continue;let M=i.rooms.findIndex(y=>y.id===_.roomLeft),v=i.rooms.findIndex(y=>y.id===_.roomRight);M<0||v<0||g.push({id:p.opening.id,a:M,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:x}}function ym(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function J1(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function K1(i,t,e,n){let r=[];for(let s of n){if(!ym(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function Q1(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function j1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function vm(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=j1(i),d=1/(1+u/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*m*(.2+.8*x)*Q1(i.kind,l/h)}function Mm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,m]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let _=p.x-u.x,M=p.y-u.y,v=p.z-u.z,y=Math.hypot(_,M,v)||1,w=vm(p,u.x,u.y,u.z,_/y,M/y,v/y);x[0]+=p.color[0]*w,x[1]+=p.color[1]*w,x[2]+=p.color[2]*w}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let s=new Map;for(let u of r){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};s.set(u.room,[...s.get(u.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=s.get(l[u]);if(!h)continue;let f=u*3,d=0,m=0,x=0;for(let g of h){if(g.walls.length&&tM(g,g.walls,o[f],o[f+1],o[f+2]))continue;let p=vm(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-m*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function tM(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=s*c-o*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let m=(h*o-f*s)/u;if(m<0||m>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let g=m*Math.hypot(l,c);if(!a.gaps.some(p=>g>p.s0&&g<p.s1&&x>p.y0&&x<p.y1))return!0}return!1}function _h(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Xt([t,e],r.points));return n<0?i.rooms.length:n}function Ao(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Ro={open:0,open2:0,tilt:0,tilt2:0,cover:null},Sm=2043986,wm=2769520,eM=2242399,yh=1845831,nM=1450554,hi=16758087,iM=1.2,rM=1.5,sM=1846349,oM=2572395,aM=1120816,lM=1845831,Tm=5995775,Em=9085695,hs=Vt(3662079,.08),cM=.2;function rc(i,t,e,n,r,s,o,a,l,c,u){let h=(d,m,x)=>t(d,m,x),f=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),Vt(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),Vt(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),Vt(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),Vt(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,u),i.tri(d,x,g,p,p,p,void 0,u)}function ue(i,t,e,n,r,s,o,a,l,c,u,h){if(a<=u+1e-6)return rc(i,t,e,n,r,s,o,a,l,c,te);if(o>=u-1e-6)return rc(i,t,e,n,r,s,o,a,l,c,h);rc(i,t,e,n,r,s,o,u,l,c,te),rc(i,t,e,n,r,s,u,a,l,c,h)}function Yi(i,t,e,n,r,s,o,a,l,c,u=0){let h=(f,d,m)=>{let x=v=>u?(o-v)/u:.5,g=t(e,r,f),p=t(n,r,f),_=t(n,r,d),M=t(e,r,d);i.tri(g,p,_,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,_,M,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?h(s,o,te):s>=l-1e-6?h(s,o,c):(h(s,l,te),h(l,o,c))}function uM(i,t,e,n,r,s,o,a,l,c){let u=t(e,r,o),h=t(n,r,o),f=t(n,s,o),d=t(e,s,o),m=0,x=(s-r)/c;i.tri(u,h,f,a,a,a,[0,m,1,m,1,x],l),i.tri(u,f,d,a,a,a,[0,m,1,x,0,x],l)}function Am(i,t,e){let n=new oe,r=new oe,s=new oe(!0),o=new tt(Sm),a=new tt(wm),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,m=s.count,x=t.get(h.opening.id)??Ro,g=h.width,{sill:p,top:_,bucket:M}=h,v=(b,S,E)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*S,E,h.start[1]+h.axis[1]*b+h.toRoom[1]*S],y=(h.faceRoom-h.faceOut)/2,w=h.opening.mark==="closed",R=h.opening.type==="door"&&hr(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!R||h.opening.type==="garage"){let b=-h.faceOut-.012,S=h.faceRoom+.012,E=h.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),P=E?Vt(hi,.8):new tt(Sm),T=E?Vt(hi,1):new tt(wm);ue(n,v,-.045,.02,b,S,0,_+.045,P,T,e,M),ue(n,v,g-.02,g+.045,b,S,0,_+.045,P,T,e,M),ue(n,v,.02,g-.02,b,S,_-.02,_+.045,P,T,e,M)}if(h.opening.type==="door"){let b=hr(h.opening,h.exterior),S=Jd(b),E=h.opening.swing==="out"?-1:1,P=E>0?h.faceRoom:-h.faceOut,T=h.opening.leaves===2,F=.02,C=g-.02,L=Zd(g,b,h.hingeAtStart,h.opening);if(L){for(let[O,k]of L.panels)ue(n,v,O,O+.04,y-.03,y+.03,.02,_-.02,o,a,e,M),ue(n,v,k-.04,k,y-.03,y+.03,.02,_-.02,o,a,e,M),ue(n,v,O,k,y-.03,y+.03,.02,.1,o,a,e,M),Yi(r,v,O+.04,k-.04,y,.1,_-.02,hs,e,M);F=L.x0,C=L.x1}let N=T?(C-F)/2-.004:C-F,U=S?.06:.04;S&&(ue(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new tt(yh),a,e,M),h.exterior&&ue(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,_+.1,_+.17,Vt(hi,.55),Vt(hi,.85),e,te));let z=R?[]:[[h.hingeAtStart,x.open]];T&&!R&&z.push([!h.hingeAtStart,x.open2??0]);for(let[O,k]of z){let V=Math.min(1,Math.max(0,k)),ot=b==="sliding"?0:V*rM,Z=b==="sliding"?V*N:0,et=(Ht,Rt,kt)=>{let Kt=Ht*Math.cos(ot)-Rt*Math.sin(ot)-Z,$t=P+E*(Rt*Math.cos(ot)+Ht*Math.sin(ot)+(Z?.05:0));return v(O?F+Kt:C-Kt,$t,kt)},nt=V>.05?te:M,ct=w?!!x.sensed&&V<.05:V>.9,X=ct?Vt(hi,.7):new tt(S?aM:sM),$=ct?Vt(hi,.9):new tt(S?lM:oM);b==="glass"?(ue(n,et,0,.05,-U,0,.01,_-.01,X,$,e,nt),ue(n,et,N-.05,N,-U,0,.01,_-.01,X,$,e,nt),ue(n,et,.05,N-.05,-U,0,.01,.12,X,$,e,nt),ue(n,et,.05,N-.05,-U,0,_-.08,_-.01,X,$,e,nt),Yi(r,et,.05,N-.05,-U/2,.12,_-.08,hs,e,nt)):ue(n,et,0,N,-U,0,.01,_-.01,X,$,e,nt),b==="front_glass"?Yi(r,et,.12,N-.12,.001,_*.55,_-.18,hs,e,nt):S&&Yi(r,et,.1,.18,.001,.3,_-.3,hs,e,nt);let rt=Math.min(1.05,_*.5),ft=S?.3:.012,ut=S?N-.11:N-.16,At=S?N-.08:N-.05;ue(n,et,ut,At,.004,.05,rt-ft,rt+ft,new tt(Tm),new tt(Em),e,nt),ue(n,et,ut,At,-U-.05,-U-.004,rt-ft,rt+ft,new tt(Tm),new tt(Em),e,nt)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new tt(13951231),E=h.faceRoom-.03,P=_*(1-b);b>.01&&Yi(s,v,.02,g-.02,E,P,_,S,e,M,.5);let T=(1-b)*_;T>.01&&uM(s,v,.02,g-.02,E,E+T,_+.03,S,M,.5)}else if(hr(h.opening,h.exterior)==="glass_wall"){ue(n,v,0,.04,y-.025,y+.025,p,_,o,a,e,M),ue(n,v,g-.04,g,y-.025,y+.025,p,_,o,a,e,M),ue(n,v,.04,g-.04,y-.025,y+.025,p,p+.03,o,a,e,M),ue(n,v,.04,g-.04,y-.025,y+.025,_-.04,_,o,a,e,M);let E=Math.max(1,Math.round((g-2*.04)/.9)),P=(g-2*.04)/E;for(let T=1;T<E;T++){let F=.04+T*P;ue(n,v,F-.02,F+.02,y-.025,y+.025,p+.03,_-.04,o,a,e,M)}for(let T=0;T<E;T++){let F=.04+T*P+(T?.02:0),C=.04+(T+1)*P-(T<E-1?.02:0);Yi(r,v,F,C,y,p+.03,_-.04,hs,e,M)}}else{ue(n,v,0,.06,y-.035,y+.035,p,_,o,a,e,M),ue(n,v,g-.06,g,y-.035,y+.035,p,_,o,a,e,M),ue(n,v,.06,g-.06,y-.035,y+.035,p,p+(p>.05?.06:.03),o,a,e,M),ue(n,v,.06,g-.06,y-.035,y+.035,_-.06,_,o,a,e,M),p>.3&&(ue(n,v,-.04,g+.04,y+.035,h.faceRoom+.07,p-.03,p,new tt(yh),a,e,M),h.exterior&&ue(n,v,-.03,g+.03,-h.faceOut-.06,y-.035,p-.04,p-.02,new tt(yh),a,e,M));let E=.055,P=p+(p>.05?.06:.03),T=_-.06,F=y+.035,C=y+.035+.06,N=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of N){let z=U.open>.02||U.tilt>.02,O=w?!!x.sensed&&!z:z,k=O?Vt(hi,.75):new tt(eM),V=O?Vt(hi,.95):a,ot=U.x0,Z=U.x1,et=Z-ot,nt=U.open*iM,ct=U.tilt*cM,X=(rt,ft,ut)=>{let At=ut-P,Ht=ft+At*Math.sin(ct),Rt=P+At*Math.cos(ct),kt=rt*Math.cos(nt)-(Ht-F)*Math.sin(nt);Ht=F+(Ht-F)*Math.cos(nt)+rt*Math.sin(nt);let Kt=U.atStart?ot+kt:Z-kt;return v(Kt,Ht,Rt)},$=nt>.05?te:M;if(ue(n,X,0,E,F,C,P,T,k,V,e,$),ue(n,X,et-E,et,F,C,P,T,k,V,e,$),ue(n,X,E,et-E,F,C,P,P+E,k,V,e,$),ue(n,X,E,et-E,F,C,T-E,T,k,V,e,$),Yi(r,X,E,et-E,(F+C)/2,P+E,T-E,O?Vt(hi,.16):hs,e,$),hr(h.opening,h.exterior)==="bars"){let rt=(P+T)/2,ft=(F+C)/2;ue(n,X,E,et-E,ft-.012,ft+.012,rt-.012,rt+.012,k,V,e,$),ue(n,X,et/2-.012,et/2+.012,ft-.012,ft+.012,P+E,T-E,k,V,e,$)}}}if(x.cover!==null){let b=-h.faceOut,S=_+.2;ue(n,v,-.05,g+.05,b-.15,b,_,S,new tt(nM),a,e,M);let E=Math.min(1,Math.max(0,x.cover));if(E>.01){let P=_-E*(_-p);Yi(s,v,0,g,b-.07,P,_,new tt(16777215),e,M,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:m,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:u}}var hM=.3,Rm=2.6;function Cm(i,t=.32,e=.22,n=[]){let r=i.map(y=>y[0]),s=i.map(y=>y[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),u=c-l>=a-o,h=e*.7071,f=y=>{let w=[y,[y[0]+e,y[1]],[y[0]-e,y[1]],[y[0],y[1]+e],[y[0],y[1]-e]],R=[...w,[y[0]+h,y[1]+h],[y[0]-h,y[1]+h],[y[0]+h,y[1]-h],[y[0]-h,y[1]-h]];return w.every(b=>Xt(b,i))&&!n.some(b=>R.some(S=>Xt(S,b)))},d=(y,w)=>f(u?[y,w]:[w,y]),m=(y,w)=>{let R=Math.ceil(Math.hypot(w[0]-y[0],w[1]-y[1])/.05);for(let b=1;b<R;b++)if(!f([y[0]+(w[0]-y[0])*b/R,y[1]+(w[1]-y[1])*b/R]))return!1;return!0},[x,g,p,_]=u?[o,a,l,c]:[l,c,o,a],M=[],v=!0;for(let y=x+e;y<=g-e+1e-6;y+=t){let w=null,R=null,b=.05;for(let T=p;T<=_+1e-6;T+=b)if(d(y,T)&&(R??=T),(!d(y,T)||T+b>_+1e-6)&&R!==null){let F=d(y,T)?T:T-b;(!w||F-R>w[1]-w[0])&&(w=[R,F]),R=null}if(!w||w[1]-w[0]<.2)continue;let S=T=>{let[F,C]=T?w:[w[1],w[0]];return[u?[y,F]:[F,y],u?[y,C]:[C,y]]},E=S(v),P=M[M.length-1];if(P&&n.length&&!m(P,E[0])){let T=S(!v);if(!m(P,T[0]))continue;E=T,v=!v}M.push(E[0],E[1]),v=!v}return M}function Sh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Mh=i=>Math.atan2(Math.sin(i),Math.cos(i));function Pm(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Mh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Rm*e),!0)}let a=Math.atan2(r,s),l=Mh(a-i.heading);if(i.heading=Mh(i.heading+Math.sign(l)*Math.min(Math.abs(l),Rm*e)),Math.abs(l)<.35){let c=Math.min(o,hM*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var An=null,Im=new Map;function Fm(i,t=0){let e=new oe,n=new We,r=Fe(i.type);if(r?.light)Wl(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)wh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Gl(e,n,new oe,s)}return{buf:e,lines:n}}function fM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Im.get(r);if(s)return s;e&&to(e),An??=new cr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),An.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),An.setSize(t,t,!1),An.setClearColor(0,0);let{buf:o,lines:a}=Fm(i),l=new Mi,c=new Gt(o.geometry(),new le({vertexColors:!0,color:new tt(n,n,n)})),u=new ln(a.geometry(),new nn({vertexColors:!0,color:new tt(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new an().setFromObject(c),f=h.getCenter(new G),d=new qn(-1,1,1,-1,.01,100);d.position.copy(f).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let m=.05;for(let p of[h.min.x,h.max.x])for(let _ of[h.min.y,h.max.y])for(let M of[h.min.z,h.max.z]){let v=new G(p,_,M).applyMatrix4(d.matrixWorldInverse);m=Math.max(m,Math.abs(v.x),Math.abs(v.y))}let x=m*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),An.render(l,d);let g=An.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),Im.set(r,g),g}function dM(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Lm.get(s);if(o)return o;n&&to(n);let{buf:a,lines:l}=Fm(i,t),c=new Gt(a.geometry(),new le({vertexColors:!0,color:new tt(r,r,r)})),u=new ln(l.geometry(),new nn({vertexColors:!0,color:new tt(r*1.8,r*1.8,r*1.8)})),h=new an().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,m=Math.max(0,h.min.y),x=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((x-m)*e)));An??=new cr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),An.setPixelRatio(1),An.setSize(g,p,!1),An.setClearColor(0,0);let _=new Mi;_.add(c,u);let M=new qn(f,d,x,m,.01,100);M.position.set(0,0,50),M.lookAt(0,0,0),M.updateProjectionMatrix(),An.render(_,M);let v=An.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let y={url:v,x0:f,x1:d,y0:m,y1:x};return Lm.set(s,y),y}var Lm=new Map;var Nm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},pM=2.4,mM=1.4,gM=.22,Um=140,Eh=32,xM=500,Om=160,Bm=33,zm=.028,bM=.09,ie=2767456,vM=1911110,_M=1,Ah=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),sc=450,km=125,yM=.08,ac={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},MM=new tt(1714765);function SM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Rh=class{host;options;renderer;scene=new Mi;camera=new Qe(38,1,.1,400);controls;labels;root=new je;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new G(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new ln(new Yt,new nn({color:10471679,transparent:!0,opacity:.4,blending:Ce,depthWrite:!1}));snow=new qr(new Yt,new ir({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Gt(new Cs(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Ce,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=TM(),this.blindTexture=AM(),this.haloTexture=CM(),this.ground=new Gt(new Ei(1,1),new le({transparent:!1,blending:Ce,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){to(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>u.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(u=>u.id===t);if(!e||!n)return;let r=n.start_view;if(r){let u=e.floor.elevation+e.ty,[h,f]=fr(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new G(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=fr(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new G(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new G(s,e.floor.elevation+e.ty+Te(e.floor,n)+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])To(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&To(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(mm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=pm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new je;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let u=0;u<3;u++){let h=new Gt(new Ds(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Ce,depthWrite:!1,side:xe}));h.rotation.x=-Math.PI/2,h.position.set(c.x,o+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of s)for(let u of c.members){let h=s.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,h.x,o+.02,h.z))}if(a.length){let c=new Yt;c.setAttribute("position",new Ut(a,3));let u=new ln(c,new nn({color:3662079,transparent:!0,opacity:.45,blending:Ce,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Th(r),o=Vm(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new oe;for(let s of e)um(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=bm(t),n=e?1:0;n===ic.value&&(!e||nc.value.equals(new G(...e)))||(ic.value=n,e&&nc.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=xm(t);let e=Eo(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new tt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ws(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([u,h,f],c*3),n&&o.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Yt;l.setAttribute("position",new Ut(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+o*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-o*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(o+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ce,o=(r?t.azimuth+180:t.azimuth)*ce,a=Math.max(10,Math.abs(t.elevation))*ce,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),h=new G(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,u),this.skyDisc.scale.setScalar(u*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Ro,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Om),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new oe;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Ip(e,n,qe(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&SM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new cr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Le,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new tc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},xM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=_m(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Gm(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Ao(r,a.ra),a.rb=Ao(r,a.rb)}t.lightSurface=n;let s=new Yt;s.setAttribute("position",new Ut(n.pos,3)),s.setAttribute("color",new Ut(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Ut(n.fold,1));let o=new er(new Uint32Array(n.pos.length/3),1);o.setUsage(hu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=_h(t.floor,n.x,n.z),a=Ao(t.lightZones,o),[l,,c]=n.size??(n.lamp?ac[n.lamp]:[.3,.3,.3]),u=n.base??0,h=n.top??s,f=e.length,d={ceiling:[h-.12,"ceiling"],downlight:[h-.03,"spot"],spot:[h-c,"spot"],panel:[h-.05,"ceiling"],pendant:[Math.max(u+.5,h-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<_M?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[m,x]=n.lamp?d[n.lamp]:[n.y,"omni"],g=n.lightY??m,p=r.color;if(n.lamp==="strip"){let _=(n.rotation??0)*ce,M=!!n.upright||Math.abs(n.roll??0)>45;for(let v of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:u+l*(.5+v),z:n.z,color:p,level:r.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(_)*l*v,y:g,z:n.z+Math.sin(_)*l*v,color:p,level:r.level*.55,kind:M?"omni":x,room:a})}else e.push({x:n.x,y:g,z:n.z,color:p,level:r.level,kind:x,room:a});if(n.rotation_x||n.rotation_z){let _=js(n,oc(n,s));for(let M=f;M<e.length;M++){let v=e[M];[v.x,v.y,v.z]=_(v.x,v.y,v.z),v.kind="omni",v.room=Ao(t.lightZones,_h(t.floor,v.x,v.z))}}}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let f=t.geo.openings.find(m=>m.opening.id===h.id);if(f&&hr(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Mm(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:En(new le({vertexColors:!0}),this.themeUniform),pattern:EM(this.patternTexture),wall:En(qi(new le({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:qi(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new le({vertexColors:!0,blending:ks,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-1}),lines:En(qi(new nn({vertexColors:!0,transparent:!0,blending:Eo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:qi(new le({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:En(qi(new le({vertexColors:!0,side:xe}),t),this.themeUniform),glass:qi(new le({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:xe}),t),blinds:En(qi(new le({map:this.blindTexture,vertexColors:!0,side:xe}),t),this.themeUniform),flow:RM(this.flowTime),solarLive:bh(this.flowTime),lamps:En(new le({vertexColors:!0}),this.themeUniform),halos:new ir({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:xe}),screens:new le({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:xe})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=sh(n)?.id===s.id?o.filter(nt=>nt.face===rh).map(nt=>({field:nt,face:Bp(n,nt)})):[],l=o.filter(nt=>nt.face.startsWith(`wall:${s.id}:`));if(l.length){let nt=new Map(Op(n,s.id).map(ct=>[ct.key,ct]));for(let ct of l){let X=nt.get(ct.face);X&&a.push({field:ct,face:X})}}let u=(n.settings.roof.sections??[]).some(nt=>cp(nt,ke(s)))?(nt,ct)=>{let X=up(n,nt,ct);return X===null?null:X-s.elevation}:void 0,h=Kp(gh(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Qp(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new je,x=new Gt(h.floor,d.floor),g=new Gt(h.shadow,d.shadow);g.renderOrder=1;let p=new Gt(h.floor,d.pattern);p.renderOrder=2;let _=new Gt(new Yt,d.glow);_.renderOrder=3,_.visible=!1;let M=new Gt(new Yt,d.frames),v=new Gt(new Yt,d.blinds),y=new Gt(new Yt,d.glass);y.renderOrder=4;let w=new Gt(new Yt,d.lamps);w.visible=!1;let R=new Gt(new Yt,d.cones);R.visible=!1,R.renderOrder=3;let b=new qr(new Yt,d.halos);b.visible=!1,b.renderOrder=7;let S=new Gt(new Yt,d.cones);S.visible=!1,S.renderOrder=7;let E=new Gt(new Yt,d.cones);E.visible=!1,E.renderOrder=7;let P=new Gt(new Yt,d.lamps);P.visible=!1;let T=new Gt(new Yt,d.lamps);T.visible=!1;let F=new Gt(new Yt,d.screens);F.visible=!1,F.renderOrder=5;let C=new Gt(new Yt,d.flow);C.renderOrder=5,C.frustumCulled=!1;let L=xh(a,s.elevation),N=L?new Gt(L.geometry,d.solarLive):null;N&&(N.renderOrder=6,To(L,this.solarLevels));for(let nt of[M,v,y])nt.frustumCulled=!1;let U=new Gt(h.walls,d.glassWall),z=new Gt(h.walls,d.wall);U.renderOrder=6,m.add(x,g,p,_,z,new ln(h.lines,d.lines),M,v,y,C,w,R,b,S,E,P,T,F,U,...N?[N]:[]),this.root.add(m);let O=document.createElement("button");O.className="fp3d-pin fp3d-pin-floor",O.dataset.floor=s.id;let k=document.createElement("b");k.textContent=s.name||"\u2013";let V=document.createElement("span");V.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",O.append(k,V),O.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(O);let ot=t.get(s.id),Z=[],et=null;for(let nt of s.rooms){let ct=document.createElement("button");ct.className="fp3d-pin",ct.dataset.room=nt.id,ct.dataset.floor=s.id,this.fillRoomPin(ct,nt.name,this.roomInfo.get(nt.id)),ct.addEventListener("click",()=>this.options.onRoomTap?.(s.id,nt.id)),this.labels.append(ct);let[X,$]=fr(nt.points);Z.push({pin:ct,room:nt,cx:X,cz:$});for(let[rt,ft]of nt.points)et??={x0:rt,x1:rt,z0:ft,z1:ft},et.x0=Math.min(et.x0,rt),et.x1=Math.max(et.x1,rt),et.z0=Math.min(et.z0,ft),et.z1=Math.max(et.z1,ft)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:y,blindsMesh:v,flowMesh:C,solarMesh:N,solarLive:L,lampMesh:w,sunMesh:R,sunSig:"",haloMesh:b,coneMesh:S,trailMesh:E,fridgeMesh:P,pipeMesh:T,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:z,screenMesh:F,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:et,roomPins:Z,labelSize:null,materials:d,mask:f,openings:new Map,y:ot?.y??0,o:ot?.o??1,ty:0,to:1,appliedO:-1,label:O})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Ro);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(d=>d.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Yp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Wi(this.building).map(d=>[d.key,d])),n=this.building.settings.roof?.solar??[],r=$l(bh(this.flowTime)),s=[],o=new je,a=En(em(new le({vertexColors:!0,transparent:!0,side:xe,depthWrite:!1}),this.roofDirection),this.themeUniform),l=En(new nn({vertexColors:!0,transparent:!0,blending:Eo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=En($l(new le({vertexColors:!0,transparent:!0,side:xe})),this.themeUniform),u=En($l(new nn({vertexColors:!0,transparent:!0,blending:Eo(this.theme),depthWrite:!1})),this.themeUniform,!0),h=En(new le({vertexColors:!0,transparent:!0,side:xe,depthWrite:!1}),this.themeUniform),f=t.map(d=>{let m=new je,x=d.solid.geometry();if(x.computeVertexNormals(),m.add(new Gt(x,a),new ln(d.lines.geometry(),l)),d.solar){let{facing:_}=d.solar;m.add(new Gt(xo(d.solar.solid.geometry(),_.normals,_.points),c),new ln(xo(d.solar.lines.geometry(),_.lineNormals,_.linePoints),u))}d.glass.count&&m.add(new Gt(d.glass.geometry(),h));let g=n.flatMap(_=>{let M=e.get(_.face);return M&&(M.section?d.sections?.includes(M.section):d===t[0])?[{face:M,field:_}]:[]}),p=xh(g,d.floor.elevation+d.base);if(p){let _=new Gt(p.geometry,r);_.renderOrder=9,m.add(_),s.push(p),To(p,this.solarLevels)}return m.renderOrder=8,o.add(m),{group:m,floorId:d.floor.id,rideId:pp(this.building,d.floor,d.sections??[]),base:d.base,lift:d.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:f,solid:a,lines:l,solar:c,solarLines:u,glass:h,live:r,lives:s},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?ec(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,s=1-Math.exp(-t/Um),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,u=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+ec(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?u*mM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=!1,e.lines.opacity=this.roofO,e.solar.opacity=this.roofO,e.solar.depthWrite=this.roofO>.9,e.solarLines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:gM)):r=this.explode?n.rank*pM:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Um);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Om);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Ro,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?u[f]=d:(u[f]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(r.openings.set(o,u),s=!0),e||=h}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new tt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*yM+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>sc?.5+.5*Math.sin(f/140):f/sc;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.rotation_x??0},${u.rotation_z??0},${u.pivot_y??""},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.top??""},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let u=new oe,h=[],f=[],d=new Map,m=t.floor.height;for(let x of r){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?Ah.has(x.lamp)&&(x.top??m)>Math.min(t.floor.cut_height,m):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,_=x.pack?Fe(x.pack):void 0,[M,v,y]=x.size??[.3,.3,.3];x.model?Lp(u,x.model,x.x,x.model==="camera_ceiling"?x.top??m:x.y,x.z,x.rotation??0):_?Wl(u,_,{x:x.x,z:x.z,rotation:x.rotation??0,rotation_x:x.rotation_x,rotation_z:x.rotation_z,w:M,d:v,h:y,mirror:x.mirror},x.base??0,65280):wh(u,{...x,lamp:x.lamp},x.top??m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:p,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Od(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,x=d?new tt(...d.color.map(_=>Math.min(1,_*m))):new tt(vM),g=n(u.id);g>0&&x.lerp(new tt(1,1,1),.7*g);let p=new tt(x.getHex());Bd(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ce,r=this.weather?.cloud??0,s=Gm(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new oe;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ce,u=e.azimuth*ce,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let m=t.floor.rooms.find(F=>F.id===d.opening.room_id);if(!m||m.points.length<3)continue;let x=Te(t.floor,m),g=[-d.toRoom[0],-d.toRoom[1]],p=g[0]*h[0]+g[1]*h[1];if(p<.05)continue;let _=t.openings.get(d.opening.id),M=d.top-(_?.cover??0)*(d.top-d.sill);if(M-d.sill<.05)continue;let v=(F,C)=>{let L=Math.min(7,(C-x)*f);return[d.start[0]+d.axis[0]*F+d.toRoom[0]*d.faceRoom-h[0]*L,x+.02,d.start[1]+d.axis[1]*F+d.toRoom[1]*d.faceRoom-h[1]*L]},y=.14*l*Math.min(1,p*1.5),w=new tt(1*y,.82*y,.55*y),R=w.clone().multiplyScalar(.45),b=t.floor.rooms.findIndex(F=>F.id===d.opening.room_id);if(b<0||t.floor.rooms[b].points.length<3)continue;let S=s[b],E=t.floor.rooms.filter((F,C)=>s[C]===S&&Math.abs(Te(t.floor,F)-x)<.001&&F.points.length>=3).map(F=>F.points),P=Math.max(1,Math.ceil(Math.min(7,(M-x)*f)/.25)),T=Math.max(1,Math.ceil(d.width/.3));for(let F=0;F<P;F++){let C=d.sill+(M-d.sill)*F/P,L=d.sill+(M-d.sill)*(F+1)/P,N=F/P,U=(F+1)/P,z=w.clone().lerp(R,N),O=w.clone().lerp(R,U);for(let k=0;k<T;k++){let V=d.width*k/T,ot=d.width*(k+1)/T,Z=v((V+ot)/2,(C+L)/2);if(!E.some($=>Xt([Z[0],Z[2]],$)))continue;let et=v(V,C),nt=v(ot,C),ct=v(ot,L),X=v(V,L);a.tri(et,nt,ct,z,z,O),a.tri(et,ct,X,z,O,O)}}}}e&&this.building&&nm(a,this.building,t.floor,e,r,this.roofWindows,t.geo.holes),t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new oe,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let v=(l.rotation??0)*ce,y=[-Math.sin(v),Math.cos(v)],w=l.model==="camera_ceiling",R=l.reach??(w?3:4.5),b=(l.fov??(w?360:90))*ce/2,S=l.motion?new tt(.9,.12,.16):new tt(.04,.22,.28),E=new tt(0,0,0),P=Math.max(4,Math.round(b/.15)),T=wn(t.floor,l.x,l.z)+.015,F=t.geo.walls2d,C=O=>{let k=O.b[0]-O.a[0],V=O.b[1]-O.a[1],ot=k*k+V*V||1,Z=Math.max(0,Math.min(1,((l.x-O.a[0])*k+(l.z-O.a[1])*V)/ot));return Math.hypot(l.x-(O.a[0]+k*Z),l.z-(O.a[1]+V*Z))},L=null;for(let O of F)C(O)<.45&&(!L||C(O)<C(L))&&(L=O);let N=O=>{let k=y[0]*Math.cos(O)-y[1]*Math.sin(O),V=y[1]*Math.cos(O)+y[0]*Math.sin(O),ot=R;for(let Z of F){let et=Z.b[0]-Z.a[0],nt=Z.b[1]-Z.a[1],ct=k*nt-V*et;if(Math.abs(ct)<1e-9)continue;let X=((Z.a[0]-l.x)*nt-(Z.a[1]-l.z)*et)/ct,$=((Z.a[0]-l.x)*V-(Z.a[1]-l.z)*k)/ct;Z===L&&X<=.45||X>.02&&X<ot&&$>=0&&$<=1&&(ot=X)}return ot},U=O=>{let k=N(O);return[l.x+(y[0]*Math.cos(O)-y[1]*Math.sin(O))*k,T,l.z+(y[1]*Math.cos(O)+y[0]*Math.sin(O))*k]},z=s.count;for(let O=0;O<P;O++)s.tri([l.x,T,l.z],U(-b+2*b*(O+1)/P),U(-b+2*b*O/P),S,E,E);o.push({id:l.id,start:z,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Ah.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??ac[l.lamp],m=l.base??0,x=n.length,g=s.p.length,p=(l.rotation??0)*ce,_={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(m+.4,u-d)+.08,floor:m+d-.15,uplight:m+d,table:m+d-.09,wall:m+d/2,strip:m+Math.max(.02,d)-.01,bollard:m+d-.08,garden:m+d-.03}[l.lamp],M=(v,y,w=1)=>{n.push(v,_,y),r.push(...c.color.map(R=>R*c.level*.7*w))};if(l.lamp==="strip")for(let v of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,m+h*(.5+v),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):M(l.x+Math.cos(p)*h*v,l.z+Math.sin(p)*h*v,.6);else l.lamp==="wall"?M(l.x-Math.sin(p)*(f/2+.05),l.z+Math.cos(p)*(f/2+.05)):M(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")&&!l.rotation_x&&!l.rotation_z){let v=new tt(...c.color.map(S=>S*.09*c.level)),y=new tt(0,0,0),w=Math.max(.03,h/2),R=.45+.35*c.level,b=16;for(let S=0;S<b;S++){let E=S/b*Math.PI*2,P=(S+1)/b*Math.PI*2,T=[l.x+Math.cos(E)*w,_,l.z+Math.sin(E)*w],F=[l.x+Math.cos(P)*w,_,l.z+Math.sin(P)*w],C=[l.x+Math.cos(E)*R,.02,l.z+Math.sin(E)*R],L=[l.x+Math.cos(P)*R,.02,l.z+Math.sin(P)*R];s.tri(T,C,L,v,y,y),s.tri(T,L,F,v,y,v)}}Sn(n,x,l,oc(l,e)),Sn(s.p,g,l,oc(l,e))}let a=new Yt;a.setAttribute("position",new Ut(n,3)),a.setAttribute("color",new Ut(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=gh(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.rotation_x??0},${s.rotation_z??0},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new oe;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ce,l=Math.cos(a),c=Math.sin(a),u=js(s,qe(t.floor,s)+s.h/2),h=(y,w,R)=>u(s.x+y*l-R*c,w,s.z+y*c+R*l);if(o.faces){let y=Math.max(.05,s.w)*(s.mirror?-1:1),w=Math.max(.05,s.d),R=Math.max(.005,s.h),b=qe(t.floor,s);for(let S of o.faces){if(S.part==="lights"){let k=Fe(s.type),V=ot=>["#e8f4ff","#ff3b4f"].includes(ot.color.toLowerCase());if(k&&k.parts.some(V)){let ot=new tt(...S.color.map(Z=>Math.min(1,Z*(.4+.6*S.level))));Hl(r,k,s,b,ot.getHex(),V)}continue}if(S.part==="cabin"){let k=Fe(s.type),V=ot=>ot.color.toLowerCase()==="#13283a"||ot.color==="glass";if(k&&k.parts.some(V)){let ot=new tt(...S.color.map(Z=>Math.min(1,Z*(.3+.5*S.level))));Hl(r,k,s,b,ot.getHex(),V);continue}}if(S.part==="band"||S.part==="cabin"){let k=S.part==="cabin",V=b+R*(k?.6:.42),ot=k?b+R*.86:V+.07,Z=new tt(...S.color.map(X=>Math.min(1,X*(.3+.45*S.level)))),et=Math.abs(y)/2+(k?.012:.02),nt=w/2+(k?.012:.02),ct=[[-et,-nt],[et,-nt],[et,nt],[-et,nt]];for(let X=0;X<4;X++){let $=ct[X],rt=ct[(X+1)%4],ft=h($[0]*Math.sign(y),V,$[1]),ut=h(rt[0]*Math.sign(y),V,rt[1]),At=h(rt[0]*Math.sign(y),ot,rt[1]),Ht=h($[0]*Math.sign(y),ot,$[1]);r.tri(ft,ut,At,Z),r.tri(ft,At,Ht,Z)}continue}let E=S.part==="right"?.03:-Math.abs(y)/2+.03,P=S.part==="left"?-.03:Math.abs(y)/2-.03,T=b+(S.part==="bottom"?R*.45:R)+.006,F=new tt(...S.color.map(k=>Math.min(1,k*(.35+.65*S.level)))),C=new tt(0,0,0),L=(k,V,ot=T)=>h(k*Math.sign(y),ot,V),N=[L(E,-w/2+.03),L(P,-w/2+.03),L(P,w/2-.03),L(E,w/2-.03)];r.tri(N[0],N[2],N[1],F),r.tri(N[0],N[3],N[2],F);let U=.12+.1*S.level,z=F.clone().multiplyScalar(.5),O=[L(E-U,-w/2-U,T+.004),L(P+U,-w/2-U,T+.004),L(P+U,w/2+U,T+.004),L(E-U,w/2+U,T+.004)];for(let k=0;k<4;k++){let V=(k+1)%4;r.tri(N[k],O[V],O[k],z,C,C),r.tri(N[k],N[V],O[V],z,z,C)}}continue}let f=Fe(s.type);if(f&&!f.light&&o.ring&&f.parts.some(y=>y.glow)){let y=new tt(...o.color.map(w=>Math.min(1,w*(.45+.55*o.level))));Hl(r,f,s,qe(t.floor,s),y.getHex())}let d=th(s,t.floor);if(!d)continue;let m=new tt(...o.color.map(y=>Math.min(1,y*(.35+.65*o.level)))),x=new tt(0,0,0),g=d.z+.004;if(r.tri(h(d.x0,d.y0,g),h(d.x1,d.y0,g),h(d.x1,d.y1,g),m),r.tri(h(d.x0,d.y0,g),h(d.x1,d.y1,g),h(d.x0,d.y1,g),m),o.plain)continue;let p=.18+.12*o.level,_=m.clone().multiplyScalar(.5),M=[h(d.x0,d.y0,g),h(d.x1,d.y0,g),h(d.x1,d.y1,g),h(d.x0,d.y1,g)],v=[h(d.x0-p,d.y0-p,g+.01),h(d.x1+p,d.y0-p,g+.01),h(d.x1+p,d.y1+p,g+.01),h(d.x0-p,d.y1+p,g+.01)];for(let y=0;y<4;y++){let w=(y+1)%4;r.tri(M[y],v[y],v[w],_,x,x),r.tri(M[y],v[w],M[w],_,x,_)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=th(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new Gt(new Ei(1,1),new le({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new Us().load(o.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=Le,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,s,a,h,qe(t.floor,s)+s.h/2),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture,qe(t.floor,s)+s.h/2)}}placeScreenPicture(t,e,n,r,s){let o=r.image,a=o?.width&&o?.height?o.width/o.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,u=Math.min(l,c*a),h=u/a,f=e.rotation*ce,d=(n.x0+n.x1)/2,m=n.z+.008;t.scale.set(u,h,1),t.rotation.set((e.rotation_x??0)*ce,-f,(e.rotation_z??0)*ce,"YZX");let x=js(e,s);t.position.set(...x(e.x+d*Math.cos(f)-m*Math.sin(f),(n.y0+n.y1)/2,e.z+d*Math.sin(f)+m*Math.cos(f)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Th).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Th(u))??{speed:Vm(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(_=>_*f),m=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(m<1e-4)continue;let x=[(u.b[0]-u.a[0])/m,(u.b[1]-u.a[1])/m,(u.b[2]-u.a[2])/m],g=[];if(Math.abs(x[1])<.5){let _=Math.hypot(x[0],x[2])||1;g.push([-x[2]/_,0,x[0]/_])}else g.push([1,0,0],[0,0,1]);let p=this.lowQuality?[[zm*1.4,1]]:[[bM,.25],[zm,1]];for(let[_,M]of p)for(let v of g){let y=_/2,w=(b,S)=>[b[0]+v[0]*y*S,b[1]+v[1]*y*S,b[2]+v[2]*y*S],R=[[w(u.a,-1),u.dist,0],[w(u.b,-1),u.dist+m,0],[w(u.b,1),u.dist+m,1],[w(u.a,1),u.dist,1]];for(let b of[0,1,2,0,2,3]){let[S,E,P]=R[b];n.push(S[0],S[1],S[2]),r.push(d[0]*M,d[1]*M,d[2]*M),s.push(E,P),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Yt;c.setAttribute("position",new Ut(n,3)),c.setAttribute("color",new Ut(r,3)),c.setAttribute("uv",new Ut(s,2)),c.setAttribute("flowSpeed",new Ut(o,1)),c.setAttribute("flowOffset",new Ut(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Am(t.geo.openings,t.openings,Math.min(t.floor.cut_height,ke(t.floor)-t.floor.elevation));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new tt(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new tt(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(MM,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new an;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[m,x]of d.points)e.expandByPoint(new G(m,f+Te(h.floor,d),x)),e.expandByPoint(new G(m,f+ke(h.floor)-h.floor.elevation,x))}e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),r=e.getSize(new G),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new G(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new an,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=PM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),r=t.getSize(new G),s=Eh*Math.ceil((Math.max(r.x,r.z)+16)/Eh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Xi-.02,n.z)}distanceFor(t){let e=this.camera.fov*ce,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Bs;return r.setFromCamera(new ee(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??te;if(f!==te&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,_=Math.hypot(p.x,p.z)||1,M=[a.point.x-p.x/_*.3,a.point.z-p.z/_*.3],v=c.floor.rooms.find(y=>y.points.length>=3&&Xt(M,y.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+sc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||s(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ce,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:s.id,d:h})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(h=>h.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(s!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new G),d=Math.hypot(f.x,f.z)||1,m=[f.x/d,f.z/d],x=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,p=2*x*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-m[1],m[0]],fwd:m,perPx:p,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),m=f&&this.floorPoint(f,t,e);if(!f||!d||!m)return;let x=this.building?.settings.grid??.05;n.x=d.x=Math.round((m[0]+n.offset[0])/x)*x,n.z=d.z=Math.round((m[1]+n.offset[1])/x)*x,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ep(s.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new We,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new tt(.25,.9,1):new tt(1,.71,.28)))}n&&(this.ghost=new ln(e.geometry(),new nn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=t.p.length,o=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=is(e.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,u=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=n.mount_y!=null||Fe(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?qe(e.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-u:qe(e.floor,n),f=n.rotation*ce,d=Math.cos(f),m=Math.sin(f),x=(M,v,y)=>[o+M*d-v*m,y,a+M*m+v*d],g=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let M=0;M<4;M++){let[v,y]=g[M],[w,R]=g[(M+1)%4];t.seg(x(v,y,h+.01),x(w,R,h+.01),r),t.seg(x(v,y,h+u),x(w,R,h+u),r),t.seg(x(v,y,h+.01),x(v,y,h+u),r)}t.seg(x(-n.w/2,n.d/2+.03,h+.02),x(n.w/2,n.d/2+.03,h+.02),new tt(1,1,1));let p={...n,x:o,z:a},_=h+n.h/2;if(n.type==="led_strip"&&(Sn(t.p,s,{...p,rotation_x:n.tilt,rotation_z:n.upright?90:0},_),n.upright)){let M=n.w/2-n.h/2;for(let v=s+1;v<t.p.length;v+=3)t.p[v]+=M;_+=M}Sn(t.p,s,p,_)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new en(s,o);a.texture.colorSpace=Le;let l=new qn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let F of this.floors)F.group.visible=F===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(F=>F.points),M=p.floor.elevation,v=new an(new G(Math.min(..._.map(F=>F[0]))-.3,M,Math.min(..._.map(F=>F[1]))-.3),new G(Math.max(..._.map(F=>F[0]))+.3,M+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(F=>F[1]))+.3)),y=v.getCenter(new G),w=-.6,R=.8,b=new G(Math.sin(R)*Math.sin(w),Math.cos(R),Math.sin(R)*Math.cos(w));l.position.copy(y).addScaledVector(b,100),l.lookAt(y),l.updateMatrixWorld();let S=.5,E=.5;for(let F of[v.min.x,v.max.x])for(let C of[v.min.y,v.max.y])for(let L of[v.min.z,v.max.z]){let N=new G(F,C,L).applyMatrix4(l.matrixWorldInverse);S=Math.max(S,Math.abs(N.x)),E=Math.max(E,Math.abs(N.y))}let P=s/o;S/E>P?E=S/P:S=E*P,l.left=-S*1.05,l.right=S*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let T=x.createImageData(s,o);for(let F=0;F<o;F++)T.data.set(d.subarray((o-1-F)*s*4,(o-F)*s*4),F*s*4);x.putImageData(T,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Cm(n.room,void 0,void 0,n.obstacles):Sh(n.rest),l=a.length?a:Sh(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!Xt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Nm[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new oe,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);ve(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new le({vertexColors:!0});let o=new oe;ve(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new je,n=new le({color:Nm[t.mode]});return e.add(new Gt(this.robotGeo,this.robotMat),new Gt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Pm(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],wn(s.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new tt(.25-.2*a,.95-.83*a,1-.7*a),r=new tt(0,0,0),s=new tt(.3,1,.6),o=.02;for(let a of this.floors){let l=new oe;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let m=u.points[d-1];if(m){let x=Math.hypot(h-m[0],f-m[1])||1,g=-(f-m[1])/x*.1,p=(h-m[0])/x*.1;l.tri([m[0]+g,o,m[1]+p],[h+g,o,f+p],[h-g,o,f-p],s,s,s),l.tri([m[0]+g,o,m[1]+p],[h-g,o,f-p],[m[0]-g,o,m[1]-p],s,s,s)}for(let x=0;x<10;x++){let g=x/10*Math.PI*2,p=(x+1)/10*Math.PI*2;l.tri([h,o,f],[h+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[h+Math.cos(g)*.35,o,f+Math.sin(g)*.35],s,r,r)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,m=(u.x-c.x)/f*.06,x=n(c.age);l.tri([c.x+d,o,c.z+m],[u.x+d,o,u.z+m],[u.x-d,o,u.z-m],x,h,h),l.tri([c.x+d,o,c.z+m],[u.x-d,o,u.z-m],[c.x-d,o,c.z-m],x,h,x)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,m=(f+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(m)*.22,o,u.z+Math.sin(m)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ce,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ce)),a=n.floor.elevation+n.ty+(s?(e.top??n.floor.height)-.1:e.y),l=new G(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+sc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[m,x]of this.flashes){let g=this.deviceFloor.get(m);g&&d.add(g),x<=t&&this.flashes.delete(m)}a=this.flashes.size>0;for(let m of this.floors)d.has(m.floor.id)&&this.buildLamps(m)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepWeather(t),h=r||s||o||a||l,f=[];if((r||this.controls.busy)&&f.push("camera"),s&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*km:km;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let m of this.floors)m.o<.02||!this.effectFloors.has(m.floor.id)||(this.buildLamps(m),this.buildGlow(m));this.invalidate()},d)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Bm:Bm))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;this.roofDirection.value.set(n/s,(t.y-e.y)/Math.hypot(s,t.y-e.y),r/s);for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-h-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?ec(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),o.p[2]),u=this.camera.position.clone().sub(c),h=u.length(),f=u.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,m=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,m,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+Te(o.floor,c.room),c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new G,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("fp3d-dev-full",u==="full"),o.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=wM(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function wM(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function TM(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new wi(t);return s.flipY=!1,s.wrapS=pn,s.wrapT=pn,s.anisotropy=4,s.colorSpace=Le,s}function EM(i){let t=new le({map:i,transparent:!0,blending:Ce,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function AM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new wi(i);return e.wrapS=tr,e.wrapT=tr,e.colorSpace=Le,e}function Th(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function Vm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function RM(i){let t=new le({vertexColors:!0,transparent:!0,blending:Ce,depthWrite:!1,side:xe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Gm(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function CM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new wi(t);return r.colorSpace=Le,r}function PM(){let t=Eh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new wi(e);return s.anisotropy=4,s.colorSpace=Le,s}function JA(i,t){return new Rh(i,t)}function wh(i,t,e,n){e=t.top??e;let r=i.p.length;IM(i,t,e,n),Sn(i.p,r,t,oc(t,e))}function oc(i,t){if(i.pivot_y!=null)return i.pivot_y;let[e,,n]=i.size??(i.lamp?ac[i.lamp]:[.3,.3,.3]);return i.lamp&&Ah.has(i.lamp)?t-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?e:n)/2}function IM(i,t,e,n){let[r,s,o]=t.size??ac[t.lamp],a=t.base??0,l=(t.rotation??0)*ce,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[t.x+x*c-g*u,t.z+x*u+g*c],f=(x,g,p,_,M,v=14)=>{let y=[];for(let w=0;w<v;w++){let R=w/v*Math.PI*2;y.push([t.x+Math.cos(R)*x,t.z+Math.sin(R)*x])}ve(i,y,g,p,_,M,{aoFrom:0,bottom:!0})},d=(x,g,p,_,M,v,y,w=y)=>ve(i,[h(x,p),h(g,p),h(g,_),h(x,_)],M,v,y,w,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(m*.25,e-.04,e,ie,ie,8),f(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,ie,ie,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(f(.008,g,e-.02,ie,ie,5),t.variant==="globe")for(let _=0;_<7;_++){let M=Math.PI*(_/7),v=Math.PI*((_+1)/7);f(m*Math.max(.2,Math.sin((M+v)/2)),x+m-m*Math.cos(M),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)f(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,e-.012,e,ie,ie,12),f(m*.7,e-.02,e-.012,n,n,12);break;case"spot":f(m*.6,e-.02,e,ie,ie,10),f(m,e-Math.max(.06,o),e-.02,ie,ie,12),f(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,ie,ie),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,ie,ie),f(.014,a+.03,a+o-.12,ie,ie,6),f(m,a+o-.14,a+o-.02,ie,ie),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,ie,ie,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,ie,ie,10);break;case"garden":f(.012,a,a+o-.08,ie,ie,5),f(m,a+o-.08,a+o-.01,ie,ie,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,ie,ie),f(.014,a+.03,a+o-.28,ie,ie,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,ie,ie),f(.012,a+.03,a+o-.16,ie,ie,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??Ll;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,ie),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let p=(t.roll??0)*ce,_=Math.cos(p),M=Math.sin(p),v=t.upright?a+r/2:g-x/2,y=(E,P,T)=>{let F=E,C=P*_-T*M,L=P*M+T*_;return t.upright&&([F,C]=[-C,F]),[t.x+F*c-L*u,v+C,t.z+F*u+L*c]},w=[y(-r/2,-x/2,-s/2),y(r/2,-x/2,-s/2),y(r/2,-x/2,s/2),y(-r/2,-x/2,s/2),y(-r/2,x/2,-s/2),y(r/2,x/2,-s/2),y(r/2,x/2,s/2),y(-r/2,x/2,s/2)],R=new tt(n),b=[t.x,v,t.z],S=(E,P,T,F)=>{let[C,L,N]=[w[E],w[P],w[T]],U=[(L[1]-C[1])*(N[2]-C[2])-(L[2]-C[2])*(N[1]-C[1]),(L[2]-C[2])*(N[0]-C[0])-(L[0]-C[0])*(N[2]-C[2]),(L[0]-C[0])*(N[1]-C[1])-(L[1]-C[1])*(N[0]-C[0])],z=[C[0]-b[0],C[1]-b[1],C[2]-b[2]],O=U[0]*z[0]+U[1]*z[1]+U[2]*z[2]<0,[k,V,ot,Z]=O?[w[F],w[T],w[P],w[E]]:[w[E],w[P],w[T],w[F]];i.tri(k,V,ot,R,R,R),i.tri(k,ot,Z,R,R,R)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{ph as FloorMap,Rh as FloorplanViewer,mh as WalkCamera,JA as createViewer,dM as furnitureFront,fM as furniturePreview,SM as isLowEnd,wh as pushLampModel};
