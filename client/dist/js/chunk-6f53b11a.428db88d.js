(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f53b11a"],{"54e2":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"section-wrapper"},[e("div",[e("h1",{staticClass:"section-title font-color"},[t._v("Авторизація")]),e("div",{staticClass:"cards"},[e("div",[e("form",{staticClass:"card",on:{submit:function(s){return s.preventDefault(),t.signIn(s)}}},[t._m(0),e("div",{staticClass:"card-body"},[e("p",[t._v("Я здійснював тут покупки раніше і реєструвався")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",placeholder:"E-Mail адреса"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),e("div",{staticClass:"card-footer"},[e("div",[e("span",[e("router-link",{attrs:{to:"/"}},[t._v("Забули пароль?")])],1)]),e("div",[e("input",{staticClass:"btn",attrs:{type:"submit",value:"Увійти",disabled:t.getError||t.getProcessing}})])])])]),e("div",{staticClass:"card"},[t._m(1),t._m(2),e("div",{staticClass:"card-footer"},[e("div",[e("router-link",{attrs:{to:"/signup"}},[e("button",{staticClass:"btn"},[t._v("Продовжити")])])],1)])])])]),e("actions-tabs")],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-header"},[e("h2",[t._v("Постійний покупець")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-header"},[e("h2",[t._v("Новий покупець")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-body"},[e("p",[t._v("Реєстрація")]),e("article",[e("p",[t._v(" Створення облікового запису допоможе робити покупки бистріше та зручніше. Ви також зможете відслідковувати статус свого замовленн, користуватися закладками, бачити свої попередні замовлення або отримати знижку як наш постійний покупець. ")])])])}],n=e("5823"),r={data:function(){return{email:null,password:null}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},getProcessing:function(){return this.$store.getters.getProcessing},getError:function(){return this.$store.getters.getError}},methods:{signIn:function(){this.$store.dispatch("SIGN_IN",{email:this.email,password:this.password})}},watch:{isAuthenticated:function(t){!0===t&&this.$router.push("/profile")}},components:{ActionsTabs:n["a"]}},c=r,o=(e("c298"),e("2877")),l=Object(o["a"])(c,i,a,!1,null,"271cbf2c",null);s["default"]=l.exports},"550f":function(t,s,e){},5823:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("ul",{staticClass:"actions"},t._l(t.actionsList,(function(s){return e("router-link",{key:s.title,attrs:{to:s.path}},[e("li",{staticClass:"actions-item"},[t._v(t._s(s.title))])])})),1)])},a=[],n={data:function(){return{actionsList:[{icon:"",title:"Вхід",path:"/signin"},{icon:"",title:"Реєстрація",path:"/signup"},{icon:"",title:"Забули пароль",path:""}]}}},r=n,c=(e("c101"),e("2877")),o=Object(c["a"])(r,i,a,!1,null,"1e4a1e12",null);s["a"]=o.exports},"85c9":function(t,s,e){},c101:function(t,s,e){"use strict";var i=e("85c9"),a=e.n(i);a.a},c298:function(t,s,e){"use strict";var i=e("550f"),a=e.n(i);a.a}}]);
//# sourceMappingURL=chunk-6f53b11a.428db88d.js.map