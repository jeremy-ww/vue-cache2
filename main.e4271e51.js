!function(t){function n(n){for(var r,c,s=n[0],i=n[1],u=n[2],l=0,h=[];l<s.length;l++)c=s[l],o[c]&&h.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(p&&p(n);h.length;)h.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var i=e[s];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},o={1:0},a=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},c.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var p=i;a.push([10,0]),e()}({10:function(t,n,e){t.exports=e(4)},4:function(t,n,e){"use strict";function r(t){return void 0!==t&&null!==t}e.r(n);var o={name:"cache-page",components:{VueCache:{name:"v-cache",abstract:!0,props:{cacheKey:{type:String,required:!0}},data:function(){return{cache:Object.create(null)}},render:function(){var t,n=this.$slots.default,e=function(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(r(e)&&(r(e.componentOptions)||(o=e).isComment&&o.asyncFactory))return e}var o}(n),o=e&&e.componentOptions;if(o){var a=(t=o)&&(t.Ctor.options.name||t.tag),c=this.cache,s=a+this.cacheKey;e.key=s,c[s]?e.componentInstance=c[s].componentInstance:c[s]=e,e.data.keepAlive=!0}return e||n&&n[0]},destroyed:function(){Object.values(this.cache).forEach(function(t){t.componentInstance.$destroy()})}}}},a=e(0),c=Object(a.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("main",[n("fieldset",[n("legend",[this._v("Main (Router-View)")]),this._v(" "),n("transition",{attrs:{name:"fade"}},[n("vue-cache",{attrs:{"cache-key":this.$route.path}},[n("router-view",{staticClass:"container"})],1)],1)],1)])},[],!1,null,null,null).exports;var s=function(t){e(9)},i=Object(a.a)({name:"app",data:function(){return{urls:["5847857556760887","3003116906988217","466208369981173","6252791263487563","008058658041662392"],logs:[]}}},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"app"}},[e("aside",{staticClass:"nav"},[e("div",[e("h2",[t._v("Foo Component")]),t._v(" "),t._l(t.urls,function(n){return e("p",{key:n},[e("router-link",{attrs:{to:"/cache/foo/"+n+"/"}},[t._v("\n          Foo "+t._s(n)+"\n        ")])],1)})],2),t._v(" "),e("div",[e("h2",[t._v("Bar Component")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/cache/bar/"}},[t._v("\n          Bar "+t._s(t.path)+"\n        ")])],1)]),t._v(" "),e("div",{staticClass:"logs"},[e("h2",[t._v("Component Created Log")]),t._v(" "),t._l(t.logs,function(n,r){return e("p",{key:r},[t._v("\n        "+t._s(n)+"\n      ")])})],2)]),t._v(" "),e("router-view")],1)},[],!1,s,null,null).exports,u=e(3),p=Object(a.a)({name:"bar",created:function(){this.$parent.$parent.logs.push("Bar Component Created !")}},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("p",[this._v("\n    Bar Component Instance\n  ")])])}],!1,null,null,null).exports,l={name:"foo",props:{id:{type:String,default:""}},data:function(){return{count:0,random:Math.random()}},created:function(){var t="Foo Component Instance `".concat(this.id,"` Created !");this.$parent.$parent.logs.push(t)}},h=Object(a.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("\n    Foo Component Instance "+t._s(t.id)+"\n  ")]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("\n    Custom State: \n    "),e("button",{on:{click:function(n){t.count++}}},[t._v("\n      count "+t._s(t.count)+"\n    ")])]),t._v(" "),e("p",[t._v("\n    Random: "+t._s(t.random)+"\n  ")])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("\n    Native Input: "),n("input",{attrs:{type:"text",placeholder:"Type something here."}})])}],!1,null,null,null).exports,f=e(2);f.a.use(u.a);var v=new u.a({routes:[{path:"/cache",name:"cache",component:c,children:[{path:"foo/:id?",props:!0,component:h},{path:"bar/:id?",props:!0,component:p}]}]});new f.a({el:"#app",router:v,render:function(t){return t(i)}})},9:function(t,n,e){}});
//# sourceMappingURL=main.e4271e51.js.map