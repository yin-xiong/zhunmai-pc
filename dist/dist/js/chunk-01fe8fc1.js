(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01fe8fc1"],{"2ffb":function(t,e,i){"use strict";var a=i("c121"),s=i.n(a);s.a},4310:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"website-order"},[i("div",[i("pageTitle"),i("div",[i("div",{staticClass:"tableTitle flex"},[t._m(0),i("div",[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"订单号/订单名称"},model:{value:t.searchMain,callback:function(e){t.searchMain=e},expression:"searchMain"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[t._v("搜索")])],1)],1)]),i("div",{staticClass:"tableMain"},[t._m(1),i("ul",{staticClass:"tableMain-body"},t._l(t.tableData,(function(e,a){return i("li",{staticClass:"tableMain-body-item"},[i("p",[t._v(t._s(e.orderNum))]),i("div",{staticClass:"flex tableMain-body-item-list"},[i("div",[i("div",{staticClass:"flex",staticStyle:{"justify-content":"flex-start"}},[i("el-image",{attrs:{src:e.src}}),i("div",{staticClass:"order-details"},[i("h2",{staticClass:"one-txt-cut"},[t._v(t._s(e.title))]),i("div",{staticClass:"goods-list-ext-center"},t._l(e.websiteStyle,(function(e){return i("span",[t._v(t._s(e))])})),0),i("div",{staticClass:"order-details-bottom"},[i("span",[t._v("爱站权重："+t._s(e.lovestation)+" ")]),i("span",[t._v("站长权重："+t._s(e.stationMaster))]),i("span",[t._v("日IP："+t._s(e.dayIp))]),i("span",[t._v("百度收录："+t._s(e.baiduInclude)+"万")]),i("span",[t._v("网站收入："+t._s(e.include))]),i("span",[t._v("商品编号："+t._s(e.orderNumer))])])])],1)]),i("div",[t._v("网站交易")]),i("div",[i("p",[t._v("总金额："),i("span",{staticStyle:{color:"#FF5D24","font-size":".16rem"}},[t._v("￥"+t._s(e.allPrice))])]),i("p",[t._v("单价："),i("span",{staticStyle:{color:"#E94A49"}},[t._v("￥"+t._s(e.unitPrice))])]),i("p",[t._v("服务费："),i("span",[t._v("￥"+t._s(e.servicePrice))])]),i("p",[t._v("优惠："),i("span",[t._v("￥"+t._s(e.preferentialPrice))])])]),i("div",[t._v(t._s(e.status))]),i("div",[i("p",{on:{click:t.toPay}},[t._v("去付款")]),i("p",{on:{click:t.toAudit}},[t._v("待审核")]),i("p",[t._v("取消订单")]),i("p",{on:{click:t.toDetails}},[t._v("订单详情")]),i("p",{staticClass:"active",on:{click:t.openTrading}},[t._v("跟进交易进度")])])])])})),0),i("div",{staticClass:"page flex"},[t._v(" 111 ")])])])],1),i("el-dialog",{attrs:{title:"跟进交易进度",visible:t.transactionSchedule,width:"30%"},on:{"update:visible":function(e){t.transactionSchedule=e}}},[i("div",{staticClass:"userTrading"},[i("div",{staticClass:"tradingContent"}),i("div",{staticClass:"inputTrading"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tradingText,expression:"tradingText"}],attrs:{placeholder:"回复卖家，跟进交接进度"},domProps:{value:t.tradingText},on:{input:function(e){e.target.composing||(t.tradingText=e.target.value)}}}),i("button",[t._v("发送")])])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{staticClass:"active"},[t._v("全部订单[6]")]),i("span",[t._v("待审核订单[2]")]),i("span",[t._v("待付款订单[2]")]),i("span",[t._v("待交接订单[2]")]),i("span",[t._v("已完成订单[0]")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tableMain-head flex"},[i("span",[t._v("订单详情")]),i("span",[t._v("订单类型")]),i("span",[t._v("价格")]),i("span",[t._v("订单状态")]),i("span",[t._v("操作")])])}],n=i("dcbc"),r={name:"websiteOrder",data:function(){return{searchMain:"",src:i("6602"),tableData:[{orderNum:"2019-2-16 15:34   订单号:3142471241",src:i("6602"),title:"爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…",websiteStyle:["女性时尚","游戏影音","生活娱乐"],lovestation:"1",stationMaster:"2",dayIp:"3",baiduInclude:"4",include:"5",orderNumer:"AF03ACYY30271101172HY640",allPrice:"5000.00",unitPrice:"4000.00",servicePrice:"3000.00",preferentialPrice:"2000.00",status:"待付款"},{orderNum:"2019-2-16 15:34   订单号:3142471241",src:i("6602"),title:"爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…",websiteStyle:["女性时尚","游戏影音","生活娱乐"],lovestation:"1",stationMaster:"2",dayIp:"3",baiduInclude:"4",include:"5",orderNumer:"AF03ACYY30271101172HY640",allPrice:"5000.00",unitPrice:"4000.00",servicePrice:"3000.00",preferentialPrice:"2000.00",status:"待付款"},{orderNum:"2019-2-16 15:34   订单号:3142471241",src:i("6602"),title:"爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…",websiteStyle:["女性时尚","游戏影音","生活娱乐"],lovestation:"1",stationMaster:"2",dayIp:"3",baiduInclude:"4",include:"5",orderNumer:"AF03ACYY30271101172HY640",allPrice:"5000.00",unitPrice:"4000.00",servicePrice:"3000.00",preferentialPrice:"2000.00",status:"待付款"},{orderNum:"2019-2-16 15:34   订单号:3142471241",src:i("6602"),title:"爱站权1爱站权1爱站权1 站长权1 百度秒收 微信迷其…",websiteStyle:["女性时尚","游戏影音","生活娱乐"],lovestation:"1",stationMaster:"2",dayIp:"3",baiduInclude:"4",include:"5",orderNumer:"AF03ACYY30271101172HY640",allPrice:"5000.00",unitPrice:"4000.00",servicePrice:"3000.00",preferentialPrice:"2000.00",status:"待付款"}],transactionSchedule:!1,tradingText:""}},components:{pageTitle:n["a"]},methods:{openTrading:function(){this.transactionSchedule=!0},toDetails:function(){this.$router.push({path:"/buyerOrderDetails"})},toAudit:function(){this.$router.push({path:"/toAudit"})},toPay:function(){this.$router.push({path:"/payment"})}}},l=r,c=(i("8069"),i("2ffb"),i("2877")),o=Object(c["a"])(l,a,s,!1,null,"8bb3f9d6",null);e["default"]=o.exports},6602:function(t,e,i){t.exports=i.p+"dist/img/g1.png"},8069:function(t,e,i){"use strict";var a=i("e850"),s=i.n(a);s.a},b4d8:function(t,e,i){"use strict";var a=i("dd0f"),s=i.n(a);s.a},c121:function(t,e,i){},dcbc:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pageTitle"},[i("div",{staticClass:"w1200"},[i("el-link",{attrs:{href:"/",underline:!1}},[t._v("当前位置：首页 >")]),t._v(" "),t.websiteTitle?i("el-link",{attrs:{underline:!1}},[t._v(t._s(t.websiteTitle))]):t._e()],1)])},s=[],n={name:"pageTitle",data:function(){return{websiteTitle:""}},created:function(){this.websiteTitle=this.$route.meta.title}},r=n,l=(i("b4d8"),i("2877")),c=Object(l["a"])(r,a,s,!1,null,"37828117",null);e["a"]=c.exports},dd0f:function(t,e,i){},e850:function(t,e,i){}}]);