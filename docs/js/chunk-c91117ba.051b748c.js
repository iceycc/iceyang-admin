(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c91117ba"],{"48aa":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-search",attrs:{flex:"dir:top"}},[n("div",{staticClass:"panel-search__input-group",attrs:{"flex-box":"0",flex:"dir:top main:center cross:center"},on:{click:function(t){return t.target!==t.currentTarget?null:e.handlePanelClick(t)}}},[n("d2-icon-svg",{staticClass:"panel-search__logo",attrs:{name:"d2-admin-text"}}),n("el-autocomplete",{ref:"input",staticClass:"panel-search__input",attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索页面","fetch-suggestions":e.querySearch,"trigger-on-focus":!1,clearable:!0},on:{select:e.handleSelect},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.handleEsc(t):null}},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.item;return n("d2-panel-search-item",{attrs:{item:t}})}}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),n("div",{staticClass:"panel-search__tip"},[e._v("\n      您可以使用快捷键\n      "),n("span",{staticClass:"panel-search__key"},[e._v(e._s(e.hotkey.open))]),e._v("\n      唤醒搜索面板，按\n      "),n("span",{staticClass:"panel-search__key"},[e._v(e._s(e.hotkey.close))]),e._v("\n      关闭\n    ")])],1),e.resultsList.length>0?n("div",{staticClass:"panel-search__results-group",attrs:{"flex-box":"1"}},[n("el-card",[n("div",{staticClass:"panel-search__results-group-inner"},e._l(e.resultsList,function(t,r){return n("d2-panel-search-item",{key:r,attrs:{item:t,"hover-mode":!0},nativeOn:{click:function(n){e.handleResultsGroupItemClick(t.path)}}})}))])],1):e._e()])},i=[],o=(n("386d"),n("c93e")),s=n("ffe7"),a=n.n(s),c=n("2f62"),h=n("b55f"),l={mixins:[h["a"]],components:{"d2-panel-search-item":function(){return n.e("chunk-5e7d1379").then(n.bind(null,"f1ee"))}},data:function(){return{searchText:"",results:[]}},computed:Object(o["a"])({},Object(c["e"])("d2admin/search",["hotkey","pool"]),{resultsList:function(){return 0===this.results.length&&""===this.searchText?this.pool.map(function(e){return Object(o["a"])({value:e.fullTitle},e)}):this.results}}),methods:{querySearch:function(e,t){var n=this.pool,r=this.query(e?n:[],e);this.results=r,t(r)},query:function(e,t){return new a.a(e,{shouldSort:!0,tokenize:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:["fullTitle","path"]}).search(t).map(function(e){return Object(o["a"])({value:e.fullTitle},e)})},focus:function(){var e=this;this.input="",setTimeout(function(){e.$refs.input.focus(),e.searchText="",e.results=[]},500)},handleResultsGroupItemClick:function(e){e!==this.$route.path?this.handleMenuSelect(e):this.handleEsc()},handleSelect:function(e){var t=this,n=e.path;n!==this.$route.path?this.$nextTick(function(){t.handleMenuSelect(n)}):this.handleEsc()},closeSuggestion:function(){this.$refs.input.activated&&(this.$refs.input.suggestions=[],this.$refs.input.activated=!1)},handlePanelClick:function(){this.handleEsc()},handleEsc:function(){var e=this;this.closeSuggestion(),this.$nextTick(function(){e.$emit("close")})}}},u=l,f=(n("b2d7"),n("2877")),d=Object(f["a"])(u,r,i,!1,null,"0fcf3d28",null);d.options.__file="index.vue";t["default"]=d.exports},b2d7:function(e,t,n){"use strict";var r=n("facd"),i=n.n(r);i.a},b55f:function(e,t,n){"use strict";var r=n("c276");t["a"]={methods:{handleMenuSelect:function(e,t){/^d2-menu-empty-\d+$/.test(e)||void 0===e?this.$message.warning("临时菜单"):/^https:\/\/|http:\/\//.test(e)?r["a"].open(e):this.$router.push({path:e})}}}},facd:function(e,t,n){},ffe7:function(e,t,n){
/*!
 * Fuse.js v3.2.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function(t,n){e.exports=n()})(0,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(5),s=n(7),a=n(4),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,s=n.distance,c=void 0===s?100:s,h=n.threshold,l=void 0===h?.6:h,u=n.maxPatternLength,f=void 0===u?32:u,d=n.isCaseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,g=void 0===v?/ +/g:v,m=n.findAllMatches,y=void 0!==m&&m,k=n.minMatchCharLength,x=void 0===k?1:k;i(this,e),this.options={location:o,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:p,tokenSeparator:g,findAllMatches:y,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=a(this.pattern))}return r(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var i=this.options,a=i.location,c=i.distance,h=i.threshold,l=i.findAllMatches,u=i.minMatchCharLength;return s(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,n){"use strict";var r=n(0),i=function e(t,n,i){if(n){var o=n.indexOf("."),s=n,a=null;-1!==o&&(s=n.slice(0,o),a=n.slice(o+1));var c=t[s];if(null!==c&&void 0!==c)if(a||"string"!==typeof c&&"number"!==typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],a,i);else a&&e(c,a,i);else i.push(c.toString())}else i.push(t);return i};e.exports=function(e,t){return i(e,t,[])}},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,i=-1,o=0,s=e.length;o<s;o+=1){var a=e[o];a&&-1===r?r=o:a||-1===r||(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}},function(e,t,n){"use strict";e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var i=0;i<n;i+=1)t[e.charAt(i)]|=1<<n-i-1;return t}},function(e,t,n){"use strict";var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,i=new RegExp(t.replace(r,"\\$&").replace(n,"|")),o=e.match(i),s=!!o,a=[];if(s)for(var c=0,h=o.length;c<h;c+=1){var l=o[c];a.push([e.indexOf(l),l.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,i=t.currentLocation,o=void 0===i?0:i,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(a-o);return h?l+u/h:u?1:l}},function(e,t,n){"use strict";var r=n(6),i=n(3);e.exports=function(e,t,n,o){for(var s=o.location,a=void 0===s?0:s,c=o.distance,h=void 0===c?100:c,l=o.threshold,u=void 0===l?.6:l,f=o.findAllMatches,d=void 0!==f&&f,p=o.minMatchCharLength,v=void 0===p?1:p,g=a,m=e.length,y=u,k=e.indexOf(t,g),x=t.length,_=[],S=0;S<m;S+=1)_[S]=0;if(-1!==k){var b=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(y=Math.min(b,y),k=e.lastIndexOf(t,g+x),-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});y=Math.min(M,y)}}k=-1;for(var w=[],C=1,L=x+m,A=1<<x-1,T=0;T<x;T+=1){var I=0,O=L;while(I<O){var $=r(t,{errors:T,currentLocation:g+O,expectedLocation:g,distance:h});$<=y?I=O:L=O,O=Math.floor((L-I)/2+I)}L=O;var P=Math.max(1,g-O+1),j=d?m:Math.min(g+O,m)+x,E=Array(j+2);E[j+1]=(1<<T)-1;for(var z=j;z>=P;z-=1){var F=z-1,q=n[e.charAt(F)];if(q&&(_[F]=1),E[z]=(E[z+1]<<1|1)&q,0!==T&&(E[z]|=(w[z+1]|w[z])<<1|1|w[z+1]),E[z]&A&&(C=r(t,{errors:T,currentLocation:F,expectedLocation:g,distance:h}),C<=y)){if(y=C,k=F,k<=g)break;P=Math.max(1,2*g-k)}}var J=r(t,{errors:T+1,currentLocation:g,expectedLocation:g,distance:h});if(J>y)break;w=E}return{isMatch:k>=0,score:0===C?.001:C,matchedIndices:i(_,v)}}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(1),s=n(2),a=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,a=n.distance,c=void 0===a?100:a,h=n.threshold,l=void 0===h?.6:h,u=n.maxPatternLength,f=void 0===u?32:u,d=n.caseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,g=void 0===v?/ +/g:v,m=n.findAllMatches,y=void 0!==m&&m,k=n.minMatchCharLength,x=void 0===k?1:k,_=n.id,S=void 0===_?null:_,b=n.keys,M=void 0===b?[]:b,w=n.shouldSort,C=void 0===w||w,L=n.getFn,A=void 0===L?s:L,T=n.sortFn,I=void 0===T?function(e,t){return e.score-t.score}:T,O=n.tokenize,$=void 0!==O&&O,P=n.matchAllTokens,j=void 0!==P&&P,E=n.includeMatches,z=void 0!==E&&E,F=n.includeScore,q=void 0!==F&&F,J=n.verbose,R=void 0!==J&&J;i(this,e),this.options={location:o,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:p,tokenSeparator:g,findAllMatches:y,minMatchCharLength:x,id:S,keys:M,includeMatches:z,includeScore:q,shouldSort:C,getFn:A,sortFn:I,verbose:R,tokenize:$,matchAllTokens:j},this.setCollection(t)}return r(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),n=t.tokenSearchers,r=t.fullSearcher,i=this._search(n,r),o=i.weights,s=i.results;return this._computeScore(o,s),this.options.shouldSort&&this._sort(s),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)t.push(new o(n[r],this.options));var s=new o(e,this.options);return{tokenSearchers:t,fullSearcher:s}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=this.list,r={},i=[];if("string"===typeof n[0]){for(var o=0,s=n.length;o<s;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:r,results:i,tokenSearchers:e,fullSearcher:t});return{weights:null,results:i}}for(var a={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!==typeof d){if(a[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else a[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:i,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:i}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,i=void 0===r?-1:r,o=e.value,s=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,p=void 0===d?{}:d,v=t.results,g=void 0===v?[]:v;if(void 0!==o&&null!==o){var m=!1,y=-1,k=0;if("string"===typeof o){this._log("\nKey: "+(""===n?"-":n));var x=f.search(o);if(this._log('Full text: "'+o+'", score: '+x.score),this.options.tokenize){for(var _=o.split(this.options.tokenSeparator),S=[],b=0;b<l.length;b+=1){var M=l[b];this._log('\nPattern: "'+M.pattern+'"');for(var w=!1,C=0;C<_.length;C+=1){var L=_[C],A=M.search(L),T={};A.isMatch?(T[L]=A.score,m=!0,w=!0,S.push(A.score)):(T[L]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'+L+'", score: '+T[L])}w&&(k+=1)}y=S[0];for(var I=S.length,O=1;O<I;O+=1)y+=S[O];y/=I,this._log("Token score average:",y)}var $=x.score;y>-1&&($=($+y)/2),this._log("Score average:",$);var P=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+P),(m||x.isMatch)&&P){var j=p[c];j?j.output.push({key:n,arrayIndex:i,value:o,score:$,matchedIndices:x.matchedIndices}):(p[c]={item:s,output:[{key:n,arrayIndex:i,value:o,score:$,matchedIndices:x.matchedIndices}]},g.push(p[c]))}}else if(a(o))for(var E=0,z=o.length;E<z;E+=1)this._analyze({key:n,arrayIndex:E,value:o[E],record:s,index:c},{resultMap:p,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var i=t[n].output,o=i.length,s=1,a=1,c=0;c<o;c+=1){var h=e?e[i[c].key].weight:1,l=1===h?i[c].score:i[c].score||.001,u=l*h;1!==h?a=Math.min(a,u):(i[c].nScore=u,s*=u)}t[n].score=1===a?s:a,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this.options.verbose&&this._log("\n\nOutput:\n\n",JSON.stringify(e));var n=[];this.options.includeMatches&&n.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,i=n.length;r<i;r+=1){var o=n[r];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}}),this.options.includeScore&&n.push(function(e,t){t.score=e.score});for(var r=0,i=e.length;r<i;r+=1){var o=e[r];if(this.options.id&&(o.item=this.options.getFn(o.item,this.options.id)[0]),n.length){for(var s={item:o.item},a=0,c=n.length;a<c;a+=1)n[a](o,s);t.push(s)}else t.push(o.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}]),e}();e.exports=c}])})}}]);
//# sourceMappingURL=chunk-c91117ba.051b748c.js.map