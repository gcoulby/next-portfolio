(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{1234:function(e,r,t){Promise.resolve().then(t.bind(t,8164))},8164:function(e,r,t){"use strict";t.r(r);var n=t(9268),a=t(4867),s=t(5846),l=t.n(s),o=t(2801),i=t(6006);r.default=function(e){let{keyWords:r,showTags:t}=e,[s,c]=(0,i.useState)(!0);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",id:"sideNav",children:[(0,n.jsxs)(l(),{className:"navbar-brand js-scroll-trigger",href:"/",children:[(0,n.jsx)("span",{className:"d-block d-lg-none",children:"Graham Coulby"}),(0,n.jsx)("span",{className:"d-none d-lg-block",children:(0,n.jsx)("img",{src:a.default.src,className:"img-fluid img-profile mx-auto mb-2",alt:""})})]}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:()=>c(!s),children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsx)("div",{className:"navbar-collapse ".concat(s&&"collapse"),id:"navbarSupportedContent",children:(0,n.jsxs)("ul",{className:"navbar-nav",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)(l(),{href:"/",className:"nav-link js-scroll-trigger",children:[(0,n.jsx)(o.xng,{})," Home"]})}),t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)("span",{className:"nav-link js-scroll-trigger",children:[(0,n.jsx)(o.dSq,{})," Show All"]})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)("hr",{})}),(0,n.jsx)("ul",{className:"navbar-nav navbar-nav-inner",children:r.map((e,r)=>(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)("span",{className:"nav-link js-scroll-trigger",onClick:()=>{c(!0)},children:[(0,n.jsx)(o.fxx,{})," ",e]})},"projects-nav-item-".concat(r)))})]}):(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)(l(),{href:"/portfolio",className:"nav-link js-scroll-trigger",children:[(0,n.jsx)(o._HU,{})," Go Back"]})})]})})]})})}},4867:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/logo.625befc3.png",height:524,width:574,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAgklEQVR42gF3AIj/ANgA2C3YRtwTAALEP8xhwi4A2VzZd9lY2DDbNNqB203bUgDYn9kA2QDYGtiN1QzaANoAANl+2k7bNtmE2FjZbNkk2T0AsQzTZNR20SzaANhS2GzYOQCwGnkReBKMDf8D1QDKANYAAP8l/zH/NP8r/iT8Mf0+/TGF4Tn/348nzAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},3177:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(6006),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:u,props:s,_owner:o.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},9268:function(e,r,t){"use strict";e.exports=t(3177)},5846:function(e,r,t){e.exports=t(8920)},3270:function(e,r,t){"use strict";t.d(r,{w_:function(){return i}});var n=t(6006),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>r.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function i(e){return function(r){return n.createElement(c,l({attr:l({},e.attr)},r),function e(r){return r&&r.map(function(r,t){return n.createElement(r.tag,l({key:t},r.attr),e(r.child))})}(e.child))}}function c(e){var r=function(r){var t,a=e.attr,s=e.size,i=e.title,c=o(e,["attr","size","title"]),u=s||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,c,{className:t,style:l(l({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return r(e)}):r(a)}}},function(e){e.O(0,[296,920,253,488,744],function(){return e(e.s=1234)}),_N_E=e.O()}]);