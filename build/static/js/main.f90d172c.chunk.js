(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{34:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(35),c=a.n(s),i=a(9),r=a(6),l=a(2),o=a(3),d=a(5),j=a(4),h=a(13),u=a.n(h),m=(a(60),a(0)),b=function(e){return Object(m.jsx)("div",{id:"content",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-5",children:Object(m.jsx)("img",{className:"Image",alt:e.restaurant_name,src:e.restaurant_thumb})}),Object(m.jsx)("div",{className:"col-md-7",children:Object(m.jsxs)("div",{className:"hotel_name",children:[Object(m.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name}),Object(m.jsx)("div",{className:"city_name",children:e.address}),Object(m.jsx)("div",{className:"city_name rating",children:e.rating_text}),Object(m.jsxs)("div",{className:"city_name rating",children:["Rs.",e.cost]}),Object(m.jsxs)("div",{className:"labelDiv",children:[Object(m.jsx)("span",{className:"label label-primary",children:e.mealTypes[0].mealtype_name})," \xa0",Object(m.jsx)("span",{className:"label label-success",children:e.mealTypes[1].mealtype_name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"label label-warning",children:e.cuisines[0].cuisine_name})," \xa0",Object(m.jsx)("span",{className:"label label-danger",children:e.cuisines[1].cuisine_name})]})]})})]})},e._id)})):Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"No Data For this filter"})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"/images/loaderimg.gif",alt:"loader"}),Object(m.jsx)("h3",{children:"loading...."})]})}(e)})},p=(a(34),"https://zomatoapijuly.herokuapp.com/filter"),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCuisine=function(t){var a,n=sessionStorage.getItem("mealId"),s=t.target.value;a=""==s?"".concat(p,"/").concat(n):"".concat(p,"/").concat(n,"?cuisine=").concat(s),u.a.get(a).then((function(t){e.props.restPerCusinie(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"cusineFilter",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Cuisine Filter"})}),Object(m.jsxs)("div",{onChange:this.filterCuisine,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"Fast Food"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),a}(n.Component),x=O,g="https://zomatoapijuly.herokuapp.com/filter",v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).filterCost=function(t){var a,n=sessionStorage.getItem("mealId"),s=t.target.value.split("-"),c=s[0],i=s[1];a=""==t.target.value?"".concat(g,"/").concat(n):"".concat(g,"/").concat(n,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(a).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"cusineFilter",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Cost Filter"})}),Object(m.jsxs)("div",{onChange:this.filterCost,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"201-300"}),"201-300"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),"301-600"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),"601-1000"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),"1001-1500"]})]})]})}}]),a}(n.Component),f=v,N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).setDataAsPerFilter=function(e){n.setState({restaurantList:e})},n.state={restaurantList:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{id:"mainListing",children:[Object(m.jsxs)("div",{id:"filter",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"Filter"})}),Object(m.jsx)(x,{restPerCusinie:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)("hr",{}),Object(m.jsx)(f,{restPerCost:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(b,{listData:this.state.restaurantList})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://zomatoapijuly.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),a}(n.Component),y=(a(67),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(m.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},n.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(m.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]})}))},n.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("https://zomatoapijuly.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurant:e})}))},n.handleRest=function(e){n.props.history.push("/details/".concat(e.target.value))},n.state={location:"",restaurant:""},n}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(m.jsxs)("div",{id:"search",children:[Object(m.jsx)("div",{id:"logo",children:Object(m.jsx)("span",{children:"e!"})}),Object(m.jsx)("div",{class:"bike",children:Object(m.jsx)("img",{src:"https://i.ibb.co/XZMhbXx/bike2.gif",style:{height:70,width:70}})}),Object(m.jsxs)("div",{id:"heading",children:["Find The Best Restaurants, Cafes and bars ",Object(m.jsx)("span",{id:"usercity"})]}),Object(m.jsxs)("div",{id:"dropdown",children:[Object(m.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(m.jsx)("option",{children:"--- Select Location ---  "}),this.renderCity(this.state.location)]}),Object(m.jsxs)("select",{id:"restaurants",onChange:this.handleRest,children:[Object(m.jsx)("option",{children:"--- Select Restaurant ---  "}),this.renderRestaurants(this.state.restaurant)]})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoapijuly.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),a}(n.Component)),k=Object(r.e)(y),C=(a(68),function(e){return Object(m.jsxs)("div",{id:"quicksearch",children:[Object(m.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(m.jsx)("span",{id:"QuickSubHeading",children:"Discover restaurant by type of meal"}),Object(m.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(m.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(m.jsxs)("div",{className:"tileContainer",children:[Object(m.jsx)("div",{className:"tileComponent1",children:Object(m.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(m.jsxs)("div",{className:"tileComponent2",children:[Object(m.jsx)("div",{className:"componentHeading",children:e.mealtype}),Object(m.jsx)("div",{className:"componentSubHeading",children:e.content})]})]},e.mealtype_id)})}))}(e)})]})}),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={QuickData:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(C,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatoapijuly.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),a}(n.Component),I=function(){return Object(m.jsxs)("div",{id:"main",children:[Object(m.jsx)(k,{}),Object(m.jsx)(S,{})]})},_=a(24),D=a.n(_),w=a(37),P=(a(70),a(16)),L=(a(71),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).orderId=[],e.placeOrder=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var a=t.menudata;if(a)return a.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-7",children:[Object(m.jsx)("b",{children:t.menu_id})," \xa0",Object(m.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80}}),"\xa0\xa0 ",t.menu_name," - ",t.menu_price]}),Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){e.placeOrder(t.menu_id)},children:Object(m.jsx)("span",{className:"glyphicon glyphicon-plus"})})," \xa0",Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){e.removeOrder(t.menu_id)},children:Object(m.jsx)("span",{className:"glyphicon glyphicon-minus"})})]}),Object(m.jsx)("br",{})]},t.menu_id)}))},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(m.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-12 bg-success",children:[Object(m.jsx)("h1",{children:"Item Added"}),"Item Number ",this.renderCart(this.orderId)," added"]}),Object(m.jsx)("div",{className:"col-md-12 bg-info",children:this.renderMenu(this.props)})]})}}]),a}(n.Component)),T=Object(r.e)(L),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addToCart=function(t){console.log("data in card",t),e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-danger",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsx)("h3",{children:this.state.details.restaurant_name})}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("img",{src:t.restaurant_thumb,alt:t.restaurant_name,className:"sliderImage"}),Object(m.jsx)("button",{className:"btn btn-danger galButton",type:"button","data-toggle":"modal","data-target":"#myGal",children:"Click to See Image Gallery"}),Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{children:t.restaurant_name}),Object(m.jsx)("h2",{children:t.rating_text}),Object(m.jsxs)("h2",{children:[t.average_rating," Star"]}),Object(m.jsxs)(P.d,{children:[Object(m.jsxs)(P.b,{children:[Object(m.jsx)(P.a,{children:"Details"}),Object(m.jsx)(P.a,{children:"Menu"})]}),Object(m.jsxs)(P.c,{children:[Object(m.jsx)("p",{children:t.restaurant_name}),Object(m.jsx)("p",{children:t.rating_text}),Object(m.jsx)("p",{children:t.average_rating})]}),Object(m.jsxs)(P.c,{children:[Object(m.jsx)("h2",{children:"Menu"}),Object(m.jsx)(T,{menudata:this.state.menuList,finalOrder:function(t){e.addToCart(t)}})]})]}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(w.a)(D.a.mark((function e(){var t,a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://zomatoapijuly.herokuapp.com/details","/").concat(t));case 3:return a=e.sent,e.next=6,u.a.get("".concat("https://zomatoapijuly.herokuapp.com/menu","/").concat(t));case 6:n=e.sent,console.log(a.data),console.log(n.data),this.setState({details:a.data[0],menuList:n.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component),R=F,M=a(17),z=(a(72),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://zomatoapijuly.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(console.log("payment gateway"))},n.renderItems=function(e){return e?e.map((function(e){return Object(m.jsxs)("div",{className:"items",children:[Object(m.jsx)("img",{src:e.menu_image,alt:e.menu_name}),Object(m.jsx)("h3",{children:e.menu_name}),Object(m.jsxs)("h4",{children:["Rs ",e.menu_price]})]},e.menu_id)})):Object(m.jsx)("img",{src:"/images/loader.gif",alt:"loader"})},n.state={id:Math.floor(1e5*Math.random()),details:"",amount:0,hotel_name:n.props.match.params.restName,name:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[0]:"",phone:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[2]:"",email:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[1]:"",address:"",status:"Pending"},n}return Object(o.a)(a,[{key:"render",value:function(){return sessionStorage.getItem("userData")?(console.log(this.state),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"panel panel-info",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsxs)("h3",{children:["Your order from ",this.props.match.params.restName," is below:"]})}),Object(m.jsx)("div",{className:"panel-body",children:Object(m.jsxs)("form",{method:"POST",action:"http://zompay.herokuapp.com/paynow",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]}),Object(m.jsx)("input",{type:"hidden",name:"amount",value:this.state.amount}),Object(m.jsx)("input",{type:"hidden",name:"id",value:this.state.id})]}),this.renderItems(this.state.details),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsxs)("h2",{children:["Total Cost is Rs.",this.state.amount]})})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,type:"submit",children:"Checkout"})]})})]})]})):Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Login first to place booking"})})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),a=[];t.split(",").map((function(e){return a.push(parseInt(e)),"ok"})),fetch("https://zomatoapijuly.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){var a=0;t.map((function(e){return a+=parseInt(e.menu_price),"ok"})),e.setState({details:t,amount:a})}))}}]),a}(n.Component)),A=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Orders"})}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Id"}),Object(m.jsx)("th",{children:"Rest Name"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Address"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsx)("th",{children:"Status"}),Object(m.jsx)("th",{children:"Bank"}),Object(m.jsx)("th",{children:"Bank Status"})]})}),Object(m.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.hotel_name}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.address}),Object(m.jsxs)("td",{children:["Rs.",e.amount]}),Object(m.jsx)("td",{children:e.status}),Object(m.jsx)("td",{children:e.bank}),Object(m.jsx)("td",{children:e.bank_status})]})}))}(e)})]})]})},E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={orders:""},e}return Object(o.a)(a,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(A,{orderData:this.state.orders})}):Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Login first to see booking"})})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.location){var t=this.props.location.search;if(t){var a={status:"Delivered",date:t.split("&")[2].split("=")[1],bank_status:t.split("&")[0].split("=")[1],bank:t.split("&")[3].split("=")[1]},n=t.split("&")[1].split("=")[1].split("_")[1];fetch("".concat("https://zomatoapijuly.herokuapp.com/updateOrder","/").concat(n),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)})}}u.a.get("".concat("https://zomatoapijuly.herokuapp.com/viewOrder","?email=").concat(sessionStorage.getItem("userData").split(",")[1])).then((function(t){e.setState({orders:t.data})}))}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://app-logout.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/login"))},n.state={name:"",phone:"",email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"panel panel-info",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsx)("h3",{children:"Register"})}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"})]})]})]})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("https://app-logout.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?n.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),n.props.history.push("/"))}))},n.state={email:"",password:"",message:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"panel panel-warning",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsx)("h3",{children:"Login"})}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("h2",{style:{color:"red"},children:this.state.message}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Login"})]})]})]})}}]),a}(n.Component),Q=(a(73),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleLogout=function(){e.setState({userData:""}),sessionStorage.removeItem("ltk"),sessionStorage.removeItem("userData"),e.props.history.push("/")},e.conditionalHeader=function(){if(e.state.userData.name){var t=e.state.userData,a=[t.name,t.email,t.phone,t.role];return sessionStorage.setItem("userData",a),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("button",{className:"btn btn-info",children:["Hi ",e.state.userData.name]}),"\xa0",Object(m.jsx)("button",{className:"btn btn-warning",onClick:e.handleLogout,children:"Logout"})]})}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.b,{to:"/login",className:"btn btn-success",children:Object(m.jsx)("span",{className:"glyphicon glyphicon-log-in",children:" LogIn"})})," \xa0",Object(m.jsx)(i.b,{to:"/register",className:"btn btn-warning",children:Object(m.jsx)("span",{className:"glyphicon glyphicon-user",children:" Register"})})]})},e.state={userData:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("header",{id:"header",children:[Object(m.jsxs)("div",{id:"logo_main",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("h1",{id:"headingListing",children:"E!"})}),Object(m.jsx)(i.b,{to:"/viewOrder",children:"Orders"})]}),Object(m.jsx)("div",{className:"logoRight",children:this.conditionalHeader()})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://app-logout.herokuapp.com/api/auth/userInfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})}))}}]),a}(n.Component)),B=Object(r.e)(Q),G=function(){return Object(m.jsxs)(i.a,{forceRefresh:!0,children:[Object(m.jsx)(B,{}),Object(m.jsx)(r.a,{exact:!0,path:"/",component:I}),Object(m.jsx)(r.a,{path:"/list/:mealId",component:N}),Object(m.jsx)(r.a,{path:"/details/:restId",component:R}),Object(m.jsx)(r.a,{path:"/placeOrder/:restName",component:z}),Object(m.jsx)(r.a,{path:"/viewOrder",component:E}),Object(m.jsx)(r.a,{path:"/register",component:H}),Object(m.jsx)(r.a,{path:"/login",component:J})]})};c.a.render(Object(m.jsx)(G,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f90d172c.chunk.js.map