(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc6205c2"],{"345c":function(e,t,n){},bdc8:function(e,t,n){"use strict";var i=n("345c"),c=n.n(i);c.a},f7c4:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"order-confirmation"},[n("div",[n("headerTop"),n("orderHead"),n("div",{staticClass:"order-confirmation-main"},[n("div",{staticClass:"w1200"},[n("orderInfo"),n("div",{staticClass:"payWay"},[e._m(0),n("div",[n("h3",[e._v("服务费支付方式")]),n("div",e._l(e.serviceFee,(function(t,i){return n("button",{class:e.serviceFeeActive==t.index?"active":"",on:{click:function(n){return e.getServiceFee(t.index)}}},[e._v(e._s(t.name)),e._m(1,!0)])})),0),e._m(2)])]),n("div",{staticClass:"payMoney"},[e._m(3),e._m(4),e._m(5),e._m(6),n("div",[n("el-button",{attrs:{type:"info"},on:{click:e.subOrder}},[e._v("提交订单")])],1),n("div",[n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("点击提交订单表示您已同意")]),n("router-link",{attrs:{to:""}},[e._v("《准买网交易规则》")])],1)])],1)]),n("footContent"),n("fixed")],1)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("支付方式")]),n("div",[n("button",{staticClass:"active"},[e._v("支付宝支付"),n("span",[n("i",{staticClass:"iconfont icon-gou"})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"iconfont icon-gou"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("收取"),n("i",[e._v("3%")]),e._v("服务费，买家承担服务费"),n("i",[e._v("xxx")]),e._v("元，卖家应得"),n("i",[e._v("xxx")]),e._v("元")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("1件商品，总商品金额：")]),n("span",{staticClass:"w100"},[n("i",[e._v("￥")]),e._v("5000.00")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("服务费：")]),n("span",{staticClass:"w100"},[e._v("￥100.00")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("优惠：")]),n("span",{staticClass:"w100"},[e._v("￥0.00")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("应付总额：")]),n("span",{staticClass:"w100 money"},[n("i",[e._v("￥")]),e._v("5000.00")])])}],a=n("1451"),s=n("076e"),r=n("0493"),o=n("1e3f"),v=n("6340"),d={name:"orderConfirmation",data:function(){return{serviceFeeActive:0,serviceFee:[{name:"买家付",index:1},{name:"卖家付",index:2},{name:"买卖双方分摊",index:3}],checked:!1}},components:{headerTop:a["a"],orderHead:r["a"],footContent:s["a"],fixed:v["a"],orderInfo:o["a"]},methods:{getServiceFee:function(e){this.serviceFeeActive=e},subOrder:function(){this.$router.push({path:"/orderGenerate"})}}},_=d,u=(n("bdc8"),n("2877")),l=Object(u["a"])(_,i,c,!1,null,"66393f52",null);t["default"]=l.exports}}]);