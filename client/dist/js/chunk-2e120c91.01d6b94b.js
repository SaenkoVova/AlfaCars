(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e120c91"],{"26e6":function(t,e,a){"use strict";var i=a("9914"),r=a.n(i);r.a},"44aa":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.car?a("h1",{staticClass:"section-title"},[t._v("Запчастини на "+t._s(t.car.ukrTitle))]):t._e(),t.detailCategories?a("div",{staticClass:"section-wrapper"},[a("sub-categories-list",{attrs:{slag:t.fullRoute,subCategories:t.detailCategories}}),a("div",[a("grid",{attrs:{slag:t.fullRoute,subCategories:t.detailCategories}})],1)],1):t._e()])},r=[],s=(a("99af"),a("7db0"),a("5648")),n=a("454f"),c={props:{slag:{type:String,required:!0},carSlag:{type:String,required:!0}},data:function(){return{detailCategories:[]}},computed:{car:function(){var t=this;return this.$store.getters.getSubCategories.find((function(e){return e.slag===t.carSlag}))},fullRoute:function(){return"".concat(this.slag,"/").concat(this.carSlag)}},components:{SubCategoriesList:s["a"],Grid:n["a"]},created:function(){var t=this,e=a("bc3a");e.get("http://localhost:5000/api/categories/detailscategory",{params:{carSlag:this.carSlag}}).then((function(e){t.detailCategories=e.data.detailCategories}))}},u=c,l=(a("dc2c"),a("2877")),o=Object(l["a"])(u,i,r,!1,null,"359a81e5",null);e["default"]=o.exports},"454f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"sub-categories-grid"},t._l(t.subCategories,(function(e){return i("router-link",{key:e._id,attrs:{to:"/"+t.slag+"/"+e.slag}},[i("li",{staticClass:"sub-categories-grid-item"},[i("figure",[i("img",{attrs:{src:a("1771")("./"+e.image),alt:"subcateogry image"}}),i("figcaption",[i("span",[t._v(t._s(e.title))])])])])])})),1)])},r=[],s={props:{subCategories:{type:Array,required:!0},slag:{type:String,required:!0}}},n=s,c=(a("26e6"),a("2877")),u=Object(c["a"])(n,i,r,!1,null,"68588b0f",null);e["a"]=u.exports},4816:function(t,e,a){},5648:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"subcategories"},[a("li",{staticClass:"subcategories-item muted"},[t._v("Виберіть підкатегорію")]),t._l(t.subCategories,(function(e){return a("router-link",{key:e._id,attrs:{to:"/"+t.slag+"/"+e.slag}},[a("li",{staticClass:"subcategories-item"},[t._v(t._s(e.originalTitle||e.title))])])}))],2)])},r=[],s={props:{subCategories:{type:Array,required:!0},slag:{type:String,required:!0}}},n=s,c=(a("6753"),a("2877")),u=Object(c["a"])(n,i,r,!1,null,"9dd0175a",null);e["a"]=u.exports},6753:function(t,e,a){"use strict";var i=a("a48a"),r=a.n(i);r.a},9914:function(t,e,a){},a48a:function(t,e,a){},dc2c:function(t,e,a){"use strict";var i=a("4816"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-2e120c91.01d6b94b.js.map