var ud=0,Cu=1,hd=2;var ro=1,fd=2,is=3,Di=0,un=1,le=2,Qn=0,Ni=1,Fe=2,Pu=3,so=4,dd=5;var fr=100,pd=101,md=102,gd=103,bd=104,xd=200,vd=201,yd=202,_d=203,Iu=204,Lu=205,Md=206,Sd=207,wd=208,Td=209,Ed=210,Ad=211,Rd=212,Cd=213,Pd=214,Ma=0,Sa=1,wa=2,Yr=3,Ta=4,Ea=5,Aa=6,Ra=7,Fu=0,Id=1,Ld=2,kn=0,Du=1,Nu=2,Ou=3,Uu=4,Bu=5,ku=6,zu=7;var Vu=300,Oi=301,dr=302,cl=303,ul=304,oo=306,ar=1e3,xn=1001,Ca=1002,We=1003,Fd=1004;var ao=1005;var qe=1006,hl=1007;var Ui=1008;var yn=1009,Gu=1010,Hu=1011,rs=1012,fl=1013,zn=1014,Vn=1015,Gn=1016,dl=1017,pl=1018,ss=1020,Wu=35902,Xu=35899,Yu=1021,qu=1022,An=1023,Zn=1026,Bi=1027,$u=1028,ml=1029,ki=1030,gl=1031;var bl=1033,lo=33776,co=33777,uo=33778,ho=33779,xl=35840,vl=35841,yl=35842,_l=35843,Ml=36196,Sl=37492,wl=37496,Tl=37488,El=37489,fo=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Ll=37812,Fl=37813,Dl=37814,Nl=37815,Ol=37816,Ul=37817,Bl=37818,kl=37819,zl=37820,Vl=37821,Gl=36492,Hl=36494,Wl=36495,Xl=36283,Yl=36284,po=36285,ql=36286;var Fs=2300,Pa=2301,va=2302,xu=2303,vu=2400,yu=2401,_u=2402;var Dd=3200;var Zu=0,Nd=1,fi="",Ne="srgb",Ds="srgb-linear",Ns="linear",pe="srgb";var ya=7680;var Od=519,Ud=512,Bd=513,kd=514,$l=515,zd=516,Vd=517,Zl=518,Gd=519,Hd=35044,Ku=35048;var Ju="300 es",Nn=2e3,Os=2001;function ag(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){let i=qr("canvas");return i.style.display="block",i}var Pf={},$r=null;function ju(...i){let t="THREE."+i.shift();$r?$r("log",t,...i):console.log(t,...i)}function Xd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Xd(i);let t="THREE."+i.shift();if($r)$r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Xd(i);let t="THREE."+i.shift();if($r)$r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function or(...i){let t=i.join(" ");t in Pf||(Pf[t]=!0,Vt(...i))}function Yd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var qd={[Ma]:Sa,[wa]:Aa,[Ta]:Ra,[Yr]:Ea,[Sa]:Ma,[Aa]:wa,[Ra]:Ta,[Ea]:Yr},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yc=Math.PI/180,Ia=180/Math.PI;function mo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function cg(i,t){return(i%t+t)%t}function qc(i,t,e){return(1-e)*i+e*t}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh=class rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var At=rh,Jn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],p=s[o+2],g=s[o+3];if(u!==g||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*g;m<0&&(f=-f,d=-d,p=-p,g=-g,m=-m);let b=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);b=Math.sin(b*y)/M,a=Math.sin(a*y)/M,l=l*b+f*a,c=c*b+d*a,h=h*b+p*a,u=u*b+g*a}else{l=l*b+f*a,c=c*b+d*a,h=h*b+p*a,u=u*b+g*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(If.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(If.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var V=sh,$c=new V,If=new Jn,oh=class oh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=r[0],m=r[3],b=r[6],y=r[1],M=r[4],x=r[7],_=r[2],S=r[5],A=r[8];return s[0]=o*g+a*y+l*_,s[3]=o*m+a*M+l*S,s[6]=o*b+a*x+l*A,s[1]=c*g+h*y+u*_,s[4]=c*m+h*M+u*S,s[7]=c*b+h*x+u*A,s[2]=f*g+d*y+p*_,s[5]=f*m+d*M+p*S,s[8]=f*b+d*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(r*c-h*n)*g,t[2]=(a*n-r*o)*g,t[3]=f*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;var Kt=oh,Zc=new Kt,Lf=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){let i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pe&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Ns:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:Ns,toXYZ:Lf,fromXYZ:Ff,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Lf,fromXYZ:Ff,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var ae=ug();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ir===void 0&&(Ir=qr("canvas")),Ir.width=t.width,Ir.height=t.height;let r=Ir.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ir}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hg=0,Zr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kc(r[o].image)):s.push(Kc(r[o]))}else s=Kc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var fg=0,Jc=new V,nn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xn,r=xn,s=qe,o=Ui,a=An,l=yn,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=mo(),this.name="",this.source=new Zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Vu;nn.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],m=l[6],b=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+b-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(d+1)/2,_=(b+1)/2,S=(h+f)/4,A=(u+g)/4,v=(p+m)/4;return M>x&&M>_?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=S/n,s=A/n):x>_?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=S/r,s=v/r):_<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(_),n=A/s,r=v/s),this.set(n,r,s,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+b-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Le=ah,Fa=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new nn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Zr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Us=class extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ll=class ll{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,g,m)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,p,g,m){let b=this.elements;return b[0]=t,b[4]=e,b[8]=n,b[12]=r,b[1]=s,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=u,b[14]=f,b[3]=d,b[7]=p,b[11]=g,b[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Lr.setFromMatrixColumn(t,0).length(),s=1/Lr.setFromMatrixColumn(t,1).length(),o=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f+g*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dg,t,pg)}lookAt(t,e,n){let r=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),_i.crossVectors(n,gn),_i.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),_i.crossVectors(n,gn)),_i.normalize(),$o.crossVectors(gn,_i),r[0]=_i.x,r[4]=$o.x,r[8]=gn.x,r[1]=_i.y,r[5]=$o.y,r[9]=gn.y,r[2]=_i.z,r[6]=$o.z,r[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],m=n[10],b=n[14],y=n[3],M=n[7],x=n[11],_=n[15],S=r[0],A=r[4],v=r[8],w=r[12],T=r[1],E=r[5],I=r[9],C=r[13],R=r[2],L=r[6],D=r[10],U=r[14],B=r[3],O=r[7],k=r[11],G=r[15];return s[0]=o*S+a*T+l*R+c*B,s[4]=o*A+a*E+l*L+c*O,s[8]=o*v+a*I+l*D+c*k,s[12]=o*w+a*C+l*U+c*G,s[1]=h*S+u*T+f*R+d*B,s[5]=h*A+u*E+f*L+d*O,s[9]=h*v+u*I+f*D+d*k,s[13]=h*w+u*C+f*U+d*G,s[2]=p*S+g*T+m*R+b*B,s[6]=p*A+g*E+m*L+b*O,s[10]=p*v+g*I+m*D+b*k,s[14]=p*w+g*C+m*U+b*G,s[3]=y*S+M*T+x*R+_*B,s[7]=y*A+M*E+x*L+_*O,s[11]=y*v+M*I+x*D+_*k,s[15]=y*w+M*C+x*U+_*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],g=t[7],m=t[11],b=t[15],y=l*d-c*f,M=a*d-c*u,x=a*f-l*u,_=o*d-c*h,S=o*f-l*h,A=o*u-a*h;return e*(g*y-m*M+b*x)-n*(p*y-m*_+b*S)+r*(p*M-g*_+b*A)-s*(p*x-g*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],g=t[13],m=t[14],b=t[15],y=e*a-n*o,M=e*l-r*o,x=e*c-s*o,_=n*l-r*a,S=n*c-s*a,A=r*c-s*l,v=h*g-u*p,w=h*m-f*p,T=h*b-d*p,E=u*m-f*g,I=u*b-d*g,C=f*b-d*m,R=y*C-M*I+x*E+_*T-S*w+A*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return t[0]=(a*C-l*I+c*E)*L,t[1]=(r*I-n*C-s*E)*L,t[2]=(g*A-m*S+b*_)*L,t[3]=(f*S-u*A-d*_)*L,t[4]=(l*T-o*C-c*w)*L,t[5]=(e*C-r*T+s*w)*L,t[6]=(m*x-p*A-b*M)*L,t[7]=(h*A-f*x+d*M)*L,t[8]=(o*I-a*T+c*v)*L,t[9]=(n*T-e*I-s*v)*L,t[10]=(p*S-g*x+b*y)*L,t[11]=(u*x-h*S-d*y)*L,t[12]=(a*w-o*E-l*v)*L,t[13]=(e*E-n*w+r*v)*L,t[14]=(g*M-p*_-m*y)*L,t[15]=(h*_-u*M+f*y)*L,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,g=o*h,m=o*u,b=a*u,y=l*c,M=l*h,x=l*u,_=n.x,S=n.y,A=n.z;return r[0]=(1-(g+b))*_,r[1]=(d+x)*_,r[2]=(p-M)*_,r[3]=0,r[4]=(d-x)*S,r[5]=(1-(f+b))*S,r[6]=(m+y)*S,r[7]=0,r[8]=(p+M)*A,r[9]=(m-y)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Lr.set(r[0],r[1],r[2]).length(),a=Lr.set(r[4],r[5],r[6]).length(),l=Lr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),In.copy(this);let c=1/o,h=1/a,u=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Nn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===Nn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Os)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Nn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===Nn)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===Os)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ll.prototype.isMatrix4=!0;var Ae=ll,Lr=new V,In=new Ae,dg=new V(0,0,0),pg=new V(1,1,1),_i=new V,$o=new V,gn=new V,Df=new Ae,Nf=new Jn,On=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mg=0,Of=new V,Fr=new Jn,si=new Ae,Zo=new V,Ts=new V,gg=new V,bg=new Jn,Uf=new V(1,0,0),Bf=new V(0,1,0),kf=new V(0,0,1),zf={type:"added"},xg={type:"removed"},Dr={type:"childadded",child:null},jc={type:"childremoved",child:null},dn=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new On,n=new Jn,r=new V(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Kt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(Uf,t)}rotateY(t){return this.rotateOnAxis(Bf,t)}rotateZ(t){return this.rotateOnAxis(kf,t)}translateOnAxis(t,e){return Of.copy(t).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uf,t)}translateY(t){return this.translateOnAxis(Bf,t)}translateZ(t){return this.translateOnAxis(kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zo.copy(t):Zo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ts,Zo,this.up):si.lookAt(Zo,Ts,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(si),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zf),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xg),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zf),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,gg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,bg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new V(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),b=this._getHandJoint(c,g);m!==null&&(b.matrix.fromArray(m.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=m.radius),b.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Q=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ae.workingColorSpace){if(t=cg(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Qc(o,s,t+1/3),this.g=Qc(o,s,t),this.b=Qc(o,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ae.workingToColorSpace(tn.copy(this),t),Math.round(ie(tn.r*255,0,255))*65536+Math.round(ie(tn.g*255,0,255))*256+Math.round(ie(tn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(tn.copy(this),e);let n=tn.r,r=tn.g,s=tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ne){ae.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,r=tn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Ko);let n=qc(Mi.h,Ko.h,e),r=qc(Mi.s,Ko.s,e),s=qc(Mi.l,Ko.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Q;Q.NAMES=$d;var Bs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new V,oi=new V,tu=new V,ai=new V,Nr=new V,Or=new V,Vf=new V,eu=new V,nu=new V,iu=new V,ru=new Le,su=new Le,ou=new Le,Ei=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ln.subVectors(t,e),r.cross(Ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ln.subVectors(r,e),oi.subVectors(n,e),tu.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(oi),l=Ln.dot(tu),c=oi.dot(oi),h=oi.dot(tu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ru.setScalar(0),su.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),su.fromBufferAttribute(t,n),ou.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ru,s.x),o.addScaledVector(su,s.y),o.addScaledVector(ou,s.z),o}static isFrontFacing(t,e,n,r){return Ln.subVectors(n,e),oi.subVectors(t,e),Ln.cross(oi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Nr.subVectors(r,n),Or.subVectors(s,n),eu.subVectors(t,n);let l=Nr.dot(eu),c=Or.dot(eu);if(l<=0&&c<=0)return e.copy(n);nu.subVectors(t,r);let h=Nr.dot(nu),u=Or.dot(nu);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Nr,o);iu.subVectors(t,s);let d=Nr.dot(iu),p=Or.dot(iu);if(p>=0&&d<=p)return e.copy(s);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Or,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Vf.subVectors(s,r),a=(u-h)/(u-h+(d-p)),e.copy(r).addScaledVector(Vf,a);let b=1/(m+g+f);return o=g*b,a=f*b,e.copy(n).addScaledVector(Nr,o).addScaledVector(Or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),jo.subVectors(this.max,Es),Ur.subVectors(t.a,Es),Br.subVectors(t.b,Es),kr.subVectors(t.c,Es),Si.subVectors(Br,Ur),wi.subVectors(kr,Br),nr.subVectors(Ur,kr);let e=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-nr.z,nr.y,Si.z,0,-Si.x,wi.z,0,-wi.x,nr.z,0,-nr.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-nr.y,nr.x,0];return!au(e,Ur,Br,kr,jo)||(e=[1,0,0,0,1,0,0,0,1],!au(e,Ur,Br,kr,jo))?!1:(Qo.crossVectors(Si,wi),e=[Qo.x,Qo.y,Qo.z],au(e,Ur,Br,kr,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new V,new V,new V,new V,new V,new V,new V,new V],Fn=new V,Jo=new cn,Ur=new V,Br=new V,kr=new V,Si=new V,wi=new V,nr=new V,Es=new V,jo=new V,Qo=new V,ir=new V;function au(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ir.fromArray(i,s);let a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=t.dot(ir),c=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ke=new V,ta=new At,yg=0,Tn=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ks=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Et=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_g=new cn,As=new V,lu=new V,Ri=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_g.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(As,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(lu)),this.expandByPoint(As.copy(t.center).sub(lu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mg=0,wn=new Ae,cu=new dn,zr=new V,bn=new cn,Rs=new cn,He=new V,Wt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ag(t)?lr:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return cu.lookAt(t),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(bn.min,Rs.min),bn.expandByPoint(He),He.addVectors(bn.max,Rs.max),bn.expandByPoint(He)):(bn.expandByPoint(Rs.min),bn.expandByPoint(Rs.max))}bn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(t,c),He.add(zr)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new V,l[v]=new V;let c=new V,h=new V,u=new V,f=new At,d=new At,p=new At,g=new V,m=new V;function b(v,w,T){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),f.fromBufferAttribute(s,v),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,T),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let E=1/(d.x*p.y-p.x*d.y);isFinite(E)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(E),a[v].add(g),a[w].add(g),a[T].add(g),l[v].add(m),l[w].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,w=y.length;v<w;++v){let T=y[v],E=T.start,I=T.count;for(let C=E,R=E+I;C<R;C+=3)b(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let M=new V,x=new V,_=new V,S=new V;function A(v){_.fromBufferAttribute(r,v),S.copy(_);let w=a[v];M.copy(w),M.sub(_.multiplyScalar(_.dot(w))).normalize(),x.crossVectors(S,w);let E=x.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,E)}for(let v=0,w=y.length;v<w;++v){let T=y[v],E=T.start,I=T.count;for(let C=E,R=E+I;C<R;C+=3)A(t.getX(C+0)),A(t.getX(C+1)),A(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let b=0;b<h;b++)f[p++]=c[d++]}return new Tn(f,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uu=new V,Sg=new V,wg=new Kt,Dn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=uu.subVectors(n,e).cross(Sg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(uu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wg.getNormalMatrix(t),r=this.coplanarPoint(uu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tg=0,hi=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Ni,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Lu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new V,hu=new V,ea=new V,na=new V,cr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){hu.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),na.copy(this.origin).sub(hu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ea),a=na.dot(this.direction),l=-na.dot(ea),c=na.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hu).addScaledVector(ea,f),d}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,b=n.x-o.x,y=n.y-o.y,M=n.z-o.z,x=Math.abs(l),_=Math.abs(c),S=Math.abs(h),A,v,w,T,E,I,C,R,L,D,U,B;if(x>=_&&x>=S?(w=l,I=u,L=p,B=b,l>=0?(A=c,v=h,T=f,E=d,C=g,R=m,D=y,U=M):(A=h,v=c,T=d,E=f,C=m,R=g,D=M,U=y)):_>=S?(w=c,I=f,L=g,B=y,c>=0?(A=h,v=l,T=d,E=u,C=m,R=p,D=M,U=b):(A=l,v=h,T=u,E=d,C=p,R=m,D=b,U=M)):(w=h,I=d,L=m,B=M,h>=0?(A=l,v=c,T=u,E=f,C=p,R=g,D=b,U=y):(A=c,v=l,T=f,E=u,C=g,R=p,D=y,U=b)),w===0)return null;let O=A/w,k=v/w,G=1/w,J=T-O*I,j=E-k*I,ut=C-O*L,nt=R-k*L,ft=D-O*B,H=U-k*B,X=ft*nt-H*ut,st=J*H-j*ft,ct=ut*j-nt*J;if(r){if(X<0||st<0||ct<0)return null}else if((X<0||st<0||ct<0)&&(X>0||st>0||ct>0))return null;let lt=X+st+ct;if(lt===0)return null;let pt=G*(X*I+st*L+ct*B);return(lt>0?pt<0:pt>0)?null:this.at(pt/lt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gf=new Ae,rr=new cr,ia=new Ri,Hf=new V,ra=new V,sa=new V,oa=new V,fu=new V,aa=new V,Wf=new V,la=new V,kt=class extends dn{constructor(t=new Wt,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(fu.fromBufferAttribute(u,t),o?aa.addScaledVector(fu,h):aa.addScaledVector(fu.sub(e),h))}e.add(aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),rr.copy(t.ray).recast(t.near),!(ia.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ia,Hf)===null||rr.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(Gf.copy(s).invert(),rr.copy(t.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],b=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,_=M;x<_;x+=3){let S=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);r=ca(this,b,t,n,c,h,u,S,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=p,b=g;m<b;m+=3){let y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);r=ca(this,o,t,n,c,h,u,y,M,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let m=f[p],b=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,_=M;x<_;x+=3){let S=x,A=x+1,v=x+2;r=ca(this,b,t,n,c,h,u,S,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=p,b=g;m<b;m+=3){let y=m,M=m+1,x=m+2;r=ca(this,o,t,n,c,h,u,y,M,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Eg(i,t,e,n,r,s,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Di,a),l===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,ra),i.getVertexPosition(l,sa),i.getVertexPosition(c,oa);let h=Eg(i,t,e,n,ra,sa,oa,Wf);if(h){let u=new V;Ei.getBarycoord(Wf,ra,sa,oa,u),r&&(h.uv=Ei.getInterpolatedAttribute(r,a,l,c,u,new At)),s&&(h.uv1=Ei.getInterpolatedAttribute(s,a,l,c,u,new At)),o&&(h.normal=Ei.getInterpolatedAttribute(o,a,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};Ei.getNormal(ra,sa,oa,f.normal),h.face=f,h.barycoord=u}return h}var Na=class extends nn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=We,h=We,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=new Ri,Ag=new At(.5,.5),ua=new V,zs=class{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],m=s[10],b=s[11],y=s[12],M=s[13],x=s[14],_=s[15];if(r[0].setComponents(c-o,d-h,b-p,_-y).normalize(),r[1].setComponents(c+o,d+h,b+p,_+y).normalize(),r[2].setComponents(c+a,d+u,b+g,_+M).normalize(),r[3].setComponents(c-a,d-u,b-g,_-M).normalize(),n)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,d-f,b-m,_-x).normalize();else if(r[4].setComponents(c-l,d-f,b-m,_-x).normalize(),e===Nn)r[5].setComponents(c+l,d+f,b+m,_+x).normalize();else if(e===Os)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);let e=Ag.distanceTo(t.center);return sr.radius=.7071067811865476+e,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ua.x=r.normal.x>0?t.max.x:t.min.x,ua.y=r.normal.y>0?t.max.y:t.min.y,ua.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oa=new V,Ua=new V,Xf=new Ae,Cs=new cr,ha=new Ri,du=new V,Yf=new V,Ba=class extends dn{constructor(t=new Wt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Oa.fromBufferAttribute(e,r-1),Ua.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Oa.distanceTo(Ua);t.setAttribute("lineDistance",new Et(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ha.radius+=s,t.ray.intersectsSphere(ha)===!1)return;Xf.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(Xf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,m=p-1;g<m;g+=c){let b=h.getX(g),y=h.getX(g+1),M=fa(this,t,Cs,l,b,y,g);M&&e.push(M)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(d),b=fa(this,t,Cs,l,g,m,p-1);b&&e.push(b)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,m=p-1;g<m;g+=c){let b=fa(this,t,Cs,l,g,g+1,g);b&&e.push(b)}if(this.isLineLoop){let g=fa(this,t,Cs,l,p-1,d,p-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function fa(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Oa.fromBufferAttribute(a,r),Ua.fromBufferAttribute(a,s),e.distanceSqToSegment(Oa,Ua,du,Yf)>n)return;du.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(du);if(!(c<t.near||c>t.far))return{distance:c,point:Yf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qf=new V,$f=new V,Ze=class extends Ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)qf.fromBufferAttribute(e,r),$f.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qf.distanceTo($f);t.setAttribute("lineDistance",new Et(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zf=new Ae,Mu=new cr,da=new Ri,pa=new V,jr=class extends dn{constructor(t=new Wt,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;Zf.copy(r).invert(),Mu.copy(t.ray).applyMatrix4(Zf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,g=d;p<g;p++){let m=c.getX(p);pa.fromBufferAttribute(u,m),Kf(pa,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,g=d;p<g;p++)pa.fromBufferAttribute(u,p),Kf(pa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kf(i,t,e,n,r,s,o){let a=Mu.distanceSqToPoint(i);if(a<e){let l=new V;Mu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vs=class extends nn{constructor(t=[],e=Oi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Un=class extends nn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends nn{constructor(t,e,n=zn,r,s,o,a=We,l=We,c,h=Zn,u=1){if(h!==Zn&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ka=class extends Ci{constructor(t,e=zn,n=Oi,r,s,o=We,a=We,l,c=Zn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gs=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pi=class i extends Wt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function p(g,m,b,y,M,x,_,S,A,v,w){let T=x/A,E=_/v,I=x/2,C=_/2,R=S/2,L=A+1,D=v+1,U=0,B=0,O=new V;for(let k=0;k<D;k++){let G=k*E-C;for(let J=0;J<L;J++){let j=J*T-I;O[g]=j*y,O[m]=G*M,O[b]=R,c.push(O.x,O.y,O.z),O[g]=0,O[m]=0,O[b]=S>0?1:-1,h.push(O.x,O.y,O.z),u.push(J/A),u.push(1-k/v),U+=1}}for(let k=0;k<v;k++)for(let G=0;G<A;G++){let J=f+G+L*k,j=f+G+L*(k+1),ut=f+(G+1)+L*(k+1),nt=f+(G+1)+L*k;l.push(J,j,nt),l.push(j,ut,nt),B+=6}a.addGroup(d,B,w),d+=B,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hs=class i extends Wt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new V,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new At:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,r=[],s=[],o=[],a=new V,l=new Ae;for(let d=0;d<=t;d++){let p=d/t;r[d]=this.getTangentAt(p,new V)}s[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(ie(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],d*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ws=class extends En{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},za=class extends Ws{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qu(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Jf=new V,jf=new V,pu=new Qu,mu=new Qu,gu=new Qu,Qr=class extends En{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new V){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(jf.subVectors(r[0],r[1]).add(r[0]),c=jf);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Jf.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Jf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),pu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,g,m),mu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,g,m),gu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(pu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),mu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),gu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(pu.calc(l),mu.calc(l),gu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new V().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qf(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Pg(i,t){return i*i*t}function Is(i,t,e,n){return Rg(i,t)+Cg(i,e)+Pg(i,n)}function Ig(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Fg(i,t){return 3*(1-i)*i*i*t}function Dg(i,t){return i*i*i*t}function Ls(i,t,e,n,r){return Ig(i,t)+Lg(i,e)+Fg(i,n)+Dg(i,r)}var Va=class extends En{constructor(t=new At,e=new At,n=new At,r=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new At){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,r.x,s.x,o.x,a.x),Ls(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends En{constructor(t=new V,e=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new V){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ls(t,r.x,s.x,o.x,a.x),Ls(t,r.y,s.y,o.y,a.y),Ls(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends En{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends En{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends En{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Is(t,r.x,s.x,o.x),Is(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xs=class extends En{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Is(t,r.x,s.x,o.x),Is(t,r.y,s.y,o.y),Is(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Qf(a,l.x,c.x,h.x,u.x),Qf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new At().fromArray(r))}return this}},Ng=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:Qr,CubicBezierCurve:Va,CubicBezierCurve3:Ga,EllipseCurve:Ws,LineCurve:Ha,LineCurve3:Wa,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Xs,SplineCurve:Ya});function Og(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Zd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Vg(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ys(s,o,e,a,l,c,0),o}function Zd(i,t,e,n,r){let s;if(r===jg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=td(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=td(o/n|0,i[o],i[o+1],s);return s&&ts(s,s.next)&&($s(s),s=s.next),s}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||Ie(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Yg(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Bg(i,n,r,s):Ug(i)){t.push(l.i,i.i,c.i),$s(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kg(hr(i),t),Ys(i,t,e,n,r,s,2)):o===2&&zg(i,t,e,n,r,s):Ys(hr(i),t,e,n,r,s,1);break}}}function Ug(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ps(r,a,s,l,o,c,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ie(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),m=Math.max(h,u,f),b=Su(d,p,t,e,n),y=Su(g,m,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=b&&x&&x.z<=y;){if(M.x>=d&&M.x<=g&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&Ps(a,h,l,u,c,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&Ps(a,h,l,u,c,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=b;){if(M.x>=d&&M.x<=g&&M.y>=p&&M.y<=m&&M!==r&&M!==o&&Ps(a,h,l,u,c,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&Ps(a,h,l,u,c,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ts(n,r)&&Jd(n,e,e.next,r)&&qs(n,r)&&qs(r,n)&&(t.push(n.i,e.i,r.i),$s(e),$s(e.next),e=i=r),e=e.next}while(e!==i);return hr(e)}function zg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zg(o,a)){let l=jd(o,a);o=hr(o,o.next),l=hr(l,l.next),Ys(o,t,e,n,r,s,0),Ys(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Vg(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Zd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push($g(c))}r.sort(Gg);for(let s=0;s<r.length;s++)e=Hg(r[s],e);return e}function Gg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Hg(i,t){let e=Wg(i,t);if(!e)return t;let n=jd(e,i);return hr(n,n.next),hr(e,e.next)}function Wg(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ts(i,e))return e;do{if(ts(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);qs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Xg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Xg(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Yg(i,t,e,n){let r=i;do r.z===0&&(r.z=Su(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,qg(r)}function qg(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Su(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $g(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ps(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Kd(i,t,e,n,r,s,o,a)}function Zg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kg(i,t)&&(qs(i,t)&&qs(t,i)&&Jg(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||ts(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ts(i,t){return i.x===t.x&&i.y===t.y}function Jd(i,t,e,n){let r=ga(Ie(i,t,e)),s=ga(Ie(i,t,n)),o=ga(Ie(e,n,i)),a=ga(Ie(e,n,t));return!!(r!==s&&o!==a||r===0&&ma(i,e,t)||s===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Kg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jd(i,t){let e=wu(i.i,i.x,i.y),n=wu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function td(i,t,e,n){let r=wu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Tu=class{static triangulate(t,e,n=2){return Og(t,e,n)}},Zs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];ed(t),nd(n,t);let o=t.length;e.forEach(ed);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,nd(n,e[l]);let a=Tu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ed(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ks=class i extends Wt{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=ie(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new V,f=new At,d=new V,p=new V,g=new V,m=0,b=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,b=t[y+1].y-t[y].y,d.x=b*1,d.y=-m,d.z=b*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,b=t[y+1].y-t[y].y,d.x=b*1,d.y=-m,d.z=b*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let y=0;y<=e;y++){let M=n+y*h*r,x=Math.sin(M),_=Math.cos(M);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*x,u.y=t[S].y,u.z=t[S].x*_,o.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);let A=l[3*S+0]*x,v=l[3*S+1],w=l[3*S+0]*_;c.push(A,v,w)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let x=M+y*t.length,_=x,S=x+t.length,A=x+t.length+1,v=x+1;s.push(_,S,v),s.push(A,v,S)}this.setIndex(s),this.setAttribute("position",new Et(o,3)),this.setAttribute("uv",new Et(a,2)),this.setAttribute("normal",new Et(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Bn=class i extends Wt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],g=[],m=[];for(let b=0;b<h;b++){let y=b*f-o;for(let M=0;M<c;M++){let x=M*u-s;p.push(x,-y,0),g.push(0,0,1),m.push(M/a),m.push(1-b/l)}}for(let b=0;b<l;b++)for(let y=0;y<a;y++){let M=y+c*b,x=y+c*(b+1),_=y+1+c*(b+1),S=y+1+c*b;d.push(M,x,S),d.push(x,_,S)}this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Js=class i extends Wt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new V,p=new At;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){let b=s+m/n*o;d.x=u*Math.cos(b),d.y=u*Math.sin(b),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<r;g++){let m=g*(n+1);for(let b=0;b<n;b++){let y=b+m,M=y,x=y+n+1,_=y+n+2,S=y+1;a.push(M,x,S),a.push(x,_,S)}}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var js=class i extends Wt{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new V,f=new V,d=[],p=[],g=[],m=[];for(let b=0;b<=n;b++){let y=[],M=b/n,x=o+M*a,_=t*Math.cos(x),S=Math.sqrt(t*t-_*_),A=0;b===0&&o===0?A=.5/e:b===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let w=v/e,T=r+w*s;u.x=-S*Math.cos(T),u.y=_,u.z=S*Math.sin(T),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(w+A,1-M),y.push(c++)}h.push(y)}for(let b=0;b<n;b++)for(let y=0;y<e;y++){let M=h[b][y+1],x=h[b][y],_=h[b+1][y],S=h[b+1][y+1];(b!==0||o>0)&&d.push(M,x,S),(b!==n-1||l<Math.PI)&&d.push(x,_,S)}this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qs=class i extends Wt{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],h=[],u=[],f=new V,d=new V,p=new V;for(let g=0;g<=n;g++){let m=o+g/n*a;for(let b=0;b<=r;b++){let y=b/r*s;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(b/r),u.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=r;m++){let b=(r+1)*g+m-1,y=(r+1)*(g-1)+m-1,M=(r+1)*(g-1)+m,x=(r+1)*g+m;l.push(b,y,x),l.push(y,M,x)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var es=class i extends Wt{constructor(t=new Xs(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,c=new At,h=new V,u=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(d,2));function g(){for(let M=0;M<e;M++)m(M);m(s===!1?e:0),y(),b()}function m(M){h=t.getPointAt(M/e,h);let x=o.normals[M],_=o.binormals[M];for(let S=0;S<=r;S++){let A=S/r*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+v*_.x,l.y=w*x.y+v*_.y,l.z=w*x.z+v*_.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function b(){for(let M=1;M<=e;M++)for(let x=1;x<=r;x++){let _=(r+1)*(M-1)+(x-1),S=(r+1)*M+(x-1),A=(r+1)*M+x,v=(r+1)*(M-1)+x;p.push(_,S,v),p.push(S,A,v)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=r;x++)c.x=M/e,c.y=x/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ng[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function pr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(id(r))r.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(id(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=pr(i[e]);for(let r in n)t[r]=n[r]}return t}function id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Qd={clone:pr,merge:on},tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(r.value);break;case"v2":this.uniforms[n].value=new At().fromArray(r.value);break;case"v3":this.uniforms[n].value=new V().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qa=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var $a=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Za=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends Ii{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case yu:s=t,a=2*e-n;break;case _u:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:o=t,l=2*n-e;break;case _u:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),g=p*p,m=g*p,b=-f*m+2*f*g-f*p,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*g+.5*p,x=d*m-d*g;for(let _=0;_!==a;++_)s[_]=b*o[h+_]+y*o[c+_]+M*o[l+_]+x*o[u+_];return s}},Ja=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},ja=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Qa=class extends Ii{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(r-e),g=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*g+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],b=d*f+p*2,y=u[b],M=u[b+1],x=t*f+p*2,_=h[x],S=h[x+1],A=ib(n,e,y,_,r);s[p]=tp(A,g,M,S,m)}return s}};function tp(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function nb(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function ib(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=tp(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=nb(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var vn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),bu(t.settings)&&(n.settings={inTangents:Vr(t.settings.inTangents,Array),outTangents:Vr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fs:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case xu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return xu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;bu(this.settings)&&(rd(this.settings.inTangents,t),rd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&lg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===va,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=e[u+p];if(g!==e[f+p]||g!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,bu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function rd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Pa;var Li=class extends vn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Fs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};tl.prototype.ValueTypeName="color";var el=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};el.prototype.ValueTypeName="number";var nl=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Jn.slerpFlat(s,0,o,c-a,o,c,l);return s}},to=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new nl(this.times,this.values,this.getValueSize(),t)}};to.prototype.ValueTypeName="quaternion";to.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends vn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Fs;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};il.prototype.ValueTypeName="vector";var _a={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(sd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!sd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function sd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var rl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new rl,ns=class{constructor(t){this.manager=t!==void 0?t:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=new WeakMap,sl=class extends ns{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=_a.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Gr.get(o);u===void 0&&(u=[],Gr.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=qr("img");function l(){h(),e&&e(this);let u=Gr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Gr.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),_a.remove(`image:${t}`);let f=Gr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Gr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_a.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var eo=class extends ns{constructor(t){super(t)}load(t,e,n,r){let s=new nn,o=new sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var ba=new V,xa=new Jn,$n=new V,no=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,xa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,xa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,xa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new V,od=new At,ad=new At,en=class extends no{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,od,ad),e.subVectors(ad,od)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jn=class extends no{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Hr=-90,Wr=1,ol=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new en(Hr,Wr,t,e);r.layers=this.layers,this.add(r);let s=new en(Hr,Wr,t,e);s.layers=this.layers,this.add(s);let o=new en(Hr,Wr,t,e);o.layers=this.layers,this.add(o);let a=new en(Hr,Wr,t,e);a.layers=this.layers,this.add(a);let l=new en(Hr,Wr,t,e);l.layers=this.layers,this.add(l);let c=new en(Hr,Wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},al=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var eh="\\[\\]\\.:\\/",rb=new RegExp("["+eh+"]","g"),nh="[^"+eh+"]",sb="[^"+eh.replace("\\.","")+"]",ob=/((?:WC+[\/:])*)/.source.replace("WC",nh),ab=/(WCOD+)?/.source.replace("WCOD",sb),lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),ub=new RegExp("^"+ob+ab+lb+cb+"$"),hb=["material","materials","bones","map"],Eu=class{constructor(t,e,n){let r=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rb,"")}static parseTrackName(t){let e=ub.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);hb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Eu;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nw=new Float32Array(1);var ld=new Ae,io=class{constructor(t,e,n=0,r=1/0){this.ray=new cr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(t,e=!0,n=[]){return Au(t,this,n,e),n.sort(cd),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Au(t[r],this,n,e);return n.sort(cd),n}};function cd(i,t){return i.distance-t.distance}function Au(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Au(s[o],t,e,!0)}}var lh=class lh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};lh.prototype.isMatrix2=!0;var Ru=lh;function ih(i,t,e,n){let r=fb(n);switch(e){case Yu:return i*t;case $u:return i*t/r.components*r.byteLength;case ml:return i*t/r.components*r.byteLength;case ki:return i*t*2/r.components*r.byteLength;case gl:return i*t*2/r.components*r.byteLength;case qu:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case bl:return i*t*4/r.components*r.byteLength;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case _l:return Math.max(i,16)*Math.max(t,8)/4;case xl:case yl:return Math.max(i,8)*Math.max(t,8)/2;case Ml:case Sl:case Tl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wl:case fo:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fb(i){switch(i){case yn:case Gu:return{byteLength:1,components:1};case rs:case Hu:case Gn:return{byteLength:2,components:1};case dl:case pl:return{byteLength:2,components:4};case zn:case fl:case Vn:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sp(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function pb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
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
#endif`,wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bb=`#define PI 3.141592653589793
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
} // validated`,kb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zb=`vec3 transformedNormal = objectNormal;
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
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ox=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
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
#endif`,dx=`uniform sampler2D dfgLUT;
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tv=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
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
}`,Mv=`#if DEPTH_PACKING == 3200
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
}`,Sv=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`uniform float scale;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Fv=`#define MATCAP
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
}`,Dv=`#define MATCAP
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
}`,Nv=`#define NORMAL
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
}`,Bv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,Gv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Wv=`uniform vec3 diffuse;
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
}`,Xv=`#include <common>
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
}`,Yv=`uniform vec3 color;
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
}`,qv=`uniform float rotation;
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
}`,$v=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:bb,alphamap_pars_fragment:xb,alphatest_fragment:vb,alphatest_pars_fragment:yb,aomap_fragment:_b,aomap_pars_fragment:Mb,batching_pars_vertex:Sb,batching_vertex:wb,begin_vertex:Tb,beginnormal_vertex:Eb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Pb,clipping_planes_pars_fragment:Ib,clipping_planes_pars_vertex:Lb,clipping_planes_vertex:Fb,color_fragment:Db,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Ub,common:Bb,cube_uv_reflection_fragment:kb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Vb,displacementmap_vertex:Gb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Wb,colorspace_fragment:Xb,colorspace_pars_fragment:Yb,envmap_fragment:qb,envmap_common_pars_fragment:$b,envmap_pars_fragment:Zb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:ax,envmap_vertex:Jb,fog_vertex:jb,fog_pars_vertex:Qb,fog_fragment:tx,fog_pars_fragment:ex,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:rx,lights_lambert_pars_fragment:sx,lights_pars_begin:ox,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:ux,lights_phong_pars_fragment:hx,lights_physical_fragment:fx,lights_physical_pars_fragment:dx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,lightprobes_pars_fragment:bx,logdepthbuf_fragment:xx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:yx,logdepthbuf_vertex:_x,map_fragment:Mx,map_pars_fragment:Sx,map_particle_fragment:wx,map_particle_pars_fragment:Tx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Ax,morphinstance_vertex:Rx,morphcolor_vertex:Cx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Fx,normal_fragment_maps:Dx,normal_pars_fragment:Nx,normal_pars_vertex:Ox,normal_vertex:Ux,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Hx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:Yx,dithering_fragment:qx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:jx,shadowmap_vertex:Qx,shadowmask_pars_fragment:tv,skinbase_vertex:ev,skinning_pars_vertex:nv,skinning_vertex:iv,skinnormal_vertex:rv,specularmap_fragment:sv,specularmap_pars_fragment:ov,tonemapping_fragment:av,tonemapping_pars_fragment:lv,transmission_fragment:cv,transmission_pars_fragment:uv,uv_pars_fragment:hv,uv_pars_vertex:fv,uv_vertex:dv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:bv,backgroundCube_frag:xv,cube_vert:vv,cube_frag:yv,depth_vert:_v,depth_frag:Mv,distance_vert:Sv,distance_frag:wv,equirect_vert:Tv,equirect_frag:Ev,linedashed_vert:Av,linedashed_frag:Rv,meshbasic_vert:Cv,meshbasic_frag:Pv,meshlambert_vert:Iv,meshlambert_frag:Lv,meshmatcap_vert:Fv,meshmatcap_frag:Dv,meshnormal_vert:Nv,meshnormal_frag:Ov,meshphong_vert:Uv,meshphong_frag:Bv,meshphysical_vert:kv,meshphysical_frag:zv,meshtoon_vert:Vv,meshtoon_frag:Gv,points_vert:Hv,points_frag:Wv,shadow_vert:Xv,shadow_frag:Yv,sprite_vert:qv,sprite_frag:$v},Mt={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ei={basic:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:on([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:on([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:on([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Q(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:on([Mt.points,Mt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:on([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:on([Mt.common,Mt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:on([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:on([Mt.sprite,Mt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:on([Mt.common,Mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:on([Mt.lights,Mt.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ei.physical={uniforms:on([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Kl={r:0,b:0,g:0},Zv=new Ae,wp=new Kt;wp.set(-1,0,0,0,1,0,0,0,1);function Kv(i,t,e,n,r,s){let o=new Q(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function p(y){let M=!1,x=d(y);x===null?m(o,a):x&&x.isColor&&(m(x,1),M=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===oo)?(c===void 0&&(c=new kt(new Pi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:pr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wp),c.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,(h!==x||u!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new kt(new Bn(2,2),new sn({name:"BackgroundMaterial",uniforms:pr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Kl,th(i)),e.buffers.color.setClear(Kl.r,Kl.g,Kl.b,M,s)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:g,dispose:b}}function Jv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(E,I,C,R,L){let D=!1,U=u(E,R,C,I);s!==U&&(s=U,c(s.object)),D=d(E,R,C,L),D&&p(E,R,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(E,I,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,I,C,R){let L=R.wireframe===!0,D=n[I.id];D===void 0&&(D={},n[I.id]=D);let U=E.isInstancedMesh===!0?E.id:0,B=D[U];B===void 0&&(B={},D[U]=B);let O=B[C.id];O===void 0&&(O={},B[C.id]=O);let k=O[L];return k===void 0&&(k=f(l()),O[L]=k),k}function f(E){let I=[],C=[],R=[];for(let L=0;L<e;L++)I[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:C,attributeDivisors:R,object:E,attributes:{},index:null}}function d(E,I,C,R){let L=s.attributes,D=I.attributes,U=0,B=C.getAttributes();for(let O in B)if(B[O].location>=0){let G=L[O],J=D[O];if(J===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;U++}return s.attributesNum!==U||s.index!==R}function p(E,I,C,R){let L={},D=I.attributes,U=0,B=C.getAttributes();for(let O in B)if(B[O].location>=0){let G=D[O];G===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(G=E.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),L[O]=J,U++}s.attributes=L,s.attributesNum=U,s.index=R}function g(){let E=s.newAttributes;for(let I=0,C=E.length;I<C;I++)E[I]=0}function m(E){b(E,0)}function b(E,I){let C=s.newAttributes,R=s.enabledAttributes,L=s.attributeDivisors;C[E]=1,R[E]===0&&(i.enableVertexAttribArray(E),R[E]=1),L[E]!==I&&(i.vertexAttribDivisor(E,I),L[E]=I)}function y(){let E=s.newAttributes,I=s.enabledAttributes;for(let C=0,R=I.length;C<R;C++)I[C]!==E[C]&&(i.disableVertexAttribArray(C),I[C]=0)}function M(E,I,C,R,L,D,U){U===!0?i.vertexAttribIPointer(E,I,C,L,D):i.vertexAttribPointer(E,I,C,R,L,D)}function x(E,I,C,R){g();let L=R.attributes,D=C.getAttributes(),U=I.defaultAttributeValues;for(let B in D){let O=D[B];if(O.location>=0){let k=L[B];if(k===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),k!==void 0){let G=k.normalized,J=k.itemSize,j=t.get(k);if(j===void 0)continue;let ut=j.buffer,nt=j.type,ft=j.bytesPerElement,H=nt===i.INT||nt===i.UNSIGNED_INT||k.gpuType===fl;if(k.isInterleavedBufferAttribute){let X=k.data,st=X.stride,ct=k.offset;if(X.isInstancedInterleavedBuffer){for(let lt=0;lt<O.locationSize;lt++)b(O.location+lt,X.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let lt=0;lt<O.locationSize;lt++)m(O.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let lt=0;lt<O.locationSize;lt++)M(O.location+lt,J/O.locationSize,nt,G,st*ft,(ct+J/O.locationSize*lt)*ft,H)}else{if(k.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)b(O.location+X,k.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let X=0;X<O.locationSize;X++)M(O.location+X,J/O.locationSize,nt,G,J*ft,J/O.locationSize*X*ft,H)}}else if(U!==void 0){let G=U[B];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(O.location,G);break;case 3:i.vertexAttrib3fv(O.location,G);break;case 4:i.vertexAttrib4fv(O.location,G);break;default:i.vertexAttrib1fv(O.location,G)}}}}y()}function _(){w();for(let E in n){let I=n[E];for(let C in I){let R=I[C];for(let L in R){let D=R[L];for(let U in D)h(D[U].object),delete D[U];delete R[L]}}delete n[E]}}function S(E){if(n[E.id]===void 0)return;let I=n[E.id];for(let C in I){let R=I[C];for(let L in R){let D=R[L];for(let U in D)h(D[U].object),delete D[U];delete R[L]}}delete n[E.id]}function A(E){for(let I in n){let C=n[I];for(let R in C){let L=C[R];if(L[E.id]===void 0)continue;let D=L[E.id];for(let U in D)h(D[U].object),delete D[U];delete L[E.id]}}}function v(E){for(let I in n){let C=n[I],R=E.isInstancedMesh===!0?E.id:0,L=C[R];if(L!==void 0){for(let D in L){let U=L[D];for(let B in U)h(U[B].object),delete U[B];delete L[D]}delete C[R],Object.keys(C).length===0&&delete n[I]}}}function w(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function jv(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Qv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yn&&A!==Vn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:_,samples:S}}function ty(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Dn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,b=i.get(u);if(!r||p===null||p.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,M=y*4,x=b.clippingState||null;l.value=x,x=h(p,f,M,d);for(let _=0;_!==M;++_)x[_]=e[_];b.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let b=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<b)&&(m=new Float32Array(b));for(let M=0,x=d;M!==g;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var as=4,ey=6,ny=20,iy=256,go=new jn,np=new Q,ch=null,uh=0,hh=0,fh=!1,ry=new V,mr=new V,jl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=ry}=s;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,uh,hh),this._renderer.xr.enabled=fh,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Gn,format:An,colorSpace:Ds,depthBuffer:!1},r=ip(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sy(s)),this._blurMaterial=ay(s,t,e),this._ggxMaterial=oy(s,t,e)}return r}_compileMaterial(t){let e=new kt(new Wt,t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,r,s){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(np),u.toneMapping=kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kt(new Pi,new ne({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,b=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,b=!0):(m.color.copy(np),b=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let _=this._cubeSize;os(r,x*_,M>2?_:0,_,_),u.setRenderTarget(r),b&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Oi||t.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,go)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-as?n-p+as:0),b=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,os(s,m,b,3*g,2*g),r.setRenderTarget(s),r.render(a,go),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,os(t,m,b,3*g,2*g),r.setRenderTarget(t),r.render(a,go)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-as?r-this._lodMax+as:0),f=4*(this._cubeSize-h);os(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,go)}};function sy(i){let t=[],e=[],n=i,r=i-as+1+ey;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),g=new Float32Array(d*f*u);for(let b=0;b<u;b++){let y=b%3*2/3-1,M=b>2?0:-1,x=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];p.set(x,d*f*b);for(let _=0;_<f;_++){let S=h[_*2]*2-1,A=h[_*2+1]*2-1;b===0?mr.set(1,A,S):b===1?mr.set(-S,1,-A):b===2?mr.set(-S,A,1):b===3?mr.set(-1,A,-S):b===4?mr.set(-S,-1,A):mr.set(S,A,-1),mr.toArray(g,(b*f+_)*d)}}let m=new Wt;m.setAttribute("position",new Tn(p,d)),m.setAttribute("outputDirection",new Tn(g,d)),e.push(new kt(m,null)),n>as&&n--}return{lodMeshes:e,sizeLods:t}}function ip(i,t,e){let n=new rn(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function oy(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ay(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function rp(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function sp(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

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
	`}var Ql=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Vs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pi(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Qn});s.uniforms.tEquirect.value=e;let o=new kt(r,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=qe),new ol(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function ly(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===cl||d===ul)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let g=new Ql(p.height);return g.fromEquirectangularTexture(i,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===cl||d===ul,g=d===Oi||d===dr;if(p||g){let m=e.get(f),b=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==b)return n===null&&(n=new jl(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new jl(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===cl?f.mapping=Oi:d===ul&&(f.mapping=dr),f}function l(f){let d=0,p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function cy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&or("WebGLRenderer: "+n+" extension not supported."),r}}}function uy(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(d!==null){let y=d.array;g=d.version;for(let M=0,x=y.length;M<x;M+=3){let _=y[M+0],S=y[M+1],A=y[M+2];f.push(_,S,S,A,A,_)}}else{let y=p.array;g=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let _=M+0,S=M+1,A=M+2;f.push(_,S,S,A,A,_)}}let m=new(p.count>=65535?lr:ks)(f,1);m.version=g;let b=s.get(u);b&&t.remove(b),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let g=0;for(let m=0;m<d;m++)g+=f[m];e.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function dy(i,t,e){let n=new WeakMap,r=new Le;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,_=1;x>t.maxTextureSize&&(_=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*_*4*u),A=new Us(S,x,_,u);A.type=Vn,A.needsUpdate=!0;let v=M*4;for(let T=0;T<u;T++){let E=m[T],I=b[T],C=y[T],R=x*_*4*T;for(let L=0;L<E.count;L++){let D=L*v;d===!0&&(r.fromBufferAttribute(E,L),S[R+D+0]=r.x,S[R+D+1]=r.y,S[R+D+2]=r.z,S[R+D+3]=0),p===!0&&(r.fromBufferAttribute(I,L),S[R+D+4]=r.x,S[R+D+5]=r.y,S[R+D+6]=r.z,S[R+D+7]=0),g===!0&&(r.fromBufferAttribute(C,L),S[R+D+8]=r.x,S[R+D+9]=r.y,S[R+D+10]=r.z,S[R+D+11]=C.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new At(x,_)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function py(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var my={[Du]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function gy(i,t,e,n,r,s){let o=new rn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Wt;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));let h=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new kt(c,h),f=new jn(-1,1,1,-1,0,1),d=null,p=null,g=!1,m,b=null,y=[],M=!1;this.setSize=function(x,_){o.setSize(x,_),a!==null&&a.setSize(x,_),l!==null&&l.setSize(x,_);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(x,_)}},this.setEffects=function(x){y=x,M=y.length>0&&y[0].isRenderPass===!0;let _=o.width,S=o.height;y.length>0&&a===null&&(a=new rn(_,S,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(_,S,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(_,S)}},this.begin=function(x,_){if(g||x.toneMapping===kn&&y.length===0)return!1;if(b=_,_!==null){let S=_.width,A=_.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return M===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=kn,!0},this.hasRenderPass=function(){return M},this.end=function(x,_){x.toneMapping=m,g=!0;let S=o,A=a;for(let v=0;v<y.length;v++){let w=y[v];w.enabled!==!1&&(w.render(x,A,S,_),w.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},ae.getTransfer(d)===pe&&(h.defines.SRGB_TRANSFER="");let v=my[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(b),x.render(u,f),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Tp=new nn,mh=new Ci(1,1),Ep=new Us,Ap=new Da,Rp=new Vs,op=[],ap=[],lp=new Float32Array(16),cp=new Float32Array(9),up=new Float32Array(4);function cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=op[r];if(s===void 0&&(s=new Float32Array(r),op[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ec(i,t){let e=ap[t];e===void 0&&(e=new Int32Array(t),ap[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function by(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function _y(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;up.set(n),i.uniformMatrix2fv(this.addr,!1,up),Ve(e,n)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;cp.set(n),i.uniformMatrix3fv(this.addr,!1,cp),Ve(e,n)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;lp.set(n),i.uniformMatrix4fv(this.addr,!1,lp),Ve(e,n)}}function wy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Ly(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=e.isReversedDepthBuffer()?Zl:$l,s=mh):s=Tp,e.setTexture2D(t||s,r)}function Fy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ap,r)}function Dy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Rp,r)}function Ny(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ep,r)}function Oy(i){switch(i){case 5126:return by;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return _y;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return wy;case 35667:case 35671:return Ty;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Uy(i,t){i.uniform1fv(this.addr,t)}function By(i,t){let e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function ky(i,t){let e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function zy(i,t){let e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Vy(i,t){let e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gy(i,t){let e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hy(i,t){let e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wy(i,t){i.uniform1iv(this.addr,t)}function Xy(i,t){i.uniform2iv(this.addr,t)}function Yy(i,t){i.uniform3iv(this.addr,t)}function qy(i,t){i.uniform4iv(this.addr,t)}function $y(i,t){i.uniform1uiv(this.addr,t)}function Zy(i,t){i.uniform2uiv(this.addr,t)}function Ky(i,t){i.uniform3uiv(this.addr,t)}function Jy(i,t){i.uniform4uiv(this.addr,t)}function jy(i,t,e){let n=this.cache,r=t.length,s=ec(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=mh:o=Tp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Qy(i,t,e){let n=this.cache,r=t.length,s=ec(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ap,s[o])}function t_(i,t,e){let n=this.cache,r=t.length,s=ec(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Rp,s[o])}function e_(i,t,e){let n=this.cache,r=t.length,s=ec(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Ep,s[o])}function n_(i){switch(i){case 5126:return Uy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Vy;case 35675:return Gy;case 35676:return Hy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return $y;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}var gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function hp(i,t){i.seq.push(t),i.map[t.id]=t}function i_(i,t,e){let n=i.name,r=n.length;for(dh.lastIndex=0;;){let s=dh.exec(n),o=dh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hp(e,c===void 0?new gh(a,i,t):new bh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xh(a),hp(e,u)),e=u}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);i_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function fp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var r_=37297,s_=0;function o_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dp=new Kt;function a_(i){ae._getMatrix(dp,ae.workingColorSpace,i);let t=`mat3( ${dp.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(t),a)}else return s}function l_(i,t){let e=a_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var c_={[Du]:"Linear",[Nu]:"Reinhard",[Ou]:"Cineon",[Uu]:"ACESFilmic",[ku]:"AgX",[zu]:"Neutral",[Bu]:"Custom"};function u_(i,t){let e=c_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jl=new V;function h_(){ae.getLuminanceCoefficients(Jl);let i=Jl.x.toFixed(4),t=Jl.y.toFixed(4),e=Jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function d_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xo(i){return i!==""}function mp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(m_,b_)}var g_=new Map;function b_(i,t){let e=ee[t];if(e===void 0){let n=g_.get(t);if(n!==void 0)e=ee[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vh(e)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(i){return i.replace(x_,v_)}function v_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var y_={[ro]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function __(i){return y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[Oi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var w_={[dr]:"ENVMAP_MODE_REFRACTION"};function T_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function A_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E_[i.combine]||"ENVMAP_BLENDING_NONE"}function R_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=__(e),c=S_(e),h=T_(e),u=A_(e),f=R_(e),d=f_(e),p=d_(s),g=r.createProgram(),m,b,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xo).join(`
`),m.length>0&&(m+=`
`),b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xo).join(`
`),b.length>0&&(b+=`
`)):(m=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),b=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ee.tonemapping_pars_fragment:"",e.toneMapping!==kn?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,l_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),o=vh(o),o=mp(o,e),o=gp(o,e),a=vh(a),a=mp(a,e),a=gp(a,e),o=bp(o),a=bp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let M=y+m+o,x=y+b+a,_=fp(r,r.VERTEX_SHADER,M),S=fp(r,r.FRAGMENT_SHADER,x);r.attachShader(g,_),r.attachShader(g,S),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(E){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(g)||"",C=r.getShaderInfoLog(_)||"",R=r.getShaderInfoLog(S)||"",L=I.trim(),D=C.trim(),U=R.trim(),B=!0,O=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,_,S);else{let k=pp(r,_,"vertex"),G=pp(r,S,"fragment");qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+k+`
`+G)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(O=!1);O&&(E.diagnostics={runnable:B,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:b}})}r.deleteShader(_),r.deleteShader(S),v=new ls(r,g),w=p_(r,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,r_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=S,this}var P_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(i){return i===ki||i===fo||i===po}function L_(i,t,e,n,r,s){let o=new Kr,a=new yh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,w,T,E,I,C){let R=E.fog,L=I.geometry,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,B=t.get(v.envMap||D,U),O=B&&B.mapping===oo?B.image.height:null,k=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=G!==void 0?G.length:0,j=0;L.morphAttributes.position!==void 0&&(j=1),L.morphAttributes.normal!==void 0&&(j=2),L.morphAttributes.color!==void 0&&(j=3);let ut,nt,ft,H;if(k){let Se=ei[k];ut=Se.vertexShader,nt=Se.fragmentShader}else{ut=v.vertexShader,nt=v.fragmentShader;let Se=a.getVertexShaderStage(v),fe=a.getFragmentShaderStage(v);a.update(v,Se,fe),ft=Se.id,H=fe.id}let X=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),ct=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,pt=!!v.map,zt=!!v.matcap,Nt=!!B,Dt=!!v.aoMap,Zt=!!v.lightMap,Yt=!!v.bumpMap&&v.wireframe===!1,be=!!v.normalMap,Pe=!!v.displacementMap,Ye=!!v.emissiveMap,xe=!!v.metalnessMap,Ue=!!v.roughnessMap,q=v.anisotropy>0,Je=v.clearcoat>0,me=v.dispersion>0,z=v.retroreflectivity>0,P=v.iridescence>0,$=v.sheen>0,tt=v.transmission>0,it=q&&!!v.anisotropyMap,mt=Je&&!!v.clearcoatMap,gt=Je&&!!v.clearcoatNormalMap,rt=Je&&!!v.clearcoatRoughnessMap,at=P&&!!v.iridescenceMap,bt=P&&!!v.iridescenceThicknessMap,Ot=$&&!!v.sheenColorMap,_t=$&&!!v.sheenRoughnessMap,xt=!!v.specularMap,Ut=!!v.specularColorMap,Ht=!!v.specularIntensityMap,jt=tt&&!!v.transmissionMap,Y=tt&&!!v.thicknessMap,vt=!!v.gradientMap,ot=!!v.alphaMap,yt=v.alphaTest>0,Tt=!!v.alphaHash,ht=!!v.extensions,Bt=kn;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Lt={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:ut,fragmentShader:nt,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:ct,instancingColor:ct&&I.instanceColor!==null,instancingMorph:ct&&I.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:pt,matcap:zt,envMap:Nt,envMapMode:Nt&&B.mapping,envMapCubeUVHeight:O,aoMap:Dt,lightMap:Zt,bumpMap:Yt,normalMap:be,displacementMap:Pe,emissiveMap:Ye,normalMapObjectSpace:be&&v.normalMapType===Nd,normalMapTangentSpace:be&&v.normalMapType===Zu,packedNormalMap:be&&v.normalMapType===Zu&&I_(v.normalMap.format),metalnessMap:xe,roughnessMap:Ue,anisotropy:q,anisotropyMap:it,clearcoat:Je,clearcoatMap:mt,clearcoatNormalMap:gt,clearcoatRoughnessMap:rt,dispersion:me,retroreflection:z,iridescence:P,iridescenceMap:at,iridescenceThicknessMap:bt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:Ut,specularIntensityMap:Ht,transmission:tt,transmissionMap:jt,thicknessMap:Y,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Ni&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:yt,alphaHash:Tt,combine:v.combine,mapUv:pt&&p(v.map.channel),aoMapUv:Dt&&p(v.aoMap.channel),lightMapUv:Zt&&p(v.lightMap.channel),bumpMapUv:Yt&&p(v.bumpMap.channel),normalMapUv:be&&p(v.normalMap.channel),displacementMapUv:Pe&&p(v.displacementMap.channel),emissiveMapUv:Ye&&p(v.emissiveMap.channel),metalnessMapUv:xe&&p(v.metalnessMap.channel),roughnessMapUv:Ue&&p(v.roughnessMap.channel),anisotropyMapUv:it&&p(v.anisotropyMap.channel),clearcoatMapUv:mt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(v.sheenRoughnessMap.channel),specularMapUv:xt&&p(v.specularMap.channel),specularColorMapUv:Ut&&p(v.specularColorMap.channel),specularIntensityMapUv:Ht&&p(v.specularIntensityMap.channel),transmissionMapUv:jt&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:ot&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||q),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(pt||ot),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:pt&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:Ye&&v.emissiveMap.isVideoTexture===!0&&ae.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===le,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)w.push(T),w.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(b(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function b(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){let w=d[v.type],T;if(w){let E=ei[w];T=Qd.clone(E.uniforms)}else T=v.uniforms;return T}function x(v,w){let T=h.get(w);return T!==void 0?++T.usedTimes:(T=new C_(i,w,v,r),c.push(T),h.set(w,T)),T}function _(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:A}}function F_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,g,m,b){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:m,group:b},i[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=m,y.group=b),t++,y}function l(f,d,p,g,m,b,y){y.reversedDepth===!0&&(m=-m);let M=a(f,d,p,g,m,b);p.transmission>0?n.push(M):p.transparent===!0?r.push(M):e.push(M)}function c(f,d,p,g,m,b){let y=a(f,d,p,g,m,b);p.transmission>0?n.unshift(y):p.transparent===!0?r.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||D_),n.length>1&&n.sort(d||vp),r.length>1&&r.sort(d||vp)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function N_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new yp,i.set(n,[o])):r>=s.length?(o=new yp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function O_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Q};break;case"SpotLight":e={position:new V,direction:new V,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":e={color:new Q,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var B_=0;function k_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){let t=new O_,e=U_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let r=new V,s=new Ae,o=new Ae;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,g=0,m=0,b=0,y=0,M=0,x=0,_=0,S=0,A=0,v=0,w=0,T=0;c.sort(k_);for(let I=0,C=c.length;I<C;I++){let R=c[I],L=R.color,D=R.intensity,U=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ki?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*D,u+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],D);T++}else if(R.isSunLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,G=e.get(R);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=B;let J=k.getViewportCount();for(let j=0;j<J;j++)n.sunShadowMatrix[g+j]=k.getMatrix(j),n.sunShadowCascade[g+j]=k._cascadeData[j];g+=J,p++}n.sun[d]=O,d++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,G=e.get(R);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,_++}n.directional[m]=O,m++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(L).multiplyScalar(D),O.distance=U,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[y]=O;let k=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,k.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[y]=k.matrix,R.castShadow){let G=e.get(R);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=B,A++}y++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(L).multiplyScalar(D),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=O,M++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let k=R.shadow,G=e.get(R);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,n.pointShadow[b]=G,n.pointShadowMap[b]=B,n.pointShadowMatrix[b]=R.shadow.matrix,S++}n.point[b]=O,b++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(D),O.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[x]=O,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let E=n.hash;(E.sunLength!==d||E.directionalLength!==m||E.pointLength!==b||E.spotLength!==y||E.rectAreaLength!==M||E.hemiLength!==x||E.numSunShadows!==p||E.numDirectionalShadows!==_||E.numPointShadows!==S||E.numSpotShadows!==A||E.numSpotMaps!==v||E.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=b,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,E.sunLength=d,E.directionalLength=m,E.pointLength=b,E.spotLength=y,E.rectAreaLength=M,E.hemiLength=x,E.numSunShadows=p,E.numDirectionalShadows=_,E.numPointShadows=S,E.numSpotShadows=A,E.numSpotMaps=v,E.numLightProbes=T,n.version=B_++)}function l(c,h){let u=0,f=0,d=0,p=0,g=0,m=0,b=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let x=c[y];if(x.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(b),u++}else if(x.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(b),f++}else if(x.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(b),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(b),p++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(b),o.identity(),s.copy(x.matrixWorld),s.premultiply(b),o.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(b),d++}else if(x.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(b),m++}}}return{setup:a,setupView:l,state:n}}function _p(i){let t=new z_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function V_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new _p(i),t.set(r,[a])):s>=o.length?(a=new _p(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`,W_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],X_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Mp=new Ae,bo=new V,ph=new V;function Y_(i,t,e){let n=new zs,r=new At,s=new At,o=new Le,a=new $a,l=new Za,c={},h=e.maxTextureSize,u={[Di]:un,[un]:Di,[le]:le},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:G_,fragmentShader:H_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Wt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new kt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let b=this.type;this.render=function(S,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===fd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let w=i.getRenderTarget(),T=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Qn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let C=b!==this.type;C&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=S.length;R<L;R++){let D=S[R],U=D.shadow;if(U===void 0){Vt("WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let B=U.getFrameExtents();r.multiply(B),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,U.mapSize.y=s.y));let O=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||C===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===is){if(D.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new rn(r.x,r.y,{format:ki,type:Gn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),U.map.texture.name=D.name+".shadowMap",U.map.depthTexture=new Ci(r.x,r.y,Vn),U.map.depthTexture.name=D.name+".shadowMapDepth",U.map.depthTexture.format=Zn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=We,U.map.depthTexture.magFilter=We}else D.isPointLight?(U.map=new Ql(r.x),U.map.depthTexture=new ka(r.x,zn)):(U.map=new rn(r.x,r.y),U.map.depthTexture=new Ci(r.x,r.y,zn)),U.map.depthTexture.name=D.name+".shadowMap",U.map.depthTexture.format=Zn,this.type===ro?(U.map.depthTexture.compareFunction=O?Zl:$l,U.map.depthTexture.minFilter=qe,U.map.depthTexture.magFilter=qe):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=We,U.map.depthTexture.magFilter=We);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);let k=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();D.isPointLight!==!0&&U.updateMatrices(D,v);for(let G=0;G<k;G++){let J=U.getCamera(G);if(D.isPointLight){let j=U.camera,ut=U.matrix,nt=D.distance||j.far;nt!==j.far&&(j.far=nt,j.updateProjectionMatrix()),bo.setFromMatrixPosition(D.matrixWorld),j.position.copy(bo),ph.copy(j.position),ph.add(W_[G]),j.up.copy(X_[G]),j.lookAt(ph),j.updateMatrixWorld(),ut.makeTranslation(-bo.x,-bo.y,-bo.z),Mp.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mp,j.coordinateSystem,j.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,G),i.clear();else{G===0&&(i.setRenderTarget(U.map),i.clear());let j=U.getViewport(G);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),I.viewport(o)}n=U.getFrustum(G),x(A,v,J,D,this.type)}U.isPointLightShadow!==!0&&this.type===is&&y(U,v),U.needsUpdate=!1}b=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,E)};function y(S,A){let v=t.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new rn(r.x,r.y,{format:ki,type:Gn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,v,d,g,null)}function M(S,A,v,w){let T=null,E=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(E!==void 0)T=E;else if(T=v.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=T.uuid,C=A.uuid,R=c[I];R===void 0&&(R={},c[I]=R);let L=R[C];L===void 0&&(L=T.clone(),R[C]=L,A.addEventListener("dispose",_)),T=L}if(T.visible=A.visible,T.wireframe=A.wireframe,w===is?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let I=i.properties.get(T);I.light=v}return T}function x(S,A,v,w,T){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===is)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let C=t.update(S),R=S.material;if(Array.isArray(R)){let L=C.groups;for(let D=0,U=L.length;D<U;D++){let B=L[D],O=R[B.materialIndex];if(O&&O.visible){let k=M(S,O,w,T);S.onBeforeShadow(i,S,A,v,C,k,B),i.renderBufferDirect(v,null,C,k,S,B),S.onAfterShadow(i,S,A,v,C,k,B)}}}else if(R.visible){let L=M(S,R,w,T);S.onBeforeShadow(i,S,A,v,C,L,null),i.renderBufferDirect(v,null,C,L,S,null),S.onAfterShadow(i,S,A,v,C,L,null)}}let I=S.children;for(let C=0,R=I.length;C<R;C++)x(I[C],A,v,w,T)}function _(S){S.target.removeEventListener("dispose",_);for(let v in c){let w=c[v],T=S.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function q_(i,t){function e(){let Y=!1,vt=new Le,ot=null,yt=new Le(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!Y&&(i.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){Y=Tt},setClear:function(Tt,ht,Bt,Lt,Se){Se===!0&&(Tt*=Lt,ht*=Lt,Bt*=Lt),vt.set(Tt,ht,Bt,Lt),yt.equals(vt)===!1&&(i.clearColor(Tt,ht,Bt,Lt),yt.copy(vt))},reset:function(){Y=!1,ot=null,yt.set(-1,0,0,0)}}}function n(){let Y=!1,vt=!1,ot=null,yt=null,Tt=null;return{setReversed:function(ht){if(vt!==ht){let Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(ht){ht?X(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(ht){ot!==ht&&!Y&&(i.depthMask(ht),ot=ht)},setFunc:function(ht){if(vt&&(ht=qd[ht]),yt!==ht){switch(ht){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case wa:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ht}},setLocked:function(ht){Y=ht},setClear:function(ht){Tt!==ht&&(Tt=ht,vt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){Y=!1,ot=null,yt=null,Tt=null,vt=!1}}}function r(){let Y=!1,vt=null,ot=null,yt=null,Tt=null,ht=null,Bt=null,Lt=null,Se=null;return{setTest:function(fe){Y||(fe?X(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(fe){vt!==fe&&!Y&&(i.stencilMask(fe),vt=fe)},setFunc:function(fe,Pn,Yn){(ot!==fe||yt!==Pn||Tt!==Yn)&&(i.stencilFunc(fe,Pn,Yn),ot=fe,yt=Pn,Tt=Yn)},setOp:function(fe,Pn,Yn){(ht!==fe||Bt!==Pn||Lt!==Yn)&&(i.stencilOp(fe,Pn,Yn),ht=fe,Bt=Pn,Lt=Yn)},setLocked:function(fe){Y=fe},setClear:function(fe){Se!==fe&&(i.clearStencil(fe),Se=fe)},reset:function(){Y=!1,vt=null,ot=null,yt=null,Tt=null,ht=null,Bt=null,Lt=null,Se=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],g=null,m=!1,b=null,y=null,M=null,x=null,_=null,S=null,A=null,v=new Q(0,0,0),w=0,T=!1,E=null,I=null,C=null,R=null,L=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,B=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=B>=2);let k=null,G={},J=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ut=new Le().fromArray(J),nt=new Le().fromArray(j);function ft(Y,vt,ot,yt){let Tt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(Y,ht),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ot;Bt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ht}let H={};H[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Yr),Yt(!1),be(Cu),X(i.CULL_FACE),Dt(Qn);function X(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function st(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function ct(Y,vt){return f[Y]!==vt?(i.bindFramebuffer(Y,vt),f[Y]=vt,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function lt(Y,vt){let ot=p,yt=!1;if(Y){ot=d.get(vt),ot===void 0&&(ot=[],d.set(vt,ot));let Tt=Y.textures;if(ot.length!==Tt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Bt=Tt.length;ht<Bt;ht++)ot[ht]=i.COLOR_ATTACHMENT0+ht;ot.length=Tt.length,yt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ot)}function pt(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let zt={[fr]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};zt[gd]=i.MIN,zt[bd]=i.MAX;let Nt={[xd]:i.ZERO,[vd]:i.ONE,[yd]:i.SRC_COLOR,[Iu]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Sd]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(Y,vt,ot,yt,Tt,ht,Bt,Lt,Se,fe){if(Y===Qn){m===!0&&(st(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),Y!==dd){if(Y!==b||fe!==T){if((y!==fr||_!==fr)&&(i.blendEquation(i.FUNC_ADD),y=fr,_=fr),fe)switch(Y){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pu:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case so:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",Y);break}M=null,x=null,S=null,A=null,v.set(0,0,0),w=0,b=Y,T=fe}return}Tt=Tt||vt,ht=ht||ot,Bt=Bt||yt,(vt!==y||Tt!==_)&&(i.blendEquationSeparate(zt[vt],zt[Tt]),y=vt,_=Tt),(ot!==M||yt!==x||ht!==S||Bt!==A)&&(i.blendFuncSeparate(Nt[ot],Nt[yt],Nt[ht],Nt[Bt]),M=ot,x=yt,S=ht,A=Bt),(Lt.equals(v)===!1||Se!==w)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Se),v.copy(Lt),w=Se),b=Y,T=!1}function Zt(Y,vt){Y.side===le?st(i.CULL_FACE):X(i.CULL_FACE);let ot=Y.side===un;vt&&(ot=!ot),Yt(ot),Y.blending===Ni&&Y.transparent===!1?Dt(Qn):Dt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);let yt=Y.stencilWrite;a.setTest(yt),yt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ye(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Y){E!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),E=Y)}function be(Y){Y!==ud?(X(i.CULL_FACE),Y!==I&&(Y===Cu?i.cullFace(i.BACK):Y===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),I=Y}function Pe(Y){Y!==C&&(U&&i.lineWidth(Y),C=Y)}function Ye(Y,vt,ot){Y?(X(i.POLYGON_OFFSET_FILL),(R!==vt||L!==ot)&&(R=vt,L=ot,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,ot))):st(i.POLYGON_OFFSET_FILL)}function xe(Y){Y?X(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function Ue(Y){Y===void 0&&(Y=i.TEXTURE0+D-1),k!==Y&&(i.activeTexture(Y),k=Y)}function q(Y,vt,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+D-1:ot=k);let yt=G[ot];yt===void 0&&(yt={type:void 0,texture:void 0},G[ot]=yt),(yt.type!==Y||yt.texture!==vt)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(Y,vt||H[Y]),yt.type=Y,yt.texture=vt)}function Je(){let Y=G[k];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function P(){try{i.texSubImage2D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function $(){try{i.texSubImage3D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function mt(){try{i.texStorage2D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function gt(){try{i.texStorage3D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function rt(){try{i.texImage2D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function at(){try{i.texImage3D(...arguments)}catch(Y){qt("WebGLState:",Y)}}function bt(Y){return u[Y]!==void 0?u[Y]:i.getParameter(Y)}function Ot(Y,vt){u[Y]!==vt&&(i.pixelStorei(Y,vt),u[Y]=vt)}function _t(Y){ut.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ut.copy(Y))}function xt(Y){nt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),nt.copy(Y))}function Ut(Y,vt){let ot=c.get(vt);ot===void 0&&(ot=new WeakMap,c.set(vt,ot));let yt=ot.get(Y);yt===void 0&&(yt=i.getUniformBlockIndex(vt,Y.name),ot.set(Y,yt))}function Ht(Y,vt){let yt=c.get(vt).get(Y);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,Y.__bindingPointIndex),l.set(vt,yt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,G={},f={},d=new WeakMap,p=[],g=null,m=!1,b=null,y=null,M=null,x=null,_=null,S=null,A=null,v=new Q(0,0,0),w=0,T=!1,E=null,I=null,C=null,R=null,L=null,ut.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:st,bindFramebuffer:ct,drawBuffers:lt,useProgram:pt,setBlending:Dt,setMaterial:Zt,setFlipSided:Yt,setCullFace:be,setLineWidth:Pe,setPolygonOffset:Ye,setScissorTest:xe,activeTexture:Ue,bindTexture:q,unbindTexture:Je,compressedTexImage2D:me,compressedTexImage3D:z,texImage2D:rt,texImage3D:at,pixelStorei:Ot,getParameter:bt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:gt,texSubImage2D:P,texSubImage3D:$,compressedTexSubImage2D:tt,compressedTexSubImage3D:it,scissor:_t,viewport:xt,reset:jt}}function $_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,P){return p?new OffscreenCanvas(z,P):qr("canvas")}function m(z,P,$){let tt=1,it=me(z);if((it.width>$||it.height>$)&&(tt=$/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let mt=Math.floor(tt*it.width),gt=Math.floor(tt*it.height);f===void 0&&(f=g(mt,gt));let rt=P?g(mt,gt):f;return rt.width=mt,rt.height=gt,rt.getContext("2d").drawImage(z,0,0,mt,gt),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+mt+"x"+gt+")."),rt}else return"data"in z&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),z;return z}function b(z){return z.generateMipmaps}function y(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(z,P,$,tt,it,mt=!1){if(z!==null){if(i[z]!==void 0)return i[z];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let gt;tt&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=P;if(P===i.RED&&($===i.FLOAT&&(rt=i.R32F),$===i.HALF_FLOAT&&(rt=i.R16F),$===i.UNSIGNED_BYTE&&(rt=i.R8),$===i.UNSIGNED_SHORT&&gt&&(rt=gt.R16_EXT),$===i.SHORT&&gt&&(rt=gt.R16_SNORM_EXT)),P===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.R8UI),$===i.UNSIGNED_SHORT&&(rt=i.R16UI),$===i.UNSIGNED_INT&&(rt=i.R32UI),$===i.BYTE&&(rt=i.R8I),$===i.SHORT&&(rt=i.R16I),$===i.INT&&(rt=i.R32I)),P===i.RG&&($===i.FLOAT&&(rt=i.RG32F),$===i.HALF_FLOAT&&(rt=i.RG16F),$===i.UNSIGNED_BYTE&&(rt=i.RG8),$===i.UNSIGNED_SHORT&&gt&&(rt=gt.RG16_EXT),$===i.SHORT&&gt&&(rt=gt.RG16_SNORM_EXT)),P===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RG8UI),$===i.UNSIGNED_SHORT&&(rt=i.RG16UI),$===i.UNSIGNED_INT&&(rt=i.RG32UI),$===i.BYTE&&(rt=i.RG8I),$===i.SHORT&&(rt=i.RG16I),$===i.INT&&(rt=i.RG32I)),P===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),$===i.UNSIGNED_INT&&(rt=i.RGB32UI),$===i.BYTE&&(rt=i.RGB8I),$===i.SHORT&&(rt=i.RGB16I),$===i.INT&&(rt=i.RGB32I)),P===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),$===i.UNSIGNED_INT&&(rt=i.RGBA32UI),$===i.BYTE&&(rt=i.RGBA8I),$===i.SHORT&&(rt=i.RGBA16I),$===i.INT&&(rt=i.RGBA32I)),P===i.RGB&&($===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGB16_EXT),$===i.SHORT&&gt&&(rt=gt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),P===i.RGBA){let at=mt?Ns:ae.getTransfer(it);$===i.FLOAT&&(rt=i.RGBA32F),$===i.HALF_FLOAT&&(rt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(rt=at===pe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGBA16_EXT),$===i.SHORT&&gt&&(rt=gt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(z,P){let $;return z?P===null||P===zn||P===ss?$=i.DEPTH24_STENCIL8:P===Vn?$=i.DEPTH32F_STENCIL8:P===rs&&($=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===zn||P===ss?$=i.DEPTH_COMPONENT24:P===Vn?$=i.DEPTH_COMPONENT32F:P===rs&&($=i.DEPTH_COMPONENT16),$}function S(z,P){return b(z)===!0||z.isFramebufferTexture&&z.minFilter!==We&&z.minFilter!==qe?Math.log2(Math.max(P.width,P.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?P.mipmaps.length:1}function A(z){let P=z.target;P.removeEventListener("dispose",A),w(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function v(z){let P=z.target;P.removeEventListener("dispose",v),E(P)}function w(z){let P=n.get(z);if(P.__webglInit===void 0)return;let $=z.source,tt=d.get($);if(tt){let it=tt[P.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(z),Object.keys(tt).length===0&&d.delete($)}n.remove(z)}function T(z){let P=n.get(z);i.deleteTexture(P.__webglTexture);let $=z.source,tt=d.get($);delete tt[P.__cacheKey],o.memory.textures--}function E(z){let P=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(P.__webglFramebuffer[tt]))for(let it=0;it<P.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(P.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(P.__webglFramebuffer[tt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[tt])}else{if(Array.isArray(P.__webglFramebuffer))for(let tt=0;tt<P.__webglFramebuffer.length;tt++)i.deleteFramebuffer(P.__webglFramebuffer[tt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let tt=0;tt<P.__webglColorRenderbuffer.length;tt++)P.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[tt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let $=z.textures;for(let tt=0,it=$.length;tt<it;tt++){let mt=n.get($[tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove($[tt])}n.remove(z)}let I=0;function C(){I=0}function R(){return I}function L(z){I=z}function D(){let z=I;return z>=r.maxTextures&&Vt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,z}function U(z){let P=[];return P.push(z.wrapS),P.push(z.wrapT),P.push(z.wrapR||0),P.push(z.magFilter),P.push(z.minFilter),P.push(z.anisotropy),P.push(z.internalFormat),P.push(z.format),P.push(z.type),P.push(z.generateMipmaps),P.push(z.premultiplyAlpha),P.push(z.flipY),P.push(z.unpackAlignment),P.push(z.colorSpace),P.join()}function B(z,P){let $=n.get(z);if(z.isVideoTexture&&q(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&$.__version!==z.version){let tt=z.image;if(tt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{st($,z,P);return}}else z.isExternalTexture&&($.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+P)}function O(z,P){let $=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&$.__version!==z.version){st($,z,P);return}else z.isExternalTexture&&($.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+P)}function k(z,P){let $=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&$.__version!==z.version){st($,z,P);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+P)}function G(z,P){let $=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&$.__version!==z.version){ct($,z,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+P)}let J={[ar]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},j={[We]:i.NEAREST,[Fd]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ut={[Ud]:i.NEVER,[Gd]:i.ALWAYS,[Bd]:i.LESS,[$l]:i.LEQUAL,[kd]:i.EQUAL,[Zl]:i.GEQUAL,[zd]:i.GREATER,[Vd]:i.NOTEQUAL};function nt(z,P){if(P.type===Vn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===qe||P.magFilter===hl||P.magFilter===ao||P.magFilter===Ui||P.minFilter===qe||P.minFilter===hl||P.minFilter===ao||P.minFilter===Ui)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,J[P.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,J[P.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,J[P.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,j[P.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,ut[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===We||P.minFilter!==ao&&P.minFilter!==Ui||P.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ft(z,P){let $=!1;z.__webglInit===void 0&&(z.__webglInit=!0,P.addEventListener("dispose",A));let tt=P.source,it=d.get(tt);it===void 0&&(it={},d.set(tt,it));let mt=U(P);if(mt!==z.__cacheKey){it[mt]===void 0&&(it[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),it[mt].usedTimes++;let gt=it[z.__cacheKey];gt!==void 0&&(it[z.__cacheKey].usedTimes--,gt.usedTimes===0&&T(P)),z.__cacheKey=mt,z.__webglTexture=it[mt].texture}return $}function H(z,P,$){return Math.floor(Math.floor(z/$)/P)}function X(z,P,$,tt){let mt=z.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,$,tt,P.data);else{mt.sort((Ot,_t)=>Ot.start-_t.start);let gt=0;for(let Ot=1;Ot<mt.length;Ot++){let _t=mt[gt],xt=mt[Ot],Ut=_t.start+_t.count,Ht=H(xt.start,P.width,4),jt=H(_t.start,P.width,4);xt.start<=Ut+1&&Ht===jt&&H(xt.start+xt.count-1,P.width,4)===Ht?_t.count=Math.max(_t.count,xt.start+xt.count-_t.start):(++gt,mt[gt]=xt)}mt.length=gt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let Ot=0,_t=mt.length;Ot<_t;Ot++){let xt=mt[Ot],Ut=Math.floor(xt.start/4),Ht=Math.ceil(xt.count/4),jt=Ut%P.width,Y=Math.floor(Ut/P.width),vt=Ht,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,jt,Y,vt,ot,$,tt,P.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function st(z,P,$){let tt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(tt=i.TEXTURE_3D);let it=ft(z,P),mt=P.source;e.bindTexture(tt,z.__webglTexture,i.TEXTURE0+$);let gt=n.get(mt);if(mt.version!==gt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let ot=ae.getPrimaries(ae.workingColorSpace),yt=P.colorSpace===fi?null:ae.getPrimaries(P.colorSpace),Tt=P.colorSpace===fi||ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let at=m(P.image,!1,r.maxTextureSize);at=Je(P,at);let bt=s.convert(P.format,P.colorSpace),Ot=s.convert(P.type),_t=x(P.internalFormat,bt,Ot,P.normalized,P.colorSpace,P.isVideoTexture);nt(tt,P);let xt,Ut=P.mipmaps,Ht=P.isVideoTexture!==!0,jt=gt.__version===void 0||it===!0,Y=mt.dataReady,vt=S(P,at);if(P.isDepthTexture)_t=_(P.format===Bi,P.type),jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,_t,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,bt,Ot,null));else if(P.isDataTexture)if(Ut.length>0){Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,vt,_t,Ut[0].width,Ut[0].height);for(let ot=0,yt=Ut.length;ot<yt;ot++)xt=Ut[ot],Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,bt,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,bt,Ot,xt.data);P.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(i.TEXTURE_2D,vt,_t,at.width,at.height),Y&&X(P,at,bt,Ot)):e.texImage2D(i.TEXTURE_2D,0,_t,at.width,at.height,0,bt,Ot,at.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,_t,Ut[0].width,Ut[0].height,at.depth);for(let ot=0,yt=Ut.length;ot<yt;ot++)if(xt=Ut[ot],P.format!==An)if(bt!==null)if(Ht){if(Y)if(P.layerUpdates.size>0){let Tt=ih(xt.width,xt.height,P.format,P.type);for(let ht of P.layerUpdates){let Bt=xt.data.subarray(ht*Tt/xt.data.BYTES_PER_ELEMENT,(ht+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ht,xt.width,xt.height,1,bt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,bt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,_t,xt.width,xt.height,at.depth,0,xt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,at.depth,bt,Ot,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,_t,xt.width,xt.height,at.depth,0,bt,Ot,xt.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,vt,_t,Ut[0].width,Ut[0].height);for(let ot=0,yt=Ut.length;ot<yt;ot++)xt=Ut[ot],P.format!==An?bt!==null?Ht?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,bt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt.width,xt.height,bt,Ot,xt.data):e.texImage2D(i.TEXTURE_2D,ot,_t,xt.width,xt.height,0,bt,Ot,xt.data)}else if(P.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,_t,at.width,at.height,at.depth),Y)if(P.layerUpdates.size>0){let ot=ih(at.width,at.height,P.format,P.type);for(let yt of P.layerUpdates){let Tt=at.data.subarray(yt*ot/at.data.BYTES_PER_ELEMENT,(yt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,at.width,at.height,1,bt,Ot,Tt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Ot,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,at.width,at.height,at.depth,0,bt,Ot,at.data);else if(P.isData3DTexture)Ht?(jt&&e.texStorage3D(i.TEXTURE_3D,vt,_t,at.width,at.height,at.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Ot,at.data)):e.texImage3D(i.TEXTURE_3D,0,_t,at.width,at.height,at.depth,0,bt,Ot,at.data);else if(P.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,vt,_t,at.width,at.height);else{let ot=at.width,yt=at.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,_t,ot,yt,0,bt,Ot,null),ot>>=1,yt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),u.add(P),ot.onpaint=yt=>{let Tt=yt.changedElements;for(let ht of u)Tt.includes(ht.image)&&(ht.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Tt=i.RGBA,ht=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,ht,Bt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&jt){let ot=me(Ut[0]);e.texStorage2D(i.TEXTURE_2D,vt,_t,ot.width,ot.height)}for(let ot=0,yt=Ut.length;ot<yt;ot++)xt=Ut[ot],Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Ot,xt):e.texImage2D(i.TEXTURE_2D,ot,_t,bt,Ot,xt);P.generateMipmaps=!1}else if(Ht){if(jt){let ot=me(at);e.texStorage2D(i.TEXTURE_2D,vt,_t,ot.width,ot.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ot,at)}else e.texImage2D(i.TEXTURE_2D,0,_t,bt,Ot,at);b(P)&&y(tt),gt.__version=mt.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function ct(z,P,$){if(P.image.length!==6)return;let tt=ft(z,P),it=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+$);let mt=n.get(it);if(it.version!==mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+$);let gt=ae.getPrimaries(ae.workingColorSpace),rt=P.colorSpace===fi?null:ae.getPrimaries(P.colorSpace),at=P.colorSpace===fi||gt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let bt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ot=P.image[0]&&P.image[0].isDataTexture,_t=[];for(let ht=0;ht<6;ht++)!bt&&!Ot?_t[ht]=m(P.image[ht],!0,r.maxCubemapSize):_t[ht]=Ot?P.image[ht].image:P.image[ht],_t[ht]=Je(P,_t[ht]);let xt=_t[0],Ut=s.convert(P.format,P.colorSpace),Ht=s.convert(P.type),jt=x(P.internalFormat,Ut,Ht,P.normalized,P.colorSpace),Y=P.isVideoTexture!==!0,vt=mt.__version===void 0||tt===!0,ot=it.dataReady,yt=S(P,xt);nt(i.TEXTURE_CUBE_MAP,P);let Tt;if(bt){Y&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,jt,xt.width,xt.height);for(let ht=0;ht<6;ht++){Tt=_t[ht].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){let Lt=Tt[Bt];P.format!==An?Ut!==null?Y?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,jt,Lt.width,Lt.height,0,Lt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,Lt.width,Lt.height,Ut,Ht,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,jt,Lt.width,Lt.height,0,Ut,Ht,Lt.data)}}}else{if(Tt=P.mipmaps,Y&&vt){Tt.length>0&&yt++;let ht=me(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ot){Y?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,_t[ht].width,_t[ht].height,Ut,Ht,_t[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,_t[ht].width,_t[ht].height,0,Ut,Ht,_t[ht].data);for(let Bt=0;Bt<Tt.length;Bt++){let Se=Tt[Bt].image[ht].image;Y?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Se.width,Se.height,Ut,Ht,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,jt,Se.width,Se.height,0,Ut,Ht,Se.data)}}else{Y?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ut,Ht,_t[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,Ut,Ht,_t[ht]);for(let Bt=0;Bt<Tt.length;Bt++){let Lt=Tt[Bt];Y?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Ut,Ht,Lt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,jt,Ut,Ht,Lt.image[ht])}}}b(P)&&y(i.TEXTURE_CUBE_MAP),mt.__version=it.version,P.onUpdate&&P.onUpdate(P)}z.__version=P.version}function lt(z,P,$,tt,it,mt){let gt=s.convert($.format,$.colorSpace),rt=s.convert($.type),at=x($.internalFormat,gt,rt,$.normalized,$.colorSpace),bt=n.get(P),Ot=n.get($);if(Ot.__renderTarget=P,!bt.__hasExternalTextures){let _t=Math.max(1,P.width>>mt),xt=Math.max(1,P.height>>mt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,mt,at,_t,xt,P.depth,0,gt,rt,null):e.texImage2D(it,mt,at,_t,xt,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,Ot.__webglTexture,0,xe(P)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,Ot.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(z,P,$){if(i.bindRenderbuffer(i.RENDERBUFFER,z),P.depthBuffer){let tt=P.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,mt=_(P.stencilBuffer,it),gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(P),mt,P.width,P.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(P),mt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,mt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,z)}else{let tt=P.textures;for(let it=0;it<tt.length;it++){let mt=tt[it],gt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),at=x(mt.internalFormat,gt,rt,mt.normalized,mt.colorSpace);Ue(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(P),at,P.width,P.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(P),at,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,at,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(z,P,$){let tt=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(P.depthTexture);if(it.__renderTarget=P,(!it.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),tt){if(it.__webglInit===void 0&&(it.__webglInit=!0,P.depthTexture.addEventListener("dispose",A)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),nt(i.TEXTURE_CUBE_MAP,P.depthTexture);let bt=s.convert(P.depthTexture.format),Ot=s.convert(P.depthTexture.type),_t;P.depthTexture.format===Zn?_t=i.DEPTH_COMPONENT24:P.depthTexture.format===Bi&&(_t=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,_t,P.width,P.height,0,bt,Ot,null)}}else B(P.depthTexture,0);let mt=it.__webglTexture,gt=xe(P),rt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,at=P.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===Zn)Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,mt,0);else if(P.depthTexture.format===Bi)Ue(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,rt,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,at,rt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(z){let P=n.get(z),$=z.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==z.depthTexture){let tt=z.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),tt){let it=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),P.__depthDisposeCallback=it}P.__boundDepthTexture=tt}if(z.depthTexture&&!P.__autoAllocateDepthBuffer)if($)for(let tt=0;tt<6;tt++)zt(P.__webglFramebuffer[tt],z,tt);else{let tt=z.texture.mipmaps;tt&&tt.length>0?zt(P.__webglFramebuffer[0],z,0):zt(P.__webglFramebuffer,z,0)}else if($){P.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[tt]),P.__webglDepthbuffer[tt]===void 0)P.__webglDepthbuffer[tt]=i.createRenderbuffer(),pt(P.__webglDepthbuffer[tt],z,!1);else{let it=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=P.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}}else{let tt=z.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),pt(P.__webglDepthbuffer,z,!1);else{let it=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(z,P,$){let tt=n.get(z);P!==void 0&&lt(tt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Nt(z)}function Zt(z){let P=z.texture,$=n.get(z),tt=n.get(P);z.addEventListener("dispose",v);let it=z.textures,mt=z.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=P.version,o.memory.textures++),mt){$.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer[rt]=[];for(let at=0;at<P.mipmaps.length;at++)$.__webglFramebuffer[rt][at]=i.createFramebuffer()}else $.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer=[];for(let rt=0;rt<P.mipmaps.length;rt++)$.__webglFramebuffer[rt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(gt)for(let rt=0,at=it.length;rt<at;rt++){let bt=n.get(it[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Ue(z)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let rt=0;rt<it.length;rt++){let at=it[rt];$.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[rt]);let bt=s.convert(at.format,at.colorSpace),Ot=s.convert(at.type),_t=x(at.internalFormat,bt,Ot,at.normalized,at.colorSpace,z.isXRRenderTarget===!0),xt=xe(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,$.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),pt($.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),nt(i.TEXTURE_CUBE_MAP,P);for(let rt=0;rt<6;rt++)if(P.mipmaps&&P.mipmaps.length>0)for(let at=0;at<P.mipmaps.length;at++)lt($.__webglFramebuffer[rt][at],z,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else lt($.__webglFramebuffer[rt],z,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);b(P)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let rt=0,at=it.length;rt<at;rt++){let bt=it[rt],Ot=n.get(bt),_t=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_t=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ot.__webglTexture),nt(_t,bt),lt($.__webglFramebuffer,z,bt,i.COLOR_ATTACHMENT0+rt,_t,0),b(bt)&&y(_t)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(rt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),nt(rt,P),P.mipmaps&&P.mipmaps.length>0)for(let at=0;at<P.mipmaps.length;at++)lt($.__webglFramebuffer[at],z,P,i.COLOR_ATTACHMENT0,rt,at);else lt($.__webglFramebuffer,z,P,i.COLOR_ATTACHMENT0,rt,0);b(P)&&y(rt),e.unbindTexture()}z.depthBuffer&&Nt(z)}function Yt(z){let P=z.textures;for(let $=0,tt=P.length;$<tt;$++){let it=P[$];if(b(it)){let mt=M(z),gt=n.get(it).__webglTexture;e.bindTexture(mt,gt),y(mt),e.unbindTexture()}}}let be=[],Pe=[];function Ye(z){if(z.samples>0){if(Ue(z)===!1){let P=z.textures,$=z.width,tt=z.height,it=i.COLOR_BUFFER_BIT,mt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(z),rt=P.length>1;if(rt)for(let bt=0;bt<P.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let at=z.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let bt=0;bt<P.length;bt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[bt]);let Ot=n.get(P[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,$,tt,0,0,$,tt,it,i.NEAREST),l===!0&&(be.length=0,Pe.length=0,be.push(i.COLOR_ATTACHMENT0+bt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(be.push(mt),Pe.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<P.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[bt]);let Ot=n.get(P[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let P=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function xe(z){return Math.min(r.maxSamples,z.samples)}function Ue(z){let P=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function q(z){let P=o.render.frame;h.get(z)!==P&&(h.set(z,P),z.update())}function Je(z,P){let $=z.colorSpace,tt=z.format,it=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||$!==Ds&&$!==fi&&(ae.getTransfer($)===pe?(tt!==An||it!==yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",$)),P}function me(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=C,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=Dt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,r=fi){let s,o=ae.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===qu)return i.RGB;if(n===An)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===$u)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===lo||n===co||n===uo||n===ho)if(o===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===vl||n===yl||n===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===wl||n===Tl||n===El||n===fo||n===Al)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ml||n===Sl)return o===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tl)return s.COMPRESSED_R11_EAC;if(n===El)return s.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return s.COMPRESSED_RG11_EAC;if(n===Al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Fl||n===Dl||n===Nl||n===Ol||n===Ul||n===Bl||n===kl||n===zl||n===Vl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Hl||n===Wl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Gl)return o===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===Yl||n===po||n===ql)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Kn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,g=typeof XRWebGLBinding<"u",m=new Mh,b={},y=e.getContextAttributes(),M=null,x=null,_=[],S=[],A=new At,v=null,w=null,T=new en;T.viewport=new Le;let E=new en;E.viewport=new Le;let I=[T,E],C=new al,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=_[H];return X===void 0&&(X=new Jr,_[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=_[H];return X===void 0&&(X=new Jr,_[H]=X),X.getGripSpace()},this.getHand=function(H){let X=_[H];return X===void 0&&(X=new Jr,_[H]=X),X.getHandSpace()};function D(H){let X=S.indexOf(H.inputSource);if(X===-1)return;let st=_[X];st!==void 0&&(st.update(H.inputSource,H.frame,c||o),st.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",B);for(let H=0;H<_.length;H++){let X=S[H];X!==null&&(S[H]=null,_[H].disconnect(X))}R=null,L=null,m.reset();for(let H in b)delete b[H];if(t.setRenderTarget(M),d=null,f=null,u=null,r=null,x=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),w!==null){let H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",U),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ct=null,lt=null;y.depth&&(lt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=y.stencil?Bi:Zn,ct=y.stencil?ss:zn);let pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(pt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new rn(f.textureWidth,f.textureHeight,{format:An,type:yn,depthTexture:new Ci(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new rn(d.framebufferWidth,d.framebufferHeight,{format:An,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(H){for(let X=0;X<H.removed.length;X++){let st=H.removed[X],ct=S.indexOf(st);ct>=0&&(S[ct]=null,_[ct].disconnect(st))}for(let X=0;X<H.added.length;X++){let st=H.added[X],ct=S.indexOf(st);if(ct===-1){for(let pt=0;pt<_.length;pt++)if(pt>=S.length){S.push(st),ct=pt;break}else if(S[pt]===null){S[pt]=st,ct=pt;break}if(ct===-1)break}let lt=_[ct];lt&&lt.connect(st)}}let O=new V,k=new V;function G(H,X,st){O.setFromMatrixPosition(X.matrixWorld),k.setFromMatrixPosition(st.matrixWorld);let ct=O.distanceTo(k),lt=X.projectionMatrix.elements,pt=st.projectionMatrix.elements,zt=lt[14]/(lt[10]-1),Nt=lt[14]/(lt[10]+1),Dt=(lt[9]+1)/lt[5],Zt=(lt[9]-1)/lt[5],Yt=(lt[8]-1)/lt[0],be=(pt[8]+1)/pt[0],Pe=zt*Yt,Ye=zt*be,xe=ct/(-Yt+be),Ue=xe*-Yt;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(xe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),lt[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let q=zt+xe,Je=Nt+xe,me=Pe-Ue,z=Ye+(ct-Ue),P=Dt*Nt/Je*q,$=Zt*Nt/Je*q;H.projectionMatrix.makePerspective(me,z,P,$,q,Je),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function J(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,st=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(st=m.depthFar)),C.near=E.near=T.near=X,C.far=E.far=T.far=st,(R!==C.near||L!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,L=C.far),C.layers.mask=H.layers.mask|6,T.layers.mask=C.layers.mask&-5,E.layers.mask=C.layers.mask&-3;let ct=H.parent,lt=C.cameras;J(C,ct);for(let pt=0;pt<lt.length;pt++)J(lt[pt],ct);lt.length===2?G(C,T,E):C.projectionMatrix.copy(T.projectionMatrix),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),j(H,C,ct)};function j(H,X,st){st===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(st.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ia*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(H){return b[H]};let ut=null;function nt(H,X){if(h=X.getViewerPose(c||o),p=X,h!==null){let st=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ct=!1;st.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Nt=0;Nt<st.length;Nt++){let Dt=st[Nt],Zt=null;if(d!==null)Zt=d.getViewport(Dt);else{let be=u.getViewSubImage(f,Dt);Zt=be.viewport,Nt===0&&(t.setRenderTargetTextures(x,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(x))}let Yt=I[Nt];Yt===void 0&&(Yt=new en,Yt.layers.enable(Nt),Yt.viewport=new Le,I[Nt]=Yt),Yt.matrix.fromArray(Dt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Dt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(C.matrix.copy(Yt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Yt)}let lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Nt=u.getDepthInformation(st[0]);Nt&&Nt.isValid&&Nt.texture&&m.init(Nt,r.renderState)}if(lt&&lt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Nt=0;Nt<st.length;Nt++){let Dt=st[Nt].camera;if(Dt){let Zt=b[Dt];Zt||(Zt=new Gs,b[Dt]=Zt);let Yt=u.getCameraImage(Dt);Zt.sourceTexture=Yt}}}}for(let st=0;st<_.length;st++){let ct=S[st],lt=_[st];ct!==null&&lt!==void 0&&lt.update(ct,X,c||o)}ut&&ut(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let ft=new Sp;ft.setAnimationLoop(nt),this.setAnimationLoop=function(H){ut=H},this.dispose=function(){}}},j_=new Ae,Cp=new Kt;Cp.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t){function e(m,b){m.matrixAutoUpdate===!0&&m.updateMatrix(),b.value.copy(m.matrix)}function n(m,b){b.color.getRGB(m.fogColor.value,th(i)),b.isFog?(m.fogNear.value=b.near,m.fogFar.value=b.far):b.isFogExp2&&(m.fogDensity.value=b.density)}function r(m,b,y,M,x){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?s(m,b):b.isMeshLambertMaterial?(s(m,b),b.envMap&&(m.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(s(m,b),u(m,b)):b.isMeshPhongMaterial?(s(m,b),h(m,b),b.envMap&&(m.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(s(m,b),f(m,b),b.isMeshPhysicalMaterial&&d(m,b,x)):b.isMeshMatcapMaterial?(s(m,b),p(m,b)):b.isMeshDepthMaterial?s(m,b):b.isMeshDistanceMaterial?(s(m,b),g(m,b)):b.isMeshNormalMaterial?s(m,b):b.isLineBasicMaterial?(o(m,b),b.isLineDashedMaterial&&a(m,b)):b.isPointsMaterial?l(m,b,y,M):b.isSpriteMaterial?c(m,b):b.isShadowMaterial?(m.color.value.copy(b.color),m.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function s(m,b){m.opacity.value=b.opacity,b.color&&m.diffuse.value.copy(b.color),b.emissive&&m.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(m.map.value=b.map,e(b.map,m.mapTransform)),b.alphaMap&&(m.alphaMap.value=b.alphaMap,e(b.alphaMap,m.alphaMapTransform)),b.bumpMap&&(m.bumpMap.value=b.bumpMap,e(b.bumpMap,m.bumpMapTransform),m.bumpScale.value=b.bumpScale,b.side===un&&(m.bumpScale.value*=-1)),b.normalMap&&(m.normalMap.value=b.normalMap,e(b.normalMap,m.normalMapTransform),m.normalScale.value.copy(b.normalScale),b.side===un&&m.normalScale.value.negate()),b.displacementMap&&(m.displacementMap.value=b.displacementMap,e(b.displacementMap,m.displacementMapTransform),m.displacementScale.value=b.displacementScale,m.displacementBias.value=b.displacementBias),b.emissiveMap&&(m.emissiveMap.value=b.emissiveMap,e(b.emissiveMap,m.emissiveMapTransform)),b.specularMap&&(m.specularMap.value=b.specularMap,e(b.specularMap,m.specularMapTransform)),b.alphaTest>0&&(m.alphaTest.value=b.alphaTest);let y=t.get(b),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cp),m.reflectivity.value=b.reflectivity,m.ior.value=b.ior,m.refractionRatio.value=b.refractionRatio),b.lightMap&&(m.lightMap.value=b.lightMap,m.lightMapIntensity.value=b.lightMapIntensity,e(b.lightMap,m.lightMapTransform)),b.aoMap&&(m.aoMap.value=b.aoMap,m.aoMapIntensity.value=b.aoMapIntensity,e(b.aoMap,m.aoMapTransform))}function o(m,b){m.diffuse.value.copy(b.color),m.opacity.value=b.opacity,b.map&&(m.map.value=b.map,e(b.map,m.mapTransform))}function a(m,b){m.dashSize.value=b.dashSize,m.totalSize.value=b.dashSize+b.gapSize,m.scale.value=b.scale}function l(m,b,y,M){m.diffuse.value.copy(b.color),m.opacity.value=b.opacity,m.size.value=b.size*y,m.scale.value=M*.5,b.map&&(m.map.value=b.map,e(b.map,m.uvTransform)),b.alphaMap&&(m.alphaMap.value=b.alphaMap,e(b.alphaMap,m.alphaMapTransform)),b.alphaTest>0&&(m.alphaTest.value=b.alphaTest)}function c(m,b){m.diffuse.value.copy(b.color),m.opacity.value=b.opacity,m.rotation.value=b.rotation,b.map&&(m.map.value=b.map,e(b.map,m.mapTransform)),b.alphaMap&&(m.alphaMap.value=b.alphaMap,e(b.alphaMap,m.alphaMapTransform)),b.alphaTest>0&&(m.alphaTest.value=b.alphaTest)}function h(m,b){m.specular.value.copy(b.specular),m.shininess.value=Math.max(b.shininess,1e-4)}function u(m,b){b.gradientMap&&(m.gradientMap.value=b.gradientMap)}function f(m,b){m.metalness.value=b.metalness,b.metalnessMap&&(m.metalnessMap.value=b.metalnessMap,e(b.metalnessMap,m.metalnessMapTransform)),m.roughness.value=b.roughness,b.roughnessMap&&(m.roughnessMap.value=b.roughnessMap,e(b.roughnessMap,m.roughnessMapTransform)),b.envMap&&(m.envMapIntensity.value=b.envMapIntensity)}function d(m,b,y){m.ior.value=b.ior,b.sheen>0&&(m.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),m.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(m.sheenColorMap.value=b.sheenColorMap,e(b.sheenColorMap,m.sheenColorMapTransform)),b.sheenRoughnessMap&&(m.sheenRoughnessMap.value=b.sheenRoughnessMap,e(b.sheenRoughnessMap,m.sheenRoughnessMapTransform))),b.clearcoat>0&&(m.clearcoat.value=b.clearcoat,m.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(m.clearcoatMap.value=b.clearcoatMap,e(b.clearcoatMap,m.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,e(b.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(m.clearcoatNormalMap.value=b.clearcoatNormalMap,e(b.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===un&&m.clearcoatNormalScale.value.negate())),b.dispersion>0&&(m.dispersion.value=b.dispersion),b.retroreflectivity>0&&(m.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(m.iridescence.value=b.iridescence,m.iridescenceIOR.value=b.iridescenceIOR,m.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(m.iridescenceMap.value=b.iridescenceMap,e(b.iridescenceMap,m.iridescenceMapTransform)),b.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=b.iridescenceThicknessMap,e(b.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),b.transmission>0&&(m.transmission.value=b.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),b.transmissionMap&&(m.transmissionMap.value=b.transmissionMap,e(b.transmissionMap,m.transmissionMapTransform)),m.thickness.value=b.thickness,b.thicknessMap&&(m.thicknessMap.value=b.thicknessMap,e(b.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=b.attenuationDistance,m.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(m.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(m.anisotropyMap.value=b.anisotropyMap,e(b.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=b.specularIntensity,m.specularColor.value.copy(b.specularColor),b.specularColorMap&&(m.specularColorMap.value=b.specularColorMap,e(b.specularColorMap,m.specularColorMapTransform)),b.specularIntensityMap&&(m.specularIntensityMap.value=b.specularIntensityMap,e(b.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,b){b.matcap&&(m.matcap.value=b.matcap)}function g(m,b){let y=t.get(b).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t1(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let S=_.program;n.uniformBlockBinding(x,S)}function c(x,_){let S=r[x.id];S===void 0&&(m(x),S=h(x),r[x.id]=S,x.addEventListener("dispose",y));let A=_.program;n.updateUBOMapping(x,A);let v=t.render.frame;s[x.id]!==v&&(f(x),s[x.id]=v)}function h(x){let _=u();x.__bindingPointIndex=_;let S=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let _=r[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let v=0,w=S.length;v<w;v++){let T=S[v];if(Array.isArray(T))for(let E=0,I=T.length;E<I;E++)d(T[E],v,E,A);else d(T,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,S,A){if(g(x,_,S,A)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let T=0;for(let E=0;E<w.length;E++){let I=w[E],C=b(I);p(I,x.__data,T),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(T+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function p(x,_,S){typeof x=="number"||typeof x=="boolean"?_[0]=x:x.isMatrix3?(_[0]=x.elements[0],_[1]=x.elements[1],_[2]=x.elements[2],_[3]=0,_[4]=x.elements[3],_[5]=x.elements[4],_[6]=x.elements[5],_[7]=0,_[8]=x.elements[6],_[9]=x.elements[7],_[10]=x.elements[8],_[11]=0):ArrayBuffer.isView(x)?_.set(new x.constructor(x.buffer,x.byteOffset,_.length)):x.toArray(_,S)}function g(x,_,S,A){let v=x.value,w=_+"_"+S;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let T=A[w];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(x){let _=x.uniforms,S=0,A=16;for(let w=0,T=_.length;w<T;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let I=0,C=E.length;I<C;I++){let R=E[I],L=Array.isArray(R.value)?R.value:[R.value];for(let D=0,U=L.length;D<U;D++){let B=L[D],O=b(B),k=S%A,G=k%O.boundary,J=k+G;S+=G,J!==0&&A-J<O.storage&&(S+=A-J),R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=O.storage}}}let v=S%A;return v>0&&(S+=A-v),x.__size=S,x.__cache={},this}function b(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(_.boundary=16,_.storage=x.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",x),_}function y(x){let _=x.target;_.removeEventListener("dispose",y);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function M(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:M}}var e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function n1(){return ti===null&&(ti=new Na(e1,16,16,ki,Gn),ti.name="DFG_LUT",ti.minFilter=qe,ti.magFilter=qe,ti.wrapS=xn,ti.wrapT=xn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var gr=class{constructor(t={}){let{canvas:e=Wd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=d,m=new Set([bl,gl,ml]),b=new Set([yn,zn,rs,ss,dl,pl]),y=new Uint32Array(4),M=new Int32Array(4),x=new V,_=null,S=null,A=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,I=null,C=null,R=null,L=null;this._outputColorSpace=Ne;let D=0,U=0,B=null,O=-1,k=null,G=new Le,J=new Le,j=null,ut=new Q(0),nt=0,ft=e.width,H=e.height,X=1,st=null,ct=null,lt=new Le(0,0,ft,H),pt=new Le(0,0,ft,H),zt=!1,Nt=new zs,Dt=!1,Zt=!1,Yt=new Ae,be=new V,Pe=new Le,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Ue(){return B===null?X:1}let q=n;function Je(F,W){return e.getContext(F,W)}let me,z,P,$,tt,it,mt,gt,rt,at,bt,Ot,_t,xt,Ut,Ht,jt,Y,vt,ot,yt,Tt,ht;try{let F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Pn,!1),q===null){let W="webgl2";if(q=Je(W,F),q===null)throw Je(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(F){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),qt("WebGLRenderer: "+F.message),F}function Bt(){me=new cy(q),me.init(),yt=new Z_(q,me),z=new Qv(q,me,t,yt),P=new q_(q,me),z.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),C=q.createFramebuffer(),R=q.createFramebuffer(),L=q.createFramebuffer(),$=new fy(q),tt=new F_,it=new $_(q,me,P,tt,z,yt,$),mt=new ly(T),gt=new pb(q),Tt=new Jv(q,gt),rt=new uy(q,gt,$,Tt),at=new py(q,rt,gt,Tt,$),Y=new dy(q,z,it),Ut=new ty(tt),bt=new L_(T,mt,me,z,Tt,Ut),Ot=new Q_(T,tt),_t=new N_,xt=new V_(me),jt=new Kv(T,mt,P,at,p,l),Ht=new Y_(T,at,z),ht=new t1(q,$,z,P),vt=new jv(q,me,$),ot=new hy(q,me,$),$.programs=bt.programs,T.capabilities=z,T.extensions=me,T.properties=tt,T.renderLists=_t,T.shadowMap=Ht,T.state=P,T.info=$}g!==yn&&(w=new gy(g,e.width,e.height,a,r,s));let Lt=new Sh(T,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let F=me.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=me.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(ft,H,!1))},this.getSize=function(F){return F.set(ft,H)},this.setSize=function(F,W,et=!0){if(Lt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=F,H=W,e.width=Math.floor(F*X),e.height=Math.floor(W*X),et===!0&&(e.style.width=F+"px",e.style.height=W+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,F,W)},this.getDrawingBufferSize=function(F){return F.set(ft*X,H*X).floor()},this.setDrawingBufferSize=function(F,W,et){ft=F,H=W,X=et,e.width=Math.floor(F*et),e.height=Math.floor(W*et),this.setViewport(0,0,F,W)},this.setEffects=function(F){if(g===yn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let W=0;W<F.length;W++)if(F[W].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(G)},this.getViewport=function(F){return F.copy(lt)},this.setViewport=function(F,W,et,Z){F.isVector4?lt.set(F.x,F.y,F.z,F.w):lt.set(F,W,et,Z),P.viewport(G.copy(lt).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(pt)},this.setScissor=function(F,W,et,Z){F.isVector4?pt.set(F.x,F.y,F.z,F.w):pt.set(F,W,et,Z),P.scissor(J.copy(pt).multiplyScalar(X).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(F){P.setScissorTest(zt=F)},this.setOpaqueSort=function(F){st=F},this.setTransparentSort=function(F){ct=F},this.getClearColor=function(F){return F.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(F=!0,W=!0,et=!0){let Z=0;if(F){let K=!1;if(B!==null){let wt=B.texture.format;K=m.has(wt)}if(K){let wt=B.texture.type,Ct=b.has(wt),St=jt.getClearColor(),Pt=jt.getClearAlpha(),Ft=St.r,te=St.g,se=St.b;Ct?(y[0]=Ft,y[1]=te,y[2]=se,y[3]=Pt,q.clearBufferuiv(q.COLOR,0,y)):(M[0]=Ft,M[1]=te,M[2]=se,M[3]=Pt,q.clearBufferiv(q.COLOR,0,M))}else Z|=q.COLOR_BUFFER_BIT}W&&(Z|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&q.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(F){F.setRenderer(this),I=F},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),jt.dispose(),_t.dispose(),xt.dispose(),tt.dispose(),mt.dispose(),at.dispose(),Tt.dispose(),ht.dispose(),bt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",_f),Lt.removeEventListener("sessionend",Mf),er.stop()};function Se(F){F.preventDefault(),ju("WebGLRenderer: Context Lost."),E=!0}function fe(){ju("WebGLRenderer: Context Restored."),E=!1;let F=$.autoReset,W=Ht.enabled,et=Ht.autoUpdate,Z=Ht.needsUpdate,K=Ht.type;Bt(),$.autoReset=F,Ht.enabled=W,Ht.autoUpdate=et,Ht.needsUpdate=Z,Ht.type=K}function Pn(F){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Yn(F){let W=F.target;W.removeEventListener("dispose",Yn),tg(W)}function tg(F){eg(F),tt.remove(F)}function eg(F){let W=tt.get(F).programs;W!==void 0&&(W.forEach(function(et){bt.releaseProgram(et)}),F.isShaderMaterial&&bt.releaseShaderCache(F))}this.renderBufferDirect=function(F,W,et,Z,K,wt){W===null&&(W=Ye);let Ct=K.isMesh&&K.matrixWorld.determinantAffine()<0,St=rg(F,W,et,Z,K);P.setMaterial(Z,Ct);let Pt=et.index,Ft=1;if(Z.wireframe===!0){if(Pt=rt.getWireframeAttribute(et),Pt===void 0)return;Ft=2}let te=et.drawRange,se=et.attributes.position,It=te.start*Ft,de=(te.start+te.count)*Ft;wt!==null&&(It=Math.max(It,wt.start*Ft),de=Math.min(de,(wt.start+wt.count)*Ft)),Pt!==null?(It=Math.max(It,0),de=Math.min(de,Pt.count)):se!=null&&(It=Math.max(It,0),de=Math.min(de,se.count));let Be=de-It;if(Be<0||Be===1/0)return;Tt.setup(K,Z,St,et,Pt);let Te,ye=vt;if(Pt!==null&&(Te=gt.get(Pt),ye=ot,ye.setIndex(Te)),K.isMesh)Z.wireframe===!0?(P.setLineWidth(Z.wireframeLinewidth*Ue()),ye.setMode(q.LINES)):ye.setMode(q.TRIANGLES);else if(K.isLine){let je=Z.linewidth;je===void 0&&(je=1),P.setLineWidth(je*Ue()),K.isLineSegments?ye.setMode(q.LINES):K.isLineLoop?ye.setMode(q.LINE_LOOP):ye.setMode(q.LINE_STRIP)}else K.isPoints?ye.setMode(q.POINTS):K.isSprite&&ye.setMode(q.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let je=K._multiDrawStarts,Rt=K._multiDrawCounts,ln=K._multiDrawCount,ce=Pt?gt.get(Pt).bytesPerElement:1,Sn=tt.get(Z).currentProgram.getUniforms();for(let qn=0;qn<ln;qn++)Sn.setValue(q,"_gl_DrawID",qn),ye.render(je[qn]/ce,Rt[qn])}else if(K.isInstancedMesh)ye.renderInstances(It,Be,K.count);else if(et.isInstancedBufferGeometry){let je=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Rt=Math.min(et.instanceCount,je);ye.renderInstances(It,Be,Rt)}else ye.render(It,Be)};function yf(F,W,et,Z){I!==null&&F.isNodeMaterial&&I.setObject(Z,F),Dt===!0&&Ut.setState(F,et,!1),F.transparent===!0&&F.side===le&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,qo(F,W,Z),F.side=Di,F.needsUpdate=!0,qo(F,W,Z),F.side=le):qo(F,W,Z)}this.compile=function(F,W,et=null){et===null&&(et=F),I!==null&&I.renderStart(F,W,et),S=xt.get(et),S.init(W),v.push(S),et.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),F!==et&&F.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),Zt=this.localClippingEnabled,Dt=Ut.init(this.clippingPlanes,Zt),Dt===!0&&Ut.setGlobalState(this.clippingPlanes,W),I!==null&&Ht.render(S.state.shadowsArray,et,W);let Z=new Set;return F.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let wt=K.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){let St=wt[Ct];yf(St,et,W,K),Z.add(St)}else yf(wt,et,W,K),Z.add(wt)}),S=v.pop(),I!==null&&I.renderEnd(),Z},this.compileAsync=function(F,W,et=null){let Z=this.compile(F,W,et);return new Promise(K=>{function wt(){if(Z.forEach(function(Ct){let Pt=tt.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&Z.delete(Ct)}),Z.size===0){K(F);return}setTimeout(wt,10)}me.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Wc=null;function ng(F){Wc&&Wc(F)}function _f(){er.stop()}function Mf(){er.start()}let er=new Sp;er.setAnimationLoop(ng),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(F){Wc=F,Lt.setAnimationLoop(F),F===null?er.stop():er.start()},Lt.addEventListener("sessionstart",_f),Lt.addEventListener("sessionend",Mf),this.render=function(F,W){if(W!==void 0&&W.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I!==null&&I.renderStart(F,W);let et=Lt.enabled===!0&&Lt.isPresenting===!0,Z=w!==null&&(B===null||et)&&w.begin(T,B);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),F.isScene===!0&&F.onBeforeRender(T,F,W,B),S=xt.get(F,v.length),S.init(W),S.state.textureUnits=it.getTextureUnits(),v.push(S),Yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Nt.setFromProjectionMatrix(Yt,Nn,W.reversedDepth),Zt=this.localClippingEnabled,Dt=Ut.init(this.clippingPlanes,Zt),_=_t.get(F,A.length),_.init(),A.push(_),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=T.xr.getDepthSensingMesh();Ct!==null&&Xc(Ct,W,-1/0,T.sortObjects)}Xc(F,W,0,T.sortObjects),_.finish(),I!==null&&I.updateLights(S.state.lightsArray),T.sortObjects===!0&&_.sort(st,ct),xe=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,xe&&jt.addToRenderList(_,F),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Dt===!0&&Ut.beginShadows();let K=S.state.shadowsArray;if(Ht.render(K,F,W),Dt===!0&&Ut.endShadows(),(Z&&w.hasRenderPass())===!1){let Ct=_.opaque,St=_.transmissive;if(S.setupLights(),W.isArrayCamera){let Pt=W.cameras;if(St.length>0)for(let Ft=0,te=Pt.length;Ft<te;Ft++){let se=Pt[Ft];wf(Ct,St,F,se)}xe&&jt.render(F);for(let Ft=0,te=Pt.length;Ft<te;Ft++){let se=Pt[Ft];Sf(_,F,se,se.viewport)}}else St.length>0&&wf(Ct,St,F,W),xe&&jt.render(F),Sf(_,F,W)}B!==null&&U===0&&(it.updateMultisampleRenderTarget(B),it.updateRenderTargetMipmap(B)),Z&&w.end(T),F.isScene===!0&&F.onAfterRender(T,F,W),Tt.resetDefaultState(),O=-1,k=null,v.pop(),v.length>0?(S=v[v.length-1],it.setTextureUnits(S.state.textureUnits),Dt===!0&&Ut.setGlobalState(T.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,I!==null&&I.renderEnd()};function Xc(F,W,et,Z){if(F.visible===!1)return;if(F.layers.test(W.layers)){if(F.isGroup)et=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(W);else if(F.isLightProbeGrid)S.pushLightProbeGrid(F);else if(F.isLight)S.pushLight(F),F.castShadow&&S.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||F.intersectsFrustum(Nt)){Z&&Pe.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Yt);let Ct=at.update(F),St=F.material;St.visible&&_.push(F,Ct,St,et,Pe.z,null,W)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||F.intersectsFrustum(Nt))){let Ct=at.update(F),St=F.material;if(Z&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Pe.copy(F.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Pe.copy(Ct.boundingSphere.center)),Pe.applyMatrix4(F.matrixWorld).applyMatrix4(Yt)),Array.isArray(St)){let Pt=Ct.groups;for(let Ft=0,te=Pt.length;Ft<te;Ft++){let se=Pt[Ft],It=St[se.materialIndex];It&&It.visible&&_.push(F,Ct,It,et,Pe.z,se,W)}}else St.visible&&_.push(F,Ct,St,et,Pe.z,null,W)}}let wt=F.children;for(let Ct=0,St=wt.length;Ct<St;Ct++)Xc(wt[Ct],W,et,Z)}function Sf(F,W,et,Z){let{opaque:K,transmissive:wt,transparent:Ct}=F;S.setupLightsView(et),Dt===!0&&Ut.setGlobalState(T.clippingPlanes,et),Z&&P.viewport(G.copy(Z)),K.length>0&&Yo(K,W,et),wt.length>0&&Yo(wt,W,et),Ct.length>0&&Yo(Ct,W,et),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function wf(F,W,et,Z){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let It=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new rn(1,1,{generateMipmaps:!0,type:It?Gn:yn,minFilter:Ui,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let wt=S.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||G;wt.setSize(Ct.z*T.transmissionResolutionScale,Ct.w*T.transmissionResolutionScale);let St=T.getRenderTarget(),Pt=T.getActiveCubeFace(),Ft=T.getActiveMipmapLevel();T.setRenderTarget(wt),T.getClearColor(ut),nt=T.getClearAlpha(),nt<1&&T.setClearColor(16777215,.5),T.clear(),xe&&jt.render(et);let te=T.toneMapping;T.toneMapping=kn;let se=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),Dt===!0&&Ut.setGlobalState(T.clippingPlanes,Z),Yo(F,et,Z),it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt),me.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let de=0,Be=W.length;de<Be;de++){let Te=W[de],{object:ye,geometry:je,material:Rt,group:ln}=Te;if(Rt.side===le&&ye.layers.test(Z.layers)){let ce=Rt.side;Rt.side=un,Rt.needsUpdate=!0,Tf(ye,et,Z,je,Rt,ln),Rt.side=ce,Rt.needsUpdate=!0,It=!0}}It===!0&&(it.updateMultisampleRenderTarget(wt),it.updateRenderTargetMipmap(wt))}T.setRenderTarget(St,Pt,Ft),T.setClearColor(ut,nt),se!==void 0&&(Z.viewport=se),T.toneMapping=te}function Yo(F,W,et){let Z=W.isScene===!0?W.overrideMaterial:null;for(let K=0,wt=F.length;K<wt;K++){let Ct=F[K],{object:St,geometry:Pt,group:Ft}=Ct,te=Ct.material;te.allowOverride===!0&&Z!==null&&(te=Z),St.layers.test(et.layers)&&Tf(St,W,et,Pt,te,Ft)}}function Tf(F,W,et,Z,K,wt){I!==null&&K.isNodeMaterial&&I.setObject(F,K),F.onBeforeRender(T,W,et,Z,K,wt),F.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),K.onBeforeRender(T,W,et,Z,F,wt),K.transparent===!0&&K.side===le&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,T.renderBufferDirect(et,W,Z,K,F,wt),K.side=Di,K.needsUpdate=!0,T.renderBufferDirect(et,W,Z,K,F,wt),K.side=le):T.renderBufferDirect(et,W,Z,K,F,wt),F.onAfterRender(T,W,et,Z,K,wt)}function qo(F,W,et){W.isScene!==!0&&(W=Ye);let Z=tt.get(F),K=S.state.lights,wt=S.state.shadowsArray,Ct=K.state.version,St=bt.getParameters(F,K.state,wt,W,et,S.state.lightProbeGridArray),Pt=bt.getProgramCacheKey(St),Ft=Z.programs;Z.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?W.environment:null,Z.fog=W.fog;let te=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;Z.envMap=mt.get(F.envMap||Z.environment,te),Z.envMapRotation=Z.environment!==null&&F.envMap===null?W.environmentRotation:F.envMapRotation,Ft===void 0&&(F.addEventListener("dispose",Yn),Ft=new Map,Z.programs=Ft);let se=Ft.get(Pt);if(se!==void 0){if(Z.currentProgram===se&&Z.lightsStateVersion===Ct)return Af(F,St),se}else St.uniforms=bt.getUniforms(F),I!==null&&F.isNodeMaterial&&I.build(F,et,St),F.onBeforeCompile(St,T),se=bt.acquireProgram(St,Pt),Ft.set(Pt,se),Z.uniforms=St.uniforms;let It=Z.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(It.clippingPlanes=Ut.uniform),Af(F,St),Z.needsLights=og(F),Z.lightsStateVersion=Ct,Z.needsLights&&(It.ambientLightColor.value=K.state.ambient,It.lightProbe.value=K.state.probe,It.sunLights.value=K.state.sun,It.sunLightShadows.value=K.state.sunShadow,It.directionalLights.value=K.state.directional,It.directionalLightShadows.value=K.state.directionalShadow,It.spotLights.value=K.state.spot,It.spotLightShadows.value=K.state.spotShadow,It.rectAreaLights.value=K.state.rectArea,It.ltc_1.value=K.state.rectAreaLTC1,It.ltc_2.value=K.state.rectAreaLTC2,It.pointLights.value=K.state.point,It.pointLightShadows.value=K.state.pointShadow,It.hemisphereLights.value=K.state.hemi,It.sunShadowMatrix.value=K.state.sunShadowMatrix,It.sunShadowCascade.value=K.state.sunShadowCascade,It.directionalShadowMatrix.value=K.state.directionalShadowMatrix,It.spotLightMatrix.value=K.state.spotLightMatrix,It.spotLightMap.value=K.state.spotLightMap,It.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=se,Z.uniformsList=null,se}function Ef(F){if(F.uniformsList===null){let W=F.currentProgram.getUniforms();F.uniformsList=ls.seqWithValue(W.seq,F.uniforms)}return F.uniformsList}function Af(F,W){let et=tt.get(F);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function ig(F,W){if(F.length===0)return null;if(F.length===1)return F[0].texture!==null?F[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let et=0,Z=F.length;et<Z;et++){let K=F[et];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function rg(F,W,et,Z,K){W.isScene!==!0&&(W=Ye),it.resetTextureUnits();let wt=W.fog,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?W.environment:null,St=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ae.workingColorSpace,Pt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ft=mt.get(Z.envMap||Ct,Pt),te=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,se=!!et.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,Be=!!et.morphAttributes.color,Te=kn;Z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Te=T.toneMapping);let ye=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,je=ye!==void 0?ye.length:0,Rt=tt.get(Z),ln=S.state.lights;if(Dt===!0&&(Zt===!0||F!==k)){let we=F===k&&Z.id===O;Ut.setState(Z,F,we)}let ce=!1;Z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ln.state.version||Rt.outputColorSpace!==St||K.isBatchedMesh&&Rt.batching===!1||!K.isBatchedMesh&&Rt.batching===!0||K.isBatchedMesh&&Rt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Rt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Rt.instancing===!1||!K.isInstancedMesh&&Rt.instancing===!0||K.isSkinnedMesh&&Rt.skinning===!1||!K.isSkinnedMesh&&Rt.skinning===!0||K.isInstancedMesh&&Rt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Rt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Rt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Rt.instancingMorph===!1&&K.morphTexture!==null||Rt.envMap!==Ft||Z.fog===!0&&Rt.fog!==wt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ut.numPlanes||Rt.numIntersection!==Ut.numIntersection)||Rt.vertexAlphas!==te||Rt.vertexTangents!==se||Rt.morphTargets!==It||Rt.morphNormals!==de||Rt.morphColors!==Be||Rt.toneMapping!==Te||Rt.morphTargetsCount!==je||!!Rt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Rt.__version=Z.version);let Sn=Rt.currentProgram;ce===!0&&(Sn=qo(Z,W,K),I&&Z.isNodeMaterial&&I.onUpdateProgram(Z,Sn,Rt));let qn=!1,xi=!1,Cr=!1,ve=Sn.getUniforms(),De=Rt.uniforms;if(P.useProgram(Sn.program)&&(qn=!0,xi=!0,Cr=!0),Z.id!==O&&(O=Z.id,xi=!0),Rt.needsLights){let we=ig(S.state.lightProbeGridArray,K);Rt.lightProbeGrid!==we&&(Rt.lightProbeGrid=we,xi=!0)}if(qn||k!==F){P.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),ve.setValue(q,"projectionMatrix",F.projectionMatrix),ve.setValue(q,"viewMatrix",F.matrixWorldInverse);let yi=ve.map.cameraPosition;yi!==void 0&&yi.setValue(q,be.setFromMatrixPosition(F.matrixWorld)),z.logarithmicDepthBuffer&&ve.setValue(q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(q,"isOrthographic",F.isOrthographicCamera===!0),k!==F&&(k=F,xi=!0,Cr=!0)}if(Rt.needsLights&&(ln.state.sunShadowMap.length>0&&ve.setValue(q,"sunShadowMap",ln.state.sunShadowMap,it),ln.state.directionalShadowMap.length>0&&ve.setValue(q,"directionalShadowMap",ln.state.directionalShadowMap,it),ln.state.spotShadowMap.length>0&&ve.setValue(q,"spotShadowMap",ln.state.spotShadowMap,it),ln.state.pointShadowMap.length>0&&ve.setValue(q,"pointShadowMap",ln.state.pointShadowMap,it)),K.isSkinnedMesh){ve.setOptional(q,K,"bindMatrix"),ve.setOptional(q,K,"bindMatrixInverse");let we=K.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ve.setValue(q,"boneTexture",we.boneTexture,it))}K.isBatchedMesh&&(ve.setOptional(q,K,"batchingTexture"),ve.setValue(q,"batchingTexture",K._matricesTexture,it),ve.setOptional(q,K,"batchingIdTexture"),ve.setValue(q,"batchingIdTexture",K._indirectTexture,it),ve.setOptional(q,K,"batchingColorTexture"),K._colorsTexture!==null&&ve.setValue(q,"batchingColorTexture",K._colorsTexture,it));let vi=et.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Y.update(K,et,Sn),(xi||Rt.receiveShadow!==K.receiveShadow)&&(Rt.receiveShadow=K.receiveShadow,ve.setValue(q,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&W.environment!==null&&(De.envMapIntensity.value=W.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=n1()),xi){if(ve.setValue(q,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&sg(De,Cr),wt&&Z.fog===!0&&Ot.refreshFogUniforms(De,wt),Ot.refreshMaterialUniforms(De,Z,X,H,S.state.transmissionRenderTarget[F.id]),Rt.needsLights&&Rt.lightProbeGrid){let we=Rt.lightProbeGrid;De.probesSH.value=we.texture,De.probesMin.value.copy(we.boundingBox.min),De.probesMax.value.copy(we.boundingBox.max),De.probesResolution.value.copy(we.resolution)}ls.upload(q,Ef(Rt),De,it)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ls.upload(q,Ef(Rt),De,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(q,"center",K.center),ve.setValue(q,"modelViewMatrix",K.modelViewMatrix),ve.setValue(q,"normalMatrix",K.normalMatrix),ve.setValue(q,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let we=Z.uniformsGroups;for(let yi=0,Pr=we.length;yi<Pr;yi++){let Cf=we[yi];ht.update(Cf,Sn),ht.bind(Cf,Sn)}}return Sn}function sg(F,W){F.ambientLightColor.needsUpdate=W,F.lightProbe.needsUpdate=W,F.sunLights.needsUpdate=W,F.sunLightShadows.needsUpdate=W,F.directionalLights.needsUpdate=W,F.directionalLightShadows.needsUpdate=W,F.pointLights.needsUpdate=W,F.pointLightShadows.needsUpdate=W,F.spotLights.needsUpdate=W,F.spotLightShadows.needsUpdate=W,F.rectAreaLights.needsUpdate=W,F.hemisphereLights.needsUpdate=W}function og(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(F,W,et){let Z=tt.get(F);Z.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),tt.get(F.texture).__webglTexture=W,tt.get(F.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:et,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,W){let et=tt.get(F);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(F,W=0,et=0){B=F,D=W,U=et;let Z=null,K=!1,wt=!1;if(F){let St=tt.get(F);if(St.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(q.FRAMEBUFFER,St.__webglFramebuffer),G.copy(F.viewport),J.copy(F.scissor),j=F.scissorTest,P.viewport(G),P.scissor(J),P.setScissorTest(j),O=-1;return}else if(St.__webglFramebuffer===void 0)it.setupRenderTarget(F);else if(St.__hasExternalTextures)it.rebindTextures(F,tt.get(F.texture).__webglTexture,tt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let te=F.depthTexture;if(St.__boundDepthTexture!==te){if(te!==null&&tt.has(te)&&(F.width!==te.image.width||F.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(F)}}let Pt=F.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(wt=!0);let Ft=tt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ft[W])?Z=Ft[W][et]:Z=Ft[W],K=!0):F.samples>0&&it.useMultisampledRTT(F)===!1?Z=tt.get(F).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[et]:Z=Ft,G.copy(F.viewport),J.copy(F.scissor),j=F.scissorTest}else G.copy(lt).multiplyScalar(X).floor(),J.copy(pt).multiplyScalar(X).floor(),j=zt;if(et!==0&&(Z=C),P.bindFramebuffer(q.FRAMEBUFFER,Z)&&P.drawBuffers(F,Z),P.viewport(G),P.scissor(J),P.setScissorTest(j),K){let St=tt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,St.__webglTexture,et)}else if(wt){let St=W;for(let Pt=0;Pt<F.textures.length;Pt++){let Ft=tt.get(F.textures[Pt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Pt,Ft.__webglTexture,et,St)}}else if(F!==null&&et!==0){let St=tt.get(F.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,St.__webglTexture,et)}O=-1};function Rf(F){let W=tt.get(F);return(W.__readFormat!==F.format||W.__readType!==F.type)&&(W.__readFormat=F.format,W.__readType=F.type,W.__formatReadable=z.textureFormatReadable(F.format),W.__typeReadable=z.textureTypeReadable(F.type)),W}this.readRenderTargetPixels=function(F,W,et,Z,K,wt,Ct,St=0){if(!(F&&F.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=tt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){P.bindFramebuffer(q.FRAMEBUFFER,Pt);try{let Ft=F.textures[St],te=Ft.format,se=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+St);let It=Rf(Ft);if(It.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=F.width-Z&&et>=0&&et<=F.height-K&&q.readPixels(W,et,Z,K,yt.convert(te),yt.convert(se),wt)}finally{let Ft=B!==null?tt.get(B).__webglFramebuffer:null;P.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(F,W,et,Z,K,wt,Ct,St=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=tt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(W>=0&&W<=F.width-Z&&et>=0&&et<=F.height-K){P.bindFramebuffer(q.FRAMEBUFFER,Pt);let Ft=F.textures[St],te=Ft.format,se=Ft.type;F.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+St);let It=Rf(Ft);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,de),q.bufferData(q.PIXEL_PACK_BUFFER,wt.byteLength,q.STREAM_READ),q.readPixels(W,et,Z,K,yt.convert(te),yt.convert(se),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Be=B!==null?tt.get(B).__webglFramebuffer:null;P.bindFramebuffer(q.FRAMEBUFFER,Be);let Te=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Yd(q,Te,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,de),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,wt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(de),q.deleteSync(Te),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,W=null,et=0){let Z=Math.pow(2,-et),K=Math.floor(F.image.width*Z),wt=Math.floor(F.image.height*Z),Ct=W!==null?W.x:0,St=W!==null?W.y:0;it.setTexture2D(F,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,Ct,St,K,wt),P.unbindTexture()},this.copyTextureToTexture=function(F,W,et=null,Z=null,K=0,wt=0){let Ct,St,Pt,Ft,te,se,It,de,Be,Te=F.isCompressedTexture?F.mipmaps[wt]:F.image;if(et!==null)Ct=et.max.x-et.min.x,St=et.max.y-et.min.y,Pt=et.isBox3?et.max.z-et.min.z:1,Ft=et.min.x,te=et.min.y,se=et.isBox3?et.min.z:0;else{let De=Math.pow(2,-K);Ct=Math.floor(Te.width*De),St=Math.floor(Te.height*De),F.isDataArrayTexture?Pt=Te.depth:F.isData3DTexture?Pt=Math.floor(Te.depth*De):Pt=1,Ft=0,te=0,se=0}Z!==null?(It=Z.x,de=Z.y,Be=Z.z):(It=0,de=0,Be=0);let ye=yt.convert(W.format),je=yt.convert(W.type),Rt;W.isData3DTexture?(it.setTexture3D(W,0),Rt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Rt=q.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Rt=q.TEXTURE_2D),P.activeTexture(q.TEXTURE0),P.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let ln=P.getParameter(q.UNPACK_ROW_LENGTH),ce=P.getParameter(q.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(q.UNPACK_SKIP_PIXELS),qn=P.getParameter(q.UNPACK_SKIP_ROWS),xi=P.getParameter(q.UNPACK_SKIP_IMAGES);P.pixelStorei(q.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(q.UNPACK_SKIP_ROWS,te),P.pixelStorei(q.UNPACK_SKIP_IMAGES,se);let Cr=F.isDataArrayTexture||F.isData3DTexture,ve=W.isDataArrayTexture||W.isData3DTexture;if(F.isDepthTexture){let De=tt.get(F),vi=tt.get(W),we=tt.get(De.__renderTarget),yi=tt.get(vi.__renderTarget);P.bindFramebuffer(q.READ_FRAMEBUFFER,we.__webglFramebuffer),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Pr=0;Pr<Pt;Pr++)Cr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(F).__webglTexture,K,se+Pr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,wt,Be+Pr)),q.blitFramebuffer(Ft,te,Ct,St,It,de,Ct,St,q.DEPTH_BUFFER_BIT,q.NEAREST);P.bindFramebuffer(q.READ_FRAMEBUFFER,null),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(K!==0||F.isRenderTargetTexture||tt.has(F)){let De=tt.get(F),vi=tt.get(W);P.bindFramebuffer(q.READ_FRAMEBUFFER,R),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,L);for(let we=0;we<Pt;we++)Cr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,De.__webglTexture,K,se+we):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,De.__webglTexture,K),ve?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vi.__webglTexture,wt,Be+we):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vi.__webglTexture,wt),K!==0?q.blitFramebuffer(Ft,te,Ct,St,It,de,Ct,St,q.COLOR_BUFFER_BIT,q.NEAREST):ve?q.copyTexSubImage3D(Rt,wt,It,de,Be+we,Ft,te,Ct,St):q.copyTexSubImage2D(Rt,wt,It,de,Ft,te,Ct,St);P.bindFramebuffer(q.READ_FRAMEBUFFER,null),P.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ve?F.isDataTexture||F.isData3DTexture?q.texSubImage3D(Rt,wt,It,de,Be,Ct,St,Pt,ye,je,Te.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,wt,It,de,Be,Ct,St,Pt,ye,Te.data):q.texSubImage3D(Rt,wt,It,de,Be,Ct,St,Pt,ye,je,Te):F.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,wt,It,de,Ct,St,ye,je,Te.data):F.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,wt,It,de,Te.width,Te.height,ye,Te.data):q.texSubImage2D(q.TEXTURE_2D,wt,It,de,Ct,St,ye,je,Te);P.pixelStorei(q.UNPACK_ROW_LENGTH,ln),P.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(q.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(q.UNPACK_SKIP_ROWS,qn),P.pixelStorei(q.UNPACK_SKIP_IMAGES,xi),wt===0&&W.generateMipmaps&&q.generateMipmap(Rt),P.unbindTexture()},this.initRenderTarget=function(F){tt.get(F).__webglFramebuffer===void 0&&it.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?it.setTextureCube(F,0):F.isData3DTexture?it.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?it.setTexture2DArray(F,0):it.setTexture2D(F,0),P.unbindTexture()},this.resetState=function(){D=0,U=0,B=null,P.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function nc(i,t=0){let e=(i.rotation??0)*Math.PI/180,n=Math.cos(e),r=Math.sin(e),s=us(i,t+i.h/2);return[0,i.h].flatMap(o=>[[-i.w/2,-i.d/2],[i.w/2,-i.d/2],[i.w/2,i.d/2],[-i.w/2,i.d/2]].map(([a,l])=>s(i.x+a*n-l*r,t+o,i.z+a*r+l*n)))}function Pp(i){let t=nc({...i,x:0,z:0}).map(([r,,s])=>[r,s]).sort((r,s)=>r[0]-s[0]||r[1]-s[1]),e=(r,s,o)=>(s[0]-r[0])*(o[1]-r[1])-(s[1]-r[1])*(o[0]-r[0]),n=r=>{let s=[];for(let o of r){for(;s.length>1&&e(s[s.length-2],s[s.length-1],o)<=1e-10;)s.pop();s.push(o)}return s.slice(0,-1)};return[...n(t),...n([...t].reverse())].map(([r,s])=>[r+i.x,s+i.z])}function us(i,t){let e=(i.rotation_x??0)*Math.PI/180,n=(i.rotation_z??0)*Math.PI/180;if(!e&&!n)return(u,f,d)=>[u,f,d];let r=(i.rotation??0)*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=Math.cos(e),l=Math.sin(e),c=Math.cos(n),h=Math.sin(n);return(u,f,d)=>{let p=u-i.x,g=d-i.z,m=p*s+g*o,b=f-t,y=-p*o+g*s,M=b*a-y*l,x=b*l+y*a,_=m*c-M*h,S=m*h+M*c;return[i.x+_*s-x*o,t+S,i.z+_*o+x*s]}}function Rn(i,t,e,n){if(!e.rotation_x&&!e.rotation_z)return;let r=us(e,n);for(let s=t;s<i.length;s+=3){let[o,a,l]=r(i[s],i[s+1],i[s+2]);i[s]=o,i[s+1]=a,i[s+2]=l}}function Ip(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Lp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var i1=[],ic=new Map,r1=0,Fp=!1;function Dp(i){Fp=i}function s1(i){let t=_e(i)?.product?.base??i;return[...ic.entries()].filter(([,e])=>e.product?.base===t).map(([e,n])=>({type:e,item:n}))}function br(i){let t=_e(i.type);if(!t)return;let e=t.product?.base??i.type;if(!Fp)return _e(e)??t;let n=s1(i.type);return n.find(r=>r.type===i.product_variant)?.item??(t.product?t:n.find(r=>r.item.product?.default)?.item??t)}function vo(i){i1=i,ic=new Map(i.flatMap(t=>t.items.map(e=>[o1(t.id,e.id),e]))),r1++}function o1(i,t){return`pack:${i}:${t}`}function a1(i){return i.startsWith("pack:")}var l1={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function wh(i){return _e(i)?.parts.find(t=>t.screen)}function _e(i){if(!a1(i))return;let t=ic.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=l1[e];return r?ic.get(`pack:${r}:${n.join(":")}`):void 0}function Ce(i,t){let e=_e(t.type),n=pn(i,t.x,t.z);if(t.mount_y!=null)return n+t.mount_y;if(t.type==="lamp_wall")return n+rc;if(Np.has(t.type))return Math.max(n,hs(i,t.x,t.z)-Op(t.type,t.h));if(t.type==="led_strip")return hs(i,t.x,t.z)-.04-Math.max(.02,t.h);switch(e?.mount){case"surface":return Up(i,t.x,t.z);case"wall":return n+(e.wall_y??1);case"ceiling":return hs(i,t.x,t.z)-t.h;default:return n+(e?0:yo(t))}}var sc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function zi(i){return i==="hedge"||i==="fence"||i==="pergola"}function _o(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function u1(i,t,e,n){return fs(i)+(t.offset??0)+sc[t.type]-_o(t,e,n)}function fs(i){return i.elevation>.3?0:-.2}function Bp(i,t,e){let n=(i.outdoor??[]).filter(s=>!zi(s.type)&&s.type!=="pool"&&Xt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?u1(i,r,t,e):fs(i)}function oc(i,t){return fs(i)+(t.offset??0)+(t.above?zp(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function h1(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?zp(i):1.5}function Th(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!zi(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Xt(n,e.points)))}function kp(i,t){return!t.above&&!Th(i,t)?ac(i,t)-.05:oc(i,t)-h1(t)}function ac(i,t){return oc(i,t)-.15}function zp(i){return i.height&&i.height>.3?i.height:1.2}var f1={type:"none",pitch:35,overhang:.4},TE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...f1}};var Vp=.3;var Gp=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),rc=1.75;var Np=new Set(["lamp_downlight","lamp_spot"]);function Op(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var Hp=new Set(["stairs","stairs_u"]);function Wp(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function Xp(i){return Gp.has(i)||!!_e(i)?.light}var Eh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function yo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Up(i,t,e){let n=pn(i,t,e);for(let r of i.furniture)!(Eh.has(r.type)||_e(r.type)?.surface)||!Xt([t,e],Gi(r))||(n=Math.max(n,pn(i,r.x,r.z)+(r.mount_y??0)+r.h));return n}var c1=new Set([...Gp,"radiator","ac_unit","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var d1=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],p1=["standard","bars","glass_wall"];function xr(i,t){return i.type==="door"?i.style&&d1.includes(i.style)?i.style:t?"front":"interior":i.style&&p1.includes(i.style)?i.style:"standard"}function Yp(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function qp(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function _n(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Mo(i){return Math.abs(_n(i))}function Vi(i){let t=_n(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function $p(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Zp(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Gi(i){if(i.rotation_x||i.rotation_z)return Pp(i);let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Xt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function ge(i,t){return Ah(i,t)+(t?.floor_offset??0)}function Ah(i,t){return t?.wall_offset??(t?.elevation??i.elevation)-i.elevation}function di(i,t){return t?.ceiling_height??t?.height??i.height}function So(i,t,e){return i.rooms.find(n=>Xt([t,e],n.points))}function pn(i,t,e){return ge(i,So(i,t,e))}function hs(i,t,e){let n=So(i,t,e);return ge(i,n)+di(i,n)}function Ge(i){let t=i.rooms.filter(e=>e.points.length>=3);return t.length?Math.max(...t.map(e=>i.elevation+ge(i,e)+di(i,e))):i.elevation+i.height}var Kp=i=>Math.round(i*1e3)/1e3;function m1(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Jp(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Xt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=_n(a)>=0?1:-1,c=Gi({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Gi({...t,x:h,z:u});for(let p=0;p<a.length;p++){let g=a[p],m=a[(p+1)%a.length],b=Math.hypot(m[0]-g[0],m[1]-g[1]);if(b<.05)continue;let y=[(m[0]-g[0])/b,(m[1]-g[1])/b],M=[-y[1]*l,y[0]*l],x=m1(i,o.id,g,m)?r/2:0,_=0;d.forEach((S,A)=>{let v=(S[0]-g[0])*y[0]+(S[1]-g[1])*y[1];if(v<-.01||v>b+.01)return;let w=(S[0]-g[0])*M[0]+(S[1]-g[1])*M[1]-x,T=c[A];(T[0]-g[0])*M[0]+(T[1]-g[1])*M[1]-x<-s||w<_&&(_=w)}),_<-1e-4&&(h-=M[0]*_,u-=M[1]*_)}}return[Kp(h),Kp(u)]}var Xe=(i,t)=>[i[0]-t[0],i[1]-t[1]],Hi=(i,t)=>[i[0]+t[0],i[1]+t[1]],pi=(i,t)=>[i[0]*t,i[1]*t],To=(i,t)=>i[0]*t[0]+i[1]*t[1],ds=(i,t)=>i[0]*t[1]-i[1]*t[0],wo=i=>Math.hypot(i[0],i[1]),ni=i=>{let t=wo(i)||1;return[i[0]/t,i[1]/t]},jp=i=>[-i[1],i[0]],Qp=i=>[i[1],-i[0]];function Wi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),o=[],a=v=>{for(let w=0;w<o.length;w++)if(Math.abs(o[w][0]-v[0])<=n&&Math.abs(o[w][1]-v[1])<=n)return w;return o.push([v[0],v[1]]),o.length-1},l=[];for(let v of i){let w=v.points;if(w.length<3||Math.abs(_n(w))<1e-6)continue;let T=_n(w)>0,E=w.map(a);for(let I=0;I<w.length;I++){let C=E[I],R=E[(I+1)%w.length];C!==R&&l.push(T?{u:C,v:R,room:v.id,edge:I,forward:!0}:{u:R,v:C,room:v.id,edge:I,forward:!1})}}let c=s.map(v=>[a(v.a),a(v.b)]),h=new Set;for(let v of i){let w=v.points;w.length<3||(v.wall_splits??[]).forEach((T,E)=>{if(!T||E>=w.length)return;let I=w[E],C=Xe(w[(E+1)%w.length],I),R=wo(C);for(let L of T)L>n&&L<R-n&&h.add(a(Hi(I,pi(C,L/R))))})}let u=[];for(let v of l){let w=o[v.u],T=o[v.v],E=Xe(T,w),I=wo(E),C=pi(E,1/I),R=[];for(let D=0;D<o.length;D++){if(D===v.u||D===v.v)continue;let U=Xe(o[D],w),B=To(U,C);B<=n||B>=I-n||Math.abs(ds(C,U))<=n&&R.push({t:B,id:D})}R.sort((D,U)=>D.t-U.t);let L=[{t:0,id:v.u},...R,{t:I,id:v.v}];for(let D=0;D+1<L.length;D++){let U=L[D],B=L[D+1],O=v.forward?U.t:I-B.t,k=v.forward?B.t:I-U.t;u.push({u:U.id,v:B.id,room:v.room,edge:v.edge,t0:O,t1:k})}}let f=new Map;for(let v of u){let w=v.u<v.v?`${v.u}-${v.v}`:`${v.v}-${v.u}`,T=f.get(w);T||f.set(w,T=[]),T.push(v)}let d=v=>({room_id:v.room,edge:v.edge,t0:v.t0,t1:v.t1}),p=new Map;for(let v of u){let w=`${v.room}:${v.edge}`;p.set(w,[...p.get(w)??[],v.t0].sort((T,E)=>T-E))}let g=v=>{let w=i.find(E=>E.id===v.room)?.wall_heights?.[v.edge];if(!Array.isArray(w))return w;let T=p.get(`${v.room}:${v.edge}`)??[];return w[T.indexOf(v.t0)]??null},m=v=>{let w=v.map(g).filter(E=>typeof E=="number"&&E>0);if(w.length)return Math.min(...w);let T=v.map(E=>i.find(I=>I.id===E.room)?.ceiling_height);return T.every(E=>typeof E=="number"&&E>0)?Math.max(...T):void 0},b=v=>{let w=v.map(T=>i.find(E=>E.id===T.room)?.wall_thickness?.[T.edge]).filter(T=>typeof T=="number"&&T>0);return w.length?Math.max(...w):void 0},y=v=>v.some(w=>g(w)===0),M=[],x=[];for(let v of f.values()){let w=v[0],T=v.find(E=>E!==w&&E.u===w.v&&E.v===w.u&&E.room!==w.room);for(let E of v)E!==w&&E!==T&&E.room!==w.room&&r.push(`overlap:${w.room}:${E.room}`);if(y(T?[w,T]:[w])){T&&M.push([w.room,T.room]);continue}if(T){let E=b([w,T])??t.interior;x.push({a:w.u,b:w.v,left:E/2,right:E/2,exterior:!1,roomLeft:w.room,roomRight:T.room,sources:[d(w),d(T)],height:m([w,T])})}else x.push({a:w.u,b:w.v,left:0,right:b([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[d(w)],height:m([w])})}let _=v=>ni(Xe(o[v.b],o[v.a]));for(let v of x){if(v.exterior||v.free)continue;let w=new Set;for(let E of[v.a,v.b])for(let I of x)!I.exterior||I.free||I.a!==E&&I.b!==E||Math.abs(ds(_(v),_(I)))>1e-6||(I.roomLeft===v.roomLeft?w.add("left"):I.roomLeft===v.roomRight&&w.add("right"));if(w.size!==1)continue;let T=v.left+v.right;w.has("left")?(v.left=0,v.right=T):(v.left=T,v.right=0)}s.forEach((v,w)=>{let[T,E]=c[w];if(T===E)return;let I=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],C=i.find(D=>D.points.length>=3&&Xt(I,D.points))?.id??null,R=(v.thickness??t.interior)/2,L=typeof v.height=="number"&&v.height>0?v.height:void 0;x.push({free:v.id,a:T,b:E,left:R,right:R,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:L})}),x=b1(x,o,h);let S=v1(x,o);return{walls:x.map((v,w)=>{let T=o[v.a],E=o[v.b],I=S.get(`${w}:a`),C=S.get(`${w}:b`),R=y1([I.right,C.left,E,C.right,I.left,T],1e-6);return{id:g1(T,E),a:[T[0],T[1]],b:[E[0],E[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:R,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(r)],open:M}}function g1(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function tm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function b1(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=tm(l)),c.a!==o&&(c=tm(c)),l.a===c.b)continue;let h=ni(Xe(t[l.b],t[l.a])),u=ni(Xe(t[c.b],t[c.a]));if(Math.abs(ds(h,u))>1e-6||To(h,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:x1(l.sources,c.sources)},d=n.filter((p,g)=>g!==a[0]&&g!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function x1(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function v1(i,t){let e=new Map;i.forEach((r,s)=>{let o=ni(Xe(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:pi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Hi(o,pi(jp(c.d),c.left)),right:Hi(o,pi(Qp(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=Hi(o,pi(jp(h.d),h.left)),d=Hi(o,pi(Qp(u.d),u.right)),p=ds(h.d,u.d);if(Math.abs(p)<1e-4)continue;let g=ds(Xe(d,f),u.d)/p,m=Hi(f,pi(h.d,g));wo(Xe(m,o))>l||(n.get(h.key).left=m,n.get(u.key).right=m)}}return n}function y1(i,t){let e=i.filter((r,s)=>wo(Xe(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Xe(o,s),c=Xe(a,o);if(Math.abs(ds(ni(l),ni(c)))<1e-7&&To(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Rh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=ni(Xe(r,n));return Hi(n,pi(s,e))}function vr(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ni(Xe(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Hi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function yr(i,t,e){if(!t.wall)return _1(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Rh(e.room,0,t.offset);return{wall:n,s:To(Xe(r,n.a),ni(Xe(n.b,n.a)))}}function _1(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Rh(t,e,n);return{wall:r,s:To(Xe(o,r.a),ni(Xe(r.b,r.a)))}}return null}var Xi=(i,t,e)=>(t[0]-i[0])*(e[1]-i[1])-(t[1]-i[1])*(e[0]-i[0]);function Yi(i){return i.reduce((t,e,n)=>{let r=i[(n+1)%i.length];return t+e[0]*r[1]-r[0]*e[1]},0)/2}var M1=(i,t,e)=>Math.abs(Xi(t,e,i))<1e-8&&i[0]>=Math.min(t[0],e[0])-1e-8&&i[0]<=Math.max(t[0],e[0])+1e-8&&i[1]>=Math.min(t[1],e[1])-1e-8&&i[1]<=Math.max(t[1],e[1])+1e-8;function Eo(i,t){let e=!1;for(let n=0,r=i.length-1;n<i.length;r=n++){let s=i[r],o=i[n];if(M1(t,s,o))return!0;s[1]>t[1]!=o[1]>t[1]&&t[0]<(o[0]-s[0])*(t[1]-s[1])/(o[1]-s[1])+s[0]&&(e=!e)}return e}function em(i){let t=i.map((r,s)=>s);Yi(i)<0&&t.reverse();let e=[],n=i.length*i.length;for(;t.length>3&&n-- >0;){let r=!1;for(let s=0;s<t.length;s++){let o=t[(s+t.length-1)%t.length],a=t[s],l=t[(s+1)%t.length],c=Xi(i[o],i[a],i[l]);if(Math.abs(c)<1e-8){t.splice(s,1),r=!0;break}if(!(c<0||t.some(h=>h!==o&&h!==a&&h!==l&&Xi(i[o],i[a],i[h])>=-1e-8&&Xi(i[a],i[l],i[h])>=-1e-8&&Xi(i[l],i[o],i[h])>=-1e-8))){e.push([o,a,l]),t.splice(s,1),r=!0;break}}if(!r)return[]}return t.length===3&&Math.abs(Xi(i[t[0]],i[t[1]],i[t[2]]))>1e-8&&e.push([...t]),e}function nm(i,t){let e=i,n=Yi(t)<0?-1:1;for(let r=0;r<t.length&&e.length;r++){let s=t[r],o=t[(r+1)%t.length],a=e;e=[];for(let l=0;l<a.length;l++){let c=a[l],h=a[(l+1)%a.length],u=n*Xi(s,o,c),f=n*Xi(s,o,h);if(u>=-1e-8&&e.push(c),u>=-1e-8!=f>=-1e-8){let d=u/(u-f);e.push([c[0]+(h[0]-c[0])*d,c[1]+(h[1]-c[1])*d,c[2]+(h[2]-c[2])*d])}}}return e.filter((r,s)=>{let o=e[(s+1)%e.length];return Math.hypot(r[0]-o[0],r[1]-o[1])>1e-8})}function lc(i,t,e){let n=[0,1],r=e[0]-t[0],s=e[1]-t[1];for(let a=0;a<i.length;a++){let l=i[a],c=i[(a+1)%i.length],h=c[0]-l[0],u=c[1]-l[1],f=r*u-s*h;if(Math.abs(f)<1e-8)continue;let d=((l[0]-t[0])*u-(l[1]-t[1])*h)/f,p=((l[0]-t[0])*s-(l[1]-t[1])*r)/f;d>1e-8&&d<1-1e-8&&p>=-1e-8&&p<=1+1e-8&&n.push(d)}n.sort((a,l)=>a-l);let o=[];for(let a=1;a<n.length;a++){let l=n[a-1],c=n[a],h=(l+c)/2;c-l>1e-8&&Eo(i,[t[0]+r*h,t[1]+s*h])&&o.push([l,c])}return o}function im(i,t){return t.every((e,n)=>Eo(i,e)&&lc(i,e,t[(n+1)%t.length]).reduce((r,[s,o])=>r+o-s,0)>1-1e-8)}var Ro=Math.PI/180;function Hn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function Mn(i){let t=Hn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ro),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ro);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=am(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var S1=.14;function sm(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function om(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Xt([t,e],s.points))continue;let[h,u]=mi(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),g=((f?null:ms(qi(s,{u0:d,u1:d,a:d,b:d}),h,u))??Mn(s).y(u))-S1;n=n===null?g:Math.max(n,g)}return n}function Ch(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=_n(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=rm([a[0]-o[0],a[1]-o[1]]),h=rm([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],p=u[1]+f[1],g=Math.hypot(d,p);if(g<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+p*u[1])/g,b=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/g*t*b,a[1]+p/g*t*b])}return r}function rm(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Co(i,t){if(i.points&&i.points.length>=3)return Ch(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}var Ao=Math.tan(30*Ro);function am(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Ao*(i-o+s))/(2*Ao))),h=a+(c-s)*Ao;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*Ao:f<=i-o?l+(i-o-f)*Ao:e+(i-f)*r}}function qi(i,t){let e=w1(i,t);if(!i.points||i.points.length<3)return e;let n=Co(i,Math.max(0,Math.min(t.u0,t.u1,t.a,t.b))).map(([c,h])=>mi(i,c,h)),r=em(n),s=e.faces.flatMap(c=>r.map(h=>nm(c,h.map(u=>n[u])))).filter(c=>c.length>=3&&Math.abs(Yi(c))>1e-8),o=(c,h,u)=>[c[0]+(h[0]-c[0])*u,c[1]+(h[1]-c[1])*u,c[2]+(h[2]-c[2])*u],a=e.ridges.flatMap(([c,h])=>lc(n,c,h).map(([u,f])=>[o(c,h,u),o(c,h,f)])),l=[];return n.forEach((c,h)=>{let u=n[(h+1)%n.length],f=[0,...e.faces.flatMap(d=>lc(d.map(([p,g])=>[p,g]),c,u).flat())].filter(d=>d<1-1e-8).sort((d,p)=>d-p);for(let d=0;d<f.length;d++){if(d&&f[d]-f[d-1]<1e-8)continue;let p=f[d],g=c[0]+(u[0]-c[0])*p,m=c[1]+(u[1]-c[1])*p;l.push([g,m,ms(e,g,m)??Mn(i).y(m)])}}),{faces:s,rim:l,ridges:a,gable:null}}function w1(i,t){let e=Hn(i),n=Mn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(y,M)=>[y,M,n.y(M)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Ro),g=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Ro);if(i.shape==="pent"){let y=[h,u,f,d];return{faces:[y],rim:y,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let y=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),M=[e.u0+y,n.vr,n.rh],x=[e.u1-y,n.vr,n.rh],_=i.shape==="pyramid"?[[h,u,M],[u,f,M],[f,d,M],[d,h,M]]:[[h,u,x,M],[M,x,f,d],[d,h,M],[u,f,x]],S=i.shape==="pyramid"?[[h,M],[d,M],[u,M],[f,M]]:[[M,x],[h,M],[d,M],[u,x],[f,x]];return{faces:_,rim:[h,u,f,d],ridges:S,gable:null}}if(i.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),M=y+(n.rh-y)*.55,x=p>1e-6?Math.min(n.vr,(M-i.eave_a)/p):n.vr,_=g>1e-6?Math.max(n.vr,r-(M-i.eave_b)/g):n.vr,S=Math.min((e.u1-e.u0)/2-.1,(n.rh-M)/Math.max(.2,p)),A=[e.u0+S,n.vr,n.rh],v=[e.u1-S,n.vr,n.rh],w=[a,x,M],T=[a,_,M],E=[l,x,M],I=[l,_,M];return{faces:[[h,u,E,v,A,w],[A,v,I,f,d,T],[T,w,A],[E,I,v]],rim:[h,u,E,I,f,d,T,w],ridges:[[A,v],[w,A],[T,A],[E,v],[I,v]],gable:[[0,n.y(0)],[x,M],[_,M],[r,n.y(r)]]}}if(i.shape==="mansard"){let y=am(r,i.eave_a,i.eave_b,p,g),M=[a,y.vla,y.yla],x=[l,y.vla,y.yla],_=[a,r-y.vlb,y.ylb],S=[l,r-y.vlb,y.ylb],A=[a,y.vr,y.rh],v=[l,y.vr,y.rh];return{faces:[[h,u,x,M],[M,x,v,A],[A,v,S,_],[_,S,f,d]],rim:[h,u,x,v,S,f,d,_,A,M],ridges:[[A,v],[M,x],[_,S]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],b=[l,n.vr,n.rh];return{faces:[[h,u,b,m],[m,b,f,d]],rim:[h,u,b,f,d,m],ridges:[[m,b]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ms(i,t,e){let n=null;for(let r of i.faces){if(!Eo(r.map(y=>[y[0],y[1]]),[t,e]))continue;let[s,o]=r,a=r.slice(2).find(y=>Math.abs((o[0]-s[0])*(y[1]-s[1])-(o[1]-s[1])*(y[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],p=c*d-h*f,g=h*u-l*d,m=l*f-c*u;if(Math.abs(g)<1e-9)continue;let b=s[2]-(p*(t-s[0])+m*(e-s[1]))/g;n=n===null?b:Math.min(n,b)}return n}function mi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function T1(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function cc(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=T1(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Ph(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Hn(t),n=Mn(t).rh,r=qi(i,{u0:0,u1:0,a:0,b:0}),s=Mn(i),o=p=>{let[g,m]=e.at(p,e.w/2),[b,y]=mi(i,g,m);return ms(r,b,y)??s.y(y)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let p=.5;p<u;p+=.05)if(o(l+h*p)>=n-.02){f=l+h*p;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function lm(i,t){let e=Ph(i,t),n=Hn(e),r=Mn(e),s=qi(i,{u0:0,u1:0,a:0,b:0}),o=Mn(i),a=f=>{let[d,p]=n.at(f,n.w/2),[g,m]=mi(i,d,p);return ms(s,g,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,p=c*(f+1)/u,g=l?n.u0+d:n.u1-d,m=l?n.u0+p:n.u1-p,b=a(m),y=1/0,M=-1/0;for(let v=0;v<=40;v++){let w=n.w*v/40;r.y(w)>b+.02&&(y=Math.min(y,w),M=Math.max(M,w))}if(!(M-y>.05))continue;let x=n.at(g,y),_=n.at(m,M),S=mi(i,x[0],x[1]),A=mi(i,_[0],_[1]);h.push({u0:Math.min(S[0],A[0]),u1:Math.max(S[0],A[0]),v0:Math.min(S[1],A[1]),v1:Math.max(S[1],A[1])})}return h}function ps(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function cm(i,t){let e=ps(i,0,t.u0,!0),n=ps(i,0,t.u1,!1),r=ps(ps(i,0,t.u0,!1),0,t.u1,!0),s=ps(r,1,t.v0,!0),o=ps(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Mo(a.map(l=>[l[0],l[1]])))>1e-6)}function uc(i,t,e){let n=Hn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(h=>r.some(u=>Xt(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function um(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function E1(i){return Mn(i).rh}function hm(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>cc(n,l)??l);if(!r.length)return t.id;let s=Math.max(...r.map(l=>E1(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&r.some(h=>{let[u,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&f>=Math.min(h.z0,h.z1)&&f<=Math.max(h.z0,h.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function an(i,t){let e=[t.roomLeft,t.roomRight].map(n=>i.rooms.find(r=>r.id===n)).filter(n=>!!n);return e.length?{bottom:Math.min(...e.map(n=>Ah(i,n))),top:Math.max(...e.map(n=>ge(i,n)+Math.min(di(i,n),t.height??1/0)))}:{bottom:0,top:Math.min(i.height,t.height??i.height)}}function Po(i,t,e){let n=vr(t,i.rooms,i.walls??[]),r=n&&yr(e,t,n);if(!n||!r)return null;let s=r.wall,o=Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1]);if(o<1e-6)return null;let a=[(s.b[0]-s.a[0])/o,(s.b[1]-s.a[1])/o],l=s.roomLeft===n.room.id,c=i.rooms.find(G=>G.id===n.room.id||s.free&&G.id===s.roomLeft)??n.room,h=s.free?void 0:i.rooms.find(G=>G.id===(l?s.roomRight:s.roomLeft)),u=l?[-a[1],a[0]]:[a[1],-a[0]],f=Math.min(t.width,o),d=Math.max(0,Math.min(o-f,r.s-f/2)),p=[s.a[0]+a[0]*d,s.a[1]+a[1]*d],g=ge(i,c),m=h?ge(i,h):g,b=Math.min(g,m),y=Math.max(g,m),M={opening:t,room:c,other:h,wall:s,start:p,axis:a,toRoom:u,width:f,low:b,high:y,threshold:t.type==="window"?g:y,ceiling:Math.min(g+di(i,c),h?m+di(i,h):1/0)};if((c.wall_offset!=null||c.floor_offset!=null)&&(M.threshold=g),g+t.sill+t.height>M.ceiling+.001&&(M.issue="height"),!t.steps||!h||y-b<.001||t.type==="window")return M;let x=t.steps.side==="room",_=x?c:h,S=x?u:[-u[0],-u[1]],A=ge(i,_),v=A===y,w=x?l?s.left:s.right:l?s.right:s.left,T=t.steps.depth,E=t.steps.count,I=t.steps.offset??0,C=w+I,R=w-s.left-s.right;if(M.issue=M.issue??"fit",!Number.isFinite(T)||T<.1||T>10||!Number.isInteger(E)||E<1||E>30||!Number.isFinite(I)||Math.abs(I)>10||C+T<w+.01)return M;let L=(G,J)=>[p[0]+a[0]*G+S[0]*J,p[1]+a[1]*G+S[1]*J],D=I<0?C:-.005,U=[L(0,D),L(f,D),L(f,C+T),L(0,C+T)],B=[L(.01,Math.min(w,C)+.01),L(f-.01,Math.min(w,C)+.01),L(f-.01,C+T-.01),L(.01,C+T-.01)],O=[L(-.001,R-.001),L(f+.001,R-.001),L(f+.001,w+.001),L(-.001,w+.001)],k=I<0?[c.points,h.points,O]:[_.points];return B.every((G,J)=>k.some(j=>Xt(G,j))&&Ih(G,B[(J+1)%B.length],k).length===0)&&(M.threshold=x?m:g,M.stair={room:_,toward:S,face:C,wallFace:w,back:R,offset:I,count:E,depth:T,recess:v,bay:U},M.issue=g+t.sill+t.height>M.ceiling+.001?"height":void 0),M}function hc(i,t,e){return e.filter(n=>n.stair&&Math.abs(ge(i,t)-n.high)<1e-6&&(n.room.id===t.id||n.other?.id===t.id)&&(n.stair.recess||n.stair.offset<0)).map(n=>n.stair.bay)}function fm(i){let t=i.stair;if(!t||t.offset>=0)return i.threshold;let e=i.threshold;for(let n=0;n<t.count;n++){let r=t.face+t.depth*n/t.count;if(t.face+t.depth*(n+1)/t.count<=t.back||r>=t.wallFace)continue;let o=t.recess?i.low+(i.high-i.low)*(n+1)/t.count:i.high-(i.high-i.low)*n/t.count;e=Math.min(e,o)}return e}function gs(i,t){let e=o=>o.reduce((a,l,c)=>{let h=o[(c+1)%o.length];return a+l[0]*h[1]-h[0]*l[1]},0),n=e(t)>=0?1:-1,r=[],s=i;for(let o=0;o<t.length&&s.length>=3;o++){let a=t[o],l=t[(o+1)%t.length],c=d=>n*((l[0]-a[0])*(d[1]-a[1])-(l[1]-a[1])*(d[0]-a[0])),h=d=>{let p=[];return s.forEach((g,m)=>{let b=s[(m+1)%s.length],y=d*c(g),M=d*c(b);if(y>=-1e-9&&p.push(g),y>=-1e-9!=M>=-1e-9){let x=y/(y-M);p.push([g[0]+(b[0]-g[0])*x,g[1]+(b[1]-g[1])*x])}}),p},u=h(-1),f=h(1);u.length>=3&&Math.abs(e(u))>1e-8&&r.push(u),s=f}return r}function Ih(i,t,e){let n=[0,1],r=t[0]-i[0],s=t[1]-i[1];for(let l of e)l.forEach((c,h)=>{let u=l[(h+1)%l.length],f=u[0]-c[0],d=u[1]-c[1],p=r*d-s*f;if(Math.abs(p)<1e-9)return;let g=((c[0]-i[0])*d-(c[1]-i[1])*f)/p,m=((c[0]-i[0])*s-(c[1]-i[1])*r)/p;g>0&&g<1&&m>=0&&m<=1&&n.push(g)});n.sort((l,c)=>l-c);let o=l=>[i[0]+r*l,i[1]+s*l],a=[];for(let l=1;l<n.length;l++)n[l]-n[l-1]>1e-9&&!e.some(c=>Xt(o((n[l]+n[l-1])/2),c))&&a.push([o(n[l-1]),o(n[l])]);return a}function bs(i,t){let e=_n(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let p=f/(f-d);n.push([h[0]+(u[0]-h[0])*p,h[1]+(u[1]-h[1])*p])}}}return n}function dm(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var ii=Gt(3662079,.95),Lh=Gt(3662079,1),ri=Gt(5995775,.34),dc=Gt(5995775,.22),fc=[-.55,.83],$t=-1,pc=16,_r=32,pm=48,Io=64,re=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=$t,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Wt;return t.setAttribute("position",new Et(this.p,3)),t.setAttribute("color",new Et(this.c,3)),t.setAttribute("fold",new Et(this.f,1)),this.uv&&t.setAttribute("uv",new Et(this.uv,2)),this.tile&&t.setAttribute("tile",new Et(this.tile,2)),t.computeBoundingSphere(),t}},Oe=class{p=[];c=[];f=[];seg(t,e,n=ii,r=$t){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,$t);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,$t),this.seg(c,a,n,s)}geometry(){let t=new Wt;return t.setAttribute("position",new Et(this.p,3)),t.setAttribute("color",new Et(this.c,3)),t.setAttribute("fold",new Et(this.f,1)),t}};function mc(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((p,g)=>p+(f.p[g]-p)*d),c:u.c.map((p,g)=>p+(f.c[g]-p)*d),uv:u.uv&&f.uv?u.uv.map((p,g)=>p+(f.uv[g]-p)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let p=0;p<3;p++){let g=u*3+p;for(let m=0;m<3;m++)i.p[g*3+m]=f[p].p[m],i.c[g*3+m]=f[p].c[m];if(i.uv&&f[p].uv)for(let m=0;m<s;m++)i.uv[g*2+m]=f[p].uv[m];if(i.tile&&f[p].tile)for(let m=0;m<2;m++)i.tile[g*2+m]=f[p].tile[m];i.f[g]=d}},c=(u,f)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv?.push(...p.uv??[.5,.5]),i.tile?.push(...p.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(v=>v.p[1]>e+1e-6),p=f.map(v=>v.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[u*3+v]=n;continue}let g=i.f[u*3],m=(v,w)=>a(v,w,(e-v.p[1])/(w.p[1]-v.p[1])),b=d.filter(Boolean).length,y=b===1?d.indexOf(!0):d.indexOf(!1),M=f[y],x=f[(y+1)%3],_=f[(y+2)%3],S=m(M,x),A=m(_,M);b===1?(l(u,[M,S,A],n),c([S,x,_],g),c([S,_,A],g)):(l(u,[M,S,A],g),c([S,x,_],n),c([S,_,A],n))}}function mm(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ue=Math.PI/180;function Gt(i,t){let e=new Q(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function A1(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function mn(i,t=[]){let e=i.map(([n,r])=>new At(n,r));return Zs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new At(r,s))))}function gm(i,t,e,n,r,s,o){let a=new Q(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],g=t[(d+1)%4],m=e[d],b=e[(d+1)%4],y=g[0]-p[0],M=g[1]-p[1],x=Math.hypot(y,M);if(x<1e-6)continue;let S=.8+.28*((M/x*fc[0]-y/x*fc[1]+1)/2),A=(m[0]+b[0]-p[0]-g[0])/2*(-M/x)+(m[1]+b[1]-p[1]-g[1])/2*(y/x),v=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),w=Gt(s,l(n)*S).lerp(a,v),T=Gt(s,l(r)*S).lerp(a,v);i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],r,b[1]],w,T,T),i.tri([p[0],n,p[1]],[b[0],r,b[1]],[g[0],n,g[1]],w,T,w)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function bm(i,t,e,n,r,s,o,a,l,c){let h=new Q(l),u=[];for(let d=0;d<c;d++){let p=d/c*Math.PI*2;u.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(d,p)=>{let g=t(d,u[p%c].s);return[g[0],u[p%c].y,g[1]]};for(let d=0;d<c;d++){let p=(d+.5)/c*Math.PI*2,g=Gt(a,.62+.4*Math.max(0,Math.cos(p)));i.tri(f(e,d),f(n,d+1),f(n,d),g),i.tri(f(e,d),f(e,d+1),f(n,d+1),g)}for(let d of[e,n]){let p=t(d,r),g=[p[0],s,p[1]];for(let m=0;m<c;m++)i.tri(g,f(d,m),f(d,m+1),h)}}function Me(i,t,e,n,r,s,o={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=o.aoFrom??e,c=o.fold??$t,h=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),u=(o.holes??[]).map(p=>A1(p)>0?[...p].reverse():p),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:mn(t,u);if(o.topFace!==!1){let p=new Q(s);for(let[g,m,b]of d){let y=f[g],M=f[m],x=f[b];i.tri([y[0],a(y),y[1]],[x[0],a(x),x[1]],[M[0],a(M),M[1]],p,p,p,void 0,o.topFold??c)}}if(o.bottom){let p=Gt(r,.55);for(let[g,m,b]of d){let y=f[g],M=f[m],x=f[b];i.tri([y[0],e,y[1]],[M[0],e,M[1]],[x[0],e,x[1]],p,p,p,void 0,c)}}for(let p of[t,...u])for(let g=0;g<p.length;g++){let m=p[g],b=p[(g+1)%p.length],y=b[0]-m[0],M=b[1]-m[1],x=Math.hypot(y,M);if(x<1e-6||o.skipSide?.(m,b))continue;let S=.8+.28*((M/x*fc[0]-y/x*fc[1]+1)/2),A=a(m),v=a(b),w=Gt(r,h(e)*S),T=Gt(r,h(A)*S),E=Gt(r,h(v)*S);i.tri([m[0],e,m[1]],[m[0],A,m[1]],[b[0],v,b[1]],w,T,E,void 0,c),i.tri([m[0],e,m[1]],[b[0],v,b[1]],[b[0],e,b[1]],w,E,w,void 0,c)}}var R1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function C1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+f*p-n[1])<.4}))}function vm(i,t){return t.type==="pool"?ac(i,t):fs(i)+(t.offset??0)+(zi(t.type)?.01:sc[t.type])}function Lo(i){return _n(i)>=0?i:[...i].reverse()}function P1(i,t){let e=i[t];if(zi(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Xt(o,e.points))&&n.push(Lo(s.points))}return n}function xm(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Me(i,Lo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(x,_)=>[t[0]+f*_,x,t[1]+d*_],g=(x,_)=>[e[0]+f*_,x+l,e[1]+d*_],m=(x,_)=>{i.tri(x[0],x[1],x[2],_,_,_,void 0,$t),i.tri(x[0],x[2],x[3],_,_,_,void 0,$t),i.tri(x[0],x[2],x[1],_,_,_,void 0,$t),i.tri(x[0],x[3],x[2],_,_,_,void 0,$t)},b=new Q(a),y=new Q(Gt(o,.9)),M=new Q(Gt(o,.6));m([p(s,1),g(s,1),g(s,-1),p(s,-1)],b),m([p(r,1),g(r,1),g(r,-1),p(r,-1)],M),m([p(r,1),g(r,1),g(s,1),p(s,1)],y),m([p(r,-1),g(r,-1),g(s,-1),p(s,-1)],y),m([p(r,1),p(r,-1),p(s,-1),p(s,1)],y),m([g(r,1),g(r,-1),g(s,-1),g(s,1)],y)}function ym(i,t,e,n){let r=fs(e),s=e.outdoor??[];s.forEach((o,a)=>{if(o.points.length<3)return;let l=r+(o.offset??0),c=(M,x)=>l-_o(o,M,x),h=l-(o.type==="pool"?0:o.slope??0),u=zi(o.type)&&o.height?o.height:sc[o.type],f={...R1[o.type],top:u},d=Lo(o.points),p=Gt(f.edge,f.edgeAlpha),g=o.open&&(o.type==="fence"||o.type==="pergola")?d.length-1:-1,m=M=>{if(o.outline!==!1)for(let x=0;x<d.length;x++){if(x===g)continue;let _=d[x],S=d[(x+1)%d.length];t.seg([_[0],M(_[0],_[1]),_[1]],[S[0],M(S[0],S[1]),S[1]],p,$t)}},b=n??i,y=new Q(n?1734832:f.color);switch(o.type){case"pool":{let M=new Q(f.side),x=new Q(Gt(f.side,.55)),_=new Q(932440),S=ac(e,o),A=oc(e,o),v=kp(e,o);for(let[w,T,E]of mn(d)){let I=d[w],C=d[T],R=d[E];(n?b:i).tri([I[0],S,I[1]],[R[0],S,R[1]],[C[0],S,C[1]],y,y,y,void 0,$t),i.tri([I[0],v,I[1]],[R[0],v,R[1]],[C[0],v,C[1]],_,_,_,void 0,$t)}for(let w=0;w<d.length;w++){let T=d[w],E=d[(w+1)%d.length];i.tri([E[0],v,E[1]],[E[0],A,E[1]],[T[0],A,T[1]],x,M,M,void 0,$t),i.tri([E[0],v,E[1]],[T[0],A,T[1]],[T[0],v,T[1]],x,M,x,void 0,$t)}if(!o.above&&Th(e,o)){let w=new Q(660258),T=new Q(396054),E=v-.2,I=Math.min(l,A);for(let C=0;C<d.length;C++){let R=d[C],L=d[(C+1)%d.length];i.tri([R[0],E,R[1]],[R[0],I,R[1]],[L[0],I,L[1]],T,w,w,void 0,$t),i.tri([R[0],E,R[1]],[L[0],I,L[1]],[L[0],E,L[1]],T,w,T,void 0,$t)}for(let[C,R,L]of mn(d)){let D=d[C],U=d[R],B=d[L];i.tri([D[0],E,D[1]],[U[0],E,U[1]],[B[0],E,B[1]],T,T,T,void 0,$t)}if(o.outline!==!1)for(let C=0;C<d.length;C++){let R=d[C],L=d[(C+1)%d.length];t.seg([R[0],E,R[1]],[L[0],E,L[1]],Gt(f.edge,f.edgeAlpha*.35),$t),t.seg([R[0],E,R[1]],[R[0],I,R[1]],Gt(f.edge,f.edgeAlpha*.25),$t)}}if(A>l+.02){let w=new Q(2044240),T=new Q(1187123);for(let E=0;E<d.length;E++){let I=d[E],C=d[(E+1)%d.length];i.tri([I[0],l,I[1]],[I[0],A,I[1]],[C[0],A,C[1]],T,w,w,void 0,$t),i.tri([I[0],l,I[1]],[C[0],A,C[1]],[C[0],l,C[1]],T,w,T,void 0,$t)}m(()=>l+.005)}if(m(()=>A),m(()=>S+.005),o.outline!==!1)for(let w=0;w<d.length;w++){let T=d[w],E=d[(w+1)%d.length];t.seg([T[0],v+.005,T[1]],[E[0],v+.005,E[1]],Gt(f.edge,f.edgeAlpha*.4),$t)}break}case"fence":{for(let M=0;M<d.length;M++){if(M===g)continue;let x=d[M],_=d[(M+1)%d.length],S=Math.hypot(_[0]-x[0],_[1]-x[1]),A=Math.max(1,Math.round(S/2)),v=g>=0&&M===g-1?A:A-1;for(let w=0;w<=v;w++){let T=w/A,E=x[0]+(_[0]-x[0])*T,I=x[1]+(_[1]-x[1])*T,C=c(E,I);Me(i,Lo([[E-.04,I-.04],[E+.04,I-.04],[E+.04,I+.04],[E-.04,I+.04]]),C,C+f.top,f.side,f.color)}for(let w of[.35,.85])t.seg([x[0],c(x[0],x[1])+w*f.top,x[1]],[_[0],c(_[0],_[1])+w*f.top,_[1]],p,$t)}break}case"pergola":{let M=f.top;for(let[x,_]of d){let S=c(x,_);Me(i,Lo([[x-.06,_-.06],[x+.06,_-.06],[x+.06,_+.06],[x-.06,_+.06]]),S,S+M,f.side,f.color)}for(let x=0;x<d.length;x++){if(x===g)continue;let _=d[x],S=d[(x+1)%d.length],A=c(_[0],_[1])+M;if(xm(i,_,S,.12,A-.16,A,f.side,f.color,c(S[0],S[1])-c(_[0],_[1])),o.bracing){let v=c(_[0],_[1]),w=c(S[0],S[1]);t.seg([_[0],v+.25,_[1]],[S[0],w+M-.25,S[1]],p,$t),t.seg([S[0],w+.25,S[1]],[_[0],v+M-.25,_[1]],p,$t)}}if($p(d)){let x=Zp(d),_=x.x1-x.x0,S=x.z1-x.z0,A=_>=S,v=A?_:S,w=Math.max(1,Math.round(v/.6));for(let T=1;T<w;T++){let E=(A?x.x0:x.z0)+v*T/w,I=A?[E,x.z0+.06]:[x.x0+.06,E],C=A?[E,x.z1-.06]:[x.x1-.06,E],R=c(I[0],I[1])+M;xm(i,I,C,.06,R-.04,R+.08,f.side,f.color,c(C[0],C[1])-c(I[0],I[1]))}}m((x,_)=>c(x,_)+M+.004);break}case"balcony":{Me(i,d,l-.18,l+f.top,f.side,f.color,{aoFrom:l-.18}),m(()=>l+f.top+.004);let x=o.height&&o.height>.3?o.height:1,_=Gt(9417983,.42),S=Gt(3662079,.55);for(let A=0;A<d.length;A++){let v=d[A],w=d[(A+1)%d.length];if(C1(e,v,w))continue;let T=Math.hypot(w[0]-v[0],w[1]-v[1]),E=l+f.top;t.seg([v[0],E+x,v[1]],[w[0],E+x,w[1]],S,$t),t.seg([v[0],E+.1,v[1]],[w[0],E+.1,w[1]],_,$t);let I=Math.max(1,Math.round(T/.12));for(let C=0;C<=I;C++){let R=C/I,L=v[0]+(w[0]-v[0])*R,D=v[1]+(w[1]-v[1])*R;t.seg([L,E,D],[L,E+x,D],C===0||C===I?S:_,$t)}}break}default:{let M=(_,S)=>c(_,S)+f.top,x=P1(s,a);if(Me(i,d,h,o.slope?M:l+f.top,f.side,f.color,{aoFrom:h,holes:x}),m((_,S)=>M(_,S)+.004),o.type==="hedge"&&m((_,S)=>c(_,S)+.004),o.outline!==!1)for(let _ of x)for(let S=0;S<_.length;S++){let A=_[S],v=_[(S+1)%_.length];t.seg([A[0],M(A[0],A[1])+.004,A[1]],[v[0],M(v[0],v[1])+.004,v[1]],p,$t)}}}})}var gc=.012,I1=.012;function Mm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(y,M,x,_,S,A,v)=>{for(let w of[y,M,x,y,x,_])a.push(w[0],w[1],w[2]),l.push(S[0],S[1],S[2]),c.push(A),h.push(v)},f=i.openings.map(y=>Po(i,y,t)).filter(y=>!!y);i.rooms.forEach((y,M)=>{if(y.points.length<3)return;let x=hc(i,y,f),_=y.points.map(C=>C[0]),S=y.points.map(C=>C[1]),A=Math.min(..._),v=Math.min(...S),w=Math.max(..._),T=Math.max(...S),E=Math.max(1,Math.ceil((w-A)/r)),I=Math.max(1,Math.ceil((T-v)/r));for(let C=0;C<E;C++)for(let R=0;R<I;R++){let L=A+(C+.5)*r,D=v+(R+.5)*r;if(!Xt([L,D],y.points)||s.some(J=>Xt([L,D],J))&&!x.some(J=>Xt([L,D],J)))continue;let U=A+C*r,B=v+R*r,O=Math.min(U+r,w),k=Math.min(B+r,T),G=ge(i,y)+gc;if(!x.length)u([U,G,B],[U,G,k],[O,G,k],[O,G,B],[0,1,0],M,-1);else{let J=[[[U,B],[U,k],[O,k],[O,B]]];for(let j of x)J=J.flatMap(ut=>gs(ut,j));for(let j of J)for(let ut=1;ut+1<j.length;ut++)for(let nt of[j[0],j[ut],j[ut+1]])a.push(nt[0],G,nt[1]),l.push(0,1,0),c.push(M),h.push(-1)}}});let d=i.rooms.length,p=(i.outdoor??[]).filter(y=>y.points.length>=3&&!zi(y.type));if(p.length){let y=p.flatMap(w=>w.points.map(T=>T[0])),M=p.flatMap(w=>w.points.map(T=>T[1])),x=Math.floor(Math.min(...y)/r)*r,_=Math.floor(Math.min(...M)/r)*r,S=Math.max(1,Math.ceil((Math.max(...y)-x)/r)),A=Math.max(1,Math.ceil((Math.max(...M)-_)/r)),v=(w,T,E)=>vm(i,w)-(w.type==="pool"?0:_o(w,T,E))+gc;for(let w=0;w<S;w++)for(let T=0;T<A;T++){let E=x+w*r,I=_+T*r,C,R=[E+r/2,I+r/2];C=p.find(D=>D.type==="pool"&&Xt(R,D.points));for(let D=p.length-1;D>=0&&!C;D--)Xt(R,p[D].points)&&(C=p[D]);if(!C)continue;let L=(D,U)=>[D,v(C,D,U),U];u(L(E,I),L(E,I+r),L(E+r,I+r),L(E+r,I),[0,1,0],d,-1)}}let g=Math.min(i.cut_height,Ge(i)-i.elevation),m=[];t.forEach((y,M)=>{let x=an(i,y).top,_=y.b[0]-y.a[0],S=y.b[1]-y.a[1],A=Math.hypot(_,S);if(A<.05)return;let v=[_/A,S/A],w=[-v[1],v[0]],T=e[M],E=F1(y,v,A,n),I=(L,D)=>L?i.rooms.findIndex(U=>U.id===L):D?d:-1;m.push({a:y.a,b:y.b,h:x,ra:I(y.roomLeft,!1),rb:I(y.roomRight,y.exterior),gaps:E});let C=(L,D,U)=>[D,U,...L.filter(B=>B>D+.005&&B<U-.005)].sort((B,O)=>B-O).filter((B,O,k)=>O===0||B>k[O-1]+.005),R=C(E.flatMap(L=>[L.s0,L.s1]),0,A);for(let L of[1,-1]){let D=L>0?y.roomLeft:y.roomRight,U=D?i.rooms.findIndex(H=>H.id===D):y.exterior?d:-1;if(U<0)continue;let B=D?i.rooms[U]:null,O=B?ge(i,B):an(i,y).bottom,k=B?O+Math.min(di(i,B),y.height??1/0):x,G=Math.min(g,k-.02),J=C([G,(G+k)/2,...E.flatMap(H=>[H.y0+.01,H.y1-.01])],O+.02,k-.02),j=(L>0?y.left:y.right)+I1,ut=[w[0]*L,w[1]*L],nt=(H,X)=>[y.a[0]+v[0]*H+ut[0]*j,X,y.a[1]+v[1]*H+ut[1]*j],ft=H=>{let X=nt(H,0),st=o?.(X[0],X[2]);return st==null?1/0:st-.02};for(let H=0;H<R.length-1;H++){let X=R[H+1]-R[H],st=Math.max(1,Math.ceil(X/r));for(let ct=0;ct<st;ct++){let lt=R[H]+X/st*ct,pt=R[H]+X/st*(ct+1),zt=(lt+pt)/2;for(let Nt=0;Nt<J.length-1;Nt++){let Dt=J[Nt],Zt=J[Nt+1];if(Zt-Dt<.01)continue;let Yt=(Dt+Zt)/2;if(E.some(xe=>zt>xe.s0&&zt<xe.s1&&Yt>xe.y0&&Yt<xe.y1))continue;let be=Dt>=g-1e-6?T:_r+T,Pe=Math.min(Zt,ft(lt)),Ye=Math.min(Zt,ft(pt));Pe<=Dt+.005&&Ye<=Dt+.005||u(nt(lt,Dt),nt(pt,Dt),nt(pt,Math.max(Dt,Ye)),nt(lt,Math.max(Dt,Pe)),[ut[0],0,ut[1]],U,be)}}}}});for(let y of i.openings){let M=Po(i,y,t),x=M?.stair;if(!M||!x)continue;let _=i.rooms.findIndex(A=>A.id===x.room.id),S=(A,v,w)=>[M.start[0]+M.axis[0]*A+x.toward[0]*v,w,M.start[1]+M.axis[1]*A+x.toward[1]*v];for(let A=0;A<x.count;A++){let v=x.face+x.depth*A/x.count,w=x.face+x.depth*(A+1)/x.count,T=(x.recess?M.low+(M.high-M.low)*(A+1)/x.count:M.high-(M.high-M.low)*A/x.count)+gc;u(S(0,v,T),S(M.width,v,T),S(M.width,w,T),S(0,w,T),[0,1,0],_,-1)}if(x.offset>0){let A=M.threshold+gc;u(S(0,x.wallFace,A),S(M.width,x.wallFace,A),S(M.width,x.face,A),S(0,x.face,A),[0,1,0],_,-1)}}let b=[];for(let y of n){if(y.opening.type!=="door")continue;let M=t.find(S=>Sm(S,y)&&L1(S,y));if(!M||!M.roomLeft||!M.roomRight)continue;let x=i.rooms.findIndex(S=>S.id===M.roomLeft),_=i.rooms.findIndex(S=>S.id===M.roomRight);x<0||_<0||b.push({id:y.opening.id,a:x,b:_,x:y.start[0]+y.axis[0]*(y.width/2),y:Math.min(1.1,y.top*.55),z:y.start[1]+y.axis[1]*(y.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:b,blockers:m}}function Sm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function L1(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function F1(i,t,e,n){let r=[];for(let s of n){if(!Sm(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function D1(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function N1(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function _m(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=N1(i),d=1/(1+h/(f*f)),p=d*Math.sqrt(d),g=Math.max(0,-(a*r+l*s+c*o)/u);if(i.direction){let m=(a*i.direction[0]+l*i.direction[1]+c*i.direction[2])/u,b=Math.cos((i.angle??60)*Math.PI/360),y=Math.cos((i.angle??60)*.8*Math.PI/360),M=Math.max(0,Math.min(1,(m-b)/(y-b)));return i.level*p*(.2+.8*g)*M*M*(3-2*M)}return i.level*p*(.2+.8*g)*D1(i.kind,l/u)}function wm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,p]of[[h.a,h.b],[h.b,h.a]]){let g=[0,0,0];for(let b of t){if(b.room!==d)continue;let y=b.x-h.x,M=b.y-h.y,x=b.z-h.z,_=Math.hypot(y,M,x)||1,S=_m(b,h.x,h.y,h.z,y/_,M/_,x/_);g[0]+=b.color[0]*S,g[1]+=b.color[1]*S,g[2]+=b.color[2]*S}let m=Math.max(g[0],g[1],g[2]);m<.01||r.push({x:h.x,y:h.y,z:h.z,color:[g[0]/m,g[1]/m,g[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:p})}});let s=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(h.room,[...s.get(h.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=s.get(l[h]);if(!u)continue;let f=h*3,d=0,p=0,g=0;for(let m of u){if(m.walls.length&&Fh(m,m.walls,o[f],o[f+1],o[f+2]))continue;let b=_m(m,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*b,p+=m.color[1]*b,g+=m.color[2]*b}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-g*e*1.6)}return c}function Fh(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*o-f*s)/h;if(p<0||p>1)continue;let g=i.y+(n-i.y)*d;if(g>=a.h||g<(a.bottom??0))continue;let m=p*Math.hypot(l,c);if(!a.gaps.some(b=>m>b.s0&&m<b.s1&&g>b.y0&&g<b.y1))return!0}return!1}function Dh(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Xt([t,e],r.points));return n<0?i.rooms.length:n}function xs(i,t){return i&&t>=0&&t<i.length?i[t]:t}function O1(i){let t=[...i].sort((n,r)=>n[0]-r[0]||n[1]-r[1]),e=n=>{let r=[];for(let s of n){for(;r.length>1;){let o=r[r.length-2],a=r[r.length-1];if((a[0]-o[0])*(s[1]-o[1])-(a[1]-o[1])*(s[0]-o[0])>1e-9)break;r.pop()}r.push(s)}return r.slice(0,-1)};return[...e(t),...e([...t].reverse())]}function Tm(i,t,e,n,r,s){let o=e.map(l=>{let c=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])||1,h=(l.b[0]-l.a[0])/c,u=(l.b[1]-l.a[1])/c,f=n.filter(d=>Math.abs((d.start[0]-l.a[0])*u-(d.start[1]-l.a[1])*h)<.01).map(d=>{let p=(d.start[0]-l.a[0])*h+(d.start[1]-l.a[1])*u;return{s0:p,s1:p+d.width,y0:d.sill,y1:d.top}});return{a:l.a,b:l.b,h:an(t,l).top,bottom:an(t,l).bottom,ra:0,rb:0,gaps:f}}),a=t.rooms.map(l=>({origin:new V(0,ge(t,l),0),u:new V(1,0,0),v:new V(0,0,1),normal:new V(0,1,0),polygon:l.points,holes:r,room:l.id}));for(let l of e){let c=l.b[0]-l.a[0],h=l.b[1]-l.a[1],u=Math.hypot(c,h);if(u<.01)continue;let f=new V(c/u,0,h/u),d=an(t,l);for(let[p,g,m]of[[l.roomLeft,l.left,1],[l.roomRight,l.right,-1]]){if(!p)continue;let b=new V(-f.z*m,0,f.x*m),y=new V(l.a[0],d.bottom,l.a[1]).addScaledVector(b,g+.003),M=[];for(let x of n){let _=new V(x.start[0]-l.a[0],0,x.start[1]-l.a[1]);if(Math.abs(_.x*f.z-_.z*f.x)>.01)continue;let S=_.dot(f);S+x.width<0||S>u||M.push([[S,x.sill-d.bottom],[S+x.width,x.sill-d.bottom],[S+x.width,x.top-d.bottom],[S,x.top-d.bottom]])}a.push({origin:y,u:f,v:new V(0,1,0),normal:b,polygon:[[0,0],[u,0],[u,d.top-d.bottom],[0,d.top-d.bottom]],holes:M,room:p,fold:s[e.indexOf(l)]})}}for(let l of t.furniture.filter(c=>c.rotation_x||c.rotation_z)){let c=Ce(t,l),h=nc(l,c).map(d=>new V(...d)),u=So(t,l.x,l.z)?.id,f=[...a];for(let d of t.furniture){if(d===l||!(Eh.has(d.type)||_e(d.type)?.surface)||So(t,d.x,d.z)?.id!==u)continue;let p=nc(d,Ce(t,d)).slice(4).map(x=>new V(...x)),g=p[1].clone().sub(p[0]).normalize(),m=p[3].clone().sub(p[0]).normalize(),b=new V().crossVectors(m,g).normalize();b.y<0&&b.negate();let y=p[0].distanceTo(p[1]),M=p[0].distanceTo(p[3]);f.push({origin:p[0],u:g,v:m,normal:b,polygon:[[0,0],[y,0],[y,M],[0,M]],holes:[],room:u,fold:Io})}for(let d of f){if(d.room!==u)continue;let p=h.map(T=>T.clone().sub(d.origin).dot(d.normal));if(Math.max(...p)<-.01)continue;let g=Math.max(0,Math.min(...p));if(g>.35)continue;let m=O1(h.map(T=>{let E=T.clone().sub(d.origin);return[E.dot(d.u),E.dot(d.v)]}));if(m.length<3)continue;let b=m.reduce((T,E)=>T+E[0],0)/m.length,y=m.reduce((T,E)=>T+E[1],0)/m.length,M=.055+g*.15,x=m.map(([T,E])=>{let I=Math.hypot(T-b,E-y)||1;return[T+(T-b)*M/I,E+(E-y)*M/I]}),_=new Q(1-.45*Math.exp(-g*8),1-.45*Math.exp(-g*8),1-.45*Math.exp(-g*8)),S=new Q(1,1,1),A=mn(d.polygon).map(([T,E,I])=>[d.polygon[T],d.polygon[E],d.polygon[I]]),v=i.count,w=(T,E)=>{for(let I of A){let C=[bs(T,I)];for(let R of d.holes)for(let[L,D,U]of mn(R))C=C.flatMap(B=>gs(B,[R[L],R[D],R[U]]));for(let R of C)for(let L=1;L+1<R.length;L++){let D=[R[0],R[L],R[L+1]],U=G=>d.origin.clone().addScaledVector(d.u,G[0]).addScaledVector(d.v,G[1]).addScaledVector(d.normal,.003).toArray(),B=U([(D[0][0]+D[1][0]+D[2][0])/3,(D[0][1]+D[1][1]+D[2][1])/3]);if(Fh({x:l.x,y:c+l.h/2,z:l.z},o,B[0],B[1],B[2]))continue;let O=(T[1][1]-T[2][1])*(T[0][0]-T[2][0])+(T[2][0]-T[1][0])*(T[0][1]-T[2][1]),k=G=>{let J=((T[1][1]-T[2][1])*(G[0]-T[2][0])+(T[2][0]-T[1][0])*(G[1]-T[2][1]))/O,j=((T[2][1]-T[0][1])*(G[0]-T[2][0])+(T[0][0]-T[2][0])*(G[1]-T[2][1]))/O;return new Q(E[0].r*J+E[1].r*j+E[2].r*(1-J-j),E[0].g*J+E[1].g*j+E[2].g*(1-J-j),E[0].b*J+E[1].b*j+E[2].b*(1-J-j))};Math.abs(O)>1e-10&&i.tri(U(D[0]),U(D[1]),U(D[2]),k(D[0]),k(D[1]),k(D[2]))}}};for(let[T,E,I]of mn(m))w([m[T],m[E],m[I]],[_,_,_]);for(let T=0;T<m.length;T++){let E=(T+1)%m.length;w([m[T],x[T],x[E]],[_,S,S]),w([m[T],x[E],m[E]],[_,S,_])}d.fold!==void 0&&mc(i,v,t.cut_height,d.fold)}}}var Wn=1e-4;function Nh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Em(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Wn&&a<1-Wn&&l>-Wn&&l<1+Wn?a:null}function Oh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Wn||o>=1-Wn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Wn?o:null}function U1(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Em(n,r,o,a)!==null||Oh(o,n,r)!==null||Oh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Wn)return!0}}return Xt(i[0],t)||Xt(t[0],i)}function B1(i){let t=i.map(s=>Nh(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let p=u[d],g=u[(d+1)%u.length],m=Em(l,c,p,g)??Oh(p,l,c);m!==null&&h.push(m)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Wn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),g=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((m,b)=>b!==o&&Xt(g,m))||e.some(([m,b])=>Math.hypot(m[0]-f[0],m[1]-f[1])<Wn&&Math.hypot(b[0]-d[0],b[1]-d[1])<Wn)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Nh(o)>1e-6&&n.push(o)}return n}function Uh(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&U1(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:B1(s))}function k1(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Am(i,t,e=.03){return i.every(n=>Xt(n,t)||t.some((r,s)=>k1(n,r,t[(s+1)%t.length])<=e))}function Bh(i,t){let e=Nh(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}var Rm=!1;function Cm(i){Rm=i}function Pm(i,t,e,n,r=Rm){let s=r||i.detail==="low"?12:i.detail==="high"?40:24,o=i.w*t,a=i.d*e,l=i.h*n,c;if(i.shape==="polygon"){let h=i.points??[],u=[];for(let[f,d,p]of mn(h)){for(let g of[f,p,d])u.push(h[g][0]*o,0,h[g][1]*a);for(let g of[f,d,p])u.push(h[g][0]*o,l,h[g][1]*a)}for(let f=0;f<h.length;f++){let d=h[f],p=h[(f+1)%h.length];u.push(d[0]*o,0,d[1]*a,p[0]*o,l,p[1]*a,p[0]*o,0,p[1]*a,d[0]*o,0,d[1]*a,d[0]*o,l,d[1]*a,p[0]*o,l,p[1]*a)}c=new Wt,c.setAttribute("position",new Et(u,3))}else if(i.shape==="sphere"||i.shape==="ellipsoid"){c=new js(.5,s,Math.max(6,s/2));let h=Math.min(o,a,l);c.scale(i.shape==="sphere"?h:o,i.shape==="sphere"?h:l,i.shape==="sphere"?h:a),c.translate(0,l/2,0)}else if(i.shape==="rounded_box"){let h=s===12?3:s===40?8:5,u=Math.min(i.radius??.08,.49);c=new Pi(1,1,1,h,h,h);let f=c.getAttribute("position"),d=.5-u;for(let p=0;p<f.count;p++){let g=new V().fromBufferAttribute(f,p),m=g.clone().clampScalar(-d,d);g.sub(m).normalize().multiplyScalar(u).add(m),f.setXYZ(p,g.x,g.y,g.z)}c.scale(o,l,a),c.translate(0,l/2,0)}else if(i.shape==="torus"){let h=Math.min(.24,i.thickness??.06);c=new Qs(.5-h,h,Math.max(6,s/2),s),c.scale(o,l,a),c.translate(0,l/2,0)}else if(i.shape==="pipe"){let h=(i.path??[]).map(([M,x,_])=>new V(M*o,(x+.5)*l,_*a));if(h.length<2)return null;let u=new Qr(h,!1,"centripetal"),f=(i.radius??.1)*Math.min(o,a,l),d=new es(u,Math.min(256,s*(h.length-1)),f,Math.max(8,s/2),!1),p=new es(u,Math.min(256,s*(h.length-1)),Math.max(f*.05,f-(i.thickness??.025)*Math.min(o,a,l)),Math.max(8,s/2),!1),g=d.toNonIndexed(),m=p.toNonIndexed(),b=[...g.getAttribute("position").array],y=m.getAttribute("position").array;for(let M=0;M<y.length;M+=9)b.push(...y.slice(M,M+3),...y.slice(M+6,M+9),...y.slice(M+3,M+6));c=new Wt,c.setAttribute("position",new Et(b,3));for(let M of[d,p,g,m])M.dispose()}else if(i.shape==="bowl"){let h=Math.min(.2,i.thickness??.04);c=new Ks([new At(0,0),new At(.5,0),new At(.5,1),new At(.5-h,1),new At(.5-h,h),new At(0,h)],s),c.scale(o,l,a)}else return null;return c.translate(i.x*t,i.y*n,i.z*e),c.computeVertexNormals(),c}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},dt=Gt(5995775,.3),Qt=Gt(5995775,.17),Jt=Gt(3662079,.45),Mr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Om(n)}shape(t,e,n,r,s,o){let a=Pm(t,e,n,r);if(!a)return!1;let l=a.index?a.toNonIndexed():a,c=l.getAttribute("position"),h=new Q(o),u=f=>{let[d,p]=this.tf(c.getX(f),c.getZ(f));return[d,s+c.getY(f),p]};for(let f=0;f<c.count;f+=3)this.buf.tri(u(f),u(f+(this.mirrored?2:1)),u(f+(this.mirrored?1:2)),h);return l!==a&&l.dispose(),a.dispose(),!0}rotated(t,e,n){let r=n*ue,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Me(this.buf,kh(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==kh(l)&&(l.reverse(),c.reverse()),gm(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,g=t==="x"?n:e,m=(y,M)=>t==="x"?this.tf(y,M):this.tf(M,y),b=this.buf.p.length;if(bm(this.buf,m,p-o/2,p+o/2,g,d,f,l,c,h),this.mirrored&&Wh(this.buf,b),u)for(let y of[p-o/2,p+o/2])for(let M=0;M<h;M++){let x=M/h*Math.PI*2,_=(M+1)/h*Math.PI*2;this.line(m(y,g+Math.sin(x)*f),m(y,g+Math.sin(_)*f),d+Math.cos(x)*f,d+Math.cos(_)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Me(this.buf,kh(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=dt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,$t)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Om(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function kh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Sr(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function Fo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Qt)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,Jt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Jt)}}}function Im(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);Sr(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,N.fabric,N.fabricTop,.04,dt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,N.fabric,N.fabricTop,dt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let g=s+c+d*p+.02,m=g+d-.04;i.pad(g,m,h-.08,h+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([g+.01,m-.01,a+u*.55,a+u+.14],[g+.03,m-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,N.cushion)}}function Lm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],g=(v,w)=>i.loft([v-.015,v+.015,w-.015,w+.015],[v-.025,v+.025,w-.025,w+.025],0,.07,N.wood);g(s+.06,a+.06),g(o-.06,a+.06),r||g(o-.06,a+c-.06);for(let v of p)g(v*(t/2-.06),l-.06),g(v*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,dt);for(let v of p){let[w,T]=v<0?[s+.02,s+c]:[o-c,o-.02];i.pad(w,T,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,dt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,N.fabric,N.fabricTop,dt);for(let v of p)v<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,dt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,dt);for(let v of p){let[w,T]=v<0?[s+h,s+c]:[o-c,o-h];i.pad(w,T,f-.08,d,l-u,l,N.fabric,N.fabricTop,.04,dt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,dt);let m=s+h,b=r?o-h:o-u,y=Math.max(1,Math.round((b-m)/.62)),M=(b-m)/y;for(let v=0;v<y;v++){let w=m+M*v+.02,T=w+M-.04;i.pad(w,T,f-.08,f+.05,a+h+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([w+.01,T-.01,a+h*.55,a+h+.14],[w+.03,T-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,N.cushion)}let x=a+c,_=l-u;if(_-x<.2)return;let S=Math.max(1,Math.round((_-x)/.62)),A=(_-x)/S;for(let v of p)for(let w=0;w<S;w++){let T=x+A*w+.02,E=T+A-.04;v<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,T,E,N.cushion,N.cushion,.04),i.loft([s+h*.55,s+h+.14,T+.01,E-.01],[s+h*.4,s+h*.4+.06,T+.03,E-.03],f+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,T,E,N.cushion,N.cushion,.04),i.loft([o-h-.14,o-h*.55,T+.01,E-.01],[o-h*.4-.06,o-h*.4,T+.03,E-.03],f+.03,n*.93,N.cushion))}}function z1(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Sr(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,dt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,dt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Qt);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,N.cushion,N.fabricTop,.025,Qt),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let p=o+.1+f*d,g=r+.12,m=Math.min(.42,e*.2),b=.1;i.loft([p+.03+b,p+f-.03-b,g+b*.5,g+m-b*.5],[p+.03,p+f-.03,g,g+m],c,c+.06,N.whiteTop),i.loft([p+.03,p+f-.03,g,g+m],[p+.03+b,p+f-.03-b,g+b*.5,g+m-b*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Qt)}}function V1(i,t,e,n){let r=Math.min(.46,n*.52);Sr(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,dt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,dt)}function G1(i,t,e,n){Sr(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,Jt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function H1(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,dt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Qt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Jt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,Jt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function $i(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),Fo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function W1(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Qt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=h+.006,c++}}}}function X1(i,t,e,n){let r=Math.max(1,Math.round(t/.6));$i(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Y1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,dt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Qt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Jt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Jt)}function q1(i,t,e,n){let r=e/2-Um;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,dt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Qt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Qt))}var Um=.06;function Bm(i,t,e,n,r){let s=i.p.length;$1(i,t,e,n,r),t.mirror&&Wh(i,s),Rn(i.p,s,t,e+t.h/2)}function $1(i,t,e,n,r){let s=t.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(x,_)=>[t.x+l*x*o-_*a,t.z+l*x*a+_*o],h=e+.05,u=e+t.h-.02,f=new Q(.75,.1,.14),d=new Q(N.dark),p=new Q(N.accent),g=t.w/2-.006,m=(x,_,S)=>{let A=S/b,v=new Q(2043212).lerp(f,A),w=new Q(N.body).lerp(f,A*.8),T=Math.cos(S),E=Math.sin(S),I=(L,D)=>c(x+_*(L*T-D*E),t.d/2+L*E+D*T),C=(L,D,U,B)=>{let[O,k,G,J]=L;i.tri([O[0],D,O[1]],[k[0],D,k[1]],[G[0],U,G[1]],B),i.tri([O[0],D,O[1]],[G[0],U,G[1]],[J[0],U,J[1]],B)},R=(L,D,U,B,O,k,G,J=G)=>{let j=[I(L,k),I(D,k),I(D,O),I(L,O)];C([j[0],j[1],j[1],j[0]],U,B,J),C([j[3],j[2],j[2],j[3]],U,B,G),C([j[0],j[3],j[3],j[0]],U,B,G),C([j[1],j[2],j[2],j[1]],U,B,G),C([j[0],j[1],j[2],j[3]],B,B,G),C([j[3],j[2],j[1],j[0]],U,U,G)};return R(0,g,h,u,-Um,0,w,v),R(g-.05,g-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),R},b=1.83;m(-t.w/2,1,n*b)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*b)(.06,g-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Z1(i,t,e,n){$i(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,dt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,Jt)}}function K1(i,t,e,n){$i(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,Jt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function J1(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,Jt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function j1(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Jt),i.seg(r,n,s,o,n,a,Jt),i.seg(o,.05,a,o,n,a,Jt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,Jt)}function Q1(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,dt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,dt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function tM(i,t,e,n){$i(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,Jt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,Jt)}function eM(i,t,e,n){$i(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,Jt)}function nM(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,dt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Qt:null)}}function iM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,dt)}function rM(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,N.wood,N.woodTop),i.seg(-t/2,d,u,t/2,d,u,dt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,dt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Qt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),Jt);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Qt)}}function sM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=Wp(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,p=t/2,g=-e/2+l;for(let A=0;A<s;A++){let v=e/2-c*A,w=h*(A+1);i.box(u,f,0,w,v-c,v,N.wood,N.woodTop),i.seg(u,w,v,f,w,v,dt)}i.seg(u,0,e/2,u,h,e/2,dt);let m=h*r,b=.2;i.box(u,f,0,m,-e/2,g,N.wood,N.woodTop),i.box(f,p,Math.max(0,m-b),m,-e/2,g,N.wood,N.woodTop),i.seg(u,m,g,f,m,g,dt);for(let A=0;A<o;A++){let v=g+c*A,w=h*(r+1+A);i.box(d,p,Math.max(0,w-h-b),w,v,v+c,N.wood,N.woodTop),i.seg(d,w,v,p,w,v,dt)}i.seg(u,h,e/2,u,m,g,Qt),i.seg(p,m,g,p,n,g+c*(o-1),Qt);let y=.9,M=f-.03,x=d+.03,_=g-.03,S=Math.max(1,o-4);i.seg(M,h+y,e/2-c/2,M,m+y,_,Jt),i.seg(M,m+y,_,x,m+y,_,Jt),i.seg(x,m+y,_,x,h*(r+S)+y,g+c*(S-.5),Jt);for(let A=0;A<s;A+=3){let v=e/2-c*(A+.5);i.seg(M,h*(A+1),v,M,h*(A+1)+y,v,Qt)}for(let A of[M,x])i.seg(A,m,_,A,m+y,_,Qt);for(let A=2;A<S;A+=3){let v=g+c*(A+.5);i.seg(x,h*(r+1+A),v,x,h*(r+1+A)+y,v,Qt)}}function oM(i,t,e,n){Sr(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),Fo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function aM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Qt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Jt)}}function lM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,dt),Fo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,dt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,dt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Fm(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,dt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,dt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Qt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,dt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,dt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Qt))}function cM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Qt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,dt)}function uM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,dt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,dt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function hM(i,t,e,n){Sr(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,dt)}function fM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,dt),Fo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function dM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,Jt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Jt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Qt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Jt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Jt)}function pM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,dt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),Fo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function mM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Jt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Dm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,dt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Qt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Jt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,Jt),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Qt)}}function gM(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Qt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,dt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Qt)}function bM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,dt)}function xM(i,t,e,n){Sr(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Qt)}function vM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,Jt)}function yM(i,t,e,n){let r=Vh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,dt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Qt)}}function _M(i,t,e,n){let r=Gh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,dt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Qt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Jt)}function vs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Jt)}}function MM(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Jt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),vs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Jt);for(let a of[-1,1])vs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Jt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Qt)}function SM(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,dt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Qt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,dt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Jt)}}function wM(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,dt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,dt),vs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,dt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Jt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function TM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,dt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;vs(i,s,o,r,e/2+.004,24),vs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Qt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Qt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Jt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Qt)}function EM(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,dt);for(let s of[-1,1])vs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Jt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Qt)}function AM(i,t,e,n){let r=Vp-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,dt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function RM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,dt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Jt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Qt)}function CM(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,dt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,Jt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function PM(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Qt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Qt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Jt)}function IM(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Jt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Qt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Jt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,dt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Jt)}}var Vh=.12,Gh=2.05;function Hh(i,t){let e=LM(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function LM(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=wh(i.type);if(s){let l=t?Ce(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Ce(t,i)-yo(i):0,a=FM(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function FM(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?Ce(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Vh+.02,y1:Vh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Gh+.015,y1:Gh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function DM(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new Q(1-r,1-r,1-r),a=new Q(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[p]),o,a,a),i.tri(u(c[d]),u(h[p]),u(c[p]),o,a,o)}Om(t)&&Wh(i,f)}function bc(i,t,e,n,r=0){let s=i.p.length,o=t.p.length;NM(i,t,n.rotation_x||n.rotation_z?new re:e,n,r),Rn(i.p,s,n,r+n.h/2),Rn(t.p,o,n,r+n.h/2)}function Wh(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function NM(i,t,e,n,r){let s=_e(n.type)?0:r-yo(n);if(_e(n.type)||Math.abs(s)<.001)return Nm(i,t,e,n,r);let o=i.p.length,a=t.p.length;Nm(i,t,r<.05?e:new re,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Nm(i,t,e,n,r){let s=n.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(p,g)=>[n.x+l*p*o-g*a,n.z+l*p*a+g*o],h=new Mr(i,t,c),u=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Im(h,u,f,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":Im(h,u,f,d,1);break;case"sofa_l":Lm(h,u,f,d,!1);break;case"sofa_u":Lm(h,u,f,d,!0);break;case"bed":z1(h,u,f,d);break;case"chair":V1(h,u,f,d);break;case"table":G1(h,u,f,d);break;case"desk":H1(h,u,f,d);break;case"nightstand":$i(h,u,f,d,1,d*.72,!0),h.seg(-u/2,d*.5,f/2-.02,u/2,d*.5,f/2-.02,Qt);break;case"wardrobe":$i(h,u,f,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":W1(h,u,f,d);break;case"kitchen":X1(h,u,f,d);break;case"fridge":Y1(h,u,f,d);break;case"fridge_smart":q1(h,u,f,d);break;case"stove":Z1(h,u,f,d);break;case"sink":K1(h,u,f,d);break;case"bathtub":J1(h,u,f,d);break;case"shower":j1(h,u,f,d);break;case"wc":Q1(h,u,f,d);break;case"washbasin":tM(h,u,f,d);break;case"tv_board":eM(h,u,f,d);break;case"plant":nM(h,u,f,d);break;case"rug":iM(h,u,f);return;case"stairs":rM(h,u,f,d);break;case"stairs_u":sM(h,u,f,d);break;case"stairwell":return;case"sideboard":oM(h,u,f,d);break;case"dresser":aM(h,u,f,d);break;case"tall_cabinet":$i(h,u,f,d,1,d*.5);break;case"coat_rack":lM(h,u,f,d);break;case"bench":Fm(h,u,f,d,!1);break;case"corner_bench":Fm(h,u,f,d,!0);break;case"bar_stool":cM(h,u,f,d);break;case"office_chair":uM(h,u,f,d);break;case"stool":hM(h,u,f,d);break;case"kitchen_wall":fM(h,u,f,d);return;case"kitchen_tall":dM(h,u,f,d);break;case"island":pM(h,u,f,d);break;case"worktop":h.box(-u/2,u/2,Math.max(0,d-.04),d,-f/2,f/2,N.whiteTop,N.whiteTop,dt);return;case"dishwasher":mM(h,u,f,d);break;case"washer":Dm(h,u,f,d,!1);break;case"dryer":Dm(h,u,f,d,!0);break;case"bunk_bed":gM(h,u,f,d);break;case"table_round":bM(h,u,f,d);break;case"coffee_table":xM(h,u,f,d);break;case"tv_wall":vM(h,u,f,d);return;case"parking":{let g=[[-u/2,-f/2],[u/2,-f/2],[u/2,f/2],[-u/2,f/2]];for(let m=0;m<4;m++)h.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Qt);h.seg(-u*.15,.012,f/2-.45,0,.012,f/2-.2,dt),h.seg(0,.012,f/2-.2,u*.15,.012,f/2-.45,dt);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,d,-f/2,-f/2+f*.3,N.white,N.whiteTop,dt),h.box(-u*.2,u*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,N.accent);return;case"radiator":yM(h,u,f,d);return;case"ac_unit":_M(h,u,f,d);return;case"inverter":MM(h,u,f,d,n.variant??null);return;case"grid_point":RM(h,u,f,d);break;case"wallbox":CM(h,u,f,d);return;case"pool_pump":SM(h,u,f,d);break;case"pool_filter":wM(h,u,f,d,n.variant??null);break;case"pool_heat_pump":TM(h,u,f,d);break;case"pool_dosing":EM(h,u,f,d);break;case"pool_valve":AM(h,u,f,d);return;case"meter":PM(h,u,f,d);return;case"home_battery":if(IM(h,u,f,d,n.variant??null),n.variant==="wall")return;break;default:{let p=br(n);if(p){if(xc(h,p,u,f,d,r,null),r>.05)return}else h.box(-u/2,u/2,0,d,-f/2,f/2,N.body,N.bodyTop,dt)}}DM(e,c,u,f,n.type==="plant"?.35:.5)}function zh(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function xc(i,t,e,n,r,s,o,a=null,l=!1){let c=!!a,h=new Set([...t.motions??[],...t.spots??[]].flatMap(u=>u.parts));for(let u of t.parts){if(!l&&!a&&(u.visible===!1||u.status||u.id&&h.has(u.id))||a&&!a(u))continue;let f=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,d=f.glow&&o!==null,p=d?o:zh(f.color,!1)??N.body,g=d?o:zh(f.top,!1)??zh(f.color,!0)??Gt(p,1.25).getHex(),m=s+f.y*r,b=s+Math.min(r,(f.y+f.h)*r),y=f.edges==="glow"?ii:f.edges==="faint"?Qt:f.edges?dt:null,M=f.rot?i.rotated(f.x*e,f.z*n,f.rot):i;if(!M.shape(f,e,n,r,s,p))if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))M.lyingCyl(f.axis,f.x*e,f.z*n,m,b,f.axis==="x"?f.w*e:f.d*n,f.axis==="x"?f.d*n:f.w*e,p,g,14,y);else if(f.shape==="cyl")M.cyl(f.x*e,f.z*n,Math.min(f.w*e,f.d*n)/2,m,b,p,g,14,y);else if(f.shape==="loft"){let x=f.tx??f.x,_=f.tz??f.z,S=f.tw??f.w,A=f.td??f.d;M.loft([(f.x-f.w/2)*e,(f.x+f.w/2)*e,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(x-S/2)*e,(x+S/2)*e,(_-A/2)*n,(_+A/2)*n],m,b,p,g,y)}else M.box((f.x-f.w/2)*e,(f.x+f.w/2)*e,m,b,(f.z-f.d/2)*n,(f.z+f.d/2)*n,p,g,y)}}function km(i,t){let e=new re;return xc(new Mr(e,new Oe,(n,r)=>[n,r]),i,t.w,t.d,t.h,0,null,null,!0),e.geometry()}function zm(i,t,e,n,r,s){let o=s*ue,a=Math.cos(o),l=Math.sin(o),c=(p,g)=>[e+p*a-g*l,r+p*l+g*a],h=new Mr(i,new Oe,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function vc(i,t,e,n,r,s=o=>!!o.glow){let o=i.p.length,a=e.rotation*ue,l=Math.cos(a),c=Math.sin(a),h=e.mirror?-1:1,u=(f,d)=>[e.x+h*f*l-d*c,e.z+h*f*c+d*l];xc(new Mr(i,new Oe,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s),Rn(i.p,o,e,n+e.h/2)}function yc(i,t,e,n,r){let s=i.p.length,o=e.rotation*ue,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];xc(new Mr(i,new Oe,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r),Rn(i.p,s,e,n+e.h/2)}var Mc=Math.PI/180,OM=1.13,UM=1.72,Xh=.025,wr=.07,Vm=.25;function Gm(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=Wi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(o,a);if(l<.5)continue;let c=a/l,h=-o/l,u=an(n,s),f=u.top-u.bottom,d=s.sources.find(m=>m.room_id===s.roomLeft)?.edge??null,p={floorId:n.id,room:s.roomLeft,edge:d,free:!!s.free},g=(m,b,y,M)=>e.push({key:m,section:null,side:"top",flat:!1,o:b,eu:y,es:[0,1,0],n:M,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[M[0],M[2]],wall:p});g(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation+u.bottom,s.a[1]+h*s.right],[o/l,0,a/l],[c,0,h]),s.free&&g(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation+u.bottom,s.b[1]-h*s.left],[-o/l,0,-a/l],[-c,0,-h])}}return e}var Yh="ground";function qh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Hm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=qh(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Bp(s,o,a)):t.base??0;return{key:Yh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function BM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>Ge(n)-Ge(e))[0]??null}function Ki(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(y=>{let M=uc(i,y,y.overhang??t.overhang),x=y.points?.length?Co(y,y.shape==="parapet"?0:Math.max(0,Math.min(M.a,M.b,M.u0,M.u1))):void 0;return kM(y,M).map(_=>x?{..._,footprint:x}:_)});let e=BM(i);if(!e)return[];let n=e.rooms.flatMap(y=>y.points.map(M=>M[0])),r=e.rooms.flatMap(y=>y.points.map(M=>M[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=Ge(e);if(t.type==="flat")return[Wm("main",null,o,l,a,c,h+Vm)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,p=d*Math.tan(t.pitch*Mc),g=(y,M,x)=>f?[y,h+x,(l+c)/2+M]:[(o+a)/2+M,h+x,y],[m,b]=f?[o,a]:[l,c];return[-1,1].map(y=>_c(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",g(m,y*d,0),g(b,y*d,0),g(m,0,p),t.pitch,()=>[0,b-m]))}function kM(i,t){let e=Hn(i),n=Mn(i),r=(g,m,b)=>{let[y,M]=e.at(g,m);return[y,b,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let g=e.at(a,-s),m=e.at(l,e.w+o);return[Wm(i.id,i.id,Math.min(g[0],m[0]),Math.min(g[1],m[1]),Math.max(g[0],m[0]),Math.max(g[1],m[1]),i.eave_a+Vm)]}if(i.shape==="pent")return[_c(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:h?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=h?e.u0+u-a:0,d=h?l-(e.u1-u):0,p=[];if(n.vr>.3){let g=Math.hypot(n.vr+s,n.rh-n.y(-s));p.push(_c(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,m=>[f*(m/g),c-d*(m/g)]))}if(e.w-n.vr>.3){let g=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));p.push(_c(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/g),c-f*(m/g)]))}if(h){let g=n.y(-s),m=n.y(e.w+o),b=[[`${i.id}:c`,"c",r(a,e.w+o,m),r(a,-s,g),r(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,g),r(l,e.w+o,m),r(e.u1-u,n.vr,n.rh)]];for(let[y,M,x,_,S]of b){let A=zM(y,i.id,M,x,_,S);A&&p.push(A)}}return p}function zM(i,t,e,n,r,s){let o=Do(Tr(r,n));if(o<.3)return null;let a=Zi(Tr(r,n)),l=Tr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Do(h);if(u<.3)return null;let f=Zi(h),d=Zi(qm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Zi([-f[0],0,-f[2]]),g=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Mc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:g,span:b=>{let y=Math.min(1,Math.max(0,b/u));return[c*y,o-(o-c)*y]},facing:[p[0],p[2]]}}function _c(i,t,e,n,r,s,o,a){let l=Zi(Tr(r,n)),c=Zi(Tr(s,n)),h=Zi(qm(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=Zi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:Do(Tr(r,n)),ls:Do(Tr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Wm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Xm(i){let t=i.module_w||OM,e=i.module_h||UM;return i.portrait===!1?[e,t]:[t,e]}function VM(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Ym(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Mc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Mc:0}function GM(i,t){let[,e]=Xm(t),n=Ym(i,t);return i.wall?e*Math.cos(n)+Xh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Xh}function No(i,t,e=!1){let[n,r]=Xm(t),s=[],o=Ym(i,t),a=r*Math.cos(o),l=GM(i,t),c=VM(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(g,m,b)=>[i.o[0]+i.eu[0]*g+i.es[0]*m+i.n[0]*b,i.o[1]+i.eu[1]*g+i.es[1]*m+i.n[1]*b,i.o[2]+i.eu[2]*g+i.es[2]*m+i.n[2]*b],p=(g,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[b,y]=i.span(m);return g>=b-1e-6&&g<=y+1e-6};return c.forEach((g,m)=>{let b=t.align==="right"?h-g:t.align==="center"?(h-g)/2:0;for(let y=0;y<g;y++){let M=`${m}:${y}`,x=u.has(M);if(x&&!e)continue;let _=t.u+(y+b)*(n+Xh),S=t.v+m*l,A=_+n,v=S+(i.flat||i.wall?a:r);if(f){if(!(p((_+A)/2,S)&&p((_+A)/2,v)))continue}else if(![[_,S],[A,S],[A,v],[_,v]].every(([R,L])=>p(R,L)))continue;if(i.footprint&&!im(i.footprint,[[_,S],[A,S],[A,v],[_,v]].map(([R,L])=>{let D=d(R,L,0);return[D[0],D[2]]})))continue;if(i.wall&&o>.001){let R=wr+r*Math.sin(o),[L,D]=t.flip?[R,wr]:[wr,R],U=[d(_,S,L),d(A,S,L),d(A,v,D),d(_,v,D)],B=t.flip?S:v,O=[_+.05,A-.05].map(k=>[d(k,B,0),d(k,B,R)]);s.push({corners:U,posts:O,cell:M,skipped:x});continue}if(!i.flat){s.push({corners:[d(_,S,wr),d(A,S,wr),d(A,v,wr),d(_,v,wr)],posts:[],cell:M,skipped:x});continue}let w=.15,T=w+r*Math.sin(o),[E,I]=t.flip?[v,S]:[S,v],C=[d(_,E,w),d(A,E,w),d(A,I,T),d(_,I,T)];s.push({corners:C,posts:[_+.05,A-.05].flatMap(R=>[[d(R,E,0),d(R,E,w)],[d(R,I,0),d(R,I,T)]]),cell:M,skipped:x})}}),s}function Tr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Do(i){return Math.hypot(i[0],i[1],i[2])}function Zi(i){let t=Do(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function qm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var HM=.78,WM=1.18;function XM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||HM,module_h:i.h||WM}}function Sc(i,t){let e=No(i,XM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function $m(i,t,e){let n=t?Sc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Xt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function wc(i,t,e,n){let r=t.map((c,h)=>c-i[h]),s=e.map((c,h)=>c-i[h]),o=[r[1]*s[2]-r[2]*s[1],r[2]*s[0]-r[0]*s[2],r[0]*s[1]-r[1]*s[0]],a=Math.hypot(...o)||1,l=o.reduce((c,h,u)=>c+h*n[u],0)<0?-1:1;return o.map(c=>l*c/a)}function Oo(i,t,e){return i.setAttribute("solarNormal",new Et(t,3)),i.setAttribute("solarPoint",new Et(e,3)),i}function Tc(i){let t=i.onBeforeCompile.bind(i),e=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(n,r)=>{t(n,r),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 solarNormal;
attribute vec3 solarPoint;`).replace("#include <project_vertex>",`#include <project_vertex>
      vec3 solarWorldPoint = (modelMatrix * vec4(solarPoint, 1.0)).xyz;
      vec3 solarWorldNormal = mat3(modelMatrix) * solarNormal;
      if (dot(solarWorldNormal, cameraPosition - solarWorldPoint) <= 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`)},i.customProgramCacheKey=()=>`${e()}-solar-facing`,i}function Zm(i,t,e,n,r){let s=n==="bottom"?0:n==="middle"?.5:1,o=n==="bottom"?-1:1,a=(f,d,p)=>{let g=d.map((y,M)=>y+(p[M]-y)*s),m=f.map((y,M)=>y-g[M]),b=m.reduce((y,M,x)=>y+M*e[x],0);return g.map((y,M)=>y+m[M]*Math.cos(r)-t[M]*b*Math.sin(r)*o)},[l,c,h,u]=i;return[a(l,l,u),a(c,c,h),a(h,c,h),a(u,l,u)]}var Uo=1712952,Bo=2239816,Qm=1318193,Er=Gt(3662079,.9),Ar=Gt(5995775,.45),Ke=.14,YM=9427199,$h=13226982,Zh=14936565,qM={black:{glass:new Q(329483),edge:Gt(9082544,.32),cells:Gt(2766160,.22)},blue:{glass:new Q(1386842),edge:Gt(10467583,.55),cells:Gt(4025599,.35)}},$M=Gt(13226982,.5),ZM=Gt(13226982,.85),KM=Gt(16757575,.95),Km=new Q(2845583),Jm=new Q(3818072),jm=new Q(4871791);function Ec(i,t,e,n,r){if(t.length<3)return;let[s,o,a]=t,l=(o[1]-s[1])*(a[2]-s[2])-(o[2]-s[2])*(a[1]-s[1]),c=(o[0]-s[0])*(a[1]-s[1])-(o[1]-s[1])*(a[0]-s[0]),u=l*(s[0]-n[0])+c*(s[2]-n[1])<0?[...t].reverse():t;for(let d=1;d+1<u.length;d++)i.tri(u[0],u[d],u[d+1],e);let f=Math.min(...u.map(d=>d[1]));for(let d=0;d<u.length;d++){let p=u[d],g=u[(d+1)%u.length],m=Math.abs(p[1]-f)<1e-6&&Math.abs(g[1]-f)<1e-6,b=Math.hypot(p[0]-g[0],p[2]-g[2])<1e-6;r.seg(p,g,m?dc:b?ri:ii)}}function JM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>Ge(n)-Ge(e))[0]??null}function t0(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:tS(i),r=e?.type==="custom"?eS(i,e.sections??[],e.overhang):n?[n]:[];return QM(i,r),jM(i,r,t),r}function jM(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Ki(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Sc(o,s):null;if(!o||!a)continue;let l=o.section?t.find(E=>E.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,h=E=>[E[0],E[1]-c,E[2]],[u,f,d,p]=a.map(h),g=e.get(s.id)??{open:0,tilt:0,cover:0},m=s.float?l.win??={solid:new re,lines:new Oe}:l.winRoof??={solid:new re,lines:new Oe},b=(E,I)=>[E[0]+o.n[0]*I,E[1]+o.n[1]*I,E[2]+o.n[2]*I],y=(E,I,C)=>[E[0]+(I[0]-E[0])*C,E[1]+(I[1]-E[1])*C,E[2]+(I[2]-E[2])*C],M=g.open>.02||g.tilt>.02?KM:ZM,x=[u,f,d,p].map(E=>b(E,.06)),_=[u,f,d,p].map(E=>b(E,-.02));for(let E=0;E<4;E++){m.lines.seg(x[E],x[(E+1)%4],M);let I=(E+1)%4;m.solid.tri(_[E],_[I],x[I],jm),m.solid.tri(_[E],x[I],x[E],jm)}let S=(g.open>.02?30*Math.min(1,g.open):g.tilt>.5?12:0)*ue,[A,v,w,T]=Zm([u,f,d,p].map(E=>b(E,.065)),o.n,o.es,s.hinge,S);m.solid.tri(A,v,w,Km),m.solid.tri(A,w,T,Km);for(let[E,I]of[[A,v],[v,w],[w,T],[T,A]])m.lines.seg(E,I,M);if(g.cover>.02){let E=Math.min(1,g.cover),I=b(y(T,A,E),.01),C=b(y(w,v,E),.01),R=b(T,.01),L=b(w,.01);m.solid.tri(I,C,L,Jm),m.solid.tri(I,L,R,Jm)}}}function QM(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Ki(i).map(r=>[r.key,r]));for(let r of e){let s=n.get(r.face);if(!s)continue;let o=s.section?t.find(a=>a.sections?.includes(s.section)):t[0];if(o){let a=o.solar??={solid:new re,lines:new Oe,facing:{normals:[],points:[],lineNormals:[],linePoints:[]}};Kh(a.solid,a.lines,s,r,o.floor.elevation+o.base,a.facing)}}}function Kh(i,t,e,n,r,s){let o=h=>[h[0],h[1]-r,h[2]],a=qM[n.look==="blue"?"blue":"black"],l=n.portrait===!1?10:6,c=n.portrait===!1?6:10;for(let h of No(e,n)){let u=i.p.length,f=t.p.length,[d,p,g,m]=h.corners.map(o);i.tri(d,p,g,a.glass),i.tri(d,g,m,a.glass),i.tri(d,g,p,a.glass),i.tri(d,m,g,a.glass);let b=(x,_=.004)=>[x[0]+e.n[0]*_,x[1]+e.n[1]*_,x[2]+e.n[2]*_],y=(x,_,S)=>[x[0]+(_[0]-x[0])*S,x[1]+(_[1]-x[1])*S,x[2]+(_[2]-x[2])*S],M=[d,p,g,m].map(x=>b(x));for(let x=0;x<4;x++)t.seg(M[x],M[(x+1)%4],a.edge);for(let x=1;x<l;x++)t.seg(b(y(d,p,x/l)),b(y(m,g,x/l)),a.cells);for(let x=1;x<c;x++)t.seg(b(y(d,m,x/c)),b(y(p,g,x/c)),a.cells);for(let[x,_]of h.posts)t.seg(o(x),o(_),$M);if(s){let x=wc(d,p,g,e.n);for(let _=u;_<i.p.length;_+=3)s.normals.push(...x),s.points.push(...d);for(let _=f;_<t.p.length;_+=3)s.lineNormals.push(...x),s.linePoints.push(...d)}}}function tS(i){let t=i.settings.roof,e=JM(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(T=>T.points.map(E=>E[0])),r=e.rooms.flatMap(T=>T.points.map(E=>E[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new re,u=new Oe;if(t.type==="flat"){Me(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,Uo,Bo,{bottom:!0});let T=.252;for(let[E,I]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([E[0],T,E[1]],[I[0],T,I[1]],Er),u.seg([E[0],0,E[1]],[I[0],0,I[1]],Ar);return{floor:e,base:Ge(e)-e.elevation,solid:h,lines:u,glass:new re}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-o)/2,g=p*Math.tan(t.pitch*ue),m=(T,E,I)=>d?[T,I,(l+c)/2+E]:[(o+a)/2+E,I,T],[b,y]=d?[o,a]:[l,c],M=new Q(Bo),x=new Q(Uo),_=(T,E,I,C,R)=>{h.tri(T,E,I,R),h.tri(T,I,C,R)};for(let T of[-1,1]){_(m(b,T*p,0),m(y,T*p,0),m(y,0,g),m(b,0,g),M),_(m(b,T*p,-Ke),m(b,0,g-Ke),m(y,0,g-Ke),m(y,T*p,-Ke),x),_(m(b,T*p,-Ke),m(y,T*p,-Ke),m(y,T*p,0),m(b,T*p,0),x);for(let E of[b,y])_(m(E,T*p,-Ke),m(E,T*p,0),m(E,0,g),m(E,0,g-Ke),x);u.seg(m(b,T*p,0),m(y,T*p,0),Ar);for(let E of[b,y])u.seg(m(E,T*p,0),m(E,0,g),Ar)}let S=t.overhang,A=new Q(Qm),v=p-S,w=v*Math.tan(t.pitch*ue);for(let T of[b+S,y-S])Ec(h,[m(T,-v,-Ke),m(T,v,-Ke),m(T,0,w-Ke)],A,[(o+a)/2,(l+c)/2],u);return u.seg(m(b,0,g+.004),m(y,0,g+.004),Er),{floor:e,base:Ge(e)-e.elevation,solid:h,lines:u,glass:new re}}function eS(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(Ki(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=um(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new re,lines:new Oe,glass:new re,sections:[],lift:!o.open}),c.sections.push(o.id);let h=cc(t,o),u=Ge(a)>o.base+.05&&!o.dormer&&!h,f=t.filter(g=>g!==o&&cc(t,g)===o).flatMap(g=>lm(o,g));for(let g of i.settings.roof.windows??[]){let m=s.get(g.face),b=m&&m.section===o.id?Sc(m,g):null;if(!b)continue;let y=b.map(M=>mi(o,M[0],M[2]));f.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let d=h?Ph(h,o):o,p=null;if(h){let g=Hn(d),m=qi(h,{u0:0,u1:0,a:0,b:0}),b=y=>{let[M,x]=g.at(y,g.w/2),[_,S]=mi(h,M,x);return ms(m,_,S)??Mn(h).y(S)};p=b(g.u0)<=b(g.u1)?0:1}nS(c.solid,c.lines,d,uc(i,d,d.overhang??e),a.elevation,c.glass,u,f,p)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function nS(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Hn(e),h=Mn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,u.a),d=Math.max(0,u.b),p=c.w,g=c.u0-Math.max(0,u.u0),m=c.u1+Math.max(0,u.u1),b=(R,L,D)=>{let[U,B]=c.at(R,L);return[U,D-r,B]},y=new Q(Bo),M=new Q(Uo),x=new Q(Qm),_=(R,L)=>{for(let D=1;D+1<R.length;D++)i.tri(R[0],R[D],R[D+1],L)},S=[],A=[],v=[],w=null;if(e.shape==="flat"||e.shape==="parapet"){let R=e.eave_a,L=e.shape==="parapet",D=e.points&&e.points.length>=3?Co(e,L?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):L?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,p),c.at(c.u0,p)]:[c.at(g,-f),c.at(m,-f),c.at(m,p+d),c.at(g,p+d)];Yi(D)<0&&(D=[...D].reverse()),Me(i,D,R-r,R-r+.25,Uo,Bo,{bottom:!0});for(let U=0;U<D.length;U++){let B=D[U],O=D[(U+1)%D.length];t.seg([B[0],R-r+.252,B[1]],[O[0],R-r+.252,O[1]],Er),t.seg([B[0],R-r,B[1]],[O[0],R-r,O[1]],Ar)}if(L){let U=G=>Yi(G)>=0?G:[...G].reverse(),B=U(D),O=Ch(B,-.2),k=B.length;for(let G=0;G<k;G++){let J=U([B[G],B[(G+1)%k],O[(G+1)%k],O[G]]);Me(i,J,R-r+.25,R-r+.65,Uo,Bo),t.seg([B[G][0],R-r+.652,B[G][1]],[B[(G+1)%k][0],R-r+.652,B[(G+1)%k][1]],Er),t.seg([O[G][0],R-r+.652,O[G][1]],[O[(G+1)%k][0],R-r+.652,O[(G+1)%k][1]],Er)}}}else{let R=qi(e,u);S=R.faces;for(let L of a)S=S.flatMap(D=>cm(D,L));A=R.rim,v=R.ridges,w=R.gable}let T=!!e.open,E=new Q(YM);for(let R of S){if(T){for(let L=1;L+1<R.length;L++)s.tri(b(R[0][0],R[0][1],R[0][2]),b(R[L][0],R[L][1],R[L][2]),b(R[L+1][0],R[L+1][1],R[L+1][2]),E);continue}_(R.map(([L,D,U])=>b(L,D,U)),y),_(R.map(([L,D,U])=>b(L,D,U-Ke)),M)}for(let R=0;R<A.length;R++){let[L,D,U]=A[R],[B,O,k]=A[(R+1)%A.length];T||_([b(L,D,U),b(B,O,k),b(B,O,k-Ke),b(L,D,U-Ke)],M),t.seg(b(L,D,U),b(B,O,k),T?Er:Ar)}if(T){e.points?.length?iS(i,t,e,r):rS(i,t,c,h,u,b,r);return}for(let[[R,L,D],[U,B,O]]of v)t.seg(b(R,L,D+.004),b(U,B,O+.004),Er);let I=e.base;if(o)return;let C=c.at((c.u0+c.u1)/2,p/2);if(e.points?.length){let R=qi(e,{u0:0,u1:0,a:0,b:0}).rim;R.forEach((L,D)=>{let U=R[(D+1)%R.length],B=L,O=e.shape==="flat"||e.shape==="parapet"?0:Ke,k=L[2]-O,G=U[2]-O;if(Math.max(k,G)<=I+.001)return;let J=j=>[L[0]+(U[0]-L[0])*j,L[1]+(U[1]-L[1])*j,I+O];k<I&&(B=J((I-k)/(G-k))),G<I&&(U=J((I-k)/(G-k))),_([b(B[0],B[1],I),b(U[0],U[1],I),b(U[0],U[1],U[2]-O),b(B[0],B[1],B[2]-O)],x)});return}if(w){let R=sS(w,I-Ke),L=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(R.length>=3)for(let D of L)Ec(i,R.map(([U,B])=>b(D,U,B)),x,C,t)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let R of[0,p]){let L=h.y(R)-Ke;L>I+.02&&Ec(i,[b(c.u0,R,I),b(c.u1,R,I),b(c.u1,R,L),b(c.u0,R,L)],x,C,t)}else if(e.eave_a>I+.02)for(let[R,L,D,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,p],[c.u1,p,c.u0,p],[c.u0,p,c.u0,0]])Ec(i,[b(R,L,I),b(D,U,I),b(D,U,e.eave_a),b(R,L,e.eave_a)],x,C,t)}function iS(i,t,e,n){let o=Hn(e),a=qi(e,{u0:0,u1:0,a:0,b:0});a.rim.forEach((l,c)=>{let h=a.rim[(c+1)%a.rim.length],u=o.at(l[0],l[1]),f=o.at(h[0],h[1]),d=f[0]-u[0],p=f[1]-u[1],g=Math.hypot(d,p);if(g<1e-6)return;let m=-p/g*.12/2,b=d/g*.12/2,y=[[u[0]+m,u[1]+b],[f[0]+m,f[1]+b],[f[0]-m,f[1]-b],[u[0]-m,u[1]-b]];Yi(y)<0&&y.reverse();let M=(S,A)=>l[2]+(h[2]-l[2])*((S-u[0])*d+(A-u[1])*p)/(g*g)-n-.03,x=i.p.length;Me(i,y,0,.18,$h,Zh,{bottom:!0});for(let S=x;S<i.p.length;S+=3)i.p[S+1]+=M(i.p[S],i.p[S+2])-.18;t.seg([u[0],l[2]-n-.18,u[1]],[f[0],h[2]-n-.18,f[1]],Ar);let _=Math.max(1,Math.ceil(g/3.5));for(let S=0;S<_;S++){let A=S/_,v=u[0]+d*A,w=u[1]+p*A,T=M(v,w)-.18;T<=0||Me(i,[[v-.12/2,w-.12/2],[v+.12/2,w-.12/2],[v+.12/2,w+.12/2],[v-.12/2,w+.12/2]],0,T,$h,Zh,{bottom:!0})}})}function rS(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,p=(b,y,M,x,_,S)=>{let A=[e.at(b,M),e.at(y,M),e.at(y,x),e.at(b,x)],v=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Me(i,v<0?[...A].reverse():A,_-o,S-o,$h,Zh,{bottom:!0})},g=o;for(let[b,y]of[[0,h],[a,u]]){if(!y)continue;let M=n.y(b)-.03,x=b===0?0:a-l;p(e.u0,e.u1,x,x+l,M-c,M),t.seg(s(e.u0,b,M-c),s(e.u1,b,M-c),Ar)}for(let[b,y]of[[e.u0,f],[e.u1-l,d]])if(y)for(let M=0;M<6;M++){let x=a*M/6,_=a*(M+1)/6,S=Math.min(n.y(x),n.y(_))-.03;p(b,b+l,x,_,S-c,S)}let m=[];for(let[b,y]of[[0,h],[a-l,u]]){if(!y)continue;let M=e.u1-e.u0-l,x=Math.max(1,Math.ceil(M/3.5));for(let _=0;_<=x;_++){let S=e.u0+M*_/x;_===0&&!f||_===x&&!d||m.push([S,b])}}if(!h&&!u)for(let b of[e.u0,e.u1-l])(b===e.u0&&f||b!==e.u0&&d)&&m.push([b,a/2-l/2]);for(let[b,y]of m){let M=n.y(y+l/2)-.03-c;p(b,b+l,y,y+l,g,M)}}function sS(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ko={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Ac={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ji=.2,oS=.01,zo=8,Rc=.42,Jh=.42;function r0(i,t,e,n=[],r=[],s){let{walls:o,open:a}=Wi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=i.openings.map(C=>Po(i,C,o)).filter(C=>C!==null),c=(C,R,L)=>{let D=s?s(C,R):null;return D===null?L:Math.min(L,D)},h=(C,R,L,D,U)=>{if(!s)return U;let B=U,O=Math.max(2,Math.ceil((D-L)/.25)+1);for(let k=0;k<O;k++){let G=L+(D-L)*k/(O-1);B=Math.min(B,c(C[0]+R[0]*G,C[1]+R[1]*G,U))}return B},u=new re(!0,!0),f=[],d=new Oe,p=[];for(let C of i.rooms){if(C.points.length<3)continue;let R=Vo(C.points),L=ge(i,C),D=hc(i,C,l);p.push(...D);let U=Ac[C.floor_material]??Ac.wood,B=new Q(U.color),O=n.flatMap(ut=>{if(Am(ut,R))return[Bh(ut,.003)];if(!dm(ut))return[];let nt=bs(R,ut);return nt.length>=3&&Math.abs(Mo(nt))>.01?[Bh(Vo(nt),.003)]:[]});p.push(...O);let k=[...R,...O.flat()],G=u.count;for(let[ut,nt,ft]of mn(R,O)){let H=k[ut],X=k[nt],st=k[ft],ct=[[H,X,st]];for(let lt of D)ct=ct.flatMap(pt=>gs(pt,lt));for(let lt of ct)for(let pt=1;pt+1<lt.length;pt++){let[zt,Nt,Dt]=[lt[0],lt[pt],lt[pt+1]];u.tri([zt[0],L,zt[1]],[Dt[0],L,Dt[1]],[Nt[0],L,Nt[1]],B,B,B,[zt[0],zt[1],Dt[0],Dt[1],Nt[0],Nt[1]],$t,U.tile)}}f.push({roomId:C.id,start:G,end:u.count,color:U.color});let J=new Q(ko.slab),j=ut=>{for(let nt=0;nt<ut.length;nt++)for(let[ft,H]of Ih(ut[nt],ut[(nt+1)%ut.length],D))u.tri([ft[0],L-Ji,ft[1]],[ft[0],L,ft[1]],[H[0],L,H[1]],J),u.tri([ft[0],L-Ji,ft[1]],[H[0],L,H[1]],[H[0],L-Ji,H[1]],J)};j(R);for(let ut of O){j([...Vo(ut)].reverse());for(let nt=0;nt<ut.length;nt++){let ft=ut[nt],H=ut[(nt+1)%ut.length];d.seg([ft[0],L+.006,ft[1]],[H[0],L+.006,H[1]],ii),d.seg([ft[0],L-Ji,ft[1]],[H[0],L-Ji,H[1]],ri)}}}let g=new Map,m=[],b=new Map;for(let C of o){let R="interior",L=null;if(C.exterior){let U=C.b[0]-C.a[0],B=C.b[1]-C.a[1],O=Math.hypot(U,B)||1,k=[B/O,-U/O],G=(Math.round(Math.atan2(k[1],k[0])/(2*Math.PI)*zo)%zo+zo)%zo;R=`s${G}`;let J=G/zo*2*Math.PI;L=[Math.cos(J),Math.sin(J)]}let D=g.get(R);D===void 0&&(D=m.length,g.set(R,D),m.push(L)),b.set(C,D)}let y=new Map,M=[];for(let C of i.openings){let R=vr(C,i.rooms,i.walls??[]);if(!R)continue;let L=yr(o,C,R);if(!L)continue;let{wall:D,s:U}=L,B=Pc([D.b[0]-D.a[0],D.b[1]-D.a[1]]),O=Math.hypot(D.b[0]-D.a[0],D.b[1]-D.a[1]),k=Math.min(C.width,O),G=Math.max(0,Math.min(O-k,U-k/2)),J=R.room.points,j=D.free?B[0]*(J[1][0]-J[0][0])+B[1]*(J[1][1]-J[0][1])>0:D.roomLeft===C.room_id,ut=[-B[1],B[0]],nt=j?ut:[-ut[0],-ut[1]],ft=l.find(Yt=>Yt.opening.id===C.id),H=ft?.threshold??ge(i,R.room),X=ft?.room??R.room,st=X.wall_offset!=null||X.floor_offset!=null?ge(i,X):H,ct=Math.min(ft?.ceiling??1/0,an(i,D).top);if(ft?.other&&ct-H<.12)continue;let lt=Math.min(h(D.a,B,G,G+k,ct)-.02,st+C.sill+C.height),pt=Math.min((ft?.stair?fm(ft):H)+C.sill,lt-.1),zt=[nt[1],-nt[0]],Nt=B[0]*zt[0]+B[1]*zt[1]>0,Dt={opening:C,bucket:b.get(D),start:[D.a[0]+B[0]*G,D.a[1]+B[1]*G],axis:B,width:k,toRoom:nt,faceRoom:j?D.left:D.right,faceOut:j?D.right:D.left,sill:pt,top:lt,hingeAtStart:C.hinge==="left"===Nt,exterior:D.exterior};M.push(Dt);let Zt=y.get(D);Zt||y.set(D,Zt=[]),Zt.push({s0:G,s1:G+k,sill:pt,top:lt,info:Dt})}let x=Math.min(i.cut_height,Ge(i)-i.elevation),_=new re;for(let C of o){let R=b.get(C),L=Pc([C.b[0]-C.a[0],C.b[1]-C.a[1]]),D=(y.get(C)??[]).sort((nt,ft)=>nt.s0-ft.s0),U=an(i,C),B=U.top,O=[],k=[-1/0,...new Set(D.flatMap(nt=>[nt.s0,nt.s1])).values(),1/0].sort((nt,ft)=>nt-ft);for(let nt=0;nt+1<k.length;nt++){let ft=k[nt],H=k[nt+1];if(H-ft<1e-6)continue;let X=Number.isFinite(ft)&&Number.isFinite(H)?(ft+H)/2:Number.isFinite(ft)?ft+1:H-1,st=D.filter(pt=>pt.s0<X&&pt.s1>X).map(pt=>[pt.sill,pt.top]).sort((pt,zt)=>pt[0]-zt[0]),ct=[],lt=U.bottom-Ji;for(let[pt,zt]of st)pt>lt+1e-4&&ct.push([lt,pt<1e-4?-oS:pt]),lt=Math.max(lt,zt);B>lt+1e-4&&ct.push([lt,B]),O.push({t0:ft,t1:H,ranges:ct})}let G=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),J=s&&h(C.a,L,0,G,B)<B-.001,j=J?O.flatMap(nt=>{let ft=Math.max(nt.t0,-.5),H=Math.min(nt.t1,G+.5),X=Math.max(1,Math.ceil((H-ft)/.3));return Array.from({length:X},(st,ct)=>({t0:ct===0?nt.t0:ft+(H-ft)*ct/X,t1:ct===X-1?nt.t1:ft+(H-ft)*(ct+1)/X,ranges:nt.ranges,inner0:ct>0,inner1:ct<X-1}))}):O.map(nt=>({...nt,inner0:!1,inner1:!1})),ut=nt=>(nt[0]-C.a[0])*L[0]+(nt[1]-C.a[1])*L[1];for(let nt of j){let ft=lS(C.footprint,C.a,L,nt.t0,nt.t1);if(ft.length<3)continue;let H=(ct,lt)=>Math.abs(ut(ct)-lt)<1e-4,X=(ct,lt)=>nt.inner0&&H(ct,nt.t0)&&H(lt,nt.t0)||nt.inner1&&H(ct,nt.t1)&&H(lt,nt.t1),st=J?Math.min(...ft.map(([ct,lt])=>c(ct,lt,B))):B;for(let[ct,lt]of nt.ranges){let pt=Math.min(lt,J?Math.max(...ft.map(([Zt,Yt])=>c(Zt,Yt,B))):lt);if(pt-ct<1e-4||st-ct<.01)continue;let zt=ct>.01,Nt=J&&lt>st,Dt=(Zt,Yt)=>Math.min(lt,c(Zt,Yt,B));if(ct<x-1e-6){let Zt=pt>x+1e-6?pm+R:_r+R,Yt=Nt&&st<x?(be,Pe)=>Math.min(x,Dt(be,Pe)):Math.min(pt,x);Me(_,ft,ct,Yt,ko.wall,ko.wallTop,{aoFrom:0,bottom:zt,fold:_r+R,topFold:Zt,skipSide:X})}pt>x+1e-6&&st>x+1e-6&&Me(_,ft,Math.max(ct,x),Nt?Dt:pt,ko.wall,ko.wallTop,{aoFrom:0,fold:R,bottom:zt&&ct>=x,skipSide:X})}}}let S=o.flatMap(C=>C.footprint),A=uS(o,S),v=new Oe;v.p.push(...d.p),v.c.push(...d.c),v.f.push(...d.f);for(let C of l){let R=C.stair;if(!R)continue;let L=(B,O)=>[C.start[0]+C.axis[0]*B+R.toward[0]*O,C.start[1]+C.axis[1]*B+R.toward[1]*O],D=Ac[R.room.floor_material]?.color??Ac.wood.color;for(let B=0;B<R.count;B++){let O=R.face+R.depth*B/R.count,k=R.face+R.depth*(B+1)/R.count,G=R.recess?C.low+(C.high-C.low)*(B+1)/R.count:C.high-(C.high-C.low)*B/R.count,J=Vo([L(0,O),L(C.width,O),L(C.width,k),L(0,k)]);Me(_,J,C.low-.02,G,D,D,{bottom:!0});let j=L(0,O),ut=L(C.width,O);v.seg([j[0],G+.003,j[1]],[ut[0],G+.003,ut[1]],ii)}let U=R.offset===0?-C.wall.left-C.wall.right:R.back;if(R.face>U+1e-6){let B=Vo([L(0,U),L(C.width,U),L(C.width,R.face),L(0,R.face)]);Me(_,B,C.threshold-.02,C.threshold,D,D,{bottom:!0})}}let w=(C,R)=>(y.get(C)??[]).filter(R);for(let C of A.edges){let R=b.get(C.wall),L=an(i,C.wall).bottom;for(let[U,B]of Cc(C,w(C.wall,O=>O.sill<=L+.005)))v.seg([U[0],L+.004,U[1]],[B[0],L+.004,B[1]],dc);for(let[U,B]of Cc(C,w(C.wall,O=>O.sill<x&&O.top>x)))v.seg([U[0],x,U[1]],[B[0],x,B[1]],Lh,pc+R);let D=an(i,C.wall).top;for(let[U,B]of Cc(C,w(C.wall,O=>O.top>=D-.021))){if(!s){v.seg([U[0],D,U[1]],[B[0],D,B[1]],ii,D<=x+1e-6?_r+R:R);continue}let O=Math.max(1,Math.ceil(Math.hypot(B[0]-U[0],B[1]-U[1])/.3));for(let k=0;k<O;k++){let G=[U[0]+(B[0]-U[0])*k/O,U[1]+(B[1]-U[1])*k/O],J=[U[0]+(B[0]-U[0])*(k+1)/O,U[1]+(B[1]-U[1])*(k+1)/O],j=c(G[0],G[1],D),ut=c(J[0],J[1],D);v.seg([G[0],j,G[1]],[J[0],ut,J[1]],ii,Math.max(j,ut)<=x+1e-6?_r+R:R)}}}for(let C of A.corners){let R=c(C.p[0],C.p[1],an(i,C.wall).top);v.segSplit([C.p[0],an(i,C.wall).bottom+.004,C.p[1]],[C.p[0],R,C.p[1]],ri,Math.min(x,R),b.get(C.wall))}for(let C of y.values())for(let R of C)aS(v,R,x);let T=hS(A.edges,i,y);Tm(T,i,o,M,[...n,...p],o.map(C=>b.get(C)??0));let E=new re;ym(_,v,i,E);for(let C of r)Kh(_,v,C.face,C.field,i.elevation);let I=[];for(let C of i.furniture){if(Xp(C.type))continue;let R=_.count,L=v.p.length/6,D=Ce(i,C),U=pn(i,C.x,C.z),B=T.p.length;bc(_,v,T,C,D-U);for(let O=R*9+1;O<_.p.length;O+=3)_.p[O]+=U;for(let O=L*6+1;O<v.p.length;O+=3)v.p[O]+=U;for(let O=B+1;O<T.p.length;O+=3)T.p[O]+=U;(D+C.h>x+.05||C.rotation_x||C.rotation_z)&&(mc(_,R,x,Io),mm(v,L,x,Io)),I.push({id:C.id,start:R,end:_.count})}return{floor:u.geometry(),roomTris:f,holes:p,walls:_.geometry(),water:E.geometry(),lines:v.geometry(),shadow:T.geometry(),buckets:m,openings:M,walls2d:o,openRooms:a,wallBuckets:o.map(C=>b.get(C)),furnitureTris:I,roofUnder:s}}function aS(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:$t,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),ri,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),ri,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),ri,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),ri,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),ri,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Lh,pc+r)}function lS(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=e0(o,a=>s(a)-n)),Number.isFinite(r)&&(o=e0(o,a=>r-s(a))),o}function e0(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var n0=i=>Math.round(i*1e3),Go=i=>`${n0(i[0])},${n0(i[1])}`,i0=(i,t)=>{let e=Go(i),n=Go(t);return e<n?`${e}|${n}`:`${n}|${e}`};function cS(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];Go(f)!==Go(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function uS(i,t){let e=i.map(l=>({wall:l,edges:cS(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,h]of l){let u=i0(c,h);n.set(u,(n.get(u)??0)+1)}let r=[],s=new Map,o=(l,c,h)=>{let u=Go(l),f=s.get(u);f||s.set(u,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of e)for(let[h,u]of c){if(n.get(i0(h,u))!==1)continue;let f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<1e-4)continue;r.push({a:h,b:u,wall:l});let d=[(u[0]-h[0])/f,(u[1]-h[1])/f];o(h,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:h}of s.values())h.some(u=>h.some(f=>Math.abs(u[0]*f[1]-u[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Cc(i,t){if(!t.length)return[[i.a,i.b]];let e=Pc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Pc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let p=[];return u.s0>f&&p.push([f,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function hS(i,t,e){let n=new re,r=new Q(Jh,Jh,Jh),s=new Q(1,1,1);for(let o of i){let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l)||1,h=[(o.a[0]+o.b[0])/2+l/c*.05,(o.a[1]+o.b[1])/2-a/c*.05],u=t.rooms.find(p=>Xt(h,p.points)),f=ge(t,u),d=f+.002;for(let[p,g]of Cc(o,(e.get(o.wall)??[]).filter(m=>m.sill<=f+.005))){let m=g[0]-p[0],b=g[1]-p[1],y=Math.hypot(m,b);if(y<.05)continue;let M=[b/y,-m/y],x=[(p[0]+g[0])/2+M[0]*.05,(p[1]+g[1])/2+M[1]*.05];if(!t.rooms.some(A=>A.points.length>=3&&Xt(x,A.points)))continue;let _=[p[0]+M[0]*Rc,p[1]+M[1]*Rc],S=[g[0]+M[0]*Rc,g[1]+M[1]*Rc];n.tri([p[0],d,p[1]],[_[0],d,_[1]],[S[0],d,S[1]],r,s,s),n.tri([p[0],d,p[1]],[S[0],d,S[1]],[g[0],d,g[1]],r,s,r)}}return n}function s0(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Gi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Uh(e);let r=n.furniture.filter(s=>(Hp.has(s.type)||_e(s.type)?.hole)&&n.elevation+Ce(n,s)+s.h>=t.elevation+pn(t,s.x,s.z)-.3).map(Gi);return Uh([...e,...r])}function Pc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Vo(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var fS=500,o0=.12,a0=1.35,dS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ic=class{view={target:new V,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=dS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=jh(this.view.phi+this.velocity.phi,o0,a0),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},fS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let s=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-s.left,this.down.y-s.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let s=e.type==="mouse";if(s&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!s))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=jh(this.view.phi+c,o0,a0),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),this.pan(s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1])),this.pinch=s}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,s=performance.now();s-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=s,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=jh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new V(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new V(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function jh(i,t,e){return Math.min(e,Math.max(t,i))}function ji(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function Lc(i,t,e,n){let r=Math.min(1,Math.max(0,(i/t-.62)/.3)),s=e?1:.94*r;return{opacity:s,lift:e?0:(1-(n??s))*2.2}}function l0(i,t){return i.onBeforeCompile=e=>{e.uniforms.uRoofDirection=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uRoofDirection;
varying float vRoofGlass;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vec3 roofNormal = mat3(modelMatrix) * normal;
      if (roofNormal.y < 0.0) roofNormal = -roofNormal;
      float roofHorizontal = length(roofNormal.xz);
      vRoofGlass = roofHorizontal < 0.000001 ? smoothstep(-0.15, 0.15, uRoofDirection.y) : smoothstep(0.1, 0.4, dot(roofNormal.xz / roofHorizontal, uRoofDirection.xz));`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vRoofGlass;`).replace("#include <color_fragment>",`#include <color_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075), vRoofGlass);
      diffuseColor.a *= mix(1.0, 0.2, vRoofGlass);`)},i.customProgramCacheKey=()=>"fp3d-roof-glass",i}function c0(i,t,e,n,r,s,o=[],a){if(n.elevation<=2||r>=.97)return;let l=n.elevation*Math.PI/180,c=(n.azimuth+(t.settings.north??0))*Math.PI/180,h=[Math.sin(c),-Math.cos(c)],u=[h[0]*Math.cos(l),Math.sin(l),h[1]*Math.cos(l)],f=Math.min(1,n.elevation/12)*(1-.8*r),d=1/Math.tan(l),p=new Map(Ki(t).map(g=>[g.key,g]));for(let g of t.settings.roof.windows??[]){let m=p.get(g.face);if(!m)continue;let b=$m(t,m,g);if(b?.floor.id!==e.id)continue;let y=b.corners,M=m.n.reduce((B,O,k)=>B+O*u[k],0);if(M<.05)continue;let x=Math.min(1,Math.max(0,s.get(g.id)?.cover??0));if(x>=.99)continue;let _=[y.reduce((B,O)=>B+O[0],0)/4,y.reduce((B,O)=>B+O[2],0)/4],S=e.rooms.find(B=>Xt(_,B.points));if(!S)continue;let A=e.rooms.indexOf(S),v=e.rooms.filter((B,O)=>B.id===S.id||a&&a[O]===a[A]),w=ge(e,S),T=(B,O,k)=>B.map((G,J)=>G+(O[J]-G)*k),E=(B,O)=>{let k=T(T(y[0],y[1],B),T(y[3],y[2],B),O*(1-x)),G=Math.min(7,(k[1]-e.elevation-w)*d);return[k[0]-h[0]*G,w+.02,k[2]-h[1]*G]},I=(B,O)=>Math.hypot(...B.map((k,G)=>k-O[G])),C=Math.max(1,Math.ceil(I(E(0,0),E(1,0))/.3)),R=Math.max(1,Math.ceil(I(E(0,0),E(0,1))/.25)),L=.14*f*Math.min(1,M*1.5),D=new Q(L,.82*L,.55*L),U=D.clone().multiplyScalar(.45);for(let B=0;B<R;B++)for(let O=0;O<C;O++){let k=O/C,G=(O+1)/C,J=B/R,j=(B+1)/R,ut=E((k+G)/2,(J+j)/2),nt=[ut[0],ut[2]];if(!v.some(pt=>Xt(nt,pt.points))||o.some(pt=>Xt(nt,pt)))continue;let ft=E(k,J),H=E(G,J),X=E(G,j),st=E(k,j),ct=D.clone().lerp(U,J),lt=D.clone().lerp(U,j);i.tri(ft,H,X,ct,ct,lt),i.tri(ft,X,st,ct,lt,lt)}}}function u0(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function h0(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=u0(s,o),c=u0(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],p=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let g=0;g<=e;g++){let m=g/e,b=(1-m)*(1-m),y=2*(1-m)*m,M=m*m;n.push([b*d[0]+y*o[0]+M*p[0],b*d[1]+y*o[1]+M*p[1],b*d[2]+y*o[2]+M*p[2]])}}return n.push(i[i.length-1]),n}var f0=new Q(7568261),d0=new Q(4869974),pS=new Q(3116287),p0=new Q(3948872),Qh=Rr([.35,.85,.4]),m0=10;function Rr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Ho(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function g0(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Rr(Ho(i,t));return[e,Rr(Ho(i,e))]}function gi(i,t){let e=.5+.5*Math.max(0,t[0]*Qh[0]+t[1]*Qh[1]+t[2]*Qh[2]);return i.clone().multiplyScalar(e)}function ys(i,t,e,n,r,s=!1){let o=Rr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=g0(o),c=(h,u)=>{let f=u/m0*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<m0;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),p=c(e,h+1);i.tri(u.p,p.p,d.p,gi(r,u.n),gi(r,p.n),gi(r,d.n)),i.tri(u.p,f.p,p.p,gi(r,u.n),gi(r,f.n),gi(r,p.n)),s&&(i.tri([...t],f.p,u.p,gi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,gi(r,o)))}}function mS(i,t,e,n,r,s,o,a){let l=Rr(Ho(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=gi(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function b0(i,t){if(t.points.length<2)return;let e=t.radius,n=h0(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?f0.clone().multiplyScalar(.55):f0;ys(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);ys(i,o,a,e*1.22,d0,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);ys(i,o,a,e*1.08,t.water?new Q(...t.water).multiplyScalar(.9):new Q(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];ys(i,c,h,e*1.3,d0,!0)}}else{let[o,a]=s(.055);ys(i,o,a,e*1.4,p0,!0);let[l]=g0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];ys(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,p0,!0);let u=r.open===!1?Rr(Ho(r.dir,c)):r.dir,f=Rr(Ho(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];mS(i,d,u,f,.1,.028,.012,pS)}}}var tf=1.62,gS=.2,ef=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let r=Wi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=r.walls;let s=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=vr(o,e.rooms,e.walls??[]);if(!l)continue;let c=yr(this.walls,o,l);if(!c)continue;let h=s.get(c.wall)??[];h.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),s.set(c.wall,h);let u=c.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(f,d)||1,g=f/p,m=d/p,b=[u.a[0]+g*c.s,u.a[1]+m*c.s],y=u.left+.45,M=u.right+.45;this.doors.push({centre:b,p:[[b[0]-m*y,b[1]+g*y],[b[0]+m*M,b[1]-g*M]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:s.get(o)??[]})}}blocked(t,e=gS){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Xt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(u=>u.p).filter(u=>!this.blocked(u))],r=n.length,s=new Array(r).fill(1/0),o=new Array(r).fill(-1),a=new Array(r).fill(!1);s[0]=0;let l=new Map,c=(u,f)=>{let d=u<f?`${u}:${f}`:`${f}:${u}`,p=l.get(d);return p===void 0&&(p=this.clear(n[u],n[f]),l.set(d,p)),p};for(;;){let u=-1;for(let f=0;f<r;f++)!a[f]&&s[f]<1/0&&(u<0||s[f]<s[u])&&(u=f);if(u<0)return null;if(u===1)break;a[u]=!0;for(let f=0;f<r;f++){if(a[f]||f===u)continue;let d=Math.hypot(n[u][0]-n[f][0],n[u][1]-n[f][1]);s[u]+d>=s[f]||c(u,f)&&(s[f]=s[u]+d,o[f]=u)}}let h=[];for(let u=1;u>0;u=o[u])h.unshift(n[u]);return h}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=vr(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=yr(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],p=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>x0(s)-x0(r))[0],n=e?this.freeNear(Vi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function x0(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var nf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+pn(this.map.floor,this.state.x,this.state.z)+tf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-tf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Vi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],g=[-Math.sin(o),0,Math.cos(o)],m=[p[1]*g[2]-p[2]*g[1],p[2]*g[0]-p[0]*g[2],p[0]*g[1]-p[1]*g[0]],b=[-m[0],-m[1],-m[2]],y=[p[0]+g[0]*r*u*f+b[0]*s*u,p[1]+g[1]*r*u*f+b[1]*s*u,p[2]+g[2]*r*u*f+b[2]*s*u];if(y[1]>=-.02)return null;let M=tf/-y[1];return[l+y[0]*M,c+y[2]*M]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",o=>{e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},this.surface.setPointerCapture?.(o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>!!o.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function Fc(i){return!i||i.state==="unavailable"||i.state==="unknown"}function Dc(i,t){if(!i||i.state!=="on")return null;let e=t&&!["unavailable","unknown"].includes(t.state)?t.attributes:i.attributes,n=typeof e.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,e.brightness/255))):1,r=e.rgb_color,s;return r&&e.color_mode!=="color_temp"&&e.color_mode!=="brightness"&&e.color_mode!=="onoff"?s=[r[0]/255,r[1]/255,r[2]/255]:typeof e.color_temp_kelvin=="number"?s=bS(e.color_temp_kelvin):s=[1,.71,.28],{color:s,level:n}}function bS(i){let t=Math.min(1,Math.max(0,(i-2200)/4300)),e=[1,.66,.26],n=[.78,.9,1];return[e[0]+(n[0]-e[0])*t,e[1]+(n[1]-e[1])*t,e[2]+(n[2]-e[2])*t]}var xS=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Nc(i){if(!i||Fc(i))return null;let t=i.attributes.window_state;for(let e of[typeof t=="string"?t:null,i.state]){if(!e)continue;let n=xS.find(([r])=>r.test(e.trim()));if(n)return n[1]}return null}var vS=.5;function v0(i,t,e="window"){let n=m=>!!m&&i.states[m]?.state==="on",r=m=>!!m&&!!i.states[m]&&!Fc(i.states[m]),s=m=>m?Nc(i.states[m]):null,o=m=>{let b=s(m);return t.contactInvert&&m&&m!==t.tilt&&m!==t.tilt2&&b!=="tilted"&&b?b==="open"?"closed":"open":b},a=n(t.tilt2)||o(t.tilt2)==="tilted"||o(t.contact2)==="tilted",l=o(t.contact2)==="open"&&!a?1:0,c=n(t.tilt)||o(t.tilt)==="tilted"||o(t.contact)==="tilted",h=c?1:0,u=t.tiltAngle?Number(i.states[t.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let m=(u-(t.tiltOffset??0))*(t.tiltInvert?-1:1);h=Math.min(1,Math.max(0,m/(t.tiltMax||15))),h<.08&&(h=0),c=h>0}let f=o(t.contact)==="open"&&!c?1:0,d=null,p=t.cover?i.states[t.cover]:void 0,g=yS(i,t.position);if(g!==null)d=t.positionInverted?g:1-g;else if(p&&!Fc(p)){let m=p.attributes.current_position;typeof m=="number"?d=1-Math.min(100,Math.max(0,m))/100:d=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else t.cover&&(d=0);if(e==="door"){let m=o(t.contact);return{open:m===null?t.shut?0:vS:m==="closed"?0:1,open2:o(t.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:d,sensed:m!==null||d!==null}}if(e==="garage"){let m=o(t.contact),b=d!==null||m!==null;return d===null&&(d=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:d,sensed:b}}return{open:f,open2:l,tilt:h,tilt2:a?1:0,cover:d,sensed:r(t.contact)||r(t.tilt)||Number.isFinite(u)}}function yS(i,t){let e=t?i.states[t]:void 0;if(!e||Fc(e))return null;let n=Number(e.state);if(!Number.isFinite(n))return null;let r=e.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Xn(i){return!!i&&!["unknown","unavailable",""].includes(i.state.toLowerCase())}function Qi(i,t){let e=t?Object.prototype.hasOwnProperty.call(i.bindings??{},t)?i.bindings?.[t]:t==="status"?i.status??i.entity:t==="power"?i.power:t==="door_left"?i.door_left:t==="door_right"?i.door_right:null:i.status??i.entity;return e&&e!=="none"?e:null}function rf(i,t){if(!Number.isFinite(i))return null;try{let e=new Intl.DateTimeFormat("en-GB",{timeZone:t??"UTC",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(i),n=Number(e.find(s=>s.type==="hour")?.value),r=Number(e.find(s=>s.type==="minute")?.value);return Number.isFinite(n+r)?{hour:n,minute:r,text:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}:null}catch{return null}}function y0(i,t,e,n){if(i.kind==="digital"||i.kind==="analog")return rf(n.time,e.config?.time_zone)?.text??"--:--";let r=Qi(t,i.binding),s=r?e.states[r]:void 0;if(!Xn(s))return"--:--";let o=s.state,a=String(s.attributes.unit_of_measurement??"");if(i.kind==="duration"){let l={s:1,min:60,h:3600}[i.unit??a],c=o.trim()?Number(o):NaN;if(!l||!Number.isFinite(c)||c<0)return"--:--";let h=Math.round(c*l/60);return`${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}`}return`${o}${a?` ${a}`:""}`}function _0(i,t,e){let n=Qi(t,i.status?.binding),r=n?e.states[n]:void 0;return!i.status||!Xn(r)?{color:i.color,visible:i.visible!==!1}:{color:t.status_colors?.[i.id]?.[r.state]??i.status.colors?.[r.state]??i.color,visible:i.status.visibility?.[r.state]??i.visible!==!1}}function sf(i,t,e){let n=t.motion_config?.[i.id],r=i.binding?Qi(t,i.binding):["fan","washer","dryer"].includes(i.kind)?Qi(t):null,s=i.tilt_binding?Qi(t,i.tilt_binding):null,o=i.motor_binding?Qi(t,i.motor_binding):null,a=i.tilt_angle_binding?Qi(t,i.tilt_angle_binding):null,l=r?e.states[r]:void 0;if(["fan","washer","dryer"].includes(i.kind)){let y=Xn(l)&&["on","running","active","washing","drying","heating","cooling"].includes(l.state.toLowerCase());return{open:0,tilt:0,known:Xn(l),running:y}}let c=Xn(l)&&Nc(l)!==null,h=s?e.states[s]:void 0,u=Nc(l)===(n?.contact_invert?"open":"closed"),f=u&&Xn(h)&&["on","open","tilted"].includes(h.state),d=v0(e,{contact:r,tilt:s,tiltAngle:a,cover:null,contactInvert:n?.contact_invert,tiltMax:n?.tilt_max,tiltInvert:n?.tilt_invert},i.kind==="window"?"window":"door"),p=o?e.states[o]:void 0,g=p?.attributes.current_position;if(Xn(p)&&typeof g=="number"&&Number.isFinite(g))return{open:Math.min(1,Math.max(0,g/100)),tilt:d.tilt,known:!f&&!(c&&u&&g>1),running:!1};if(Xn(p)&&["open","opening","closed","closing"].includes(p.state))return{open:["open","opening"].includes(p.state)?1:0,tilt:d.tilt,known:!f,running:!1};let m=a?e.states[a]:void 0,b=Xn(h)&&["on","tilted"].includes(h.state)||Xn(m)&&Number.isFinite(Number(m.state))&&d.tilt>0;return{open:d.open,tilt:d.tilt,known:!f&&(!!c||!!b)&&(!s||Xn(h)),running:!1}}function M0(i,t,e,n){if(!n.historical||!n.history)return null;let r=[i.binding,i.tilt_binding,i.motor_binding,i.tilt_angle_binding].filter(c=>!!c).map(c=>Qi(t,c)).filter(c=>!!c),s=n.history(r,n.time-7*864e5,n.time),o=r.flatMap(c=>(s[c]??[]).filter(h=>h.lu*1e3<=n.time).map(h=>({id:c,row:h}))).sort((c,h)=>c.row.lu-h.row.lu),a={},l=null;for(let{id:c,row:h}of o){a[c]={entity_id:c,state:h.s,attributes:{}};let u=sf(i,t,{...e,states:a});u.known&&(l=u)}return l}var _s=class{states=new Map;last=null;begin(t){this.last&&(this.last.historical!==t.historical||t.historical&&(t.time<this.last.time||t.seek!==this.last.seek))&&this.states.clear(),this.last={...t}}resolve(t,e){return e.known?(this.states.set(t,e),e):{...this.states.get(t)??{open:0,tilt:0,running:!1,known:!1},known:!1,running:!1}}};var S0={body:1516088,fabric:1713732,cushion:2373217,wood:1647420,white:1911110,metal:2767456,dark:725279,glass:1849938,plant:1191982,pot:1910336,accent:2854835},_S=i=>i.startsWith("#")?parseInt(i.slice(1),16):S0[i]??S0.body;function w0(i,t){let e=document.createElement("canvas");e.width=512,e.height=256;let n=new Un(e),r=new kt(new Bn(i,t),new ne({map:n,transparent:!0,side:le,depthWrite:!1}));return r.renderOrder=7,{mesh:r,texture:n}}var Oc=class{group=new Re;items=[];memory=new _s;hass=null;moment={time:NaN,historical:!1,playing:!0,seek:0};global=!0;timer;initial=!0;material;invalidate;constructor(t,e,n,r){this.material=e,this.invalidate=n,r&&(this.memory=r);for(let s of t.furniture){let o=br(s);if(!o)continue;let a=new Set([...o.motions??[],...o.spots??[]].flatMap(g=>g.parts)),l=o.parts.filter(g=>g.status||g.id&&a.has(g.id));if(!l.length&&!o.displays?.length)continue;let c=new Re;c.position.set(s.x,Ce(t,s)+s.h/2,s.z),c.rotation.set((s.rotation_x??0)*Math.PI/180,-s.rotation*Math.PI/180,(s.rotation_z??0)*Math.PI/180,"YZX"),c.scale.x=s.mirror?-1:1,this.group.add(c);let h=l.map(g=>{let m=km({...o,parts:[g]},s);m.translate(0,-s.h/2,0);let b=new kt(m,g.status?new ne({vertexColors:!0,side:le}):this.material);return c.add(b),{part:g,mesh:b,key:""}}),u=(o.motions??[]).map(g=>{let m=new Re,[b,y,M]=g.pivot;m.position.set(b*s.w,(y-.5)*s.h,M*s.d),c.add(m);for(let x of h.filter(_=>_.part.id&&g.parts.includes(_.part.id)))x.mesh.position.copy(m.position).negate(),m.add(x.mesh);return{definition:g,group:m,state:{open:0,tilt:0,known:!1,running:!1},shown:0,tilt:0}});for(let g of o.spots??[]){let m=new Re,b=g.pivot??g.position;m.position.set(b[0]*s.w,(b[1]-.5)*s.h,b[2]*s.d);let y=s.spot_config?.[g.id];m.rotation.set((y?.rotation_x??0)*Math.PI/180,-(y?.rotation_y??0)*Math.PI/180,(y?.rotation_z??0)*Math.PI/180,"YZX"),c.add(m);for(let M of h.filter(x=>x.part.id&&g.parts.includes(x.part.id)))M.mesh.position.copy(m.position).negate(),m.add(M.mesh)}let f=(o.displays??[]).map(g=>{let m=w0(g.size[0]*s.w,g.size[1]*s.h),[b,y,M]=g.position;g.kind==="analog"&&(m.texture.image.height=512),m.mesh.position.set(b*s.w,(y-.5)*s.h,M*s.d),m.mesh.rotation.set(...(g.rotation??[0,0,0]).map(_=>_*Math.PI/180),"YZX");let x=u.find(_=>_.definition.id===g.parent)?.group;return x?(m.mesh.position.sub(x.position),x.add(m.mesh)):c.add(m.mesh),{...m,field:g,key:""}}),d=w0(Math.max(.15,s.w*.75),.09);d.mesh.position.set(0,s.h/2+.12,0),d.mesh.visible=!1,c.add(d.mesh);let p=d.texture.image.getContext("2d");p.fillStyle="#162137",p.fillRect(0,0,512,256),p.fillStyle="#ffcf66",p.font="bold 70px sans-serif",p.textAlign="center",p.fillText("Status unklar",256,155),d.texture.needsUpdate=!0,this.items.push({f:s,group:c,parts:h,motions:u,displays:f,unclear:d.mesh,unclearTexture:d.texture})}}update(t,e,n){let r=this.initial||e.historical&&(e.seek!==this.moment.seek||!this.moment.historical);this.initial=!1,this.hass=t,this.moment={...e},this.global=n,this.memory.begin(e);for(let s of this.items){let o=!1;for(let a of s.parts){let l=_0(a.part,s.f,t),c=JSON.stringify(l);if(a.mesh.visible=l.visible,a.key!==c||a.part.glow||s.motions.some(h=>h.definition.parts.includes(a.part.id??"")&&h.state.running)){a.key=c;let h=new Q(_S(l.color)),u=a.mesh.geometry.getAttribute("color");for(let f=0;f<u.count;f++)u.setXYZ(f,h.r,h.g,h.b);u.needsUpdate=!0}}for(let a of s.motions){let l=s.f.id+":"+a.definition.id,c=sf(a.definition,s.f,t);if(!c.known&&e.historical&&r){let h=M0(a.definition,s.f,t,e);h&&this.memory.resolve(l,h)}a.state=this.memory.resolve(l,c),o||=!a.state.known&&!["fan","washer","dryer"].includes(a.definition.kind),(r||!n||s.f.animations===!1)&&(a.shown=a.state.open,a.tilt=a.state.tilt,this.pose(a,s.f))}for(let a of br(s.f)?.spots??[]){let l=s.f.spot_config?.[a.id]?.entity??(a.binding?s.f.bindings?.[a.binding]:null)??s.f.entity,c=l?Dc(t.states[l]):null;if(c)for(let h of s.parts.filter(u=>u.part.glow&&a.parts.includes(u.part.id??""))){let u=h.mesh.geometry.getAttribute("color"),f=new Q(...c.color);for(let d=0;d<u.count;d++)u.setXYZ(d,f.r,f.g,f.b);u.needsUpdate=!0}}s.unclear.visible=o,this.drawDisplays(s)}this.scheduleClock(),this.invalidate()}drawDisplays(t){if(this.hass)for(let e of t.displays){let n=y0(e.field,t.f,this.hass,this.moment);if(n===e.key)continue;e.key=n;let r=e.texture.image,s=r.getContext("2d");if(s.clearRect(0,0,512,r.height),(e.field.kind!=="analog"||e.field.background)&&(s.fillStyle=e.field.background??"#101827",s.fillRect(0,0,512,r.height)),s.fillStyle=e.field.color??"#ffffff",e.field.kind==="analog"){let o=rf(this.moment.time,this.hass.config?.time_zone)??{hour:10,minute:10},a=(l,c,h)=>{s.save(),s.translate(256,256),s.rotate(l),s.strokeStyle=e.field.color??"#ffffff",s.lineWidth=h,s.beginPath(),s.moveTo(0,10),s.lineTo(0,-c),s.stroke(),s.restore()};a((o.hour%12+o.minute/60)*Math.PI/6,144,9),a(o.minute*Math.PI/30,204,5)}else{s.textAlign="center",s.textBaseline="middle",s.font="bold 100px sans-serif";let o=s.measureText(n).width;o>480&&(s.font=`bold ${Math.max(20,Math.floor(100*480/o))}px sans-serif`),s.fillText(n,256,128)}e.texture.needsUpdate=!0}}scheduleClock(){this.timer&&(clearTimeout(this.timer),this.timer=void 0),!(this.moment.historical||!this.items.some(t=>t.displays.some(e=>["analog","digital"].includes(e.field.kind))))&&(this.timer=setTimeout(()=>{this.timer=void 0,this.moment.time=Date.now();for(let t of this.items)this.drawDisplays(t);this.invalidate(),this.scheduleClock()},6e4-Date.now()%6e4+10))}pose(t,e){let n=t.definition.kind,r=e.motion_config?.[t.definition.id],s=r?.direction??t.definition.direction??1;if(n==="slide"){let a=t.definition.axis??"x",l=a==="x"?0:a==="y"?1:2,c=a==="x"?e.w:a==="y"?e.h:e.d;t.group.position[a]=t.definition.pivot[l]*c-(a==="y"?e.h/2:0)+(r?.travel_m??(t.definition.travel??1)*c)*t.shown*s;return}let o=r?.angle??t.definition.angle;if(t.group.rotation[t.definition.axis??"y"]=-(o==null?n==="window"?1.2:1.5:o*Math.PI/180)*t.shown*s,n==="window"){let a=r?.tilt_angle??t.definition.tilt_angle;t.group.rotation.x=-(a==null?.2:a*Math.PI/180)*t.tilt}}step(t){let e=!1;for(let n of this.items)for(let r of n.motions){let s=this.global&&n.f.animations!==!1;if(["fan","washer","dryer"].includes(r.definition.kind)){if(!s||!r.state.running||this.moment.historical&&!this.moment.playing)continue;if(r.definition.kind==="fan")r.group.rotation[r.definition.axis??"z"]+=t*.008;else{let c=.75+.08*Math.sin(this.moment.time/1e3);for(let h of n.parts.filter(u=>u.part.id&&r.definition.parts.includes(u.part.id))){let u=new Q(.3*c,.85*c,c),f=h.mesh.geometry.getAttribute("color");for(let d=0;d<f.count;d++)f.setXYZ(d,u.r,u.g,u.b);f.needsUpdate=!0}}e=!0;continue}if(!s){this.pose(r,n.f);continue}let o=1-Math.exp(-t/160),a=r.state.open-r.shown,l=r.state.tilt-r.tilt;Math.abs(a)<.003&&Math.abs(l)<.003?(r.shown=r.state.open,r.tilt=r.state.tilt):(r.shown+=a*o,r.tilt+=l*o,e=!0),this.pose(r,n.f)}return e}dispose(){this.timer&&clearTimeout(this.timer);for(let t of this.items){for(let e of t.parts)e.mesh.geometry.dispose(),e.mesh.material!==this.material&&e.mesh.material.dispose();for(let e of t.displays)e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.texture.dispose();t.unclear.geometry.dispose(),t.unclear.material.dispose(),t.unclearTexture.dispose()}this.group.removeFromParent(),this.items=[]}};function T0(i,t,e){let n=_e(i.type),r=Ce(t,i);return(n?.spots??[]).flatMap(s=>{let o=i.spot_config?.[s.id],a=o?.entity??(s.binding?i.bindings?.[s.binding]:null)??i.entity,l=a?e.states[a]:void 0;if(!l||l.state!=="on")return[];let c=Dc(l);if(!c)return[];let h=s.pivot??s.position,u=new V(s.position[0]*i.w,s.position[1]*i.h,s.position[2]*i.d),f=new V(h[0]*i.w,h[1]*i.h,h[2]*i.d),d=new On((o?.rotation_x??0)*Math.PI/180,-(o?.rotation_y??0)*Math.PI/180,(o?.rotation_z??0)*Math.PI/180,"YZX"),p=new V(...s.direction).applyEuler(d).normalize();u.sub(f).applyEuler(d).add(f),u.y-=i.h/2,i.mirror&&(u.x*=-1,p.x*=-1);let g=new On((i.rotation_x??0)*Math.PI/180,-i.rotation*Math.PI/180,(i.rotation_z??0)*Math.PI/180,"YZX");u.applyEuler(g).add(new V(i.x,r+i.h/2,i.z)),p.applyEuler(g).normalize();let m=t.rooms.findIndex(b=>Xt([i.x,i.z],b.points));return[{x:u.x,y:u.y,z:u.z,direction:p.toArray(),angle:o?.beam_angle??i.beam_angle??s.angle??60,color:c.color,level:c.level,kind:"spot",room:m<0?t.rooms.length:m}]})}function MS(i,t,e,n){let r=5;t.y<-.001&&(r=Math.min(r,Math.max(.01,(i.y-pn(e,i.x,i.z)-.02)/-t.y)));for(let s of n){let o=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=t.x*a-t.z*o;if(Math.abs(l)<1e-8)continue;let c=s.a[0]-i.x,h=s.a[1]-i.z,u=(c*a-h*o)/l,f=(c*t.z-h*t.x)/l,d=i.y+u*t.y;if(u<=.01||u>=r||f<0||f>1||d<0||d>s.h)continue;let p=f*Math.hypot(o,a);s.gaps.some(g=>p>=g.s0&&p<=g.s1&&d>=g.y0&&d<=g.y1)||(r=u)}return r}function E0(i,t,e,n){if(!t.direction)return;let r=new V(t.x,t.y,t.z),s=new V(...t.direction).normalize(),o=Math.abs(s.y)<.95?new V(0,1,0):new V(1,0,0),a=new V().crossVectors(s,o).normalize(),l=new V().crossVectors(s,a).normalize(),c=(t.angle??60)*Math.PI/360,h=new Q(...t.color.map(d=>d*.09*t.level)),u=new Q(0,0,0),f=d=>{let p=d*Math.PI/8,g=s.clone().multiplyScalar(Math.cos(c)).addScaledVector(a,Math.cos(p)*Math.sin(c)).addScaledVector(l,Math.sin(p)*Math.sin(c)).normalize();return r.clone().addScaledVector(g,MS(r,g,e,n)).toArray()};for(let d=0;d<16;d++)i.tri(r.toArray(),f(d),f(d+1),h,u,u)}function SS(i,t){let e=_e(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,rotation_x:i.rotation_x,rotation_z:i.rotation_z,mount_y:i.mount_y,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function cf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?SS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function uf(i,t){let e=[],n=[],r=[],s=[],o=[],a=[],l=[];for(let{face:h,field:u}of i){let f=e.length/3,d=u.portrait===!1?10:6,p=u.portrait===!1?6:10,g=wS(u.id)%1e3/1e3;for(let b of No(h,u)){let[y,M,x,_]=b.corners.map(v=>[v[0]+h.n[0]*.006,v[1]+h.n[1]*.006-t,v[2]+h.n[2]*.006]),S=wc(y,M,x,h.n),A=[[y,0,0],[M,1,0],[x,1,1],[_,0,1]];for(let v of[0,1,2,0,2,3]){let[w,T,E]=A[v];e.push(w[0],w[1],w[2]),n.push(T,E),r.push(d,p),s.push(g),a.push(...S),l.push(...y)}}let m=e.length/3-f;m&&o.push({id:u.id,start:f,count:m})}if(!e.length)return null;let c=new Wt;return c.setAttribute("position",new Et(e,3)),c.setAttribute("uv",new Et(n,2)),c.setAttribute("aCells",new Et(r,2)),c.setAttribute("aPhase",new Et(s,1)),c.setAttribute("aLevel",new Et(new Float32Array(e.length/3),1)),{geometry:Oo(c,a,l),ranges:o}}function Wo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function hf(i){let t=new ne({transparent:!0,blending:Fe,depthWrite:!1,side:le});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function wS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var R0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,TS=`
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
`,ES=R0,AS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function A0(i,t){let e=[];for(let[r,s,o]of mn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Wt;return n.setAttribute("position",new Et(e,3)),n}function C0(i,t){let e=new Re;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new kt(A0(n.points,o),new sn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:R0,fragmentShader:TS,transparent:!0,blending:Fe,depthWrite:!1,side:le}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),p=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],g=bs(n.points,p);if(g.length>=3){let m=new kt(A0(g,n.y+.03),new sn({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:ES,fragmentShader:AS,transparent:!0,side:le}));m.renderOrder=6,e.add(m);let b=[];for(let M=0;M<g.length;M++){let x=g[M],_=g[(M+1)%g.length];b.push(x[0],n.y+.032,x[1],_[0],n.y+.032,_[1])}let y=new Wt;y.setAttribute("position",new Et(b,3)),e.add(new Ze(y,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function P0(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var I0=["neon","blueprint","day"];function L0(i){return I0.indexOf(i)}var Bc={value:new V(.22,.88,1)},kc={value:0};function F0(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var RS=`
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
`;function hn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Bc,s.uniforms.uAccentOn=kc,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${RS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Ms(i){return i==="day"?Ni:Fe}var Xo={open:0,open2:0,tilt:0,tilt2:0,cover:null},D0=2043986,N0=2769520,CS=2242399,ff=1845831,PS=1450554,bi=16758087,IS=1846349,LS=2572395,FS=1120816,DS=1845831,O0=5995775,U0=9085695,Ss=Gt(3662079,.08);function zc(i,t,e,n,r,s,o,a,l,c,h){let u=(d,p,g)=>t(d,p,g),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),Gt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),Gt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),Gt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),Gt(l.getHex(),.92)]];for(let[d,p,g,m,b]of f)i.tri(d,p,g,b,b,b,void 0,h),i.tri(d,g,m,b,b,b,void 0,h)}function he(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return zc(i,t,e,n,r,s,o,a,l,c,$t);if(o>=h-1e-6)return zc(i,t,e,n,r,s,o,a,l,c,u);zc(i,t,e,n,r,s,o,h,l,c,$t),zc(i,t,e,n,r,s,h,a,l,c,u)}function tr(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,p)=>{let g=x=>h?(o-x)/h:.5,m=t(e,r,f),b=t(n,r,f),y=t(n,r,d),M=t(e,r,d);i.tri(m,b,y,a,a,a,[0,g(f),1,g(f),1,g(d)],p),i.tri(m,y,M,a,a,a,[0,g(f),1,g(d),0,g(d)],p)};o<=l+1e-6?u(s,o,$t):s>=l-1e-6?u(s,o,c):(u(s,l,$t),u(l,o,c))}function NS(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),p=0,g=(s-r)/c;i.tri(h,u,f,a,a,a,[0,p,1,p,1,g],l),i.tri(h,f,d,a,a,a,[0,p,1,g,0,g],l)}function B0(i,t,e){let n=new re,r=new re,s=new re(!0),o=new Q(D0),a=new Q(N0),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,p=s.count,g=t.get(u.opening.id)??Xo,m=u.width,{sill:b,top:y,bucket:M}=u,x=(v,w,T)=>[u.start[0]+u.axis[0]*v+u.toRoom[0]*w,T,u.start[1]+u.axis[1]*v+u.toRoom[1]*w],_=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",A=u.opening.type==="door"&&xr(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let v=-u.faceOut-.012,w=u.faceRoom+.012,T=u.opening.type==="garage"&&(S?!!g.sensed&&(g.cover??1)>=.95:(g.cover??1)<.95),E=T?Gt(bi,.8):new Q(D0),I=T?Gt(bi,1):new Q(N0);he(n,x,-.045,.02,v,w,0,y+.045,E,I,e,M),he(n,x,m-.02,m+.045,v,w,0,y+.045,E,I,e,M),he(n,x,.02,m-.02,v,w,y-.02,y+.045,E,I,e,M)}if(u.opening.type==="door"){let v=xr(u.opening,u.exterior),w=qp(v),T=u.opening.swing==="out"?-1:1,E=T>0?u.faceRoom:-u.faceOut,I=u.opening.leaves===2,C=.02,R=m-.02,L=Yp(m,v,u.hingeAtStart,u.opening);if(L){for(let[O,k]of L.panels)he(n,x,O,O+.04,_-.03,_+.03,.02,y-.02,o,a,e,M),he(n,x,k-.04,k,_-.03,_+.03,.02,y-.02,o,a,e,M),he(n,x,O,k,_-.03,_+.03,.02,.1,o,a,e,M),tr(r,x,O+.04,k-.04,_,.1,y-.02,Ss,e,M);C=L.x0,R=L.x1}let D=I?(R-C)/2-.004:R-C,U=w?.06:.04;w&&(he(n,x,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new Q(ff),a,e,M),u.exterior&&he(n,x,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,y+.1,y+.17,Gt(bi,.55),Gt(bi,.85),e,$t));let B=A?[]:[[u.hingeAtStart,g.open]];I&&!A&&B.push([!u.hingeAtStart,g.open2??0]);for(let[O,k]of B){let G=Math.min(1,Math.max(0,k)),J=v==="sliding"?0:G*1.5,j=v==="sliding"?G*D:0,ut=(zt,Nt,Dt)=>{let Zt=zt*Math.cos(J)-Nt*Math.sin(J)-j,Yt=E+T*(Nt*Math.cos(J)+zt*Math.sin(J)+(j?.05:0));return x(O?C+Zt:R-Zt,Yt,Dt)},nt=G>.05?$t:M,ft=S?!!g.sensed&&G<.05:G>.9,H=ft?Gt(bi,.7):new Q(w?FS:IS),X=ft?Gt(bi,.9):new Q(w?DS:LS);v==="glass"?(he(n,ut,0,.05,-U,0,.01,y-.01,H,X,e,nt),he(n,ut,D-.05,D,-U,0,.01,y-.01,H,X,e,nt),he(n,ut,.05,D-.05,-U,0,.01,.12,H,X,e,nt),he(n,ut,.05,D-.05,-U,0,y-.08,y-.01,H,X,e,nt),tr(r,ut,.05,D-.05,-U/2,.12,y-.08,Ss,e,nt)):he(n,ut,0,D,-U,0,.01,y-.01,H,X,e,nt),v==="front_glass"?tr(r,ut,.12,D-.12,.001,y*.55,y-.18,Ss,e,nt):w&&tr(r,ut,.1,.18,.001,.3,y-.3,Ss,e,nt);let st=Math.min(1.05,y*.5),ct=w?.3:.012,lt=w?D-.11:D-.16,pt=w?D-.08:D-.05;he(n,ut,lt,pt,.004,.05,st-ct,st+ct,new Q(O0),new Q(U0),e,nt),he(n,ut,lt,pt,-U-.05,-U-.004,st-ct,st+ct,new Q(O0),new Q(U0),e,nt)}}else if(u.opening.type==="garage"){let v=Math.min(1,Math.max(0,g.cover??1)),w=new Q(13951231),T=u.faceRoom-.03,E=y*(1-v);v>.01&&tr(s,x,.02,m-.02,T,E,y,w,e,M,.5);let I=(1-v)*y;I>.01&&NS(s,x,.02,m-.02,T,T+I,y+.03,w,M,.5)}else if(xr(u.opening,u.exterior)==="glass_wall"){he(n,x,0,.04,_-.025,_+.025,b,y,o,a,e,M),he(n,x,m-.04,m,_-.025,_+.025,b,y,o,a,e,M),he(n,x,.04,m-.04,_-.025,_+.025,b,b+.03,o,a,e,M),he(n,x,.04,m-.04,_-.025,_+.025,y-.04,y,o,a,e,M);let T=Math.max(1,Math.round((m-2*.04)/.9)),E=(m-2*.04)/T;for(let I=1;I<T;I++){let C=.04+I*E;he(n,x,C-.02,C+.02,_-.025,_+.025,b+.03,y-.04,o,a,e,M)}for(let I=0;I<T;I++){let C=.04+I*E+(I?.02:0),R=.04+(I+1)*E-(I<T-1?.02:0);tr(r,x,C,R,_,b+.03,y-.04,Ss,e,M)}}else{he(n,x,0,.06,_-.035,_+.035,b,y,o,a,e,M),he(n,x,m-.06,m,_-.035,_+.035,b,y,o,a,e,M),he(n,x,.06,m-.06,_-.035,_+.035,b,b+(b>.05?.06:.03),o,a,e,M),he(n,x,.06,m-.06,_-.035,_+.035,y-.06,y,o,a,e,M),b>.3&&(he(n,x,-.04,m+.04,_+.035,u.faceRoom+.07,b-.03,b,new Q(ff),a,e,M),u.exterior&&he(n,x,-.03,m+.03,-u.faceOut-.06,_-.035,b-.04,b-.02,new Q(ff),a,e,M));let T=.055,E=b+(b>.05?.06:.03),I=y-.06,C=_+.035,R=_+.035+.06,D=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:g.open,tilt:g.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:g.open2??0,tilt:g.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:g.open,tilt:g.tilt}];for(let U of D){let B=U.open>.02||U.tilt>.02,O=S?!!g.sensed&&!B:B,k=O?Gt(bi,.75):new Q(CS),G=O?Gt(bi,.95):a,J=U.x0,j=U.x1,ut=j-J,nt=U.open*1.2*(u.opening.swing==="out"?-1:1),ft=U.tilt*.2,H=(st,ct,lt)=>{let pt=lt-E,zt=ct+pt*Math.sin(ft),Nt=E+pt*Math.cos(ft),Dt=st*Math.cos(nt)-(zt-C)*Math.sin(nt);zt=C+(zt-C)*Math.cos(nt)+st*Math.sin(nt);let Zt=U.atStart?J+Dt:j-Dt;return x(Zt,zt,Nt)},X=Math.abs(nt)>.05?$t:M;if(he(n,H,0,T,C,R,E,I,k,G,e,X),he(n,H,ut-T,ut,C,R,E,I,k,G,e,X),he(n,H,T,ut-T,C,R,E,E+T,k,G,e,X),he(n,H,T,ut-T,C,R,I-T,I,k,G,e,X),tr(r,H,T,ut-T,(C+R)/2,E+T,I-T,O?Gt(bi,.16):Ss,e,X),xr(u.opening,u.exterior)==="bars"){let st=(E+I)/2,ct=(C+R)/2;he(n,H,T,ut-T,ct-.012,ct+.012,st-.012,st+.012,k,G,e,X),he(n,H,ut/2-.012,ut/2+.012,ct-.012,ct+.012,E+T,I-T,k,G,e,X)}}}if(g.cover!==null){let v=-u.faceOut,w=y+.2;he(n,x,-.05,m+.05,v-.15,v,y,w,new Q(PS),a,e,M);let T=Math.min(1,Math.max(0,g.cover));if(T>.01){let E=y-T*(y-b);tr(s,x,0,m,v-.07,E,y,new Q(16777215),e,M,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var OS=.3,k0=2.6;function z0(i,t=.32,e=.22,n=[]){let r=i.map(_=>_[0]),s=i.map(_=>_[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=_=>{let S=[_,[_[0]+e,_[1]],[_[0]-e,_[1]],[_[0],_[1]+e],[_[0],_[1]-e]],A=[...S,[_[0]+u,_[1]+u],[_[0]-u,_[1]+u],[_[0]+u,_[1]-u],[_[0]-u,_[1]-u]];return S.every(v=>Xt(v,i))&&!n.some(v=>A.some(w=>Xt(w,v)))},d=(_,S)=>f(h?[_,S]:[S,_]),p=(_,S)=>{let A=Math.ceil(Math.hypot(S[0]-_[0],S[1]-_[1])/.05);for(let v=1;v<A;v++)if(!f([_[0]+(S[0]-_[0])*v/A,_[1]+(S[1]-_[1])*v/A]))return!1;return!0},[g,m,b,y]=h?[o,a,l,c]:[l,c,o,a],M=[],x=!0;for(let _=g+e;_<=m-e+1e-6;_+=t){let S=null,A=null,v=.05;for(let I=b;I<=y+1e-6;I+=v)if(d(_,I)&&(A??=I),(!d(_,I)||I+v>y+1e-6)&&A!==null){let C=d(_,I)?I:I-v;(!S||C-A>S[1]-S[0])&&(S=[A,C]),A=null}if(!S||S[1]-S[0]<.2)continue;let w=I=>{let[C,R]=I?S:[S[1],S[0]];return[h?[_,C]:[C,_],h?[_,R]:[R,_]]},T=w(x),E=M[M.length-1];if(E&&n.length&&!p(E,T[0])){let I=w(!x);if(!p(E,I[0]))continue;T=I,x=!x}M.push(T[0],T[1]),x=!x}return M}function pf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var df=i=>Math.atan2(Math.sin(i),Math.cos(i));function V0(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=df(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),k0*e),!0)}let a=Math.atan2(r,s),l=df(a-i.heading);if(i.heading=df(i.heading+Math.sign(l)*Math.min(Math.abs(l),k0*e)),Math.abs(l)<.35){let c=Math.min(o,OS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Cn=null,G0=new Map;function W0(i,t=0){let e=new re,n=new Oe,r=_e(i.type);if(r?.light)yc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)mf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};bc(e,n,new re,s)}return{buf:e,lines:n}}function US(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=G0.get(r);if(s)return s;e&&vo(e),Cn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Cn.setSize(t,t,!1),Cn.setClearColor(0,0);let{buf:o,lines:a}=W0(i),l=new Ai,c=new kt(o.geometry(),new ne({vertexColors:!0,color:new Q(n,n,n)})),h=new Ze(a.geometry(),new $e({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new cn().setFromObject(c),f=u.getCenter(new V),d=new jn(-1,1,1,-1,.01,100);d.position.copy(f).add(new V(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let b of[u.min.x,u.max.x])for(let y of[u.min.y,u.max.y])for(let M of[u.min.z,u.max.z]){let x=new V(b,y,M).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(x.x),Math.abs(x.y))}let g=p*1.12;d.left=-g,d.right=g,d.top=g,d.bottom=-g,d.updateProjectionMatrix(),Cn.render(l,d);let m=Cn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),G0.set(r,m),m}function BS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=H0.get(s);if(o)return o;n&&vo(n);let{buf:a,lines:l}=W0(i,t),c=new kt(a.geometry(),new ne({vertexColors:!0,color:new Q(r,r,r)})),h=new Ze(l.geometry(),new $e({vertexColors:!0,color:new Q(r*1.8,r*1.8,r*1.8)})),u=new cn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),g=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),b=Math.max(1,Math.min(1024,Math.round((g-p)*e)));Cn??=new gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(1),Cn.setSize(m,b,!1),Cn.setClearColor(0,0);let y=new Ai;y.add(c,h);let M=new jn(f,d,g,p,.01,100);M.position.set(0,0,50),M.lookAt(0,0,0),M.updateProjectionMatrix(),Cn.render(y,M);let x=Cn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let _={url:x,x0:f,x1:d,y0:p,y1:g};return H0.set(s,_),_}var H0=new Map;var N3={Group:Re,Mesh:kt,MeshBasicMaterial:ne,CanvasTexture:Un,Color:Q,PlaneGeometry:Bn,BufferGeometry:Wt,Float32BufferAttribute:Et,DoubleSide:le},Y0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},kS=2.4,q0=1.4,zS=.22,$0=140,bf=32,VS=500,Z0=33,K0=.028,GS=.09,oe=2767456,HS=1911110,WS=1,xf=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Vc=450,J0=125,XS=.08,Hc={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},YS=new Q(1714765);function qS(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var vf=class{host;options;renderer;scene=new Ai;camera=new en(38,1,.1,400);controls;labels;root=new Re;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;roofDirection={value:new V(0,1,1)};keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";productColors=!1;customLayers=new Map;customMemories=new Map;customContext=null;themeUniform={value:0};sun=null;weather=null;rain=new Ze(new Wt,new $e({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new jr(new Wt,new ur({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new kt(new Hs(1,28),new ne({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=ZS(),this.blindTexture=JS(),this.haloTexture=QS(),this.ground=new kt(new Bn(1,1),new ne({transparent:!1,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n,this.building&&this.rebuild();let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){vo(t),this.building&&(this.rebuild(),this.invalidate())}setProductColors(t){t!==this.productColors&&(this.productColors=t,Dp(t),this.building&&this.rebuild(),this.invalidate())}setCustomPackState(t,e){this.customContext={hass:t,moment:e};for(let n of this.customLayers.values())n.update(t,e,this.building?.settings.pack_animations!==!1);for(let n of this.floors)this.buildGlow(n),this.buildHalos(n)}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>h.floor.rooms.some(u=>u.id===t)),n=e?.floor.rooms.find(h=>h.id===t);if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=Vi(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new V(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=Vi(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new V(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new V(s,e.floor.elevation+e.ty+ge(e.floor,n)+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])Wo(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&Wo(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(s=>s.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(P0(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=C0(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Re;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let s=t.filter(c=>c.floorId===n.floor.id),o=n.floor.elevation+.03;for(let c of s)if(c.playing)for(let h=0;h<3;h++){let u=new kt(new Js(.92,1,48),new ne({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:le}));u.rotation.x=-Math.PI/2,u.position.set(c.x,o+h*.002,c.z),u.userData={sound:!0,phase:h/3,level:c.level},u.frustumCulled=!1,r.add(u)}let a=[],l=new Set;for(let c of s)for(let h of c.members){let u=s.find(d=>d.id===h);if(!u||u===c)continue;let f=[c.id,u.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,o+.02,c.z,u.x,o+.02,u.z))}if(a.length){let c=new Wt;c.setAttribute("position",new Et(a,3));let h=new Ze(c,new $e({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));h.userData={soundLine:!0},r.add(h)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=gf(r),o=j0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new re;for(let s of e)b0(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=F0(t),n=e?1:0;n===kc.value&&(!e||Bc.value.equals(new V(...e)))||(kc.value=n,e&&Bc.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=L0(t);let e=Ms(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines,this.roof.solarLines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new Q(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Bs(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Wt;l.setAttribute("position",new Et(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(this.building?.settings.north??0)*ue,o=(r?t.azimuth+180:t.azimuth)*ue,a=Math.max(10,Math.abs(t.elevation))*ue,l=this.weatherBox,c=new V((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),u=new V(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,h),this.skyDisc.scale.setScalar(h*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Xo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let r=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(e,r)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/160),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){let e=new re;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);Bm(e,n,Ce(t.floor,n),r?.l??0,r?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&qS();this.lowQuality=e,Cm(e),this.applyWeather(),this.highQuality=t==="high";let n=new gr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ne,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Ic(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||(this.customContext&&this.setCustomPackState(this.customContext.hass,{...this.customContext.moment,time:this.customContext.moment.historical?this.customContext.moment.time:Date.now()}),this.invalidate())};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.customLayers.values())t.dispose();this.customLayers.clear();for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},VS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Mm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Q0(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=xs(r,a.ra),a.rb=xs(r,a.rb)}t.lightSurface=n;let s=new Wt;s.setAttribute("position",new Et(n.pos,3)),s.setAttribute("color",new Et(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Et(n.fold,1));let o=new lr(new Uint32Array(n.pos.length/3),1);o.setUsage(Ku),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r||n.pack&&_e(n.pack)?.spots?.length)continue;let s=n.top??t.floor.height,o=Dh(t.floor,n.x,n.z),a=xs(t.lightZones,o),[l,,c]=n.size??(n.lamp?Hc[n.lamp]:[.3,.3,.3]),h=n.base??0,u=n.top??s,f=e.length,d={ceiling:[u-.12,"ceiling"],downlight:[u-.03,"spot"],spot:[u-c,"spot"],panel:[u-.05,"ceiling"],pendant:[Math.max(h+.5,u-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<WS?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[p,g]=n.lamp?d[n.lamp]:[n.y,"omni"],m=n.lightY??p,b=r.color;if(n.lamp==="strip"){let y=(n.rotation??0)*ue,M=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:h+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(y)*l*x,y:m,z:n.z+Math.sin(y)*l*x,color:b,level:r.level*.55,kind:M?"omni":g,room:a})}else e.push({x:n.x,y:m,z:n.z,color:b,level:r.level,kind:g,room:a,...g==="spot"?{direction:[0,-1,0],angle:n.beam_angle??60}:{}});if(n.rotation_x||n.rotation_z){let y=us(n,Gc(n,s));for(let M=f;M<e.length;M++){let x=e[M];if([x.x,x.y,x.z]=y(x.x,x.y,x.z),x.kind==="spot"){let _=y(n.x,0,n.z),S=y(n.x,-1,n.z);x.direction=[S[0]-_[0],S[1]-_[1],S[2]-_[2]],x.angle=n.beam_angle??60}else x.kind="omni";x.room=xs(t.lightZones,Dh(t.floor,x.x,x.z))}}}if(this.customContext)for(let n of t.floor.furniture)for(let r of T0(n,t.floor,this.customContext.hass))r.room=xs(t.lightZones,r.room),e.push(r);return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let f=t.geo.openings.find(p=>p.opening.id===u.id);if(f&&xr(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")},${u.direction?.join("/")},${u.angle}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=wm(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:hn(new ne({vertexColors:!0}),this.themeUniform),pattern:KS(this.patternTexture),wall:hn(ji(new ne({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ji(new ne({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ne({vertexColors:!0,blending:so,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:le,polygonOffset:!0,polygonOffsetFactor:-1}),lines:hn(ji(new $e({vertexColors:!0,transparent:!0,blending:Ms(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ji(new ne({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:le,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:hn(ji(new ne({vertexColors:!0,side:le}),t),this.themeUniform),glass:ji(new ne({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:le}),t),blinds:hn(ji(new ne({map:this.blindTexture,vertexColors:!0,side:le}),t),this.themeUniform),water:hn(new ne({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:le}),this.themeUniform),flow:jS(this.flowTime),solarLive:hf(this.flowTime),lamps:hn(new ne({vertexColors:!0}),this.themeUniform),halos:new ur({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new ne({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:le}),screens:new ne({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:le})}}rebuild(){let t=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),e=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=qh(n)?.id===s.id?o.filter(X=>X.face===Yh).map(X=>({field:X,face:Hm(n,X)})):[],l=o.filter(X=>X.face.startsWith(`wall:${s.id}:`));if(l.length){let X=new Map(Gm(n,s.id).map(st=>[st.key,st]));for(let st of l){let ct=X.get(st.face);ct&&a.push({field:st,face:ct})}}let h=(n.settings.roof.sections??[]).some(X=>sm(X,Ge(s)))?(X,st)=>{let ct=om(n,X,st);return ct===null?null:ct-s.elevation}:void 0,u=r0(cf(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,s0(n.floors,s),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Re,g=new kt(u.floor,d.floor),m=new kt(u.shadow,d.shadow);m.renderOrder=1;let b=new kt(u.floor,d.pattern);b.renderOrder=2;let y=new kt(new Wt,d.glow);y.renderOrder=3,y.visible=!1;let M=new kt(new Wt,d.frames),x=new kt(new Wt,d.blinds),_=new kt(new Wt,d.glass);_.renderOrder=4;let S=new kt(new Wt,d.lamps);S.visible=!1;let A=new kt(new Wt,d.cones);A.visible=!1,A.renderOrder=3;let v=new jr(new Wt,d.halos);v.visible=!1,v.renderOrder=7;let w=new kt(new Wt,d.cones);w.visible=!1,w.renderOrder=7;let T=new kt(new Wt,d.cones);T.visible=!1,T.renderOrder=7;let E=new kt(new Wt,d.lamps);E.visible=!1;let I=new kt(new Wt,d.lamps);I.visible=!1;let C=new kt(new Wt,d.screens);C.visible=!1,C.renderOrder=5;let R=new kt(new Wt,d.flow);R.renderOrder=5,R.frustumCulled=!1;let L=uf(a,s.elevation),D=L?new kt(L.geometry,d.solarLive):null;D&&(D.renderOrder=6,Wo(L,this.solarLevels));for(let X of[M,x,_])X.frustumCulled=!1;let U=new kt(u.walls,d.glassWall),B=new kt(u.walls,d.wall);U.renderOrder=6;let O=new kt(u.water,d.water);O.renderOrder=4,p.add(g,m,b,y,B,O,new Ze(u.lines,d.lines),M,x,_,R,S,A,v,w,T,E,I,C,U,...D?[D]:[]),this.root.add(p);let k=document.createElement("button");k.className="fp3d-pin fp3d-pin-floor",k.dataset.floor=s.id;let G=document.createElement("b");G.textContent=s.name||"\u2013";let J=document.createElement("span");J.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",k.append(G,J),k.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(k);let j=t.get(s.id),ut=[],nt=null;for(let X of s.rooms){let st=document.createElement("button");st.className="fp3d-pin",st.dataset.room=X.id,st.dataset.floor=s.id,this.fillRoomPin(st,X.name,this.roomInfo.get(X.id)),st.addEventListener("click",()=>this.options.onRoomTap?.(s.id,X.id)),this.labels.append(st);let[ct,lt]=Vi(X.points);ut.push({pin:st,room:X,cx:ct,cz:lt});for(let[pt,zt]of X.points)nt??={x0:pt,x1:pt,z0:zt,z1:zt},nt.x0=Math.min(nt.x0,pt),nt.x1=Math.max(nt.x1,pt),nt.z0=Math.min(nt.z0,zt),nt.z1=Math.max(nt.z1,zt)}this.floors.push({floor:s,rank:r.indexOf(s),group:p,geo:u,floorMesh:g,shadowMesh:m,patternMesh:b,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:_,blindsMesh:x,flowMesh:R,solarMesh:D,solarLive:L,lampMesh:S,sunMesh:A,sunSig:"",haloMesh:v,coneMesh:w,trailMesh:T,fridgeMesh:E,pipeMesh:I,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:B,screenMesh:C,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:nt,roomPins:ut,labelSize:null,materials:d,mask:f,openings:new Map,y:j?.y??0,o:j?.o??1,ty:0,to:1,appliedO:-1,label:k});let ft=this.customMemories.get(s.id)??new _s;this.customMemories.set(s.id,ft);let H=new Oc(s,d.wall,()=>this.invalidate(),ft);p.add(H.group),this.customLayers.set(s.id,H),this.customContext&&H.update(this.customContext.hass,this.customContext.moment,this.building?.settings.pack_animations!==!1)}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s),this.buildPipes(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=e.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Xo);this.buildOpenings(s),this.buildFlows(s),s.poolGroup=void 0,this.buildPoolWater(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(m=>m.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.solar.dispose(),this.roof.solarLines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>m.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?t0(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Ki(this.building).map(m=>[m.key,m])),n=this.building.settings.roof?.solar??[],r=Tc(hf(this.flowTime)),s=[],o=new Re,a=hn(l0(new ne({vertexColors:!0,transparent:!0,side:le,depthWrite:!1}),this.roofDirection),this.themeUniform),l=hn(new $e({vertexColors:!0,transparent:!0,blending:Ms(this.theme),depthWrite:!1}),this.themeUniform,!0),c=hn(Tc(new ne({vertexColors:!0,transparent:!0,side:le})),this.themeUniform),h=hn(Tc(new $e({vertexColors:!0,transparent:!0,blending:Ms(this.theme),depthWrite:!1})),this.themeUniform,!0),u=hn(new ne({vertexColors:!0,transparent:!0,side:le,depthWrite:!1}),this.themeUniform),f=new Re,d=hn(new ne({vertexColors:!0,side:le}),this.themeUniform),p=hn(new $e({vertexColors:!0,transparent:!0,blending:Ms(this.theme),depthWrite:!1}),this.themeUniform,!0),g=t.map(m=>{let b=new Re,y=m.solid.geometry();if(y.computeVertexNormals(),b.add(new kt(y,a),new Ze(m.lines.geometry(),l)),m.solar){let{facing:S}=m.solar;b.add(new kt(Oo(m.solar.solid.geometry(),S.normals,S.points),c),new Ze(Oo(m.solar.lines.geometry(),S.lineNormals,S.linePoints),h))}m.glass.count&&b.add(new kt(m.glass.geometry(),u));let M=n.flatMap(S=>{let A=e.get(S.face);return A&&(A.section?m.sections?.includes(A.section):m===t[0])?[{face:A,field:S}]:[]}),x=uf(M,m.floor.elevation+m.base);if(x){let S=new kt(x.geometry,r);S.renderOrder=9,b.add(S),s.push(x),Wo(x,this.solarLevels)}m.winRoof?.solid.count&&b.add(new kt(m.winRoof.solid.geometry(),d),new Ze(m.winRoof.lines.geometry(),p)),b.renderOrder=8,o.add(b);let _=null;return m.win?.solid.count&&(_=new Re,_.add(new kt(m.win.solid.geometry(),d),new Ze(m.win.lines.geometry(),p)),f.add(_)),{group:b,floorId:m.floor.id,rideId:hm(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:_}});o.renderOrder=8,this.scene.add(o),this.scene.add(f),this.roof={group:o,parts:g,solid:a,lines:l,solar:c,solarLines:h,glass:u,live:r,lives:s,wins:f,winSolid:d,winLines:p},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?Lc(this.controls.view.radius,this.houseRadius,this.keepRoof).opacity:0,s=1-Math.exp(-t/$0),o=this.roofO;this.roofO+=(r-this.roofO)*s,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let a of e.parts){let l=this.floorMap.get(a.floorId);if(!l)continue;let c=this.floorMap.get(a.rideId)??l,h=c.ty>0?Math.min(1,c.y/c.ty):this.explode&&this.floorId===null?1:0;a.group.position.y=l.floor.elevation+c.y+a.base+Lc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift+(a.lift?h*q0:0),a.win&&(a.win.position.y=l.floor.elevation+c.y+a.base+(a.lift?h*q0:0),a.win.visible=l.group.visible&&l.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=!1,e.lines.opacity=this.roofO,e.solar.opacity=this.roofO,e.solar.depthWrite=this.roofO>.9,e.solarLines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==o&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:zS)):r=this.explode?n.rank*kS:0,n.ty=r,n.to=s,t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/$0);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/160);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??Xo,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,p=a[f]??0,g=d-p;Math.abs(g)<.003?h[f]=d:(h[f]=p+g*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(r.openings.set(o,h),s=!0),e||=u}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new Q(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*XS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>Vc?.5+.5*Math.sin(f/140):f/Vc;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.rotation_x??0},${h.rotation_z??0},${h.pivot_y??""},${h.roll??0},${h.upright?1:0},${h.size?.join("/")},${h.base??0},${h.top??""},${h.pack??""},${h.mirror?1:0}`).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new re,u=[],f=[],d=new Map,p=t.floor.height;for(let g of r){let m=g.lamp==="strip"?(g.base??p)>Math.min(t.floor.cut_height,p):g.lamp?xf.has(g.lamp)&&(g.top??p)>Math.min(t.floor.cut_height,p):g.model==="camera_ceiling";if(!g.lamp&&!g.model||m&&this.wallMode==="cut")continue;let b=h.count,y=t.floor.furniture.find(A=>A.id===g.furnitureId),M=g.pack?br(y??{type:g.pack}):void 0,[x,_,S]=g.size??[.3,.3,.3];g.model?zm(h,g.model,g.x,g.model==="camera_ceiling"?g.top??p:g.y,g.z,g.rotation??0):M?yc(h,M,{x:g.x,z:g.z,rotation:g.rotation??0,rotation_x:g.rotation_x,rotation_z:g.rotation_z,w:x,d:_,h:S,mirror:g.mirror},g.base??0,65280):mf(h,{...g,lamp:g.lamp},g.top??p,65280),d.set(g.furnitureId??g.id,{start:b,end:h.count}),g.pickable!==!1&&u.push({id:g.id,start:b,end:h.count}),g.furnitureId&&f.push({id:g.furnitureId,start:b,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Ip(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],p=d?.55+.45*d.level:0,g=d?new Q(...d.color.map(y=>Math.min(1,y*p))):new Q(HS),m=n(h.id);m>0&&g.lerp(new Q(1,1,1),.7*m);let b=new Q(g.getHex());Lp(c,t.lampShade,f,[b.r,b.g,b.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*ue,r=this.weather?.cloud??0,s=Q0(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new re;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*ue,h=e.azimuth*ue,u=[Math.sin(n+h),-Math.cos(n+h)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=t.floor.rooms.find(C=>C.id===d.opening.room_id);if(!p||p.points.length<3)continue;let g=ge(t.floor,p),m=[-d.toRoom[0],-d.toRoom[1]],b=m[0]*u[0]+m[1]*u[1];if(b<.05)continue;let y=t.openings.get(d.opening.id),M=d.top-(y?.cover??0)*(d.top-d.sill);if(M-d.sill<.05)continue;let x=(C,R)=>{let L=Math.min(7,(R-g)*f);return[d.start[0]+d.axis[0]*C+d.toRoom[0]*d.faceRoom-u[0]*L,g+.02,d.start[1]+d.axis[1]*C+d.toRoom[1]*d.faceRoom-u[1]*L]},_=.14*l*Math.min(1,b*1.5),S=new Q(1*_,.82*_,.55*_),A=S.clone().multiplyScalar(.45),v=t.floor.rooms.findIndex(C=>C.id===d.opening.room_id);if(v<0||t.floor.rooms[v].points.length<3)continue;let w=s[v],T=t.floor.rooms.filter((C,R)=>s[R]===w&&Math.abs(ge(t.floor,C)-g)<.001&&C.points.length>=3).map(C=>C.points),E=Math.max(1,Math.ceil(Math.min(7,(M-g)*f)/.25)),I=Math.max(1,Math.ceil(d.width/.3));for(let C=0;C<E;C++){let R=d.sill+(M-d.sill)*C/E,L=d.sill+(M-d.sill)*(C+1)/E,D=C/E,U=(C+1)/E,B=S.clone().lerp(A,D),O=S.clone().lerp(A,U);for(let k=0;k<I;k++){let G=d.width*k/I,J=d.width*(k+1)/I,j=x((G+J)/2,(R+L)/2);if(!T.some(X=>Xt([j[0],j[2]],X)))continue;let ut=x(G,R),nt=x(J,R),ft=x(J,L),H=x(G,L);a.tri(ut,nt,ft,B,B,O),a.tri(ut,ft,H,B,O,O)}}}this.pushRoofSun(t,a,s)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}pushRoofSun(t,e,n){this.sun&&this.building&&c0(e,this.building,t.floor,this.sun,this.weather?.cloud??0,this.roofWindows,t.geo.holes,n)}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new re,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ue,_=[-Math.sin(x),Math.cos(x)],S=l.model==="camera_ceiling",A=l.reach??(S?3:4.5),v=(l.fov??(S?360:90))*ue/2,w=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),T=new Q(0,0,0),E=Math.max(4,Math.round(v/.15)),I=pn(t.floor,l.x,l.z)+.015,C=t.geo.walls2d,R=O=>{let k=O.b[0]-O.a[0],G=O.b[1]-O.a[1],J=k*k+G*G||1,j=Math.max(0,Math.min(1,((l.x-O.a[0])*k+(l.z-O.a[1])*G)/J));return Math.hypot(l.x-(O.a[0]+k*j),l.z-(O.a[1]+G*j))},L=null;for(let O of C)R(O)<.45&&(!L||R(O)<R(L))&&(L=O);let D=O=>{let k=_[0]*Math.cos(O)-_[1]*Math.sin(O),G=_[1]*Math.cos(O)+_[0]*Math.sin(O),J=A;for(let j of C){let ut=j.b[0]-j.a[0],nt=j.b[1]-j.a[1],ft=k*nt-G*ut;if(Math.abs(ft)<1e-9)continue;let H=((j.a[0]-l.x)*nt-(j.a[1]-l.z)*ut)/ft,X=((j.a[0]-l.x)*G-(j.a[1]-l.z)*k)/ft;j===L&&H<=.45||H>.02&&H<J&&X>=0&&X<=1&&(J=H)}return J},U=O=>{let k=D(O);return[l.x+(_[0]*Math.cos(O)-_[1]*Math.sin(O))*k,I,l.z+(_[1]*Math.cos(O)+_[0]*Math.sin(O))*k]},B=s.count;for(let O=0;O<E;O++)s.tri([l.x,I,l.z],U(-v+2*v*(O+1)/E),U(-v+2*v*O/E),w,T,T);o.push({id:l.id,start:B,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||xf.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??Hc[l.lamp],p=l.base??0,g=n.length,m=s.p.length,b=(l.rotation??0)*ue,y={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(p+.4,h-d)+.08,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],M=(x,_,S=1)=>{n.push(x,y,_),r.push(...c.color.map(A=>A*c.level*.7*S))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6))):M(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else l.lamp==="wall"?M(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05)):M(l.x,l.z);Rn(n,g,l,Gc(l,e)),Rn(s.p,m,l,Gc(l,e))}if(this.highQuality)for(let l of this.lightSources(t))E0(s,l,t.floor,t.lightSurface?.blockers??[]);let a=new Wt;a.setAttribute("position",new Et(n,3)),a.setAttribute("color",new Et(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=cf(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.rotation_x??0},${s.rotation_z??0},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new re;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ue,l=Math.cos(a),c=Math.sin(a),h=us(s,Ce(t.floor,s)+s.h/2),u=(_,S,A)=>h(s.x+_*l-A*c,S,s.z+_*c+A*l);if(o.faces){let _=Math.max(.05,s.w)*(s.mirror?-1:1),S=Math.max(.05,s.d),A=Math.max(.005,s.h),v=Ce(t.floor,s);for(let w of o.faces){if(w.part==="lights"){let k=_e(s.type),G=J=>["#e8f4ff","#ff3b4f"].includes(J.color.toLowerCase());if(k&&k.parts.some(G)){let J=new Q(...w.color.map(j=>Math.min(1,j*(.4+.6*w.level))));vc(r,k,s,v,J.getHex(),G)}continue}if(w.part==="cabin"){let k=_e(s.type),G=J=>J.color.toLowerCase()==="#13283a"||J.color==="glass";if(k&&k.parts.some(G)){let J=new Q(...w.color.map(j=>Math.min(1,j*(.3+.5*w.level))));vc(r,k,s,v,J.getHex(),G);continue}}if(w.part==="burners"){let k=new Q(...w.color.map(J=>Math.min(1,J*(.25+.6*w.level)))),G=v+A+.008;for(let[J,j,ut]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let nt=J*Math.abs(_)/.6,ft=j*S/.62,H=14;for(let X=0;X<H;X++){let st=X/H*Math.PI*2,ct=(X+1)/H*Math.PI*2;r.tri(u(nt,G,ft),u(nt+Math.cos(st)*ut,G,ft+Math.sin(st)*ut),u(nt+Math.cos(ct)*ut,G,ft+Math.sin(ct)*ut),k)}}continue}if(w.part==="band"||w.part==="cabin"){let k=w.part==="cabin",G=v+A*(k?.6:.42),J=k?v+A*.86:G+.07,j=new Q(...w.color.map(H=>Math.min(1,H*(.3+.45*w.level)))),ut=Math.abs(_)/2+(k?.012:.02),nt=S/2+(k?.012:.02),ft=[[-ut,-nt],[ut,-nt],[ut,nt],[-ut,nt]];for(let H=0;H<4;H++){let X=ft[H],st=ft[(H+1)%4],ct=u(X[0]*Math.sign(_),G,X[1]),lt=u(st[0]*Math.sign(_),G,st[1]),pt=u(st[0]*Math.sign(_),J,st[1]),zt=u(X[0]*Math.sign(_),J,X[1]);r.tri(ct,lt,pt,j),r.tri(ct,pt,zt,j)}continue}let T=w.part==="right"?.03:-Math.abs(_)/2+.03,E=w.part==="left"?-.03:Math.abs(_)/2-.03,I=v+(w.part==="bottom"?A*.45:A)+.006,C=new Q(...w.color.map(k=>Math.min(1,k*(.35+.65*w.level)))),R=new Q(0,0,0),L=(k,G,J=I)=>u(k*Math.sign(_),J,G),D=[L(T,-S/2+.03),L(E,-S/2+.03),L(E,S/2-.03),L(T,S/2-.03)];r.tri(D[0],D[2],D[1],C),r.tri(D[0],D[3],D[2],C);let U=.12+.1*w.level,B=C.clone().multiplyScalar(.5),O=[L(T-U,-S/2-U,I+.004),L(E+U,-S/2-U,I+.004),L(E+U,S/2+U,I+.004),L(T-U,S/2+U,I+.004)];for(let k=0;k<4;k++){let G=(k+1)%4;r.tri(D[k],O[G],O[k],B,R,R),r.tri(D[k],D[G],O[G],B,B,R)}}continue}let f=_e(s.type);if(f&&!f.light&&o.ring&&f.parts.some(_=>_.glow)){let _=new Q(...o.color.map(S=>Math.min(1,S*(.45+.55*o.level))));vc(r,f,s,Ce(t.floor,s),_.getHex())}let d=Hh(s,t.floor);if(!d)continue;let p=new Q(...o.color.map(_=>Math.min(1,_*(.35+.65*o.level)))),g=new Q(0,0,0),m=d.z+.004;if(r.tri(u(d.x0,d.y0,m),u(d.x1,d.y0,m),u(d.x1,d.y1,m),p),r.tri(u(d.x0,d.y0,m),u(d.x1,d.y1,m),u(d.x0,d.y1,m),p),o.plain)continue;let b=.18+.12*o.level,y=p.clone().multiplyScalar(.5),M=[u(d.x0,d.y0,m),u(d.x1,d.y0,m),u(d.x1,d.y1,m),u(d.x0,d.y1,m)],x=[u(d.x0-b,d.y0-b,m+.01),u(d.x1+b,d.y0-b,m+.01),u(d.x1+b,d.y1+b,m+.01),u(d.x0-b,d.y1+b,m+.01)];for(let _=0;_<4;_++){let S=(_+1)%4;r.tri(M[_],x[_],x[S],y,g,g),r.tri(M[_],x[S],M[S],y,g,y)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,s]of t.screenPics)n.has(r)&&this.screens.get(r).picture===s.url||(t.group.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),s.texture?.dispose(),t.screenPics.delete(r));for(let[r,s]of n){let o=this.screens.get(r),a=Hh(s,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new kt(new Bn(1,1),new ne({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:o.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let h=l;new eo().load(o.picture,u=>{if(t.screenPics.get(r)!==h){u.dispose();return}u.colorSpace=Ne,h.texture=u;let f=h.mesh.material;f.map=u,f.needsUpdate=!0,this.placeScreenPicture(h.mesh,s,a,u,Ce(t.floor,s)+s.h/2),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*o.level),l.texture&&this.placeScreenPicture(l.mesh,s,a,l.texture,Ce(t.floor,s)+s.h/2)}}placeScreenPicture(t,e,n,r,s){let o=r.image,a=o?.width&&o?.height?o.width/o.height:16/9,l=n.x1-n.x0-.04,c=n.y1-n.y0-.04,h=Math.min(l,c*a),u=h/a,f=e.rotation*ue,d=(n.x0+n.x1)/2,p=n.z+.008;t.scale.set(h,u,1),t.rotation.set((e.rotation_x??0)*ue,-f,(e.rotation_z??0)*ue,"YZX");let g=us(e,s);t.position.set(...g(e.x+d*Math.cos(f)-p*Math.sin(f),(n.y0+n.y1)/2,e.z+d*Math.sin(f)+p*Math.cos(f)))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){let e=this.flows.filter(h=>h.floorId===t.floor.id).map(gf).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id)continue;let u=this.flowPhase.get(gf(h))??{speed:j0(h.power),offset:0},f=h.power>.5?Math.min(1,.5+h.power/2500):.22,d=h.color.map(y=>y*f),p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(p<1e-4)continue;let g=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p,(h.b[2]-h.a[2])/p],m=[];if(Math.abs(g[1])<.5){let y=Math.hypot(g[0],g[2])||1;m.push([-g[2]/y,0,g[0]/y])}else m.push([1,0,0],[0,0,1]);let b=this.lowQuality?[[K0*1.4,1]]:[[GS,.25],[K0,1]];for(let[y,M]of b)for(let x of m){let _=y/2,S=(v,w)=>[v[0]+x[0]*_*w,v[1]+x[1]*_*w,v[2]+x[2]*_*w],A=[[S(h.a,-1),h.dist,0],[S(h.b,-1),h.dist+p,0],[S(h.b,1),h.dist+p,1],[S(h.a,1),h.dist,1]];for(let v of[0,1,2,0,2,3]){let[w,T,E]=A[v];n.push(w[0],w[1],w[2]),r.push(d[0]*M,d[1]*M,d[2]*M),s.push(T,E),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let f=l.getAttribute(h);f.array.set(u),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Wt;c.setAttribute("position",new Et(n,3)),c.setAttribute("color",new Et(r,3)),c.setAttribute("uv",new Et(s,2)),c.setAttribute("flowSpeed",new Et(o,1)),c.setAttribute("flowOffset",new Et(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=B0(t.geo.openings,t.openings,Math.min(t.floor.cut_height,Ge(t.floor)-t.floor.elevation));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let r=new Q(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new Q(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(YS,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,r.r,r.g,r.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new cn;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[p,g]of d.points)e.expandByPoint(new V(p,f+ge(u.floor,d),g)),e.expandByPoint(new V(p,f+Ge(u.floor)-u.floor.elevation,g))}e.isEmpty()&&e.set(new V(-4,0,-4),new V(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new V),r=e.getSize(new V),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new V(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new cn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new V(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new V(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=tw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new V),r=t.getSize(new V),s=bf*Math.ceil((Math.max(r.x,r.z)+16)/bf);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Ji-.02,n.z)}distanceFor(t){let e=this.camera.fov*ue,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new io;return r.setFromCamera(new At(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??$t;if(f!==$t&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,g=this.wallMode==="cut"&&d===0,m=(c.mask.glass.value&1<<p)!==0;if(!g){let b=n.ray.direction,y=Math.hypot(b.x,b.z)||1,M=[a.point.x-b.x/y*.3,a.point.z-b.z/y*.3],x=c.floor.rooms.find(_=>_.points.length>=3&&Xt(M,_.points))?.id??null;if(this.roomId!==null){if(x===this.roomId)return{floorId:c.floor.id,roomId:x}}else if(!m&&x)return{floorId:c.floor.id,roomId:x}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Vc),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),s=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],o=r.flatMap(a=>[a.lampMesh,a.wallMesh,...s(a)].filter(l=>l.visible));for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=r.find(u=>u.group===a.object.parent||s(u).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let u=this.furnitureNear(l,a.point.x,a.point.z);if(u)return{fv:l,id:u,y:a.point.y};continue}let h=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(u=>a.faceIndex>=u.start&&a.faceIndex<u.end)?.id;if(h)return{fv:l,id:h,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ue,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return r?.id??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&r.has(h))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let s=this.furnitureAt(t,e);if(!s){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){let o=t.floor.furniture.find(u=>u.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let u=this.camera.position,f=this.camera.getWorldDirection(new V),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],g=Math.hypot(l[0]-u.x,l[1]-u.z,(a??0)-u.y),m=this.renderer.domElement.getBoundingClientRect().height||1,b=2*g*Math.tan(this.camera.fov*Math.PI/360)/m;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-p[1],p[0]],fwd:p,perPx:b,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),this.options.onFurnitureSelect?.(o.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(m=>m.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let g=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/g)*g,n.z=d.z=Math.round((p[1]+n.offset[1])/g)*g,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let f=(t-o.x0)*o.perPx,d=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*f-o.fwd[0]*d-r.offset[0],o.fz+o.right[1]*f-o.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=s.floor.furniture.find(f=>f.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Jp(s.floor,c,h,u,this.building?.settings.wall_interior??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Oe,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s?.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new Q(.25,.9,1):new Q(1,.71,.28)))}n&&(this.ghost=new Ze(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let s=t.p.length,o=this.grab?.id===n.id?this.grab.x:n.x,a=this.grab?.id===n.id?this.grab.z:n.z,l=hs(e.floor,n.x,n.z),c=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,h=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=n.mount_y!=null||_e(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ce(e.floor,n):c?n.type==="lamp_pendant"?l-n.h-.1:l-h:Ce(e.floor,n),f=n.rotation*ue,d=Math.cos(f),p=Math.sin(f),g=(M,x,_)=>[o+M*d-x*p,_,a+M*p+x*d],m=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let M=0;M<4;M++){let[x,_]=m[M],[S,A]=m[(M+1)%4];t.seg(g(x,_,u+.01),g(S,A,u+.01),r),t.seg(g(x,_,u+h),g(S,A,u+h),r),t.seg(g(x,_,u+.01),g(x,_,u+h),r)}t.seg(g(-n.w/2,n.d/2+.03,u+.02),g(n.w/2,n.d/2+.03,u+.02),new Q(1,1,1));let b={...n,x:o,z:a},y=u+n.h/2;if(n.type==="led_strip"&&(Rn(t.p,s,{...b,rotation_x:n.tilt,rotation_z:n.upright?90:0},y),n.upright)){let M=n.w/2-n.h/2;for(let x=s+1;x<t.p.length;x+=3)t.p[x]+=M;y+=M}Rn(t.p,s,b,y)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(b=>b.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new rn(s,o);a.texture.colorSpace=Ne;let l=new jn(-1,1,1,-1,.1,400),c=this.floors.map(b=>({fv:b,visible:b.group.visible,y:b.y,o:b.o,standing:b.mask.standing.value,glass:b.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let g=p.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let b of n){for(let C of this.floors)C.group.visible=C===b;b.y=0,b.o=1,this.applyFloor(b),b.group.visible=!0,b.mask.standing.value=0,b.mask.glass.value=0;let y=b.floor.rooms.flatMap(C=>C.points),M=b.floor.elevation,x=new cn(new V(Math.min(...y.map(C=>C[0]))-.3,M,Math.min(...y.map(C=>C[1]))-.3),new V(Math.max(...y.map(C=>C[0]))+.3,M+Math.min(b.floor.cut_height,b.floor.height),Math.max(...y.map(C=>C[1]))+.3)),_=x.getCenter(new V),S=-.6,A=.8,v=new V(Math.sin(A)*Math.sin(S),Math.cos(A),Math.sin(A)*Math.cos(S));l.position.copy(_).addScaledVector(v,100),l.lookAt(_),l.updateMatrixWorld();let w=.5,T=.5;for(let C of[x.min.x,x.max.x])for(let R of[x.min.y,x.max.y])for(let L of[x.min.z,x.max.z]){let D=new V(C,R,L).applyMatrix4(l.matrixWorldInverse);w=Math.max(w,Math.abs(D.x)),T=Math.max(T,Math.abs(D.y))}let E=s/o;w/T>E?T=w/E:w=T*E,l.left=-w*1.05,l.right=w*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let I=g.createImageData(s,o);for(let C=0;C<o;C++)I.data.set(d.subarray((o-1-C)*s*4,(o-C)*s*4),C*s*4);g.putImageData(I,0,0),m.push({floorId:b.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let b of c)b.fv.y=b.y,b.fv.o=b.o,b.fv.mask.standing.value=b.standing,b.fv.mask.glass.value=b.glass,this.applyFloor(b.fv),b.fv.group.visible=b.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?z0(n.room,void 0,void 0,n.obstacles):pf(n.rest),l=a.length?a:pf(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Xt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Y0[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new re,s=(a,l,c,h,u)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Me(r,f,l,c,h,u,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new ne({vertexColors:!0});let o=new re;Me(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Re,n=new ne({color:Y0[t.mode]});return e.add(new kt(this.robotGeo,this.robotMat),new kt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=V0(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],pn(s.floor,r.motion.pos[0],r.motion.pos[1]),r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new Q(.25-.2*a,.95-.83*a,1-.7*a),r=new Q(0,0,0),s=new Q(.3,1,.6),o=.02;for(let a of this.floors){let l=new re;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let p=h.points[d-1];if(p){let g=Math.hypot(u-p[0],f-p[1])||1,m=-(f-p[1])/g*.1,b=(u-p[0])/g*.1;l.tri([p[0]+m,o,p[1]+b],[u+m,o,f+b],[u-m,o,f-b],s,s,s),l.tri([p[0]+m,o,p[1]+b],[u-m,o,f-b],[p[0]-m,o,p[1]-b],s,s,s)}for(let g=0;g<10;g++){let m=g/10*Math.PI*2,b=(g+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(b)*.35,o,f+Math.sin(b)*.35],[u+Math.cos(m)*.35,o,f+Math.sin(m)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,p=(h.x-c.x)/f*.06,g=n(c.age);l.tri([c.x+d,o,c.z+p],[h.x+d,o,h.z+p],[h.x-d,o,h.z-p],g,u,u),l.tri([c.x+d,o,c.z+p],[h.x-d,o,h.z-p],[c.x-d,o,c.z-p],g,u,g)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(p)*.22,o,h.z+Math.sin(p)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ue,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ue)),a=n.floor.elevation+n.ty+(s?(e.top??n.floor.height)-.1:e.y),l=new V(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new V(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Vc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new V(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("fp3d-dev-found"),setTimeout(()=>a?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=!1;for(let[p,g]of this.customLayers)(this.floorMap.get(p)?.o??0)>.02&&(o=g.step(e)||o);let a=this.stepOpenings(e)||this.stepFridges(e)||o,l=!1;if(this.flashes.size){let p=new Set;for(let[g,m]of this.flashes){let b=this.deviceFloor.get(g);b&&p.add(b),m<=t&&this.flashes.delete(g)}l=this.flashes.size>0;for(let g of this.floors)p.has(g.floor.id)&&this.buildLamps(g)}let c=this.placeRoof(e),h=this.stepRobots(t),u=this.stepWeather(t),f=r||s||a||l||c,d=[];if((r||this.controls.busy)&&d.push("camera"),s&&d.push("floors"),a&&d.push("openings"),l&&d.push("flash"),c&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.effectTick&&d.push("effect"),h&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let p=this.lowQuality?2*J0:J0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=p/1e3,this.effectTick=!0;for(let g of this.floors)g.o<.02||!this.effectFloors.has(g.floor.id)||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},p)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&h&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Z0:Z0))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;this.roofDirection.value.set(n/s,(t.y-e.y)/Math.hypot(s,t.y-e.y),r/s);for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new V,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let g of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(g,h,m).project(this.camera);let b=(n.x+1)/2*t,y=(1-n.y)/2*e;(!l||b<l.x)&&(l={x:b,y}),(!c||b>c.x)&&(c={x:b,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new V(o.p[0],o.p[1]+(l?.y??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?Lc(this.controls.view.radius,this.houseRadius,this.keepRoof,this.roofO).lift:0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length(),f=h.normalize().dot(new V(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l+ge(o.floor,c.room),c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new V,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("fp3d-dev-full",h==="full"),o.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=$S(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function $S(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function ZS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new Un(t);return s.flipY=!1,s.wrapS=xn,s.wrapT=xn,s.anisotropy=4,s.colorSpace=Ne,s}function KS(i){let t=new ne({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function JS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Un(i);return e.wrapS=ar,e.wrapT=ar,e.colorSpace=Ne,e}function gf(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function j0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function jS(i){let t=new ne({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:le});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Q0(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function QS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new Un(t);return r.colorSpace=Ne,r}function tw(){let t=bf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new Un(e);return s.anisotropy=4,s.colorSpace=Ne,s}function j3(i,t){return new vf(i,t)}function mf(i,t,e,n){e=t.top??e;let r=i.p.length;ew(i,t,e,n),Rn(i.p,r,t,Gc(t,e))}function Gc(i,t){if(i.pivot_y!=null)return i.pivot_y;let[e,,n]=i.size??(i.lamp?Hc[i.lamp]:[.3,.3,.3]);return i.lamp&&xf.has(i.lamp)?t-n/2:(i.base??0)+(i.lamp==="strip"&&i.upright?e:n)/2}function ew(i,t,e,n){let[r,s,o]=t.size??Hc[t.lamp],a=t.base??0,l=(t.rotation??0)*ue,c=Math.cos(l),h=Math.sin(l),u=(g,m)=>[t.x+g*c-m*h,t.z+g*h+m*c],f=(g,m,b,y,M,x=14)=>{let _=[];for(let S=0;S<x;S++){let A=S/x*Math.PI*2;_.push([t.x+Math.cos(A)*g,t.z+Math.sin(A)*g])}Me(i,_,m,b,y,M,{aoFrom:0,bottom:!0})},d=(g,m,b,y,M,x,_,S=_)=>Me(i,[u(g,b),u(m,b),u(m,y),u(g,y)],M,x,_,S,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(p*.25,e-.04,e,oe,oe,8),f(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-o);f(.06,e-.02,e,oe,oe,8);let m=t.variant==="globe"?g+2*p:t.variant==="drum"?g+.24:g+.2;if(f(.008,m,e-.02,oe,oe,5),t.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),x=Math.PI*((y+1)/7);f(p*Math.max(.2,Math.sin((M+x)/2)),g+p-p*Math.cos(M),g+p-p*Math.cos(x),n,n,14)}else if(t.variant==="cone")for(let y=0;y<4;y++)f(p*(.25+.75*(4-y)/4),g+.06*y,g+.06*(y+1),n,n,16);else t.variant==="drum"?f(p,g,g+.24,n,n,18):(f(p*.35,g+.14,g+.2,n,n,12),f(p,g,g+.14,n,n,16));break}case"downlight":f(p,e-.012,e,oe,oe,12),f(p*.7,e-.02,e-.012,n,n,12);break;case"spot":f(p*.6,e-.02,e,oe,oe,10),f(p,e-Math.max(.06,o),e-.02,oe,oe,12),f(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,oe,oe),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,p*.6),a,a+.03,oe,oe),f(.014,a+.03,a+o-.12,oe,oe,6),f(p,a+o-.14,a+o-.02,oe,oe),f(p*.92,a+o-.02,a+o,n,n);break;case"bollard":f(p,a,a+o-.14,oe,oe,10),f(p*.9,a+o-.14,a+o-.03,n,n,10),f(p*1.1,a+o-.03,a+o,oe,oe,10);break;case"garden":f(.012,a,a+o-.08,oe,oe,5),f(p,a+o-.08,a+o-.01,oe,oe,10),f(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,p*.7),a,a+.03,oe,oe),f(.014,a+.03,a+o-.28,oe,oe,6),f(p,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,p*.55),a,a+.03,oe,oe),f(.012,a+.03,a+o-.16,oe,oe,6),f(p,a+o-.18,a+o,n,n);break;case"wall":{let g=t.base??rc;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,g,g+o,oe),d(-r/2,r/2,-s/2+.02,s/2,g+o*.15,g+o*.85,n);break}case"strip":{let g=Math.max(.02,o),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,m-g,m,n);break}let b=(t.roll??0)*ue,y=Math.cos(b),M=Math.sin(b),x=t.upright?a+r/2:m-g/2,_=(T,E,I)=>{let C=T,R=E*y-I*M,L=E*M+I*y;return t.upright&&([C,R]=[-R,C]),[t.x+C*c-L*h,x+R,t.z+C*h+L*c]},S=[_(-r/2,-g/2,-s/2),_(r/2,-g/2,-s/2),_(r/2,-g/2,s/2),_(-r/2,-g/2,s/2),_(-r/2,g/2,-s/2),_(r/2,g/2,-s/2),_(r/2,g/2,s/2),_(-r/2,g/2,s/2)],A=new Q(n),v=[t.x,x,t.z],w=(T,E,I,C)=>{let[R,L,D]=[S[T],S[E],S[I]],U=[(L[1]-R[1])*(D[2]-R[2])-(L[2]-R[2])*(D[1]-R[1]),(L[2]-R[2])*(D[0]-R[0])-(L[0]-R[0])*(D[2]-R[2]),(L[0]-R[0])*(D[1]-R[1])-(L[1]-R[1])*(D[0]-R[0])],B=[R[0]-v[0],R[1]-v[1],R[2]-v[2]],O=U[0]*B[0]+U[1]*B[1]+U[2]*B[2]<0,[k,G,J,j]=O?[S[C],S[I],S[E],S[T]]:[S[T],S[E],S[I],S[C]];i.tri(k,G,J,A,A,A),i.tri(k,J,j,A,A,A)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{ef as FloorMap,vf as FloorplanViewer,nf as WalkCamera,j3 as createViewer,N3 as funLib,BS as furnitureFront,US as furniturePreview,qS as isLowEnd,mf as pushLampModel};
