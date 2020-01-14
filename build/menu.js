!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}({1:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},17:function(t,e,n){"use strict";n.r(e);var i,s,a=n(1),o=n.n(a),u=n(2),r=n.n(u),l=function(){function t(e,n){return o()(this,t),this._list=e,this._menu=document.createElement("nav"),this._menuContents=document.createElement("div"),this._menuToggle=document.createElement("button"),this._menuTitle=document.createElement("h1"),this._menuId="taxonomy-menu-".concat(n),this._appendElements(),this._setAttributes(),this._menu}return r()(t,[{key:"_appendElements",value:function(){this._list.insertAdjacentElement("beforebegin",this._menu),this._menu.appendChild(this._menuContents),this._menuContents.appendChild(this._menuToggle),this._menuContents.appendChild(this._list),this._menuToggle.appendChild(this._menuTitle),this._menuTitle.appendChild(document.createTextNode("".concat(this._list.dataset.menuTitle,"s")))}},{key:"_setAttributes",value:function(){this._list.classList.add("menu-items"),this._menu.classList.add("menu"),this._menuContents.classList.add("menu-contents"),this._menuToggle.classList.add("menu-toggle"),this._menuTitle.classList.add("menu-title"),this._menuToggle.setAttribute("aria-haspopup",!0),this._menuToggle.setAttribute("id",this._menuId),this._list.setAttribute("aria-labelledby",this._menuId)}}]),t}(),c=function(){function t(e){o()(this,t),this._menu=e,this._menuContents=this._menu.querySelector(".menu-contents"),this._menuToggleButton=this._menu.querySelector(".menu-toggle"),this._menuTitle=this._menu.querySelector(".menu-title"),this._menuLinks=this._menu.querySelectorAll("a"),this._expanded=!0,this._animate=!1,this._duration=200,this._frameTime=1e3/60,this._nFrames=Math.round(this._duration/this._frameTime),this._opts={},this._collapsed={},this.expand=this.expand.bind(this),this.collapse=this.collapse.bind(this),this.toggle=this.toggle.bind(this),this._calculateScales(),this._createEaseAnimations(),this._addEventListeners(),this.collapse(),this.activate()}return r()(t,[{key:"activate",value:function(){this._menu.classList.add("menu-active"),this._menuToggleButton.setAttribute("aria-expanded",!1),this._menuLinks.forEach((function(t){t.setAttribute("tabindex",-1)})),this._animate=!0}},{key:"collapse",value:function(){if(this._expanded){this._expanded=!1;var t=this._collapsed,e=t.x,n=t.y,i=1/e,s=1/n;this._menu.style.transform="scale(".concat(e,", ").concat(n,")"),this._menuContents.style.transform="scale(".concat(i,", ").concat(s,")"),this._animate&&this._applyAnimation({expand:!1})}}},{key:"expand",value:function(){this._expanded||(this._expanded=!0,this._menu.style.transform="scale(1, 1)",this._menuContents.style.transform="scale(1, 1)",this._animate&&this._applyAnimation({expand:!0}))}},{key:"toggle",value:function(){this._expanded?this.collapse():this.expand()}},{key:"_addEventListeners",value:function(){this._menuToggleButton.addEventListener("click",this.toggle)}},{key:"_applyAnimation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._opts,e=t.expand;if(this._menu.classList.remove("menu-expanded"),this._menu.classList.remove("menu-collapsed"),this._menuContents.classList.remove("menu-contents-expanded"),this._menuContents.classList.remove("menu-contents-collapsed"),window.getComputedStyle(this._menu).transform,e)return this._menu.classList.add("menu-expanded"),this._menuContents.classList.add("menu-contents-expanded"),this._menuToggleButton.setAttribute("aria-expanded",!0),void this._menuLinks.forEach((function(t){t.setAttribute("tabindex",0)}));this._menu.classList.add("menu-collapsed"),this._menuContents.classList.add("menu-contents-collapsed"),this._menuToggleButton.setAttribute("aria-expanded",!1),this._menuLinks.forEach((function(t){t.setAttribute("tabindex",-1)}))}},{key:"_calculateScales",value:function(){var t=this._menuTitle.getBoundingClientRect(),e=this._menu.getBoundingClientRect();this._collapsed={x:t.width/e.width,y:t.height/e.height}}},{key:"_createEaseAnimations",value:function(){var t=document.querySelector(".menu-ease");if(t)return t;(t=document.createElement("style")).classList.add("menu-ease");for(var e=[],n=[],i=[],s=[],a=100/this._nFrames,o=0;o<=this._nFrames;o++){var u=this._ease(o/this._nFrames).toFixed(5),r=(o*a).toFixed(5),l=this._collapsed.x,c=this._collapsed.y;this._append({percentage:r,step:u,startX:l,startY:c,endX:1,endY:1,outerAnimation:e,innerAnimation:n}),this._append({percentage:r,step:u,startX:1,startY:1,endX:this._collapsed.x,endY:this._collapsed.y,outerAnimation:i,innerAnimation:s})}return t.textContent="\n\t\t@keyframes menuExpandAnimation {\n\t\t\t".concat(e.join(""),"\n\t\t}\n\n\t\t@keyframes menuExpandContentsAnimation {\n\t\t\t").concat(n.join(""),"\n\t\t}\n\n\t\t@keyframes menuCollapseAnimation {\n\t\t\t").concat(i.join(""),"\n\t\t}\n\n\t\t@keyframes menuCollapseContentsAnimation {\n\t\t\t").concat(s.join(""),"\n\t\t}"),document.head.appendChild(t),t}},{key:"_append",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._opts,e=t.percentage,n=t.step,i=t.startX,s=t.startY,a=t.endX,o=t.endY,u=t.outerAnimation,r=t.innerAnimation,l=(i+(a-i)*n).toFixed(5),c=(s+(o-s)*n).toFixed(5),d=(1/l).toFixed(5),m=(1/c).toFixed(5);u.push("\n\t\t\t".concat(e,"% {\n\t\t\t\ttransform: scale(").concat(l,", ").concat(c,");\n\t\t\t}")),r.push("\n\t\t\t".concat(e,"% {\n\t\t\t\ttransform: scale(").concat(d,", ").concat(m,");\n\t\t\t}"))}},{key:"_clamp",value:function(t,e,n){return Math.max(e,Math.min(n,t))}},{key:"_ease",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return t=this._clamp(t,0,1),1-Math.pow(1-t,e)}}]),t}();i=document.querySelectorAll('.courses-archive-frontmatter [data-collapse-menu="true"]'),s=1,i.forEach((function(t){var e=new l(t,s);new c(e),s++}))},2:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}});