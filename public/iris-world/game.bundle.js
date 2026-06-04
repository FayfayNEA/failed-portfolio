(()=>{var fl="160";var pu=0,zl=1,mu=2;var mh=1,pl=2,fi=3,vn=0,tn=1,wt=2;var ti=0,bs=1,kl=2,Gl=3,Vl=4,gu=5,Xi=100,_u=101,yu=102,Wl=103,Xl=104,xu=200,vu=201,Mu=202,Eu=203,Pa=204,Ia=205,Su=206,bu=207,wu=208,Tu=209,Au=210,Ru=211,Cu=212,Pu=213,Iu=214,Lu=0,Du=1,Uu=2,Yr=3,Fu=4,Nu=5,Bu=6,Ou=7,ml=0,Hu=1,zu=2,Ai=0,gl=1,_l=2,yl=3,or=4,ku=5,xl=6;var gh=300,As=301,Rs=302,La=303,Da=304,vo=306,$s=1e3,Jn=1001,Ua=1002,Xt=1003,Yl=1004;var Ko=1005;var Dn=1006,Gu=1007;var Ks=1008;var Ri=1009,Vu=1010,Wu=1011,vl=1012,_h=1013,wi=1014,Ti=1015,ni=1016,yh=1017,xh=1018,qi=1020,Xu=1021,$n=1023,Yu=1024,qu=1025,Zi=1026,Cs=1027,Zu=1028,vh=1029,Ju=1030,Mh=1031,Eh=1033,Qo=33776,jo=33777,ea=33778,ta=33779,ql=35840,Zl=35841,Jl=35842,$l=35843,Sh=36196,Kl=37492,Ql=37496,jl=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,na=36492,fc=36494,pc=36495,$u=36283,mc=36284,gc=36285,_c=36286;var qr=2300,Zr=2301,ia=2302,yc=2400,xc=2401,vc=2402;var bh=3e3,Ji=3001,Ku=3200,Qu=3201,Mo=0,ju=1,Un="",Jt="srgb",gi="srgb-linear",Ml="display-p3",Eo="display-p3-linear",Jr="linear",Tt="srgb",$r="rec709",Kr="p3";var rs=7680;var Mc=519,ed=512,td=513,nd=514,wh=515,id=516,sd=517,rd=518,od=519,Ec=35044;var Sc="300 es",Fa=1035,mi=2e3,Qr=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sa=Math.PI/180,jr=180/Math.PI;function ar(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function pn(n,e,t){return Math.max(e,Math.min(t,n))}function ad(n,e){return(n%e+e)%e}function ra(n,e,t){return(1-t)*n+t*e}function bc(n){return(n&n-1)===0&&n!==0}function Na(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var at=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],x=s[4],A=s[7],U=s[2],P=s[5],L=s[8];return r[0]=o*_+a*E+l*U,r[3]=o*m+a*x+l*P,r[6]=o*f+a*A+l*L,r[1]=c*_+h*E+d*U,r[4]=c*m+h*x+d*P,r[7]=c*f+h*A+d*L,r[2]=u*_+p*E+g*U,r[5]=u*m+p*x+g*P,r[8]=u*f+p*A+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oa=new _t;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ld(){let n=eo("canvas");return n.style.display="block",n}var wc={};function Zs(n){n in wc||(wc[n]=!0,console.warn(n))}var Tc=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[gi]:{transfer:Jr,primaries:$r,toReference:n=>n,fromReference:n=>n},[Jt]:{transfer:Tt,primaries:$r,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Eo]:{transfer:Jr,primaries:Kr,toReference:n=>n.applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(Tc)},[Ml]:{transfer:Tt,primaries:Kr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ac),fromReference:n=>n.applyMatrix3(Tc).convertLinearToSRGB()}},cd=new Set([gi,Eo]),St={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Mr[e].toReference,s=Mr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Mr[n].primaries},getTransfer:function(n){return n===Un?Jr:Mr[n].transfer}};function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var os,to=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=eo("canvas")),os.width=e.width,os.height=e.height;let i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hd=0,no=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?to.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ud=0,Fn=class n extends Ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=Dn,o=Ks,a=$n,l=Ri,c=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ar(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?Jt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Ji:bh}set encoding(e){Zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?Jt:Un}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=gh;Fn.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,A=(p+1)/2,U=(f+1)/2,P=(h+u)/4,L=(d+_)/4,$=(g+m)/4;return x>A&&x>U?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=P/i,r=L/i):A>U?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=P/s,r=$/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=L/r,s=$/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends Ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ji?Jt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Ba{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},io=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oa=class extends Fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let U=Math.sqrt(x),P=Math.atan2(U,f*E);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}let A=a*E;if(l=l*m+u*A,c=c*m+p*A,h=h*m+g*A,d=d*m+_*A,m===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new z,Rc=new Pi,$i=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Sr.subVectors(this.max,Vs),as.subVectors(e.a,Vs),ls.subVectors(e.b,Vs),cs.subVectors(e.c,Vs),vi.subVectors(ls,as),Mi.subVectors(cs,ls),zi.subVectors(as,cs);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!ha(t,as,ls,cs,Sr)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,as,ls,cs,Sr))?!1:(br.crossVectors(vi,Mi),t=[br.x,br.y,br.z],ha(t,as,ls,cs,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new z,new z,new z,new z,new z,new z,new z,new z],Yn=new z,Er=new $i,as=new z,ls=new z,cs=new z,vi=new z,Mi=new z,zi=new z,Vs=new z,Sr=new z,br=new z,ki=new z;function ha(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dd=new $i,Ws=new z,ua=new z,Ps=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ua)),this.expandByPoint(Ws.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new z,da=new z,wr=new z,Ei=new z,fa=new z,Tr=new z,pa=new z,Qs=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(da);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=Ei.dot(this.direction),l=-Ei.dot(wr),c=Ei.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(da).addScaledVector(wr,u),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){fa.subVectors(t,e),Tr.subVectors(i,e),pa.crossVectors(fa,Tr);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);let l=a*this.direction.dot(Tr.crossVectors(Ei,Tr));if(l<0)return null;let c=a*this.direction.dot(fa.cross(Ei));if(c<0||l+c>o)return null;let h=-a*Ei.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Si.crossVectors(i,Tn),Si.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Si.crossVectors(i,Tn)),Si.normalize(),Ar.crossVectors(Tn,Si),s[0]=Si.x,s[4]=Ar.x,s[8]=Tn.x,s[1]=Si.y,s[5]=Ar.y,s[9]=Tn.y,s[2]=Si.z,s[6]=Ar.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],x=i[7],A=i[11],U=i[15],P=s[0],L=s[4],$=s[8],M=s[12],w=s[1],X=s[5],q=s[9],_e=s[13],O=s[2],G=s[6],Q=s[10],oe=s[14],re=s[3],ne=s[7],ue=s[11],ce=s[15];return r[0]=o*P+a*w+l*O+c*re,r[4]=o*L+a*X+l*G+c*ne,r[8]=o*$+a*q+l*Q+c*ue,r[12]=o*M+a*_e+l*oe+c*ce,r[1]=h*P+d*w+u*O+p*re,r[5]=h*L+d*X+u*G+p*ne,r[9]=h*$+d*q+u*Q+p*ue,r[13]=h*M+d*_e+u*oe+p*ce,r[2]=g*P+_*w+m*O+f*re,r[6]=g*L+_*X+m*G+f*ne,r[10]=g*$+_*q+m*Q+f*ue,r[14]=g*M+_*_e+m*oe+f*ce,r[3]=E*P+x*w+A*O+U*re,r[7]=E*L+x*X+A*G+U*ne,r[11]=E*$+x*q+A*Q+U*ue,r[15]=E*M+x*_e+A*oe+U*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+_*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,x=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,A=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,U=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,P=t*E+i*x+s*A+r*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=E*L,e[1]=(_*u*r-d*m*r-_*s*p+i*m*p+d*s*f-i*u*f)*L,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*L,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*L,e[4]=x*L,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*L,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*L,e[8]=A*L,e[9]=(g*d*r-h*_*r-g*i*p+t*_*p+h*i*f-t*d*f)*L,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*f+t*a*f)*L,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*L,e[12]=U*L,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*L,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*L,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,E=l*c,x=l*h,A=l*d,U=i.x,P=i.y,L=i.z;return s[0]=(1-(_+f))*U,s[1]=(p+A)*U,s[2]=(g-x)*U,s[3]=0,s[4]=(p-A)*P,s[5]=(1-(u+f))*P,s[6]=(m+E)*P,s[7]=0,s[8]=(g+x)*L,s[9]=(m-E)*L,s[10]=(1-(u+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let c=1/r,h=1/o,d=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===mi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,_;if(a===mi)g=(o+r)*d,_=-2*d;else if(a===Qr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},hs=new z,qn=new Yt,fd=new z(0,0,0),pd=new z(1,1,1),Si=new z,Ar=new z,Tn=new z,Cc=new Yt,Pc=new Pi,so=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};so.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},md=0,Ic=new z,us=new Pi,hi=new Yt,Rr=new z,Xs=new z,gd=new z,_d=new Pi,Lc=new z(1,0,0),Dc=new z(0,1,0),Uc=new z(0,0,1),yd={type:"added"},xd={type:"removed"},nn=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new so,i=new Pi,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new _t}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Xs,Rr,this.up):hi.lookAt(Rr,Xs,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),us.setFromRotationMatrix(hi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};nn.DEFAULT_UP=new z(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new z,ui=new z,ma=new z,di=new z,ds=new z,fs=new z,Fc=new z,ga=new z,_a=new z,ya=new z,Cr=!1,Ms=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),ui.subVectors(i,t),ma.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(ui),l=Zn.dot(ma),c=ui.dot(ui),h=ui.dot(ma),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,i,s,r,o,a,l){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),ui.subVectors(e,t),Zn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cr=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,i),fs.subVectors(r,i),ga.subVectors(e,i);let l=ds.dot(ga),c=fs.dot(ga);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);let h=ds.dot(_a),d=fs.dot(_a);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ds,o);ya.subVectors(e,r);let p=ds.dot(ya),g=fs.dot(ya);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Fc.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Fc,a);let f=1/(m+_+u);return o=_*f,a=u*f,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=ad(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xa(o,r,e+1/3),this.g=xa(o,r,e),this.b=xa(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return St.fromWorkingColorSpace(hn.copy(this),e),Math.round(pn(hn.r*255,0,255))*65536+Math.round(pn(hn.g*255,0,255))*256+Math.round(pn(hn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Jt){St.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Pr);let i=ra(bi.h,Pr.h,t),s=ra(bi.s,Pr.s,t),r=ra(bi.l,Pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new et;et.NAMES=Ah;var vd=0,ii=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=bs,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ia,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new z,Ir=new at,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}};var ro=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var oo=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Dt=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Md=0,Ln=new Yt,va=new nn,ps=new z,An=new $i,Ys=new $i,en=new z,an=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?oo:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new _t().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(An.min,Ys.min),An.expandByPoint(en),en.addVectors(An.max,Ys.max),An.expandByPoint(en)):(An.expandByPoint(Ys.min),An.expandByPoint(Ys.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),en.add(ps)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new z,h[w]=new z;let d=new z,u=new z,p=new z,g=new at,_=new at,m=new at,f=new z,E=new z;function x(w,X,q){d.fromArray(s,w*3),u.fromArray(s,X*3),p.fromArray(s,q*3),g.fromArray(o,w*2),_.fromArray(o,X*2),m.fromArray(o,q*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);let _e=1/(_.x*m.y-m.x*_.y);isFinite(_e)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(_e),E.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(_e),c[w].add(f),c[X].add(f),c[q].add(f),h[w].add(E),h[X].add(E),h[q].add(E))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let w=0,X=A.length;w<X;++w){let q=A[w],_e=q.start,O=q.count;for(let G=_e,Q=_e+O;G<Q;G+=3)x(i[G+0],i[G+1],i[G+2])}let U=new z,P=new z,L=new z,$=new z;function M(w){L.fromArray(r,w*3),$.copy(L);let X=c[w];U.copy(X),U.sub(L.multiplyScalar(L.dot(X))).normalize(),P.crossVectors($,X);let _e=P.dot(h[w])<0?-1:1;l[w*4]=U.x,l[w*4+1]=U.y,l[w*4+2]=U.z,l[w*4+3]=_e}for(let w=0,X=A.length;w<X;++w){let q=A[w],_e=q.start,O=q.count;for(let G=_e,Q=_e+O;G<Q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nc=new Yt,Gi=new Qs,Lr=new Ps,Bc=new z,ms=new z,gs=new z,_s=new z,Ma=new z,Dr=new z,Ur=new at,Fr=new at,Nr=new at,Oc=new z,Hc=new z,zc=new z,Br=new z,Or=new z,I=class extends nn{constructor(e=new an,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ma.fromBufferAttribute(d,e),o?Dr.addScaledVector(Ma,h):Dr.addScaledVector(Ma.sub(t),h))}t.add(Dr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Lr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Lr,Bc)===null||Gi.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Nc),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,U=x;A<U;A+=3){let P=a.getX(A),L=a.getX(A+1),$=a.getX(A+2);s=Hr(this,f,e,i,c,h,d,P,L,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=a.getX(m),x=a.getX(m+1),A=a.getX(m+2);s=Hr(this,o,e,i,c,h,d,E,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,U=x;A<U;A+=3){let P=A,L=A+1,$=A+2;s=Hr(this,f,e,i,c,h,d,P,L,$),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let E=m,x=m+1,A=m+2;s=Hr(this,o,e,i,c,h,d,E,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ed(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===vn,a),l===null)return null;Or.copy(a),Or.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:n}}function Hr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ms),n.getVertexPosition(l,gs),n.getVertexPosition(c,_s);let h=Ed(n,e,t,i,ms,gs,_s,Br);if(h){s&&(Ur.fromBufferAttribute(s,a),Fr.fromBufferAttribute(s,l),Nr.fromBufferAttribute(s,c),h.uv=Ms.getInterpolation(Br,ms,gs,_s,Ur,Fr,Nr,new at)),r&&(Ur.fromBufferAttribute(r,a),Fr.fromBufferAttribute(r,l),Nr.fromBufferAttribute(r,c),h.uv1=Ms.getInterpolation(Br,ms,gs,_s,Ur,Fr,Nr,new at),h.uv2=h.uv1),o&&(Oc.fromBufferAttribute(o,a),Hc.fromBufferAttribute(o,l),zc.fromBufferAttribute(o,c),h.normal=Ms.getInterpolation(Br,ms,gs,_s,Oc,Hc,zc,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Ms.getNormal(ms,gs,_s,d.normal),h.face=d}return h}var Y=class n extends an{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(d,2));function g(_,m,f,E,x,A,U,P,L,$,M){let w=A/L,X=U/$,q=A/2,_e=U/2,O=P/2,G=L+1,Q=$+1,oe=0,re=0,ne=new z;for(let ue=0;ue<Q;ue++){let ce=ue*X-_e;for(let Ue=0;Ue<G;Ue++){let j=Ue*w-q;ne[_]=j*E,ne[m]=ce*x,ne[f]=O,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=P>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Ue/L),d.push(1-ue/$),oe+=1}}for(let ue=0;ue<$;ue++)for(let ce=0;ce<L;ce++){let Ue=u+ce+G*ue,j=u+ce+G*(ue+1),ae=u+(ce+1)+G*(ue+1),we=u+(ce+1)+G*ue;l.push(Ue,j,we),l.push(j,ae,we),re+=6}a.addGroup(p,re,M),p+=re,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Is(n[t]);for(let s in i)e[s]=i[s]}return e}function Sd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){return n.getRenderTarget()===null?n.outputColorSpace:St.workingColorSpace}var lr={clone:Is,merge:fn},bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ao=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends ao{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ys=-90,xs=1,Ha=class extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(ys,xs,e,t);s.layers=this.layers,this.add(s);let r=new rn(ys,xs,e,t);r.layers=this.layers,this.add(r);let o=new rn(ys,xs,e,t);o.layers=this.layers,this.add(o);let a=new rn(ys,xs,e,t);a.layers=this.layers,this.add(a);let l=new rn(ys,xs,e,t);l.layers=this.layers,this.add(l);let c=new rn(ys,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},lo=class extends Fn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},za=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?Jt:Un),this.texture=new lo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Y(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ti});r.uniforms.tEquirect.value=t;let o=new I(s,r),a=t.minFilter;return t.minFilter===Ks&&(t.minFilter=Dn),new Ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ea=new z,Td=new z,Ad=new _t,pi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ea.subVectors(i,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ad.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Ps,zr=new z,er=class{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],x=s[14],A=s[15];if(i[0].setComponents(l-r,u-c,m-p,A-f).normalize(),i[1].setComponents(l+r,u+c,m+p,A+f).normalize(),i[2].setComponents(l+o,u+h,m+g,A+E).normalize(),i[3].setComponents(l-o,u-h,m-g,A-E).normalize(),i[4].setComponents(l-a,u-d,m-_,A-x).normalize(),t===mi)i[5].setComponents(l+a,u+d,m+_,A+x).normalize();else if(t===Qr)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ch(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rd(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&g.length===0&&n.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){let f=g[_];t?n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Ct=class n extends an{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let E=f*u-o;for(let x=0;x<c;x++){let A=x*d-r;g.push(A,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let x=E+c*f,A=E+c*(f+1),U=E+1+c*(f+1),P=E+1+c*f;p.push(x,A,P),p.push(A,U,P)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,p0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P0=`uniform sampler2D t2D;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,B0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,X0=`#define LAMBERT
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
}`,Y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,q0=`#define MATCAP
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
}`,Z0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,J0=`#define NORMAL
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
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K0=`#define PHONG
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
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,j0=`#define STANDARD
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
}`,ep=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,lp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pt={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Id,alphamap_pars_fragment:Ld,alphatest_fragment:Dd,alphatest_pars_fragment:Ud,aomap_fragment:Fd,aomap_pars_fragment:Nd,batching_pars_vertex:Bd,batching_vertex:Od,begin_vertex:Hd,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Gd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:qd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:$d,color_vertex:Kd,common:Qd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:of,colorspace_pars_fragment:af,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_fragment:yf,lightmap_pars_fragment:xf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Ef,lights_toon_fragment:bf,lights_toon_pars_fragment:wf,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:Pf,lights_fragment_maps:If,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Nf,map_fragment:Bf,map_pars_fragment:Of,map_particle_fragment:Hf,map_particle_pars_fragment:zf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Gf,morphcolor_vertex:Vf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:Yf,normal_fragment_begin:qf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:$f,normal_vertex:Kf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:t0,iridescence_pars_fragment:n0,opaque_fragment:i0,packing:s0,premultiplied_alpha_fragment:r0,project_vertex:o0,dithering_fragment:a0,dithering_pars_fragment:l0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:h0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:f0,shadowmask_pars_fragment:p0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:_0,skinnormal_vertex:y0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:M0,tonemapping_pars_fragment:E0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:w0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:P0,backgroundCube_vert:I0,backgroundCube_frag:L0,cube_vert:D0,cube_frag:U0,depth_vert:F0,depth_frag:N0,distanceRGBA_vert:B0,distanceRGBA_frag:O0,equirect_vert:H0,equirect_frag:z0,linedashed_vert:k0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:W0,meshlambert_vert:X0,meshlambert_frag:Y0,meshmatcap_vert:q0,meshmatcap_frag:Z0,meshnormal_vert:J0,meshnormal_frag:$0,meshphong_vert:K0,meshphong_frag:Q0,meshphysical_vert:j0,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:lp},Ie={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ei={basic:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new et(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:fn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:fn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:fn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:fn([Ie.lights,Ie.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ei.physical={uniforms:fn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var kr={r:0,b:0,g:0};function cp(n,e,t,i,s,r,o){let a=new et(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let E=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vo)?(h===void 0&&(h=new I(new Y(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Is(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=St.getTransfer(x.colorSpace)!==Tt,(d!==x||u!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new I(new Ct(2,2),new gn({name:"BackgroundMaterial",uniforms:Is(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=St.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(kr,Rh(n)),i.buffers.color.setClear(kr.r,kr.g,kr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function hp(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(O,G,Q,oe,re){let ne=!1;if(o){let ue=_(oe,Q,G);c!==ue&&(c=ue,p(c.object)),ne=f(O,oe,Q,re),ne&&E(O,oe,Q,re)}else{let ue=G.wireframe===!0;(c.geometry!==oe.id||c.program!==Q.id||c.wireframe!==ue)&&(c.geometry=oe.id,c.program=Q.id,c.wireframe=ue,ne=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,$(O,G,Q,oe),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,G,Q){let oe=Q.wireframe===!0,re=a[O.id];re===void 0&&(re={},a[O.id]=re);let ne=re[G.id];ne===void 0&&(ne={},re[G.id]=ne);let ue=ne[oe];return ue===void 0&&(ue=m(u()),ne[oe]=ue),ue}function m(O){let G=[],Q=[],oe=[];for(let re=0;re<s;re++)G[re]=0,Q[re]=0,oe[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:oe,object:O,attributes:{},index:null}}function f(O,G,Q,oe){let re=c.attributes,ne=G.attributes,ue=0,ce=Q.getAttributes();for(let Ue in ce)if(ce[Ue].location>=0){let ae=re[Ue],we=ne[Ue];if(we===void 0&&(Ue==="instanceMatrix"&&O.instanceMatrix&&(we=O.instanceMatrix),Ue==="instanceColor"&&O.instanceColor&&(we=O.instanceColor)),ae===void 0||ae.attribute!==we||we&&ae.data!==we.data)return!0;ue++}return c.attributesNum!==ue||c.index!==oe}function E(O,G,Q,oe){let re={},ne=G.attributes,ue=0,ce=Q.getAttributes();for(let Ue in ce)if(ce[Ue].location>=0){let ae=ne[Ue];ae===void 0&&(Ue==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),Ue==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor));let we={};we.attribute=ae,ae&&ae.data&&(we.data=ae.data),re[Ue]=we,ue++}c.attributes=re,c.attributesNum=ue,c.index=oe}function x(){let O=c.newAttributes;for(let G=0,Q=O.length;G<Q;G++)O[G]=0}function A(O){U(O,0)}function U(O,G){let Q=c.newAttributes,oe=c.enabledAttributes,re=c.attributeDivisors;Q[O]=1,oe[O]===0&&(n.enableVertexAttribArray(O),oe[O]=1),re[O]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),re[O]=G)}function P(){let O=c.newAttributes,G=c.enabledAttributes;for(let Q=0,oe=G.length;Q<oe;Q++)G[Q]!==O[Q]&&(n.disableVertexAttribArray(Q),G[Q]=0)}function L(O,G,Q,oe,re,ne,ue){ue===!0?n.vertexAttribIPointer(O,G,Q,re,ne):n.vertexAttribPointer(O,G,Q,oe,re,ne)}function $(O,G,Q,oe){if(i.isWebGL2===!1&&(O.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let re=oe.attributes,ne=Q.getAttributes(),ue=G.defaultAttributeValues;for(let ce in ne){let Ue=ne[ce];if(Ue.location>=0){let j=re[ce];if(j===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){let ae=j.normalized,we=j.itemSize,Re=t.get(j);if(Re===void 0)continue;let be=Re.buffer,Be=Re.type,Ye=Re.bytesPerElement,ve=i.isWebGL2===!0&&(Be===n.INT||Be===n.UNSIGNED_INT||j.gpuType===_h);if(j.isInterleavedBufferAttribute){let ke=j.data,k=ke.stride,Ke=j.offset;if(ke.isInstancedInterleavedBuffer){for(let je=0;je<Ue.locationSize;je++)U(Ue.location+je,ke.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let je=0;je<Ue.locationSize;je++)A(Ue.location+je);n.bindBuffer(n.ARRAY_BUFFER,be);for(let je=0;je<Ue.locationSize;je++)L(Ue.location+je,we/Ue.locationSize,Be,ae,k*Ye,(Ke+we/Ue.locationSize*je)*Ye,ve)}else{if(j.isInstancedBufferAttribute){for(let ke=0;ke<Ue.locationSize;ke++)U(Ue.location+ke,j.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ke=0;ke<Ue.locationSize;ke++)A(Ue.location+ke);n.bindBuffer(n.ARRAY_BUFFER,be);for(let ke=0;ke<Ue.locationSize;ke++)L(Ue.location+ke,we/Ue.locationSize,Be,ae,we*Ye,we/Ue.locationSize*ke*Ye,ve)}}else if(ue!==void 0){let ae=ue[ce];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(Ue.location,ae);break;case 3:n.vertexAttrib3fv(Ue.location,ae);break;case 4:n.vertexAttrib4fv(Ue.location,ae);break;default:n.vertexAttrib1fv(Ue.location,ae)}}}}P()}function M(){q();for(let O in a){let G=a[O];for(let Q in G){let oe=G[Q];for(let re in oe)g(oe[re].object),delete oe[re];delete G[Q]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;let G=a[O.id];for(let Q in G){let oe=G[Q];for(let re in oe)g(oe[re].object),delete oe[re];delete G[Q]}delete a[O.id]}function X(O){for(let G in a){let Q=a[G];if(Q[O.id]===void 0)continue;let oe=Q[O.id];for(let re in oe)g(oe[re].object),delete oe[re];delete Q[O.id]}}function q(){_e(),h=!0,c!==l&&(c=l,p(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:_e,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:A,disableUnusedAttributes:P}}function up(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,u),t.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function dp(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,A=o||e.has("OES_texture_float"),U=x&&A,P=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:U,maxSamples:P}}function fp(n){let e=this,t=null,i=0,s=!1,r=!1,o=new pi,a=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,x=E*4,A=f.clippingState||null;l.value=A,A=h(g,u,x,p);for(let U=0;U!==x;++U)A[U]=t[U];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,A=p;x!==_;++x,A+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pp(n){let e=new WeakMap;function t(o,a){return a===La?o.mapping=As:a===Da&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===La||a===Da)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new za(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ls=class extends ao{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Es=4,kc=[.125,.215,.35,.446,.526,.582],Yi=20,Sa=new Ls,Gc=new et,ba=null,wa=0,Ta=0,Wi=(1+Math.sqrt(5))/2,vs=1/Wi,Vc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Wi,vs),new z(0,Wi,-vs),new z(vs,0,Wi),new z(-vs,0,Wi),new z(Wi,vs,0),new z(-Wi,vs,0)],co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ba=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,wa,Ta),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ni,format:$n,colorSpace:gi,depthBuffer:!1},s=Wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mp(r)),this._blurMaterial=gp(r,e,t)}return s}_compileMaterial(e){let t=new I(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s){let a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gc),h.toneMapping=Ai,h.autoClear=!1;let p=new on({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new I(new Y,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Gc),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;Gr(s,E*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vc[(s-1)%Vc.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new I(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let f=[],E=0;for(let L=0;L<Yi;++L){let $=L/_,M=Math.exp(-$*$/2);f.push(M),L===0?E+=M:L<m&&(E+=2*M)}for(let L=0;L<f.length;L++)f[L]=f[L]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;let A=this._sizeLods[s],U=3*A*(s>x-Es?s-x+Es:0),P=4*(this._cubeSize-A);Gr(t,U,P,3*A,2*A),l.setRenderTarget(t),l.render(d,Sa)}};function mp(n){let e=[],t=[],i=[],s=n,r=n-Es+1+kc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Es?l=kc[o-n+Es-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),x=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let P=0;P<p;P++){let L=P%3*2/3-1,$=P>2?0:-1,M=[L,$,0,L+2/3,$,0,L+2/3,$+1,0,L,$,0,L+2/3,$+1,0,L,$+1,0];E.set(M,_*g*P),x.set(u,m*g*P);let w=[P,P,P,P,P,P];A.set(w,f*g*P)}let U=new an;U.setAttribute("position",new mn(E,_)),U.setAttribute("uv",new mn(x,m)),U.setAttribute("faceIndex",new mn(A,f)),e.push(U),s>Es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wc(n,e,t){let i=new Mn(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gp(n,e,t){let i=new Float32Array(Yi),s=new z(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xc(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Yc(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _p(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===La||l===Da,h=l===As||l===Rs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new co(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new co(n));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xp(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let x=0,A=E.length;x<A;x+=3){let U=E[x+0],P=E[x+1],L=E[x+2];u.push(U,P,P,L,L,U)}}else if(g!==void 0){let E=g.array;_=g.version;for(let x=0,A=E.length/3-1;x<A;x+=3){let U=x+0,P=x+1,L=x+2;u.push(U,P,P,L,L,U)}}else return;let m=new(Th(u)?oo:ro)(u,1);m.version=_;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function vp(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function d(p,g,_){if(_===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,_),t.update(g,r,_)}function u(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Mp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ep(n,e){return n[0]-e[0]}function Sp(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bp(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let O=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[],$=0;E===!0&&($=1),x===!0&&($=2),A===!0&&($=3);let M=h.attributes.position.count*$,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let X=new Float32Array(M*w*4*g),q=new io(X,M,w,g);q.type=Ti,q.needsUpdate=!0;let _e=$*4;for(let G=0;G<g;G++){let Q=U[G],oe=P[G],re=L[G],ne=M*w*4*G;for(let ue=0;ue<Q.count;ue++){let ce=ue*_e;E===!0&&(o.fromBufferAttribute(Q,ue),X[ne+ce+0]=o.x,X[ne+ce+1]=o.y,X[ne+ce+2]=o.z,X[ne+ce+3]=0),x===!0&&(o.fromBufferAttribute(oe,ue),X[ne+ce+4]=o.x,X[ne+ce+5]=o.y,X[ne+ce+6]=o.z,X[ne+ce+7]=0),A===!0&&(o.fromBufferAttribute(re,ue),X[ne+ce+8]=o.x,X[ne+ce+9]=o.y,X[ne+ce+10]=o.z,X[ne+ce+11]=re.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new at(M,w)},r.set(h,_),h.addEventListener("dispose",O)}let m=0;for(let E=0;E<u.length;E++)m+=u[E];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=u===void 0?0:u.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<p;x++){let A=g[x];A[0]=x,A[1]=u[x]}g.sort(Sp);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Ep);let _=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let A=a[x],U=A[0],P=A[1];U!==Number.MAX_SAFE_INTEGER&&P?(_&&h.getAttribute("morphTarget"+x)!==_[U]&&h.setAttribute("morphTarget"+x,_[U]),m&&h.getAttribute("morphNormal"+x)!==m[U]&&h.setAttribute("morphNormal"+x,m[U]),s[x]=P,f+=P):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let E=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function wp(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ds=class extends Fn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Zi,h!==Zi&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zi&&(i=wi),i===void 0&&h===Cs&&(i=qi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ph=new Fn,Ih=new Ds(1,1);Ih.compareFunction=wh;var Lh=new io,Dh=new Oa,Uh=new lo,qc=[],Zc=[],Jc=new Float32Array(16),$c=new Float32Array(9),Kc=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function So(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ap(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Rp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Cp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Pp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;Kc.set(i),n.uniformMatrix2fv(this.addr,!1,Kc),Kt(t,i)}}function Ip(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;$c.set(i),n.uniformMatrix3fv(this.addr,!1,$c),Kt(t,i)}}function Lp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),Kt(t,i)}}function Dp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Up(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Fp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Np(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Bp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Op(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Hp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function zp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function kp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ih:Ph;t.setTexture2D(e||r,s)}function Gp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Dh,s)}function Vp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uh,s)}function Wp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lh,s)}function Xp(n){switch(n){case 5126:return Tp;case 35664:return Ap;case 35665:return Rp;case 35666:return Cp;case 35674:return Pp;case 35675:return Ip;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Fp;case 35669:case 35673:return Np;case 5125:return Bp;case 36294:return Op;case 36295:return Hp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Wp}}function Yp(n,e){n.uniform1fv(this.addr,e)}function qp(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function Zp(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function Jp(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function $p(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kp(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qp(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jp(n,e){n.uniform1iv(this.addr,e)}function em(n,e){n.uniform2iv(this.addr,e)}function tm(n,e){n.uniform3iv(this.addr,e)}function nm(n,e){n.uniform4iv(this.addr,e)}function im(n,e){n.uniform1uiv(this.addr,e)}function sm(n,e){n.uniform2uiv(this.addr,e)}function rm(n,e){n.uniform3uiv(this.addr,e)}function om(n,e){n.uniform4uiv(this.addr,e)}function am(n,e,t){let i=this.cache,s=e.length,r=So(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ph,r[o])}function lm(n,e,t){let i=this.cache,s=e.length,r=So(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dh,r[o])}function cm(n,e,t){let i=this.cache,s=e.length,r=So(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uh,r[o])}function hm(n,e,t){let i=this.cache,s=e.length,r=So(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lh,r[o])}function um(n){switch(n){case 5126:return Yp;case 35664:return qp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return Qp;case 5124:case 35670:return jp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}var ka=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xp(t.type)}},Ga=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=um(t.type)}},Va=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function Qc(n,e){n.seq.push(e),n.map[e.id]=e}function dm(n,e,t){let i=n.name,s=i.length;for(Aa.lastIndex=0;;){let r=Aa.exec(i),o=Aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qc(t,c===void 0?new ka(a,n,e):new Ga(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Va(a),Qc(t,d)),t=d}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dm(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function jc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var fm=37297,pm=0;function mm(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gm(n){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(n),i;switch(e===t?i="":e===Kr&&t===$r?i="LinearDisplayP3ToLinearSRGB":e===$r&&t===Kr&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case Eo:return[i,"LinearTransferOETF"];case Jt:case Ml:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function eh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mm(n.getShaderSource(e),o)}else return s}function _m(n,e){let t=gm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ym(n,e){let t;switch(e){case gl:t="Linear";break;case _l:t="Reinhard";break;case yl:t="OptimizedCineon";break;case or:t="ACESFilmic";break;case xl:t="AgX";break;case ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function Mm(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Em(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ss(n){return n!==""}function th(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(Sm,wm)}var bm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wm(n,e){let t=pt[e];if(t===void 0){let i=bm.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}var Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(n){return n.replace(Tm,Am)}function Am(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Cm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Im(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ml:e="ENVMAP_BLENDING_MULTIPLY";break;case Hu:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dm(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Rm(t),c=Cm(t),h=Pm(t),d=Im(t),u=Lm(t),p=t.isWebGL2?"":xm(t),g=vm(t),_=Mm(r),m=s.createProgram(),f,E,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),E.length>0&&(E+=`
`)):(f=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),E=[p,sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Wa(o),o=th(o,t),o=nh(o,t),a=Wa(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let A=x+f+o,U=x+E+a,P=jc(s,s.VERTEX_SHADER,A),L=jc(s,s.FRAGMENT_SHADER,U);s.attachShader(m,P),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function $(q){if(n.debug.checkShaderErrors){let _e=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(L).trim(),Q=!0,oe=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,P,L);else{let re=eh(s,P,"vertex"),ne=eh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+re+`
`+ne)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(O===""||G==="")&&(oe=!1);oe&&(q.diagnostics={runnable:Q,programLog:_e,vertexShader:{log:O,prefix:f},fragmentShader:{log:G,prefix:E}})}s.deleteShader(P),s.deleteShader(L),M=new Ts(s,m),w=Em(s,m)}let M;this.getUniforms=function(){return M===void 0&&$(this),M};let w;this.getAttributes=function(){return w===void 0&&$(this),w};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(m,fm)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=L,this}var Um=0,Xa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ya(e),t.set(e,i)),i}},Ya=class{constructor(e){this.id=Um++,this.code=e,this.usedTimes=0}};function Fm(n,e,t,i,s,r,o){let a=new js,l=new Xa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,X,q,_e){let O=q.fog,G=_e.geometry,Q=M.isMeshStandardMaterial?q.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),re=oe&&oe.mapping===vo?oe.image.height:null,ne=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=ue!==void 0?ue.length:0,Ue=0;G.morphAttributes.position!==void 0&&(Ue=1),G.morphAttributes.normal!==void 0&&(Ue=2),G.morphAttributes.color!==void 0&&(Ue=3);let j,ae,we,Re;if(ne){let Ne=ei[ne];j=Ne.vertexShader,ae=Ne.fragmentShader}else j=M.vertexShader,ae=M.fragmentShader,l.update(M),we=l.getVertexShaderID(M),Re=l.getFragmentShaderID(M);let be=n.getRenderTarget(),Be=_e.isInstancedMesh===!0,Ye=_e.isBatchedMesh===!0,ve=!!M.map,ke=!!M.matcap,k=!!oe,Ke=!!M.aoMap,je=!!M.lightMap,Qe=!!M.bumpMap,ze=!!M.normalMap,xt=!!M.displacementMap,it=!!M.emissiveMap,b=!!M.metalnessMap,v=!!M.roughnessMap,W=M.anisotropy>0,fe=M.clearcoat>0,de=M.iridescence>0,ie=M.sheen>0,Le=M.transmission>0,se=W&&!!M.anisotropyMap,Me=fe&&!!M.clearcoatMap,Je=fe&&!!M.clearcoatNormalMap,Ve=fe&&!!M.clearcoatRoughnessMap,F=de&&!!M.iridescenceMap,Ee=de&&!!M.iridescenceThicknessMap,ge=ie&&!!M.sheenColorMap,Te=ie&&!!M.sheenRoughnessMap,Se=!!M.specularMap,Ce=!!M.specularColorMap,Fe=!!M.specularIntensityMap,ye=Le&&!!M.transmissionMap,De=Le&&!!M.thicknessMap,pe=!!M.gradientMap,te=!!M.alphaMap,R=M.alphaTest>0,y=!!M.alphaHash,T=!!M.extensions,B=!!G.attributes.uv1,D=!!G.attributes.uv2,H=!!G.attributes.uv3,Z=Ai;return M.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Z=n.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ae,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ye,instancing:Be,instancingColor:Be&&_e.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:gi,map:ve,matcap:ke,envMap:k,envMapMode:k&&oe.mapping,envMapCubeUVHeight:re,aoMap:Ke,lightMap:je,bumpMap:Qe,normalMap:ze,displacementMap:u&&xt,emissiveMap:it,normalMapObjectSpace:ze&&M.normalMapType===ju,normalMapTangentSpace:ze&&M.normalMapType===Mo,metalnessMap:b,roughnessMap:v,anisotropy:W,anisotropyMap:se,clearcoat:fe,clearcoatMap:Me,clearcoatNormalMap:Je,clearcoatRoughnessMap:Ve,iridescence:de,iridescenceMap:F,iridescenceThicknessMap:Ee,sheen:ie,sheenColorMap:ge,sheenRoughnessMap:Te,specularMap:Se,specularColorMap:Ce,specularIntensityMap:Fe,transmission:Le,transmissionMap:ye,thicknessMap:De,gradientMap:pe,opaque:M.transparent===!1&&M.blending===bs,alphaMap:te,alphaTest:R,alphaHash:y,combine:M.combine,mapUv:ve&&_(M.map.channel),aoMapUv:Ke&&_(M.aoMap.channel),lightMapUv:je&&_(M.lightMap.channel),bumpMapUv:Qe&&_(M.bumpMap.channel),normalMapUv:ze&&_(M.normalMap.channel),displacementMapUv:xt&&_(M.displacementMap.channel),emissiveMapUv:it&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:se&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(M.sheenRoughnessMap.channel),specularMapUv:Se&&_(M.specularMap.channel),specularColorMapUv:Ce&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:ye&&_(M.transmissionMap.channel),thicknessMapUv:De&&_(M.thicknessMap.channel),alphaMapUv:te&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ze||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:B,vertexUv2s:D,vertexUv3s:H,pointsUvs:_e.isPoints===!0&&!!G.attributes.uv&&(ve||te),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_e.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Z,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ve&&M.map.isVideoTexture===!0&&St.getTransfer(M.map.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wt,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:T&&M.extensions.derivatives===!0,extensionFragDepth:T&&M.extensions.fragDepth===!0,extensionDrawBuffers:T&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:T&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:T&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let X in M.defines)w.push(X),w.push(M.defines[X]);return M.isRawShaderMaterial===!1&&(E(w,M),x(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function E(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function A(M){let w=g[M.type],X;if(w){let q=ei[w];X=lr.clone(q.uniforms)}else X=M.uniforms;return X}function U(M,w){let X;for(let q=0,_e=c.length;q<_e;q++){let O=c[q];if(O.cacheKey===w){X=O,++X.usedTimes;break}}return X===void 0&&(X=new Dm(n,w,M,r),c.push(X)),X}function P(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:U,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:$}}function Nm(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function oh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,_,m){let f=o(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||Bm),i.length>1&&i.sort(u||rh),s.length>1&&s.sort(u||rh)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Om(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new oh,n.set(i,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function zm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var km=0;function Gm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vm(n,e){let t=new Hm,i=zm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);let r=new z,o=new Yt,a=new Yt;function l(h,d){let u=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,m=0,f=0,E=0,x=0,A=0,U=0,P=0,L=0,$=0,M=0;h.sort(Gm);let w=d===!0?Math.PI:1;for(let q=0,_e=h.length;q<_e;q++){let O=h[q],G=O.color,Q=O.intensity,oe=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=G.r*Q*w,p+=G.g*Q*w,g+=G.b*Q*w;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(O.sh.coefficients[ne],Q);M++}else if(O.isDirectionalLight){let ne=t.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){let ue=O.shadow,ce=i.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,s.directionalShadow[_]=ce,s.directionalShadowMap[_]=re,s.directionalShadowMatrix[_]=O.shadow.matrix,A++}s.directional[_]=ne,_++}else if(O.isSpotLight){let ne=t.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(G).multiplyScalar(Q*w),ne.distance=oe,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,s.spot[f]=ne;let ue=O.shadow;if(O.map&&(s.spotLightMap[L]=O.map,L++,ue.updateMatrices(O),O.castShadow&&$++),s.spotLightMatrix[f]=ue.matrix,O.castShadow){let ce=i.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,s.spotShadow[f]=ce,s.spotShadowMap[f]=re,P++}f++}else if(O.isRectAreaLight){let ne=t.get(O);ne.color.copy(G).multiplyScalar(Q),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),s.rectArea[E]=ne,E++}else if(O.isPointLight){let ne=t.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity*w),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){let ue=O.shadow,ce=i.get(O);ce.shadowBias=ue.bias,ce.shadowNormalBias=ue.normalBias,ce.shadowRadius=ue.radius,ce.shadowMapSize=ue.mapSize,ce.shadowCameraNear=ue.camera.near,ce.shadowCameraFar=ue.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=re,s.pointShadowMatrix[m]=O.shadow.matrix,U++}s.point[m]=ne,m++}else if(O.isHemisphereLight){let ne=t.get(O);ne.skyColor.copy(O.color).multiplyScalar(Q*w),ne.groundColor.copy(O.groundColor).multiplyScalar(Q*w),s.hemi[x]=ne,x++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=g;let X=s.hash;(X.directionalLength!==_||X.pointLength!==m||X.spotLength!==f||X.rectAreaLength!==E||X.hemiLength!==x||X.numDirectionalShadows!==A||X.numPointShadows!==U||X.numSpotShadows!==P||X.numSpotMaps!==L||X.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=P+L-$,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=$,s.numLightProbes=M,X.directionalLength=_,X.pointLength=m,X.spotLength=f,X.rectAreaLength=E,X.hemiLength=x,X.numDirectionalShadows=A,X.numPointShadows=U,X.numSpotShadows=P,X.numSpotMaps=L,X.numLightProbes=M,s.version=km++)}function c(h,d){let u=0,p=0,g=0,_=0,m=0,f=d.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){let A=h[E];if(A.isDirectionalLight){let U=s.directional[u];U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),u++}else if(A.isSpotLight){let U=s.spot[g];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let U=s.rectArea[_];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(f),a.identity(),o.copy(A.matrixWorld),o.premultiply(f),a.extractRotation(o),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){let U=s.point[p];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){let U=s.hemi[m];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function ah(n,e){let t=new Vm(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wm(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ah(n,e),t.set(r,[l])):o>=a.length?(l=new ah(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var qa=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qm(n,e,t){let i=new er,s=new at,r=new at,o=new Rt,a=new qa({depthPacking:Qu}),l=new Za,c={},h=t.maxTextureSize,d={[vn]:tn,[tn]:vn,[wt]:wt},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new an;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new I(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let f=this.type;this.render=function(P,L,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let M=n.getRenderTarget(),w=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),q=n.state;q.setBlending(ti),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let _e=f!==fi&&this.type===fi,O=f===fi&&this.type!==fi;for(let G=0,Q=P.length;G<Q;G++){let oe=P[G],re=oe.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let ne=re.getFrameExtents();if(s.multiply(ne),r.copy(re.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,re.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,re.mapSize.y=r.y)),re.map===null||_e===!0||O===!0){let ce=this.type!==fi?{minFilter:Xt,magFilter:Xt}:{};re.map!==null&&re.map.dispose(),re.map=new Mn(s.x,s.y,ce),re.map.texture.name=oe.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();let ue=re.getViewportCount();for(let ce=0;ce<ue;ce++){let Ue=re.getViewport(ce);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),q.viewport(o),re.updateMatrices(oe,ce),i=re.getFrustum(),A(L,$,re.camera,oe,this.type)}re.isPointLightShadow!==!0&&this.type===fi&&E(re,$),re.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,w,X)};function E(P,L){let $=e.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Mn(s.x,s.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,$,u,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,$,p,_,null)}function x(P,L,$,M){let w=null,X=$.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)w=X;else if(w=$.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let q=w.uuid,_e=L.uuid,O=c[q];O===void 0&&(O={},c[q]=O);let G=O[_e];G===void 0&&(G=w.clone(),O[_e]=G,L.addEventListener("dispose",U)),w=G}if(w.visible=L.visible,w.wireframe=L.wireframe,M===fi?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:d[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let q=n.properties.get(w);q.light=$}return w}function A(P,L,$,M,w){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===fi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld);let _e=e.update(P),O=P.material;if(Array.isArray(O)){let G=_e.groups;for(let Q=0,oe=G.length;Q<oe;Q++){let re=G[Q],ne=O[re.materialIndex];if(ne&&ne.visible){let ue=x(P,ne,M,w);P.onBeforeShadow(n,P,L,$,_e,ue,re),n.renderBufferDirect($,null,_e,ue,P,re),P.onAfterShadow(n,P,L,$,_e,ue,re)}}}else if(O.visible){let G=x(P,O,M,w);P.onBeforeShadow(n,P,L,$,_e,G,null),n.renderBufferDirect($,null,_e,G,P,null),P.onAfterShadow(n,P,L,$,_e,G,null)}}let q=P.children;for(let _e=0,O=q.length;_e<O;_e++)A(q[_e],L,$,M,w)}function U(P){P.target.removeEventListener("dispose",U);for(let $ in c){let M=c[$],w=P.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Zm(n,e,t){let i=t.isWebGL2;function s(){let R=!1,y=new Rt,T=null,B=new Rt(0,0,0,0);return{setMask:function(D){T!==D&&!R&&(n.colorMask(D,D,D,D),T=D)},setLocked:function(D){R=D},setClear:function(D,H,Z,Pe,Ne){Ne===!0&&(D*=Pe,H*=Pe,Z*=Pe),y.set(D,H,Z,Pe),B.equals(y)===!1&&(n.clearColor(D,H,Z,Pe),B.copy(y))},reset:function(){R=!1,T=null,B.set(-1,0,0,0)}}}function r(){let R=!1,y=null,T=null,B=null;return{setTest:function(D){D?Ye(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(D){y!==D&&!R&&(n.depthMask(D),y=D)},setFunc:function(D){if(T!==D){switch(D){case Lu:n.depthFunc(n.NEVER);break;case Du:n.depthFunc(n.ALWAYS);break;case Uu:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case Fu:n.depthFunc(n.EQUAL);break;case Nu:n.depthFunc(n.GEQUAL);break;case Bu:n.depthFunc(n.GREATER);break;case Ou:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}T=D}},setLocked:function(D){R=D},setClear:function(D){B!==D&&(n.clearDepth(D),B=D)},reset:function(){R=!1,y=null,T=null,B=null}}}function o(){let R=!1,y=null,T=null,B=null,D=null,H=null,Z=null,Pe=null,Ne=null;return{setTest:function(We){R||(We?Ye(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(We){y!==We&&!R&&(n.stencilMask(We),y=We)},setFunc:function(We,$e,ct){(T!==We||B!==$e||D!==ct)&&(n.stencilFunc(We,$e,ct),T=We,B=$e,D=ct)},setOp:function(We,$e,ct){(H!==We||Z!==$e||Pe!==ct)&&(n.stencilOp(We,$e,ct),H=We,Z=$e,Pe=ct)},setLocked:function(We){R=We},setClear:function(We){Ne!==We&&(n.clearStencil(We),Ne=We)},reset:function(){R=!1,y=null,T=null,B=null,D=null,H=null,Z=null,Pe=null,Ne=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,x=null,A=null,U=null,P=null,L=null,$=null,M=new et(0,0,0),w=0,X=!1,q=null,_e=null,O=null,G=null,Q=null,oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ne=0,ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ue)[1]),re=ne>=1):ue.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),re=ne>=2);let ce=null,Ue={},j=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),we=new Rt().fromArray(j),Re=new Rt().fromArray(ae);function be(R,y,T,B){let D=new Uint8Array(4),H=n.createTexture();n.bindTexture(R,H),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Z=0;Z<T;Z++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(y,0,n.RGBA,1,1,B,0,n.RGBA,n.UNSIGNED_BYTE,D):n.texImage2D(y+Z,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,D);return H}let Be={};Be[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(Yr),it(!1),b(zl),Ye(n.CULL_FACE),ze(ti);function Ye(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function ve(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function ke(R,y){return p[R]!==y?(n.bindFramebuffer(R,y),p[R]=y,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=y),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=y)),!0):!1}function k(R,y){let T=_,B=!1;if(R)if(T=g.get(y),T===void 0&&(T=[],g.set(y,T)),R.isWebGLMultipleRenderTargets){let D=R.texture;if(T.length!==D.length||T[0]!==n.COLOR_ATTACHMENT0){for(let H=0,Z=D.length;H<Z;H++)T[H]=n.COLOR_ATTACHMENT0+H;T.length=D.length,B=!0}}else T[0]!==n.COLOR_ATTACHMENT0&&(T[0]=n.COLOR_ATTACHMENT0,B=!0);else T[0]!==n.BACK&&(T[0]=n.BACK,B=!0);B&&(t.isWebGL2?n.drawBuffers(T):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(T))}function Ke(R){return m!==R?(n.useProgram(R),m=R,!0):!1}let je={[Xi]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[yu]:n.FUNC_REVERSE_SUBTRACT};if(i)je[Wl]=n.MIN,je[Xl]=n.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(je[Wl]=R.MIN_EXT,je[Xl]=R.MAX_EXT)}let Qe={[xu]:n.ZERO,[vu]:n.ONE,[Mu]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[Au]:n.SRC_ALPHA_SATURATE,[wu]:n.DST_COLOR,[Su]:n.DST_ALPHA,[Eu]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[bu]:n.ONE_MINUS_DST_ALPHA,[Ru]:n.CONSTANT_COLOR,[Cu]:n.ONE_MINUS_CONSTANT_COLOR,[Pu]:n.CONSTANT_ALPHA,[Iu]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(R,y,T,B,D,H,Z,Pe,Ne,We){if(R===ti){f===!0&&(ve(n.BLEND),f=!1);return}if(f===!1&&(Ye(n.BLEND),f=!0),R!==gu){if(R!==E||We!==X){if((x!==Xi||P!==Xi)&&(n.blendEquation(n.FUNC_ADD),x=Xi,P=Xi),We)switch(R){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.ONE,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}A=null,U=null,L=null,$=null,M.set(0,0,0),w=0,E=R,X=We}return}D=D||y,H=H||T,Z=Z||B,(y!==x||D!==P)&&(n.blendEquationSeparate(je[y],je[D]),x=y,P=D),(T!==A||B!==U||H!==L||Z!==$)&&(n.blendFuncSeparate(Qe[T],Qe[B],Qe[H],Qe[Z]),A=T,U=B,L=H,$=Z),(Pe.equals(M)===!1||Ne!==w)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Ne),M.copy(Pe),w=Ne),E=R,X=!1}function xt(R,y){R.side===wt?ve(n.CULL_FACE):Ye(n.CULL_FACE);let T=R.side===tn;y&&(T=!T),it(T),R.blending===bs&&R.transparent===!1?ze(ti):ze(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let B=R.stencilWrite;c.setTest(B),B&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),W(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(R){q!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),q=R)}function b(R){R!==pu?(Ye(n.CULL_FACE),R!==_e&&(R===zl?n.cullFace(n.BACK):R===mu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),_e=R}function v(R){R!==O&&(re&&n.lineWidth(R),O=R)}function W(R,y,T){R?(Ye(n.POLYGON_OFFSET_FILL),(G!==y||Q!==T)&&(n.polygonOffset(y,T),G=y,Q=T)):ve(n.POLYGON_OFFSET_FILL)}function fe(R){R?Ye(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function de(R){R===void 0&&(R=n.TEXTURE0+oe-1),ce!==R&&(n.activeTexture(R),ce=R)}function ie(R,y,T){T===void 0&&(ce===null?T=n.TEXTURE0+oe-1:T=ce);let B=Ue[T];B===void 0&&(B={type:void 0,texture:void 0},Ue[T]=B),(B.type!==R||B.texture!==y)&&(ce!==T&&(n.activeTexture(T),ce=T),n.bindTexture(R,y||Be[R]),B.type=R,B.texture=y)}function Le(){let R=Ue[ce];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Je(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(R){we.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),we.copy(R))}function ye(R){Re.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Re.copy(R))}function De(R,y){let T=d.get(y);T===void 0&&(T=new WeakMap,d.set(y,T));let B=T.get(R);B===void 0&&(B=n.getUniformBlockIndex(y,R.name),T.set(R,B))}function pe(R,y){let B=d.get(y).get(R);h.get(y)!==B&&(n.uniformBlockBinding(y,B,R.__bindingPointIndex),h.set(y,B))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,Ue={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,x=null,A=null,U=null,P=null,L=null,$=null,M=new et(0,0,0),w=0,X=!1,q=null,_e=null,O=null,G=null,Q=null,we.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ye,disable:ve,bindFramebuffer:ke,drawBuffers:k,useProgram:Ke,setBlending:ze,setMaterial:xt,setFlipSided:it,setCullFace:b,setLineWidth:v,setPolygonOffset:W,setScissorTest:fe,activeTexture:de,bindTexture:ie,unbindTexture:Le,compressedTexImage2D:se,compressedTexImage3D:Me,texImage2D:Se,texImage3D:Ce,updateUBOMapping:De,uniformBlockBinding:pe,texStorage2D:ge,texStorage3D:Te,texSubImage2D:Je,texSubImage3D:Ve,compressedTexSubImage2D:F,compressedTexSubImage3D:Ee,scissor:Fe,viewport:ye,reset:te}}function Jm(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):eo("canvas")}function _(b,v,W,fe){let de=1;if((b.width>fe||b.height>fe)&&(de=fe/Math.max(b.width,b.height)),de<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ie=v?Na:Math.floor,Le=ie(de*b.width),se=ie(de*b.height);d===void 0&&(d=g(Le,se));let Me=W?g(Le,se):d;return Me.width=Le,Me.height=se,Me.getContext("2d").drawImage(b,0,0,Le,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Le+"x"+se+")."),Me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return bc(b.width)&&bc(b.height)}function f(b){return a?!1:b.wrapS!==Jn||b.wrapT!==Jn||b.minFilter!==Xt&&b.minFilter!==Dn}function E(b,v){return b.generateMipmaps&&v&&b.minFilter!==Xt&&b.minFilter!==Dn}function x(b){n.generateMipmap(b)}function A(b,v,W,fe,de=!1){if(a===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=v;if(v===n.RED&&(W===n.FLOAT&&(ie=n.R32F),W===n.HALF_FLOAT&&(ie=n.R16F),W===n.UNSIGNED_BYTE&&(ie=n.R8)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ie=n.R8UI),W===n.UNSIGNED_SHORT&&(ie=n.R16UI),W===n.UNSIGNED_INT&&(ie=n.R32UI),W===n.BYTE&&(ie=n.R8I),W===n.SHORT&&(ie=n.R16I),W===n.INT&&(ie=n.R32I)),v===n.RG&&(W===n.FLOAT&&(ie=n.RG32F),W===n.HALF_FLOAT&&(ie=n.RG16F),W===n.UNSIGNED_BYTE&&(ie=n.RG8)),v===n.RGBA){let Le=de?Jr:St.getTransfer(fe);W===n.FLOAT&&(ie=n.RGBA32F),W===n.HALF_FLOAT&&(ie=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ie=Le===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function U(b,v,W){return E(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==Dn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){return b===Xt||b===Yl||b===Ko?n.NEAREST:n.LINEAR}function L(b){let v=b.target;v.removeEventListener("dispose",L),M(v),v.isVideoTexture&&h.delete(v)}function $(b){let v=b.target;v.removeEventListener("dispose",$),X(v)}function M(b){let v=i.get(b);if(v.__webglInit===void 0)return;let W=b.source,fe=u.get(W);if(fe){let de=fe[v.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(b),Object.keys(fe).length===0&&u.delete(W)}i.remove(b)}function w(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let W=b.source,fe=u.get(W);delete fe[v.__cacheKey],o.memory.textures--}function X(b){let v=b.texture,W=i.get(b),fe=i.get(v);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(W.__webglFramebuffer[de]))for(let ie=0;ie<W.__webglFramebuffer[de].length;ie++)n.deleteFramebuffer(W.__webglFramebuffer[de][ie]);else n.deleteFramebuffer(W.__webglFramebuffer[de]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[de])}else{if(Array.isArray(W.__webglFramebuffer))for(let de=0;de<W.__webglFramebuffer.length;de++)n.deleteFramebuffer(W.__webglFramebuffer[de]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let de=0;de<W.__webglColorRenderbuffer.length;de++)W.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[de]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let de=0,ie=v.length;de<ie;de++){let Le=i.get(v[de]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),o.memory.textures--),i.remove(v[de])}i.remove(v),i.remove(b)}let q=0;function _e(){q=0}function O(){let b=q;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),q+=1,b}function G(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){let W=i.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){let fe=b.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(W,b,v);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function oe(b,v){let W=i.get(b);if(b.version>0&&W.__version!==b.version){we(W,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function re(b,v){let W=i.get(b);if(b.version>0&&W.__version!==b.version){we(W,b,v);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function ne(b,v){let W=i.get(b);if(b.version>0&&W.__version!==b.version){Re(W,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}let ue={[$s]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},ce={[Xt]:n.NEAREST,[Yl]:n.NEAREST_MIPMAP_NEAREST,[Ko]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Gu]:n.LINEAR_MIPMAP_NEAREST,[Ks]:n.LINEAR_MIPMAP_LINEAR},Ue={[ed]:n.NEVER,[od]:n.ALWAYS,[td]:n.LESS,[wh]:n.LEQUAL,[nd]:n.EQUAL,[rd]:n.GEQUAL,[id]:n.GREATER,[sd]:n.NOTEQUAL};function j(b,v,W){if(W?(n.texParameteri(b,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ue[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ce[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ce[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Jn||v.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,P(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,P(v.minFilter)),v.minFilter!==Xt&&v.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Xt||v.minFilter!==Ko&&v.minFilter!==Ks||v.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ni&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(b,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function ae(b,v){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",L));let fe=v.source,de=u.get(fe);de===void 0&&(de={},u.set(fe,de));let ie=G(v);if(ie!==b.__cacheKey){de[ie]===void 0&&(de[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),de[ie].usedTimes++;let Le=de[b.__cacheKey];Le!==void 0&&(de[b.__cacheKey].usedTimes--,Le.usedTimes===0&&w(v)),b.__cacheKey=ie,b.__webglTexture=de[ie].texture}return W}function we(b,v,W){let fe=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(fe=n.TEXTURE_3D);let de=ae(b,v),ie=v.source;t.bindTexture(fe,b.__webglTexture,n.TEXTURE0+W);let Le=i.get(ie);if(ie.version!==Le.__version||de===!0){t.activeTexture(n.TEXTURE0+W);let se=St.getPrimaries(St.workingColorSpace),Me=v.colorSpace===Un?null:St.getPrimaries(v.colorSpace),Je=v.colorSpace===Un||se===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Ve=f(v)&&m(v.image)===!1,F=_(v.image,Ve,!1,s.maxTextureSize);F=it(v,F);let Ee=m(F)||a,ge=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),Se=A(v.internalFormat,ge,Te,v.colorSpace,v.isVideoTexture);j(fe,v,Ee);let Ce,Fe=v.mipmaps,ye=a&&v.isVideoTexture!==!0&&Se!==Sh,De=Le.__version===void 0||de===!0,pe=U(v,F,Ee);if(v.isDepthTexture)Se=n.DEPTH_COMPONENT,a?v.type===Ti?Se=n.DEPTH_COMPONENT32F:v.type===wi?Se=n.DEPTH_COMPONENT24:v.type===qi?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:v.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Zi&&Se===n.DEPTH_COMPONENT&&v.type!==vl&&v.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=wi,Te=r.convert(v.type)),v.format===Cs&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,v.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=qi,Te=r.convert(v.type))),De&&(ye?t.texStorage2D(n.TEXTURE_2D,1,Se,F.width,F.height):t.texImage2D(n.TEXTURE_2D,0,Se,F.width,F.height,0,ge,Te,null));else if(v.isDataTexture)if(Fe.length>0&&Ee){ye&&De&&t.texStorage2D(n.TEXTURE_2D,pe,Se,Fe[0].width,Fe[0].height);for(let te=0,R=Fe.length;te<R;te++)Ce=Fe[te],ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(n.TEXTURE_2D,te,Se,Ce.width,Ce.height,0,ge,Te,Ce.data);v.generateMipmaps=!1}else ye?(De&&t.texStorage2D(n.TEXTURE_2D,pe,Se,F.width,F.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,F.width,F.height,ge,Te,F.data)):t.texImage2D(n.TEXTURE_2D,0,Se,F.width,F.height,0,ge,Te,F.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ye&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Se,Fe[0].width,Fe[0].height,F.depth);for(let te=0,R=Fe.length;te<R;te++)Ce=Fe[te],v.format!==$n?ge!==null?ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ce.width,Ce.height,F.depth,ge,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Se,Ce.width,Ce.height,F.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ce.width,Ce.height,F.depth,ge,Te,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Se,Ce.width,Ce.height,F.depth,0,ge,Te,Ce.data)}else{ye&&De&&t.texStorage2D(n.TEXTURE_2D,pe,Se,Fe[0].width,Fe[0].height);for(let te=0,R=Fe.length;te<R;te++)Ce=Fe[te],v.format!==$n?ge!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,ge,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Se,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ce.width,Ce.height,ge,Te,Ce.data):t.texImage2D(n.TEXTURE_2D,te,Se,Ce.width,Ce.height,0,ge,Te,Ce.data)}else if(v.isDataArrayTexture)ye?(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Se,F.width,F.height,F.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,ge,Te,F.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,F.width,F.height,F.depth,0,ge,Te,F.data);else if(v.isData3DTexture)ye?(De&&t.texStorage3D(n.TEXTURE_3D,pe,Se,F.width,F.height,F.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,ge,Te,F.data)):t.texImage3D(n.TEXTURE_3D,0,Se,F.width,F.height,F.depth,0,ge,Te,F.data);else if(v.isFramebufferTexture){if(De)if(ye)t.texStorage2D(n.TEXTURE_2D,pe,Se,F.width,F.height);else{let te=F.width,R=F.height;for(let y=0;y<pe;y++)t.texImage2D(n.TEXTURE_2D,y,Se,te,R,0,ge,Te,null),te>>=1,R>>=1}}else if(Fe.length>0&&Ee){ye&&De&&t.texStorage2D(n.TEXTURE_2D,pe,Se,Fe[0].width,Fe[0].height);for(let te=0,R=Fe.length;te<R;te++)Ce=Fe[te],ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,Te,Ce):t.texImage2D(n.TEXTURE_2D,te,Se,ge,Te,Ce);v.generateMipmaps=!1}else ye?(De&&t.texStorage2D(n.TEXTURE_2D,pe,Se,F.width,F.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Te,F)):t.texImage2D(n.TEXTURE_2D,0,Se,ge,Te,F);E(v,Ee)&&x(fe),Le.__version=ie.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Re(b,v,W){if(v.image.length!==6)return;let fe=ae(b,v),de=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);let ie=i.get(de);if(de.version!==ie.__version||fe===!0){t.activeTexture(n.TEXTURE0+W);let Le=St.getPrimaries(St.workingColorSpace),se=v.colorSpace===Un?null:St.getPrimaries(v.colorSpace),Me=v.colorSpace===Un||Le===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Je=v.isCompressedTexture||v.image[0].isCompressedTexture,Ve=v.image[0]&&v.image[0].isDataTexture,F=[];for(let te=0;te<6;te++)!Je&&!Ve?F[te]=_(v.image[te],!1,!0,s.maxCubemapSize):F[te]=Ve?v.image[te].image:v.image[te],F[te]=it(v,F[te]);let Ee=F[0],ge=m(Ee)||a,Te=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),Ce=A(v.internalFormat,Te,Se,v.colorSpace),Fe=a&&v.isVideoTexture!==!0,ye=ie.__version===void 0||fe===!0,De=U(v,Ee,ge);j(n.TEXTURE_CUBE_MAP,v,ge);let pe;if(Je){Fe&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ce,Ee.width,Ee.height);for(let te=0;te<6;te++){pe=F[te].mipmaps;for(let R=0;R<pe.length;R++){let y=pe[R];v.format!==$n?Te!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,y.width,y.height,Te,y.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,Ce,y.width,y.height,0,y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,0,0,y.width,y.height,Te,Se,y.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R,Ce,y.width,y.height,0,Te,Se,y.data)}}}else{pe=v.mipmaps,Fe&&ye&&(pe.length>0&&De++,t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ce,F[0].width,F[0].height));for(let te=0;te<6;te++)if(Ve){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,F[te].width,F[te].height,Te,Se,F[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,F[te].width,F[te].height,0,Te,Se,F[te].data);for(let R=0;R<pe.length;R++){let T=pe[R].image[te].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,T.width,T.height,Te,Se,T.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,Ce,T.width,T.height,0,Te,Se,T.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,Se,F[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ce,Te,Se,F[te]);for(let R=0;R<pe.length;R++){let y=pe[R];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,0,0,Te,Se,y.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,R+1,Ce,Te,Se,y.image[te])}}}E(v,ge)&&x(n.TEXTURE_CUBE_MAP),ie.__version=de.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function be(b,v,W,fe,de,ie){let Le=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Me=A(W.internalFormat,Le,se,W.colorSpace);if(!i.get(v).__hasExternalTextures){let Ve=Math.max(1,v.width>>ie),F=Math.max(1,v.height>>ie);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ie,Me,Ve,F,v.depth,0,Le,se,null):t.texImage2D(de,ie,Me,Ve,F,0,Le,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ze(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,de,i.get(W).__webglTexture,0,Qe(v)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,de,i.get(W).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(b,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||ze(v)){let de=v.depthTexture;de&&de.isDepthTexture&&(de.type===Ti?fe=n.DEPTH_COMPONENT32F:de.type===wi&&(fe=n.DEPTH_COMPONENT24));let ie=Qe(v);ze(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,fe,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,fe,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let fe=Qe(v);W&&ze(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,v.width,v.height):ze(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let fe=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let de=0;de<fe.length;de++){let ie=fe[de],Le=r.convert(ie.format,ie.colorSpace),se=r.convert(ie.type),Me=A(ie.internalFormat,Le,se,ie.colorSpace),Je=Qe(v);W&&ze(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Me,v.width,v.height):ze(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let fe=i.get(v.depthTexture).__webglTexture,de=Qe(v);if(v.depthTexture.format===Zi)ze(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(v.depthTexture.format===Cs)ze(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ve(b){let v=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ye(v.__webglFramebuffer,b)}else if(W){v.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[fe]),v.__webglDepthbuffer[fe]=n.createRenderbuffer(),Be(v.__webglDepthbuffer[fe],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Be(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(b,v,W){let fe=i.get(b);v!==void 0&&be(fe.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ve(b)}function k(b){let v=b.texture,W=i.get(b),fe=i.get(v);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=v.version,o.memory.textures++);let de=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,Le=m(b)||a;if(de){W.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[se]=[];for(let Me=0;Me<v.mipmaps.length;Me++)W.__webglFramebuffer[se][Me]=n.createFramebuffer()}else W.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)W.__webglFramebuffer[se]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ie)if(s.drawBuffers){let se=b.texture;for(let Me=0,Je=se.length;Me<Je;Me++){let Ve=i.get(se[Me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ze(b)===!1){let se=ie?v:[v];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<se.length;Me++){let Je=se[Me];W.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);let Ve=r.convert(Je.format,Je.colorSpace),F=r.convert(Je.type),Ee=A(Je.internalFormat,Ve,F,Je.colorSpace,b.isXRRenderTarget===!0),ge=Qe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,Ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),j(n.TEXTURE_CUBE_MAP,v,Le);for(let se=0;se<6;se++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)be(W.__webglFramebuffer[se][Me],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else be(W.__webglFramebuffer[se],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);E(v,Le)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let se=b.texture;for(let Me=0,Je=se.length;Me<Je;Me++){let Ve=se[Me],F=i.get(Ve);t.bindTexture(n.TEXTURE_2D,F.__webglTexture),j(n.TEXTURE_2D,Ve,Le),be(W.__webglFramebuffer,b,Ve,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),E(Ve,Le)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,fe.__webglTexture),j(se,v,Le),a&&v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)be(W.__webglFramebuffer[Me],b,v,n.COLOR_ATTACHMENT0,se,Me);else be(W.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,se,0);E(v,Le)&&x(se),t.unbindTexture()}b.depthBuffer&&ve(b)}function Ke(b){let v=m(b)||a,W=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let fe=0,de=W.length;fe<de;fe++){let ie=W[fe];if(E(ie,v)){let Le=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(ie).__webglTexture;t.bindTexture(Le,se),x(Le),t.unbindTexture()}}}function je(b){if(a&&b.samples>0&&ze(b)===!1){let v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],W=b.width,fe=b.height,de=n.COLOR_BUFFER_BIT,ie=[],Le=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(b),Me=b.isWebGLMultipleRenderTargets===!0;if(Me)for(let Je=0;Je<v.length;Je++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Je=0;Je<v.length;Je++){ie.push(n.COLOR_ATTACHMENT0+Je),b.depthBuffer&&ie.push(Le);let Ve=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ve===!1&&(b.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Je]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Le]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Le])),Me){let F=i.get(v[Je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,W,fe,0,0,W,fe,de,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Je=0;Je<v.length;Je++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.RENDERBUFFER,se.__webglColorRenderbuffer[Je]);let Ve=i.get(v[Je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Je,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Qe(b){return Math.min(s.maxSamples,b.samples)}function ze(b){let v=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xt(b){let v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function it(b,v){let W=b.colorSpace,fe=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Fa||W!==gi&&W!==Un&&(St.getTransfer(W)===Tt?a===!1?e.has("EXT_sRGB")===!0&&fe===$n?(b.format=Fa,b.minFilter=Dn,b.generateMipmaps=!1):v=to.sRGBToLinear(v):(fe!==$n||de!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}this.allocateTextureUnit=O,this.resetTextureUnits=_e,this.setTexture2D=Q,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=ne,this.rebindTextures=ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ze}function $m(n,e,t){let i=t.isWebGL2;function s(r,o=Un){let a,l=St.getTransfer(o);if(r===Ri)return n.UNSIGNED_BYTE;if(r===yh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Vu)return n.BYTE;if(r===Wu)return n.SHORT;if(r===vl)return n.UNSIGNED_SHORT;if(r===_h)return n.INT;if(r===wi)return n.UNSIGNED_INT;if(r===Ti)return n.FLOAT;if(r===ni)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xu)return n.ALPHA;if(r===$n)return n.RGBA;if(r===Yu)return n.LUMINANCE;if(r===qu)return n.LUMINANCE_ALPHA;if(r===Zi)return n.DEPTH_COMPONENT;if(r===Cs)return n.DEPTH_STENCIL;if(r===Fa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Zu)return n.RED;if(r===vh)return n.RED_INTEGER;if(r===Ju)return n.RG;if(r===Mh)return n.RG_INTEGER;if(r===Eh)return n.RGBA_INTEGER;if(r===Qo||r===jo||r===ea||r===ta)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ql||r===Zl||r===Jl||r===$l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kl||r===Ql)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kl)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ql)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jl||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===lc||r===cc||r===hc||r===uc||r===dc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jl)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ec)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ic)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ac)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dc)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===na||r===fc||r===pc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===na)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$u||r===mc||r===gc||r===_c)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===na)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_c)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Ja=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kn=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$a=class extends Ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,_=t.getContextAttributes(),m=null,f=null,E=[],x=[],A=new at,U=null,P=new rn;P.layers.enable(1),P.viewport=new Rt;let L=new rn;L.layers.enable(2),L.viewport=new Rt;let $=[P,L],M=new Ja;M.layers.enable(1),M.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=E[j];return ae===void 0&&(ae=new Js,E[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=E[j];return ae===void 0&&(ae=new Js,E[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=E[j];return ae===void 0&&(ae=new Js,E[j]=ae),ae.getHandSpace()};function q(j){let ae=x.indexOf(j.inputSource);if(ae===-1)return;let we=E[ae];we!==void 0&&(we.update(j.inputSource,j.frame,c||o),we.dispatchEvent({type:j.type,data:j.inputSource}))}function _e(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",_e),s.removeEventListener("inputsourceschange",O);for(let j=0;j<E.length;j++){let ae=x[j];ae!==null&&(x[j]=null,E[j].disconnect(ae))}w=null,X=null,e.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",_e),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Mn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ae=null,we=null,Re=null;_.depth&&(Re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?Cs:Zi,we=_.stencil?qi:wi);let be={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Mn(u.textureWidth,u.textureHeight,{format:$n,type:Ri,depthTexture:new Ds(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Be=e.properties.get(f);Be.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(j){for(let ae=0;ae<j.removed.length;ae++){let we=j.removed[ae],Re=x.indexOf(we);Re>=0&&(x[Re]=null,E[Re].disconnect(we))}for(let ae=0;ae<j.added.length;ae++){let we=j.added[ae],Re=x.indexOf(we);if(Re===-1){for(let Be=0;Be<E.length;Be++)if(Be>=x.length){x.push(we),Re=Be;break}else if(x[Be]===null){x[Be]=we,Re=Be;break}if(Re===-1)break}let be=E[Re];be&&be.connect(we)}}let G=new z,Q=new z;function oe(j,ae,we){G.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(we.matrixWorld);let Re=G.distanceTo(Q),be=ae.projectionMatrix.elements,Be=we.projectionMatrix.elements,Ye=be[14]/(be[10]-1),ve=be[14]/(be[10]+1),ke=(be[9]+1)/be[5],k=(be[9]-1)/be[5],Ke=(be[8]-1)/be[0],je=(Be[8]+1)/Be[0],Qe=Ye*Ke,ze=Ye*je,xt=Re/(-Ke+je),it=xt*-Ke;ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(it),j.translateZ(xt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let b=Ye+xt,v=ve+xt,W=Qe-it,fe=ze+(Re-it),de=ke*ve/v*b,ie=k*ve/v*b;j.projectionMatrix.makePerspective(W,fe,de,ie,b,v),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function re(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;M.near=L.near=P.near=j.near,M.far=L.far=P.far=j.far,(w!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,X=M.far);let ae=j.parent,we=M.cameras;re(M,ae);for(let Re=0;Re<we.length;Re++)re(we[Re],ae);we.length===2?oe(M,P,L):M.projectionMatrix.copy(P.projectionMatrix),ne(j,M,ae)};function ne(j,ae,we){we===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let ue=null;function ce(j,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let we=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Re=!1;we.length!==M.cameras.length&&(M.cameras.length=0,Re=!0);for(let be=0;be<we.length;be++){let Be=we[be],Ye=null;if(p!==null)Ye=p.getViewport(Be);else{let ke=d.getViewSubImage(u,Be);Ye=ke.viewport,be===0&&(e.setRenderTargetTextures(f,ke.colorTexture,u.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let ve=$[be];ve===void 0&&(ve=new rn,ve.layers.enable(be),ve.viewport=new Rt,$[be]=ve),ve.matrix.fromArray(Be.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Be.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),be===0&&(M.matrix.copy(ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Re===!0&&M.cameras.push(ve)}}for(let we=0;we<E.length;we++){let Re=x[we],be=E[we];Re!==null&&be!==void 0&&be.update(Re,ae,c||o)}ue&&ue(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Ue=new Ch;Ue.setAnimationLoop(ce),this.setAnimationLoop=function(j){ue=j},this.dispose=function(){}}};function Qm(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Rh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,x,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jm(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){let A=x.program;i.uniformBlockBinding(E,A)}function c(E,x){let A=s[E.id];A===void 0&&(g(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",m));let U=x.program;i.updateUBOMapping(E,U);let P=e.render.frame;r[E.id]!==P&&(u(E),r[E.id]=P)}function h(E){let x=d();E.__bindingPointIndex=x;let A=n.createBuffer(),U=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let x=s[E.id],A=E.uniforms,U=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,L=A.length;P<L;P++){let $=Array.isArray(A[P])?A[P]:[A[P]];for(let M=0,w=$.length;M<w;M++){let X=$[M];if(p(X,P,M,U)===!0){let q=X.__offset,_e=Array.isArray(X.value)?X.value:[X.value],O=0;for(let G=0;G<_e.length;G++){let Q=_e[G],oe=_(Q);typeof Q=="number"||typeof Q=="boolean"?(X.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,q+O,X.__data)):Q.isMatrix3?(X.__data[0]=Q.elements[0],X.__data[1]=Q.elements[1],X.__data[2]=Q.elements[2],X.__data[3]=0,X.__data[4]=Q.elements[3],X.__data[5]=Q.elements[4],X.__data[6]=Q.elements[5],X.__data[7]=0,X.__data[8]=Q.elements[6],X.__data[9]=Q.elements[7],X.__data[10]=Q.elements[8],X.__data[11]=0):(Q.toArray(X.__data,O),O+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,X.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,x,A,U){let P=E.value,L=x+"_"+A;if(U[L]===void 0)return typeof P=="number"||typeof P=="boolean"?U[L]=P:U[L]=P.clone(),!0;{let $=U[L];if(typeof P=="number"||typeof P=="boolean"){if($!==P)return U[L]=P,!0}else if($.equals(P)===!1)return $.copy(P),!0}return!1}function g(E){let x=E.uniforms,A=0,U=16;for(let L=0,$=x.length;L<$;L++){let M=Array.isArray(x[L])?x[L]:[x[L]];for(let w=0,X=M.length;w<X;w++){let q=M[w],_e=Array.isArray(q.value)?q.value:[q.value];for(let O=0,G=_e.length;O<G;O++){let Q=_e[O],oe=_(Q),re=A%U;re!==0&&U-re<oe.boundary&&(A+=U-re),q.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=oe.storage}}}let P=A%U;return P>0&&(A+=U-P),E.__size=A,E.__cache={},this}function _(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){let x=E.target;x.removeEventListener("dispose",m);let A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var tr=class{constructor(e={}){let{canvas:t=ld(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;let x=this,A=!1,U=0,P=0,L=null,$=-1,M=null,w=new Rt,X=new Rt,q=null,_e=new et(0),O=0,G=t.width,Q=t.height,oe=1,re=null,ne=null,ue=new Rt(0,0,G,Q),ce=new Rt(0,0,G,Q),Ue=!1,j=new er,ae=!1,we=!1,Re=null,be=new Yt,Be=new at,Ye=new z,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return L===null?oe:1}let k=i;function Ke(S,V){for(let K=0;K<S.length;K++){let ee=S[K],J=t.getContext(ee,V);if(J!==null)return J}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",y,!1),k===null){let V=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&V.shift(),k=Ke(V,S),k===null)throw Ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let je,Qe,ze,xt,it,b,v,W,fe,de,ie,Le,se,Me,Je,Ve,F,Ee,ge,Te,Se,Ce,Fe,ye;function De(){je=new yp(k),Qe=new dp(k,je,e),je.init(Qe),Ce=new $m(k,je,Qe),ze=new Zm(k,je,Qe),xt=new Mp(k),it=new Nm,b=new Jm(k,je,ze,it,Qe,Ce,xt),v=new pp(x),W=new _p(x),fe=new Rd(k,Qe),Fe=new hp(k,je,fe,Qe),de=new xp(k,fe,xt,Fe),ie=new wp(k,de,fe,xt),ge=new bp(k,Qe,b),Ve=new fp(it),Le=new Fm(x,v,W,je,Qe,Fe,Ve),se=new Qm(x,it),Me=new Om,Je=new Wm(je,Qe),Ee=new cp(x,v,W,ze,ie,u,l),F=new qm(x,ie,Qe),ye=new jm(k,xt,Qe,ze),Te=new up(k,je,xt,Qe),Se=new vp(k,je,xt,Qe),xt.programs=Le.programs,x.capabilities=Qe,x.extensions=je,x.properties=it,x.renderLists=Me,x.shadowMap=F,x.state=ze,x.info=xt}De();let pe=new $a(x,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(S){S!==void 0&&(oe=S,this.setSize(G,Q,!1))},this.getSize=function(S){return S.set(G,Q)},this.setSize=function(S,V,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,Q=V,t.width=Math.floor(S*oe),t.height=Math.floor(V*oe),K===!0&&(t.style.width=S+"px",t.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(G*oe,Q*oe).floor()},this.setDrawingBufferSize=function(S,V,K){G=S,Q=V,oe=K,t.width=Math.floor(S*K),t.height=Math.floor(V*K),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,V,K,ee){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,V,K,ee),ze.viewport(w.copy(ue).multiplyScalar(oe).floor())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,V,K,ee){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,V,K,ee),ze.scissor(X.copy(ce).multiplyScalar(oe).floor())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(S){ze.setScissorTest(Ue=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ne=S},this.getClearColor=function(S){return S.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(S=!0,V=!0,K=!0){let ee=0;if(S){let J=!1;if(L!==null){let Xe=L.texture.format;J=Xe===Eh||Xe===Mh||Xe===vh}if(J){let Xe=L.texture.type,st=Xe===Ri||Xe===wi||Xe===vl||Xe===qi||Xe===yh||Xe===xh,ot=Ee.getClearColor(),lt=Ee.getClearAlpha(),mt=ot.r,ut=ot.g,dt=ot.b;st?(p[0]=mt,p[1]=ut,p[2]=dt,p[3]=lt,k.clearBufferuiv(k.COLOR,0,p)):(g[0]=mt,g[1]=ut,g[2]=dt,g[3]=lt,k.clearBufferiv(k.COLOR,0,g))}else ee|=k.COLOR_BUFFER_BIT}V&&(ee|=k.DEPTH_BUFFER_BIT),K&&(ee|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",y,!1),Me.dispose(),Je.dispose(),it.dispose(),v.dispose(),W.dispose(),ie.dispose(),Fe.dispose(),ye.dispose(),Le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ne),pe.removeEventListener("sessionend",We),Re&&(Re.dispose(),Re=null),$e.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=xt.autoReset,V=F.enabled,K=F.autoUpdate,ee=F.needsUpdate,J=F.type;De(),xt.autoReset=S,F.enabled=V,F.autoUpdate=K,F.needsUpdate=ee,F.type=J}function y(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function T(S){let V=S.target;V.removeEventListener("dispose",T),B(V)}function B(S){D(S),it.remove(S)}function D(S){let V=it.get(S).programs;V!==void 0&&(V.forEach(function(K){Le.releaseProgram(K)}),S.isShaderMaterial&&Le.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,K,ee,J,Xe){V===null&&(V=ve);let st=J.isMesh&&J.matrixWorld.determinant()<0,ot=Yo(S,V,K,ee,J);ze.setMaterial(ee,st);let lt=K.index,mt=1;if(ee.wireframe===!0){if(lt=de.getWireframeAttribute(K),lt===void 0)return;mt=2}let ut=K.drawRange,dt=K.attributes.position,zt=ut.start*mt,wn=(ut.start+ut.count)*mt;Xe!==null&&(zt=Math.max(zt,Xe.start*mt),wn=Math.min(wn,(Xe.start+Xe.count)*mt)),lt!==null?(zt=Math.max(zt,0),wn=Math.min(wn,lt.count)):dt!=null&&(zt=Math.max(zt,0),wn=Math.min(wn,dt.count));let jt=wn-zt;if(jt<0||jt===1/0)return;Fe.setup(J,ee,ot,K,lt);let ai,Ft=Te;if(lt!==null&&(ai=fe.get(lt),Ft=Se,Ft.setIndex(ai)),J.isMesh)ee.wireframe===!0?(ze.setLineWidth(ee.wireframeLinewidth*ke()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(J.isLine){let gt=ee.linewidth;gt===void 0&&(gt=1),ze.setLineWidth(gt*ke()),J.isLineSegments?Ft.setMode(k.LINES):J.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else J.isPoints?Ft.setMode(k.POINTS):J.isSprite&&Ft.setMode(k.TRIANGLES);if(J.isBatchedMesh)Ft.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ft.renderInstances(zt,jt,J.count);else if(K.isInstancedBufferGeometry){let gt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,qo=Math.min(K.instanceCount,gt);Ft.renderInstances(zt,jt,qo)}else Ft.render(zt,jt)};function H(S,V,K){S.transparent===!0&&S.side===wt&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,sn(S,V,K),S.side=vn,S.needsUpdate=!0,sn(S,V,K),S.side=wt):sn(S,V,K)}this.compile=function(S,V,K=null){K===null&&(K=S),m=Je.get(K),m.init(),E.push(m),K.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),S!==K&&S.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(x._useLegacyLights);let ee=new Set;return S.traverse(function(J){let Xe=J.material;if(Xe)if(Array.isArray(Xe))for(let st=0;st<Xe.length;st++){let ot=Xe[st];H(ot,K,J),ee.add(ot)}else H(Xe,K,J),ee.add(Xe)}),E.pop(),m=null,ee},this.compileAsync=function(S,V,K=null){let ee=this.compile(S,V,K);return new Promise(J=>{function Xe(){if(ee.forEach(function(st){it.get(st).currentProgram.isReady()&&ee.delete(st)}),ee.size===0){J(S);return}setTimeout(Xe,10)}je.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Z=null;function Pe(S){Z&&Z(S)}function Ne(){$e.stop()}function We(){$e.start()}let $e=new Ch;$e.setAnimationLoop(Pe),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(S){Z=S,pe.setAnimationLoop(S),S===null?$e.stop():$e.start()},pe.addEventListener("sessionstart",Ne),pe.addEventListener("sessionend",We),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,V,L),m=Je.get(S,E.length),m.init(),E.push(m),be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(be),we=this.localClippingEnabled,ae=Ve.init(this.clippingPlanes,we),_=Me.get(S,f.length),_.init(),f.push(_),ct(S,V,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(re,ne),this.info.render.frame++,ae===!0&&Ve.beginShadows();let K=m.state.shadowsArray;if(F.render(K,S,V),ae===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(_,S),m.setupLights(x._useLegacyLights),V.isArrayCamera){let ee=V.cameras;for(let J=0,Xe=ee.length;J<Xe;J++){let st=ee[J];ht(_,S,st,st.viewport)}}else ht(_,S,V);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,V),Fe.resetDefaultState(),$=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ct(S,V,K,ee){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){ee&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);let st=ie.update(S),ot=S.material;ot.visible&&_.push(S,st,ot,K,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){let st=ie.update(S),ot=S.material;if(ee&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ye.copy(st.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(ot)){let lt=st.groups;for(let mt=0,ut=lt.length;mt<ut;mt++){let dt=lt[mt],zt=ot[dt.materialIndex];zt&&zt.visible&&_.push(S,st,zt,K,Ye.z,dt)}}else ot.visible&&_.push(S,st,ot,K,Ye.z,null)}}let Xe=S.children;for(let st=0,ot=Xe.length;st<ot;st++)ct(Xe[st],V,K,ee)}function ht(S,V,K,ee){let J=S.opaque,Xe=S.transmissive,st=S.transparent;m.setupLightsView(K),ae===!0&&Ve.setGlobalState(x.clippingPlanes,K),Xe.length>0&&Ut(J,Xe,V,K),ee&&ze.viewport(w.copy(ee)),J.length>0&&It(J,V,K),Xe.length>0&&It(Xe,V,K),st.length>0&&It(st,V,K),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ut(S,V,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Xe=Qe.isWebGL2;Re===null&&(Re=new Mn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?ni:Ri,minFilter:Ks,samples:Xe?4:0})),x.getDrawingBufferSize(Be),Xe?Re.setSize(Be.x,Be.y):Re.setSize(Na(Be.x),Na(Be.y));let st=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(_e),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();let ot=x.toneMapping;x.toneMapping=Ai,It(S,K,ee),b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re);let lt=!1;for(let mt=0,ut=V.length;mt<ut;mt++){let dt=V[mt],zt=dt.object,wn=dt.geometry,jt=dt.material,ai=dt.group;if(jt.side===wt&&zt.layers.test(ee.layers)){let Ft=jt.side;jt.side=tn,jt.needsUpdate=!0,Bt(zt,K,ee,wn,jt,ai),jt.side=Ft,jt.needsUpdate=!0,lt=!0}}lt===!0&&(b.updateMultisampleRenderTarget(Re),b.updateRenderTargetMipmap(Re)),x.setRenderTarget(st),x.setClearColor(_e,O),x.toneMapping=ot}function It(S,V,K){let ee=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Xe=S.length;J<Xe;J++){let st=S[J],ot=st.object,lt=st.geometry,mt=ee===null?st.material:ee,ut=st.group;ot.layers.test(K.layers)&&Bt(ot,V,K,lt,mt,ut)}}function Bt(S,V,K,ee,J,Xe){S.onBeforeRender(x,V,K,ee,J,Xe),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),J.onBeforeRender(x,V,K,ee,S,Xe),J.transparent===!0&&J.side===wt&&J.forceSinglePass===!1?(J.side=tn,J.needsUpdate=!0,x.renderBufferDirect(K,V,ee,J,S,Xe),J.side=vn,J.needsUpdate=!0,x.renderBufferDirect(K,V,ee,J,S,Xe),J.side=wt):x.renderBufferDirect(K,V,ee,J,S,Xe),S.onAfterRender(x,V,K,ee,J,Xe)}function sn(S,V,K){V.isScene!==!0&&(V=ve);let ee=it.get(S),J=m.state.lights,Xe=m.state.shadowsArray,st=J.state.version,ot=Le.getParameters(S,J.state,Xe,V,K),lt=Le.getProgramCacheKey(ot),mt=ee.programs;ee.environment=S.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(S.isMeshStandardMaterial?W:v).get(S.envMap||ee.environment),mt===void 0&&(S.addEventListener("dispose",T),mt=new Map,ee.programs=mt);let ut=mt.get(lt);if(ut!==void 0){if(ee.currentProgram===ut&&ee.lightsStateVersion===st)return xr(S,ot),ut}else ot.uniforms=Le.getUniforms(S),S.onBuild(K,ot,x),S.onBeforeCompile(ot,x),ut=Le.acquireProgram(ot,lt),mt.set(lt,ut),ee.uniforms=ot.uniforms;let dt=ee.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(dt.clippingPlanes=Ve.uniform),xr(S,ot),ee.needsLights=du(S),ee.lightsStateVersion=st,ee.needsLights&&(dt.ambientLightColor.value=J.state.ambient,dt.lightProbe.value=J.state.probe,dt.directionalLights.value=J.state.directional,dt.directionalLightShadows.value=J.state.directionalShadow,dt.spotLights.value=J.state.spot,dt.spotLightShadows.value=J.state.spotShadow,dt.rectAreaLights.value=J.state.rectArea,dt.ltc_1.value=J.state.rectAreaLTC1,dt.ltc_2.value=J.state.rectAreaLTC2,dt.pointLights.value=J.state.point,dt.pointLightShadows.value=J.state.pointShadow,dt.hemisphereLights.value=J.state.hemi,dt.directionalShadowMap.value=J.state.directionalShadowMap,dt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,dt.spotShadowMap.value=J.state.spotShadowMap,dt.spotLightMatrix.value=J.state.spotLightMatrix,dt.spotLightMap.value=J.state.spotLightMap,dt.pointShadowMap.value=J.state.pointShadowMap,dt.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=ut,ee.uniformsList=null,ut}function Bi(S){if(S.uniformsList===null){let V=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function xr(S,V){let K=it.get(S);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Yo(S,V,K,ee,J){V.isScene!==!0&&(V=ve),b.resetTextureUnits();let Xe=V.fog,st=ee.isMeshStandardMaterial?V.environment:null,ot=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gi,lt=(ee.isMeshStandardMaterial?W:v).get(ee.envMap||st),mt=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ut=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),dt=!!K.morphAttributes.position,zt=!!K.morphAttributes.normal,wn=!!K.morphAttributes.color,jt=Ai;ee.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(jt=x.toneMapping);let ai=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ft=ai!==void 0?ai.length:0,gt=it.get(ee),qo=m.state.lights;if(ae===!0&&(we===!0||S!==M)){let In=S===M&&ee.id===$;Ve.setState(ee,S,In)}let Ot=!1;ee.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==qo.state.version||gt.outputColorSpace!==ot||J.isBatchedMesh&&gt.batching===!1||!J.isBatchedMesh&&gt.batching===!0||J.isInstancedMesh&&gt.instancing===!1||!J.isInstancedMesh&&gt.instancing===!0||J.isSkinnedMesh&&gt.skinning===!1||!J.isSkinnedMesh&&gt.skinning===!0||J.isInstancedMesh&&gt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&gt.instancingColor===!1&&J.instanceColor!==null||gt.envMap!==lt||ee.fog===!0&&gt.fog!==Xe||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Ve.numPlanes||gt.numIntersection!==Ve.numIntersection)||gt.vertexAlphas!==mt||gt.vertexTangents!==ut||gt.morphTargets!==dt||gt.morphNormals!==zt||gt.morphColors!==wn||gt.toneMapping!==jt||Qe.isWebGL2===!0&&gt.morphTargetsCount!==Ft)&&(Ot=!0):(Ot=!0,gt.__version=ee.version);let Oi=gt.currentProgram;Ot===!0&&(Oi=sn(ee,V,J));let Ol=!1,ks=!1,Zo=!1,ln=Oi.getUniforms(),Hi=gt.uniforms;if(ze.useProgram(Oi.program)&&(Ol=!0,ks=!0,Zo=!0),ee.id!==$&&($=ee.id,ks=!0),Ol||M!==S){ln.setValue(k,"projectionMatrix",S.projectionMatrix),ln.setValue(k,"viewMatrix",S.matrixWorldInverse);let In=ln.map.cameraPosition;In!==void 0&&In.setValue(k,Ye.setFromMatrixPosition(S.matrixWorld)),Qe.logarithmicDepthBuffer&&ln.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ln.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,ks=!0,Zo=!0)}if(J.isSkinnedMesh){ln.setOptional(k,J,"bindMatrix"),ln.setOptional(k,J,"bindMatrixInverse");let In=J.skeleton;In&&(Qe.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),ln.setValue(k,"boneTexture",In.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(ln.setOptional(k,J,"batchingTexture"),ln.setValue(k,"batchingTexture",J._matricesTexture,b));let Jo=K.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&Qe.isWebGL2===!0)&&ge.update(J,K,Oi),(ks||gt.receiveShadow!==J.receiveShadow)&&(gt.receiveShadow=J.receiveShadow,ln.setValue(k,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Hi.envMap.value=lt,Hi.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),ks&&(ln.setValue(k,"toneMappingExposure",x.toneMappingExposure),gt.needsLights&&vr(Hi,Zo),Xe&&ee.fog===!0&&se.refreshFogUniforms(Hi,Xe),se.refreshMaterialUniforms(Hi,ee,oe,Q,Re),Ts.upload(k,Bi(gt),Hi,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ts.upload(k,Bi(gt),Hi,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ln.setValue(k,"center",J.center),ln.setValue(k,"modelViewMatrix",J.modelViewMatrix),ln.setValue(k,"normalMatrix",J.normalMatrix),ln.setValue(k,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let In=ee.uniformsGroups;for(let $o=0,fu=In.length;$o<fu;$o++)if(Qe.isWebGL2){let Hl=In[$o];ye.update(Hl,Oi),ye.bind(Hl,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function vr(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function du(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,V,K){it.get(S.texture).__webglTexture=V,it.get(S.depthTexture).__webglTexture=K;let ee=it.get(S);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=K===void 0,ee.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,V){let K=it.get(S);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,K=0){L=S,U=V,P=K;let ee=!0,J=null,Xe=!1,st=!1;if(S){let lt=it.get(S);lt.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(k.FRAMEBUFFER,null),ee=!1):lt.__webglFramebuffer===void 0?b.setupRenderTarget(S):lt.__hasExternalTextures&&b.rebindTextures(S,it.get(S.texture).__webglTexture,it.get(S.depthTexture).__webglTexture);let mt=S.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(st=!0);let ut=it.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ut[V])?J=ut[V][K]:J=ut[V],Xe=!0):Qe.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?J=it.get(S).__webglMultisampledFramebuffer:Array.isArray(ut)?J=ut[K]:J=ut,w.copy(S.viewport),X.copy(S.scissor),q=S.scissorTest}else w.copy(ue).multiplyScalar(oe).floor(),X.copy(ce).multiplyScalar(oe).floor(),q=Ue;if(ze.bindFramebuffer(k.FRAMEBUFFER,J)&&Qe.drawBuffers&&ee&&ze.drawBuffers(S,J),ze.viewport(w),ze.scissor(X),ze.setScissorTest(q),Xe){let lt=it.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,lt.__webglTexture,K)}else if(st){let lt=it.get(S.texture),mt=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,lt.__webglTexture,K||0,mt)}$=-1},this.readRenderTargetPixels=function(S,V,K,ee,J,Xe,st){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=it.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&st!==void 0&&(ot=ot[st]),ot){ze.bindFramebuffer(k.FRAMEBUFFER,ot);try{let lt=S.texture,mt=lt.format,ut=lt.type;if(mt!==$n&&Ce.convert(mt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let dt=ut===ni&&(je.has("EXT_color_buffer_half_float")||Qe.isWebGL2&&je.has("EXT_color_buffer_float"));if(ut!==Ri&&Ce.convert(ut)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Ti&&(Qe.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-ee&&K>=0&&K<=S.height-J&&k.readPixels(V,K,ee,J,Ce.convert(mt),Ce.convert(ut),Xe)}finally{let lt=L!==null?it.get(L).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,lt)}}},this.copyFramebufferToTexture=function(S,V,K=0){let ee=Math.pow(2,-K),J=Math.floor(V.image.width*ee),Xe=Math.floor(V.image.height*ee);b.setTexture2D(V,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,S.x,S.y,J,Xe),ze.unbindTexture()},this.copyTextureToTexture=function(S,V,K,ee=0){let J=V.image.width,Xe=V.image.height,st=Ce.convert(K.format),ot=Ce.convert(K.type);b.setTexture2D(K,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ee,S.x,S.y,J,Xe,st,ot,V.image.data):V.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ee,S.x,S.y,V.mipmaps[0].width,V.mipmaps[0].height,st,V.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,ee,S.x,S.y,st,ot,V.image),ee===0&&K.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(S,V,K,ee,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Xe=S.max.x-S.min.x+1,st=S.max.y-S.min.y+1,ot=S.max.z-S.min.z+1,lt=Ce.convert(ee.format),mt=Ce.convert(ee.type),ut;if(ee.isData3DTexture)b.setTexture3D(ee,0),ut=k.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),ut=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,ee.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,ee.unpackAlignment);let dt=k.getParameter(k.UNPACK_ROW_LENGTH),zt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wn=k.getParameter(k.UNPACK_SKIP_PIXELS),jt=k.getParameter(k.UNPACK_SKIP_ROWS),ai=k.getParameter(k.UNPACK_SKIP_IMAGES),Ft=K.isCompressedTexture?K.mipmaps[J]:K.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ft.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),K.isDataTexture||K.isData3DTexture?k.texSubImage3D(ut,J,V.x,V.y,V.z,Xe,st,ot,lt,mt,Ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ut,J,V.x,V.y,V.z,Xe,st,ot,lt,Ft.data)):k.texSubImage3D(ut,J,V.x,V.y,V.z,Xe,st,ot,lt,mt,Ft),k.pixelStorei(k.UNPACK_ROW_LENGTH,dt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,zt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),J===0&&ee.generateMipmaps&&k.generateMipmap(ut),ze.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ze.unbindTexture()},this.resetState=function(){U=0,P=0,L=null,ze.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ml?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===Eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Ji:bh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?Jt:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ka=class extends tr{};Ka.prototype.isWebGL1Renderer=!0;var ho=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var uo=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Us=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lh=new Yt,Qa=new Qs,Vr=new Ps,Wr=new z,nr=class extends nn{constructor(e=new an,t=new Us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;lh.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){let m=c.getX(g);Wr.fromBufferAttribute(d,m),ch(Wr,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)Wr.fromBufferAttribute(d,g),ch(Wr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ch(n,e,t,i,s,r,o){let a=Qa.distanceSqToPoint(n);if(a<t){let l=new z;Qa.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var fo=class extends Fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class n extends an{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new z,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_n=class n extends an{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,_=[],m=i/2,f=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2));function E(){let A=new z,U=new z,P=0,L=(t-e)/i;for(let $=0;$<=r;$++){let M=[],w=$/r,X=w*(t-e)+e;for(let q=0;q<=s;q++){let _e=q/s,O=_e*l+a,G=Math.sin(O),Q=Math.cos(O);U.x=X*G,U.y=-w*i+m,U.z=X*Q,d.push(U.x,U.y,U.z),A.set(G,L,Q).normalize(),u.push(A.x,A.y,A.z),p.push(_e,1-w),M.push(g++)}_.push(M)}for(let $=0;$<s;$++)for(let M=0;M<r;M++){let w=_[M][$],X=_[M+1][$],q=_[M+1][$+1],_e=_[M][$+1];h.push(w,X,_e),h.push(X,q,_e),P+=6}c.addGroup(f,P,0),f+=P}function x(A){let U=g,P=new at,L=new z,$=0,M=A===!0?e:t,w=A===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*w,0),u.push(0,w,0),p.push(.5,.5),g++;let X=g;for(let q=0;q<=s;q++){let O=q/s*l+a,G=Math.cos(O),Q=Math.sin(O);L.x=M*Q,L.y=m*w,L.z=M*G,d.push(L.x,L.y,L.z),u.push(0,w,0),P.x=G*.5+.5,P.y=Q*.5*w+.5,p.push(P.x,P.y),g++}for(let q=0;q<s;q++){let _e=U+q,O=X+q;A===!0?h.push(O,O+1,_e):h.push(O+1,O,_e),$+=3}c.addGroup(f,$,A===!0?1:2),f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nn=class n extends an{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,u=new z,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){let E=[],x=f/i,A=0;f===0&&o===0?A=.5/t:f===i&&l===Math.PI&&(A=-.5/t);for(let U=0;U<=t;U++){let P=U/t;d.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(P+A,1-x),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let x=h[f][E+1],A=h[f][E],U=h[f+1][E],P=h[f+1][E+1];(f!==0||o>0)&&p.push(x,A,P),(f!==i-1||l<Math.PI)&&p.push(A,U,P)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class n extends an{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,d=new z,u=new z;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var po=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ii=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends Ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mo=class extends ii{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},On=class extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Xr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function eg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Fs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends Fs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xc:r=e,a=2*t-i;break;case vc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:o=e,l=2*i-t;break;case vc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,E=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,A=p*m-p*_;for(let U=0;U!==a;++U)r[U]=f*o[h+U]+E*o[c+U]+x*o[l+U]+A*o[d+U];return r}},el=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},tl=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ja(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&eg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ia,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Zr;var Qi=class extends Qn{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=qr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var nl=class extends Qn{};nl.prototype.ValueTypeName="color";var il=class extends Qn{};il.prototype.ValueTypeName="number";var sl=class extends Fs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ir=class extends Qn{InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=Zr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Qn{};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=qr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends Qn{};rl.prototype.ValueTypeName="vector";var ol=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},tg=new ol,al=class{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},go=class extends es{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ra=new Yt,hh=new z,uh=new z,sr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ll=class extends sr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ts=class extends es{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ll}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dh=new Yt,qs=new z,Ca=new z,cl=class extends sr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),i.position.copy(qs),Ca.copy(i.position),Ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ca),i.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}},En=class extends es{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hl=class extends sr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new hl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_o=class extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fh(){return(typeof performance>"u"?Date:performance).now()}var Sl="\\[\\]\\.:\\/",ng=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",ig="[^"+Sl.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",bl),rg=/(WCOD+)?/.source.replace("WCOD",ig),og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),lg=new RegExp("^"+sg+rg+og+ag+"$"),cg=["material","materials","bones","map"],ul=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(e){let t=lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);cg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=ul;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var xo=class{constructor(e,t,i=0,s=1/0){this.ray=new Qs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return dl(e,this,i,t),i.sort(ph),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)dl(e[s],this,i,t);return i.sort(ph),i}};function ph(n,e){return n.distance-e.distance}function dl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)dl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);var Fh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ug=new Ls(-1,1,1,-1,0,1),wl=class extends an{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},dg=new wl,Li=class{constructor(e){this._mesh=new I(dg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ug)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bo=class extends jn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=lr.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Li(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var cr=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wo=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var To=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new at);this._width=i.width,this._height=i.height,t=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bo(Fh),this.copyPass.material.blending=ti,this.clock=new yo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cr!==void 0&&(o instanceof cr?i=!0:o instanceof wo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ao=class extends jn{constructor(e,t,i,s={}){super(),this.pixelSize=e,this.resolution=new at,this.renderResolution=new at,this.pixelatedMaterial=this.createPixelatedMaterial(),this.normalMaterial=new mo,this.fsQuad=new Li(this.pixelatedMaterial),this.scene=t,this.camera=i,this.normalEdgeStrength=s.normalEdgeStrength||.3,this.depthEdgeStrength=s.depthEdgeStrength||.4,this.beautyRenderTarget=new Mn,this.beautyRenderTarget.texture.minFilter=Xt,this.beautyRenderTarget.texture.magFilter=Xt,this.beautyRenderTarget.texture.type=ni,this.beautyRenderTarget.depthTexture=new Ds,this.normalRenderTarget=new Mn,this.normalRenderTarget.texture.minFilter=Xt,this.normalRenderTarget.texture.magFilter=Xt,this.normalRenderTarget.texture.type=ni}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this.normalMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.resolution.set(e,t),this.renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);let{x:i,y:s}=this.renderResolution;this.beautyRenderTarget.setSize(i,s),this.normalRenderTarget.setSize(i,s),this.fsQuad.material.uniforms.resolution.value.set(i,s,1/i,1/s)}setPixelSize(e){this.pixelSize=e,this.setSize(this.resolution.x,this.resolution.y)}render(e,t){let i=this.fsQuad.material.uniforms;i.normalEdgeStrength.value=this.normalEdgeStrength,i.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this.beautyRenderTarget),e.render(this.scene,this.camera);let s=this.scene.overrideMaterial;e.setRenderTarget(this.normalRenderTarget),this.scene.overrideMaterial=this.normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=s,i.tDiffuse.value=this.beautyRenderTarget.texture,i.tDepth.value=this.beautyRenderTarget.depthTexture,i.tNormal.value=this.normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this.fsQuad.render(e)}createPixelatedMaterial(){return new gn({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Rt(this.renderResolution.x,this.renderResolution.y,1/this.renderResolution.x,1/this.renderResolution.y)},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}};var Nh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ro=class extends jn{constructor(){super();let e=Nh;this.uniforms=lr.clone(e.uniforms),this.material=new po({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===or?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Mt={w:10,h:3.2,d:9},me={w:5,d:4.5},Oe={x1:-14,x2:-5,z1:-4.5,z2:4.5,h:3.4},Et={x1:-14,x2:-5,z1:-4.5,z2:4.5,y:3.4,h:3.4},Bs={z1:-1.5,z2:1.5,h:2.4},Cn=3.4,rt={x1:-13,x2:-6.5,z1:2,z2:3.4,steps:20,rise:Cn/20,run:6.5/20};var Hn=1.95,zn=3.45,Uo=rt.x1-.05,Fo=rt.x2+.05,Ze={x1:-18,x2:-14,z1:-1,z2:1,h:2.6},He={x1:-18,x2:-14,z1:1,z2:3.5,h:2.6},Ge={x1:-18,x2:-14,z1:-4.5,z2:-1,h:2.8},xe={x1:-22,x2:-18,z1:-2,z2:2,h:2.8},hr=3.5,fg=-16,Go={dog:{eyeHeight:.3,speed:2.2,fov:95,bobAmt:.018,bobSpeed:9}},N={bg:2775692,fog:3827864,floor:11040840,wall:12597256,ceiling:14188576,couch:14702608,couchDark:12072960,cushion:15769600,pillow1:13379648,pillow2:7880872,rug:13383704,rugBorder:8919056,table:9065008,tableDark:6961696,tvBody:3158064,screen:526352,screenOn:16775408,tvStand:6307888,winGlass:13164780,winFrame:10510384,lampBase:12617760,lampShade:15777856,lampShadeIn:16769120,potClay:11556912,plantGreen:2783804,plantLight:5818448,flower1:14696608,flower2:16763968,flowerPink:16740544,flowerTulip:13379712,grass:1731112,treeLeaf:936476,treeBark:6967360,cherry:2785344,cherryDeep:1728552,chrome:12104880,gold:13668378,ledAccent:16763972,bookRed:13115424,bookBlue:2113696,path:14206128},pg=[{id:"couch",x1:-1.75,x2:1.75,z1:-4.5,z2:-2.98,floor:0},{id:"couch_arm_l",x1:-1.84,x2:-1.47,z1:-4.5,z2:-2.98,floor:0},{id:"couch_arm_r",x1:1.47,x2:1.84,z1:-4.5,z2:-2.98,floor:0},{id:"couch_back_p",x1:-1.62,x2:1.62,z1:-4.5,z2:-4.06,floor:0},{id:"table",x1:-1.25,x2:1.25,z1:-.15,z2:1.18,floor:0},{id:"tvstand",x1:-.95,x2:.95,z1:3.45,z2:4.05,floor:0},{id:"sidetab",x1:1.9,x2:2.58,z1:-3.58,z2:-2.98,floor:0},{id:"sidetab2",x1:-2.58,x2:-1.9,z1:-3.58,z2:-2.98,floor:0},{id:"plant",x1:4,x2:4.95,z1:-4.2,z2:-3.4,floor:0},{id:"lamp",x1:-4.1,x2:-3.5,z1:2.08,z2:2.72,floor:0},{id:"div_s",x1:-5.2,x2:-4.8,z1:-4.5,z2:Bs.z1,floor:0},{id:"div_n",x1:-5.2,x2:-4.8,z1:Bs.z2,z2:4.5,floor:0},{id:"kctr_s",x1:-13.5,x2:-5.6,z1:-4.5,z2:-3.1,floor:0},{id:"kfridge",x1:-6.2,x2:-5.1,z1:-2.4,z2:-1.6,floor:0},{id:"kisle",x1:-11.4,x2:-7.6,z1:-.7,z2:.7,floor:0},{id:"kwall_n",x1:-14.1,x2:-4.9,z1:4.3,z2:4.7,floor:0},{id:"bed",x1:-11.7,x2:-9.3,z1:-4.5,z2:-1.4,floor:1},{id:"bdrm_rw",x1:-5.2,x2:-4.8,z1:-4.5,z2:4.5,floor:1},{id:"bathtub",x1:-17.89,x2:-17.07,z1:1.7,z2:3.4},{id:"toilet",x1:-14.8,x2:-14.44,z1:1.64,z2:2.31},{id:"vanity",x1:-14.98,x2:-14.26,z1:1.16,z2:1.64},{id:"desk",x1:-20.2,x2:-18.6,z1:-1.88,z2:-1.08},{id:"bookshelf",x1:-22.1,x2:-17.86,z1:1.71,z2:1.97},{id:"dine_table",x1:-17.1,x2:-14.9,z1:-3.25,z2:-2.25},{id:"office_chair",x1:-20.3,x2:-19.86,z1:-1.67,z2:-1.23}],Vh="dog",Nt=!1,Co=!1,Tl=!1,Bh=!1,mg=[],dr=Go.dog.eyeHeight,Di=Go.dog.eyeHeight;var ns=null;var yn=0,Hs=0,yi=0,Rn=0,Os=[];function Ui(n){Os.push({mesh:n,trueOrigPos:n.position.clone(),trueOrigRot:{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},origPos:n.position.clone(),origRot:{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},active:!1,t:0,dir:new at})}function gg(n){let e=Sn+(Math.random()-.5)*1.2;n.dir.set(Math.sin(e),Math.cos(e)),n.active=!0,n.t=0}function _g(n){Os.forEach(e=>{if(!e.active)return;e.t=Math.min(e.t+n*2.4,1);let t=1-Math.pow(1-e.t,3),i=t*.6;e.mesh.position.x=e.origPos.x+e.dir.x*i,e.mesh.position.z=e.origPos.z+e.dir.y*i,e.mesh.position.y=e.origPos.y+Math.sin(e.t*Math.PI)*.15,e.mesh.rotation.x=e.origRot.x+Math.sin(e.t*Math.PI)*.7,e.mesh.rotation.z=e.origRot.z+e.dir.x*t*.8,e.t>=1&&(e.active=!1,e.origPos.set(e.mesh.position.x,e.origPos.y,e.mesh.position.z),e.origRot.x=e.mesh.rotation.x,e.origRot.z=e.mesh.rotation.z)})}var At=!1,si=0,Wh=[],Xh=[],No=[];function _i(n,e,t=1){n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=e?0:t,e&&(n.visible=!0),Xh.push({mesh:n,fadeIn:e,maxOpacity:t})}var is=[],Oh=0,he={dogOnCouch:!1,dogOnCouchBack:!1,dogCouchSeatStory:!1,dogCouchAttempts:0,dogWindowTried:!1,dogWindowDone:!1,dogSmellDone:!1,dogHearDone:!1,dogBarkedCount:0,dogLaidDown:!1,dogRestedDone:!1,dogForageDone:!1,dogLoafDone:!1,dogPlayDone:!1,dogInvestigateDone:!1,dogOfficeTimeAccum:0},Ae=new z(0,0,2.5),Sn=0,ri=0,Bo=!1,C=new uo;C.background=new et(2775692);C.fog=new ho(10470632,.004);var Gt=new rn(95,innerWidth/innerHeight,.04,60),Pn=new tr({antialias:!1});Pn.setSize(innerWidth,innerHeight);Pn.setPixelRatio(1);Pn.shadowMap.enabled=!0;Pn.shadowMap.type=pl;Pn.outputColorSpace=Jt;Pn.toneMapping=or;Pn.toneMappingExposure=1.1;document.getElementById("canvas-container").appendChild(Pn.domElement);var Vo=new To(Pn),Il=new Ao(2,C,Gt);Il.depthEdgeStrength=.45;Il.normalEdgeStrength=.3;Vo.addPass(Il);Vo.addPass(new Ro);function Pt(n,e,t,i,s){i=Math.min(i||.06,Math.min(n,e,t)*.44),s=s||12;let r=new Y(n,e,t,s,s,s),o=r.attributes.position,a=n/2-i,l=e/2-i,c=t/2-i;for(let h=0;h<o.count;h++){let d=o.getX(h),u=o.getY(h),p=o.getZ(h),g=Math.max(-a,Math.min(a,d)),_=Math.max(-l,Math.min(l,u)),m=Math.max(-c,Math.min(c,p)),f=d-g,E=u-_,x=p-m,A=Math.sqrt(f*f+E*E+x*x);if(A>1e-4){let U=i/A;o.setXYZ(h,g+f*U,_+E*U,m+x*U)}}return o.needsUpdate=!0,r.computeVertexNormals(),r}function vt(n,e,t,i,s){let r=document.createElement("canvas");r.width=e||512,r.height=t||512,n(r.getContext("2d"),r.width,r.height);let o=new fo(r);return o.wrapS=o.wrapT=$s,o.repeat.set(i||1,s||1),o}var Ll=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,e,0);i.addColorStop(0,"#C8A870"),i.addColorStop(.18,"#D4B880"),i.addColorStop(.38,"#C0A068"),i.addColorStop(.58,"#CCAC74"),i.addColorStop(.8,"#BCA060"),i.addColorStop(1,"#C8A870"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(100,70,30,0.10)",n.lineWidth=.7;for(let r=0;r<40;r++){let o=Math.random()*e*1.1-e*.05;n.beginPath(),n.moveTo(o,0);let a=o;for(let l=0;l<=t;l+=14)a+=(Math.random()-.5)*2.8,n.lineTo(a,l);n.stroke()}n.strokeStyle="rgba(90,60,20,0.30)",n.lineWidth=1.6,[.33,.66].forEach(r=>{n.beginPath(),n.moveTo(0,r*t),n.lineTo(e,r*t),n.stroke()}),n.strokeStyle="rgba(90,60,20,0.18)",n.lineWidth=1,[.25,.5,.75].forEach(r=>{n.beginPath(),n.moveTo(r*e,0),n.lineTo(r*e,t/3),n.stroke()}),[.125,.375,.625,.875].forEach(r=>{n.beginPath(),n.moveTo(r*e,t/3),n.lineTo(r*e,t*2/3),n.stroke()}),[.25,.5,.75].forEach(r=>{n.beginPath(),n.moveTo(r*e,t*2/3),n.lineTo(r*e,t),n.stroke()}),[[.28,.18],[.74,.52],[.15,.8],[.61,.78]].forEach(([r,o])=>{let a=n.createRadialGradient(r*e,o*t,0,r*e,o*t,16);a.addColorStop(0,"rgba(90,55,18,0.22)"),a.addColorStop(.5,"rgba(110,72,25,0.10)"),a.addColorStop(1,"rgba(110,72,25,0)"),n.fillStyle=a,n.fillRect(r*e-18,o*t-18,36,36)});let s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(255,215,150,0.07)"),s.addColorStop(.5,"rgba(255,215,150,0.02)"),s.addColorStop(1,"rgba(255,215,150,0.06)"),n.fillStyle=s,n.fillRect(0,0,e,t),[[.5,.4],[.52,.68],[.48,.55],[.55,.22]].forEach(([r,o])=>{let a=n.createRadialGradient(r*e,o*t,0,r*e,o*t,e*.12);a.addColorStop(0,"rgba(80,50,18,0.10)"),a.addColorStop(1,"rgba(80,50,18,0)"),n.fillStyle=a,n.fillRect(r*e-e*.13,o*t-e*.13,e*.26,e*.26)}),n.strokeStyle="rgba(65,38,10,0.12)",n.lineWidth=.9,[[.1,.32,.22,.36],[.68,.14,.8,.18],[.3,.72,.38,.78],[.55,.48,.66,.52]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r*e,o*t),n.lineTo(a*e,l*t),n.stroke()});for(let r=0;r<18;r++){let o=Math.random()*e,a=Math.random()*t;n.fillStyle=`rgba(70,42,12,${.07+Math.random()*.08})`,n.beginPath(),n.ellipse(o,a,2+Math.random()*3,1+Math.random()*2,Math.random()*Math.PI,0,Math.PI*2),n.fill()}},1024,512,5,4),Wo=vt((n,e,t)=>{n.fillStyle="#808080",n.fillRect(0,0,e,t),n.strokeStyle="rgba(255,255,255,0.14)",n.lineWidth=.8;for(let i=0;i<32;i++){let s=Math.random()*e;n.beginPath(),n.moveTo(s,0),n.bezierCurveTo(s+(Math.random()-.5)*18,t*.35,s+(Math.random()-.5)*18,t*.65,s+(Math.random()-.5)*10,t),n.stroke()}n.strokeStyle="rgba(0,0,0,0.44)",n.lineWidth=2.5,[.25,.5,.75].forEach(i=>{n.beginPath(),n.moveTo(i*e,0),n.lineTo(i*e,t),n.stroke()}),[.33,.66].forEach(i=>{n.beginPath(),n.moveTo(0,i*t),n.lineTo(e,i*t),n.stroke()})},512,512,4,3),mr=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#C03808"),i.addColorStop(.5,"#B03008"),i.addColorStop(1,"#982808"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=32;for(let r=0;r<e;r+=s*2)n.fillStyle="rgba(180,50,10,0.28)",n.fillRect(r,0,s,t);n.strokeStyle="rgba(255,200,60,0.30)",n.lineWidth=1.5;for(let r=s;r<e;r+=s*2)n.beginPath(),n.moveTo(r,0),n.lineTo(r,t),n.stroke(),n.beginPath(),n.moveTo(r+s,0),n.lineTo(r+s,t),n.stroke();for(let r=0;r<2e3;r++){let o=Math.random()*e,a=Math.random()*t,l=Math.random()*.05;n.fillStyle=Math.random()>.5?`rgba(255,160,60,${l})`:`rgba(80,10,0,${l})`,n.fillRect(o,a,2+Math.random()*4,1)}n.fillStyle="rgba(255,210,60,0.22)";for(let r=0;r<40;r++){let o=e*(r*.025+.01)%e,a=t*(r*.037+.02)%t;n.beginPath(),n.arc(o,a,2.5,0,Math.PI*2),n.fill()}},512,512,3,2),C_=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,e,t);i.addColorStop(0,"#5AA0D0"),i.addColorStop(.5,"#4080B8"),i.addColorStop(1,"#306498"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(240,250,255,0.42)",n.lineWidth=4;for(let s=0;s<6;s++){let r=e*(s*.163+.07)%e,o=t*(s*.193+.05)%t;for(let a=10;a<90;a+=22)n.beginPath(),n.arc(r,o,a,0,Math.PI*2),n.stroke()}n.strokeStyle="rgba(180,220,250,0.40)",n.lineWidth=3;for(let s=0;s<8;s++){let r=e*(s*.11+.04)%e,o=t*(s*.137+.06)%t;n.beginPath(),n.moveTo(r,o+60),n.bezierCurveTo(r-26,o+38,r+24,o+18,r,o),n.stroke(),n.beginPath(),n.arc(r,o-12,7,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(255,240,180,0.35)";for(let s=0;s<28;s++){let r=e*(s*.029+.01)%e,o=t*(s*.037+.02)%t;n.beginPath(),n.arc(r,o,4,0,Math.PI*2),n.fill()}for(let s=0;s<1200;s++){let r=Math.random()*e,o=Math.random()*t,a=Math.random()*.04;n.fillStyle=Math.random()>.5?`rgba(220,240,255,${a})`:`rgba(20,40,80,${a})`,n.fillRect(r,o,1+Math.random()*2,1+Math.random()*2)}},512,512,3,2),zs=vt((n,e,t)=>{n.fillStyle="#888",n.fillRect(0,0,e,t);for(let i=0;i<4e3;i++){let s=Math.random()*e,r=Math.random()*t,o=.03+Math.random()*.08;n.fillStyle=Math.random()>.5?`rgba(255,255,255,${o})`:`rgba(0,0,0,${o})`,n.beginPath(),n.arc(s,r,.5+Math.random()*2,0,Math.PI*2),n.fill()}},512,512,3,2),ss=vt((n,e,t)=>{n.fillStyle="#7DAA90",n.fillRect(0,0,e,t);let i=3;for(let s=0;s<e;s+=i*2)n.fillStyle="rgba(120,180,148,0.20)",n.fillRect(s,0,i,t),n.fillStyle="rgba(40,80,58,0.12)",n.fillRect(s+i,0,i,t);for(let s=0;s<t;s+=i*2)n.fillStyle="rgba(40,80,58,0.10)",n.fillRect(0,s,e,i),n.fillStyle="rgba(120,180,148,0.14)",n.fillRect(0,s+i,e,i);for(let s=0;s<2800;s++){let r=Math.random()*e,o=Math.random()*t,a=Math.random()*.05;n.fillStyle=Math.random()>.5?`rgba(130,188,158,${a})`:`rgba(45,85,62,${a})`,n.fillRect(r,o,1,1+Math.random()*2)}},512,512,10,10),dn=vt((n,e,t)=>{n.fillStyle="#808080",n.fillRect(0,0,e,t);let i=3;for(let s=0;s<e;s+=i*2)n.fillStyle="rgba(255,255,255,0.26)",n.fillRect(s,0,i,t),n.fillStyle="rgba(0,0,0,0.20)",n.fillRect(s+i,0,i,t);for(let s=0;s<t;s+=i*2)n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(0,s,e,i),n.fillStyle="rgba(0,0,0,0.14)",n.fillRect(0,s+i,e,i)},512,512,10,10),Vt=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,e,0);i.addColorStop(0,"#C48040"),i.addColorStop(.4,"#B06828"),i.addColorStop(1,"#C48040"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,35,8,0.13)",n.lineWidth=1;for(let s=0;s<18;s++){let r=Math.random()*e,o=Math.random()*e;n.beginPath(),n.moveTo(r,0),n.bezierCurveTo(r+(Math.random()-.5)*24,t*.3,o+(Math.random()-.5)*24,t*.7,o,t),n.stroke()}[[.32,.45,14],[.68,.28,11],[.52,.72,9]].forEach(([s,r,o])=>{n.strokeStyle="rgba(55,28,6,0.10)",n.lineWidth=1.8,n.beginPath(),n.arc(s*e,r*t,o,0,Math.PI*2),n.stroke(),n.strokeStyle="rgba(55,28,6,0.04)",n.lineWidth=3,n.beginPath(),n.arc(s*e,r*t,o+2.5,0,Math.PI*2),n.stroke()}),n.fillStyle="rgba(40,18,4,0.06)",[[0,0,28,28],[e-28,0,28,28],[0,t-28,28,28],[e-28,t-28,28,28]].forEach(([s,r,o,a])=>n.fillRect(s,r,o,a))},256,256,2,2),Vn=vt((n,e,t)=>{n.fillStyle="#808080",n.fillRect(0,0,e,t),n.strokeStyle="rgba(255,255,255,0.12)",n.lineWidth=.8;for(let i=0;i<28;i++){let s=Math.random()*e;n.beginPath(),n.moveTo(s,0),n.bezierCurveTo(s+(Math.random()-.5)*16,t*.35,s+(Math.random()-.5)*16,t*.65,s+(Math.random()-.5)*10,t),n.stroke()}},256,256,2,2),Fi=vt((n,e,t)=>{let i=["#CC3010","#E06000","#F0A000","#D02060","#A01840","#E07010","#C84000","#F0C020","#882010","#C03818"],s=Math.floor(t/i.length);i.forEach((r,o)=>{n.fillStyle=r,n.fillRect(0,o*s,e,s+1)}),n.strokeStyle="rgba(255,220,80,0.45)",n.lineWidth=3;for(let r=0;r<=e;r+=24){n.beginPath();for(let o=0;o<t;o+=16)o===0?n.moveTo(r,o):n.lineTo(r+(o/16%2===0?0:12),o);n.stroke()}n.strokeStyle="rgba(80,10,0,0.55)",n.lineWidth=8,n.strokeRect(4,4,e-8,t-8),n.strokeStyle="rgba(255,180,20,0.40)",n.lineWidth=2,n.strokeRect(10,10,e-20,t-20);for(let r=0;r<2e3;r++){let o=Math.random()*e,a=Math.random()*t,l=Math.random()*.05;n.fillStyle=`rgba(0,0,0,${l})`,n.fillRect(o,a,1,2)}},256,256,5,4),yg=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#0A2A6C"),i.addColorStop(.2,"#1A4AA0"),i.addColorStop(.55,"#2A6ACC"),i.addColorStop(.78,"#4A8AE0"),i.addColorStop(1,"#6AAAE8"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=n.createRadialGradient(e*.7,t*.22,0,e*.7,t*.22,e*.14);s.addColorStop(0,"rgba(255,255,220,0.98)"),s.addColorStop(.25,"rgba(255,250,190,0.80)"),s.addColorStop(.6,"rgba(255,230,140,0.30)"),s.addColorStop(1,"rgba(255,220,120,0)"),n.fillStyle=s,n.fillRect(0,0,e,t*.5);let r=(a,l,c)=>{n.fillStyle="rgba(255,255,255,0.92)",[[0,0,1],[-.55,.15,.78],[.55,.18,.72],[-.28,-.18,.62],[.3,-.14,.6],[0,-.3,.5]].forEach(([h,d,u])=>{n.beginPath(),n.ellipse(a+h*c*80,l+d*c*60,c*80*u,c*60*u,0,0,Math.PI*2),n.fill()}),n.fillStyle="rgba(220,240,255,0.55)",n.beginPath(),n.ellipse(a,l+c*18,c*75,c*20,0,0,Math.PI*2),n.fill()};r(e*.18,t*.25,.9),r(e*.62,t*.15,1.1),r(e*.85,t*.3,.75),r(e*.4,t*.35,.65);let o=n.createLinearGradient(0,t*.7,0,t);o.addColorStop(0,"rgba(120,200,255,0)"),o.addColorStop(1,"rgba(160,220,255,0.40)"),n.fillStyle=o,n.fillRect(0,t*.7,e,t*.3)},1024,512,1,1),_r=vt((n,e,t)=>{n.fillStyle="#A8A8A8",n.fillRect(0,0,e,t),n.strokeStyle="rgba(60,60,60,0.18)",n.lineWidth=1;for(let i=0;i<40;i++){let s=Math.random()*e;n.beginPath(),n.moveTo(s,0);let r=s;for(let o=0;o<=t;o+=14)r+=(Math.random()-.5)*3,n.lineTo(r,o);n.stroke()}n.strokeStyle="rgba(40,40,40,0.25)",n.lineWidth=2.5,[.33,.66].forEach(i=>{n.beginPath(),n.moveTo(0,i*t),n.lineTo(e,i*t),n.stroke()});for(let i=0;i<600;i++){let s=Math.random()*e,r=Math.random()*t,o=Math.random()>.5?200:60;n.fillStyle=`rgba(${o},${o},${o},0.07)`,n.fillRect(s,r,1+Math.random()*3,1)}},512,512,5,4),Yh=vt((n,e,t)=>{n.fillStyle="#E8D4A8",n.fillRect(0,0,e,t);let i=10;n.strokeStyle="rgba(110,80,30,0.16)",n.lineWidth=1.2;for(let s=0;s<e+i;s+=i)for(let r=0;r<t+i;r+=i*.9)n.beginPath(),n.moveTo(s,r),n.lineTo(s+i/2,r+i*.45),n.lineTo(s+i,r),n.stroke();n.strokeStyle="rgba(200,170,105,0.18)",n.lineWidth=.7;for(let s=i/2;s<e+i;s+=i)for(let r=i*.45;r<t+i;r+=i*.9)n.beginPath(),n.moveTo(s,r),n.lineTo(s+i/2,r+i*.45),n.lineTo(s+i,r),n.stroke();for(let s=0;s<1200;s++){let r=Math.random()*e,o=Math.random()*t,a=Math.random()*.04;n.fillStyle=`rgba(${150+Math.floor(Math.random()*60)},${120+Math.floor(Math.random()*50)},${70+Math.floor(Math.random()*40)},${a})`,n.fillRect(r,o,1,1+Math.random()*2)}},256,256,5,5),xg=vt((n,e,t)=>{let i=(s,r,o,a,l)=>{n.strokeStyle=`rgba(55,30,8,${l})`,n.lineWidth=.7,n.beginPath(),n.moveTo(s*e,r*t),n.lineTo((s+Math.cos(o)*a)*e,(r+Math.sin(o)*a)*t),n.stroke()};[[.22,.28],[.25,.32],[.23,.36],[.2,.4]].forEach(([s,r])=>i(s,r,-.15,.14,.26)),[[.24,.3],[.22,.34]].forEach(([s,r])=>i(s,r,-.12,.09,.14)),[[.68,.52],[.71,.55],[.69,.59]].forEach(([s,r])=>i(s,r,-.18,.11,.22))},512,512,1,1),Ht=vt((n,e,t)=>{n.fillStyle="#F2ECE4",n.fillRect(0,0,e,t);for(let i=0;i<900;i++){let s=Math.random()*e,r=Math.random()*t,o=Math.random()*.038,a=150+Math.floor(Math.random()*60);n.fillStyle=`rgba(${a},${a-10},${a-20},${o})`,n.beginPath(),n.arc(s,r,.4+Math.random()*1.2,0,Math.PI*2),n.fill()}},256,256,2,2),Al=vt((n,e,t)=>{n.fillStyle="#C0C0C0",n.fillRect(0,0,e,t);let i=3;for(let s=0;s<e;s+=i*2)n.fillStyle="rgba(80,80,80,0.13)",n.fillRect(s,0,i,t);for(let s=0;s<t;s+=i*2)n.fillStyle="rgba(80,80,80,0.11)",n.fillRect(0,s,e,i);for(let s=0;s<1800;s++){let r=Math.random()*e,o=Math.random()*t,a=100+Math.floor(Math.random()*110);n.fillStyle=`rgba(${a},${a},${a},0.06)`,n.fillRect(r,o,1,1+Math.random())}},256,256,10,10),Io=vt((n,e,t)=>{n.fillStyle="#F6F1E8",n.fillRect(0,0,e,t);for(let a=0;a<1800;a++){let l=Math.random()*.025;n.fillStyle=`rgba(120,100,70,${l})`,n.fillRect(Math.random()*e,Math.random()*t,1,1)}let i=(a,l,c,h,d,u)=>{n.save(),n.translate(a,l),n.rotate(h),n.strokeStyle=`rgba(${d},${u})`,n.lineWidth=.9,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(c*.25,-c*.18,c*.75,-c*.18,c,0),n.bezierCurveTo(c*.75,c*.18,c*.25,c*.18,0,0),n.stroke(),n.strokeStyle=`rgba(${d},${u*.6})`,n.lineWidth=.5,n.beginPath(),n.moveTo(0,0),n.lineTo(c,0),n.stroke();for(let p=1;p<5;p++){let g=p/5*c,_=Math.sin(p/5*Math.PI)*c*.14;n.beginPath(),n.moveTo(g,0),n.lineTo(g-c*.08,-_),n.stroke(),n.beginPath(),n.moveTo(g,0),n.lineTo(g-c*.08,_),n.stroke()}n.restore()},s="50,80,40",r="30,60,25";[[e*.22,t*.32,55,-.3,s,.7],[e*.58,t*.28,48,.2,s,.65],[e*.15,t*.6,42,-.5,r,.6],[e*.72,t*.55,60,.35,r,.7],[e*.4,t*.45,38,-.1,s,.55],[e*.5,t*.7,44,.6,"80,60,30",.55],[e*.3,t*.18,35,-.6,r,.5],[e*.65,t*.42,40,-.25,s,.6],[e*.8,t*.75,36,.8,r,.5],[e*.1,t*.8,50,-.4,s,.55]].forEach(a=>i(...a)),n.strokeStyle="rgba(60,90,45,0.28)",n.lineWidth=.8,[[e*.42,t],[e*.42,t*.1]].forEach(([a,l],c)=>{n.beginPath(),c===0&&(n.moveTo(a,l),n.bezierCurveTo(a+8,t*.7,a-6,t*.4,a+4,t*.1)),n.stroke()})},256,320,1,1),Lo=vt((n,e,t)=>{n.fillStyle="#EDE8E0",n.fillRect(0,0,e,t);for(let o=0;o<1200;o++)n.fillStyle=`rgba(100,80,55,${Math.random()*.018})`,n.fillRect(Math.random()*e,Math.random()*t,1+Math.random(),1+Math.random());let i=n.createRadialGradient(e*.35,t*.4,0,e*.35,t*.4,e*.4);i.addColorStop(0,"rgba(195,105,75,0.55)"),i.addColorStop(.6,"rgba(195,105,75,0.25)"),i.addColorStop(1,"rgba(195,105,75,0)"),n.fillStyle=i,n.beginPath(),n.ellipse(e*.35,t*.4,e*.32,t*.3,.3,0,Math.PI*2),n.fill();let s=n.createRadialGradient(e*.68,t*.58,0,e*.68,t*.58,e*.32);s.addColorStop(0,"rgba(120,155,110,0.52)"),s.addColorStop(.6,"rgba(120,155,110,0.22)"),s.addColorStop(1,"rgba(120,155,110,0)"),n.fillStyle=s,n.beginPath(),n.ellipse(e*.68,t*.58,e*.28,t*.28,-.4,0,Math.PI*2),n.fill();let r=n.createRadialGradient(e*.55,t*.22,0,e*.55,t*.22,e*.22);r.addColorStop(0,"rgba(215,160,155,0.48)"),r.addColorStop(1,"rgba(215,160,155,0)"),n.fillStyle=r,n.beginPath(),n.ellipse(e*.55,t*.22,e*.18,t*.16,0,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(50,42,35,0.22)",n.lineWidth=.8,n.beginPath(),n.moveTo(e*.18,t*.82),n.lineTo(e*.78,t*.18),n.stroke(),n.beginPath(),n.moveTo(e*.12,t*.55),n.bezierCurveTo(e*.35,t*.45,e*.6,t*.65,e*.88,t*.52),n.stroke()},256,320,1,1),Do=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,0,t*.6);i.addColorStop(0,"#D8E4EE"),i.addColorStop(1,"#EAE4D8"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#E0D8C8",n.fillRect(0,t*.6,e,t*.4),["rgba(170,180,165,0.55)","rgba(150,160,145,0.45)","rgba(130,145,125,0.38)"].forEach((r,o)=>{n.fillStyle=r,n.beginPath(),n.moveTo(0,t*(.55-o*.04)),n.bezierCurveTo(e*.2,t*(.45-o*.04),e*.4,t*(.5-o*.06),e*.55,t*(.42-o*.04)),n.bezierCurveTo(e*.7,t*(.35-o*.04),e*.85,t*(.48-o*.04),e,t*(.52-o*.04)),n.lineTo(e,t*.7),n.lineTo(0,t*.7),n.closePath(),n.fill()}),n.fillStyle="rgba(80,90,75,0.55)",n.fillRect(e*.72,t*.36,3,t*.24),n.beginPath(),n.arc(e*.735,t*.33,18,0,Math.PI*2),n.fill();let s=n.createLinearGradient(0,t*.6,0,t);s.addColorStop(0,"rgba(140,155,120,0.4)"),s.addColorStop(1,"rgba(100,115,85,0.55)"),n.fillStyle=s,n.fillRect(0,t*.6,e,t*.4);for(let r=0;r<1500;r++)n.fillStyle=`rgba(80,70,55,${Math.random()*.018})`,n.fillRect(Math.random()*e,Math.random()*t,1,1)},256,320,1,1),P_=vt((n,e,t)=>{let i=n.createLinearGradient(0,0,0,t*.62);i.addColorStop(0,"#0A0E1E"),i.addColorStop(.4,"#1A1A3A"),i.addColorStop(1,"#2A2048"),n.fillStyle=i,n.fillRect(0,0,e,t*.62),n.fillStyle="#101828",n.beginPath(),n.moveTo(0,t*.62),n.lineTo(e*.08,t*.38),n.lineTo(e*.18,t*.5),n.lineTo(e*.3,t*.28),n.lineTo(e*.42,t*.44),n.lineTo(e*.55,t*.22),n.lineTo(e*.68,t*.4),n.lineTo(e*.8,t*.32),n.lineTo(e*.92,t*.48),n.lineTo(e,t*.36),n.lineTo(e,t*.62),n.closePath(),n.fill(),n.fillStyle="#080F18",n.beginPath(),n.moveTo(0,t*.62),n.bezierCurveTo(e*.15,t*.58,e*.35,t*.6,e*.5,t*.56),n.bezierCurveTo(e*.65,t*.52,e*.82,t*.59,e,t*.55),n.lineTo(e,t*.62),n.closePath(),n.fill();let s=n.createLinearGradient(0,t*.62,0,t);s.addColorStop(0,"#0D1830"),s.addColorStop(.5,"#101C38"),s.addColorStop(1,"#0A1222"),n.fillStyle=s,n.fillRect(0,t*.62,e,t*.38);let r=n.createRadialGradient(e*.72,t*.14,0,e*.72,t*.14,e*.055);r.addColorStop(0,"rgba(240,235,210,1)"),r.addColorStop(.6,"rgba(200,195,170,0.6)"),r.addColorStop(1,"rgba(160,155,130,0)"),n.fillStyle=r,n.fillRect(e*.62,0,e*.22,t*.3);let o=n.createLinearGradient(e*.68,t*.62,e*.76,t);o.addColorStop(0,"rgba(200,195,160,0.15)"),o.addColorStop(.5,"rgba(200,190,140,0.08)"),o.addColorStop(1,"rgba(200,190,140,0)"),n.fillStyle=o,n.fillRect(e*.65,t*.62,e*.14,t*.38);for(let l=0;l<80;l++){let c=Math.random()*e,h=Math.random()*t*.55,d=.4+Math.random()*.6;n.fillStyle=`rgba(255,255,240,${d})`,n.beginPath(),n.arc(c,h,.5+Math.random()*1,0,Math.PI*2),n.fill()}n.strokeStyle="rgba(0,0,0,0.06)",n.lineWidth=1;for(let l=0;l<t;l+=3)n.beginPath(),n.moveTo(0,l),n.lineTo(e,l),n.stroke();let a=n.createRadialGradient(e/2,t/2,t*.2,e/2,t/2,t*.72);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=a,n.fillRect(0,0,e,t)},512,288,1,1),vg=new _o(16767136,.75);C.add(vg);var Mg=new go(16756800,6299664,.6);C.add(Mg);var qh=new En(16775920,.18,10);qh.position.set(0,.06,.5);C.add(qh);var Xn=new rr(16774632,1.4);Xn.position.set(1,3.5,-10);Xn.castShadow=!0;Xn.shadow.mapSize.set(2048,2048);Xn.shadow.camera.near=.5;Xn.shadow.camera.far=40;Xn.shadow.camera.left=Xn.shadow.camera.bottom=-12;Xn.shadow.camera.right=Xn.shadow.camera.top=12;Xn.shadow.bias=-8e-4;Xn.shadow.radius=1.5;C.add(Xn);var yr=new ts(16773336,.55,18,Math.PI/5,.7,1);yr.position.set(0,2.5,-5.5);yr.target.position.set(.4,0,1.2);yr.castShadow=!1;C.add(yr);C.add(yr.target);var Zh=new En(16775408,.5,10);Zh.position.set(0,1.8,-4.8);C.add(Zh);var Ni=new ts(16772808,1.8,8,Math.PI/3.5,.5,1.5);Ni.position.set(-3.8,2.45,2.4);Ni.castShadow=!0;Ni.shadow.mapSize.set(512,512);Ni.shadow.bias=-.002;Ni.target.position.set(-3.8,0,2.4);C.add(Ni);C.add(Ni.target);var Dl=new En(16772808,.3,6);Dl.position.set(-3.8,1.8,2.4);C.add(Dl);var Jh=new rr(15660799,.3);Jh.position.set(0,2,6);C.add(Jh);var $h=new En(16772812,.12,4);$h.position.set(0,.14,-3.1);C.add($h);var Kh=new En(11192541,.12,5);Kh.position.set(0,1.4,me.d-1.5);C.add(Kh);var xi=null,Rl=null,Qh=[];function le(n,e,t,i){i=i||{};let s=new On({color:n});return i.map&&(s.map=i.map),i.transp&&(s.transparent=!0,s.opacity=i.opacity??.5,s.depthWrite=!1),i.side&&(s.side=i.side),s}function ft(n,e,t,i){i=i||{};let s=new On({color:n});return i.transp&&(s.transparent=!0,s.opacity=i.opacity??.28,s.depthWrite=!1),i.map&&(s.map=i.map),i.side&&(s.side=i.side),s}function Zt(n,e,t,i,s,r,o,a,l){l=l||{};let c=Pt(n,e,t,a||.06,l.segs||10),h=l.mat||le(i,l.r,l.metal,l),d=new I(c,h);return d.position.set(s,r,o),d.castShadow=!l.noShadow,d.receiveShadow=!l.noShadow,C.add(d),d}function tt(n,e,t,i,s,r,o,a){a=a||{};let l=new Y(n,e,t,a.segs||1,a.segs||1,a.segs||1),c=a.mat||le(i,a.r,a.metal,a),h=new I(l,c);return h.position.set(s,r,o),a.ry&&(h.rotation.y=a.ry),h.castShadow=!a.noShadow,h.receiveShadow=!a.noShadow,C.add(h),h}function qe(n,e,t,i,s,r,o,a,l){l=l||{};let c=new _n(n,e,t,i),h=l.mat||le(s,l.r,l.metal,l),d=new I(c,h);return d.position.set(r,o,a),d.castShadow=d.receiveShadow=!l.noShadow,C.add(d),d}function nt(n,e,t,i,s,r,o){o=o||{};let a=new Nn(n,e,Math.ceil(e/2)),l=o.mat||le(t,o.r??.85,o.metal??0,o),c=new I(a,l);return c.position.set(i,s,r),c.castShadow=c.receiveShadow=!o.noShadow,C.add(c),c}var jh=.74,Eg=1.34,ur=5,eu=.28;function tu(){return jh-eu*si}function nu(){return Eg-eu*si}function Sg(n,e){let t=tu(),i=nu();if(n>-1.75&&n<1.75&&e>-4.5&&e<-4.06&&Ae.y>=i-.06)return i;if(n>-1.75&&n<1.75&&e>-4.5&&e<-2.98&&Ae.y>=t-.06)return t;if(n<Oe.x1&&n>xe.x1&&e>Ge.z1&&e<He.z2){if(At){if(Math.abs(n+16)<1.1&&Math.abs(e+2.75)<.52&&Ae.y>=.24)return .34;if(Math.abs(n+14.62)<.22&&Math.abs(e-2)<.38&&Ae.y>=.15)return .25;if(Math.abs(n+17.48)<.5&&Math.abs(e-2.55)<.95&&Ae.y>=.22)return .32;if(Math.abs(n+20.08)<.26&&Math.abs(e+1.45)<.26&&Ae.y>=.04)return .14}return 0}if(n>Oe.x1&&n<rt.x2+.1&&e>rt.z1-.18&&e<rt.z2+.18){let s=Math.min((rt.x2-n)/(rt.x2-rt.x1),1),o=Math.max(0,Math.min(Math.floor(s*rt.steps),rt.steps))*rt.rise;if(At){let a=s*Cn;return Ae.y<a-.4?0:a}return Ae.y<o-.3?0:o}if(n>Oe.x1&&n<Oe.x2&&Math.abs(e)<me.d&&Hs>Cn*.55){let s=Cn+.34;return At&&Math.abs(n+10.5)<1.1&&Math.abs(e+3)<1.5&&Ae.y>=s-.12?s:Cn}return 0}function Cl(n,e){let i=Hs>1.8;if(n>me.w-.28&&e>-me.d&&e<me.d||n>Oe.x1-.4-.28&&n<Oe.x1+.28&&e>-me.d&&e<me.d&&e>=Ze.z2||e>me.d-.28&&n>Oe.x1&&n<me.w&&!(typeof pr<"u"&&pr&&Math.abs(n+6)<.9)||e<-(me.d-.28)&&e>-(me.d+.55)&&n>Oe.x1&&n<me.w||e>Ze.z2-.28&&e<Ze.z2+.28&&(n<-16.5-.02&&n>Ze.x1-.28||n>-15.5+.02&&n<Ze.x2+.28)||Math.abs(n-He.x1)<.28&&e>Ze.z2+.05&&e<He.z2||Math.abs(e-He.z2)<.28&&n>He.x1&&n<He.x2||Math.abs(n-Ge.x1)<.28&&e<Ze.z1-.05&&e>Ge.z1||Math.abs(e-Ge.z1)<.28&&n>Ge.x1&&n<Ge.x2||Math.abs(n-Ze.x1)<.28&&(e<Ze.z1-.05&&e>xe.z1||e>Ze.z2+.05&&e<xe.z2)||Math.abs(n-xe.x1)<.28&&e>xe.z1&&e<xe.z2||Math.abs(e-xe.z2)<.28&&n>xe.x1&&n<xe.x2||Math.abs(e-xe.z1)<.28&&n>xe.x1&&n<xe.x2)return!0;if(!At&&n>Oe.x1&&n<rt.x2+.1&&e>rt.z1-.18&&e<rt.z2+.18){let s=(rt.x2-n)/(rt.x2-rt.x1),o=Math.max(0,Math.min(Math.floor(s*rt.steps),rt.steps))*rt.rise;if(!(Ae.y<o-.3)){if(o>Hs+.04)return!0}}for(let s of pg)if(!(s.floor===0&&i)&&!(s.floor===1&&!i)&&!(s.id==="couch"&&(he.dogOnCouch||he.dogOnCouchBack||he.dogCouchAttempts>=2))&&!((s.id==="couch_arm_l"||s.id==="couch_arm_r")&&(!he.dogOnCouch||he.dogOnCouchBack))&&!(s.id==="couch_back_p"&&(!he.dogOnCouch||he.dogOnCouchBack||Ae.y>=jh+.35))&&!(s.id==="bed"&&(he.dogLaidDown||At))&&!(s.id==="dine_table"&&At&&Ae.y>=.24)&&!(s.id==="toilet"&&At&&Ae.y>=.15)&&!(s.id==="bathtub"&&At&&Ae.y>=.22)&&!(s.id==="vanity"&&At&&Ae.y>=.45)&&!(s.id==="office_chair"&&At&&Ae.y>=.04)&&n+.28>s.x1&&n-.28<s.x2&&e+.28>s.z1&&e-.28<s.z2)return!0;return!1}function bg(n,e){let t=Ae.x+n,i=Ae.z+e;if(!Cl(t,i)){Ae.x=t,Ae.z=i;return}if(!Cl(t,Ae.z)){Ae.x=t;return}Cl(Ae.x,i)||(Ae.z=i)}function wg(){let n=new Ct(Mt.w,Mt.d,40,30),e=new I(n,ft(N.floor,.52,.02,{map:Ll,bumpMap:Wo,bumpScale:.038,roughMap:_r,clearcoat:.08,ccRough:.55}));e.rotation.x=-Math.PI/2,e.position.y=.002,e.receiveShadow=!0,C.add(e);let t=new I(new Y(Mt.w,.22,Mt.d),le(N.floor,.6,.01));t.position.set(0,-.11,0),C.add(t);let i=2,s=1.4,r=0,o=-2,a=r-i/2,l=r+i/2,c=o-s/2,h=o+s/2,d=le(N.ceiling,.92,0),u=(Re,be,Be,Ye)=>{let ve=new I(new Ct(Re,be),d);ve.rotation.x=Math.PI/2,ve.position.set(Be,Mt.h,Ye),ve.receiveShadow=!0,C.add(ve)};u(me.w+a,Mt.d,-me.w+(me.w+a)/2,0),u(me.w-l,Mt.d,l+(me.w-l)/2,0),u(i,me.d+c,r,-me.d+(me.d+c)/2),u(i,me.d-h,r,h+(me.d-h)/2);let p=.14,g=.55,_=le(N.ceiling,.88,0,{side:wt}),m=(Re,be,Be,Ye,ve)=>{let ke=new I(new Y(Re,be,Be),_);ke.position.set(Ye,Mt.h+be/2,ve),C.add(ke)};m(i+p*2,g,p,r,c-p/2),m(i+p*2,g,p,r,h+p/2),m(p,g,s+p*2,a-p/2,o),m(p,g,s+p*2,l+p/2,o);let f=new on({color:13692671,transparent:!0,opacity:.22,depthWrite:!1,side:wt}),E=new I(new Y(i,.02,s),f);E.position.set(r,Mt.h+g,o),C.add(E);let x=ft(N.chrome,.18,.8,{clearcoat:.4,ccRough:.2}),A=.07,U=.06,P=Mt.h+g;[[i+A*2,U,A,r,P,c-A/2],[i+A*2,U,A,r,P,h+A/2],[A,U,s,a-A/2,P,o],[A,U,s,l+A/2,P,o]].forEach(([Re,be,Be,Ye,ve,ke])=>{let k=new I(new Y(Re,be,Be),x);k.position.set(Ye,ve,ke),C.add(k)});let L=new I(new Y(i,U,A*.6),x);L.position.set(r,P,o),C.add(L);let $=new I(new Y(A*.6,U,s),x);$.position.set(r,P,o),C.add($);let M=new ts(16775408,2.2,7,Math.PI/7,.55,1.2);M.position.set(r,Mt.h+g-.05,o),M.target.position.set(r,0,o),M.castShadow=!0,M.shadow.mapSize.set(512,512),M.shadow.bias=-.003,C.add(M),C.add(M.target);let w=le(N.wall,.9,0,{map:mr,bumpMap:zs,bumpScale:.042,side:wt}),X=new I(new Y(.15,Mt.h,Mt.d),w);X.position.set(me.w+.075,Mt.h/2,0),X.receiveShadow=!0,C.add(X);let q=.15,_e=me.d-Bs.z2,O=Mt.h-Bs.h,G=Oe.h;[[_e,G,-(Bs.z2+_e/2),G/2],[_e,G,Bs.z2+_e/2,G/2]].forEach(([Re,be,Be,Ye])=>{let ve=new I(new Y(q,be,Re),w);ve.position.set(-me.w-q/2,Ye,Be),ve.receiveShadow=!0,C.add(ve)});{let Re=me.d+.2,be=.4,Be=.55,Ye=2.7,ve=1.6,ke=Ye-Be,k=new un({color:13166832,roughness:.04,metalness:.06,transparent:!0,opacity:.28,side:wt}),Ke=le(N.winFrame,.78,.02);[[-4.4,Mt.h,1.2],[0,Mt.h,4.4],[4.4,Mt.h,1.2]].forEach(([Qe,ze,xt])=>{let it=new I(new Y(xt,ze,be),w);it.position.set(Qe,ze/2,Re),it.receiveShadow=!0,C.add(it)}),[-3,3].forEach(Qe=>{let ze=new I(new Y(ve,Be,be),w);ze.position.set(Qe,Be/2,Re),ze.receiveShadow=!0,C.add(ze);let xt=Mt.h-Ye,it=new I(new Y(ve,xt,be),w);it.position.set(Qe,Ye+xt/2,Re),it.receiveShadow=!0,C.add(it);let b=Re-be/2,v=new I(new Y(ve-.06,ke-.06,.04),k);v.position.set(Qe,Be+ke/2,b),C.add(v);let W=b;[[ve+.12,.08,0,Be-.04],[ve+.12,.08,0,Ye+.04],[.08,ke+.1,-ve/2-.04,0],[.08,ke+.1,ve/2+.04,0]].forEach(([Le,se,Me,Je])=>{let Ve=new I(new Y(Le,se,.06),Ke);Ve.position.set(Qe+Me,Be+ke/2+Je,W),C.add(Ve)});let fe=new I(new Y(ve-.06,.06,.06),Ke);fe.position.set(Qe,Be+ke/2,W),C.add(fe);let de=new I(new Y(.06,ke-.06,.06),Ke);de.position.set(Qe,Be+ke/2,W),C.add(de);let ie=new I(new Y(ve+.12,.05,.22),Ke);ie.position.set(Qe,Be,b-.11),C.add(ie)})}let oe=4.2,re=2.2,ne=.75,ue=ne+re,ce=(Mt.w-oe)/2,Ue=Mt.h-ue,j=ne,ae=-me.d-.075;[[ce,Mt.h,-me.w+ce/2,Mt.h/2],[ce,Mt.h,me.w-ce/2,Mt.h/2],[oe,Ue,0,ue+Ue/2],[oe,j,0,j/2]].forEach(([Re,be,Be,Ye])=>{let ve=new I(new Y(Re,be,.15),w);ve.position.set(Be,Ye,ae),ve.receiveShadow=!0,C.add(ve)});let we=ft(N.gold,.5,.48,{clearcoat:.06,ccRough:.55});[[Mt.w,.07,.03,0,.035,me.d-.015,0],[Mt.w,.07,.03,0,.035,-me.d+.015,0],[Mt.d,.07,.03,-me.w+.015,.035,0,Math.PI/2],[Mt.d,.07,.03,me.w-.015,.035,0,Math.PI/2]].forEach(([Re,be,Be,Ye,ve,ke,k])=>tt(Re,be,Be,N.gold,Ye,ve,ke,{mat:we,noShadow:!0,ry:k}))}function Tg(){let n=[[-2.8,-1.8],[-2.8,.5],[-2.8,2.8],[2.8,-1.8],[2.8,.5],[2.8,2.8]],e=ft(N.chrome,.2,.85,{clearcoat:.4}),t=new Ii({color:16775920,emissive:new et(16772792),emissiveIntensity:1.8});n.forEach(([i,s],r)=>{qe(.12,.12,.04,16,N.chrome,i,Mt.h-.02,s,{mat:e,noShadow:!0});let o=new I(new _n(.07,.07,.018,14),t);o.position.set(i,Mt.h-.009,s),C.add(o);let a=new ts(16774632,1.4,5.5,Math.PI/5.5,.42,1.8);a.position.set(i,Mt.h-.08,s),a.castShadow=r<4,r<4&&(a.shadow.mapSize.set(512,512),a.shadow.bias=-.003),a.target.position.set(i,0,s),C.add(a),C.add(a.target),Qh.push(a)})}function Ag(){let n=-me.d+.06,e=4.2,t=2.2,i=.75,s=i+t,r=(i+s)/2,o=.1,a=le(N.winFrame,.82,.02);[[e+o*2,o,.1,0,s,n],[e+o*2,o,.1,0,i,n],[o,t+o,.1,-e/2-o/2,r,n],[o,t+o,.1,e/2+o/2,r,n],[e,o*.6,.08,0,r,n-.01],[o*.6,t,.08,0,r,n-.01]].forEach(([u,p,g,_,m,f])=>{let E=new Y(u,p,g),x=new I(E,a);x.position.set(_,m,f),x.castShadow=x.receiveShadow=!0,C.add(x)});let l=new Y(e+.5,.07,.26),c=new I(l,a);c.position.set(0,i-.035,n+.1),c.castShadow=c.receiveShadow=!0,C.add(c);let h=new un({color:new et(16771264),roughness:.04,metalness:0,transparent:!0,opacity:.28,side:wt,envMapIntensity:.7}),d=new I(new Y(e-o,t-o,.03),h);d.position.set(0,r,n+.01),C.add(d)}function Rg(){let n=new I(new Nn(28,24,14),new on({map:yg,side:tn}));n.position.set(-4.5,0,0),C.add(n),nt(.8,8,16772761,-4,8.5,-20,{r:0,em:16777096,emI:2,noShadow:!0});let e=ft(16764006,0,0,{transp:!0,opacity:.2,em:16759620,emI:.8}),t=new I(new Nn(1.3,10,6),e);t.position.set(-4,8.5,-20),C.add(t);let i=new on({color:16756816,transparent:!0,opacity:.12,side:wt}),s=new I(new Ct(50,3),i);s.rotation.x=-Math.PI/8,s.position.set(0,2,-22),C.add(s);let r=vt((p,g,_)=>{let m=p.createLinearGradient(0,0,0,_);m.addColorStop(0,"#5A8828"),m.addColorStop(.5,"#478018"),m.addColorStop(1,"#3A6812"),p.fillStyle=m,p.fillRect(0,0,g,_),p.strokeStyle="rgba(30,60,10,0.18)",p.lineWidth=1;for(let f=0;f<60;f++){let E=Math.random()*g;p.beginPath(),p.moveTo(E,Math.random()*_),p.lineTo(E+(Math.random()-.5)*5,_),p.stroke()}},512,512,8,5),o=le(N.grass,.95,0,{map:r,bumpMap:Wo,bumpScale:.025}),a=new I(new Ct(80,80,1,1),o);a.rotation.x=-Math.PI/2,a.position.set(-4.5,-.01,0),a.receiveShadow=!0,C.add(a);let l=vt((p,g,_)=>{p.fillStyle="#D8C898",p.fillRect(0,0,g,_),p.strokeStyle="rgba(120,100,60,0.22)",p.lineWidth=2;for(let m=0;m<14;m++)p.strokeRect(Math.random()*g-30,Math.random()*_-20,40+Math.random()*50,25+Math.random()*30)},256,256,2,4),c=new I(new Ct(1.5,18),le(N.path,.85,0,{map:l}));c.rotation.x=-Math.PI/2,c.position.set(3.5,-.005,-13),C.add(c);let h=le(13156528,.82,.02),d=new I(new Ct(3,2.5),h);d.rotation.x=-Math.PI/2,d.position.set(3.5,-.005,-5.8),C.add(d),bt(-4.2,-7.8,1),bt(4.8,-8.2,.88),bt(-6.5,-11,.72),bt(6.8,-10,.65),bt(-2.8,-13,.68),bt(2.2,-9.5,.8),bt(-5,-14,.6),bt(7.5,-13,.55),bt(.5,-15,.58),bt(-8,-12,.5),qt(-1.6,-5.5,.8),qt(2.6,-5.2,.65),qt(-3.6,-5.8,.6),qt(4.2,-5.8,.55),qt(-5,-6.2,.5),qt(1,-5.1,.62),bt(-9.6,-6.4,.78),bt(-7.2,-6.8,.7),qt(-8.5,-5.3,.58),qt(-10,-5.6,.5),qt(-7,-5.5,.52),[[-8.5,-5.1],[-9.2,-5.2],[-7.8,-5.15],[-8.9,-5.35]].forEach(([p,g],_)=>{qe(.03,.025,.22,5,N.plantGreen,p,.11,g,{r:.8,noShadow:!0}),nt(.1,6,[N.flower1,N.flower2,N.flowerPink,N.flowerTulip][_%4],p,.27,g,{r:.6,em:N.flower1,emI:.3,noShadow:!0})}),bt(-30,-3,.9),bt(-32,2,.8),bt(-31,-1,.75),bt(-29,4.5,.65),bt(-33,6.5,.7),bt(-30,-6,.6),qt(-29,-7,.72),qt(-29,7,.68),qt(-31,-7.5,.55),bt(-2,9,.85),bt(3.5,10.5,.78),bt(-7,8.5,.7),bt(-12,9.5,.65),bt(8,8,.62),bt(-4.5,12,.55),qt(-1,6.2,.75),qt(4,6,.65),qt(-6,6.5,.6),bt(-11,6.8,.62),bt(-8.2,6.5,.58),qt(-10,5.6,.55),qt(-8.5,5.4,.5),qt(-12.5,5.8,.48),bt(8,-4,.8),bt(10,.5,.75),bt(9.5,4.5,.68),bt(11.5,-2,.6),qt(7,-5.5,.7),qt(7,5.5,.65);let u=[N.flowerTulip,N.flower2,N.flower1,N.flowerPink,14524620,13404347];for(let p=0;p<44;p++){let g=(p*7.3+2.1)%13-6.5,_=-5.4-(p*4.7+1.3)%5.8;qe(.03,.025,.22,5,N.plantGreen,g,.11,_,{r:.8,noShadow:!0}),nt(.09,6,u[p%6],g,.25,_,{r:.6,em:u[p%6],emI:.3,noShadow:!0})}for(let p=0;p<22;p++){let g=(p*5.1+.7)%14-7,_=-29.5-(p*3.3+1.1)%4;qe(.03,.025,.22,5,N.plantGreen,_,.11,g,{r:.8,noShadow:!0}),nt(.09,6,u[p%6],_,.25,g,{r:.6,em:u[p%6],emI:.3,noShadow:!0})}for(let p=0;p<10;p++)nt(3.2+p*1.1%.5,8,N.treeLeaf,(p-4.5)*6,-1.5,-22-p*1.2%3,{r:.95,noShadow:!0});for(let p=0;p<8;p++)nt(2.8+p*1.3%.4,8,N.treeLeaf,-31,-1.5,(p-3.5)*5,{r:.95,noShadow:!0})}function bt(n,e,t){let i=3.8*t,s=.13*t;qe(s,s*1.5,i*.5,8,N.treeBark,n,i*.25,e,{r:.82}),[[1.3*t,.95*t,i*.5],[1*t,.78*t,i*.72],[.68*t,.55*t,i*.93]].forEach(([r,o,a])=>{let l=new I(new _n(0,r,o,8),le(N.cherry,.85,0,{em:N.cherryDeep,emI:.08}));l.position.set(n,a,e),l.castShadow=!0,C.add(l),nt(r*.75,8,N.cherry,n+(Math.random()-.5)*.3,a+o*.35,e+(Math.random()-.5)*.3,{r:.82,em:N.cherryDeep,emI:.1,noShadow:!0})})}function qt(n,e,t){[[0,0],[.38*t,-.2*t],[-.3*t,-.28*t]].forEach(([i,s])=>{let r=.45*t;nt(r,8,N.treeLeaf,n+i,r*.9,e+s,{r:.92,em:N.plantGreen,emI:.04})})}function Cg(){let n=-me.d+.78,e=.5,t=ft(N.couch,.88,0,{map:ss,bumpMap:dn,bumpScale:.07,roughMap:Al,sheen:.75,sheenRough:.55,sheenColor:14216912}),i=ft(N.couchDark,.9,0,{map:ss,bumpMap:dn,bumpScale:.06,roughMap:Al,sheen:.68,sheenRough:.6,sheenColor:11061416}),s=ft(N.gold,.48,.55,{clearcoat:.08,ccRough:.5}),r=.28,o=Pt(3.4,e,1.4,.09,12),a=new I(o,t);a.position.set(0,e/2,n),a.castShadow=a.receiveShadow=!0,C.add(a),kt(a,a.position.clone(),new z(0,e/2-r,n));let l=Pt(3.4,.84,.28,.09,12),c=new I(l,i);c.position.set(0,e+.42,n-.5),c.castShadow=c.receiveShadow=!0,C.add(c),kt(c,c.position.clone(),new z(0,e+.42-r,n-.5)),[[-1.7,n],[1.7,n]].forEach(([M,w])=>{let X=Pt(.28,.7,1.4,.09,12),q=new I(X,i);q.position.set(M,e/2+.1,w),q.castShadow=q.receiveShadow=!0,C.add(q),kt(q,q.position.clone(),new z(M,e/2+.1-r,w))});let h=ft(N.cushion,.86,0,{map:ss,bumpMap:dn,bumpScale:.08,roughMap:Al,sheen:.62,sheenRough:.5,sheenColor:15788240});[[-.82,n-.04],[.82,n-.04]].forEach(([M,w])=>{let X=Pt(1.52,.24,1.08,.09,12),q=new I(X,h);q.position.set(M,e+.12,w),q.castShadow=q.receiveShadow=!0,C.add(q),kt(q,q.position.clone(),new z(M,e+.12-r,w))});let d=ft(N.pillow1,.9,0,{bumpMap:dn,bumpScale:.09,sheen:.55,sheenRough:.52,sheenColor:16766112}),u=ft(N.pillow2,.9,0,{bumpMap:dn,bumpScale:.09,sheen:.55,sheenRough:.52,sheenColor:10538168}),p=Pt(.54,.5,.18,.08,10),g=new I(p,d);g.position.set(-1.38,e+.44,n-.27),g.rotation.y=.08,g.rotation.z=.04,g.castShadow=g.receiveShadow=!0,C.add(g),kt(g,g.position.clone(),new z(-1.38,e+.44-r,n-.27));let _=new I(p,u);_.position.set(1.38,e+.46,n-.24),_.rotation.y=-.06,_.rotation.z=-.05,_.castShadow=_.receiveShadow=!0,C.add(_),kt(_,_.position.clone(),new z(1.38,e+.46-r,n-.24));let m=Pt(.46,.44,.14,.07,10),f=ft(13647952,.9,0,{bumpMap:dn,bumpScale:.09,sheen:.55,sheenRough:.52,sheenColor:16766112}),E=ft(4223168,.9,0,{bumpMap:dn,bumpScale:.09,sheen:.55,sheenRough:.52,sheenColor:10537215}),x=new I(m,f);x.position.set(-.4,e+.46,n-.3),x.rotation.y=.18,x.rotation.z=.06,x.castShadow=x.receiveShadow=!0,C.add(x),kt(x,x.position.clone(),new z(-.4,e+.46-r,n-.3));let A=new I(m,E);A.position.set(.42,e+.44,n-.28),A.rotation.y=-.14,A.rotation.z=-.07,A.castShadow=A.receiveShadow=!0,C.add(A),kt(A,A.position.clone(),new z(.42,e+.44-r,n-.28)),[[-1.55,n-.54],[1.55,n-.54],[-1.55,n+.54],[1.55,n+.54]].forEach(([M,w])=>qe(.04,.04,.14,8,N.gold,M,.07,w,{mat:s}));let U=ft(15258792,.93,0,{map:Yh,bumpMap:dn,bumpScale:.1,sheen:.35,sheenRough:.75,sheenColor:16771776}),P=new I(Pt(.58,.072,.84,.05,8),U);P.position.set(1.42,.77,n+.04),P.rotation.z=.15,P.rotation.x=-.07,P.castShadow=P.receiveShadow=!0,C.add(P);let L=new I(Pt(.5,.086,.52,.06,8),U);L.position.set(1.38,.575,n+.3),L.rotation.z=.1,L.rotation.x=.18,L.castShadow=L.receiveShadow=!0,C.add(L);let $=new I(Pt(.42,.052,.34,.04,6),U);$.position.set(1.28,.524,n+.48),$.rotation.z=.06,$.rotation.x=.26,$.castShadow=$.receiveShadow=!0,C.add($),[P,L,$].forEach(M=>kt(M,M.position.clone(),new z(M.position.x,M.position.y-r,M.position.z)))}function Pg(){let n=le(N.table,.58,.02,{map:Vt,bumpMap:Vn,bumpScale:.05,roughMap:_r}),e=ft(N.gold,.46,.52,{clearcoat:.06,ccRough:.55}),t=Pt(2.4,.07,1.2,.04,10),i=new I(t,n);i.position.set(0,.455,.5),i.castShadow=i.receiveShadow=!0,C.add(i);let s=Pt(2.1,.05,.9,.03,8),r=new I(s,n);r.position.set(0,.175,.5),r.castShadow=r.receiveShadow=!0,C.add(r);let o=[[-1.05,.1],[1.05,.1],[-1.05,.9],[1.05,.9]].map(([_,m])=>qe(.024,.024,.42,8,N.gold,_,.21,m,{mat:e})),a=tt(.36,.05,.26,N.bookRed,-.6,.505,.5,{r:.85}),l=tt(.28,.04,.22,N.bookBlue,-.58,.553,.48,{r:.85}),c=qe(.09,.07,.17,12,N.potClay,.72,.552,.5,{r:.9,metal:0,map:Ht}),h=nt(.15,8,N.plantLight,.72,.73,.5,{r:.88,em:N.plantGreen,emI:.02});xi=tt(.22,.04,.09,2761752,.05,.502,.22,{r:.78,metal:.02}),xi.userData.type="remote",bn([i,r,...o,a,l,c,h,xi],.235);let d=le(12111680,.7,0),u=new I(new Nn(.052,10,8),d);u.position.set(-.84,.052,.98),u.castShadow=u.receiveShadow=!0,C.add(u),u.userData.toyName="tennis ball",Ui(u);let p=new on({color:9082928,transparent:!0,opacity:.5}),g=new I(new Bn(.052,.004,4,14),p);g.position.set(-.84,.052,.98),g.rotation.x=.8,g.rotation.z=.5,C.add(g)}function Ig(){let n=me.d-.75,e=Pt(1.8,.62,.48,.04,8),t=new I(e,le(N.tvStand,.72,.08));t.position.set(0,.31,n),t.castShadow=t.receiveShadow=!0,C.add(t);let i=Pt(2.9,1.65,.07,.035,8),s=new I(i,le(N.tvBody,.72,.04));s.position.set(0,1.48,n+.04),s.castShadow=s.receiveShadow=!0,C.add(s),Rl=new I(new Y(2.64,1.42,.02),new on({color:N.screen,toneMapped:!1})),Rl.position.set(0,1.48,n+.083),C.add(Rl),nt(.022,6,4521796,.8,.655,n+.255,{noShadow:!0,em:4521796,emI:1.5})}function Lg(){[new Y(5,.016,3.2),new Y(4.5,.018,2.7)].forEach((n,e)=>{let t=new I(n,le([N.rugBorder,N.rug][e],.95,0,{map:Fi}));t.position.set(0,[.008,.01][e],.8),t.receiveShadow=!0,C.add(t)})}var Po=2.4;function Dg(){let n=ft(N.gold,.3,.75,{clearcoat:.2,ccRough:.3});Zt(.22,.05,.22,N.gold,-3.8,.025,Po,.03,{mat:n}),qe(.022,.022,2,10,N.gold,-3.8,1.02,Po,{mat:n});let e=new un({color:new et(N.lampShade),roughness:.6,metalness:0,transmission:.3,thickness:.1,transparent:!0,emissive:new et(16763936),emissiveIntensity:.35,side:vn});nt(.38,16,N.lampShade,-3.8,2.18,Po,{mat:e,noShadow:!1});let t=new Ii({color:new et(N.lampShadeIn),emissive:new et(16763936),emissiveIntensity:3.2,roughness:.9,transparent:!0,opacity:.85,side:tn}),i=new I(new Nn(.33,14,10),t);i.position.set(-3.8,2.18,Po),C.add(i);let s=0,r=.5,o=Mt.h-.02;qe(.008,.008,.55,6,N.gold,s,o-.27,r,{mat:n,noShadow:!0}),nt(.4,16,N.lampShade,s,o-.72,r,{mat:e,noShadow:!1});let a=new I(new Nn(.35,14,10),t);a.position.set(s,o-.72,r),C.add(a);let l=new En(16763972,1.8,6.5);l.position.set(s,o-.72,r),C.add(l)}function Ug(){let n=me.w-.72,e=-me.d+.75;qe(.3,.24,.64,12,N.potClay,n,.32,e,{r:.9,metal:0,map:Ht}),[[0,1,0],[.22,.88,-.16],[-.18,.84,.18],[.1,1.18,.12],[-.08,.74,-.1]].forEach(([h,d,u])=>nt(.4,8,N.plantGreen,n+h,d,e+u,{r:.92})),qe(.065,.065,.24,6,N.plantGreen,n+.26,.92,e-.14,{r:.85,noShadow:!0}),nt(.1,6,N.flower1,n+.26,1.06,e-.14,{r:.75,noShadow:!0}),qe(.065,.065,.22,6,N.plantGreen,n-.24,.96,e+.14,{r:.85,noShadow:!0}),nt(.1,6,N.flower2,n-.24,1.09,e+.14,{r:.75,noShadow:!0});let t=-me.w+.72,i=-me.d+.75;qe(.26,.2,.56,12,N.potClay,t,.28,i,{r:.9,metal:0,map:Ht}),[[0,1.06,0],[-.2,.9,.14],[.16,.86,-.16],[-.08,1.24,.08],[.1,.76,-.06]].forEach(([h,d,u])=>nt(.34,8,N.plantGreen,t+h,d,i+u,{r:.92}));let s=-me.w+.85,r=-3.6;qe(.22,.18,.48,10,N.potClay,s,.24,r,{r:.9,metal:0,map:Ht}),[[0,.8,0],[.18,.68,.1],[-.14,.64,-.1],[.04,.96,.04]].forEach(([h,d,u])=>nt(.3,8,N.treeLeaf,s+h,d,r+u,{r:.92}));let o=me.w-.5,a=1.8,l=le(N.table,.65,.02,{map:Vt,noShadow:!0}),c=new I(new Y(.08,.04,.5),l);c.position.set(me.w-.04,.65,a),C.add(c),[[a-.16],[a+.16]].forEach(([h])=>{let d=new I(new Y(.04,.04,.04),l);d.position.set(me.w-.04,.63,h),C.add(d);let u=new I(new Y(.04,.16,.04),l);u.position.set(me.w-.02,.55,h),u.rotation.x=.32,C.add(u)}),qe(.12,.1,.26,10,9060384,o,.8,a,{r:.9,metal:0,map:Ht,noShadow:!0}),nt(.18,7,N.plantGreen,o,.99,a,{r:.92,noShadow:!0}),nt(.14,6,N.plantLight,o-.15,.92,a+.1,{r:.92,noShadow:!0}),nt(.12,6,N.plantLight,o+.12,.88,a-.08,{r:.92,noShadow:!0}),qe(.18,.14,.4,12,N.potClay,me.w-.72,.2,-1.2,{r:.9,metal:0,map:Ht}),[[0,.68,0],[.16,.58,.1],[-.12,.54,-.1],[.04,.82,.06]].forEach(([h,d,u])=>nt(.26,7,N.plantGreen,me.w-.72+h,d,-1.2+u,{r:.9})),qe(.14,.11,.32,12,N.potClay,me.w-.7,.16,me.d-.7,{r:.9,metal:0,map:Ht}),[[0,.6,0],[.14,.5,.08],[-.1,.46,-.08],[.05,.74,.04]].forEach(([h,d,u])=>nt(.2,7,N.plantGreen,me.w-.7+h,d,me.d-.7+u,{r:.9})),qe(.042,.042,.14,6,N.plantGreen,me.w-.52,.56,me.d-.78,{r:.85,noShadow:!0}),nt(.065,5,N.flower1,me.w-.52,.66,me.d-.78,{r:.75,noShadow:!0}),qe(.065,.055,.12,10,11558960,-8.5,.99,-3.7,{r:.85,metal:0,map:Ht,noShadow:!0}),nt(.1,6,N.plantGreen,-8.5,1.13,-3.7,{r:.88,noShadow:!0}),nt(.07,5,N.plantLight,-8.42,1.08,-3.58,{r:.88,noShadow:!0}),qe(.1,.08,.16,10,9461800,-5.4,.08,3.6,{r:.88,metal:0,map:Ht,noShadow:!0}),nt(.12,6,5937200,-5.4,.24,3.6,{r:.85,noShadow:!0}),nt(.08,5,7911488,-5.28,.2,3.5,{r:.85,noShadow:!0}),nt(.08,5,7911488,-5.52,.19,3.68,{r:.85,noShadow:!0})}function Fg(){let n=le(N.table,.68,.02,{map:Vt,bumpMap:Vn,bumpScale:.04,roughMap:_r}),e=Pt(.52,.5,.52,.05,10),t=new I(e,n);t.position.set(2.24,.25,-3.28),t.castShadow=t.receiveShadow=!0,C.add(t),qe(.05,.042,.14,14,14207144,2.24,.57,-3.28,{r:.92,metal:0,map:Ht}),qe(.058,.048,.11,10,N.potClay,2.06,.555,-3.32,{r:.92,metal:0,map:Ht,noShadow:!0}),nt(.085,7,N.plantGreen,2.06,.67,-3.32,{r:.9,noShadow:!0}),nt(.06,6,N.plantLight,2,.66,-3.26,{r:.9,noShadow:!0});let i=new I(e,n);i.position.set(-2.24,.25,-3.28),i.castShadow=i.receiveShadow=!0,C.add(i),qe(.058,.048,.11,10,N.potClay,-2.24,.555,-3.28,{r:.92,metal:0,map:Ht,noShadow:!0}),nt(.085,7,N.plantGreen,-2.24,.67,-3.28,{r:.9,noShadow:!0}),nt(.06,6,N.flower1,-2.18,.73,-3.22,{r:.8,noShadow:!0}),tt(.14,.025,.1,N.bookBlue,-2.1,.513,-3.34,{r:.82});let s=le(15789026,.9,0,{map:Ht}),r=new I(new _n(.04,.034,.082,14),s);r.position.set(2.1,.542,-3.28),r.castShadow=r.receiveShadow=!0,C.add(r);let o=new I(new Bn(.026,.007,5,12,Math.PI),s);o.rotation.z=Math.PI/2,o.position.set(2.06,.542,-3.28),C.add(o);let a=new I(new Ki(.036,12),le(8013856,.06,0));a.rotation.x=-Math.PI/2,a.position.set(2.1,.582,-3.28),C.add(a);let l=new Ii({color:N.ledAccent,emissive:new et(N.ledAccent),emissiveIntensity:1.5,transparent:!0,opacity:.6}),c=new I(new Y(3,.018,.025),l);c.position.set(0,.018,-me.d+1.15),C.add(c);let h=le(15657698,.85,.02),d=le(4736064,.8,.02),u=(m,f,E,x,A)=>{let U=le(x,.85,.02),P=le(A,.78,.04),L=new I(new Y(.1,.032,.26),P);L.position.set(m,.016,f),L.rotation.y=E,C.add(L);let $=new I(Pt(.09,.062,.2,.03,6),U);$.position.set(m,.057,f),$.rotation.y=E,C.add($);let M=new I(Pt(.085,.044,.06,.03,6),P),w=m+Math.sin(E)*.1,X=f+Math.cos(E)*.1;M.position.set(w,.044,X),M.rotation.y=E,C.add(M)};u(-5.5,3.95,.25,15657698,4736064),u(-5.7,4.08,-.18,15657698,4736064),u(-6.3,3.75,.45,8013856,4860944),u(-6.1,3.6,-.4,8013856,4860944);let p=ft(N.gold,.35,.65,{clearcoat:.2}),g=new I(new Bn(.025,.006,6,14),p);g.rotation.x=Math.PI/2,g.position.set(.95,.503,.14),C.add(g),[[.96,.502,.08],[1,.502,.2]].forEach(([m,f,E])=>{let x=new I(new Y(.014,.002,.04),p);x.position.set(m,f,E),x.rotation.y=(Math.random()-.5)*.6,C.add(x)}),tt(.28,.018,.22,15789272,-.28,.209,.5,{r:.5,metal:0}),tt(.22,.012,.18,14210248,-.3,.221,.52,{r:.5,metal:0,noShadow:!0});let _=new un({color:13691120,roughness:.04,metalness:0,transparent:!0,opacity:.32,side:wt});qe(.034,.028,.1,10,13691120,-2.14,.55,-3.22,{mat:_,noShadow:!0}),tt(.055,.008,.115,1710618,2.38,.512,-3.2,{r:.3,metal:.1,noShadow:!0})}function Ng(){let e=new Float32Array(180),t=new Float32Array(60);for(let c=0;c<60;c++){let h=Math.random()<.68;e[c*3]=(Math.random()-.5)*(h?3.8:8),e[c*3+1]=.22+Math.random()*2.35,e[c*3+2]=h?-me.d+.2+Math.random()*3.8:-me.d+1+Math.random()*6.5,t[c]=Math.random()*Math.PI*2}let i=new an;i.setAttribute("position",new mn(e,3));let s=new Us({color:15657180,size:.01,transparent:!0,opacity:.28,sizeAttenuation:!0,depthWrite:!1}),r=new Us({color:15261904,size:.018,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),o=new an;o.setAttribute("position",new mn(e.slice(0,60/2*3),3));let a=new nr(i,s),l=new nr(o,r);C.add(a),C.add(l),ns={dustMesh:a,moteMesh:l,positions:e,phases:t,count:60}}function iu(n,e,t){let i=ft(12888194,.93,0,{bumpMap:dn,bumpScale:.05,sheen:.42,sheenRough:.74,sheenColor:16768688}),s=new I(Pt(.78,.096,.62,.06,10),i);s.position.set(n,e+.048,t),s.castShadow=s.receiveShadow=!0,C.add(s);let r=new I(new Bn(.295,.058,16,32),i);r.rotation.x=Math.PI/2,r.position.set(n,e+.098,t),r.castShadow=r.receiveShadow=!0,C.add(r);let o=new I(Pt(.46,.074,.36,.04,8),ft(11178096,.95,0,{bumpMap:dn,bumpScale:.03}));o.position.set(n+.04,e+.052,t-.02),o.receiveShadow=!0,C.add(o)}function Bg(){iu(3.9,0,3.9);let t=nt(.072,8,12441648,3.9-.55,.072,3.9-.38,{r:.9,noShadow:!0});Ui(t),t.userData.toyName="tennis ball";let i=nt(.072,8,12441648,.4,.072,.55,{r:.9,noShadow:!0});Ui(i),i.userData.toyName="tennis ball";let s=le(15657168,.86,.01),r=2.2,o=3.6,a=tt(.3,.04,.04,15657168,r,.04,o,{mat:s,noShadow:!0});Ui(a),a.userData.toyName="chew bone",nt(.06,6,15657168,r-.155,.05,o+.03,{r:.92,noShadow:!0}),nt(.055,6,15657168,r-.155,.038,o-.03,{r:.92,noShadow:!0}),nt(.06,6,15657168,r+.155,.05,o+.03,{r:.92,noShadow:!0}),nt(.055,6,15657168,r+.155,.038,o-.03,{r:.92,noShadow:!0});let l=nt(.068,8,16755388,-3.2,.068,1.8,{r:.88,noShadow:!0});Ui(l),l.userData.toyName="squeaky toy",nt(.03,6,16755388,-3.2,.142,1.8,{r:.88,noShadow:!0});let c=le(13137984,.9,0),h=new I(new Bn(.065,.02,8,18),c);h.rotation.x=Math.PI/2,h.position.set(1.2,.02,4.1),C.add(h),Ui(h),h.userData.toyName="rope toy",qe(.016,.012,.18,6,13137984,1.08,.025,4.22,{mat:c,noShadow:!0}),qe(.012,.01,.15,6,14192720,1.32,.022,4,{mat:c,noShadow:!0});let d=nt(.058,7,16740512,-.8,.058,2.2,{r:.92,noShadow:!0});Ui(d),d.userData.toyName="rubber ball";let u=ft(13123664,.7,.08),p=new I(new Bn(.1,.012,8,22),u);p.rotation.x=Math.PI/2,p.position.set(3.9-.68,.012,3.9-.2),C.add(p),nt(.018,5,N.gold,3.9-.775,.018,3.9-.205,{noShadow:!0})}function Og(){let n=new on({map:xg,transparent:!0,opacity:.88,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e=new I(new Ct(3,2),n);e.rotation.x=-Math.PI/2,e.position.set(-.4,.001,-2.4),C.add(e);let t=new on({color:5910544,transparent:!0,opacity:.028,depthWrite:!1}),i=new I(new Ct(1.1,3.2),t);i.rotation.x=-Math.PI/2,i.position.set(0,.001,-.5),C.add(i)}function Hg(){function n(i,s,r,o,a,l,c){let d=le(9201728,.68,.04,{map:Vt,bumpMap:Vn,bumpScale:.03}),u=new On({map:i}),p=le(16051940,.88,0);if(a==="x"){let g=s>0?-1:1,_=new I(new Y(.055,c+.08,l+.08),d);_.position.set(s+g*.055*.5,r,o),_.castShadow=_.receiveShadow=!0,C.add(_);let m=new I(new Ct(l+.04,c+.04),p);m.position.set(s+g*.055*.88,r,o),m.rotation.y=s>0?-Math.PI/2:Math.PI/2,C.add(m);let f=new I(new Ct(l,c),u);f.position.set(s+g*.055+g*.003,r,o),f.rotation.y=s>0?-Math.PI/2:Math.PI/2,f.castShadow=!1,f.receiveShadow=!0,C.add(f)}else{let g=o>0?-1:1,_=new I(new Y(l+.08,c+.08,.055),d);_.position.set(s,r,o+g*.055*.5),_.castShadow=_.receiveShadow=!0,C.add(_);let m=new I(new Ct(l+.04,c+.04),p);m.position.set(s,r,o+g*.055*.88),m.rotation.y=o>0?Math.PI:0,C.add(m);let f=new I(new Ct(l,c),u);f.position.set(s,r,o+g*.055+g*.003),f.rotation.y=o>0?Math.PI:0,f.castShadow=!1,f.receiveShadow=!0,C.add(f)}}n(Io,-me.w,1.65,2.8,"x",.5,.64),n(Lo,-me.w,1.62,-2.8,"x",.44,.56),n(Do,1.5,1.72,me.d,"z",.52,.66),n(Io,-1.5,1.68,me.d,"z",.44,.56),n(Lo,me.w,1.65,.8,"x",.5,.64),n(Do,me.w,1.6,-.7,"x",.44,.56);let e=le(6045728,.68,.04,{map:Vt}),t=(i,s,r,o,a,l,c)=>{let d=a==="x"?s>0?-1:1:o>0?-1:1;if(a==="x"){let u=new I(new Y(.04,c+.06,l+.06),e);u.position.set(s+d*.04*.5,r,o),C.add(u);let p=new I(new Ct(l,c),new On({map:i}));p.position.set(s+d*.04+d*.002,r,o),p.rotation.y=s>0?-Math.PI/2:Math.PI/2,C.add(p)}else{let u=new I(new Y(l+.06,c+.06,.04),e);u.position.set(s,r,o+d*.04*.5),C.add(u);let p=new I(new Ct(l,c),new On({map:i}));p.position.set(s,r,o+d*.04+d*.002),p.rotation.y=o>0?Math.PI:0,C.add(p)}};t(Lo,-1.6,2.32,me.d,"z",.28,.34),t(Do,0,2.34,me.d,"z",.28,.34),t(Io,1.6,2.32,me.d,"z",.28,.34);{let i=new un({color:13426152,roughness:.03,metalness:.22,transparent:!0,opacity:.6}),s=new I(new Bn(.28,.038,8,28),le(N.gold,.4,.5));s.rotation.y=Math.PI/2,s.position.set(me.w,1.8,-2.8),C.add(s);let r=new I(new Ki(.26,20),i);r.rotation.y=-Math.PI/2,r.position.set(me.w-.06,1.8,-2.8),C.add(r)}{let i=le(N.table,.65,.02,{map:Vt}),s=new I(new Y(.06,.05,.65),i);s.position.set(me.w-.03,2.05,2.4),C.add(s);let r=new I(new Y(.05,.05,.14),le(N.gold,.45,.4));r.position.set(me.w-.03,2.02,2.4),C.add(r),qe(.03,.024,.12,10,13135952,me.w-.04,2.13,2.18,{r:.85,metal:0,map:Ht,noShadow:!0}),nt(.04,6,N.flower1,me.w-.04,2.22,2.18,{r:.8,noShadow:!0}),qe(.022,.022,.08,8,16051416,me.w-.04,2.11,2.4,{noShadow:!0}),qe(.008,.008,.04,4,16772736,me.w-.04,2.16,2.4,{noShadow:!0}),tt(.055,.055,.035,8405040,me.w-.04,2.1,2.6,{r:.4,metal:0,noShadow:!0})}}function zg(){let n=Oe.x2-Oe.x1,e=Oe.z2-Oe.z1,t=Oe.h,i=le(N.wall,.9,0,{map:mr,bumpMap:zs,bumpScale:.042,side:wt}),s=ft(N.floor,.55,.02,{map:Ll,bumpMap:Wo,bumpScale:.03,roughMap:_r,clearcoat:.06,ccRough:.6}),r=vt((F,Ee,ge)=>{F.fillStyle="#EAE6DE",F.fillRect(0,0,Ee,ge),F.strokeStyle="rgba(180,170,155,0.55)",F.lineWidth=2;let Te=32;for(let Se=0;Se<=Ee;Se+=Te)F.beginPath(),F.moveTo(Se,0),F.lineTo(Se,ge),F.stroke();for(let Se=0;Se<=ge;Se+=Te)F.beginPath(),F.moveTo(0,Se),F.lineTo(Ee,Se),F.stroke()},512,512,6,6),o=new I(new Ct(n,e,30,30),le(N.floor,.6,0,{map:r}));o.rotation.x=-Math.PI/2,o.position.set(-9.5,.002,0),o.receiveShadow=!0,C.add(o);let a=new I(new Y(n,.22,e),le(N.floor,.6,.01));a.position.set(-9.5,-.11,0),C.add(a);{let F=new On({color:new et(N.ceiling),side:vn}),Ee=(Fe,ye,De,pe)=>{let te=new I(new Ct(Fe,ye),F);te.rotation.x=Math.PI/2,te.position.set(De,Oe.h,pe),C.add(te)},ge=Oe.x1,Te=Oe.x2,Se=Oe.z1,Ce=Oe.z2;Ee(n,Hn-Se,-9.5,(Se+Hn)/2),Ee(n,Ce-zn,-9.5,(zn+Ce)/2),Ee(Uo-ge,zn-Hn,(ge+Uo)/2,(Hn+zn)/2),Ee(Te-Fo,zn-Hn,(Fo+Te)/2,(Hn+zn)/2)}let l=Oe.x1-.075,c=new on({color:14217471,transparent:!0,opacity:.06,depthWrite:!1,side:wt}),h=le(N.winFrame,.78,.02),d=(F,Ee,ge)=>{let Fe=1.3000000000000003,ye=t,De=ge-1.3/2-F;if(De>0){let D=new I(new Y(.15,ye,De),i);D.position.set(l,ye/2,F+De/2),D.receiveShadow=!0,C.add(D)}let pe=Ee-(ge+1.3/2);if(pe>0){let D=new I(new Y(.15,ye,pe),i);D.position.set(l,ye/2,ge+1.3/2+pe/2),D.receiveShadow=!0,C.add(D)}{let D=new I(new Y(.15,.9,1.3),i);D.position.set(l,.9/2,ge),D.receiveShadow=!0,C.add(D)}let te=ye-2.2;{let D=new I(new Y(.15,te,1.3),i);D.position.set(l,2.2+te/2,ge),D.receiveShadow=!0,C.add(D)}let R=new I(new Y(.04,Fe-.05,1.3-.05),c);R.position.set(l,.9+Fe/2,ge),C.add(R);let y=new I(new Y(.06,.04,1.3-.05),h);y.position.set(l,.9+Fe/2,ge),C.add(y);let T=new I(new Y(.06,Fe-.05,.04),h);T.position.set(l,.9+Fe/2,ge),C.add(T),[[0,.9-.035],[0,2.2+.035]].forEach(([D,H])=>{let Z=new I(new Y(.12,.07,1.4000000000000001),h);Z.position.set(l,H,ge+D),C.add(Z)}),[[-1.3/2-.035,0],[1.3/2+.035,0]].forEach(([D])=>{let H=new I(new Y(.12,Fe+.07,.07),h);H.position.set(l,.9+Fe/2,ge+D),C.add(H)});let B=new I(new Y(.18,.05,1.3+.1),h);B.position.set(l+.12,.9,ge),C.add(B)};{let F=me.d-Ze.z2,Ee=.4,ge=new I(new Y(Ee,t,F),i);ge.position.set(Oe.x1-Ee/2,t/2,Ze.z2+F/2),ge.receiveShadow=!0,C.add(ge)}{let F=le(N.ceiling,.94,0),Ee=.16,ge=Oe.x1-Ee/2,Te=t-Ge.h,Se=new I(new Y(Ee,Te,Ge.z2-Ge.z1),F);Se.position.set(ge,Ge.h+Te/2,(Ge.z1+Ge.z2)/2),C.add(Se);let Ce=t-Ze.h,Fe=new I(new Y(Ee,Ce,Ze.z2-Ze.z1),F);Fe.position.set(ge,Ze.h+Ce/2,(Ze.z1+Ze.z2)/2),C.add(Fe)}{let F=-me.d,Ee=.1,ge=-8.5,Te=1.3,Se=1.02,Ce=2.38,Fe=Ce-Se,ye=ge-Te/2,De=ge+Te/2;[[ye-Oe.x1,t,Oe.x1+(ye-Oe.x1)/2,t/2],[Oe.x2-De,t,De+(Oe.x2-De)/2,t/2],[Te,Se,ge,Se/2],[Te,t-Ce,ge,Ce+(t-Ce)/2]].forEach(([y,T,B,D])=>{let H=new I(new Y(y,T,Ee),i);H.position.set(B,D,F),H.receiveShadow=!0,C.add(H)});let pe=new I(new Y(Te-.06,Fe-.06,.04),c);pe.position.set(ge,Se+Fe/2,F),C.add(pe),[[Se-.038],[Ce+.038]].forEach(([y])=>{let T=new I(new Y(Te+.12,.07,.16),h);T.position.set(ge,y,F),C.add(T)}),[[ye-.038],[De+.038]].forEach(([y])=>{let T=new I(new Y(.07,Fe+.09,.16),h);T.position.set(y,Se+Fe/2,F),C.add(T)});let te=new I(new Y(Te-.05,.04,.08),h);te.position.set(ge,Se+Fe/2,F),C.add(te);let R=new I(new Y(Te+.12,.05,.18),h);R.position.set(ge,Se,F+.09),C.add(R)}{let F=me.d+.2,Ee=.15,ge=2.8,Te=1.8,Se=-11.5,Ce=-7.7,Fe=-6,ye=new on({color:14217471,transparent:!0,opacity:.06,depthWrite:!1,side:wt}),De=le(N.winFrame,.78,.02);[[1.6,t,-13.2],[2,t,-9.6],[.2,t,-6.7],[.4,t,-5.2]].forEach(([pe,te,R])=>{let y=new I(new Y(pe,te,.4),i);y.position.set(R,te/2,F),y.receiveShadow=!0,C.add(y)});{let R=t-2.2,y=.65,T=R-y,B=new I(new Y(1.2,T,.4),i);B.position.set(Fe,2.2+y+T/2,F),B.receiveShadow=!0,C.add(B);let D=new un({color:13166832,roughness:.04,metalness:.06,transparent:!0,opacity:.3,side:wt}),H=new I(new Y(1.2-.08,y-.08,.04),D);H.position.set(Fe,2.2+y/2,F),C.add(H);let Z=le(N.winFrame,.78,.02);[[1.2+.12,.07,0,-(y/2+.04)],[1.2+.12,.07,0,y/2+.04],[.07,y+.1,-(1.2/2+.04),0],[.07,y+.1,1.2/2+.04,0]].forEach(([sn,Bi,xr,Yo])=>{let vr=new I(new Y(sn,Bi,.22),Z);vr.position.set(Fe+xr,2.2+y/2+Yo,F),C.add(vr)}),[-1.2/3,1.2/3].forEach(sn=>{let Bi=new I(new Y(.05,y,.12),Z);Bi.position.set(Fe+sn,2.2+y/2,F),C.add(Bi)});let Pe=le(10510384,.65,.02,{map:Vt}),Ne=new I(new Y(1.2+.2,.06,.4),Pe);Ne.position.set(Fe,.03,F-.05),C.add(Ne);let We=le(12599360,.92,0,{map:Fi}),$e=new I(new Y(1.2+.1,.012,.7),We);$e.position.set(Fe,.008,F-.6),C.add($e);let ct=new On({color:15245376}),ht=new I(new _n(.16,.16,.03,16),ct);ht.rotation.x=Math.PI/2,ht.position.set(Fe,2.2+.4,F-.18),C.add(ht);let Ut=le(7226400,.62,.02,{map:Vt,bumpMap:Vn,bumpScale:.04}),It=new I(new Y(1.2-.04,2.1,.05),Ut);It.position.set(Fe,1.05,F-.05),It.castShadow=!0,C.add(It);let Bt=new I(new _n(.025,.025,.05,8),ft(N.gold,.35,.65,{clearcoat:.2}));Bt.rotation.x=Math.PI/2,Bt.position.set(Fe+.45,1.05,F-.08),C.add(Bt)}[Se,Ce].forEach(pe=>{let te=ge-Ee,R=new I(new Y(Te,Ee,.4),i);R.position.set(pe,Ee/2,F),R.receiveShadow=!0,C.add(R);let y=t-ge,T=new I(new Y(Te,y,.4),i);T.position.set(pe,ge+y/2,F),T.receiveShadow=!0,C.add(T);let B=new I(new Y(Te-.05,te-.05,.02),ye);B.position.set(pe,Ee+te/2,F-.2),C.add(B);let D=F-.2,H=new I(new Y(Te-.05,.05,.06),De);H.position.set(pe,Ee+te/2,D),C.add(H);let Z=new I(new Y(.05,te-.05,.06),De);Z.position.set(pe,Ee+te/2,D),C.add(Z),[[Te+.12,.08,0,Ee-.04],[Te+.12,.08,0,ge+.04],[.08,te+.1,-Te/2-.04,Ee+te/2],[.08,te+.1,Te/2+.04,Ee+te/2]].forEach(([Ne,We,$e,ct])=>{let ht=new I(new Y(Ne,We,.06),De);ht.position.set(pe+$e,ct,D),C.add(ht)});let Pe=new I(new Y(Te+.12,.05,.14),De);Pe.position.set(pe,Ee,D-.05),C.add(Pe)})}let u=le(15261904,.4,.05,{map:Ht}),p=le(N.tvStand,.8,.04),g=.9,_=n-.5,m=1.4,f=Zt(_,g,m,N.tvStand,Oe.x1+_/2+.25,g/2,-3.8,.04,{mat:p}),E=new I(new Y(_,.06,m+.05),u);E.position.set(Oe.x1+_/2+.25,g+.03,-3.8),E.castShadow=E.receiveShadow=!0,C.add(E),kt(f,f.position.clone(),new z(f.position.x,.05,f.position.z)),kt(E,E.position.clone(),new z(E.position.x,.53,E.position.z));let x=1.82;Zt(1.1,x,.75,14210252,-5.65,x/2,-2,.06,{r:.72,metal:.04}),tt(1.08,.04,.73,13157564,-5.65,x+.02,-2,{r:.65,metal:.04}),tt(.038,.52,.038,N.chrome,-6.23,x*.58,-1.68,{r:.3,metal:.72});let A=ft(2893864,.12,.82),U=ft(N.chrome,.22,.72,{clearcoat:.4}),P=new I(new Y(.82,.026,.74),A);P.position.set(-12.5,g+.013,-3.8),P.castShadow=!0,C.add(P),kt(P,P.position.clone(),new z(P.position.x,P.position.y-.4,P.position.z));{let F=[];[[-.2,-.17],[-.2,.17],[.2,-.17],[.2,.17]].forEach(([Ee,ge])=>{F.push(qe(.1,.1,.012,16,1710104,-12.5+Ee,g+.035,-3.8+ge,{mat:A,noShadow:!0})),F.push(qe(.055,.055,.013,12,6303776,-12.5+Ee,g+.036,-3.8+ge,{noShadow:!0}))}),bn(F,.4)}let L=ft(3158064,.25,.55);{let F=[];[-12.74,-12.58,-12.42,-12.26].forEach(Ee=>{F.push(qe(.022,.02,.028,10,3158064,Ee,g-.1,-3.09,{mat:L,noShadow:!0}))}),bn(F,.4)}let $=le(14210250,.3,.05),M=ft(1579032,.04,.02,{transmission:.38,thickness:.03,ior:1.52}),w=tt(.74,.5,.055,14210250,-12.5,g*.3,-3.07,{mat:$});kt(w,w.position.clone(),new z(w.position.x,w.position.y-.4,w.position.z));let X=new I(new Y(.5,.26,.03),M);X.position.set(-12.5,g*.3,-3.055),C.add(X),kt(X,X.position.clone(),new z(X.position.x,X.position.y-.4,X.position.z));let q=tt(.58,.038,.038,N.chrome,-12.5,g*.49,-3.042,{r:.3,metal:.7});kt(q,q.position.clone(),new z(q.position.x,q.position.y-.4,q.position.z));let _e=ft(N.chrome,.22,.72,{clearcoat:.5,ccRough:.12}),O=new I(new Y(.5,.08,.36),_e);O.position.set(-8.5,g+.005,-3.72),C.add(O),kt(O,O.position.clone(),new z(O.position.x,O.position.y-.4,O.position.z));let G=ft(N.chrome,.28,.65,{clearcoat:.4});qe(.15,.12,.1,16,N.chrome,-8.5,.05,-2.85,{mat:G});let Q=ft(9156816,.02,0,{transmission:.6,thickness:.02,ior:1.33}),oe=new I(new Ki(.13,16),Q);oe.rotation.x=-Math.PI/2,oe.position.set(-8.5,.098,-2.85),C.add(oe);let re=ft(13127728,.55,.3,{clearcoat:.2});qe(.15,.12,.1,16,13127728,-8.5,.05,-2.52,{mat:re});let ne=le(9064480,.92,0),ue=new I(new Ki(.11,12),ne);ue.rotation.x=-Math.PI/2,ue.position.set(-8.5,.098,-2.52),C.add(ue),[[.04,.1],[-.05,.09],[.02,-.04],[-.03,-.1],[.08,-.02]].forEach(([F,Ee])=>{let ge=new I(new Y(.022,.016,.022),ne);ge.position.set(-8.5+F,.106,-2.52+Ee),ge.rotation.y=Math.random()*Math.PI,C.add(ge)});let ce=ft(N.chrome,.22,.72,{clearcoat:.4,ccRough:.15}),Ue=.14,j=Oe.x1+_/2+.25;for(let F=j-_/2+.55;F<j+_/2-.2;F+=.9)tt(Ue,.022,.026,N.chrome,F,g*.58,-3.08,{mat:ce,noShadow:!0});let ae=le(N.tvStand,.72,.03);Zt(_,.62,.42,N.tvStand,Oe.x1+_/2+.25,t-.31,-3.75,.05,{mat:ae});for(let F=j-_/2+.55;F<j+_/2-.2;F+=.9)tt(Ue,.026,.022,N.chrome,F,t-.62+.04,-3.76,{mat:ce,noShadow:!0});let we=3.8,Re=1.4,be=g,Be=le(N.tvStand,.8,.04),Ye=le(15261904,.38,.06,{map:Ht}),ve=Zt(we,be,Re,N.tvStand,-9.5,be/2,0,.05,{mat:Be}),ke=new I(new Y(we+.06,.07,Re+.06),Ye);ke.position.set(-9.5,be+.035,0),ke.castShadow=ke.receiveShadow=!0,C.add(ke),kt(ve,ve.position.clone(),new z(ve.position.x,.05,ve.position.z)),kt(ke,ke.position.clone(),new z(ke.position.x,.535,ke.position.z)),[-11.2,-9.5,-7.8].forEach(F=>{tt(.14,.022,.026,N.chrome,F,be*.58,Re/2+.016,{mat:ce,noShadow:!0}),tt(.14,.022,.026,N.chrome,F,be*.58,-Re/2-.016,{mat:ce,noShadow:!0})});let k=Re/2+.46,Ke=le(N.couch,.82,.02,{map:ss,bumpMap:dn,bumpScale:.05});{let F=[];[-10.8,-9.5,-8.2].forEach(Ee=>{let ge=ft(N.chrome,.25,.7,{clearcoat:.3});[[-.12,-.12],[.12,-.12],[-.12,.12],[.12,.12]].forEach(([Te,Se])=>{F.push(qe(.025,.025,.62,6,N.chrome,Ee+Te,.31,k+Se,{mat:ge,noShadow:!0}))}),F.push(qe(.24,.22,.08,14,N.couch,Ee,.66,k,{mat:Ke,noShadow:!0})),F.push(qe(.21,.2,.06,14,N.cushion,Ee,.72,k,{mat:Ke,noShadow:!0})),F.push(qe(.18,.18,.028,14,N.chrome,Ee,.3,k,{mat:ge,noShadow:!0}))}),bn(F,.4)}{let F=[];F.push(qe(.16,.13,.08,14,N.chrome,-9.9,g+.11,.1,{r:.3,metal:.6,noShadow:!0})),F.push(nt(.08,7,15220800,-9.65,g+.19,.15,{r:.9,noShadow:!0})),F.push(nt(.075,7,16293936,-9.88,g+.18,-.05,{r:.9,noShadow:!0})),F.push(nt(.065,7,16441408,-10.12,g+.18,.12,{r:.9,noShadow:!0})),F.push(nt(.07,6,16736384,-9.72,g+.17,-.18,{r:.9,noShadow:!0})),F.push(nt(.055,6,16111680,-10,g+.19,.28,{r:.9,noShadow:!0})),F.push(nt(.045,6,16111680,-10.09,g+.18,.38,{r:.9,noShadow:!0})),F.push(tt(.32,.14,.18,13931610,-8.9,g+.14,-.18,{r:.7,metal:0})),F.push(tt(.3,.24,.02,12879962,-8.65,g+.17,.22,{r:.4,metal:0})),F.push(qe(.055,.06,.1,12,15788264,-9.2,g+.14,.4,{r:.85,metal:0})),F.push(qe(.03,.03,.12,10,16381424,-9.05,g+.14,-.38,{r:.6,noShadow:!0})),F.push(qe(.03,.03,.12,10,4210752,-9.13,g+.14,-.28,{r:.6,noShadow:!0})),bn(F,.4)}let je=le(13940864,.8,0);[[-7.5,.04,-.8],[-9.2,.04,1.2],[-8,.04,.3],[-10.5,.04,-.5],[-7.2,.04,2.1],[-11,.04,.8],[-8.8,.04,-1.6],[-6.8,.04,.1]].forEach(([F,Ee,ge])=>{let Te=new I(new Nn(.03,5,4),je);Te.position.set(F,Ee,ge),Te.castShadow=!1,C.add(Te),is.push(Te)});let ze=ft(N.chrome,.28,.72,{clearcoat:.3,ccRough:.18});tt(.92,1,.58,N.chrome,-12.5,1.72+.5,-4.22,{mat:ze}),tt(.42,.56,.22,8947842,-12.5,2.78+.28,-4.38,{r:.35,metal:.6}),tt(.7,.04,.1,16775920,-12.5,1.72,-4,{r:.95,metal:0,noShadow:!0});let xt=new En(16775400,.9,3);xt.position.set(-12.5,1.68,-3.85),C.add(xt);let it=t-.62-(g+.06),b=g+.06+it/2,v=le(15789544,.44,.1,{map:r,bumpMap:zs,bumpScale:.015}),W=-me.d+.025,fe=Oe.x1+_/2+.25-_/2,de=Oe.x1+_/2+.25+_/2,ie=-8.5-.7,Le=-8.5+.7;{let F=ie-fe;if(F>.05){let Ee=new I(new Y(F,it,.022),v);Ee.position.set(fe+F/2,b,W),C.add(Ee)}}{let F=de-Le;if(F>.05){let Ee=new I(new Y(F,it,.022),v);Ee.position.set(Le+F/2,b,W),C.add(Ee)}}[-10.8,-9.5,-8.2].forEach(F=>kn(F,t,0,.32,1.2,4.5)),kn(-7.5,t,3.2,.38,1.4,6),kn(-12,t,-3,.38,1.4,6);{let F=[];F.push(qe(.06,.05,.115,12,12873797,-7.5,g+.118,-3.72,{r:.65,metal:.02})),F.push(qe(.054,.054,.018,10,6045208,-7.5,g+.184,-3.72,{noShadow:!0})),[[-.022,.018],[.018,-.016],[.002,.026]].forEach(([Ee,ge])=>{F.push(tt(.01,.115,.01,4885546,-7.5+Ee,g+.25,-3.72+ge,{r:.8,metal:0,noShadow:!0}))}),F.push(nt(.018,5,5941800,-7.48,g+.37,-3.71,{r:.9,noShadow:!0})),bn(F,.4)}let se=le(1842204,.3,.06),Me=tt(.22,.34,.28,1842204,-6.8,g+.23,-3.75,{mat:se});kt(Me,Me.position.clone(),new z(Me.position.x,Me.position.y-.4,Me.position.z));let Je=new un({color:new et(657930),roughness:.12,metalness:.05,transparent:!0,opacity:.65,side:wt}),Ve=new I(new _n(.055,.065,.21,14),Je);Ve.position.set(-6.8,g+.345,-3.82),C.add(Ve),kt(Ve,Ve.position.clone(),new z(Ve.position.x,Ve.position.y-.4,Ve.position.z)),tt(.13,.05,.02,666122,-6.8,g+.345,-3.615,{r:.5,metal:.1,noShadow:!0}),qe(.018,.018,.022,8,2773024,-6.74,g+.3,-3.608,{noShadow:!0})}function kg(){let n=le(9197608,.6,.02,{map:Vt,bumpMap:Vn,bumpScale:.05}),e=le(12599344,.8,.02),t=(rt.z1+rt.z2)/2,i=rt.z2-rt.z1,s=.99,r=rt.rise/rt.run,o=Math.atan(r);for(let m=1;m<=rt.steps-1;m++){let f=rt.x2-(m+.5)*rt.run,E=new I(new Y(rt.run+.04,.07,i+.04),n);E.position.set(f,m*rt.rise-.035,t),E.castShadow=E.receiveShadow=!0,C.add(E)}for(let m=1;m<=rt.steps;m++){let f=new I(new Y(.05,rt.rise,i+.04),e);f.position.set(rt.x2-m*rt.run,(m-.5)*rt.rise,t),f.receiveShadow=!0,C.add(f)}let a=rt.x2-rt.x1,l=Cn,c=Math.sqrt(a*a+l*l)+.5,h=(rt.x1+rt.x2)/2,d=(s+Cn+s)/2;[rt.z1+.07,rt.z2-.07].forEach(m=>{let f=new I(new Y(c,.08,.08),n);f.position.set(h,d,m),f.rotation.z=-o,f.castShadow=!0,C.add(f);for(let E=0;E<=rt.steps;E+=2){let x=E*rt.rise,A=rt.x2-E*rt.run,U=x+s,P=x+.03,L=U-P,$=new I(new Y(.045,L,.045),n);$.position.set(A,P+L/2,m),$.castShadow=!0,C.add($)}[[rt.x2,0],[rt.x1,Cn]].forEach(([E,x])=>{let A=new I(new Y(.11,s+.3,.11),n);A.position.set(E,x+(s+.3)/2,m),A.castShadow=!0,C.add(A)})});let u=Math.abs(Oe.x2-Oe.x1),p=le(N.floor,.55,.02,{map:Ll,bumpMap:Wo,bumpScale:.028,roughMap:_r,side:wt}),g=.14,_=(m,f,E,x)=>{let A=new I(new Y(m,g,f),p);A.position.set(E,Cn-g/2,x),A.receiveShadow=A.castShadow=!0,C.add(A)};_(u,Hn-Oe.z1,Oe.x1+u/2,(Oe.z1+Hn)/2),_(u,Oe.z2-zn,Oe.x1+u/2,(zn+Oe.z2)/2),_(Uo-Oe.x1,zn-Hn,(Oe.x1+Uo)/2,(Hn+zn)/2),_(Oe.x2-Fo,zn-Hn,(Fo+Oe.x2)/2,(Hn+zn)/2)}function Gg(){let n=Et.h,e=le(N.wall,.9,0,{map:mr,bumpMap:zs,bumpScale:.032,side:wt}),t=new I(new Ct(Math.abs(Oe.x2-Oe.x1),me.d*2,4,4),le(N.ceiling,.94,0));t.rotation.x=Math.PI/2,t.position.set(-9.5,Et.y+n,0),C.add(t);let i=Math.abs(Oe.x2-Oe.x1),s=me.d*2,r=Et.y,o=.9,a=1.4,l=1.9,c=o+a,h=l/2+.05,d=(ye,De,pe,te,R,y)=>{let T=new I(new Ct(ye,De,6,4),e);T.position.set(pe,te,R),T.rotation.y=y,T.receiveShadow=!0,C.add(T)};d(s,n,Oe.x2,r+n/2,0,-Math.PI/2);let u=-8.5,p=-11.5,g=me.d;[[Oe.x2-(u+h),n,(Oe.x2+u+h)/2,r+n/2],[u-h-(p+h),n,(u-h+p+h)/2,r+n/2],[p-h-Oe.x1,n,(p-h+Oe.x1)/2,r+n/2],[h*2,o,u,r+o/2],[h*2,o,p,r+o/2],[h*2,n-c,u,r+c+(n-c)/2],[h*2,n-c,p,r+c+(n-c)/2]].forEach(([ye,De,pe,te])=>d(ye,De,pe,te,g,Math.PI));let _=-8.5,m=-11.5,f=-me.d;[[Oe.x2-(_+h),n,(Oe.x2+_+h)/2,r+n/2],[_-h-(m+h),n,(_-h+m+h)/2,r+n/2],[m-h-Oe.x1,n,(m-h+Oe.x1)/2,r+n/2],[h*2,o,_,r+o/2],[h*2,o,m,r+o/2],[h*2,n-c,_,r+c+(n-c)/2],[h*2,n-c,m,r+c+(n-c)/2]].forEach(([ye,De,pe,te])=>d(ye,De,pe,te,f,0));let E=-1.5,x=1.5;[[me.d-(x+h),n,Oe.x1,r+n/2,(x+h+me.d)/2],[E-h- -me.d,n,Oe.x1,r+n/2,(-me.d+E-h)/2],[x-h-(E+h),n,Oe.x1,r+n/2,(E+h+x-h)/2],[h*2,o,Oe.x1,r+o/2,E],[h*2,o,Oe.x1,r+o/2,x],[h*2,n-c,Oe.x1,r+c+(n-c)/2,E],[h*2,n-c,Oe.x1,r+c+(n-c)/2,x]].forEach(([ye,De,pe,te,R])=>{let y=new I(new Ct(ye,De,6,4),e);y.position.set(pe,te,R),y.rotation.y=Math.PI/2,y.receiveShadow=!0,C.add(y)});let A=le(N.table,.62,.02,{map:Vt,bumpMap:Vn,bumpScale:.04}),U=.58,P=2.2,L=3,$=-10.5,M=-3,w=Zt(P,U,L,N.table,$,Et.y+U/2,M,.06,{mat:A}),X=le(N.couch,.8,.02,{map:ss,bumpMap:dn,bumpScale:.06}),q=Zt(P,.82,.12,N.couch,$,Et.y+U+.41,M-L/2+.06,.08,{mat:X}),_e=ft(16640236,.9,0,{map:ss,bumpMap:dn,bumpScale:.08,sheen:.42,sheenRough:.7,sheenColor:16767200}),O=Zt(P-.08,.28,L-.08,16640236,$,Et.y+U+.14,M,.1,{mat:_e}),G=ft(N.cushion,.88,0,{map:ss,bumpMap:dn,bumpScale:.07,sheen:.55,sheenRough:.65,sheenColor:16765144}),Q=Zt(P-.08,.12,L*.65,N.cushion,$,Et.y+U+.34,M+L*.18,.1,{mat:G}),oe=ft(N.pillow1,.9,0,{bumpMap:dn,bumpScale:.08,sheen:.45,sheenRough:.55,sheenColor:16766168}),re=[-10.9,-10.1].map(ye=>{let De=new I(Pt(.7,.22,.5,.07,10),oe);return De.position.set(ye,Et.y+U+.37,M-L/2+.34),C.add(De),De});bn([w,q,O,Q,...re],.52);let ne=-12.6,ue=-3;iu(ne,Et.y,ue);let ce=le(15657168,.86,.01);tt(.24,.034,.034,15657168,ne+.08,Et.y+.11,ue+.05,{mat:ce,noShadow:!0});let Ue=le(N.table,.68,.02,{map:Vt,bumpMap:Vn,bumpScale:.04}),j=new un({color:N.lampShade,roughness:.8,transmission:.14,emissive:new et(16772784),emissiveIntensity:.16,transparent:!0,side:vn});[$+P/2+.36,$-P/2-.36].forEach(ye=>{let De=new I(Pt(.48,.5,.48,.05,10),Ue);De.position.set(ye,Et.y+.25,M),De.castShadow=De.receiveShadow=!0,C.add(De),qe(.04,.04,.36,10,N.gold,ye,Et.y+.63,M,{r:.48,metal:.55}),qe(.22,.13,.24,14,N.lampShade,ye,Et.y+.92,M,{mat:j,noShadow:!0});let pe=new En(16769260,.55,4);pe.position.set(ye,Et.y+1,M),C.add(pe),Zt(.16,.04,.22,15255764,ye+(ye>$?-.1:.1),Et.y+.52,M+.08,.02)});let ae=2.6,we=2.2,Re=.62,be=-1,Be=Oe.x2-.02,Ye=Be-Re/2,ve=le(N.ceiling,.8,.01,{map:mr,bumpMap:zs,bumpScale:.015}),ke=le(N.winFrame,.7,.01);Zt(Re,we,ae,N.ceiling,Ye,Et.y+we/2,be,.02,{mat:ve});let k=new I(new Y(Re+.06,.07,ae+.08),ke);k.position.set(Ye,Et.y+we+.035,be),C.add(k),[-.67,.67].forEach(ye=>{let De=new I(new Y(.05,we-.06,ae/2-.04),ve);De.position.set(Be+.005,Et.y+we/2,be+ye),C.add(De);let pe=new I(new Y(.025,we-.3,ae/2-.22),ke);pe.position.set(Be+.03,Et.y+we/2,be+ye),C.add(pe);let te=ft(N.gold,.35,.65,{clearcoat:.2}),R=new I(new _n(.014,.014,.16,8),te);R.position.set(Be+.048,Et.y+we*.5,be+ye+-Math.sign(ye)*.26),C.add(R)});let Ke=new I(new Y(.08,we+.05,.05),ke);Ke.position.set(Be+.005,Et.y+we/2,be),C.add(Ke);let je=le(8013088,.72,.04),Qe=.88,ze=Cn+Qe/2,xt=Cn+Qe-.02,it=Cn+Qe*.48,b=rt.x1,v=rt.x2,W=rt.z1+.07,fe=rt.z2-.07,de=(ye,De,pe,te,R)=>{for(let H=0;H<=R;H++){let Z=H/R,Pe=ye+(pe-ye)*Z,Ne=De+(te-De)*Z;qe(.026,.026,Qe,6,8013088,Pe,ze,Ne,{mat:je,noShadow:!0})}let y=Math.abs(pe-ye)+.04,T=Math.abs(te-De)+.04,B=new I(new Y(y,.044,T),je);B.position.set((ye+pe)/2,xt,(De+te)/2),C.add(B);let D=new I(new Y(y,.03,T),je);D.position.set((ye+pe)/2,it,(De+te)/2),C.add(D)};de(b,W,v,W,5),de(b,fe,v,fe,5),de(v,W,v,fe,3);let ie=1.4,Le=1.9,se=Et.y+.9,Me=se+ie/2,Je=le(N.winFrame,.82,.02),Ve=new un({color:new et(13165806),roughness:.04,metalness:.06,transparent:!0,opacity:.3,side:wt,envMapIntensity:.8}),F=-me.d+.06;[[-8.5],[-11.5]].forEach(([ye])=>{[[0,se+ie],[0,se]].forEach(([,te])=>{let R=new I(new Y(Le+.14,.08,.12),Je);R.position.set(ye,te,F),C.add(R)}),[[-Le/2-.04],[Le/2+.04]].forEach(([te])=>{let R=new I(new Y(.1,ie+.1,.12),Je);R.position.set(ye+te,Me,F),C.add(R)});let De=new I(new Y(.06,ie,.08),Je);De.position.set(ye,Me,F),C.add(De);let pe=new I(new Y(Le,ie,.03),Ve);pe.position.set(ye,Me,F+.01),C.add(pe),pe.position.clone(),new z(pe.position.x,Et.y+.5+ie/2,pe.position.z)});let Ee=Oe.x1+.06;[-1.5,1.5].forEach(ye=>{[[se+ie],[se]].forEach(([te])=>{let R=new I(new Y(.12,.08,Le+.14),Je);R.position.set(Ee,te,ye),C.add(R)}),[[-Le/2-.04],[Le/2+.04]].forEach(([te])=>{let R=new I(new Y(.12,ie+.1,.1),Je);R.position.set(Ee,Me,ye+te),C.add(R)});let De=new I(new Y(.08,ie,.06),Je);De.position.set(Ee,Me,ye),C.add(De);let pe=new I(new Y(.03,ie,Le),Ve);pe.position.set(Ee+.01,Me,ye),C.add(pe),pe.position.clone(),new z(pe.position.x,Et.y+.5+ie/2,pe.position.z)});let ge=me.d-.06;[u,p].forEach(ye=>{[[0,se+ie],[0,se]].forEach(([,te])=>{let R=new I(new Y(Le+.14,.08,.12),Je);R.position.set(ye,te,ge),C.add(R)}),[[-Le/2-.04],[Le/2+.04]].forEach(([te])=>{let R=new I(new Y(.1,ie+.1,.12),Je);R.position.set(ye+te,Me,ge),C.add(R)});let De=new I(new Y(.06,ie,.08),Je);De.position.set(ye,Me,ge),C.add(De);let pe=new I(new Y(Le,ie,.03),Ve);pe.position.set(ye,Me,ge-.01),C.add(pe)});let Te=new I(new Ct(1.4,1),le(13150336,.95,0,{map:Fi,transp:!0,opacity:.72}));Te.rotation.x=-Math.PI/2,Te.position.set(-10.5,Et.y+.002,-1.5),Te.receiveShadow=!0,C.add(Te);let Se=le(9285512,.94,0,{map:Fi}),Ce=new I(new Y(6.8,.012,5.6),Se);Ce.position.set(-10.5,Et.y+.008,-1.25),Ce.receiveShadow=!0,C.add(Ce);let Fe=Et.y+Et.h;kn(-8.5,Fe,.5,.38,1.6,6),kn(-11.5,Fe,-2,.38,1.6,6),kn(-8.5,Fe,-3.5,.34,1.4,5.5)}function Vg(){let n=vt((y,T,B)=>{y.fillStyle="#F5B0A0",y.fillRect(0,0,T,B),y.strokeStyle="rgba(200,70,60,0.22)",y.lineWidth=5;for(let D=0;D<8;D++){let H=T*(D*.137+.05)%T,Z=B*(D*.173+.07)%B;for(let Pe=10;Pe<80;Pe+=22)y.beginPath(),y.arc(H,Z,Pe,0,Math.PI*2),y.stroke()}y.strokeStyle="rgba(230,120,80,0.28)",y.lineWidth=3;for(let D=0;D<10;D++){let H=T*(D*.1+.04)%T,Z=B*(D*.13+.06)%B;y.beginPath(),y.moveTo(H,Z+70),y.bezierCurveTo(H-28,Z+45,H+28,Z+20,H,Z),y.stroke(),y.beginPath(),y.arc(H,Z-14,9,0,Math.PI*2),y.stroke()}y.fillStyle="rgba(240,160,80,0.38)";for(let D=0;D<40;D++){let H=T*(D*.025+.01)%T,Z=B*(D*.033+.02)%B;y.beginPath(),y.arc(H,Z,5,0,Math.PI*2),y.fill()}},512,512,4,4),e=vt((y,T,B)=>{y.fillStyle="#E89050",y.fillRect(0,0,T,B),y.strokeStyle="rgba(160,50,10,0.22)",y.lineWidth=5;for(let D=0;D<6;D++){let H=T*(D*.16+.08)%T,Z=B*(D*.19+.05)%B;for(let Pe=8;Pe<90;Pe+=24)y.beginPath(),y.arc(H,Z,Pe,0,Math.PI*2),y.stroke()}y.strokeStyle="rgba(255,210,110,0.32)",y.lineWidth=3;for(let D=0;D<9;D++){let H=T*(D*.11+.05)%T,Z=B*(D*.14+.03)%B;y.beginPath(),y.moveTo(H,Z+65),y.bezierCurveTo(H-25,Z+40,H+25,Z+18,H,Z),y.stroke(),y.beginPath(),y.arc(H,Z-12,8,0,Math.PI*2),y.stroke()}y.fillStyle="rgba(255,230,100,0.42)";for(let D=0;D<35;D++){let H=T*(D*.029+.01)%T,Z=B*(D*.037+.02)%B;y.beginPath(),y.arc(H,Z,4,0,Math.PI*2),y.fill()}},512,512,4,4),t=vt((y,T,B)=>{y.fillStyle="#F08880",y.fillRect(0,0,T,B),y.strokeStyle="rgba(180,50,50,0.20)",y.lineWidth=4;for(let D=0;D<7;D++){let H=T*(D*.145+.06)%T,Z=B*(D*.165+.08)%B;for(let Pe=9;Pe<70;Pe+=18)y.beginPath(),y.arc(H,Z,Pe,0,Math.PI*2),y.stroke()}y.fillStyle="rgba(250,200,160,0.35)";for(let D=0;D<30;D++){let H=T*(D*.033+.01)%T,Z=B*(D*.041+.02)%B;y.beginPath(),y.arc(H,Z,6,0,Math.PI*2),y.fill()}},512,512,4,4),i=vt((y,T,B)=>{let D=y.createLinearGradient(0,0,0,B);D.addColorStop(0,"#C8893A"),D.addColorStop(.5,"#B87830"),D.addColorStop(1,"#A86820"),y.fillStyle=D,y.fillRect(0,0,T,B),y.strokeStyle="rgba(80,40,10,0.22)",y.lineWidth=2;for(let H=0;H<B;H+=32)y.beginPath(),y.moveTo(0,H),y.lineTo(T,H),y.stroke();y.strokeStyle="rgba(80,40,10,0.14)",y.lineWidth=1;for(let H=0;H<T;H+=9)y.beginPath(),y.moveTo(H,0),y.lineTo(H+Math.sin(H)*3,B),y.stroke()},512,512,5,5),s=vt((y,T,B)=>{y.fillStyle="#EBE7E0",y.fillRect(0,0,T,B),y.strokeStyle="rgba(175,168,155,0.55)",y.lineWidth=2;let D=28;for(let H=0;H<=T;H+=D)y.beginPath(),y.moveTo(H,0),y.lineTo(H,B),y.stroke();for(let H=0;H<=B;H+=D)y.beginPath(),y.moveTo(0,H),y.lineTo(T,H),y.stroke()},512,512,5,5),r=le(N.wall,.88,0,{map:mr,bumpMap:zs,bumpScale:.038,side:wt}),o=r,a=r,l=le(12089392,.6,.01,{map:i}),c=le(15460320,.42,.05,{map:s}),h=le(N.ceiling,.94,0),d=le(N.gold,.5,.4),u=le(N.gold,.4,.5),p=(y,T,B,D,H)=>{let Z=new I(new Ct(y,T),H||l);Z.rotation.x=-Math.PI/2,Z.position.set(B,.002,D),Z.receiveShadow=!0,C.add(Z)},g=(y,T,B,D,H,Z,Pe)=>{let Ne=new I(new Y(y,T,.12),Pe||o);Ne.position.set(B,D,H),Z&&(Ne.rotation.y=Z),Ne.receiveShadow=!0,C.add(Ne)},_=(y,T,B,D,H)=>{let Z=new I(new Ct(y,T),h);Z.rotation.x=Math.PI/2,Z.position.set(B,H,D),C.add(Z)},m=(y,T,B,D,H,Z,Pe,Ne,We)=>{Ne=Ne||1,We=We||2.1;let $e=y/2,ct=Ne/2,ht=B-D,Ut=$e+ht-ct;Ut>.05&&g(Ut,T,D-($e-Ut/2),T/2,H,Z,Pe);let It=$e-ht-ct;It>.05&&g(It,T,D+($e-It/2),T/2,H,Z,Pe);let Bt=T-We;Bt>.05&&g(Ne,Bt,B,We+Bt/2,H,Z,Pe)},f=(y,T,B,D,H,Z,Pe,Ne)=>{Ne=Ne||u;let We=D==="x"?.09:H+.14,$e=Z+.14,ct=D==="x"?H+.14:.09,ht=new I(new Y(We,$e,ct),Ne);ht.position.set(y,T,B),C.add(ht);let Ut=new On({map:Pe,side:vn}),It=D==="x"?.04:H,Bt=D==="x"?H:.04,sn=new I(new Y(It,Z,Bt),Ut);sn.position.set(y+(D==="x"?.03:0),T,B+(D==="x"?0:.03)),C.add(sn)},E=(y,T,B,D,H,Z)=>{let Pe=D==="x"?.1:H+.2,Ne=Z+.2,We=D==="x"?H+.2:.1,$e=new I(new Y(Pe,Ne,We),u);$e.position.set(y,T,B),C.add($e);let ct=new un({color:13426152,roughness:.03,metalness:.22,transparent:!0,opacity:.55}),ht=D==="x"?.04:H,Ut=D==="x"?H:.04,It=new I(new Y(ht,Z,Ut),ct);It.position.set(y+(D==="x"?.03:0),T,B+(D==="x"?0:.03)),C.add(It)},x=(y,T,B,D,H)=>{let Z=vt(($e,ct,ht)=>{$e.fillStyle=H||"#E85050",$e.fillRect(0,0,ct,ht),$e.strokeStyle="rgba(255,255,255,0.5)",$e.lineWidth=3;for(let Ut=8;Ut<44;Ut+=10)$e.beginPath(),$e.arc(ct/2,ht/2,Ut,0,Math.PI*2),$e.stroke();$e.fillStyle="rgba(255,230,180,0.6)",$e.beginPath(),$e.arc(ct/2,ht/2,8,0,Math.PI*2),$e.fill()},64,64),Pe=new On({map:Z}),Ne=new I(new _n(.14,.14,.03,16),Pe);D==="x"?Ne.rotation.z=Math.PI/2:Ne.rotation.x=Math.PI/2,Ne.position.set(y,T,B),C.add(Ne);let We=new I(new Bn(.15,.016,6,20),u);D==="x"&&(We.rotation.y=Math.PI/2),We.position.set(y,T,B),C.add(We)},A=(y,T,B,D)=>{let H=D==="x"?.06:.22,Z=D==="x"?.22:.06,Pe=new I(new Y(H,.28,Z),u);Pe.position.set(y,T,B),C.add(Pe),qe(.04,.06,.18,8,16312512,y+(D==="x"?.12:0),T-.06,B+(D==="x"?0:.12),{noShadow:!0});let Ne=new En(16765056,.45,3.5);Ne.position.set(y+(D==="x"?.16:0),T-.04,B+(D==="x"?0:.16)),C.add(Ne)},U=(y,T,B,D,H,Z)=>{let Pe=new un({color:13166832,roughness:.04,metalness:.06,transparent:!0,opacity:.28,side:wt}),Ne=le(N.winFrame,.8,.01);if(D==="z"){let We=new I(new Y(H-.06,Z-.06,.04),Pe);We.position.set(y,T,B),C.add(We),[[H+.14,.08,0,-Z/2-.05],[H+.14,.08,0,Z/2+.05],[.08,Z+.1,-H/2-.05,0],[.08,Z+.1,H/2+.05,0]].forEach(([ct,ht,Ut,It])=>{let Bt=new I(new Y(ct,ht,.22),Ne);Bt.position.set(y+Ut,T+It,B),C.add(Bt)}),[[H-.06,.06,0,0],[.06,Z-.06,0,0]].forEach(([ct,ht,Ut,It])=>{let Bt=new I(new Y(ct,ht,.14),Ne);Bt.position.set(y+Ut,T+It,B),C.add(Bt)});let $e=new I(new Y(H+.12,.05,.16),Ne);$e.position.set(y,T-Z/2+.01,B+.08),C.add($e)}else{let We=new I(new Y(.04,Z-.06,H-.06),Pe);We.position.set(y,T,B),C.add(We),[[.2,.08,-Z/2-.05],[.2,.08,Z/2+.05]].forEach(([Ut,It,Bt])=>{let sn=new I(new Y(Ut,It,H+.14),Ne);sn.position.set(y,T+Bt,B),C.add(sn)}),[[.2,Z+.1,-H/2-.05],[.2,Z+.1,H/2+.05]].forEach(([Ut,It,Bt])=>{let sn=new I(new Y(Ut,It,.08),Ne);sn.position.set(y,T,B+Bt),C.add(sn)});let $e=new I(new Y(.12,.06,H-.06),Ne);$e.position.set(y,T,B),C.add($e);let ct=new I(new Y(.12,Z-.06,.06),Ne);ct.position.set(y,T,B),C.add(ct);let ht=new I(new Y(.18,.05,H+.12),Ne);ht.position.set(y+.09,T-Z/2+.01,B),C.add(ht)}},P=vt((y,T,B)=>{y.fillStyle="#FCF0D8",y.fillRect(0,0,T,B),y.fillStyle="#C87840",y.beginPath(),y.ellipse(T/2,B*.78,T*.38,B*.14,0,0,Math.PI*2),y.fill(),[[.38,.58,"#E83030"],[.55,.54,"#FF8820"],[.62,.62,"#E8E020"],[.44,.66,"#60B030"],[.68,.56,"#E030A0"]].forEach(([D,H,Z])=>{y.fillStyle=Z,y.beginPath(),y.arc(T*D,B*H,T*.09,0,Math.PI*2),y.fill(),y.fillStyle="rgba(255,255,255,0.3)",y.beginPath(),y.arc(T*D-4,B*H-4,T*.03,0,Math.PI*2),y.fill()}),y.strokeStyle="rgba(100,50,0,0.18)",y.lineWidth=2,y.strokeRect(4,4,T-8,B-8)},128,128),L=vt((y,T,B)=>{y.fillStyle="#F8EEDC",y.fillRect(0,0,T,B);let D=["#E83060","#FF8830","#E8D020","#60C040","#8060E8"];for(let H=0;H<6;H++){let Z=T*(.2+H*.12+Math.sin(H)*.06),Pe=B*(.55+Math.cos(H*.7)*.15);y.strokeStyle="rgba(60,120,20,0.7)",y.lineWidth=2,y.beginPath(),y.moveTo(Z,B*.9),y.bezierCurveTo(Z-15,B*.7,Z+10,B*.6,Z,Pe),y.stroke(),y.fillStyle=D[H%D.length];for(let Ne=0;Ne<5;Ne++){let We=Ne*Math.PI*2/5;y.beginPath(),y.ellipse(Z+Math.cos(We)*14,Pe+Math.sin(We)*14,10,6,We,0,Math.PI*2),y.fill()}y.fillStyle="#FFE050",y.beginPath(),y.arc(Z,Pe,6,0,Math.PI*2),y.fill()}y.strokeStyle="rgba(100,50,0,0.15)",y.lineWidth=2,y.strokeRect(4,4,T-8,B-8)},128,128),$=vt((y,T,B)=>{y.fillStyle="#301828",y.fillRect(0,0,T,B);let D=["#FF6040","#FFB030","#40D0C0","#E040A0","#80E050"];for(let H=0;H<12;H++)y.fillStyle=D[H%D.length]+Math.floor(180+H*6).toString(16),y.beginPath(),y.arc(T*(.1+H*.078),B*(.2+Math.sin(H*.9)*.55),T*(.07+H*.007),0,Math.PI*2),y.fill();y.strokeStyle="rgba(255,255,255,0.2)",y.lineWidth=2,y.strokeRect(4,4,T-8,B-8)},128,128),M=vt((y,T,B)=>{y.fillStyle="#E8D8B0",y.fillRect(0,0,T,B),[[.28,.65,"#A06030"],[.68,.68,"#606060"]].forEach(([D,H,Z],Pe)=>{y.fillStyle=Z,y.beginPath(),y.ellipse(T*D,B*H,T*.12,B*.15,0,0,Math.PI*2),y.fill(),y.beginPath(),y.arc(T*D,B*(H-.18),T*.085,0,Math.PI*2),y.fill(),y.beginPath(),y.moveTo(T*(D-.06),B*(H-.24)),y.lineTo(T*(D-.1),B*(H-.32)),y.lineTo(T*(D-.02),B*(H-.26)),y.fill(),y.beginPath(),y.moveTo(T*(D+.06),B*(H-.24)),y.lineTo(T*(D+.1),B*(H-.32)),y.lineTo(T*(D+.02),B*(H-.26)),y.fill(),y.fillStyle="#FFD040",y.beginPath(),y.arc(T*(D-.03),B*(H-.19),T*.02,0,Math.PI*2),y.fill(),y.beginPath(),y.arc(T*(D+.03),B*(H-.19),T*.02,0,Math.PI*2),y.fill(),y.fillStyle=Z}),y.strokeStyle="rgba(100,60,0,0.18)",y.lineWidth=2,y.strokeRect(4,4,T-8,B-8)},128,128),w=vt((y,T,B)=>{y.fillStyle="#88B840",y.fillRect(0,0,T,B);let D=T*.52,H=B*.48;y.strokeStyle="rgba(40,80,10,0.6)",y.lineWidth=3,y.beginPath(),y.moveTo(D,B),y.bezierCurveTo(D-10,B*.7,D+8,B*.55,D,H+18),y.stroke(),y.fillStyle="#F8C020";for(let Z=0;Z<12;Z++){let Pe=Z*Math.PI*2/12;y.beginPath(),y.ellipse(D+Math.cos(Pe)*26,H+Math.sin(Pe)*26,14,8,Pe,0,Math.PI*2),y.fill()}y.fillStyle="#603010",y.beginPath(),y.arc(D,H,18,0,Math.PI*2),y.fill(),y.fillStyle="rgba(255,200,80,0.4)";for(let Z=0;Z<8;Z++)y.beginPath(),y.arc(D+Math.sin(Z)*8,H+Math.cos(Z)*8,3,0,Math.PI*2),y.fill();y.strokeStyle="rgba(80,40,0,0.15)",y.lineWidth=2,y.strokeRect(4,4,T-8,B-8)},128,128),X=Ze.x2-Ze.x1,q=(Ze.x1+Ze.x2)/2;p(X,Ze.z2-Ze.z1,q,0),_(X,Ze.z2-Ze.z1,q,0,Ze.h);{{let $e=Ze.x1+.1,ht=-16.5-$e;ht>.05&&g(ht,Ze.h,$e+ht/2,Ze.h/2,Ze.z2,0,o)}{let ht=Ze.x2-.1- -15.5;ht>.05&&g(ht,Ze.h,-15.5+ht/2,Ze.h/2,Ze.z2,0,o)}{let ct=Ze.h-2.1;ct>.05&&g(1,ct,-16,2.1+ct/2,Ze.z2,0,o)}let H=le(7226400,.62,.02,{map:Vt,bumpMap:Vn,bumpScale:.04}),Z=new I(new Y(1-.05,2,.05),H),Pe=-16-1/2,Ne=new Kn;Ne.position.set(Pe,1,Ze.z2+.12),Ne.rotation.y=-Math.PI*.4,Z.position.set((1-.05)/2,0,0),Ne.add(Z);let We=new I(new _n(.025,.025,.05,8),ft(N.gold,.35,.65,{clearcoat:.2}));We.rotation.z=Math.PI/2,We.position.set(1-.1,0,.04),Ne.add(We),C.add(Ne)}kn(q,Ze.h,0,.32,1,6);{let y=le(N.ceiling,.94,0),T=Ze.x2-Ze.x1,B=Ze.z2-Ze.z1,D=Ge.h-Ze.h,H=new I(new Y(T,D,.14),y);H.position.set((Ze.x1+Ze.x2)/2,Ze.h+D/2,Ze.z1),C.add(H);let Z=xe.h-Ze.h,Pe=new I(new Y(.14,Z,B),y);Pe.position.set(Ze.x1,Ze.h+Z/2,(Ze.z1+Ze.z2)/2),C.add(Pe);let Ne=new I(new Y(.14,Z,xe.z2-Ze.z2),y);Ne.position.set(xe.x2,Ze.h+Z/2,(Ze.z2+xe.z2)/2),C.add(Ne);let We=Oe.h-Ze.h,$e=new I(new Y(.14,We,B),y);$e.position.set(Ze.x2,Ze.h+We/2,(Ze.z1+Ze.z2)/2),C.add($e)}{let y=le(12601416,.88,0,{map:Fi}),T=new I(new Y(X-.6,.012,.8),y);T.position.set(q,.006,0),C.add(T)}tt(X,.07,.03,N.gold,q,.035,Ze.z2,{noShadow:!0});let _e=He.x2-He.x1,O=He.z2-He.z1,G=(He.x1+He.x2)/2,Q=(He.z1+He.z2)/2;p(_e,O,G,Q,c),_(_e,O,G,Q,He.h);{let B=He.h*.55,D=B-.78/2,H=B+.78/2;g(1.5,He.h,-17.25,He.h/2,He.z2,0,a),g(1,D,G,D/2,He.z2,0,a),g(1,He.h-H,G,H+(He.h-H)/2,He.z2,0,a),g(1.5,He.h,-14.75,He.h/2,He.z2,0,a),U(G,B,He.z2,"z",1,.78)}g(O,He.h,He.x1,He.h/2,Q,Math.PI/2,a),tt(.04,He.h,O,14714968,-14.43,He.h/2,Q,{mat:a,noShadow:!0});let oe=le(15789288,.38,.08,{map:s});tt(_e-.4,.85,.04,15789288,G-.2,.425,He.z2-.12,{mat:oe,noShadow:!0}),tt(.04,.85,O,15789288,He.x1+.12,.425,Q,{mat:oe,noShadow:!0}),kn(G,He.h,Q,.3,1,5.5),E(He.x2-.2,1.38,He.z1+.5,"x",.55,.6),f(G-.95,1.55,He.z2-.15,"z",.4,.5,Io,u),f(G+.95,1.55,He.z2-.15,"z",.4,.5,L,u),x(G,1.95,He.z2-.1,"z","#F0A030");let re=le(16052460,.3,.02,{map:Ht}),ne=Zt(.36,.4,.62,16052460,He.x2-.62,.2,He.z1+1,.06,{mat:re}),ue=Zt(.34,.3,.2,16052460,He.x2-.62,.55,He.z1+.74,.05,{mat:re}),ce;{let y=le(3814704,.6,.01);ce=new I(new Bn(.17,.028,8,24),y),ce.rotation.x=Math.PI/2,ce.position.set(He.x2-.62,.4,He.z1+1.06),C.add(ce)}bn([ne,ue,ce],.15);let Ue=le(16445160,.28,.02,{map:Ht}),j=Zt(.82,.52,1.7,16445160,He.x1+.52,.26,Q+.3,.1,{mat:Ue}),ae=Zt(.66,.34,1.54,15259856,He.x1+.52,.4,Q+.3,.07,{mat:le(14733516,.35,.02)});bn([j,ae],.2),[[-.72,-.68],[.72,-.68],[-.72,1.28],[.72,1.28]].forEach(([y,T])=>{qe(.034,.04,.16,8,N.gold,He.x1+.52+y,.08,Q+.3+T,{mat:u,noShadow:!0})}),tt(.06,.26,.06,N.chrome,He.x1+.6,.7,Q+1.1,{r:.3,metal:.7}),tt(.26,.04,.04,N.chrome,He.x1+.6,.82,Q+1.1,{r:.3,metal:.7});let we=le(9199664,.72,.03,{map:Vt}),Re=Zt(.72,.84,.48,9199664,He.x2-.62,.42,He.z1+.4,.05,{mat:we}),be=le(15262942,.36,.05,{map:Ht}),Be=new I(new Y(.74,.05,.5),be);Be.position.set(He.x2-.62,.865,He.z1+.4),C.add(Be);let Ye=new I(new _n(.17,.14,.12,16),le(15789288,.26,.02));Ye.position.set(He.x2-.62,.92,He.z1+.4),C.add(Ye),bn([Re,Be,Ye],.35),qe(.016,.016,.16,8,N.chrome,He.x2-.62,1,He.z1+.3,{r:.3,metal:.72,noShadow:!0}),tt(.04,.04,.54,N.chrome,He.x1+.06,1.12,Q-.1,{r:.3,metal:.7,noShadow:!0}),tt(.05,.2,.32,15767704,He.x1+.1,1.12,Q,{noShadow:!0});{let y=le(15765632,.92,0,{map:Fi}),T=new I(new Y(.64,.012,.96),y);T.position.set(He.x2-.62,.006,He.z1+1.1),C.add(T)}A(He.x1+.06,1.8,Q,"x");let ve=Ge.x2-Ge.x1,ke=Ge.z2-Ge.z1,k=(Ge.x1+Ge.x2)/2,Ke=(Ge.z1+Ge.z2)/2;p(ve,ke,k,Ke),_(ve,ke,k,Ke,Ge.h);{let y=Ge.h*.52,T=1.1,B=.88,D=y-B/2,H=y+B/2,Z=k-1,Pe=k+1;g(.45,Ge.h,Ge.x1+.225,Ge.h/2,Ge.z1,0,r),g(.9,Ge.h,k,Ge.h/2,Ge.z1,0,r),g(.45,Ge.h,Ge.x2-.225,Ge.h/2,Ge.z1,0,r),[Z,Pe].forEach(Ne=>{g(T,D,Ne,D/2,Ge.z1,0,r),g(T,Ge.h-H,Ne,H+(Ge.h-H)/2,Ge.z1,0,r)}),U(Z,y,Ge.z1,"z",T,B),U(Pe,y,Ge.z1,"z",T,B)}g(ke,Ge.h,Ge.x1,Ge.h/2,Ke,Math.PI/2,r);{let y=le(N.ceiling,.94,0),T=Ge.h-Ze.h,B=new I(new Y(ve,T,.14),y);B.position.set(k,Ze.h+T/2,Ge.z2),C.add(B);let D=Oe.h-Ge.h,H=new I(new Y(.14,D,ke),y);H.position.set(Ge.x2,Ge.h+D/2,Ke),C.add(H)}kn(k-.7,Ge.h,Ke,.36,1.2,6.5),kn(k+.7,Ge.h,Ke,.36,1.2,6.5);let je=new En(16755268,.5,2.2);je.position.set(k,1.06,Ke),C.add(je);let Qe=le(N.table,.55,.02,{map:Vt,bumpMap:Vn,bumpScale:.04}),ze=ft(N.gold,.46,.52),xt=Zt(2.2,.08,1,N.table,k,.76,Ke,.04,{mat:Qe}),it=[[-1,-.44],[1,-.44],[-1,.44],[1,.44]].map(([y,T])=>qe(.03,.03,.72,8,N.gold,k+y,.36,Ke+T,{mat:ze,noShadow:!0})),b=[15222856,4237424,6840528,15237168],v=[[k-1.35,Ke,Math.PI/2],[k+1.35,Ke,-Math.PI/2],[k,Ke-.68,0],[k,Ke+.68,Math.PI]].map(([y,T,B],D)=>{let H=new Kn;H.position.set(y,0,T),H.rotation.y=B,C.add(H);let Z=le(b[D],.82,0),Pe=new I(Pt(.46,.05,.44,.04,8),Z);Pe.position.set(0,.44,0),H.add(Pe);let Ne=le(3811344,.75,.02,{map:Vt}),We=new I(Pt(.46,.48,.06,.04,8),Ne);return We.position.set(0,.72,-.2),H.add(We),[[-.2,-.18],[.2,-.18],[-.2,.18],[.2,.18]].forEach(([$e,ct])=>{let ht=new I(new _n(.02,.02,.44,6),ze);ht.position.set($e,.22,ct),H.add(ht)}),H}),W=[];W.push(qe(.036,.03,.26,10,16051408,k,.93,Ke,{noShadow:!0})),W.push(qe(.022,.022,.04,8,16764032,k,1.08,Ke,{noShadow:!0})),[[-.8],[.8]].forEach(([y])=>{W.push(qe(.16,.16,.012,16,16052456,k+y,.8,Ke,{noShadow:!0}));let T=new un({color:14741748,roughness:.04,transparent:!0,opacity:.3,side:wt});W.push(qe(.04,.025,.14,12,14741748,k+y,.87,Ke-.16,{mat:T,noShadow:!0})),W.push(qe(.022,.022,.06,8,13164776,k+y,.76,Ke-.16,{mat:T,noShadow:!0}))}),bn([xt,...it,...W],.46),bn([...v],.3),f(k,1.45,Ge.z1+.15,"z",.44,.54,L,u),x(k-1,2.34,Ge.z1+.1,"z","#E84848"),x(k+1,2.34,Ge.z1+.1,"z","#4090E8"),A(k-1.78,1.55,Ge.z1+.12,"z"),A(k+1.78,1.55,Ge.z1+.12,"z"),f(Ge.x1+.15,1.7,Ke-.8,"x",.48,.44,w,u),E(Ge.x1+.15,1.55,Ke+1.4,"x",.48,.58);let fe=le(8015912,.68,.03,{map:Vt});Zt(.4,.82,1.6,8015912,Ge.x1+.22,.41,Ke,.04,{mat:fe});let de=le(11565104,.42,.04,{map:Vt});tt(.42,.04,1.62,11565104,Ge.x1+.22,.84,Ke,{mat:de,noShadow:!0}),qe(.055,.045,.2,10,N.potClay,Ge.x1+.22,.96,Ke-.55,{noShadow:!0,map:Ht}),nt(.085,8,N.plantGreen,Ge.x1+.22,1.11,Ke-.55,{noShadow:!0}),qe(.04,.034,.22,10,11034672,Ge.x1+.22,.96,Ke+.1,{noShadow:!0,map:Ht}),nt(.06,7,15216736,Ge.x1+.22,1.13,Ke+.1,{noShadow:!0}),qe(.1,.1,.012,16,16044208,Ge.x1+.22,.855,Ke+.55,{noShadow:!0}),tt(ve,.07,.03,N.gold,k,.035,Ge.z1,{noShadow:!0}),tt(ke,.07,.03,N.gold,Ge.x1,.035,Ke,{ry:Math.PI/2,noShadow:!0});{let y=le(13656112,.9,0,{map:Fi}),T=new I(new Y(ve-.6,.012,ke-.5),y);T.position.set(k,.006,Ke),C.add(T)}{let y=le(13940864,.8,0);[[-.35,Ke+.12],[.42,Ke-.22],[-.1,Ke+.38],[.25,Ke-.44]].forEach(([T,B])=>{let D=new I(new Nn(.028,5,4),y);D.position.set(k+T,.04,B),D.castShadow=!1,C.add(D),is.push(D)})}let ie=xe.x2-xe.x1,Le=xe.z2-xe.z1,se=(xe.x1+xe.x2)/2,Me=(xe.z1+xe.z2)/2;p(ie,Le,se,Me),_(ie,Le,se,Me,xe.h),g(ie,xe.h,se,xe.h/2,xe.z2,0,r);{let B=xe.h*.52,D=B-.9/2,H=B+.9/2;g((ie-1.2)/2,xe.h,xe.x1+(ie-1.2)/4,xe.h/2,xe.z1,0,r),g((ie-1.2)/2,xe.h,xe.x2-(ie-1.2)/4,xe.h/2,xe.z1,0,r),g(1.2,D,se,D/2,xe.z1,0,r),g(1.2,xe.h-H,se,H+(xe.h-H)/2,xe.z1,0,r),U(se,B,xe.z1,"z",1.2,.9)}{let T=xe.h-.2,B=.1+T/2,D=Me-1,H=Me+1;g(.3,xe.h,xe.x1,xe.h/2,xe.z1+.15,Math.PI/2,r),g(.6,xe.h,xe.x1,xe.h/2,Me,Math.PI/2,r),g(.3,xe.h,xe.x1,xe.h/2,xe.z2-.15,Math.PI/2,r),[D,H].forEach(Z=>{g(1.4,.1,xe.x1,.05,Z,Math.PI/2,r),g(1.4,.1,xe.x1,xe.h-.05,Z,Math.PI/2,r)}),U(xe.x1,B,D,"x",1.4,T),U(xe.x1,B,H,"x",1.4,T)}kn(se+.6,xe.h,xe.z1+.5,.32,1.1,5),kn(se-.5,xe.h,Me,.36,1.2,6),f(se-1.55,1.7,xe.z1+.1,"z",.44,.42,Do,u),f(se+1.55,1.7,xe.z1+.1,"z",.4,.42,Lo,u),E(xe.x1+.15,.92,Me,"x",.26,.5),f(xe.x1+.15,1.7,Me,"x",.44,.38,w,u),A(-20.93,1.55,xe.z1+.12,"z"),A(-19.06,1.55,xe.z1+.12,"z");let Je=le(N.table,.58,.01,{map:Vt,bumpMap:Vn,bumpScale:.04}),Ve=[];Ve.push(Zt(1.6,.07,.8,N.table,se+.6,.75,xe.z1+.52,.03,{mat:Je})),[[.7,.16],[.7,.62],[-.5,.16],[-.5,.62]].forEach(([y,T])=>Ve.push(tt(.04,.74,.04,N.table,se+.6+y,.37,xe.z1+T,{mat:Je,noShadow:!0}))),Ve.push(tt(.04,.5,.76,1710618,se+.65,1.28,xe.z1+.38,{r:.5,metal:.05}));{let y=new on({color:530472,toneMapped:!1}),T=new I(new Y(.02,.42,.68),y);T.position.set(se+.66,1.28,xe.z1+.38),C.add(T),Ve.push(T)}Ve.push(tt(.04,.16,.18,2763306,se+.6,.83,xe.z1+.38,{r:.3,metal:.1,noShadow:!0})),Ve.push(tt(.04,.024,.4,12631226,se+.36,.774,xe.z1+.4,{r:.5,metal:.04,noShadow:!0})),Ve.push(nt(.03,6,12631226,se+.04,.775,xe.z1+.38,{noShadow:!0}));let F=le(2763312,.82,.01),Ee=qe(.22,.2,.06,14,2763312,se-.08,.44,xe.z1+.55,{mat:F,noShadow:!0}),ge=Zt(.42,.5,.08,2763312,se-.08,.72,xe.z1+.3,.04,{mat:F,noShadow:!0}),Te=qe(.024,.024,.44,6,8947848,se-.08,.22,xe.z1+.55,{noShadow:!0}),Se=[];{let y=ft(13918282,.92,0,{map:Yh,bumpMap:dn,bumpScale:.08,sheen:.32,sheenRough:.78,sheenColor:16769232}),T=new I(Pt(.46,.08,.34,.05,8),y);T.position.set(se-.08,.98,xe.z1+.3),T.rotation.z=.1,C.add(T),Se.push(T);let B=new I(Pt(.38,.06,.28,.04,6),y);B.position.set(se-.06,.91,xe.z1+.44),B.rotation.z=.06,B.rotation.x=.18,C.add(B),Se.push(B);let D=new I(Pt(.3,.05,.22,.03,6),y);D.position.set(se-.04,.85,xe.z1+.55),D.rotation.z=.04,D.rotation.x=.28,C.add(D),Se.push(D)}bn([Ee,ge,Te,...Se],.3),Ve.push(tt(.12,.24,.04,N.bookRed,se+.14,.9,xe.z1+.2,{r:.5,metal:0})),Ve.push(tt(.12,.2,.04,N.bookBlue,se+.2,.88,xe.z1+.2,{r:.5,metal:0})),Ve.push(qe(.05,.042,.1,10,N.potClay,se+1.28,.8,xe.z1+.16,{noShadow:!0,map:Ht})),Ve.push(nt(.07,7,N.plantGreen,se+1.28,.9,xe.z1+.16,{noShadow:!0})),bn(Ve,.45);let Ce=le(N.tvStand,.72,.02,{map:Vt,bumpMap:Vn,bumpScale:.03}),Fe=[N.bookRed,N.bookBlue,9072704,5271624,10512448,6842536,13656160,6332512,14704688,3166352,10518576,6334560,12595296,3178624],ye=2.2,De=.26,pe=xe.z2-.16,te=[{cx:se-1.5,w:1.38},{cx:se,w:1.38},{cx:se+1.5,w:1.28}],R=[.03,.75,1.47,ye-.03];te.forEach(({cx:y,w:T},B)=>{let D=Pe=>({mat:Ce,noShadow:!0,...Pe});tt(T,ye,.04,N.tvStand,y,ye/2,xe.z2-.03,D({})),tt(.04,ye,De,N.tvStand,y-T/2+.02,ye/2,pe,D({})),tt(.04,ye,De,N.tvStand,y+T/2-.02,ye/2,pe,D({})),R.forEach(Pe=>{tt(T-.08,.04,De,N.tvStand,y,Pe+.02,pe,D({}))});let H=[R[0]+.04,R[1]+.04,R[2]+.04],Z=[R[1]-R[0]-.06,R[2]-R[1]-.06,R[3]-R[2]-.06];H.forEach((Pe,Ne)=>{let We=y-T/2+.06,$e=B*100+Ne*30;for(;We<y+T/2-.08;){let ct=.055+($e*7+13)%7*.008,ht=Math.min(Z[Ne]*.85,.18+($e*3+11)%9*.018);tt(ct,ht,.2,Fe[($e*3+B*5)%Fe.length],We+ct/2,Pe+ht/2,pe+.01,{noShadow:!0}),We+=ct+.01,$e++}}),nt(.07,6,N.potClay,y-T/2+.18,ye+.08,pe,{noShadow:!0}),nt(.05,6,N.plantGreen,y-T/2+.18,ye+.2,pe,{noShadow:!0}),qe(.04,.032,.14,8,14731392,y+T/2-.22,ye+.08,pe,{noShadow:!0})});{let y=le(6308e3,.9,0,{map:Fi}),T=new I(new Y(1.6,.012,1.2),y);T.position.set(se+.3,.006,xe.z1+.56),C.add(T)}tt(ie,.07,.03,N.gold,se,.035,xe.z2,{noShadow:!0}),tt(ie,.07,.03,N.gold,se,.035,xe.z1,{noShadow:!0}),tt(Le,.07,.03,N.gold,xe.x1,.035,Me,{ry:Math.PI/2,noShadow:!0})}function kt(n,e,t){Wh.push({mesh:n,normalPos:e.clone(),perfectPos:t.clone()})}function bn(n,e){let t=new Kn;C.add(t),n.forEach(i=>{i&&t.add(i)}),kt(t,new z(0,0,0),new z(0,-e,0))}function kn(n,e,t,i=.38,s=1.8,r=6){let a=ft(N.gold,.3,.75,{clearcoat:.2,ccRough:.3});qe(.008,.008,.5,6,N.gold,n,e-.5/2,t,{mat:a,noShadow:!0});let l=new un({color:new et(N.lampShade),roughness:.6,metalness:0,transmission:.3,thickness:.1,transparent:!0,emissive:new et(16763936),emissiveIntensity:.35,side:vn});nt(i,14,N.lampShade,n,e-.5-i,t,{mat:l});let c=new Ii({color:new et(N.lampShadeIn),emissive:new et(16763936),emissiveIntensity:3.2,roughness:.9,transparent:!0,opacity:.85,side:tn}),h=new I(new Nn(i*.87,12,8),c);h.position.set(n,e-.5-i,t),C.add(h);let d=new En(16763972,s,r);d.position.set(n,e-.5-i,t),C.add(d)}function Wg(){let e=me.d+.2-.08,t=le(2759696,.7,.05,{map:Vt,bumpMap:Vn,bumpScale:.03});_i(tt(.56,.66,.05,2759696,-6,.34,e,{mat:t,noShadow:!0}),!0),_i(tt(.46,.56,.02,658960,-6,.31,e-.02,{noShadow:!0}),!0);{let l=new on({color:13137976,transparent:!0}),c=new I(new Y(.44,.54,.02),l),h=new Kn;h.position.set(-6,.58,e+.01),c.position.set(0,-.27,0),h.add(c),h.rotation.x=.3,C.add(h),_i(c,!0,.9)}_i(tt(.48,.035,.035,N.chrome,-6,.6,e+.02,{metal:.7,noShadow:!0}),!0);let i=le(N.winFrame,.78,.04,{map:Vt}),s=(l,c,h,d,u)=>{let p=d==="x",g=new on({color:13168895,transparent:!0,opacity:.4}),_=p?u:.05,m=p?.05:u;_i(tt(p?u+.1:.06,.3,p?.06:u+.1,N.winFrame,l,c,h,{mat:i,noShadow:!0}),!0);let f=new I(new Y(_,.22,m),g);f.position.set(l,c,h+(p?.012:0)),p||(f.position.x=l+.012),C.add(f),_i(f,!0,.4);let E=Math.max(2,Math.round(u/.7));for(let x=1;x<E;x++){let A=-u/2+u*x/E;_i(tt(p?.03:.06,.24,p?.06:.03,N.winFrame,p?l+A:l+.02,c,p?h+.02:h+A,{mat:i,noShadow:!0}),!0)}};s(me.w-.06,.3,1.6,"z",2),s(me.w-.06,.3,3.4,"z",1.2),s(-2.6,.3,-me.d+.06,"x",1.8),s(3.4,.3,me.d-.06,"x",1.4);let r=vt((l,c,h)=>{let d=l.createLinearGradient(0,0,0,h);d.addColorStop(0,"#5A8828"),d.addColorStop(.5,"#478018"),d.addColorStop(1,"#3A6812"),l.fillStyle=d,l.fillRect(0,0,c,h),l.strokeStyle="rgba(30,60,10,0.22)",l.lineWidth=1;for(let u=0;u<40;u++){let p=Math.random()*c;l.beginPath(),l.moveTo(p,h*.3+Math.random()*h*.2),l.lineTo(p+(Math.random()-.5)*5,h),l.stroke()}},256,256,3,3),o=le(3831840,.92,0,{map:r}),a=new I(new Y(1.1,.025,.88),o);a.position.set(He.x2-.62,.013,He.z1+1.1),C.add(a),_i(a,!0,1);for(let l=0;l<14;l++){let c=He.x2-.62+(Math.random()-.5)*.9,h=He.z1+1.1+(Math.random()-.5)*.7,d=.045+Math.random()*.035,u=new I(new Y(.018,d,.01),le(4885544+Math.floor(Math.random()*1052688),.9,0));u.position.set(c,.025+d/2,h),u.rotation.y=Math.random()*Math.PI,C.add(u),_i(u,!0,1)}}function Xg(){wg(),Tg(),Ag(),Rg(),Cg(),Pg(),Ig(),Lg(),Dg(),Ug(),Fg(),Bg(),Og(),Ng(),Hg(),zg(),kg(),Gg(),Vg(),Wg()}var Qt={};document.addEventListener("keydown",n=>{Qt[n.code]=!0});document.addEventListener("keyup",n=>{Qt[n.code]=!1});var Oo=!1,Pl=new xo;Pn.domElement.addEventListener("click",()=>{if(!Oo){Pn.domElement.requestPointerLock();return}if(Pl.setFromCamera(new at(0,0),Gt),Os.length>0){let n=Pl.intersectObjects(Os.map(e=>e.mesh),!1);if(n.length>0&&n[0].distance<3.5){let e=Os.find(t=>t.mesh===n[0].object);if(e){if(gg(e),e.mesh===xi){Hh();return}let t=e.mesh.userData.toyName;if(t&&!Nt){he.dogPlayDone||(he.dogPlayDone=!0,Wn(),oi());let s={"tennis ball":["You nose the ball and it skitters across the floor. You watch it go.","Bap! The ball rolls away satisfyingly. You could do this all day.","The ball bounces off the baseboard. Perfect. Again."],"chew bone":["You mouth the bone. It tastes like all the best things.","You carry the bone three steps and drop it. Mission complete.","Gnaw gnaw gnaw. This is the life."],"squeaky toy":["SQUEAK. You freeze. You did that. You do it again.","SQUEAK SQUEAK. The noise is extremely good and also yours.","One firm bop. One perfect squeak. Balance restored."],"rope toy":["You grab the rope and give it a shake. Very satisfying.","You toss the rope and pounce on it. You are your own best friend.","The rope goes flying. You retrieve it immediately."],"rubber ball":["The pink ball squeaks softly as you bat it.","You chase the ball across the rug. Excellent.","Bop bop bop. You are very good at this."]}[t]||["You bop it. It moves. You are pleased."];yt(s[Math.floor(Math.random()*s.length)],2e3)}return}}}if(xi){let n=Pl.intersectObject(xi);n.length>0&&n[0].distance<3.5&&Hh()}});document.addEventListener("pointerlockchange",()=>{Oo=document.pointerLockElement===Pn.domElement,Bo&&(document.getElementById("click-prompt").style.opacity=Oo?"0":"1")});document.addEventListener("mousemove",n=>{Oo&&(Sn-=n.movementX*.0022,ri=Math.max(-.55,Math.min(.65,ri-n.movementY*.0022)))});function Yg(n,e){let t=Go[Vh];if(he.dogLaidDown){Qt.KeyE&&!Co&&hu(),Di+=(dr-Di)*.06,Gt.position.set(Ae.x,Di,Ae.z),Gt.rotation.set(ri,Sn,0,"YXZ"),Co=!!Qt.KeyE,kh();return}let i=0,s=0;(Qt.KeyW||Qt.ArrowUp)&&(i-=Math.sin(Sn),s-=Math.cos(Sn)),(Qt.KeyS||Qt.ArrowDown)&&(i+=Math.sin(Sn),s+=Math.cos(Sn)),(Qt.KeyD||Qt.ArrowRight)&&(i+=Math.cos(Sn),s-=Math.sin(Sn)),(Qt.KeyA||Qt.ArrowLeft)&&(i-=Math.cos(Sn),s+=Math.sin(Sn));let r=Math.sqrt(i*i+s*s),o=t.speed;if(r>0){let E=o*14*n;yi+=i/r*E,Rn+=s/r*E}let a=Math.sqrt(yi*yi+Rn*Rn);if(a>o){let E=o/a;yi*=E,Rn*=E}let c=yn!==0?1.2:r>0?7:12;yi*=Math.max(0,1-c*n),Rn*=Math.max(0,1-c*n);let h=a>.05;(Math.abs(yi)>.001||Math.abs(Rn)>.001)&&bg(yi*n,Rn*n),!Bo&&h&&(Bo=!0,document.getElementById("begin-wander").style.display="none",document.getElementById("info-btn").style.opacity="1",document.getElementById("crumb-counter").style.opacity="1",document.getElementById("objectives").classList.remove("visible"));let d=Sg(Ae.x,Ae.z);yn+=fg*n,Ae.y=Math.max(d,Ae.y+yn*n);let u=Ae.y<=d+.02;u&&(Ae.y=d,yn=0),Hs=Ae.y;let p=tu(),g=nu();if(u&&(Math.abs(d-g)<.02&&!he.dogOnCouchBack?(he.dogOnCouch=!0,he.dogOnCouchBack=!0,clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible"),Nt||(Nt=!0,yt("You scrambled all the way to the back of the couch! The whole room looks so different from up here.",3600,()=>{Nt=!1,yt("Now press [E] to look out the window - you can finally reach it!",2600,()=>{he.dogWindowDone||Gn("Press [E] to look out the window!")})}))):Math.abs(d-p)<.02&&!he.dogOnCouch?(he.dogOnCouch=!0,he.dogCouchAttempts=0,he.dogCouchSeatStory||(he.dogCouchSeatStory=!0,yt("You made it! The cushion is so soft under your paws.",2200,()=>{he.dogOnCouchBack||Gn("[Space] Jump to the top!")}))):d<p-.1&&(he.dogOnCouch=!1,he.dogOnCouchBack=!1),he.dogOnCouchBack&&Math.abs(d-g)>=.02&&(he.dogOnCouchBack=!1)),Qt.Space&&!Bh)if(At&&u&&fr()&&!he.dogOnCouch&&!Nt)he.dogCouchAttempts=2,yn=ur,Rn=-3;else if(u&&fr()&&!he.dogOnCouch&&!Nt)if(he.dogCouchAttempts++,he.dogCouchAttempts<2){yn=hr;let E="Hup! Your paws scrabble at the cushion edge. So close! One more big jump!";Nt=!0,zh(.3,()=>yt(E,2e3,()=>{Nt=!1,Gn("Press [Space] again!")}))}else yn=ur,Rn=-3;else u&&he.dogOnCouch&&!he.dogOnCouchBack&&!Nt?(yn=ur,Rn=-2.5,clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible")):u&&he.dogOnCouchBack?(yn=hr,Rn=3.5):u&&zo()&&!At&&!Nt?(yn=hr,Nt=!0,zh(.22,()=>yt("You spring at the table edge \u2014 paws scrabbling, nose just tipping the tablecloth. The food smell is unbearable. You land back down, undaunted.",2800,()=>{Nt=!1}))):(u&&!fr()||u)&&(yn=At?ur:hr);Bh=!!Qt.Space,dr=Ae.y+t.eyeHeight,Di+=(dr-Di)*.1;let f=h&&!(yn!==0)?Math.sin(e*t.bobSpeed)*t.bobAmt:0;if(Gt.position.set(Ae.x,Di+f,Ae.z),Gt.rotation.set(ri,Sn,0,"YXZ"),Qt.KeyE&&!Co&&Zg(),Co=!!Qt.KeyE,Qt.BracketLeft&&!Tl&&(Object.assign(he,{dogWindowDone:!0,dogSmellDone:!0,dogHearDone:!0,dogRestedDone:!0,dogForageDone:!0,dogLoafDone:!0,dogPlayDone:!0,dogInvestigateDone:!0}),Wn(),!At)){At=!0,document.getElementById("objectives").classList.add("hidden");let E=document.getElementById("perfect-world-overlay");E.style.display="",requestAnimationFrame(()=>E.classList.add("pw-in")),No.push(setTimeout(()=>{E.classList.remove("pw-in"),E.classList.add("pw-out"),No.push(setTimeout(()=>E.classList.remove("pw-out"),1400))},2e3))}if(Qt.KeyF&&!Tl&&cu()&&!Nt&&yt("The handle is way up there. You press your nose against the wood and wait hopefully. The door does not open.",2600),Tl=!!Qt.KeyF,kh(),qg(),is.length>0)for(let E=is.length-1;E>=0;E--){let x=is[E],A=x.position.x-Ae.x,U=x.position.z-Ae.z;if(A*A+U*U<.16){C.remove(x),is.splice(E,1),Oh++;let P=document.getElementById("crumb-count");P&&(P.textContent=Oh),he.dogForageDone||(he.dogForageDone=!0,Wn(),yt("You snuffle up a crumb from the floor. Then another. There is no finer dining in the world.",2600,()=>oi()))}}Nl()&&!he.dogLoafDone&&(he.dogOfficeTimeAccum+=n,he.dogOfficeTimeAccum>=2&&!Nt&&(he.dogLoafDone=!0,Wn(),yt("You settle under the desk and listen to the hum of the computer. The chair rolls slightly. You are in the office now. You are definitely helping.",3600,()=>oi())))}function fr(){return Math.abs(Ae.x)<2.5&&Ae.z<-2.5&&Ae.z>-4.6}function Ho(){return Vh==="dog"&&he.dogOnCouch?fr():Ae.z<-2.4&&Math.abs(Ae.x)<3}function zo(){return ko()&&Math.abs(Ae.x+16)<1.5&&Math.abs(Ae.z+2.75)<1}function Ul(){return gr()?!1:Ae.x>Oe.x1&&Ae.x<Oe.x2&&(Ae.z<-2.6||Ae.z>2.6)&&!(Math.abs(Ae.x+6)<1.2&&Ae.z>3.2)}function Fl(){return Math.abs(Ae.x+6)<1.4&&Ae.z>3&&Ae.z<4.5}function gr(){return Hs>Cn*.65}function su(){return gr()&&Math.hypot(Ae.x+12.6,Ae.z+3)<1.9}function Xo(){return Ae.x<Oe.x1&&Ae.x>He.x1&&Ae.z>He.z1&&Ae.z<He.z2}function ko(){return Ae.x<Oe.x1&&Ae.x>Ge.x1&&Ae.z>Ge.z1&&Ae.z<Ge.z2}function Nl(){return Ae.x<xe.x2&&Ae.x>xe.x1&&Ae.z>xe.z1&&Ae.z<xe.z2}function ru(){return Xo()&&Ae.x>He.x2-1.2}function ou(){return Xo()&&Ae.x<He.x1+1.5}function au(){return Nl()&&Ae.z<xe.z1+2}function Bl(){return Math.hypot(Ae.x+8.5,Ae.z+2.68)<1.2&&!gr()}function lu(){return At&&Math.abs(Ae.x+6)<1&&Ae.z>3.6}function cu(){return Math.abs(Ae.x+6)<1.5&&Ae.z>3.8||Math.abs(Ae.x+16)<1.2&&Math.abs(Ae.z-Ze.z2)<1.2}function qg(){let n=document.getElementById("smell-indicator"),e=document.getElementById("hear-indicator");n.classList.toggle("visible",Ul()&&!Bl()&&!he.dogSmellDone),e.classList.toggle("visible",Fl())}function Zg(){if(!Nt){if(lu()){Qg();return}if(he.dogOnCouchBack&&!he.dogWindowDone){Kg();return}if(he.dogOnCouch&&!he.dogOnCouchBack&&!he.dogWindowDone){yt("Climb higher - jump to the back of the couch to reach the window!",2200);return}if(!he.dogOnCouch&&!he.dogWindowDone&&Ho()){$g();return}if(he.dogWindowDone&&Ho()){yt("You stare out the window happily. Best girl.",2e3);return}if(Fl()){e_();return}if(Bl()){n_();return}if(Ul()){jg();return}if(!he.dogLaidDown&&su()){t_();return}if(he.dogLaidDown){hu();return}if(ru()){he.dogInvestigateDone||(he.dogInvestigateDone=!0,Wn(),oi()),At?yt("You hop onto your Perfect World toilet with complete dignity. You use it. Indoor plumbing \u2014 exclusively yours.",2800):yt("You sniff the toilet with intense scientific curiosity. Fascinating. Disgusting. Fascinating.",2400);return}if(ou()){he.dogInvestigateDone||(he.dogInvestigateDone=!0,Wn(),oi()),At?yt("You climb into your tub. Warm water, perfect temperature. You sit and soak. A real dog bath \u2014 on your own terms. Nobody sprays the hose.",3200):yt("You peer over the tub edge and sniff the drain. Something lives down there. You back away slowly.",2600);return}if(Xo()&&!he.dogInvestigateDone){he.dogInvestigateDone=!0,Wn(),yt("You sniff every corner of the bathroom. The tile is cold on your nose. The smells here are complex and deeply informative. You have learned things.",3e3,()=>oi());return}if(At&&zo()){yt("You leap onto the table and survey the spread. This food? Yours. All of it. You eat from every plate, unhurried, unbothered. You deserve this.",3400);return}if(ko()){yt("A table full of food smells. You sit very straight and wait to be noticed. Nobody comes. You wait longer.",2800);return}if(au()){yt("The desk hums quietly. You nose the chair and it rolls back slightly. You follow it and nose it again. You do this four more times.",2400);return}}}function Hh(){Nt||Jg()}function Jg(){yt("You nose the remote off the table. It clatters on the floor. The TV does not respond.",2800)}function $g(){if(he.dogWindowTried){yt("You jump again! Still out of reach. The couch - try the couch!",2200);return}he.dogWindowTried=!0,Nt=!0;let n=Di,e=0,t=setInterval(()=>{e+=.04,Gt.position.y=n+Math.sin(e*Math.PI)*.4,e>=1&&(clearInterval(t),Gt.position.y=n,yt("You jump as high as you can... just out of reach!",3e3,()=>yt("The couch is right there. Maybe that's the answer.",2800,()=>{Nt=!1,Gn("Walk to the couch and press [Space] to jump!")})))},16)}function Kg(){if(he.dogWindowDone)return;he.dogWindowDone=!0,Nt=!0,Wn(),clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible");let n=Gt.fov,e=ri,t=0,i=setInterval(()=>{t=Math.min(t+.018,1);let s=1-Math.pow(1-t,3);Gt.fov=n+(38-n)*s,ri=e+(.22-e)*s,Gt.rotation.set(ri,Sn,0,"YXZ"),Gt.updateProjectionMatrix(),t>=1&&(clearInterval(i),yt("You can see the whole garden! Blossoms, the path, the golden light - all of it!",4200,()=>{let r=0,o=setInterval(()=>{r=Math.min(r+.03,1),Gt.fov=38+(n-38)*r,ri=.22+(e-.22)*r,Gt.rotation.set(ri,Sn,0,"YXZ"),Gt.updateProjectionMatrix(),r>=1&&(clearInterval(o),Gt.fov=n,ri=e,Gt.updateProjectionMatrix(),yt("Best girl. Now go explore the rest of the house...",2800,()=>{Nt=!1,oi()}))},16)}))},16)}var pr=!1;function Qg(){pr?yt("There's no flap on the outside \u2014 it only swings one way. You press your whole face against the gap anyway, then your shoulders, then somehow the rest of you. You are very good at gaps.",3400,()=>{pr=!1,Ae.set(-6,0,me.d-.8),yn=0,yi=0,Rn=0}):(pr=!0,Ae.set(-6,0,me.d+1.4),yn=0,yi=0,Rn=0,yt("You push through the flap with your nose - thwap! - and trot out into the garden. Grass under your paws, sky overhead. The whole yard is yours. Press [E] at the door to come back in.",3600))}function jg(){if(he.dogSmellDone){yt("The smell is still incredible. Roasted something. Everything.",2e3);return}he.dogSmellDone=!0,Wn(),clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible"),yt("The most incredible smell fills your entire nose. Butter? Chicken? Yes. You press your snout to the counter edge and inhale for a very long time.",4200,()=>{oi()})}function e_(){let n=["You bark at the door. Loud, authoritative. Whatever is out there has been warned.","You bark again. Twice this time. The threat has been acknowledged.","BORK. BORK. BORK. You are very serious about this.","Another bark. The door remains a door. But it knows."];he.dogHearDone?(he.dogBarkedCount=Math.min(he.dogBarkedCount+1,4),yt(n[he.dogBarkedCount-1],2400)):(he.dogHearDone=!0,he.dogBarkedCount=1,Wn(),clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible"),yt(n[0],3e3,()=>{oi()}))}function t_(){he.dogLaidDown=!0,he.dogRestedDone=!0,Wn(),dr=Et.y+.08,clearTimeout(Gn._t),document.getElementById("hint-bar").classList.remove("visible"),yt("You circle twice and flop into your own soft bed beside the big one. Warm. Safe. Every room in this house is yours, and you have been to all of them.",4500,()=>{oi()})}function Wn(){let n={"obj-couch":he.dogWindowDone,"obj-smell":he.dogSmellDone,"obj-bark":he.dogHearDone,"obj-rest":he.dogRestedDone,"obj-forage":he.dogForageDone,"obj-loaf":he.dogLoafDone,"obj-play":he.dogPlayDone,"obj-investigate":he.dogInvestigateDone};Object.entries(n).forEach(([e,t])=>{let i=document.getElementById(e);i&&i.classList.toggle("done",t)})}function oi(){At||!he.dogWindowDone||!he.dogSmellDone||!he.dogHearDone||!he.dogRestedDone||!he.dogForageDone||!he.dogLoafDone||!he.dogPlayDone||!he.dogInvestigateDone||(Nt=!0,setTimeout(()=>{yt("Every room. Every smell. Every soft patch of sunlight. This whole house is yours, Iris.",4500,()=>{At=!0,Nt=!1,document.getElementById("objectives").classList.add("hidden");let n=document.getElementById("perfect-world-overlay");n.style.display="",requestAnimationFrame(()=>n.classList.add("pw-in")),No.push(setTimeout(()=>{n.classList.remove("pw-in"),n.classList.add("pw-out"),No.push(setTimeout(()=>n.classList.remove("pw-out"),1400))},3e3))})},800))}function n_(){let n=Math.abs(Ae.z+2.52)<Math.abs(Ae.z+2.85);yt(n?"You sniff your food bowl with great seriousness. You eat exactly seven kibbles, chew each one thoughtfully, then look up expecting applause.":"You take a long, splashy drink from your water bowl. Your tongue makes satisfying sounds. Some water ends up on the floor. You consider this a success.",3e3)}function hu(){he.dogLaidDown=!1,Ae.y=Et.y,Hs=Et.y,dr=Et.y+Go.dog.eyeHeight,yt("You stretch - front paws forward, back arched, a full luxurious dog stretch - then stand.",2e3)}function zh(n,e){let t=Di,i=0,s=setInterval(()=>{i+=.045,Gt.position.y=t+Math.sin(i*Math.PI)*n,i>=1&&(clearInterval(s),Gt.position.y=t,e&&e())},16)}function yt(n,e,t){let i=document.getElementById("story-text");i.innerHTML=n,i.classList.add("visible"),setTimeout(()=>{i.classList.remove("visible"),t&&setTimeout(t,340)},e)}function Gn(n){let e=document.getElementById("hint-bar");e.textContent=n,e.classList.add("visible"),clearTimeout(Gn._t),Gn._t=setTimeout(()=>e.classList.remove("visible"),5500)}function kh(){if(!Bo||Nt)return;let n=document.getElementById("proximity-hint"),e="";if(lu()?e="[E] Go out the doggy door":!he.dogOnCouch&&fr()?e="[Space] Jump onto the couch":he.dogOnCouch&&!he.dogOnCouchBack?e="[Space] Jump to the top":he.dogOnCouchBack&&!he.dogWindowDone?e="[E] Look out the window":!he.dogOnCouch&&!he.dogWindowTried&&Ho()?e="[E] Try to see outside":!he.dogOnCouch&&he.dogWindowTried&&Ho()&&!he.dogWindowDone?e="[E] Try again":Fl()&&!he.dogHearDone?e="[E] Bark at the door":Bl()?e="[E] Eat \xB7 Drink":Ul()&&!he.dogSmellDone?e="[E] Sniff the counter":!he.dogLaidDown&&su()?e="[E] Lie down":he.dogLaidDown?e="[E] Stand up":ru()?e=At?"[E] Use the toilet":"[E] Sniff the toilet":ou()?e=At?"[E] Use the tub":"[E] Investigate the tub":Xo()&&!he.dogInvestigateDone?e="[E] Sniff the bathroom":At&&zo()?e="[E] Eat with humans":ko()&&zo()&&!At?e="[Space] Jump at the table":ko()?e="[E] Wait for food":Nl()&&!he.dogLoafDone?e="Just hang out here...":au()&&(e="[E] Spin the office chair"),!e&&!gr()){let t=null,i=2.5;for(let s of Os){if(s.mesh===xi)continue;let r=s.mesh.position.x-Ae.x,o=s.mesh.position.z-Ae.z,a=r*r+o*o;a<i&&(i=a,t=s)}t&&(e=`[Click] Play with ${t.mesh.userData.toyName||"toy"}`)}!e&&cu()&&!gr()&&(e="[F] Try the door"),n.textContent=e,n.style.opacity=e?"1":"0"}var Gh=performance.now();function uu(){requestAnimationFrame(uu);let n=performance.now()/1e3,e=Math.min(n-Gh,.05);Gh=n,Yg(e,n),is.forEach(i=>i.scale.setScalar(1)),_g(e);let t=At?1:0;if(Math.abs(si-t)>5e-4&&(si+=(t-si)*.045,si=Math.max(0,Math.min(1,si)),Wh.forEach(i=>{i.mesh.position.lerpVectors(i.normalPos,i.perfectPos,si)}),Xh.forEach(i=>{let s=i.fadeIn?si:1-si;i.mesh.material.opacity=s*i.maxOpacity,i.mesh.visible=i.mesh.material.opacity>.01})),mg.forEach(i=>{let s=i.open?i.openAngle:0;i.lerpAngle+=(s-i.lerpAngle)*.1,i.group.rotation.y=i.lerpAngle}),Ni.intensity=2.8+Math.sin(n*2.1)*.1+Math.sin(n*7.3)*.04,Dl.intensity=.35+Math.sin(n*2.1)*.03,Qh.forEach((i,s)=>i.intensity=1.4+Math.sin(n*.8+s*1.1)*.03),ns){let i=ns.positions,s=ns.phases,r=ns.count;for(let o=0;o<r;o++)i[o*3]+=Math.sin(n*.11+s[o])*22e-5,i[o*3+1]+=12e-5+Math.sin(n*.09+s[o]*1.3)*55e-6,i[o*3+2]+=Math.cos(n*.08+s[o]*.8)*18e-6,i[o*3+1]>2.85&&(i[o*3+1]=.1+Math.random()*.28,i[o*3]=(Math.random()-.5)*(Math.random()<.7?3.8:8),i[o*3+2]=Math.random()<.7?-me.d+.2+Math.random()*3.8:-me.d+1+Math.random()*6.5);ns.dustMesh.geometry.attributes.position.needsUpdate=!0,ns.moteMesh.geometry.attributes.position.needsUpdate=!0}Vo.render()}window.addEventListener("resize",()=>{Gt.aspect=innerWidth/innerHeight,Gt.updateProjectionMatrix(),Pn.setSize(innerWidth,innerHeight),Vo.setSize(innerWidth,innerHeight)});Xg();xi&&Ui(xi);document.getElementById("crumb-counter").classList.add("visible");Wn();document.getElementById("info-btn").style.opacity="0";document.getElementById("objectives").classList.add("visible");document.getElementById("crumb-counter").style.opacity="0";document.getElementById("click-prompt").style.opacity="0";document.getElementById("proximity-hint").style.opacity="0";document.getElementById("info-btn").addEventListener("click",()=>{let n=!document.getElementById("controls-hint").classList.contains("visible");document.getElementById("controls-hint").classList.toggle("visible",n),document.getElementById("objectives").classList.toggle("visible",n)});document.getElementById("landing-start").addEventListener("click",()=>{let n=document.getElementById("landing-page");n.classList.add("fade-out"),setTimeout(()=>{n.style.display="none"},720)});uu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
