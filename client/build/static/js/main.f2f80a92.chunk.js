(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(405)},218:function(e,t,a){},220:function(e,t,a){},222:function(e,t,a){},377:function(e,t,a){},398:function(e,t,a){},400:function(e,t,a){},402:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),s=a(413),o=a(416),i=(a(218),a(220),a(25)),m=a(29),u=a(34),p=a(32),d=a(35),h=(a(222),a(414)),E=a(415),f=a(406),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{trigger:r.a.createElement(E.a,null,"Sign In")},r.a.createElement(h.a.Header,null,"Sign in Page"),r.a.createElement(h.a.Content,{image:!0},r.a.createElement(f.a,{wrapped:!0,size:"large",src:"https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"}),r.a.createElement(h.a.Description,null,r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"register-form"},r.a.createElement("input",{type:"text",placeholder:"name"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("input",{type:"text",placeholder:"email address"}),r.a.createElement("button",null,"create"),r.a.createElement("p",{className:"message"},"Already registered? ",r.a.createElement("a",{href:"/#"},"Sign In"))),r.a.createElement("form",{className:"login-form"},r.a.createElement("input",{type:"text",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("button",null,"login"),r.a.createElement("p",{className:"message"},"Not registered? ",r.a.createElement("a",{href:"/signup"},"Create an account"))))))))}}]),t}(r.a.Component),v=(a(377),function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,null,[{key:"getCart",value:function(){return this.cartData||(this.cartData=JSON.parse(localStorage.getItem("cart"))||[]),this.cartData}},{key:"setCart",value:function(e){return this.cartData||(this.cartData=JSON.parse(localStorage.getItem("cart"))||[]),this.cartData.push(e),localStorage.setItem("cart",JSON.stringify(this.cartData)),this.cartData}},{key:"removeFromCartById",value:function(e){return this.cartData=this.cartData.filter(function(t){return t.id!==e}),localStorage.setItem("cart",JSON.stringify(this.cartData)),this.cartData}}]),e}()),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).itemsInCart=function(){a.state.cart.filter(function(e){return e.plantName}).length},a.renderCart=function(){if(a.state.cart)return r.a.createElement("div",{className:"cart-wrapper"},a.state.cart.map(function(e){return r.a.createElement("div",{className:"cart-entry"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{className:"image",src:e.image,alt:e.image})),r.a.createElement("div",{className:"content-box"},r.a.createElement("p",null,"Plant: ",e.plantName),r.a.createElement("p",null,"Amount: ",e.count),r.a.createElement("p",null,"Price of each: $",e.price),r.a.createElement("button",{onClick:function(t){return a.removeItem(e.id)},style:{float:"right"}},"X"),r.a.createElement("hr",null)))}),r.a.createElement("p",{className:"total-container"}," Total: ",a.state.total),r.a.createElement("button",{className:"checkout-button"},"Check Out"))},console.log("cart state"+a.state),a.state={cart:[],total:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"removeItem",value:function(e){console.log("removing "+e);var t=v.removeFromCartById(e),a=t.reduce(function(e,t){return t.price*t.count+e},0);this.setState({cart:t,total:a})}},{key:"openCart",value:function(){var e=v.getCart(),t=e.reduce(function(e,t){return t.price*t.count+e},0);this.setState({cart:e,total:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-modal"},r.a.createElement(h.a,{trigger:r.a.createElement("button",{className:"item"},r.a.createElement("i",{className:"fas fa-shopping-cart",id:"shopping-icon"})),onOpen:function(){return e.openCart()}},r.a.createElement(h.a.Header,null,r.a.createElement("p",null," Your Cart ")),r.a.createElement(h.a.Content,{image:!0},r.a.createElement(h.a.Description,null,this.renderCart()),r.a.createElement(f.a,{wrapped:!0,size:"medium",src:"https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"}))))}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{className:"navbar-content"},r.a.createElement("div",{className:"ui inverted segment",id:"navbar-background"},r.a.createElement("div",{className:"ui inverted secondary menu"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/",className:"logo"},"Toledo's Plants")),e.children,r.a.createElement("a",{className:"item right floated",id:"about-us",href:"/about"},"About Us"),r.a.createElement(N,null),r.a.createElement(g,null))))},y=function(){return r.a.createElement("div",{className:"about-container"})},k=function(){return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"signup-header"}),r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"register-form"},r.a.createElement("input",{type:"text",placeholder:"name"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("input",{type:"text",placeholder:"email address"}),r.a.createElement("button",null,"create"),r.a.createElement("p",{className:"message"},"Already registered? ",r.a.createElement("a",{href:"/#"},"Sign In"))),r.a.createElement("form",{className:"login-form"},r.a.createElement("input",{type:"text",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("button",null,"Register")))))},C=a(83),O=a.n(C),S={getPlants:function(){return O.a.get("http://localhost:3004/api/plants/")},savePlants:function(e){return O.a.post("/api/plants",e)},deleteBook:function(e){return O.a.delete("/api/books/"+e)}},j=(a(398),a(204)),w=(a(400),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleIncrement=function(){if(a.state.count>a.state.stock)return alert("Out of Stock");a.setState({count:a.state.count+1})},a.handleDecrement=function(){a.state.count<=1?a.setState(function(e){return{counter:e.count-1}}):a.setState({count:a.state.count-1})},a.onInputChange=function(e){a.setState({count:e})},a.addToCart=function(){console.log("state",a.state);var e=a.state;v.setCart(e)},a.state=Object(j.a)({count:1},e),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"payment-container"},r.a.createElement("button",{className:"decrement",onClick:this.handleDecrement},"-"),r.a.createElement("input",{type:"text",value:this.state.count,onChange:function(t){return e.onInputChange(t.target.value)}}),r.a.createElement("button",{className:"increment",onClick:this.handleIncrement},"+")),r.a.createElement("button",{className:"add-to-cart",onClick:this.addToCart},"Add To Cart"))}}]),t}(r.a.Component)),x=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.plantName,src:e.image})),r.a.createElement("div",{className:"content"},r.a.createElement("p",null," ",e.plantName),r.a.createElement("p",null,"$",e.price),r.a.createElement(w,{key:e._id,id:e._id,image:e.image,plantName:e.plantName,price:e.price,stock:e.stock})))},D=(a(402),function(e){var t=e.handleSearch;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",onKeyUp:t,className:"searchTerm",placeholder:"What are you looking for?"}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{className:"fa fa-search"}))))}),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadPlants=function(){S.getPlants().then(function(e){return a.setState({plants:e.data,searchedPlants:e.data})}).catch(function(e){return console.log(e)})},a.state={searchedPlants:[],plants:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadPlants()}},{key:"handleSearch",value:function(e){var t=e.target.value,a=this.state.plants.filter(function(e){return-1!==e.plantName.toLowerCase().search(t.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-"))});this.setState({searchedPlants:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,{handleSearch:this.handleSearch.bind(this)}),r.a.createElement("div",{className:"content-wrapper"},0!==this.state.searchedPlants.length?this.state.searchedPlants.map(function(e){return r.a.createElement(x,{key:e._id,_id:e._id,image:e.image,plantName:e.plantName,price:e.price,stock:e.stock})}):"NO RESULTS"))}}]),t}(r.a.Component);l.a.render(r.a.createElement(function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"subtle-background"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,null),r.a.createElement(o.a,{exact:!0,path:"/",component:I}),r.a.createElement(o.a,{exact:!0,path:"/about",component:y}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:k}))))},null),document.querySelector("#root"))}},[[213,2,1]]]);
//# sourceMappingURL=main.f2f80a92.chunk.js.map