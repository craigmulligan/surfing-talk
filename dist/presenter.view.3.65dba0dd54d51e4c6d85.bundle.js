(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{589:function(e,t,n){var r=n(590);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(51)(r,o);r.locals&&(e.exports=r.locals)},590:function(e,t,n){},610:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(131);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}var t,n,r;return t=e,(n=[{key:"registerEvent",value:function(e,t){navigator.presentation.receiver.connectionList.then(function(n){n.connections.forEach(function(n){n.addEventListener(e,t)}),n.addEventListener("connectionavailable",function(e){t(e.connection)})})}},{key:"setUp",value:function(){this.registerEvent("close",function(e){console.log(e)})}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",function(t){var n=JSON.parse(t.data).page;e(n)}):window.addEventListener("storage",function(t){if("page"===t.key){var n=JSON.parse(t.newValue).page;e(n)}})}}])&&i(t.prototype,n),r&&i(t,r),e}(),c=n(427),s=n(424);n(589);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,u,"next",e)}function u(e){p(a,r,o,i,u,"throw",e)}i(void 0)})}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return g});var g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=y(t).call(this),e=!r||"object"!==l(r)&&"function"!=typeof r?b(n):r,w(b(e),"startCapturing",v(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.webrtc){t.next=7;break}return e.webrtc=new s.a,t.next=4,e.webrtc.startCapturing({video:{displaySurface:"monitor"}});case 4:return t.abrupt("return",t.sent);case 7:throw new Error("Capturing has already run.");case 8:case"end":return t.stop()}},t)}))),w(b(e),"stopCapturing",function(t){e.webrtc&&t&&(t.pause(),e.webrtc.stopCapturing(t),e.currentLayer.style.opacity=1,e.webrtc=null,e.currentLayer=null,e.currentVideoTag=null)}),w(b(e),"listenCanvas",function(){Object(c.d)(function(t){e.setState({usedCanvas:"start"===t.status})})}),e.webrtc=null,e.currentVideoTag=null,e.currentLayer=null,e.presentationReceiver=new u,e.presentationReceiver.onChangePage(function(t){window.slide&&(window.slide.goToSlide(t),e.webrtc&&e.currentVideoTag&&e.stopCapturing(e.currentVideoTag))}),e.state={usedCanvas:!1},e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){this.listenVideoTags(),this.listenCanvas(),this.setState({usedCanvas:"start"===Object(c.c)().status})}},{key:"listenVideoTags",value:function(){var e=v(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(n=document.querySelectorAll("#webslides .fusuma-screen"))){e.next=3;break}return e.abrupt("return");case 3:n.forEach(function(e){var t=f(e.children,2),n=t[0],o=t[1];o.addEventListener("click",v(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.webrtc){e.next=10;break}return e.next=3,r.startCapturing();case 3:t=e.sent,o.srcObject=t,o.play(),r.currentVideoTag=o,r.currentLayer=n,r.currentLayer.style.opacity=0,t.getVideoTracks()[0].onended=function(){r.stopCapturing(o)};case 10:case"end":return e.stop()}},e)})))});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"fusuma-presenter-view"},this.state.usedCanvas&&o.a.createElement(c.a,{disabled:!0,hideGrid:!0}),o.a.createElement(a.a,{slides:this.props.slides,hash:this.props.hash,showIndex:!1}))}}])&&d(n.prototype,r),i&&d(n,i),t}()}}]);