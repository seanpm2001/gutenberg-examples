!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(2);Object(o.registerBlockType)("gutenberg-examples/example-06-esnext",{title:"Example: Inner Blocks (ESNext)",category:"layout",edit:function(e){return Object(r.createElement)("div",{className:e.className},Object(r.createElement)(c.InnerBlocks,null))},save:function(e){return Object(r.createElement)("div",{className:e.className},Object(r.createElement)(c.InnerBlocks.Content,null))}})}]);