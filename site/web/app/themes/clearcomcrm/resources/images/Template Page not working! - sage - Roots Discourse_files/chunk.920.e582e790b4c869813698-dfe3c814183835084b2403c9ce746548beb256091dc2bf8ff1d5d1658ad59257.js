/*! For license information please see chunk.920.e582e790b4c869813698.js.LICENSE.txt */

(self.webpackChunk_ember_auto_import_=self.webpackChunk_ember_auto_import_||[]).push([[920],{7001:(e,t,r)=>{var n
!function(o,i,s){if(o){for(var a,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},c={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},h={},d=1;d<20;++d)l[111+d]="f"+d
for(d=0;d<=9;++d)l[d+96]=d.toString()
x.prototype.bind=function(e,t,r){var n=this
return e=e instanceof Array?e:[e],n._bindMultiple.call(n,e,t,r),n},x.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},x.prototype.trigger=function(e,t){var r=this
return r._directMap[e+":"+t]&&r._directMap[e+":"+t]({},e),r},x.prototype.reset=function(){var e=this
return e._callbacks={},e._directMap={},e},x.prototype.destroy=function(){var e=this
e.reset(),m(e.target,"keypress",e._handleKeyEvent),m(e.target,"keydown",e._handleKeyEvent),m(e.target,"keyup",e._handleKeyEvent),e.target=s,e._handleKeyEvent=s},x.prototype.stopCallback=function(e,t,r,n){if(this.paused)return!0
if(h[r]||h[n])return!1
if((" "+t.className+" ").indexOf(" itsatrap ")>-1)return!1
if(w(t,this.target))return!1
if("composedPath"in e&&"function"==typeof e.composedPath){var o=e.composedPath()[0]
o!==e.target&&(t=o)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},x.prototype.handleKey=function(){var e=this
return e._handleKey.apply(e,arguments)},x.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t])
a=null},x.prototype.pause=function(){this.paused=!0},x.prototype.unpause=function(){this.paused=!1},x.prototype.bindGlobal=function(e,t,r){if(this.bind(e,t,r),e instanceof Array)for(var n=0;n<e.length;n++)h[e[n]]=!0
else h[e]=!0},o.ItsATrap=x,e.exports&&(e.exports=x),(n=function(){return x}.call(t,r,t,e))===s||(e.exports=n)}function f(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)}function m(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)}function g(e){if("keypress"==e.type){var t=String.fromCharCode(e.which)
return e.shiftKey||(t=t.toLowerCase()),t}return l[e.which]?l[e.which]:c[e.which]?c[e.which]:String.fromCharCode(e.which).toLowerCase()}function v(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function y(e,t,r){return r||(r=function(){if(!a)for(var e in a={},l)e>95&&e<112||l.hasOwnProperty(e)&&(a[l[e]]=e)
return a}()[e]?"keydown":"keypress"),"keypress"==r&&t.length&&(r="keydown"),r}function b(e,t){var r,n,o,i=[]
for(r=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),o=0;o<r.length;++o)n=r[o],p[n]&&(n=p[n]),t&&"keypress"!=t&&u[n]&&(n=u[n],i.push("shift")),v(n)&&i.push(n)
return{key:n,modifiers:i,action:t=y(n,i,t)}}function w(e,t){return null!==e&&e!==i&&(e===t||w(e.parentNode,t))}function x(e){var t=this
if(e=e||i,!(t instanceof x))return new x(e)
t.target=e,t._callbacks={},t._directMap={}
var r,n={},o=!1,s=!1,a=!1
function l(e){e=e||{}
var t,r=!1
for(t in n)e[t]?r=!0:n[t]=0
r||(a=!1)}function c(e,r,o,i,s,a){var l,c,u,p,h=[],d=o.type
if(!t._callbacks[e])return[]
for("keyup"==d&&v(e)&&(r=[e]),l=0;l<t._callbacks[e].length;++l)if(c=t._callbacks[e][l],(i||!c.seq||n[c.seq]==c.level)&&d==c.action&&("keypress"==d&&!o.metaKey&&!o.ctrlKey||(u=r,p=c.modifiers,u.sort().join(",")===p.sort().join(",")))){var f=!i&&c.combo==s,m=i&&c.seq==i&&c.level==a;(f||m)&&t._callbacks[e].splice(l,1),h.push(c)}return h}function u(e,r,n,o){t.stopCallback(r,r.target||r.srcElement,n,o)||!1===e(r,n)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(r),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(r))}function p(e,i,s,h,d){t._directMap[e+":"+s]=i
var f,m=(e=e.replace(/\s+/g," ")).split(" ")
m.length>1?function(e,t,i,s){function c(t){return function(){a=t,++n[e],clearTimeout(r),r=setTimeout(l,1e3)}}function h(t){u(i,t,e),"keyup"!==s&&(o=g(t)),setTimeout(l,10)}n[e]=0
for(var d=0;d<t.length;++d){var f=d+1===t.length?h:c(s||b(t[d+1]).action)
p(t[d],f,s,e,d)}}(e,m,i,s):(f=b(e,s),t._callbacks[f.key]=t._callbacks[f.key]||[],c(f.key,f.modifiers,{type:f.action},h,e,d),t._callbacks[f.key][h?"unshift":"push"]({callback:i,modifiers:f.modifiers,action:f.action,seq:h,level:d,combo:e}))}t._handleKey=function(e,t,r){var n,o=c(e,t,r),i={},p=0,h=!1
for(n=0;n<o.length;++n)o[n].seq&&(p=Math.max(p,o[n].level))
for(n=0;n<o.length;++n)if(o[n].seq){if(o[n].level!=p)continue
h=!0,i[o[n].seq]=1,u(o[n].callback,r,o[n].combo,o[n].seq)}else h||u(o[n].callback,r,o[n].combo)
var d="keypress"==r.type&&s
r.type!=a||v(e)||d||l(i),s=h&&"keydown"==r.type},t._handleKeyEvent=function(e){"number"!=typeof e.which&&(e.which=e.keyCode)
var r=g(e)
r&&("keyup"!=e.type||o!==r?t.handleKey(r,function(e){var t=[]
return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):o=!1)},t._bindMultiple=function(e,t,r){for(var n=0;n<e.length;++n)p(e[n],t,r)},f(e,"keypress",t._handleKeyEvent),f(e,"keydown",t._handleKeyEvent),f(e,"keyup",t._handleKeyEvent)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},5645:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{afterMain:()=>k,afterRead:()=>b,afterWrite:()=>S,applyStyles:()=>j,arrow:()=>Y,auto:()=>a,basePlacements:()=>l,beforeMain:()=>w,beforeRead:()=>v,beforeWrite:()=>_,bottom:()=>o,clippingParents:()=>p,computeStyles:()=>ee,createPopper:()=>Ce,createPopperBase:()=>Ae,createPopperLite:()=>Te,detectOverflow:()=>me,end:()=>u,eventListeners:()=>re,flip:()=>ge,hide:()=>be,left:()=>s,main:()=>x,modifierPhases:()=>O,offset:()=>we,placements:()=>g,popper:()=>d,popperGenerator:()=>Ee,popperOffsets:()=>xe,preventOverflow:()=>ke,read:()=>y,reference:()=>f,right:()=>i,start:()=>c,top:()=>n,variationPlacements:()=>m,viewport:()=>h,write:()=>P})
var n="top",o="bottom",i="right",s="left",a="auto",l=[n,o,i,s],c="start",u="end",p="clippingParents",h="viewport",d="popper",f="reference",m=l.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),g=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",x="main",k="afterMain",_="beforeWrite",P="write",S="afterWrite",O=[v,y,b,w,x,k,_,P,S]
function E(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function C(e){return e instanceof A(e).Element||e instanceof Element}function T(e){return e instanceof A(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof A(e).ShadowRoot||e instanceof ShadowRoot)}const j={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e]
T(o)&&E(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
T(n)&&E(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function I(e){return e.split("-")[0]}function R(e,t){void 0===t&&(t=!1)
var r=e.getBoundingClientRect()
return{width:r.width/1,height:r.height/1,top:r.top/1,right:r.right/1,bottom:r.bottom/1,left:r.left/1,x:r.left/1,y:r.top/1}}function N(e){var t=R(e),r=e.offsetWidth,n=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function U(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&L(r)){var n=t
do{if(n&&e.isSameNode(n))return!0
n=n.parentNode||n.host}while(n)}return!1}function D(e){return A(e).getComputedStyle(e)}function M(e){return["table","td","th"].indexOf(E(e))>=0}function F(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===E(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||F(e)}function B(e){return T(e)&&"fixed"!==D(e).position?e.offsetParent:null}function V(e){for(var t=A(e),r=B(e);r&&M(r)&&"static"===D(r).position;)r=B(r)
return r&&("html"===E(r)||"body"===E(r)&&"static"===D(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&T(e)&&"fixed"===D(e).position)return null
for(var r=H(e);T(r)&&["html","body"].indexOf(E(r))<0;){var n=D(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}function q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var z=Math.max,$=Math.min,W=Math.round
function K(e,t,r){return z(e,$(t,r))}function X(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}const Y={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,a=e.name,c=e.options,u=r.elements.arrow,p=r.modifiersData.popperOffsets,h=I(r.placement),d=q(h),f=[s,i].indexOf(h)>=0?"height":"width"
if(u&&p){var m=function(e,t){return X("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,l))}(c.padding,r),g=N(u),v="y"===d?n:s,y="y"===d?o:i,b=r.rects.reference[f]+r.rects.reference[d]-p[d]-r.rects.popper[f],w=p[d]-r.rects.reference[d],x=V(u),k=x?"y"===d?x.clientHeight||0:x.clientWidth||0:0,_=b/2-w/2,P=m[v],S=k-g[f]-m[y],O=k/2-g[f]/2+_,E=K(P,O,S),A=d
r.modifiersData[a]=((t={})[A]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&U(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}
function J(e){return e.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function Z(e){var t,r=e.popper,a=e.popperRect,l=e.placement,c=e.variation,p=e.offsets,h=e.position,d=e.gpuAcceleration,f=e.adaptive,m=e.roundOffsets,g=!0===m?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1
return{x:W(W(t*n)/n)||0,y:W(W(r*n)/n)||0}}(p):"function"==typeof m?m(p):p,v=g.x,y=void 0===v?0:v,b=g.y,w=void 0===b?0:b,x=p.hasOwnProperty("x"),k=p.hasOwnProperty("y"),_=s,P=n,S=window
if(f){var O=V(r),E="clientHeight",C="clientWidth"
O===A(r)&&"static"!==D(O=F(r)).position&&"absolute"===h&&(E="scrollHeight",C="scrollWidth"),O=O,l!==n&&(l!==s&&l!==i||c!==u)||(P=o,w-=O[E]-a.height,w*=d?1:-1),l!==s&&(l!==n&&l!==o||c!==u)||(_=i,y-=O[C]-a.width,y*=d?1:-1)}var T,L=Object.assign({position:h},f&&Q)
return d?Object.assign({},L,((T={})[P]=k?"0":"",T[_]=x?"0":"",T.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",T)):Object.assign({},L,((t={})[P]=k?w+"px":"",t[_]=x?y+"px":"",t.transform="",t))}const ee={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,s=void 0===i||i,a=r.roundOffsets,l=void 0===a||a,c={placement:I(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}
var te={passive:!0}
const re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,s=n.resize,a=void 0===s||s,l=A(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&c.forEach((function(e){e.addEventListener("scroll",r.update,te)})),a&&l.addEventListener("resize",r.update,te),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",r.update,te)})),a&&l.removeEventListener("resize",r.update,te)}},data:{}}
var ne={left:"right",right:"left",bottom:"top",top:"bottom"}
function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var ie={start:"end",end:"start"}
function se(e){return e.replace(/start|end/g,(function(e){return ie[e]}))}function ae(e){var t=A(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function le(e){return R(F(e)).left+ae(e).scrollLeft}function ce(e){var t=D(e),r=t.overflow,n=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+o+n)}function ue(e){return["html","body","#document"].indexOf(E(e))>=0?e.ownerDocument.body:T(e)&&ce(e)?e:ue(H(e))}function pe(e,t){var r
void 0===t&&(t=[])
var n=ue(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=A(n),s=o?[i].concat(i.visualViewport||[],ce(n)?n:[]):n,a=t.concat(s)
return o?a:a.concat(pe(H(s)))}function he(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function de(e,t){return t===h?he(function(e){var t=A(e),r=F(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,a=0
return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,a=n.offsetTop)),{width:o,height:i,x:s+le(e),y:a}}(e)):T(t)?function(e){var t=R(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):he(function(e){var t,r=F(e),n=ae(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+le(e),l=-n.scrollTop
return"rtl"===D(o||r).direction&&(a+=z(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}(F(e)))}function fe(e){var t,r=e.reference,a=e.element,l=e.placement,p=l?I(l):null,h=l?J(l):null,d=r.x+r.width/2-a.width/2,f=r.y+r.height/2-a.height/2
switch(p){case n:t={x:d,y:r.y-a.height}
break
case o:t={x:d,y:r.y+r.height}
break
case i:t={x:r.x+r.width,y:f}
break
case s:t={x:r.x-a.width,y:f}
break
default:t={x:r.x,y:r.y}}var m=p?q(p):null
if(null!=m){var g="y"===m?"height":"width"
switch(h){case c:t[m]=t[m]-(r[g]/2-a[g]/2)
break
case u:t[m]=t[m]+(r[g]/2-a[g]/2)}}return t}function me(e,t){void 0===t&&(t={})
var r=t,s=r.placement,a=void 0===s?e.placement:s,c=r.boundary,u=void 0===c?p:c,m=r.rootBoundary,g=void 0===m?h:m,v=r.elementContext,y=void 0===v?d:v,b=r.altBoundary,w=void 0!==b&&b,x=r.padding,k=void 0===x?0:x,_=X("number"!=typeof k?k:G(k,l)),P=y===d?f:d,S=e.rects.popper,O=e.elements[w?P:y],A=function(e,t,r){var n="clippingParents"===t?function(e){var t=pe(H(e)),r=["absolute","fixed"].indexOf(D(e).position)>=0&&T(e)?V(e):e
return C(r)?t.filter((function(e){return C(e)&&U(e,r)&&"body"!==E(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],s=o.reduce((function(t,r){var n=de(e,r)
return t.top=z(n.top,t.top),t.right=$(n.right,t.right),t.bottom=$(n.bottom,t.bottom),t.left=z(n.left,t.left),t}),de(e,i))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(C(O)?O:O.contextElement||F(e.elements.popper),u,g),L=R(e.elements.reference),j=fe({reference:L,element:S,strategy:"absolute",placement:a}),I=he(Object.assign({},S,j)),N=y===d?I:L,M={top:A.top-N.top+_.top,bottom:N.bottom-A.bottom+_.bottom,left:A.left-N.left+_.left,right:N.right-A.right+_.right},B=e.modifiersData.offset
if(y===d&&B){var q=B[a]
Object.keys(M).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,r=[n,o].indexOf(e)>=0?"y":"x"
M[e]+=q[r]*t}))}return M}const ge={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,u=e.name
if(!t.modifiersData[u]._skip){for(var p=r.mainAxis,h=void 0===p||p,d=r.altAxis,f=void 0===d||d,v=r.fallbackPlacements,y=r.padding,b=r.boundary,w=r.rootBoundary,x=r.altBoundary,k=r.flipVariations,_=void 0===k||k,P=r.allowedAutoPlacements,S=t.options.placement,O=I(S),E=v||(O!==S&&_?function(e){if(I(e)===a)return[]
var t=oe(e)
return[se(e),t,se(t)]}(S):[oe(S)]),A=[S].concat(E).reduce((function(e,r){return e.concat(I(r)===a?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,a=r.flipVariations,c=r.allowedAutoPlacements,u=void 0===c?g:c,p=J(n),h=p?a?m:m.filter((function(e){return J(e)===p})):l,d=h.filter((function(e){return u.indexOf(e)>=0}))
0===d.length&&(d=h)
var f=d.reduce((function(t,r){return t[r]=me(e,{placement:r,boundary:o,rootBoundary:i,padding:s})[I(r)],t}),{})
return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}(t,{placement:r,boundary:b,rootBoundary:w,padding:y,flipVariations:_,allowedAutoPlacements:P}):r)}),[]),C=t.rects.reference,T=t.rects.popper,L=new Map,j=!0,R=A[0],N=0;N<A.length;N++){var U=A[N],D=I(U),M=J(U)===c,F=[n,o].indexOf(D)>=0,H=F?"width":"height",B=me(t,{placement:U,boundary:b,rootBoundary:w,altBoundary:x,padding:y}),V=F?M?i:s:M?o:n
C[H]>T[H]&&(V=oe(V))
var q=oe(V),z=[]
if(h&&z.push(B[D]<=0),f&&z.push(B[V]<=0,B[q]<=0),z.every((function(e){return e}))){R=U,j=!1
break}L.set(U,z)}if(j)for(var $=function(e){var t=A.find((function(t){var r=L.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return R=t,"break"},W=_?3:1;W>0&&"break"!==$(W);W--);t.placement!==R&&(t.modifiersData[u]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}
function ve(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ye(e){return[n,i,o,s].some((function(t){return e[t]>=0}))}const be={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=me(t,{elementContext:"reference"}),a=me(t,{altBoundary:!0}),l=ve(s,n),c=ve(a,o,i),u=ye(l),p=ye(c)
t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},we={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,o=e.name,a=r.offset,l=void 0===a?[0,0]:a,c=g.reduce((function(e,r){return e[r]=function(e,t,r){var o=I(e),a=[s,n].indexOf(o)>=0?-1:1,l="function"==typeof r?r(Object.assign({},t,{placement:e})):r,c=l[0],u=l[1]
return c=c||0,u=(u||0)*a,[s,i].indexOf(o)>=0?{x:u,y:c}:{x:c,y:u}}(r,t.rects,l),e}),{}),u=c[t.placement],p=u.x,h=u.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=h),t.modifiersData[o]=c}},xe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ke={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,a=e.name,l=r.mainAxis,u=void 0===l||l,p=r.altAxis,h=void 0!==p&&p,d=r.boundary,f=r.rootBoundary,m=r.altBoundary,g=r.padding,v=r.tether,y=void 0===v||v,b=r.tetherOffset,w=void 0===b?0:b,x=me(t,{boundary:d,rootBoundary:f,padding:g,altBoundary:m}),k=I(t.placement),_=J(t.placement),P=!_,S=q(k),O="x"===S?"y":"x",E=t.modifiersData.popperOffsets,A=t.rects.reference,C=t.rects.popper,T="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,L={x:0,y:0}
if(E){if(u||h){var j="y"===S?n:s,R="y"===S?o:i,U="y"===S?"height":"width",D=E[S],M=E[S]+x[j],F=E[S]-x[R],H=y?-C[U]/2:0,B=_===c?A[U]:C[U],W=_===c?-C[U]:-A[U],X=t.elements.arrow,G=y&&X?N(X):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=Y[j],Z=Y[R],ee=K(0,A[U],G[U]),te=P?A[U]/2-H-ee-Q-T:B-ee-Q-T,re=P?-A[U]/2+H+ee+Z+T:W+ee+Z+T,ne=t.elements.arrow&&V(t.elements.arrow),oe=ne?"y"===S?ne.clientTop||0:ne.clientLeft||0:0,ie=t.modifiersData.offset?t.modifiersData.offset[t.placement][S]:0,se=E[S]+te-ie-oe,ae=E[S]+re-ie
if(u){var le=K(y?$(M,se):M,D,y?z(F,ae):F)
E[S]=le,L[S]=le-D}if(h){var ce="x"===S?n:s,ue="x"===S?o:i,pe=E[O],he=pe+x[ce],de=pe-x[ue],fe=K(y?$(he,se):he,pe,y?z(de,ae):de)
E[O]=fe,L[O]=fe-pe}}t.modifiersData[a]=L}},requiresIfExists:["offset"]}
function _e(e,t,r){void 0===r&&(r=!1)
var n,o,i=T(t),s=T(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1
return 1!==r||1!==n}(t),a=F(t),l=R(e,s),c={scrollLeft:0,scrollTop:0},u={x:0,y:0}
return(i||!i&&!r)&&(("body"!==E(t)||ce(a))&&(c=(n=t)!==A(n)&&T(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:ae(n)),T(t)?((u=R(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=le(a))),{x:l.left+c.scrollLeft-u.x,y:l.top+c.scrollTop-u.y,width:l.width,height:l.height}}function Pe(e){var t=new Map,r=new Set,n=[]
function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Se={placement:"bottom",modifiers:[],strategy:"absolute"}
function Oe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ee(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Se:o
return function(e,t,r){void 0===r&&(r=i)
var o,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Se,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,u={state:a,setOptions:function(r){var o="function"==typeof r?r(a.options):r
p(),a.options=Object.assign({},i,a.options,o),a.scrollParents={reference:C(e)?pe(e):e.contextElement?pe(e.contextElement):[],popper:pe(t)}
var s,c,h=function(e){var t=Pe(e)
return O.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((s=[].concat(n,a.options.modifiers),c=s.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return a.orderedModifiers=h.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect
if("function"==typeof o){var i=o({state:a,name:t,instance:u,options:n})
l.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,r=e.popper
if(Oe(t,r)){a.rects={reference:_e(t,V(r),"fixed"===a.options.strategy),popper:N(r)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var o=a.orderedModifiers[n],i=o.fn,s=o.options,l=void 0===s?{}:s,p=o.name
"function"==typeof i&&(a=i({state:a,options:l,name:p,instance:u})||a)}else a.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(a)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){p(),c=!0}}
if(!Oe(e,t))return u
function p(){l.forEach((function(e){return e()})),l=[]}return u.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Ae=Ee(),Ce=Ee({defaultModifiers:[re,xe,ee,j,we,ge,ke,Y,be]}),Te=Ee({defaultModifiers:[re,xe,ee,j]})},204:e=>{e.exports=function(e){if("number"!=typeof e||isNaN(e))throw new TypeError("Expected a number, got "+typeof e)
var t=e<0,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"]
if(t&&(e=-e),e<1)return(t?"-":"")+e+" B"
var n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),r.length-1)
e=Number(e/Math.pow(1024,n))
var o=r[n]
return e>=10||e%1==0?(t?"-":"")+e.toFixed(0)+" "+o:(t?"-":"")+e.toFixed(1)+" "+o}},1441:(e,t,r)=>{function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var o=0
function i(e){return"__private_"+o+++"_"+e}const{AbortController:s,createAbortError:a}=r(1511),l=r(5448),c={limit:1,retryDelays:[0,1e3,3e3,5e3],getChunkSize:e=>Math.ceil(e.size/1e4),onStart(){},onProgress(){},onPartComplete(){},onSuccess(){},onError(e){throw e}}
function u(e){if("string"==typeof e)return parseInt(e,10)
if("number"==typeof e)return e
throw new TypeError("Expected a number")}var p=i("aborted"),h=i("initChunks"),d=i("createUpload"),f=i("resumeUpload"),m=i("uploadParts"),g=i("retryable"),v=i("prepareUploadParts"),y=i("uploadPartRetryable"),b=i("uploadPart"),w=i("onPartProgress"),x=i("onPartComplete"),k=i("uploadPartBytes"),_=i("completeUpload"),P=i("abortUpload"),S=i("onError")
function O(){return this.abortController.signal.aborted}function E(){const e=[],t=this.options.getChunkSize(this.file),r=Math.max(5242880,Math.ceil(this.file.size/1e4)),n=Math.max(t,r)
if(0===this.file.size)e.push(this.file)
else for(let o=0;o<this.file.size;o+=n){const t=Math.min(this.file.size,o+n)
e.push(this.file.slice(o,t))}this.chunks=e,this.chunkState=e.map((()=>({uploaded:0,busy:!1,done:!1})))}function A(){return this.createdPromise=Promise.resolve().then((()=>this.options.createMultipartUpload())),this.createdPromise.then((e=>{if(n(this,p)[p]())throw a()
if("object"!=typeof e||!e||"string"!=typeof e.uploadId||"string"!=typeof e.key)throw new TypeError("AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.")
this.key=e.key,this.uploadId=e.uploadId,this.options.onStart(e),n(this,m)[m]()})).catch((e=>{n(this,S)[S](e)}))}async function C(){try{const e=await this.options.listParts({uploadId:this.uploadId,key:this.key})
if(n(this,p)[p]())throw a()
e.forEach((e=>{const t=e.PartNumber-1
this.chunkState[t]={uploaded:u(e.Size),etag:e.ETag,done:!0},this.parts.some((t=>t.PartNumber===e.PartNumber))||this.parts.push({PartNumber:e.PartNumber,ETag:e.ETag})})),n(this,m)[m]()}catch(e){n(this,S)[S](e)}}function T(){if(this.isPaused)return
if(this.chunkState.every((e=>e.done)))return void n(this,_)[_]()
const e=this.options.limit-this.partsInProgress,t=this.chunkState.filter((e=>e.done)).length,r=this.chunks.length-t
let o=Math.ceil(this.options.limit/2)
if(o>r&&(o=r),e<o)return
const i=[]
for(let n=0;n<this.chunkState.length;n++){const t=this.chunkState[n]
if(!t.done&&!t.busy&&(i.push(n),i.length>=e))break}0!==i.length&&n(this,v)[v](i).then((e=>{i.forEach((t=>{const r=t+1,o={url:e.presignedUrls[r],headers:e.headers}
n(this,y)[y](t,o).then((()=>{n(this,m)[m]()}),(e=>{n(this,S)[S](e)}))}))}))}function L(e){let{before:t,attempt:r,after:o}=e
const{retryDelays:i}=this.options,{signal:s}=this.abortController
t&&t()
const c=e=>r().catch((t=>{if(n(this,p)[p]())throw a()
if(function(e){if(e.source&&"number"==typeof e.source.status){const{status:t}=e.source
return 0===t||409===t||423===t||t>=500&&t<600}return!1}(t)&&e<i.length)return l(i[e],{signal:s}).then((()=>c(e+1)))
throw t}))
return c(0).then((e=>(o&&o(),e)),(e=>{throw o&&o(),e}))}async function j(e){e.forEach((e=>{this.chunkState[e].busy=!0}))
const t=await n(this,g)[g]({attempt:()=>this.options.prepareUploadParts({key:this.key,uploadId:this.uploadId,partNumbers:e.map((e=>e+1)),chunks:e.reduce(((e,t)=>({...e,[t+1]:this.chunks[t]})),{})})})
if("object"!=typeof(null==t?void 0:t.presignedUrls))throw new TypeError("AwsS3/Multipart: Got incorrect result from `prepareUploadParts()`, expected an object `{ presignedUrls }`.")
return t}function I(e,t){return n(this,g)[g]({before:()=>{this.partsInProgress+=1},attempt:()=>n(this,b)[b](e,t),after:()=>{this.partsInProgress-=1}})}function R(e,t){if(this.chunkState[e].busy=!0,"string"!=typeof(null==t?void 0:t.url))throw new TypeError("AwsS3/Multipart: Got incorrect result for `prePreparedPart`, expected an object `{ url }`.")
const{url:r,headers:o}=t
if(n(this,p)[p]())throw this.chunkState[e].busy=!1,a()
return n(this,k)[k](e,r,o)}function N(e,t){this.chunkState[e].uploaded=u(t)
const r=this.chunkState.reduce(((e,t)=>e+t.uploaded),0)
this.options.onProgress(r,this.file.size)}function U(e,t){this.chunkState[e].etag=t,this.chunkState[e].done=!0
const r={PartNumber:e+1,ETag:t}
this.parts.push(r),this.options.onPartComplete(r)}function D(e,t,r){const o=this.chunks[e],{signal:i}=this.abortController
let s
const l=new Promise(((e,t)=>{s={resolve:e,reject:t}})),c=new XMLHttpRequest
function u(){i.removeEventListener("abort",p)}function p(){c.abort()}return c.open("PUT",t,!0),r&&Object.keys(r).forEach((e=>{c.setRequestHeader(e,r[e])})),c.responseType="text",i.addEventListener("abort",p),c.upload.addEventListener("progress",(t=>{t.lengthComputable&&n(this,w)[w](e,t.loaded,t.total)})),c.addEventListener("abort",(()=>{u(),this.chunkState[e].busy=!1,s.reject(a())})),c.addEventListener("load",(t=>{if(u(),this.chunkState[e].busy=!1,t.target.status<200||t.target.status>=300){const e=new Error("Non 2xx")
return e.source=t.target,void s.reject(e)}this.chunks[e]=null,n(this,w)[w](e,o.size,o.size)
const r=t.target.getResponseHeader("ETag")
null!==r?(n(this,x)[x](e,r),s.resolve()):s.reject(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."))})),c.addEventListener("error",(t=>{u(),this.chunkState[e].busy=!1
const r=new Error("Unknown error")
r.source=t.target,s.reject(r)})),c.send(o),l}async function M(){this.parts.sort(((e,t)=>e.PartNumber-t.PartNumber))
try{const e=await this.options.completeMultipartUpload({key:this.key,uploadId:this.uploadId,parts:this.parts})
this.options.onSuccess(e)}catch(e){n(this,S)[S](e)}}function F(){this.abortController.abort(),this.createdPromise.then((()=>{this.options.abortMultipartUpload({key:this.key,uploadId:this.uploadId})}),(()=>{}))}function H(e){e&&"AbortError"===e.name||this.options.onError(e)}e.exports=class{constructor(e,t){Object.defineProperty(this,S,{value:H}),Object.defineProperty(this,P,{value:F}),Object.defineProperty(this,_,{value:M}),Object.defineProperty(this,k,{value:D}),Object.defineProperty(this,x,{value:U}),Object.defineProperty(this,w,{value:N}),Object.defineProperty(this,b,{value:R}),Object.defineProperty(this,y,{value:I}),Object.defineProperty(this,v,{value:j}),Object.defineProperty(this,g,{value:L}),Object.defineProperty(this,m,{value:T}),Object.defineProperty(this,f,{value:C}),Object.defineProperty(this,d,{value:A}),Object.defineProperty(this,h,{value:E}),Object.defineProperty(this,p,{value:O}),this.options={...c,...t},this.options.getChunkSize||(this.options.getChunkSize=c.getChunkSize),this.file=e,this.abortController=new s,this.key=this.options.key||null,this.uploadId=this.options.uploadId||null,this.parts=[],this.createdPromise=Promise.reject(),this.isPaused=!1,this.partsInProgress=0,this.chunks=null,this.chunkState=null,n(this,h)[h](),this.createdPromise.catch((()=>{}))}start(){this.isPaused=!1,this.uploadId?n(this,f)[f]():n(this,d)[d]()}pause(){this.abortController.abort(),this.abortController=new s,this.isPaused=!0}abort(e){var t
void 0===e&&(e=void 0),null!=(t=e)&&t.really?n(this,P)[P]():this.pause()}}},4507:(e,t,r)=>{var n,o
const i=r(1357),{Socket:s,Provider:a,RequestClient:l}=r(6306),c=r(9821),u=r(1464),p=r(2079),{RateLimitedQueue:h}=r(9687),d=r(1441)
function f(e){if(e&&e.error){const t=new Error(e.message)
throw Object.assign(t,e.error),t}return e}e.exports=(o=n=class extends i{constructor(e,t){super(e,t),this.type="uploader",this.id=this.opts.id||"AwsS3Multipart",this.title="AWS S3 Multipart",this.client=new l(e,t)
const r={timeout:3e4,limit:0,retryDelays:[0,1e3,3e3,5e3],createMultipartUpload:this.createMultipartUpload.bind(this),listParts:this.listParts.bind(this),prepareUploadParts:this.prepareUploadParts.bind(this),abortMultipartUpload:this.abortMultipartUpload.bind(this),completeMultipartUpload:this.completeMultipartUpload.bind(this)}
this.opts={...r,...t},this.upload=this.upload.bind(this),this.requests=new h(this.opts.limit),this.uploaders=Object.create(null),this.uploaderEvents=Object.create(null),this.uploaderSockets=Object.create(null)}resetUploaderReferences(e,t){void 0===t&&(t={}),this.uploaders[e]&&(this.uploaders[e].abort({really:t.abort||!1}),this.uploaders[e]=null),this.uploaderEvents[e]&&(this.uploaderEvents[e].remove(),this.uploaderEvents[e]=null),this.uploaderSockets[e]&&(this.uploaderSockets[e].close(),this.uploaderSockets[e]=null)}assertHost(e){if(!this.opts.companionUrl)throw new Error("Expected a `companionUrl` option containing a Companion address, or if you are not using Companion, a custom `".concat(e,"` implementation."))}createMultipartUpload(e){this.assertHost("createMultipartUpload")
const t={}
return Object.keys(e.meta).forEach((r=>{null!=e.meta[r]&&(t[r]=e.meta[r].toString())})),this.client.post("s3/multipart",{filename:e.name,type:e.type,metadata:t}).then(f)}listParts(e,t){let{key:r,uploadId:n}=t
this.assertHost("listParts")
const o=encodeURIComponent(r)
return this.client.get("s3/multipart/".concat(n,"?key=").concat(o)).then(f)}prepareUploadParts(e,t){let{key:r,uploadId:n,partNumbers:o}=t
this.assertHost("prepareUploadParts")
const i=encodeURIComponent(r)
return this.client.get("s3/multipart/".concat(n,"/batch?key=").concat(i,"&partNumbers=").concat(o.join(","))).then(f)}completeMultipartUpload(e,t){let{key:r,uploadId:n,parts:o}=t
this.assertHost("completeMultipartUpload")
const i=encodeURIComponent(r),s=encodeURIComponent(n)
return this.client.post("s3/multipart/".concat(s,"/complete?key=").concat(i),{parts:o}).then(f)}abortMultipartUpload(e,t){let{key:r,uploadId:n}=t
this.assertHost("abortMultipartUpload")
const o=encodeURIComponent(r),i=encodeURIComponent(n)
return this.client.delete("s3/multipart/".concat(i,"?key=").concat(o)).then(f)}uploadFile(e){return new Promise(((t,r)=>{const n=new d(e.data,{createMultipartUpload:this.opts.createMultipartUpload.bind(this,e),listParts:this.opts.listParts.bind(this,e),prepareUploadParts:this.opts.prepareUploadParts.bind(this,e),completeMultipartUpload:this.opts.completeMultipartUpload.bind(this,e),abortMultipartUpload:this.opts.abortMultipartUpload.bind(this,e),getChunkSize:this.opts.getChunkSize?this.opts.getChunkSize.bind(this):null,onStart:t=>{const r=this.uppy.getFile(e.id)
this.uppy.setFileState(e.id,{s3Multipart:{...r.s3Multipart,key:t.key,uploadId:t.uploadId}})},onProgress:(t,r)=>{this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t,bytesTotal:r})},onError:t=>{this.uppy.log(t),this.uppy.emit("upload-error",e,t),o.done(),this.resetUploaderReferences(e.id),r(t)},onSuccess:r=>{const i={body:{...r},uploadURL:r.location}
o.done(),this.resetUploaderReferences(e.id)
const s=this.uppy.getFile(e.id)
this.uppy.emit("upload-success",s||e,i),r.location&&this.uppy.log("Download ".concat(n.file.name," from ").concat(r.location)),t(n)},onPartComplete:t=>{const r=this.uppy.getFile(e.id)
r&&this.uppy.emit("s3-multipart:part-uploaded",r,t)},limit:this.opts.limit||5,retryDelays:this.opts.retryDelays||[],...e.s3Multipart})
this.uploaders[e.id]=n,this.uploaderEvents[e.id]=new c(this.uppy)
let o=this.requests.run((()=>(e.isPaused||n.start(),()=>{})))
this.onFileRemove(e.id,(r=>{o.abort(),this.resetUploaderReferences(e.id,{abort:!0}),t("upload ".concat(r.id," was removed"))})),this.onCancelAll(e.id,(()=>{o.abort(),this.resetUploaderReferences(e.id,{abort:!0}),t("upload ".concat(e.id," was canceled"))})),this.onFilePause(e.id,(e=>{e?(o.abort(),n.pause()):(o.abort(),o=this.requests.run((()=>(n.start(),()=>{}))))})),this.onPauseAll(e.id,(()=>{o.abort(),n.pause()})),this.onResumeAll(e.id,(()=>{o.abort(),e.error&&n.abort(),o=this.requests.run((()=>(n.start(),()=>{})))})),e.progress.uploadStarted&&e.isRestored||this.uppy.emit("upload-started",e)}))}uploadRemote(e){return this.resetUploaderReferences(e.id),e.progress.uploadStarted&&e.isRestored||this.uppy.emit("upload-started",e),e.serverToken?this.connectToServerSocket(e):new Promise(((t,r)=>{new(e.remote.providerOptions.provider?a:l)(this.uppy,e.remote.providerOptions).post(e.remote.url,{...e.remote.body,protocol:"s3-multipart",size:e.data.size,metadata:e.meta}).then((t=>(this.uppy.setFileState(e.id,{serverToken:t.token}),e=this.uppy.getFile(e.id)))).then((e=>this.connectToServerSocket(e))).then((()=>{t()})).catch((t=>{this.uppy.emit("upload-error",e,t),r(t)}))}))}connectToServerSocket(e){return new Promise(((t,r)=>{const n=e.serverToken,o=p(e.remote.companionUrl),i=new s({target:"".concat(o,"/api/").concat(n),autoOpen:!1})
this.uploaderSockets[e.id]=i,this.uploaderEvents[e.id]=new c(this.uppy),this.onFileRemove(e.id,(()=>{a.abort(),i.send("cancel",{}),this.resetUploaderReferences(e.id,{abort:!0}),t("upload ".concat(e.id," was removed"))})),this.onFilePause(e.id,(e=>{e?(a.abort(),i.send("pause",{})):(a.abort(),a=this.requests.run((()=>(i.send("resume",{}),()=>{}))))})),this.onPauseAll(e.id,(()=>{a.abort(),i.send("pause",{})})),this.onCancelAll(e.id,(()=>{a.abort(),i.send("cancel",{}),this.resetUploaderReferences(e.id),t("upload ".concat(e.id," was canceled"))})),this.onResumeAll(e.id,(()=>{a.abort(),e.error&&i.send("pause",{}),a=this.requests.run((()=>{i.send("resume",{})}))})),this.onRetry(e.id,(()=>{i.isOpen&&(i.send("pause",{}),i.send("resume",{}))})),this.onRetryAll(e.id,(()=>{i.isOpen&&(i.send("pause",{}),i.send("resume",{}))})),i.on("progress",(t=>u(this,t,e))),i.on("error",(t=>{this.uppy.emit("upload-error",e,new Error(t.error)),this.resetUploaderReferences(e.id),a.done(),r(new Error(t.error))})),i.on("success",(r=>{const n={uploadURL:r.url}
this.uppy.emit("upload-success",e,n),this.resetUploaderReferences(e.id),a.done(),t()}))
let a=this.requests.run((()=>(i.open(),e.isPaused&&i.send("pause",{}),()=>{})))}))}upload(e){if(0===e.length)return Promise.resolve()
const t=e.map((e=>{const t=this.uppy.getFile(e)
return t.isRemote?this.uploadRemote(t):this.uploadFile(t)}))
return Promise.all(t)}onFileRemove(e,t){this.uploaderEvents[e].on("file-removed",(r=>{e===r.id&&t(r.id)}))}onFilePause(e,t){this.uploaderEvents[e].on("upload-pause",((r,n)=>{e===r&&t(n)}))}onRetry(e,t){this.uploaderEvents[e].on("upload-retry",(r=>{e===r&&t()}))}onRetryAll(e,t){this.uploaderEvents[e].on("retry-all",(()=>{this.uppy.getFile(e)&&t()}))}onPauseAll(e,t){this.uploaderEvents[e].on("pause-all",(()=>{this.uppy.getFile(e)&&t()}))}onCancelAll(e,t){this.uploaderEvents[e].on("cancel-all",(()=>{this.uppy.getFile(e)&&t()}))}onResumeAll(e,t){this.uploaderEvents[e].on("resume-all",(()=>{this.uppy.getFile(e)&&t()}))}install(){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,resumableUploads:!0}}),this.uppy.addUploader(this.upload)}uninstall(){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,resumableUploads:!1}}),this.uppy.removeUploader(this.upload)}},n.VERSION="2.2.1",o)},6494:(e,t,r)=>{var n,o,i,s,a
function l(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var c=0
function u(e){return"__private_"+c+++"_"+e}const{nanoid:p}=r(8773),{Provider:h,RequestClient:d,Socket:f}=r(6306),m=r(1464),g=r(2079),v=r(9821),y=r(8850),b=r(5556),w=r(897),{internalRateLimitedQueue:x}=r(9687)
function k(e,t){if(w(e))return new b(t,e)
const r=new Error("Upload error")
return r.cause=t,r.request=e,r}function _(e){var t
const{uppy:r}=this,n=r.getState().xhrUpload
return{...this.opts,...n||{},...e.xhrUpload||{},headers:{...this.opts.headers,...null==n?void 0:n.headers,...null==(t=e.xhrUpload)?void 0:t.headers}}}function P(e,t,r){this.uploaderEvents[t].on(e,(e=>{t===e&&r()}))}function S(e,t,r){this.uploaderEvents[t].on(e,(()=>{this.uppy.getFile(t)&&r()}))}function O(e,t,r){const s=l(this,n)[n](e)
return this.uppy.log("uploading ".concat(t," of ").concat(r)),new Promise(((t,r)=>{const n=s.formData?function(e,t){const r=new FormData
!function(e,t,r){(Array.isArray(r.metaFields)?r.metaFields:Object.keys(t)).forEach((r=>{e.append(r,t[r])}))}(r,e.meta,t)
const n=function(e){return e.data.slice(0,e.data.size,e.meta.type)}(e)
return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r}(e,s):(e=>e.data)(e),a=new XMLHttpRequest
this.uploaderEvents[e.id]=new v(this.uppy)
const c=new y(s.timeout,(()=>{a.abort(),h.done()
const t=new Error(this.i18n("timedOut",{seconds:Math.ceil(s.timeout/1e3)}))
this.uppy.emit("upload-error",e,t),r(t)})),u=p()
a.upload.addEventListener("loadstart",(()=>{this.uppy.log("[AwsS3/XHRUpload] ".concat(u," started"))})),a.upload.addEventListener("progress",(t=>{this.uppy.log("[AwsS3/XHRUpload] ".concat(u," progress: ").concat(t.loaded," / ").concat(t.total)),c.progress(),t.lengthComputable&&this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded,bytesTotal:t.total})})),a.addEventListener("load",(n=>{if(this.uppy.log("[AwsS3/XHRUpload] ".concat(u," finished")),c.done(),h.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),s.validateStatus(n.target.status,a.responseText,a)){const r=s.getResponseData(a.responseText,a),o=r[s.responseUrlFieldName],i={status:n.target.status,body:r,uploadURL:o}
return this.uppy.emit("upload-success",e,i),o&&this.uppy.log("Download ".concat(e.name," from ").concat(o)),t(e)}const o=s.getResponseData(a.responseText,a),i=k(a,s.getResponseError(a.responseText,a)),l={status:n.target.status,body:o}
return this.uppy.emit("upload-error",e,i,l),r(i)})),a.addEventListener("error",(()=>{this.uppy.log("[AwsS3/XHRUpload] ".concat(u," errored")),c.done(),h.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null)
const t=k(a,s.getResponseError(a.responseText,a))
return this.uppy.emit("upload-error",e,t),r(t)})),a.open(s.method.toUpperCase(),s.endpoint,!0),a.withCredentials=Boolean(s.withCredentials),""!==s.responseType&&(a.responseType=s.responseType),Object.keys(s.headers).forEach((e=>{a.setRequestHeader(e,s.headers[e])}))
const h=this.requests.run((()=>(a.send(n),()=>{c.done(),a.abort()})),{priority:1})
l(this,o)[o]("file-removed",e.id,(()=>{h.abort(),r(new Error("File removed"))})),l(this,i)[i]("cancel-all",e.id,(()=>{h.abort(),r(new Error("Upload cancelled"))}))}))}function E(e){const t=l(this,n)[n](e),r=Array.isArray(t.metaFields)?t.metaFields:Object.keys(e.meta)
return new(e.remote.providerOptions.provider?h:d)(this.uppy,e.remote.providerOptions).post(e.remote.url,{...e.remote.body,endpoint:t.endpoint,size:e.data.size,fieldname:t.fieldName,metadata:Object.fromEntries(r.map((t=>[t,e.meta[t]]))),httpMethod:t.method,useFormData:t.formData,headers:t.headers}).then((r=>new Promise(((n,s)=>{const{token:a}=r,c=g(e.remote.companionUrl),u=new f({target:"".concat(c,"/api/").concat(a),autoOpen:!1})
this.uploaderEvents[e.id]=new v(this.uppy)
const p=this.requests.run((()=>(u.open(),e.isPaused&&u.send("pause",{}),()=>u.close())))
l(this,o)[o]("file-removed",e.id,(()=>{u.send("cancel",{}),p.abort(),n("upload ".concat(e.id," was removed"))})),l(this,i)[i]("cancel-all",e.id,(()=>{u.send("cancel",{}),p.abort(),n("upload ".concat(e.id," was canceled"))})),l(this,o)[o]("upload-retry",e.id,(()=>{u.send("pause",{}),u.send("resume",{})})),l(this,i)[i]("retry-all",e.id,(()=>{u.send("pause",{}),u.send("resume",{})})),u.on("progress",(t=>m(this,t,e))),u.on("success",(r=>{const o=t.getResponseData(r.response.responseText,r.response),i=o[t.responseUrlFieldName],s={status:r.response.status,body:o,uploadURL:i,bytesUploaded:r.bytesUploaded}
return this.uppy.emit("upload-success",e,s),p.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),n()})),u.on("error",(r=>{const n=r.response,o=n?t.getResponseError(n.responseText,n):Object.assign(new Error(r.error.message),{cause:r.error})
this.uppy.emit("upload-error",e,o),p.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),s(o)}))})).catch((t=>(this.uppy.emit("upload-error",e,t),Promise.reject(t))))))}e.exports=(n=u("getOptions"),o=u("addEventHandlerForFile"),i=u("addEventHandlerIfFileStillExists"),s=u("uploadLocalFile"),a=u("uploadRemoteFile"),class{constructor(e,t){Object.defineProperty(this,a,{value:E}),Object.defineProperty(this,s,{value:O}),Object.defineProperty(this,i,{value:S}),Object.defineProperty(this,o,{value:P}),Object.defineProperty(this,n,{value:_}),this.uppy=e,this.opts={validateStatus:e=>e>=200&&e<300,...t},this.requests=t[x],this.uploaderEvents=Object.create(null),this.i18n=t.i18n}uploadFile(e,t,r){const n=this.uppy.getFile(e)
if(n.error)throw new Error(n.error)
return n.isRemote?l(this,a)[a](n,t,r):l(this,s)[s](n,t,r)}})},7418:(e,t,r)=>{var n,o,i,s,a,l
function c(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var u=0
function p(e){return"__private_"+u+++"_"+e}const h=r(1357),{RateLimitedQueue:d,internalRateLimitedQueue:f}=r(9687),{RequestClient:m}=r(6306),g=r(6494),v=r(8e3),y=r(959)
function b(e,t){const r=e.indexOf("<".concat(t,">")),n=e.indexOf("</".concat(t,">"),r)
return-1!==r&&-1!==n?e.slice(r+t.length+2,n):""}function w(e){if(e&&e.error){const t=new Error(e.message)
throw Object.assign(t,e.error),t}return e}function x(e,t){if(!v(e,t))return
const r=b(e,"Message")
return new Error(r)}let k=!1
e.exports=(o=p("client"),i=p("requests"),s=p("uploader"),a=p("handleUpload"),l=n=class extends h{constructor(e,t){super(e,t),Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,i,{writable:!0,value:void 0}),Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:e=>{const t=Object.create(null)
function r(e){var r
const{id:n}=e
null==(r=t[n])||r.abort()}this.uppy.on("file-removed",r),e.forEach((e=>{const t=this.uppy.getFile(e)
this.uppy.emit("upload-started",t)}))
const n=c(this,i)[i].wrapPromiseFunction((e=>this.opts.getUploadParameters(e))),o=e.length
return Promise.allSettled(e.map(((e,r)=>(t[e]=n(this.uppy.getFile(e)),t[e].then((n=>{delete t[e]
const i=this.uppy.getFile(e)
!function(e,t){if(null==t||"string"!=typeof t.url||"object"!=typeof t.fields&&null!=t.fields)throw new TypeError("AwsS3: got incorrect result from 'getUploadParameters()' for file '".concat(e.name,"', expected an object '{ url, method, fields, headers }' but got '").concat(JSON.stringify(t),"' instead.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format."))
if(null!=t.method&&!/^p(u|os)t$/i.test(t.method))throw new TypeError("AwsS3: got incorrect method from 'getUploadParameters()' for file '".concat(e.name,"', expected  'put' or 'post' but got '").concat(t.method,"' instead.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format."))}(i,n)
const{method:a="post",url:l,fields:u,headers:p}=n,h={method:a,formData:"post"===a.toLowerCase(),endpoint:l,metaFields:u?Object.keys(u):[]}
return p&&(h.headers=p),this.uppy.setFileState(i.id,{meta:{...i.meta,...u},xhrUpload:h}),c(this,s)[s].uploadFile(i.id,r,o)})).catch((r=>{delete t[e]
const n=this.uppy.getFile(e)
return this.uppy.emit("upload-error",n,r),Promise.reject(r)})))))).finally((()=>{this.uppy.off("file-removed",r)}))}}),this.type="uploader",this.id=this.opts.id||"AwsS3",this.title="AWS S3",this.defaultLocale=y
const r={timeout:3e4,limit:0,metaFields:[],getUploadParameters:this.getUploadParameters.bind(this)}
this.opts={...r,...t},this.i18nInit(),c(this,o)[o]=new m(e,t),c(this,i)[i]=new d(this.opts.limit)}getUploadParameters(e){if(!this.opts.companionUrl)throw new Error("Expected a `companionUrl` option containing a Companion address.")
const t=e.meta.name,{type:r}=e.meta,n=Object.fromEntries(this.opts.metaFields.filter((t=>null!=e.meta[t])).map((t=>["metadata[".concat(t,"]"),e.meta[t].toString()]))),i=new URLSearchParams({filename:t,type:r,...n})
return c(this,o)[o].get("s3/params?".concat(i)).then(w)}install(){const{uppy:e}=this
e.addUploader(c(this,a)[a])
const t={fieldName:"file",responseUrlFieldName:"location",timeout:this.opts.timeout,[f]:c(this,i)[i],responseType:"text",getResponseData:this.opts.getResponseData||function(t,r){return v(t,r)?{location:(n=r.responseURL,o=b(t,"Location"),new URL(o,n||void 0).toString()),bucket:b(t,"Bucket"),key:b(t,"Key"),etag:b(t,"ETag")}:"POST"===this.method.toUpperCase()?(k||(e.log("[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads","warning"),k=!0),{location:null}):r.responseURL?{location:r.responseURL.replace(/\?.*$/,"")}:{location:null}
var n,o},getResponseError:x}
t.i18n=this.i18n,c(this,s)[s]=new g(e,t)}uninstall(){this.uppy.removeUploader(c(this,a)[a])}},n.VERSION="2.0.8",l)},8e3:e=>{e.exports=function(e,t){const r=t.headers?t.headers["content-type"]:t.getResponseHeader("Content-Type")
if("string"==typeof r){const t=(n=r,n.replace(/;.*$/,"")).toLowerCase()
if("application/xml"===t||"text/xml"===t)return!0
if("text/html"===t&&/^<\?xml /.test(e))return!0}var n
return!1}},959:e=>{e.exports={strings:{timedOut:"Upload stalled for %{seconds} seconds, aborting."}}},3811:e=>{"use strict"
class t extends Error{constructor(){super("Authorization required"),this.name="AuthError",this.isAuthError=!0}}e.exports=t},9819:(e,t,r)=>{"use strict"
const n=r(4670),o=r(8746)
e.exports=class extends n{constructor(e,t){super(e,t),this.provider=t.provider,this.id=this.provider,this.name=this.opts.name||this.id.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),this.pluginId=this.opts.pluginId,this.tokenKey="companion-".concat(this.pluginId,"-auth-token"),this.companionKeysParams=this.opts.companionKeysParams,this.preAuthToken=null}headers(){return Promise.all([super.headers(),this.getAuthToken()]).then((e=>{let[t,r]=e
const n={}
return r&&(n["uppy-auth-token"]=r),this.companionKeysParams&&(n["uppy-credentials-params"]=btoa(JSON.stringify({params:this.companionKeysParams}))),{...t,...n}}))}onReceiveResponse(e){e=super.onReceiveResponse(e)
const t=this.uppy.getPlugin(this.pluginId),r=t.getPluginState().authenticated?401!==e.status:e.status<400
return t.setPluginState({authenticated:r}),e}setAuthToken(e){return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey,e)}getAuthToken(){return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey)}async ensurePreAuth(){if(this.companionKeysParams&&!this.preAuthToken&&(await this.fetchPreAuthToken(),!this.preAuthToken))throw new Error("Could not load authentication data required for third-party login. Please try again later.")}authUrl(e){void 0===e&&(e={})
const t=new URLSearchParams(e)
return this.preAuthToken&&t.set("uppyPreAuthToken",this.preAuthToken),"".concat(this.hostname,"/").concat(this.id,"/connect?").concat(t)}fileUrl(e){return"".concat(this.hostname,"/").concat(this.id,"/get/").concat(e)}async fetchPreAuthToken(){if(this.companionKeysParams)try{const e=await this.post("".concat(this.id,"/preauth/"),{params:this.companionKeysParams})
this.preAuthToken=e.token}catch(e){this.uppy.log("[CompanionClient] unable to fetch preAuthToken ".concat(e),"warning")}}list(e){return this.get("".concat(this.id,"/list/").concat(e||""))}logout(){return this.get("".concat(this.id,"/logout")).then((e=>Promise.all([e,this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)]))).then((e=>{let[t]=e
return t}))}static initPlugin(e,t,r){if(e.type="acquirer",e.files=[],r&&(e.opts={...r,...t}),t.serverUrl||t.serverPattern)throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`")
if(t.companionAllowedHosts){const r=t.companionAllowedHosts
if(!("string"==typeof r||Array.isArray(r)||r instanceof RegExp))throw new TypeError("".concat(e.id,': the option "companionAllowedHosts" must be one of string, Array, RegExp'))
e.opts.companionAllowedHosts=r}else/^(?!https?:\/\/).*$/i.test(t.companionUrl)?e.opts.companionAllowedHosts="https://".concat(t.companionUrl.replace(/^\/\//,"")):e.opts.companionAllowedHosts=new URL(t.companionUrl).origin
e.storage=e.opts.storage||o}}},4670:(e,t,r)=>{"use strict"
var n,o,i,s,a
function l(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var c=0
function u(e){return"__private_"+c+++"_"+e}const p=r(5210),h=r(3811)
async function d(e){if(401===e.status)throw new h
const t=e.json()
if(e.status<200||e.status>300){let r="Failed request with status: ".concat(e.status,". ").concat(e.statusText)
try{const e=await t
r=e.message?"".concat(r," message: ").concat(e.message):r,r=e.requestId?"".concat(r," request-Id: ").concat(e.requestId):r}finally{throw new Error(r)}}return t}function f(e){return/^(https?:|)\/\//.test(e)?e:"".concat(this.hostname,"/").concat(e)}function m(e,t){return r=>{var n
if(null==(n=r)||!n.isAuthError){const n=new Error("Could not ".concat(e," ").concat(l(this,i)[i](t)))
n.cause=r,r=n}return Promise.reject(r)}}e.exports=(o=u("getPostResponseFunc"),i=u("getUrl"),s=u("errorHandler"),a=n=class e{constructor(e,t){Object.defineProperty(this,s,{value:m}),Object.defineProperty(this,i,{value:f}),Object.defineProperty(this,o,{writable:!0,value:e=>t=>e?t:this.onReceiveResponse(t)}),this.uppy=e,this.opts=t,this.onReceiveResponse=this.onReceiveResponse.bind(this),this.allowedHeaders=["accept","content-type","uppy-auth-token"],this.preflightDone=!1}get hostname(){const{companion:e}=this.uppy.getState(),t=this.opts.companionUrl
return(e&&e[t]?e[t]:t).replace(/\/$/,"")}headers(){const t=this.opts.companionHeaders||{}
return Promise.resolve({...e.defaultHeaders,...t})}onReceiveResponse(e){const t=this.uppy.getState().companion||{},r=this.opts.companionUrl,{headers:n}=e
return n.has("i-am")&&n.get("i-am")!==t[r]&&this.uppy.setState({companion:{...t,[r]:n.get("i-am")}}),e}preflight(e){return this.preflightDone?Promise.resolve(this.allowedHeaders.slice()):fetch(l(this,i)[i](e),{method:"OPTIONS"}).then((e=>(e.headers.has("access-control-allow-headers")&&(this.allowedHeaders=e.headers.get("access-control-allow-headers").split(",").map((e=>e.trim().toLowerCase()))),this.preflightDone=!0,this.allowedHeaders.slice()))).catch((e=>(this.uppy.log("[CompanionClient] unable to make preflight request ".concat(e),"warning"),this.preflightDone=!0,this.allowedHeaders.slice())))}preflightAndHeaders(e){return Promise.all([this.preflight(e),this.headers()]).then((e=>{let[t,r]=e
return Object.keys(r).forEach((e=>{t.includes(e.toLowerCase())||(this.uppy.log("[CompanionClient] excluding disallowed header ".concat(e)),delete r[e])})),r}))}get(e,t){return this.preflightAndHeaders(e).then((t=>p(l(this,i)[i](e),{method:"get",headers:t,credentials:this.opts.companionCookiesRule||"same-origin"}))).then(l(this,o)[o](t)).then(d).catch(l(this,s)[s]("get",e))}post(e,t,r){const n="post"
return this.preflightAndHeaders(e).then((r=>p(l(this,i)[i](e),{method:n,headers:r,credentials:this.opts.companionCookiesRule||"same-origin",body:JSON.stringify(t)}))).then(l(this,o)[o](r)).then(d).catch(l(this,s)[s](n,e))}delete(e,t,r){const n="delete"
return this.preflightAndHeaders(e).then((r=>p("".concat(this.hostname,"/").concat(e),{method:n,headers:r,credentials:this.opts.companionCookiesRule||"same-origin",body:t?JSON.stringify(t):null}))).then(l(this,o)[o](r)).then(d).catch(l(this,s)[s](n,e))}},n.VERSION="2.0.5",n.defaultHeaders={Accept:"application/json","Content-Type":"application/json","Uppy-Versions":"@uppy/companion-client=".concat(n.VERSION)},a)},9595:(e,t,r)=>{"use strict"
const n=r(4670)
e.exports=class extends n{constructor(e,t){super(e,t),this.provider=t.provider,this.id=this.provider,this.name=this.opts.name||this.id.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),this.pluginId=this.opts.pluginId}fileUrl(e){return"".concat(this.hostname,"/search/").concat(this.id,"/get/").concat(e)}search(e,t){return t=t?"&".concat(t):"",this.get("search/".concat(this.id,"/list?q=").concat(encodeURIComponent(e)).concat(t))}}},7591:(e,t,r)=>{var n,o,i,s,a
let l,c
function u(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var p=0
function h(e){return"__private_"+p+++"_"+e}const d=r(5575)
e.exports=(n=h("queued"),o=h("emitter"),i=h("isOpen"),s=h("socket"),a=h("handleMessage"),l=Symbol.for("uppy test: getSocket"),c=Symbol.for("uppy test: getQueued"),class{constructor(e){Object.defineProperty(this,n,{writable:!0,value:[]}),Object.defineProperty(this,o,{writable:!0,value:d()}),Object.defineProperty(this,i,{writable:!0,value:!1}),Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:e=>{try{const t=JSON.parse(e.data)
this.emit(t.action,t.payload)}catch(e){console.log(e)}}}),this.opts=e,e&&!1===e.autoOpen||this.open()}get isOpen(){return u(this,i)[i]}[l](){return u(this,s)[s]}[c](){return u(this,n)[n]}open(){u(this,s)[s]=new WebSocket(this.opts.target),u(this,s)[s].onopen=()=>{for(u(this,i)[i]=!0;u(this,n)[n].length>0&&u(this,i)[i];){const e=u(this,n)[n].shift()
this.send(e.action,e.payload)}},u(this,s)[s].onclose=()=>{u(this,i)[i]=!1},u(this,s)[s].onmessage=u(this,a)[a]}close(){var e
null==(e=u(this,s)[s])||e.close()}send(e,t){u(this,i)[i]?u(this,s)[s].send(JSON.stringify({action:e,payload:t})):u(this,n)[n].push({action:e,payload:t})}on(e,t){u(this,o)[o].on(e,t)}emit(e,t){u(this,o)[o].emit(e,t)}once(e,t){u(this,o)[o].once(e,t)}})},6306:(e,t,r)=>{"use strict"
const n=r(4670),o=r(9819),i=r(9595),s=r(7591)
e.exports={RequestClient:n,Provider:o,SearchProvider:i,Socket:s}},8746:e=>{"use strict"
e.exports.setItem=(e,t)=>new Promise((r=>{localStorage.setItem(e,t),r()})),e.exports.getItem=e=>Promise.resolve(localStorage.getItem(e)),e.exports.removeItem=e=>new Promise((t=>{localStorage.removeItem(e),t()}))},1357:(e,t,r)=>{const n=r(8132)
e.exports=class{constructor(e,t){void 0===t&&(t={}),this.uppy=e,this.opts=t}getPluginState(){const{plugins:e}=this.uppy.getState()
return e[this.id]||{}}setPluginState(e){const{plugins:t}=this.uppy.getState()
this.uppy.setState({plugins:{...t,[this.id]:{...t[this.id],...e}}})}setOptions(e){this.opts={...this.opts,...e},this.setPluginState(),this.i18nInit()}i18nInit(){const e=new n([this.defaultLocale,this.uppy.locale,this.opts.locale])
this.i18n=e.translate.bind(e),this.i18nArray=e.translateArray.bind(e),this.setPluginState()}addTarget(){throw new Error("Extend the addTarget method to add your plugin to another plugin's target")}install(){}uninstall(){}render(){throw new Error("Extend the render method to add your plugin to a DOM element")}update(){}afterUpdate(){}}},3575:(e,t,r)=>{const n=r(204),o=r(6568)
class i extends Error{constructor(){super(...arguments),this.isRestriction=!0}}"undefined"==typeof AggregateError&&(globalThis.AggregateError=class extends Error{constructor(e,t){super(t),this.errors=e}}),e.exports={Restricter:class{constructor(e,t){this.i18n=t,this.getOpts=()=>{const t=e()
if(null!=t.restrictions.allowedFileTypes&&!Array.isArray(t.restrictions.allowedFileTypes))throw new TypeError("`restrictions.allowedFileTypes` must be an array")
return t}}validate(e,t){const{maxFileSize:r,minFileSize:s,maxTotalFileSize:a,maxNumberOfFiles:l,allowedFileTypes:c}=this.getOpts().restrictions
if(l&&t.length+1>l)throw new i("".concat(this.i18n("youCanOnlyUploadX",{smart_count:l})))
if(c&&!c.some((t=>t.includes("/")?!!e.type&&o(e.type.replace(/;.*?$/,""),t):!("."!==t[0]||!e.extension)&&e.extension.toLowerCase()===t.substr(1).toLowerCase()))){const e=c.join(", ")
throw new i(this.i18n("youCanOnlyUploadFileTypes",{types:e}))}if(a&&null!=e.size&&t.reduce(((e,t)=>e+t.size),e.size)>a)throw new i(this.i18n("exceedsSize",{size:n(a),file:e.name}))
if(r&&null!=e.size&&e.size>r)throw new i(this.i18n("exceedsSize",{size:n(r),file:e.name}))
if(s&&null!=e.size&&e.size<s)throw new i(this.i18n("inferiorSize",{size:n(s)}))}validateMinNumberOfFiles(e){const{minNumberOfFiles:t}=this.getOpts().restrictions
if(Object.keys(e).length<t)throw new i(this.i18n("youHaveToAtLeastSelectX",{smart_count:t}))}getMissingRequiredMetaFields(e){const t=new i(this.i18n("missingRequiredMetaFieldOnFile",{fileName:e.name})),{requiredMetaFields:r}=this.getOpts().restrictions,n=Object.prototype.hasOwnProperty,o=[]
for(const i of r)n.call(e.meta,i)&&""!==e.meta[i]||o.push(i)
return{missingFields:o,error:t}}},defaultOptions:{maxFileSize:null,minFileSize:null,maxTotalFileSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,requiredMetaFields:[]},RestrictionError:i}},3863:(e,t,r)=>{function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var o=0
const{render:i}=r(8633),s=r(6448),a=r(1357)
var l=function(e){return"__private_"+o+++"_"+e}("updateUI")
class c extends a{constructor(){super(...arguments),Object.defineProperty(this,l,{writable:!0,value:void 0})}mount(e,t){const r=t.id,o=s(e)
if(o){this.isTargetDOMEl=!0
const t=document.createDocumentFragment()
return n(this,l)[l]=function(e){let t=null,r=null
return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
return r=o,t||(t=Promise.resolve().then((()=>(t=null,e(...r))))),t}}((e=>{this.uppy.getPlugin(this.id)&&(i(this.render(e),t),this.afterUpdate())})),this.uppy.log("Installing ".concat(r," to a DOM element '").concat(e,"'")),this.opts.replaceTargetContent&&(o.innerHTML=""),i(this.render(this.uppy.getState()),t),this.el=t.firstElementChild,o.appendChild(t),this.onMount(),this.el}let a
if("object"==typeof e&&e instanceof c)a=e
else if("function"==typeof e){const t=e
this.uppy.iteratePlugins((e=>{if(e instanceof t)return a=e,!1}))}if(a)return this.uppy.log("Installing ".concat(r," to ").concat(a.id)),this.parent=a,this.el=a.addTarget(t),this.onMount(),this.el
this.uppy.log("Not installing ".concat(r))
let u="Invalid target option given to ".concat(r,".")
throw u+="function"==typeof e?" The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.":"If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.",new Error(u)}update(e){var t,r
null!=this.el&&(null==(t=(r=n(this,l))[l])||t.call(r,e))}unmount(){var e
this.isTargetDOMEl&&(null==(e=this.el)||e.remove()),this.onUnmount()}onMount(){}onUnmount(){}}e.exports=c},1409:(e,t,r)=>{"use strict"
let n,o
function i(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var s=0
function a(e){return"__private_"+s+++"_"+e}const l=r(8132),c=r(5575),{nanoid:u}=r(8773),p=r(7930),h=r(3317),d=r(8500),f=r(7840),m=r(5685),g=r(3751),v=r(4268),{justErrorsLogger:y,debugLogger:b}=r(2382),{Restricter:w,defaultOptions:x,RestrictionError:k}=r(3575),_=r(8689)
var P=a("plugins"),S=a("restricter"),O=a("storeUnsubscribe"),E=a("emitter"),A=a("preProcessors"),C=a("uploaders"),T=a("postProcessors"),L=a("informAndEmit"),j=a("checkRequiredMetaFieldsOnFile"),I=a("checkRequiredMetaFields"),R=a("assertNewUploadAllowed"),N=a("checkAndCreateFileStateObject"),U=a("startIfAutoProceed"),D=a("addListeners"),M=a("updateOnlineStatus"),F=a("createUpload"),H=a("getUpload"),B=a("removeUpload"),V=a("runUpload")
n=Symbol.for("uppy test: getPlugins"),o=Symbol.for("uppy test: createUpload")
class q{constructor(e){Object.defineProperty(this,V,{value:ee}),Object.defineProperty(this,B,{value:Z}),Object.defineProperty(this,H,{value:Q}),Object.defineProperty(this,F,{value:J}),Object.defineProperty(this,D,{value:Y}),Object.defineProperty(this,U,{value:G}),Object.defineProperty(this,N,{value:X}),Object.defineProperty(this,R,{value:K}),Object.defineProperty(this,I,{value:W}),Object.defineProperty(this,j,{value:$}),Object.defineProperty(this,L,{value:z}),Object.defineProperty(this,P,{writable:!0,value:Object.create(null)}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,O,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:c()}),Object.defineProperty(this,A,{writable:!0,value:new Set}),Object.defineProperty(this,C,{writable:!0,value:new Set}),Object.defineProperty(this,T,{writable:!0,value:new Set}),Object.defineProperty(this,M,{writable:!0,value:this.updateOnlineStatus.bind(this)}),this.defaultLocale=_
const t={id:"uppy",autoProceed:!1,allowMultipleUploads:!0,allowMultipleUploadBatches:!0,debug:!1,restrictions:x,meta:{},onBeforeFileAdded:e=>e,onBeforeUpload:e=>e,store:h(),logger:y,infoTimeout:5e3}
this.opts={...t,...e,restrictions:{...t.restrictions,...e&&e.restrictions}},e&&e.logger&&e.debug?this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.","warning"):e&&e.debug&&(this.opts.logger=b),this.log("Using Core v".concat(this.constructor.VERSION)),this.i18nInit(),this.calculateProgress=p(this.calculateProgress.bind(this),500,{leading:!0,trailing:!0}),this.store=this.opts.store,this.setState({plugins:{},files:{},currentUploads:{},allowNewUpload:!0,capabilities:{uploadProgress:g(),individualCancellation:!0,resumableUploads:!1},totalProgress:0,meta:{...this.opts.meta},info:[],recoveredState:null}),i(this,S)[S]=new w((()=>this.opts),this.i18n),i(this,O)[O]=this.store.subscribe(((e,t,r)=>{this.emit("state-update",e,t,r),this.updateAll(t)})),this.opts.debug&&"undefined"!=typeof window&&(window[this.opts.id]=this),i(this,D)[D]()}emit(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
i(this,E)[E].emit(e,...r)}on(e,t){return i(this,E)[E].on(e,t),this}once(e,t){return i(this,E)[E].once(e,t),this}off(e,t){return i(this,E)[E].off(e,t),this}updateAll(e){this.iteratePlugins((t=>{t.update(e)}))}setState(e){this.store.setState(e)}getState(){return this.store.getState()}get state(){return this.getState()}setFileState(e,t){if(!this.getState().files[e])throw new Error("Can’t set state for ".concat(e," (the file could have been removed)"))
this.setState({files:{...this.getState().files,[e]:{...this.getState().files[e],...t}}})}i18nInit(){const e=new l([this.defaultLocale,this.opts.locale])
this.i18n=e.translate.bind(e),this.i18nArray=e.translateArray.bind(e),this.locale=e.locale}setOptions(e){this.opts={...this.opts,...e,restrictions:{...this.opts.restrictions,...e&&e.restrictions}},e.meta&&this.setMeta(e.meta),this.i18nInit(),e.locale&&this.iteratePlugins((e=>{e.setOptions()})),this.setState()}resetProgress(){const e={percentage:0,bytesUploaded:0,uploadComplete:!1,uploadStarted:null},t={...this.getState().files},r={}
Object.keys(t).forEach((n=>{const o={...t[n]}
o.progress={...o.progress,...e},r[n]=o})),this.setState({files:r,totalProgress:0}),this.emit("reset-progress")}addPreProcessor(e){i(this,A)[A].add(e)}removePreProcessor(e){return i(this,A)[A].delete(e)}addPostProcessor(e){i(this,T)[T].add(e)}removePostProcessor(e){return i(this,T)[T].delete(e)}addUploader(e){i(this,C)[C].add(e)}removeUploader(e){return i(this,C)[C].delete(e)}setMeta(e){const t={...this.getState().meta,...e},r={...this.getState().files}
Object.keys(r).forEach((t=>{r[t]={...r[t],meta:{...r[t].meta,...e}}})),this.log("Adding metadata:"),this.log(e),this.setState({meta:t,files:r})}setFileMeta(e,t){const r={...this.getState().files}
if(!r[e])return void this.log("Was trying to set metadata for a file that has been removed: ",e)
const n={...r[e].meta,...t}
r[e]={...r[e],meta:n},this.setState({files:r})}getFile(e){return this.getState().files[e]}getFiles(){const{files:e}=this.getState()
return Object.values(e)}getObjectOfFilesPerState(){const{files:e,totalProgress:t,error:r}=this.getState(),n=Object.values(e),o=n.filter((e=>{let{progress:t}=e
return!t.uploadComplete&&t.uploadStarted})),i=n.filter((e=>!e.progress.uploadStarted)),s=n.filter((e=>e.progress.uploadStarted||e.progress.preprocess||e.progress.postprocess)),a=n.filter((e=>e.progress.uploadStarted)),l=n.filter((e=>e.isPaused)),c=n.filter((e=>e.progress.uploadComplete)),u=n.filter((e=>e.error)),p=o.filter((e=>!e.isPaused)),h=n.filter((e=>e.progress.preprocess||e.progress.postprocess))
return{newFiles:i,startedFiles:s,uploadStartedFiles:a,pausedFiles:l,completeFiles:c,erroredFiles:u,inProgressFiles:o,inProgressNotPausedFiles:p,processingFiles:h,isUploadStarted:a.length>0,isAllComplete:100===t&&c.length===n.length&&0===h.length,isAllErrored:!!r&&u.length===n.length,isAllPaused:0!==o.length&&l.length===o.length,isUploadInProgress:o.length>0,isSomeGhost:n.some((e=>e.isGhost))}}validateRestrictions(e,t){void 0===t&&(t=this.getFiles())
try{return i(this,S)[S].validate(e,t),{result:!0}}catch(e){return{result:!1,reason:e.message}}}checkIfFileAlreadyExists(e){const{files:t}=this.getState()
return!(!t[e]||t[e].isGhost)}addFile(e){i(this,R)[R](e)
const{files:t}=this.getState()
let r=i(this,N)[N](t,e)
return t[r.id]&&t[r.id].isGhost&&(r={...t[r.id],data:e.data,isGhost:!1},this.log("Replaced the blob in the restored ghost file: ".concat(r.name,", ").concat(r.id))),this.setState({files:{...t,[r.id]:r}}),this.emit("file-added",r),this.emit("files-added",[r]),this.log("Added file: ".concat(r.name,", ").concat(r.id,", mime type: ").concat(r.type)),i(this,U)[U](),r.id}addFiles(e){i(this,R)[R]()
const t={...this.getState().files},r=[],n=[]
for(let o=0;o<e.length;o++)try{let n=i(this,N)[N](t,e[o])
t[n.id]&&t[n.id].isGhost&&(n={...t[n.id],data:e[o].data,isGhost:!1},this.log("Replaced blob in a ghost file: ".concat(n.name,", ").concat(n.id))),t[n.id]=n,r.push(n)}catch(e){e.isRestriction||n.push(e)}if(this.setState({files:t}),r.forEach((e=>{this.emit("file-added",e)})),this.emit("files-added",r),r.length>5?this.log("Added batch of ".concat(r.length," files")):Object.keys(r).forEach((e=>{this.log("Added file: ".concat(r[e].name,"\n id: ").concat(r[e].id,"\n type: ").concat(r[e].type))})),r.length>0&&i(this,U)[U](),n.length>0){let e="Multiple errors occurred while adding files:\n"
if(n.forEach((t=>{e+="\n * ".concat(t.message)})),this.info({message:this.i18n("addBulkFilesFailed",{smart_count:n.length}),details:e},"error",this.opts.infoTimeout),"function"==typeof AggregateError)throw new AggregateError(n,e)
{const t=new Error(e)
throw t.errors=n,t}}}removeFiles(e,t){const{files:r,currentUploads:n}=this.getState(),o={...r},i={...n},s=Object.create(null)
function a(e){return void 0===s[e]}e.forEach((e=>{r[e]&&(s[e]=r[e],delete o[e])})),Object.keys(i).forEach((e=>{const t=n[e].fileIDs.filter(a)
0!==t.length?i[e]={...n[e],fileIDs:t}:delete i[e]}))
const l={currentUploads:i,files:o}
0===Object.keys(o).length&&(l.allowNewUpload=!0,l.error=null,l.recoveredState=null),this.setState(l),this.calculateTotalProgress()
const c=Object.keys(s)
c.forEach((e=>{this.emit("file-removed",s[e],t)})),c.length>5?this.log("Removed ".concat(c.length," files")):this.log("Removed files: ".concat(c.join(", ")))}removeFile(e,t){void 0===t&&(t=null),this.removeFiles([e],t)}pauseResume(e){if(!this.getState().capabilities.resumableUploads||this.getFile(e).uploadComplete)return
const t=!this.getFile(e).isPaused
return this.setFileState(e,{isPaused:t}),this.emit("upload-pause",e,t),t}pauseAll(){const e={...this.getState().files}
Object.keys(e).filter((t=>!e[t].progress.uploadComplete&&e[t].progress.uploadStarted)).forEach((t=>{const r={...e[t],isPaused:!0}
e[t]=r})),this.setState({files:e}),this.emit("pause-all")}resumeAll(){const e={...this.getState().files}
Object.keys(e).filter((t=>!e[t].progress.uploadComplete&&e[t].progress.uploadStarted)).forEach((t=>{const r={...e[t],isPaused:!1,error:null}
e[t]=r})),this.setState({files:e}),this.emit("resume-all")}retryAll(){const e={...this.getState().files},t=Object.keys(e).filter((t=>e[t].error))
if(t.forEach((t=>{const r={...e[t],isPaused:!1,error:null}
e[t]=r})),this.setState({files:e,error:null}),this.emit("retry-all",t),0===t.length)return Promise.resolve({successful:[],failed:[]})
const r=i(this,F)[F](t,{forceAllowNewUpload:!0})
return i(this,V)[V](r)}cancelAll(){this.emit("cancel-all")
const{files:e}=this.getState(),t=Object.keys(e)
t.length&&this.removeFiles(t,"cancel-all"),this.setState({totalProgress:0,error:null,recoveredState:null})}retryUpload(e){this.setFileState(e,{error:null,isPaused:!1}),this.emit("upload-retry",e)
const t=i(this,F)[F]([e],{forceAllowNewUpload:!0})
return i(this,V)[V](t)}reset(){this.cancelAll()}logout(){this.iteratePlugins((e=>{e.provider&&e.provider.logout&&e.provider.logout()}))}calculateProgress(e,t){if(!this.getFile(e.id))return void this.log("Not setting progress for a file that has been removed: ".concat(e.id))
const r=Number.isFinite(t.bytesTotal)&&t.bytesTotal>0
this.setFileState(e.id,{progress:{...this.getFile(e.id).progress,bytesUploaded:t.bytesUploaded,bytesTotal:t.bytesTotal,percentage:r?Math.round(t.bytesUploaded/t.bytesTotal*100):0}}),this.calculateTotalProgress()}calculateTotalProgress(){const e=this.getFiles().filter((e=>e.progress.uploadStarted||e.progress.preprocess||e.progress.postprocess))
if(0===e.length)return this.emit("progress",0),void this.setState({totalProgress:0})
const t=e.filter((e=>null!=e.progress.bytesTotal)),r=e.filter((e=>null==e.progress.bytesTotal))
if(0===t.length){const t=100*e.length,n=r.reduce(((e,t)=>e+t.progress.percentage),0),o=Math.round(n/t*100)
return void this.setState({totalProgress:o})}let n=t.reduce(((e,t)=>e+t.progress.bytesTotal),0)
const o=n/t.length
n+=o*r.length
let i=0
t.forEach((e=>{i+=e.progress.bytesUploaded})),r.forEach((e=>{i+=o*(e.progress.percentage||0)/100}))
let s=0===n?0:Math.round(i/n*100)
s>100&&(s=100),this.setState({totalProgress:s}),this.emit("progress",s)}updateOnlineStatus(){void 0===window.navigator.onLine||window.navigator.onLine?(this.emit("is-online"),this.wasOffline&&(this.emit("back-online"),this.info(this.i18n("connectedToInternet"),"success",3e3),this.wasOffline=!1)):(this.emit("is-offline"),this.info(this.i18n("noInternetConnection"),"error",0),this.wasOffline=!0)}getID(){return this.opts.id}use(e,t){if("function"!=typeof e){const t="Expected a plugin class, but got ".concat(null===e?"null":typeof e,".")+" Please verify that the plugin was imported and spelled correctly."
throw new TypeError(t)}const r=new e(this,t),n=r.id
if(!n)throw new Error("Your plugin must have an id")
if(!r.type)throw new Error("Your plugin must have a type")
const o=this.getPlugin(n)
if(o){const e="Already found a plugin named '".concat(o.id,"'. ")+"Tried to use: '".concat(n,"'.\n")+"Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id."
throw new Error(e)}return e.VERSION&&this.log("Using ".concat(n," v").concat(e.VERSION)),r.type in i(this,P)[P]?i(this,P)[P][r.type].push(r):i(this,P)[P][r.type]=[r],r.install(),this}getPlugin(e){for(const t of Object.values(i(this,P)[P])){const r=t.find((t=>t.id===e))
if(null!=r)return r}}[n](e){return i(this,P)[P][e]}iteratePlugins(e){Object.values(i(this,P)[P]).flat(1).forEach(e)}removePlugin(e){this.log("Removing plugin ".concat(e.id)),this.emit("plugin-remove",e),e.uninstall&&e.uninstall()
const t=i(this,P)[P][e.type],r=t.findIndex((t=>t.id===e.id));-1!==r&&t.splice(r,1)
const n={plugins:{...this.getState().plugins,[e.id]:void 0}}
this.setState(n)}close(){this.log("Closing Uppy instance ".concat(this.opts.id,": removing all files and uninstalling plugins")),this.reset(),i(this,O)[O](),this.iteratePlugins((e=>{this.removePlugin(e)})),"undefined"!=typeof window&&window.removeEventListener&&(window.removeEventListener("online",i(this,M)[M]),window.removeEventListener("offline",i(this,M)[M]))}hideInfo(){const{info:e}=this.getState()
this.setState({info:e.slice(1)}),this.emit("info-hidden")}info(e,t,r){void 0===t&&(t="info"),void 0===r&&(r=3e3)
const n="object"==typeof e
this.setState({info:[...this.getState().info,{type:t,message:n?e.message:e,details:n?e.details:null}]}),setTimeout((()=>this.hideInfo()),r),this.emit("info-visible")}log(e,t){const{logger:r}=this.opts
switch(t){case"error":r.error(e)
break
case"warning":r.warn(e)
break
default:r.debug(e)}}restore(e){return this.log('Core: attempting to restore upload "'.concat(e,'"')),this.getState().currentUploads[e]?i(this,V)[V](e):(i(this,B)[B](e),Promise.reject(new Error("Nonexistent upload")))}[o](){return i(this,F)[F](...arguments)}addResultData(e,t){if(!i(this,H)[H](e))return void this.log("Not setting result for an upload that has been removed: ".concat(e))
const{currentUploads:r}=this.getState(),n={...r[e],result:{...r[e].result,...t}}
this.setState({currentUploads:{...r,[e]:n}})}upload(){var e
null!=(e=i(this,P)[P].uploader)&&e.length||this.log("No uploader type plugins are used","warning")
let{files:t}=this.getState()
const r=this.opts.onBeforeUpload(t)
return!1===r?Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")):(r&&"object"==typeof r&&(t=r,this.setState({files:t})),Promise.resolve().then((()=>i(this,S)[S].validateMinNumberOfFiles(t))).catch((e=>{throw i(this,L)[L](e),e})).then((()=>{if(!i(this,I)[I](t))throw new k(this.i18n("missingRequiredMetaField"))})).catch((e=>{throw e})).then((()=>{const{currentUploads:e}=this.getState(),r=Object.values(e).flatMap((e=>e.fileIDs)),n=[]
Object.keys(t).forEach((e=>{const t=this.getFile(e)
t.progress.uploadStarted||-1!==r.indexOf(e)||n.push(t.id)}))
const o=i(this,F)[F](n)
return i(this,V)[V](o)})).catch((e=>{throw this.emit("error",e),this.log(e,"error"),e})))}}function z(e,t){const{message:r,details:n=""}=e
e.isRestriction?this.emit("restriction-failed",t,e):this.emit("error",e),this.info({message:r,details:n},"error",this.opts.infoTimeout),this.log("".concat(r," ").concat(n).trim(),"error")}function $(e){const{missingFields:t,error:r}=i(this,S)[S].getMissingRequiredMetaFields(e)
return!(t.length>0&&(this.setFileState(e.id,{missingRequiredMetaFields:t}),this.log(r.message),this.emit("restriction-failed",e,r),1))}function W(e){let t=!0
for(const r of Object.values(e))i(this,j)[j](r)||(t=!1)
return t}function K(e){const{allowNewUpload:t}=this.getState()
if(!1===t){const t=new k(this.i18n("noMoreFilesAllowed"))
throw i(this,L)[L](t,e),t}}function X(e,t){const r=d(t),n=v(r,t),o=f(n).extension,s=Boolean(t.isRemote),a=m({...t,type:r})
if(this.checkIfFileAlreadyExists(a)){const e=new k(this.i18n("noDuplicates",{fileName:n}))
throw i(this,L)[L](e,t),e}const l=t.meta||{}
l.name=n,l.type=r
const c=Number.isFinite(t.data.size)?t.data.size:null
let u={source:t.source||"",id:a,name:n,extension:o||"",meta:{...this.getState().meta,...l},type:r,data:t.data,progress:{percentage:0,bytesUploaded:0,bytesTotal:c,uploadComplete:!1,uploadStarted:null},size:c,isRemote:s,remote:t.remote||"",preview:t.preview}
const p=this.opts.onBeforeFileAdded(u,e)
if(!1===p){const e=new k("Cannot add the file because onBeforeFileAdded returned false.")
throw this.emit("restriction-failed",t,e),e}"object"==typeof p&&null!==p&&(u=p)
try{const t=Object.keys(e).map((t=>e[t]))
i(this,S)[S].validate(u,t)}catch(e){throw i(this,L)[L](e,u),e}return u}function G(){this.opts.autoProceed&&!this.scheduledAutoProceed&&(this.scheduledAutoProceed=setTimeout((()=>{this.scheduledAutoProceed=null,this.upload().catch((e=>{e.isRestriction||this.log(e.stack||e.message||e)}))}),4))}function Y(){const e=(e,t,r)=>{let n=e.message||"Unknown error"
e.details&&(n+=" ".concat(e.details)),this.setState({error:n}),null!=t&&t.id in this.getState().files&&this.setFileState(t.id,{error:n,response:r})}
this.on("error",e),this.on("upload-error",((t,r,n)=>{if(e(r,t,n),"object"==typeof r&&r.message){const e=new Error(r.message)
e.details=r.message,r.details&&(e.details+=" ".concat(r.details)),e.message=this.i18n("failedToUpload",{file:t.name}),i(this,L)[L](e)}else i(this,L)[L](r)})),this.on("upload",(()=>{this.setState({error:null})})),this.on("upload-started",(e=>{this.getFile(e.id)?this.setFileState(e.id,{progress:{uploadStarted:Date.now(),uploadComplete:!1,percentage:0,bytesUploaded:0,bytesTotal:e.size}}):this.log("Not setting progress for a file that has been removed: ".concat(e.id))})),this.on("upload-progress",this.calculateProgress),this.on("upload-success",((e,t)=>{if(!this.getFile(e.id))return void this.log("Not setting progress for a file that has been removed: ".concat(e.id))
const r=this.getFile(e.id).progress
this.setFileState(e.id,{progress:{...r,postprocess:i(this,T)[T].size>0?{mode:"indeterminate"}:null,uploadComplete:!0,percentage:100,bytesUploaded:r.bytesTotal},response:t,uploadURL:t.uploadURL,isPaused:!1}),null==e.size&&this.setFileState(e.id,{size:t.bytesUploaded||r.bytesTotal}),this.calculateTotalProgress()})),this.on("preprocess-progress",((e,t)=>{this.getFile(e.id)?this.setFileState(e.id,{progress:{...this.getFile(e.id).progress,preprocess:t}}):this.log("Not setting progress for a file that has been removed: ".concat(e.id))})),this.on("preprocess-complete",(e=>{if(!this.getFile(e.id))return void this.log("Not setting progress for a file that has been removed: ".concat(e.id))
const t={...this.getState().files}
t[e.id]={...t[e.id],progress:{...t[e.id].progress}},delete t[e.id].progress.preprocess,this.setState({files:t})})),this.on("postprocess-progress",((e,t)=>{this.getFile(e.id)?this.setFileState(e.id,{progress:{...this.getState().files[e.id].progress,postprocess:t}}):this.log("Not setting progress for a file that has been removed: ".concat(e.id))})),this.on("postprocess-complete",(e=>{if(!this.getFile(e.id))return void this.log("Not setting progress for a file that has been removed: ".concat(e.id))
const t={...this.getState().files}
t[e.id]={...t[e.id],progress:{...t[e.id].progress}},delete t[e.id].progress.postprocess,this.setState({files:t})})),this.on("restored",(()=>{this.calculateTotalProgress()})),this.on("dashboard:file-edit-complete",(e=>{e&&i(this,j)[j](e)})),"undefined"!=typeof window&&window.addEventListener&&(window.addEventListener("online",i(this,M)[M]),window.addEventListener("offline",i(this,M)[M]),setTimeout(i(this,M)[M],3e3))}function J(e,t){void 0===t&&(t={})
const{forceAllowNewUpload:r=!1}=t,{allowNewUpload:n,currentUploads:o}=this.getState()
if(!n&&!r)throw new Error("Cannot create a new upload: already uploading.")
const i=u()
return this.emit("upload",{id:i,fileIDs:e}),this.setState({allowNewUpload:!1!==this.opts.allowMultipleUploadBatches&&!1!==this.opts.allowMultipleUploads,currentUploads:{...o,[i]:{fileIDs:e,step:0,result:{}}}}),i}function Q(e){const{currentUploads:t}=this.getState()
return t[e]}function Z(e){const t={...this.getState().currentUploads}
delete t[e],this.setState({currentUploads:t})}async function ee(e){let{currentUploads:t}=this.getState(),r=t[e]
const n=r.step||0,o=[...i(this,A)[A],...i(this,C)[C],...i(this,T)[T]]
try{for(let i=n;i<o.length&&r;i++){const n=o[i],s={...r,step:i}
this.setState({currentUploads:{...t,[e]:s}}),await n(s.fileIDs,e),t=this.getState().currentUploads,r=t[e]}}catch(t){throw i(this,B)[B](e),t}if(r){r.fileIDs.forEach((e=>{const t=this.getFile(e)
t&&t.progress.postprocess&&this.emit("postprocess-complete",t)}))
const n=r.fileIDs.map((e=>this.getFile(e))),o=n.filter((e=>!e.error)),i=n.filter((e=>e.error))
await this.addResultData(e,{successful:o,failed:i,uploadID:e}),t=this.getState().currentUploads,r=t[e]}let s
return r&&(s=r.result,this.emit("complete",s),i(this,B)[B](e)),null==s&&this.log("Not setting result for an upload that has been removed: ".concat(e)),s}q.VERSION="2.1.6",e.exports=q},4268:e=>{e.exports=function(e,t){return t.name?t.name:"image"===e.split("/")[0]?"".concat(e.split("/")[0],".").concat(e.split("/")[1]):"noname"}},7525:(e,t,r)=>{"use strict"
const n=r(1409),o=r(3863),i=r(1357),{debugLogger:s}=r(2382)
e.exports=n,e.exports.Uppy=n,e.exports.UIPlugin=o,e.exports.BasePlugin=i,e.exports.debugLogger=s},8689:e=>{e.exports={strings:{addBulkFilesFailed:{0:"Failed to add %{smart_count} file due to an internal error",1:"Failed to add %{smart_count} files due to internal errors"},youCanOnlyUploadX:{0:"You can only upload %{smart_count} file",1:"You can only upload %{smart_count} files"},youHaveToAtLeastSelectX:{0:"You have to select at least %{smart_count} file",1:"You have to select at least %{smart_count} files"},exceedsSize:"%{file} exceeds maximum allowed size of %{size}",missingRequiredMetaField:"Missing required meta fields",missingRequiredMetaFieldOnFile:"Missing required meta fields in %{fileName}",inferiorSize:"This file is smaller than the allowed size of %{size}",youCanOnlyUploadFileTypes:"You can only upload: %{types}",noMoreFilesAllowed:"Cannot add more files",noDuplicates:"Cannot add the duplicate file '%{fileName}', it already exists",companionError:"Connection with Companion failed",authAborted:"Authentication aborted",companionUnauthorizeHint:"To unauthorize to your %{provider} account, please go to %{url}",failedToUpload:"Failed to upload %{file}",noInternetConnection:"No Internet connection",connectedToInternet:"Connected to the Internet",noFilesFound:"You have no files or folders here",selectX:{0:"Select %{smart_count}",1:"Select %{smart_count}"},allFilesFromFolderNamed:"All files from folder %{name}",openFolderNamed:"Open folder %{name}",cancel:"Cancel",logOut:"Log out",filter:"Filter",resetFilter:"Reset filter",loading:"Loading...",authenticateWithTitle:"Please authenticate with %{pluginName} to select files",authenticateWith:"Connect to %{pluginName}",signInWithGoogle:"Sign in with Google",searchImages:"Search for images",enterTextToSearch:"Enter text to search for images",search:"Search",emptyFolderAdded:"No files were added from empty folder",folderAlreadyAdded:'The folder "%{folder}" was already added',folderAdded:{0:"Added %{smart_count} file from %{folder}",1:"Added %{smart_count} files from %{folder}"}}}},2382:(e,t,r)=>{const n=r(551),o={debug:()=>{},warn:()=>{},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.error("[Uppy] [".concat(n(),"]"),...t)}},i={debug:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.debug("[Uppy] [".concat(n(),"]"),...t)},warn:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.warn("[Uppy] [".concat(n(),"]"),...t)},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.error("[Uppy] [".concat(n(),"]"),...t)}}
e.exports={justErrorsLogger:o,debugLogger:i}},3751:e=>{e.exports=function(e){if(null==e&&(e="undefined"!=typeof navigator?navigator.userAgent:null),!e)return!0
const t=/Edge\/(\d+\.\d+)/.exec(e)
if(!t)return!0
const r=t[1]
let[n,o]=r.split(".")
return n=parseInt(n,10),o=parseInt(o,10),n<15||15===n&&o<15063||n>18||18===n&&o>=18218}},8815:(e,t,r)=>{var n,o
const i=r(1357),s=r(4023),a=r(6646)
e.exports=(o=n=class extends i{constructor(e,t){super(e,t),this.addFiles=e=>{const t=e.map((e=>({source:this.id,name:e.name,type:e.type,data:e,meta:{relativePath:e.relativePath||null}})))
try{this.uppy.addFiles(t)}catch(e){this.uppy.log(e)}},this.isFileTransfer=e=>{var t
return(null!=(t=e.dataTransfer.types)?t:[]).some((e=>"Files"===e))},this.handleDrop=async e=>{var t,r
if(!this.isFileTransfer(e))return
e.preventDefault(),e.stopPropagation(),clearTimeout(this.removeDragOverClassTimeout),e.currentTarget.classList.remove("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!1}),this.uppy.iteratePlugins((t=>{"acquirer"===t.type&&(null==t.handleRootDrop||t.handleRootDrop(e))}))
let n=!1
const o=await s(e.dataTransfer,{logDropError:e=>{this.uppy.log(e,"error"),n||(this.uppy.info(e.message,"error"),n=!0)}})
o.length>0&&(this.uppy.log("[DropTarget] Files were dropped"),this.addFiles(o)),null==(t=(r=this.opts).onDrop)||t.call(r,e)},this.handleDragOver=e=>{var t,r
this.isFileTransfer(e)&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",clearTimeout(this.removeDragOverClassTimeout),e.currentTarget.classList.add("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!0}),null==(t=(r=this.opts).onDragOver)||t.call(r,e))},this.handleDragLeave=e=>{var t,r
if(!this.isFileTransfer(e))return
e.preventDefault(),e.stopPropagation()
const{currentTarget:n}=e
clearTimeout(this.removeDragOverClassTimeout),this.removeDragOverClassTimeout=setTimeout((()=>{n.classList.remove("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!1})}),50),null==(t=(r=this.opts).onDragLeave)||t.call(r,e)},this.addListeners=()=>{const{target:e}=this.opts
if(e instanceof Element?this.nodes=[e]:"string"==typeof e&&(this.nodes=a(document.querySelectorAll(e))),!this.nodes&&!this.nodes.length>0)throw new Error('"'.concat(e,'" does not match any HTML elements'))
this.nodes.forEach((e=>{e.addEventListener("dragover",this.handleDragOver,!1),e.addEventListener("dragleave",this.handleDragLeave,!1),e.addEventListener("drop",this.handleDrop,!1)}))},this.removeListeners=()=>{this.nodes&&this.nodes.forEach((e=>{e.removeEventListener("dragover",this.handleDragOver,!1),e.removeEventListener("dragleave",this.handleDragLeave,!1),e.removeEventListener("drop",this.handleDrop,!1)}))},this.type="acquirer",this.id=this.opts.id||"DropTarget",this.title="Drop Target",this.opts={target:null,...t},this.removeDragOverClassTimeout=null}install(){this.setPluginState({isDraggingOver:!1}),this.addListeners()}uninstall(){this.removeListeners()}},n.VERSION="1.1.2",o)},3317:e=>{"use strict"
var t=0
var r=function(e){return"__private_"+t+++"_"+e}("publish")
class n{constructor(){Object.defineProperty(this,r,{value:o}),this.state={},this.callbacks=[]}getState(){return this.state}setState(e){const t={...this.state},n={...this.state,...e}
this.state=n,function(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}(this,r)[r](t,n,e)}subscribe(e){return this.callbacks.push(e),()=>{this.callbacks.splice(this.callbacks.indexOf(e),1)}}}function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this.callbacks.forEach((e=>{e(...t)}))}n.VERSION="2.0.3",e.exports=function(){return new n}},1511:(e,t)=>{"use strict"
t.AbortController=globalThis.AbortController,t.AbortSignal=globalThis.AbortSignal,t.createAbortError=function(e){return void 0===e&&(e="Aborted"),new DOMException(e,"AbortError")}},9821:e=>{"use strict"
var t,r
function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var o=0
function i(e){return"__private_"+o+++"_"+e}e.exports=(t=i("emitter"),r=i("events"),class{constructor(e){Object.defineProperty(this,t,{writable:!0,value:void 0}),Object.defineProperty(this,r,{writable:!0,value:[]}),n(this,t)[t]=e}on(e,o){return n(this,r)[r].push([e,o]),n(this,t)[t].on(e,o)}remove(){for(const[e,o]of n(this,r)[r].splice(0))n(this,t)[t].off(e,o)}})},5556:e=>{"use strict"
class t extends Error{constructor(e,t){void 0===t&&(t=null),super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."),this.cause=e,this.isNetworkError=!0,this.request=t}}e.exports=t},8850:e=>{"use strict"
function t(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var r=0
function n(e){return"__private_"+r+++"_"+e}var o=n("aliveTimer"),i=n("isDone"),s=n("onTimedOut"),a=n("timeout")
e.exports=class{constructor(e,r){Object.defineProperty(this,o,{writable:!0,value:void 0}),Object.defineProperty(this,i,{writable:!0,value:!1}),Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),t(this,a)[a]=e,t(this,s)[s]=r}progress(){t(this,i)[i]||t(this,a)[a]>0&&(clearTimeout(t(this,o)[o]),t(this,o)[o]=setTimeout(t(this,s)[s],t(this,a)[a]))}done(){t(this,i)[i]||(clearTimeout(t(this,o)[o]),t(this,o)[o]=null,t(this,i)[i]=!0)}}},9687:e=>{"use strict"
function t(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var r=0
function n(e){return"__private_"+r+++"_"+e}function o(){return new Error("Cancelled")}var i=n("activeRequests"),s=n("queuedHandlers"),a=n("paused"),l=n("pauseTimer"),c=n("downLimit"),u=n("upperLimit"),p=n("rateLimitingTimer"),h=n("call"),d=n("queueNext"),f=n("next"),m=n("queue"),g=n("dequeue"),v=n("resume"),y=n("increaseLimit")
function b(e){t(this,i)[i]+=1
let r,n=!1
try{r=e()}catch(e){throw t(this,i)[i]-=1,e}return{abort:()=>{n||(n=!0,t(this,i)[i]-=1,r(),t(this,d)[d]())},done:()=>{n||(n=!0,t(this,i)[i]-=1,t(this,d)[d]())}}}function w(){queueMicrotask((()=>t(this,f)[f]()))}function x(){if(t(this,a)[a]||t(this,i)[i]>=this.limit)return
if(0===t(this,s)[s].length)return
const e=t(this,s)[s].shift(),r=t(this,h)[h](e.fn)
e.abort=r.abort,e.done=r.done}function k(e,r){void 0===r&&(r={})
const n={fn:e,priority:r.priority||0,abort:()=>{t(this,g)[g](n)},done:()=>{throw new Error("Cannot mark a queued request as done: this indicates a bug")}},o=t(this,s)[s].findIndex((e=>n.priority>e.priority))
return-1===o?t(this,s)[s].push(n):t(this,s)[s].splice(o,0,n),n}function _(e){const r=t(this,s)[s].indexOf(e);-1!==r&&t(this,s)[s].splice(r,1)}e.exports={RateLimitedQueue:class{constructor(e){Object.defineProperty(this,g,{value:_}),Object.defineProperty(this,m,{value:k}),Object.defineProperty(this,f,{value:x}),Object.defineProperty(this,d,{value:w}),Object.defineProperty(this,h,{value:b}),Object.defineProperty(this,i,{writable:!0,value:0}),Object.defineProperty(this,s,{writable:!0,value:[]}),Object.defineProperty(this,a,{writable:!0,value:!1}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:1}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:()=>this.resume()}),Object.defineProperty(this,y,{writable:!0,value:()=>{if(t(this,a)[a])t(this,p)[p]=setTimeout(t(this,y)[y],0)
else{t(this,c)[c]=this.limit,this.limit=Math.ceil((t(this,u)[u]+t(this,c)[c])/2)
for(let e=t(this,c)[c];e<=this.limit;e++)t(this,d)[d]()
t(this,u)[u]-t(this,c)[c]>3?t(this,p)[p]=setTimeout(t(this,y)[y],2e3):t(this,c)[c]=Math.floor(t(this,c)[c]/2)}}}),this.limit="number"!=typeof e||0===e?1/0:e}run(e,r){return!t(this,a)[a]&&t(this,i)[i]<this.limit?t(this,h)[h](e):t(this,m)[m](e,r)}wrapPromiseFunction(e,t){var r=this
return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s]
let a
const l=new Promise(((n,s)=>{a=r.run((()=>{let t,r
try{r=Promise.resolve(e(...i))}catch(e){r=Promise.reject(e)}return r.then((e=>{t?s(t):(a.done(),n(e))}),(e=>{t?s(t):(a.done(),s(e))})),()=>{t=o()}}),t)}))
return l.abort=()=>{a.abort()},l}}resume(){t(this,a)[a]=!1,clearTimeout(t(this,l)[l])
for(let e=0;e<this.limit;e++)t(this,d)[d]()}pause(e){void 0===e&&(e=null),t(this,a)[a]=!0,clearTimeout(t(this,l)[l]),null!=e&&(t(this,l)[l]=setTimeout(t(this,v)[v],e))}rateLimit(e){clearTimeout(t(this,p)[p]),this.pause(e),this.limit>1&&Number.isFinite(this.limit)&&(t(this,u)[u]=this.limit-1,this.limit=t(this,c)[c],t(this,p)[p]=setTimeout(t(this,y)[y],e))}get isPaused(){return t(this,a)[a]}},internalRateLimitedQueue:Symbol("__queue")}},8132:(e,t,r)=>{"use strict"
var n
function o(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var i=0
const s=r(4752)
function a(e,t,r){const n=[]
return e.forEach((e=>"string"!=typeof e?n.push(e):t[Symbol.split](e).forEach(((e,t,o)=>{""!==e&&n.push(e),t<o.length-1&&n.push(r)})))),n}function l(e,t){const r=/\$/g
let n=[e]
if(null==t)return n
for(const o of Object.keys(t))if("_"!==o){let e=t[o]
"string"==typeof e&&(e=r[Symbol.replace](e,"$$$$")),n=a(n,new RegExp("%\\{".concat(o,"\\}"),"g"),e)}return n}function c(e){if(null==e||!e.strings)return
const t=this.locale
this.locale={...t,strings:{...t.strings,...e.strings}},this.locale.pluralize=e.pluralize||t.pluralize}e.exports=(n=function(e){return"__private_"+i+++"_"+e}("apply"),class{constructor(e){Object.defineProperty(this,n,{value:c}),this.locale={strings:{},pluralize:e=>1===e?0:1},Array.isArray(e)?e.forEach(o(this,n)[n],this):o(this,n)[n](e)}translate(e,t){return this.translateArray(e,t).join("")}translateArray(e,t){if(!s(this.locale.strings,e))throw new Error("missing string: ".concat(e))
const r=this.locale.strings[e]
if("object"==typeof r){if(t&&void 0!==t.smart_count)return l(r[this.locale.pluralize(t.smart_count)],t)
throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}")}return l(r,t)}})},5448:(e,t,r)=>{"use strict"
const{createAbortError:n}=r(1511)
e.exports=function(e,t){return new Promise(((r,o)=>{var i,s
if(null!=t&&null!=(i=t.signal)&&i.aborted)return o(n())
const a=setTimeout((()=>{c(),r()}),e)
function l(){clearTimeout(a),c(),o(n())}function c(){var e
null==t||null==(e=t.signal)||e.removeEventListener("abort",l)}null==t||null==(s=t.signal)||s.addEventListener("abort",l)}))}},1464:(e,t,r)=>{"use strict"
const n=r(7930)
e.exports=n((function(e,t,r){const{progress:n,bytesUploaded:o,bytesTotal:i}=t
n&&(e.uppy.log("Upload progress: ".concat(n)),e.uppy.emit("upload-progress",r,{uploader:e,bytesUploaded:o,bytesTotal:i}))}),300,{leading:!0,trailing:!0})},5210:(e,t,r)=>{"use strict"
const n=r(5556)
e.exports=function(){return fetch(...arguments).catch((e=>{throw"AbortError"===e.name?e:new n(e)}))}},6448:(e,t,r)=>{"use strict"
const n=r(6419)
e.exports=function(e,t){return void 0===t&&(t=document),"string"==typeof e?t.querySelector(e):n(e)?e:null}},5685:e=>{"use strict"
function t(e){let t=""
return e.replace(/[^A-Z0-9]/gi,(e=>(t+="-".concat(function(e){return e.charCodeAt(0).toString(32)}(e)),"/")))+t}e.exports=function(e){let r="uppy"
return"string"==typeof e.name&&(r+="-".concat(t(e.name.toLowerCase()))),void 0!==e.type&&(r+="-".concat(e.type)),e.meta&&"string"==typeof e.meta.relativePath&&(r+="-".concat(t(e.meta.relativePath.toLowerCase()))),void 0!==e.data.size&&(r+="-".concat(e.data.size)),void 0!==e.data.lastModified&&(r+="-".concat(e.data.lastModified)),r}},4023:(e,t,r)=>{"use strict"
const n=r(2679),o=r(8143)
e.exports=function(e,t){var r
let{logDropError:i=(()=>{})}=void 0===t?{}:t
return null!=(r=e.items)&&r[0]&&"webkitGetAsEntry"in e.items[0]?n(e,i):o(e)}},8143:(e,t,r)=>{"use strict"
const n=r(6646)
e.exports=function(e){const t=n(e.files)
return Promise.resolve(t)}},9316:e=>{"use strict"
e.exports=function e(t,r,n,o){let{onSuccess:i}=o
t.readEntries((o=>{const s=[...r,...o]
o.length?setTimeout((()=>{e(t,s,n,{onSuccess:i})}),0):i(s)}),(e=>{n(e),i(r)}))}},4091:e=>{"use strict"
e.exports=function(e){return e.fullPath&&e.fullPath!=="/".concat(e.name)?e.fullPath:null}},2679:(e,t,r)=>{"use strict"
const n=r(6646),o=r(4091),i=r(9316)
e.exports=function(e,t){const r=[],s=[],a=e=>new Promise((n=>{if(e.isFile)e.file((t=>{t.relativePath=o(e),r.push(t),n()}),(e=>{t(e),n()}))
else if(e.isDirectory){const r=e.createReader()
i(r,[],t,{onSuccess:e=>n(Promise.all(e.map(a)))})}}))
return n(e.items).forEach((e=>{const t=e.webkitGetAsEntry()
t&&s.push(a(t))})),Promise.all(s).then((()=>r))}},7840:e=>{"use strict"
e.exports=function(e){const t=e.lastIndexOf(".")
return-1===t||t===e.length-1?{name:e,extension:void 0}:{name:e.slice(0,t),extension:e.slice(t+1)}}},8500:(e,t,r)=>{"use strict"
const n=r(7840),o=r(6321)
e.exports=function(e){var t
if(e.type)return e.type
const r=e.name?null==(t=n(e.name).extension)?void 0:t.toLowerCase():null
return r&&r in o?o[r]:"application/octet-stream"}},2079:e=>{"use strict"
e.exports=function(e){const t=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(e)[1],r=/^http:\/\//i.test(e)?"ws":"wss"
return"".concat(r,"://").concat(t)}},551:e=>{"use strict"
function t(e){return e<10?"0".concat(e):e.toString()}e.exports=function(){const e=new Date,r=t(e.getHours()),n=t(e.getMinutes()),o=t(e.getSeconds())
return"".concat(r,":").concat(n,":").concat(o)}},4752:e=>{"use strict"
e.exports=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},6419:e=>{"use strict"
e.exports=function(e){return(null==e?void 0:e.nodeType)===Node.ELEMENT_NODE}},897:e=>{"use strict"
e.exports=function(e){return!!e&&(0!==e.readyState&&4!==e.readyState||0===e.status)}},6321:e=>{"use strict"
e.exports={md:"text/markdown",markdown:"text/markdown",mp4:"video/mp4",mp3:"audio/mp3",svg:"image/svg+xml",jpg:"image/jpeg",png:"image/png",gif:"image/gif",heic:"image/heic",heif:"image/heif",yaml:"text/yaml",yml:"text/yaml",csv:"text/csv",tsv:"text/tab-separated-values",tab:"text/tab-separated-values",avi:"video/x-msvideo",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",doc:"application/msword",docm:"application/vnd.ms-word.document.macroenabled.12",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dot:"application/msword",dotm:"application/vnd.ms-word.template.macroenabled.12",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",xla:"application/vnd.ms-excel",xlam:"application/vnd.ms-excel.addin.macroenabled.12",xlc:"application/vnd.ms-excel",xlf:"application/x-xliff+xml",xlm:"application/vnd.ms-excel",xls:"application/vnd.ms-excel",xlsb:"application/vnd.ms-excel.sheet.binary.macroenabled.12",xlsm:"application/vnd.ms-excel.sheet.macroenabled.12",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xlt:"application/vnd.ms-excel",xltm:"application/vnd.ms-excel.template.macroenabled.12",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",xlw:"application/vnd.ms-excel",txt:"text/plain",text:"text/plain",conf:"text/plain",log:"text/plain",pdf:"application/pdf",zip:"application/zip","7z":"application/x-7z-compressed",rar:"application/x-rar-compressed",tar:"application/x-tar",gz:"application/gzip",dmg:"application/x-apple-diskimage"}},7702:e=>{"use strict"
e.exports=function(e){const t=[],r=[]
function n(e){t.push(e)}function o(e){r.push(e)}return Promise.all(e.map((e=>e.then(n,o)))).then((()=>({successful:t,failed:r})))}},6646:e=>{"use strict"
e.exports=Array.from},3380:(e,t,r)=>{"use strict"
var n,o
const i=r(1357),{nanoid:s}=r(8773),{Provider:a,RequestClient:l,Socket:c}=r(6306),u=r(1464),p=r(2079),h=r(7702),d=r(9821),f=r(8850),{RateLimitedQueue:m,internalRateLimitedQueue:g}=r(9687),v=r(5556),y=r(897),b=r(2845)
function w(e,t){let r=t
return r||(r=new Error("Upload error")),"string"==typeof r&&(r=new Error(r)),r instanceof Error||(r=Object.assign(new Error("Upload error"),{data:r})),y(e)?(r=new v(r,e),r):(r.request=e,r)}function x(e){return e.data.slice(0,e.data.size,e.meta.type)}e.exports=(o=n=class extends i{constructor(e,t){super(e,t),this.type="uploader",this.id=this.opts.id||"XHRUpload",this.title="XHRUpload",this.defaultLocale=b
const r={formData:!0,fieldName:t.bundle?"files[]":"file",method:"post",metaFields:null,responseUrlFieldName:"url",bundle:!1,headers:{},timeout:3e4,limit:5,withCredentials:!1,responseType:"",getResponseData(t){let r={}
try{r=JSON.parse(t)}catch(t){e.log(t)}return r},getResponseError(e,t){let r=new Error("Upload error")
return y(t)&&(r=new v(r,t)),r},validateStatus:e=>e>=200&&e<300}
if(this.opts={...r,...t},this.i18nInit(),this.handleUpload=this.handleUpload.bind(this),g in this.opts?this.requests=this.opts[g]:this.requests=new m(this.opts.limit),this.opts.bundle&&!this.opts.formData)throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.")
this.uploaderEvents=Object.create(null)}getOptions(e){const t=this.uppy.getState().xhrUpload,{headers:r}=this.opts,n={...this.opts,...t||{},...e.xhrUpload||{},headers:{}}
return"function"==typeof r?n.headers=r(e):Object.assign(n.headers,this.opts.headers),t&&Object.assign(n.headers,t.headers),e.xhrUpload&&Object.assign(n.headers,e.xhrUpload.headers),n}addMetadata(e,t,r){(Array.isArray(r.metaFields)?r.metaFields:Object.keys(t)).forEach((r=>{e.append(r,t[r])}))}createFormDataUpload(e,t){const r=new FormData
this.addMetadata(r,e.meta,t)
const n=x(e)
return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r}createBundledUpload(e,t){const r=new FormData,{meta:n}=this.uppy.getState()
return this.addMetadata(r,n,t),e.forEach((e=>{const t=this.getOptions(e),n=x(e)
e.name?r.append(t.fieldName,n,e.name):r.append(t.fieldName,n)})),r}upload(e,t,r){const n=this.getOptions(e)
return this.uppy.log("uploading ".concat(t," of ").concat(r)),new Promise(((t,r)=>{this.uppy.emit("upload-started",e)
const o=n.formData?this.createFormDataUpload(e,n):e.data,i=new XMLHttpRequest
this.uploaderEvents[e.id]=new d(this.uppy)
const a=new f(n.timeout,(()=>{i.abort(),c.done()
const t=new Error(this.i18n("timedOut",{seconds:Math.ceil(n.timeout/1e3)}))
this.uppy.emit("upload-error",e,t),r(t)})),l=s()
i.upload.addEventListener("loadstart",(()=>{this.uppy.log("[XHRUpload] ".concat(l," started"))})),i.upload.addEventListener("progress",(t=>{this.uppy.log("[XHRUpload] ".concat(l," progress: ").concat(t.loaded," / ").concat(t.total)),a.progress(),t.lengthComputable&&this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded,bytesTotal:t.total})})),i.addEventListener("load",(o=>{if(this.uppy.log("[XHRUpload] ".concat(l," finished")),a.done(),c.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),n.validateStatus(o.target.status,i.responseText,i)){const r=n.getResponseData(i.responseText,i),s=r[n.responseUrlFieldName],a={status:o.target.status,body:r,uploadURL:s}
return this.uppy.emit("upload-success",e,a),s&&this.uppy.log("Download ".concat(e.name," from ").concat(s)),t(e)}const s=n.getResponseData(i.responseText,i),u=w(i,n.getResponseError(i.responseText,i)),p={status:o.target.status,body:s}
return this.uppy.emit("upload-error",e,u,p),r(u)})),i.addEventListener("error",(()=>{this.uppy.log("[XHRUpload] ".concat(l," errored")),a.done(),c.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null)
const t=w(i,n.getResponseError(i.responseText,i))
return this.uppy.emit("upload-error",e,t),r(t)})),i.open(n.method.toUpperCase(),n.endpoint,!0),i.withCredentials=n.withCredentials,""!==n.responseType&&(i.responseType=n.responseType)
const c=this.requests.run((()=>{this.uppy.emit("upload-started",e)
const t=this.getOptions(e)
return Object.keys(t.headers).forEach((e=>{i.setRequestHeader(e,t.headers[e])})),i.send(o),()=>{a.done(),i.abort()}}))
this.onFileRemove(e.id,(()=>{c.abort(),r(new Error("File removed"))})),this.onCancelAll(e.id,(()=>{c.abort(),r(new Error("Upload cancelled"))}))}))}uploadRemote(e){const t=this.getOptions(e)
return new Promise(((r,n)=>{this.uppy.emit("upload-started",e)
const o={};(Array.isArray(t.metaFields)?t.metaFields:Object.keys(e.meta)).forEach((t=>{o[t]=e.meta[t]})),new(e.remote.providerOptions.provider?a:l)(this.uppy,e.remote.providerOptions).post(e.remote.url,{...e.remote.body,endpoint:t.endpoint,size:e.data.size,fieldname:t.fieldName,metadata:o,httpMethod:t.method,useFormData:t.formData,headers:t.headers}).then((o=>{const{token:i}=o,s=p(e.remote.companionUrl),a=new c({target:"".concat(s,"/api/").concat(i),autoOpen:!1})
this.uploaderEvents[e.id]=new d(this.uppy),this.onFileRemove(e.id,(()=>{a.send("cancel",{}),l.abort(),r("upload ".concat(e.id," was removed"))})),this.onCancelAll(e.id,(()=>{a.send("cancel",{}),l.abort(),r("upload ".concat(e.id," was canceled"))})),this.onRetry(e.id,(()=>{a.send("pause",{}),a.send("resume",{})})),this.onRetryAll(e.id,(()=>{a.send("pause",{}),a.send("resume",{})})),a.on("progress",(t=>u(this,t,e))),a.on("success",(n=>{const o=t.getResponseData(n.response.responseText,n.response),i=o[t.responseUrlFieldName],s={status:n.response.status,body:o,uploadURL:i}
return this.uppy.emit("upload-success",e,s),l.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),r()})),a.on("error",(r=>{const o=r.response,i=o?t.getResponseError(o.responseText,o):Object.assign(new Error(r.error.message),{cause:r.error})
this.uppy.emit("upload-error",e,i),l.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),n(i)}))
const l=this.requests.run((()=>(a.open(),e.isPaused&&a.send("pause",{}),()=>a.close())))})).catch((t=>{this.uppy.emit("upload-error",e,t),n(t)}))}))}uploadBundle(e){return new Promise(((t,r)=>{const{endpoint:n}=this.opts,{method:o}=this.opts,i=this.uppy.getState().xhrUpload,s=this.createBundledUpload(e,{...this.opts,...i||{}}),a=new XMLHttpRequest,l=new f(this.opts.timeout,(()=>{a.abort()
const e=new Error(this.i18n("timedOut",{seconds:Math.ceil(this.opts.timeout/1e3)}))
c(e),r(e)})),c=t=>{e.forEach((e=>{this.uppy.emit("upload-error",e,t)}))}
a.upload.addEventListener("loadstart",(()=>{this.uppy.log("[XHRUpload] started uploading bundle"),l.progress()})),a.upload.addEventListener("progress",(t=>{l.progress(),t.lengthComputable&&e.forEach((e=>{this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded/t.total*e.size,bytesTotal:e.size})}))})),a.addEventListener("load",(n=>{if(l.done(),this.opts.validateStatus(n.target.status,a.responseText,a)){const r=this.opts.getResponseData(a.responseText,a),o={status:n.target.status,body:r}
return e.forEach((e=>{this.uppy.emit("upload-success",e,o)})),t()}const o=this.opts.getResponseError(a.responseText,a)||new Error("Upload error")
return o.request=a,c(o),r(o)})),a.addEventListener("error",(()=>{l.done()
const e=this.opts.getResponseError(a.responseText,a)||new Error("Upload error")
return c(e),r(e)})),this.uppy.on("cancel-all",(()=>{l.done(),a.abort()})),a.open(o.toUpperCase(),n,!0),a.withCredentials=this.opts.withCredentials,""!==this.opts.responseType&&(a.responseType=this.opts.responseType),Object.keys(this.opts.headers).forEach((e=>{a.setRequestHeader(e,this.opts.headers[e])})),a.send(s),e.forEach((e=>{this.uppy.emit("upload-started",e)}))}))}uploadFiles(e){const t=e.map(((t,r)=>{const n=parseInt(r,10)+1,o=e.length
return t.error?Promise.reject(new Error(t.error)):t.isRemote?this.uploadRemote(t,n,o):this.upload(t,n,o)}))
return h(t)}onFileRemove(e,t){this.uploaderEvents[e].on("file-removed",(r=>{e===r.id&&t(r.id)}))}onRetry(e,t){this.uploaderEvents[e].on("upload-retry",(r=>{e===r&&t()}))}onRetryAll(e,t){this.uploaderEvents[e].on("retry-all",(()=>{this.uppy.getFile(e)&&t()}))}onCancelAll(e,t){this.uploaderEvents[e].on("cancel-all",(()=>{this.uppy.getFile(e)&&t()}))}handleUpload(e){if(0===e.length)return this.uppy.log("[XHRUpload] No files to upload!"),Promise.resolve()
0!==this.opts.limit||this.opts[g]||this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0","warning"),this.uppy.log("[XHRUpload] Uploading...")
const t=e.map((e=>this.uppy.getFile(e)))
if(this.opts.bundle){if(t.some((e=>e.isRemote)))throw new Error("Can’t upload remote files when the `bundle: true` option is set")
if("function"==typeof this.opts.headers)throw new TypeError("`headers` may not be a function when the `bundle: true` option is set")
return this.uploadBundle(t)}return this.uploadFiles(t).then((()=>null))}install(){if(this.opts.bundle){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,individualCancellation:!1}})}this.uppy.addUploader(this.handleUpload)}uninstall(){if(this.opts.bundle){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,individualCancellation:!0}})}this.uppy.removeUploader(this.handleUpload)}},n.VERSION="2.0.7",o)},2845:e=>{"use strict"
e.exports={strings:{timedOut:"Upload stalled for %{seconds} seconds, aborting."}}},2316:e=>{e.exports=function(e){var t,r=String.prototype.split,n=/()??/.exec("")[1]===e
return t=function(t,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return r.call(t,o,i)
var s,a,l,c,u=[],p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),h=0
for(o=new RegExp(o.source,p+"g"),t+="",n||(s=new RegExp("^"+o.source+"$(?!\\s)",p)),i=i===e?-1>>>0:i>>>0;(a=o.exec(t))&&!((l=a.index+a[0].length)>h&&(u.push(t.slice(h,a.index)),!n&&a.length>1&&a[0].replace(s,(function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(a[t]=e)})),a.length>1&&a.index<t.length&&Array.prototype.push.apply(u,a.slice(1)),c=a[0].length,h=l,u.length>=i));)o.lastIndex===a.index&&o.lastIndex++
return h===t.length?!c&&o.test("")||u.push(""):u.push(t.slice(h)),u.length>i?u.slice(0,i):u},t}()},181:(e,t,r)=>{var n=r(815),o=r(8998)
function i(e){return null==e}function s(e){(e=function(e){var t={}
for(var r in e)t[r]=e[r]
return t}(e||{})).whiteList=e.whiteList||n.whiteList,e.onAttr=e.onAttr||n.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||n.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||n.safeAttrValue,this.options=e}r(2939),s.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,r=t.whiteList,n=t.onAttr,s=t.onIgnoreAttr,a=t.safeAttrValue
return o(e,(function(e,t,o,l,c){var u=r[o],p=!1
if(!0===u?p=u:"function"==typeof u?p=u(l):u instanceof RegExp&&(p=u.test(l)),!0!==p&&(p=!1),l=a(o,l)){var h,d={position:t,sourcePosition:e,source:c,isWhite:p}
return p?i(h=n(o,l,d))?o+":"+l:h:i(h=s(o,l,d))?void 0:h}}))},e.exports=s},815:(e,t)=>{var r=/javascript\s*\:/gim
t.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},t.getDefaultWhiteList=function(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}},t.onAttr=function(e,t,r){},t.onIgnoreAttr=function(e,t,r){},t.safeAttrValue=function(e,t){return r.test(t)?"":t}},8223:(e,t,r)=>{var n=r(815),o=r(181)
for(var i in(t=e.exports=function(e,t){return new o(t).process(e)}).FilterCSS=o,n)t[i]=n[i]
"undefined"!=typeof window&&(window.filterCSS=e.exports)},8998:(e,t,r)=>{var n=r(2939)
e.exports=function(e,t){";"!==(e=n.trimRight(e))[e.length-1]&&(e+=";")
var r=e.length,o=!1,i=0,s=0,a=""
function l(){if(!o){var r=n.trim(e.slice(i,s)),l=r.indexOf(":")
if(-1!==l){var c=n.trim(r.slice(0,l)),u=n.trim(r.slice(l+1))
if(c){var p=t(i,a.length,c,u,r)
p&&(a+=p+"; ")}}}i=s+1}for(;s<r;s++){var c=e[s]
if("/"===c&&"*"===e[s+1]){var u=e.indexOf("*/",s+2)
if(-1===u)break
i=(s=u+1)+1,o=!1}else"("===c?o=!0:")"===c?o=!1:";"===c?o||l():"\n"===c&&l()}return n.trim(a)}},2939:e=>{e.exports={indexOf:function(e,t){var r,n
if(Array.prototype.indexOf)return e.indexOf(t)
for(r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},forEach:function(e,t,r){var n,o
if(Array.prototype.forEach)return e.forEach(t,r)
for(n=0,o=e.length;n<o;n++)t.call(r,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},2612:(e,t,r)=>{"use strict"
r(1678)("ev-store","7")
var n="__EV_STORE_KEY@7"
e.exports=function(e){var t=e[n]
return t||(t=e[n]={}),t}},2957:(e,t,r)=>{var n,o="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},i=r(444)
"undefined"!=typeof document?n=document:(n=o["__GLOBAL_DOCUMENT_CACHE@4"])||(n=o["__GLOBAL_DOCUMENT_CACHE@4"]=i),e.exports=n},1977:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=n(r(2505)),i=n(r(9758)),s=r(8146),a=r(3204),l=n(r(7868)),c=n(r(5861)),u=n(r(8226)),p=o.default.create
function h(){var e=p()
return e.compile=function(t,r){return a.compile(t,r,e)},e.precompile=function(t,r){return a.precompile(t,r,e)},e.AST=i.default,e.Compiler=a.Compiler,e.JavaScriptCompiler=l.default,e.Parser=s.parser,e.parse=s.parse,e.parseWithoutProcessing=s.parseWithoutProcessing,e}var d=h()
d.create=h,u.default(d),d.Visitor=c.default,d.default=d,t.default=d,e.exports=t.default},2505:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}t.__esModule=!0
var i=o(r(6713)),s=n(r(1373)),a=n(r(3800)),l=o(r(699)),c=o(r(9771)),u=n(r(8226))
function p(){var e=new i.HandlebarsEnvironment
return l.extend(e,i),e.SafeString=s.default,e.Exception=a.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var h=p()
h.create=p,u.default(h),h.default=h,t.default=h,e.exports=t.default},6713:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=p
var o=r(699),i=n(r(3800)),s=r(8843),a=r(781),l=n(r(7266)),c=r(2038)
t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"}
var u="[object Object]"
function p(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},s.registerDefaultHelpers(this),a.registerDefaultDecorators(this)}p.prototype={constructor:p,logger:l.default,log:l.default.log,registerHelper:function(e,t){if(o.toString.call(e)===u){if(t)throw new i.default("Arg not supported with multiple helpers")
o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===u)o.extend(this.partials,e)
else{if(void 0===t)throw new i.default('Attempting to register a partial called "'+e+'" as undefined')
this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===u){if(t)throw new i.default("Arg not supported with multiple decorators")
o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}}
var h=l.default.log
t.log=h,t.createFrame=o.createFrame,t.logger=l.default},9758:(e,t)=>{"use strict"
t.__esModule=!0
var r={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!r.helpers.scopedId(e)&&!e.depth}}}
t.default=r,e.exports=t.default},8146:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.parseWithoutProcessing=c,t.parse=function(e,t){var r=c(e,t)
return new i.default(t).accept(r)}
var o=n(r(6023)),i=n(r(6825)),s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}(r(386)),a=r(699)
t.parser=o.default
var l={}
function c(e,t){return"Program"===e.type?e:(o.default.yy=l,l.locInfo=function(e){return new l.SourceLocation(t&&t.srcName,e)},o.default.parse(e))}a.extend(l,s)},5079:(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(699),o=void 0
function i(e,t,r){if(n.isArray(e)){for(var o=[],i=0,s=e.length;i<s;i++)o.push(t.wrap(e[i],r))
return o}return"boolean"==typeof e||"number"==typeof e?e+"":e}function s(e){this.srcFile=e,this.source=[]}o||((o=function(e,t,r,n){this.src="",n&&this.add(n)}).prototype={add:function(e){n.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){n.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),s.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty()
return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,r=this.source.length;t<r;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}}
return new o(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1]
return e instanceof o?e:(e=i(e,this,t),new o(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,r){return r=this.generateList(r),this.wrap([e,t?"."+t+"(":"(",r,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,r=[]
Object.keys(e).forEach((function(n){var o=i(e[n],t)
"undefined"!==o&&r.push([t.quotedString(n),":",o])}))
var n=this.generateList(r)
return n.prepend("{"),n.add("}"),n},generateList:function(e){for(var t=this.empty(),r=0,n=e.length;r<n;r++)r&&t.add(","),t.add(i(e[r],this))
return t},generateArray:function(e){var t=this.generateList(e)
return t.prepend("["),t.add("]"),t}},t.default=s,e.exports=t.default},3204:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Compiler=l,t.precompile=function(e,t,r){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new o.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)
"data"in(t=t||{})||(t.data=!0),t.compat&&(t.useDepths=!0)
var n=r.parse(e,t),i=(new r.Compiler).compile(n,t)
return(new r.JavaScriptCompiler).compile(i,t)},t.compile=function(e,t,r){if(void 0===t&&(t={}),null==e||"string"!=typeof e&&"Program"!==e.type)throw new o.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)
"data"in(t=i.extend({},t))||(t.data=!0),t.compat&&(t.useDepths=!0)
var n=void 0
function s(){var n=r.parse(e,t),o=(new r.Compiler).compile(n,t),i=(new r.JavaScriptCompiler).compile(o,t,void 0,!0)
return r.template(i)}function a(e,t){return n||(n=s()),n.call(this,e,t)}return a._setup=function(e){return n||(n=s()),n._setup(e)},a._child=function(e,t,r,o){return n||(n=s()),n._child(e,t,r,o)},a}
var o=n(r(3800)),i=r(699),s=n(r(9758)),a=[].slice
function l(){}function c(e,t){if(e===t)return!0
if(i.isArray(e)&&i.isArray(t)&&e.length===t.length){for(var r=0;r<e.length;r++)if(!c(e[r],t[r]))return!1
return!0}}function u(e){if(!e.path.parts){var t=e.path
e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}l.prototype={compiler:l,equals:function(e){var t=this.opcodes.length
if(e.opcodes.length!==t)return!1
for(var r=0;r<t;r++){var n=this.opcodes[r],o=e.opcodes[r]
if(n.opcode!==o.opcode||!c(n.args,o.args))return!1}for(t=this.children.length,r=0;r<t;r++)if(!this.children[r].equals(e.children[r]))return!1
return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=i.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),r=this.guid++
return this.usePartial=this.usePartial||t.usePartial,this.children[r]=t,this.useDepths=this.useDepths||t.useDepths,r},accept:function(e){if(!this[e.type])throw new o.default("Unknown type: "+e.type,e)
this.sourceNode.unshift(e)
var t=this[e.type](e)
return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams)
for(var t=e.body,r=t.length,n=0;n<r;n++)this.accept(t[n])
return this.options.blockParams.shift(),this.isSimple=1===r,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){u(e)
var t=e.program,r=e.inverse
t=t&&this.compileProgram(t),r=r&&this.compileProgram(r)
var n=this.classifySexpr(e)
"helper"===n?this.helperSexpr(e,t,r):"simple"===n?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,r),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),r=this.setupFullMustacheParams(e,t,void 0),n=e.path
this.useDecorators=!0,this.opcode("registerDecorator",r.length,n.original)},PartialStatement:function(e){this.usePartial=!0
var t=e.program
t&&(t=this.compileProgram(e.program))
var r=e.params
if(r.length>1)throw new o.default("Unsupported number of partial arguments: "+r.length,e)
r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}))
var n=e.name.original,i="SubExpression"===e.name.type
i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0)
var s=e.indent||""
this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,n,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){u(e)
var t=this.classifySexpr(e)
"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,r){var n=e.path,o=n.parts[0],i=null!=t||null!=r
this.opcode("getContext",n.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",r),n.strict=!0,this.accept(n),this.opcode("invokeAmbiguous",o,i)},simpleSexpr:function(e){var t=e.path
t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var n=this.setupFullMustacheParams(e,t,r),i=e.path,a=i.parts[0]
if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",n.length,a)
else{if(this.options.knownHelpersOnly)throw new o.default("You specified knownHelpersOnly, but used the unknown helper "+a,e)
i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",n.length,i.original,s.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth)
var t=e.parts[0],r=s.default.helpers.scopedId(e),n=!e.depth&&!r&&this.blockParamIndex(t)
n?this.opcode("lookupBlockParam",n,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,r):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,r=0,n=t.length
for(this.opcode("pushHash");r<n;r++)this.pushParam(t[r].value)
for(;r--;)this.opcode("assignToHash",t[r].key)
this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:a.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=s.default.helpers.simpleId(e.path),r=t&&!!this.blockParamIndex(e.path.parts[0]),n=!r&&s.default.helpers.helperExpression(e),o=!r&&(n||t)
if(o&&!n){var i=e.path.parts[0],a=this.options
a.knownHelpers[i]?n=!0:a.knownHelpersOnly&&(o=!1)}return n?"helper":o?"ambiguous":"simple"},pushParams:function(e){for(var t=0,r=e.length;t<r;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||""
if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e)
else{if(this.trackIds){var r=void 0
if(!e.parts||s.default.helpers.scopedId(e)||e.depth||(r=this.blockParamIndex(e.parts[0])),r){var n=e.parts.slice(1).join(".")
this.opcode("pushId","BlockParam",r,n)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,r,n){var o=e.params
return this.pushParams(o),this.opcode("pushProgram",t),this.opcode("pushProgram",r),e.hash?this.accept(e.hash):this.opcode("emptyHash",n),o},blockParamIndex:function(e){for(var t=0,r=this.options.blockParams.length;t<r;t++){var n=this.options.blockParams[t],o=n&&i.indexOf(n,e)
if(n&&o>=0)return[t,o]}}}},386:(e,t,r)=>{"use strict"
t.__esModule=!0,t.SourceLocation=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},t.id=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},t.stripFlags=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},t.stripComment=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},t.preparePath=function(e,t,r){r=this.locInfo(r)
for(var n=e?"@":"",i=[],s=0,a=0,l=t.length;a<l;a++){var c=t[a].part,u=t[a].original!==c
if(n+=(t[a].separator||"")+c,u||".."!==c&&"."!==c&&"this"!==c)i.push(c)
else{if(i.length>0)throw new o.default("Invalid path: "+n,{loc:r})
".."===c&&s++}}return{type:"PathExpression",data:e,depth:s,parts:i,original:n,loc:r}},t.prepareMustache=function(e,t,r,n,o,i){var s=n.charAt(3)||n.charAt(2),a="{"!==s&&"&"!==s
return{type:/\*/.test(n)?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:a,strip:o,loc:this.locInfo(i)}},t.prepareRawBlock=function(e,t,r,n){i(e,r)
var o={type:"Program",body:t,strip:{},loc:n=this.locInfo(n)}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:o,openStrip:{},inverseStrip:{},closeStrip:{},loc:n}},t.prepareBlock=function(e,t,r,n,s,a){n&&n.path&&i(e,n)
var l=/\*/.test(e.open)
t.blockParams=e.blockParams
var c=void 0,u=void 0
if(r){if(l)throw new o.default("Unexpected inverse block on decorator",r)
r.chain&&(r.program.body[0].closeStrip=n.strip),u=r.strip,c=r.program}return s&&(s=c,c=t,t=s),{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:c,openStrip:e.strip,inverseStrip:u,closeStrip:n&&n.strip,loc:this.locInfo(a)}},t.prepareProgram=function(e,t){if(!t&&e.length){var r=e[0].loc,n=e[e.length-1].loc
r&&n&&(t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:n.end.line,column:n.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},t.preparePartialBlock=function(e,t,r,n){return i(e,r),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(n)}}
var n,o=(n=r(3800))&&n.__esModule?n:{default:n}
function i(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var r={loc:e.path.loc}
throw new o.default(e.path.original+" doesn't match "+t,r)}}},7868:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=r(6713),i=n(r(3800)),s=r(699),a=n(r(5079))
function l(e){this.value=e}function c(){}c.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=o.COMPILER_REVISION
return[e,o.REVISION_CHANGES[e]]},appendToBuffer:function(e,t,r){return s.isArray(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:r?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,r,n){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!r,this.context=r||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams
var o=e.opcodes,s=void 0,a=void 0,l=void 0,c=void 0
for(l=0,c=o.length;l<c;l++)s=o[l],this.source.currentLocation=s.loc,a=a||s.loc,this[s.opcode].apply(this,s.args)
if(this.source.currentLocation=a,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new i.default("Compile completed with content left on stack")
this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),n?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()))
var u=this.createFunctionContext(n)
if(this.isChild)return u
var p={compiler:this.compilerInfo(),main:u}
this.decorators&&(p.main_d=this.decorators,p.useDecorators=!0)
var h=this.context,d=h.programs,f=h.decorators
for(l=0,c=d.length;l<c;l++)d[l]&&(p[l]=d[l],f[l]&&(p[l+"_d"]=f[l],p.useDecorators=!0))
return this.environment.usePartial&&(p.usePartial=!0),this.options.data&&(p.useData=!0),this.useDepths&&(p.useDepths=!0),this.useBlockParams&&(p.useBlockParams=!0),this.options.compat&&(p.compat=!0),n?p.compilerOptions=this.options:(p.compiler=JSON.stringify(p.compiler),this.source.currentLocation={start:{line:1,column:0}},p=this.objectLiteral(p),t.srcName?(p=p.toStringWithSourceMap({file:t.destName})).map=p.map&&p.map.toString():p=p.toString()),p},preamble:function(){this.lastContext=0,this.source=new a.default(this.options.srcName),this.decorators=new a.default(this.options.srcName)},createFunctionContext:function(e){var t=this,r="",n=this.stackVars.concat(this.registers.list)
n.length>0&&(r+=", "+n.join(", "))
var o=0
Object.keys(this.aliases).forEach((function(e){var n=t.aliases[e]
n.children&&n.referenceCount>1&&(r+=", alias"+ ++o+"="+e,n.children[0]="alias"+o)})),this.lookupPropertyFunctionIsUsed&&(r+=", "+this.lookupPropertyFunctionVarDeclaration())
var i=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&i.push("blockParams"),this.useDepths&&i.push("depths")
var s=this.mergeSource(r)
return e?(i.push(s),Function.apply(this,i)):this.source.wrap(["function(",i.join(","),") {\n  ",s,"}"])},mergeSource:function(e){var t=this.environment.isSimple,r=!this.forceBuffer,n=void 0,o=void 0,i=void 0,s=void 0
return this.source.each((function(e){e.appendToBuffer?(i?e.prepend("  + "):i=e,s=e):(i&&(o?i.prepend("buffer += "):n=!0,s.add(";"),i=s=void 0),o=!0,t||(r=!1))})),r?i?(i.prepend("return "),s.add(";")):o||this.source.push('return "";'):(e+=", buffer = "+(n?"":this.initializeBuffer()),i?(i.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(n?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)]
this.setupHelperArgs(e,0,r)
var n=this.popStack()
r.splice(1,0,n),this.push(this.source.functionCall(t,"call",r))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)]
this.setupHelperArgs("",0,t,!0),this.flushInline()
var r=this.topStack()
t.splice(1,0,r),this.pushSource(["if (!",this.lastHelper,") { ",r," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()))
else{var e=this.popStack()
this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,r,n){var o=0
n||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[o++])),this.resolvePath("context",e,o,t,r)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,r){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,r)},resolvePath:function(e,t,r,n,o){var i=this
if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,r,n){var o=t.popStack(),i=0,s=r.length
for(e&&s--;i<s;i++)o=t.nameLookup(o,r[i],n)
return e?[t.aliasable("container.strict"),"(",o,", ",t.quotedString(r[i]),", ",JSON.stringify(t.source.currentLocation)," )"]:o}(this.options.strict&&o,this,t,e))
else for(var s=t.length;r<s;r++)this.replaceStack((function(o){var s=i.nameLookup(o,t[r],e)
return n?[" && ",s]:[" != null ? ",s," : ",o]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash
this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var r=this.nameLookup("decorators",t,"decorator"),n=this.setupHelperArgs(t,e)
this.decorators.push(["fn = ",this.decorators.functionCall(r,"",["fn","props","container",n])," || fn;"])},invokeHelper:function(e,t,r){var n=this.popStack(),o=this.setupHelper(e,t),i=[]
r&&i.push(o.name),i.push(n),this.options.strict||i.push(this.aliasable("container.hooks.helperMissing"))
var s=["(",this.itemsSeparatedBy(i,"||"),")"],a=this.source.functionCall(s,"call",o.callParams)
this.push(a)},itemsSeparatedBy:function(e,t){var r=[]
r.push(e[0])
for(var n=1;n<e.length;n++)r.push(t,e[n])
return r},invokeKnownHelper:function(e,t){var r=this.setupHelper(e,t)
this.push(this.source.functionCall(r.name,"call",r.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper")
var r=this.popStack()
this.emptyHash()
var n=this.setupHelper(0,e,t),o=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",r,")"]
this.options.strict||(o[0]="(helper = ",o.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",o,n.paramsInit?["),(",n.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",n.callParams)," : helper))"])},invokePartial:function(e,t,r){var n=[],o=this.setupParams(t,1,n)
e&&(t=this.popStack(),delete o.name),r&&(o.indent=JSON.stringify(r)),o.helpers="helpers",o.partials="partials",o.decorators="container.decorators",e?n.unshift(t):n.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(o.depths="depths"),o=this.objectLiteral(o),n.push(o),this.push(this.source.functionCall("container.invokePartial","",n))},assignToHash:function(e){var t=this.popStack(),r=void 0,n=void 0,o=void 0
this.trackIds&&(o=this.popStack()),this.stringParams&&(n=this.popStack(),r=this.popStack())
var i=this.hash
r&&(i.contexts[e]=r),n&&(i.types[e]=n),o&&(i.ids[e]=o),i.values[e]=t},pushId:function(e,t,r){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(r?" + "+JSON.stringify("."+r):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:c,compileChildren:function(e,t){for(var r=e.children,n=void 0,o=void 0,i=0,s=r.length;i<s;i++){n=r[i],o=new this.compiler
var a=this.matchExistingProgram(n)
if(null==a){this.context.programs.push("")
var l=this.context.programs.length
n.index=l,n.name="program"+l,this.context.programs[l]=o.compile(n,t,this.context,!this.precompile),this.context.decorators[l]=o.decorators,this.context.environments[l]=n,this.useDepths=this.useDepths||o.useDepths,this.useBlockParams=this.useBlockParams||o.useBlockParams,n.useDepths=this.useDepths,n.useBlockParams=this.useBlockParams}else n.index=a.index,n.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,r=this.context.environments.length;t<r;t++){var n=this.context.environments[t]
if(n&&n.equals(e))return n}},programExpression:function(e){var t=this.environment.children[e],r=[t.index,"data",t.blockParams]
return(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths"),"container.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof l||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new l(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],r=void 0,n=void 0,o=void 0
if(!this.isInline())throw new i.default("replaceStack on non-inline")
var s=this.popStack(!0)
if(s instanceof l)t=["(",r=[s.value]],o=!0
else{n=!0
var a=this.incrStack()
t=["((",this.push(a)," = ",s,")"],r=this.topStack()}var c=e.call(this,r)
o||this.popStack(),n&&this.stackSlot--,this.push(t.concat(c,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack
this.inlineStack=[]
for(var t=0,r=e.length;t<r;t++){var n=e[t]
if(n instanceof l)this.compileStack.push(n)
else{var o=this.incrStack()
this.pushSource([o," = ",n,";"]),this.compileStack.push(o)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),r=(t?this.inlineStack:this.compileStack).pop()
if(!e&&r instanceof l)return r.value
if(!t){if(!this.stackSlot)throw new i.default("Invalid stack pop")
this.stackSlot--}return r},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1]
return t instanceof l?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e]
return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,r){var n=[]
return{params:n,paramsInit:this.setupHelperArgs(t,e,n,r),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(n)}},setupParams:function(e,t,r){var n={},o=[],i=[],s=[],a=!r,l=void 0
a&&(r=[]),n.name=this.quotedString(e),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack())
var c=this.popStack(),u=this.popStack();(u||c)&&(n.fn=u||"container.noop",n.inverse=c||"container.noop")
for(var p=t;p--;)l=this.popStack(),r[p]=l,this.trackIds&&(s[p]=this.popStack()),this.stringParams&&(i[p]=this.popStack(),o[p]=this.popStack())
return a&&(n.args=this.source.generateArray(r)),this.trackIds&&(n.ids=this.source.generateArray(s)),this.stringParams&&(n.types=this.source.generateArray(i),n.contexts=this.source.generateArray(o)),this.options.data&&(n.data="data"),this.useBlockParams&&(n.blockParams="blockParams"),n},setupHelperArgs:function(e,t,r,n){var o=this.setupParams(e,t,r)
return o.loc=JSON.stringify(this.source.currentLocation),o=this.objectLiteral(o),n?(this.useRegister("options"),r.push("options"),["options=",o]):r?(r.push(o),""):o}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=c.RESERVED_WORDS={},r=0,n=e.length;r<n;r++)t[e[r]]=!0}(),c.isValidJavaScriptVariableName=function(e){return!c.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},t.default=c,e.exports=t.default},6023:(e,t)=>{"use strict"
t.__esModule=!0
var r=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,r,n,o,i,s){var a=i.length-1
switch(o){case 1:return i[a-1]
case 2:this.$=n.prepareProgram(i[a])
break
case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=i[a]
break
case 9:this.$={type:"CommentStatement",value:n.stripComment(i[a]),strip:n.stripFlags(i[a],i[a]),loc:n.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:i[a],value:i[a],loc:n.locInfo(this._$)}
break
case 11:this.$=n.prepareRawBlock(i[a-2],i[a-1],i[a],this._$)
break
case 12:this.$={path:i[a-3],params:i[a-2],hash:i[a-1]}
break
case 13:this.$=n.prepareBlock(i[a-3],i[a-2],i[a-1],i[a],!1,this._$)
break
case 14:this.$=n.prepareBlock(i[a-3],i[a-2],i[a-1],i[a],!0,this._$)
break
case 15:this.$={open:i[a-5],path:i[a-4],params:i[a-3],hash:i[a-2],blockParams:i[a-1],strip:n.stripFlags(i[a-5],i[a])}
break
case 16:case 17:this.$={path:i[a-4],params:i[a-3],hash:i[a-2],blockParams:i[a-1],strip:n.stripFlags(i[a-5],i[a])}
break
case 18:this.$={strip:n.stripFlags(i[a-1],i[a-1]),program:i[a]}
break
case 19:var l=n.prepareBlock(i[a-2],i[a-1],i[a],i[a],!1,this._$),c=n.prepareProgram([l],i[a-1].loc)
c.chained=!0,this.$={strip:i[a-2].strip,program:c,chain:!0}
break
case 21:this.$={path:i[a-1],strip:n.stripFlags(i[a-2],i[a])}
break
case 22:case 23:this.$=n.prepareMustache(i[a-3],i[a-2],i[a-1],i[a-4],n.stripFlags(i[a-4],i[a]),this._$)
break
case 24:this.$={type:"PartialStatement",name:i[a-3],params:i[a-2],hash:i[a-1],indent:"",strip:n.stripFlags(i[a-4],i[a]),loc:n.locInfo(this._$)}
break
case 25:this.$=n.preparePartialBlock(i[a-2],i[a-1],i[a],this._$)
break
case 26:this.$={path:i[a-3],params:i[a-2],hash:i[a-1],strip:n.stripFlags(i[a-4],i[a])}
break
case 29:this.$={type:"SubExpression",path:i[a-3],params:i[a-2],hash:i[a-1],loc:n.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:i[a],loc:n.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:n.id(i[a-2]),value:i[a],loc:n.locInfo(this._$)}
break
case 32:this.$=n.id(i[a-1])
break
case 35:this.$={type:"StringLiteral",value:i[a],original:i[a],loc:n.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(i[a]),original:Number(i[a]),loc:n.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:"true"===i[a],original:"true"===i[a],loc:n.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:n.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:n.locInfo(this._$)}
break
case 42:this.$=n.preparePath(!0,i[a],this._$)
break
case 43:this.$=n.preparePath(!1,i[a],this._$)
break
case 44:i[a-2].push({part:n.id(i[a]),original:i[a],separator:i[a-1]}),this.$=i[a-2]
break
case 45:this.$=[{part:n.id(i[a]),original:i[a]}]
break
case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[]
break
case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:i[a-1].push(i[a])
break
case 98:case 100:this.$=[i[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=[0],r=[null],n=[],o=this.table,i="",s=0,a=0,l=0
this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={})
var c=this.lexer.yylloc
n.push(c)
var u=this.lexer.options&&this.lexer.options.ranges
"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError)
for(var p,h,d,f,m,g,v,y,b,w,x={};;){if(d=t[t.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==p&&(w=void 0,"number"!=typeof(w=this.lexer.lex()||1)&&(w=this.symbols_[w]||w),p=w),f=o[d]&&o[d][p]),void 0===f||!f.length||!f[0]){var k=""
if(!l){for(g in b=[],o[d])this.terminals_[g]&&g>2&&b.push("'"+this.terminals_[g]+"'")
k=this.lexer.showPosition?"Parse error on line "+(s+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(k,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:c,expected:b})}}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+p)
switch(f[0]){case 1:t.push(p),r.push(this.lexer.yytext),n.push(this.lexer.yylloc),t.push(f[1]),p=null,h?(p=h,h=null):(a=this.lexer.yyleng,i=this.lexer.yytext,s=this.lexer.yylineno,c=this.lexer.yylloc,l>0&&l--)
break
case 2:if(v=this.productions_[f[1]][1],x.$=r[r.length-v],x._$={first_line:n[n.length-(v||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(v||1)].first_column,last_column:n[n.length-1].last_column},u&&(x._$.range=[n[n.length-(v||1)].range[0],n[n.length-1].range[1]]),void 0!==(m=this.performAction.call(x,i,a,s,this.yy,f[1],r,n)))return m
v&&(t=t.slice(0,-1*v*2),r=r.slice(0,-1*v),n=n.slice(0,-1*v)),t.push(this.productions_[f[1]][0]),r.push(x.$),n.push(x._$),y=o[t[t.length-2]][t[t.length-1]],t.push(y)
break
case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e)
this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0]
return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t
var n=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1)
var o=this.yylloc.range
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF
var e,t,r,n,o
this._input||(this.done=!0),this._more||(this.yytext="",this.match="")
for(var i=this._currentRules(),s=0;s<i.length&&(!(r=this._input.match(this.rules[i[s]]))||t&&!(r[0].length>t[0].length)||(t=r,n=s,this.options.flex));s++);return t?((o=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i[n],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next()
return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,r,n){function o(e,r){return t.yytext=t.yytext.substring(e,t.yyleng-r+e)}switch(r){case 0:if("\\\\"===t.yytext.slice(-2)?(o(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(o(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15
break
case 1:case 5:return 15
case 2:return this.popState(),15
case 3:return this.begin("raw"),15
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(o(5,9),"END_RAW_BLOCK")
case 6:case 22:return this.popState(),14
case 7:return 65
case 8:return 68
case 9:return 19
case 10:return this.popState(),this.begin("raw"),23
case 11:return 55
case 12:return 60
case 13:return 29
case 14:return 47
case 15:case 16:return this.popState(),44
case 17:return 34
case 18:return 39
case 19:return 51
case 20:case 23:return 48
case 21:this.unput(t.yytext),this.popState(),this.begin("com")
break
case 24:return 73
case 25:case 26:case 41:return 72
case 27:return 87
case 28:break
case 29:return this.popState(),54
case 30:return this.popState(),33
case 31:return t.yytext=o(1,2).replace(/\\"/g,'"'),80
case 32:return t.yytext=o(1,2).replace(/\\'/g,"'"),80
case 33:return 85
case 34:case 35:return 82
case 36:return 83
case 37:return 84
case 38:return 81
case 39:return 75
case 40:return 77
case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72
case 43:return"INVALID"
case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}}
function r(){this.yy={}}return e.lexer=t,r.prototype=e,e.Parser=r,new r}()
t.default=r,e.exports=t.default},5861:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=(n=r(3800))&&n.__esModule?n:{default:n}
function i(){this.parents=[]}function s(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function a(e){s.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function l(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}i.prototype={constructor:i,mutating:!1,acceptKey:function(e,t){var r=this.accept(e[t])
if(this.mutating){if(r&&!i.prototype[r.type])throw new o.default('Unexpected node type "'+r.type+'" found when accepting '+t+" on "+e.type)
e[t]=r}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new o.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,r=e.length;t<r;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,r--)},accept:function(e){if(e){if(!this[e.type])throw new o.default("Unknown type: "+e.type,e)
this.current&&this.parents.unshift(this.current),this.current=e
var t=this[e.type](e)
return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:s,Decorator:s,BlockStatement:a,DecoratorBlock:a,PartialStatement:l,PartialBlockStatement:function(e){l.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:s,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},t.default=i,e.exports=t.default},6825:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=(n=r(5861))&&n.__esModule?n:{default:n}
function i(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.options=e}function s(e,t,r){void 0===t&&(t=e.length)
var n=e[t-1],o=e[t-2]
return n?"ContentStatement"===n.type?(o||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original):void 0:r}function a(e,t,r){void 0===t&&(t=-1)
var n=e[t+1],o=e[t+2]
return n?"ContentStatement"===n.type?(o||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original):void 0:r}function l(e,t,r){var n=e[null==t?0:t+1]
if(n&&"ContentStatement"===n.type&&(r||!n.rightStripped)){var o=n.value
n.value=n.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.value!==o}}function c(e,t,r){var n=e[null==t?e.length-1:t-1]
if(n&&"ContentStatement"===n.type&&(r||!n.leftStripped)){var o=n.value
return n.value=n.value.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.value!==o,n.leftStripped}}i.prototype=new o.default,i.prototype.Program=function(e){var t=!this.options.ignoreStandalone,r=!this.isRootSeen
this.isRootSeen=!0
for(var n=e.body,o=0,i=n.length;o<i;o++){var u=n[o],p=this.accept(u)
if(p){var h=s(n,o,r),d=a(n,o,r),f=p.openStandalone&&h,m=p.closeStandalone&&d,g=p.inlineStandalone&&h&&d
p.close&&l(n,o,!0),p.open&&c(n,o,!0),t&&g&&(l(n,o),c(n,o)&&"PartialStatement"===u.type&&(u.indent=/([ \t]+$)/.exec(n[o-1].original)[1])),t&&f&&(l((u.program||u.inverse).body),c(n,o)),t&&m&&(l(n,o),c((u.inverse||u.program).body))}}return e},i.prototype.BlockStatement=i.prototype.DecoratorBlock=i.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,n=r,o=r
if(r&&r.chained)for(n=r.body[0].program;o.chained;)o=o.body[o.body.length-1].program
var i={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:a(t.body),closeStandalone:s((n||t).body)}
if(e.openStrip.close&&l(t.body,null,!0),r){var u=e.inverseStrip
u.open&&c(t.body,null,!0),u.close&&l(n.body,null,!0),e.closeStrip.open&&c(o.body,null,!0),!this.options.ignoreStandalone&&s(t.body)&&a(n.body)&&(c(t.body),l(n.body))}else e.closeStrip.open&&c(t.body,null,!0)
return i},i.prototype.Decorator=i.prototype.MustacheStatement=function(e){return e.strip},i.prototype.PartialStatement=i.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:!0,open:t.open,close:t.close}},t.default=i,e.exports=t.default},781:(e,t,r)=>{"use strict"
t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)}
var n,o=(n=r(3650))&&n.__esModule?n:{default:n}},3650:(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(699)
t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var i=e
return t.partials||(t.partials={},i=function(o,i){var s=r.partials
r.partials=n.extend({},s,t.partials)
var a=e(o,i)
return r.partials=s,a}),t.partials[o.args[0]]=o.fn,i}))},e.exports=t.default},3800:(e,t)=>{"use strict"
t.__esModule=!0
var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"]
function n(e,t){var o=t&&t.loc,i=void 0,s=void 0,a=void 0,l=void 0
o&&(i=o.start.line,s=o.end.line,a=o.start.column,l=o.end.column,e+=" - "+i+":"+a)
for(var c=Error.prototype.constructor.call(this,e),u=0;u<r.length;u++)this[r[u]]=c[r[u]]
Error.captureStackTrace&&Error.captureStackTrace(this,n)
try{o&&(this.lineNumber=i,this.endLineNumber=s,Object.defineProperty?(Object.defineProperty(this,"column",{value:a,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=a,this.endColumn=l))}catch(e){}}n.prototype=new Error,t.default=n,e.exports=t.default},8843:(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),i.default(e),s.default(e),a.default(e),l.default(e),c.default(e),u.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])}
var o=n(r(3563)),i=n(r(484)),s=n(r(9585)),a=n(r(9363)),l=n(r(5401)),c=n(r(6007)),u=n(r(9934))},3563:(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(699)
t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,i=r.fn
if(!0===t)return i(this)
if(!1===t||null==t)return o(this)
if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this)
if(r.data&&r.ids){var s=n.createFrame(r.data)
s.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:s}}return i(t,r)}))},e.exports=t.default},484:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=r(699),i=(n=r(3800))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each")
var r,n=t.fn,s=t.inverse,a=0,l="",c=void 0,u=void 0
function p(t,r,i){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!i,u&&(c.contextPath=u+t)),l+=n(e[t],{data:c,blockParams:o.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(c=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var h=e.length;a<h;a++)a in e&&p(a,a,a===e.length-1)
else if(global.Symbol&&e[global.Symbol.iterator]){for(var d=[],f=e[global.Symbol.iterator](),m=f.next();!m.done;m=f.next())d.push(m.value)
for(h=(e=d).length;a<h;a++)p(a,a,a===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&p(r,a-1),r=e,a++})),void 0!==r&&p(r,a-1,!0)
return 0===a&&(l=s(this)),l}))},e.exports=t.default},9585:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=(n=r(3800))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},9363:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=r(699),i=(n=r(3800))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument")
return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument")
return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},5401:(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n])
var o=1
null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},6007:(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},9934:(e,t,r)=>{"use strict"
t.__esModule=!0
var n,o=r(699),i=(n=r(3800))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument")
o.isFunction(e)&&(e=e.call(this))
var r=t.fn
if(o.isEmpty(e))return t.inverse(this)
var n=t.data
return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},8646:(e,t,r)=>{"use strict"
t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n.extend.apply(void 0,[Object.create(null)].concat(t))}
var n=r(699)},2038:(e,t,r)=>{"use strict"
t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null)
t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1
var r=Object.create(null)
return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==i[e]&&(i[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(i).forEach((function(e){delete i[e]}))}
var n=r(8646),o=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}(r(7266)),i=Object.create(null)},890:(e,t)=>{"use strict"
t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},7266:(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(699),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase())
e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e]
console[t]||(t="log")
for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i]
console[t].apply(console,n)}}}
t.default=o,e.exports=t.default},8226:(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){var t="undefined"!=typeof global?global:window,r=t.Handlebars
e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default},9771:(e,t,r)=>{"use strict"
t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION
if(!(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)){if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t]
throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template")
if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e)
e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler)
var r=e.compiler&&7===e.compiler[0],n={strict:function(e,t,r){if(!e||!(t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:r})
return n.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t]
return null==r||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,o=0;o<r;o++)if(null!=(e[o]&&n.lookupProperty(e[o],t)))return e[o][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,s){s.hash&&(n=o.extend({},n,s.hash),s.ids&&(s.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,s)
var a=o.extend({},s,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,r,n,a)
if(null==l&&t.compile&&(s.partials[s.name]=t.compile(r,e.compilerOptions,t),l=s.partials[s.name](n,a)),null!=l){if(s.indent){for(var c=l.split("\n"),u=0,p=c.length;u<p&&(c[u]||u+1!==p);u++)c[u]=s.indent+c[u]
l=c.join("\n")}return l}throw new i.default("The partial "+s.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t]
return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var i=this.programs[e],s=this.fn(e)
return t||o||n||r?i=u(this,e,s,t,r,n,o):i||(i=this.programs[e]=u(this,e,s)),i},data:function(e,t){for(;e&&t--;)e=e._parent
return e},mergeIfNeeded:function(e,t){var r=e||t
return e&&t&&e!==t&&(r=o.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler}
function s(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data
s._setup(r),!r.partial&&e.useData&&(o=h(t,o))
var i=void 0,a=e.useBlockParams?[]:void 0
function l(t){return""+e.main(n,t,n.helpers,n.partials,o,a,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=d(e.main,l,n,r.depths||[],o,a))(t,r)}return s.isTop=!0,s._setup=function(i){if(i.partial)n.protoAccessControl=i.protoAccessControl,n.helpers=i.helpers,n.partials=i.partials,n.decorators=i.decorators,n.hooks=i.hooks
else{var s=o.extend({},t.helpers,i.helpers)
!function(e,t){Object.keys(e).forEach((function(r){var n=e[r]
e[r]=function(e,t){var r=t.lookupProperty
return l.wrapHelper(e,(function(e){return o.extend({lookupProperty:r},e)}))}(n,t)}))}(s,n),n.helpers=s,e.usePartial&&(n.partials=n.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,i.decorators)),n.hooks={},n.protoAccessControl=c.createProtoAccessControl(i)
var u=i.allowCallsToHelperMissing||r
a.moveHelperToHooks(n,"helperMissing",u),a.moveHelperToHooks(n,"blockHelperMissing",u)}},s._child=function(t,r,o,s){if(e.useBlockParams&&!o)throw new i.default("must pass block params")
if(e.useDepths&&!s)throw new i.default("must pass parent depths")
return u(n,t,e[t],r,0,o,s)},s},t.wrapProgram=u,t.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"]
r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath)
var a=void 0
if(r.fn&&r.fn!==p&&function(){r.data=s.createFrame(r.data)
var e=r.fn
a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}(),void 0===e&&a&&(e=a),void 0===e)throw new i.default("The partial "+r.name+" could not be found")
if(e instanceof Function)return e(t,r)},t.noop=p
var n,o=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}(r(699)),i=(n=r(3800))&&n.__esModule?n:{default:n},s=r(6713),a=r(8843),l=r(890),c=r(2038)
function u(e,t,r,n,o,i,s){function a(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s
return!s||t==s[0]||t===e.nullContext&&null===s[0]||(a=[t].concat(s)),r(e,t,e.helpers,e.partials,o.data||n,i&&[o.blockParams].concat(i),a)}return(a=d(r,a,e,s,n,i)).program=t,a.depth=s?s.length:0,a.blockParams=o||0,a}function p(){return""}function h(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}function d(e,t,r,n,i,s){if(e.decorator){var a={}
t=e.decorator(t,a,r,n&&n[0],i,s,n),o.extend(t,a)}return t}},1373:(e,t)=>{"use strict"
function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},699:(e,t)=>{"use strict"
t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML()
if(null==e)return""
if(!e)return e+""
e=""+e}return o.test(e)?e.replace(n,i):e},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e)
return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t}
var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/
function i(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r])
return e}var a=Object.prototype.toString
t.toString=a
var l=function(e){return"function"==typeof e}
l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===a.call(e)}),t.isFunction=l
var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===a.call(e)}
t.isArray=c},701:e=>{"use strict"
var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:{}
e.exports=function(e,r){return e in t?t[e]:(t[e]=r,r)}},1678:(e,t,r)=>{"use strict"
var n=r(701)
e.exports=function(e,t,r){var o="__INDIVIDUAL_ONE_VERSION_"+e,i=n(o+"_ENFORCE_SINGLETON",t)
if(i!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+i+" installed.\nThis means you cannot install version "+t)
return n(o,r)}},7819:e=>{"use strict"
e.exports=function(e){return"object"==typeof e&&null!==e}},7930:e=>{var t="Expected a function",r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),u=Object.prototype.toString,p=Math.max,h=Math.min,d=function(){return c.Date.now()}
function f(e){var t=typeof e
return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e
if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN
if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(r,"")
var a=o.test(e)
return a||i.test(e)?s(e.slice(2),a?2:8):n.test(e)?NaN:+e}e.exports=function(e,r,n){var o=!0,i=!0
if("function"!=typeof e)throw new TypeError(t)
return f(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,r,n){var o,i,s,a,l,c,u=0,g=!1,v=!1,y=!0
if("function"!=typeof e)throw new TypeError(t)
function b(t){var r=o,n=i
return o=i=void 0,u=t,a=e.apply(n,r)}function w(e){return u=e,l=setTimeout(k,r),g?b(e):a}function x(e){var t=e-c
return void 0===c||t>=r||t<0||v&&e-u>=s}function k(){var e=d()
if(x(e))return _(e)
l=setTimeout(k,function(e){var t=r-(e-c)
return v?h(t,s-(e-u)):t}(e))}function _(e){return l=void 0,y&&o?b(e):(o=i=void 0,a)}function P(){var e=d(),t=x(e)
if(o=arguments,i=this,c=e,t){if(void 0===l)return w(c)
if(v)return l=setTimeout(k,r),b(c)}return void 0===l&&(l=setTimeout(k,r)),a}return r=m(r)||0,f(n)&&(g=!!n.leading,s=(v="maxWait"in n)?p(m(n.maxWait)||0,r):s,y="trailing"in n?!!n.trailing:y),P.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=i=l=void 0},P.flush=function(){return void 0===l?a:_(d())},P}(e,r,{leading:o,maxWait:r,trailing:i})}},7348:function(e,t){var r,n
n="undefined"!=typeof self?self:this,void 0===(r=function(e){return n.MessageBus=function(){"use strict"
var e,t,r,n,o=!1,i=!1,s="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})),a=[],l=0,c=!1,u=[],p=0,h=null,d=0,f=0,m=function(){for(var e,t=["","webkit","ms","moz"],r=0;r<t.length;r++){var n=t[r],o=n+(""===n?"hidden":"Hidden")
void 0!==document[o]&&(e=o)}return function(){return void 0!==e?document[e]:!document.hasFocus}}(),g=function(){try{return localStorage.setItem("mbTestLocalStorage",Date.now()),localStorage.removeItem("mbTestLocalStorage"),!0}catch(e){return!1}}(),v=null===(new XMLHttpRequest).onprogress,y=function(){return e.alwaysLongPoll||(e.shouldLongPollCallback?e.shouldLongPollCallback():!m())},b=function(e){if(!e||0===e.length)return!1
for(var t=0;t<e.length;t++)for(var r=e[t],n=0;n<a.length;n++){var o=a[n]
if(o.channel===r.channel){o.last_id=r.message_id
try{o.func(r.data,r.global_id,r.message_id)}catch(e){console.log&&console.log("MESSAGE BUS FAIL: callback "+o.channel+" caused exception "+e.stack)}}"/__status"===r.channel&&void 0!==r.data[o.channel]&&(o.last_id=r.data[o.channel])}return!0},w=function(e){if(l=0,!c)return b(e)
if(e)for(var t=0;t<e.length;t++)u.push(e[t])
return!1},x=function(t,r){if(!o){var s,a=!1,c=!1,u=!1
n=new Date,f+=1,r.__seq=f
var m=y()&&e.enableLongPolling,b=m&&e.enableChunkedEncoding&&v
p>0&&(p--,b=!1)
var x={"X-SILENCE-LOGGER":"true"}
for(var k in e.headers)x[k]=e.headers[k]
b||(x["Dont-Chunk"]="true")
var _=b?"text":"json",P=function(e,t){var n="\r\n|\r\n",o=e.indexOf(n,t)
if(-1===o)return t
var i=e.substring(t,o)
i=i.replace(/\r\n\|\|\r\n/g,n)
try{w(JSON.parse(i))}catch(e){console.log&&(console.log("FAILED TO PARSE CHUNKED REPLY"),console.log(r))}return P(e,o+n.length)},S=function(){e.longPoll&&(e.longPoll.abort(),p=30)}
if(!e.ajax)throw new Error("Either jQuery or the ajax adapter must be loaded")
return g&&localStorage.setItem("__mbLastAjax",Date.now()),o=!0,e.ajax({url:e.baseUrl+"message-bus/"+e.clientId+"/poll"+(m?"":"?dlp=t"),data:r,cache:!1,async:!0,dataType:_,type:"POST",headers:x,messageBus:{chunked:b,onProgressListener:function(e){var t=0,r=setTimeout(S,3e3)
return e.onprogress=function(){clearTimeout(r),"application/json; charset=utf-8"===e.getResponseHeader("Content-Type")?b=!1:t=P(e.responseText,t)}}},xhr:function(){var e=jQuery.ajaxSettings.xhr()
return b?(this.messageBus.onProgressListener(e),e):e},success:function(e){b||("string"==typeof e&&(e=JSON.parse(e)),a=w(e))},error:function(e,t,r){if(429===e.status){var n=parseInt(e.getResponseHeader&&e.getResponseHeader("Retry-After"))||0;(n=n||0)<15&&(n=15),s=n,u=!0}else"abort"===t?c=!0:(l+=1,d+=1)},complete:function(){var r
o=!1
try{u?r=Math.max(e.minPollInterval,1e3*s):a||c?r=e.minPollInterval:(r=e.callbackInterval,l>2?r*=l:y()||(r=e.backgroundCallbackInterval),r>e.maxPollInterval&&(r=e.maxPollInterval),(r-=new Date-n)<100&&(r=100))}catch(e){console.log&&e.message&&console.log("MESSAGE BUS FAIL: "+e.message)}h&&(clearTimeout(h),h=null),i&&(h=setTimeout((function(){h=null,t()}),r)),e.longPoll=null}})}}
return e={minHiddenPollInterval:1500,enableChunkedEncoding:!0,enableLongPolling:!0,callbackInterval:15e3,backgroundCallbackInterval:6e4,minPollInterval:100,maxPollInterval:18e4,callbacks:a,clientId:s,alwaysLongPoll:!1,shouldLongPollCallback:void 0,baseUrl:"/",headers:{},ajax:"undefined"!=typeof jQuery&&jQuery.ajax,diagnostics:function(){console.log("Stopped: "+r+" Started: "+i),console.log("Current callbacks"),console.log(a),console.log("Total ajax calls: "+f+" Recent failure count: "+l+" Total failures: "+d),console.log("Last ajax call: "+(new Date-n)/1e3+" seconds ago")},pause:function(){c=!0},resume:function(){c=!1,b(u),u=[]},stop:function(){r=!0,i=!1,t&&(clearTimeout(t),t=null),e.longPoll&&e.longPoll.abort()},start:function(){if(!i){i=!0,r=!1
var n=function(){if(!r)if(0===a.length||function(){if(g&&m()){var t=parseInt(localStorage.getItem("__mbLastAjax"),10),r=Date.now()-t
return r>=0&&r<e.minHiddenPollInterval}return!1}())t||(t=setTimeout((function(){t=null,n()}),parseInt(500+500*Math.random())))
else{for(var o={},i=0;i<a.length;i++)o[a[i].channel]=a[i].last_id
e.longPoll||(e.longPoll=x(n,o))}}
document.addEventListener&&"hidden"in document&&(e.visibilityEvent=document.addEventListener("visibilitychange",(function(){document.hidden||e.longPoll||!h||(clearTimeout(h),clearTimeout(t),t=null,h=null,n())}))),n()}},status:function(){if(c)return"paused"
if(i)return"started"
if(r)return"stopped"
throw"Cannot determine current status"},subscribe:function(t,n,o){if(i||r||e.start(),"number"!=typeof o&&(o=-1),"string"!=typeof t)throw"Channel name must be a string!"
return a.push({channel:t,func:n,last_id:o}),e.longPoll&&e.longPoll.abort(),n},unsubscribe:function(t,r){var n=!1;-1!==t.indexOf("*",t.length-1)&&(t=t.substr(0,t.length-1),n=!0)
for(var o=!1,i=a.length-1;i>=0;i--){var s,l=a[i]
!(s=n?l.channel.substr(0,t.length)!==t:l.channel!==t)&&r&&l.func!==r&&(s=!0),s||(a.splice(i,1),o=!0)}return o&&e.longPoll&&e.longPoll.abort(),o}}}()}.apply(t,[]))||(e.exports=r)},6568:(e,t,r)=>{var n=r(9698),o=/[\/\+\.]/
e.exports=function(e,t){function r(t){var r=n(t,e,o)
return r&&r.length>=2}return t?r(t.split(";")[0]):r}},5575:e=>{e.exports=function(){var e={},t=e._fns={}
return e.emit=function(e,r,n,o,i,s,a){var l=function(e){for(var r=t[e]?t[e]:[],n=e.indexOf(":"),o=-1===n?[e]:[e.substring(0,n),e.substring(n+1)],i=Object.keys(t),s=0,a=i.length;s<a;s++){var l=i[s]
if("*"===l&&(r=r.concat(t[l])),2===o.length&&o[0]===l){r=r.concat(t[l])
break}}return r}(e)
l.length&&function(e,t,r){for(var n=0,o=t.length;n<o&&t[n];n++)t[n].event=e,t[n].apply(t[n],r)}(e,l,[r,n,o,i,s,a])},e.on=function(e,r){t[e]||(t[e]=[]),t[e].push(r)},e.once=function(t,r){this.on(t,(function n(){r.apply(this,arguments),e.off(t,n)}))},e.off=function(e,t){var r=[]
if(e&&t)for(var n=this._fns[e],o=0,i=n?n.length:0;o<i;o++)n[o]!==t&&r.push(n[o])
r.length?this._fns[e]=r:delete this._fns[e]},e}},8633:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{render:()=>F,hydrate:()=>H,createElement:()=>g,h:()=>g,Fragment:()=>b,createRef:()=>y,isValidElement:()=>s,Component:()=>w,cloneElement:()=>B,createContext:()=>V,toChildArray:()=>E,options:()=>o})
var n,o,i,s,a,l,c,u,p={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
function f(e,t){for(var r in t)e[r]=t[r]
return e}function m(e){var t=e.parentNode
t&&t.removeChild(e)}function g(e,t,r){var o,i,s,a={}
for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:a[s]=t[s]
if(arguments.length>2&&(a.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===a[s]&&(a[s]=e.defaultProps[s])
return v(e,a,o,i,null)}function v(e,t,r,n,s){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==s?++i:s}
return null!=o.vnode&&o.vnode(a),a}function y(){return{current:null}}function b(e){return e.children}function w(e,t){this.props=e,this.context=t}function x(e,t){if(null==t)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null
for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e
return"function"==typeof e.type?x(e):null}function k(e){var t,r
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e){e.__e=e.__c.base=r.__e
break}return k(e)}}function _(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!P.__r++||c!==o.debounceRendering)&&((c=o.debounceRendering)||l)(P)}function P(){for(var e;P.__r=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,r,n,o,i,s
e.__d&&(i=(o=(t=e).__v).__e,(s=t.__P)&&(r=[],(n=f({},o)).__v=o.__v+1,I(s,o,n,t.__n,void 0!==s.ownerSVGElement,null!=o.__h?[i]:null,r,null==i?x(o):i,o.__h),R(r,o),o.__e!=i&&k(o)))}))}function S(e,t,r,n,o,i,s,a,l,c){var u,d,f,m,g,y,w,k=n&&n.__k||h,_=k.length
for(r.__k=[],u=0;u<t.length;u++)if(null!=(m=r.__k[u]=null==(m=t[u])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(b,{children:m},null,null,null):m.__b>0?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=r,m.__b=r.__b+1,null===(f=k[u])||f&&m.key==f.key&&m.type===f.type)k[u]=void 0
else for(d=0;d<_;d++){if((f=k[d])&&m.key==f.key&&m.type===f.type){k[d]=void 0
break}f=null}I(e,m,f=f||p,o,i,s,a,l,c),g=m.__e,(d=m.ref)&&f.ref!=d&&(w||(w=[]),f.ref&&w.push(f.ref,null,m),w.push(d,m.__c||g,m)),null!=g?(null==y&&(y=g),"function"==typeof m.type&&null!=m.__k&&m.__k===f.__k?m.__d=l=O(m,l,e):l=A(e,m,f,k,g,l),c||"option"!==r.type?"function"==typeof r.type&&(r.__d=l):e.value=""):l&&f.__e==l&&l.parentNode!=e&&(l=x(f))}for(r.__e=y,u=_;u--;)null!=k[u]&&("function"==typeof r.type&&null!=k[u].__e&&k[u].__e==r.__d&&(r.__d=x(n,u+1)),D(k[u],k[u]))
if(w)for(u=0;u<w.length;u++)U(w[u],w[++u],w[++u])}function O(e,t,r){var n,o
for(n=0;n<e.__k.length;n++)(o=e.__k[n])&&(o.__=e,t="function"==typeof o.type?O(o,t,r):A(r,o,o,e.__k,o.__e,t))
return t}function E(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){E(e,t)})):t.push(e)),t}function A(e,t,r,n,o,i){var s,a,l
if(void 0!==t.__d)s=t.__d,t.__d=void 0
else if(null==r||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),s=null
else{for(a=i,l=0;(a=a.nextSibling)&&l<n.length;l+=2)if(a==o)break e
e.insertBefore(o,i),s=i}return void 0!==s?s:o.nextSibling}function C(e,t,r){"-"===t[0]?e.setProperty(t,r):e[t]=null==r?"":"number"!=typeof r||d.test(t)?r:r+"px"}function T(e,t,r,n,o){var i
e:if("style"===t)if("string"==typeof r)e.style.cssText=r
else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||C(e.style,t,"")
if(r)for(t in r)n&&r[t]===n[t]||C(e.style,t,r[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n||e.addEventListener(t,i?j:L,i):e.removeEventListener(t,i?j:L,i)
else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s")
else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==r?"":r
break e}catch(e){}"function"==typeof r||(null!=r&&(!1!==r||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,r):e.removeAttribute(t))}}function L(e){this.l[e.type+!1](o.event?o.event(e):e)}function j(e){this.l[e.type+!0](o.event?o.event(e):e)}function I(e,t,r,n,i,s,a,l,c){var u,p,h,d,m,g,v,y,x,k,_,P=t.type
if(void 0!==t.constructor)return null
null!=r.__h&&(c=r.__h,l=t.__e=r.__e,t.__h=null,s=[l]),(u=o.__b)&&u(t)
try{e:if("function"==typeof P){if(y=t.props,x=(u=P.contextType)&&n[u.__c],k=u?x?x.props.value:u.__:n,r.__c?v=(p=t.__c=r.__c).__=p.__E:("prototype"in P&&P.prototype.render?t.__c=p=new P(y,k):(t.__c=p=new w(y,k),p.constructor=P,p.render=M),x&&x.sub(p),p.props=y,p.state||(p.state={}),p.context=k,p.__n=n,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=f({},p.__s)),f(p.__s,P.getDerivedStateFromProps(y,p.__s))),d=p.props,m=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount)
else{if(null==P.getDerivedStateFromProps&&y!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(y,k),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(y,p.__s,k)||t.__v===r.__v){p.props=y,p.state=p.__s,t.__v!==r.__v&&(p.__d=!1),p.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&a.push(p)
break e}null!=p.componentWillUpdate&&p.componentWillUpdate(y,p.__s,k),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(d,m,g)}))}p.context=k,p.props=y,p.state=p.__s,(u=o.__r)&&u(t),p.__d=!1,p.__v=t,p.__P=e,u=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(n=f(f({},n),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,m)),_=null!=u&&u.type===b&&null==u.key?u.props.children:u,S(e,Array.isArray(_)?_:[_],t,r,n,i,s,a,l,c),p.base=t.__e,t.__h=null,p.__h.length&&a.push(p),v&&(p.__E=p.__=null),p.__e=!1}else null==s&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=N(r.__e,t,r,n,i,s,a,c);(u=o.diffed)&&u(t)}catch(e){t.__v=null,(c||null!=s)&&(t.__e=l,t.__h=!!c,s[s.indexOf(l)]=null),o.__e(e,t,r)}}function R(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function N(e,t,r,o,i,s,a,l){var c,u,h,d=r.props,f=t.props,g=t.type,v=0
if("svg"===g&&(i=!0),null!=s)for(;v<s.length;v++)if((c=s[v])&&(c===e||(g?c.localName==g:3==c.nodeType))){e=c,s[v]=null
break}if(null==e){if(null===g)return document.createTextNode(f)
e=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,f.is&&f),s=null,l=!1}if(null===g)d===f||l&&e.data===f||(e.data=f)
else{if(s=s&&n.call(e.childNodes),u=(d=r.props||p).dangerouslySetInnerHTML,h=f.dangerouslySetInnerHTML,!l){if(null!=s)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(h||u)&&(h&&(u&&h.__html==u.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(function(e,t,r,n,o){var i
for(i in r)"children"===i||"key"===i||i in t||T(e,i,null,r[i],n)
for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||r[i]===t[i]||T(e,i,t[i],r[i],n)}(e,f,d,i,l),h)t.__k=[]
else if(v=t.props.children,S(e,Array.isArray(v)?v:[v],t,r,o,i&&"foreignObject"!==g,s,a,s?s[0]:r.__k&&x(r,0),l),null!=s)for(v=s.length;v--;)null!=s[v]&&m(s[v])
l||("value"in f&&void 0!==(v=f.value)&&(v!==e.value||"progress"===g&&!v)&&T(e,"value",v,d.value,!1),"checked"in f&&void 0!==(v=f.checked)&&v!==e.checked&&T(e,"checked",v,d.checked,!1))}return e}function U(e,t,r){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,r)}}function D(e,t,r){var n,i
if(o.unmount&&o.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||U(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){o.__e(e,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&D(n[i],t,"function"!=typeof e.type)
r||null==e.__e||m(e.__e),e.__e=e.__d=void 0}function M(e,t,r){return this.constructor(e,r)}function F(e,t,r){var i,s,a
o.__&&o.__(e,t),s=(i="function"==typeof r)?null:r&&r.__k||t.__k,a=[],I(t,e=(!i&&r||t).__k=g(b,null,[e]),s||p,p,void 0!==t.ownerSVGElement,!i&&r?[r]:s?null:t.firstChild?n.call(t.childNodes):null,a,!i&&r?r:s?s.__e:t.firstChild,i),R(a,e)}function H(e,t){F(e,t,H)}function B(e,t,r){var o,i,s,a=f({},e.props)
for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:a[s]=t[s]
return arguments.length>2&&(a.children=arguments.length>3?n.call(arguments,2):r),v(e.type,a,o||e.key,i||e.ref,null)}function V(e,t){var r={__c:t="__cC"+u++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,n
return this.getChildContext||(r=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&r.some(_)},this.sub=function(e){r.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}}
return r.Provider.__=r.Consumer.contextType=r}n=h.slice,o={__e:function(e,t){for(var r,n,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&null!=n.getDerivedStateFromError&&(r.setState(n.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e}},i=0,s=function(e){return null!=e&&void 0===e.constructor},w.prototype.setState=function(e,t){var r
r=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},r),this.props)),e&&f(r,e),null!=e&&this.__v&&(t&&this.__h.push(t),_(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_(this))},w.prototype.render=b,a=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,P.__r=0,u=0},7867:(e,t,r)=>{"use strict"
function n(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof n(e).ShadowRoot||e instanceof ShadowRoot)}r.r(t),r.d(t,{animateFill:()=>it,createSingleton:()=>rt,default:()=>dt,delegate:()=>ot,followCursor:()=>ct,hideAll:()=>et,inlinePositioning:()=>ut,roundArrow:()=>ce,sticky:()=>pt})
var a=Math.max,l=Math.min,c=Math.round
function u(e,t){void 0===t&&(t=!1)
var r=e.getBoundingClientRect(),n=1,o=1
if(i(e)&&t){var s=e.offsetHeight,a=e.offsetWidth
a>0&&(n=c(r.width)/a||1),s>0&&(o=c(r.height)/s||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function p(e){var t=n(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function h(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return u(d(e)).left+p(e).scrollLeft}function m(e){return n(e).getComputedStyle(e)}function g(e){var t=m(e),r=t.overflow,n=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+o+n)}function v(e,t,r){void 0===r&&(r=!1)
var o,s,a=i(t),l=i(t)&&function(e){var t=e.getBoundingClientRect(),r=c(t.width)/e.offsetWidth||1,n=c(t.height)/e.offsetHeight||1
return 1!==r||1!==n}(t),m=d(t),v=u(e,l),y={scrollLeft:0,scrollTop:0},b={x:0,y:0}
return(a||!a&&!r)&&(("body"!==h(t)||g(m))&&(y=(o=t)!==n(o)&&i(o)?{scrollLeft:(s=o).scrollLeft,scrollTop:s.scrollTop}:p(o)),i(t)?((b=u(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):m&&(b.x=f(m))),{x:v.left+y.scrollLeft-b.x,y:v.top+y.scrollTop-b.y,width:v.width,height:v.height}}function y(e){var t=u(e),r=e.offsetWidth,n=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function b(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:i(e)&&g(e)?e:w(b(e))}function x(e,t){var r
void 0===t&&(t=[])
var o=w(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),s=n(o),a=i?[s].concat(s.visualViewport||[],g(o)?o:[]):o,l=t.concat(a)
return i?l:l.concat(x(b(a)))}function k(e){return["table","td","th"].indexOf(h(e))>=0}function _(e){return i(e)&&"fixed"!==m(e).position?e.offsetParent:null}function P(e){for(var t=n(e),r=_(e);r&&k(r)&&"static"===m(r).position;)r=_(r)
return r&&("html"===h(r)||"body"===h(r)&&"static"===m(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")
if(-1!==navigator.userAgent.indexOf("Trident")&&i(e)&&"fixed"===m(e).position)return null
for(var r=b(e);i(r)&&["html","body"].indexOf(h(r))<0;){var n=m(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}var S="top",O="bottom",E="right",A="left",C="auto",T=[S,O,E,A],L="start",j="end",I="viewport",R="popper",N=T.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+j])}),[]),U=[].concat(T,[C]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+j])}),[]),D=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function M(e){var t=new Map,r=new Set,n=[]
function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var F={placement:"bottom",modifiers:[],strategy:"absolute"}
function H(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var B={passive:!0}
function V(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?V(o):null,s=o?q(o):null,a=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2
switch(i){case S:t={x:a,y:r.y-n.height}
break
case O:t={x:a,y:r.y+r.height}
break
case E:t={x:r.x+r.width,y:l}
break
case A:t={x:r.x-n.width,y:l}
break
default:t={x:r.x,y:r.y}}var c=i?z(i):null
if(null!=c){var u="y"===c?"height":"width"
switch(s){case L:t[c]=t[c]-(r[u]/2-n[u]/2)
break
case j:t[c]=t[c]+(r[u]/2-n[u]/2)}}return t}var W={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function K(e){var t,r=e.popper,o=e.popperRect,i=e.placement,s=e.variation,a=e.offsets,l=e.position,u=e.gpuAcceleration,p=e.adaptive,h=e.roundOffsets,f=e.isFixed,g=!0===h?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1
return{x:c(t*n)/n||0,y:c(r*n)/n||0}}(a):"function"==typeof h?h(a):a,v=g.x,y=void 0===v?0:v,b=g.y,w=void 0===b?0:b,x=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),_=A,C=S,T=window
if(p){var L=P(r),I="clientHeight",R="clientWidth"
L===n(r)&&"static"!==m(L=d(r)).position&&"absolute"===l&&(I="scrollHeight",R="scrollWidth"),L=L,(i===S||(i===A||i===E)&&s===j)&&(C=O,w-=(f&&T.visualViewport?T.visualViewport.height:L[I])-o.height,w*=u?1:-1),i!==A&&(i!==S&&i!==O||s!==j)||(_=E,y-=(f&&T.visualViewport?T.visualViewport.width:L[R])-o.width,y*=u?1:-1)}var N,U=Object.assign({position:l},p&&W)
return u?Object.assign({},U,((N={})[C]=k?"0":"",N[_]=x?"0":"",N.transform=(T.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",N)):Object.assign({},U,((t={})[C]=k?w+"px":"",t[_]=x?y+"px":"",t.transform="",t))}const X={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e]
i(o)&&h(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{})
i(n)&&h(n)&&(Object.assign(n.style,s),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]}
var G={left:"right",right:"left",bottom:"top",top:"bottom"}
function Y(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}var J={start:"end",end:"start"}
function Q(e){return e.replace(/start|end/g,(function(e){return J[e]}))}function Z(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&s(r)){var n=t
do{if(n&&e.isSameNode(n))return!0
n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===I?ee(function(e){var t=n(e),r=d(e),o=t.visualViewport,i=r.clientWidth,s=r.clientHeight,a=0,l=0
return o&&(i=o.width,s=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,l=o.offsetTop)),{width:i,height:s,x:a+f(e),y:l}}(e)):o(t)?function(e){var t=u(e)
return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){var t,r=d(e),n=p(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=a(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=a(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-n.scrollLeft+f(e),c=-n.scrollTop
return"rtl"===m(o||r).direction&&(l+=a(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:l,y:c}}(d(e)))}function re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ne(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function oe(e,t){void 0===t&&(t={})
var r=t,n=r.placement,s=void 0===n?e.placement:n,c=r.boundary,p=void 0===c?"clippingParents":c,f=r.rootBoundary,g=void 0===f?I:f,v=r.elementContext,y=void 0===v?R:v,w=r.altBoundary,k=void 0!==w&&w,_=r.padding,A=void 0===_?0:_,C=re("number"!=typeof A?A:ne(A,T)),L=y===R?"reference":R,j=e.rects.popper,N=e.elements[k?L:y],U=function(e,t,r){var n="clippingParents"===t?function(e){var t=x(b(e)),r=["absolute","fixed"].indexOf(m(e).position)>=0,n=r&&i(e)?P(e):e
return o(n)?t.filter((function(e){return o(e)&&Z(e,n)&&"body"!==h(e)&&(!r||"static"!==m(e).position)})):[]}(e):[].concat(t),s=[].concat(n,[r]),c=s[0],u=s.reduce((function(t,r){var n=te(e,r)
return t.top=a(n.top,t.top),t.right=l(n.right,t.right),t.bottom=l(n.bottom,t.bottom),t.left=a(n.left,t.left),t}),te(e,c))
return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}(o(N)?N:N.contextElement||d(e.elements.popper),p,g),D=u(e.elements.reference),M=$({reference:D,element:j,strategy:"absolute",placement:s}),F=ee(Object.assign({},j,M)),H=y===R?F:D,B={top:U.top-H.top+C.top,bottom:H.bottom-U.bottom+C.bottom,left:U.left-H.left+C.left,right:H.right-U.right+C.right},V=e.modifiersData.offset
if(y===R&&V){var q=V[s]
Object.keys(B).forEach((function(e){var t=[E,O].indexOf(e)>=0?1:-1,r=[S,O].indexOf(e)>=0?"y":"x"
B[e]+=q[r]*t}))}return B}function ie(e,t,r){return a(e,l(t,r))}function se(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ae(e){return[S,E,O,A].some((function(t){return e[t]>=0}))}var le=function(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,s=void 0===i?F:i
return function(e,t,r){void 0===r&&(r=s)
var i,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:l,setOptions:function(r){var i="function"==typeof r?r(l.options):r
h(),l.options=Object.assign({},s,l.options,i),l.scrollParents={reference:o(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)}
var a,u,d=function(e){var t=M(e)
return D.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,l.options.modifiers),u=a.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))))
return l.orderedModifiers=d.filter((function(e){return e.enabled})),l.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect
if("function"==typeof o){var i=o({state:l,name:t,instance:p,options:n})
c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=l.elements,t=e.reference,r=e.popper
if(H(t,r)){l.rects={reference:v(t,P(r),"fixed"===l.options.strategy),popper:y(r)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(e){return l.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<l.orderedModifiers.length;n++)if(!0!==l.reset){var o=l.orderedModifiers[n],i=o.fn,s=o.options,a=void 0===s?{}:s,c=o.name
"function"==typeof i&&(l=i({state:l,options:a,name:c,instance:p})||l)}else l.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(l)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){h(),u=!0}}
if(!H(e,t))return p
function h(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(r).then((function(e){!u&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=e.options,i=o.scroll,s=void 0===i||i,a=o.resize,l=void 0===a||a,c=n(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return s&&u.forEach((function(e){e.addEventListener("scroll",r.update,B)})),l&&c.addEventListener("resize",r.update,B),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",r.update,B)})),l&&c.removeEventListener("resize",r.update,B)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,s=void 0===i||i,a=r.roundOffsets,l=void 0===a||a,c={placement:V(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},X,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,s=U.reduce((function(e,r){return e[r]=function(e,t,r){var n=V(e),o=[A,S].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,s=i[0],a=i[1]
return s=s||0,a=(a||0)*o,[A,E].indexOf(n)>=0?{x:a,y:s}:{x:s,y:a}}(r,t.rects,i),e}),{}),a=s[t.placement],l=a.x,c=a.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name
if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,s=r.altAxis,a=void 0===s||s,l=r.fallbackPlacements,c=r.padding,u=r.boundary,p=r.rootBoundary,h=r.altBoundary,d=r.flipVariations,f=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=V(g),y=l||(v!==g&&f?function(e){if(V(e)===C)return[]
var t=Y(e)
return[Q(e),t,Q(t)]}(g):[Y(g)]),b=[g].concat(y).reduce((function(e,r){return e.concat(V(r)===C?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,a=r.flipVariations,l=r.allowedAutoPlacements,c=void 0===l?U:l,u=q(n),p=u?a?N:N.filter((function(e){return q(e)===u})):T,h=p.filter((function(e){return c.indexOf(e)>=0}))
0===h.length&&(h=p)
var d=h.reduce((function(t,r){return t[r]=oe(e,{placement:r,boundary:o,rootBoundary:i,padding:s})[V(r)],t}),{})
return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:p,padding:c,flipVariations:f,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,x=t.rects.popper,k=new Map,_=!0,P=b[0],j=0;j<b.length;j++){var I=b[j],R=V(I),D=q(I)===L,M=[S,O].indexOf(R)>=0,F=M?"width":"height",H=oe(t,{placement:I,boundary:u,rootBoundary:p,altBoundary:h,padding:c}),B=M?D?E:A:D?O:S
w[F]>x[F]&&(B=Y(B))
var z=Y(B),$=[]
if(i&&$.push(H[R]<=0),a&&$.push(H[B]<=0,H[z]<=0),$.every((function(e){return e}))){P=I,_=!1
break}k.set(I,$)}if(_)for(var W=function(e){var t=b.find((function(t){var r=k.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return P=t,"break"},K=f?3:1;K>0&&"break"!==W(K);K--);t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,s=r.altAxis,c=void 0!==s&&s,u=r.boundary,p=r.rootBoundary,h=r.altBoundary,d=r.padding,f=r.tether,m=void 0===f||f,g=r.tetherOffset,v=void 0===g?0:g,b=oe(t,{boundary:u,rootBoundary:p,padding:d,altBoundary:h}),w=V(t.placement),x=q(t.placement),k=!x,_=z(w),C="x"===_?"y":"x",T=t.modifiersData.popperOffsets,j=t.rects.reference,I=t.rects.popper,R="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,N="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),U=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0}
if(T){if(i){var M,F="y"===_?S:A,H="y"===_?O:E,B="y"===_?"height":"width",$=T[_],W=$+b[F],K=$-b[H],X=m?-I[B]/2:0,G=x===L?j[B]:I[B],Y=x===L?-I[B]:-j[B],J=t.elements.arrow,Q=m&&J?y(J):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[F],te=Z[H],re=ie(0,j[B],Q[B]),ne=k?j[B]/2-X-re-ee-N.mainAxis:G-re-ee-N.mainAxis,se=k?-j[B]/2+X+re+te+N.mainAxis:Y+re+te+N.mainAxis,ae=t.elements.arrow&&P(t.elements.arrow),le=ae?"y"===_?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(M=null==U?void 0:U[_])?M:0,ue=$+se-ce,pe=ie(m?l(W,$+ne-ce-le):W,$,m?a(K,ue):K)
T[_]=pe,D[_]=pe-$}if(c){var he,de="x"===_?S:A,fe="x"===_?O:E,me=T[C],ge="y"===C?"height":"width",ve=me+b[de],ye=me-b[fe],be=-1!==[S,A].indexOf(w),we=null!=(he=null==U?void 0:U[C])?he:0,xe=be?ve:me-j[ge]-I[ge]-we+N.altAxis,ke=be?me+j[ge]+I[ge]-we-N.altAxis:ye,_e=m&&be?function(e,t,r){var n=ie(e,t,r)
return n>r?r:n}(xe,me,ke):ie(m?xe:ve,me,m?ke:ye)
T[C]=_e,D[C]=_e-me}t.modifiersData[n]=D}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,a=V(r.placement),l=z(a),c=[A,E].indexOf(a)>=0?"height":"width"
if(i&&s){var u=function(e,t){return re("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ne(e,T))}(o.padding,r),p=y(i),h="y"===l?S:A,d="y"===l?O:E,f=r.rects.reference[c]+r.rects.reference[l]-s[l]-r.rects.popper[c],m=s[l]-r.rects.reference[l],g=P(i),v=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=f/2-m/2,w=u[h],x=v-p[c]-u[d],k=v/2-p[c]/2+b,_=ie(w,k,x),C=l
r.modifiersData[n]=((t={})[C]=_,t.centerOffset=_-k,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&Z(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,s=oe(t,{elementContext:"reference"}),a=oe(t,{altBoundary:!0}),l=se(s,n),c=se(a,o,i),u=ae(l),p=ae(c)
t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),ce='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',ue="tippy-content",pe="tippy-backdrop",he="tippy-arrow",de="tippy-svg-arrow",fe={passive:!0,capture:!0},me=function(){return document.body}
function ge(e,t,r){if(Array.isArray(e)){var n=e[t]
return null==n?Array.isArray(r)?r[t]:r:n}return e}function ve(e,t){var r={}.toString.call(e)
return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function ye(e,t){return"function"==typeof e?e.apply(void 0,t):e}function be(e,t){return 0===t?e:function(n){clearTimeout(r),r=setTimeout((function(){e(n)}),t)}
var r}function we(e,t){var r=Object.assign({},e)
return t.forEach((function(e){delete r[e]})),r}function xe(e){return[].concat(e)}function ke(e,t){-1===e.indexOf(t)&&e.push(t)}function _e(e){return e.split("-")[0]}function Pe(e){return[].slice.call(e)}function Se(e){return Object.keys(e).reduce((function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t}),{})}function Oe(){return document.createElement("div")}function Ee(e){return["Element","Fragment"].some((function(t){return ve(e,t)}))}function Ae(e){return ve(e,"MouseEvent")}function Ce(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Te(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Le(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function je(e){var t,r=xe(e)[0]
return null!=r&&null!=(t=r.ownerDocument)&&t.body?r.ownerDocument:document}function Ie(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[n](t,r)}))}function Re(e,t){for(var r=t;r;){var n
if(e.contains(r))return!0
r=null==r.getRootNode||null==(n=r.getRootNode())?void 0:n.host}return!1}var Ne={isTouch:!1},Ue=0
function De(){Ne.isTouch||(Ne.isTouch=!0,window.performance&&document.addEventListener("mousemove",Me))}function Me(){var e=performance.now()
e-Ue<20&&(Ne.isTouch=!1,document.removeEventListener("mousemove",Me)),Ue=e}function Fe(){var e=document.activeElement
if(Ce(e)){var t=e._tippy
e.blur&&!t.state.isVisible&&e.blur()}}var He=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),Be=Object.assign({appendTo:me,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Ve=Object.keys(Be)
function qe(e){var t=(e.plugins||[]).reduce((function(t,r){var n,o=r.name,i=r.defaultValue
return o&&(t[o]=void 0!==e[o]?e[o]:null!=(n=Be[o])?n:i),t}),{})
return Object.assign({},e,t)}function ze(e,t){var r=Object.assign({},t,{content:ye(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(qe(Object.assign({},Be,{plugins:t}))):Ve).reduce((function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim()
if(!n)return t
if("content"===r)t[r]=n
else try{t[r]=JSON.parse(n)}catch(e){t[r]=n}return t}),{})}(e,t.plugins))
return r.aria=Object.assign({},Be.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}function $e(e,t){e.innerHTML=t}function We(e){var t=Oe()
return!0===e?t.className=he:(t.className=de,Ee(e)?t.appendChild(e):$e(t,e)),t}function Ke(e,t){Ee(t.content)?($e(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?$e(e,t.content):e.textContent=t.content)}function Xe(e){var t=e.firstElementChild,r=Pe(t.children)
return{box:t,content:r.find((function(e){return e.classList.contains(ue)})),arrow:r.find((function(e){return e.classList.contains(he)||e.classList.contains(de)})),backdrop:r.find((function(e){return e.classList.contains(pe)}))}}function Ge(e){var t=Oe(),r=Oe()
r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1")
var n=Oe()
function o(r,n){var o=Xe(t),i=o.box,s=o.content,a=o.arrow
n.theme?i.setAttribute("data-theme",n.theme):i.removeAttribute("data-theme"),"string"==typeof n.animation?i.setAttribute("data-animation",n.animation):i.removeAttribute("data-animation"),n.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?i.setAttribute("role",n.role):i.removeAttribute("role"),r.content===n.content&&r.allowHTML===n.allowHTML||Ke(s,e.props),n.arrow?a?r.arrow!==n.arrow&&(i.removeChild(a),i.appendChild(We(n.arrow))):i.appendChild(We(n.arrow)):a&&i.removeChild(a)}return n.className=ue,n.setAttribute("data-state","hidden"),Ke(n,e.props),t.appendChild(r),r.appendChild(n),o(e.props,e.props),{popper:t,onUpdate:o}}Ge.$$tippy=!0
var Ye=1,Je=[],Qe=[]
function Ze(e,t){void 0===t&&(t={})
var r=Be.plugins.concat(t.plugins||[])
document.addEventListener("touchstart",De,fe),window.addEventListener("blur",Fe)
var n,o=Object.assign({},t,{plugins:r}),i=(n=e,Ee(n)?[n]:function(e){return ve(e,"NodeList")}(n)?Pe(n):Array.isArray(n)?n:Pe(document.querySelectorAll(n))).reduce((function(e,t){var r=t&&function(e,t){var r,n,o,i,s,a,l,c,u=ze(e,Object.assign({},Be,qe(Se(t)))),p=!1,h=!1,d=!1,f=!1,m=[],g=be(K,u.interactiveDebounce),v=Ye++,y=(c=u.plugins).filter((function(e,t){return c.indexOf(e)===t})),b={id:v,reference:e,popper:Oe(),popperInstance:null,props:u,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(n),cancelAnimationFrame(o)},setProps:function(t){if(!b.state.isDestroyed){I("onBeforeUpdate",[b,t]),$()
var r=b.props,n=ze(e,Object.assign({},r,Se(t),{ignoreAttributes:!0}))
b.props=n,z(),r.interactiveDebounce!==n.interactiveDebounce&&(U(),g=be(K,n.interactiveDebounce)),r.triggerTarget&&!n.triggerTarget?xe(r.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):n.triggerTarget&&e.removeAttribute("aria-expanded"),N(),j(),k&&k(r,n),b.popperInstance&&(J(),Z().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),I("onAfterUpdate",[b,t])}},setContent:function(e){b.setProps({content:e})},show:function(){var e=b.state.isVisible,t=b.state.isDestroyed,r=!b.state.isEnabled,n=Ne.isTouch&&!b.props.touch,o=ge(b.props.duration,0,Be.duration)
if(!(e||t||r||n||A().hasAttribute("disabled")||(I("onShow",[b],!1),!1===b.props.onShow(b)))){if(b.state.isVisible=!0,E()&&(x.style.visibility="visible"),j(),H(),b.state.isMounted||(x.style.transition="none"),E()){var i=T()
Te([i.box,i.content],0)}var s,l,c
a=function(){var e
if(b.state.isVisible&&!f){if(f=!0,x.offsetHeight,x.style.transition=b.props.moveTransition,E()&&b.props.animation){var t=T(),r=t.box,n=t.content
Te([r,n],o),Le([r,n],"visible")}R(),N(),ke(Qe,b),null==(e=b.popperInstance)||e.forceUpdate(),I("onMount",[b]),b.props.animation&&E()&&function(e,t){V(e,(function(){b.state.isShown=!0,I("onShown",[b])}))}(o)}},l=b.props.appendTo,c=A(),(s=b.props.interactive&&l===me||"parent"===l?c.parentNode:ye(l,[c])).contains(x)||s.appendChild(x),b.state.isMounted=!0,J()}},hide:function(){var e=!b.state.isVisible,t=b.state.isDestroyed,r=!b.state.isEnabled,n=ge(b.props.duration,1,Be.duration)
if(!(e||t||r)&&(I("onHide",[b],!1),!1!==b.props.onHide(b))){if(b.state.isVisible=!1,b.state.isShown=!1,f=!1,p=!1,E()&&(x.style.visibility="hidden"),U(),B(),j(!0),E()){var o=T(),i=o.box,s=o.content
b.props.animation&&(Te([i,s],n),Le([i,s],"hidden"))}R(),N(),b.props.animation?E()&&function(e,t){V(e,(function(){!b.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()}))}(n,b.unmount):b.unmount()}},hideWithInteractivity:function(e){C().addEventListener("mousemove",g),ke(Je,g),g(e)},enable:function(){b.state.isEnabled=!0},disable:function(){b.hide(),b.state.isEnabled=!1},unmount:function(){b.state.isVisible&&b.hide(),b.state.isMounted&&(Q(),Z().forEach((function(e){e._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x),Qe=Qe.filter((function(e){return e!==b})),b.state.isMounted=!1,I("onHidden",[b]))},destroy:function(){b.state.isDestroyed||(b.clearDelayTimeouts(),b.unmount(),$(),delete e._tippy,b.state.isDestroyed=!0,I("onDestroy",[b]))}}
if(!u.render)return b
var w=u.render(b),x=w.popper,k=w.onUpdate
x.setAttribute("data-tippy-root",""),x.id="tippy-"+b.id,b.popper=x,e._tippy=b,x._tippy=b
var _=y.map((function(e){return e.fn(b)})),P=e.hasAttribute("aria-expanded")
return z(),N(),j(),I("onCreate",[b]),u.showOnCreate&&ee(),x.addEventListener("mouseenter",(function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&C().addEventListener("mousemove",g)})),b
function S(){var e=b.props.touch
return Array.isArray(e)?e:[e,0]}function O(){return"hold"===S()[0]}function E(){var e
return!(null==(e=b.props.render)||!e.$$tippy)}function A(){return l||e}function C(){var e=A().parentNode
return e?je(e):document}function T(){return Xe(x)}function L(e){return b.state.isMounted&&!b.state.isVisible||Ne.isTouch||i&&"focus"===i.type?0:ge(b.props.delay,e?0:1,Be.delay)}function j(e){void 0===e&&(e=!1),x.style.pointerEvents=b.props.interactive&&!e?"":"none",x.style.zIndex=""+b.props.zIndex}function I(e,t,r){var n
void 0===r&&(r=!0),_.forEach((function(r){r[e]&&r[e].apply(r,t)})),r&&(n=b.props)[e].apply(n,t)}function R(){var t=b.props.aria
if(t.content){var r="aria-"+t.content,n=x.id
xe(b.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(r)
if(b.state.isVisible)e.setAttribute(r,t?t+" "+n:n)
else{var o=t&&t.replace(n,"").trim()
o?e.setAttribute(r,o):e.removeAttribute(r)}}))}}function N(){!P&&b.props.aria.expanded&&xe(b.props.triggerTarget||e).forEach((function(e){b.props.interactive?e.setAttribute("aria-expanded",b.state.isVisible&&e===A()?"true":"false"):e.removeAttribute("aria-expanded")}))}function U(){C().removeEventListener("mousemove",g),Je=Je.filter((function(e){return e!==g}))}function D(t){if(!Ne.isTouch||!d&&"mousedown"!==t.type){var r=t.composedPath&&t.composedPath()[0]||t.target
if(!b.props.interactive||!Re(x,r)){if(xe(b.props.triggerTarget||e).some((function(e){return Re(e,r)}))){if(Ne.isTouch)return
if(b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else I("onClickOutside",[b,t])
!0===b.props.hideOnClick&&(b.clearDelayTimeouts(),b.hide(),h=!0,setTimeout((function(){h=!1})),b.state.isMounted||B())}}}function M(){d=!0}function F(){d=!1}function H(){var e=C()
e.addEventListener("mousedown",D,!0),e.addEventListener("touchend",D,fe),e.addEventListener("touchstart",F,fe),e.addEventListener("touchmove",M,fe)}function B(){var e=C()
e.removeEventListener("mousedown",D,!0),e.removeEventListener("touchend",D,fe),e.removeEventListener("touchstart",F,fe),e.removeEventListener("touchmove",M,fe)}function V(e,t){var r=T().box
function n(e){e.target===r&&(Ie(r,"remove",n),t())}if(0===e)return t()
Ie(r,"remove",s),Ie(r,"add",n),s=n}function q(t,r,n){void 0===n&&(n=!1),xe(b.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,r,n),m.push({node:e,eventType:t,handler:r,options:n})}))}function z(){var e
O()&&(q("touchstart",W,{passive:!0}),q("touchend",X,{passive:!0})),(e=b.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(q(e,W),e){case"mouseenter":q("mouseleave",X)
break
case"focus":q(He?"focusout":"blur",G)
break
case"focusin":q("focusout",G)}}))}function $(){m.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,o=e.options
t.removeEventListener(r,n,o)})),m=[]}function W(e){var t,r=!1
if(b.state.isEnabled&&!Y(e)&&!h){var n="focus"===(null==(t=i)?void 0:t.type)
i=e,l=e.currentTarget,N(),!b.state.isVisible&&Ae(e)&&Je.forEach((function(t){return t(e)})),"click"===e.type&&(b.props.trigger.indexOf("mouseenter")<0||p)&&!1!==b.props.hideOnClick&&b.state.isVisible?r=!0:ee(e),"click"===e.type&&(p=!r),r&&!n&&te(e)}}function K(e){var t=e.target,r=A().contains(t)||x.contains(t)
if("mousemove"!==e.type||!r){var n=Z().concat(x).map((function(e){var t,r=null==(t=e._tippy.popperInstance)?void 0:t.state
return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:u}:null})).filter(Boolean);(function(e,t){var r=t.clientX,n=t.clientY
return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,s=_e(o.placement),a=o.modifiersData.offset
if(!a)return!0
var l="bottom"===s?a.top.y:0,c="top"===s?a.bottom.y:0,u="right"===s?a.left.x:0,p="left"===s?a.right.x:0,h=t.top-n+l>i,d=n-t.bottom-c>i,f=t.left-r+u>i,m=r-t.right-p>i
return h||d||f||m}))})(n,e)&&(U(),te(e))}}function X(e){Y(e)||b.props.trigger.indexOf("click")>=0&&p||(b.props.interactive?b.hideWithInteractivity(e):te(e))}function G(e){b.props.trigger.indexOf("focusin")<0&&e.target!==A()||b.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||te(e)}function Y(e){return!!Ne.isTouch&&O()!==e.type.indexOf("touch")>=0}function J(){Q()
var t=b.props,r=t.popperOptions,n=t.placement,o=t.offset,i=t.getReferenceClientRect,s=t.moveTransition,l=E()?Xe(x).arrow:null,c=i?{getBoundingClientRect:i,contextElement:i.contextElement||A()}:e,u=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state
if(E()){var r=T().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}}]
E()&&l&&u.push({name:"arrow",options:{element:l,padding:3}}),u.push.apply(u,(null==r?void 0:r.modifiers)||[]),b.popperInstance=le(c,x,Object.assign({},r,{placement:n,onFirstUpdate:a,modifiers:u}))}function Q(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function Z(){return Pe(x.querySelectorAll("[data-tippy-root]"))}function ee(e){b.clearDelayTimeouts(),e&&I("onTrigger",[b,e]),H()
var t=L(!0),n=S(),o=n[0],i=n[1]
Ne.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){b.show()}),t):b.show()}function te(e){if(b.clearDelayTimeouts(),I("onUntrigger",[b,e]),b.state.isVisible){if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=L(!1)
t?n=setTimeout((function(){b.state.isVisible&&b.hide()}),t):o=requestAnimationFrame((function(){b.hide()}))}}else B()}}(t,o)
return r&&e.push(r),e}),[])
return Ee(e)?i[0]:i}Ze.defaultProps=Be,Ze.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Be[t]=e[t]}))},Ze.currentInput=Ne
var et=function(e){var t=void 0===e?{}:e,r=t.exclude,n=t.duration
Qe.forEach((function(e){var t=!1
if(r&&(t=Ce(r)?e.reference===r:e.popper===r.popper),!t){var o=e.props.duration
e.setProps({duration:n}),e.hide(),e.state.isDestroyed||e.setProps({duration:o})}}))},tt=Object.assign({},X,{effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow)}}),rt=function(e,t){var r
void 0===t&&(t={})
var n,o=e,i=[],s=[],a=t.overrides,l=[],c=!1
function u(){s=o.map((function(e){return xe(e.props.triggerTarget||e.reference)})).reduce((function(e,t){return e.concat(t)}),[])}function p(){i=o.map((function(e){return e.reference}))}function h(e){o.forEach((function(t){e?t.enable():t.disable()}))}function d(e){return o.map((function(t){var r=t.setProps
return t.setProps=function(o){r(o),t.reference===n&&e.setProps(o)},function(){t.setProps=r}}))}function f(e,t){var r=s.indexOf(t)
if(t!==n){n=t
var l=(a||[]).concat("content").reduce((function(e,t){return e[t]=o[r].props[t],e}),{})
e.setProps(Object.assign({},l,{getReferenceClientRect:"function"==typeof l.getReferenceClientRect?l.getReferenceClientRect:function(){var e
return null==(e=i[r])?void 0:e.getBoundingClientRect()}}))}}h(!1),p(),u()
var m={fn:function(){return{onDestroy:function(){h(!0)},onHidden:function(){n=null},onClickOutside:function(e){e.props.showOnCreate&&!c&&(c=!0,n=null)},onShow:function(e){e.props.showOnCreate&&!c&&(c=!0,f(e,i[0]))},onTrigger:function(e,t){f(e,t.currentTarget)}}}},g=Ze(Oe(),Object.assign({},we(t,["overrides"]),{plugins:[m].concat(t.plugins||[]),triggerTarget:s,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(r=t.popperOptions)?void 0:r.modifiers)||[],[tt])})})),v=g.show
g.show=function(e){if(v(),!n&&null==e)return f(g,i[0])
if(!n||null!=e){if("number"==typeof e)return i[e]&&f(g,i[e])
if(o.indexOf(e)>=0){var t=e.reference
return f(g,t)}return i.indexOf(e)>=0?f(g,e):void 0}},g.showNext=function(){var e=i[0]
if(!n)return g.show(0)
var t=i.indexOf(n)
g.show(i[t+1]||e)},g.showPrevious=function(){var e=i[i.length-1]
if(!n)return g.show(e)
var t=i.indexOf(n),r=i[t-1]||e
g.show(r)}
var y=g.setProps
return g.setProps=function(e){a=e.overrides||a,y(e)},g.setInstances=function(e){h(!0),l.forEach((function(e){return e()})),o=e,h(!1),p(),u(),l=d(g),g.setProps({triggerTarget:s})},l=d(g),g},nt={mouseover:"mouseenter",focusin:"focus",click:"click"}
function ot(e,t){var r=[],n=[],o=!1,i=t.target,s=we(t,["target"]),a=Object.assign({},s,{trigger:"manual",touch:!1}),l=Object.assign({touch:Be.touch},s,{showOnCreate:!0}),c=Ze(e,a)
function u(e){if(e.target&&!o){var r=e.target.closest(i)
if(r){var s=r.getAttribute("data-tippy-trigger")||t.trigger||Be.trigger
if(!r._tippy&&!("touchstart"===e.type&&"boolean"==typeof l.touch||"touchstart"!==e.type&&s.indexOf(nt[e.type])<0)){var a=Ze(r,l)
a&&(n=n.concat(a))}}}}function p(e,t,n,o){void 0===o&&(o=!1),e.addEventListener(t,n,o),r.push({node:e,eventType:t,handler:n,options:o})}return xe(c).forEach((function(e){var t=e.destroy,i=e.enable,s=e.disable
e.destroy=function(e){void 0===e&&(e=!0),e&&n.forEach((function(e){e.destroy()})),n=[],r.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,o=e.options
t.removeEventListener(r,n,o)})),r=[],t()},e.enable=function(){i(),n.forEach((function(e){return e.enable()})),o=!1},e.disable=function(){s(),n.forEach((function(e){return e.disable()})),o=!0},function(e){var t=e.reference
p(t,"touchstart",u,fe),p(t,"mouseover",u),p(t,"focusin",u),p(t,"click",u)}(e)})),c}var it={name:"animateFill",defaultValue:!1,fn:function(e){var t
if(null==(t=e.props.render)||!t.$$tippy)return{}
var r=Xe(e.popper),n=r.box,o=r.content,i=e.props.animateFill?function(){var e=Oe()
return e.className=pe,Le([e],"hidden"),e}():null
return{onCreate:function(){i&&(n.insertBefore(i,n.firstElementChild),n.setAttribute("data-animatefill",""),n.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var e=n.style.transitionDuration,t=Number(e.replace("ms",""))
o.style.transitionDelay=Math.round(t/10)+"ms",i.style.transitionDuration=e,Le([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&Le([i],"hidden")}}}},st={clientX:0,clientY:0},at=[]
function lt(e){var t=e.clientX,r=e.clientY
st={clientX:t,clientY:r}}var ct={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,r=je(e.props.triggerTarget||t),n=!1,o=!1,i=!0,s=e.props
function a(){return"initial"===e.props.followCursor&&e.state.isVisible}function l(){r.addEventListener("mousemove",p)}function c(){r.removeEventListener("mousemove",p)}function u(){n=!0,e.setProps({getReferenceClientRect:null}),n=!1}function p(r){var n=!r.target||t.contains(r.target),o=e.props.followCursor,i=r.clientX,s=r.clientY,a=t.getBoundingClientRect(),l=i-a.left,c=s-a.top
!n&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),r=i,n=s
"initial"===o&&(r=e.left+l,n=e.top+c)
var a="horizontal"===o?e.top:n,u="vertical"===o?e.right:r,p="horizontal"===o?e.bottom:n,h="vertical"===o?e.left:r
return{width:u-h,height:p-a,top:a,right:u,bottom:p,left:h}}})}function h(){e.props.followCursor&&(at.push({instance:e,doc:r}),function(e){e.addEventListener("mousemove",lt)}(r))}function d(){0===(at=at.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===r})).length&&function(e){e.removeEventListener("mousemove",lt)}(r)}return{onCreate:h,onDestroy:d,onBeforeUpdate:function(){s=e.props},onAfterUpdate:function(t,r){var i=r.followCursor
n||void 0!==i&&s.followCursor!==i&&(d(),i?(h(),!e.state.isMounted||o||a()||l()):(c(),u()))},onMount:function(){e.props.followCursor&&!o&&(i&&(p(st),i=!1),a()||l())},onTrigger:function(e,t){Ae(t)&&(st={clientX:t.clientX,clientY:t.clientY}),o="focus"===t.type},onHidden:function(){e.props.followCursor&&(u(),c(),i=!0)}}}},ut={name:"inlinePositioning",defaultValue:!1,fn:function(e){var t,r=e.reference,n=-1,o=!1,i=[],s={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var s=o.state
e.props.inlinePositioning&&(-1!==i.indexOf(s.placement)&&(i=[]),t!==s.placement&&-1===i.indexOf(s.placement)&&(i.push(s.placement),e.setProps({getReferenceClientRect:function(){return function(e){return function(e,t,r,n){if(r.length<2||null===e)return t
if(2===r.length&&n>=0&&r[0].left>r[1].right)return r[n]||t
switch(e){case"top":case"bottom":var o=r[0],i=r[r.length-1],s="top"===e,a=o.top,l=i.bottom,c=s?o.left:i.left,u=s?o.right:i.right
return{top:a,bottom:l,left:c,right:u,width:u-c,height:l-a}
case"left":case"right":var p=Math.min.apply(Math,r.map((function(e){return e.left}))),h=Math.max.apply(Math,r.map((function(e){return e.right}))),d=r.filter((function(t){return"left"===e?t.left===p:t.right===h})),f=d[0].top,m=d[d.length-1].bottom
return{top:f,bottom:m,left:p,right:h,width:h-p,height:m-f}
default:return t}}(_e(e),r.getBoundingClientRect(),Pe(r.getClientRects()),n)}(s.placement)}})),t=s.placement)}}
function a(){var t
o||(t=function(e,t){var r
return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat(((null==(r=e.popperOptions)?void 0:r.modifiers)||[]).filter((function(e){return e.name!==t.name})),[t])})}}(e.props,s),o=!0,e.setProps(t),o=!1)}return{onCreate:a,onAfterUpdate:a,onTrigger:function(t,r){if(Ae(r)){var o=Pe(e.reference.getClientRects()),i=o.find((function(e){return e.left-2<=r.clientX&&e.right+2>=r.clientX&&e.top-2<=r.clientY&&e.bottom+2>=r.clientY})),s=o.indexOf(i)
n=s>-1?s:n}},onHidden:function(){n=-1}}}},pt={name:"sticky",defaultValue:!1,fn:function(e){var t=e.reference,r=e.popper
function n(t){return!0===e.props.sticky||e.props.sticky===t}var o=null,i=null
function s(){var a=n("reference")?(e.popperInstance?e.popperInstance.state.elements.reference:t).getBoundingClientRect():null,l=n("popper")?r.getBoundingClientRect():null;(a&&ht(o,a)||l&&ht(i,l))&&e.popperInstance&&e.popperInstance.update(),o=a,i=l,e.state.isMounted&&requestAnimationFrame(s)}return{onMount:function(){e.props.sticky&&s()}}}}
function ht(e,t){return!e||!t||e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}Ze.setDefaultProps({render:Ge})
const dt=Ze},9423:(e,t,r)=>{var n=r(1384)
e.exports=n},4290:(e,t,r)=>{var n=r(7581)
e.exports=n},8493:(e,t,r)=>{var n=r(2028)
e.exports=n},7150:(e,t,r)=>{var n=r(4290),o=r(9748),i=r(8493),s=r(9423),a=r(976),l=r(6459)
e.exports={diff:n,patch:o,h:i,create:s,VNode:a,VText:l}},9748:(e,t,r)=>{var n=r(3888)
e.exports=n},905:(e,t,r)=>{var n=r(7819),o=r(5731)
function i(e,t,r,n){if(n){var i=n[t]
if(o(i))i.unhook&&i.unhook(e,t,r)
else if("attributes"===t)for(var s in i)e.removeAttribute(s)
else if("style"===t)for(var a in i)e.style[a]=""
else e[t]="string"==typeof i?"":null}}function s(e,t,r,o,i){var s=r?r[o]:void 0
if("attributes"!==o)if(s&&n(s)&&a(s)!==a(i))e[o]=i
else{n(e[o])||(e[o]={})
var l="style"===o?"":void 0
for(var c in i){var u=i[c]
e[o][c]=void 0===u?l:u}}else for(var p in i){var h=i[p]
void 0===h?e.removeAttribute(p):e.setAttribute(p,h)}}function a(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function(e,t,r){for(var a in t){var l=t[a]
void 0===l?i(e,a,l,r):o(l)?(i(e,a,l,r),l.hook&&l.hook(e,a,r?r[a]:void 0)):n(l)?s(e,0,r,a,l):e[a]=l}}},1384:(e,t,r)=>{var n=r(2957),o=r(905),i=r(5738),s=r(3834),a=r(1506),l=r(9007)
e.exports=function e(t,r){var c=r&&r.document||n,u=r?r.warn:null
if(t=l(t).a,a(t))return t.init()
if(s(t))return c.createTextNode(t.text)
if(!i(t))return u&&u("Item is not a valid virtual dom node",t),null
var p=null===t.namespace?c.createElement(t.tagName):c.createElementNS(t.namespace,t.tagName),h=t.properties
o(p,h)
for(var d=t.children,f=0;f<d.length;f++){var m=e(d[f],r)
m&&p.appendChild(m)}return p}},1311:e=>{var t={}
function r(e,o,i,s,a){if(s=s||{},e){n(i,a,a)&&(s[a]=e)
var l=o.children
if(l)for(var c=e.childNodes,u=0;u<o.children.length;u++){a+=1
var p=l[u]||t,h=a+(p.count||0)
n(i,a,h)&&r(c[u],p,i,s,a),a=h}}return s}function n(e,t,r){if(0===e.length)return!1
for(var n,o,i=0,s=e.length-1;i<=s;){if(o=e[n=(s+i)/2>>0],i===s)return o>=t&&o<=r
if(o<t)i=n+1
else{if(!(o>r))return!0
s=n-1}}return!1}function o(e,t){return e>t?1:-1}e.exports=function(e,t,n,i){return n&&0!==n.length?(n.sort(o),r(e,t,n,i,0)):{}}},8452:(e,t,r)=>{var n=r(905),o=r(1506),i=r(4791),s=r(154)
function a(e,t){"function"==typeof t.destroy&&o(t)&&t.destroy(e)}e.exports=function(e,t,r){var o,l,c=e.type,u=e.vNode,p=e.patch
switch(c){case i.REMOVE:return function(e,t){var r=e.parentNode
return r&&r.removeChild(e),a(e,t),null}(t,u)
case i.INSERT:return function(e,t,r){var n=r.render(t,r)
return e&&e.appendChild(n),e}(t,p,r)
case i.VTEXT:return function(e,t,r,n){var o
if(3===e.nodeType)e.replaceData(0,e.length,r.text),o=e
else{var i=e.parentNode
o=n.render(r,n),i&&o!==e&&i.replaceChild(o,e)}return o}(t,0,p,r)
case i.WIDGET:return function(e,t,r,n){var o,i=s(t,r)
o=i?r.update(t,e)||e:n.render(r,n)
var l=e.parentNode
return l&&o!==e&&l.replaceChild(o,e),i||a(e,t),o}(t,u,p,r)
case i.VNODE:return function(e,t,r,n){var o=e.parentNode,i=n.render(r,n)
return o&&i!==e&&o.replaceChild(i,e),i}(t,0,p,r)
case i.ORDER:return function(e,t){for(var r,n,o,i=e.childNodes,s={},a=0;a<t.removes.length;a++)r=i[(n=t.removes[a]).from],n.key&&(s[n.key]=r),e.removeChild(r)
for(var l=i.length,c=0;c<t.inserts.length;c++)r=s[(o=t.inserts[c]).key],e.insertBefore(r,o.to>=l++?null:i[o.to])}(t,p),t
case i.PROPS:return n(t,p,u.properties),t
case i.THUNK:return o=t,l=r.patch(t,p,r),o&&l&&o!==l&&o.parentNode&&o.parentNode.replaceChild(l,o),l
default:return t}}},3888:(e,t,r)=>{var n=r(2957),o=r(1325),i=r(1384),s=r(1311),a=r(8452)
function l(e,t,r){var o=function(e){var t=[]
for(var r in e)"a"!==r&&t.push(Number(r))
return t}(t)
if(0===o.length)return e
var i=s(e,t.a,o),a=e.ownerDocument
r.document||a===n||(r.document=a)
for(var l=0;l<o.length;l++){var u=o[l]
e=c(e,i[u],t[u],r)}return e}function c(e,t,r,n){if(!t)return e
var i
if(o(r))for(var s=0;s<r.length;s++)i=a(r[s],t,n),t===e&&(e=i)
else i=a(r,t,n),t===e&&(e=i)
return e}e.exports=function e(t,r,n){return(n=n||{}).patch=n.patch&&n.patch!==e?n.patch:l,n.render=n.render||i,n.patch(t,r,n)}},154:(e,t,r)=>{var n=r(1506)
e.exports=function(e,t){return!(!n(e)||!n(t))&&("name"in e&&"name"in t?e.id===t.id:e.init===t.init)}},7774:(e,t,r)=>{"use strict"
var n=r(2612)
function o(e){if(!(this instanceof o))return new o(e)
this.value=e}e.exports=o,o.prototype.hook=function(e,t){n(e)[t.substr(3)]=this.value},o.prototype.unhook=function(e,t){n(e)[t.substr(3)]=void 0}},3302:e=>{"use strict"
function t(e){if(!(this instanceof t))return new t(e)
this.value=e}e.exports=t,t.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},2028:(e,t,r)=>{"use strict"
var n=r(1325),o=r(976),i=r(6459),s=r(5738),a=r(3834),l=r(1506),c=r(5731),u=r(5242),p=r(4484),h=r(3302),d=r(7774)
function f(e,t,r,o){if("string"==typeof e)t.push(new i(e))
else if("number"==typeof e)t.push(new i(String(e)))
else if(m(e))t.push(e)
else{if(!n(e)){if(null==e)return
throw a={foreignObject:e,parentVnode:{tagName:r,properties:o}},(l=new Error).type="virtual-hyperscript.unexpected.virtual-element",l.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+g(a.foreignObject)+".\nThe parent vnode is:\n"+g(a.parentVnode),l.foreignObject=a.foreignObject,l.parentVnode=a.parentVnode,l}for(var s=0;s<e.length;s++)f(e[s],t,r,o)}var a,l}function m(e){return s(e)||a(e)||l(e)||u(e)}function g(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}e.exports=function(e,t,r){var i,s,a,l,u,g=[]
return!r&&("string"==typeof(u=t)||n(u)||m(u))&&(r=t,s={}),i=p(e,s=s||t||{}),s.hasOwnProperty("key")&&(a=s.key,s.key=void 0),s.hasOwnProperty("namespace")&&(l=s.namespace,s.namespace=void 0),"INPUT"!==i||l||!s.hasOwnProperty("value")||void 0===s.value||c(s.value)||(s.value=h(s.value)),function(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t]
if(c(r))continue
"ev-"===t.substr(0,3)&&(e[t]=d(r))}}(s),null!=r&&f(r,g,i,s),new o(i,s,g,a,l)}},4484:(e,t,r)=>{"use strict"
var n=r(2316),o=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,i=/^\.|#/
e.exports=function(e,t){if(!e)return"DIV"
var r,s,a,l,c=!t.hasOwnProperty("id"),u=n(e,o),p=null
for(i.test(u[1])&&(p="DIV"),l=0;l<u.length;l++)(s=u[l])&&(a=s.charAt(0),p?"."===a?(r=r||[]).push(s.substring(1,s.length)):"#"===a&&c&&(t.id=s.substring(1,s.length)):p=s)
return r&&(t.className&&r.push(t.className),t.className=r.join(" ")),t.namespace?p:p.toUpperCase()}},9007:(e,t,r)=>{var n=r(5738),o=r(3834),i=r(1506),s=r(5242)
function a(e,t){var r=e.vnode
if(r||(r=e.vnode=e.render(t)),!(n(r)||o(r)||i(r)))throw new Error("thunk did not return a valid node")
return r}e.exports=function(e,t){var r=e,n=t
return s(t)&&(n=a(t,e)),s(e)&&(r=a(e,null)),{a:r,b:n}}},5242:e=>{e.exports=function(e){return e&&"Thunk"===e.type}},5731:e=>{e.exports=function(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}},5738:(e,t,r)=>{var n=r(6717)
e.exports=function(e){return e&&"VirtualNode"===e.type&&e.version===n}},3834:(e,t,r)=>{var n=r(6717)
e.exports=function(e){return e&&"VirtualText"===e.type&&e.version===n}},1506:e=>{e.exports=function(e){return e&&"Widget"===e.type}},6717:e=>{e.exports="2"},976:(e,t,r)=>{var n=r(6717),o=r(5738),i=r(1506),s=r(5242),a=r(5731)
e.exports=u
var l={},c=[]
function u(e,t,r,n,u){this.tagName=e,this.properties=t||l,this.children=r||c,this.key=null!=n?String(n):void 0,this.namespace="string"==typeof u?u:null
var p,h=r&&r.length||0,d=0,f=!1,m=!1,g=!1
for(var v in t)if(t.hasOwnProperty(v)){var y=t[v]
a(y)&&y.unhook&&(p||(p={}),p[v]=y)}for(var b=0;b<h;b++){var w=r[b]
o(w)?(d+=w.count||0,!f&&w.hasWidgets&&(f=!0),!m&&w.hasThunks&&(m=!0),g||!w.hooks&&!w.descendantHooks||(g=!0)):!f&&i(w)?"function"==typeof w.destroy&&(f=!0):!m&&s(w)&&(m=!0)}this.count=h+d,this.hasWidgets=f,this.hasThunks=m,this.hooks=p,this.descendantHooks=g}u.prototype.version=n,u.prototype.type="VirtualNode"},4791:(e,t,r)=>{var n=r(6717)
function o(e,t,r){this.type=Number(e),this.vNode=t,this.patch=r}o.NONE=0,o.VTEXT=1,o.VNODE=2,o.WIDGET=3,o.PROPS=4,o.ORDER=5,o.INSERT=6,o.REMOVE=7,o.THUNK=8,e.exports=o,o.prototype.version=n,o.prototype.type="VirtualPatch"},6459:(e,t,r)=>{var n=r(6717)
function o(e){this.text=String(e)}e.exports=o,o.prototype.version=n,o.prototype.type="VirtualText"},1935:(e,t,r)=>{var n=r(7819),o=r(5731)
function i(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function e(t,r){var s
for(var a in t){a in r||((s=s||{})[a]=void 0)
var l=t[a],c=r[a]
if(l!==c)if(n(l)&&n(c))if(i(c)!==i(l))(s=s||{})[a]=c
else if(o(c))(s=s||{})[a]=c
else{var u=e(l,c)
u&&((s=s||{})[a]=u)}else(s=s||{})[a]=c}for(var p in r)p in t||((s=s||{})[p]=r[p])
return s}},7581:(e,t,r)=>{var n=r(1325),o=r(4791),i=r(5738),s=r(3834),a=r(1506),l=r(5242),c=r(9007),u=r(1935)
function p(e,t){var r={a:e}
return h(e,t,r,0),r}function h(e,t,r,n){if(e!==t){var c=r[n],p=!1
if(l(e)||l(t))m(e,t,r,n)
else if(null==t)a(e)||(d(e,r,n),c=r[n]),c=b(c,new o(o.REMOVE,e,t))
else if(i(t))if(i(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var f=u(e.properties,t.properties)
f&&(c=b(c,new o(o.PROPS,e,f))),c=function(e,t,r,n,s){for(var a=e.children,l=function(e,t){var r=y(t),n=r.keys,o=r.free
if(o.length===t.length)return{children:t,moves:null}
var i=y(e),s=i.keys
if(i.free.length===e.length)return{children:t,moves:null}
for(var a=[],l=0,c=o.length,u=0,p=0;p<e.length;p++){var h,d=e[p]
d.key?n.hasOwnProperty(d.key)?(h=n[d.key],a.push(t[h])):(h=p-u++,a.push(null)):l<c?(h=o[l++],a.push(t[h])):(h=p-u++,a.push(null))}for(var f=l>=o.length?t.length:o[l],m=0;m<t.length;m++){var g=t[m]
g.key?s.hasOwnProperty(g.key)||a.push(g):m>=f&&a.push(g)}for(var b,w=a.slice(),x=0,k=[],_=[],P=0;P<t.length;){var S=t[P]
for(b=w[x];null===b&&w.length;)k.push(v(w,x,null)),b=w[x]
b&&b.key===S.key?(x++,P++):S.key?(b&&b.key&&n[b.key]!==P+1?(k.push(v(w,x,b.key)),(b=w[x])&&b.key===S.key?x++:_.push({key:S.key,to:P})):_.push({key:S.key,to:P}),P++):b&&b.key&&k.push(v(w,x,b.key))}for(;x<w.length;)b=w[x],k.push(v(w,x,b&&b.key))
return k.length!==u||_.length?{children:a,moves:{removes:k,inserts:_}}:{children:a,moves:null}}(a,t.children),c=l.children,u=a.length,p=c.length,d=u>p?u:p,f=0;f<d;f++){var m=a[f],g=c[f]
s+=1,m?h(m,g,r,s):g&&(n=b(n,new o(o.INSERT,null,g))),i(m)&&m.count&&(s+=m.count)}return l.moves&&(n=b(n,new o(o.ORDER,e,l.moves))),n}(e,t,r,c,n)}else c=b(c,new o(o.VNODE,e,t)),p=!0
else c=b(c,new o(o.VNODE,e,t)),p=!0
else s(t)?s(e)?e.text!==t.text&&(c=b(c,new o(o.VTEXT,e,t))):(c=b(c,new o(o.VTEXT,e,t)),p=!0):a(t)&&(a(e)||(p=!0),c=b(c,new o(o.WIDGET,e,t)))
c&&(r[n]=c),p&&d(e,r,n)}}function d(e,t,r){g(e,t,r),f(e,t,r)}function f(e,t,r){if(a(e))"function"==typeof e.destroy&&(t[r]=b(t[r],new o(o.REMOVE,e,null)))
else if(i(e)&&(e.hasWidgets||e.hasThunks))for(var n=e.children,s=n.length,c=0;c<s;c++){var u=n[c]
f(u,t,r+=1),i(u)&&u.count&&(r+=u.count)}else l(e)&&m(e,null,t,r)}function m(e,t,r,n){var i=c(e,t),s=p(i.a,i.b);(function(e){for(var t in e)if("a"!==t)return!0
return!1})(s)&&(r[n]=new o(o.THUNK,null,s))}function g(e,t,r){if(i(e)){if(e.hooks&&(t[r]=b(t[r],new o(o.PROPS,e,function(e){var t={}
for(var r in e)t[r]=void 0
return t}(e.hooks)))),e.descendantHooks||e.hasThunks)for(var n=e.children,s=n.length,a=0;a<s;a++){var c=n[a]
g(c,t,r+=1),i(c)&&c.count&&(r+=c.count)}}else l(e)&&m(e,null,t,r)}function v(e,t,r){return e.splice(t,1),{from:t,key:r}}function y(e){for(var t={},r=[],n=e.length,o=0;o<n;o++){var i=e[o]
i.key?t[i.key]=o:r.push(o)}return{keys:t,free:r}}function b(e,t){return e?(n(e)?e.push(t):e=[e,t],e):t}e.exports=p},9698:e=>{"use strict"
function t(e,t){this.text=e=e||"",this.hasWild=~e.indexOf("*"),this.separator=t,this.parts=e.split(t)}t.prototype.match=function(e){var t,r,n=!0,o=this.parts,i=o.length
if("string"==typeof e||e instanceof String)if(this.hasWild||this.text==e){for(r=(e||"").split(this.separator),t=0;n&&t<i;t++)"*"!==o[t]&&(n=t<r.length&&o[t]===r[t])
n=n&&r}else n=!1
else if("function"==typeof e.splice)for(n=[],t=e.length;t--;)this.match(e[t])&&(n[n.length]=e[t])
else if("object"==typeof e)for(var s in n={},e)this.match(s)&&(n[s]=e[s])
return n},e.exports=function(e,r,n){var o=new t(e,n||/[\/\.]/)
return void 0!==r?o.match(r):o}},1325:e=>{var t=Array.isArray,r=Object.prototype.toString
e.exports=t||function(e){return"[object Array]"===r.call(e)}},9229:(e,t,r)=>{var n=r(8223).FilterCSS,o=r(8223).getDefaultWhiteList,i=r(2081),s=new n
function a(e){return e.replace(l,"&lt;").replace(c,"&gt;")}var l=/</g,c=/>/g,u=/"/g,p=/&quot;/g,h=/&#([a-zA-Z0-9]*);?/gim,d=/&colon;?/gim,f=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,g=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi
function y(e){return e.replace(u,"&quot;")}function b(e){return e.replace(p,'"')}function w(e){return e.replace(h,(function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}function x(e){return e.replace(d,":").replace(f," ")}function k(e){for(var t="",r=0,n=e.length;r<n;r++)t+=e.charCodeAt(r)<32?" ":e.charAt(r)
return i.trim(t)}function _(e){return k(e=x(e=w(e=b(e))))}function P(e){return a(e=y(e))}t.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},t.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},t.onTag=function(e,t,r){},t.onIgnoreTag=function(e,t,r){},t.onTagAttr=function(e,t,r){},t.onIgnoreTagAttr=function(e,t,r){},t.safeAttrValue=function(e,t,r,n){if(r=_(r),"href"===t||"src"===t){if("#"===(r=i.trim(r)))return"#"
if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===t){if(m.lastIndex=0,m.test(r))return""}else if("style"===t){if(g.lastIndex=0,g.test(r))return""
if(v.lastIndex=0,v.test(r)&&(m.lastIndex=0,m.test(r)))return""
!1!==n&&(r=(n=n||s).process(r))}return P(r)},t.escapeHtml=a,t.escapeQuote=y,t.unescapeQuote=b,t.escapeHtmlEntities=w,t.escapeDangerHtml5Entities=x,t.clearNonPrintableCharacter=k,t.friendlyAttrValue=_,t.escapeAttrValue=P,t.onIgnoreTagStripAll=function(){return""},t.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){})
var r=!Array.isArray(e),n=[],o=!1
return{onIgnoreTag:function(s,a,l){if(function(t){return!!r||-1!==i.indexOf(e,t)}(s)){if(l.isClosing){var c="[/removed]",u=l.position+c.length
return n.push([!1!==o?o:l.position,u]),o=!1,c}return o||(o=l.position),"[removed]"}return t(s,a,l)},remove:function(e){var t="",r=0
return i.forEach(n,(function(n){t+=e.slice(r,n[0]),r=n[1]})),t+=e.slice(r)}}},t.stripCommentTag=function(e){for(var t="",r=0;r<e.length;){var n=e.indexOf("\x3c!--",r)
if(-1===n){t+=e.slice(r)
break}t+=e.slice(r,n)
var o=e.indexOf("--\x3e",n)
if(-1===o)break
r=o+3}return t},t.stripBlankChar=function(e){var t=e.split("")
return(t=t.filter((function(e){var t=e.charCodeAt(0)
return!(127===t||t<=31&&10!==t&&13!==t)}))).join("")},t.cssFilter=s,t.getDefaultCSSWhiteList=o},5833:(e,t,r)=>{var n=r(9229),o=r(7794),i=r(7173)
function s(e,t){return new i(t).process(e)}for(var a in(t=e.exports=s).filterXSS=s,t.FilterXSS=i,n)t[a]=n[a]
for(var a in o)t[a]=o[a]
"undefined"!=typeof window&&(window.filterXSS=e.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)},7794:(e,t,r)=>{var n=r(2081)
function o(e){var t=n.spaceIndex(e)
if(-1===t)var r=e.slice(1,-1)
else r=e.slice(1,t+1)
return"/"===(r=n.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function i(e){return"</"===e.slice(0,2)}var s=/[^a-zA-Z0-9_:\.\-]/gim
function a(e,t){for(;t<e.length;t++){var r=e[t]
if(" "!==r)return"="===r?t:-1}}function l(e,t){for(;t>0;t--){var r=e[t]
if(" "!==r)return"="===r?t:-1}}function c(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}t.parseTag=function(e,t,r){"use strict"
var n="",s=0,a=!1,l=!1,c=0,u=e.length,p="",h=""
e:for(c=0;c<u;c++){var d=e.charAt(c)
if(!1===a){if("<"===d){a=c
continue}}else if(!1===l){if("<"===d){n+=r(e.slice(s,c)),a=c,s=c
continue}if(">"===d){n+=r(e.slice(s,a)),p=o(h=e.slice(a,c+1)),n+=t(a,n.length,p,h,i(h)),s=c+1,a=!1
continue}if('"'===d||"'"===d)for(var f=1,m=e.charAt(c-f);""===m.trim()||"="===m;){if("="===m){l=d
continue e}m=e.charAt(c-++f)}}else if(d===l){l=!1
continue}}return s<e.length&&(n+=r(e.substr(s))),n},t.parseAttr=function(e,t){"use strict"
var r=0,o=[],i=!1,u=e.length
function p(e,r){if(!((e=(e=n.trim(e)).replace(s,"").toLowerCase()).length<1)){var i=t(e,r||"")
i&&o.push(i)}}for(var h=0;h<u;h++){var d,f=e.charAt(h)
if(!1!==i||"="!==f)if(!1===i||h!==r||'"'!==f&&"'"!==f||"="!==e.charAt(h-1)){if(/\s|\n|\t/.test(f)){if(e=e.replace(/\s|\n|\t/g," "),!1===i){if(-1===(d=a(e,h))){p(n.trim(e.slice(r,h))),i=!1,r=h+1
continue}h=d-1
continue}if(-1===(d=l(e,h-1))){p(i,c(n.trim(e.slice(r,h)))),i=!1,r=h+1
continue}}}else{if(-1===(d=e.indexOf(f,h+1)))break
p(i,n.trim(e.slice(r+1,d))),i=!1,r=(h=d)+1}else i=e.slice(r,h),r=h+1}return r<e.length&&(!1===i?p(e.slice(r)):p(i,c(n.trim(e.slice(r))))),n.trim(o.join(" "))}},2081:e=>{e.exports={indexOf:function(e,t){var r,n
if(Array.prototype.indexOf)return e.indexOf(t)
for(r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},forEach:function(e,t,r){var n,o
if(Array.prototype.forEach)return e.forEach(t,r)
for(n=0,o=e.length;n<o;n++)t.call(r,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e)
return t?t.index:-1}}},7173:(e,t,r)=>{var n=r(8223).FilterCSS,o=r(9229),i=r(7794),s=i.parseTag,a=i.parseAttr,l=r(2081)
function c(e){return null==e}function u(e){(e=function(e){var t={}
for(var r in e)t[r]=e[r]
return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=o.onIgnoreTagStripAll),e.whiteList=e.whiteList||e.allowList||o.whiteList,e.onTag=e.onTag||o.onTag,e.onTagAttr=e.onTagAttr||o.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||o.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||o.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||o.safeAttrValue,e.escapeHtml=e.escapeHtml||o.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new n(e.css))}u.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,r=t.whiteList,n=t.onTag,i=t.onIgnoreTag,u=t.onTagAttr,p=t.onIgnoreTagAttr,h=t.safeAttrValue,d=t.escapeHtml,f=this.cssFilter
t.stripBlankChar&&(e=o.stripBlankChar(e)),t.allowCommentTag||(e=o.stripCommentTag(e))
var m=!1
t.stripIgnoreTagBody&&(m=o.StripTagBody(t.stripIgnoreTagBody,i),i=m.onIgnoreTag)
var g=s(e,(function(e,t,o,s,m){var g,v={sourcePosition:e,position:t,isClosing:m,isWhite:r.hasOwnProperty(o)}
if(!c(g=n(o,s,v)))return g
if(v.isWhite){if(v.isClosing)return"</"+o+">"
var y=function(e){var t=l.spaceIndex(e)
if(-1===t)return{html:"",closing:"/"===e[e.length-2]}
var r="/"===(e=l.trim(e.slice(t+1,-1)))[e.length-1]
return r&&(e=l.trim(e.slice(0,-1))),{html:e,closing:r}}(s),b=r[o],w=a(y.html,(function(e,t){var r,n=-1!==l.indexOf(b,e)
return c(r=u(o,e,t,n))?n?(t=h(o,e,t,f))?e+'="'+t+'"':e:c(r=p(o,e,t,n))?void 0:r:r}))
return s="<"+o,w&&(s+=" "+w),y.closing&&(s+=" /"),s+">"}return c(g=i(o,s,v))?d(s):g}),d)
return m&&(g=m.remove(g)),g},e.exports=u},8773:e=>{e.exports={nanoid:(e=21)=>{let t="",r=e
for(;r--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0]
return t},customAlphabet:(e,t)=>()=>{let r="",n=t
for(;n--;)r+=e[Math.random()*e.length|0]
return r}}}}])

//# sourceMappingURL=chunk.920.e582e790b4c869813698-c27b407226191e7ef37a8bb964f042d5e270f9ee0dc18935379dd65f63219605.map
//!

;
