import*as Ye from"three";import{Mesh as g1,BufferGeometry as lp,OrthographicCamera as ap,Float32BufferAttribute as ff,Color as i_,ShaderMaterial as Xg,UniformsUtils as p1,Vector2 as yh,WebGLRenderTarget as r_,RGBAFormat as u_,LinearFilter as E0,Clock as o_,EventDispatcher as s_,Uniform as c_,Box3 as h1,Vector3 as ru,REVISION as f_,Vector4 as mm,Matrix4 as y1,Line3 as d_,Sphere as m_,DataTextureLoader as v_,HalfFloatType as p0,FloatType as bg,DataUtils as h0,EquirectangularReflectionMapping as g_,Raycaster as p_,Camera as h_,Scene as y_,Quaternion as _h,Object3D as __,CanvasTexture as C_,ShaderChunk as om}from"three";function ip(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var xg={exports:{}},Le={};var Ch;function b_(){if(Ch)return Le;Ch=1;var d=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),U=Symbol.for("react.view_transition"),P=Symbol.iterator;function K(R){return R===null||typeof R!="object"?null:(R=P&&R[P]||R["@@iterator"],typeof R=="function"?R:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,A={};function C(R,ae,pe){this.props=R,this.context=ae,this.refs=A,this.updater=pe||J}C.prototype.isReactComponent={},C.prototype.setState=function(R,ae){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,ae,"setState")},C.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function O(){}O.prototype=C.prototype;function M(R,ae,pe){this.props=R,this.context=ae,this.refs=A,this.updater=pe||J}var H=M.prototype=new O;H.constructor=M,j(H,C.prototype),H.isPureReactComponent=!0;var L=Array.isArray;function Z(){}var W={H:null,A:null,T:null,S:null},de=Object.prototype.hasOwnProperty;function me(R,ae,pe){var _e=pe.ref;return{$$typeof:d,type:R,key:ae,ref:_e!==void 0?_e:null,props:pe}}function Te(R,ae){return me(R.type,ae,R.props)}function xe(R){return typeof R=="object"&&R!==null&&R.$$typeof===d}function et(R){var ae={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(pe){return ae[pe]})}var tt=/\/+/g;function Oe(R,ae){return typeof R=="object"&&R!==null&&R.key!=null?et(""+R.key):ae.toString(36)}function ce(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(Z,Z):(R.status="pending",R.then(function(ae){R.status==="pending"&&(R.status="fulfilled",R.value=ae)},function(ae){R.status==="pending"&&(R.status="rejected",R.reason=ae)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function Ce(R,ae,pe,_e,Pe){var Xe=typeof R;(Xe==="undefined"||Xe==="boolean")&&(R=null);var Qe=!1;if(R===null)Qe=!0;else switch(Xe){case"bigint":case"string":case"number":Qe=!0;break;case"object":switch(R.$$typeof){case d:case s:Qe=!0;break;case z:return Qe=R._init,Ce(Qe(R._payload),ae,pe,_e,Pe)}}if(Qe)return Pe=Pe(R),Qe=_e===""?"."+Oe(R,0):_e,L(Pe)?(pe="",Qe!=null&&(pe=Qe.replace(tt,"$&/")+"/"),Ce(Pe,ae,pe,"",function(Ln){return Ln})):Pe!=null&&(xe(Pe)&&(Pe=Te(Pe,pe+(Pe.key==null||R&&R.key===Pe.key?"":(""+Pe.key).replace(tt,"$&/")+"/")+Qe)),ae.push(Pe)),1;Qe=0;var ye=_e===""?".":_e+":";if(L(R))for(var we=0;we<R.length;we++)_e=R[we],Xe=ye+Oe(_e,we),Qe+=Ce(_e,ae,pe,Xe,Pe);else if(we=K(R),typeof we=="function")for(R=we.call(R),we=0;!(_e=R.next()).done;)_e=_e.value,Xe=ye+Oe(_e,we++),Qe+=Ce(_e,ae,pe,Xe,Pe);else if(Xe==="object"){if(typeof R.then=="function")return Ce(ce(R),ae,pe,_e,Pe);throw ae=String(R),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Qe}function be(R,ae,pe){if(R==null)return R;var _e=[],Pe=0;return Ce(R,_e,"","",function(Xe){return ae.call(pe,Xe,Pe++)}),_e}function Je(R){if(R._status===-1){var ae=R._result,pe=ae();pe.then(function(_e){(R._status===0||R._status===-1)&&(R._status=1,R._result=_e,pe.status===void 0&&(pe.status="fulfilled",pe.value=_e))},function(_e){(R._status===0||R._status===-1)&&(R._status=2,R._result=_e,pe.status===void 0&&(pe.status="rejected",pe.reason=_e))}),R._status===-1&&(R._status=0,R._result=pe)}if(R._status===1)return R._result.default;throw R._result}var nt=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function hl(R){var ae=W.T,pe={};pe.types=ae!==null?ae.types:null,W.T=pe;try{var _e=R(),Pe=W.S;Pe!==null&&Pe(pe,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(Z,nt)}catch(Xe){nt(Xe)}finally{ae!==null&&pe.types!==null&&(ae.types=pe.types),W.T=ae}}function Bl(R){var ae=W.T;if(ae!==null){var pe=ae.types;pe===null?ae.types=[R]:pe.indexOf(R)===-1&&pe.push(R)}else hl(Bl.bind(null,R))}var an={map:be,forEach:function(R,ae,pe){be(R,function(){ae.apply(this,arguments)},pe)},count:function(R){var ae=0;return be(R,function(){ae++}),ae},toArray:function(R){return be(R,function(ae){return ae})||[]},only:function(R){if(!xe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Le.Activity=S,Le.Children=an,Le.Component=C,Le.Fragment=v,Le.Profiler=h,Le.PureComponent=M,Le.StrictMode=g,Le.Suspense=x,Le.ViewTransition=U,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Le.__COMPILER_RUNTIME={__proto__:null,c:function(R){return W.H.useMemoCache(R)}},Le.addTransitionType=Bl,Le.cache=function(R){return function(){return R.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(R,ae,pe){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var _e=j({},R.props),Pe=R.key;if(ae!=null)for(Xe in ae.key!==void 0&&(Pe=""+ae.key),ae)!de.call(ae,Xe)||Xe==="key"||Xe==="__self"||Xe==="__source"||Xe==="ref"&&ae.ref===void 0||(_e[Xe]=ae[Xe]);var Xe=arguments.length-2;if(Xe===1)_e.children=pe;else if(1<Xe){for(var Qe=Array(Xe),ye=0;ye<Xe;ye++)Qe[ye]=arguments[ye+2];_e.children=Qe}return me(R.type,Pe,_e)},Le.createContext=function(R){return R={$$typeof:E,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:b,_context:R},R},Le.createElement=function(R,ae,pe){var _e,Pe={},Xe=null;if(ae!=null)for(_e in ae.key!==void 0&&(Xe=""+ae.key),ae)de.call(ae,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Pe[_e]=ae[_e]);var Qe=arguments.length-2;if(Qe===1)Pe.children=pe;else if(1<Qe){for(var ye=Array(Qe),we=0;we<Qe;we++)ye[we]=arguments[we+2];Pe.children=ye}if(R&&R.defaultProps)for(_e in Qe=R.defaultProps,Qe)Pe[_e]===void 0&&(Pe[_e]=Qe[_e]);return me(R,Xe,Pe)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(R){return{$$typeof:T,render:R}},Le.isValidElement=xe,Le.lazy=function(R){return{$$typeof:z,_payload:{_status:-1,_result:R},_init:Je}},Le.memo=function(R,ae){return{$$typeof:w,type:R,compare:ae===void 0?null:ae}},Le.startTransition=hl,Le.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Le.use=function(R){return W.H.use(R)},Le.useActionState=function(R,ae,pe){return W.H.useActionState(R,ae,pe)},Le.useCallback=function(R,ae){return W.H.useCallback(R,ae)},Le.useContext=function(R){return W.H.useContext(R)},Le.useDebugValue=function(){},Le.useDeferredValue=function(R,ae){return W.H.useDeferredValue(R,ae)},Le.useEffect=function(R,ae){return W.H.useEffect(R,ae)},Le.useEffectEvent=function(R){return W.H.useEffectEvent(R)},Le.useId=function(){return W.H.useId()},Le.useImperativeHandle=function(R,ae,pe){return W.H.useImperativeHandle(R,ae,pe)},Le.useInsertionEffect=function(R,ae){return W.H.useInsertionEffect(R,ae)},Le.useLayoutEffect=function(R,ae){return W.H.useLayoutEffect(R,ae)},Le.useMemo=function(R,ae){return W.H.useMemo(R,ae)},Le.useOptimistic=function(R,ae){return W.H.useOptimistic(R,ae)},Le.useReducer=function(R,ae,pe){return W.H.useReducer(R,ae,pe)},Le.useRef=function(R){return W.H.useRef(R)},Le.useState=function(R){return W.H.useState(R)},Le.useSyncExternalStore=function(R,ae,pe){return W.H.useSyncExternalStore(R,ae,pe)},Le.useTransition=function(){return W.H.useTransition()},Le.version="19.3.1",Le}var bh;function vm(){return bh||(bh=1,xg.exports=b_()),xg.exports}var ue=vm();const At=ip(ue);var Sg={exports:{}},Wd={},zg={exports:{}},Eg={};var xh;function x_(){return xh||(xh=1,(function(d){function s(ce,Ce){var be=ce.length;ce.push(Ce);e:for(;0<be;){var Je=be-1>>>1,nt=ce[Je];if(0<h(nt,Ce))ce[Je]=Ce,ce[be]=nt,be=Je;else break e}}function v(ce){return ce.length===0?null:ce[0]}function g(ce){if(ce.length===0)return null;var Ce=ce[0],be=ce.pop();if(be!==Ce){ce[0]=be;e:for(var Je=0,nt=ce.length,hl=nt>>>1;Je<hl;){var Bl=2*(Je+1)-1,an=ce[Bl],R=Bl+1,ae=ce[R];if(0>h(an,be))R<nt&&0>h(ae,an)?(ce[Je]=ae,ce[R]=be,Je=R):(ce[Je]=an,ce[Bl]=be,Je=Bl);else if(R<nt&&0>h(ae,be))ce[Je]=ae,ce[R]=be,Je=R;else break e}}return Ce}function h(ce,Ce){var be=ce.sortIndex-Ce.sortIndex;return be!==0?be:ce.id-Ce.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;d.unstable_now=function(){return b.now()}}else{var E=Date,T=E.now();d.unstable_now=function(){return E.now()-T}}var x=[],w=[],z=1,S=null,U=3,P=!1,K=!1,J=!1,j=!1,A=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function M(ce){for(var Ce=v(w);Ce!==null;){if(Ce.callback===null)g(w);else if(Ce.startTime<=ce)g(w),Ce.sortIndex=Ce.expirationTime,s(x,Ce);else break;Ce=v(w)}}function H(ce){if(J=!1,M(ce),!K)if(v(x)!==null)K=!0,L||(L=!0,xe());else{var Ce=v(w);Ce!==null&&Oe(H,Ce.startTime-ce)}}var L=!1,Z=-1,W=5,de=-1;function me(){return j?!0:!(d.unstable_now()-de<W)}function Te(){if(j=!1,L){var ce=d.unstable_now();de=ce;var Ce=!0;try{e:{K=!1,J&&(J=!1,C(Z),Z=-1),P=!0;var be=U;try{t:{for(M(ce),S=v(x);S!==null&&!(S.expirationTime>ce&&me());){var Je=S.callback;if(typeof Je=="function"){S.callback=null,U=S.priorityLevel;var nt=Je(S.expirationTime<=ce);if(ce=d.unstable_now(),typeof nt=="function"){S.callback=nt,M(ce),Ce=!0;break t}S===v(x)&&g(x),M(ce)}else g(x);S=v(x)}if(S!==null)Ce=!0;else{var hl=v(w);hl!==null&&Oe(H,hl.startTime-ce),Ce=!1}}break e}finally{S=null,U=be,P=!1}Ce=void 0}}finally{Ce?xe():L=!1}}}var xe;if(typeof O=="function")xe=function(){O(Te)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,tt=et.port2;et.port1.onmessage=Te,xe=function(){tt.postMessage(null)}}else xe=function(){A(Te,0)};function Oe(ce,Ce){Z=A(function(){ce(d.unstable_now())},Ce)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(ce){ce.callback=null},d.unstable_forceFrameRate=function(ce){0>ce||125<ce?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<ce?Math.floor(1e3/ce):5},d.unstable_getCurrentPriorityLevel=function(){return U},d.unstable_next=function(ce){switch(U){case 1:case 2:case 3:var Ce=3;break;default:Ce=U}var be=U;U=Ce;try{return ce()}finally{U=be}},d.unstable_requestPaint=function(){j=!0},d.unstable_runWithPriority=function(ce,Ce){switch(ce){case 1:case 2:case 3:case 4:case 5:break;default:ce=3}var be=U;U=ce;try{return Ce()}finally{U=be}},d.unstable_scheduleCallback=function(ce,Ce,be){var Je=d.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?Je+be:Je):be=Je,ce){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=be+nt,ce={id:z++,callback:Ce,priorityLevel:ce,startTime:be,expirationTime:nt,sortIndex:-1},be>Je?(ce.sortIndex=be,s(w,ce),v(x)===null&&ce===v(w)&&(J?(C(Z),Z=-1):J=!0,Oe(H,be-Je))):(ce.sortIndex=nt,s(x,ce),K||P||(K=!0,L||(L=!0,xe()))),ce},d.unstable_shouldYield=me,d.unstable_wrapCallback=function(ce){var Ce=U;return function(){var be=U;U=Ce;try{return ce.apply(this,arguments)}finally{U=be}}}})(Eg)),Eg}var Sh;function _1(){return Sh||(Sh=1,zg.exports=x_()),zg.exports}var Tg={exports:{}},gl={};var zh;function S_(){if(zh)return gl;zh=1;var d=vm();function s(z){var S="https://react.dev/errors/"+z;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)S+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+z+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(){}var g={d:{f:v,r:function(){throw Error(s(522))},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},h=Symbol.for("react.portal"),b=Symbol.for("react.recoverable"),E=Symbol.for("react.optimistic_key");function T(z,S,U){var P=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:P==null?null:P===E?E:""+P,children:z,containerInfo:S,implementation:U}}var x=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function w(z,S){if(z==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,gl.browser=function(z){return{$$typeof:b,_reason:z}},gl.createPortal=function(z,S){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(s(299));return T(z,S,null,U)},gl.flushSync=function(z){var S=x.T,U=g.p;try{if(x.T=null,g.p=2,z)return z()}finally{x.T=S,g.p=U,g.d.f()}},gl.preconnect=function(z,S){typeof z=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,g.d.C(z,S))},gl.prefetchDNS=function(z){typeof z=="string"&&g.d.D(z)},gl.preinit=function(z,S){if(typeof z=="string"&&S&&typeof S.as=="string"){var U=S.as,P=w(U,S.crossOrigin),K=typeof S.integrity=="string"?S.integrity:void 0,J=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;U==="style"?g.d.S(z,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:P,integrity:K,fetchPriority:J}):U==="script"&&g.d.X(z,{crossOrigin:P,integrity:K,fetchPriority:J,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},gl.preinitModule=function(z,S){if(typeof z=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var U=w(S.as,S.crossOrigin);g.d.M(z,{crossOrigin:U,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&g.d.M(z)},gl.preload=function(z,S){if(typeof z=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var U=S.as,P=w(U,S.crossOrigin);g.d.L(z,U,{crossOrigin:P,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},gl.preloadModule=function(z,S){if(typeof z=="string")if(S){var U=w(S.as,S.crossOrigin);g.d.m(z,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:U,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else g.d.m(z)},gl.requestFormReset=function(z){g.d.r(z)},gl.unstable_batchedUpdates=function(z,S){return z(S)},gl.useFormState=function(z,S,U){return x.H.useFormState(z,S,U)},gl.useFormStatus=function(){return x.H.useHostTransitionStatus()},gl.version="19.3.1",gl}var Eh;function z_(){if(Eh)return Tg.exports;Eh=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(s){console.error(s)}}return d(),Tg.exports=S_(),Tg.exports}var Th;function E_(){if(Th)return Wd;Th=1;var d=_1(),s=vm(),v=z_();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(b(e)!==e)throw Error(g(188))}function w(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,i=t;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return x(u),e;if(c===i)return x(u),t;c=c.sibling}throw Error(g(188))}if(a.return!==i.return)a=u,i=c;else{for(var p=!1,_=u.child;_;){if(_===a){p=!0,a=u,i=c;break}if(_===i){p=!0,i=u,a=c;break}_=_.sibling}if(!p){for(_=c.child;_;){if(_===a){p=!0,a=c,i=u;break}if(_===i){p=!0,i=c,a=u;break}_=_.sibling}if(!p)throw Error(g(189))}}if(a.alternate!==i)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}function S(e,t,a,i,u,c){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,i,u,c)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&S(e.child,t,a,i,u,c))return!0;e=e.sibling}return!1}function U(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function P(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function K(e){var t=[null,null],a=U(e);return a===null||J(t,e,a.child,{foundSelf:!1}),t}function J(e,t,a,i){for(;a!==null;){if(a===t)i.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(i.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&J(e,t,a.child,i))return!0;a=a.sibling}return!1}function j(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(g(559))}}var A=null,C=null;function O(e,t,a){return e===a?!0:e===t?(A=e,!0):!1}function M(e,t,a){return e===a?(C=e,!1):e===t?(C!==null&&(A=e),!0):!1}function H(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,t,a){for(var i=0,u=e;u;u=a(u))i++;u=0;for(var c=t;c;c=a(c))u++;for(;0<i-u;)e=a(e),i--;for(;0<u-i;)t=a(t),u--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var Z=Object.assign,W=Symbol.for("react.element"),de=Symbol.for("react.transitional.element"),me=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),tt=Symbol.for("react.consumer"),Oe=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),hl=Symbol.for("react.activity"),Bl=Symbol.for("react.legacy_hidden"),an=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),ae=Symbol.for("react.recoverable"),pe=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Te:return"Fragment";case et:return"Profiler";case xe:return"StrictMode";case Ce:return"Suspense";case be:return"SuspenseList";case hl:return"Activity";case R:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case me:return"Portal";case Oe:return e.displayName||"Context";case tt:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var Qe=Array.isArray,ye=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we=v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ln={pending:!1,data:null,method:null,action:null},Os=[],li=-1;function ll(e){return{current:e}}function Gt(e){0>li||(e.current=Os[li],Os[li]=null,li--)}function Ct(e,t){li++,Os[li]=e.current,e.current=t}var yl=ll(null),Xl=ll(null),qn=ll(null),Ar=ll(null);function uu(e,t){switch(Ct(qn,t),Ct(Xl,e),Ct(yl,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ap(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ap(t),e=wp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Gt(yl),Ct(yl,e)}function Kl(){Gt(yl),Gt(Xl),Gt(qn)}function ou(e){var t=e.memoizedState;t!==null&&(Jc._currentValue=t.memoizedState,Ct(Ar,e)),t=yl.current;var a=wp(t,e.type);t!==a&&(Ct(Xl,e),Ct(yl,a))}function za(e){Xl.current===e&&(Gt(yl),Gt(Xl)),Ar.current===e&&(Gt(Ar),Jc._currentValue=Ln)}var pn,vo;function ai(e){if(pn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);pn=t&&t[1]||"",vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pn+e+vo}var go=!1;function wr(e,t){if(!e||go)return"";go=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(fe){var F=fe}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(fe){F=fe}ne=!1;try{var G=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ne=!0,new e}finally{ne&&(G!==void 0?Object.defineProperty(e.prototype,"props",G):delete e.prototype.props)}}}else{try{throw Error()}catch(fe){F=fe}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(fe){if(fe&&F&&typeof fe.stack=="string")return[fe.stack,F.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],_=c[1];if(p&&_){var D=p.split(`
`),Y=_.split(`
`);for(u=i=0;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;for(;u<Y.length&&!Y[u].includes("DetermineComponentFrameRoot");)u++;if(i===D.length||u===Y.length)for(i=D.length-1,u=Y.length-1;1<=i&&0<=u&&D[i]!==Y[u];)u--;for(;1<=i&&0<=u;i--,u--)if(D[i]!==Y[u]){if(i!==1||u!==1)do if(i--,u--,0>u||D[i]!==Y[u]){var X=`
`+D[i].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=i&&0<=u);break}}}finally{go=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ai(a):""}function _m(e,t){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==t&&t!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return ai("Activity");case 30:return ai("ViewTransition");default:return""}}function Cm(e){try{var t="",a=null;do t+=_m(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var su=Object.prototype.hasOwnProperty,Jl=d.unstable_scheduleCallback,Yi=d.unstable_cancelCallback,bm=d.unstable_shouldYield,xm=d.unstable_requestPaint,_l=d.unstable_now,Sm=d.unstable_getCurrentPriorityLevel,df=d.unstable_ImmediatePriority,zm=d.unstable_UserBlockingPriority,cu=d.unstable_NormalPriority,P0=d.unstable_LowPriority,mf=d.unstable_IdlePriority,H0=d.log,vf=d.unstable_setDisableYieldValue,qi=null,Cl=null;function da(e){if(typeof H0=="function"&&vf(e),Cl&&typeof Cl.setStrictMode=="function")try{Cl.setStrictMode(qi,e)}catch{}}var bl=Math.clz32?Math.clz32:Tm,Em=Math.log,Dr=Math.LN2;function Tm(e){return e>>>=0,e===0?32:31-(Em(e)/Dr|0)|0}var po=256,Nr=262144,ma=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ho(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var u=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var _=i&134217727;return _!==0?(i=_&~c,i!==0?u=Ea(i):(p&=_,p!==0?u=Ea(p):a||(a=_&~e,a!==0&&(u=Ea(a))))):(_=i&~c,_!==0?u=Ea(_):p!==0?u=Ea(p):a||(a=i&~e,a!==0&&(u=Ea(a)))),u===0?0:t!==0&&t!==u&&(t&c)===0&&(c=u&-u,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:u}function ki(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yo(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-bl(a),u=1<<i;t|=e[i],a&=~u}return t}function gf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gi(){var e=ma;return ma<<=1,(ma&62914560)===0&&(ma=4194304),e}function Rs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Qi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pf(e,t,a,i,u,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var _=e.entanglements,D=e.expirationTimes,Y=e.hiddenUpdates;for(a=p&~a;0<a;){var X=31-bl(a),ne=1<<X;_[X]=0,D[X]=-1;var F=Y[X];if(F!==null)for(Y[X]=null,X=0;X<F.length;X++){var G=F[X];G!==null&&(G.lane&=-536870913)}a&=~ne}i!==0&&Bs(e,i,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function Bs(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bl(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ii(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-bl(a),u=1<<i;u&t|e[i]&t&&(e[i]|=t),a&=~u}}function ri(e,t){var a=t&-t;return a=(a&42)!==0?1:Or(a),(a&(e.suspendedLanes|t))!==0?0:a}function Or(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fu(){var e=we.p;return e!==0?e:(e=window.event,e===void 0?32:fh(e.type))}function du(e,t){var a=we.p;try{return we.p=e,t()}finally{we.p=a}}var Ta=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Ta,al="__reactProps$"+Ta,Ii="__reactContainer$"+Ta,Ls="__reactEvents$"+Ta,Zi="__reactListeners$"+Ta,hf="__reactHandles$"+Ta,yf="__reactResources$"+Ta,$l="__reactMarker$"+Ta,kn="__reactLoad$"+Ta;function Xi(e){delete e[Tn],delete e[al],delete e[Zi],delete e[hf]}function ui(e){var t;if(t=e[Tn])return t;for(var a=e.parentNode;a;){if(t=a[Ii]||a[Tn]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Gp(e);e!==null;){if(a=e[Tn])return a;e=Gp(e)}return t}e=a,a=e.parentNode}return null}function oi(e){if(e=e[Tn]||e[Ii]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Ki(e){var t=e[yf];return t||(t=e[yf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[$l]=!0}function _f(e){e[kn]=void 0}var Cf=new Set,Am={};function si(e,t){Ji(e,t),Ji(e+"Capture",t)}function Ji(e,t){for(Am[e]=t,e=0;e<t.length;e++)Cf.add(t[e])}var bf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},Xt={};function Ms(e){return su.call(Xt,e)?!0:su.call(Gn,e)?!1:bf.test(e)?Xt[e]=!0:(Gn[e]=!0,!1)}var $e=!1;function Co(){var e=$e;return $e=!1,e}function mu(e,t,a){if(Ms(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function Wl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function ea(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,i)}}function il(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Us(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){if(!e._valueTracker){var t=Us(e)?"checked":"value";e._valueTracker=wm(e,t,""+e[t])}}function xf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Us(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}var Dm=/[\n"\\]/g;function Ll(e){return e.replace(Dm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hs(e,t,a,i,u,c,p,_){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+il(t)):e.value!==""+il(t)&&(e.value=""+il(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?p==="number"&&e.value==t?js(e,il(e.value)):js(e,il(t)):a!=null?js(e,il(a)):i!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+il(_):e.removeAttribute("name")}function Fs(e,t,a,i,u,c,p,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ps(e);return}a=a!=null?""+il(a):"",t=t!=null?""+il(t):a,_||t===e.value||(e.value=t),e.defaultValue=t}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=_?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Ps(e)}function js(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function vu(e,t,a,i){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&i&&(e[a].defaultSelected=!0)}else{for(a=""+il(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Sf(e,t,a){if(t!=null&&(t=""+il(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+il(a):""}function zf(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(g(92));if(Qe(i)){if(1<i.length)throw Error(g(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=il(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ps(e)}function Rr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ef=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tf(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Ef.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Af(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",$e=!0);for(var u in t)i=t[u],t.hasOwnProperty(u)&&a[u]!==i&&(Tf(e,u,i),$e=!0)}else for(var c in t)t.hasOwnProperty(c)&&Tf(e,c,t[c])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Om=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ys(e){return Om.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function va(){}var $i=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,fi=null;function wf(e){var t=oi(e);if(t&&(e=t.stateNode)){var a=e[al]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ll(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var u=i[al]||null;if(!u)throw Error(g(90));Hs(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&xf(i)}break e;case"textarea":Sf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&vu(e,!!a.multiple,t,!1)}}}var bo=!1;function Rm(e,t,a){if(bo)return e(t,a);bo=!0;try{var i=e(t);return i}finally{if(bo=!1,(ci!==null||fi!==null)&&(je(),ci&&(t=ci,e=fi,fi=ci=null,wf(t),e)))for(t=0;t<e.length;t++)wf(e[t])}}function gu(e,t){var a=e.stateNode;if(a===null)return null;var i=a[al]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=!1;if(Aa)try{var pu={};Object.defineProperty(pu,"passive",{get:function(){ks=!0}}),window.addEventListener("test",pu,pu),window.removeEventListener("test",pu,pu)}catch{ks=!1}var di=null,xo=null,So=null;function Df(){if(So)return So;var e,t=xo,a=t.length,i,u="value"in di?di.value:di.textContent,c=u.length;for(e=0;e<a&&t[e]===u[e];e++);var p=a-e;for(i=1;i<=p&&t[a-i]===u[c-i];i++);return So=u.slice(e,1<i?1-i:void 0)}function hu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function Nf(){return!1}function Qn(e){function t(a,i,u,c,p){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(a=e[_],this[_]=a?a(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?zo:Nf,this.isPropagationStopped=Nf,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Qn(wa),yu=Z({},wa,{view:0,detail:0}),F0=Qn(yu),Of,Gs,mi,_u=Z({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(Of=e.screenX-mi.screenX,Gs=e.screenY-mi.screenY):Gs=Of=0,mi=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),To=Qn(_u),Bm=Z({},_u,{dataTransfer:0}),Lm=Qn(Bm),Rf=Z({},yu,{relatedTarget:0}),Qs=Qn(Rf),Mm=Z({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Br=Qn(Mm),Is=Z({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Um=Qn(Is),Bf=Z({},wa,{data:0}),Lf=Qn(Bf),Pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hn[e])?!!t[e]:!1}function Zs(){return Hm}var Fm=Z({},yu,{key:function(e){if(e.key){var t=Pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?hu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jm=Qn(Fm),Ao=Z({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=Qn(Ao),Xs=Z({},wa,{submitter:0}),Vm=Qn(Xs),V0=Z({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Cu=Qn(V0),Uf=Z({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=Qn(Uf),qm=Z({},_u,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),km=Qn(qm),Pf=Z({},wa,{newState:0,oldState:0,source:0}),Hf=Qn(Pf),Gm=[9,13,27,32],wo=Aa&&"CompositionEvent"in window,Wi=null;Aa&&"documentMode"in document&&(Wi=document.documentMode);var Ks=Aa&&"TextEvent"in window&&!Wi,Qm=Aa&&(!wo||Wi&&8<Wi&&11>=Wi),Ff=" ",jf=!1;function Do(e,t){switch(e){case"keyup":return Gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Im(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(jf=!0,Ff);case"textInput":return e=t.data,e===Ff&&jf?null:e;default:return null}}function vi(e,t){if(er)return e==="compositionend"||!wo&&Do(e,t)?(e=Df(),So=xo=di=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qm&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function Yf(e,t,a,i){ci?fi?fi.push(i):fi=[i]:ci=i,t=a0(t,"onChange"),0<t.length&&(a=new Eo("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var rl=null,tr=null;function Xm(e){ft(e,0)}function bu(e){var t=Ot(e);if(xf(t))return e}function qf(e,t){if(e==="change")return t}var kf=!1;if(Aa){var No;if(Aa){var Oo="oninput"in document;if(!Oo){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),Oo=typeof Gf.oninput=="function"}No=Oo}else No=!1;kf=No&&(!document.documentMode||9<document.documentMode)}function Ro(){rl&&(rl.detachEvent("onpropertychange",xu),tr=rl=null)}function xu(e){if(e.propertyName==="value"&&bu(tr)){var t=[];Yf(t,tr,e,qs(e)),Rm(Xm,t)}}function Rt(e,t,a){e==="focusin"?(Ro(),rl=t,tr=a,rl.attachEvent("onpropertychange",xu)):e==="focusout"&&Ro()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(tr)}function q0(e,t){if(e==="click")return bu(t)}function Km(e,t){if(e==="input"||e==="change")return bu(t)}function Bo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:Bo;function Su(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!su.call(t,u)||!un(e[u],t[u]))return!1}return!0}function $s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function An(e,t){var a=ga(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ga(a)}}function Qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$s(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=$s(e.document)}return t}function Ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lo=Aa&&"documentMode"in document&&11>=document.documentMode,nr=null,Mo=null,Lr=null,Uo=!1;function If(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uo||nr==null||nr!==$s(i)||(i=nr,"selectionStart"in i&&Ws(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Lr&&Su(Lr,i)||(Lr=i,i=a0(Mo,"onSelect"),0<i.length&&(t=new Eo("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=nr)))}function gi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var lr={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionrun:gi("Transition","TransitionRun"),transitionstart:gi("Transition","TransitionStart"),transitioncancel:gi("Transition","TransitionCancel"),transitionend:gi("Transition","TransitionEnd")},Eu={},ec={};Aa&&(ec=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ar(e){if(Eu[e])return Eu[e];if(!lr[e])return e;var t=lr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ec)return Eu[e]=t[a];return e}var Zf=ar("animationend"),Xf=ar("animationiteration"),Kf=ar("animationstart"),Tu=ar("transitionrun"),Jm=ar("transitionstart"),Da=ar("transitioncancel"),Po=ar("transitionend"),tc=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function Ml(e,t){tc.set(e,t),si(t,[e])}var $m=0;function pa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Et.identifierPrefix;var a=$m++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function Fo(e){if(e==null||typeof e=="string")return e;var t=null,a=sa;if(a!==null)for(var i=0;i<a.length;i++){var u=e[a[i]];if(u!=null){if(u==="none")return"none";t=t==null?u:t+(" "+u)}}return t??e.default}function Na(e,t){return e=Fo(e),t=Fo(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ul=[],wu=0,Du=0;function jo(){for(var e=wu,t=Du=wu=0;t<e;){var a=Ul[t];Ul[t++]=null;var i=Ul[t];Ul[t++]=null;var u=Ul[t];Ul[t++]=null;var c=Ul[t];if(Ul[t++]=null,i!==null&&u!==null){var p=i.pending;p===null?u.next=u:(u.next=p.next,p.next=u),i.pending=u}c!==0&&Jf(a,u,c)}}function Nu(e,t,a,i){Ul[wu++]=e,Ul[wu++]=t,Ul[wu++]=a,Ul[wu++]=i,Du|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function nc(e,t,a,i){return Nu(e,t,a,i),In(e)}function pi(e,t){return Nu(e,null,null,t),In(e)}function Jf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var u=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&t!==null&&(u=31-bl(a),e=c.hiddenUpdates,i=e[u],i===null?e[u]=[t]:i.push(t),t.lane=a|536870912),c):null}function In(e){if(50<hs)throw hs=0,$r=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ir={};function Wm(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ul(e,t,a,i){return new Wm(e,t,a,i)}function $f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var a=e.alternate;return a===null?(a=ul(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wn(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vo(e,t,a,i,u,c){var p=0;if(i=e,typeof i=="function")$f(i)&&(p=1);else if(typeof i=="string")p=Qy(e,a,yl.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case hl:return e=ul(31,a,t,u),e.elementType=hl,e.lanes=c,e;case Te:return Kt(a.children,u,c,t);case xe:p=8,u|=24;break;case et:return e=ul(12,a,t,u|2),e.elementType=et,e.lanes=c,e;case Ce:return e=ul(13,a,t,u),e.elementType=Ce,e.lanes=c,e;case be:return e=ul(19,a,t,u),e.elementType=be,e.lanes=c,e;case Bl:case R:return e=u|32,e=ul(30,a,t,e),e.elementType=R,e.lanes=c,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Oe:p=10;break e;case tt:p=9;break e;case ce:p=11;break e;case Je:p=14;break e;case nt:p=16,i=null;break e}p=29,a=Error(g(130,e===null?"null":typeof e,"")),i=null}return t=ul(p,a,t,u),t.elementType=e,t.type=i,t.lanes=c,t}function Kt(e,t,a,i){return e=ul(7,e,i,t),e.lanes=a,e}function lc(e,t,a){return e=ul(6,e,null,t),e.lanes=a,e}function Mr(e){var t=ul(18,null,null,0);return t.stateNode=e,t}function ac(e,t,a){return t=ul(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ha=new WeakMap;function yn(e,t){if(typeof e=="object"&&e!==null){var a=ha.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Cm(t)},ha.set(e,t),t)}return{value:e,source:t,stack:Cm(t)}}var Zn=[],rr=0,Ou=null,Xn=0,Pl=[],Mn=0,na=null,Un=1,ya="";function Oa(e,t){Zn[rr++]=Xn,Zn[rr++]=Ou,Ou=e,Xn=t}function Ru(e,t,a){Pl[Mn++]=Un,Pl[Mn++]=ya,Pl[Mn++]=na,na=e;var i=Un;e=ya;var u=32-bl(i)-1;i&=~(1<<u),a+=1;var c=32-bl(t)+u;if(30<c){var p=u-u%5;c=(i&(1<<p)-1).toString(32),i>>=p,u-=p,Un=1<<32-bl(t)+u|a<<u|i,ya=c+e}else Un=1<<c|a<<u|i,ya=e}function Yo(e){e.return!==null&&(Oa(e,1),Ru(e,1,0))}function Bu(e){for(;e===Ou;)Ou=Zn[--rr],Zn[rr]=null,Xn=Zn[--rr],Zn[rr]=null;for(;e===na;)na=Pl[--Mn],Pl[Mn]=null,ya=Pl[--Mn],Pl[Mn]=null,Un=Pl[--Mn],Pl[Mn]=null}function Wf(e,t){Pl[Mn++]=Un,Pl[Mn++]=ya,Pl[Mn++]=na,Un=t.id,ya=t.overflow,na=e}var on=null,bt=null,He=!1,hi=null,xl=!1,ol=Error(g(519));function yi(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw la(yn(t,e)),ol}function Ur(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Tn]=e,t[al]=i,a){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(a=0;a<Dt.length;a++)Se(Dt[a],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Fs(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),zf(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Ep(t.textContent,a)?(i.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),i.onScroll!=null&&Se("scroll",t),i.onScrollEnd!=null&&Se("scrollend",t),i.onClick!=null&&(t.onclick=va),t=!0):t=!1,t||yi(e,!0)}function Pn(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:xl=!1;return;case 27:case 3:xl=!0;return;default:on=on.return}}function Pr(e){if(e!==on)return!1;if(!He)return Pn(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||tg(e.type,e.memoizedProps)),a=!a),a&&bt&&yi(e),Pn(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));bt=kp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));bt=kp(e)}else t===27?(t=bt,ao(e.type)?(e=cg,cg=null,bt=e):bt=t):bt=on?ei(e.stateNode.nextSibling):null;return!0}function ur(){bt=on=null,He=!1}function ed(){var e=hi;return e!==null&&(Lt===null?Lt=e:Lt.push.apply(Lt,e),hi=null),e}function la(e){hi===null?hi=[e]:hi.push(e)}var ic=ll(null),_i=null,Sl=null;function Ci(e,t,a){Ct(ic,t._currentValue),t._currentValue=a}function Ra(e){e._currentValue=ic.current,Gt(ic)}function qo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function rc(e,t,a,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var p=u.child;c=c.firstContext;e:for(;c!==null;){var _=c;c=u;for(var D=0;D<t.length;D++)if(_.context===t[D]){c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),qo(c.return,a,e),i||(p=null);break e}c=_.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(g(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),qo(p,a,e),p=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,p=u.alternate,p!==null&&(p.lanes|=a),qo(u.return,a,e),p=u.child,p=p!==null?p.sibling:null):p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Ba(e,t,a,i){e=null;for(var u=t,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(g(387));if(p=p.memoizedProps,p!==null){var _=u.type;un(u.pendingProps.value,p.value)||(e!==null?e.push(_):e=[_])}}else if(u===Ar.current){if(p=u.alternate,p===null)throw Error(g(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Jc):e=[Jc])}u=u.return}return e!==null&&rc(t,e,a,i),t.flags|=262144,e!==null}function Lu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hr(e){_i=e,Sl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return td(_i,e)}function uc(e,t){return _i===null&&Hr(e),td(e,t)}function td(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Sl===null){if(e===null)throw Error(g(308));Sl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sl=Sl.next=t;return a}var ev=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Mu=d.unstable_scheduleCallback,oc=d.unstable_NormalPriority,Wt={$$typeof:Oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new ev,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&Mu(oc,function(){e.controller.abort()})}function tv(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];a.indexOf(i)===-1&&a.push(i)}}}var Go=null;function nd(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Fr=null,Qo=0,or=0,La=null;function ld(e,t){if(Fr===null){var a=Fr=[];Qo=0,or=Wa(),La={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Qo++,t.then(ad,ad),t}function ad(){if(--Qo===0&&(Go=null,Fr!==null)){La!==null&&(La.status="fulfilled");var e=Fr;Fr=null,or=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dt(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var cc=ye.S;ye.S=function(e,t){if(Sn=_l(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ld(e,t),Go!==null)for(var a=l;a!==null;)tv(a,Go),a=a.next;if(a=e.types,a!==null){for(var i=l;i!==null;)tv(i,a),i=i.next;if(or!==0){i=Go,i===null&&(i=Go=[]);for(var u=0;u<a.length;u++){var c=a[u];i.indexOf(c)===-1&&i.push(c)}}}cc!==null&&cc(e,t)};var jr=ll(null);function fc(){var e=jr.current;return e!==null?e:vt.pooledCache}function dc(e,t){t===null?Ct(jr,jr.current):Ct(jr,t.pool)}function nv(){var e=fc();return e===null?null:{parent:Wt._currentValue,pool:e}}var Uu=Error(g(460)),id=Error(g(474)),Pu=Error(g(542)),aa={then:function(){}};function rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Io(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(va,va),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mc(e),e===void 0&&!("reason"in t)?Error(g(600)):e;default:if(typeof t.status=="string")t.then(va,va);else{if(e=vt,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=i}},function(i){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,mc(e),e}throw bi=t,Uu}}function Hl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(bi=a,Uu):a}}var bi=null;function ud(){if(bi===null)throw Error(g(459));var e=bi;return bi=null,e}function mc(e){if(e===Uu||e===Pu)throw Error(g(483))}var Hu=null,Fu=0;function Zo(e){var t=Fu;return Fu+=1,Hu===null&&(Hu=[]),Io(Hu,e,t)}function xi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xo(e,t){throw t.$$typeof===W?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function od(e){function t(V,B){if(e){var k=V.deletions;k===null?(V.deletions=[B],V.flags|=16):k.push(B)}}function a(V,B){if(!e)return null;for(;B!==null;)t(V,B),B=B.sibling;return null}function i(V){for(var B=new Map;V!==null;)V.key===null?B.set(V.index,V):B.set(V.key,V),V=V.sibling;return B}function u(V,B){return V=ta(V,B),V.index=0,V.sibling=null,V}function c(V,B,k){return V.index=k,e?(k=V.alternate,k!==null?(k=k.index,k<B?(V.flags|=2,B):k):(V.flags|=134217730,B)):(V.flags|=1048576,B)}function p(V){return e&&V.alternate===null&&(V.flags|=134217730),V}function _(V,B,k,ee){return B===null||B.tag!==6?(B=lc(k,V.mode,ee),B.return=V,B):(B=u(B,k),B.return=V,B)}function D(V,B,k,ee){var ge=k.type;return ge===Te?(V=X(V,B,k.props.children,ee,k.key),xi(V,k),V):B!==null&&(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===nt&&Hl(ge)===B.type)?(B=u(B,k.props),xi(B,k),B.return=V,B):(B=Vo(k.type,k.key,k.props,null,V.mode,ee),xi(B,k),B.return=V,B)}function Y(V,B,k,ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==k.containerInfo||B.stateNode.implementation!==k.implementation?(B=ac(k,V.mode,ee),B.return=V,B):(B=u(B,k.children||[]),B.return=V,B)}function X(V,B,k,ee,ge){return B===null||B.tag!==7?(B=Kt(k,V.mode,ee,ge),B.return=V,B):(B=u(B,k),B.return=V,B)}function ne(V,B,k){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=lc(""+B,V.mode,k),B.return=V,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case de:return k=Vo(B.type,B.key,B.props,null,V.mode,k),xi(k,B),k.return=V,k;case me:return B=ac(B,V.mode,k),B.return=V,B;case nt:return B=Hl(B),ne(V,B,k)}if(Qe(B)||_e(B))return B=Kt(B,V.mode,k,null),B.return=V,B;if(typeof B.then=="function")return ne(V,Zo(B),k);if(B.$$typeof===Oe)return ne(V,uc(V,B),k);Xo(V,B)}return null}function F(V,B,k,ee){var ge=B!==null?B.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ge!==null?null:_(V,B,""+k,ee);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case de:return k.key===ge?D(V,B,k,ee):null;case me:return k.key===ge?Y(V,B,k,ee):null;case nt:return k=Hl(k),F(V,B,k,ee)}if(Qe(k)||_e(k))return ge!==null?null:X(V,B,k,ee,null);if(typeof k.then=="function")return F(V,B,Zo(k),ee);if(k.$$typeof===Oe)return F(V,B,uc(V,k),ee);Xo(V,k)}return null}function G(V,B,k,ee,ge){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return V=V.get(k)||null,_(B,V,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case de:return V=V.get(ee.key===null?k:ee.key)||null,D(B,V,ee,ge);case me:return V=V.get(ee.key===null?k:ee.key)||null,Y(B,V,ee,ge);case nt:return ee=Hl(ee),G(V,B,k,ee,ge)}if(Qe(ee)||_e(ee))return V=V.get(k)||null,X(B,V,ee,ge,null);if(typeof ee.then=="function")return G(V,B,k,Zo(ee),ge);if(ee.$$typeof===Oe)return G(V,B,k,uc(B,ee),ge);Xo(B,ee)}return null}function fe(V,B,k,ee){for(var ge=null,rt=null,Ee=B,Ne=B=0,Rn=null;Ee!==null&&Ne<k.length;Ne++){Ee.index>Ne?(Rn=Ee,Ee=null):Rn=Ee.sibling;var gt=F(V,Ee,k[Ne],ee);if(gt===null){Ee===null&&(Ee=Rn);break}e&&Ee&&gt.alternate===null&&t(V,Ee),B=c(gt,B,Ne),rt===null?ge=gt:rt.sibling=gt,rt=gt,Ee=Rn}if(Ne===k.length)return a(V,Ee),He&&Oa(V,Ne),ge;if(Ee===null){for(;Ne<k.length;Ne++)Ee=ne(V,k[Ne],ee),Ee!==null&&(B=c(Ee,B,Ne),rt===null?ge=Ee:rt.sibling=Ee,rt=Ee);return He&&Oa(V,Ne),ge}for(Ee=i(Ee);Ne<k.length;Ne++)Rn=G(Ee,V,Ne,k[Ne],ee),Rn!==null&&(e&&(gt=Rn.alternate,gt!==null&&Ee.delete(gt.key===null?Ne:gt.key)),B=c(Rn,B,Ne),rt===null?ge=Rn:rt.sibling=Rn,rt=Rn);return e&&Ee.forEach(function(so){return t(V,so)}),He&&Oa(V,Ne),ge}function he(V,B,k,ee){if(k==null)throw Error(g(151));for(var ge=null,rt=null,Ee=B,Ne=B=0,Rn=null,gt=k.next();Ee!==null&&!gt.done;Ne++,gt=k.next()){Ee.index>Ne?(Rn=Ee,Ee=null):Rn=Ee.sibling;var so=F(V,Ee,gt.value,ee);if(so===null){Ee===null&&(Ee=Rn);break}e&&Ee&&so.alternate===null&&t(V,Ee),B=c(so,B,Ne),rt===null?ge=so:rt.sibling=so,rt=so,Ee=Rn}if(gt.done)return a(V,Ee),He&&Oa(V,Ne),ge;if(Ee===null){for(;!gt.done;Ne++,gt=k.next())gt=ne(V,gt.value,ee),gt!==null&&(B=c(gt,B,Ne),rt===null?ge=gt:rt.sibling=gt,rt=gt);return He&&Oa(V,Ne),ge}for(Ee=i(Ee);!gt.done;Ne++,gt=k.next())gt=G(Ee,V,Ne,gt.value,ee),gt!==null&&(e&&(Rn=gt.alternate,Rn!==null&&Ee.delete(Rn.key===null?Ne:Rn.key)),B=c(gt,B,Ne),rt===null?ge=gt:rt.sibling=gt,rt=gt);return e&&Ee.forEach(function(a_){return t(V,a_)}),He&&Oa(V,Ne),ge}function Ve(V,B,k,ee){if(typeof k=="object"&&k!==null&&k.type===Te&&k.key===null&&k.props.ref===void 0&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case de:e:{for(var ge=k.key;B!==null;){if(B.key===ge){if(ge=k.type,ge===Te){if(B.tag===7){a(V,B.sibling),ee=u(B,k.props.children),xi(ee,k),ee.return=V,V=ee;break e}}else if(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===nt&&Hl(ge)===B.type){a(V,B.sibling),ee=u(B,k.props),xi(ee,k),ee.return=V,V=ee;break e}a(V,B);break}else t(V,B);B=B.sibling}k.type===Te?(ee=Kt(k.props.children,V.mode,ee,k.key),xi(ee,k),ee.return=V,V=ee):(ee=Vo(k.type,k.key,k.props,null,V.mode,ee),xi(ee,k),ee.return=V,V=ee)}return p(V);case me:e:{for(ge=k.key;B!==null;){if(B.key===ge)if(B.tag===4&&B.stateNode.containerInfo===k.containerInfo&&B.stateNode.implementation===k.implementation){a(V,B.sibling),ee=u(B,k.children||[]),ee.return=V,V=ee;break e}else{a(V,B);break}else t(V,B);B=B.sibling}ee=ac(k,V.mode,ee),ee.return=V,V=ee}return p(V);case nt:return k=Hl(k),Ve(V,B,k,ee)}if(Qe(k))return fe(V,B,k,ee);if(_e(k)){if(ge=_e(k),typeof ge!="function")throw Error(g(150));return k=ge.call(k),he(V,B,k,ee)}if(typeof k.then=="function")return Ve(V,B,Zo(k),ee);if(k.$$typeof===Oe)return Ve(V,B,uc(V,k),ee);Xo(V,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,B!==null&&B.tag===6?(a(V,B.sibling),ee=u(B,k),ee.return=V,V=ee):(a(V,B),ee=lc(k,V.mode,ee),ee.return=V,V=ee),p(V)):a(V,B)}return function(V,B,k,ee){try{Fu=0;var ge=Ve(V,B,k,ee);return Hu=null,ge}catch(Ee){if(Ee===Uu||Ee===Pu)throw Ee;var rt=ul(29,Ee,null,V.mode);return rt.lanes=ee,rt.return=V,rt}}}var Si=od(!0),Ie=od(!1),sr=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(lt&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,t=In(e),Jf(e,null,a),t}return Nu(e,i,t,a),In(e)}function Ma(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ii(e,a)}}function fr(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?u=c=t:c=c.next=t}else u=c=t;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var vc=!1;function Vr(){if(vc){var e=La;if(e!==null)throw e}}function ju(e,t,a,i){vc=!1;var u=e.updateQueue;sr=!1;var c=u.firstBaseUpdate,p=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var D=_,Y=D.next;D.next=null,p===null?c=Y:p.next=Y,p=D;var X=e.alternate;X!==null&&(X=X.updateQueue,_=X.lastBaseUpdate,_!==p&&(_===null?X.firstBaseUpdate=Y:_.next=Y,X.lastBaseUpdate=D))}if(c!==null){var ne=u.baseState;p=0,X=Y=D=null,_=c;do{var F=_.lane&-536870913,G=F!==_.lane;if(G?(qe&F)===F:(i&F)===F){F!==0&&F===or&&(vc=!0),X!==null&&(X=X.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var fe=e,he=_;F=t;var Ve=a;switch(he.tag){case 1:if(fe=he.payload,typeof fe=="function"){ne=fe.call(Ve,ne,F);break e}ne=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=he.payload,F=typeof fe=="function"?fe.call(Ve,ne,F):fe,F==null)break e;ne=Z({},ne,F);break e;case 2:sr=!0}}F=_.callback,F!==null&&(e.flags|=64,G&&(e.flags|=8192),G=u.callbacks,G===null?u.callbacks=[F]:G.push(F))}else G={lane:F,tag:_.tag,payload:_.payload,callback:_.callback,next:null},X===null?(Y=X=G,D=ne):X=X.next=G,p|=F;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;G=_,_=G.next,G.next=null,u.lastBaseUpdate=G,u.shared.pending=null}}while(!0);X===null&&(D=ne),u.baseState=D,u.firstBaseUpdate=Y,u.lastBaseUpdate=X,c===null&&(u.shared.lanes=0),Xa|=p,e.lanes=p,e.memoizedState=ne}}function Ua(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function gc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ua(a[e],t)}var Pa=ll(null),Vu=ll(0);function pc(e,t){e=Za,Ct(Vu,e),Ct(Pa,t),Za=e|t.baseLanes}function Ha(){Ct(Vu,Za),Ct(Pa,Pa.current)}function Jo(){Za=Vu.current,Gt(Pa),Gt(Vu)}var Fn=ll(null),Kn=null;function Fa(e){var t=e.alternate;Ct(sn,sn.current&1),Ct(Fn,e),Kn===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Kn=e)}function sd(e){Ct(sn,sn.current),Ct(Fn,e),Kn===null&&(Kn=e)}function cd(e){e.tag===22?(Ct(sn,sn.current),Ct(Fn,e),Kn===null&&(Kn=e)):zi()}function zi(){Ct(sn,sn.current),Ct(Fn,Fn.current)}function Fl(e){Gt(Fn),Kn===e&&(Kn=null),Gt(sn)}var sn=ll(0);function ze(e,t){Ct(Fn,Fn.current),Ct(sn,t)}function fd(e){Gt(sn),Gt(Fn),Kn===e&&(Kn=null)}function hc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||og(a)||sg(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=0,Re=null,xt=null,cn=null,yc=!1,Yu=!1,Yr=!1,qu=0,ku=0,Ei=null,lv=0;function Jt(){throw Error(g(321))}function dd(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!un(e[a],t[a]))return!1;return!0}function Ti(e,t,a,i,u,c){return ja=c,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ye.H=e===null||e.memoizedState===null?Sd:Ac,Yr=!1,c=a(i,u),Yr=!1,Yu&&(c=Ft(t,a,i,u)),Ca(e),c}function Ca(e){ye.H=as;var t=xt!==null&&xt.next!==null;if(ja=0,cn=xt=Re=null,yc=!1,ku=0,Ei=null,t)throw Error(g(300));e===null||fn||(e=e.dependencies,e!==null&&Lu(e)&&(fn=!0))}function Ft(e,t,a,i){Re=e;var u=0;do{if(Yu&&(Ei=null),ku=0,Yu=!1,25<=u)throw Error(g(301));if(u+=1,cn=xt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}ye.H=zd,c=t(a,i)}while(Yu);return c}function Va(){var e=ye.H,t=e.useState()[0];return t=typeof t.then=="function"?$o(t):t,e=e.useState()[0],(xt!==null?xt.memoizedState:null)!==e&&(Re.flags|=1024),t}function _n(){var e=qu!==0;return qu=0,e}function md(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function vd(e){if(yc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yc=!1}ja=0,cn=xt=Re=null,Yu=!1,ku=qu=0,Ei=null}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Re.memoizedState=cn=e:cn=cn.next=e,cn}function yt(){if(xt===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=xt.next;var t=cn===null?Re.memoizedState:cn.next;if(t!==null)cn=t,xt=e;else{if(e===null)throw Re.alternate===null?Error(g(467)):Error(g(310));xt=e,e={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},cn===null?Re.memoizedState=cn=e:cn=cn.next=e}return cn}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var t=ku;return ku+=1,Ei===null&&(Ei=[]),e=Io(Ei,e,t),t=Re,(cn===null?t.memoizedState:cn.next)===null&&(t=t.alternate,ye.H=t===null||t.memoizedState===null?Sd:Ac),e}function Cc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===ae)return;if(e.$$typeof===Oe)return Hn(e)}throw Error(g(438,String(e)))}function gd(e){var t=null,a=Re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=Re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_c(),Re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=an;return t.index++,a}function Ai(e,t){return typeof t=="function"?t(e):t}function Gu(e){var t=yt();return bc(t,xt,e)}function bc(e,t,a){var i=e.queue;if(i===null)throw Error(g(311));i.lastRenderedReducer=a;var u=e.baseQueue,c=i.pending;if(c!==null){if(u!==null){var p=u.next;u.next=c.next,c.next=p}t.baseQueue=u=c,i.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{t=u.next;var _=p=null,D=null,Y=t,X=!1;do{var ne=Y.lane&-536870913;if(ne!==Y.lane?(qe&ne)===ne:(ja&ne)===ne){var F=Y.revertLane;if(F===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),ne===or&&(X=!0);else if((ja&F)===F){Y=Y.next,F===or&&(X=!0);continue}else ne={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},D===null?(_=D=ne,p=c):D=D.next=ne,Re.lanes|=F,Xa|=F;ne=Y.action,Yr&&a(c,ne),c=Y.hasEagerState?Y.eagerState:a(c,ne)}else F={lane:ne,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},D===null?(_=D=F,p=c):D=D.next=F,Re.lanes|=ne,Xa|=ne;Y=Y.next}while(Y!==null&&Y!==t);if(D===null?p=c:D.next=_,!un(c,e.memoizedState)&&(fn=!0,X&&(a=La,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=D,i.lastRenderedState=c}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pd(e){var t=yt(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var i=a.dispatch,u=a.pending,c=t.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do c=e(c,p.action),p=p.next;while(p!==u);un(c,t.memoizedState)||(fn=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,i]}function hd(e,t,a){var i=Re,u=yt(),c=He;if(c){if(a===void 0)throw Error(g(407));a=a()}else a=t();var p=!un((xt||u).memoizedState,a);if(p&&(u.memoizedState=a,fn=!0),u=u.queue,zc(qr.bind(null,i,u,e),[e]),e=u.getSnapshot!==t||p||cn!==null&&(cn.memoizedState.tag&1)!==0,Qu(e?9:8,{destroy:void 0},iv.bind(null,i,u,a,t),null),e){if(i.flags|=2048,vt===null)throw Error(g(349));c||(ja&127)!==0||av(i,t,a)}return a}function av(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Re.updateQueue,t===null?(t=_c(),Re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function iv(e,t,a,i){t.value=a,t.getSnapshot=i,Ya(t)&&rv(e)}function qr(e,t,a){return a(function(){Ya(t)&&rv(e)})}function Ya(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!un(e,a)}catch{return!0}}function rv(e){var t=pi(e,2);t!==null&&Vn(t,e,2)}function yd(e){var t=mt();if(typeof e=="function"){var a=e;if(e=a(),Yr){da(!0);try{a()}finally{da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t}function uv(e,t,a,i){return e.baseState=a,bc(e,xt,typeof i=="function"?i:Ai)}function Wo(e,t,a,i,u){if(ls(e))throw Error(g(485));if(e=t.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};ye.T!==null?a(!0):c.isTransition=!1,i(c),a=t.pending,a===null?(c.next=t.pending=c,ov(t,c)):(c.next=a.next,t.pending=a.next=c)}}function ov(e,t){var a=t.action,i=t.payload,u=e.state;if(t.isTransition){var c=ye.T,p={};p.types=c!==null?c.types:null,ye.T=p;try{var _=a(u,i),D=ye.S;D!==null&&D(p,_),sv(e,t,_)}catch(Y){kr(e,t,Y)}finally{c!==null&&p.types!==null&&(c.types=p.types),ye.T=c}}else try{c=a(u,i),sv(e,t,c)}catch(Y){kr(e,t,Y)}}function sv(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){cv(e,t,i)},function(i){return kr(e,t,i)}):cv(e,t,a)}function cv(e,t,a){t.status="fulfilled",t.value=a,fv(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,ov(e,a)))}function kr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,fv(t),t=t.next;while(t!==i)}e.action=null}function fv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dv(e,t){return t}function mv(e,t){if(He){var a=vt.formState;if(a!==null){e:{var i=Re;if(He){if(bt){t:{for(var u=bt,c=xl;u.nodeType!==8;){if(!c){u=null;break t}if(u=ei(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){bt=ei(u.nextSibling),i=u.data==="F!";break e}}yi(i)}i=!1}i&&(t=a[0])}}return a=mt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dv,lastRenderedState:t},a.queue=i,a=Ov.bind(null,Re,i),i.dispatch=a,i=yd(!1),c=Tc.bind(null,Re,!1,i.queue),i=mt(),u={state:t,dispatch:null,action:e,pending:null},i.queue=u,a=Wo.bind(null,Re,u,c,a),u.dispatch=a,i.memoizedState=e,[t,a,!1]}function vv(e){var t=yt();return gv(t,xt,e)}function gv(e,t,a){if(t=bc(e,t,dv)[0],e=Gu(Ai)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=$o(t)}catch(p){throw p===Uu?Pu:p}else i=t;t=yt();var u=t.queue,c=u.dispatch;return a!==t.memoizedState&&(Re.flags|=2048,Qu(9,{destroy:void 0},k0.bind(null,u,a),null)),[i,c,e]}function k0(e,t){e.action=t}function pv(e){var t=yt(),a=xt;if(a!==null)return gv(t,a,e);yt(),t=t.memoizedState,a=yt();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Qu(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=Re.updateQueue,t===null&&(t=_c(),Re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function hv(){return yt().memoizedState}function xc(e,t,a,i){var u=mt();Re.flags|=e,u.memoizedState=Qu(1|t,{destroy:void 0},a,i===void 0?null:i)}function Sc(e,t,a,i){var u=yt();i=i===void 0?null:i;var c=u.memoizedState.inst;xt!==null&&i!==null&&dd(i,xt.memoizedState.deps)?u.memoizedState=Qu(t,c,a,i):(Re.flags|=e,u.memoizedState=Qu(1|t,c,a,i))}function yv(e,t){xc(8390656,8,e,t)}function zc(e,t){Sc(2048,8,e,t)}function G0(e){Re.flags|=4;var t=Re.updateQueue;if(t===null)t=_c(),Re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function _v(e){var t=yt().memoizedState;return G0({ref:t,nextImpl:e}),function(){if((lt&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function Cv(e,t){return Sc(4,2,e,t)}function bv(e,t){return Sc(4,4,e,t)}function _d(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xv(e,t,a){a=a!=null?a.concat([e]):null,Sc(4,4,_d.bind(null,t,e),a)}function Cd(){}function Sv(e,t){var a=yt();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&dd(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function zv(e,t){var a=yt();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&dd(t,i[1]))return i[0];if(i=e(),Yr){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[i,t],i}function es(e,t,a){return a===void 0||(ja&1073741824)!==0&&(qe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ys(),Re.lanes|=e,Xa|=e,a)}function ts(e,t,a,i){return un(a,t)?a:Pa.current!==null?(e=es(e,a,i),un(e,t)||(fn=!0),e):(ja&106)===0||(ja&1073741824)!==0&&(qe&261930)===0?(fn=!0,e.memoizedState=a):(e=ys(),Re.lanes|=e,Xa|=e,t)}function Ev(e,t,a,i,u){var c=we.p;we.p=c!==0&&8>c?c:8;var p=ye.T,_={};_.types=p!==null?p.types:null,ye.T=_,Tc(e,!1,t,a);try{var D=u(),Y=ye.S;if(Y!==null&&Y(_,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var X=dt(D,i);ns(e,t,X,nl(e))}else ns(e,t,i,nl(e))}catch(ne){ns(e,t,{then:function(){},status:"rejected",reason:ne},nl())}finally{we.p=c,p!==null&&_.types!==null&&(p.types=_.types),ye.T=p}}function Q0(){}function bd(e,t,a,i){if(e.tag!==5)throw Error(g(476));var u=Tv(e).queue;Ev(e,u,t,Ln,a===null?Q0:function(){return Av(e),a(i)})}function Tv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ln,baseState:Ln,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:Ln},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Av(e){var t=Tv(e);t.next===null&&(t=e.alternate.memoizedState),ns(e,t.next.queue,{},nl())}function Ec(){return Hn(Jc)}function wv(){return yt().memoizedState}function Dv(){return yt().memoizedState}function I0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=nl();e=cr(a);var i=_a(t,e,a);i!==null&&(Vn(i,t,a),Ma(i,t,a)),t={cache:sc()},e.payload=t;return}t=t.return}}function Nv(e,t,a){var i=nl();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ls(e)?Rv(t,a):(a=nc(e,t,a,i),a!==null&&(Vn(a,e,i),xd(a,t,i)))}function Ov(e,t,a){var i=nl();ns(e,t,a,i)}function ns(e,t,a,i){var u={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ls(e))Rv(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,_=c(p,a);if(u.hasEagerState=!0,u.eagerState=_,un(_,p))return Nu(e,t,u,0),vt===null&&jo(),!1}catch{}if(a=nc(e,t,u,i),a!==null)return Vn(a,e,i),xd(a,t,i),!0}return!1}function Tc(e,t,a,i){if(i={lane:2,revertLane:Wa(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ls(e)){if(t)throw Error(g(479))}else t=nc(e,a,i,2),t!==null&&Vn(t,e,2)}function ls(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Rv(e,t){Yu=yc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xd(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ii(e,a)}}var as={readContext:Hn,use:Cc,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt,useEffectEvent:Jt},Sd={readContext:Hn,use:Cc,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:Hn,useEffect:yv,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,xc(4194308,4,_d.bind(null,t,e),a)},useLayoutEffect:function(e,t){return xc(4194308,4,e,t)},useInsertionEffect:function(e,t){xc(4,2,e,t)},useMemo:function(e,t){var a=mt();t=t===void 0?null:t;var i=e();if(Yr){da(!0);try{e()}finally{da(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=mt();if(a!==void 0){var u=a(t);if(Yr){da(!0);try{a(t)}finally{da(!1)}}}else u=t;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=Nv.bind(null,Re,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:function(e){e=yd(e);var t=e.queue,a=Ov.bind(null,Re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Cd,useDeferredValue:function(e,t){var a=mt();return es(a,e,t)},useTransition:function(){var e=yd(!1);return e=Ev.bind(null,Re,e.queue,!0,!1),mt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=Re,u=mt();if(He){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),vt===null)throw Error(g(349));(qe&127)!==0||av(i,t,a)}u.memoizedState=a;var c={value:a,getSnapshot:t};return u.queue=c,yv(qr.bind(null,i,c,e),[e]),i.flags|=2048,Qu(9,{destroy:void 0},iv.bind(null,i,c,a,t),null),a},useId:function(){var e=mt(),t=vt.identifierPrefix;if(He){var a=ya,i=Un;a=(i&~(1<<32-bl(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=qu++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=lv++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ec,useFormState:mv,useActionState:mv,useOptimistic:function(e){var t=mt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Tc.bind(null,Re,!0,a),a.dispatch=t,[e,t]},useMemoCache:gd,useCacheRefresh:function(){return mt().memoizedState=I0.bind(null,Re)},useEffectEvent:function(e){var t=mt(),a={impl:e};return t.memoizedState=a,function(){if((lt&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},Ac={readContext:Hn,use:Cc,useCallback:Sv,useContext:Hn,useEffect:zc,useImperativeHandle:xv,useInsertionEffect:Cv,useLayoutEffect:bv,useMemo:zv,useReducer:Gu,useRef:hv,useState:function(){return Gu(Ai)},useDebugValue:Cd,useDeferredValue:function(e,t){var a=yt();return ts(a,xt.memoizedState,e,t)},useTransition:function(){var e=Gu(Ai)[0],t=yt().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:hd,useId:wv,useHostTransitionStatus:Ec,useFormState:vv,useActionState:vv,useOptimistic:function(e,t){var a=yt();return uv(a,xt,e,t)},useMemoCache:gd,useCacheRefresh:Dv,useEffectEvent:_v},zd={readContext:Hn,use:Cc,useCallback:Sv,useContext:Hn,useEffect:zc,useImperativeHandle:xv,useInsertionEffect:Cv,useLayoutEffect:bv,useMemo:zv,useReducer:pd,useRef:hv,useState:function(){return pd(Ai)},useDebugValue:Cd,useDeferredValue:function(e,t){var a=yt();return xt===null?es(a,e,t):ts(a,xt.memoizedState,e,t)},useTransition:function(){var e=pd(Ai)[0],t=yt().memoizedState;return[typeof e=="boolean"?e:$o(e),t]},useSyncExternalStore:hd,useId:wv,useHostTransitionStatus:Ec,useFormState:pv,useActionState:pv,useOptimistic:function(e,t){var a=yt();return xt!==null?uv(a,xt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gd,useCacheRefresh:Dv,useEffectEvent:_v};function Ed(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Td={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=nl(),u=cr(i);u.payload=t,a!=null&&(u.callback=a),t=_a(e,u,i),t!==null&&(Vn(t,e,i),Ma(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=nl(),u=cr(i);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=_a(e,u,i),t!==null&&(Vn(t,e,i),Ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=nl(),i=cr(a);i.tag=2,t!=null&&(i.callback=t),t=_a(e,i,a),t!==null&&(Vn(t,e,a),Ma(t,e,a))}};function Bv(e,t,a,i,u,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):t.prototype&&t.prototype.isPureReactComponent?!Su(a,i)||!Su(u,c):!0}function Lv(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Td.enqueueReplaceState(t,t.state,null)}function dr(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=Z({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Mv(e){Au(e)}function Uv(e){console.error(e)}function Pv(e){Au(e)}function wc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Hv(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ad(e,t,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(e,t)},a}function Fv(e){return e=cr(e),e.tag=3,e}function jv(e,t,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=i.value;e.payload=function(){return u(c)},e.callback=function(){Hv(t,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Hv(t,a,i),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})})}function Z0(e,t,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Ba(t,a,u,!0),a=Fn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Kn===null?ca():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===aa?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Sr(e,i,u)),!1;case 22:return a.flags|=65536,i===aa?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Sr(e,i,u)),!1}throw Error(g(435,a.tag))}return Sr(e,i,u),ca(),!1}if(He)return t=Fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,i!==ol&&(e=Error(g(422),{cause:i}),la(yn(e,a)))):(i!==ol&&(t=Error(g(423),{cause:i}),la(yn(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=yn(i,a),u=Ad(e.stateNode,i,u),fr(e,u),$t!==4&&($t=2)),!1;var c=Error(g(520),{cause:i});if(c=yn(c,a),Cr===null?Cr=[c]:Cr.push(c),$t!==4&&($t=2),t===null)return!0;i=yn(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ad(a.stateNode,i,e),fr(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ka===null||!Ka.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fv(u),jv(u,e,a,i),fr(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var wd=Error(g(461)),fn=!1;function Cn(e,t,a,i){t.child=e===null?Ie(t,null,a,i):Si(t,e.child,a,i)}function Vv(e,t,a,i,u){a=a.render;var c=t.ref;if("ref"in i){var p={};for(var _ in i)_!=="ref"&&(p[_]=i[_])}else p=i;return Hr(t),i=Ti(e,t,a,p,c,u),_=_n(),e!==null&&!fn?(md(e,t,u),wi(e,t,u)):(He&&_&&Yo(t),t.flags|=1,Cn(e,t,i,u),t.child)}function Yv(e,t,a,i,u){if(e===null){var c=a.type;return typeof c=="function"&&!$f(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,qv(e,t,c,i,u)):(e=Vo(a.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Bc(e,u)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Su,a(p,i)&&e.ref===t.ref)return wi(e,t,u)}return t.flags|=1,e=ta(c,i),e.ref=t.ref,e.return=t,t.child=e}function qv(e,t,a,i,u){if(e!==null){var c=e.memoizedProps;if(Su(c,i)&&e.ref===t.ref)if(fn=!1,t.pendingProps=i=c,Bc(e,u))(e.flags&131072)!==0&&(fn=!0);else return t.lanes=e.lanes,wi(e,t,u)}return Dd(e,t,a,i,u)}function kv(e,t,a,i){var u=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;i=u&~c}else i=0,t.child=null;return Gv(e,t,c,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(t,c!==null?c.cachePool:null),c!==null?pc(t,c):Ha(),cd(t);else return i=t.lanes=536870912,Gv(e,t,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(dc(t,c.cachePool),pc(t,c),zi(),t.memoizedState=null):(e!==null&&dc(t,null),Ha(),zi());return Cn(e,t,u,a),t.child}function is(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gv(e,t,a,i,u){var c=fc();return c=c===null?null:{parent:Wt._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&dc(t,null),Ha(),cd(t),e!==null&&Ba(e,t,i,!0),t.childLanes=u,null}function Dc(e,t){return t=Gr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qv(e,t,a){return Si(t,e.child,null,a),e=Dc(t,t.pendingProps),e.flags|=2,Fl(t),t.memoizedState=null,e}function X0(e,t,a){var i=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(i.mode==="hidden")return e=Dc(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},is(null,e);if(sd(t),(e=bt)?(e=qp(e,xl),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Un,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,on=t,bt=null)):e=null,e===null)throw yi(t);return t.lanes=536870912,null}return Dc(t,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(sd(t),u)if(t.flags&256)t.flags&=-257,t=Qv(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(fn||Ba(e,t,a,!1),u=(a&e.childLanes)!==0,fn||u){if(Pa.current===null){if(i=vt,i!==null&&(p=ri(i,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,pi(e,p),Vn(i,e,p),wd;ca()}t=Qv(e,t,a)}else e=c.treeContext,bt=ei(p.nextSibling),on=t,He=!0,hi=null,xl=!1,e!==null&&Wf(t,e),t=Dc(t,i),t.flags|=134221824;return t}return e=ta(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Iu(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Dd(e,t,a,i,u){return Hr(t),a=Ti(e,t,a,i,void 0,u),i=_n(),e!==null&&!fn?(md(e,t,u),wi(e,t,u)):(He&&i&&Yo(t),t.flags|=1,Cn(e,t,a,u),t.child)}function Iv(e,t,a,i,u,c){return Hr(t),t.updateQueue=null,a=Ft(t,i,a,u),Ca(e),i=_n(),e!==null&&!fn?(md(e,t,c),wi(e,t,c)):(He&&i&&Yo(t),t.flags|=1,Cn(e,t,a,c),t.child)}function Zv(e,t,a,i,u){if(Hr(t),t.stateNode===null){var c=ir,p=a.contextType;typeof p=="object"&&p!==null&&(c=Hn(p)),c=new a(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Td,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},sl(t),p=a.contextType,c.context=typeof p=="object"&&p!==null?Hn(p):ir,c.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Ed(t,a,p,i),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Td.enqueueReplaceState(c,c.state,null),ju(t,i,c,u),Vr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var _=t.memoizedProps,D=dr(a,_);c.props=D;var Y=c.context,X=a.contextType;p=ir,typeof X=="object"&&X!==null&&(p=Hn(X));var ne=a.getDerivedStateFromProps;X=typeof ne=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,X||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||Y!==p)&&Lv(t,c,i,p),sr=!1;var F=t.memoizedState;c.state=F,ju(t,i,c,u),Vr(),Y=t.memoizedState,_||F!==Y||sr?(typeof ne=="function"&&(Ed(t,a,ne,i),Y=t.memoizedState),(D=sr||Bv(t,a,D,i,F,Y,p))?(X||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=Y),c.props=i,c.state=Y,c.context=p,i=D):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Ko(e,t),p=t.memoizedProps,X=dr(a,p),c.props=X,ne=t.pendingProps,F=c.context,Y=a.contextType,D=ir,typeof Y=="object"&&Y!==null&&(D=Hn(Y)),_=a.getDerivedStateFromProps,(Y=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==ne||F!==D)&&Lv(t,c,i,D),sr=!1,F=t.memoizedState,c.state=F,ju(t,i,c,u),Vr();var G=t.memoizedState;p!==ne||F!==G||sr||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof _=="function"&&(Ed(t,a,_,i),G=t.memoizedState),(X=sr||Bv(t,a,X,i,F,G,D)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,G,D),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,G,D)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=G),c.props=i,c.state=G,c.context=D,i=X):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Iu(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=Si(t,e.child,null,u),t.child=Si(t,null,a,u)):Cn(e,t,a,u),t.memoizedState=c.state,e=t.child):e=wi(e,t,u),e}function Xv(e,t,a,i){return ur(),t.flags|=256,Cn(e,t,a,i),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nd(e){return{baseLanes:e,cachePool:nv()}}function Od(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ml),e}function jl(e,t,a){var i=t.pendingProps,u=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),p&&(u=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(u?Fa(t):zi(),(e=bt)?(e=qp(e,xl),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:Un,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=Mr(e),a.return=t,t.child=a,on=t,bt=null)):e=null,e===null)throw yi(t);return sg(e)?t.lanes=32:t.lanes=536870912,null}return c=i.children,i=i.fallback,u?(zi(),u=t.mode,c=Gr({mode:"hidden",children:c},u),i=Kt(i,u,a,null),c.return=t,i.return=t,c.sibling=i,t.child=c,i=t.child,i.memoizedState=Nd(a),i.childLanes=Od(e,p,a),t.memoizedState=Nc,is(null,i)):(Fa(t),Oc(t,c))}var _=e.memoizedState;if(_!==null){var D=_.dehydrated;if(D!==null)return Kv(e,t,c,p,i,D,_,a)}return u?(zi(),u=i.fallback,c=t.mode,_=e.child,D=_.sibling,i=ta(_,{mode:"hidden",children:i.children}),i.subtreeFlags=_.subtreeFlags&1206910976,D!==null?u=ta(D,u):(u=Kt(u,c,a,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,is(null,i),i=t.child,u=e.child.memoizedState,u===null?u=Nd(a):(c=u.cachePool,c!==null?(_=Wt._currentValue,c=c.parent!==_?{parent:_,pool:_}:c):c=nv(),u={baseLanes:u.baseLanes|a,cachePool:c}),i.memoizedState=u,i.childLanes=Od(e,p,a),t.memoizedState=Nc,is(e.child,i)):(Fa(t),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=a,t.memoizedState=null,a)}function Oc(e,t){return t=Gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gr(e,t){return e=ul(22,e,null,t),e.lanes=0,e}function rs(e,t,a){return Si(t,e.child,null,a),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kv(e,t,a,i,u,c,p,_){if(a)return t.flags&256?(Fa(t),t.flags&=-257,rs(e,t,_)):t.memoizedState!==null?(zi(),t.child=e.child,t.flags|=128,null):(zi(),c=u.fallback,p=t.mode,u=Gr({mode:"visible",children:u.children},p),c=Kt(c,p,_,null),c.flags|=2,u.return=t,c.return=t,u.sibling=c,t.child=u,Si(t,e.child,null,_),u=t.child,u.memoizedState=Nd(_),u.childLanes=Od(e,i,_),t.memoizedState=Nc,is(null,u));if(Fa(t),sg(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var D=i.dgst;return i=D,i!==""&&(u=Error(g(419)),u.stack="",u.digest=i,la({value:u,source:null,stack:null})),rs(e,t,_)}if(fn||Ba(e,t,_,!1),i=(_&e.childLanes)!==0,fn||i){if(Pa.current!==null)return rs(e,t,_);if(i=vt,i!==null&&(u=ri(i,_),u!==0&&u!==p.retryLane))throw p.retryLane=u,pi(e,u),Vn(i,e,u),wd;return og(c)||ca(),rs(e,t,_)}return og(c)?(t.flags|=192,t.child=e.child,null):(e=p.treeContext,bt=ei(c.nextSibling),on=t,He=!0,hi=null,xl=!1,e!==null&&Wf(t,e),t=Oc(t,u.children),t.flags|=134221824,t)}function Rd(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),qo(e.return,t,a)}function Jv(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&hc(a)===null&&(t=e),e=e.sibling}return t}function Zu(e,t,a,i,u,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=u,p.treeForkCount=c)}function us(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function Rc(e,t,a){var i=t.pendingProps,u=i.revealOrder,c=i.tail;i=i.children;var p=sn.current;if(t.flags&128)return ze(t,p),null;var _=(p&2)!==0;if(_?(p=p&1|2,t.flags|=128):p&=1,ze(t,p),u==="backwards"&&e!==null?(us(e),Cn(e,t,i,a),us(e)):Cn(e,t,i,a),i=He?Xn:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,a,t);else if(e.tag===19)Rd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=Jv(t.child),a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null,us(t)),Zu(t,!0,u,null,c,i);break;case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&hc(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zu(t,!0,a,null,c,i);break;case"together":Zu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:a=Jv(t.child),a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),Zu(t,!1,u,a,c,i)}return t.child}function $v(e,t,a){var i=t.pendingProps;return Ci(t,t.type,i.value),Cn(e,t,i.children,a),t.child}function wi(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ba(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=ta(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function K0(e,t,a){switch(t.tag){case 3:uu(t,t.stateNode.containerInfo),Ci(t,Wt,e.memoizedState.cache),ur();break;case 27:case 5:ou(t);break;case 4:uu(t,t.stateNode.containerInfo);break;case 10:Ci(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,sd(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Fa(t),t.flags|=128,null;i=Ba(e,t,a,!1);var u=t.child.childLanes;return i||(a&u)!==0?jl(e,t,a):(Fa(t),e=wi(e,t,a),e!==null?e.sibling:null)}Fa(t);break;case 19:if(t.flags&128)return Rc(e,t,a);if(u=(e.flags&128)!==0,i=(a&t.childLanes)!==0,i||(Ba(e,t,a,!1),i=(a&t.childLanes)!==0),u){if(i)return Rc(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ze(t,sn.current),i)break;return null;case 22:return t.lanes=0,kv(e,t,a,t.pendingProps);case 24:Ci(t,Wt,e.memoizedState.cache)}return wi(e,t,a)}function jt(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)fn=!0;else{if(!Bc(e,a)&&(t.flags&128)===0)return fn=!1,K0(e,t,a);fn=(e.flags&131072)!==0}else fn=!1,He&&(t.flags&1048576)!==0&&Ru(t,Xn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Hl(t.elementType),t.type=e,typeof e=="function")$f(e)?(i=dr(e,i),t.tag=1,t=Zv(null,t,e,i,a)):(t.tag=0,t=Dd(null,t,e,i,a));else{if(e!=null){var u=e.$$typeof;if(u===ce){t.tag=11,t=Vv(null,t,e,i,a);break e}else if(u===Je){t.tag=14,t=Yv(null,t,e,i,a);break e}else if(u===Oe){t.tag=10,t.type=e,t=$v(null,t,a);break e}}throw t=Xe(e)||e,Error(g(306,t,""))}}return t;case 0:return Dd(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,u=dr(i,t.pendingProps),Zv(e,t,i,u,a);case 3:e:{if(uu(t,t.stateNode.containerInfo),e===null)throw Error(g(387));i=t.pendingProps;var c=t.memoizedState;u=c.element,Ko(e,t),ju(t,i,null,a);var p=t.memoizedState;if(i=p.cache,Ci(t,Wt,i),i!==c.cache&&rc(t,[Wt],a,!0),Vr(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Xv(e,t,i,a);break e}else if(i!==u){u=yn(Error(g(424)),t),la(u),t=Xv(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,bt=ei(e.firstChild),on=t,He=!0,hi=null,xl=!0,a=Ie(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(ur(),i===u){t=wi(e,t,a);break e}Cn(e,t,i,a)}t=t.child}return t;case 26:return Iu(e,t),e===null?(a=Kp(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(t.stateNode=Dp(t.type,t.pendingProps,qn.current,t)):t.memoizedState=Kp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ou(t),e===null&&He&&(i=t.stateNode=Qp(t.type,t.pendingProps,qn.current),on=t,xl=!0,u=bt,ao(t.type)?(cg=u,bt=ei(i.firstChild)):bt=u),Cn(e,t,t.pendingProps.children,a),Iu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((u=i=bt)&&(i=Oy(i,t.type,t.pendingProps,xl),i!==null?(t.stateNode=i,on=t,bt=ei(i.firstChild),xl=!1,u=!0):u=!1),u||yi(t)),ou(t),u=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,tg(u,c)?i=null:p!==null&&tg(u,p)&&(t.flags|=32),t.memoizedState!==null&&(u=Ti(e,t,Va,null,null,a),Jc._currentValue=u),Iu(e,t),Cn(e,t,i,a),t.child;case 6:return e===null&&He&&((e=a=bt)&&(a=Ry(a,t.pendingProps,xl),a!==null?(t.stateNode=a,on=t,bt=null,e=!0):e=!1),e||yi(t)),null;case 13:return jl(e,t,a);case 4:return uu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Si(t,null,i,a):Cn(e,t,i,a),t.child;case 11:return Vv(e,t,t.type,t.pendingProps,a);case 7:return i=t.pendingProps,Iu(e,t),Cn(e,t,i,a),t.child;case 8:return Cn(e,t,t.pendingProps.children,a),t.child;case 12:return Cn(e,t,t.pendingProps.children,a),t.child;case 10:return $v(e,t,a);case 9:return u=t.type._context,i=t.pendingProps.children,Hr(t),u=Hn(u),i=i(u),t.flags|=1,Cn(e,t,i,a),t.child;case 14:return Yv(e,t,t.type,t.pendingProps,a);case 15:return qv(e,t,t.type,t.pendingProps,a);case 19:return Rc(e,t,a);case 31:return X0(e,t,a);case 22:return kv(e,t,a,t.pendingProps);case 24:return Hr(t),i=Hn(Wt),e===null?(u=fc(),u===null&&(u=vt,c=sc(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),t.memoizedState={parent:i,cache:u},sl(t),Ci(t,Wt,u)):((e.lanes&a)!==0&&(Ko(e,t),ju(t,null,null,a),Vr()),u=e.memoizedState,c=t.memoizedState,u.parent!==i?(u={parent:i,cache:i},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Ci(t,Wt,i)):(i=c.cache,Ci(t,Wt,i),i!==u.cache&&rc(t,[Wt],a,!0))),Cn(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:He&&Yo(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Iu(e,t),Cn(e,t,i.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function qa(e){e.flags|=4}function Bd(e,t,a,i,u){var c;if((c=(e.mode&32)!==0)&&(c=a===null?eh(t,i):eh(t,i)&&(i.src!==a.src||i.srcSet!==a.srcSet)),c){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Hi())e.flags|=8192;else throw bi=aa,id}else e.flags&=-16777217}function Ld(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!th(t))if(Hi())e.flags|=8192;else throw bi=aa,id}function os(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gi():536870912,e.lanes|=t,tn|=t)}function ka(e,t){if(!He)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&1206910976,i|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Xu(e,t,a){var i=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return St(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ra(Wt),Kl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ed())),St(t),null;case 26:var u=t.type,c=t.memoizedState;return e===null?(qa(t),c!==null?(St(t),Ld(t,c)):(St(t),Bd(t,u,null,i,a))):c?c!==e.memoizedState?(qa(t),St(t),Ld(t,c)):(St(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&qa(t),St(t),Bd(t,u,e,i,a)),null;case 27:if(za(t),a=qn.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(!i){if(t.stateNode===null)throw Error(g(166));return St(t),t.subtreeFlags&=-33554433,null}e=yl.current,Pr(t)?Ur(t):(e=Qp(u,i,a),t.stateNode=e,qa(t))}return St(t),t.subtreeFlags&=-33554433,null;case 5:if(za(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(!i){if(t.stateNode===null)throw Error(g(166));return St(t),t.subtreeFlags&=-33554433,null}if(c=yl.current,Pr(t))Ur(t);else{var p=Gd(qn.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(u,{is:i.is}):p.createElement(u)}}c[Tn]=t,c[al]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(vl(c,u,i),u){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&qa(t)}}return St(t),t.subtreeFlags&=-33554433,Bd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&qa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(g(166));if(e=qn.current,Pr(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,u=on,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[Tn]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Ep(e.nodeValue,a)),e||yi(t,!0)}else e=Gd(e).createTextNode(i),e[Tn]=t,t.stateNode=e}return St(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Pr(t),a!==null){if(e===null){if(!i)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[Tn]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;St(t),e=!1}else a=ed(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Fl(t),t):(Fl(t),null);if((t.flags&128)!==0)throw Error(g(558))}return St(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Pr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(g(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(g(317));u[Tn]=t}else ur(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;St(t),u=!1}else u=ed(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Fl(t),t):(Fl(t),null)}return Fl(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==u&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),os(t,t.updateQueue),St(t),null);case 4:return Kl(),e===null&&qd(t.stateNode.containerInfo),t.flags|=67108864,St(t),null;case 10:return Ra(t.type),St(t),null;case 19:if(fd(t),i=t.memoizedState,i===null)return St(t),null;if(u=(t.flags&128)!==0,c=i.rendering,c===null)if(u)ka(i,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=hc(e),c!==null){for(t.flags|=128,ka(i,!1),e=c.updateQueue,t.updateQueue=e,os(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)wn(a,e),a=a.sibling;return ze(t,sn.current&1|2),He&&Oa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&_l()>st&&(t.flags|=128,u=!0,ka(i,!1),t.lanes=4194304)}else{if(!u)if(e=hc(c),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,os(t,e),ka(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!c.alternate&&!He)return St(t),null}else 2*_l()-i.renderingStartTime>st&&a!==536870912&&(t.flags|=128,u=!0,ka(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}if(i.tail!==null){e=i.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=_l(),e.sibling=null,c=sn.current,c=u?c&1|2:c&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!a||He?ze(t,c):(a=c,Ct(Fn,t),Ct(sn,a),Kn===null&&(Kn=t)),He&&Oa(t,i.treeForkCount),e}return St(t),null;case 22:case 23:return Fl(t),Jo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),a=t.updateQueue,a!==null&&os(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&Gt(jr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ra(Wt),St(t),null;case 25:return null;case 30:return t.flags|=33554432,St(t),null}throw Error(g(156,t.tag))}function Ku(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ra(Wt),Kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return za(t),null;case 31:if(t.memoizedState!==null){if(Fl(t),t.alternate===null)throw Error(g(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fd(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Kl(),null;case 10:return Ra(t.type),null;case 22:case 23:return Fl(t),Jo(),e!==null&&Gt(jr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ra(Wt),null;case 25:return null;default:return null}}function zl(e,t){switch(Bu(t),t.tag){case 3:Ra(Wt),Kl();break;case 26:case 27:case 5:za(t);break;case 4:Kl();break;case 31:t.memoizedState!==null&&Fl(t);break;case 13:Fl(t);break;case 19:fd(t);break;case 10:Ra(t.type);break;case 22:case 23:Fl(t),Jo(),e!==null&&Gt(jr);break;case 24:Ra(Wt)}}function ss(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&e)===e){i=void 0;var c=a.create,p=a.inst;i=c(),p.destroy=i}a=a.next}while(a!==u)}}catch(_){pt(t,t.return,_)}}function mr(e,t,a){try{var i=t.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var c=u.next;i=c;do{if((i.tag&e)===e){var p=i.inst,_=p.destroy;if(_!==void 0){p.destroy=void 0,u=t;var D=a,Y=_;try{Y()}catch(X){pt(u,D,X)}}}i=i.next}while(i!==c)}}catch(X){pt(t,t.return,X)}}function cs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{gc(t,a)}catch(i){pt(e,e.return,i)}}}function fs(e,t,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){pt(e,t,i)}}function Vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var u=e.stateNode,c=pa(e.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=Up(c)),i=u.ref;break;case 7:if(e.stateNode===null){var p=new Sa(e);S(e.child,!1,Dy,p,void 0,void 0),e.stateNode=p}i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(_){pt(e,t,_)}}function dn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){pt(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){pt(e,t,u)}else a.current=null}function Ju(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)Yp(e.stateNode,t[a])}function Wv(e){for(var t=e.return;t!==null&&(Lc(t)&&Yp(e.stateNode,t.stateNode),!Jn(t));)t=t.return}function ds(e){for(var t=e.return;t!==null&&(Lc(t)&&Ny(e.stateNode,t.stateNode),!Jn(t));)t=t.return}function Jn(e){return e.tag===5||e.tag===3||e.tag===27}function Lc(e){return e&&e.tag===7&&e.stateNode!==null}function Md(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){pt(e,e.return,u)}}function ms(e,t,a){try{var i=e.stateNode;fy(i,e.type,a,t),i[al]=t}catch(u){pt(e,e.return,u)}}function e0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ao(e.type)||e.tag===4}function Ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||e0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ao(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,a,i){var u=e.tag;if(u===5||u===6)u=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(u),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=va)),Ju(e,i),$e=!0;else if(u!==4&&(u===27&&(Ju(e,i),i=null,ao(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(Pd(e,t,a,i),e=e.sibling;e!==null;)Pd(e,t,a,i),e=e.sibling}function vr(e,t,a,i){var u=e.tag;if(u===5||u===6)u=e.stateNode,t?a.insertBefore(u,t):a.appendChild(u),Ju(e,i),$e=!0;else if(u!==4&&(u===27&&(Ju(e,i),i=null,ao(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(vr(e,t,a,i),e=e.sibling;e!==null;)vr(e,t,a,i),e=e.sibling}function El(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);vl(t,i,a),t[Tn]=e,t[al]=a}catch(c){pt(e,e.return,c)}}var Mc=!1,Mt=null;function Hd(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Mc=!0)}var Ga=null;function Uc(){var e=Ga;return Ga=null,e}var cl=0;function gr(e,t,a,i,u){return cl=0,Fd(e.child,t,a,i,u)}function Fd(e,t,a,i,u){for(var c=!1;e!==null;){if(e.tag===5){var p=e.stateNode;if(i!==null){var _=ag(p);i.push(_),_.view&&(c=!0)}else c||ag(p).view&&(c=!0);Mc=!0,Lp(p,cl===0?t:t+"_"+cl,a),cl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Fd(e.child,t,a,i,u)&&(c=!0));e=e.sibling}return c}function fl(e,t){for(;e!==null;)e.tag===5?Mp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||fl(e.child,t)),e=e.sibling}function Di(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Di(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(g(544));var a=t.name;t=Na(t.default,t.share),t!=="none"&&(gr(e,a,t,null,!1)||fl(e.child,!1))}e=e.sibling}}function $u(e,t){if(e.tag===30){var a=e.stateNode,i=e.memoizedProps,u=pa(i,a),c=Na(i.default,a.paired?i.share:i.enter);c!=="none"?gr(e,u,c,null,!1)?(Di(e),a.paired||t||Pi(e,i.onEnter)):fl(e.child,!1):Di(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)$u(e,t),e=e.sibling;else Di(e)}function Qr(e){if(Mt!==null&&Mt.size!==0){var t=Mt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,i=a.name;if(i!=null&&i!=="auto"){var u=t.get(i);if(u!==void 0){var c=Na(a.default,a.share);if(c!=="none"&&(gr(e,i,c,null,!1)?(c=e.stateNode,u.paired=c,c.paired=u,Pi(e,a.onShare)):fl(e.child,!1)),t.delete(i),t.size===0)break}}}Qr(e)}e=e.sibling}}}function Tl(e){if(e.tag===30){var t=e.memoizedProps,a=pa(t,e.stateNode),i=Mt!==null?Mt.get(a):void 0,u=Na(t.default,i!==void 0?t.share:t.exit);u!=="none"&&(gr(e,a,u,null,!1)?i!==void 0?(u=e.stateNode,i.paired=u,u.paired=i,Mt.delete(a),Pi(e,t.onShare)):Pi(e,t.onExit):fl(e.child,!1)),Mt!==null&&Qr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Tl(e),e=e.sibling;else Mt!==null&&Qr(e)}function Yl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=pa(t,e.stateNode);t=Na(t.default,t.update),e.flags&=-5,t!=="none"&&gr(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Yl(e);e=e.sibling}}function Qa(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,fl(e.child,!1))}Qa(e)}e=e.sibling}}function ql(e){if(e.tag===30)e.stateNode.paired=null,fl(e.child,!1),Qa(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Qa(e)}function ba(e){for(e=e.child;e!==null;)e.tag===30?fl(e.child,!1):(e.subtreeFlags&33554432)!==0&&ba(e),e=e.sibling}function bn(e,t,a,i,u,c,p){for(var _=!1;t!==null;){if(t.tag===5){var D=t.stateNode;if(c!==null&&cl<c.length){var Y=c[cl],X=ag(D);(Y.view||X.view)&&(_=!0);var ne;if(ne=(e.flags&4)===0)if(X.clip)ne=!0;else{ne=Y.rect;var F=X.rect;ne=ne.y!==F.y||ne.x!==F.x||ne.height!==F.height||ne.width!==F.width}ne&&(e.flags|=4),X.abs?X=!Y.abs:(Y=Y.rect,X=X.rect,X=Y.height!==X.height||Y.width!==X.width),X&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Lp(D,cl===0?a:a+"_"+cl,u),_&&(e.flags&4)!==0||(Ga===null&&(Ga=[]),Ga.push(D,cl===0?i:i+"_"+cl,t.memoizedProps)),cl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&p?e.flags|=t.flags&32:bn(e,t.child,a,i,u,c,p)&&(_=!0));t=t.sibling}return _}function Wu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,i=e.stateNode,u=pa(a,i),c=Na(a.default,a.update),p;p=e.memoizedState,e.memoizedState=null,i=e;var _=e.child;cl=0,u=bn(i,_,u,u,c,p,!1),(e.flags&4)!==0&&u&&Pi(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Wu(e);e=e.sibling}}var Ut=!1,ut=!1,wt=!1,Bt=!1,Fe=typeof WeakSet=="function"?WeakSet:Set,Pt=null,en=!1,Ir=!1,Zr=!1,Ni=!1;function Oi(e,t,a){if(e=e.containerInfo,W0=$c,e=zu(e),Ws(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var u=i.getSelection&&i.getSelection();if(u&&u.rangeCount!==0){i=u.anchorNode;var c=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var _=0,D=-1,Y=-1,X=0,ne=0,F=e,G=null;t:for(;;){for(var fe;F!==i||c!==0&&F.nodeType!==3||(D=_+c),F!==p||u!==0&&F.nodeType!==3||(Y=_+u),F.nodeType===3&&(_+=F.nodeValue.length),(fe=F.firstChild)!==null;)G=F,F=fe;for(;;){if(F===e)break t;if(G===i&&++X===c&&(D=_),G===p&&++ne===u&&(Y=_),(fe=F.nextSibling)!==null)break;F=G,G=F.parentNode}F=fe}i=D===-1||Y===-1?null:{start:D,end:Y}}else i=null}i=i||{start:0,end:0}}else i=null;for(eg={focusedElem:e,selectionRange:i},$c=!1,a=(a&335544064)===a,Pt=t,t=a?9270:1024;Pt!==null;){if(e=Pt,a&&(i=e.deletions,i!==null))for(c=0;c<i.length;c++)a&&Tl(i[c]);if(e.alternate===null&&(e.flags&2)!==0)a&&Hd(e),Pc(a);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&a&&Tl(i),Pc(a);continue}else if(i!==null&&i.memoizedState!==null){a&&Hd(e),Pc(a);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Pt=i):(a&&Yl(e),Pc(a))}}Mt=null}function Pc(e){for(;Pt!==null;){var t=Pt,a=e,i=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&i!==null){a=void 0,u=i.memoizedProps,i=i.memoizedState;var c=t.stateNode;try{var p=dr(t.type,u);a=c.getSnapshotBeforeUpdate(p,i),c.__reactInternalSnapshotBeforeUpdate=a}catch(_){pt(t,t.return,_)}}break;case 3:if((u&1024)!==0){if(i=t.stateNode.containerInfo,a=i.nodeType,a===9)ug(i);else if(a===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ug(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&i!==null&&(a=pa(i.memoizedProps,i.stateNode),u=t.memoizedProps,u=Na(u.default,u.update),u!=="none"&&gr(i,a,u,i.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(g(163))}if(i=t.sibling,i!==null){i.return=t.return,Pt=i;break}Pt=t.return}}function t0(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),i&4&&ss(5,a);break;case 1:if(Wn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(p){pt(a,a.return,p)}else{var u=dr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){pt(a,a.return,p)}}i&64&&cs(a),i&512&&Vl(a,a.return);break;case 3:if(Wn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{gc(e,t)}catch(p){pt(a,a.return,p)}}break;case 27:t===null&&i&4&&El(a);case 26:case 5:Wn(e,a),t===null&&i&4&&Md(a),i&512&&Vl(a,a.return);break;case 12:Wn(e,a);break;case 31:Wn(e,a),i&4&&pr(e,a);break;case 13:Wn(e,a),i&4&&eo(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xs.bind(null,a),By(e,a))));break;case 22:if(i=a.memoizedState!==null||Ut,!i){var c=t!==null&&t.memoizedState!==null||ut;t=Ut,u=ut,Ut=i,(ut=c)&&!u?(i=2,(a.subtreeFlags&8772)!==0&&(i|=1),dl(e,a,i)):Wn(e,a),Ut=t,ut=u}break;case 30:Wn(e,a),i&512&&Vl(a,a.return);break;case 7:i&512&&Vl(a,a.return);default:Wn(e,a)}}function jd(e,t){for(e=e.child;e!==null;)Vt(e,t),e=e.sibling}function Vt(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var i=a.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var u=e.stateNode,c=e.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(D){pt(e,e.return,D)}Xr(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,$e=!0}catch(D){pt(e,e.return,D)}break;case 18:try{var _=e.stateNode;t?Bp(_,!0):Bp(e.stateNode,!1)}catch(D){pt(e,e.return,D)}break;case 22:case 23:e.memoizedState===null&&jd(e,t);break;default:jd(e,t)}}function Xr(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,i=t;switch(a.tag){case 4:Vt(a,i);break e;case 22:a.memoizedState===null&&Xr(a,i);break e;default:Xr(a,i)}}e=e.sibling}}function Kr(e){var t=e.alternate;t!==null&&(e.alternate=null,Kr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _t=null,$n=!1;function Al(e,t,a){for(a=a.child;a!==null;)Hc(e,t,a),a=a.sibling}function Hc(e,t,a){if(Cl&&typeof Cl.onCommitFiberUnmount=="function")try{Cl.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 26:ut||dn(a,t),Al(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ut&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ut||dn(a,t),ds(a);var i=_t,u=$n;ao(a.type)&&(_t=a.stateNode,$n=!1),Al(e,t,a),Ip(a.stateNode,a.type,a.memoizedProps),_t=i,$n=u;break;case 5:ut||dn(a,t),ds(a);case 6:if(a.tag===6&&ds(a),i=_t,u=$n,_t=null,Al(e,t,a),_t=i,$n=u,_t!==null)if($n)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(a.stateNode),$e=!0}catch(c){pt(a,t,c)}else try{_t.removeChild(a.stateNode),$e=!0}catch(c){pt(a,t,c)}break;case 18:_t!==null&&($n?(e=_t,Rp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Wc(e)):Rp(_t,a.stateNode));break;case 4:i=_t,u=$n,_t=a.stateNode.containerInfo,$n=!0,Al(e,t,a),_t=i,$n=u;break;case 0:case 11:case 14:case 15:mr(2,a,t),ut||mr(4,a,t),Al(e,t,a);break;case 1:ut||(dn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&fs(a,t,i)),Al(e,t,a);break;case 21:Al(e,t,a);break;case 22:ut=(i=ut)||a.memoizedState!==null,Al(e,t,a),ut=i;break;case 30:dn(a,t),Al(e,t,a);break;case 7:ut||dn(a,t),Al(e,t,a);break;default:Al(e,t,a)}}function pr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wc(e)}catch(a){pt(t,t.return,a)}}}function eo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wc(e)}catch(a){pt(t,t.return,a)}}function Vd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fe),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fe),t;default:throw Error(g(435,e.tag))}}function Ia(e,t){var a=Vd(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var u=Qc.bind(null,e,i);i.then(u,u)}})}function mn(e,t,a){var i=t.deletions;if(i!==null)for(var u=0;u<i.length;u++){var c=i[u],p=e,_=t,D=_;e:for(;D!==null;){switch(D.tag){case 27:if(ao(D.type)){_t=D.stateNode,$n=!1;break e}break;case 5:_t=D.stateNode,$n=!1;break e;case 3:case 4:_t=D.stateNode.containerInfo,$n=!0;break e}D=D.return}if(_t===null)throw Error(g(160));Hc(p,_,c),_t=null,$n=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hr(t,e,a),t=t.sibling}var ia=null;function hr(e,t,a){var i=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var c=0;c<i.length;c++){var p=i[c];p.ref.impl=p.nextImpl}mn(t,e,a),vn(e),u&4&&(mr(3,e,e.return),ss(3,e),mr(5,e,e.return));break;case 1:mn(t,e,a),vn(e),u&512&&(ut||i===null||dn(i,i.return)),u&64&&Ut&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(c=ia,mn(t,e,a),vn(e),u&512&&(ut||i===null||dn(i,i.return)),u&4)if(u=i!==null?i.memoizedState:null,a=e.memoizedState,i===null)if(a===null)if(e.stateNode===null)if(Ut)e.stateNode=Dp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,u=c.ownerDocument||c;t:switch(t){case"title":i=u.getElementsByTagName("title")[0],(!i||i[$l]||i[Tn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(t),u.head.insertBefore(i,u.querySelector("head > title"))),vl(i,t,a),i[Tn]=e,rn(i),t=i;break e;case"link":if(c=Wp("link","href",u).get(t+(a.href||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break t}}i=u.createElement(t),vl(i,t,a),u.head.appendChild(i);break;case"meta":if(c=Wp("meta","content",u).get(t+(a.content||""))){for(p=0;p<c.length;p++)if(i=c[p],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break t}}i=u.createElement(t),vl(i,t,a),u.head.appendChild(i);break;default:throw Error(g(468,t))}i[Tn]=e,rn(i),t=i}e.stateNode=t}else Ut||vg(c,e.type,e.stateNode);else e.stateNode=$p(c,a,e.memoizedProps);else u!==a?(u===null?(t=i.stateNode,t===null||ut||t.parentNode.removeChild(t)):u.count--,a===null?Ut||vg(c,e.type,e.stateNode):$p(c,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ms(e,e.memoizedProps,i.memoizedProps);break;case 27:mn(t,e,a),vn(e),u&512&&(ut||i===null||dn(i,i.return)),i!==null&&u&4&&ms(e,e.memoizedProps,i.memoizedProps);break;case 5:if(c=wt,wt=!1,mn(t,e,a),wt=c,vn(e),u&512&&(ut||i===null||dn(i,i.return)),e.flags&32){t=e.stateNode;try{Rr(t,""),$e=!0}catch(X){pt(e,e.return,X)}}u&4&&e.stateNode!=null&&(t=e.memoizedProps,ms(e,t,i!==null?i.memoizedProps:t)),u&1024&&(Bt=!0);break;case 6:if(mn(t,e,a),vn(e),u&4){if(e.stateNode===null)throw Error(g(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,$e=!0}catch(X){pt(e,e.return,X)}}break;case 3:if($e=!1,r0=null,c=ia,ia=Qd(t.containerInfo),mn(t,e,a),ia=c,vn(e),u&4&&i!==null&&i.memoizedState.isDehydrated)try{Wc(t.containerInfo)}catch(X){pt(e,e.return,X)}Bt&&(Bt=!1,Fc(e)),$e=!1;break;case 4:u=wt,wt=Ut,i=Co(),c=ia,ia=Qd(e.stateNode.containerInfo),mn(t,e,a),vn(e),ia=c,$e&&Ir&&(Zr=!0),$e=i,wt=u;break;case 12:mn(t,e,a),vn(e);break;case 31:mn(t,e,a),vn(e),u&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ia(e,t)));break;case 13:mn(t,e,a),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(jn=_l()),u&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ia(e,t)));break;case 22:c=e.memoizedState!==null,p=i!==null&&i.memoizedState!==null;var _=Ut,D=ut,Y=wt;Ut=_||c,wt=Y||c,ut=D||p,mn(t,e,a),ut=D,wt=Y,Ut=_,vn(e),u&8192&&(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,!c||i===null||p||Ut||ut||(t=p||ut,a=Ut,i=ut,Ut=c||Ut,ut=t,kl(e,2),Ut=a,ut=i),!c&&wt||jd(e,c)),u&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Ia(e,a))));break;case 19:mn(t,e,a),vn(e),u&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ia(e,t)));break;case 30:u&512&&(ut||i===null||dn(i,i.return)),u=Co(),c=Ir,p=(a&335544064)===a,_=e.memoizedProps,Ir=p&&Na(_.default,_.update)!=="none",mn(t,e,a),vn(e),p&&i!==null&&$e&&(e.flags|=4),Ir=c,$e=u;break;case 21:break;case 7:u&512&&(ut||i===null||dn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:mn(t,e,a),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(e0(i)){a=i;break}i=i.return}i=null;for(var u=e.return;u!==null;){if(Lc(u)){var c=u.stateNode;i===null?i=[c]:i.push(c)}if(Jn(u))break;u=u.return}var p=i;if(a==null)throw Error(g(160));switch(a.tag){case 27:var _=a.stateNode,D=Ud(e);vr(e,D,_,p);break;case 5:var Y=a.stateNode;a.flags&32&&(Rr(Y,""),a.flags&=-33);var X=Ud(e);vr(e,X,Y,p);break;case 3:case 4:var ne=a.stateNode.containerInfo,F=Ud(e);Pd(e,F,ne,p);break;default:throw Error(g(161))}}catch(G){pt(e,e.return,G)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fc(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,$c=!0,t.reset(),$c=!1),e=e.sibling}}function Ri(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)vs(t,e),t=t.sibling;else Wu(t)}function vs(e,t){var a=e.alternate;if(a===null)$u(e,!1);else switch(e.tag){case 3:if(Ni=en=!1,Uc(),Ri(t,e),!en&&!Zr){if(e=Ga,e!==null)for(var i=0;i<e.length;i+=3){a=e[i];var u=e[i+1];Mp(a,e[i+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ni=!0}Ga=null;break;case 5:Ri(t,e);break;case 4:i=en,en=!1,Ri(t,e),en&&(Zr=!0),en=i;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?$u(e,!1):Ri(t,e));break;case 30:i=en,u=Uc(),en=!1,Ri(t,e),en&&(e.flags|=4);var c=e.memoizedProps,p=e.stateNode;t=pa(c,p),p=pa(a.memoizedProps,p);var _=Na(c.default,c.update);_==="none"?t=!1:(c=a.memoizedState,a.memoizedState=null,a=e.child,cl=0,t=bn(e,a,t,p,_,c,!0),cl!==(c===null?0:c.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Pi(e,e.memoizedProps.onUpdate),Ga=u):u!==null&&(u.push.apply(u,Ga),Ga=u),en=(e.flags&32)!==0?!0:i;break;default:Ri(t,e)}}function Wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)t0(e,t.alternate,t),t=t.sibling}function kl(e,t){for(e=e.child;e!==null;){var a=e,i=t;switch(a.tag){case 0:case 11:case 14:case 15:mr(4,a,a.return),kl(a,i);break;case 1:dn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&fs(a,a.return,u),kl(a,i);break;case 27:(i&2)!==0&&Ip(a.stateNode,a.type,a.memoizedProps);case 5:dn(a,a.return),a.tag!==5&&a.tag!==27||ds(a),kl(a,i);break;case 6:ds(a);break;case 26:dn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ut||u.parentNode.removeChild(u),kl(a,i);break;case 22:a.memoizedState===null&&kl(a,i);break;case 30:dn(a,a.return),kl(a,i);break;case 7:dn(a,a.return);default:kl(a,i)}e=e.sibling}}function dl(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var i=t.alternate,u=e,c=t,p=c.flags,_=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:dl(u,c,a),ss(4,c);break;case 1:if(dl(u,c,a),i=c,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(X){pt(i,i.return,X)}if(i=c,u=i.updateQueue,u!==null){var D=i.stateNode;try{var Y=u.shared.hiddenCallbacks;if(Y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Y.length;u++)Ua(Y[u],D)}catch(X){pt(i,i.return,X)}}_&&p&64&&cs(c),Vl(c,c.return);break;case 27:(a&2)!==0&&El(c);case 5:c.tag!==5&&c.tag!==27||Wv(c),dl(u,c,a),_&&i===null&&p&4&&Md(c),Vl(c,c.return);break;case 6:Wv(c);break;case 26:D=c.stateNode,c.memoizedState!==null||D===null||Ut||vg(Qd(D.ownerDocument),c.type,D),dl(u,c,a),_&&i===null&&p&4&&Md(c),Vl(c,c.return);break;case 12:dl(u,c,a);break;case 31:dl(u,c,a),_&&p&4&&pr(u,c);break;case 13:dl(u,c,a),_&&p&4&&eo(u,c);break;case 22:c.memoizedState===null&&dl(u,c,a),Vl(c,c.return);break;case 30:dl(u,c,a),Vl(c,c.return);break;case 7:Vl(c,c.return);default:dl(u,c,a)}t=t.sibling}}function Bi(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ko(e))}function Qt(e,t,a,i){var u=(a&335544064)===a;if(t.subtreeFlags&(u?10262:10256))for(t=t.child;t!==null;)Jr(e,t,a,i),t=t.sibling;else u&&ba(t)}function Jr(e,t,a,i){var u=(a&335544064)===a;u&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ql(t);var c=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,a,i),c&2048&&ss(9,t);break;case 1:Qt(e,t,a,i);break;case 3:Qt(e,t,a,i),u&&Ni&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),c&2048&&(c=null,t.alternate!==null&&(c=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==c&&(t.refCount++,c!=null&&ko(c)));break;case 12:if(c&2048){Qt(e,t,a,i),c=t.stateNode;try{var p=t.memoizedProps,_=p.id,D=p.onPostCommit;typeof D=="function"&&D(_,t.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Y){pt(t,t.return,Y)}}else Qt(e,t,a,i);break;case 31:Qt(e,t,a,i);break;case 13:Qt(e,t,a,i);break;case 23:break;case 22:p=t.stateNode,_=t.alternate,t.memoizedState!==null?(u&&_!==null&&_.memoizedState===null&&ql(_),p._visibility&2?Qt(e,t,a,i):ra(e,t)):(u&&_!==null&&_.memoizedState!==null&&ql(t),p._visibility&2?Qt(e,t,a,i):(p._visibility|=2,yr(e,t,a,i,(t.subtreeFlags&10256)!==0||!1))),c&2048&&Bi(_,t);break;case 24:Qt(e,t,a,i),c&2048&&jc(t.alternate,t);break;case 30:u&&(c=t.alternate,c!==null&&(fl(c.child,!0),fl(t.child,!0))),Qt(e,t,a,i);break;default:Qt(e,t,a,i)}}function yr(e,t,a,i,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,_=a,D=i,Y=p.flags;switch(p.tag){case 0:case 11:case 15:yr(c,p,_,D,u),ss(8,p);break;case 23:break;case 22:var X=p.stateNode;p.memoizedState!==null?X._visibility&2?yr(c,p,_,D,u):ra(c,p):(X._visibility|=2,yr(c,p,_,D,u)),u&&Y&2048&&Bi(p.alternate,p);break;case 24:yr(c,p,_,D,u),u&&Y&2048&&jc(p.alternate,p);break;default:yr(c,p,_,D,u)}t=t.sibling}}function ra(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,u=i.flags;switch(i.tag){case 22:ra(a,i),u&2048&&Bi(i.alternate,i);break;case 24:ra(a,i),u&2048&&jc(i.alternate,i);break;default:ra(a,i)}t=t.sibling}}var Li=8192;function wl(e,t,a){if(e.subtreeFlags&Li)for(e=e.child;e!==null;)gs(e,t,a),e=e.sibling}function gs(e,t,a){switch(e.tag){case 26:wl(e,t,a),e.flags&Li&&(e.memoizedState!==null?Iy(a,ia,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&lh(a,e)));break;case 5:wl(e,t,a),e.flags&Li&&(e=e.stateNode,(t&335544128)===t&&lh(a,e));break;case 3:case 4:var i=ia;ia=Qd(e.stateNode.containerInfo),wl(e,t,a),ia=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Li,Li=16777216,wl(e,t,a),Li=i):wl(e,t,a));break;case 30:if((e.flags&Li)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var u=e.stateNode;u.paired=null,Mt===null&&(Mt=new Map),Mt.set(i,u)}wl(e,t,a);break;default:wl(e,t,a)}}function Dn(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Pt=i,Me(i,e)}Dn(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nn(e),e=e.sibling}function Nn(e){switch(e.tag){case 0:case 11:case 15:xn(e),e.flags&2048&&mr(9,e,e.return);break;case 3:xn(e);break;case 12:xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ua(e)):xn(e);break;default:xn(e)}}function ua(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Pt=i,Me(i,e)}Dn(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mr(8,t,t.return),ua(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ua(t));break;default:ua(t)}e=e.sibling}}function Me(e,t){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:mr(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ko(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Pt=i;else e:for(a=e;Pt!==null;){i=Pt;var u=i.sibling,c=i.return;if(Kr(i),i===a){Pt=null;break e}if(u!==null){u.return=c,Pt=u;break e}Pt=c}}}var zt={getCacheForType:function(e){var t=Hn(Wt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Hn(Wt).controller.signal}},gn=typeof WeakMap=="function"?WeakMap:Map,lt=0,vt=null,Ue=null,qe=0,ot=0,On=null,_r=!1,Mi=!1,Vc=!1,Za=0,$t=0,Xa=0,Ui=0,It=0,ml=0,tn=0,Cr=null,Lt=null,oa=!1,jn=0,Sn=0,st=1/0,Gl=null,Ka=null,Yt=0,Et=null,el=null,Dl=0,to=0,ps=null,nn=null,zn=null,tl=null,sa=null,hs=0,$r=null;function nl(){return(lt&2)!==0&&qe!==0?qe&-qe:ye.T!==null?Wa():fu()}function ys(){if(ml===0)if((qe&536870912)===0||He){var e=Nr;Nr<<=1,(Nr&3932160)===0&&(Nr=262144),ml=e}else ml=536870912;return e=Fn.current,e!==null&&(e.flags|=32),ml}function Pi(e,t){if(t!=null){var a=e.stateNode,i=a.ref;i===null&&(i=a.ref=Up(pa(e.memoizedProps,a))),tl===null&&(tl=[]),tl.push(t.bind(null,i))}}function Vn(e,t,a){(e===vt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(it(e,0),at(e,qe,ml,!1)),Qi(e,a),((lt&2)===0||e!==vt)&&(e===vt&&((lt&2)===0&&(Ui|=a),$t===4&&at(e,qe,ml,!1)),N(e))}function no(e,t,a){if((lt&6)!==0)throw Error(g(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||ki(e,t),u=i?eu(e,t):qt(e,t,!0),c=i;do{if(u===0){Mi&&!i&&at(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!Ke(a)){u=qt(e,t,!1),c=!1;continue}if(u===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var _=e;u=Cr;var D=_.current.memoizedState.isDehydrated;if(D&&(it(_,p).flags|=256),p=qt(_,p,!1),p!==2&&p!==6){if(Vc&&!D){_.errorRecoveryDisabledLanes|=c,Ui|=c,u=4;break e}c=Lt,Lt=u,c!==null&&(Lt===null?Lt=c:Lt.push.apply(Lt,c))}u=p}if(c=!1,u!==2)continue}}if(u===1){it(e,0),at(e,t,0,!0);break}e:{switch(i=e,c=u,c){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:at(i,t,ml,!_r);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(u=jn+300-_l(),10<u)){if(at(i,t,ml,!_r),ho(i,0,!0)!==0)break e;Dl=t,i.timeoutHandle=lg(n0.bind(null,i,a,Lt,Gl,oa,t,ml,Ui,tn,_r,c,"Throttled",-0,0),u);break e}n0(i,a,Lt,Gl,oa,t,ml,Ui,tn,_r,c,null,-0,0)}}break}while(!0);N(e)}function n0(e,t,a,i,u,c,p,_,D,Y,X,ne,F,G){e.timeoutHandle=-1;var fe=t.subtreeFlags,he=(c&335544064)===c;if(ne=null,(he||fe&8192||(fe&16785408)===16785408)&&(ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},Mt=null,gs(t,c,ne),he&&(fe=ne,he=e.containerInfo,he=(he.nodeType===9?he:he.ownerDocument).__reactViewTransition,he!=null&&(fe.count++,fe.waitingForViewTransition=!0,fe=Xd.bind(fe),he.finished.then(fe,fe))),fe=(c&62914560)===c?jn-_l():(c&4194048)===c?Sn-_l():0,fe=Zy(ne,fe),fe!==null)){Dl=c,e.cancelPendingCommit=fe(_s.bind(null,e,t,c,a,i,u,p,_,D,Y,X,ne,null,F,G)),at(e,c,p,!Y);return}_s(e,t,c,a,i,u,p,_,D,Y,X,ne)}function Ke(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],c=u.getSnapshot;u=u.value;try{if(!un(c(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t,a,i){t=yo(e,t),t&=~It,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var u=t;0<u;){var c=31-bl(u),p=1<<c;i[c]=-1,u&=~p}a!==0&&Bs(e,a,t)}function je(){return(lt&6)===0?(Q(0),!1):!0}function Ze(){if(Ue!==null){if(ot===0)var e=Ue.return;else e=Ue,Sl=_i=null,vd(e),Hu=null,Fu=0,e=Ue;for(;e!==null;)zl(e.alternate,e),e=e.return;Ue=null}}function it(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,vy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Dl=0,Ze(),vt=e,Ue=a=ta(e.current,null),qe=t,ot=0,On=null,_r=!1,Mi=ki(e,t),Vc=!1,tn=ml=It=Ui=Xa=$t=0,Lt=Cr=null,oa=!1,Za=yo(e,t),jo(),a}function Nl(e,t){Re=null,ye.H=as,t===Uu||t===Pu?(t=ud(),ot=3):t===id?(t=ud(),ot=4):ot=t===wd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,On=t,Ue===null&&($t=1,wc(e,yn(t,e.current)))}function Hi(){var e=Fn.current;return e===null?!0:(qe&4194048)===qe?Kn===null:(qe&62914560)===qe||(qe&536870912)!==0?e===Kn:!1}function Wr(){var e=ye.H;return ye.H=as,e===null?as:e}function Yc(){var e=ye.A;return ye.A=zt,e}function ca(){$t=4,_r||(qe&4194048)!==qe&&Fn.current!==null||(Mi=!0),(Xa&134217727)===0&&(Ui&134217727)===0||vt===null||at(vt,qe,ml,!1)}function qt(e,t,a){var i=lt;lt|=2;var u=Wr(),c=Yc();(vt!==e||qe!==t)&&(Gl=null,it(e,t)),t=!1;var p=$t;e:do try{if(ot!==0&&Ue!==null){var _=Ue,D=On;switch(ot){case 8:Ze(),p=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(t=!0);var Y=ot;if(ot=0,On=null,Ja(e,_,D,Y),a&&Mi){p=0;break e}break;default:Y=ot,ot=0,On=null,Ja(e,_,D,Y)}}br(),p=$t;break}catch(X){Nl(e,X)}while(!0);return t&&e.shellSuspendCounter++,Sl=_i=null,lt=i,ye.H=u,ye.A=c,Ue===null&&(vt=null,qe=0,jo()),p}function br(){for(;Ue!==null;)Ol(Ue)}function eu(e,t){var a=lt;lt|=2;var i=Wr(),u=Yc();vt!==e||qe!==t?(Gl=null,st=_l()+500,it(e,t)):Mi=ki(e,t);e:do try{if(ot!==0&&Ue!==null){t=Ue;var c=On;t:switch(ot){case 1:ot=0,On=null,Ja(e,t,c,1);break;case 2:case 9:if(rd(c)){ot=0,On=null,tu(t);break}t=function(){ot!==2&&ot!==9||vt!==e||(ot=7),N(e)},c.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:rd(c)?(ot=0,On=null,tu(t)):(ot=0,On=null,Ja(e,t,c,7));break;case 5:var p=null;switch(Ue.tag){case 26:p=Ue.memoizedState;case 5:case 27:var _=Ue;if(p?th(p):_.stateNode.complete){ot=0,On=null;var D=_.sibling;if(D!==null)Ue=D;else{var Y=_.return;Y!==null?(Ue=Y,Yn(Y)):Ue=null}break t}}ot=0,On=null,Ja(e,t,c,5);break;case 6:ot=0,On=null,Ja(e,t,c,6);break;case 8:Ze(),$t=6;break e;default:throw Error(g(462))}}Yd();break}catch(X){Nl(e,X)}while(!0);return Sl=_i=null,ye.H=i,ye.A=u,lt=a,Ue!==null?0:(vt=null,qe=0,jo(),$t)}function Yd(){for(;Ue!==null&&!bm();)Ol(Ue)}function Ol(e){var t=jt(e.alternate,e,Za);e.memoizedProps=e.pendingProps,t===null?Yn(e):Ue=t}function tu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Iv(a,t,t.pendingProps,t.type,void 0,qe);break;case 11:t=Iv(a,t,t.pendingProps,t.type.render,t.ref,qe);break;case 5:vd(t);var i=t;i===on&&(He?(Pn(i),i.tag===5&&i.stateNode!=null&&(bt=i.stateNode)):(Pn(i),He=!0));default:zl(a,t),t=Ue=wn(t,Za),t=jt(a,t,Za)}e.memoizedProps=e.pendingProps,t===null?Yn(e):Ue=t}function Ja(e,t,a,i){Sl=_i=null,vd(t),Hu=null,Fu=0;var u=t.return;try{if(Z0(e,u,t,a,qe)){$t=1,wc(e,yn(a,e.current)),Ue=null;return}}catch(c){if(u!==null)throw Ue=u,c;$t=1,wc(e,yn(a,e.current)),Ue=null;return}t.flags&32768?(He||i===1?e=!0:Mi||(qe&536870912)!==0?e=!1:(_r=e=!0,(i===2||i===9||i===3||i===6)&&(i=Fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),qc(t,e)):Yn(t)}function Yn(e){var t=e;do{if((t.flags&32768)!==0){qc(t,_r);return}e=t.return;var a=Xu(t.alternate,t,Za);if(a!==null){Ue=a;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);$t===0&&($t=5)}function qc(e,t){do{var a=Ku(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);$t=6,Ue=null}function _s(e,t,a,i,u,c,p,_,D,Y,X,ne){e.cancelPendingCommit=null;do Il();while(Yt!==0);if((lt&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));e===vt&&(Ue=vt=null,qe=0),el=t,Et=e,Dl=a,ps=u,nn=i,l0(e,t,a,p,_,D,ne)}}function l0(e,t,a,i,u,c,p){var _=t.lanes|t.childLanes;if(to=_,_|=Du,pf(e,a,_,i,u,c),tl=null,(a&335544064)===a?(sa=nd(e),i=10262):(sa=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,n(cu,function(){return bs(),null})):(e.callbackNode=null,e.callbackPriority=0),Mc=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=ye.T,ye.T=null,u=we.p,we.p=2,c=lt,lt|=4;try{Oi(e,t,a)}finally{lt=c,we.p=u,ye.T=i}}Yt=1,Mc?zn=Cy(p,e.containerInfo,sa,$a,Ht,kc,Ql,bs,Cs):($a(),Ht(),Ql())}function Cs(e){if(Yt!==0){var t=Et.onRecoverableError;t(e,{componentStack:null})}}function kc(){Yt===3&&(Yt=0,vs(el,Et),Yt=4)}function $a(){if(Yt===1){Yt=0;var e=Et,t=el,a=Dl,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=ye.T,ye.T=null;var u=we.p;we.p=2;var c=lt;lt|=4;try{Ir=Zr=!1,hr(t,e,a),a=eg;var p=zu(e.containerInfo),_=a.focusedElem,D=a.selectionRange;if(p!==_&&_&&_.ownerDocument&&Qf(_.ownerDocument.documentElement,_)){if(D!==null&&Ws(_)){var Y=D.start,X=D.end;if(X===void 0&&(X=Y),"selectionStart"in _)_.selectionStart=Y,_.selectionEnd=Math.min(X,_.value.length);else{var ne=_.ownerDocument||document,F=ne&&ne.defaultView||window;if(F.getSelection){var G=F.getSelection(),fe=_.textContent.length,he=Math.min(D.start,fe),Ve=D.end===void 0?he:Math.min(D.end,fe);!G.extend&&he>Ve&&(p=Ve,Ve=he,he=p);var V=An(_,he),B=An(_,Ve);if(V&&B&&(G.rangeCount!==1||G.anchorNode!==V.node||G.anchorOffset!==V.offset||G.focusNode!==B.node||G.focusOffset!==B.offset)){var k=ne.createRange();k.setStart(V.node,V.offset),G.removeAllRanges(),he>Ve?(G.addRange(k),G.extend(B.node,B.offset)):(k.setEnd(B.node,B.offset),G.addRange(k))}}}}for(ne=[],G=_;G=G.parentNode;)G.nodeType===1&&ne.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<ne.length;_++){var ee=ne[_];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}$c=!!W0,eg=W0=null}finally{lt=c,we.p=u,ye.T=i}}e.current=t,Yt=2}}function Ht(){if(Yt===2){Yt=0;var e=Et,t=el,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=ye.T,ye.T=null;var i=we.p;we.p=2;var u=lt;lt|=4;try{t0(e,t.alternate,t)}finally{lt=u,we.p=i,ye.T=a}}Yt=3}}function Ql(){if(Yt===4||Yt===3){Yt=0;var e=zn;zn=null,xm();var t=Et,a=el,i=Dl,u=nn,c=(i&335544064)===i?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?Yt=5:(Yt=0,el=Et=null,xr(t,t.pendingLanes)),c=t.pendingLanes,c===0&&(Ka=null),_o(i),a=a.stateNode,Cl&&typeof Cl.onCommitFiberRoot=="function")try{Cl.onCommitFiberRoot(qi,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=ye.T,c=we.p,we.p=2,ye.T=null;try{for(var p=t.onRecoverableError,_=0;_<u.length;_++){var D=u[_];p(D.value,{componentStack:D.stack})}}finally{ye.T=a,we.p=c}}if(u=tl,p=sa,sa=null,u!==null&&(tl=null,p===null&&(p=[]),e!==null))for(D=0;D<u.length;D++)a=(0,u[D])(p),a!==void 0&&e.finished.finally(a);(Dl&3)!==0&&Il(),N(t),c=t.pendingLanes,(i&261930)!==0&&(c&42)!==0?t===$r?hs++:(hs=0,$r=t):(hs=0,$r=null),Q(0)}}function xr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ko(t)))}function Il(){return zn!==null&&(zn.skipTransition(),zn=null),$a(),Ht(),Ql(),bs()}function bs(){if(Yt!==5)return!1;var e=Et,t=to;to=0;var a=_o(Dl),i=ye.T,u=we.p;try{we.p=32>a?32:a,ye.T=null,a=ps,ps=null;var c=Et,p=Dl;if(Yt=0,el=Et=null,Dl=0,(lt&6)!==0)throw Error(g(331));var _=lt;if(lt|=4,Nn(c.current),Jr(c,c.current,p,a),lt=_,Q(0,!1),Cl&&typeof Cl.onPostCommitFiberRoot=="function")try{Cl.onPostCommitFiberRoot(qi,c)}catch{}return!0}finally{we.p=u,ye.T=i,xr(e,t)}}function Gc(e,t,a){t=yn(a,t),t=Ad(e.stateNode,t,2),e=_a(e,t,2),e!==null&&(Qi(e,2),N(e))}function pt(e,t,a){if(e.tag===3)Gc(e,e,a);else for(;t!==null;){if(t.tag===3){Gc(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ka===null||!Ka.has(i))){e=yn(a,e),a=Fv(2),i=_a(t,a,2),i!==null&&(jv(a,i,t,e),Qi(i,2),N(i));break}}t=t.return}}function Sr(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new gn;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(a)||(Vc=!0,u.add(a),e=lo.bind(null,e,t,a),t.then(e,e))}function lo(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,vt===e&&(qe&a)===a&&(($t===4||$t===3&&(qe&62914560)===qe&&300>_l()-jn)&&(lt&2)===0?it(e,0):It|=a,tn===qe&&(tn=0)),N(e)}function nu(e,t){t===0&&(t=Gi()),e=pi(e,t),e!==null&&(Qi(e,t),N(e))}function xs(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),nu(e,a)}function Qc(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(g(314))}i!==null&&i.delete(t),nu(e,a)}function n(e,t){return Jl(e,t)}var l=null,r=null,o=!1,f=!1,m=!1,y=0;function N(e){e!==r&&e.next===null&&(r===null?l=r=e:r=r.next=e),f=!0,o||(o=!0,ct())}function Q(e,t){if(!m&&f){m=!0;do for(var a=!1,i=l;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var c=0;else{var p=i.suspendedLanes,_=i.pingedLanes;c=(1<<31-bl(42|e)+1)-1,c&=u&~(p&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,ke(i,c))}else c=qe,c=ho(i,i===vt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||ki(i,c)||(a=!0,ke(i,c));i=i.next}while(a);m=!1}}function le(){ie()}function ie(){f=o=!1;var e=0;y!==0&&my()&&(e=y);for(var t=_l(),a=null,i=l;i!==null;){var u=i.next,c=oe(i,t);c===0?(i.next=null,a===null?l=u:a.next=u,u===null&&(r=a)):(a=i,(e!==0||(c&3)!==0)&&(f=!0)),i=u}Yt!==0&&Yt!==5||Q(e),y!==0&&(y=0)}function oe(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-bl(c),_=1<<p,D=u[p];D===-1?((_&a)===0||(_&i)!==0)&&(u[p]=gf(_,t)):D<=t&&(e.expiredLanes|=_),c&=~_}if(t=vt,a=qe,a=ho(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Yi(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ki(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Yi(i),_o(a)){case 2:case 8:a=zm;break;case 32:a=cu;break;case 268435456:a=mf;break;default:a=cu}return i=ve.bind(null,e),a=Jl(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Yi(i),e.callbackPriority=2,e.callbackNode=null,2}function ve(e,t){if(Yt!==0&&Yt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var i=qe;return i=ho(e,e===vt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(no(e,i,t),oe(e,_l()),e.callbackNode!=null&&e.callbackNode===a?ve.bind(null,e):null)}function ke(e,t){if(Il())return null;no(e,t,!0)}function ct(){gy(function(){(lt&6)!==0?Jl(df,le):ie()})}function Wa(){if(y===0){var e=or;e===0&&(e=po,po<<=1,(po&261888)===0&&(po=256)),y=e}return y}function zr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ys(e)}function I(e,t,a,i,u){if(t==="submit"&&a&&a.stateNode===u){var c=zr((u[al]||null).action),p=i.submitter;p&&(t=(t=p[al]||null)?zr(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var _=new Eo("action","action",null,i,u);e.push({event:_,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(y!==0){var D=new FormData(u,p);bd(a,{pending:!0,data:D,method:u.method,action:c},null,D)}}else typeof c=="function"&&(_.preventDefault(),D=new FormData(u,p),bd(a,{pending:!0,data:D,method:u.method,action:c},c,D))},currentTarget:u}]})}}for(var q=0;q<Ho.length;q++){var $=Ho[q],re=$.toLowerCase(),Ae=$[0].toUpperCase()+$.slice(1);Ml(re,"on"+Ae)}Ml(Zf,"onAnimationEnd"),Ml(Xf,"onAnimationIteration"),Ml(Kf,"onAnimationStart"),Ml("dblclick","onDoubleClick"),Ml("focusin","onFocus"),Ml("focusout","onBlur"),Ml(Tu,"onTransitionRun"),Ml(Jm,"onTransitionStart"),Ml(Da,"onTransitionCancel"),Ml(Po,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),De=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dt));function ft(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],u=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var p=i.length-1;0<=p;p--){var _=i[p],D=_.instance,Y=_.currentTarget;if(_=_.listener,D!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=Y;try{c(u)}catch(X){Au(X)}u.currentTarget=null,c=D}else for(p=0;p<i.length;p++){if(_=i[p],D=_.instance,Y=_.currentTarget,_=_.listener,D!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=Y;try{c(u)}catch(X){Au(X)}u.currentTarget=null,c=D}}}}function Se(e,t){var a=t[Ls];a===void 0&&(a=t[Ls]=new Set);var i=e+"__bubble";a.has(i)||(xp(t,e,2,!1),a.add(i))}function We(e,t,a){var i=0;t&&(i|=4),xp(a,e,i,t)}var xa="_reactListening"+Math.random().toString(36).slice(2);function qd(e){if(!e[xa]){e[xa]=!0,Cf.forEach(function(a){a!=="selectionchange"&&(De.has(a)||We(a,!1,e),We(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xa]||(t[xa]=!0,We("selectionchange",!1,t))}}function xp(e,t,a,i){switch(fh(t)){case 2:var u=$y;break;case 8:u=Wy;break;default:u=pg}a=u.bind(null,t,a,e),u=void 0,!ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function J0(e,t,a,i,u){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var _=i.stateNode.containerInfo;if(_===u)break;if(p===4)for(p=i.return;p!==null;){var D=p.tag;if((D===3||D===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;_!==null;){if(p=ui(_),p===null)return;if(D=p.tag,D===5||D===6||D===26||D===27){i=c=p;continue e}_=_.parentNode}}i=i.return}Rm(function(){var Y=c,X=qs(a),ne=[];e:{var F=tc.get(e);if(F!==void 0){var G=Eo,fe=e;switch(e){case"keypress":if(hu(a)===0)break e;case"keydown":case"keyup":G=jm;break;case"focusin":fe="focus",G=Qs;break;case"focusout":fe="blur",G=Qs;break;case"beforeblur":case"afterblur":G=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=To;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Cu;break;case Zf:case Xf:case Kf:G=Br;break;case Po:G=Ym;break;case"scroll":case"scrollend":G=F0;break;case"wheel":G=km;break;case"copy":case"cut":case"paste":G=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Mf;break;case"submit":G=Vm;break;case"toggle":case"beforetoggle":G=Hf}var he=(t&4)!==0,Ve=!he&&(e==="scroll"||e==="scrollend"),V=he?F!==null?F+"Capture":null:F;he=[];for(var B=Y,k;B!==null;){var ee=B;if(k=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||k===null||V===null||(ee=gu(B,V),ee!=null&&he.push(kd(B,ee,k))),Ve)break;B=B.return}0<he.length&&(F=new G(F,fe,null,a,X),ne.push({event:F,listeners:he}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",G&&a!==$i&&(fe=a.relatedTarget||a.fromElement)&&(ui(fe)||fe[Ii]))break e;(F||G)&&(fe=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,F?(G=a.relatedTarget||a.toElement,F=Y,G=G?ui(G):null,G!==null&&(Ve=b(G),he=G.tag,G!==Ve||he!==5&&he!==27&&he!==6)&&(G=null)):(F=null,G=Y),F!==G&&(he=To,ee="onMouseLeave",V="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(he=Mf,ee="onPointerLeave",V="onPointerEnter",B="pointer"),Ve=F==null?fe:Ot(F),k=G==null?fe:Ot(G),fe=new he(ee,B+"leave",F,a,X),fe.target=Ve,fe.relatedTarget=k,ee=null,ui(X)===Y&&(he=new he(V,B+"enter",G,a,X),he.target=k,he.relatedTarget=Ve,ee=he),Ve=ee,he=F&&G?L(F,G,uy):null,F!==null&&Sp(ne,fe,F,he,!1),G!==null&&Ve!==null&&Sp(ne,Ve,G,he,!0)))}e:{if(F=Y?Ot(Y):window,G=F.nodeName&&F.nodeName.toLowerCase(),G==="select"||G==="input"&&F.type==="file")var ge=qf;else if(Zm(F))if(kf)ge=Km;else{ge=Y0;var rt=Rt}else G=F.nodeName,!G||G.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?Y&&Vs(Y.elementType)&&(ge=qf):ge=q0;if(ge&&(ge=ge(e,Y))){Yf(ne,ge,a,X);break e}rt&&rt(e,F,Y)}switch(rt=Y?Ot(Y):window,e){case"focusin":(Zm(rt)||rt.contentEditable==="true")&&(nr=rt,Mo=Y,Lr=null);break;case"focusout":Lr=Mo=nr=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,If(ne,a,X);break;case"selectionchange":if(Lo)break;case"keydown":case"keyup":If(ne,a,X)}var Ee;if(wo)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else er?Do(e,a)&&(Ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ne="onCompositionStart");Ne&&(Qm&&a.locale!=="ko"&&(er||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&er&&(Ee=Df()):(di=X,xo="value"in di?di.value:di.textContent,er=!0)),rt=a0(Y,Ne),0<rt.length&&(Ne=new Lf(Ne,e,null,a,X),ne.push({event:Ne,listeners:rt}),Ee?Ne.data=Ee:(Ee=Js(a),Ee!==null&&(Ne.data=Ee)))),(Ee=Ks?Im(e,a):vi(e,a))&&(Ne=a0(Y,"onBeforeInput"),0<Ne.length&&(rt=new Lf("onBeforeInput","beforeinput",null,a,X),ne.push({event:rt,listeners:Ne}),rt.data=Ee)),I(ne,e,Y,a,X)}ft(ne,t)})}function kd(e,t,a){return{instance:e,listener:t,currentTarget:a}}function a0(e,t){for(var a=t+"Capture",i=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=gu(e,a),u!=null&&i.unshift(kd(e,u,c)),u=gu(e,t),u!=null&&i.push(kd(e,u,c))),e.tag===3)return i;e=e.return}return[]}function uy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sp(e,t,a,i,u){for(var c=t._reactName,p=[];a!==null&&a!==i;){var _=a,D=_.alternate,Y=_.stateNode;if(_=_.tag,D!==null&&D===i)break;_!==5&&_!==26&&_!==27||Y===null||(D=Y,u?(Y=gu(a,c),Y!=null&&p.unshift(kd(a,Y,D))):u||(Y=gu(a,c),Y!=null&&p.push(kd(a,Y,D)))),a=a.return}p.length!==0&&e.push({event:t,listeners:p})}var oy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function zp(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(sy,"")}function Ep(e,t){return t=zp(t),zp(e)===t}function Nt(e,t,a,i,u,c){switch(a){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Rr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Rr(e,""+i);else return;break;case"className":Wl(e,"class",i);break;case"tabIndex":Wl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,a,i);break;case"style":Af(e,i,c);return;case"data":if(t!=="object"){Wl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ys(i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Nt(e,t,"name",u.name,u,null),Nt(e,t,"formEncType",u.formEncType,u,null),Nt(e,t,"formMethod",u.formMethod,u,null),Nt(e,t,"formTarget",u.formTarget,u,null)):(Nt(e,t,"encType",u.encType,u,null),Nt(e,t,"method",u.method,u,null),Nt(e,t,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ys(i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=va);return;case"onScroll":i!=null&&Se("scroll",e);return;case"onScrollEnd":i!=null&&Se("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(g(60));c?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Ys(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Se("beforetoggle",e),Se("toggle",e),mu(e,"popover",i);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":mu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Nm.get(a)||a,mu(e,a,i);else return}$e=!0}function $0(e,t,a,i,u,c){switch(a){case"style":Af(e,i,c);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(g(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(g(60));c?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof i=="string")Rr(e,i);else if(typeof i=="number"||typeof i=="bigint")Rr(e,""+i);else return;break;case"onScroll":i!=null&&Se("scroll",e);return;case"onScrollEnd":i!=null&&Se("scrollend",e);return;case"onClick":i!=null&&(e.onclick=va);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Am.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),t=e[al]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(c,t,u),typeof i=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(c,i,u);break e}$e=!0,a in e?e[a]=i:i===!0?e.setAttribute(a,""):mu(e,a,i)}return}$e=!0}function vl(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var i=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:Nt(e,t,c,p,a,null)}}u&&Nt(e,t,"srcSet",a.srcSet,a,null),i&&Nt(e,t,"src",a.src,a,null);return;case"input":Se("invalid",e);var _=c=p=u=null,D=null,Y=null;for(i in a)if(a.hasOwnProperty(i)){var X=a[i];if(X!=null)switch(i){case"name":u=X;break;case"type":p=X;break;case"checked":D=X;break;case"defaultChecked":Y=X;break;case"value":c=X;break;case"defaultValue":_=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(g(137,t));break;default:Nt(e,t,i,X,a,null)}}Fs(e,c,_,D,Y,p,u,!1);return;case"select":Se("invalid",e),i=p=c=null;for(u in a)if(a.hasOwnProperty(u)&&(_=a[u],_!=null))switch(u){case"value":c=_;break;case"defaultValue":p=_;break;case"multiple":i=_;default:Nt(e,t,u,_,a,null)}t=c,a=p,e.multiple=!!i,t!=null?vu(e,!!i,t,!1):a!=null&&vu(e,!!i,a,!0);return;case"textarea":Se("invalid",e),c=u=i=null;for(p in a)if(a.hasOwnProperty(p)&&(_=a[p],_!=null))switch(p){case"value":i=_;break;case"defaultValue":u=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(g(91));break;default:Nt(e,t,p,_,a,null)}zf(e,i,u,c);return;case"option":for(D in a)a.hasOwnProperty(D)&&(i=a[D],i!=null)&&(D==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Nt(e,t,D,i,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(i=0;i<Dt.length;i++)Se(Dt[i],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(i=a[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:Nt(e,t,Y,i,a,null)}return;default:if(Vs(t)){for(X in a)a.hasOwnProperty(X)&&(i=a[X],i!==void 0&&$0(e,t,X,i,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(i=a[_],i!=null&&Nt(e,t,_,i,a,null))}var cy={};function fy(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,p=null,_=null,D=null,Y=null,X=null;for(G in a){var ne=a[G];if(a.hasOwnProperty(G)&&ne!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":D=ne;default:i.hasOwnProperty(G)||Nt(e,t,G,null,i,ne)}}for(var F in i){var G=i[F];if(ne=a[F],i.hasOwnProperty(F)&&(G!=null||ne!=null))switch(F){case"type":G!==ne&&($e=!0),c=G;break;case"name":G!==ne&&($e=!0),u=G;break;case"checked":G!==ne&&($e=!0),Y=G;break;case"defaultChecked":G!==ne&&($e=!0),X=G;break;case"value":G!==ne&&($e=!0),p=G;break;case"defaultValue":G!==ne&&($e=!0),_=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(g(137,t));break;default:G!==ne&&Nt(e,t,F,G,i,ne)}}Hs(e,p,_,D,Y,X,c,u);return;case"select":G=p=_=F=null;for(c in a)if(D=a[c],a.hasOwnProperty(c)&&D!=null)switch(c){case"value":break;case"multiple":G=D;default:i.hasOwnProperty(c)||Nt(e,t,c,null,i,D)}for(u in i)if(c=i[u],D=a[u],i.hasOwnProperty(u)&&(c!=null||D!=null))switch(u){case"value":c!==D&&($e=!0),F=c;break;case"defaultValue":c!==D&&($e=!0),_=c;break;case"multiple":c!==D&&($e=!0),p=c;default:c!==D&&Nt(e,t,u,c,i,D)}t=_,a=p,i=G,F!=null?vu(e,!!a,F,!1):!!i!=!!a&&(t!=null?vu(e,!!a,t,!0):vu(e,!!a,a?[]:"",!1));return;case"textarea":G=F=null;for(_ in a)if(u=a[_],a.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Nt(e,t,_,null,i,u)}for(p in i)if(u=i[p],c=a[p],i.hasOwnProperty(p)&&(u!=null||c!=null))switch(p){case"value":u!==c&&($e=!0),F=u;break;case"defaultValue":u!==c&&($e=!0),G=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:u!==c&&Nt(e,t,p,u,i,c)}Sf(e,F,G);return;case"option":for(var fe in a)F=a[fe],a.hasOwnProperty(fe)&&F!=null&&!i.hasOwnProperty(fe)&&(fe==="selected"?e.selected=!1:Nt(e,t,fe,null,i,F));for(D in i)F=i[D],G=a[D],i.hasOwnProperty(D)&&F!==G&&(F!=null||G!=null)&&(D==="selected"?(F!==G&&($e=!0),e.selected=F&&typeof F!="function"&&typeof F!="symbol"):Nt(e,t,D,F,i,G));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)F=a[he],a.hasOwnProperty(he)&&F!=null&&!i.hasOwnProperty(he)&&Nt(e,t,he,null,i,F);for(Y in i)if(F=i[Y],G=a[Y],i.hasOwnProperty(Y)&&F!==G&&(F!=null||G!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(g(137,t));break;default:Nt(e,t,Y,F,i,G)}return;default:if(Vs(t)){for(var Ve in a)F=a[Ve],a.hasOwnProperty(Ve)&&F!==void 0&&!i.hasOwnProperty(Ve)&&$0(e,t,Ve,void 0,i,F);for(X in i)F=i[X],G=a[X],!i.hasOwnProperty(X)||F===G||F===void 0&&G===void 0||$0(e,t,X,F,i,G);return}}for(var V in a)F=a[V],a.hasOwnProperty(V)&&F!=null&&!i.hasOwnProperty(V)&&Nt(e,t,V,null,i,F);for(ne in i)F=i[ne],G=a[ne],!i.hasOwnProperty(ne)||F===G||F==null&&G==null||Nt(e,t,ne,F,i,G)}function Tp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var u=a[i],c=u.transferSize,p=u.initiatorType,_=u.duration;if(c&&_&&Tp(p)){for(p=0,_=u.responseEnd,i+=1;i<a.length;i++){var D=a[i],Y=D.startTime;if(Y>_)break;var X=D.transferSize,ne=D.initiatorType;X&&Tp(ne)&&(D=D.responseEnd,p+=X*(D<_?1:(_-Y)/(D-Y)))}if(--i,t+=8*(c+p)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var W0=null,eg=null;function Gd(e){return e.nodeType===9?e:e.ownerDocument}function Ap(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Dp(e,t,a,i){return a=Gd(a).createElement(e),a[Tn]=i,a[al]=t,vl(a,e,t),rn(a),a}function tg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ng=null;function my(){var e=window.event;return e&&e.type==="popstate"?e===ng?!1:(ng=e,!0):(ng=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,Op=typeof requestAnimationFrame=="function"?requestAnimationFrame:lg,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(e){return Np.resolve(null).then(e).catch(py)}:lg;function py(e){setTimeout(function(){throw e})}function ao(e){return e==="head"}function Rp(e,t){var a=t,i=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(u),Wc(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")fg(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fg(a);for(var c=a.firstChild;c;){var p=c.nextSibling,_=c.nodeName;c[$l]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&fg(e.ownerDocument.body);a=u}while(a);Wc(t)}function Bp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Lp(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var u=i=0;u<t.length;u++){var c=t[u];0<c.width&&0<c.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Mp(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function hy(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function ag(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return hy(t,a,e)}function yy(e){return e.documentElement.clientHeight}function _y(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Cy(e,t,a,i,u,c,p,_,D){var Y=t.nodeType===9?t:t.ownerDocument;try{var X=Y.startViewTransition({update:function(){var F=Y.defaultView,G=F.navigation&&F.navigation.transition,fe=Y.fonts.status;i();var he=[];if(fe==="loaded"&&(yy(Y),Y.fonts.status==="loading"&&he.push(Y.fonts.ready)),fe=he.length,e!==null)for(var Ve=e.suspenseyImages,V=0,B=0;B<Ve.length;B++){var k=Ve[B];if(!k.complete){var ee=k.getBoundingClientRect();if(0<ee.bottom&&0<ee.right&&ee.top<F.innerHeight&&ee.left<F.innerWidth){if(V+=nh(k),V>u0){he.length=fe;break}k=new Promise(_y.bind(k)),he.push(k)}}}if(0<he.length)return F=Promise.race([Promise.all(he),new Promise(function(ge){return setTimeout(ge,500)})]).then(u,u),(G?Promise.allSettled([G.finished,F]):F).then(c,c);if(u(),G)return G.finished.then(c,c);c()},types:a});Y.__reactViewTransition=X;var ne=[];return X.ready.then(function(){for(var F=Y.documentElement.getAnimations({subtree:!0}),G=0;G<F.length;G++){var fe=F[G],he=fe.effect,Ve=he.pseudoElement;if(Ve!=null&&Ve.startsWith("::view-transition")){ne.push(fe),fe=he.getKeyframes();for(var V=Ve=void 0,B=!0,k=0;k<fe.length;k++){var ee=fe[k],ge=ee.width;if(Ve===void 0)Ve=ge;else if(Ve!==ge){B=!1;break}if(ge=ee.height,V===void 0)V=ge;else if(V!==ge){B=!1;break}delete ee.width,delete ee.height,ee.transform==="none"&&delete ee.transform}B&&Ve!==void 0&&V!==void 0&&(he.setKeyframes(fe),B=getComputedStyle(he.target,he.pseudoElement),B.width!==Ve||B.height!==V)&&(B=fe[0],B.width=Ve,B.height=V,B=fe[fe.length-1],B.width=Ve,B.height=V,he.setKeyframes(fe))}}p()},function(F){Y.__reactViewTransition===X&&(Y.__reactViewTransition=null);try{typeof F=="object"&&F!==null&&F.name==="InvalidStateError"&&(F.message==="View transition was skipped because document visibility state is hidden."||F.message==="Skipping view transition because document visibility state has become hidden."||F.message==="Skipping view transition because viewport size changed."||F.message==="Transition was aborted because of invalid state")&&(F=null),F!==null&&D(F)}finally{i(),u(),p()}}),X.finished.finally(function(){for(var F=0;F<ne.length;F++)ne[F].cancel();Y.__reactViewTransition===X&&(Y.__reactViewTransition=null),_()}),X}catch{return i(),u(),p(),null}}function Ss(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ss.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Z({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ss.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),i=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===e&&c.pseudoElement===t&&i.push(a[u])}return i},Ss.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Up(e){return{name:e,group:new Ss("group",e),imagePair:new Ss("image-pair",e),old:new Ss("old",e),new:new Ss("new",e)}}function Sa(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Sa.prototype.addEventListener=function(e,t,a){var i=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(i=a.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Hp(c,e,t,a)===-1){var p=this,_=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(_=function(D){p.removeEventListener(e,t,a),typeof t=="function"?t.call(this,D):t.handleEvent(D)}),i!==null&&(u=p.removeEventListener.bind(p,e,t,a),i.addEventListener("abort",u,{once:!0}),u=i.removeEventListener.bind(i,"abort",u)),i=Ic(a),c.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:_,cleanup:u}),S(this._fragmentFiber.child,!1,by,e,_,i)}this._eventListeners=c}};function by(e,t,a,i){return j(e).addEventListener(t,a,i),!1}Sa.prototype.removeEventListener=function(e,t,a){var i=this._eventListeners;if(i!==null&&(t=Hp(i,e,t,a),t!==-1)){var u=i[t];a=u.attachedListener;var c=u.cleanup;u=Ic(u.optionsOrUseCapture),S(this._fragmentFiber.child,!1,xy,e,a,u),i.splice(t,1),c!==null&&c()}};function xy(e,t,a,i){return j(e).removeEventListener(t,a,i),!1}function Ic(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Pp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Hp(e,t,a,i){if(e.length===0)return-1;i=Pp(i);for(var u=0;u<e.length;u++){var c=e[u];if(c.type===t&&c.listener===a&&Pp(c.optionsOrUseCapture)===i)return u}return-1}Sa.prototype.dispatchEvent=function(e){var t=U(this._fragmentFiber);if(t===null)return!0;t=j(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];i.addEventListener(c.type,c.attachedListener,Ic(c.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),a)for(u=0;u<a.length;u++)c=a[u],i.removeEventListener(c.type,c.attachedListener,Ic(c.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},Sa.prototype.focus=function(e){S(this._fragmentFiber.child,!0,Fp,e,void 0,void 0)};function Fp(e,t){return e.tag===6?!1:(e=j(e),Ly(e,t))}Sa.prototype.focusLast=function(e){var t=[];S(this._fragmentFiber.child,!0,ig,t,void 0,void 0);for(var a=t.length-1;0<=a&&!Fp(t[a],e);a--);};function ig(e,t){return t.push(e),!1}Sa.prototype.blur=function(){var e=U(this._fragmentFiber);e!==null&&(e=j(e),e=Gd(e).activeElement,e!==null&&S(this._fragmentFiber.child,!1,Sy,e,void 0,void 0))};function Sy(e,t){return e.tag===6?!1:(e=j(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Sa.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),S(this._fragmentFiber.child,!1,zy,e,void 0,void 0)};function zy(e,t){return e.tag===6||(e=j(e),t.observe(e)),!1}Sa.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),S(this._fragmentFiber.child,!1,Ey,e,void 0,void 0);for(var a=t=0;a<Fi.length;a++){var i=Fi[a];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Fi[t++]=i}Fi.length=t}};function Ey(e,t){return e.tag===6||(e=j(e),t.unobserve(e)),!1}var Fi=[],rg=!1;function Ty(e,t,a){Fi.push({fragmentInstance:e,observer:t,instance:a}),rg||(rg=!0,My(function(){rg=!1;var i=Fi;Fi=[];for(var u=0;u<i.length;u++){var c=i[u];c.observer.unobserve(c.instance)}}))}Sa.prototype.getClientRects=function(){var e=[];return S(this._fragmentFiber.child,!1,Ay,e,void 0,void 0),e};function Ay(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=j(e),t.push.apply(t,e.getClientRects());return!1}Sa.prototype.getRootNode=function(e){var t=U(this._fragmentFiber);return t===null?this:j(t).getRootNode(e)},Sa.prototype.compareDocumentPosition=function(e){var t=U(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];S(this._fragmentFiber.child,!1,ig,a,void 0,void 0);var i=j(t);if(a.length===0){if(a=i,P(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var u=i=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=K(t)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=j(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=j(a[0]),u=j(a[a.length-1]);var c=P(this._fragmentFiber)?t.parentElement:i;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=c.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=t.compareDocumentPosition(e),_=u.compareDocumentPosition(e),D=p&Node.DOCUMENT_POSITION_CONTAINED_BY||_&Node.DOCUMENT_POSITION_CONTAINED_BY;return _=i&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&_&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||c&&u===e||D||_?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!c&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wy(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wy(e,t,a,i,u){var c=ui(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)e:{for(;c!==null;){if(c.tag===7&&(c===t||c.alternate===t)){a=!0;break e}c=c.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;e:{for(c=t,t=U(t);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==t&&c.alternate!==t)){c=!0;break e}c=c.return}c=!1}return c}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!c)&&!(t=c===a)&&(t=L(a,c,H),t===null?t=!1:(S(t,!0,O,c,a),c=A,A=null,t=c!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!c)&&!(t=c===i)&&(t=L(i,c,H),t===null?t=!1:(S(t,!0,M,c,i),c=A,C=A=null,t=c!==null)),t):!1}function jp(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Sa.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(g(566));var t=[];S(this._fragmentFiber.child,!1,ig,t,void 0,void 0);var a=e!==!1;if(t.length===0){var i=K(this._fragmentFiber);if(i=a?i[1]||i[0]||U(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=j(i),jp(e,a);return}if(i=j(i),i.nodeType!==9){if(i.nodeType===11){a="host"in i?i.host:null,a!==null&&a.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=a?t.length-1:0;i!==(a?-1:t.length);){var u=t[i];u.tag===6?(u=j(u),jp(u,a)):j(u).scrollIntoView(e),i+=a?-1:1}};function Dy(e,t){return e=j(e),Vp(e,t),!1}function Vp(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Yp(e,t){var a=t._eventListeners;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i];e.addEventListener(u.type,u.attachedListener,Ic(u.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(c){for(var p=0,_=0;_<Fi.length;_++){var D=Fi[_];(D.fragmentInstance!==t||D.observer!==c||D.instance!==e)&&(Fi[p++]=D)}Fi.length=p,c.observe(e)}),Vp(e,t))}function Ny(e,t){var a=t._eventListeners;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i];e.removeEventListener(u.type,u.attachedListener,Ic(u.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?Ty(t,c,e):c.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function ug(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ug(a),Xi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Oy(e,t,a,i){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[$l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=ei(e.nextSibling),e===null)break}return null}function Ry(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ei(e.nextSibling),e===null))return null;return e}function qp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ei(e.nextSibling),e===null))return null;return e}function og(e){return e.data==="$?"||e.data==="$~"}function sg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function By(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ei(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var cg=null;function kp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ei(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Gp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ly(e,t){function a(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return i}function My(e){Op(function(){Op(function(t){return e(t)})})}function Qp(e,t,a){switch(t=Gd(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function Ip(e,t,a){for(var i in a){var u=a[i];a.hasOwnProperty(i)&&u!=null&&Nt(e,t,i,null,cy,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===va&&(e.onclick=null),Xi(e)}function fg(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xi(e)}var ti=new Map,Zp=new Set;function Qd(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var lu=we.d;we.d={f:Uy,r:Py,D:Hy,C:Fy,L:jy,m:Vy,X:qy,S:Yy,M:ky};function Uy(){var e=lu.f(),t=je();return e||t}function Py(e){var t=oi(e);t!==null&&t.tag===5&&t.type==="form"?Av(t):lu.r(e)}var Zc=typeof document>"u"?null:document;function Xp(e,t,a){var i=Zc;if(i&&typeof t=="string"&&t){var u=Ll(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zp.has(u)||(Zp.add(u),e={rel:e,crossOrigin:a,href:t},i.querySelector(u)===null&&(t=i.createElement("link"),vl(t,"link",e),rn(t),i.head.appendChild(t)))}}function Hy(e){lu.D(e),Xp("dns-prefetch",e,null)}function Fy(e,t){lu.C(e,t),Xp("preconnect",e,t)}function jy(e,t,a){lu.L(e,t,a);var i=Zc;if(i&&e&&t){var u='link[rel="preload"][as="'+Ll(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ll(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ll(a.imageSizes)+'"]')):u+='[href="'+Ll(e)+'"]';var c=u;switch(t){case"style":c=Xc(e);break;case"script":c=Kc(e)}if(!(ti.has(c)||(e=Z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ti.set(c,e),i.querySelector(u)!==null||t==="style"&&i.querySelector(Id(c))||t==="script"&&i.querySelector(Zd(c))))){var p=i.createElement("link");vl(p,"link",e),t==="style"&&(p[kn]=!0,p.onload=p.onerror=function(){_f(p)}),rn(p),i.head.appendChild(p)}}}function Vy(e,t){lu.m(e,t);var a=Zc;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Ll(i)+'"][href="'+Ll(e)+'"]',c=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Kc(e)}if(!ti.has(c)&&(e=Z({rel:"modulepreload",href:e},t),ti.set(c,e),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zd(c)))return}i=a.createElement("link"),vl(i,"link",e),rn(i),a.head.appendChild(i)}}}function Yy(e,t,a){lu.S(e,t,a);var i=Zc;if(i&&e){var u=Ki(i).hoistableStyles,c=Xc(e);t=t||"default";var p=u.get(c);if(!p){var _={loading:0,preload:null};if(p=i.querySelector(Id(c)))_.loading=5;else{e=Z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ti.get(c))&&dg(e,a);var D=p=i.createElement("link");rn(D),vl(D,"link",e),D._p=new Promise(function(Y,X){D.onload=Y,D.onerror=X}),D.addEventListener("load",function(){_.loading|=1}),D.addEventListener("error",function(){_.loading|=2}),_.loading|=4,i0(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:_},u.set(c,p)}}}function qy(e,t){lu.X(e,t);var a=Zc;if(a&&e){var i=Ki(a).hoistableScripts,u=Kc(e),c=i.get(u);c||(c=a.querySelector(Zd(u)),c||(e=Z({src:e,async:!0},t),(t=ti.get(u))&&mg(e,t),c=a.createElement("script"),rn(c),vl(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(u,c))}}function ky(e,t){lu.M(e,t);var a=Zc;if(a&&e){var i=Ki(a).hoistableScripts,u=Kc(e),c=i.get(u);c||(c=a.querySelector(Zd(u)),c||(e=Z({src:e,async:!0,type:"module"},t),(t=ti.get(u))&&mg(e,t),c=a.createElement("script"),rn(c),vl(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(u,c))}}function Kp(e,t,a,i){var u=(u=qn.current)?Qd(u):null;if(!u)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Xc(a.href),t=Ki(u).hoistableStyles,i=t.get(a),i||(i={type:"style",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Xc(a.href);var c=Ki(u).hoistableStyles,p=c.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=u.querySelector(Id(e)))?c._p||(p.instance=c,p.state.loading=5):(c=ti.get(e),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ti.set(e,c)),Gy(u,e,c,p.state))),t&&i===null)throw Error(g(528,""));return p}if(t&&i!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=Kc(a),t=Ki(u).hoistableScripts,i=t.get(a),i||(i={type:"script",instance:null,count:0,state:null},t.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function Xc(e){return'href="'+Ll(e)+'"'}function Id(e){return'link[rel="stylesheet"]['+e+"]"}function Jp(e){return Z({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,t,a,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[kn]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[kn]=!0,t.onload=t.onerror=_f.bind(null,t),vl(t,"link",a),rn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Kc(e){return'[src="'+Ll(e)+'"]'}function Zd(e){return"script[async]"+e}function $p(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ll(a.href)+'"]');if(i)return t.instance=i,rn(i),i;var u=Z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),vl(i,"style",u),i0(i,a.precedence,e),t.instance=i;case"stylesheet":u=Xc(a.href);var c=e.querySelector(Id(u));if(c)return t.state.loading|=4,t.instance=c,rn(c),c;i=Jp(a),(u=ti.get(u))&&dg(i,u),c=(e.ownerDocument||e).createElement("link"),rn(c);var p=c;return p._p=new Promise(function(_,D){p.onload=_,p.onerror=D}),vl(c,"link",i),t.state.loading|=4,i0(c,a.precedence,e),t.instance=c;case"script":return c=Kc(a.src),(u=e.querySelector(Zd(c)))?(t.instance=u,rn(u),u):(i=a,(u=ti.get(c))&&(i=Z({},a),mg(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),vl(u,"link",i),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,i0(i,a.precedence,e));return t.instance}function i0(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,c=u,p=0;p<i.length;p++){var _=i[p];if(_.dataset.precedence===t)c=_;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function dg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var r0=null;function Wp(e,t,a){if(r0===null){var i=new Map,u=r0=new Map;u.set(a,i)}else u=r0,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var c=a[u];if(!(c[$l]||c[Tn]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var _=i.get(p);_?_.push(c):i.set(p,[c])}}return i}function vg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Qy(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function eh(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nh(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function lh(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=nh(t),e.suspenseyImages.push(t)),e=Xy.bind(e),t.decode().then(e,e))}function Iy(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Xc(i.href),c=t.querySelector(Id(u));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xd.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,rn(c);return}c=t.ownerDocument||t,i=Jp(i),(u=ti.get(u))&&dg(i,u),c=c.createElement("link"),rn(c);var p=c;p._p=new Promise(function(_,D){p.onload=_,p.onerror=D}),vl(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xd.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var u0=0;function Zy(e,t){return e.stylesheets&&e.count===0&&s0(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&s0(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&u0===0&&(u0=62500*dy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&s0(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>u0?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(u)}}:null}function ah(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)s0(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Xd(){this.count--,ah(this)}function Xy(){this.imgCount--,ah(this)}var o0=null;function s0(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,o0=new Map,t.forEach(Ky,e),o0=null,Xd.call(e))}function Ky(e,t){if(!(t.state.loading&4)){var a=o0.get(e);if(a)var i=a.get(null);else{a=new Map,o0.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var p=u[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}u=t.instance,p=u.getAttribute("data-precedence"),c=a.get(p)||i,c===i&&a.set(null,u),a.set(p,u),this.count++,i=Xd.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Jc={$$typeof:Oe,Provider:null,Consumer:null,_currentValue:Ln,_currentValue2:Ln,_threadCount:0};function Jy(e,t,a,i,u,c,p,_,D){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.hiddenUpdates=Rs(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.transitionTypes=null,this.incompleteTransitions=new Map}function ih(e,t,a,i,u,c,p,_,D,Y,X,ne){return e=new Jy(e,t,a,p,D,Y,X,ne,_),t=1,c===!0&&(t|=24),c=ul(3,null,null,t),e.current=c,c.stateNode=e,t=sc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:t},sl(c),e}function rh(e){return e?(e=ir,e):ir}function uh(e,t,a,i,u,c){u=rh(u),i.context===null?i.context=u:i.pendingContext=u,i=cr(t),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=_a(e,i,t),a!==null&&(Vn(a,e,t),Ma(a,e,t))}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function gg(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function sh(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&Vn(t,e,67108864),gg(e,67108864)}}function ch(e){if(e.tag===13||e.tag===31){var t=nl();t=Or(t);var a=pi(e,t);a!==null&&Vn(a,e,t),gg(e,t)}}var $c=!0;function $y(e,t,a,i){var u=ye.T;ye.T=null;var c=we.p;try{we.p=2,pg(e,t,a,i)}finally{we.p=c,ye.T=u}}function Wy(e,t,a,i){var u=ye.T;ye.T=null;var c=we.p;try{we.p=8,pg(e,t,a,i)}finally{we.p=c,ye.T=u}}function pg(e,t,a,i){if($c){var u=hg(i);if(u===null)J0(e,t,i,c0,a),dh(e,i);else if(t_(u,e,t,a,i))i.stopPropagation();else if(dh(e,i),t&4&&-1<e_.indexOf(e)){for(;u!==null;){var c=oi(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ea(c.pendingLanes);if(p!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;p;){var D=1<<31-bl(p);_.entanglements[1]|=D,p&=~D}N(c),(lt&6)===0&&(st=_l()+500,Q(0))}}break;case 31:case 13:_=pi(c,2),_!==null&&Vn(_,c,2),je(),gg(c,2)}if(c=hg(i),c===null&&J0(e,t,i,c0,a),c===u)break;u=c}u!==null&&i.stopPropagation()}else J0(e,t,i,null,a)}}function hg(e){return e=qs(e),yg(e)}var c0=null;function yg(e){if(c0=null,e=ui(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return c0=e,null}function fh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sm()){case df:return 2;case zm:return 8;case cu:case P0:return 32;case mf:return 268435456;default:return 32}default:return 32}}var _g=!1,io=null,ro=null,uo=null,Kd=new Map,Jd=new Map,oo=[],e_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dh(e,t){switch(e){case"focusin":case"focusout":io=null;break;case"dragenter":case"dragleave":ro=null;break;case"mouseover":case"mouseout":uo=null;break;case"pointerover":case"pointerout":Kd.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jd.delete(t.pointerId)}}function $d(e,t,a,i,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[u]},t!==null&&(t=oi(t),t!==null&&sh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function t_(e,t,a,i,u){switch(t){case"focusin":return io=$d(io,e,t,a,i,u),!0;case"dragenter":return ro=$d(ro,e,t,a,i,u),!0;case"mouseover":return uo=$d(uo,e,t,a,i,u),!0;case"pointerover":var c=u.pointerId;return Kd.set(c,$d(Kd.get(c)||null,e,t,a,i,u)),!0;case"gotpointercapture":return c=u.pointerId,Jd.set(c,$d(Jd.get(c)||null,e,t,a,i,u)),!0}return!1}function mh(e){var t=ui(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,du(e.priority,function(){ch(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,du(e.priority,function(){ch(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function f0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hg(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);$i=i,a.target.dispatchEvent(i),$i=null}else return t=oi(a),t!==null&&sh(t),e.blockedOn=a,!1;t.shift()}return!0}function vh(e,t,a){f0(e)&&a.delete(t)}function n_(){_g=!1,io!==null&&f0(io)&&(io=null),ro!==null&&f0(ro)&&(ro=null),uo!==null&&f0(uo)&&(uo=null),Kd.forEach(vh),Jd.forEach(vh)}function d0(e,t){e.blockedOn===t&&(e.blockedOn=null,_g||(_g=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,n_)))}var m0=null;function gh(e){m0!==e&&(m0=e,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){m0===e&&(m0=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],u=e[t+2];if(typeof i!="function"){if(yg(i||a)===null)continue;break}var c=oi(a);c!==null&&(e.splice(t,3),t-=3,bd(c,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function Wc(e){function t(D){return d0(D,e)}io!==null&&d0(io,e),ro!==null&&d0(ro,e),uo!==null&&d0(uo,e),Kd.forEach(t),Jd.forEach(t);for(var a=0;a<oo.length;a++){var i=oo[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oo.length&&(a=oo[0],a.blockedOn===null);)mh(a),a.blockedOn===null&&oo.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],c=a[i+1],p=u[al]||null;if(typeof c=="function")p||gh(a);else if(p){var _=null;if(c&&c.hasAttribute("formAction")){if(u=c,p=c[al]||null)_=p.formAction;else if(yg(u)!==null)continue}else _=p.action;typeof _=="function"?a[i+1]=_:(a.splice(i,3),i-=3),gh(a)}}}function ph(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return u=p})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Cg(e){this._internalRoot=e}v0.prototype.render=Cg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,i=nl();uh(a,i,e,t,null,null)},v0.prototype.unmount=Cg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uh(e.current,2,null,e,null,null),je(),t[Ii]=null}};function v0(e){this._internalRoot=e}v0.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<oo.length&&t!==0&&t<oo[a].priority;a++);oo.splice(a,0,e),a===0&&mh(e)}};var hh=s.version;if(hh!=="19.3.1")throw Error(g(527,hh,"19.3.1"));we.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=w(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var l_={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ye,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var g0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!g0.isDisabled&&g0.supportsFiber)try{qi=g0.inject(l_),Cl=g0}catch{}}return Wd.createRoot=function(e,t){if(!h(e))throw Error(g(299));var a=!1,i="",u=Mv,c=Uv,p=Pv;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=ih(e,1,!1,null,null,a,i,null,u,c,p,ph),e[Ii]=t.current,qd(e),new Cg(t)},Wd.hydrateRoot=function(e,t,a){if(!h(e))throw Error(g(299));var i=!1,u="",c=Mv,p=Uv,_=Pv,D=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.formState!==void 0&&(D=a.formState)),t=ih(e,1,!0,t,a??null,i,u,D,c,p,_,ph),t.context=rh(null),a=t.current,i=nl(),i=Or(i),u=cr(i),u.callback=null,_a(a,u,i),a=i,t.current.lanes=a,Qi(t,a),N(t),e[Ii]=t.current,qd(e),new v0(t)},Wd.version="19.3.1",Wd}var Ah;function T_(){if(Ah)return Sg.exports;Ah=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(s){console.error(s)}}return d(),Sg.exports=E_(),Sg.exports}var A_=T_(),Ag={exports:{}},em={};var wh;function w_(){if(wh)return em;wh=1;var d=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function v(g,h,b){var E=null;if(b!==void 0&&(E=""+b),h.key!==void 0&&(E=""+h.key),"key"in h){b={};for(var T in h)T!=="key"&&(b[T]=h[T])}else b=h;return h=b.ref,{$$typeof:d,type:g,key:E,ref:h!==void 0?h:null,props:b}}return em.Fragment=s,em.jsx=v,em.jsxs=v,em}var Dh;function D_(){return Dh||(Dh=1,Ag.exports=w_()),Ag.exports}var se=D_(),wg={exports:{}},Dg={},Ng={exports:{}},Og={};var Nh;function N_(){if(Nh)return Og;Nh=1;var d=vm();function s(S,U){return S===U&&(S!==0||1/S===1/U)||S!==S&&U!==U}var v=typeof Object.is=="function"?Object.is:s,g=d.useState,h=d.useEffect,b=d.useLayoutEffect,E=d.useDebugValue;function T(S,U){var P=U(),K=g({inst:{value:P,getSnapshot:U}}),J=K[0].inst,j=K[1];return b(function(){J.value=P,J.getSnapshot=U,x(J)&&j({inst:J})},[S,P,U]),h(function(){return x(J)&&j({inst:J}),S(function(){x(J)&&j({inst:J})})},[S]),E(P),P}function x(S){var U=S.getSnapshot;S=S.value;try{var P=U();return!v(S,P)}catch{return!0}}function w(S,U){return U()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?w:T;return Og.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:z,Og}var Oh;function O_(){return Oh||(Oh=1,Ng.exports=N_()),Ng.exports}var Rh;function R_(){if(Rh)return Dg;Rh=1;var d=vm(),s=O_();function v(w,z){return w===z&&(w!==0||1/w===1/z)||w!==w&&z!==z}var g=typeof Object.is=="function"?Object.is:v,h=s.useSyncExternalStore,b=d.useRef,E=d.useEffect,T=d.useMemo,x=d.useDebugValue;return Dg.useSyncExternalStoreWithSelector=function(w,z,S,U,P){var K=b(null);if(K.current===null){var J={hasValue:!1,value:null};K.current=J}else J=K.current;K=T(function(){function A(L){if(!C){if(C=!0,O=L,L=U(L),P!==void 0&&J.hasValue){var Z=J.value;if(P(Z,L))return M=Z}return M=L}if(Z=M,g(O,L))return Z;var W=U(L);return P!==void 0&&P(Z,W)?(O=L,Z):(O=L,M=W)}var C=!1,O,M,H=S===void 0?null:S;return[function(){return A(z())},H===null?void 0:function(){return A(H())}]},[z,S,U,P]);var j=h(w,K[0],K[1]);return E(function(){J.hasValue=!0,J.value=j},[j]),x(j),j},Dg}var Bh;function B_(){return Bh||(Bh=1,wg.exports=R_()),wg.exports}var L_=B_();const M_=ip(L_),Lh=d=>{let s;const v=new Set,g=(w,z)=>{const S=typeof w=="function"?w(s):w;if(!Object.is(S,s)){const U=s;s=z??(typeof S!="object"||S===null)?S:Object.assign({},s,S),v.forEach(P=>P(s,U))}},h=()=>s,T={setState:g,getState:h,getInitialState:()=>x,subscribe:w=>(v.add(w),()=>v.delete(w))},x=s=d(g,h,T);return T},U_=(d=>d?Lh(d):Lh),{useSyncExternalStoreWithSelector:P_}=M_,H_=d=>d;function F_(d,s=H_,v){const g=P_(d.subscribe,d.getState,d.getInitialState,s,v);return At.useDebugValue(g),g}const Mh=(d,s)=>{const v=U_(d),g=(h,b=s)=>F_(v,h,b);return Object.assign(g,v),g},C1=((d,s)=>d?Mh(d,s):Mh),j_=d=>typeof d=="object"&&typeof d.then=="function",Ts=[];function b1(d,s,v=(g,h)=>g===h){if(d===s)return!0;if(!d||!s)return!1;const g=d.length;if(s.length!==g)return!1;for(let h=0;h<g;h++)if(!v(d[h],s[h]))return!1;return!0}function x1(d,s=null,v=!1,g={}){s===null&&(s=[d]);for(const b of Ts)if(b1(s,b.keys,b.equal)){if(v)return;if(Object.prototype.hasOwnProperty.call(b,"error"))throw b.error;if(Object.prototype.hasOwnProperty.call(b,"response"))return g.lifespan&&g.lifespan>0&&(b.timeout&&clearTimeout(b.timeout),b.timeout=setTimeout(b.remove,g.lifespan)),b.response;if(!v)throw b.promise}const h={keys:s,equal:g.equal,remove:()=>{const b=Ts.indexOf(h);b!==-1&&Ts.splice(b,1)},promise:(j_(d)?d:d(...s)).then(b=>{h.response=b,g.lifespan&&g.lifespan>0&&(h.timeout=setTimeout(h.remove,g.lifespan))}).catch(b=>h.error=b)};if(Ts.push(h),!v)throw h.promise}const V_=(d,s,v)=>x1(d,s,!1,v),Y_=(d,s,v)=>{x1(d,s,!0,v)},q_=d=>{if(d===void 0||d.length===0)Ts.splice(0,Ts.length);else{const s=Ts.find(v=>b1(d,v.keys,v.equal));s&&s.remove()}};(()=>{var d,s;return typeof window<"u"&&(((d=window.document)==null?void 0:d.createElement)||((s=window.navigator)==null?void 0:s.product)==="ReactNative")})()?At.useLayoutEffect:At.useEffect;function B0(d,s,v){if(!d)return;if(v(d)===!0)return d;let g=s?d.return:d.child;for(;g;){const h=B0(g,s,v);if(h)return h;g=s?null:g.sibling}}function S1(d){try{return Object.defineProperties(d,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return d}}const rp=S1(At.createContext(null));let z1=class extends At.Component{render(){return At.createElement(rp.Provider,{value:this._reactInternals},this.props.children)}};function up(){const d=At.useContext(rp);if(d===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const s=At.useId();return At.useMemo(()=>{for(const v of[d,d?.alternate]){if(!v)continue;const g=B0(v,!1,h=>{let b=h.memoizedState;for(;b;){if(b.memoizedState===s)return!0;b=b.next}});if(g)return g}},[d,s])}const k_=Symbol.for("react.context"),G_=d=>d!==null&&typeof d=="object"&&"$$typeof"in d&&d.$$typeof===k_;function Q_(){const d=up(),[s]=At.useState(()=>new Map);s.clear();let v=d;for(;v;){const g=v.type;G_(g)&&g!==rp&&!s.has(g)&&s.set(g,At.use(S1(g))),v=v.return}return s}function I_(){const d=Q_();return At.useMemo(()=>Array.from(d.keys()).reduce((s,v)=>g=>At.createElement(s,null,At.createElement(v.Provider,{...g,value:d.get(v)})),s=>At.createElement(z1,{...s})),[d])}function Z_(d){if(typeof requestAnimationFrame=="function"){const v=requestAnimationFrame(d);return()=>cancelAnimationFrame(v)}const s=setTimeout(d,16);return()=>clearTimeout(s)}function X_(){if(!At.Activity)throw new Error("its-fine: useActivityBridge requires React 19.2 or later!");const d=up(),[s]=At.useState(()=>{const v=[];let g=!1;B0(d,!0,x=>{var w,z;if(x.elementType===At.Activity){const S=((w=x.child)==null?void 0:w.tag)===22?x.child.stateNode:null;if(typeof S?._visibility!="number")throw new Error("its-fine: unsupported React Activity internals!");v.push(S)}else x.tag===22&&((z=x.return)==null?void 0:z.elementType)!==At.Activity&&(g=!0)});let h="hidden";const b=new Set;let E;const T={mounted:!1,connected:!1,subscribe(x){return b.add(x),()=>{b.delete(x)}},sync(x){T.mounted&&!T.connected&&g&&v.length>0?E||(E=Z_(()=>{E=void 0,T.sync(!0)})):(E?.(),E=void 0);let w=h;if(T.mounted?T.connected?w="visible":x&&(w=v.every(z=>(z._visibility&1)!==0)?"visible":"hidden"):w="hidden",h!==w){h=w;for(const z of b)z()}},Bridge({children:x}){return At.createElement(At.Activity,{mode:At.useSyncExternalStore(T.subscribe,()=>h,()=>"hidden")},x)}};return T});return At.useInsertionEffect(()=>(s.mounted=!0,queueMicrotask(()=>s.sync(!1)),()=>{s.mounted=!1,queueMicrotask(()=>s.sync(!1))}),[s]),At.useLayoutEffect(()=>(s.connected=!0,s.sync(!1),()=>{s.connected=!1,s.sync(!0)}),[s]),s.Bridge}var iu=_1();const K_=ip(iu),Ns=((d,s)=>typeof window<"u"&&(((d=window.document)==null?void 0:d.createElement)||((s=window.navigator)==null?void 0:s.product)==="ReactNative"))()?ue.useLayoutEffect:ue.useEffect;function op(d){const s=ue.useRef(d);return Ns(()=>{s.current=d},[d]),s}function J_({promise:d,onSettled:s}){return ue.use(d),Ns(s,[s]),null}function $_(){const[d,s]=ue.useState(null),v=ue.useCallback(()=>s(null),[]),g=ue.useCallback(b=>s(E=>E??Promise.resolve(b).then(()=>{},()=>{})),[]);return[d?se.jsx(ue.Suspense,{fallback:null,children:se.jsx(J_,{promise:d,onSettled:v})}):null,g]}const W_=ue.Activity?X_:()=>ue.Fragment;function e3(){const d=up(),s=I_(),v=W_();return ue.useMemo(()=>({children:g})=>{const b=!!B0(d,!0,E=>E.type===ue.StrictMode)?ue.StrictMode:ue.Fragment;return se.jsx(b,{children:se.jsx(v,{children:se.jsx(s,{children:g})})})},[d,s,v])}function t3({set:d}){return Ns(()=>(d(new Promise(()=>null)),()=>d(!1)),[d]),null}const n3=(d=>(d=class extends ue.Component{constructor(...v){super(...v),this.state={error:!1}}componentDidCatch(v){this.props.set(v)}render(){return this.state.error?null:this.props.children}},d.getDerivedStateFromError=()=>({error:!0}),d))();function sp(d){let s=d.root;for(;s.getState().previousRoot;)s=s.getState().previousRoot;return s}const E1=d=>d&&d.isOrthographicCamera,l3=d=>d&&d.hasOwnProperty("current"),a3=d=>d!=null&&(typeof d=="string"||typeof d=="number"||d.isColor),Uh=()=>{};function cp(d){var s;const v=typeof window<"u"?(s=window.devicePixelRatio)!=null?s:2:1;return Array.isArray(d)?Math.min(Math.max(d[0],v),d[1]):d}function i3(d){if(typeof window>"u"||typeof window.matchMedia!="function"||!window.devicePixelRatio)return()=>{};let s;const v=()=>{try{var b,E;s=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),typeof((b=s)==null?void 0:b.addEventListener)=="function"?s.addEventListener("change",h):(E=s)==null||E.addListener==null||E.addListener(h)}catch{s=void 0}},g=()=>{var b,E;typeof((b=s)==null?void 0:b.removeEventListener)=="function"?s.removeEventListener("change",h):(E=s)==null||E.removeListener==null||E.removeListener(h),s=void 0},h=()=>{g(),v(),d()};return v(),g}function ef(d){var s;return(s=d.__r3f)==null?void 0:s.root.getState()}const En={obj:d=>d===Object(d)&&!En.arr(d)&&typeof d!="function",fun:d=>typeof d=="function",str:d=>typeof d=="string",num:d=>typeof d=="number",boo:d=>typeof d=="boolean",und:d=>d===void 0,nul:d=>d===null,arr:d=>Array.isArray(d),equ(d,s,{arrays:v="shallow",objects:g="reference",strict:h=!0}={}){if(typeof d!=typeof s||!!d!=!!s)return!1;if(En.str(d)||En.num(d)||En.boo(d))return d===s;const b=En.obj(d);if(b&&g==="reference")return d===s;const E=En.arr(d);if(E&&v==="reference")return d===s;if((E||b)&&d===s)return!0;let T;for(T in d)if(!(T in s))return!1;if(b&&v==="shallow"&&g==="shallow"){for(T in h?s:d)if(!En.equ(d[T],s[T],{strict:h,objects:"reference"}))return!1}else for(T in h?s:d)if(d[T]!==s[T])return!1;if(En.und(T)){if(E&&d.length===0&&s.length===0||b&&Object.keys(d).length===0&&Object.keys(s).length===0)return!0;if(d!==s)return!1}return!0}};function r3(d){const s={nodes:{},materials:{},meshes:{}};return d&&d.traverse(v=>{v.name&&(s.nodes[v.name]=v),v.material&&!s.materials[v.material.name]&&(s.materials[v.material.name]=v.material),v.isMesh&&!s.meshes[v.name]&&(s.meshes[v.name]=v)}),s}function u3(d){d.type!=="Scene"&&(d.dispose==null||d.dispose());for(const s in d){const v=d[s];v?.type!=="Scene"&&(v==null||v.dispose==null||v.dispose())}}const T1=["children","key","ref"];function Kg(d){const s={};for(const v in d)T1.includes(v)||(s[v]=d[v]);return s}function T0(d,s,v,g){const h=d;let b=h?.__r3f;return b||(b={root:s,type:v,parent:null,children:[],props:Kg(g),object:h,eventCount:0,handlers:{},previousVisible:void 0,isHidden:!1},h&&(h.__r3f=b)),b}function fm(d,s){if(!s.includes("-"))return{root:d,key:s,target:d[s]};if(s in d)return{root:d,key:s,target:d[s]};let v=d;const g=s.split("-");for(const h of g){if(typeof v!="object"||v===null){if(v!==void 0){const b=g.slice(g.indexOf(h)).join("-");return{root:v,key:b,target:void 0}}return{root:d,key:s,target:void 0}}s=h,d=v,v=v[s]}return{root:d,key:s,target:v}}const Ph=/-\d+$/;function A0(d,s){if(En.str(s.props.attach)){if(Ph.test(s.props.attach)){const h=s.props.attach.replace(Ph,""),{root:b,key:E}=fm(d.object,h);Array.isArray(b[E])||(b[E]=[])}const{root:v,key:g}=fm(d.object,s.props.attach);s.previousAttach=v[g],v[g]=s.object}else En.fun(s.props.attach)&&(s.previousAttach=s.props.attach(d.object,s.object))}function w0(d,s){if(En.str(s.props.attach)){const{root:v,key:g}=fm(d.object,s.props.attach),h=s.previousAttach;h===void 0?delete v[g]:v[g]=h}else s.previousAttach==null||s.previousAttach(d.object,s.object);delete s.previousAttach}const Jg=[...T1,"args","dispose","attach","object","onUpdate","dispose"],Hh=new Map;function o3(d){let s=Hh.get(d.constructor);try{s||(s=new d.constructor,Hh.set(d.constructor,s))}catch{}return s}function s3(d,s){const v={};for(const g in s)if(!Jg.includes(g)&&!En.equ(s[g],d.props[g])){v[g]=s[g];for(const h in s)h.startsWith(`${g}-`)&&(v[h]=s[h])}for(const g in d.props){if(Jg.includes(g)||s.hasOwnProperty(g))continue;const{root:h,key:b}=fm(d.object,g);if(h.constructor&&h.constructor.length===0){const E=o3(h);En.und(E)||(v[g]=E[b])}else v[g]=0}return v}const c3=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],f3=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;function As(d,s){var v;const g=d.__r3f,h=g&&sp(g).getState(),b=g?.eventCount;for(const T in s){let x=s[T];if(Jg.includes(T))continue;if(g&&f3.test(T)){typeof x=="function"?g.handlers[T]=x:delete g.handlers[T],g.eventCount=Object.keys(g.handlers).length;continue}if(x===void 0)continue;if(T==="visible"&&g!=null&&g.isHidden&&g.previousVisible!==void 0){g.previousVisible=x;continue}let{root:w,key:z,target:S}=fm(d,T);if(S===void 0&&(typeof w!="object"||w===null))throw Error(`R3F: Cannot set "${T}". Ensure it is an object before setting "${z}".`);if(S instanceof Ye.Layers&&x instanceof Ye.Layers)S.mask=x.mask;else if(S instanceof Ye.Color&&a3(x))S.set(x);else if(S!==null&&typeof S=="object"&&typeof S.set=="function"&&typeof S.copy=="function"&&x!=null&&x.constructor&&S.constructor===x.constructor)S.copy(x);else if(S!==null&&typeof S=="object"&&typeof S.set=="function"&&Array.isArray(x))typeof S.fromArray=="function"?S.fromArray(x):S.set(...x);else if(S!==null&&typeof S=="object"&&typeof S.set=="function"&&typeof x=="number")typeof S.setScalar=="function"?S.setScalar(x):S.set(x);else if(w instanceof Ye.ShaderMaterial&&z==="uniforms"&&En.obj(x)){En.obj(w.uniforms)||(w.uniforms={});const U=w.uniforms,P=x;for(const K in P){const J=P[K],j=U[K];j?Object.assign(j,J):U[K]={...J}}}else{var E;w[z]=x,h&&!h.linear&&c3.includes(z)&&(E=w[z])!=null&&E.isTexture&&w[z].format===Ye.RGBAFormat&&w[z].type===Ye.UnsignedByteType&&(w[z].colorSpace=Ye.SRGBColorSpace)}}if(g!=null&&g.parent&&h!=null&&h.internal&&(v=g.object)!=null&&v.isObject3D&&b!==g.eventCount){const T=g.object,x=h.internal.interaction.indexOf(T);x>-1&&h.internal.interaction.splice(x,1),g.eventCount&&T.raycast!==null&&h.internal.interaction.push(T)}return g&&g.props.attach===void 0&&(g.object.isBufferGeometry?g.props.attach="geometry":g.object.isMaterial&&(g.props.attach="material")),g&&gm(g),d}function gm(d){var s;if(!d.parent)return;d.props.onUpdate==null||d.props.onUpdate(d.object);const v=(s=d.root)==null||s.getState==null?void 0:s.getState();v&&v.internal.frames===0&&v.invalidate()}function A1(d,s){d.manual||(E1(d)?(d.left=s.width/-2,d.right=s.width/2,d.top=s.height/2,d.bottom=s.height/-2):d.aspect=s.width/s.height,d.updateProjectionMatrix())}const Zl=d=>d?.isObject3D;function um(d){return(d.eventObject||d.object).uuid+"/"+d.index+d.instanceId}function w1(d,s,v,g){const h=v.get(s);h&&(v.delete(s),v.size===0&&(d.delete(g),h.target.releasePointerCapture(g)))}function d3(d,s,v){const{internal:g}=d.getState();for(let h=0;h<g.interaction.length;h++)g.interaction[h]===s&&(g.interaction[h]=v);for(let h=0;h<g.initialHits.length;h++)g.initialHits[h]===s&&(g.initialHits[h]=v);g.hovered.forEach((h,b)=>{if(h.eventObject===s||h.object===s){g.hovered.delete(b);const E={...h,eventObject:h.eventObject===s?v:h.eventObject,object:h.object===s?v:h.object};g.hovered.set(um(E),E)}}),g.capturedMap.forEach(h=>{for(const[b,E]of Array.from(h)){const{intersection:T}=E;b!==s&&T.object!==s&&T.eventObject!==s||(b===s&&h.delete(b),h.set(b===s?v:b,{...E,intersection:{...T,object:T.object===s?v:T.object,eventObject:T.eventObject===s?v:T.eventObject}}))}})}function m3(d,s){const{internal:v}=d.getState();v.interaction=v.interaction.filter(g=>g!==s),v.initialHits=v.initialHits.filter(g=>g!==s),v.hovered.forEach((g,h)=>{(g.eventObject===s||g.object===s)&&v.hovered.delete(h)}),v.capturedMap.forEach((g,h)=>{w1(v.capturedMap,s,g,h)})}function v3(d){function s(x){const{internal:w}=d.getState(),z=x.offsetX-w.initialClick[0],S=x.offsetY-w.initialClick[1];return Math.round(Math.sqrt(z*z+S*S))}function v(x){return x.filter(w=>["Move","Over","Enter","Out","Leave"].some(z=>{var S;return(S=w.__r3f)==null?void 0:S.handlers["onPointer"+z]}))}function g(x,w){const z=d.getState(),S=new Set,U=[],P=w?w(z.internal.interaction):z.internal.interaction;for(let A=0;A<P.length;A++){const C=ef(P[A]);C&&(C.raycaster.camera=void 0)}z.previousRoot||z.events.compute==null||z.events.compute(x,z);function K(A){const C=ef(A);if(!C||!C.events.enabled||C.raycaster.camera===null)return[];if(C.raycaster.camera===void 0){var O;C.events.compute==null||C.events.compute(x,C,(O=C.previousRoot)==null?void 0:O.getState()),C.raycaster.camera===void 0&&(C.raycaster.camera=null)}return C.raycaster.camera?C.raycaster.intersectObject(A,!0):[]}let J=P.flatMap(K).sort((A,C)=>{const O=ef(A.object),M=ef(C.object);return!O||!M?A.distance-C.distance:M.events.priority-O.events.priority||A.distance-C.distance}).filter(A=>{const C=um(A);return S.has(C)?!1:(S.add(C),!0)});z.events.filter&&(J=z.events.filter(J,z));for(const A of J){let C=A.object;for(;C;){var j;(j=C.__r3f)!=null&&j.eventCount&&U.push({...A,eventObject:C}),C=C.parent}}if("pointerId"in x&&z.internal.capturedMap.has(x.pointerId))for(let A of z.internal.capturedMap.get(x.pointerId).values())S.has(um(A.intersection))||U.push(A.intersection);return U}function h(x,w,z,S){if(x.length){const U={stopped:!1};for(const P of x){let K=ef(P.object);if(K||P.object.traverseAncestors(J=>{const j=ef(J);if(j)return K=j,!1}),K){const{raycaster:J,pointer:j,camera:A,internal:C}=K,O=new Ye.Vector3(j.x,j.y,0).unproject(A),M=de=>{var me,Te;return(me=(Te=C.capturedMap.get(de))==null?void 0:Te.has(P.eventObject))!=null?me:!1},H=de=>{const me={intersection:P,target:w.target};C.capturedMap.has(de)?C.capturedMap.get(de).set(P.eventObject,me):C.capturedMap.set(de,new Map([[P.eventObject,me]])),w.target.setPointerCapture(de)},L=de=>{const me=C.capturedMap.get(de);me&&w1(C.capturedMap,P.eventObject,me,de)};let Z={};for(let de in w){let me=w[de];typeof me!="function"&&(Z[de]=me)}let W={...P,...Z,pointer:j,intersections:x,stopped:U.stopped,delta:z,unprojectedPoint:O,ray:J.ray,camera:A,stopPropagation(){const de="pointerId"in w&&C.capturedMap.get(w.pointerId);if((!de||de.has(P.eventObject))&&(W.stopped=U.stopped=!0,C.hovered.size&&Array.from(C.hovered.values()).find(me=>me.eventObject===P.eventObject))){const me=x.slice(0,x.indexOf(P));b([...me,P])}},target:{hasPointerCapture:M,setPointerCapture:H,releasePointerCapture:L},currentTarget:{hasPointerCapture:M,setPointerCapture:H,releasePointerCapture:L},nativeEvent:w};if(S(W),U.stopped===!0)break}}}return x}function b(x){const{internal:w}=d.getState();for(const z of w.hovered.values())if(!x.length||!x.find(S=>S.object===z.object&&S.index===z.index&&S.instanceId===z.instanceId)){const U=z.eventObject.__r3f;if(w.hovered.delete(um(z)),U!=null&&U.eventCount){const P=U.handlers,K={...z,intersections:x};P.onPointerOut==null||P.onPointerOut(K),P.onPointerLeave==null||P.onPointerLeave(K)}}}function E(x,w){for(let z=0;z<w.length;z++){const S=w[z].__r3f;S==null||S.handlers.onPointerMissed==null||S.handlers.onPointerMissed(x)}}function T(x){switch(x){case"onPointerLeave":case"onPointerCancel":return()=>b([]);case"onLostPointerCapture":return w=>{const{internal:z}=d.getState();"pointerId"in w&&z.capturedMap.has(w.pointerId)&&requestAnimationFrame(()=>{z.capturedMap.has(w.pointerId)&&(z.capturedMap.delete(w.pointerId),b([]))})}}return function(z){const{onPointerMissed:S,internal:U}=d.getState();U.lastEvent.current=z;const P=x==="onPointerMove",K=x==="onClick"||x==="onContextMenu"||x==="onDoubleClick",j=g(z,P?v:void 0),A=K?s(z):0;x==="onPointerDown"&&(U.initialClick=[z.offsetX,z.offsetY],U.initialHits=j.map(O=>O.eventObject)),K&&!j.length&&A<=2&&(E(z,U.interaction),S&&S(z)),P&&b(j);function C(O){const M=O.eventObject,H=M.__r3f;if(!(H!=null&&H.eventCount))return;const L=H.handlers;if(P){if(L.onPointerOver||L.onPointerEnter||L.onPointerOut||L.onPointerLeave){const Z=um(O),W=U.hovered.get(Z);W?W.stopped&&O.stopPropagation():(U.hovered.set(Z,O),L.onPointerOver==null||L.onPointerOver(O),L.onPointerEnter==null||L.onPointerEnter(O))}L.onPointerMove==null||L.onPointerMove(O)}else{const Z=L[x];Z?(!K||U.initialHits.includes(M))&&(E(z,U.interaction.filter(W=>!U.initialHits.includes(W))),Z(O)):K&&U.initialHits.includes(M)&&E(z,U.interaction.filter(W=>!U.initialHits.includes(W)))}}h(j,z,A,C)}}return{handlePointer:T}}const fp=d=>typeof d?.then=="function",g3=d=>Object.assign(Promise.resolve(d),{status:"fulfilled",value:d}),p3=d=>{const s=Promise.reject(d);return s.catch(()=>{}),Object.assign(s,{status:"rejected",reason:d})},h3=()=>{let d,s;const v=new Promise((g,h)=>{d=b=>{Object.assign(v,{status:"fulfilled",value:b}),g(b)},s=b=>{Object.assign(v,{status:"rejected",reason:b}),h(b)}});return v.status="pending",v.catch(()=>{}),{promise:v,resolve:d,reject:s}},dp=d=>!!(d!=null&&d.render);function y3(d,s){const v={canvas:d,powerPreference:"high-performance",antialias:!0,alpha:!0};return typeof s=="function"?s(v):dp(s)?s:new Ye.WebGLRenderer({...v,...s})}function _3(d){if((d.hasInitialized==null?void 0:d.hasInitialized())===!1)return;const s=sm(()=>{var v;return d.dispose?d.dispose():(v=d.renderLists)==null||v.dispose==null?void 0:v.dispose()});if(fp(s))return Promise.resolve(s).catch(v=>console.warn("[R3F] Error disposing renderer",v)).then(()=>sm(()=>d.forceContextLoss==null?void 0:d.forceContextLoss()));sm(()=>d.forceContextLoss==null?void 0:d.forceContextLoss())}function C3(d,s){if(d){if(s)return _3(d);sm(()=>{var v;return(v=d.renderLists)==null||v.dispose==null?void 0:v.dispose()}),sm(()=>d.forceContextLoss==null?void 0:d.forceContextLoss())}}function sm(d){try{return d()}catch(s){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",s)}}const mp=ue.createContext(null),b3=(d,s)=>{const v=C1((T,x)=>{const w=new Ye.Vector3,z=new Ye.Vector3,S=new Ye.Vector3;function U(A=x().camera,C=z,O=x().size){const{width:M,height:H,top:L,left:Z}=O,W=M/H;C.isVector3?S.copy(C):S.set(...C);const de=A.getWorldPosition(w).distanceTo(S);if(E1(A))return{width:M/A.zoom,height:H/A.zoom,top:L,left:Z,factor:1,distance:de,aspect:W};{const me=A.fov*Math.PI/180,Te=2*Math.tan(me/2)*de,xe=Te*(M/H);return{width:xe,height:Te,top:L,left:Z,factor:M/xe,distance:de,aspect:W}}}let P;const K=A=>T(C=>({performance:{...C.performance,current:A}})),J=new Ye.Vector2;return{set:T,get:x,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(A=1)=>d(x(),A),advance:(A,C)=>s(A,C,x()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Ye.Clock,pointer:J,mouse:J,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const A=x();P&&clearTimeout(P),A.performance.current!==A.performance.min&&K(A.performance.min),P=setTimeout(()=>K(x().performance.max),A.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:U},setEvents:A=>T(C=>({...C,events:{...C.events,...A}})),setSize:(A,C,O=0,M=0)=>{const H=x().camera,L={width:A,height:C,top:O,left:M};T(Z=>({size:L,viewport:{...Z.viewport,...U(H,z,L)}}))},setDpr:A=>T(C=>{const O=cp(A);return{viewport:{...C.viewport,dpr:O,initialDpr:C.viewport.initialDpr||O}}}),setFrameloop:(A="always")=>{const C=x().clock;C.stop(),C.elapsedTime=0,A!=="never"&&(C.start(),C.elapsedTime=0),T(()=>({frameloop:A}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:ue.createRef(),active:!1,frames:0,priority:0,subscribe:(A,C,O)=>{const M=x().internal;return M.priority=M.priority+(C>0?1:0),M.subscribers.push({ref:A,priority:C,store:O}),M.subscribers=M.subscribers.sort((H,L)=>H.priority-L.priority),()=>{const H=x().internal;H!=null&&H.subscribers&&(H.priority=H.priority-(C>0?1:0),H.subscribers=H.subscribers.filter(L=>L.ref!==A))}}}}}),g=v.getState();let h=g.size,b=g.viewport.dpr,E=g.camera;return v.subscribe(()=>{const{camera:T,size:x,viewport:w,gl:z,set:S}=v.getState();if(x.width!==h.width||x.height!==h.height||w.dpr!==b){h=x,b=w.dpr,A1(T,x),w.dpr>0&&z.setPixelRatio(w.dpr);const U=typeof HTMLCanvasElement<"u"&&z.domElement instanceof HTMLCanvasElement;z.setSize(x.width,x.height,U)}T!==E&&(E=T,S(U=>({viewport:{...U.viewport,...U.viewport.getCurrentViewport(T)}})))}),v.subscribe(T=>d(T)),v};function vp(){const d=ue.useContext(mp);if(!d)throw new Error("R3F: Hooks can only be used within the Canvas component!");return d}function Rl(d=v=>v,s){return vp()(d,s)}function pm(d,s=0){const v=vp(),g=v.getState().internal.subscribe,h=op(d);return Ns(()=>g(h,s,v),[s,g,v]),null}const Fh=new WeakMap,x3=d=>{var s;return typeof d=="function"&&(d==null||(s=d.prototype)==null?void 0:s.constructor)===d};function D1(d,s){return function(v,...g){let h;return x3(v)?(h=Fh.get(v),h||(h=new v,Fh.set(v,h))):h=v,d&&d(h),Promise.all(g.map(b=>new Promise((E,T)=>h.load(b,x=>{Zl(x?.scene)&&Object.assign(x,r3(x.scene)),E(x)},s,x=>T(new Error(`Could not load ${b}: ${x?.message}`))))))}}function gp(d,s,v,g){const h=Array.isArray(s)?s:[s],b=V_(D1(v,g),[d,...h],{equal:En.equ});return Array.isArray(s)?b:b[0]}gp.preload=function(d,s,v){const g=Array.isArray(s)?s:[s];return Y_(D1(v),[d,...g])};gp.clear=function(d,s){const v=Array.isArray(s)?s:[s];return q_([d,...v])};const S3=1,jh=8,z0=32,Vh=2,z3=268435456,E3={objects:"shallow"};function T3(d,s){if(!s&&typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement&&d.parentElement){const{width:v,height:g,top:h,left:b}=d.parentElement.getBoundingClientRect();return{width:v,height:g,top:h,left:b}}else if(!s&&typeof OffscreenCanvas<"u"&&d instanceof OffscreenCanvas)return{width:d.width,height:d.height,top:0,left:0};return{width:0,height:0,top:0,left:0,...s}}function A3({store:d,configuration:s},v,g){const{gl:h,scene:b,camera:E,shadows:T=!1,linear:x=!1,flat:w=!1,legacy:z=!1,frameloop:S="always",dpr:U=[1,2],performance:P,onPointerMissed:K}=g,J=T3(v,g.size),j={...g,shadows:T,linear:x,flat:w,legacy:z,frameloop:S,size:J},A=d.getState(),C=A.gl,O=s.previous,M=me=>!O||!En.equ(j[me],O[me],E3);s.previous=void 0;let H=A.raycaster;if(H||A.set({raycaster:H=new Ye.Raycaster}),M("raycaster")){var L;const{params:me,...Te}=(L=g.raycaster)!=null?L:{};As(H,{...Te,params:{...H.params,...me}})}if(!A.camera||A.camera===s.camera&&M("camera")){s.camera=E;const me=E?.isCamera,Te=me?E:g.orthographic?new Ye.OrthographicCamera(0,0,0,0,.1,1e3):new Ye.PerspectiveCamera(75,0,.1,1e3);me||(Te.position.z=5,E&&(As(Te,E),Te.manual||("aspect"in E||"left"in E||"right"in E||"bottom"in E||"top"in E)&&(Te.manual=!0,Te.updateProjectionMatrix())),!A.camera&&!(E!=null&&E.rotation)&&Te.lookAt(0,0,0)),A.set({camera:Te}),H.camera=Te}if(!A.scene){let me;b!=null&&b.isScene?(me=b,T0(me,d,"",{})):(me=new Ye.Scene,T0(me,d,"",{}),b&&As(me,b)),A.set({scene:me})}if(g.events&&!A.events.handlers&&A.set({events:g.events(d)}),M("size")&&A.setSize(J.width,J.height,J.top,J.left),A.viewport.dpr!==cp(U)&&A.setDpr(U),M("frameloop")&&A.setFrameloop(S),M("onPointerMissed")&&A.set({onPointerMissed:K}),P&&M("performance")&&A.set(me=>({performance:{...me.performance,...P}})),!A.xr){var Z;const me=(et,tt)=>{const Oe=d.getState();Oe.frameloop!=="never"&&U1(et,!0,Oe,tt)},Te=()=>{const et=d.getState();et.gl.xr.enabled=et.gl.xr.isPresenting,et.gl.xr.setAnimationLoop(et.gl.xr.isPresenting?me:null),et.gl.xr.isPresenting||yp(et)},xe={connect(){const et=d.getState().gl;et.xr.addEventListener("sessionstart",Te),et.xr.addEventListener("sessionend",Te)},disconnect(){const et=d.getState().gl;et.xr.removeEventListener("sessionstart",Te),et.xr.removeEventListener("sessionend",Te)}};typeof((Z=C.xr)==null?void 0:Z.addEventListener)=="function"&&xe.connect(),A.set({xr:xe})}if(C.shadowMap&&M("shadows")){const me=C.shadowMap.enabled,Te=C.shadowMap.type;if(C.shadowMap.enabled=!!T,En.boo(T))C.shadowMap.type=Ye.PCFSoftShadowMap;else if(En.str(T)){var W;const xe={basic:Ye.BasicShadowMap,percentage:Ye.PCFShadowMap,soft:Ye.PCFSoftShadowMap,variance:Ye.VSMShadowMap};C.shadowMap.type=(W=xe[T])!=null?W:Ye.PCFSoftShadowMap}else En.obj(T)&&Object.assign(C.shadowMap,T);(me!==C.shadowMap.enabled||Te!==C.shadowMap.type)&&(C.shadowMap.needsUpdate=!0)}const de=h&&!En.fun(h)&&!dp(h)?h:void 0;M("legacy")&&(Ye.ColorManagement.enabled=!z,A.set({legacy:z})),M("linear")&&(de?.outputColorSpace===void 0&&(C.outputColorSpace=x?Ye.LinearSRGBColorSpace:Ye.SRGBColorSpace),A.set({linear:x})),M("flat")&&(de?.toneMapping===void 0&&(C.toneMapping=w?Ye.NoToneMapping:Ye.ACESFilmicToneMapping),A.set({flat:w})),de&&M("gl")&&As(C,de),s.previous=j}function w3(d){const s=()=>{var h;return(h=d.store.getState().gl)==null?void 0:h.xr},v=()=>{var h,b,E,T;const x=d.store.getState();if((h=s())!=null&&h.isPresenting||(b=s())!=null&&b.getSession!=null&&b.getSession()){s().addEventListener("sessionend",v);return}(E=s())==null||E.removeEventListener==null||E.removeEventListener("sessionend",v);const w=d.configuration.previous;if(!w)return;const z=(T=w.dpr)!=null?T:[1,2];x.viewport.dpr!==cp(z)&&x.setDpr(z)},g=i3(v);return()=>{var h;g(),(h=s())==null||h.removeEventListener==null||h.removeEventListener("sessionend",v)}}var D3={version:"9.8.2"};function N3(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Yh={exports:{}},qh={exports:{}},kh;function O3(){return kh||(kh=1,(function(d){d.exports=function(s){function v(n,l,r,o){return new id(n,l,r,o)}function g(){}function h(n){var l="https://react.dev/errors/"+n;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)l+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(n){for(var l=n,r=l;r&&!r.alternate;)l=r,(l.flags&4098)!==0&&(n=l.return),r=l.return;for(;l.return;)l=l.return;return l.tag===3?n:null}function E(n){if(b(n)!==n)throw Error(h(188))}function T(n){var l=n.alternate;if(!l){if(l=b(n),l===null)throw Error(h(188));return l!==n?null:n}for(var r=n,o=l;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(o=f.return,o!==null){r=o;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return E(f),n;if(m===o)return E(f),l;m=m.sibling}throw Error(h(188))}if(r.return!==o.return)r=f,o=m;else{for(var y=!1,N=f.child;N;){if(N===r){y=!0,r=f,o=m;break}if(N===o){y=!0,o=f,r=m;break}N=N.sibling}if(!y){for(N=m.child;N;){if(N===r){y=!0,r=m,o=f;break}if(N===o){y=!0,o=m,r=f;break}N=N.sibling}if(!y)throw Error(h(189))}}if(r.alternate!==o)throw Error(h(190))}if(r.tag!==3)throw Error(h(188));return r.stateNode.current===r?n:l}function x(n){var l=n.tag;if(l===5||l===26||l===27||l===6)return n;for(n=n.child;n!==null;){if(l=x(n),l!==null)return l;n=n.sibling}return null}function w(n){var l=n.tag;if(l===5||l===26||l===27||l===6)return n;for(n=n.child;n!==null;){if(n.tag!==4&&(l=w(n),l!==null))return l;n=n.sibling}return null}function z(n){return n===null||typeof n!="object"?null:(n=cd&&n[cd]||n["@@iterator"],typeof n=="function"?n:null)}function S(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Fl?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fr:return"Fragment";case Vr:return"Profiler";case vc:return"StrictMode";case Pa:return"Suspense";case Vu:return"SuspenseList";case Jo:return"Activity";case Fa:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case Ma:return"Portal";case Ua:return n.displayName||"Context";case ju:return(n._context.displayName||"Context")+".Consumer";case gc:var l=n.render;return n=n.displayName,n||(n=l.displayName||l.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pc:return l=n.displayName||null,l!==null?l:S(n.type)||"Memo";case Ha:l=n._payload,n=n._init;try{return S(n(l))}catch{}}return null}function U(n){return{current:n}}function P(n){0>Xu||(n.current=St[Xu],St[Xu]=null,Xu--)}function K(n,l){Xu++,St[Xu]=n.current,n.current=l}function J(n){return n>>>=0,n===0?32:31-(ss(n)/mr|0)|0}function j(n){var l=n&42;if(l!==0)return l;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function A(n,l,r){var o=n.pendingLanes;if(o===0)return 0;var f=0,m=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var N=o&134217727;return N!==0?(o=N&~m,o!==0?f=j(o):(y&=N,y!==0?f=j(y):r||(r=N&~n,r!==0&&(f=j(r))))):(N=o&~m,N!==0?f=j(N):y!==0?f=j(y):r||(r=o&~n,r!==0&&(f=j(r)))),f===0?0:l!==0&&l!==f&&(l&m)===0&&(m=f&-f,r=l&-l,m>=r||m===32&&(r&4194048)!==0)?l:f}function C(n,l){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&l)===0}function O(n,l){(l&8)!==0&&(l|=l&32);var r=n.entangledLanes;if(r!==0)for(n=n.entanglements,r&=l;0<r;){var o=31-zl(r),f=1<<o;l|=n[o],r&=~f}return l}function M(n,l){switch(n){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H(){var n=Vl;return Vl<<=1,(Vl&62914560)===0&&(Vl=4194304),n}function L(n){for(var l=[],r=0;31>r;r++)l.push(n);return l}function Z(n,l){n.pendingLanes|=l,l!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function W(n,l,r,o,f,m){var y=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var N=n.entanglements,Q=n.expirationTimes,le=n.hiddenUpdates;for(r=y&~r;0<r;){var ie=31-zl(r),oe=1<<ie;N[ie]=0,Q[ie]=-1;var ve=le[ie];if(ve!==null)for(le[ie]=null,ie=0;ie<ve.length;ie++){var ke=ve[ie];ke!==null&&(ke.lane&=-536870913)}r&=~oe}o!==0&&de(n,o,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(y&~l))}function de(n,l,r){n.pendingLanes|=l,n.suspendedLanes&=~l;var o=31-zl(l);n.entangledLanes|=l,n.entanglements[o]=n.entanglements[o]|1073741824|r&261930}function me(n,l){var r=n.entangledLanes|=l;for(n=n.entanglements;r;){var o=31-zl(r),f=1<<o;f&l|n[o]&l&&(n[o]|=l),r&=~f}}function Te(n,l){var r=l&-l;return r=(r&42)!==0?1:xe(r),(r&(n.suspendedLanes|l))!==0?0:r}function xe(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function et(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function tt(n){if(typeof Ud=="function"&&Pd(n),El&&typeof El.setStrictMode=="function")try{El.setStrictMode(vr,n)}catch{}}function Oe(n,l){if(n.name!=null&&n.name!=="auto")return n.name;if(l.autoName!==null)return l.autoName;n=Ql.identifierPrefix;var r=Mc++;return n="_"+n+"t_"+r.toString(32)+"_",l.autoName=n}function ce(n){var l;if(n==null||typeof n=="string")return n;var r=null,o=nu;if(o!==null)for(var f=0;f<o.length;f++){var m=n[o[f]];if(m!=null){if(m==="none")return"none";r=r==null?m:r+(" "+m)}}return(l=r)!=null?l:n.default}function Ce(n,l){return n=ce(n),l=ce(l),l==null?n==="auto"?null:n:l==="auto"?null:l}function be(n,l){return n===l&&(n!==0||1/n===1/l)||n!==n&&l!==l}function Je(n){if(Uc===void 0)try{throw Error()}catch(r){var l=r.stack.trim().match(/\n( *(at )?)/);Uc=l&&l[1]||"",cl=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uc+n+cl}function nt(n,l){if(!n||gr)return"";gr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(l){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(ct){var ve=ct}Reflect.construct(n,[],oe)}else{try{oe.call()}catch(ct){ve=ct}oe=!1;try{var ke=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),oe=!0,new n}finally{oe&&(ke!==void 0?Object.defineProperty(n.prototype,"props",ke):delete n.prototype.props)}}}else{try{throw Error()}catch(ct){ve=ct}(oe=n())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(ct){if(ct&&ve&&typeof ct.stack=="string")return[ct.stack,ve.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),y=m[0],N=m[1];if(y&&N){var Q=y.split(`
`),le=N.split(`
`);for(f=o=0;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;for(;f<le.length&&!le[f].includes("DetermineComponentFrameRoot");)f++;if(o===Q.length||f===le.length)for(o=Q.length-1,f=le.length-1;1<=o&&0<=f&&Q[o]!==le[f];)f--;for(;1<=o&&0<=f;o--,f--)if(Q[o]!==le[f]){if(o!==1||f!==1)do if(o--,f--,0>f||Q[o]!==le[f]){var ie=`
`+Q[o].replace(" at new "," at ");return n.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",n.displayName)),ie}while(1<=o&&0<=f);break}}}finally{gr=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Je(r):""}function hl(n,l){switch(n.tag){case 26:case 27:case 5:return Je(n.type);case 16:return Je("Lazy");case 13:return n.child!==l&&l!==null?Je("Suspense Fallback"):Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return nt(n.type,!1);case 11:return nt(n.type.render,!1);case 1:return nt(n.type,!0);case 31:return Je("Activity");case 30:return Je("ViewTransition");default:return""}}function Bl(n){try{var l="",r=null;do l+=hl(n,r),r=n,n=n.return;while(n);return l}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function an(n,l){if(typeof n=="object"&&n!==null){var r=Fd.get(n);return r!==void 0?r:(l={value:n,source:l,stack:Bl(l)},Fd.set(n,l),l)}return{value:n,source:l,stack:Bl(l)}}function R(n,l){fl[Di++]=Qr,fl[Di++]=$u,$u=n,Qr=l}function ae(n,l,r){Tl[Yl++]=ql,Tl[Yl++]=ba,Tl[Yl++]=Qa,Qa=n;var o=ql;n=ba;var f=32-zl(o)-1;o&=~(1<<f),r+=1;var m=32-zl(l)+f;if(30<m){var y=f-f%5;m=(o&(1<<y)-1).toString(32),o>>=y,f-=y,ql=1<<32-zl(l)+f|r<<f|o,ba=m+n}else ql=1<<m|r<<f|o,ba=n}function pe(n){n.return!==null&&(R(n,1),ae(n,1,0))}function _e(n){for(;n===$u;)$u=fl[--Di],fl[Di]=null,Qr=fl[--Di],fl[Di]=null;for(;n===Qa;)Qa=Tl[--Yl],Tl[Yl]=null,ba=Tl[--Yl],Tl[Yl]=null,ql=Tl[--Yl],Tl[Yl]=null}function Pe(n,l){Tl[Yl++]=ql,Tl[Yl++]=ba,Tl[Yl++]=Qa,ql=l.id,ba=l.overflow,Qa=n}function Xe(n,l){K(Ut,l),K(Wu,n),K(bn,null),n=xt(l),P(bn),K(bn,n)}function Qe(){P(bn),P(Wu),P(Ut)}function ye(n){var l=n.memoizedState;l!==null&&(l=l.memoizedState,Ca?Ya._currentValue=l:Ya._currentValue2=l,K(ut,n)),l=bn.current;var r=cn(l,n.type);l!==r&&(K(Wu,n),K(bn,r))}function we(n){Wu.current===n&&(P(bn),P(Wu)),ut.current===n&&(P(ut),Ca?Ya._currentValue=qr:Ya._currentValue2=qr)}function Ln(n){var l=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yl(an(l,n)),Ir}function Os(n,l){if(!_n)throw Error(h(175));fn(n.stateNode,n.type,n.memoizedProps,l,n)||Ln(n,!0)}function li(n){for(wt=n.return;wt;)switch(wt.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:wt=wt.return}}function ll(n){if(!_n||n!==wt)return!1;if(!Fe)return li(n),Fe=!0,!1;var l=n.tag;if(jt?l!==3&&l!==27&&(l!==5||Nc(n.type)&&!Ei(n.type,n.memoizedProps))&&Bt&&Ln(n):l!==3&&(l!==5||Nc(n.type)&&!Ei(n.type,n.memoizedProps))&&Bt&&Ln(n),li(n),l===13){if(!_n)throw Error(h(316));if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));Bt=kv(n)}else if(l===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));Bt=qv(n)}else Bt=jt&&l===27?Mv(n.type,Bt):wt?dr(n.stateNode):null;return!0}function Gt(){_n&&(Bt=wt=null,Fe=!1)}function Ct(){var n=Pt;return n!==null&&(Yn===null?Yn=n:Yn.push.apply(Yn,n),Pt=null),n}function yl(n){Pt===null?Pt=[n]:Pt.push(n)}function Xl(n,l,r){Ca?(K(Zr,l._currentValue),l._currentValue=r):(K(Zr,l._currentValue2),l._currentValue2=r)}function qn(n){var l=Zr.current;Ca?n._currentValue=l:n._currentValue2=l,P(Zr)}function Ar(n,l,r){for(;n!==null;){var o=n.alternate;if((n.childLanes&l)!==l?(n.childLanes|=l,o!==null&&(o.childLanes|=l)):o!==null&&(o.childLanes&l)!==l&&(o.childLanes|=l),n===r)break;n=n.return}}function uu(n,l,r,o){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var y=f.child;m=m.firstContext;e:for(;m!==null;){var N=m;m=f;for(var Q=0;Q<l.length;Q++)if(N.context===l[Q]){m.lanes|=r,N=m.alternate,N!==null&&(N.lanes|=r),Ar(m.return,r,n),o||(y=null);break e}m=N.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(h(341));y.lanes|=r,m=y.alternate,m!==null&&(m.lanes|=r),Ar(y,r,n),y=null}else f.tag===13&&f.memoizedState!==null&&f.memoizedState.dehydrated===null?(f.lanes|=r,y=f.alternate,y!==null&&(y.lanes|=r),Ar(f.return,r,n),y=f.child,y=y!==null?y.sibling:null):y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===n){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function Kl(n,l,r,o){n=null;for(var f=l,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(h(387));if(y=y.memoizedProps,y!==null){var N=f.type;Mt(f.pendingProps.value,y.value)||(n!==null?n.push(N):n=[N])}}else if(f===ut.current){if(y=f.alternate,y===null)throw Error(h(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ya):n=[Ya])}f=f.return}return n!==null&&uu(l,n,r,o),l.flags|=262144,n!==null}function ou(n){for(n=n.firstContext;n!==null;){var l=n.context;if(!Mt(Ca?l._currentValue:l._currentValue2,n.memoizedValue))return!0;n=n.next}return!1}function za(n){Ni=n,Oi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function pn(n){return ai(Ni,n)}function vo(n,l){return Ni===null&&za(n),ai(n,l)}function ai(n,l){var r=Ca?l._currentValue:l._currentValue2;if(l={context:l,memoizedValue:r,next:null},Oi===null){if(n===null)throw Error(h(308));Oi=l,n.dependencies={lanes:0,firstContext:l},n.flags|=524288}else Oi=Oi.next=l;return r}function go(){return{controller:new Pc,data:new Map,refCount:0}}function wr(n){n.refCount--,n.refCount===0&&t0(jd,function(){n.controller.abort()})}function _m(n,l){if((n.pendingLanes&4194048)!==0){var r=n.transitionTypes;for(r===null&&(r=n.transitionTypes=[]),n=0;n<l.length;n++){var o=l[n];r.indexOf(o)===-1&&r.push(o)}}}function Cm(n){var l=n.transitionTypes;return n.transitionTypes=null,l}function su(){}function Jl(n){n!==_t&&n.next===null&&(_t===null?Kr=_t=n:_t=_t.next=n),Al=!0,$n||($n=!0,zm())}function Yi(n,l){if(!Hc&&Al){Hc=!0;do for(var r=!1,o=Kr;o!==null;){if(n!==0){var f=o.pendingLanes;if(f===0)var m=0;else{var y=o.suspendedLanes,N=o.pingedLanes;m=(1<<31-zl(42|n)+1)-1,m&=f&~(y&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,df(o,m))}else m=Ze,m=A(o,o===at?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==Ti),(m&3)===0||C(o,m)||(r=!0,df(o,m));o=o.next}while(r);Hc=!1}}function bm(){xm()}function xm(){Al=$n=!1;var n=0;pr!==0&&$o()&&(n=pr);for(var l=Jn(),r=null,o=Kr;o!==null;){var f=o.next,m=_l(o,l);m===0?(o.next=null,r===null?Kr=f:r.next=f,f===null&&(_t=r)):(r=o,(n!==0||(m&3)!==0)&&(Al=!0)),o=f}Ht!==0&&Ht!==5||Yi(n),pr!==0&&(pr=0)}function _l(n,l){for(var r=n.suspendedLanes,o=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var y=31-zl(m),N=1<<y,Q=f[y];Q===-1?((N&r)===0||(N&o)!==0)&&(f[y]=M(N,l)):Q<=l&&(n.expiredLanes|=N),m&=~N}if(l=at,r=Ze,r=A(n,n===l?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==Ti),o=n.callbackNode,r===0||n===l&&(it===2||it===9)||n.cancelPendingCommit!==null)return o!==null&&o!==null&&Ju(o),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||C(n,r)){if(l=r&-r,l===n.callbackPriority)return l;switch(o!==null&&Ju(o),et(r)){case 2:case 8:r=Md;break;case 32:r=ms;break;case 268435456:r=e0;break;default:r=ms}return o=Sm.bind(null,n),r=dn(r,o),n.callbackPriority=l,n.callbackNode=r,l}return o!==null&&o!==null&&Ju(o),n.callbackPriority=2,n.callbackNode=null,2}function Sm(n,l){if(Ht!==0&&Ht!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(La()&&n.callbackNode!==r)return null;var o=Ze;return o=A(n,n===at?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==Ti),o===0?null:(Pr(n,o,l),_l(n,Jn()),n.callbackNode!=null&&n.callbackNode===r?Sm.bind(null,n):null)}function df(n,l){if(La())return null;Pr(n,l,!0)}function zm(){yd?uv(function(){(Ke&6)!==0?dn(Lc,bm):xm()}):dn(Lc,bm)}function cu(){if(pr===0){var n=Ia;n===0&&(n=cs,cs<<=1,(cs&261888)===0&&(cs=256)),pr=n}return pr}function P0(n,l){if(eo===null){var r=eo=[];Vd=0,Ia=cu(),mn={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Vd++,l.then(mf,mf),l}function mf(){if(--Vd===0&&(Xr=null,eo!==null)){mn!==null&&(mn.status="fulfilled");var n=eo;eo=null,Ia=0,mn=null;for(var l=0;l<n.length;l++)(0,n[l])()}}function H0(n,l){var r=[],o={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return n.then(function(){o.status="fulfilled",o.value=l;for(var f=0;f<r.length;f++)(0,r[f])(l)},function(f){for(o.status="rejected",o.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),o}function vf(){var n=hr.current;return n!==null?n:at.pooledCache}function qi(n,l){l===null?K(hr,hr.current):K(hr,l.pool)}function Cl(){var n=vf();return n===null?null:{parent:Ca?Vt._currentValue:Vt._currentValue2,pool:n}}function da(n,l){if(Mt(n,l))return!0;if(typeof n!="object"||n===null||typeof l!="object"||l===null)return!1;var r=Object.keys(n),o=Object.keys(l);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var f=r[o];if(!Ga.call(l,f)||!Mt(n[f],l[f]))return!1}return!0}function bl(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Em(n,l,r){switch(r=n[r],r===void 0?n.push(l):r!==l&&(l.then(su,su),l=r),l.status){case"fulfilled":return l.value;case"rejected":throw n=l.reason,po(n),n===void 0&&!("reason"in l)?Error(h(600)):n;default:if(typeof l.status=="string")l.then(su,su);else{if(n=at,n!==null&&100<n.shellSuspendCounter)throw Error(h(482));n=l,n.status="pending",n.then(function(o){if(l.status==="pending"){var f=l;f.status="fulfilled",f.value=o}},function(o){if(l.status==="pending"){var f=l;f.status="rejected",f.reason=o}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw n=l.reason,po(n),n}throw Wn=l,vn}}function Dr(n){try{var l=n._init;return l(n._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Wn=r,vn):r}}function Tm(){if(Wn===null)throw Error(h(459));var n=Wn;return Wn=null,n}function po(n){if(n===vn||n===Ri)throw Error(h(483))}function Nr(n){var l=dl;return dl+=1,kl===null&&(kl=[]),Em(kl,n,l)}function ma(n,l){l=l.props.ref,n.ref=l!==void 0?l:null}function Ea(n,l){throw l.$$typeof===cr?Error(h(525)):(n=Object.prototype.toString.call(l),Error(h(31,n==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":n)))}function ho(n){function l(I,q){if(n){var $=I.deletions;$===null?(I.deletions=[q],I.flags|=16):$.push(q)}}function r(I,q){if(!n)return null;for(;q!==null;)l(I,q),q=q.sibling;return null}function o(I){for(var q=new Map;I!==null;)I.key===null?q.set(I.index,I):q.set(I.key,I),I=I.sibling;return q}function f(I,q){return I=aa(I,q),I.index=0,I.sibling=null,I}function m(I,q,$){return I.index=$,n?($=I.alternate,$!==null?($=$.index,$<q?(I.flags|=2,q):$):(I.flags|=134217730,q)):(I.flags|=1048576,q)}function y(I){return n&&I.alternate===null&&(I.flags|=134217730),I}function N(I,q,$,re){return q===null||q.tag!==6?(q=bi($,I.mode,re),q.return=I,q):(q=f(q,$),q.return=I,q)}function Q(I,q,$,re){var Ae=$.type;return Ae===fr?(I=ie(I,q,$.props.children,re,$.key),ma(I,$),I):q!==null&&(q.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Ha&&Dr(Ae)===q.type)?(q=f(q,$.props),ma(q,$),q.return=I,q):(q=Io($.type,$.key,$.props,null,I.mode,re),ma(q,$),q.return=I,q)}function le(I,q,$,re){return q===null||q.tag!==4||q.stateNode.containerInfo!==$.containerInfo||q.stateNode.implementation!==$.implementation?(q=mc($,I.mode,re),q.return=I,q):(q=f(q,$.children||[]),q.return=I,q)}function ie(I,q,$,re,Ae){return q===null||q.tag!==7?(q=Hl($,I.mode,re,Ae),q.return=I,q):(q=f(q,$),q.return=I,q)}function oe(I,q,$){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=bi(""+q,I.mode,$),q.return=I,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case _a:return $=Io(q.type,q.key,q.props,null,I.mode,$),ma($,q),$.return=I,$;case Ma:return q=mc(q,I.mode,$),q.return=I,q;case Ha:return q=Dr(q),oe(I,q,$)}if(sn(q)||z(q))return q=Hl(q,I.mode,$,null),q.return=I,q;if(typeof q.then=="function")return oe(I,Nr(q),$);if(q.$$typeof===Ua)return oe(I,vo(I,q),$);Ea(I,q)}return null}function ve(I,q,$,re){var Ae=q!==null?q.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ae!==null?null:N(I,q,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _a:return $.key===Ae?Q(I,q,$,re):null;case Ma:return $.key===Ae?le(I,q,$,re):null;case Ha:return $=Dr($),ve(I,q,$,re)}if(sn($)||z($))return Ae!==null?null:ie(I,q,$,re,null);if(typeof $.then=="function")return ve(I,q,Nr($),re);if($.$$typeof===Ua)return ve(I,q,vo(I,$),re);Ea(I,$)}return null}function ke(I,q,$,re,Ae){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return I=I.get($)||null,N(q,I,""+re,Ae);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case _a:return I=I.get(re.key===null?$:re.key)||null,Q(q,I,re,Ae);case Ma:return I=I.get(re.key===null?$:re.key)||null,le(q,I,re,Ae);case Ha:return re=Dr(re),ke(I,q,$,re,Ae)}if(sn(re)||z(re))return I=I.get($)||null,ie(q,I,re,Ae,null);if(typeof re.then=="function")return ke(I,q,$,Nr(re),Ae);if(re.$$typeof===Ua)return ke(I,q,$,vo(q,re),Ae);Ea(q,re)}return null}function ct(I,q,$,re){for(var Ae=null,Dt=null,De=q,ft=q=0,Se=null;De!==null&&ft<$.length;ft++){De.index>ft?(Se=De,De=null):Se=De.sibling;var We=ve(I,De,$[ft],re);if(We===null){De===null&&(De=Se);break}n&&De&&We.alternate===null&&l(I,De),q=m(We,q,ft),Dt===null?Ae=We:Dt.sibling=We,Dt=We,De=Se}if(ft===$.length)return r(I,De),Fe&&R(I,ft),Ae;if(De===null){for(;ft<$.length;ft++)De=oe(I,$[ft],re),De!==null&&(q=m(De,q,ft),Dt===null?Ae=De:Dt.sibling=De,Dt=De);return Fe&&R(I,ft),Ae}for(De=o(De);ft<$.length;ft++)Se=ke(De,I,ft,$[ft],re),Se!==null&&(n&&(We=Se.alternate,We!==null&&De.delete(We.key===null?ft:We.key)),q=m(Se,q,ft),Dt===null?Ae=Se:Dt.sibling=Se,Dt=Se);return n&&De.forEach(function(xa){return l(I,xa)}),Fe&&R(I,ft),Ae}function Wa(I,q,$,re){if($==null)throw Error(h(151));for(var Ae=null,Dt=null,De=q,ft=q=0,Se=null,We=$.next();De!==null&&!We.done;ft++,We=$.next()){De.index>ft?(Se=De,De=null):Se=De.sibling;var xa=ve(I,De,We.value,re);if(xa===null){De===null&&(De=Se);break}n&&De&&xa.alternate===null&&l(I,De),q=m(xa,q,ft),Dt===null?Ae=xa:Dt.sibling=xa,Dt=xa,De=Se}if(We.done)return r(I,De),Fe&&R(I,ft),Ae;if(De===null){for(;!We.done;ft++,We=$.next())We=oe(I,We.value,re),We!==null&&(q=m(We,q,ft),Dt===null?Ae=We:Dt.sibling=We,Dt=We);return Fe&&R(I,ft),Ae}for(De=o(De);!We.done;ft++,We=$.next())We=ke(De,I,ft,We.value,re),We!==null&&(n&&(Se=We.alternate,Se!==null&&De.delete(Se.key===null?ft:Se.key)),q=m(We,q,ft),Dt===null?Ae=We:Dt.sibling=We,Dt=We);return n&&De.forEach(function(qd){return l(I,qd)}),Fe&&R(I,ft),Ae}function zr(I,q,$,re){if(typeof $=="object"&&$!==null&&$.type===fr&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _a:e:{for(var Ae=$.key;q!==null;){if(q.key===Ae){if(Ae=$.type,Ae===fr){if(q.tag===7){r(I,q.sibling),re=f(q,$.props.children),ma(re,$),re.return=I,I=re;break e}}else if(q.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===Ha&&Dr(Ae)===q.type){r(I,q.sibling),re=f(q,$.props),ma(re,$),re.return=I,I=re;break e}r(I,q);break}else l(I,q);q=q.sibling}$.type===fr?(re=Hl($.props.children,I.mode,re,$.key),ma(re,$),re.return=I,I=re):(re=Io($.type,$.key,$.props,null,I.mode,re),ma(re,$),re.return=I,I=re)}return y(I);case Ma:e:{for(Ae=$.key;q!==null;){if(q.key===Ae)if(q.tag===4&&q.stateNode.containerInfo===$.containerInfo&&q.stateNode.implementation===$.implementation){r(I,q.sibling),re=f(q,$.children||[]),re.return=I,I=re;break e}else{r(I,q);break}else l(I,q);q=q.sibling}re=mc($,I.mode,re),re.return=I,I=re}return y(I);case Ha:return $=Dr($),zr(I,q,$,re)}if(sn($))return ct(I,q,$,re);if(z($)){if(Ae=z($),typeof Ae!="function")throw Error(h(150));return $=Ae.call($),Wa(I,q,$,re)}if(typeof $.then=="function")return zr(I,q,Nr($),re);if($.$$typeof===Ua)return zr(I,q,vo(I,$),re);Ea(I,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,q!==null&&q.tag===6?(r(I,q.sibling),re=f(q,$),re.return=I,I=re):(r(I,q),re=bi($,I.mode,re),re.return=I,I=re),y(I)):r(I,q)}return function(I,q,$,re){try{dl=0;var Ae=zr(I,q,$,re);return kl=null,Ae}catch(De){if(De===vn||De===Ri)throw De;var Dt=v(29,De,null,I.mode);return Dt.lanes=re,Dt.return=I,Dt}}}function ki(){for(var n=Jr,l=yr=Jr=0;l<n;){var r=Qt[l];Qt[l++]=null;var o=Qt[l];Qt[l++]=null;var f=Qt[l];Qt[l++]=null;var m=Qt[l];if(Qt[l++]=null,o!==null&&f!==null){var y=o.pending;y===null?f.next=f:(f.next=y.next,y.next=f),o.pending=f}m!==0&&Rs(r,f,m)}}function yo(n,l,r,o){Qt[Jr++]=n,Qt[Jr++]=l,Qt[Jr++]=r,Qt[Jr++]=o,yr|=o,n.lanes|=o,n=n.alternate,n!==null&&(n.lanes|=o)}function gf(n,l,r,o){return yo(n,l,r,o),Qi(n)}function Gi(n,l){return yo(n,null,null,l),Qi(n)}function Rs(n,l,r){n.lanes|=r;var o=n.alternate;o!==null&&(o.lanes|=r);for(var f=!1,m=n.return;m!==null;)m.childLanes|=r,o=m.alternate,o!==null&&(o.childLanes|=r),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&l!==null&&(f=31-zl(r),n=m.hiddenUpdates,o=n[f],o===null?n[f]=[l]:o.push(l),l.lane=r|536870912),m):null}function Qi(n){if(50<xs)throw xs=0,Qc=null,Error(h(185));for(var l=n.return;l!==null;)n=l,l=n.return;return n.tag===3?n.stateNode:null}function pf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bs(n,l){n=n.updateQueue,l.updateQueue===n&&(l.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ii(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ri(n,l,r){var o=n.updateQueue;if(o===null)return null;if(o=o.shared,(Ke&2)!==0){var f=o.pending;return f===null?l.next=l:(l.next=f.next,f.next=l),o.pending=l,l=Qi(n),Rs(n,null,r),l}return yo(n,o,l,r),Qi(n)}function Or(n,l,r){if(l=l.updateQueue,l!==null&&(l=l.shared,(r&4194048)!==0)){var o=l.lanes;o&=n.pendingLanes,r|=o,l.lanes=r,me(n,r)}}function _o(n,l){var r=n.updateQueue,o=n.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=y:m=m.next=y,r=r.next}while(r!==null);m===null?f=m=l:m=m.next=l}else f=m=l;r={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=l:n.next=l,r.lastBaseUpdate=l}function fu(){if(Li){var n=mn;if(n!==null)throw n}}function du(n,l,r,o){Li=!1;var f=n.updateQueue;ra=!1;var m=f.firstBaseUpdate,y=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var Q=N,le=Q.next;Q.next=null,y===null?m=le:y.next=le,y=Q;var ie=n.alternate;ie!==null&&(ie=ie.updateQueue,N=ie.lastBaseUpdate,N!==y&&(N===null?ie.firstBaseUpdate=le:N.next=le,ie.lastBaseUpdate=Q))}if(m!==null){var oe=f.baseState;y=0,ie=le=Q=null,N=m;do{var ve=N.lane&-536870913,ke=ve!==N.lane;if(ke?(Ze&ve)===ve:(o&ve)===ve){ve!==0&&ve===Ia&&(Li=!0),ie!==null&&(ie=ie.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var ct=n,Wa=N;ve=l;var zr=r;switch(Wa.tag){case 1:if(ct=Wa.payload,typeof ct=="function"){oe=ct.call(zr,oe,ve);break e}oe=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=Wa.payload,ve=typeof ct=="function"?ct.call(zr,oe,ve):ct,ve==null)break e;oe=Ko({},oe,ve);break e;case 2:ra=!0}}ve=N.callback,ve!==null&&(n.flags|=64,ke&&(n.flags|=8192),ke=f.callbacks,ke===null?f.callbacks=[ve]:ke.push(ve))}else ke={lane:ve,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ie===null?(le=ie=ke,Q=oe):ie=ie.next=ke,y|=ve;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ke=N,N=ke.next,ke.next=null,f.lastBaseUpdate=ke,f.shared.pending=null}}while(!0);ie===null&&(Q=oe),f.baseState=Q,f.firstBaseUpdate=le,f.lastBaseUpdate=ie,m===null&&(f.shared.lanes=0),br|=y,n.lanes=y,n.memoizedState=oe}}function Ta(n,l){if(typeof n!="function")throw Error(h(191,n));n.call(l)}function Tn(n,l){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)Ta(r[n],l)}function al(n,l){n=ca,K(gs,n),K(wl,l),ca=n|l.baseLanes}function Ii(){K(gs,ca),K(wl,wl.current)}function Ls(){ca=gs.current,P(wl),P(gs)}function Zi(n){var l=n.alternate;K(Nn,Nn.current&1),K(Dn,n),xn===null&&(l===null||wl.current!==null||l.memoizedState!==null)&&(xn=n)}function hf(n){K(Nn,Nn.current),K(Dn,n),xn===null&&(xn=n)}function yf(n){n.tag===22?(K(Nn,Nn.current),K(Dn,n),xn===null&&(xn=n)):$l()}function $l(){K(Nn,Nn.current),K(Dn,Dn.current)}function kn(n){P(Dn),xn===n&&(xn=null),P(Nn)}function Xi(n,l){K(Dn,Dn.current),K(Nn,l)}function ui(n){P(Nn),P(Dn),xn===n&&(xn=null)}function oi(n){for(var l=n;l!==null;){if(l.tag===13){var r=l.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ac(r)||zd(r)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!=="independent"){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break;for(;l.sibling===null;){if(l.return===null||l.return===n)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}function Ot(){throw Error(h(321))}function Ki(n,l){if(l===null)return!1;for(var r=0;r<l.length&&r<n.length;r++)if(!Mt(n[r],l[r]))return!1;return!0}function rn(n,l,r,o,f,m){return ua=m,Me=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,ze.H=n===null||n.memoizedState===null?Vc:Za,Ue=!1,m=r(o,f),Ue=!1,vt&&(m=Cf(l,r,o,f)),_f(n),m}function _f(n){ze.H=Mi;var l=zt!==null&&zt.next!==null;if(ua=0,gn=zt=Me=null,lt=!1,ot=0,On=null,l)throw Error(h(300));n===null||It||(n=n.dependencies,n!==null&&ou(n)&&(It=!0))}function Cf(n,l,r,o){Me=n;var f=0;do{if(vt&&(On=null),ot=0,vt=!1,25<=f)throw Error(h(301));if(f+=1,gn=zt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}ze.H=$t,m=l(r,o)}while(vt);return m}function Am(){var n=ze.H,l=n.useState()[0];return l=typeof l.then=="function"?$e(l):l,n=n.useState()[0],(zt!==null?zt.memoizedState:null)!==n&&(Me.flags|=1024),l}function si(){var n=qe!==0;return qe=0,n}function Ji(n,l,r){l.updateQueue=n.updateQueue,l.flags&=-2053,n.lanes&=~r}function bf(n){if(lt){for(n=n.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}lt=!1}ua=0,gn=zt=Me=null,vt=!1,ot=qe=0,On=null}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Me.memoizedState=gn=n:gn=gn.next=n,gn}function Xt(){if(zt===null){var n=Me.alternate;n=n!==null?n.memoizedState:null}else n=zt.next;var l=gn===null?Me.memoizedState:gn.next;if(l!==null)gn=l,zt=n;else{if(n===null)throw Me.alternate===null?Error(h(467)):Error(h(310));zt=n,n={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},gn===null?Me.memoizedState=gn=n:gn=gn.next=n}return gn}function Ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $e(n){var l=ot;return ot+=1,On===null&&(On=[]),n=Em(On,n,l),l=Me,(gn===null?l.memoizedState:gn.next)===null&&(l=l.alternate,ze.H=l===null||l.memoizedState===null?Vc:Za),n}function Co(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $e(n);if(n.$$typeof===sd)return;if(n.$$typeof===Ua)return pn(n)}throw Error(h(438,String(n)))}function mu(n){var l=null,r=Me.updateQueue;if(r!==null&&(l=r.memoCache),l==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(l={data:o.data.map(function(f){return f.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),r===null&&(r=Ms(),Me.updateQueue=r),r.memoCache=l,r=l.data[l.index],r===void 0)for(r=l.data[l.index]=Array(n),o=0;o<n;o++)r[o]=Kn;return l.index++,r}function Wl(n,l){return typeof l=="function"?l(n):l}function ea(n){var l=Xt();return il(l,zt,n)}function il(n,l,r){var o=n.queue;if(o===null)throw Error(h(311));o.lastRenderedReducer=r;var f=n.baseQueue,m=o.pending;if(m!==null){if(f!==null){var y=f.next;f.next=m.next,m.next=y}l.baseQueue=f=m,o.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{l=f.next;var N=y=null,Q=null,le=l,ie=!1;do{var oe=le.lane&-536870913;if(oe!==le.lane?(Ze&oe)===oe:(ua&oe)===oe){var ve=le.revertLane;if(ve===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),oe===Ia&&(ie=!0);else if((ua&ve)===ve){le=le.next,ve===Ia&&(ie=!0);continue}else oe={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Q===null?(N=Q=oe,y=m):Q=Q.next=oe,Me.lanes|=ve,br|=ve;oe=le.action,Ue&&r(m,oe),m=le.hasEagerState?le.eagerState:r(m,oe)}else ve={lane:oe,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},Q===null?(N=Q=ve,y=m):Q=Q.next=ve,Me.lanes|=oe,br|=oe;le=le.next}while(le!==null&&le!==l);if(Q===null?y=m:Q.next=N,!Mt(m,n.memoizedState)&&(It=!0,ie&&(r=mn,r!==null)))throw r;n.memoizedState=m,n.baseState=y,n.baseQueue=Q,o.lastRenderedState=m}return f===null&&(o.lanes=0),[n.memoizedState,o.dispatch]}function Us(n){var l=Xt(),r=l.queue;if(r===null)throw Error(h(311));r.lastRenderedReducer=n;var o=r.dispatch,f=r.pending,m=l.memoizedState;if(f!==null){r.pending=null;var y=f=f.next;do m=n(m,y.action),y=y.next;while(y!==f);Mt(m,l.memoizedState)||(It=!0),l.memoizedState=m,l.baseQueue===null&&(l.baseState=m),r.lastRenderedState=m}return[m,o]}function wm(n,l,r){var o=Me,f=Xt(),m=Fe;if(m){if(r===void 0)throw Error(h(407));r=r()}else r=l();var y=!Mt((zt||f).memoizedState,r);if(y&&(f.memoizedState=r,It=!0),f=f.queue,bo(Dm.bind(null,o,f,n),[n]),n=f.getSnapshot!==l||y||gn!==null&&(gn.memoizedState.tag&1)!==0,$i(n?9:8,{destroy:void 0},xf.bind(null,o,f,r,l),null),n){if(o.flags|=2048,at===null)throw Error(h(349));m||(ua&127)!==0||Ps(o,l,r)}return r}function Ps(n,l,r){n.flags|=16384,n={getSnapshot:l,value:r},l=Me.updateQueue,l===null?(l=Ms(),Me.updateQueue=l,l.stores=[n]):(r=l.stores,r===null?l.stores=[n]:r.push(n))}function xf(n,l,r,o){l.value=r,l.getSnapshot=o,Ll(l)&&Hs(n)}function Dm(n,l,r){return r(function(){Ll(l)&&Hs(n)})}function Ll(n){var l=n.getSnapshot;n=n.value;try{var r=l();return!Mt(n,r)}catch{return!0}}function Hs(n){var l=Gi(n,2);l!==null&&Pn(l,n,2)}function Fs(n){var l=Gn();if(typeof n=="function"){var r=n;if(n=r(),Ue){tt(!0);try{r()}finally{tt(!1)}}}return l.memoizedState=l.baseState=n,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:n},l}function js(n,l,r,o){return n.baseState=r,il(n,zt,typeof o=="function"?o:Wl)}function vu(n,l,r,o,f){if(To(n))throw Error(h(485));if(n=l.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};ze.T!==null?r(!0):m.isTransition=!1,o(m),r=l.pending,r===null?(m.next=l.pending=m,Sf(l,m)):(m.next=r.next,l.pending=r.next=m)}}function Sf(n,l){var r=l.action,o=l.payload,f=n.state;if(l.isTransition){var m=ze.T,y={};y.types=m!==null?m.types:null,ze.T=y;try{var N=r(f,o),Q=ze.S;Q!==null&&Q(y,N),zf(n,l,N)}catch(le){Ef(n,l,le)}finally{m!==null&&y.types!==null&&(m.types=y.types),ze.T=m}}else try{m=r(f,o),zf(n,l,m)}catch(le){Ef(n,l,le)}}function zf(n,l,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Rr(n,l,o)},function(o){return Ef(n,l,o)}):Rr(n,l,r)}function Rr(n,l,r){l.status="fulfilled",l.value=r,Tf(l),n.state=r,l=n.pending,l!==null&&(r=l.next,r===l?n.pending=null:(r=r.next,l.next=r,Sf(n,r)))}function Ef(n,l,r){var o=n.pending;if(n.pending=null,o!==null){o=o.next;do l.status="rejected",l.reason=r,Tf(l),l=l.next;while(l!==o)}n.action=null}function Tf(n){n=n.listeners;for(var l=0;l<n.length;l++)(0,n[l])()}function Af(n,l){return l}function Vs(n,l){if(Fe){var r=at.formState;if(r!==null){e:{var o=Me;if(Fe){if(Bt){var f=Bv(Bt,en);if(f){Bt=dr(f),o=Lv(f);break e}}Ln(o)}o=!1}o&&(l=r[0])}}r=Gn(),r.memoizedState=r.baseState=l,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Af,lastRenderedState:l},r.queue=o,r=Gs.bind(null,Me,o),o.dispatch=r,o=Fs(!1);var m=_u.bind(null,Me,!1,o.queue);return o=Gn(),f={state:l,dispatch:null,action:n,pending:null},o.queue=f,r=vu.bind(null,Me,f,m,r),f.dispatch=r,o.memoizedState=n,[l,r,!1]}function Nm(n){var l=Xt();return Om(l,zt,n)}function Om(n,l,r){if(l=il(n,l,Af)[0],n=ea(Wl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var o=$e(l)}catch(y){throw y===vn?Ri:y}else o=l;l=Xt();var f=l.queue,m=f.dispatch;return r!==l.memoizedState&&(Me.flags|=2048,$i(9,{destroy:void 0},Ys.bind(null,f,r),null)),[o,m,n]}function Ys(n,l){n.action=l}function va(n){var l=Xt(),r=zt;if(r!==null)return Om(l,r,n);Xt(),l=l.memoizedState,r=Xt();var o=r.queue.dispatch;return r.memoizedState=n,[l,o,!1]}function $i(n,l,r,o){return n={tag:n,create:r,deps:o,inst:l,next:null},l=Me.updateQueue,l===null&&(l=Ms(),Me.updateQueue=l),r=l.lastEffect,r===null?l.lastEffect=n.next=n:(o=r.next,r.next=n,n.next=o,l.lastEffect=n),n}function qs(){return Xt().memoizedState}function ci(n,l,r,o){var f=Gn();Me.flags|=n,f.memoizedState=$i(1|l,{destroy:void 0},r,o===void 0?null:o)}function fi(n,l,r,o){var f=Xt();o=o===void 0?null:o;var m=f.memoizedState.inst;zt!==null&&o!==null&&Ki(o,zt.memoizedState.deps)?f.memoizedState=$i(l,m,r,o):(Me.flags|=n,f.memoizedState=$i(1|l,m,r,o))}function wf(n,l){ci(8390656,8,n,l)}function bo(n,l){fi(2048,8,n,l)}function Rm(n){Me.flags|=4;var l=Me.updateQueue;if(l===null)l=Ms(),Me.updateQueue=l,l.events=[n];else{var r=l.events;r===null?l.events=[n]:r.push(n)}}function gu(n){var l=Xt().memoizedState;return Rm({ref:l,nextImpl:n}),function(){if((Ke&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}function Aa(n,l){return fi(4,2,n,l)}function ks(n,l){return fi(4,4,n,l)}function pu(n,l){if(typeof l=="function"){n=n();var r=l(n);return function(){typeof r=="function"?r():l(null)}}if(l!=null)return n=n(),l.current=n,function(){l.current=null}}function di(n,l,r){r=r!=null?r.concat([n]):null,fi(4,4,pu.bind(null,l,n),r)}function xo(){}function So(n,l){var r=Xt();l=l===void 0?null:l;var o=r.memoizedState;return l!==null&&Ki(l,o[1])?o[0]:(r.memoizedState=[n,l],n)}function Df(n,l){var r=Xt();l=l===void 0?null:l;var o=r.memoizedState;if(l!==null&&Ki(l,o[1]))return o[0];if(o=n(),Ue){tt(!0);try{n()}finally{tt(!1)}}return r.memoizedState=[o,l],o}function hu(n,l,r){return r===void 0||(ua&1073741824)!==0&&(Ze&261930)===0?n.memoizedState=l:(n.memoizedState=r,n=yi(),Me.lanes|=n,br|=n,r)}function zo(n,l,r,o){return Mt(r,l)?r:wl.current!==null?(n=hu(n,r,o),Mt(n,l)||(It=!0),n):(ua&106)===0||(ua&1073741824)!==0&&(Ze&261930)===0?(It=!0,n.memoizedState=r):(n=yi(),Me.lanes|=n,br|=n,l)}function Nf(n,l,r,o,f){var m=yt();mt(m!==0&&8>m?m:8);var y=ze.T,N={};N.types=y!==null?y.types:null,ze.T=N,_u(n,!1,l,r);try{var Q=f(),le=ze.S;if(le!==null&&le(N,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var ie=H0(Q,o);mi(n,l,ie,ol(n))}else mi(n,l,o,ol(n))}catch(oe){mi(n,l,{then:function(){},status:"rejected",reason:oe},ol())}finally{mt(m),y!==null&&N.types!==null&&(y.types=N.types),ze.T=y}}function Qn(n){var l=n.memoizedState;if(l!==null)return l;l={memoizedState:qr,baseState:qr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:qr},next:null};var r={};return l.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:r},next:null},n.memoizedState=l,n=n.alternate,n!==null&&(n.memoizedState=l),l}function wa(){return pn(Ya)}function Eo(){return Xt().memoizedState}function yu(){return Xt().memoizedState}function F0(n){for(var l=n.return;l!==null;){switch(l.tag){case 24:case 3:var r=ol();n=ii(r);var o=ri(l,n,r);o!==null&&(Pn(o,l,r),Or(o,l,r)),l={cache:go()},n.payload=l;return}l=l.return}}function Of(n,l,r){var o=ol();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},To(n)?Bm(l,r):(r=gf(n,l,r,o),r!==null&&(Pn(r,n,o),Lm(r,l,o)))}function Gs(n,l,r){var o=ol();mi(n,l,r,o)}function mi(n,l,r,o){var f={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(To(n))Bm(l,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=l.lastRenderedReducer,m!==null))try{var y=l.lastRenderedState,N=m(y,r);if(f.hasEagerState=!0,f.eagerState=N,Mt(N,y))return yo(n,l,f,0),at===null&&ki(),!1}catch{}if(r=gf(n,l,f,o),r!==null)return Pn(r,n,o),Lm(r,l,o),!0}return!1}function _u(n,l,r,o){if(o={lane:2,revertLane:cu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},To(n)){if(l)throw Error(h(479))}else l=gf(n,r,o,2),l!==null&&Pn(l,n,2)}function To(n){var l=n.alternate;return n===Me||l!==null&&l===Me}function Bm(n,l){vt=lt=!0;var r=n.pending;r===null?l.next=l:(l.next=r.next,r.next=l),n.pending=l}function Lm(n,l,r){if((r&4194048)!==0){var o=l.lanes;o&=n.pendingLanes,r|=o,l.lanes=r,me(n,r)}}function Rf(n,l,r,o){l=n.memoizedState,r=r(o,l),r=r==null?l:Ko({},l,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}function Qs(n,l,r,o,f,m,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(o,m,y):l.prototype&&l.prototype.isPureReactComponent?!da(r,o)||!da(f,m):!0}function Mm(n,l,r,o){n=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(r,o),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(r,o),l.state!==n&&Xa.enqueueReplaceState(l,l.state,null)}function Br(n,l){var r=l;if("ref"in l){r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}if(n=n.defaultProps){r===l&&(r=Ko({},r));for(var f in n)r[f]===void 0&&(r[f]=n[f])}return r}function Is(n,l){try{var r=n.onUncaughtError;r(l.value,{componentStack:l.stack})}catch(o){setTimeout(function(){throw o})}}function Um(n,l,r){try{var o=n.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Bf(n,l,r){return r=ii(r),r.tag=3,r.payload={element:null},r.callback=function(){Is(n,l)},r}function Lf(n){return n=ii(n),n.tag=3,n}function Pm(n,l,r,o){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=o.value;n.payload=function(){return f(m)},n.callback=function(){Um(l,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){Um(l,r,o),typeof f!="function"&&($a===null?$a=new Set([this]):$a.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function j0(n,l,r,o,f){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(l=r.alternate,l!==null&&Kl(l,r,f,!0),r=Dn.current,r!==null){switch(r.tag){case 31:case 13:case 19:return xn===null?Ba():r.alternate===null&&qt===0&&(qt=3),r.flags&=-257,r.flags|=65536,r.lanes=f,o===vs?r.flags|=16384:(l=r.updateQueue,l===null?r.updateQueue=new Set([o]):l.add(o),cc(n,o,f)),!1;case 22:return r.flags|=65536,o===vs?r.flags|=16384:(l=r.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=l):(r=l.retryQueue,r===null?l.retryQueue=new Set([o]):r.add(o)),cc(n,o,f)),!1}throw Error(h(435,r.tag))}return cc(n,o,f),Ba(),!1}if(Fe)return l=Dn.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=f,o!==Ir&&(n=Error(h(422),{cause:o}),yl(an(n,r)))):(o!==Ir&&(l=Error(h(423),{cause:o}),yl(an(l,r))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,o=an(o,r),f=Bf(n.stateNode,o,f),_o(n,f),qt!==4&&(qt=2)),!1;var m=Error(h(520),{cause:o});if(m=an(m,r),Ja===null?Ja=[m]:Ja.push(m),qt!==4&&(qt=2),l===null)return!0;o=an(o,r),r=l;do{switch(r.tag){case 3:return r.flags|=65536,n=f&-f,r.lanes|=n,n=Bf(r.stateNode,o,n),_o(r,n),!1;case 1:if(l=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($a===null||!$a.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Lf(f),Pm(f,n,r,o),_o(r,f),!1;break;case 22:if(r.memoizedState!==null)return r.flags|=65536,!1}r=r.return}while(r!==null);return!1}function hn(n,l,r,o){l.child=n===null?jc(l,null,r,o):Bi(l,n.child,r,o)}function Hm(n,l,r,o,f){r=r.render;var m=l.ref;if("ref"in o){var y={};for(var N in o)N!=="ref"&&(y[N]=o[N])}else y=o;return za(l),o=rn(n,l,r,y,m,f),N=si(),n!==null&&!It?(Ji(n,l,f),vi(n,l,f)):(Fe&&N&&pe(l),l.flags|=1,hn(n,l,o,f),l.child)}function Zs(n,l,r,o,f){if(n===null){var m=r.type;return typeof m=="function"&&!Pu(m)&&m.defaultProps===void 0&&r.compare===null?(l.tag=15,l.type=m,Fm(n,l,m,o,f)):(n=Io(r.type,null,o,l,l.mode,f),n.ref=l.ref,n.return=l,l.child=n)}if(m=n.child,!Vf(n,f)){var y=m.memoizedProps;if(r=r.compare,r=r!==null?r:da,r(y,o)&&n.ref===l.ref)return vi(n,l,f)}return l.flags|=1,n=aa(m,o),n.ref=l.ref,n.return=l,l.child=n}function Fm(n,l,r,o,f){if(n!==null){var m=n.memoizedProps;if(da(m,o)&&n.ref===l.ref)if(It=!1,l.pendingProps=o=m,Vf(n,f))(n.flags&131072)!==0&&(It=!0);else return l.lanes=n.lanes,vi(n,l,f)}return Uf(n,l,r,o,f)}function jm(n,l,r,o){var f=o.children,m=n!==null?n.memoizedState:null;if(n===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((l.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,n!==null){for(o=l.child=n.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~m}else o=0,l.child=null;return Mf(n,l,m,r,o)}if((r&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},n!==null&&qi(l,m!==null?m.cachePool:null),m!==null?al(l,m):Ii(),yf(l);else return o=l.lanes=536870912,Mf(n,l,m!==null?m.baseLanes|r:r,r,o)}else m!==null?(qi(l,m.cachePool),al(l,m),$l(),l.memoizedState=null):(n!==null&&qi(l,null),Ii(),$l());return hn(n,l,f,r),l.child}function Ao(n,l){return n!==null&&n.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Mf(n,l,r,o,f){var m=vf();return m=m===null?null:{parent:Ca?Vt._currentValue:Vt._currentValue2,pool:m},l.memoizedState={baseLanes:r,cachePool:m},n!==null&&qi(l,null),Ii(),yf(l),n!==null&&Kl(n,l,o,!0),l.childLanes=f,null}function Xs(n,l){return l=Wi({mode:l.mode,children:l.children},n.mode),l.ref=n.ref,n.child=l,l.return=n,l}function Vm(n,l,r){return Bi(l,n.child,null,r),n=Xs(l,l.pendingProps),n.flags|=2,kn(l),l.memoizedState=null,n}function V0(n,l,r){var o=l.pendingProps,f=(l.flags&128)!==0;if(l.flags&=-129,n===null){if(Fe){if(o.mode==="hidden")return n=Xs(l,o),l.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Ao(null,n);if(hf(l),(n=Bt)?(n=Z0(n,en),n!==null&&(l.memoizedState={dehydrated:n,treeContext:Qa!==null?{id:ql,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},r=ud(n),r.return=l,l.child=r,wt=l,Bt=null)):n=null,n===null)throw Ln(l);return l.lanes=536870912,null}return Xs(l,o)}var m=n.memoizedState;if(m!==null){var y=m.dehydrated;if(hf(l),f)if(l.flags&256)l.flags&=-257,l=Vm(n,l,r);else if(l.memoizedState!==null)l.child=n.child,l.flags|=128,l=null;else throw Error(h(558));else if(It||Kl(n,l,r,!1),f=(r&n.childLanes)!==0,It||f){if(wl.current===null){if(o=at,o!==null&&(y=Te(o,r),y!==0&&y!==m.retryLane))throw m.retryLane=y,Gi(n,y),Pn(o,n,y),Ui;Ba()}l=Vm(n,l,r)}else n=m.treeContext,_n&&(Bt=wc(y),wt=l,Fe=!0,Pt=null,en=!1,n!==null&&Pe(l,n)),l=Xs(l,o),l.flags|=134221824;return l}return n=aa(n.child,{mode:o.mode,children:o.children}),n.ref=l.ref,l.child=n,n.return=l,n}function Cu(n,l){var r=l.ref;if(r===null)n!==null&&n.ref!==null&&(l.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(h(284));(n===null||n.ref!==r)&&(l.flags|=4194816)}}function Uf(n,l,r,o,f){return za(l),r=rn(n,l,r,o,void 0,f),o=si(),n!==null&&!It?(Ji(n,l,f),vi(n,l,f)):(Fe&&o&&pe(l),l.flags|=1,hn(n,l,r,f),l.child)}function Ym(n,l,r,o,f,m){return za(l),l.updateQueue=null,r=Cf(l,o,r,f),_f(n),o=si(),n!==null&&!It?(Ji(n,l,m),vi(n,l,m)):(Fe&&o&&pe(l),l.flags|=1,hn(n,l,r,m),l.child)}function qm(n,l,r,o,f){if(za(l),l.stateNode===null){var m=Ku,y=r.contextType;typeof y=="object"&&y!==null&&(m=pn(y)),m=new r(o,m),l.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Xa,l.stateNode=m,m._reactInternals=l,m=l.stateNode,m.props=o,m.state=l.memoizedState,m.refs={},pf(l),y=r.contextType,m.context=typeof y=="object"&&y!==null?pn(y):Ku,m.state=l.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Rf(l,r,y,o),m.state=l.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&Xa.enqueueReplaceState(m,m.state,null),du(l,o,m,f),fu(),m.state=l.memoizedState),typeof m.componentDidMount=="function"&&(l.flags|=4194308),o=!0}else if(n===null){m=l.stateNode;var N=l.memoizedProps,Q=Br(r,N);m.props=Q;var le=m.context,ie=r.contextType;y=Ku,typeof ie=="object"&&ie!==null&&(y=pn(ie));var oe=r.getDerivedStateFromProps;ie=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=l.pendingProps!==N,ie||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||le!==y)&&Mm(l,m,o,y),ra=!1;var ve=l.memoizedState;m.state=ve,du(l,o,m,f),fu(),le=l.memoizedState,N||ve!==le||ra?(typeof oe=="function"&&(Rf(l,r,oe,o),le=l.memoizedState),(Q=ra||Qs(l,r,Q,o,ve,le,y))?(ie||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(l.flags|=4194308)):(typeof m.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=o,l.memoizedState=le),m.props=o,m.state=le,m.context=y,o=Q):(typeof m.componentDidMount=="function"&&(l.flags|=4194308),o=!1)}else{m=l.stateNode,Bs(n,l),y=l.memoizedProps,ie=Br(r,y),m.props=ie,oe=l.pendingProps,ve=m.context,le=r.contextType,Q=Ku,typeof le=="object"&&le!==null&&(Q=pn(le)),N=r.getDerivedStateFromProps,(le=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==oe||ve!==Q)&&Mm(l,m,o,Q),ra=!1,ve=l.memoizedState,m.state=ve,du(l,o,m,f),fu();var ke=l.memoizedState;y!==oe||ve!==ke||ra||n!==null&&n.dependencies!==null&&ou(n.dependencies)?(typeof N=="function"&&(Rf(l,r,N,o),ke=l.memoizedState),(ie=ra||Qs(l,r,ie,o,ve,ke,Q)||n!==null&&n.dependencies!==null&&ou(n.dependencies))?(le||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ke,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ke,Q)),typeof m.componentDidUpdate=="function"&&(l.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&ve===n.memoizedState||(l.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&ve===n.memoizedState||(l.flags|=1024),l.memoizedProps=o,l.memoizedState=ke),m.props=o,m.state=ke,m.context=Q,o=ie):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&ve===n.memoizedState||(l.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&ve===n.memoizedState||(l.flags|=1024),o=!1)}return m=o,Cu(n,l),o=(l.flags&128)!==0,m||o?(m=l.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:m.render(),l.flags|=1,n!==null&&o?(l.child=Bi(l,n.child,null,f),l.child=Bi(l,null,r,f)):hn(n,l,r,f),l.memoizedState=m.state,n=l.child):n=vi(n,l,f),n}function km(n,l,r,o){return Gt(),l.flags|=256,hn(n,l,r,o),l.child}function Pf(n){return{baseLanes:n,cachePool:Cl()}}function Hf(n,l,r){return n=n!==null?n.childLanes&~r:0,l&&(n|=Ol),n}function Gm(n,l,r){var o=l.pendingProps,f=!1,m=(l.flags&128)!==0,y;if((y=m)||(y=n!==null&&n.memoizedState===null?!1:(Nn.current&2)!==0),y&&(f=!0,l.flags&=-129),y=(l.flags&32)!==0,l.flags&=-33,n===null){if(Fe){if(f?Zi(l):$l(),(n=Bt)?(n=wd(n,en),n!==null&&(l.memoizedState={dehydrated:n,treeContext:Qa!==null?{id:ql,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},r=ud(n),r.return=l,l.child=r,wt=l,Bt=null)):n=null,n===null)throw Ln(l);return zd(n)?l.lanes=32:l.lanes=536870912,null}return m=o.children,o=o.fallback,f?($l(),f=l.mode,m=Wi({mode:"hidden",children:m},f),o=Hl(o,f,r,null),m.return=l,o.return=l,m.sibling=o,l.child=m,o=l.child,o.memoizedState=Pf(r),o.childLanes=Hf(n,y,r),l.memoizedState=ml,Ao(null,o)):(Zi(l),wo(l,m))}var N=n.memoizedState;if(N!==null){var Q=N.dehydrated;if(Q!==null)return Qm(n,l,m,y,o,Q,N,r)}return f?($l(),f=o.fallback,m=l.mode,N=n.child,Q=N.sibling,o=aa(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&1206910976,Q!==null?f=aa(Q,f):(f=Hl(f,m,r,null),f.flags|=2),f.return=l,o.return=l,o.sibling=f,l.child=o,Ao(null,o),o=l.child,f=n.child.memoizedState,f===null?f=Pf(r):(m=f.cachePool,m!==null?(N=Ca?Vt._currentValue:Vt._currentValue2,m=m.parent!==N?{parent:N,pool:N}:m):m=Cl(),f={baseLanes:f.baseLanes|r,cachePool:m}),o.memoizedState=f,o.childLanes=Hf(n,y,r),l.memoizedState=ml,Ao(n.child,o)):(Zi(l),r=n.child,n=r.sibling,r=aa(r,{mode:"visible",children:o.children}),r.return=l,r.sibling=null,n!==null&&(y=l.deletions,y===null?(l.deletions=[n],l.flags|=16):y.push(n)),l.child=r,l.memoizedState=null,r)}function wo(n,l){return l=Wi({mode:"visible",children:l},n.mode),l.return=n,n.child=l}function Wi(n,l){return n=v(22,n,null,l),n.lanes=0,n}function Ks(n,l,r){return Bi(l,n.child,null,r),n=wo(l,l.pendingProps.children),n.flags|=2,l.memoizedState=null,n}function Qm(n,l,r,o,f,m,y,N){if(r)return l.flags&256?(Zi(l),l.flags&=-257,Ks(n,l,N)):l.memoizedState!==null?($l(),l.child=n.child,l.flags|=128,null):($l(),m=f.fallback,y=l.mode,f=Wi({mode:"visible",children:f.children},y),m=Hl(m,y,N,null),m.flags|=2,f.return=l,m.return=l,f.sibling=m,l.child=f,Bi(l,n.child,null,N),f=l.child,f.memoizedState=Pf(N),f.childLanes=Hf(n,o,N),l.memoizedState=ml,Ao(null,f));if(Zi(l),zd(m))return o=Ed(m).digest,o!==""&&(f=Error(h(419)),f.stack="",f.digest=o,yl({value:f,source:null,stack:null})),Ks(n,l,N);if(It||Kl(n,l,N,!1),o=(N&n.childLanes)!==0,It||o){if(wl.current!==null)return Ks(n,l,N);if(o=at,o!==null&&(f=Te(o,N),f!==0&&f!==y.retryLane))throw y.retryLane=f,Gi(n,f),Pn(o,n,f),Ui;return Ac(m)||Ba(),Ks(n,l,N)}return Ac(m)?(l.flags|=192,l.child=n.child,null):(n=y.treeContext,_n&&(Bt=Hv(m),wt=l,Fe=!0,Pt=null,en=!1,n!==null&&Pe(l,n)),l=wo(l,f.children),l.flags|=134221824,l)}function Ff(n,l,r){n.lanes|=l;var o=n.alternate;o!==null&&(o.lanes|=l),Ar(n.return,l,r)}function jf(n){for(var l=null;n!==null;){var r=n.alternate;r!==null&&oi(r)===null&&(l=n),n=n.sibling}return l}function Do(n,l,r,o,f,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:f,treeForkCount:m}:(y.isBackwards=l,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=r,y.tailMode=f,y.treeForkCount=m)}function Js(n){var l=n.child;for(n.child=null;l!==null;){var r=l.sibling;l.sibling=n.child,n.child=l,l=r}}function er(n,l,r){var o=l.pendingProps,f=o.revealOrder,m=o.tail;o=o.children;var y=Nn.current;if(l.flags&128)return Xi(l,y),null;var N=(y&2)!==0;if(N?(y=y&1|2,l.flags|=128):y&=1,Xi(l,y),f==="backwards"&&n!==null?(Js(n),hn(n,l,o,r),Js(n)):hn(n,l,o,r),o=Fe?Qr:0,!N&&n!==null&&(n.flags&128)!==0)e:for(n=l.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ff(n,r,l);else if(n.tag===19)Ff(n,r,l);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===l)break e;for(;n.sibling===null;){if(n.return===null||n.return===l)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"backwards":r=jf(l.child),r===null?(f=l.child,l.child=null):(f=r.sibling,r.sibling=null,Js(l)),Do(l,!0,f,null,m,o);break;case"unstable_legacy-backwards":for(r=null,f=l.child,l.child=null;f!==null;){if(n=f.alternate,n!==null&&oi(n)===null){l.child=f;break}n=f.sibling,f.sibling=r,r=f,f=n}Do(l,!0,r,null,m,o);break;case"together":Do(l,!1,null,null,void 0,o);break;case"independent":l.memoizedState=null;break;default:r=jf(l.child),r===null?(f=l.child,l.child=null):(f=r.sibling,r.sibling=null),Do(l,!1,f,r,m,o)}return l.child}function Im(n,l,r){var o=l.pendingProps;return Xl(l,l.type,o.value),hn(n,l,o.children,r),l.child}function vi(n,l,r){if(n!==null&&(l.dependencies=n.dependencies),br|=l.lanes,(r&l.childLanes)===0)if(n!==null){if(Kl(n,l,r,!1),(r&l.childLanes)===0)return null}else return null;if(n!==null&&l.child!==n.child)throw Error(h(153));if(l.child!==null){for(n=l.child,r=aa(n,n.pendingProps),l.child=r,r.return=l;n.sibling!==null;)n=n.sibling,r=r.sibling=aa(n,n.pendingProps),r.return=l;r.sibling=null}return l.child}function Vf(n,l){return(n.lanes&l)!==0?!0:(n=n.dependencies,!!(n!==null&&ou(n)))}function Zm(n,l,r){switch(l.tag){case 3:Xe(l,l.stateNode.containerInfo),Xl(l,Vt,n.memoizedState.cache),Gt();break;case 27:case 5:ye(l);break;case 4:Xe(l,l.stateNode.containerInfo);break;case 10:Xl(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,hf(l),null;break;case 13:var o=l.memoizedState;if(o!==null){if(o.dehydrated!==null)return Zi(l),l.flags|=128,null;o=Kl(n,l,r,!1);var f=l.child.childLanes;return o||(r&f)!==0?Gm(n,l,r):(Zi(l),n=vi(n,l,r),n!==null?n.sibling:null)}Zi(l);break;case 19:if(l.flags&128)return er(n,l,r);if(f=(n.flags&128)!==0,o=(r&l.childLanes)!==0,o||(Kl(n,l,r,!1),o=(r&l.childLanes)!==0),f){if(o)return er(n,l,r);l.flags|=128}if(f=l.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xi(l,Nn.current),o)break;return null;case 22:return l.lanes=0,jm(n,l,r,l.pendingProps);case 24:Xl(l,Vt,n.memoizedState.cache)}return vi(n,l,r)}function Yf(n,l,r){if(n!==null)if(n.memoizedProps!==l.pendingProps)It=!0;else{if(!Vf(n,r)&&(l.flags&128)===0)return It=!1,Zm(n,l,r);It=(n.flags&131072)!==0}else It=!1,Fe&&(l.flags&1048576)!==0&&ae(l,Qr,l.index);switch(l.lanes=0,l.tag){case 16:e:{var o=l.pendingProps;if(n=Dr(l.elementType),l.type=n,typeof n=="function")Pu(n)?(o=Br(n,o),l.tag=1,l=qm(null,l,n,o,r)):(l.tag=0,l=Uf(null,l,n,o,r));else{if(n!=null){var f=n.$$typeof;if(f===gc){l.tag=11,l=Hm(null,l,n,o,r);break e}else if(f===pc){l.tag=14,l=Zs(null,l,n,o,r);break e}else if(f===Ua){l.tag=10,l.type=n,l=Im(null,l,r);break e}}throw l=S(n)||n,Error(h(306,l,""))}}return l;case 0:return Uf(n,l,l.type,l.pendingProps,r);case 1:return o=l.type,f=Br(o,l.pendingProps),qm(n,l,o,f,r);case 3:e:{if(Xe(l,l.stateNode.containerInfo),n===null)throw Error(h(387));var m=l.pendingProps;f=l.memoizedState,o=f.element,Bs(n,l),du(l,m,null,r);var y=l.memoizedState;if(m=y.cache,Xl(l,Vt,m),m!==f.cache&&uu(l,[Vt],r,!0),fu(),m=y.element,_n&&f.isDehydrated)if(f={element:m,isDehydrated:!1,cache:y.cache},l.updateQueue.baseState=f,l.memoizedState=f,l.flags&256){l=km(n,l,m,r);break e}else if(m!==o){o=an(Error(h(424)),l),yl(o),l=km(n,l,m,r);break e}else for(_n&&(Bt=Pv(l.stateNode.containerInfo),wt=l,Fe=!0,Pt=null,en=!0),r=jc(l,null,m,r),l.child=r;r;)r.flags=r.flags&-3|134221824,r=r.sibling;else{if(Gt(),m===o){l=vi(n,l,r);break e}hn(n,l,m,r)}l=l.child}return l;case 26:if(jl)return Cu(n,l),n===null?(r=rs(l.type,null,l.pendingProps,null))?l.memoizedState=r:Fe||(l.stateNode=Rc(l.type,l.pendingProps,Ut.current,l)):l.memoizedState=rs(l.type,n.memoizedProps,l.pendingProps,n.memoizedState),null;case 27:if(jt)return ye(l),n===null&&jt&&Fe&&(o=l.stateNode=qa(l.type,l.pendingProps,Ut.current,bn.current,!1),wt=l,en=!0,Bt=Ad(l.type,o,Bt)),hn(n,l,l.pendingProps.children,r),Cu(n,l),n===null&&(l.flags|=4194304),l.child;case 5:return n===null&&Fe&&(Nd(l.type,l.pendingProps,bn.current),(f=o=Bt)&&(o=Fv(o,l.type,l.pendingProps,en),o!==null?(l.stateNode=o,wt=l,Bt=Uv(o),en=!1,f=!0):f=!1),f||Ln(l)),ye(l),f=l.type,m=l.pendingProps,y=n!==null?n.memoizedProps:null,o=m.children,Ei(f,m)?o=null:y!==null&&Ei(f,y)&&(l.flags|=32),l.memoizedState!==null&&(f=rn(n,l,Am,null,null,r),Ca?Ya._currentValue=f:Ya._currentValue2=f),Cu(n,l),hn(n,l,o,r),l.child;case 6:return n===null&&Fe&&(Od(l.pendingProps,bn.current),(n=r=Bt)&&(r=jv(r,l.pendingProps,en),r!==null?(l.stateNode=r,wt=l,Bt=null,n=!0):n=!1),n||Ln(l)),null;case 13:return Gm(n,l,r);case 4:return Xe(l,l.stateNode.containerInfo),o=l.pendingProps,n===null?l.child=Bi(l,null,o,r):hn(n,l,o,r),l.child;case 11:return Hm(n,l,l.type,l.pendingProps,r);case 7:return o=l.pendingProps,Cu(n,l),hn(n,l,o,r),l.child;case 8:return hn(n,l,l.pendingProps.children,r),l.child;case 12:return hn(n,l,l.pendingProps.children,r),l.child;case 10:return Im(n,l,r);case 9:return f=l.type._context,o=l.pendingProps.children,za(l),f=pn(f),o=o(f),l.flags|=1,hn(n,l,o,r),l.child;case 14:return Zs(n,l,l.type,l.pendingProps,r);case 15:return Fm(n,l,l.type,l.pendingProps,r);case 19:return er(n,l,r);case 31:return V0(n,l,r);case 22:return jm(n,l,r,l.pendingProps);case 24:return za(l),o=pn(Vt),n===null?(f=vf(),f===null&&(f=at,m=go(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),l.memoizedState={parent:o,cache:f},pf(l),Xl(l,Vt,f)):((n.lanes&r)!==0&&(Bs(n,l),du(l,null,null,r),fu()),f=n.memoizedState,m=l.memoizedState,f.parent!==o?(f={parent:o,cache:o},l.memoizedState=f,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=f),Xl(l,Vt,o)):(o=m.cache,Xl(l,Vt,o),o!==f.cache&&uu(l,[Vt],r,!0))),hn(n,l,l.pendingProps.children,r),l.child;case 30:return l.stateNode===null&&(l.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=l.pendingProps,o.name!=null&&o.name!=="auto"?l.flags|=n===null?18882560:18874368:Fe&&pe(l),n!==null&&n.memoizedProps.name!==o.name?l.flags|=4194816:Cu(n,l),hn(n,l,o.children,r),l.child;case 29:throw l.pendingProps}throw Error(h(156,l.tag))}function rl(n){n.flags|=4}function tr(n){Va&&(n.flags|=8)}function Xm(n,l){if(n!==null&&n.child===l.child)return!1;if((l.flags&16)!==0)return!0;for(n=l.child;n!==null;){if((n.flags&8218)!==0||(n.subtreeFlags&8218)!==0)return!0;n=n.sibling}return!1}function bu(n,l,r,o){if(Ft)for(r=l.child;r!==null;){if(r.tag===5||r.tag===6)qu(n,r.stateNode);else if(!(r.tag===4||jt&&r.tag===27)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===l)break;for(;r.sibling===null;){if(r.return===null||r.return===l)return;r=r.return}r.sibling.return=r.return,r=r.sibling}else if(Va)for(var f=l.child;f!==null;){if(f.tag===5){var m=f.stateNode;r&&o&&(m=as(m,f.type,f.memoizedProps)),qu(n,m)}else if(f.tag===6)m=f.stateNode,r&&o&&(m=Sd(m,f.memoizedProps)),qu(n,m);else if(f.tag!==4){if(f.tag===22&&f.memoizedState!==null)m=f.child,m!==null&&(m.return=f),bu(n,f,!0,!0);else if(f.child!==null){f.child.return=f,f=f.child;continue}}if(f===l)break;for(;f.sibling===null;){if(f.return===null||f.return===l)return;f=f.return}f.sibling.return=f.return,f=f.sibling}}function qf(n,l,r,o){var f=!1;if(Va)for(var m=l.child;m!==null;){if(m.tag===5){var y=m.stateNode;r&&o&&(y=as(y,m.type,m.memoizedProps)),ls(n,y)}else if(m.tag===6)y=m.stateNode,r&&o&&(y=Sd(y,m.memoizedProps)),ls(n,y);else if(m.tag!==4){if(m.tag===22&&m.memoizedState!==null)f=m.child,f!==null&&(f.return=m),qf(n,m,!0,!0),f=!0;else if(m.child!==null){m.child.return=m,m=m.child;continue}}if(m===l)break;for(;m.sibling===null;){if(m.return===null||m.return===l)return f;m=m.return}m.sibling.return=m.return,m=m.sibling}return f}function kf(n,l){if(Va&&Xm(n,l)){n=l.stateNode;var r=n.containerInfo,o=Tc();qf(o,l,!1,!1),n.pendingChildren=o,rl(l),Rv(r,o)}}function No(n,l,r,o){if(Ft)n.memoizedProps!==o&&rl(l);else if(Va){var f=n.stateNode,m=n.memoizedProps;if((n=Xm(n,l))||m!==o){var y=bn.current;m=ns(f,r,m,o,!n,null),m===f?l.stateNode=f:(tr(l),ku(m,r,o,y)&&rl(l),l.stateNode=m,n&&bu(m,l,!1,!1))}else l.stateNode=f}}function Oo(n,l,r,o,f){if((n.mode&32)!==0&&(r===null?gd(l,o):Ai(l,r,o))){if(n.flags|=16777216,(f&335544128)===f||Gu(l,o))if(bc(n.stateNode,l,o))n.flags|=8192;else if(Ra())n.flags|=8192;else throw Wn=vs,Fc}else n.flags&=-16777217}function Gf(n,l){if(wi(l)){if(n.flags|=16777216,!Bc(l))if(Ra())n.flags|=8192;else throw Wn=vs,Fc}else n.flags&=-16777217}function Ro(n,l){l!==null&&(n.flags|=4),n.flags&16384&&(l=n.tag!==22?H():536870912,n.lanes|=l,tu|=l)}function xu(n,l){if(!Fe)switch(n.tailMode){case"visible":break;case"collapsed":for(var r=n.tail,o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?l||n.tail===null?n.tail=null:n.tail.sibling=null:o.sibling=null;break;default:for(l=n.tail,r=null;l!==null;)l.alternate!==null&&(r=l),l=l.sibling;r===null?n.tail=null:r.sibling=null}}function Rt(n){var l=n.alternate!==null&&n.alternate.child===n.child,r=0,o=0;if(l)for(var f=n.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags&1206910976,o|=f.flags&1206910976,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)r|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=o,n.childLanes=r,l}function Y0(n,l,r){var o=l.pendingProps;switch(_e(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(l),null;case 1:return Rt(l),null;case 3:return r=l.stateNode,o=null,n!==null&&(o=n.memoizedState.cache),l.memoizedState.cache!==o&&(l.flags|=2048),qn(Vt),Qe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(ll(l)?rl(l):n===null||n.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Ct())),kf(n,l),Rt(l),null;case 26:if(jl){var f=l.type,m=l.memoizedState;return n===null?(rl(l),m!==null?(Rt(l),Gf(l,m)):(Rt(l),Oo(l,f,null,o,r))):m?m!==n.memoizedState?(rl(l),Rt(l),Gf(l,m)):(Rt(l),l.flags&=-16777217):(m=n.memoizedProps,Ft?m!==o&&rl(l):No(n,l,f,o),Rt(l),Oo(l,f,m,o,r)),null}case 27:if(jt){if(we(l),r=Ut.current,f=l.type,n!==null&&l.stateNode!=null)Ft?n.memoizedProps!==o&&rl(l):No(n,l,f,o);else{if(!o){if(l.stateNode===null)throw Error(h(166));return Rt(l),l.subtreeFlags&=-33554433,null}n=bn.current,ll(l)?Os(l,n):(n=qa(f,o,r,n,!0),l.stateNode=n,rl(l))}return Rt(l),l.subtreeFlags&=-33554433,null}case 5:if(we(l),f=l.type,n!==null&&l.stateNode!=null)No(n,l,f,o);else{if(!o){if(l.stateNode===null)throw Error(h(166));return Rt(l),l.subtreeFlags&=-33554433,null}if(m=bn.current,ll(l))Os(l,m),X0(l.stateNode,f,o,m)&&(l.flags|=64);else{var y=Yr(f,o,Ut.current,m,l);tr(l),bu(y,l,!1,!1),l.stateNode=y,ku(y,f,o,m)&&rl(l)}}return Rt(l),l.subtreeFlags&=-33554433,Oo(l,l.type,n===null?null:n.memoizedProps,l.pendingProps,r),null;case 6:if(n&&l.stateNode!=null)r=n.memoizedProps,Ft?r!==o&&rl(l):Va&&(r!==o?(n=Ut.current,r=bn.current,tr(l),l.stateNode=lv(o,n,r,l)):l.stateNode=n.stateNode);else{if(typeof o!="string"&&l.stateNode===null)throw Error(h(166));if(n=Ut.current,r=bn.current,ll(l)){if(!_n)throw Error(h(176));if(n=l.stateNode,r=l.memoizedProps,o=null,f=wt,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}Cn(n,r,l,o)||Ln(l,!0)}else tr(l),l.stateNode=lv(o,n,r,l)}return Rt(l),null;case 31:if(r=l.memoizedState,n===null||n.memoizedState!==null){if(o=ll(l),r!==null){if(n===null){if(!o)throw Error(h(318));if(!_n)throw Error(h(556));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(557));Vv(n,l)}else Gt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Rt(l),n=!1}else r=Ct(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=r),n=!0;if(!n)return l.flags&256?(kn(l),l):(kn(l),null);if((l.flags&128)!==0)throw Error(h(558))}return Rt(l),null;case 13:if(o=l.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=ll(l),o!==null&&o.dehydrated!==null){if(n===null){if(!f)throw Error(h(318));if(!_n)throw Error(h(344));if(f=l.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(h(317));Yv(f,l)}else Gt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Rt(l),f=!1}else f=Ct(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return l.flags&256?(kn(l),l):(kn(l),null)}return kn(l),(l.flags&128)!==0?(l.lanes=r,l):(r=o!==null,n=n!==null&&n.memoizedState!==null,r&&(o=l.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),m=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==f&&(o.flags|=2048)),r!==n&&r&&(l.child.flags|=8192),Ro(l,l.updateQueue),Rt(l),null);case 4:return Qe(),kf(n,l),n===null&&vd(l.stateNode.containerInfo),l.flags|=67108864,Rt(l),null;case 10:return qn(l.type),Rt(l),null;case 19:if(ui(l),o=l.memoizedState,o===null)return Rt(l),null;if(f=(l.flags&128)!==0,m=o.rendering,m===null)if(f)xu(o,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=l.child;n!==null;){if(m=oi(n),m!==null){for(l.flags|=128,xu(o,!1),n=m.updateQueue,l.updateQueue=n,Ro(l,n),l.subtreeFlags=0,n=r,r=l.child;r!==null;)rd(r,n),r=r.sibling;return Xi(l,Nn.current&1|2),Fe&&R(l,o.treeForkCount),l.child}n=n.sibling}o.tail!==null&&Jn()>Cs&&(l.flags|=128,f=!0,xu(o,!1),l.lanes=4194304)}else{if(!f)if(n=oi(m),n!==null){if(l.flags|=128,f=!0,n=n.updateQueue,l.updateQueue=n,Ro(l,n),xu(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!m.alternate&&!Fe)return Rt(l),null}else 2*Jn()-o.renderingStartTime>Cs&&r!==536870912&&(l.flags|=128,f=!0,xu(o,!1),l.lanes=4194304);o.isBackwards?(m.sibling=l.child,l.child=m):(n=o.last,n!==null?n.sibling=m:l.child=m,o.last=m)}if(o.tail!==null){n=o.tail;e:{for(r=n;r!==null;){if(r.alternate!==null){r=!1;break e}r=r.sibling}r=!0}return o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Jn(),n.sibling=null,m=Nn.current,m=f?m&1|2:m&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!r||Fe?Xi(l,m):(r=m,K(Dn,l),K(Nn,r),xn===null&&(xn=l)),Fe&&R(l,o.treeForkCount),n}return Rt(l),null;case 22:case 23:return kn(l),Ls(),o=l.memoizedState!==null,n!==null?n.memoizedState!==null!==o&&(l.flags|=8192):o&&(l.flags|=8192),o?(r&536870912)!==0&&(l.flags&128)===0&&(Rt(l),l.subtreeFlags&6&&(l.flags|=8192)):Rt(l),r=l.updateQueue,r!==null&&Ro(l,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==r&&(l.flags|=2048),n!==null&&P(hr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),l.memoizedState.cache!==r&&(l.flags|=2048),qn(Vt),Rt(l),null;case 25:return null;case 30:return l.flags|=33554432,Rt(l),null}throw Error(h(156,l.tag))}function q0(n,l){switch(_e(l),l.tag){case 1:return n=l.flags,n&65536?(l.flags=n&-65537|128,l):null;case 3:return qn(Vt),Qe(),n=l.flags,(n&65536)!==0&&(n&128)===0?(l.flags=n&-65537|128,l):null;case 26:case 27:case 5:return we(l),null;case 31:if(l.memoizedState!==null){if(kn(l),l.alternate===null)throw Error(h(340));Gt()}return n=l.flags,n&65536?(l.flags=n&-65537|128,l):null;case 13:if(kn(l),n=l.memoizedState,n!==null&&n.dehydrated!==null){if(l.alternate===null)throw Error(h(340));Gt()}return n=l.flags,n&65536?(l.flags=n&-65537|128,l):null;case 19:return ui(l),n=l.flags,n&65536?(l.flags=n&-65537|128,n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null),l.flags|=4,l):null;case 4:return Qe(),null;case 10:return qn(l.type),null;case 22:case 23:return kn(l),Ls(),n!==null&&P(hr),n=l.flags,n&65536?(l.flags=n&-65537|128,l):null;case 24:return qn(Vt),null;case 25:return null;default:return null}}function Km(n,l){switch(_e(l),l.tag){case 3:qn(Vt),Qe();break;case 26:case 27:case 5:we(l);break;case 4:Qe();break;case 31:l.memoizedState!==null&&kn(l);break;case 13:kn(l);break;case 19:ui(l);break;case 10:qn(l.type);break;case 22:case 23:kn(l),Ls(),n!==null&&P(hr);break;case 24:qn(Vt)}}function Bo(n,l){try{var r=l.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var f=o.next;r=f;do{if((r.tag&n)===n){o=void 0;var m=r.create,y=r.inst;o=m(),y.destroy=o}r=r.next}while(r!==f)}}catch(N){dt(l,l.return,N)}}function un(n,l,r){try{var o=l.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var m=f.next;o=m;do{if((o.tag&n)===n){var y=o.inst,N=y.destroy;if(N!==void 0){y.destroy=void 0,f=l;var Q=r,le=N;try{le()}catch(ie){dt(f,Q,ie)}}}o=o.next}while(o!==m)}}catch(ie){dt(l,l.return,ie)}}function Su(n){var l=n.updateQueue;if(l!==null){var r=n.stateNode;try{Tn(l,r)}catch(o){dt(n,n.return,o)}}}function $s(n,l,r){r.props=Br(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(o){dt(n,l,o)}}function ga(n,l){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var o=Re(n.stateNode);break;case 30:var f=n.stateNode,m=Oe(n.memoizedProps,f);(f.ref===null||f.ref.name!==m)&&(f.ref=Ec(m)),o=f.ref;break;case 7:n.stateNode===null&&(n.stateNode=Dv(n)),o=n.stateNode;break;default:o=n.stateNode}typeof r=="function"?n.refCleanup=r(o):r.current=o}}catch(y){dt(n,l,y)}}function An(n,l){var r=n.ref,o=n.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(f){dt(n,l,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){dt(n,l,f)}else r.current=null}function Qf(){var n=tn;return tn=!1,n}function zu(n,l){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&l!==null)for(var r=0;r<l.length;r++)Nv(n.stateNode,l[r])}function Ws(n){for(var l=n.return;l!==null&&(Mo(l)&&Nv(n.stateNode,l.stateNode),!nr(l));)l=l.return}function Lo(n){for(var l=n.return;l!==null&&(Mo(l)&&Ov(n.stateNode,l.stateNode),!nr(l));)l=l.return}function nr(n){return n.tag===5||n.tag===3||(jt?n.tag===27:!1)}function Mo(n){return n&&n.tag===7&&n.stateNode!==null}function Lr(n){var l=n.type,r=n.memoizedProps,o=n.stateNode;try{pv(o,l,r,n)}catch(f){dt(n,n.return,f)}}function Uo(n,l,r){try{Qu(n.stateNode,n.type,r,l,n)}catch(o){dt(n,n.return,o)}}function If(n){return n.tag===5||n.tag===3||(jl?n.tag===26:!1)||(jt?n.tag===27&&ka(n.type):!1)||n.tag===4}function gi(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||If(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(jt&&n.tag===27&&ka(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lr(n,l,r,o){var f=n.tag;if(f===5||f===6)f=n.stateNode,l?xc(r,f,l):gv(r,f),zu(n,o),tn=!0;else if(f!==4&&(jt&&f===27&&(zu(n,o),o=null,ka(n.type)&&(r=n.stateNode,l=null)),n=n.child,n!==null))for(lr(n,l,r,o),n=n.sibling;n!==null;)lr(n,l,r,o),n=n.sibling}function Eu(n,l,r,o){var f=n.tag;if(f===5||f===6)f=n.stateNode,l?hv(r,f,l):vv(r,f),zu(n,o),tn=!0;else if(f!==4&&(jt&&f===27&&(zu(n,o),o=null,ka(n.type)&&(r=n.stateNode)),n=n.child,n!==null))for(Eu(n,l,r,o),n=n.sibling;n!==null;)Eu(n,l,r,o),n=n.sibling}function ec(n,l){if(n.tag===5||jt&&n.tag===27)zu(n,l);else if(n.tag!==4&&(n=n.child,n!==null))for(ec(n,l),n=n.sibling;n!==null;)ec(n,l),n=n.sibling}function ar(n,l,r){n=n.containerInfo;try{xd(n,r)}catch(o){dt(l,l.return,o)}}function Zf(n){var l=n.stateNode,r=n.memoizedProps;try{Bd(n.type,r,l,n)}catch(o){dt(n,n.return,o)}}function Xf(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(Cr=!0)}function Kf(){var n=oa;return oa=null,n}function Tu(n,l,r,o,f){return jn=0,Jm(n.child,l,r,o,f)}function Jm(n,l,r,o,f){if(!Ft)return!1;for(var m=!1;n!==null;){if(n.tag===5){var y=n.stateNode;if(o!==null){var N=es(y);o.push(N),ts(N)&&(m=!0)}else m||ts(es(y))&&(m=!0);Cr=!0,_d(y,jn===0?l:l+"_"+jn,r),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&f||Jm(n.child,l,r,o,f)&&(m=!0));n=n.sibling}return m}function Da(n,l){if(Ft)for(;n!==null;)n.tag===5?xv(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&l||Da(n.child,l)),n=n.sibling}function Po(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(Po(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var l=n.memoizedProps;if(l.name==null||l.name==="auto")throw Error(h(544));var r=l.name;l=Ce(l.default,l.share),l!=="none"&&(Tu(n,r,l,null,!1)||Da(n.child,!1))}n=n.sibling}}function tc(n,l){if(n.tag===30){var r=n.stateNode,o=n.memoizedProps,f=Oe(o,r),m=Ce(o.default,r.paired?o.share:o.enter);m!=="none"?Tu(n,f,m,null,!1)?(Po(n),r.paired||l||Ur(n,o.onEnter)):Da(n.child,!1):Po(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)tc(n,l),n=n.sibling;else Po(n)}function Ho(n){if(Lt!==null&&Lt.size!==0){var l=Lt;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var r=n.memoizedProps,o=r.name;if(o!=null&&o!=="auto"){var f=l.get(o);if(f!==void 0){var m=Ce(r.default,r.share);if(m!=="none"&&(Tu(n,o,m,null,!1)?(m=n.stateNode,f.paired=m,m.paired=f,Ur(n,r.onShare)):Da(n.child,!1)),l.delete(o),l.size===0)break}}}Ho(n)}n=n.sibling}}}function Ml(n){if(n.tag===30){var l=n.memoizedProps,r=Oe(l,n.stateNode),o=Lt!==null?Lt.get(r):void 0,f=Ce(l.default,o!==void 0?l.share:l.exit);f!=="none"&&(Tu(n,r,f,null,!1)?o!==void 0?(f=n.stateNode,o.paired=f,f.paired=o,Lt.delete(r),Ur(n,l.onShare)):Ur(n,l.onExit):Da(n.child,!1)),Lt!==null&&Ho(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ml(n),n=n.sibling;else Lt!==null&&Ho(n)}function $m(n){for(n=n.child;n!==null;){if(n.tag===30){var l=n.memoizedProps,r=Oe(l,n.stateNode);l=Ce(l.default,l.update),n.flags&=-5,l!=="none"&&Tu(n,r,l,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&$m(n);n=n.sibling}}function pa(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var l=n.stateNode;l.paired!==null&&(l.paired=null,Da(n.child,!1))}pa(n)}n=n.sibling}}function Fo(n){if(n.tag===30)n.stateNode.paired=null,Da(n.child,!1),pa(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Fo(n),n=n.sibling;else pa(n)}function Na(n){for(n=n.child;n!==null;)n.tag===30?Da(n.child,!1):(n.subtreeFlags&33554432)!==0&&Na(n),n=n.sibling}function Au(n,l,r,o,f,m,y){if(!Ft)return!1;for(var N=!1;l!==null;){if(l.tag===5){var Q=l.stateNode;if(m!==null&&jn<m.length){var le=m[jn],ie=es(Q);(ts(le)||ts(ie))&&(N=!0),(n.flags&4)===0&&Ev(le,ie)&&(n.flags|=4),Q0(le,ie)&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&_d(Q,jn===0?r:r+"_"+jn,f),N&&(n.flags&4)!==0||(oa===null&&(oa=[]),oa.push(Q,jn===0?o:o+"_"+jn,l.memoizedProps)),jn++}else(l.tag!==22||l.memoizedState===null)&&(l.tag===30&&y?n.flags|=l.flags&32:Au(n,l.child,r,o,f,m,y)&&(N=!0));l=l.sibling}return N}function Ul(n,l){for(n=n.child;n!==null;){if(n.tag===30){var r=n.memoizedProps,o=n.stateNode,f=Oe(r,o),m=Ce(r.default,r.update),y;y=n.memoizedState,n.memoizedState=null,o=n;var N=n.child;jn=0,f=Au(o,N,f,f,m,y,!1),(n.flags&4)!==0&&f&&Ur(n,r.onUpdate)}else(n.subtreeFlags&33554432)!==0&&Ul(n);n=n.sibling}}function wu(n,l,r){for(yc(n.containerInfo),n=(r&335544064)===r,Et=l,l=n?9270:1024;Et!==null;){if(r=Et,n){var o=r.deletions;if(o!==null)for(var f=0;f<o.length;f++)n&&Ml(o[f])}if(r.alternate===null&&(r.flags&2)!==0)n&&Xf(r),Du(n);else{if(r.tag===22){if(o=r.alternate,r.memoizedState!==null){o!==null&&o.memoizedState===null&&n&&Ml(o),Du(n);continue}else if(o!==null&&o.memoizedState!==null){n&&Xf(r),Du(n);continue}}o=r.child,(r.subtreeFlags&l)!==0&&o!==null?(o.return=r,Et=o):(n&&$m(r),Du(n))}}Lt=null}function Du(n){for(;Et!==null;){var l=Et,r=n,o=l.alternate,f=l.flags;switch(l.tag){case 0:case 11:case 15:break;case 1:if((f&1024)!==0&&o!==null){r=void 0,f=o.memoizedProps,o=o.memoizedState;var m=l.stateNode;try{var y=Br(l.type,f);r=m.getSnapshotBeforeUpdate(y,o),m.__reactInternalSnapshotBeforeUpdate=r}catch(N){dt(l,l.return,N)}}break;case 3:(f&1024)!==0&&Ft&&wv(l.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&o!==null&&(r=Oe(o.memoizedProps,o.stateNode),f=l.memoizedProps,f=Ce(f.default,f.update),f!=="none"&&Tu(o,r,f,o.memoizedState=[],!0));break;default:if((f&1024)!==0)throw Error(h(163))}if(o=l.sibling,o!==null){o.return=l.return,Et=o;break}Et=l.return}}function jo(n,l,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ha(n,r),o&4&&Bo(5,r);break;case 1:if(ha(n,r),o&4)if(n=r.stateNode,l===null)try{n.componentDidMount()}catch(y){dt(r,r.return,y)}else{var f=Br(r.type,l.memoizedProps);l=l.memoizedState;try{n.componentDidUpdate(f,l,n.__reactInternalSnapshotBeforeUpdate)}catch(y){dt(r,r.return,y)}}o&64&&Su(r),o&512&&ga(r,r.return);break;case 3:if(ha(n,r),o&64&&(o=r.updateQueue,o!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=Re(r.child.stateNode);break;case 1:n=r.child.stateNode}try{Tn(o,n)}catch(y){dt(r,r.return,y)}}break;case 27:jt&&l===null&&o&4&&Zf(r);case 26:case 5:if(ha(n,r),l===null){if(o&4)Lr(r);else if(o&64){n=r.type,l=r.memoizedProps,f=r.stateNode;try{is(f,n,l,r)}catch(y){dt(r,r.return,y)}}}o&512&&ga(r,r.return);break;case 12:ha(n,r);break;case 31:ha(n,r),o&4&&Wm(n,r);break;case 13:ha(n,r),o&4&&ul(n,r),o&64&&(o=r.memoizedState,o!==null&&(o=o.dehydrated,o!==null&&(r=dc.bind(null,r),Td(o,r))));break;case 22:if(o=r.memoizedState!==null||Sn,!o){var m=l!==null&&l.memoizedState!==null||st;l=Sn,f=st,Sn=o,(st=m)&&!f?(o=jt?2:0,(r.subtreeFlags&8772)!==0&&(o|=1),Zn(n,r,o)):ha(n,r),Sn=l,st=f}break;case 30:ha(n,r),o&512&&ga(r,r.return);break;case 7:o&512&&ga(r,r.return);default:ha(n,r)}}function Nu(n,l){if(Ft)for(n=n.child;n!==null;)nc(n,l),n=n.sibling}function nc(n,l){if(Ft)switch(n.tag){case 5:case 26:try{var r=n.stateNode;l?G0(r):Cv(n.stateNode,n.memoizedProps)}catch(m){dt(n,n.return,m)}pi(n,l);break;case 6:try{var o=n.stateNode;l?_v(o):bv(o,n.memoizedProps),tn=!0}catch(m){dt(n,n.return,m)}break;case 18:try{var f=n.stateNode;l?Zv(f):Xv(n.stateNode)}catch(m){dt(n,n.return,m)}break;case 22:case 23:n.memoizedState===null&&Nu(n,l);break;default:Nu(n,l)}}function pi(n,l){if(Ft&&n.subtreeFlags&67108864)for(n=n.child;n!==null;){var r=n,o=l;if(Ft)switch(r.tag){case 4:nc(r,o);break;case 22:r.memoizedState===null&&pi(r,o);break;default:pi(r,o)}n=n.sibling}}function Jf(n){var l=n.alternate;l!==null&&(n.alternate=null,Jf(l)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(l=n.stateNode,l!==null&&Cc(l)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function In(n,l,r){for(r=r.child;r!==null;)ir(n,l,r),r=r.sibling}function ir(n,l,r){if(El&&typeof El.onCommitFiberUnmount=="function")try{El.onCommitFiberUnmount(vr,r)}catch{}switch(r.tag){case 26:if(jl){st||An(r,l),In(n,l,r),r.memoizedState?Rd(r.memoizedState):r.stateNode&&(st||us(r.stateNode));break}case 27:if(jt){st||An(r,l),Lo(r);var o=nn,f=zn;ka(r.type)&&(nn=r.stateNode,zn=!1),In(n,l,r),Ld(r.stateNode,r.type,r.memoizedProps),nn=o,zn=f;break}case 5:st||An(r,l),Lo(r);case 6:if(r.tag===6&&Lo(r),Ft){if(o=nn,f=zn,nn=null,In(n,l,r),nn=o,zn=f,nn!==null)if(zn)try{yv(nn,r.stateNode),tn=!0}catch(m){dt(r,l,m)}else try{Sc(nn,r.stateNode),tn=!0}catch(m){dt(r,l,m)}}else In(n,l,r);break;case 18:Ft&&nn!==null&&(zn?Iv(nn,r.stateNode):Dd(nn,r.stateNode));break;case 4:Ft?(o=nn,f=zn,nn=r.stateNode.containerInfo,zn=!0,In(n,l,r),nn=o,zn=f):(Va&&ar(r.stateNode,r,Tc()),In(n,l,r));break;case 0:case 11:case 14:case 15:un(2,r,l),st||un(4,r,l),In(n,l,r);break;case 1:st||(An(r,l),o=r.stateNode,typeof o.componentWillUnmount=="function"&&$s(r,l,o)),In(n,l,r);break;case 21:In(n,l,r);break;case 22:st=(o=st)||r.memoizedState!==null,In(n,l,r),st=o;break;case 30:An(r,l),In(n,l,r);break;case 7:st||An(r,l),In(n,l,r);break;default:In(n,l,r)}}function Wm(n,l){if(_n&&l.memoizedState===null&&(n=l.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Dc(n)}catch(r){dt(l,l.return,r)}}}function ul(n,l){if(_n&&l.memoizedState===null&&(n=l.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Qv(n)}catch(r){dt(l,l.return,r)}}function $f(n){switch(n.tag){case 31:case 13:case 19:var l=n.stateNode;return l===null&&(l=n.stateNode=new Yt),l;case 22:return n=n.stateNode,l=n._retryCache,l===null&&(l=n._retryCache=new Yt),l;default:throw Error(h(435,n.tag))}}function ta(n,l){var r=$f(n);l.forEach(function(o){if(!r.has(o)){r.add(o);var f=nv.bind(null,n,o);o.then(f,f)}})}function wn(n,l,r){var o=l.deletions;if(o!==null)for(var f=0;f<o.length;f++){var m=o[f],y=n,N=l;if(Ft){var Q=N;e:for(;Q!==null;){switch(Q.tag){case 27:if(jt){if(ka(Q.type)){nn=Q.stateNode,zn=!1;break e}break}case 5:nn=Q.stateNode,zn=!1;break e;case 3:case 4:nn=Q.stateNode.containerInfo,zn=!0;break e}Q=Q.return}if(nn===null)throw Error(h(160));ir(y,N,m),nn=null,zn=!1}else ir(y,N,m);y=m.alternate,y!==null&&(y.return=null),m.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)Vo(l,n,r),l=l.sibling}function Vo(n,l,r){var o=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(f&4&&(o=n.updateQueue,o=o!==null?o.events:null,o!==null))for(var m=0;m<o.length;m++){var y=o[m];y.ref.impl=y.nextImpl}wn(l,n,r),Kt(n),f&4&&(un(3,n,n.return),Bo(3,n),un(5,n,n.return));break;case 1:wn(l,n,r),Kt(n),f&512&&(st||o===null||An(o,o.return)),f&64&&Sn&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(f=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=f===null?l:f.concat(l))));break;case 26:if(jl){m=tl,wn(l,n,r),Kt(n),f&512&&(st||o===null||An(o,o.return)),f&4&&(r=o!==null?o.memoizedState:null,f=n.memoizedState,o===null?f===null?n.stateNode===null?n.stateNode=Sn?Rc(n.type,n.memoizedProps,l.containerInfo,n):Jv(m,n.type,n.memoizedProps,n):Sn||Zu(m,n.type,n.stateNode):n.stateNode=Kv(m,f,n.memoizedProps):r!==f?(r===null?(l=o.stateNode,l===null||st||us(l)):Rd(r),f===null?Sn||Zu(m,n.type,n.stateNode):Kv(m,f,n.memoizedProps)):f===null&&n.stateNode!==null&&Uo(n,n.memoizedProps,o.memoizedProps));break}case 27:if(jt){wn(l,n,r),Kt(n),f&512&&(st||o===null||An(o,o.return)),o!==null&&f&4&&Uo(n,n.memoizedProps,o.memoizedProps);break}case 5:if(m=Gl,Gl=!1,wn(l,n,r),Gl=m,Kt(n),f&512&&(st||o===null||An(o,o.return)),Ft){if(n.flags&32){l=n.stateNode;try{zc(l),tn=!0}catch(ie){dt(n,n.return,ie)}}f&4&&n.stateNode!=null&&(l=n.memoizedProps,Uo(n,l,o!==null?o.memoizedProps:l)),f&1024&&(Ka=!0)}else Va&&n.alternate!==null&&(n.alternate.stateNode=n.stateNode);break;case 6:if(wn(l,n,r),Kt(n),f&4&&Ft){if(n.stateNode===null)throw Error(h(162));l=n.memoizedProps,f=o!==null?o.memoizedProps:l,r=n.stateNode;try{k0(r,f,l),tn=!0}catch(ie){dt(n,n.return,ie)}}break;case 3:if(tn=!1,jl?($v(),m=tl,tl=Gr(l.containerInfo),wn(l,n,r),tl=m):wn(l,n,r),Kt(n),f&4){if(Ft&&_n&&o!==null&&o.memoizedState.isDehydrated)try{Gv(l.containerInfo)}catch(ie){dt(n,n.return,ie)}if(Va){f=l.containerInfo,l=l.pendingChildren;try{xd(f,l),tn=!0}catch(ie){dt(n,n.return,ie)}}}Ka&&(Ka=!1,lc(n)),tn=!1;break;case 4:o=Gl,Gl=Sn,m=Qf(),jl?(y=tl,tl=Gr(n.stateNode.containerInfo),wn(l,n,r),Kt(n),tl=y):(wn(l,n,r),Kt(n)),tn&&Dl&&(to=!0),tn=m,Gl=o,f&4&&Va&&ar(n.stateNode,n,n.stateNode.pendingChildren);break;case 12:wn(l,n,r),Kt(n);break;case 31:wn(l,n,r),Kt(n),f&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ta(n,l)));break;case 13:wn(l,n,r),Kt(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(_s=Jn()),f&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ta(n,l)));break;case 22:m=n.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var N=Sn,Q=st,le=Gl;Sn=N||m,Gl=le||m,st=Q||y,wn(l,n,r),st=Q,Gl=le,Sn=N,Kt(n),f&8192&&(l=n.stateNode,l._visibility=m?l._visibility&-2:l._visibility|1,!m||o===null||y||Sn||st||(l=jt?2:0,r=y||st,o=Sn,y=st,Sn=m||Sn,st=r,yn(n,l),Sn=o,st=y),Ft&&(m||!Gl)&&Nu(n,m)),f&4&&(l=n.updateQueue,l!==null&&(f=l.retryQueue,f!==null&&(l.retryQueue=null,ta(n,f))));break;case 19:wn(l,n,r),Kt(n),f&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,ta(n,l)));break;case 30:f&512&&(st||o===null||An(o,o.return)),f=Qf(),m=Dl,y=(r&335544064)===r,N=n.memoizedProps,Dl=y&&Ce(N.default,N.update)!=="none",wn(l,n,r),Kt(n),y&&o!==null&&tn&&(n.flags|=4),Dl=m,tn=f;break;case 21:break;case 7:f&512&&(st||o===null||An(o,o.return)),o&&o.stateNode!==null&&I0(n,o.stateNode);default:wn(l,n,r),Kt(n)}}function Kt(n){var l=n.flags;if(l&2){try{for(var r,o=n.return;o!==null;){if(If(o)){r=o;break}o=o.return}o=null;for(var f=n.return;f!==null;){if(Mo(f)){var m=f.stateNode;o===null?o=[m]:o.push(m)}if(nr(f))break;f=f.return}var y=o;if(Ft){if(r==null)throw Error(h(160));switch(r.tag){case 27:if(jt){var N=r.stateNode,Q=gi(n);Eu(n,Q,N,y);break}case 5:var le=r.stateNode;r.flags&32&&(zc(le),r.flags&=-33);var ie=gi(n);Eu(n,ie,le,y);break;case 3:case 4:var oe=r.stateNode.containerInfo,ve=gi(n);lr(n,ve,oe,y);break;default:throw Error(h(161))}}else ec(n,y)}catch(ke){dt(n,n.return,ke)}n.flags&=-3}l&4096&&(n.flags&=-4097)}function lc(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var l=n;lc(l),l.tag===5&&l.flags&1024&&rv(l.stateNode),n=n.sibling}}function Mr(n,l){if(l.subtreeFlags&9270)for(l=l.child;l!==null;)ac(l,n),l=l.sibling;else Ul(l)}function ac(n,l){var r=n.alternate;if(r===null)tc(n,!1);else switch(n.tag){case 3:if(ps=el=!1,Kf(),Mr(l,n),!el&&!to){if(n=oa,n!==null)for(var o=0;o<n.length;o+=3)Cd(n[o],n[o+1],n[o+2]);Sv(l.containerInfo),ps=!0}oa=null;break;case 5:Mr(l,n);break;case 4:o=el,el=!1,Mr(l,n),el&&(to=!0),el=o;break;case 22:n.memoizedState===null&&(r.memoizedState!==null?tc(n,!1):Mr(l,n));break;case 30:o=el;var f=Kf();el=!1,Mr(l,n),el&&(n.flags|=4);var m=n.memoizedProps,y=n.stateNode;l=Oe(m,y),y=Oe(r.memoizedProps,y);var N=Ce(m.default,m.update);N==="none"?r=!1:(m=r.memoizedState,r.memoizedState=null,r=n.child,jn=0,r=Au(n,r,l,y,N,m,!0),jn!==(m===null?0:m.length)&&(n.flags|=32)),(n.flags&4)!==0&&r?(Ur(n,n.memoizedProps.onUpdate),oa=f):f!==null&&(f.push.apply(f,oa),oa=f),el=(n.flags&32)!==0?!0:o;break;default:Mr(l,n)}}function ha(n,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)jo(n,l.alternate,l),l=l.sibling}function yn(n,l){for(n=n.child;n!==null;){var r=n,o=l;switch(r.tag){case 0:case 11:case 14:case 15:un(4,r,r.return),yn(r,o);break;case 1:An(r,r.return);var f=r.stateNode;typeof f.componentWillUnmount=="function"&&$s(r,r.return,f),yn(r,o);break;case 27:jt&&(o&2)!==0&&Ld(r.stateNode,r.type,r.memoizedProps);case 5:An(r,r.return),r.tag!==5&&r.tag!==27||Lo(r),yn(r,o);break;case 6:Lo(r);break;case 26:An(r,r.return),jl&&(f=r.stateNode,r.memoizedState!==null||f===null||st||us(f)),yn(r,o);break;case 22:r.memoizedState===null&&yn(r,o);break;case 30:An(r,r.return),yn(r,o);break;case 7:An(r,r.return);default:yn(r,o)}n=n.sibling}}function Zn(n,l,r){for(r=(l.subtreeFlags&8772)!==0?r:r&-2,l=l.child;l!==null;){var o=l.alternate,f=n,m=l,y=m.flags,N=(r&1)!==0;switch(m.tag){case 0:case 11:case 15:Zn(f,m,r),Bo(4,m);break;case 1:if(Zn(f,m,r),o=m,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){dt(o,o.return,ie)}if(o=m,f=o.updateQueue,f!==null){var Q=o.stateNode;try{var le=f.shared.hiddenCallbacks;if(le!==null)for(f.shared.hiddenCallbacks=null,f=0;f<le.length;f++)Ta(le[f],Q)}catch(ie){dt(o,o.return,ie)}}N&&y&64&&Su(m),ga(m,m.return);break;case 27:jt&&(r&2)!==0&&Zf(m);case 5:m.tag!==5&&m.tag!==27||Ws(m),Zn(f,m,r),N&&o===null&&y&4&&Lr(m),ga(m,m.return);break;case 6:Ws(m);break;case 26:jl&&(Q=m.stateNode,m.memoizedState!==null||Q===null||Sn||Zu(Gr(Q.ownerDocument),m.type,Q)),Zn(f,m,r),N&&o===null&&y&4&&Lr(m),ga(m,m.return);break;case 12:Zn(f,m,r);break;case 31:Zn(f,m,r),N&&y&4&&Wm(f,m);break;case 13:Zn(f,m,r),N&&y&4&&ul(f,m);break;case 22:m.memoizedState===null&&Zn(f,m,r),ga(m,m.return);break;case 30:Zn(f,m,r),ga(m,m.return);break;case 7:ga(m,m.return);default:Zn(f,m,r)}l=l.sibling}}function rr(n,l){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&wr(r))}function Ou(n,l){n=null,l.alternate!==null&&(n=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==n&&(l.refCount++,n!=null&&wr(n))}function Xn(n,l,r,o){var f=(r&335544064)===r;if(l.subtreeFlags&(f?10262:10256))for(l=l.child;l!==null;)Pl(n,l,r,o),l=l.sibling;else f&&Na(l)}function Pl(n,l,r,o){var f=(r&335544064)===r;f&&l.alternate===null&&l.return!==null&&l.return.alternate!==null&&Fo(l);var m=l.flags;switch(l.tag){case 0:case 11:case 15:Xn(n,l,r,o),m&2048&&Bo(9,l);break;case 1:Xn(n,l,r,o);break;case 3:Xn(n,l,r,o),f&&Ft&&ps&&zv(n.containerInfo),m&2048&&(n=null,l.alternate!==null&&(n=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==n&&(l.refCount++,n!=null&&wr(n)));break;case 12:if(m&2048){Xn(n,l,r,o),n=l.stateNode;try{var y=l.memoizedProps,N=y.id,Q=y.onPostCommit;typeof Q=="function"&&Q(N,l.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(le){dt(l,l.return,le)}}else Xn(n,l,r,o);break;case 31:Xn(n,l,r,o);break;case 13:Xn(n,l,r,o);break;case 23:break;case 22:y=l.stateNode,N=l.alternate,l.memoizedState!==null?(f&&N!==null&&N.memoizedState===null&&Fo(N),y._visibility&2?Xn(n,l,r,o):na(n,l)):(f&&N!==null&&N.memoizedState!==null&&Fo(l),y._visibility&2?Xn(n,l,r,o):(y._visibility|=2,Mn(n,l,r,o,(l.subtreeFlags&10256)!==0||!1))),m&2048&&rr(N,l);break;case 24:Xn(n,l,r,o),m&2048&&Ou(l.alternate,l);break;case 30:f&&(f=l.alternate,f!==null&&(Da(f.child,!0),Da(l.child,!0))),Xn(n,l,r,o);break;default:Xn(n,l,r,o)}}function Mn(n,l,r,o,f){for(f=f&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var m=n,y=l,N=r,Q=o,le=y.flags;switch(y.tag){case 0:case 11:case 15:Mn(m,y,N,Q,f),Bo(8,y);break;case 23:break;case 22:var ie=y.stateNode;y.memoizedState!==null?ie._visibility&2?Mn(m,y,N,Q,f):na(m,y):(ie._visibility|=2,Mn(m,y,N,Q,f)),f&&le&2048&&rr(y.alternate,y);break;case 24:Mn(m,y,N,Q,f),f&&le&2048&&Ou(y.alternate,y);break;default:Mn(m,y,N,Q,f)}l=l.sibling}}function na(n,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var r=n,o=l,f=o.flags;switch(o.tag){case 22:na(r,o),f&2048&&rr(o.alternate,o);break;case 24:na(r,o),f&2048&&Ou(o.alternate,o);break;default:na(r,o)}l=l.sibling}}function Un(n,l,r){if(n.subtreeFlags&sa)for(n=n.child;n!==null;)ya(n,l,r),n=n.sibling}function ya(n,l,r){switch(n.tag){case 26:if(Un(n,l,r),n.flags&sa)if(n.memoizedState!==null)K0(r,tl,n.memoizedState,n.memoizedProps);else{var o=n.stateNode,f=n.type;n=n.memoizedProps,((l&335544128)===l||Gu(f,n))&&hd(r,o,f,n)}break;case 5:Un(n,l,r),n.flags&sa&&(o=n.stateNode,f=n.type,n=n.memoizedProps,((l&335544128)===l||Gu(f,n))&&hd(r,o,f,n));break;case 3:case 4:jl?(o=tl,tl=Gr(n.stateNode.containerInfo),Un(n,l,r),tl=o):Un(n,l,r);break;case 22:n.memoizedState===null&&(o=n.alternate,o!==null&&o.memoizedState!==null?(o=sa,sa=16777216,Un(n,l,r),sa=o):Un(n,l,r));break;case 30:(n.flags&sa)!==0&&(o=n.memoizedProps.name,o!=null&&o!=="auto"&&(f=n.stateNode,f.paired=null,Lt===null&&(Lt=new Map),Lt.set(o,f))),Un(n,l,r);break;default:Un(n,l,r)}}function Oa(n){var l=n.alternate;if(l!==null&&(n=l.child,n!==null)){l.child=null;do l=n.sibling,n.sibling=null,n=l;while(n!==null)}}function Ru(n){var l=n.deletions;if((n.flags&16)!==0){if(l!==null)for(var r=0;r<l.length;r++){var o=l[r];Et=o,Wf(o,n)}Oa(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yo(n),n=n.sibling}function Yo(n){switch(n.tag){case 0:case 11:case 15:Ru(n),n.flags&2048&&un(9,n,n.return);break;case 3:Ru(n);break;case 12:Ru(n);break;case 22:var l=n.stateNode;n.memoizedState!==null&&l._visibility&2&&(n.return===null||n.return.tag!==13)?(l._visibility&=-3,Bu(n)):Ru(n);break;default:Ru(n)}}function Bu(n){var l=n.deletions;if((n.flags&16)!==0){if(l!==null)for(var r=0;r<l.length;r++){var o=l[r];Et=o,Wf(o,n)}Oa(n)}for(n=n.child;n!==null;){switch(l=n,l.tag){case 0:case 11:case 15:un(8,l,l.return),Bu(l);break;case 22:r=l.stateNode,r._visibility&2&&(r._visibility&=-3,Bu(l));break;default:Bu(l)}n=n.sibling}}function Wf(n,l){for(;Et!==null;){var r=Et;switch(r.tag){case 0:case 11:case 15:un(8,r,l);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:wr(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Et=o;else e:for(r=n;Et!==null;){o=Et;var f=o.sibling,m=o.return;if(Jf(o),o===r){Et=null;break e}if(f!==null){f.return=m,Et=f;break e}Et=m}}}function on(n){var l=md(n);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(h(364));return l}if(n=ov(n),n===null)throw Error(h(362));return n.stateNode.current}function bt(n,l){var r=n.tag;switch(l.$$typeof){case $r:if(n.type===l.value)return!0;break;case nl:e:{for(l=l.value,n=[n,0],r=0;r<n.length;){var o=n[r++],f=o.tag,m=n[r++],y=l[m];if(f!==5&&f!==26&&f!==27||!kr(o)){for(;y!=null&&bt(o,y);)m++,y=l[m];if(m===l.length){l=!0;break e}else for(o=o.child;o!==null;)n.push(o,m),o=o.sibling}}l=!1}return l;case ys:if((r===5||r===26||r===27)&&fv(n.stateNode,l.value))return!0;break;case Vn:if((r===5||r===6||r===26||r===27)&&(n=cv(n),n!==null&&0<=n.indexOf(l.value)))return!0;break;case Pi:if((r===5||r===26||r===27)&&(n=n.memoizedProps["data-testname"],typeof n=="string"&&n.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(h(365))}return!1}function He(n){switch(n.$$typeof){case $r:return"<"+(S(n.value)||"Unknown")+">";case nl:return":has("+(He(n)||"")+")";case ys:return'[role="'+n.value+'"]';case Vn:return'"'+n.value+'"';case Pi:return'[data-testname="'+n.value+'"]';default:throw Error(h(365))}}function hi(n,l){var r=[];n=[n,0];for(var o=0;o<n.length;){var f=n[o++],m=f.tag,y=n[o++],N=l[y];if(m!==5&&m!==26&&m!==27||!kr(f)){for(;N!=null&&bt(f,N);)y++,N=l[y];if(y===l.length)r.push(f);else for(f=f.child;f!==null;)n.push(f,y),f=f.sibling}}return r}function xl(n,l){if(!Wo)throw Error(h(363));n=on(n),n=hi(n,l),l=[],n=Array.from(n);for(var r=0;r<n.length;){var o=n[r++],f=o.tag;if(f===5||f===26||f===27)kr(o)||l.push(o.stateNode);else for(o=o.child;o!==null;)n.push(o),o=o.sibling}return l}function ol(){return(Ke&2)!==0&&Ze!==0?Ze&-Ze:ze.T!==null?cu():_c()}function yi(){if(Ol===0)if((Ze&536870912)===0||Fe){var n=fs;fs<<=1,(fs&3932160)===0&&(fs=262144),Ol=n}else Ol=536870912;return n=Dn.current,n!==null&&(n.flags|=32),Ol}function Ur(n,l){if(l!=null){var r=n.stateNode,o=r.ref;o===null&&(o=r.ref=Ec(Oe(n.memoizedProps,r))),lo===null&&(lo=[]),lo.push(l.bind(null,o))}}function Pn(n,l,r){(n===at&&(it===2||it===9)||n.cancelPendingCommit!==null)&&(Sl(n,0),la(n,Ze,Ol,!1)),Z(n,r),((Ke&2)===0||n!==at)&&(n===at&&((Ke&2)===0&&(eu|=r),qt===4&&la(n,Ze,Ol,!1)),Jl(n))}function Pr(n,l,r){if((Ke&6)!==0)throw Error(h(327));var o=!r&&(l&127)===0&&(l&n.expiredLanes)===0||C(n,l),f=o?Hn(n,l):Lu(n,l,!0),m=o;do{if(f===0){Wr&&!o&&la(n,l,0,!1);break}else{if(r=n.current.alternate,m&&!ed(r)){f=Lu(n,l,!1),m=!1;continue}if(f===2){if(m=l,n.errorRecoveryDisabledLanes&m)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){l=y;e:{var N=n;f=Ja;var Q=_n&&N.current.memoizedState.isDehydrated;if(Q&&(Sl(N,y).flags|=256),y=Lu(N,y,!1),y!==2&&y!==6){if(Yc&&!Q){N.errorRecoveryDisabledLanes|=m,eu|=m,f=4;break e}m=Yn,Yn=f,m!==null&&(Yn===null?Yn=m:Yn.push.apply(Yn,m))}f=y}if(m=!1,f!==2)continue}}if(f===1){Sl(n,0),la(n,l,0,!0);break}e:{switch(o=n,m=f,m){case 0:case 1:throw Error(h(345));case 4:if((l&4194048)!==l&&(l&62914560)!==l)break;case 6:la(o,l,Ol,!Hi);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(h(329))}if((l&62914560)===l&&(f=_s+300-Jn(),10<f)){if(la(o,l,Ol,!Hi),A(o,0,!0)!==0)break e;Il=l,o.timeoutHandle=Jt(ur.bind(null,o,r,Yn,kc,qc,l,Ol,eu,tu,Hi,m,"Throttled",-0,0),f);break e}ur(o,r,Yn,kc,qc,l,Ol,eu,tu,Hi,m,null,-0,0)}}break}while(!0);Jl(n)}function ur(n,l,r,o,f,m,y,N,Q,le,ie,oe,ve,ke){n.timeoutHandle=Ti;var ct=l.subtreeFlags,Wa=(m&335544064)===m;if(oe=null,(Wa||ct&8192||(ct&16785408)===16785408)&&(oe=pd(),Lt=null,ya(l,m,oe),Wa&&av(oe,n.containerInfo),ct=(m&62914560)===m?_s-Jn():(m&4194048)===m?l0-Jn():0,ct=iv(oe,ct),ct!==null)){Il=m,n.cancelPendingCommit=ct(sc.bind(null,n,l,m,r,o,f,y,N,Q,le,ie,oe,null,ve,ke)),la(n,m,y,!le);return}sc(n,l,m,r,o,f,y,N,Q,le,ie,oe)}function ed(n){for(var l=n;;){var r=l.tag;if((r===0||r===11||r===15)&&l.flags&16384&&(r=l.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var f=r[o],m=f.getSnapshot;f=f.value;try{if(!Mt(m(),f))return!1}catch{return!1}}if(r=l.child,l.subtreeFlags&16384&&r!==null)r.return=l,l=r;else{if(l===n)break;for(;l.sibling===null;){if(l.return===null||l.return===n)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function la(n,l,r,o){l=O(n,l),l&=~Yd,l&=~eu,n.suspendedLanes|=l,n.pingedLanes&=~l,o&&(n.warmLanes|=l),o=n.expirationTimes;for(var f=l;0<f;){var m=31-zl(f),y=1<<m;o[m]=-1,f&=~y}r!==0&&de(n,r,l)}function ic(){return(Ke&6)===0?(Yi(0),!1):!0}function _i(){if(je!==null){if(it===0)var n=je.return;else n=je,Oi=Ni=null,bf(n),kl=null,dl=0,n=je;for(;n!==null;)Km(n.alternate,n),n=n.return;je=null}}function Sl(n,l){var r=n.timeoutHandle;return r!==Ti&&(n.timeoutHandle=Ti,dd(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Il=0,_i(),at=n,je=r=aa(n.current,null),Ze=l,it=0,Nl=null,Hi=!1,Wr=C(n,l),Yc=!1,tu=Ol=Yd=eu=br=qt=0,Yn=Ja=null,qc=!1,ca=O(n,l),ki(),r}function Ci(n,l){Me=null,ze.H=Mi,l===vn||l===Ri?(l=Tm(),it=3):l===Fc?(l=Tm(),it=4):it=l===Ui?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Nl=l,je===null&&(qt=1,Is(n,an(l,n.current)))}function Ra(){var n=Dn.current;return n===null?!0:(Ze&4194048)===Ze?xn===null:(Ze&62914560)===Ze||(Ze&536870912)!==0?n===xn:!1}function qo(){var n=ze.H;return ze.H=Mi,n===null?Mi:n}function rc(){var n=ze.A;return ze.A=hs,n}function Ba(){qt=4,Hi||(Ze&4194048)!==Ze&&Dn.current!==null||(Wr=!0),(br&134217727)===0&&(eu&134217727)===0||at===null||la(at,Ze,Ol,!1)}function Lu(n,l,r){var o=Ke;Ke|=2;var f=qo(),m=rc();(at!==n||Ze!==l)&&(kc=null,Sl(n,l)),l=!1;var y=qt;e:do try{if(it!==0&&je!==null){var N=je,Q=Nl;switch(it){case 8:_i(),y=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(l=!0);var le=it;if(it=0,Nl=null,Mu(n,N,Q,le),r&&Wr){y=0;break e}break;default:le=it,it=0,Nl=null,Mu(n,N,Q,le)}}Hr(),y=qt;break}catch(ie){Ci(n,ie)}while(!0);return l&&n.shellSuspendCounter++,Oi=Ni=null,Ke=o,ze.H=f,ze.A=m,je===null&&(at=null,Ze=0,ki()),y}function Hr(){for(;je!==null;)td(je)}function Hn(n,l){var r=Ke;Ke|=2;var o=qo(),f=rc();at!==n||Ze!==l?(kc=null,Cs=Jn()+500,Sl(n,l)):Wr=C(n,l);e:do try{if(it!==0&&je!==null){l=je;var m=Nl;t:switch(it){case 1:it=0,Nl=null,Mu(n,l,m,1);break;case 2:case 9:if(bl(m)){it=0,Nl=null,ev(l);break}l=function(){it!==2&&it!==9||at!==n||(it=7),Jl(n)},m.then(l,l);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:bl(m)?(it=0,Nl=null,ev(l)):(it=0,Nl=null,Mu(n,l,m,7));break;case 5:var y=null;switch(je.tag){case 26:y=je.memoizedState;case 5:case 27:var N=je,Q=N.type,le=N.pendingProps;if(y?Bc(y):bc(N.stateNode,Q,le)){it=0,Nl=null;var ie=N.sibling;if(ie!==null)je=ie;else{var oe=N.return;oe!==null?(je=oe,oc(oe)):je=null}break t}}it=0,Nl=null,Mu(n,l,m,5);break;case 6:it=0,Nl=null,Mu(n,l,m,6);break;case 8:_i(),qt=6;break e;default:throw Error(h(462))}}uc();break}catch(ve){Ci(n,ve)}while(!0);return Oi=Ni=null,ze.H=o,ze.A=f,Ke=r,je!==null?0:(at=null,Ze=0,ki(),qt)}function uc(){for(;je!==null&&!Wv();)td(je)}function td(n){var l=Yf(n.alternate,n,ca);n.memoizedProps=n.pendingProps,l===null?oc(n):je=l}function ev(n){var l=n,r=l.alternate;switch(l.tag){case 15:case 0:l=Ym(r,l,l.pendingProps,l.type,void 0,Ze);break;case 11:l=Ym(r,l,l.pendingProps,l.type.render,l.ref,Ze);break;case 5:bf(l);var o=l;_n&&o===wt&&(Fe?(li(o),o.tag===5&&o.stateNode!=null&&(Bt=o.stateNode)):(li(o),Fe=!0));default:Km(r,l),l=je=rd(l,ca),l=Yf(r,l,ca)}n.memoizedProps=n.pendingProps,l===null?oc(n):je=l}function Mu(n,l,r,o){Oi=Ni=null,bf(l),kl=null,dl=0;var f=l.return;try{if(j0(n,f,l,r,Ze)){qt=1,Is(n,an(r,n.current)),je=null;return}}catch(m){if(f!==null)throw je=f,m;qt=1,Is(n,an(r,n.current)),je=null;return}l.flags&32768?(Fe||o===1?n=!0:Wr||(Ze&536870912)!==0?n=!1:(Hi=n=!0,(o===2||o===9||o===3||o===6)&&(o=Dn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wt(l,n)):oc(l)}function oc(n){var l=n;do{if((l.flags&32768)!==0){Wt(l,Hi);return}n=l.return;var r=Y0(l.alternate,l,ca);if(r!==null){je=r;return}if(l=l.sibling,l!==null){je=l;return}je=l=n}while(l!==null);qt===0&&(qt=5)}function Wt(n,l){do{var r=q0(n.alternate,n);if(r!==null){r.flags&=32767,je=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!l&&(n=n.sibling,n!==null)){je=n;return}je=n=r}while(n!==null);qt=6,je=null}function sc(n,l,r,o,f,m,y,N,Q,le,ie,oe){n.cancelPendingCommit=null;do La();while(Ht!==0);if((Ke&6)!==0)throw Error(h(327));if(l!==null){if(l===n.current)throw Error(h(177));n===at&&(je=at=null,Ze=0),xr=l,Ql=n,Il=r,Gc=f,pt=o,ko(n,l,r,y,N,Q,oe)}}function ko(n,l,r,o,f,m,y){var N=l.lanes|l.childLanes;if(bs=N,N|=yr,W(n,r,N,o,f,m),lo=null,(r&335544064)===r?(nu=Cm(n),o=10262):(nu=null,o=10256),(l.subtreeFlags&o)!==0||(l.flags&o)!==0?(n.callbackNode=null,n.callbackPriority=0,Uu(ms,function(){return ld(),null})):(n.callbackNode=null,n.callbackPriority=0),Cr=!1,o=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||o){o=ze.T,ze.T=null,f=yt(),mt(2),m=Ke,Ke|=4;try{wu(n,l,r)}finally{Ke=m,mt(f),ze.T=o}}Ht=1,Cr?Sr=bd(y,n.containerInfo,nu,nd,Fr,Go,Qo,ld,tv,null,null):(nd(),Fr(),Qo())}function tv(n){if(Ht!==0){var l=Ql.onRecoverableError;l(n,{componentStack:null})}}function Go(){Ht===3&&(Ht=0,ac(xr,Ql),Ht=4)}function nd(){if(Ht===1){Ht=0;var n=Ql,l=xr,r=Il,o=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||o){o=ze.T,ze.T=null;var f=yt();mt(2);var m=Ke;Ke|=4;try{Dl=to=!1,Vo(l,n,r),Yu(n.containerInfo)}finally{Ke=m,mt(f),ze.T=o}}n.current=l,Ht=2}}function Fr(){if(Ht===2){Ht=0;var n=Ql,l=xr,r=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||r){r=ze.T,ze.T=null;var o=yt();mt(2);var f=Ke;Ke|=4;try{jo(n,l.alternate,l)}finally{Ke=f,mt(o),ze.T=r}}Ht=3}}function Qo(){if(Ht===4||Ht===3){Ht=0;var n=Sr;Sr=null,ds();var l=Ql,r=xr,o=Il,f=pt,m=(o&335544064)===o?10262:10256;if((r.subtreeFlags&m)!==0||(r.flags&m)!==0?Ht=5:(Ht=0,xr=Ql=null,or(l,l.pendingLanes)),m=l.pendingLanes,m===0&&($a=null),et(o),r=r.stateNode,El&&typeof El.onCommitFiberRoot=="function")try{El.onCommitFiberRoot(vr,r,void 0,(r.current.flags&128)===128)}catch{}if(f!==null){r=ze.T,m=yt(),mt(2),ze.T=null;try{for(var y=l.onRecoverableError,N=0;N<f.length;N++){var Q=f[N];y(Q.value,{componentStack:Q.stack})}}finally{ze.T=r,mt(m)}}if(f=lo,y=nu,nu=null,f!==null&&(lo=null,y===null&&(y=[]),n!==null))for(Q=0;Q<f.length;Q++)r=(0,f[Q])(y),r!==void 0&&Av(n,r);(Il&3)!==0&&La(),Jl(l),m=l.pendingLanes,(o&261930)!==0&&(m&42)!==0?l===Qc?xs++:(xs=0,Qc=l):(xs=0,Qc=null),_n&&Iu(),Yi(0)}}function or(n,l){(n.pooledCacheLanes&=l)===0&&(l=n.pooledCache,l!=null&&(n.pooledCache=null,wr(l)))}function La(){return Sr!==null&&(Tv(Sr),Sr=null),nd(),Fr(),Qo(),ld()}function ld(){if(Ht!==5)return!1;var n=Ql,l=bs;bs=0;var r=et(Il),o=32>r?32:r;r=ze.T;var f=yt();try{mt(o),ze.T=null,o=Gc,Gc=null;var m=Ql,y=Il;if(Ht=0,xr=Ql=null,Il=0,(Ke&6)!==0)throw Error(h(331));var N=Ke;if(Ke|=4,Yo(m.current),Pl(m,m.current,y,o),Ke=N,Yi(0,!1),El&&typeof El.onPostCommitFiberRoot=="function")try{El.onPostCommitFiberRoot(vr,m)}catch{}return!0}finally{mt(f),ze.T=r,or(n,l)}}function ad(n,l,r){l=an(r,l),l=Bf(n.stateNode,l,2),n=ri(n,l,2),n!==null&&(Z(n,2),Jl(n))}function dt(n,l,r){if(n.tag===3)ad(n,n,r);else for(;l!==null;){if(l.tag===3){ad(l,n,r);break}else if(l.tag===1){var o=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($a===null||!$a.has(o))){n=an(r,n),r=Lf(2),o=ri(l,r,2),o!==null&&(Pm(r,o,l,n),Z(o,2),Jl(o));break}}l=l.return}}function cc(n,l,r){var o=n.pingCache;if(o===null){o=n.pingCache=new n0;var f=new Set;o.set(l,f)}else f=o.get(l),f===void 0&&(f=new Set,o.set(l,f));f.has(r)||(Yc=!0,f.add(r),n=jr.bind(null,n,l,r),l.then(n,n))}function jr(n,l,r){var o=n.pingCache;o!==null&&o.delete(l),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,at===n&&(Ze&r)===r&&((qt===4||qt===3&&(Ze&62914560)===Ze&&300>Jn()-_s)&&(Ke&2)===0?Sl(n,0):Yd|=r,tu===Ze&&(tu=0)),Jl(n)}function fc(n,l){l===0&&(l=H()),n=Gi(n,l),n!==null&&(Z(n,l),Jl(n))}function dc(n){var l=n.memoizedState,r=0;l!==null&&(r=l.retryLane),fc(n,r)}function nv(n,l){var r=0;switch(n.tag){case 31:case 13:var o=n.stateNode,f=n.memoizedState;f!==null&&(r=f.retryLane);break;case 19:o=n.stateNode;break;case 22:o=n.stateNode._retryCache;break;default:throw Error(h(314))}o!==null&&o.delete(l),fc(n,r)}function Uu(n,l){return dn(n,l)}function id(n,l,r,o){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aa(n,l){var r=n.alternate;return r===null?(r=v(n.tag,l,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=l,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&1206910976,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,l=n.dependencies,r.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function rd(n,l){n.flags&=1206910978;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=l,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,l=r.dependencies,n.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),n}function Io(n,l,r,o,f,m){var y=0;if(o=n,typeof o=="function")Pu(o)&&(y=1);else if(typeof o=="string")y=jl&&jt?Oc(n,r,bn.current)?26:os(n)?27:5:jl?Oc(n,r,bn.current)?26:5:jt&&os(n)?27:5;else e:switch(o){case Jo:return n=v(31,r,l,f),n.elementType=Jo,n.lanes=m,n;case fr:return Hl(r.children,f,m,l);case vc:y=8,f|=24;break;case Vr:return n=v(12,r,l,f|2),n.elementType=Vr,n.lanes=m,n;case Pa:return n=v(13,r,l,f),n.elementType=Pa,n.lanes=m,n;case Vu:return n=v(19,r,l,f),n.elementType=Vu,n.lanes=m,n;case Fn:case Fa:return n=f|32,n=v(30,r,l,n),n.elementType=Fa,n.lanes=m,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case Ua:y=10;break e;case ju:y=9;break e;case gc:y=11;break e;case pc:y=14;break e;case Ha:y=16,o=null;break e}y=29,r=Error(h(130,n===null?"null":typeof n,"")),o=null}return l=v(y,r,l,f),l.elementType=n,l.type=o,l.lanes=m,l}function Hl(n,l,r,o){return n=v(7,n,o,l),n.lanes=r,n}function bi(n,l,r){return n=v(6,n,null,l),n.lanes=r,n}function ud(n){var l=v(18,null,null,0);return l.stateNode=n,l}function mc(n,l,r){return l=v(4,n.children!==null?n.children:[],n.key,l),l.lanes=r,l.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},l}function Hu(n,l,r,o,f,m,y,N,Q){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=Ti,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=L(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=L(0),this.hiddenUpdates=L(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.transitionTypes=null,this.incompleteTransitions=new Map}function Fu(n,l,r,o,f,m,y,N,Q,le,ie,oe){return n=new Hu(n,l,r,y,Q,le,ie,oe,N),l=1,m===!0&&(l|=24),m=v(3,null,null,l),n.current=m,m.stateNode=n,l=go(),l.refCount++,n.pooledCache=l,l.refCount++,m.memoizedState={element:o,isDehydrated:r,cache:l},pf(m),n}function Zo(n){return n?(n=Ku,n):Ku}function xi(n){var l=n._reactInternals;if(l===void 0)throw typeof n.render=="function"?Error(h(188)):(n=Object.keys(n).join(","),Error(h(268,n)));return n=T(l),n=n!==null?x(n):null,n===null?null:Re(n.stateNode)}function Xo(n,l,r,o,f,m){f=Zo(f),o.context===null?o.context=f:o.pendingContext=f,o=ii(l),o.payload={element:r},m=m===void 0?null:m,m!==null&&(o.callback=m),r=ri(n,o,l),r!==null&&(Pn(r,n,l),Or(r,n,l))}function od(n,l){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<l?r:l}}function Si(n,l){od(n,l),(n=n.alternate)&&od(n,l)}var Ie={},sr=At,sl=K_,Ko=Object.assign,cr=Symbol.for("react.element"),_a=Symbol.for("react.transitional.element"),Ma=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Vr=Symbol.for("react.profiler"),ju=Symbol.for("react.consumer"),Ua=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),pc=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Jo=Symbol.for("react.activity"),Fn=Symbol.for("react.legacy_hidden"),Kn=Symbol.for("react.memo_cache_sentinel"),Fa=Symbol.for("react.view_transition"),sd=Symbol.for("react.recoverable"),cd=Symbol.iterator,zi=Symbol.for("react.optimistic_key"),Fl=Symbol.for("react.client.reference"),sn=Array.isArray,ze=sr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fd=s.rendererVersion,hc=s.rendererPackageName,ja=s.extraDevToolsConfig,Re=s.getPublicInstance,xt=s.getRootHostContext,cn=s.getChildHostContext,yc=s.prepareForCommit,Yu=s.resetAfterCommit,Yr=s.createInstance;s.cloneMutableInstance;var qu=s.appendInitialChild,ku=s.finalizeInitialChildren,Ei=s.shouldSetTextContent,lv=s.createTextInstance;s.cloneMutableTextInstance;var Jt=s.scheduleTimeout,dd=s.cancelTimeout,Ti=s.noTimeout,Ca=s.isPrimaryRenderer;s.warnsIfNotActing;var Ft=s.supportsMutation,Va=s.supportsPersistence,_n=s.supportsHydration,md=s.getInstanceFromNode;s.beforeActiveInstanceBlur;var vd=s.preparePortalMount;s.prepareScopeUpdate,s.getInstanceFromScope;var mt=s.setCurrentUpdatePriority,yt=s.getCurrentUpdatePriority,_c=s.resolveUpdatePriority;s.trackSchedulerEvent,s.resolveEventType,s.resolveEventTimeStamp;var $o=s.shouldAttemptEagerTransition,Cc=s.detachDeletedInstance;s.requestPostPaintCallback;var gd=s.maySuspendCommit,Ai=s.maySuspendCommitOnUpdate,Gu=s.maySuspendCommitInSyncRender,bc=s.preloadInstance,pd=s.startSuspendingCommit,hd=s.suspendInstance,av=s.suspendOnActiveViewTransition,iv=s.waitForCommitToBeReady;s.getSuspendedCommitReason;var qr=s.NotPendingTransition,Ya=s.HostTransitionContext,rv=s.resetFormInstance;s.bindToConsole;var yd=s.supportsMicrotasks,uv=s.scheduleMicrotask,Wo=s.supportsTestSelectors,ov=s.findFiberRoot,sv=s.getBoundingRect,cv=s.getTextContent,kr=s.isHiddenSubtree,fv=s.matchAccessibilityRole,dv=s.setFocusIfFocusable,mv=s.setupIntersectionObserver,vv=s.appendChild,gv=s.appendChildToContainer,k0=s.commitTextUpdate,pv=s.commitMount,Qu=s.commitUpdate,hv=s.insertBefore,xc=s.insertInContainerBefore,Sc=s.removeChild,yv=s.removeChildFromContainer,zc=s.resetTextContent,G0=s.hideInstance,_v=s.hideTextInstance,Cv=s.unhideInstance,bv=s.unhideTextInstance,_d=s.applyViewTransitionName,xv=s.restoreViewTransitionName,Cd=s.cancelViewTransitionName,Sv=s.cancelRootViewTransitionName,zv=s.restoreRootViewTransitionName;s.cloneRootViewTransitionContainer,s.removeRootViewTransitionClone;var es=s.measureInstance;s.measureClonedInstance;var ts=s.wasInstanceInViewport,Ev=s.hasInstanceChanged,Q0=s.hasInstanceAffectedParent,bd=s.startViewTransition;s.startGestureTransition;var Tv=s.stopViewTransition,Av=s.addViewTransitionFinishedListener;s.getCurrentGestureOffset;var Ec=s.createViewTransitionInstance,wv=s.clearContainer,Dv=s.createFragmentInstance,I0=s.updateFragmentInstanceFiber,Nv=s.commitNewChildToFragmentInstance,Ov=s.deleteChildFromFragmentInstance,ns=s.cloneInstance,Tc=s.createContainerChildSet,ls=s.appendChildToContainerChildSet,Rv=s.finalizeContainerChildren,xd=s.replaceContainerChildren,as=s.cloneHiddenInstance,Sd=s.cloneHiddenTextInstance,Ac=s.isSuspenseInstancePending,zd=s.isSuspenseInstanceFallback,Ed=s.getSuspenseInstanceFallbackErrorDetails,Td=s.registerSuspenseInstanceRetry,Bv=s.canHydrateFormStateMarker,Lv=s.isFormStateMarkerMatching,dr=s.getNextHydratableSibling,Mv=s.getNextHydratableSiblingAfterSingleton,Uv=s.getFirstHydratableChild,Pv=s.getFirstHydratableChildWithinContainer,wc=s.getFirstHydratableChildWithinActivityInstance,Hv=s.getFirstHydratableChildWithinSuspenseInstance,Ad=s.getFirstHydratableChildWithinSingleton,Fv=s.canHydrateInstance,jv=s.canHydrateTextInstance,Z0=s.canHydrateActivityInstance,wd=s.canHydrateSuspenseInstance,fn=s.hydrateInstance,Cn=s.hydrateTextInstance,Vv=s.hydrateActivityInstance,Yv=s.hydrateSuspenseInstance,qv=s.getNextHydratableInstanceAfterActivityInstance,kv=s.getNextHydratableInstanceAfterSuspenseInstance,is=s.commitHydratedInstance,Gv=s.commitHydratedContainer,Dc=s.commitHydratedActivityInstance,Qv=s.commitHydratedSuspenseInstance,X0=s.finalizeHydratedChildren,Iu=s.flushHydrationEvents;s.clearActivityBoundary;var Dd=s.clearSuspenseBoundary;s.clearActivityBoundaryFromContainer;var Iv=s.clearSuspenseBoundaryFromContainer,Zv=s.hideDehydratedBoundary,Xv=s.unhideDehydratedBoundary,Nc=s.shouldDeleteUnhydratedTailInstances;s.diffHydratedPropsForDevWarnings,s.diffHydratedTextForDevWarnings,s.describeHydratableInstanceForDevWarnings;var Nd=s.validateHydratableInstance,Od=s.validateHydratableTextInstance,jl=s.supportsResources,Oc=s.isHostHoistableType,Gr=s.getHoistableRoot,rs=s.getResource,Kv=s.acquireResource,Rd=s.releaseResource,Jv=s.hydrateHoistable,Zu=s.mountHoistable,us=s.unmountHoistable,Rc=s.createHoistableInstance,$v=s.prepareToCommitHoistables,wi=s.mayResourceSuspendCommit,Bc=s.preloadResource,K0=s.suspendResource,jt=s.supportsSingletons,qa=s.resolveSingletonInstance,Bd=s.acquireSingletonInstance,Ld=s.releaseSingletonInstance,os=s.isHostSingletonType,ka=s.isSingletonScope,St=[],Xu=-1,Ku={},zl=Math.clz32?Math.clz32:J,ss=Math.log,mr=Math.LN2,cs=256,fs=262144,Vl=4194304,dn=sl.unstable_scheduleCallback,Ju=sl.unstable_cancelCallback,Wv=sl.unstable_shouldYield,ds=sl.unstable_requestPaint,Jn=sl.unstable_now,Lc=sl.unstable_ImmediatePriority,Md=sl.unstable_UserBlockingPriority,ms=sl.unstable_NormalPriority,e0=sl.unstable_IdlePriority,Ud=sl.log,Pd=sl.unstable_setDisableYieldValue,vr=null,El=null,Mc=0,Mt=typeof Object.is=="function"?Object.is:be,Hd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Ga=Object.prototype.hasOwnProperty,Uc,cl,gr=!1,Fd=new WeakMap,fl=[],Di=0,$u=null,Qr=0,Tl=[],Yl=0,Qa=null,ql=1,ba="",bn=U(null),Wu=U(null),Ut=U(null),ut=U(null),wt=null,Bt=null,Fe=!1,Pt=null,en=!1,Ir=Error(h(519)),Zr=U(null),Ni=null,Oi=null,Pc=typeof AbortController<"u"?AbortController:function(){var n=[],l=this.signal={aborted:!1,addEventListener:function(r,o){n.push(o)}};this.abort=function(){l.aborted=!0,n.forEach(function(r){return r()})}},t0=sl.unstable_scheduleCallback,jd=sl.unstable_NormalPriority,Vt={$$typeof:Ua,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0},Xr=null,Kr=null,_t=null,$n=!1,Al=!1,Hc=!1,pr=0,eo=null,Vd=0,Ia=0,mn=null,ia=ze.S;ze.S=function(n,l){if(l0=Jn(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&P0(n,l),Xr!==null)for(var r=Kr;r!==null;)_m(r,Xr),r=r.next;if(r=n.types,r!=null){for(var o=Kr;o!==null;)_m(o,r),o=o.next;if(Ia!==0){o=Xr,o===null&&(o=Xr=[]);for(var f=0;f<r.length;f++){var m=r[f];o.indexOf(m)===-1&&o.push(m)}}}ia!==null&&ia(n,l)};var hr=U(null),vn=Error(h(460)),Fc=Error(h(474)),Ri=Error(h(542)),vs={then:function(){}},Wn=null,kl=null,dl=0,Bi=ho(!0),jc=ho(!1),Qt=[],Jr=0,yr=0,ra=!1,Li=!1,wl=U(null),gs=U(0),Dn=U(null),xn=null,Nn=U(0),ua=0,Me=null,zt=null,gn=null,lt=!1,vt=!1,Ue=!1,qe=0,ot=0,On=null,_r=0,Mi={readContext:pn,use:Co,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot,useEffectEvent:Ot},Vc={readContext:pn,use:Co,useCallback:function(n,l){return Gn().memoizedState=[n,l===void 0?null:l],n},useContext:pn,useEffect:wf,useImperativeHandle:function(n,l,r){r=r!=null?r.concat([n]):null,ci(4194308,4,pu.bind(null,l,n),r)},useLayoutEffect:function(n,l){return ci(4194308,4,n,l)},useInsertionEffect:function(n,l){ci(4,2,n,l)},useMemo:function(n,l){var r=Gn();l=l===void 0?null:l;var o=n();if(Ue){tt(!0);try{n()}finally{tt(!1)}}return r.memoizedState=[o,l],o},useReducer:function(n,l,r){var o=Gn();if(r!==void 0){var f=r(l);if(Ue){tt(!0);try{r(l)}finally{tt(!1)}}}else f=l;return o.memoizedState=o.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},o.queue=n,n=n.dispatch=Of.bind(null,Me,n),[o.memoizedState,n]},useRef:function(n){var l=Gn();return n={current:n},l.memoizedState=n},useState:function(n){n=Fs(n);var l=n.queue,r=Gs.bind(null,Me,l);return l.dispatch=r,[n.memoizedState,r]},useDebugValue:xo,useDeferredValue:function(n,l){var r=Gn();return hu(r,n,l)},useTransition:function(){var n=Fs(!1);return n=Nf.bind(null,Me,n.queue,!0,!1),Gn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,l,r){var o=Me,f=Gn();if(Fe){if(r===void 0)throw Error(h(407));r=r()}else{if(r=l(),at===null)throw Error(h(349));(Ze&127)!==0||Ps(o,l,r)}f.memoizedState=r;var m={value:r,getSnapshot:l};return f.queue=m,wf(Dm.bind(null,o,m,n),[n]),o.flags|=2048,$i(9,{destroy:void 0},xf.bind(null,o,m,r,l),null),r},useId:function(){var n=Gn(),l=at.identifierPrefix;if(Fe){var r=ba,o=ql;r=(o&~(1<<32-zl(o)-1)).toString(32)+r,l="_"+l+"R_"+r,r=qe++,0<r&&(l+="H"+r.toString(32)),l+="_"}else r=_r++,l="_"+l+"r_"+r.toString(32)+"_";return n.memoizedState=l},useHostTransitionStatus:wa,useFormState:Vs,useActionState:Vs,useOptimistic:function(n){var l=Gn();l.memoizedState=l.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=r,l=_u.bind(null,Me,!0,r),r.dispatch=l,[n,l]},useMemoCache:mu,useCacheRefresh:function(){return Gn().memoizedState=F0.bind(null,Me)},useEffectEvent:function(n){var l=Gn(),r={impl:n};return l.memoizedState=r,function(){if((Ke&2)!==0)throw Error(h(440));return r.impl.apply(void 0,arguments)}}},Za={readContext:pn,use:Co,useCallback:So,useContext:pn,useEffect:bo,useImperativeHandle:di,useInsertionEffect:Aa,useLayoutEffect:ks,useMemo:Df,useReducer:ea,useRef:qs,useState:function(){return ea(Wl)},useDebugValue:xo,useDeferredValue:function(n,l){var r=Xt();return zo(r,zt.memoizedState,n,l)},useTransition:function(){var n=ea(Wl)[0],l=Xt().memoizedState;return[typeof n=="boolean"?n:$e(n),l]},useSyncExternalStore:wm,useId:Eo,useHostTransitionStatus:wa,useFormState:Nm,useActionState:Nm,useOptimistic:function(n,l){var r=Xt();return js(r,zt,n,l)},useMemoCache:mu,useCacheRefresh:yu,useEffectEvent:gu},$t={readContext:pn,use:Co,useCallback:So,useContext:pn,useEffect:bo,useImperativeHandle:di,useInsertionEffect:Aa,useLayoutEffect:ks,useMemo:Df,useReducer:Us,useRef:qs,useState:function(){return Us(Wl)},useDebugValue:xo,useDeferredValue:function(n,l){var r=Xt();return zt===null?hu(r,n,l):zo(r,zt.memoizedState,n,l)},useTransition:function(){var n=Us(Wl)[0],l=Xt().memoizedState;return[typeof n=="boolean"?n:$e(n),l]},useSyncExternalStore:wm,useId:Eo,useHostTransitionStatus:wa,useFormState:va,useActionState:va,useOptimistic:function(n,l){var r=Xt();return zt!==null?js(r,zt,n,l):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:mu,useCacheRefresh:yu,useEffectEvent:gu},Xa={enqueueSetState:function(n,l,r){n=n._reactInternals;var o=ol(),f=ii(o);f.payload=l,r!=null&&(f.callback=r),l=ri(n,f,o),l!==null&&(Pn(l,n,o),Or(l,n,o))},enqueueReplaceState:function(n,l,r){n=n._reactInternals;var o=ol(),f=ii(o);f.tag=1,f.payload=l,r!=null&&(f.callback=r),l=ri(n,f,o),l!==null&&(Pn(l,n,o),Or(l,n,o))},enqueueForceUpdate:function(n,l){n=n._reactInternals;var r=ol(),o=ii(r);o.tag=2,l!=null&&(o.callback=l),l=ri(n,o,r),l!==null&&(Pn(l,n,r),Or(l,n,r))}},Ui=Error(h(461)),It=!1,ml={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},tn=!1,Cr=!1,Lt=null,oa=null,jn=0,Sn=!1,st=!1,Gl=!1,Ka=!1,Yt=typeof WeakSet=="function"?WeakSet:Set,Et=null,el=!1,Dl=!1,to=!1,ps=!1,nn=null,zn=!1,tl=null,sa=8192,hs={getCacheForType:function(n){var l=pn(Vt),r=l.data.get(n);return r===void 0&&(r=n(),l.data.set(n,r)),r},cacheSignal:function(){return pn(Vt).controller.signal}},$r=0,nl=1,ys=2,Pi=3,Vn=4;if(typeof Symbol=="function"&&Symbol.for){var no=Symbol.for;$r=no("selector.component"),nl=no("selector.has_pseudo_class"),ys=no("selector.role"),Pi=no("selector.test_id"),Vn=no("selector.text")}var n0=typeof WeakMap=="function"?WeakMap:Map,Ke=0,at=null,je=null,Ze=0,it=0,Nl=null,Hi=!1,Wr=!1,Yc=!1,ca=0,qt=0,br=0,eu=0,Yd=0,Ol=0,tu=0,Ja=null,Yn=null,qc=!1,_s=0,l0=0,Cs=1/0,kc=null,$a=null,Ht=0,Ql=null,xr=null,Il=0,bs=0,Gc=null,pt=null,Sr=null,lo=null,nu=null,xs=0,Qc=null;return Ie.attemptContinuousHydration=function(n){if(n.tag===13||n.tag===31){var l=Gi(n,67108864);l!==null&&Pn(l,n,67108864),Si(n,67108864)}},Ie.attemptHydrationAtCurrentPriority=function(n){if(n.tag===13||n.tag===31){var l=ol();l=xe(l);var r=Gi(n,l);r!==null&&Pn(r,n,l),Si(n,l)}},Ie.attemptSynchronousHydration=function(n){switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var l=j(n.pendingLanes);if(l!==0){for(n.pendingLanes|=2,n.entangledLanes|=2;l;){var r=1<<31-zl(l);n.entanglements[1]|=r,l&=~r}Jl(n),(Ke&6)===0&&(Cs=Jn()+500,Yi(0))}}break;case 31:case 13:l=Gi(n,2),l!==null&&Pn(l,n,2),ic(),Si(n,2)}},Ie.batchedUpdates=function(n,l){return n(l)},Ie.createComponentSelector=function(n){return{$$typeof:$r,value:n}},Ie.createContainer=function(n,l,r,o,f,m,y,N,Q,le){return Fu(n,l,!1,null,r,o,m,null,y,N,Q,le)},Ie.createHasPseudoClassSelector=function(n){return{$$typeof:nl,value:n}},Ie.createHydrationContainer=function(n,l,r,o,f,m,y,N,Q,le,ie,oe,ve,ke){var ct;return n=Fu(r,o,!0,n,f,m,N,ke,Q,le,ie,oe),n.context=Zo(null),r=n.current,o=ol(),o=xe(o),f=ii(o),f.callback=(ct=l)!=null?ct:null,ri(r,f,o),l=o,n.current.lanes=l,Z(n,l),Jl(n),n},Ie.createPortal=function(n,l,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ma,key:o==null?null:o===zi?zi:""+o,children:n,containerInfo:l,implementation:r}},Ie.createRoleSelector=function(n){return{$$typeof:ys,value:n}},Ie.createTestNameSelector=function(n){return{$$typeof:Pi,value:n}},Ie.createTextSelector=function(n){return{$$typeof:Vn,value:n}},Ie.defaultOnCaughtError=function(n){console.error(n)},Ie.defaultOnRecoverableError=function(n){Hd(n)},Ie.defaultOnUncaughtError=function(n){Hd(n)},Ie.deferredUpdates=function(n){var l=ze.T,r=yt();try{return mt(32),ze.T=null,n()}finally{mt(r),ze.T=l}},Ie.discreteUpdates=function(n,l,r,o,f){var m=ze.T,y=yt();try{return mt(2),ze.T=null,n(l,r,o,f)}finally{mt(y),ze.T=m,Ke===0&&(Cs=Jn()+500)}},Ie.findAllNodes=xl,Ie.findBoundingRects=function(n,l){if(!Wo)throw Error(h(363));l=xl(n,l),n=[];for(var r=0;r<l.length;r++)n.push(sv(l[r]));for(l=n.length-1;0<l;l--){r=n[l];for(var o=r.x,f=o+r.width,m=r.y,y=m+r.height,N=l-1;0<=N;N--)if(l!==N){var Q=n[N],le=Q.x,ie=le+Q.width,oe=Q.y,ve=oe+Q.height;if(o>=le&&m>=oe&&f<=ie&&y<=ve){n.splice(l,1);break}else if(o!==le||r.width!==Q.width||ve<m||oe>y){if(!(m!==oe||r.height!==Q.height||ie<o||le>f)){le>o&&(Q.width+=le-o,Q.x=o),ie<f&&(Q.width=f-le),n.splice(l,1);break}}else{oe>m&&(Q.height+=oe-m,Q.y=m),ve<y&&(Q.height=y-oe),n.splice(l,1);break}}}return n},Ie.findHostInstance=xi,Ie.findHostInstanceWithNoPortals=function(n){return n=T(n),n=n!==null?w(n):null,n===null?null:Re(n.stateNode)},Ie.findHostInstanceWithWarning=function(n){return xi(n)},Ie.flushPassiveEffects=La,Ie.flushSyncFromReconciler=function(n){var l=Ke;Ke|=1;var r=ze.T,o=yt();try{if(mt(2),ze.T=null,n)return n()}finally{mt(o),ze.T=r,Ke=l,(Ke&6)===0&&Yi(0)}},Ie.flushSyncWork=ic,Ie.focusWithin=function(n,l){if(!Wo)throw Error(h(363));for(n=on(n),l=hi(n,l),l=Array.from(l),n=0;n<l.length;){var r=l[n++],o=r.tag;if(!kr(r)){if((o===5||o===26||o===27)&&dv(r.stateNode))return!0;for(r=r.child;r!==null;)l.push(r),r=r.sibling}}return!1},Ie.getFindAllNodesFailureDescription=function(n,l){if(!Wo)throw Error(h(363));var r=0,o=[];n=[on(n),0];for(var f=0;f<n.length;){var m=n[f++],y=m.tag,N=n[f++],Q=l[N];if((y!==5&&y!==26&&y!==27||!kr(m))&&(bt(m,Q)&&(o.push(He(Q)),N++,N>r&&(r=N)),N<l.length))for(m=m.child;m!==null;)n.push(m,N),m=m.sibling}if(r<l.length){for(n=[];r<l.length;r++)n.push(He(l[r]));return`findAllNodes was able to match part of the selector:
  `+(o.join(" > ")+`

No matching component was found for:
  `)+n.join(" > ")}return null},Ie.getPublicRootInstance=function(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 27:case 5:return Re(n.child.stateNode);default:return n.child.stateNode}},Ie.injectIntoDevTools=function(){var n={bundleType:0,version:fd,rendererPackageName:hc,currentDispatcherRef:ze,reconcilerVersion:"19.3.0"};if(ja!==null&&(n.rendererConfig=ja),typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")n=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)n=!0;else{try{vr=l.inject(n),El=l}catch{}n=!!l.checkDCE}}return n},Ie.isAlreadyRendering=function(){return(Ke&6)!==0},Ie.observeVisibleRects=function(n,l,r,o){if(!Wo)throw Error(h(363));n=xl(n,l);var f=mv(n,r,o).disconnect;return{disconnect:function(){f()}}},Ie.shouldError=function(){return null},Ie.shouldSuspend=function(){return!1},Ie.startHostTransition=function(n,l,r,o){if(n.tag!==5)throw Error(h(476));var f=Qn(n).queue;Nf(n,f,l,qr,r===null?g:function(){var m=Qn(n);return m.next===null&&(m=n.alternate.memoizedState),mi(n,m.next.queue,{},ol()),r(o)})},Ie.updateContainer=function(n,l,r,o){var f=l.current,m=ol();return Xo(f,m,n,l,r,o),m},Ie.updateContainerSync=function(n,l,r,o){return Xo(l.current,2,n,l,r,o),2},Ie},d.exports.default=d.exports,Object.defineProperty(d.exports,"__esModule",{value:!0})})(qh)),qh.exports}var Gh;function R3(){return Gh||(Gh=1,Yh.exports=O3()),Yh.exports}var B3=R3();const L3=N3(B3),D0={};let M3=0;const L0=d=>`${d[0].toUpperCase()}${d.slice(1)}`;function U3(d){return d in D0}function pp(d){return D0[d]}function N1(d){if(typeof d=="function"){const s=`${M3++}`;return D0[s]=d,s}else Object.assign(D0,d)}function P3(d){const s=L3(d);return s.injectIntoDevTools(),s}const O1=0,H3=/^three(?=[A-Z])/;function R1(d,s){const v=L0(d),g=pp(v);if(d!=="primitive"&&!g)throw new Error(`R3F: ${v} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(d==="primitive"&&!s.object)throw new Error("R3F: Primitives without 'object' are invalid!");if(s.args!==void 0&&!Array.isArray(s.args))throw new Error("R3F: The args prop must be an array!")}function F3(d,s,v){var g;return d=U3(L0(d))?d:d.replace(H3,""),R1(d,s),d==="primitive"&&(g=s.object)!=null&&g.__r3f&&delete s.object.__r3f,T0(s.object,v,d,s)}function j3(d){if(!d.isHidden){var s;d.props.attach&&(s=d.parent)!=null&&s.object?w0(d.parent,d):Zl(d.object)&&(d.previousVisible=d.object.visible,d.object.visible=!1),d.isHidden=!0,gm(d)}}function B1(d){if(d.isHidden){var s;if(d.props.attach&&(s=d.parent)!=null&&s.object)A0(d.parent,d);else if(Zl(d.object)){var v;d.object.visible=(v=d.previousVisible)!=null?v:!0}d.previousVisible=void 0,d.isHidden=!1,gm(d)}}function hp(d,s,v){const g=s.root.getState();if(!(!d.parent&&d.object!==g.scene)){if(!s.object){var h,b;const E=pp(L0(s.type));s.object=(h=s.props.object)!=null?h:new E(...(b=s.props.args)!=null?b:[]),s.object.__r3f=s}if(As(s.object,s.props),s.props.attach)A0(d,s);else if(Zl(s.object)&&Zl(d.object)){const E=d.object.children.indexOf(v?.object);if(v&&E!==-1){const T=d.object.children.indexOf(s.object);if(T!==-1){d.object.children.splice(T,1);const x=T<E?E-1:E;d.object.children.splice(x,0,s.object)}else s.object.parent=d.object,d.object.children.splice(E,0,s.object),s.object.dispatchEvent({type:"added"}),d.object.dispatchEvent({type:"childadded",child:s.object})}else d.object.add(s.object)}for(const E of s.children)hp(s,E);gm(s)}}function Rg(d,s){if(s){if(s.parent===d){const v=d.children.indexOf(s);v!==-1&&d.children.splice(v,1)}s.parent=d,d.children.push(s),hp(d,s)}}function Qh(d,s,v){if(!s||!v)return;if(s.parent===d){const h=d.children.indexOf(s);h!==-1&&d.children.splice(h,1)}s.parent=d;const g=d.children.indexOf(v);g!==-1?d.children.splice(g,0,s):d.children.push(s),hp(d,s,v)}function L1(d){if(typeof d.dispose=="function"){const s=()=>{try{d.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT<"u"?s():iu.unstable_scheduleCallback(iu.unstable_IdlePriority,s)}}function $g(d,s,v){if(!s)return;const g=!!s.parent;s.parent=null;const h=d.children.indexOf(s);h!==-1&&d.children.splice(h,1),s.props.attach?w0(d,s):Zl(s.object)&&Zl(d.object)&&(d.object.remove(s.object),m3(sp(s),s.object));const b=s.props.dispose!==null&&v!==!1;for(let T=s.children.length-1;T>=0;T--){const x=s.children[T];$g(s,x,b)}if(s.children.length=0,delete s.object.__r3f,b&&s.type!=="primitive"&&s.object.type!=="Scene"&&L1(s.object),v===void 0&&g){var E;const T=(E=s.root)==null||E.getState==null?void 0:E.getState();T&&T.internal.frames===0&&T.invalidate()}}function V3(d,s){for(const v of[d,d.alternate])if(v!==null)if(typeof v.ref=="function"){v.refCleanup==null||v.refCleanup();const g=v.ref(s);typeof g=="function"&&(v.refCleanup=g)}else v.ref&&(v.ref.current=s)}const dm=[];function Y3(){if(dm.length!==0)try{q3()}finally{dm.length=0}}function q3(){for(const[v]of dm){const g=v.parent;if(g){v.props.attach?w0(g,v):Zl(v.object)&&Zl(g.object)&&g.object.remove(v.object);for(const h of v.children)h.props.attach?w0(v,h):Zl(h.object)&&Zl(v.object)&&v.object.remove(h.object)}v.isHidden&&B1(v),v.object.__r3f&&delete v.object.__r3f,v.type!=="primitive"&&L1(v.object)}for(const[v,g,h]of dm){v.props=g;const b=v.parent;if(b){var d,s;const E=pp(L0(v.type)),T=v.object;v.object=(d=v.props.object)!=null?d:new E(...(s=v.props.args)!=null?s:[]),v.object.__r3f=v,V3(h,v.object),d3(sp(v),T,v.object),As(v.object,v.props),v.props.attach?A0(b,v):Zl(v.object)&&Zl(b.object)&&b.object.add(v.object);for(const x of v.children)x.props.attach?A0(v,x):Zl(x.object)&&Zl(v.object)&&v.object.add(x.object);gm(v)}}}const Bg=()=>{},Ih={};let y0=O1;function k3(d){switch(d){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Vh;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return jh;case"message":switch(iu.unstable_getCurrentPriorityLevel()){case iu.unstable_ImmediatePriority:return Vh;case iu.unstable_UserBlockingPriority:return jh;case iu.unstable_NormalPriority:case iu.unstable_LowPriority:return z0;case iu.unstable_IdlePriority:return z3;default:return z0}default:return z0}}function G3(d){typeof queueMicrotask=="function"?queueMicrotask(d):typeof Promise<"u"?Promise.resolve().then(d).catch(s=>{setTimeout(()=>{throw s})}):setTimeout(d)}const ws=P3({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:F3,removeChild:$g,appendChild:Rg,appendInitialChild:Rg,insertBefore:Qh,appendChildToContainer(d,s){const v=d.getState().scene.__r3f;!s||!v||Rg(v,s)},removeChildFromContainer(d,s){const v=d.getState().scene.__r3f;!s||!v||$g(v,s)},insertInContainerBefore(d,s,v){const g=d.getState().scene.__r3f;!s||!v||!g||Qh(g,s,v)},getRootHostContext:()=>Ih,getChildHostContext:()=>Ih,commitUpdate(d,s,v,g,h){var b,E,T;R1(s,g);let x=!1;if((d.type==="primitive"&&v.object!==g.object||((b=g.args)==null?void 0:b.length)!==((E=v.args)==null?void 0:E.length)||(T=g.args)!=null&&T.some((w,z)=>{var S;return w!==((S=v.args)==null?void 0:S[z])}))&&(x=!0),x)dm.push([d,Kg(g),h]);else{const w=s3(d,g),z=d.props.attach;d.props=Kg(g),z!==void 0?d.props.attach=z:delete d.props.attach,Object.keys(w).length&&As(d.object,w)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:d=>d?.object,prepareForCommit:()=>null,preparePortalMount:d=>T0(d.getState().scene,d,"",{}),resetAfterCommit:Y3,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:j3,unhideInstance:B1,createTextInstance:Bg,hideTextInstance:Bg,unhideTextInstance:Bg,supportsMicrotasks:!0,scheduleMicrotask:G3,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:ue.createContext(null),setCurrentUpdatePriority(d){y0=d},getCurrentUpdatePriority(){return y0},resolveUpdatePriority(){var d;if(y0!==O1)return y0;const s=typeof window<"u"?(d=window.event)==null?void 0:d.type:void 0;return s===void 0?z0:k3(s)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:D3.version,applyViewTransitionName(d,s,v){},restoreViewTransitionName(d,s){},cancelViewTransitionName(d,s,v){},cancelRootViewTransitionName(d){},restoreRootViewTransitionName(d){},InstanceMeasurement:null,measureInstance:d=>null,wasInstanceInViewport:d=>!0,hasInstanceChanged:(d,s)=>!1,hasInstanceAffectedParent:(d,s)=>!1,suspendOnActiveViewTransition(d,s){},startViewTransition(d,s,v,g,h,b,E,T,x,w,z){return g(),h(),z?.(),E(),null},startGestureTransition(d,s,v,g,h,b,E,T,x,w){return E(),T(),w?.(),null},stopViewTransition(d){},addViewTransitionFinishedListener(d,s){s()},createViewTransitionInstance:d=>null,getCurrentGestureOffset(d){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(d,s){return d},cloneMutableTextInstance(d){return d},cloneRootViewTransitionContainer(d){throw new Error("Not implemented.")},removeRootViewTransitionClone(d,s){throw new Error("Not implemented.")},createFragmentInstance:d=>null,updateFragmentInstanceFiber(d,s){},commitNewChildToFragmentInstance(d,s){},deleteChildFromFragmentInstance(d,s){},measureClonedInstance:d=>null,maySuspendCommitOnUpdate:(d,s,v)=>!1,maySuspendCommitInSyncRender:(d,s)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(d,s)=>null}),mo=new Map;function N0(d,s){const v=d.state;switch(s.type){case"use":return v.status==="disposed"?!1:(d.state={status:"open"},!0);case"unmount":return v.status==="disposed"?!1:(d.state={status:"closing",token:s.token},!0);case"dispose":return v.status!=="closing"||v.token!==s.token?!1:(d.state={status:"disposed"},!0)}}function Q3(d){const s=mo.get(d),v=s?.fiber,g=s?.store;s&&console.warn("R3F.createRoot should only be called once!");const h=typeof reportError=="function"?reportError:console.error,b=g||b3(yp,U1),E=v||ws.createContainer(b,S3,null,!1,null,"",h,h,h,null),T=s||{fiber:E,store:b,state:{status:"open"},ready:g3(void 0),configuration:{},ownsRenderer:!1};s||mo.set(d,T);let x=!1;return{get ready(){return T.ready},configure(w={}){if(!N0(T,{type:"use"}))return p3(new Error("R3F: Cannot configure a root after disposal has started."));const z=T.ready,{promise:S,resolve:U,reject:P}=h3();T.ready=S;const K=j=>{const A=b.getState();A.gl||(T.ownsRenderer=!dp(w.gl),A.set({gl:j})),A3(T,d,w),!T.unwatchDpr&&(w.dpr===void 0||Array.isArray(w.dpr))&&(T.unwatchDpr=w3(T)),U(this)},J=()=>{try{var j;const A=(j=b.getState().gl)!=null?j:y3(d,w.gl);fp(A)?Promise.resolve(A).then(K).catch(P):K(A)}catch(A){P(A)}};return z.status==="pending"?z.then(J,P):J(),S},render(w){if(!N0(T,{type:"use"}))return b;if(!b.getState().gl&&T.ready.status==="fulfilled"&&this.configure(),T.ready.status==="rejected")throw T.ready.reason;const z=()=>{var S;if(T.state.status!=="open"||T.ready.status==="rejected")return;if(T.ready.status==="pending"){T.ready.then(z,h);return}const U=(S=T.configuration.previous)==null?void 0:S.onCreated,P=se.jsx(I3,{store:b,children:w,onCreated:U,rootElement:d});if(x){ws.updateContainer(P,E,null,Uh);return}x=!0,ws.updateContainerSync(P,E,null,Uh),ws.flushSyncWork()};return z(),b},unmount(){mo.get(d)===T&&Z3(d)}}}function I3({store:d,children:s,onCreated:v,rootElement:g}){return Ns(()=>{const h=d.getState();h.set(b=>({internal:{...b.internal,active:!0}})),v&&v(h),d.getState().events.connected||h.events.connect==null||h.events.connect(g)},[]),se.jsx(mp.Provider,{value:d,children:s})}function tm(d){try{return d()}catch(s){console.warn("[R3F] Error while unmounting root; teardown may be incomplete:",s)}}function Z3(d,s){const v=mo.get(d),g=Symbol("unmount");if(!v||!N0(v,{type:"unmount",token:g}))return;const h=()=>{var b;if(v.ready.status==="pending"){v.ready.then(h,h);return}if(!N0(v,{type:"dispose",token:g}))return;mo.delete(d);const E=v.store.getState();E.internal.active=!1,tm(()=>v.unwatchDpr==null?void 0:v.unwatchDpr()),tm(()=>E.events.disconnect==null?void 0:E.events.disconnect()),(b=E.gl)!=null&&b.xr&&tm(()=>E.xr.disconnect()),E.scene&&tm(()=>u3(E.scene));const T=tm(()=>C3(E.gl,v.ownsRenderer));fp(T)&&T.then(()=>{})};ws.updateContainer(null,v.fiber,null,()=>{v.state.status!=="closing"||v.state.token!==g||ws.updateContainer(null,v.fiber,null,h)})}const X3=new Set,K3=new Set,J3=new Set;function Lg(d,s){if(d.size)for(const{callback:v}of d.values())v(s)}function cm(d,s){switch(d){case"before":return Lg(X3,s);case"after":return Lg(K3,s);case"tail":return Lg(J3,s)}}let Mg,Ug;function Wg(d,s,v){let g=s.clock.getDelta();s.frameloop==="never"&&typeof d=="number"&&(g=d-s.clock.elapsedTime,s.clock.oldTime=s.clock.elapsedTime,s.clock.elapsedTime=d),Mg=s.internal.subscribers;for(let h=0;h<Mg.length;h++)Ug=Mg[h],Ug.ref.current(Ug.store.getState(),g,v);return!s.internal.priority&&s.gl.render&&s.gl.render(s.scene,s.camera),s.internal.frames=Math.max(0,s.internal.frames-1),s.frameloop==="always"?1:s.internal.frames}let O0=!1,ep=!1,Pg,Zh,tf;function M1(d){Zh=requestAnimationFrame(M1),O0=!0,Pg=0,cm("before",d),ep=!0;for(const v of mo.values()){var s;tf=v.store.getState(),tf.internal.active&&(tf.frameloop==="always"||tf.internal.frames>0)&&!((s=tf.gl.xr)!=null&&s.isPresenting)&&(Pg+=Wg(d,tf))}if(ep=!1,cm("after",d),Pg===0)return cm("tail",d),O0=!1,cancelAnimationFrame(Zh)}function yp(d,s=1){var v;if(!d)return mo.forEach(g=>yp(g.store.getState(),s));(v=d.gl.xr)!=null&&v.isPresenting||!d.internal.active||d.frameloop==="never"||(s>1?d.internal.frames=Math.min(60,d.internal.frames+s):ep?d.internal.frames=2:d.internal.frames=1,O0||(O0=!0,requestAnimationFrame(M1)))}function U1(d,s=!0,v,g){if(s&&cm("before",d),v)Wg(d,v,g);else for(const h of mo.values())Wg(d,h.store.getState());s&&cm("after",d)}function $3(d,s,v){return se.jsx(W3,{children:d,container:s,state:v})}function Xh(d,s){const{parentStore:v,container:g}=d,h=C1((E,T)=>({...s,set:E,get:T,setEvents:x=>E(w=>({...w,events:{...w.events,...x}}))})),b={current:v.getState()};return h.setState(E=>P1(b.current,E,d)),{parentStore:v,container:g,portalStore:h,parentStateRef:b}}function W3({state:d={},children:s,container:v}){const g=vp(),{events:h,size:b,...E}=d,[T]=ue.useState(()=>new Ye.Raycaster),[x]=ue.useState(()=>new Ye.Vector2),w={parentStore:g,container:v,raycaster:T,pointer:x,events:h,size:b},z=op((J,j)=>P1(J,j,w)),[S,U]=ue.useState(()=>Xh(w,E));(S.parentStore!==g||S.container!==v)&&U(Xh(w,E));const{portalStore:P,parentStateRef:K}=S;return Ns(()=>{const J=C=>{K.current=C,P.setState(O=>z.current(C,O))},j=g.subscribe(J),A=g.getState();return A!==K.current&&J(A),j},[g,P,K]),se.jsx(se.Fragment,{children:ws.createPortal(se.jsx(mp.Provider,{value:P,children:s}),P,null)})}function P1(d,s,v){const{parentStore:g,container:h,raycaster:b,pointer:E,events:T,size:x}=v;let w;if(s.camera&&x){const z=s.camera;w=d.viewport.getCurrentViewport(z,new Ye.Vector3,x),z!==d.camera&&A1(z,x)}return{...d,...s,scene:h,raycaster:b,pointer:E,mouse:E,previousRoot:g,events:{...d.events,...s.events,...T},size:{...d.size,...x},viewport:{...d.viewport,...w}}}const Hg={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function eC(d){const{handlePointer:s}=v3(d);return{priority:1,enabled:!0,compute(v,g,h){g.pointer.set(v.offsetX/g.size.width*2-1,-(v.offsetY/g.size.height)*2+1),g.raycaster.setFromCamera(g.pointer,g.camera)},connected:void 0,handlers:Object.keys(Hg).reduce((v,g)=>({...v,[g]:s(g)}),{}),update:()=>{var v;const{events:g,internal:h}=d.getState();(v=h.lastEvent)!=null&&v.current&&g.handlers&&g.handlers.onPointerMove(h.lastEvent.current)},connect:v=>{const{set:g,events:h}=d.getState();if(h.disconnect==null||h.disconnect(),g(b=>({events:{...b.events,connected:v}})),h.handlers)for(const b in h.handlers){const E=h.handlers[b],[T,x]=Hg[b];v.addEventListener(T,E,{passive:x})}},disconnect:()=>{const{set:v,events:g}=d.getState();if(g.connected){if(g.handlers)for(const h in g.handlers){const b=g.handlers[h],[E]=Hg[h];g.connected.removeEventListener(E,b)}v(h=>({events:{...h.events,connected:void 0}}))}}}}function Kh(d,s){let v;return(...g)=>{window.clearTimeout(v),v=window.setTimeout(()=>d(...g),s)}}function tC({debounce:d,scroll:s,polyfill:v,offsetSize:g}={debounce:0,scroll:!1,offsetSize:!1}){const h=v||(typeof window>"u"?class{}:window.ResizeObserver);if(!h)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[b,E]=ue.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),T=ue.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:b,orientationHandler:null}),x=d?typeof d=="number"?d:d.scroll:null,w=d?typeof d=="number"?d:d.resize:null,z=ue.useRef(!1);ue.useEffect(()=>(z.current=!0,()=>{z.current=!1}));const[S,U,P]=ue.useMemo(()=>{const A=()=>{if(!T.current.element)return;const{left:C,top:O,width:M,height:H,bottom:L,right:Z,x:W,y:de}=T.current.element.getBoundingClientRect(),me={left:C,top:O,width:M,height:H,bottom:L,right:Z,x:W,y:de};T.current.element instanceof HTMLElement&&g&&(me.height=T.current.element.offsetHeight,me.width=T.current.element.offsetWidth),Object.freeze(me),z.current&&!iC(T.current.lastBounds,me)&&E(T.current.lastBounds=me)};return[A,w?Kh(A,w):A,x?Kh(A,x):A]},[E,g,x,w]);function K(){T.current.scrollContainers&&(T.current.scrollContainers.forEach(A=>A.removeEventListener("scroll",P,!0)),T.current.scrollContainers=null),T.current.resizeObserver&&(T.current.resizeObserver.disconnect(),T.current.resizeObserver=null),T.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",T.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",T.current.orientationHandler))}function J(){T.current.element&&(T.current.resizeObserver=new h(P),T.current.resizeObserver.observe(T.current.element),s&&T.current.scrollContainers&&T.current.scrollContainers.forEach(A=>A.addEventListener("scroll",P,{capture:!0,passive:!0})),T.current.orientationHandler=()=>{P()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",T.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",T.current.orientationHandler))}const j=A=>{!A||A===T.current.element||(K(),T.current.element=A,T.current.scrollContainers=H1(A),J())};return lC(P,!!s),nC(U),ue.useEffect(()=>{K(),J()},[s,P,U]),ue.useEffect(()=>K,[]),[j,b,S]}function nC(d){ue.useEffect(()=>{const s=d;return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[d])}function lC(d,s){ue.useEffect(()=>{if(s){const v=d;return window.addEventListener("scroll",v,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",v,!0)}}},[d,s])}function H1(d){const s=[];if(!d||d===document.body)return s;const{overflow:v,overflowX:g,overflowY:h}=window.getComputedStyle(d);return[v,g,h].some(b=>b==="auto"||b==="scroll")&&s.push(d),[...s,...H1(d.parentElement)]}const aC=["x","y","top","bottom","left","right","width","height"],iC=(d,s)=>aC.every(v=>d[v]===s[v]);function rC({ref:d,children:s,fallback:v,resize:g,style:h,gl:b,events:E=eC,eventSource:T,eventPrefix:x,shadows:w,linear:z,flat:S,legacy:U,orthographic:P,frameloop:K,dpr:J,performance:j,raycaster:A,camera:C,scene:O,onPointerMissed:M,onCreated:H,...L}){ue.useMemo(()=>N1(Ye),[]);const Z=e3(),[W,de]=tC({scroll:!0,debounce:{scroll:50,resize:0},...g}),me=ue.useRef(null),Te=ue.useRef(null);ue.useImperativeHandle(d,()=>me.current);const xe=op(M),et=ue.useCallback(R=>xe.current==null?void 0:xe.current(R),[xe]),[tt,Oe]=ue.useState(!1),[ce,Ce]=ue.useState(!1);if(tt)throw tt;if(ce)throw ce;const be=ue.useRef(null),[Je,nt]=$_(),hl=ue.useRef(null),Bl=()=>T?l3(T)?T.current:T:Te.current;ue.useInsertionEffect(()=>()=>{const R=be.current;be.current=null,R?.unmount()},[]),Ns(()=>{const R=me.current;de.width>0&&de.height>0&&R&&(be.current||(be.current=Q3(R)),be.current.configure({gl:b,scene:O,events:E,shadows:w,linear:z,flat:S,legacy:U,orthographic:P,frameloop:K,dpr:J,performance:j,raycaster:A,camera:C,size:de,onPointerMissed:et,onCreated:ae=>{var pe;hl.current=ae,ae.events.connect==null||ae.events.connect((pe=Bl())!=null?pe:Te.current),x&&ae.setEvents({compute:(_e,Pe)=>{const Xe=_e[x+"X"],Qe=_e[x+"Y"];Pe.pointer.set(Xe/Pe.size.width*2-1,-(Qe/Pe.size.height)*2+1),Pe.raycaster.setFromCamera(Pe.pointer,Pe.camera)}}),H?.(ae)}}).catch(Ce),be.current.ready.status==="fulfilled"?be.current.render(se.jsx(Z,{children:se.jsx(n3,{set:Ce,children:se.jsx(ue.Suspense,{fallback:se.jsx(t3,{set:Oe}),children:s??null})})})):be.current.ready.status==="pending"&&nt(be.current.ready))}),ue.useEffect(()=>{var R;const ae=(R=hl.current)==null?void 0:R.get(),pe=Bl();ae&&pe&&ae.events.connected!==pe&&(ae.events.connect==null||ae.events.connect(pe))}),ue.useEffect(()=>{const R=me.current;return()=>{var ae;R.isConnected||(ae=be.current)==null||ae.unmount()}},[]);const an=T?"none":"auto";return se.jsxs("div",{ref:Te,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:an,...h},...L,children:[se.jsx("div",{ref:W,style:{width:"100%",height:"100%"},children:se.jsx("canvas",{ref:me,style:{display:"block"},children:v})}),Je]})}function uC(d){return se.jsx(z1,{children:se.jsx(rC,{...d})})}var _0=192;function oC({type:d}){return se.jsxs(se.Fragment,{children:[d==="plane"&&se.jsx("planeGeometry",{args:[10,10,1,_0]}),d==="sphere"&&se.jsx("icosahedronGeometry",{args:[1,_0/3]}),d==="waterPlane"&&se.jsx("planeGeometry",{args:[10,10,_0,_0]})]})}function sC(d){let s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null}function cC(d){let s=d.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return s?{r:parseInt(s[1]),g:parseInt(s[2]),b:parseInt(s[3])}:null}function cf(d){if(d.startsWith("#"))return sC(d);if(d.startsWith("rgb"))return cC(d);throw new Error("Invalid color format")}function au(d=0){return d/255}var fC=Object.create,M0=Object.defineProperty,dC=Object.defineProperties,mC=Object.getOwnPropertyDescriptor,vC=Object.getOwnPropertyDescriptors,gC=Object.getOwnPropertyNames,R0=Object.getOwnPropertySymbols,pC=Object.getPrototypeOf,_p=Object.prototype.hasOwnProperty,F1=Object.prototype.propertyIsEnumerable,Jh=(d,s,v)=>s in d?M0(d,s,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[s]=v,Zt=(d,s)=>{for(var v in s||(s={}))_p.call(s,v)&&Jh(d,v,s[v]);if(R0)for(var v of R0(s))F1.call(s,v)&&Jh(d,v,s[v]);return d},hm=(d,s)=>dC(d,vC(s)),Ds=(d,s)=>{var v={};for(var g in d)_p.call(d,g)&&s.indexOf(g)<0&&(v[g]=d[g]);if(d!=null&&R0)for(var g of R0(d))s.indexOf(g)<0&&F1.call(d,g)&&(v[g]=d[g]);return v},ym=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports),pl=(d,s)=>{for(var v in s)M0(d,v,{get:s[v],enumerable:!0})},hC=(d,s,v,g)=>{if(s&&typeof s=="object"||typeof s=="function")for(let h of gC(s))!_p.call(d,h)&&h!==v&&M0(d,h,{get:()=>s[h],enumerable:!(g=mC(s,h))||g.enumerable});return d},yC=(d,s,v)=>(v=d!=null?fC(pC(d)):{},hC(!d||!d.__esModule?M0(v,"default",{value:d,enumerable:!0}):v,d)),_C=({animate:d,range:s,rangeStart:v,rangeEnd:g,loop:h,loopDuration:b,reflection:E,uniforms:T,vertexShader:x,fragmentShader:w,onInit:z,shader:S})=>{let U=ue.useRef(new Ye.Clock),P=ue.useMemo(()=>{let K=Object.entries(T),J=T.colors,j=cf(J[0]),A=cf(J[1]),C=cf(J[2]),O={uC1r:{value:au(j?.r)},uC1g:{value:au(j?.g)},uC1b:{value:au(j?.b)},uC2r:{value:au(A?.r)},uC2g:{value:au(A?.g)},uC2b:{value:au(A?.b)},uC3r:{value:au(C?.r)},uC3g:{value:au(C?.g)},uC3b:{value:au(C?.b)}},M=K.reduce((Z,[W,de])=>{let me=Ye.UniformsUtils.clone({[W]:{value:de}});return Zt(Zt({},Z),me)},{}),H={userData:M,metalness:S==="glass"?0:.2,roughness:S==="glass"?.1:1-(typeof E=="number"?E:.1),side:Ye.DoubleSide,onBeforeCompile:Z=>{Z.uniforms=Zt(Zt(Zt({},Z.uniforms),M),O),Z.vertexShader=x,Z.fragmentShader=w}};S==="glass"&&(H.transparent=!0,H.opacity=.3,H.transmission=.9,H.thickness=.5,H.clearcoat=1,H.clearcoatRoughness=0,H.ior=1.5,H.envMapIntensity=1);let L=new Ye.MeshPhysicalMaterial(H);return K.forEach(([Z])=>Object.defineProperty(L,Z,{get:()=>L.uniforms[Z].value,set:W=>L.uniforms[Z].value=W})),z&&z(L),L},[T,x,w,z,E,S]);return ue.useEffect(()=>()=>{P.dispose()},[P]),ue.useEffect(()=>{d==="on"?U.current.start():U.current.stop()},[d]),pm(()=>{if(d==="on"&&P.userData.uTime){let K=U.current.getElapsedTime();h==="on"&&Number.isFinite(b)&&b>0?(K=K%b,P.userData.uLoop&&(P.userData.uLoop.value=1),P.userData.uLoopDuration&&(P.userData.uLoopDuration.value=b)):(P.userData.uLoop&&(P.userData.uLoop.value=0),s==="enabled"&&Number.isFinite(v)&&Number.isFinite(g)&&g>v&&(K=v+K,K>=g&&(K=v,U.current.start()))),P.userData.uTime.value=K}}),se.jsx("primitive",{attach:"material",object:P})},j1={};pl(j1,{fragment:()=>CC,vertex:()=>bC});var CC=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,bC=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    // Loop progress only depends on time and duration, not speed
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    // Larger radius = more distance traveled = faster perceived motion
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points around the circle
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights using cosine
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    // Normalize weights
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend all samples with amplitude boost to match single-sample strength
    // Blending reduces amplitude by ~30%, so we compensate
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,V1={};pl(V1,{fragment:()=>xC,vertex:()=>SC});var xC=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,SC=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  float distortion;
  float angle;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float loopAngle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(loopAngle) * radius, sin(loopAngle) * radius, 0.0);
    vec3 offset1 = vec3(cos(loopAngle + 1.57079632679) * radius, sin(loopAngle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(loopAngle + 3.14159265359) * radius, sin(loopAngle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(loopAngle + 4.71238898038) * radius, sin(loopAngle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = pnoise((normal + offset0) * uNoiseDensity, vec3(10.0));
    float n1 = pnoise((normal + offset1) * uNoiseDensity, vec3(10.0));
    float n2 = pnoise((normal + offset2) * uNoiseDensity, vec3(10.0));
    float n3 = pnoise((normal + offset3) * uNoiseDensity, vec3(10.0));
    
    // Smooth interpolation weights
    float w0 = (cos(loopAngle) + 1.0) * 0.5;
    float w1 = (cos(loopAngle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(loopAngle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(loopAngle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = blendedNoise * 1.5 * uNoiseStrength;
    
    // Apply loop to spiral effect with blended offset
    float angleOffset = offset0.x * w0 + offset1.x * w1 + offset2.x * w2 + offset3.x * w3;
    angle = sin(uv.y * uFrequency + angleOffset) * uAmplitude;
  } else {
    // Normal linear time progression
    distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
    angle = sin(uv.y * uFrequency + t) * uAmplitude;
  }
  
  vec3 pos = position + (normal * distortion);
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,Y1={};pl(Y1,{fragment:()=>zC,vertex:()=>EC});var zC=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor는 오브젝트의 베이스 색상 (환경이나 빛이 고려되지 않은 본연의
  // 색)

  // mix(x, y, a): a를 축으로 했을 때 가장 낮은 값에서 x값의 영향력을 100%, 가장
  // 높은 값에서 y값의 영향력을 100%로 만든다. smoothstep(x, y, a): a축을
  // 기준으로 x를 최소값, y를 최대값으로 그 사이의 값을 쪼갠다. x와 y 사이를
  // 0-100 사이의 그라디언트처럼 단계별로 표현하고, x 미만의 값은 0, y 이상의
  // 값은 100으로 처리

  // 1. smoothstep(-3.0, 3.0,vPos.x)로 x축의 그라디언트가 표현 될 범위를 -3,
  // 3으로 정한다.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))로 color1과 color3을
  // 위의 범위 안에서 그라디언트로 표현한다.
  // 예를 들어 color1이 노랑, color3이 파랑이라고 치면, x축 기준 -3부터 3까지
  // 노랑과 파랑 사이의 그라디언트가 나타나고, -3보다 작은 값에서는 계속 노랑,
  // 3보다 큰 값에서는 계속 파랑이 나타난다.
  // 3. mix()를 한 번 더 사용해서 위의 그라디언트와 color2를 z축 기준으로
  // 분배한다.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.
}
`,EC=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,q1={};pl(q1,{plane:()=>j1,sphere:()=>V1,waterPlane:()=>Y1});var k1={};pl(k1,{fragment:()=>TC,vertex:()=>AC});var TC=`// Glass Plane Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - dot(viewDirection, normal), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Base glass color gradient
  vec3 gradientColor = mix(uColor1, uColor2, vUv.y);
  gradientColor = mix(gradientColor, uColor3, fresnelFactor);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, uChromaticAberration);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Combine with gradient color
  vec3 finalColor = mix(gradientColor, envColor, 0.7);
  
  // Apply transparency
  float finalAlpha = mix(uTransparency, 1.0, fresnelFactor * 0.5);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.8;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,AC=`// Glass Plane Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Create subtle wave distortion for glass effect
  float waveX = sin(position.x * uWaveFrequency + time) * uWaveAmplitude;
  float waveY = cos(position.y * uWaveFrequency + time) * uWaveAmplitude;
  float waveZ = sin(position.z * uWaveFrequency + time * 0.5) * uWaveAmplitude * 0.5;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.5) * uNoiseStrength;
  
  // Apply distortion to transformed position
  transformed += vec3(waveX, waveY, waveZ) * uDistortion + normal * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  float ior = 1.5;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,G1={};pl(G1,{fragment:()=>wC,vertex:()=>DC});var wC=`// Glass Sphere Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

// Caustics simulation for sphere
float caustics(vec3 position, float time) {
  float c1 = sin(position.x * 4.0 + time) * sin(position.y * 4.0 + time * 0.8);
  float c2 = sin(position.z * 3.0 - time * 1.2) * sin(position.x * 3.0 + time);
  return (c1 + c2) * 0.5 + 0.5;
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // For sphere, use spherical UV mapping for gradient
  float sphericalU = atan(vPosition.z, vPosition.x) / (2.0 * PI) + 0.5;
  float sphericalV = acos(vPosition.y / length(vPosition)) / PI;
  vec2 sphericalUV = vec2(sphericalU, sphericalV);
  
  // Create color gradient based on spherical coordinates
  vec3 gradientColor = mix(uColor1, uColor2, sphericalUV.y);
  gradientColor = mix(gradientColor, uColor3, pow(fresnelFactor, 1.5));
  
  // Add caustics effect for sphere
  float causticsValue = caustics(vGlassWorldPos, uTime);
  gradientColor += vec3(causticsValue * 0.1);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (enhanced for sphere)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float chromaticIntensity = uChromaticAberration * (1.0 + vDistortion * 0.5);
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, chromaticIntensity);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel (stronger effect for sphere)
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Add inner glow effect for sphere
  float innerGlow = pow(1.0 - abs(dot(viewDirection, worldNormal)), 3.0);
  vec3 glowColor = mix(uColor2, uColor3, innerGlow) * innerGlow * 0.5;
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.8) + glowColor;
  
  // Apply transparency with sphere thickness consideration
  float thickness = 1.0 - pow(abs(dot(viewDirection, worldNormal)), 0.5);
  float finalAlpha = mix(uTransparency * thickness, 1.0, fresnelFactor * 0.7);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.9;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,DC=`// Glass Sphere Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // For sphere, use spherical coordinates for better distortion
  float theta = atan(position.z, position.x);
  float phi = acos(position.y / length(position));
  
  // Create waves based on spherical coordinates
  float waveTheta = sin(theta * uWaveFrequency * 2.0 + time) * uWaveAmplitude;
  float wavePhi = cos(phi * uWaveFrequency + time * 1.5) * uWaveAmplitude;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.8) * uNoiseStrength;
  
  // Calculate distortion based on position on sphere
  float distortionAmount = (waveTheta + wavePhi) * uDistortion + noise;
  vDistortion = distortionAmount;
  
  // Apply distortion along normal for sphere
  transformed += normal * distortionAmount;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  // For sphere, adjust IOR based on curvature
  float ior = 1.5 + sin(theta * 2.0 + time) * 0.1;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,Q1={};pl(Q1,{fragment:()=>NC,vertex:()=>OC});var NC=`// Glass WaterPlane Fragment Shader - Liquid Glass Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for liquid glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js
uniform float uLiquidEffect;
uniform float uFoamIntensity;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  vec3 result = vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  
  // Add distortion based on wave height
  float distortion = vWaveHeight * 0.1;
  result = mix(result, textureCube(envMap, refractedG + vec3(distortion)).rgb, 0.3);
  #else
  vec3 result = vec3(0.5);
  #endif
  
  return result;
}

// Foam effect for water surface
float foam(vec2 uv, float waveHeight, float time) {
  float foamThreshold = 0.3;
  float foamAmount = smoothstep(foamThreshold - 0.1, foamThreshold + 0.1, abs(waveHeight));
  
  // Add foam texture pattern
  float foamPattern = sin(uv.x * 40.0 + time) * cos(uv.y * 30.0 - time * 0.5);
  foamPattern += sin(uv.x * 25.0 - time * 0.8) * sin(uv.y * 35.0 + time);
  foamPattern = clamp(foamPattern * 0.5 + 0.5, 0.0, 1.0);
  
  return foamAmount * foamPattern;
}

// Caustics for underwater effect
vec3 caustics(vec3 position, float time) {
  float c1 = sin(position.x * 6.0 + time * 1.5) * sin(position.z * 6.0 + time);
  float c2 = cos(position.x * 4.0 - time) * cos(position.z * 5.0 + time * 1.2);
  float c3 = sin((position.x + position.z) * 3.0 + time * 0.8);
  
  float causticPattern = (c1 + c2 + c3) / 3.0;
  causticPattern = pow(max(0.0, causticPattern), 2.0);
  
  return vec3(causticPattern) * vec3(0.3, 0.6, 1.0);
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Use wave normal for more accurate water surface
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vWaveNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Water color gradient with depth effect
  float depth = 1.0 - abs(vWaveHeight) * 2.0;
  vec3 shallowColor = mix(uColor1, uColor2, vUv.y);
  vec3 deepColor = mix(uColor2, uColor3, depth);
  vec3 gradientColor = mix(shallowColor, deepColor, fresnelFactor);
  
  // Add foam effect
  float foamAmount = foam(vUv, vWaveHeight, uTime) * uFoamIntensity;
  vec3 foamColor = vec3(1.0, 1.0, 1.0);
  gradientColor = mix(gradientColor, foamColor, foamAmount);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  
  // Add slight blur to reflection for water effect
  vec3 blurredReflection = reflectionColor;
  for (int i = 0; i < 4; i++) {
    vec3 offset = vec3(
      sin(float(i) * 2.0) * 0.01,
      0.0,
      cos(float(i) * 2.0) * 0.01
    );
    blurredReflection += textureCube(envMap, vReflect + offset).rgb * envMapIntensity;
  }
  blurredReflection /= 5.0;
  reflectionColor = mix(reflectionColor, blurredReflection, uLiquidEffect);
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (stronger for water)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float waterIOR = 1.33 + vWaveHeight * 0.1;
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, waterIOR, uChromaticAberration * 1.5);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Add caustics to refraction
  vec3 causticsColor = caustics(vGlassWorldPos, uTime);
  refractionColor += causticsColor * 0.3 * uLiquidEffect;
  
  // Mix reflection and refraction based on Fresnel and wave
  float reflectionMix = fresnelFactor * uReflectivity * (1.0 + abs(vWaveHeight));
  vec3 envColor = mix(refractionColor, reflectionColor, clamp(reflectionMix, 0.0, 1.0));
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.85);
  
  // Apply transparency with wave variation
  float waveAlpha = 1.0 - abs(vWaveHeight) * 0.3;
  float finalAlpha = mix(uTransparency * waveAlpha, 1.0, fresnelFactor * 0.6 + foamAmount * 0.4);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our liquid glass color contribution
  outgoingLight += finalColor * 0.95;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`,OC=`// Glass WaterPlane Vertex Shader - Liquid Glass Effect

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;
uniform float uFlowSpeed;
uniform vec2 uFlowDirection;

// Noise functions for water-like glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

// Water wave function
vec3 waterWave(vec2 pos, float time) {
  // Flow effect
  vec2 flowPos = pos + uFlowDirection * time * uFlowSpeed;
  
  // Multiple wave layers for realistic water
  float wave1 = sin(flowPos.x * uWaveFrequency + time) * cos(flowPos.y * uWaveFrequency * 0.8 + time * 0.7);
  float wave2 = sin(flowPos.x * uWaveFrequency * 1.7 - time * 1.3) * sin(flowPos.y * uWaveFrequency * 1.3 + time);
  float wave3 = cos(flowPos.x * uWaveFrequency * 0.5 + time * 0.5) * sin(flowPos.y * uWaveFrequency * 0.6 - time * 0.8);
  
  // Combine waves
  float height = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * uWaveAmplitude;
  
  // Calculate wave normals
  float dx = cos(flowPos.x * uWaveFrequency + time) * uWaveFrequency * 0.5 * uWaveAmplitude;
  float dz = -sin(flowPos.y * uWaveFrequency * 0.8 + time * 0.7) * uWaveFrequency * 0.8 * 0.5 * uWaveAmplitude;
  
  return vec3(dx, height, dz);
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Calculate water waves
  vec3 waveData = waterWave(position.xz, time);
  float waveHeight = waveData.y;
  vec2 waveGradient = waveData.xz;
  
  // Add noise for organic water movement
  vec3 noisePos = vec3(position.x, position.y, position.z) + vec3(time * 0.05);
  float noise = snoise(noisePos * 1.2) * uNoiseStrength * 0.5;
  
  // Store wave height for fragment shader
  vWaveHeight = waveHeight + noise;
  
  // Calculate perturbed normal for water surface
  vec3 waveNormal = normalize(vec3(-waveGradient.x, 1.0, -waveGradient.y));
  vWaveNormal = waveNormal;
  
  // Blend original normal with wave normal
  vec3 blendedNormal = normalize(mix(normal, waveNormal, 0.7));
  
  #ifndef FLAT_SHADED
  vNormal = normalize(mat3(modelViewMatrix) * blendedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Apply wave displacement and additional distortion
  transformed.y += waveHeight + noise;
  transformed += blendedNormal * uDistortion * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors with wave normal
  vec3 worldNormal = normalize(mat3(modelMatrix) * blendedNormal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with varying IOR for water effect
  float ior = 1.33 + sin(time + position.x * 2.0) * 0.1; // Water IOR ~1.33
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`,I1={};pl(I1,{plane:()=>k1,sphere:()=>G1,waterPlane:()=>Q1});var Z1={};pl(Z1,{fragment:()=>RC,vertex:()=>BC});var RC=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,BC=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,X1={};pl(X1,{fragment:()=>LC,vertex:()=>MC});var LC=`
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include를 통해 가져온 값은 대부분 환경, 빛 등을 계산하기 위해서 기본 fragment
// shader의 값들을 받아왔습니다. 일단은 무시하셔도 됩니다.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;
void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter로 중심점과의 거리를 구함.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//위에서 정의한 diffuseColor에 환경이나 반사값들을 반영한 값.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor가 fragment shader를 통해 나타나는 최종값으로, diffuseColor에서
  // 정의한 그라디언트 색상 위에 반사나 빛을 계산한 값을 최종값으로 정의.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); 위처럼 최종값을 그라디언트 값 자체를 넣으면 환경
  // 영향없는 그라디언트만 표현됨.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`,MC=`// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,K1={};pl(K1,{fragment:()=>UC,vertex:()=>PC});var UC=`uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`,PC=`// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`,J1={};pl(J1,{plane:()=>Z1,sphere:()=>X1,waterPlane:()=>K1});var $1={};pl($1,{fragment:()=>HC,vertex:()=>FC});var HC=`// Cosmic Plane Fragment Shader - Holographic Gradient

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Holographic helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Holographic Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.2; // More reflective for holographic effect

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float interference1 = sin(vPos.x * 20.0 + t * 3.0) * cos(vPos.y * 15.0 + t * 2.0);
  float interference2 = sin(vPos.x * 35.0 + t * 4.0) * sin(vPos.y * 30.0 + t * 3.5);
  float interference3 = cos(vPos.x * 50.0 + t * 5.0) * cos(vPos.y * 45.0 + t * 4.5);
  
  // Combine interference patterns
  float holographicPattern = (interference1 + interference2 * 0.5 + interference3 * 0.25) / 1.75;
  
  // Create cosmic shimmer effect
  float shimmer = noise2D(vPos.xy * 40.0 + t * 2.0) * 0.3;
  float cosmicGlow = noise2D(vPos.xy * 8.0 + t * 0.5) * 0.5;
  
  // Holographic color shifting
  vec3 holographicShift = vec3(
    sin(vPos.x * 10.0 + t * 2.0 + 0.0) * 0.1,
    sin(vPos.x * 10.0 + t * 2.0 + 2.094) * 0.1,  // 120 degrees
    sin(vPos.x * 10.0 + t * 2.0 + 4.188) * 0.1   // 240 degrees
  );
  
  // Enhanced gradient mixing with cosmic effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + holographicPattern * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vCosmicWave * 1.5);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + shimmer);
  
  // Multi-layer color mixing for depth
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply holographic color shifts
  vec3 holographicColor = baseGradient + holographicShift;
  
  // Add cosmic glow and shimmer
  vec3 cosmicEnhancement = vec3(
    cosmicGlow * 0.2,
    shimmer * 0.15,
    (cosmicGlow + shimmer) * 0.1
  );
  
  // Holographic intensity modulation
  float intensityMod = 1.0 + vHolographicIntensity * 0.5 + abs(holographicPattern) * 0.3;
  
  // Final color with cosmic and holographic effects
  vec3 finalColor = (holographicColor + cosmicEnhancement) * intensityMod;
  
  // Add subtle iridescence
  float iridescence = sin(vPos.x * 25.0 + t * 3.0) * cos(vPos.y * 20.0 + t * 2.5) * 0.1;
  finalColor += vec3(iridescence * 0.2, iridescence * 0.3, iridescence * 0.4);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Holographic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.1; // Add some emission for glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
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
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,FC=`// Cosmic Plane Vertex Shader - Holographic Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Holographic Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Holographic Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float holographicPattern = sin(position.x * 15.0 + t * 2.0) * 
                            sin(position.y * 12.0 + t * 1.5) * 0.1;
  
  // Cosmic wave distortion
  float cosmicWave = cnoise(position * uNoiseDensity * 0.5 + vec3(t * 0.3, t * 0.2, t * 0.4));
  vCosmicWave = cosmicWave;
  
  // Multi-layer noise for depth
  float noise1 = cnoise(position * uNoiseDensity * 2.0 + t * 0.8);
  float noise2 = cnoise(position * uNoiseDensity * 0.3 + t * 0.2) * 0.5;
  float noise3 = cnoise(position * uNoiseDensity * 4.0 + t * 1.2) * 0.25;
  
  float combinedNoise = noise1 + noise2 + noise3;
  
  // Holographic shimmer effect
  float shimmer = sin(position.x * 30.0 + t * 4.0) * 
                  cos(position.y * 25.0 + t * 3.0) * 0.05;
  
  // Calculate holographic intensity for fragment shader
  vHolographicIntensity = abs(holographicPattern) + abs(shimmer) * 2.0;
  
  // Apply displacement with holographic and cosmic effects
  float totalDisplacement = (combinedNoise + holographicPattern + shimmer) * uNoiseStrength * uLoadingTime;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation effect for cosmic feel
  pos = rotateY(pos, sin(t * 0.1) * 0.05);
  pos = rotateX(pos, cos(t * 0.07) * 0.03);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,W1={};pl(W1,{fragment:()=>jC,vertex:()=>VC});var jC=`// Cosmic Sphere Fragment Shader - Nebula Particle Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Nebula helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for complex nebula patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Star field generation
float stars(vec2 p, float density) {
    vec2 n = floor(p * density);
    vec2 f = fract(p * density);
    
    float d = 1.0;
    for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash(n + g) * vec2(1.0);
            vec2 r = g + o - f;
            d = min(d, dot(r, r));
        }
    }
    
    return 1.0 - smoothstep(0.0, 0.02, sqrt(d));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Nebula Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.1; // Very reflective for cosmic shine

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Calculate distance from center for radial effects
  float distanceFromCenter = length(vPos);
  float angle = atan(vPos.y, vPos.x);
  
  // Create complex nebula patterns using FBM
  vec2 nebulaCoords = vPos.xy * 3.0 + vCosmicSwirl.xy;
  float nebulaPattern1 = fbm(nebulaCoords + t * 0.1);
  float nebulaPattern2 = fbm(nebulaCoords * 2.0 + t * 0.15);
  float nebulaPattern3 = fbm(nebulaCoords * 4.0 + t * 0.2);
  
  // Combine nebula patterns
  float combinedNebula = (nebulaPattern1 + nebulaPattern2 * 0.5 + nebulaPattern3 * 0.25) / 1.75;
  
  // Create particle-like bright spots
  float particleField = stars(vPos.xy * 20.0 + t * 0.5, 50.0);
  float microParticles = stars(vPos.xy * 80.0 + t * 1.0, 200.0) * 0.5;
  
  // Create cosmic dust clouds
  float dustClouds = fbm(vPos.xy * 8.0 + t * 0.05) * 0.3;
  
  // Energy streams
  float energyStream1 = sin(vPos.x * 15.0 + t * 3.0 + angle * 2.0) * 0.1;
  float energyStream2 = cos(vPos.y * 20.0 + t * 2.5 + distanceFromCenter * 5.0) * 0.1;
  
  // Cosmic gradient mixing with nebula influence
  float gradientX = smoothstep(-3.0, 3.0, vPos.x + combinedNebula * 2.0 + vCosmicSwirl.x * 3.0);
  float gradientY = smoothstep(-3.0, 3.0, vPos.y + vNebulaIntensity * 1.5 + vCosmicSwirl.y * 2.0);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + dustClouds * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.6 + gradientZ * 0.4
  );
  
  // Add nebula color variations
  vec3 nebulaColor = baseGradient;
  nebulaColor.r += combinedNebula * 0.3 + energyStream1;
  nebulaColor.g += vNebulaIntensity * 0.2 + energyStream2;
  nebulaColor.b += dustClouds * 0.4 + abs(vCosmicSwirl.z) * 0.5;
  
  // Add particle brightness
  vec3 particleGlow = vec3(
    particleField * 0.8 + microParticles * 0.4,
    particleField * 0.6 + microParticles * 0.3,
    particleField * 0.9 + microParticles * 0.5
  );
  
  // Create pulsing cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 3.0) * 0.1 + 1.0;
  
  // Combine all effects
  vec3 finalColor = (nebulaColor + particleGlow * 2.0) * cosmicPulse;
  
  // Add cosmic rim lighting effect
  float rimLight = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
  finalColor += rimLight * 0.3 * (color1 + color2 + color3) / 3.0;
  
  // Enhance particle density areas
  finalColor = mix(finalColor, finalColor * 1.5, vParticleDensity * 0.5);
  
  // Add subtle color temperature variation
  float temperature = sin(angle * 3.0 + t * 0.8) * 0.1;
  finalColor.r += temperature * 0.1;
  finalColor.b -= temperature * 0.1;

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Cosmic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.2; // Strong emission for nebula glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
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
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,VC=`// Cosmic Sphere Vertex Shader - Nebula Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Nebula Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotation3dZ(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }
vec3 rotateZ(vec3 v, float angle) { return rotation3dZ(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Nebula Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create swirling nebula patterns
  vec3 swirlCenter = vec3(0.0, 0.0, 0.0);
  vec3 toCenter = position - swirlCenter;
  float distanceFromCenter = length(toCenter);
  
  // Create spiral motion
  float angle = atan(toCenter.y, toCenter.x);
  float spiralAngle = angle + distanceFromCenter * 2.0 + t * 0.5;
  
  // Multi-octave noise for nebula density
  float nebula1 = cnoise(position * uNoiseDensity * 0.8 + vec3(t * 0.2, t * 0.3, t * 0.1));
  float nebula2 = cnoise(position * uNoiseDensity * 1.5 + vec3(t * 0.4, t * 0.2, t * 0.5)) * 0.7;
  float nebula3 = cnoise(position * uNoiseDensity * 3.0 + vec3(t * 0.8, t * 0.6, t * 0.9)) * 0.4;
  float nebula4 = cnoise(position * uNoiseDensity * 6.0 + vec3(t * 1.2, t * 1.0, t * 1.4)) * 0.2;
  
  // Combine nebula layers for complexity
  float nebulaPattern = nebula1 + nebula2 + nebula3 + nebula4;
  vNebulaIntensity = abs(nebulaPattern);
  
  // Create particle-like density variations
  float particleDensity = cnoise(position * uNoiseDensity * 8.0 + vec3(t * 2.0, t * 1.5, t * 2.5));
  vParticleDensity = smoothstep(-0.3, 0.8, particleDensity);
  
  // Create cosmic swirl effect
  vec3 swirl = vec3(
    sin(spiralAngle + t * 0.3) * distanceFromCenter * 0.1,
    cos(spiralAngle + t * 0.2) * distanceFromCenter * 0.1,
    sin(distanceFromCenter * 3.0 + t * 0.4) * 0.05
  );
  vCosmicSwirl = swirl;
  
  // Create pulsing effect for cosmic energy
  float pulse = sin(t * 2.0 + distanceFromCenter * 5.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = nebulaPattern * uNoiseStrength * uLoadingTime * pulse;
  
  // Add swirl displacement
  vec3 pos = position + normal * totalDisplacement + swirl * 0.3;
  vPos = pos;
  
  // Add cosmic rotation for dynamic feel
  pos = rotateY(pos, sin(t * 0.1 + distanceFromCenter) * 0.1);
  pos = rotateX(pos, cos(t * 0.08 + angle) * 0.08);
  pos = rotateZ(pos, sin(t * 0.05 + spiralAngle) * 0.05);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,ey={};pl(ey,{fragment:()=>YC,vertex:()=>qC});var YC=`// Cosmic WaterPlane Fragment Shader - Aurora Wave Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Aurora helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for aurora patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Aurora curtain effect
float aurora(vec2 p, float time) {
    vec2 q = vec2(fbm(p + vec2(0.0, time * 0.1)),
                  fbm(p + vec2(5.2, time * 0.15)));
    
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, time * 0.2)),
                  fbm(p + 4.0 * q + vec2(8.3, time * 0.18)));
    
    return fbm(p + 4.0 * r);
}

// Water caustics effect
float caustics(vec2 p, float time) {
    vec2 uv = p * 4.0;
    vec2 p0 = uv + vec2(time * 0.3, time * 0.2);
    vec2 p1 = uv + vec2(time * -0.4, time * 0.3);
    
    float c1 = sin(length(p0) * 8.0 - time * 2.0) * 0.5 + 0.5;
    float c2 = sin(length(p1) * 6.0 - time * 1.5) * 0.5 + 0.5;
    
    return (c1 + c2) * 0.5;
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Aurora Water Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.05; // Very smooth for water-like reflection

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create aurora patterns
  vec2 auroraCoords = vPos.xy * 2.0 + vFlowDirection.xy * t * 0.5;
  float auroraPattern1 = aurora(auroraCoords, t);
  float auroraPattern2 = aurora(auroraCoords * 1.5 + vec2(3.0, 1.0), t * 1.2);
  float auroraPattern3 = aurora(auroraCoords * 0.7 + vec2(-2.0, 4.0), t * 0.8);
  
  // Combine aurora layers
  float combinedAurora = (auroraPattern1 + auroraPattern2 * 0.7 + auroraPattern3 * 0.5) / 2.2;
  
  // Create water caustics
  float causticsPattern = caustics(vPos.xy, t);
  
  // Create flowing light streams
  float lightStream1 = sin(vPos.x * 8.0 + t * 2.0 + combinedAurora * 3.0) * 0.2;
  float lightStream2 = cos(vPos.y * 6.0 + t * 1.5 + vWaveHeight * 4.0) * 0.15;
  float lightStream3 = sin((vPos.x + vPos.y) * 10.0 + t * 2.5) * 0.1;
  
  // Create cosmic energy waves
  float distanceFromCenter = length(vPos.xy);
  float energyWave = sin(distanceFromCenter * 5.0 - t * 3.0) * 
                     exp(-distanceFromCenter * 0.05) * 0.3;
  
  // Aurora color shifting effect
  vec3 auroraShift = vec3(
    sin(combinedAurora * 6.28 + t * 1.0) * 0.2,
    sin(combinedAurora * 6.28 + t * 1.0 + 2.094) * 0.2,  // 120 degrees
    sin(combinedAurora * 6.28 + t * 1.0 + 4.188) * 0.2   // 240 degrees
  );
  
  // Enhanced gradient mixing with aurora and water effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + combinedAurora * 3.0 + vFlowDirection.x * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vWaveHeight * 2.0 + lightStream1 * 3.0);
  float gradientZ = smoothstep(-3.0, 3.0, vPos.z + causticsPattern * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply aurora color shifts
  vec3 auroraColor = baseGradient + auroraShift;
  
  // Add water caustics coloring
  vec3 causticsColor = vec3(
    causticsPattern * 0.3,
    causticsPattern * 0.4,
    causticsPattern * 0.5
  );
  
  // Add light streams
  vec3 lightStreams = vec3(
    abs(lightStream1) * 0.4,
    abs(lightStream2) * 0.3,
    abs(lightStream3) * 0.5
  );
  
  // Aurora intensity modulation
  float auroraIntensityMod = 1.0 + vAuroraIntensity * 0.8 + abs(combinedAurora) * 0.6;
  
  // Combine all effects
  vec3 finalColor = (auroraColor + causticsColor + lightStreams + vec3(energyWave * 0.2)) * auroraIntensityMod;
  
  // Add water-like shimmer
  float shimmer = sin(vPos.x * 20.0 + t * 4.0) * 
                  cos(vPos.y * 18.0 + t * 3.5) * 
                  vWaveHeight * 0.1;
  finalColor += vec3(shimmer * 0.3, shimmer * 0.4, shimmer * 0.6);
  
  // Add aurora dancing effect
  float auroraMovement = sin(vPos.x * 3.0 + t * 1.2 + combinedAurora * 2.0) * 
                         cos(vPos.y * 2.5 + t * 0.9) * 0.15;
  finalColor.g += abs(auroraMovement) * 0.4;
  finalColor.b += abs(auroraMovement) * 0.2;
  
  // Add cosmic depth variation
  float depthVariation = noise2D(vPos.xy * 5.0 + t * 0.3) * 0.1;
  finalColor *= (1.0 + depthVariation);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Water Aurora Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.15; // Moderate emission for aurora glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
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
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`,qC=`// Cosmic WaterPlane Vertex Shader - Aurora Wave Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Aurora Wave Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Aurora Wave Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create flowing aurora patterns
  float auroraFlow1 = sin(position.x * 5.0 + t * 1.5) * cos(position.y * 3.0 + t * 1.0);
  float auroraFlow2 = sin(position.x * 8.0 + t * 2.0) * sin(position.y * 6.0 + t * 1.8);
  float auroraFlow3 = cos(position.x * 12.0 + t * 2.5) * cos(position.y * 9.0 + t * 2.2);
  
  // Combine aurora flows
  float auroraPattern = (auroraFlow1 + auroraFlow2 * 0.7 + auroraFlow3 * 0.4) / 2.1;
  vAuroraIntensity = abs(auroraPattern);
  
  // Create multi-layered waves
  float wave1 = cnoise(vec3(position.xy * uNoiseDensity * 0.5, t * 0.3));
  float wave2 = cnoise(vec3(position.xy * uNoiseDensity * 1.2, t * 0.5)) * 0.6;
  float wave3 = cnoise(vec3(position.xy * uNoiseDensity * 2.5, t * 0.8)) * 0.3;
  float wave4 = cnoise(vec3(position.xy * uNoiseDensity * 5.0, t * 1.2)) * 0.15;
  
  // Combine waves for complex water surface
  float combinedWaves = wave1 + wave2 + wave3 + wave4;
  vWaveHeight = combinedWaves;
  
  // Create flowing current patterns
  vec2 flowDirection = vec2(
    sin(position.x * 2.0 + t * 0.8) + cos(position.y * 1.5 + t * 0.6),
    cos(position.x * 1.8 + t * 0.7) + sin(position.y * 2.2 + t * 0.9)
  );
  vFlowDirection = vec3(normalize(flowDirection), 0.0);
  
  // Aurora-influenced wave distortion
  float auroraWave = sin(position.x * 15.0 + t * 3.0 + auroraPattern * 5.0) * 
                     cos(position.y * 12.0 + t * 2.5 + auroraPattern * 4.0) * 0.2;
  
  // Create cosmic energy ripples
  float distanceFromCenter = length(position.xy);
  float cosmicRipple = sin(distanceFromCenter * 8.0 - t * 4.0) * 
                       exp(-distanceFromCenter * 0.1) * 0.3;
  
  // Pulsing effect for cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 2.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = (combinedWaves + auroraWave + cosmicRipple) * 
                           uNoiseStrength * uLoadingTime * cosmicPulse;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation for cosmic flow
  pos = rotateY(pos, sin(t * 0.05 + distanceFromCenter * 0.1) * 0.02);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`,ty={};pl(ty,{plane:()=>$1,sphere:()=>W1,waterPlane:()=>ey});var ny={};pl(ny,{cosmic:()=>ty,defaults:()=>q1,glass:()=>I1,positionMix:()=>J1});var co={performance:!1,render:!0},ly={enable:d=>{co[d]=!0},disable:d=>{co[d]=!1},enableAll:()=>{Object.keys(co).forEach(d=>{co[d]=!0})},disableAll:()=>{Object.keys(co).forEach(d=>{co[d]=!1})},performance:(...d)=>{co.performance&&console.log("[Performance]",...d)},render:(...d)=>{co.render&&console.log("[Render]",...d)}};typeof window<"u"&&(window.debug=ly);function tp(d){return d/180*Math.PI}function kC(d){return d.map(s=>tp(s))}function GC(d){return d.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}function QC({animate:d,range:s,rangeStart:v,rangeEnd:g,loop:h,loopDuration:b,positionX:E,positionY:T,positionZ:x,rotationX:w,rotationY:z,rotationZ:S,type:U,color1:P,color2:K,color3:J,reflection:j,uTime:A,uSpeed:C,uDensity:O,uStrength:M,uFrequency:H,uAmplitude:L,shader:Z}){let{vertex:W,fragment:de}=ny[Z][U],me={colors:[P,K,J],uTime:A,uSpeed:C,uLoadingTime:1,uNoiseDensity:O,uNoiseStrength:M,uFrequency:H,uAmplitude:L,uIntensity:.5,uLoop:h==="on"?1:0,uLoopDuration:b||5},Te=Z==="glass"?{uColor1:cf(P),uColor2:cf(K),uColor3:cf(J),uTransparency:.1,uRefraction:1.5,uChromaticAberration:.1,uFresnelPower:2,uReflectivity:.9,uWaveAmplitude:.02,uWaveFrequency:5,uDistortion:.1,uFlowSpeed:.1,uFlowDirection:{x:1,y:.5},uLiquidEffect:.5,uFoamIntensity:.3,envMapIntensity:1}:{},xe=Zt(Zt({},me),Te);return se.jsxs("mesh",{name:"shadergradient-mesh",position:[E,T,x],rotation:kC([w,z,S]),children:[se.jsx(oC,{type:U}),se.jsx(_C,{animate:d,range:s,rangeStart:v,rangeEnd:g,loop:h,loopDuration:b,reflection:j,shader:Z,uniforms:xe,vertexShader:W,fragmentShader:de,onInit:et=>{ly.performance("material (onInit)",et)}})]})}var U0=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},IC=new ap(-1,1,1,-1,0,1),Cp=new lp;Cp.setAttribute("position",new ff([-1,3,0,-1,-1,0,3,-1,0],3));Cp.setAttribute("uv",new ff([0,2,0,0,2,0],2));var ZC=class{constructor(s){this._mesh=new g1(Cp,s)}dispose(){this._mesh.geometry.dispose()}render(s){s.render(this._mesh,IC)}get material(){return this._mesh.material}set material(s){this._mesh.material=s}},XC=class extends U0{constructor(s,v,g,h,b){super(),this.scene=s,this.camera=v,this.overrideMaterial=g,this.clearColor=h,this.clearAlpha=b!==void 0?b:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i_}render(s,v,g){let h=s.autoClear;s.autoClear=!1;let b,E;this.overrideMaterial!==void 0&&(E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(s.getClearColor(this._oldClearColor),b=s.getClearAlpha(),s.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&s.clearDepth(),s.setRenderTarget(this.renderToScreen?null:g),this.clear&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),s.render(this.scene,this.camera),this.clearColor&&s.setClearColor(this._oldClearColor,b),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=E),s.autoClear=h}},$h=class extends U0{constructor(s,v){super(),this.textureID=v!==void 0?v:"tDiffuse",s instanceof Xg?(this.uniforms=s.uniforms,this.material=s):s&&(this.uniforms=p1.clone(s.uniforms),this.material=new Xg({defines:Object.assign({},s.defines),uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader})),this.fsQuad=new ZC(this.material)}render(s,v,g){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=g.texture),this.fsQuad.material=this.material,this.renderToScreen?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(v),this.clear&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),this.fsQuad.render(s))}},Wh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`},e1=class extends U0{constructor(s,v){super(),this.scene=s,this.camera=v,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(s,v,g){let h=s.getContext(),b=s.state;b.buffers.color.setMask(!1),b.buffers.depth.setMask(!1),b.buffers.color.setLocked(!0),b.buffers.depth.setLocked(!0);let E,T;this.inverse?(E=0,T=1):(E=1,T=0),b.buffers.stencil.setTest(!0),b.buffers.stencil.setOp(h.REPLACE,h.REPLACE,h.REPLACE),b.buffers.stencil.setFunc(h.ALWAYS,E,4294967295),b.buffers.stencil.setClear(T),b.buffers.stencil.setLocked(!0),s.setRenderTarget(g),this.clear&&s.clear(),s.render(this.scene,this.camera),s.setRenderTarget(v),this.clear&&s.clear(),s.render(this.scene,this.camera),b.buffers.color.setLocked(!1),b.buffers.depth.setLocked(!1),b.buffers.stencil.setLocked(!1),b.buffers.stencil.setFunc(h.EQUAL,1,4294967295),b.buffers.stencil.setOp(h.KEEP,h.KEEP,h.KEEP),b.buffers.stencil.setLocked(!0)}},KC=class extends U0{constructor(){super(),this.needsSwap=!1}render(s){s.state.buffers.stencil.setLocked(!1),s.state.buffers.stencil.setTest(!1)}},JC=class{constructor(s,v){if(this.renderer=s,v===void 0){let g={minFilter:E0,magFilter:E0,format:u_},h=s.getSize(new yh);this._pixelRatio=s.getPixelRatio(),this._width=h.width,this._height=h.height,v=new r_(this._width*this._pixelRatio,this._height*this._pixelRatio,g),v.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=v.width,this._height=v.height;this.renderTarget1=v,this.renderTarget2=v.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Wh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),$h===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new $h(Wh),this.clock=new o_}swapBuffers(){let s=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=s}addPass(s){this.passes.push(s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(s,v){this.passes.splice(v,0,s),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(s){let v=this.passes.indexOf(s);v!==-1&&this.passes.splice(v,1)}isLastEnabledPass(s){for(let v=s+1;v<this.passes.length;v++)if(this.passes[v].enabled)return!1;return!0}render(s){s===void 0&&(s=this.clock.getDelta());let v=this.renderer.getRenderTarget(),g=!1;for(let h=0,b=this.passes.length;h<b;h++){let E=this.passes[h];if(E.enabled!==!1){if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(h),E.render(this.renderer,this.writeBuffer,this.readBuffer,s,g),E.needsSwap){if(g){let T=this.renderer.getContext(),x=this.renderer.state.buffers.stencil;x.setFunc(T.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,s),x.setFunc(T.EQUAL,1,4294967295)}this.swapBuffers()}e1!==void 0&&(E instanceof e1?g=!0:E instanceof KC&&(g=!1))}}this.renderer.setRenderTarget(v)}reset(s){if(s===void 0){let v=this.renderer.getSize(new yh);this._pixelRatio=this.renderer.getPixelRatio(),this._width=v.width,this._height=v.height,s=this.renderTarget1.clone(),s.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=s,this.renderTarget2=s.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(s,v){this._width=s,this._height=v;let g=this._width*this._pixelRatio,h=this._height*this._pixelRatio;this.renderTarget1.setSize(g,h),this.renderTarget2.setSize(g,h);for(let b=0;b<this.passes.length;b++)this.passes[b].setSize(g,h)}setPixelRatio(s){this._pixelRatio=s,this.setSize(this._width,this._height)}};new ap(-1,1,1,-1,0,1);var ay=new lp;ay.setAttribute("position",new ff([-1,3,0,-1,-1,0,3,-1,0],3));ay.setAttribute("uv",new ff([0,2,0,0,2,0],2));var nf={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:2},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:1},width:{value:20},height:{value:20},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`},$C=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},WC=new ap(-1,1,1,-1,0,1),bp=new lp;bp.setAttribute("position",new ff([-1,3,0,-1,-1,0,3,-1,0],3));bp.setAttribute("uv",new ff([0,2,0,0,2,0],2));var eb=class{constructor(s){this._mesh=new g1(bp,s)}dispose(){this._mesh.geometry.dispose()}render(s){s.render(this._mesh,WC)}get material(){return this._mesh.material}set material(s){this._mesh.material=s}},Bn={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},tb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`,nb=`vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`,lb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`,ab=`float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,ib=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,rb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`,ub=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`,ob=`float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,sb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`,cb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`,fb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`,db=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`,mb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`,vb=`float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,gb=`float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,pb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`,hb=`float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`,yb=`vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`,_b=new Map([[Bn.SKIP,null],[Bn.ADD,tb],[Bn.ALPHA,nb],[Bn.AVERAGE,lb],[Bn.COLOR_BURN,ab],[Bn.COLOR_DODGE,ib],[Bn.DARKEN,rb],[Bn.DIFFERENCE,ub],[Bn.EXCLUSION,sb],[Bn.LIGHTEN,cb],[Bn.MULTIPLY,fb],[Bn.DIVIDE,ob],[Bn.NEGATION,db],[Bn.NORMAL,mb],[Bn.OVERLAY,vb],[Bn.REFLECT,gb],[Bn.SCREEN,pb],[Bn.SOFT_LIGHT,hb],[Bn.SUBTRACT,yb]]),Cb=class extends s_{constructor(d,s=1){super(),this.blendFunction=d,this.opacity=new c_(s)}getBlendFunction(){return this.blendFunction}setBlendFunction(d){this.blendFunction=d,this.dispatchEvent({type:"change"})}getShaderCode(){return _b.get(this.blendFunction)}},bb=class extends $C{constructor(s,v,g){super(),nf===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=p1.clone(nf.uniforms),this.material=new Xg({uniforms:this.uniforms,fragmentShader:nf.fragmentShader,vertexShader:nf.vertexShader}),this.uniforms.width.value=s,this.uniforms.height.value=v,this.uniforms.disable.value=g.disable,this.fsQuad=new eb(this.material),this.blendMode=new Cb(Bn.SCREEN),this.extensions=null}render(s,v,g){this.material.uniforms.tDiffuse.value=g.texture,this.renderToScreen?(s.setRenderTarget(null),this.fsQuad.render(s)):(s.setRenderTarget(v),this.clear&&s.clear(),this.fsQuad.render(s))}setSize(s,v){this.uniforms.width.value=s,this.uniforms.height.value=v}initialize(s,v,g){}addEventListener(){}getAttributes(){return this.attributes}getFragmentShader(){return nf.fragmentShader}getVertexShader(){return nf.vertexShader}update(s,v,g){}};function xb({disable:d=!1}){let{gl:s,scene:v,camera:g,size:h}=Rl(),b=ue.useRef(null),E=ue.useRef(null),T=ue.useMemo(()=>({shape:1,radius:2,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:1,blending:1,blendingMode:1,greyscale:!1}),[]);return ue.useEffect(()=>{let x=new JC(s),w=new XC(v,g),z=new bb(h.width,h.height,hm(Zt({},T),{disable:d}));return x.addPass(w),x.addPass(z),b.current=x,E.current=z,()=>{var S,U,P,K,J,j,A,C;(S=w.dispose)==null||S.call(w),(U=z.fsQuad)!=null&&U.dispose&&z.fsQuad.dispose(),(K=(P=z.material)==null?void 0:P.dispose)==null||K.call(P),(j=(J=x.renderTarget1)==null?void 0:J.dispose)==null||j.call(J),(C=(A=x.renderTarget2)==null?void 0:A.dispose)==null||C.call(A),b.current=null,E.current=null}},[g,s,T,v]),ue.useEffect(()=>{var x;let w=b.current;w&&(w.setSize(h.width,h.height),(x=E.current)==null||x.setSize(h.width,h.height))},[h.height,h.width]),ue.useEffect(()=>{var x,w;(w=(x=E.current)==null?void 0:x.uniforms)!=null&&w.disable&&(E.current.uniforms.disable.value=d)},[d]),pm((x,w)=>{let z=b.current;z&&(s.autoClear=!0,z.render(w))},1),se.jsx(se.Fragment,{})}var Sb=1,zb=14,t1={zoom:1,distance:14},n1={zoom:5,distance:14},Eb="https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/";function Tb({type:d,cAzimuthAngle:s,cPolarAngle:v,cDistance:g,cameraZoom:h,zoomOut:b,enableTransition:E=!0}){let T=ue.useRef();return pm((x,w)=>T.current.update(w)),ue.useEffect(()=>{let x=T.current;x?.rotateTo(tp(s),tp(v),E)},[T,s,v,E]),ue.useEffect(()=>{let x=T.current;b?d==="sphere"?(x?.dollyTo(n1.distance,E),x?.zoomTo(n1.zoom,E)):(x?.dollyTo(t1.distance,E),x?.zoomTo(t1.zoom,E)):d==="sphere"?(x?.zoomTo(h,E),x?.dollyTo(zb,E)):(x?.dollyTo(g,E),x?.zoomTo(Sb,E))},[T,b,d,h,g,E]),T}var ln={LEFT:1,RIGHT:2,MIDDLE:4},te=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,OFFSET:4,DOLLY:8,ZOOM:16,TOUCH_ROTATE:32,TOUCH_TRUCK:64,TOUCH_OFFSET:128,TOUCH_DOLLY:256,TOUCH_ZOOM:512,TOUCH_DOLLY_TRUCK:1024,TOUCH_DOLLY_OFFSET:2048,TOUCH_DOLLY_ROTATE:4096,TOUCH_ZOOM_TRUCK:8192,TOUCH_ZOOM_OFFSET:16384,TOUCH_ZOOM_ROTATE:32768}),lf={NONE:0,IN:1,OUT:-1};function zs(d){return d.isPerspectiveCamera}function fo(d){return d.isOrthographicCamera}var af=Math.PI*2,l1=Math.PI/2,iy=1e-5,nm=Math.PI/180;function Vi(d,s,v){return Math.max(s,Math.min(v,d))}function kt(d,s=iy){return Math.abs(d)<s}function Tt(d,s,v=iy){return kt(d-s,v)}function a1(d,s){return Math.round(d/s)*s}function lm(d){return isFinite(d)?d:d<0?-Number.MAX_VALUE:Number.MAX_VALUE}function am(d){return Math.abs(d)<Number.MAX_VALUE?d:d*(1/0)}function C0(d,s,v,g,h=1/0,b){g=Math.max(1e-4,g);let E=2/g,T=E*b,x=1/(1+T+.48*T*T+.235*T*T*T),w=d-s,z=s,S=h*g;w=Vi(w,-S,S),s=d-w;let U=(v.value+E*w)*b;v.value=(v.value-E*U)*x;let P=s+(w+U)*x;return z-d>0==P>z&&(P=z,v.value=(P-z)/b),P}function i1(d,s,v,g,h=1/0,b,E){g=Math.max(1e-4,g);let T=2/g,x=T*b,w=1/(1+x+.48*x*x+.235*x*x*x),z=s.x,S=s.y,U=s.z,P=d.x-z,K=d.y-S,J=d.z-U,j=z,A=S,C=U,O=h*g,M=O*O,H=P*P+K*K+J*J;if(H>M){let Oe=Math.sqrt(H);P=P/Oe*O,K=K/Oe*O,J=J/Oe*O}z=d.x-P,S=d.y-K,U=d.z-J;let L=(v.x+T*P)*b,Z=(v.y+T*K)*b,W=(v.z+T*J)*b;v.x=(v.x-T*L)*w,v.y=(v.y-T*Z)*w,v.z=(v.z-T*W)*w,E.x=z+(P+L)*w,E.y=S+(K+Z)*w,E.z=U+(J+W)*w;let de=j-d.x,me=A-d.y,Te=C-d.z,xe=E.x-j,et=E.y-A,tt=E.z-C;return de*xe+me*et+Te*tt>0&&(E.x=j,E.y=A,E.z=C,v.x=(E.x-j)/b,v.y=(E.y-A)/b,v.z=(E.z-C)/b),E}function Fg(d,s){s.set(0,0),d.forEach(v=>{s.x+=v.clientX,s.y+=v.clientY}),s.x/=d.length,s.y/=d.length}function jg(d,s){return fo(d)?(console.warn(`${s} is not supported in OrthographicCamera`),!0):!1}var Ab=class{constructor(){this._listeners={}}addEventListener(d,s){let v=this._listeners;v[d]===void 0&&(v[d]=[]),v[d].indexOf(s)===-1&&v[d].push(s)}hasEventListener(d,s){let v=this._listeners;return v[d]!==void 0&&v[d].indexOf(s)!==-1}removeEventListener(d,s){let v=this._listeners[d];if(v!==void 0){let g=v.indexOf(s);g!==-1&&v.splice(g,1)}}removeAllEventListeners(d){if(!d){this._listeners={};return}Array.isArray(this._listeners[d])&&(this._listeners[d].length=0)}dispatchEvent(d){let s=this._listeners[d.type];if(s!==void 0){d.target=this;let v=s.slice(0);for(let g=0,h=v.length;g<h;g++)v[g].call(this,d)}}},Vg,wb="2.9.0",b0=1/8,Db=/Mac/.test((Vg=globalThis?.navigator)===null||Vg===void 0?void 0:Vg.platform),Be,r1,x0,Yg,fa,Ge,ht,rf,im,Er,Tr,Es,u1,o1,ni,rm,uf,s1,qg,c1,kg,Gg,S0,ji=class np extends Ab{static install(s){Be=s.THREE,r1=Object.freeze(new Be.Vector3(0,0,0)),x0=Object.freeze(new Be.Vector3(0,1,0)),Yg=Object.freeze(new Be.Vector3(0,0,1)),fa=new Be.Vector2,Ge=new Be.Vector3,ht=new Be.Vector3,rf=new Be.Vector3,im=new Be.Vector3,Er=new Be.Vector3,Tr=new Be.Vector3,Es=new Be.Vector3,u1=new Be.Vector3,o1=new Be.Vector3,ni=new Be.Spherical,rm=new Be.Spherical,uf=new Be.Box3,s1=new Be.Box3,qg=new Be.Sphere,c1=new Be.Quaternion,kg=new Be.Quaternion,Gg=new Be.Matrix4,S0=new Be.Raycaster}static get ACTION(){return te}constructor(s,v){super(),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.minDistance=Number.EPSILON,this.maxDistance=1/0,this.infinityDolly=!1,this.minZoom=.01,this.maxZoom=1/0,this.smoothTime=.25,this.draggingSmoothTime=.125,this.maxSpeed=1/0,this.azimuthRotateSpeed=1,this.polarRotateSpeed=1,this.dollySpeed=1,this.dollyDragInverted=!1,this.truckSpeed=2,this.dollyToCursor=!1,this.dragToOffset=!1,this.verticalDragToForward=!1,this.boundaryFriction=0,this.restThreshold=.01,this.colliderMeshes=[],this.cancel=()=>{},this._enabled=!0,this._state=te.NONE,this._viewport=null,this._changedDolly=0,this._changedZoom=0,this._hasRested=!0,this._boundaryEnclosesCamera=!1,this._needsUpdate=!0,this._updatedLastTime=!1,this._elementRect=new DOMRect,this._isDragging=!1,this._dragNeedsUpdate=!0,this._activePointers=[],this._lockedPointer=null,this._interactiveArea=new DOMRect(0,0,1,1),this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._isUserControllingOffset=!1,this._isUserControllingZoom=!1,this._lastDollyDirection=lf.NONE,this._thetaVelocity={value:0},this._phiVelocity={value:0},this._radiusVelocity={value:0},this._targetVelocity=new Be.Vector3,this._focalOffsetVelocity=new Be.Vector3,this._zoomVelocity={value:0},this._truckInternal=(A,C,O)=>{let M,H;if(zs(this._camera)){let L=Ge.copy(this._camera.position).sub(this._target),Z=this._camera.getEffectiveFOV()*nm,W=L.length()*Math.tan(Z*.5);M=this.truckSpeed*A*W/this._elementRect.height,H=this.truckSpeed*C*W/this._elementRect.height}else if(fo(this._camera)){let L=this._camera;M=A*(L.right-L.left)/L.zoom/this._elementRect.width,H=C*(L.top-L.bottom)/L.zoom/this._elementRect.height}else return;this.verticalDragToForward?(O?this.setFocalOffset(this._focalOffsetEnd.x+M,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(M,0,!0),this.forward(-H,!0)):O?this.setFocalOffset(this._focalOffsetEnd.x+M,this._focalOffsetEnd.y+H,this._focalOffsetEnd.z,!0):this.truck(M,H,!0)},this._rotateInternal=(A,C)=>{let O=af*this.azimuthRotateSpeed*A/this._elementRect.height,M=af*this.polarRotateSpeed*C/this._elementRect.height;this.rotate(O,M,!0)},this._dollyInternal=(A,C,O)=>{let M=Math.pow(.95,-A*this.dollySpeed),H=this._sphericalEnd.radius,L=this._sphericalEnd.radius*M,Z=Vi(L,this.minDistance,this.maxDistance),W=Z-L;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(L,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(W,!0),this._dollyToNoClamp(Z,!0)):this._dollyToNoClamp(Z,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?L:Z)-H,this._dollyControlCoord.set(C,O)),this._lastDollyDirection=Math.sign(-A)},this._zoomInternal=(A,C,O)=>{let M=Math.pow(.95,A*this.dollySpeed),H=this._zoom,L=this._zoom*M;this.zoomTo(L,!0),this.dollyToCursor&&(this._changedZoom+=L-H,this._dollyControlCoord.set(C,O))},typeof Be>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=s,this._yAxisUpSpace=new Be.Quaternion().setFromUnitVectors(this._camera.up,x0),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=te.NONE,this._target=new Be.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new Be.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new Be.Spherical().setFromVector3(Ge.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new Be.Vector3,new Be.Vector3,new Be.Vector3,new Be.Vector3],this._updateNearPlaneCorners(),this._boundary=new Be.Box3(new Be.Vector3(-1/0,-1/0,-1/0),new Be.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new Be.Vector2,this.mouseButtons={left:te.ROTATE,middle:te.DOLLY,right:te.TRUCK,wheel:zs(this._camera)?te.DOLLY:fo(this._camera)?te.ZOOM:te.NONE},this.touches={one:te.TOUCH_ROTATE,two:zs(this._camera)?te.TOUCH_DOLLY_TRUCK:fo(this._camera)?te.TOUCH_ZOOM_TRUCK:te.NONE,three:te.TOUCH_TRUCK};let g=new Be.Vector2,h=new Be.Vector2,b=new Be.Vector2,E=A=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let M=this._domElement.getBoundingClientRect(),H=A.clientX/M.width,L=A.clientY/M.height;if(H<this._interactiveArea.left||H>this._interactiveArea.right||L<this._interactiveArea.top||L>this._interactiveArea.bottom)return}let C=A.pointerType!=="mouse"?null:(A.buttons&ln.LEFT)===ln.LEFT?ln.LEFT:(A.buttons&ln.MIDDLE)===ln.MIDDLE?ln.MIDDLE:(A.buttons&ln.RIGHT)===ln.RIGHT?ln.RIGHT:null;if(C!==null){let M=this._findPointerByMouseButton(C);M&&this._disposePointer(M)}if((A.buttons&ln.LEFT)===ln.LEFT&&this._lockedPointer)return;let O={pointerId:A.pointerId,clientX:A.clientX,clientY:A.clientY,deltaX:0,deltaY:0,mouseButton:C};this._activePointers.push(O),this._domElement.ownerDocument.removeEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",x),this._domElement.ownerDocument.addEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",x),this._isDragging=!0,U(A)},T=A=>{A.cancelable&&A.preventDefault();let C=A.pointerId,O=this._lockedPointer||this._findPointerById(C);if(O){if(O.clientX=A.clientX,O.clientY=A.clientY,O.deltaX=A.movementX,O.deltaY=A.movementY,this._state=0,A.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(A.buttons&ln.LEFT)===ln.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(A.buttons&ln.MIDDLE)===ln.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(A.buttons&ln.RIGHT)===ln.RIGHT&&(this._state=this._state|this.mouseButtons.right);P()}},x=A=>{let C=this._findPointerById(A.pointerId);if(!(C&&C===this._lockedPointer)){if(C&&this._disposePointer(C),A.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=te.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=te.NONE;K()}},w=-1,z=A=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===te.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){let L=this._domElement.getBoundingClientRect(),Z=A.clientX/L.width,W=A.clientY/L.height;if(Z<this._interactiveArea.left||Z>this._interactiveArea.right||W<this._interactiveArea.top||W>this._interactiveArea.bottom)return}if(A.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===te.ROTATE||this.mouseButtons.wheel===te.TRUCK){let L=performance.now();w-L<1e3&&this._getClientRect(this._elementRect),w=L}let C=Db?-1:-3,O=A.deltaMode===1?A.deltaY/C:A.deltaY/(C*10),M=this.dollyToCursor?(A.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,H=this.dollyToCursor?(A.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(this.mouseButtons.wheel){case te.ROTATE:{this._rotateInternal(A.deltaX,A.deltaY),this._isUserControllingRotate=!0;break}case te.TRUCK:{this._truckInternal(A.deltaX,A.deltaY,!1),this._isUserControllingTruck=!0;break}case te.OFFSET:{this._truckInternal(A.deltaX,A.deltaY,!0),this._isUserControllingOffset=!0;break}case te.DOLLY:{this._dollyInternal(-O,M,H),this._isUserControllingDolly=!0;break}case te.ZOOM:{this._zoomInternal(-O,M,H),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},S=A=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===np.ACTION.NONE){let C=A instanceof PointerEvent?A.pointerId:0,O=this._findPointerById(C);O&&this._disposePointer(O),this._domElement.ownerDocument.removeEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",x);return}A.preventDefault()}},U=A=>{if(this._enabled){if(Fg(this._activePointers,fa),this._getClientRect(this._elementRect),g.copy(fa),h.copy(fa),this._activePointers.length>=2){let C=fa.x-this._activePointers[1].clientX,O=fa.y-this._activePointers[1].clientY,M=Math.sqrt(C*C+O*O);b.set(0,M);let H=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,L=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;h.set(H,L)}if(this._state=0,!A)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in A&&A.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(A.buttons&ln.LEFT)===ln.LEFT&&(this._state=this._state|this.mouseButtons.left),(A.buttons&ln.MIDDLE)===ln.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(A.buttons&ln.RIGHT)===ln.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&te.ROTATE)===te.ROTATE||(this._state&te.TOUCH_ROTATE)===te.TOUCH_ROTATE||(this._state&te.TOUCH_DOLLY_ROTATE)===te.TOUCH_DOLLY_ROTATE||(this._state&te.TOUCH_ZOOM_ROTATE)===te.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&te.TRUCK)===te.TRUCK||(this._state&te.TOUCH_TRUCK)===te.TOUCH_TRUCK||(this._state&te.TOUCH_DOLLY_TRUCK)===te.TOUCH_DOLLY_TRUCK||(this._state&te.TOUCH_ZOOM_TRUCK)===te.TOUCH_ZOOM_TRUCK)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&te.DOLLY)===te.DOLLY||(this._state&te.TOUCH_DOLLY)===te.TOUCH_DOLLY||(this._state&te.TOUCH_DOLLY_TRUCK)===te.TOUCH_DOLLY_TRUCK||(this._state&te.TOUCH_DOLLY_OFFSET)===te.TOUCH_DOLLY_OFFSET||(this._state&te.TOUCH_DOLLY_ROTATE)===te.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&te.ZOOM)===te.ZOOM||(this._state&te.TOUCH_ZOOM)===te.TOUCH_ZOOM||(this._state&te.TOUCH_ZOOM_TRUCK)===te.TOUCH_ZOOM_TRUCK||(this._state&te.TOUCH_ZOOM_OFFSET)===te.TOUCH_ZOOM_OFFSET||(this._state&te.TOUCH_ZOOM_ROTATE)===te.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&te.OFFSET)===te.OFFSET||(this._state&te.TOUCH_OFFSET)===te.TOUCH_OFFSET||(this._state&te.TOUCH_DOLLY_OFFSET)===te.TOUCH_DOLLY_OFFSET||(this._state&te.TOUCH_ZOOM_OFFSET)===te.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})}},P=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,Fg(this._activePointers,fa);let A=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,C=A?-A.deltaX:h.x-fa.x,O=A?-A.deltaY:h.y-fa.y;if(h.copy(fa),((this._state&te.ROTATE)===te.ROTATE||(this._state&te.TOUCH_ROTATE)===te.TOUCH_ROTATE||(this._state&te.TOUCH_DOLLY_ROTATE)===te.TOUCH_DOLLY_ROTATE||(this._state&te.TOUCH_ZOOM_ROTATE)===te.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(C,O),this._isUserControllingRotate=!0),(this._state&te.DOLLY)===te.DOLLY||(this._state&te.ZOOM)===te.ZOOM){let M=this.dollyToCursor?(g.x-this._elementRect.x)/this._elementRect.width*2-1:0,H=this.dollyToCursor?(g.y-this._elementRect.y)/this._elementRect.height*-2+1:0,L=this.dollyDragInverted?-1:1;(this._state&te.DOLLY)===te.DOLLY?(this._dollyInternal(L*O*b0,M,H),this._isUserControllingDolly=!0):(this._zoomInternal(L*O*b0,M,H),this._isUserControllingZoom=!0)}if((this._state&te.TOUCH_DOLLY)===te.TOUCH_DOLLY||(this._state&te.TOUCH_ZOOM)===te.TOUCH_ZOOM||(this._state&te.TOUCH_DOLLY_TRUCK)===te.TOUCH_DOLLY_TRUCK||(this._state&te.TOUCH_ZOOM_TRUCK)===te.TOUCH_ZOOM_TRUCK||(this._state&te.TOUCH_DOLLY_OFFSET)===te.TOUCH_DOLLY_OFFSET||(this._state&te.TOUCH_ZOOM_OFFSET)===te.TOUCH_ZOOM_OFFSET||(this._state&te.TOUCH_DOLLY_ROTATE)===te.TOUCH_DOLLY_ROTATE||(this._state&te.TOUCH_ZOOM_ROTATE)===te.TOUCH_ZOOM_ROTATE){let M=fa.x-this._activePointers[1].clientX,H=fa.y-this._activePointers[1].clientY,L=Math.sqrt(M*M+H*H),Z=b.y-L;b.set(0,L);let W=this.dollyToCursor?(h.x-this._elementRect.x)/this._elementRect.width*2-1:0,de=this.dollyToCursor?(h.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&te.TOUCH_DOLLY)===te.TOUCH_DOLLY||(this._state&te.TOUCH_DOLLY_ROTATE)===te.TOUCH_DOLLY_ROTATE||(this._state&te.TOUCH_DOLLY_TRUCK)===te.TOUCH_DOLLY_TRUCK||(this._state&te.TOUCH_DOLLY_OFFSET)===te.TOUCH_DOLLY_OFFSET?(this._dollyInternal(Z*b0,W,de),this._isUserControllingDolly=!0):(this._zoomInternal(Z*b0,W,de),this._isUserControllingZoom=!0)}((this._state&te.TRUCK)===te.TRUCK||(this._state&te.TOUCH_TRUCK)===te.TOUCH_TRUCK||(this._state&te.TOUCH_DOLLY_TRUCK)===te.TOUCH_DOLLY_TRUCK||(this._state&te.TOUCH_ZOOM_TRUCK)===te.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(C,O,!1),this._isUserControllingTruck=!0),((this._state&te.OFFSET)===te.OFFSET||(this._state&te.TOUCH_OFFSET)===te.TOUCH_OFFSET||(this._state&te.TOUCH_DOLLY_OFFSET)===te.TOUCH_DOLLY_OFFSET||(this._state&te.TOUCH_ZOOM_OFFSET)===te.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(C,O,!0),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},K=()=>{Fg(this._activePointers,fa),h.copy(fa),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",x),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",x),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",J),this._domElement.ownerDocument.addEventListener("pointerlockerror",j),this._domElement.ownerDocument.addEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",x),U())},this.unlockPointer=()=>{var A,C,O;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(A=this._domElement)===null||A===void 0||A.ownerDocument.exitPointerLock(),(C=this._domElement)===null||C===void 0||C.ownerDocument.removeEventListener("pointerlockchange",J),(O=this._domElement)===null||O===void 0||O.ownerDocument.removeEventListener("pointerlockerror",j),this.cancel()};let J=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},j=()=>{this.unlockPointer()};this._addAllEventListeners=A=>{this._domElement=A,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",E),this._domElement.addEventListener("pointercancel",x),this._domElement.addEventListener("wheel",z,{passive:!1}),this._domElement.addEventListener("contextmenu",S)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",E),this._domElement.removeEventListener("pointercancel",x),this._domElement.removeEventListener("wheel",z,{passive:!1}),this._domElement.removeEventListener("contextmenu",S),this._domElement.ownerDocument.removeEventListener("pointermove",T,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",x),this._domElement.ownerDocument.removeEventListener("pointerlockchange",J),this._domElement.ownerDocument.removeEventListener("pointerlockerror",j))},this.cancel=()=>{this._state!==te.NONE&&(this._state=te.NONE,this._activePointers.length=0,K())},v&&this.connect(v),this.update(0)}get camera(){return this._camera}set camera(s){this._camera=s,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._domElement&&(s?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(s){this._spherical.radius===s&&this._sphericalEnd.radius===s||(this._spherical.radius=s,this._sphericalEnd.radius=s,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(s){this._spherical.theta===s&&this._sphericalEnd.theta===s||(this._spherical.theta=s,this._sphericalEnd.theta=s,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(s){this._spherical.phi===s&&this._sphericalEnd.phi===s||(this._spherical.phi=s,this._sphericalEnd.phi=s,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(s){this._boundaryEnclosesCamera=s,this._needsUpdate=!0}set interactiveArea(s){this._interactiveArea.width=Vi(s.width,0,1),this._interactiveArea.height=Vi(s.height,0,1),this._interactiveArea.x=Vi(s.x,0,1-this._interactiveArea.width),this._interactiveArea.y=Vi(s.y,0,1-this._interactiveArea.height)}addEventListener(s,v){super.addEventListener(s,v)}removeEventListener(s,v){super.removeEventListener(s,v)}rotate(s,v,g=!1){return this.rotateTo(this._sphericalEnd.theta+s,this._sphericalEnd.phi+v,g)}rotateAzimuthTo(s,v=!1){return this.rotateTo(s,this._sphericalEnd.phi,v)}rotatePolarTo(s,v=!1){return this.rotateTo(this._sphericalEnd.theta,s,v)}rotateTo(s,v,g=!1){this._isUserControllingRotate=!1;let h=Vi(s,this.minAzimuthAngle,this.maxAzimuthAngle),b=Vi(v,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=h,this._sphericalEnd.phi=b,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,g||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);let E=!g||Tt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Tt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(E)}dolly(s,v=!1){return this.dollyTo(this._sphericalEnd.radius-s,v)}dollyTo(s,v=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=lf.NONE,this._changedDolly=0,this._dollyToNoClamp(Vi(s,this.minDistance,this.maxDistance),v)}_dollyToNoClamp(s,v=!1){let g=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){let b=this._collisionTest(),E=Tt(b,this._spherical.radius);if(!(g>s)&&E)return Promise.resolve();this._sphericalEnd.radius=Math.min(s,b)}else this._sphericalEnd.radius=s;this._needsUpdate=!0,v||(this._spherical.radius=this._sphericalEnd.radius);let h=!v||Tt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(h)}dollyInFixed(s,v=!1){this._targetEnd.add(this._getCameraDirection(im).multiplyScalar(s)),v||this._target.copy(this._targetEnd);let g=!v||Tt(this._target.x,this._targetEnd.x,this.restThreshold)&&Tt(this._target.y,this._targetEnd.y,this.restThreshold)&&Tt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(g)}zoom(s,v=!1){return this.zoomTo(this._zoomEnd+s,v)}zoomTo(s,v=!1){this._isUserControllingZoom=!1,this._zoomEnd=Vi(s,this.minZoom,this.maxZoom),this._needsUpdate=!0,v||(this._zoom=this._zoomEnd);let g=!v||Tt(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(g)}pan(s,v,g=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(s,v,g)}truck(s,v,g=!1){this._camera.updateMatrix(),Er.setFromMatrixColumn(this._camera.matrix,0),Tr.setFromMatrixColumn(this._camera.matrix,1),Er.multiplyScalar(s),Tr.multiplyScalar(-v);let h=Ge.copy(Er).add(Tr),b=ht.copy(this._targetEnd).add(h);return this.moveTo(b.x,b.y,b.z,g)}forward(s,v=!1){Ge.setFromMatrixColumn(this._camera.matrix,0),Ge.crossVectors(this._camera.up,Ge),Ge.multiplyScalar(s);let g=ht.copy(this._targetEnd).add(Ge);return this.moveTo(g.x,g.y,g.z,v)}elevate(s,v=!1){return Ge.copy(this._camera.up).multiplyScalar(s),this.moveTo(this._targetEnd.x+Ge.x,this._targetEnd.y+Ge.y,this._targetEnd.z+Ge.z,v)}moveTo(s,v,g,h=!1){this._isUserControllingTruck=!1;let b=Ge.set(s,v,g).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,b,this.boundaryFriction),this._needsUpdate=!0,h||this._target.copy(this._targetEnd);let E=!h||Tt(this._target.x,this._targetEnd.x,this.restThreshold)&&Tt(this._target.y,this._targetEnd.y,this.restThreshold)&&Tt(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(E)}lookInDirectionOf(s,v,g,h=!1){let b=Ge.set(s,v,g).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(b.x,b.y,b.z,h)}fitToBox(s,v,{cover:g=!1,paddingLeft:h=0,paddingRight:b=0,paddingBottom:E=0,paddingTop:T=0}={}){let x=[],w=s.isBox3?uf.copy(s):uf.setFromObject(s);w.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());let z=a1(this._sphericalEnd.theta,l1),S=a1(this._sphericalEnd.phi,l1);x.push(this.rotateTo(z,S,v));let U=Ge.setFromSpherical(this._sphericalEnd).normalize(),P=c1.setFromUnitVectors(U,Yg),K=Tt(Math.abs(U.y),1);K&&P.multiply(kg.setFromAxisAngle(x0,z)),P.multiply(this._yAxisUpSpaceInverse);let J=s1.makeEmpty();ht.copy(w.min).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.min).setX(w.max.x).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.min).setY(w.max.y).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.max).setZ(w.min.z).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.min).setZ(w.max.z).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.max).setY(w.min.y).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.max).setX(w.min.x).applyQuaternion(P),J.expandByPoint(ht),ht.copy(w.max).applyQuaternion(P),J.expandByPoint(ht),J.min.x-=h,J.min.y-=E,J.max.x+=b,J.max.y+=T,P.setFromUnitVectors(Yg,U),K&&P.premultiply(kg.invert()),P.premultiply(this._yAxisUpSpace);let j=J.getSize(Ge),A=J.getCenter(ht).applyQuaternion(P);if(zs(this._camera)){let C=this.getDistanceToFitBox(j.x,j.y,j.z,g);x.push(this.moveTo(A.x,A.y,A.z,v)),x.push(this.dollyTo(C,v)),x.push(this.setFocalOffset(0,0,0,v))}else if(fo(this._camera)){let C=this._camera,O=C.right-C.left,M=C.top-C.bottom,H=g?Math.max(O/j.x,M/j.y):Math.min(O/j.x,M/j.y);x.push(this.moveTo(A.x,A.y,A.z,v)),x.push(this.zoomTo(H,v)),x.push(this.setFocalOffset(0,0,0,v))}return Promise.all(x)}fitToSphere(s,v){let g=[],h="isObject3D"in s?np.createBoundingSphere(s,qg):qg.copy(s);if(g.push(this.moveTo(h.center.x,h.center.y,h.center.z,v)),zs(this._camera)){let b=this.getDistanceToFitSphere(h.radius);g.push(this.dollyTo(b,v))}else if(fo(this._camera)){let b=this._camera.right-this._camera.left,E=this._camera.top-this._camera.bottom,T=2*h.radius,x=Math.min(b/T,E/T);g.push(this.zoomTo(x,v))}return g.push(this.setFocalOffset(0,0,0,v)),Promise.all(g)}setLookAt(s,v,g,h,b,E,T=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=lf.NONE,this._changedDolly=0;let x=ht.set(h,b,E),w=Ge.set(s,v,g);this._targetEnd.copy(x),this._sphericalEnd.setFromVector3(w.sub(x).applyQuaternion(this._yAxisUpSpace)),this.normalizeRotations(),this._needsUpdate=!0,T||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let z=!T||Tt(this._target.x,this._targetEnd.x,this.restThreshold)&&Tt(this._target.y,this._targetEnd.y,this.restThreshold)&&Tt(this._target.z,this._targetEnd.z,this.restThreshold)&&Tt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Tt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&Tt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(z)}lerpLookAt(s,v,g,h,b,E,T,x,w,z,S,U,P,K=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=lf.NONE,this._changedDolly=0;let J=Ge.set(h,b,E),j=ht.set(s,v,g);ni.setFromVector3(j.sub(J).applyQuaternion(this._yAxisUpSpace));let A=rf.set(z,S,U),C=ht.set(T,x,w);rm.setFromVector3(C.sub(A).applyQuaternion(this._yAxisUpSpace)),this._targetEnd.copy(J.lerp(A,P));let O=rm.theta-ni.theta,M=rm.phi-ni.phi,H=rm.radius-ni.radius;this._sphericalEnd.set(ni.radius+H*P,ni.phi+M*P,ni.theta+O*P),this.normalizeRotations(),this._needsUpdate=!0,K||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));let L=!K||Tt(this._target.x,this._targetEnd.x,this.restThreshold)&&Tt(this._target.y,this._targetEnd.y,this.restThreshold)&&Tt(this._target.z,this._targetEnd.z,this.restThreshold)&&Tt(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&Tt(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&Tt(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(L)}setPosition(s,v,g,h=!1){return this.setLookAt(s,v,g,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,h)}setTarget(s,v,g,h=!1){let b=this.getPosition(Ge),E=this.setLookAt(b.x,b.y,b.z,s,v,g,h);return this._sphericalEnd.phi=Vi(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),E}setFocalOffset(s,v,g,h=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(s,v,g),this._needsUpdate=!0,h||this._focalOffset.copy(this._focalOffsetEnd);let b=!h||Tt(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&Tt(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&Tt(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(b)}setOrbitPoint(s,v,g){this._camera.updateMatrixWorld(),Er.setFromMatrixColumn(this._camera.matrixWorldInverse,0),Tr.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Es.setFromMatrixColumn(this._camera.matrixWorldInverse,2);let h=Ge.set(s,v,g),b=h.distanceTo(this._camera.position),E=h.sub(this._camera.position);Er.multiplyScalar(E.x),Tr.multiplyScalar(E.y),Es.multiplyScalar(E.z),Ge.copy(Er).add(Tr).add(Es),Ge.z=Ge.z+b,this.dollyTo(b,!1),this.setFocalOffset(-Ge.x,Ge.y,-Ge.z,!1),this.moveTo(s,v,g,!1)}setBoundary(s){if(!s){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(s),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(s,v,g,h){if(s===null){this._viewport=null;return}this._viewport=this._viewport||new Be.Vector4,typeof s=="number"?this._viewport.set(s,v,g,h):this._viewport.copy(s)}getDistanceToFitBox(s,v,g,h=!1){if(jg(this._camera,"getDistanceToFitBox"))return this._spherical.radius;let b=s/v,E=this._camera.getEffectiveFOV()*nm,T=this._camera.aspect;return((h?b>T:b<T)?v:s/T)*.5/Math.tan(E*.5)+g*.5}getDistanceToFitSphere(s){if(jg(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;let v=this._camera.getEffectiveFOV()*nm,g=Math.atan(Math.tan(v*.5)*this._camera.aspect)*2,h=1<this._camera.aspect?v:g;return s/Math.sin(h*.5)}getTarget(s,v=!0){return(s&&s.isVector3?s:new Be.Vector3).copy(v?this._targetEnd:this._target)}getPosition(s,v=!0){return(s&&s.isVector3?s:new Be.Vector3).setFromSpherical(v?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(v?this._targetEnd:this._target)}getSpherical(s,v=!0){return(s||new Be.Spherical).copy(v?this._sphericalEnd:this._spherical)}getFocalOffset(s,v=!0){return(s&&s.isVector3?s:new Be.Vector3).copy(v?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){this._sphericalEnd.theta=this._sphericalEnd.theta%af,this._sphericalEnd.theta<0&&(this._sphericalEnd.theta+=af),this._spherical.theta+=af*Math.round((this._sphericalEnd.theta-this._spherical.theta)/af)}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(s=!1){if(!Tt(this._camera.up.x,this._cameraUp0.x)||!Tt(this._camera.up.y,this._cameraUp0.y)||!Tt(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);let g=this.getPosition(Ge);this.updateCameraUp(),this.setPosition(g.x,g.y,g.z)}let v=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,s),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,s),this.zoomTo(this._zoom0,s)];return Promise.all(v)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,x0),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){let s=Ge.subVectors(this._target,this._camera.position).normalize(),v=ht.crossVectors(s,this._camera.up);this._camera.up.crossVectors(v,s).normalize(),this._camera.updateMatrixWorld();let g=this.getPosition(Ge);this.updateCameraUp(),this.setPosition(g.x,g.y,g.z)}update(s){let v=this._sphericalEnd.theta-this._spherical.theta,g=this._sphericalEnd.phi-this._spherical.phi,h=this._sphericalEnd.radius-this._spherical.radius,b=u1.subVectors(this._targetEnd,this._target),E=o1.subVectors(this._focalOffsetEnd,this._focalOffset),T=this._zoomEnd-this._zoom;if(kt(v))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{let z=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=C0(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,z,1/0,s),this._needsUpdate=!0}if(kt(g))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{let z=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=C0(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,z,1/0,s),this._needsUpdate=!0}if(kt(h))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{let z=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=C0(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,z,this.maxSpeed,s),this._needsUpdate=!0}if(kt(b.x)&&kt(b.y)&&kt(b.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{let z=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;i1(this._target,this._targetEnd,this._targetVelocity,z,this.maxSpeed,s,this._target),this._needsUpdate=!0}if(kt(E.x)&&kt(E.y)&&kt(E.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{let z=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;i1(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,z,this.maxSpeed,s,this._focalOffset),this._needsUpdate=!0}if(kt(T))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{let z=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=C0(this._zoom,this._zoomEnd,this._zoomVelocity,z,1/0,s)}if(this.dollyToCursor){if(zs(this._camera)&&this._changedDolly!==0){let z=this._spherical.radius-this._lastDistance,S=this._camera,U=this._getCameraDirection(im),P=Ge.copy(U).cross(S.up).normalize();P.lengthSq()===0&&(P.x=1);let K=ht.crossVectors(P,U),J=this._sphericalEnd.radius*Math.tan(S.getEffectiveFOV()*nm*.5),j=(this._sphericalEnd.radius-z-this._sphericalEnd.radius)/this._sphericalEnd.radius,A=rf.copy(this._targetEnd).add(P.multiplyScalar(this._dollyControlCoord.x*J*S.aspect)).add(K.multiplyScalar(this._dollyControlCoord.y*J)),C=Ge.copy(this._targetEnd).lerp(A,j),O=this._lastDollyDirection===lf.IN&&this._spherical.radius<=this.minDistance,M=this._lastDollyDirection===lf.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(O||M)){this._sphericalEnd.radius-=z,this._spherical.radius-=z;let L=ht.copy(U).multiplyScalar(-z);C.add(L)}this._boundary.clampPoint(C,C);let H=ht.subVectors(C,this._targetEnd);this._targetEnd.copy(C),this._target.add(H),this._changedDolly-=z,kt(this._changedDolly)&&(this._changedDolly=0)}else if(fo(this._camera)&&this._changedZoom!==0){let z=this._zoom-this._lastZoom,S=this._camera,U=Ge.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(S.near+S.far)/(S.near-S.far)).unproject(S),P=ht.set(0,0,-1).applyQuaternion(S.quaternion),K=rf.copy(U).add(P.multiplyScalar(-U.dot(S.up))),J=-(this._zoom-z-this._zoom)/this._zoom,j=this._getCameraDirection(im),A=this._targetEnd.dot(j),C=Ge.copy(this._targetEnd).lerp(K,J),O=C.dot(j),M=j.multiplyScalar(O-A);C.sub(M),this._boundary.clampPoint(C,C);let H=ht.subVectors(C,this._targetEnd);this._targetEnd.copy(C),this._target.add(H),this._changedZoom-=z,kt(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;let x=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,x),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!kt(this._focalOffset.x)||!kt(this._focalOffset.y)||!kt(this._focalOffset.z))&&(this._camera.updateMatrixWorld(),Er.setFromMatrixColumn(this._camera.matrix,0),Tr.setFromMatrixColumn(this._camera.matrix,1),Es.setFromMatrixColumn(this._camera.matrix,2),Er.multiplyScalar(this._focalOffset.x),Tr.multiplyScalar(-this._focalOffset.y),Es.multiplyScalar(this._focalOffset.z),Ge.copy(Er).add(Tr).add(Es),this._camera.position.add(Ge)),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),Ge.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);let w=this._needsUpdate;return w&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):w?(this.dispatchEvent({type:"update"}),kt(v,this.restThreshold)&&kt(g,this.restThreshold)&&kt(h,this.restThreshold)&&kt(b.x,this.restThreshold)&&kt(b.y,this.restThreshold)&&kt(b.z,this.restThreshold)&&kt(E.x,this.restThreshold)&&kt(E.y,this.restThreshold)&&kt(E.z,this.restThreshold)&&kt(T,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!w&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=w,this._needsUpdate=!1,w}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:lm(this.maxDistance),minZoom:this.minZoom,maxZoom:lm(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:lm(this.maxPolarAngle),minAzimuthAngle:lm(this.minAzimuthAngle),maxAzimuthAngle:lm(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,verticalDragToForward:this.verticalDragToForward,target:this._targetEnd.toArray(),position:Ge.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(s,v=!1){let g=JSON.parse(s);this.enabled=g.enabled,this.minDistance=g.minDistance,this.maxDistance=am(g.maxDistance),this.minZoom=g.minZoom,this.maxZoom=am(g.maxZoom),this.minPolarAngle=g.minPolarAngle,this.maxPolarAngle=am(g.maxPolarAngle),this.minAzimuthAngle=am(g.minAzimuthAngle),this.maxAzimuthAngle=am(g.maxAzimuthAngle),this.smoothTime=g.smoothTime,this.draggingSmoothTime=g.draggingSmoothTime,this.dollySpeed=g.dollySpeed,this.truckSpeed=g.truckSpeed,this.dollyToCursor=g.dollyToCursor,this.verticalDragToForward=g.verticalDragToForward,this._target0.fromArray(g.target0),this._position0.fromArray(g.position0),this._zoom0=g.zoom0,this._focalOffset0.fromArray(g.focalOffset0),this.moveTo(g.target[0],g.target[1],g.target[2],v),ni.setFromVector3(Ge.fromArray(g.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(ni.theta,ni.phi,v),this.dollyTo(ni.radius,v),this.zoomTo(g.zoom,v),this.setFocalOffset(g.focalOffset[0],g.focalOffset[1],g.focalOffset[2],v),this._needsUpdate=!0}connect(s){if(this._domElement){console.warn("camera-controls is already connected.");return}s.setAttribute("data-camera-controls-version",wb),this._addAllEventListeners(s),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(s){return s.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(s){return this._getTargetDirection(s).negate()}_findPointerById(s){return this._activePointers.find(v=>v.pointerId===s)}_findPointerByMouseButton(s){return this._activePointers.find(v=>v.mouseButton===s)}_disposePointer(s){this._activePointers.splice(this._activePointers.indexOf(s),1)}_encloseToBoundary(s,v,g){let h=v.lengthSq();if(h===0)return s;let b=ht.copy(v).add(s),E=this._boundary.clampPoint(b,rf).sub(b),T=E.lengthSq();if(T===0)return s.add(v);if(T===h)return s;if(g===0)return s.add(v).add(E);{let x=1+g*T/v.dot(E);return s.add(ht.copy(v).multiplyScalar(x)).add(E.multiplyScalar(1-g))}}_updateNearPlaneCorners(){if(zs(this._camera)){let s=this._camera,v=s.near,g=s.getEffectiveFOV()*nm,h=Math.tan(g*.5)*v,b=h*s.aspect;this._nearPlaneCorners[0].set(-b,-h,0),this._nearPlaneCorners[1].set(b,-h,0),this._nearPlaneCorners[2].set(b,h,0),this._nearPlaneCorners[3].set(-b,h,0)}else if(fo(this._camera)){let s=this._camera,v=1/s.zoom,g=s.left*v,h=s.right*v,b=s.top*v,E=s.bottom*v;this._nearPlaneCorners[0].set(g,b,0),this._nearPlaneCorners[1].set(h,b,0),this._nearPlaneCorners[2].set(h,E,0),this._nearPlaneCorners[3].set(g,E,0)}}_collisionTest(){let s=1/0;if(!(this.colliderMeshes.length>=1)||jg(this._camera,"_collisionTest"))return s;let v=this._getTargetDirection(im);Gg.lookAt(r1,v,this._camera.up);for(let g=0;g<4;g++){let h=ht.copy(this._nearPlaneCorners[g]);h.applyMatrix4(Gg);let b=rf.addVectors(this._target,h);S0.set(b,v),S0.far=this._spherical.radius+1;let E=S0.intersectObjects(this.colliderMeshes);E.length!==0&&E[0].distance<s&&(s=E[0].distance)}return s}_getClientRect(s){if(!this._domElement)return;let v=this._domElement.getBoundingClientRect();return s.x=v.left,s.y=v.top,this._viewport?(s.x+=this._viewport.x,s.y+=v.height-this._viewport.w-this._viewport.y,s.width=this._viewport.z,s.height=this._viewport.w):(s.width=v.width,s.height=v.height),s}_createOnRestPromise(s){return s?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(v=>{let g=()=>{this.removeEventListener("rest",g),v()};this.addEventListener("rest",g)}))}_addAllEventListeners(s){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(s){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(s){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(s,v=new Be.Sphere){let g=v,h=g.center;uf.makeEmpty(),s.traverseVisible(E=>{E.isMesh&&uf.expandByObject(E)}),uf.getCenter(h);let b=0;return s.traverseVisible(E=>{if(!E.isMesh)return;let T=E,x=T.geometry.clone();x.applyMatrix4(T.matrixWorld);let w=x.attributes.position;for(let z=0,S=w.count;z<S;z++)Ge.fromBufferAttribute(w,z),b=Math.max(b,h.distanceToSquared(Ge))}),g.radius=Math.sqrt(b),g}};function Nb(d){var s=d,{smoothTime:v=.05}=s,g=Ds(s,["smoothTime"]);ji.install({THREE:Ye}),N1({CameraControls:ji});let h=Rl(w=>w.camera),b=Rl(w=>w.gl),E=Tb(g),[T,x]=ue.useState(!1);return ue.useEffect(()=>{let w=E.current;if(!w)return;let{type:z,onCameraUpdate:S}=g||{};if(!S)return;let U=A=>Math.round(A*180/Math.PI),P=()=>({cAzimuthAngle:U(w.azimuthAngle),cPolarAngle:U(w.polarAngle)}),K=()=>{var A;let C={};if(z==="sphere"){let O=w?.zoom;if(Number.isFinite(O))C.cameraZoom=Number(O.toFixed(2));else{let M=(A=w?.camera)==null?void 0:A.zoom;Number.isFinite(M)&&(C.cameraZoom=Number(M.toFixed(2)))}}else Number.isFinite(w.distance)&&(C.cDistance=Number(w.distance.toFixed(2)));return C},J=()=>{x(!0)},j=()=>{x(!1),S(Zt(Zt({},P()),K()))};return w.addEventListener("controlstart",J),w.addEventListener("rest",j),()=>{w.removeEventListener("controlstart",J),w.removeEventListener("rest",j)}},[E,g]),se.jsx("cameraControls",{ref:E,args:[h,b.domElement],smoothTime:T?0:v,zoomSpeed:10,dollySpeed:5,maxDistance:1e3,restThreshold:.01,mouseButtons:{left:ji.ACTION.ROTATE,middle:g.type==="sphere"?ji.ACTION.ZOOM:ji.ACTION.DOLLY,right:ji.ACTION.NONE,wheel:g.type==="sphere"?ji.ACTION.ZOOM:ji.ACTION.DOLLY},touches:{one:ji.ACTION.ROTATE,two:ji.ACTION.NONE,three:ji.ACTION.NONE}})}function Ob(d){return se.jsx(se.Fragment,{children:se.jsx(Nb,Zt({},d))})}var Rb=class extends v_{constructor(d){super(d),this.type=p0}parse(d){let s=function(j,A){switch(j){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(A||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(A||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(A||""))}},v=`
`,g=function(j,A,C){A=A||1024;let O=j.pos,M=-1,H=0,L="",Z=String.fromCharCode.apply(null,new Uint16Array(j.subarray(O,O+128)));for(;0>(M=Z.indexOf(v))&&H<A&&O<j.byteLength;)L+=Z,H+=Z.length,O+=128,Z+=String.fromCharCode.apply(null,new Uint16Array(j.subarray(O,O+128)));return-1<M?(j.pos+=H+M+1,L+Z.slice(0,M)):!1},h=function(j){let A=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},Z,W;for((j.pos>=j.byteLength||!(Z=g(j)))&&s(1,"no header found"),(W=Z.match(A))||s(3,"bad initial token"),L.valid|=1,L.programtype=W[1],L.string+=Z+`
`;Z=g(j),Z!==!1;){if(L.string+=Z+`
`,Z.charAt(0)==="#"){L.comments+=Z+`
`;continue}if((W=Z.match(C))&&(L.gamma=parseFloat(W[1])),(W=Z.match(O))&&(L.exposure=parseFloat(W[1])),(W=Z.match(M))&&(L.valid|=2,L.format=W[1]),(W=Z.match(H))&&(L.valid|=4,L.height=parseInt(W[1],10),L.width=parseInt(W[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||s(3,"missing format specifier"),L.valid&4||s(3,"missing image size specifier"),L},b=function(j,A,C){let O=A;if(O<8||O>32767||j[0]!==2||j[1]!==2||j[2]&128)return new Uint8Array(j);O!==(j[2]<<8|j[3])&&s(3,"wrong scanline width");let M=new Uint8Array(4*A*C);M.length||s(4,"unable to allocate buffer space");let H=0,L=0,Z=4*O,W=new Uint8Array(4),de=new Uint8Array(Z),me=C;for(;me>0&&L<j.byteLength;){L+4>j.byteLength&&s(1),W[0]=j[L++],W[1]=j[L++],W[2]=j[L++],W[3]=j[L++],(W[0]!=2||W[1]!=2||(W[2]<<8|W[3])!=O)&&s(3,"bad rgbe scanline format");let Te=0,xe;for(;Te<Z&&L<j.byteLength;){xe=j[L++];let tt=xe>128;if(tt&&(xe-=128),(xe===0||Te+xe>Z)&&s(3,"bad scanline data"),tt){let Oe=j[L++];for(let ce=0;ce<xe;ce++)de[Te++]=Oe}else de.set(j.subarray(L,L+xe),Te),Te+=xe,L+=xe}let et=O;for(let tt=0;tt<et;tt++){let Oe=0;M[H]=de[tt+Oe],Oe+=O,M[H+1]=de[tt+Oe],Oe+=O,M[H+2]=de[tt+Oe],Oe+=O,M[H+3]=de[tt+Oe],H+=4}me--}return M},E=function(j,A,C,O){let M=j[A+3],H=Math.pow(2,M-128)/255;C[O+0]=j[A+0]*H,C[O+1]=j[A+1]*H,C[O+2]=j[A+2]*H,C[O+3]=1},T=function(j,A,C,O){let M=j[A+3],H=Math.pow(2,M-128)/255;C[O+0]=h0.toHalfFloat(Math.min(j[A+0]*H,65504)),C[O+1]=h0.toHalfFloat(Math.min(j[A+1]*H,65504)),C[O+2]=h0.toHalfFloat(Math.min(j[A+2]*H,65504)),C[O+3]=h0.toHalfFloat(1)},x=new Uint8Array(d);x.pos=0;let w=h(x),z=w.width,S=w.height,U=b(x.subarray(x.pos),z,S),P,K,J;switch(this.type){case bg:J=U.length/4;let j=new Float32Array(J*4);for(let C=0;C<J;C++)E(U,C*4,j,C*4);P=j,K=bg;break;case p0:J=U.length/4;let A=new Uint16Array(J*4);for(let C=0;C<J;C++)T(U,C*4,A,C*4);P=A,K=p0;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:z,height:S,data:P,header:w.string,gamma:w.gamma,exposure:w.exposure,type:K}}setDataType(d){return this.type=d,this}load(d,s,v,g){function h(b,E){switch(b.type){case bg:case p0:"colorSpace"in b?b.colorSpace="srgb-linear":b.encoding=3e3,b.minFilter=E0,b.magFilter=E0,b.generateMipmaps=!1,b.flipY=!0;break}s&&s(b,E)}return super.load(d,h,v,g)}};new h1;new ru;parseInt(f_.replace(/\D+/g,""));new mm;new ru;new ru;new mm;new mm;new mm;new ru;new y1;new d_;new ru;new h1;new m_;new mm;function Qg(d,{path:s}){return gp(Rb,d,v=>v.setPath(s))}var Bb=ue.createContext({}),Lb=()=>ue.useContext(Bb),Mb=d=>d.current&&d.current.isScene,Ub=d=>Mb(d)?d.current:d;function Pb({background:d=!1,envPreset:s}){let{envBasePath:v}=Lb(),g=v||Eb,h=Qg("city.hdr",{path:g}),b=Qg("dawn.hdr",{path:g}),E=Qg("lobby.hdr",{path:g}),T={city:h,dawn:b,lobby:E}[s],x=Rl(z=>z.scene);At.useLayoutEffect(()=>{if(T){let z=Ub(x);z.background;let S=z.environment;return d!=="only"&&(z.environment=T),d&&(z.background=T),()=>{d!=="only"&&(z.environment=S),d&&(z.background="black")}}},[x,T,d]);let w=T;return w.mapping=g_,null}function Hb({lightType:d,brightness:s,envPreset:v}){return se.jsxs(se.Fragment,{children:[d==="3d"&&se.jsx("ambientLight",{intensity:(s||1)*Math.PI}),d==="env"&&se.jsx(ue.Suspense,{fallback:se.jsx(Fb,{}),children:se.jsx(Pb,{envPreset:v,background:!1,loadingCallback:()=>{}})})]})}function Fb(){return se.jsx("ambientLight",{intensity:.4})}function jb(d,s){let v=Rl(h=>h.pointer),[g]=ue.useState(()=>{let h=new p_;return function(b,E){h.setFromCamera(v,d instanceof h_?d:d.current);let T=this.constructor.prototype.raycast.bind(this);T&&T(h,E)}});return g}function Vb(d,s,v){let{gl:g,size:h,viewport:b}=Rl(),E=typeof d=="number"?d:h.width*b.dpr,T=h.height*b.dpr,x=(typeof d=="number"?v:d)||{},{samples:w}=x,z=Ds(x,["samples"]),S=ue.useMemo(()=>{let U;return U=new Ye.WebGLRenderTarget(E,T,Zt({minFilter:Ye.LinearFilter,magFilter:Ye.LinearFilter,encoding:g.outputEncoding,type:Ye.HalfFloatType},z)),U.samples=w,U},[]);return ue.useLayoutEffect(()=>{S.setSize(E,T),w&&(S.samples=w)},[w,S,E,T]),ue.useEffect(()=>()=>S.dispose(),[]),S}function Yb(d,s){if(typeof d=="function")return d(s);d&&(d.current=s)}function qb(d){return s=>{for(let v of d)Yb(v,s)}}var kb=d=>typeof d=="function",Gb=ue.forwardRef((d,s)=>{var v=d,{envMap:g,resolution:h=256,frames:b=1/0,children:E,makeDefault:T}=v,x=Ds(v,["envMap","resolution","frames","children","makeDefault"]);let w=Rl(({set:C})=>C),z=Rl(({camera:C})=>C),S=Rl(({size:C})=>C),U=ue.useRef(null),P=ue.useRef(null),K=Vb(h);ue.useLayoutEffect(()=>{x.manual||U.current.updateProjectionMatrix()},[S,x]),ue.useLayoutEffect(()=>{U.current.updateProjectionMatrix()}),ue.useLayoutEffect(()=>{if(T){let C=z;return w(()=>({camera:U.current})),()=>w(()=>({camera:C}))}},[U,T,w]);let J=0,j=null,A=kb(E);return pm(C=>{A&&(b===1/0||J<b)&&(P.current.visible=!1,C.gl.setRenderTarget(K),j=C.scene.background,g&&(C.scene.background=g),C.gl.render(C.scene,U.current),C.scene.background=j,C.gl.setRenderTarget(null),P.current.visible=!0,J++)}),se.jsxs(se.Fragment,{children:[se.jsx("orthographicCamera",hm(Zt({left:S.width/-2,right:S.width/2,top:S.height/2,bottom:S.height/-2,ref:qb([U,s])},x),{children:!A&&E})),se.jsx("group",{ref:P,children:A&&E(K.texture)})]})}),ry=ue.createContext({}),Qb=()=>ue.useContext(ry),Ib=2*Math.PI,f1=new __,d1=new y1,[of,Ig]=[new _h,new _h],m1=new ru,v1=new ru,Zb=d=>"minPolarAngle"in d,Xb=({alignment:d="bottom-right",margin:s=[80,80],renderPriority:v=0,autoClear:g=!0,onUpdate:h,onTarget:b,children:E})=>{let T=Rl(({size:xe})=>xe),x=Rl(({camera:xe})=>xe),w=Rl(({controls:xe})=>xe),z=Rl(({gl:xe})=>xe),S=Rl(({scene:xe})=>xe),U=Rl(({invalidate:xe})=>xe),P=ue.useRef(),K=ue.useRef(),J=ue.useRef(null),[j]=ue.useState(()=>new y_),A=ue.useRef(!1),C=ue.useRef(0),O=ue.useRef(new ru(0,0,0)),M=ue.useRef(new ru(0,0,0));ue.useEffect(()=>{M.current.copy(x.up)},[x]);let H=ue.useCallback(xe=>{A.current=!0,(w||b)&&(O.current=w?.target||b?.()),C.current=x.position.distanceTo(m1),of.copy(x.quaternion),v1.copy(xe).multiplyScalar(C.current).add(m1),f1.lookAt(v1),Ig.copy(f1.quaternion),U()},[w,x,b,U]);ue.useEffect(()=>(S.background&&(P.current=S.background,S.background=null,j.background=P.current),()=>{P.current&&(S.background=P.current)}),[]),pm((xe,et)=>{var tt;if(J.current&&K.current){if(A.current)if(of.angleTo(Ig)<.01)A.current=!1,Zb(w)&&x.up.copy(M.current);else{let Oe=et*Ib;of.rotateTowards(Ig,Oe),x.position.set(0,0,1).applyQuaternion(of).multiplyScalar(C.current).add(O.current),x.up.set(0,1,0).applyQuaternion(of).normalize(),x.quaternion.copy(of),h?h():w&&w.update(),U()}d1.copy(x.matrix).invert(),(tt=K.current)==null||tt.quaternion.setFromRotationMatrix(d1),g&&(z.autoClear=!1),z.clearDepth(),z.render(j,J.current)}},v);let L=jb(J),Z=ue.useMemo(()=>({tweenCamera:H,raycast:L}),[H]),[W,de]=s,me=d.endsWith("-center")?0:d.endsWith("-left")?-T.width/2+W:T.width/2-W,Te=d.startsWith("center-")?0:d.startsWith("top-")?T.height/2-de:-T.height/2+de;return $3(se.jsxs(ry.Provider,{value:Z,children:[se.jsx(Gb,{ref:J,position:[0,0,200]}),se.jsx("group",{ref:K,position:[me,Te,0],children:E})]}),j)};function Zg({scale:d=[.8,.05,.05],color:s,rotation:v}){return se.jsx("group",{rotation:v,children:se.jsxs("mesh",{position:[.4,0,0],children:[se.jsx("boxGeometry",{args:d}),se.jsx("meshBasicMaterial",{color:s,toneMapped:!1})]})})}function sf(d){var s=d,{onClick:v,font:g,disabled:h,arcStyle:b,label:E,labelColor:T,axisHeadScale:x=1}=s,w=Ds(s,["onClick","font","disabled","arcStyle","label","labelColor","axisHeadScale"]);let z=Rl(J=>J.gl),S=ue.useMemo(()=>{let J=document.createElement("canvas");J.width=64,J.height=64;let j=J.getContext("2d");return j.beginPath(),j.arc(32,32,16,0,2*Math.PI),j.closePath(),j.fillStyle=b,j.fill(),E&&(j.font=g,j.textAlign="center",j.fillStyle=T,j.fillText(E,32,41)),new C_(J)},[b,E,T,g]),[U,P]=ue.useState(!1),K=(E?1:.75)*(U?1.2:1)*x;return se.jsx("sprite",hm(Zt({scale:K,onPointerOver:h?void 0:J=>{J.stopPropagation(),P(!0)},onPointerOut:h?void 0:v||(J=>{J.stopPropagation(),P(!1)})},w),{children:se.jsx("spriteMaterial",{map:S,"map-encoding":z.outputEncoding,"map-anisotropy":z.capabilities.getMaxAnisotropy()||1,alphaTest:.3,opacity:E?1:.75,toneMapped:!1})}))}var Kb=d=>{var s=d,{hideNegativeAxes:v,hideAxisHeads:g,disabled:h,font:b="18px Inter var, Arial, sans-serif",axisColors:E=["#ff2060","#20df80","#2080ff"],axisHeadScale:T=1,axisScale:x,labels:w=["X","Y","Z"],labelColor:z="#000",onClick:S}=s,U=Ds(s,["hideNegativeAxes","hideAxisHeads","disabled","font","axisColors","axisHeadScale","axisScale","labels","labelColor","onClick"]);let[P,K,J]=E,{tweenCamera:j,raycast:A}=Qb(),C={font:b,disabled:h,labelColor:z,raycast:A,onClick:S,axisHeadScale:T,onPointerDown:h?void 0:O=>{j(O.object.position),O.stopPropagation()}};return se.jsxs("group",hm(Zt({scale:40},U),{children:[se.jsx(Zg,{color:P,rotation:[0,0,0],scale:x}),se.jsx(Zg,{color:K,rotation:[0,0,Math.PI/2],scale:x}),se.jsx(Zg,{color:J,rotation:[0,-Math.PI/2,0],scale:x}),!g&&se.jsxs(se.Fragment,{children:[se.jsx(sf,Zt({arcStyle:P,position:[1,0,0],label:w[0]},C)),se.jsx(sf,Zt({arcStyle:K,position:[0,1,0],label:w[1]},C)),se.jsx(sf,Zt({arcStyle:J,position:[0,0,1],label:w[2]},C)),!v&&se.jsxs(se.Fragment,{children:[se.jsx(sf,Zt({arcStyle:P,position:[-1,0,0]},C)),se.jsx(sf,Zt({arcStyle:K,position:[0,-1,0]},C)),se.jsx(sf,Zt({arcStyle:J,position:[0,0,-1]},C))]})]}),se.jsx("ambientLight",{intensity:.5}),se.jsx("pointLight",{position:[10,10,10],intensity:.5})]}))};function Jb({margin:d=[65,110]}){return se.jsx(se.Fragment,{children:se.jsx(Xb,{alignment:"bottom-right",margin:d,renderPriority:2,children:se.jsx(Kb,{axisColors:["#FF430A","#FF430A","#FF430A"],labelColor:"white",hideNegativeAxes:!0,axisHeadScale:.8})})})}var $b={halo:{props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"disabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}}},Wb=ym((d,s)=>{s.exports=v=>encodeURIComponent(v).replace(/[!'()*]/g,g=>`%${g.charCodeAt(0).toString(16).toUpperCase()}`)}),ex=ym((d,s)=>{var v="%[a-f0-9]{2}",g=new RegExp("("+v+")|([^%]+?)","gi"),h=new RegExp("("+v+")+","gi");function b(x,w){try{return[decodeURIComponent(x.join(""))]}catch{}if(x.length===1)return x;w=w||1;var z=x.slice(0,w),S=x.slice(w);return Array.prototype.concat.call([],b(z),b(S))}function E(x){try{return decodeURIComponent(x)}catch{for(var w=x.match(g)||[],z=1;z<w.length;z++)x=b(w,z).join(""),w=x.match(g)||[];return x}}function T(x){for(var w={"%FE%FF":"��","%FF%FE":"��"},z=h.exec(x);z;){try{w[z[0]]=decodeURIComponent(z[0])}catch{var S=E(z[0]);S!==z[0]&&(w[z[0]]=S)}z=h.exec(x)}w["%C2"]="�";for(var U=Object.keys(w),P=0;P<U.length;P++){var K=U[P];x=x.replace(new RegExp(K,"g"),w[K])}return x}s.exports=function(x){if(typeof x!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof x+"`");try{return x=x.replace(/\+/g," "),decodeURIComponent(x)}catch{return T(x)}}}),tx=ym((d,s)=>{s.exports=(v,g)=>{if(!(typeof v=="string"&&typeof g=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(g==="")return[v];let h=v.indexOf(g);return h===-1?[v]:[v.slice(0,h),v.slice(h+g.length)]}}),nx=ym((d,s)=>{s.exports=function(v,g){for(var h={},b=Object.keys(v),E=Array.isArray(g),T=0;T<b.length;T++){var x=b[T],w=v[x];(E?g.indexOf(x)!==-1:g(x,w,v))&&(h[x]=w)}return h}}),lx=ym(d=>{var s=Wb(),v=ex(),g=tx(),h=nx(),b=C=>C==null,E=Symbol("encodeFragmentIdentifier");function T(C){switch(C.arrayFormat){case"index":return O=>(M,H)=>{let L=M.length;return H===void 0||C.skipNull&&H===null||C.skipEmptyString&&H===""?M:H===null?[...M,[z(O,C),"[",L,"]"].join("")]:[...M,[z(O,C),"[",z(L,C),"]=",z(H,C)].join("")]};case"bracket":return O=>(M,H)=>H===void 0||C.skipNull&&H===null||C.skipEmptyString&&H===""?M:H===null?[...M,[z(O,C),"[]"].join("")]:[...M,[z(O,C),"[]=",z(H,C)].join("")];case"colon-list-separator":return O=>(M,H)=>H===void 0||C.skipNull&&H===null||C.skipEmptyString&&H===""?M:H===null?[...M,[z(O,C),":list="].join("")]:[...M,[z(O,C),":list=",z(H,C)].join("")];case"comma":case"separator":case"bracket-separator":{let O=C.arrayFormat==="bracket-separator"?"[]=":"=";return M=>(H,L)=>L===void 0||C.skipNull&&L===null||C.skipEmptyString&&L===""?H:(L=L===null?"":L,H.length===0?[[z(M,C),O,z(L,C)].join("")]:[[H,z(L,C)].join(C.arrayFormatSeparator)])}default:return O=>(M,H)=>H===void 0||C.skipNull&&H===null||C.skipEmptyString&&H===""?M:H===null?[...M,z(O,C)]:[...M,[z(O,C),"=",z(H,C)].join("")]}}function x(C){let O;switch(C.arrayFormat){case"index":return(M,H,L)=>{if(O=/\[(\d*)\]$/.exec(M),M=M.replace(/\[\d*\]$/,""),!O){L[M]=H;return}L[M]===void 0&&(L[M]={}),L[M][O[1]]=H};case"bracket":return(M,H,L)=>{if(O=/(\[\])$/.exec(M),M=M.replace(/\[\]$/,""),!O){L[M]=H;return}if(L[M]===void 0){L[M]=[H];return}L[M]=[].concat(L[M],H)};case"colon-list-separator":return(M,H,L)=>{if(O=/(:list)$/.exec(M),M=M.replace(/:list$/,""),!O){L[M]=H;return}if(L[M]===void 0){L[M]=[H];return}L[M]=[].concat(L[M],H)};case"comma":case"separator":return(M,H,L)=>{let Z=typeof H=="string"&&H.includes(C.arrayFormatSeparator),W=typeof H=="string"&&!Z&&S(H,C).includes(C.arrayFormatSeparator);H=W?S(H,C):H;let de=Z||W?H.split(C.arrayFormatSeparator).map(me=>S(me,C)):H===null?H:S(H,C);L[M]=de};case"bracket-separator":return(M,H,L)=>{let Z=/(\[\])$/.test(M);if(M=M.replace(/\[\]$/,""),!Z){L[M]=H&&S(H,C);return}let W=H===null?[]:H.split(C.arrayFormatSeparator).map(de=>S(de,C));if(L[M]===void 0){L[M]=W;return}L[M]=[].concat(L[M],W)};default:return(M,H,L)=>{if(L[M]===void 0){L[M]=H;return}L[M]=[].concat(L[M],H)}}}function w(C){if(typeof C!="string"||C.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function z(C,O){return O.encode?O.strict?s(C):encodeURIComponent(C):C}function S(C,O){return O.decode?v(C):C}function U(C){return Array.isArray(C)?C.sort():typeof C=="object"?U(Object.keys(C)).sort((O,M)=>Number(O)-Number(M)).map(O=>C[O]):C}function P(C){let O=C.indexOf("#");return O!==-1&&(C=C.slice(0,O)),C}function K(C){let O="",M=C.indexOf("#");return M!==-1&&(O=C.slice(M)),O}function J(C){C=P(C);let O=C.indexOf("?");return O===-1?"":C.slice(O+1)}function j(C,O){return O.parseNumbers&&!Number.isNaN(Number(C))&&typeof C=="string"&&C.trim()!==""?C=Number(C):O.parseBooleans&&C!==null&&(C.toLowerCase()==="true"||C.toLowerCase()==="false")&&(C=C.toLowerCase()==="true"),C}function A(C,O){O=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},O),w(O.arrayFormatSeparator);let M=x(O),H=Object.create(null);if(typeof C!="string"||(C=C.trim().replace(/^[?#&]/,""),!C))return H;for(let L of C.split("&")){if(L==="")continue;let[Z,W]=g(O.decode?L.replace(/\+/g," "):L,"=");W=W===void 0?null:["comma","separator","bracket-separator"].includes(O.arrayFormat)?W:S(W,O),M(S(Z,O),W,H)}for(let L of Object.keys(H)){let Z=H[L];if(typeof Z=="object"&&Z!==null)for(let W of Object.keys(Z))Z[W]=j(Z[W],O);else H[L]=j(Z,O)}return O.sort===!1?H:(O.sort===!0?Object.keys(H).sort():Object.keys(H).sort(O.sort)).reduce((L,Z)=>{let W=H[Z];return W&&typeof W=="object"&&!Array.isArray(W)?L[Z]=U(W):L[Z]=W,L},Object.create(null))}d.extract=J,d.parse=A,d.stringify=(C,O)=>{if(!C)return"";O=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},O),w(O.arrayFormatSeparator);let M=W=>O.skipNull&&b(C[W])||O.skipEmptyString&&C[W]==="",H=T(O),L={};for(let W of Object.keys(C))M(W)||(L[W]=C[W]);let Z=Object.keys(L);return O.sort!==!1&&Z.sort(O.sort),Z.map(W=>{let de=C[W];return de===void 0?"":de===null?z(W,O):Array.isArray(de)?de.length===0&&O.arrayFormat==="bracket-separator"?z(W,O)+"[]":de.reduce(H(W),[]).join("&"):z(W,O)+"="+z(de,O)}).filter(W=>W.length>0).join("&")},d.parseUrl=(C,O)=>{O=Object.assign({decode:!0},O);let[M,H]=g(C,"#");return Object.assign({url:M.split("?")[0]||"",query:A(J(C),O)},O&&O.parseFragmentIdentifier&&H?{fragmentIdentifier:S(H,O)}:{})},d.stringifyUrl=(C,O)=>{O=Object.assign({encode:!0,strict:!0,[E]:!0},O);let M=P(C.url).split("?")[0]||"",H=d.extract(C.url),L=d.parse(H,{sort:!1}),Z=Object.assign(L,C.query),W=d.stringify(Z,O);W&&(W=`?${W}`);let de=K(C.url);return C.fragmentIdentifier&&(de=`#${O[E]?z(C.fragmentIdentifier,O):C.fragmentIdentifier}`),`${M}${W}${de}`},d.pick=(C,O,M)=>{M=Object.assign({parseFragmentIdentifier:!0,[E]:!1},M);let{url:H,query:L,fragmentIdentifier:Z}=d.parseUrl(C,M);return d.stringifyUrl({url:H,query:h(L,O),fragmentIdentifier:Z},M)},d.exclude=(C,O,M)=>{let H=Array.isArray(O)?L=>!O.includes(L):(L,Z)=>!O(L,Z);return d.pick(C,H,M)}}),ax=yC(lx());function ix(d){let s=Zt(Zt({},$b.halo.props),d),{control:v,urlString:g,onCameraUpdate:h}=s,b=Ds(s,["control","urlString","onCameraUpdate"]);v==="query"&&(b=ax.parse(GC(g),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let E=b,{lightType:T,envPreset:x,brightness:w,grain:z,toggleAxis:S}=E;return Ds(E,["lightType","envPreset","brightness","grain","toggleAxis"]),se.jsxs(se.Fragment,{children:[se.jsx(QC,Zt({},b)),se.jsx(Hb,{lightType:T,brightness:w,envPreset:x}),z!=="off"&&se.jsx(xb,{}),S&&se.jsx(Jb,{}),se.jsx(Ob,hm(Zt({},b),{onCameraUpdate:h}))]})}for(const d of["uv2_pars_vertex","uv2_vertex","uv2_pars_fragment","transmissionmap_fragment","transmissionmap_pars_fragment"])d in om||(om[d]="");"encodings_fragment"in om||(om.encodings_fragment=om.colorspace_fragment||"");class rx extends ue.Component{constructor(s){super(s),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(s){console.warn("Shader gradient unavailable:",s)}render(){return this.state.failed?null:this.props.children}}function Cx(d){const s=A_.createRoot(d);return s.render(At.createElement(rx,null,At.createElement(uC,{"aria-hidden":"true",dpr:[1,1.25],camera:{position:[0,0,8],fov:45},gl:{antialias:!1,powerPreference:"low-power",alpha:!0},fallback:At.createElement("span",{"aria-hidden":"true"}),style:{width:"100%",height:"100%",pointerEvents:"none"}},At.createElement(ix,{type:"plane",animate:"on",control:"props",uSpeed:.2,uStrength:1.8,uDensity:1.1,uFrequency:4.1,color1:"#21103e",color2:"#6741b8",color3:"#148aab",brightness:1.15,cDistance:3.6,cPolarAngle:90,lightType:"3d",grain:"off"})))),()=>s.unmount()}export{Cx as mountGradient};
