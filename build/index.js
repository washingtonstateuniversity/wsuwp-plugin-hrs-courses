/*! For license information please see index.js.LICENSE.txt */
!function(){var e={184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},284:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,{name:function(){return v},settings:function(){return E}});var o={};r.r(o),r.d(o,{name:function(){return P},settings:function(){return S}});var a={};r.r(a),r.d(a,{name:function(){return A},settings:function(){return U}});var s={};r.r(s),r.d(s,{name:function(){return ce},settings:function(){return pe}});var l={};r.r(l),r.d(l,{name:function(){return Oe},settings:function(){return Be}});var c={};r.r(c),r.d(c,{name:function(){return Ut},settings:function(){return Yt}});var i={};r.r(i),r.d(i,{name:function(){return xr},settings:function(){return Nr}});var u=window.wp.element,m=wp.i18n.__,p=wp.blockEditor.RichText,d=JSON.parse('{"u2":"hrscourses/course-datetime","W3":"common","be":{"inserter":false,"reusable":false},"Y4":{"datetimeMetaValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_datetime"},"displayValue":{"type":"string","source":"text","selector":".course-datetime"}}}'),g=wp.i18n.__,f=wp.blockEditor.RichText,h=wp.i18n.__,v=d.u2,y=d.W3,b=d.Y4,w=d.be,E={title:h("Course Date and Time"),category:y,description:h("The date and/or time of the course."),icon:"calendar-alt",keywords:[h("courses")],attributes:b,supports:w,edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes,o=t.datetimeMetaValue,a=(t.displayValue,t.placeholder);return(0,u.createElement)("div",{className:r},(0,u.createElement)("div",{className:"components-base-control"},(0,u.createElement)("span",{className:"components-base-control__label"},m("Date: "))),(0,u.createElement)(p,{tagName:"span",className:"course-datetime",label:m("Course date and time"),placeholder:a||m("Add date and / or time…"),value:o,onChange:function(e){return n({datetimeMetaValue:e,displayValue:e})},allowedFormats:[]}))},save:function(e){var t=e.attributes,r=e.className,n=t.displayValue;return n?(0,u.createElement)("p",{className:r},(0,u.createElement)("span",{className:"label"},g("Date: ")),(0,u.createElement)(f.Content,{tagName:"span",className:"course-datetime",value:n})):null}},C=wp.i18n.__,_=wp.blockEditor.RichText,x=JSON.parse('{"u2":"hrscourses/course-location","W3":"common","be":{"inserter":false,"reusable":false},"Y4":{"locationMetaValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_location"},"displayValue":{"type":"string","source":"html","selector":".course-location"}}}'),k=wp.i18n.__,L=wp.blockEditor.RichText,N=wp.i18n.__,P=x.u2,T=x.W3,V=x.Y4,O=x.be,S={title:N("Course Location"),category:T,description:N("The meeting location of the course."),icon:"location-alt",keywords:[N("location")],attributes:V,supports:O,edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes,o=t.locationMetaValue,a=(t.displayValue,t.placeholder);return(0,u.createElement)("div",{className:r},(0,u.createElement)("div",{className:"components-base-control"},(0,u.createElement)("span",{className:"components-base-control__label"},C("Location: "))),(0,u.createElement)(_,{tagName:"span",className:"course-location",label:C("Course location"),placeholder:a||C("Add location…","wsuwp-hrs-courses"),value:o,onChange:function(e){return n({locationMetaValue:e,displayValue:e})},allowedFormats:["core/bold","core/italic"]}))},save:function(e){var t=e.attributes,r=e.className,n=t.displayValue;return n?(0,u.createElement)("p",{className:r},(0,u.createElement)("span",{className:"label"},k("Location: ")),(0,u.createElement)(L.Content,{tagName:"span",className:"course-location",value:n})):null}},M=wp.i18n.__,R=wp.blockEditor.RichText,B=JSON.parse('{"u2":"hrscourses/course-presenter","W3":"common","be":{"inserter":false,"reusable":false},"Y4":{"presenterMetaValue":{"type":"string","source":"meta","meta":"_wsuwp_hrs_courses_presenter"},"displayValue":{"type":"string","source":"html","selector":".course-presenter"}}}'),H=wp.i18n.__,z=wp.blockEditor.RichText,j=wp.i18n.__,A=B.u2,D=B.W3,I=B.Y4,F=B.be,U={title:j("Course Presenter(s)"),category:D,description:j("The course presenter(s)."),icon:"id",keywords:[j("courses"),j("people"),j("presenters")],attributes:I,supports:F,edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes,o=t.presenterMetaValue,a=(t.displayValue,t.placeholder);return(0,u.createElement)("div",{className:r},(0,u.createElement)("div",{className:"components-base-control"},(0,u.createElement)("span",{className:"components-base-control__label"},M("Presenter: "))),(0,u.createElement)(R,{tagName:"span",className:"course-presenter",label:M("Course presenter"),placeholder:a||M("Add presenter(s)…"),value:o,onChange:function(e){return n({presenterMetaValue:e,displayValue:e})},allowedFormats:["core/bold"]}))},save:function(e){var t=e.attributes,r=e.className,n=t.displayValue;return n?(0,u.createElement)("p",{className:r},(0,u.createElement)("span",{className:"label"},H("Presenter: ")),(0,u.createElement)(z.Content,{tagName:"span",className:"course-presenter",value:n})):null}},W=wp.i18n.__,G=wp.element.Fragment,Y=wp.components,J=Y.PanelBody,q=Y.TextControl,Q=wp.blockEditor,K=Q.InspectorControls,X=Q.URLInput,Z=JSON.parse('{"u2":"hrscourses/course-video","W3":"common","be":{"inserter":false,"reusable":false},"Y4":{"recordedVideoUrl":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"recordedVideoLink":{"type":"string","default":"Video Recording"}}}'),$=wp.blockEditor.RichText,ee=wp.components,te=ee.Path,re=ee.SVG,ne=wp.components,oe=ne.Path,ae=ne.SVG,se=(0,u.createElement)(ae,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(oe,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,u.createElement)(oe,{d:"M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"})),le=wp.i18n.__,ce=Z.u2,ie=Z.W3,ue=Z.Y4,me=Z.be,pe={title:le("Course Video URL"),category:ie,description:le("The URLs for a course video."),icon:se,keywords:[le("media")],attributes:ue,supports:me,edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes,o=t.recordedVideoUrl,a=t.recordedVideoLink;return(0,u.createElement)(G,null,(0,u.createElement)(K,null,(0,u.createElement)(J,{title:W("Course Video Settings","wsuwp-hrs-courses")},(0,u.createElement)(q,{label:W("Course Video Link Text","wsuwp-hrs-courses"),help:W("Enter link text here to override the default video URL link text.","wsuwp-hrs-courses"),value:a,onChange:function(e){return n({recordedVideoLink:e})}}))),(0,u.createElement)("div",{className:r},(0,u.createElement)("div",{className:"components-base-control"},(0,u.createElement)("span",{className:"components-base-control__label"},W("Course video URL","wsuwp-hrs-courses"))),(0,u.createElement)(X,{autoFocus:!1,value:o,onChange:function(e){return n({recordedVideoUrl:e})}})))},save:function(e){var t=e.attributes,r=e.className,n=t.recordedVideoUrl,o=t.recordedVideoLink;return n?(0,u.createElement)("p",{className:r},(0,u.createElement)(re,{className:"svg-icon",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(te,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,u.createElement)(te,{d:"M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"})),(0,u.createElement)($.Content,{tagName:"a",className:"course-recorded-video__link",href:n,value:o})):null}},de=wp.i18n.__,ge=wp.element.Fragment,fe=wp.components,he=fe.PanelBody,ve=fe.TextControl,ye=wp.blockEditor,be=ye.InspectorControls,we=ye.URLInput,Ee=JSON.parse('{"u2":"hrscourses/course-online","W3":"common","be":{"inserter":false,"reusable":false},"Y4":{"onlineLearningUrl":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"onlineLearningLink":{"type":"string","default":"Online Learning"}}}'),Ce=wp.blockEditor.RichText,_e=wp.components,xe=_e.Path,ke=_e.SVG,Le=wp.components,Ne=Le.Path,Pe=Le.SVG,Te=(0,u.createElement)(Pe,{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(Ne,{d:"M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z"})),Ve=wp.i18n.__,Oe=Ee.u2,Se=Ee.W3,Me=Ee.Y4,Re=Ee.be,Be={title:Ve("Course Online URL"),category:Se,description:Ve("The URLs for an online course."),icon:Te,keywords:[Ve("link")],attributes:Me,supports:Re,edit:function(e){var t=e.attributes,r=e.className,n=e.setAttributes,o=t.onlineLearningUrl,a=t.onlineLearningLink;return(0,u.createElement)(ge,null,(0,u.createElement)(be,null,(0,u.createElement)(he,{title:de("Online Course Settings","wsuwp-hrs-courses")},(0,u.createElement)(ve,{label:de("Online Course Link Text","wsuwp-hrs-courses"),help:de("Enter link text here to override the default online course URL link text.","wsuwp-hrs-courses"),value:a,onChange:function(e){return n({onlineLearningLink:e})}}))),(0,u.createElement)("div",{className:r},(0,u.createElement)("div",{className:"components-base-control"},(0,u.createElement)("span",{className:"components-base-control__label"},de("Online course URL"))),(0,u.createElement)(we,{autoFocus:!1,value:o,onChange:function(e){return n({onlineLearningUrl:e})}})))},save:function(e){var t=e.attributes,r=e.className,n=t.onlineLearningUrl,o=t.onlineLearningLink;return n?(0,u.createElement)("p",{className:r},(0,u.createElement)(ke,{class:"svg-icon",viewBox:"0 0 20 20",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(xe,{d:"M3 3h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm13 2H4v8h12V5zm-3 1H5v4zm6 11v-1H1v1c0 .6.5 1 1.1 1h15.8c.6 0 1.1-.4 1.1-1z"})),(0,u.createElement)(Ce.Content,{tagName:"a",class:"course-recorded-video__link",href:n,value:o})):null}};function He(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ze(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ae(e,t,r){return t&&je(e.prototype,t),r&&je(e,r),e}function De(e,t){return(De=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ie(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&De(e,t)}function Fe(e){return(Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ue(e,t){return!t||"object"!==Fe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function We(e){return(We=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ge=window.lodash,Ye=r(184),Je=r.n(Ye),qe=wp.components,Qe=qe.SVG,Ke=qe.Path,Xe=(0,u.createElement)(Qe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,u.createElement)(Ke,{d:"M19 18V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6V3h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v6H6v-6h11z"})),Ze=(0,u.createElement)(Qe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,u.createElement)(Ke,{d:"M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z"})),$e=(0,u.createElement)(Qe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,u.createElement)(Ke,{d:"M10.44 3.02l1.82-1.82 6.36 6.35-1.83 1.82c-1.05-.68-2.48-.57-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82-2.41-2.41-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41z"})),et=(0,u.createElement)(Qe,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,u.createElement)(Ke,{d:"M2 19h16c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1zM4 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V3h11zM4 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6V7h11zM4 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11zM4 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm13 0v2H6v-2h11z"})),tt=wp.element.Fragment,rt=function(e){var t=e.post,r=e.prefix,n=e.taxonomySlug,o=e.terms,a=t[n]||[];if(!(null!=a&&a.length)>0)return null;var s=(null==o?void 0:o.mapById)||[],l=a.reduce((function(e,t){var r=s[t];return r&&e.push(r),e}),[]);return(0,u.createElement)("p",{className:"wp-block-hrscourses-courses-list--".concat(n,"-list")},(0,u.createElement)("span",null,r),l.map((function(e,t){var r=t>0?", ":"";return(0,u.createElement)(tt,{key:t},r,(0,u.createElement)("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},e.name))})))},nt={per_page:-1},ot="course_tag",at="learning_program",st=wp.i18n.__,lt=wp.date,ct=lt.dateI18n,it=lt.format,ut=lt.__experimentalGetSettings,mt=function(e){var t=e.displayPostDate,r=e.displayCourseTag,n=e.displayLearningProgram,o=e.courseTags,a=e.learningPrograms,s=e.post,l=ut().formats.date;return(0,u.createElement)("div",{className:"wp-block-hrscourses-courses-list--meta"},n&&a&&(0,u.createElement)(rt,{post:s,terms:a,taxonomySlug:at,prefix:st("Learning Programs: ")}),r&&o&&(0,u.createElement)(rt,{post:s,terms:o,taxonomySlug:ot,prefix:st("Course Tags: ")}),t&&s.date_gmt&&(0,u.createElement)("p",{className:"wp-block-hrscourses-courses-list--post-date"},st("Published on "),(0,u.createElement)("time",{dateTime:it("c",s.date_gmt)},ct(l,s.date_gmt))))};function pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(r),!0).forEach((function(t){He(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var gt=function(e){return dt({terms:e},null==e?void 0:e.reduce((function(e,t){var r=e.mapById,n=e.mapByName,o=e.names;return r[t.id]=t,n[t.name]=t,o.push(t.name),e}),{mapById:{},mapByName:{},names:[]}))},ft=function(e,t,r){var n={learning_program:{queryProp:"learningProgramIds",terms:t},course_tag:{queryProp:"courseTagIds",terms:t}}[e];return(r[n.queryProp]||[]).reduce((function(e,t){var r=n.terms.mapById[t];return r&&e.push({id:t,value:r.name}),e}),[])},ht=function(e,t,r,n){return function(o){var a=o.reduce((function(t,r){var n,o=(null==r?void 0:r.id)||(null===(n=e.mapByName[r])||void 0===n?void 0:n.id);return o&&t.push(o),t}),[]);!function(e,t,r){r({selectedTermLists:dt(dt({},t),e)})}(He({},t,a),r,n)}};var vt=wp.element,yt=vt.Component,bt=vt.RawHTML,wt=wp.components,Et=wt.ExternalLink,Ct=wt.FormTokenField,_t=wt.PanelBody,xt=wt.Placeholder,kt=wt.QueryControls,Lt=wt.RadioControl,Nt=wt.RangeControl,Pt=wt.Spinner,Tt=wt.ToggleControl,Vt=wt.ToolbarGroup,Ot=wp.i18n.__,St=wp.blockEditor,Mt=St.InspectorControls,Rt=St.BlockControls,Bt=wp.data.withSelect,Ht=function(e){Ie(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=We(t);if(r){var o=We(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Ue(this,e)});function o(){return ze(this,o),n.apply(this,arguments)}return Ae(o,[{key:"render",value:function(){var e,t,r=this.props,n=r.attributes,o=r.setAttributes,a=r.className,s=r.postsList,l=r.courseTagTerms,c=r.learningProgramTerms,i=n.displayCourseTag,m=n.displayLearningProgram,p=n.displayPostContentRadio,d=n.displayPostContent,g=n.displayPostDate,f=n.postLayout,h=n.columns,v=n.order,y=n.orderBy,b=n.selectedTermLists,w=n.postsToShow,E=n.excerptLength,C=gt(c),_=gt(l),x=ht(C,"learningProgramIds",b,o),k=ht(_,"courseTagIds",b,o),L=(0,u.createElement)(Mt,null,(0,u.createElement)(_t,{title:Ot("Course content settings")},(0,u.createElement)(Tt,{label:Ot("Course content"),checked:d,onChange:function(e){return o({displayPostContent:e})}}),d&&(0,u.createElement)(Lt,{label:Ot("Show:"),selected:p,options:[{label:Ot("Excerpt"),value:"excerpt"},{label:Ot("Full content"),value:"full_post"}],onChange:function(e){return o({displayPostContentRadio:e})}}),d&&"excerpt"===p&&(0,u.createElement)(Nt,{label:Ot("Max number of words in excerpt"),value:E,onChange:function(e){return o({excerptLength:e})},min:10,max:100})),(0,u.createElement)(_t,{title:Ot("Post meta settings")},(0,u.createElement)(Tt,{label:Ot("Display date"),checked:g,onChange:function(e){return o({displayPostDate:e})}}),(0,u.createElement)(Tt,{label:Ot("Display learning programs"),checked:m,onChange:function(e){return o({displayLearningProgram:e})}}),(0,u.createElement)(Tt,{label:Ot("Display course tags"),checked:i,onChange:function(e){return o({displayCourseTag:e})}})),(0,u.createElement)(_t,{className:"".concat(a," taxonomy-filter"),title:Ot("Filtering"),initialOpen:!1},(null==C||null===(e=C.terms)||void 0===e?void 0:e.length)>0&&(0,u.createElement)(Ct,{label:Ot("Learning Programs"),value:ft(at,C,b),suggestions:C.names,onChange:x}),(null==_||null===(t=_.terms)||void 0===t?void 0:t.length)>0&&(0,u.createElement)(Ct,{label:Ot("Course Tags"),value:ft(ot,_,b),suggestions:_.names,onChange:k}),(0,u.createElement)("p",{className:"components-filter-control__help"},Ot("Filtering by both Learning Program and Course Tag will return only courses that have both terms assigned."),(0,u.createElement)(Et,{href:"https://hrscms.hrs.wsu.edu/component-library/courses-list/#filtering-and-sorting-options"},Ot("Learn more about filtering")))),(0,u.createElement)(_t,{title:Ot("Order and number"),initialOpen:!1},(0,u.createElement)(kt,{order:v,orderBy:y,numberOfItems:w,onOrderChange:function(e){return o({order:e})},onOrderByChange:function(e){return o({orderBy:e})},onNumberOfItemsChange:function(e){return o({postsToShow:e})}}),"grid"===f&&(0,u.createElement)(Nt,{label:Ot("Maximum columns"),value:h,onChange:function(e){return o({columns:e})},min:2,max:N?Math.min(6,s.length):6,required:!0}))),N=Array.isArray(s)&&s.length;if(!N)return(0,u.createElement)(u.Fragment,null,L,(0,u.createElement)(xt,{icon:$e,label:Ot("Courses")},Array.isArray(s)?Ot("No courses found."):(0,u.createElement)(Pt,null)));var P=s.length>w?s.slice(0,w):s,T=[{icon:et,title:Ot("List view"),onClick:function(){return o({postLayout:"list"})},isActive:"list"===f},{icon:Ze,title:Ot("Grid view"),onClick:function(){return o({postLayout:"grid"})},isActive:"grid"===f}];return(0,u.createElement)(u.Fragment,null,L,(0,u.createElement)(Rt,null,(0,u.createElement)(Vt,{controls:T})),(0,u.createElement)("div",{className:Je()(a,He({"is-grid":"grid"===f,"has-date":g,"has-full-content":d&&"full_post"===p,"has-excerpt":d&&"excerpt"===p},"columns-".concat(h),"grid"===f))},P.map((function(e,t){var r=(0,Ge.invoke)(e,["title","rendered","trim"]),n=e.content.rendered,o=document.createElement("div");o.innerHTML=n,n=o.textContent||o.innerText||"";var a=g||m||i,s=E<n.trim().split(" ").length&&""===e.excerpt.raw?(0,u.createElement)(u.Fragment,null,n.trim().split(" ",E).join(" "),Ot(" … ")):n;return(0,u.createElement)("div",{className:"wp-block-hrscourses-courses-list--list-item",key:t},(0,u.createElement)("div",{className:"wp-block-hrscourses-courses-list--body"},(0,u.createElement)("h3",{className:"wp-block-hrscourses-courses-list--heading"},(0,u.createElement)("a",{href:e.link,target:"_blank",rel:"noreferrer noopener"},r?(0,u.createElement)(bt,null,r):Ot("(no title)"))),d&&"excerpt"===p&&(0,u.createElement)("p",{className:"wp-block-hrscourses-courses-list--post-excerpt"},s),d&&"full_post"===p&&(0,u.createElement)("div",{className:"wp-block-hrscourses-courses-list--post-full-content"},(0,u.createElement)(bt,{key:"html"},e.content.raw.trim())),a&&(0,u.createElement)(mt,{displayPostDate:g,displayCourseTag:i,displayLearningProgram:m,post:e,learningPrograms:C,courseTags:_})))}))))}}]),o}(yt),zt=Bt((function(e,t){var r,n,o=t.attributes,a=o.postsToShow,s=o.order,l=o.orderBy,c=o.selectedTermLists,i=e("core").getEntityRecords,u=(0,Ge.pickBy)({order:s,orderby:l,per_page:a},(function(e){return!(0,Ge.isUndefined)(e)}));(null==c||null===(r=c.learningProgramIds)||void 0===r?void 0:r.length)>0&&(u.learning_program=c.learningProgramIds),(null==c||null===(n=c.courseTagIds)||void 0===n?void 0:n.length)>0&&(u.course_tag=c.courseTagIds);var m=i("postType","wsuwp_hrs_courses",u);return{courseTagTerms:i("taxonomy",ot,nt),learningProgramTerms:i("taxonomy",at,nt),postsList:Array.isArray(m)?m.map((function(e){return e})):m}}))(Ht),jt=JSON.parse('{"u2":"hrscourses/courses-list","W3":"widgets","be":{"align":true,"html":false}}'),At=wp.blocks.createBlock,Dt=jt.u2,It={from:[{type:"block",blocks:["hrscourses/list-courses"],transform:function(e){return At(Dt,e)}}]},Ft=wp.i18n.__,Ut=jt.u2,Wt=jt.W3,Gt=jt.be,Yt={title:Ft("Courses List"),icon:Xe,category:Wt,description:Ft("Display a list of courses."),keywords:[Ft("courses"),Ft("posts"),Ft("latest courses")],supports:Gt,example:{},edit:zt,transforms:It};var Jt=wp.i18n.__,qt=wp.data.withSelect,Qt=wp.apiFetch,Kt=wp.url.addQueryArgs,Xt=wp.element.Component,Zt=wp.blockEditor,$t=Zt.InspectorControls,er=Zt.BlockControls,tr=wp.components,rr=tr.Disabled,nr=tr.PanelBody,or=tr.Placeholder,ar=tr.QueryControls,sr=tr.RangeControl,lr=tr.Spinner,cr=tr.ToggleControl,ir=tr.Toolbar,ur=tr.RadioControl,mr=tr.ServerSideRender,pr={per_page:-1},dr=function(e){Ie(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=We(t);if(r){var o=We(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Ue(this,e)});function o(){var e;return ze(this,o),(e=n.apply(this,arguments)).state={taxLearningProgramsList:[]},e}return Ae(o,[{key:"componentDidMount",value:function(){var e=this;this.isStillMounted=!0,this.fetchRequest=Qt({path:Kt("/wp/v2/learning_program",pr)}).then((function(t){e.isStillMounted&&e.setState({taxLearningProgramsList:t})})).catch((function(){e.isStillMounted&&e.setState({taxLearningProgramsList:[]})}))}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=e.ListCourses,o=this.state.taxLearningProgramsList,a=t.displayCourseContentRadio,s=t.displayCourseContent,l=t.displayPostDate,c=t.postLayout,i=t.columns,m=t.order,p=t.orderBy,d=t.learningPrograms,g=t.coursesToShow,f=t.excerptLength,h=(0,u.createElement)($t,null,(0,u.createElement)(nr,{title:Jt("Course Content Settings")},(0,u.createElement)(cr,{label:Jt("Display course content"),checked:s,onChange:function(e){return r({displayCourseContent:e})}}),s&&(0,u.createElement)(ur,{label:"Show:",selected:a,options:[{label:"Excerpt",value:"excerpt"},{label:"Full post",value:"full_post"}],onChange:function(e){return r({displayCourseContentRadio:e})}}),s&&"excerpt"===a&&(0,u.createElement)(sr,{label:Jt("Max number of words in excerpt"),value:f,onChange:function(e){return r({excerptLength:e})},min:10,max:100})),(0,u.createElement)(nr,{title:Jt("Post Meta Settings")},(0,u.createElement)(cr,{label:Jt("Display post date"),checked:l,onChange:function(e){return r({displayPostDate:e})}})),(0,u.createElement)(nr,{title:Jt("Sorting and Filtering")},(0,u.createElement)(ar,{order:m,orderBy:p,numberOfItems:g,categoriesList:o,selectedCategoryId:d,onCategoryChange:function(e){return r({learningPrograms:""!==e?e:void 0})},onOrderChange:function(e){return r({order:e})},onOrderByChange:function(e){return r({orderBy:e})},onNumberOfItemsChange:function(e){return r({coursesToShow:e})}}),"grid"===c&&(0,u.createElement)(sr,{label:Jt("Columns"),value:i,onChange:function(e){return r({columns:e})},min:2,max:v?Math.min(6,n.length):6,required:!0}))),v=Array.isArray(n)&&n.length;if(!v)return(0,u.createElement)(u.Fragment,null,h,(0,u.createElement)(or,{icon:"admin-post",label:Jt("List Courses")},Array.isArray(n)?Jt("No courses found."):(0,u.createElement)(lr,null)));var y=[{icon:"list-view",title:Jt("List View"),onClick:function(){return r({postLayout:"list"})},isActive:"list"===c},{icon:"grid-view",title:Jt("Grid View"),onClick:function(){return r({postLayout:"grid"})},isActive:"grid"===c}];return(0,u.createElement)(u.Fragment,null,h,(0,u.createElement)(er,null,(0,u.createElement)(ir,{controls:y})),(0,u.createElement)(rr,null,(0,u.createElement)(mr,{block:"hrscourses/list-courses",attributes:t})))}}]),o}(Xt),gr=qt((function(e,t){var r=t.attributes,n=r.coursesToShow,o=r.order,a=r.orderBy,s=r.learningPrograms;return{ListCourses:(0,e("core").getEntityRecords)("postType","wsuwp_hrs_courses",(0,Ge.pickBy)({learningPrograms:s,order:o,orderby:a,per_page:n},(function(e){return!(0,Ge.isUndefined)(e)})))}}))(dr),fr=wp.components,hr=fr.Path,vr=fr.Rect,yr=fr.SVG,br=(0,u.createElement)(yr,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,u.createElement)(hr,{d:"M0,0h24v24H0V0z",fill:"none"}),(0,u.createElement)(vr,{x:"11",y:"7",width:"6",height:"2"}),(0,u.createElement)(vr,{x:"11",y:"11",width:"6",height:"2"}),(0,u.createElement)(vr,{x:"11",y:"15",width:"6",height:"2"}),(0,u.createElement)(vr,{x:"7",y:"7",width:"2",height:"2"}),(0,u.createElement)(vr,{x:"7",y:"11",width:"2",height:"2"}),(0,u.createElement)(vr,{x:"7",y:"15",width:"2",height:"2"}),(0,u.createElement)(hr,{d:"M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z"})),wr=JSON.parse('{"u2":"hrscourses/list-courses","W3":"widgets","be":{"align":true,"html":false,"inserter":false,"reusable":false}}'),Er=wp.i18n,Cr=Er.__,_r=Er._x,xr=wr.u2,kr=wr.W3,Lr=wr.be,Nr={title:Cr("List Courses"),category:kr,description:Cr("Display a list of the most recent courses."),icon:br,keywords:[Cr("recent posts")],supports:Lr,styles:[{name:"default",label:_r("Default","block style"),isDefault:!0},{name:"bulleted",label:_r("Bullets","block style")}],edit:gr,save:function(){return null}},Pr=wp.blocks.registerBlockType;[n,o,a,s,l,c,i].forEach((function(e){if(e){var t=e.settings,r=e.name;Pr(r,t)}}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(284)}();