(this["webpackJsonppuppy-store"]=this["webpackJsonppuppy-store"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),s=(a(12),a(1)),c=a(2),l=a(4),u=a(3),d=(a(13),[{id:1,name:"Teething Rings",price:"$1.99",description:"These chews can help reduce destructive chewing behavior while providing healthy benefits. Great taste of chicken in each and every bite.",img:"./photos/chewToy.png",likes:99},{id:2,name:"Harnest",price:"$10.99",description:"Soft, stretchy, and resilient. A cushioned, lightweight harness that\u2019s simple to secure and easy to link up with.",img:"./photos/harnest.png",likes:14},{id:3,name:"Leash",price:"$15.99",description:"The Flexi New Comfort Medium Retractable Dog Leash measures 16 feet, and comes with an adjustable handle for comfort and convenience.",img:"./photos/leash.png",likes:70},{id:4,name:"Pee-Pads",price:"$30.99",description:"Super absorbent pads are specially treated to attract your puppy like magic. Pup will be naturally attracted to the pad.",img:"./photos/peepads.png",likes:140},{id:5,name:"Plush Toy",price:"$17.99",description:"This toy comes in a variety of adorable food-related options including milk and cookies, a popcorn bucket, coffee and donuts. ",img:"./photos/toy.png",likes:14},{id:6,name:"Chewy Toy",price:"$7.99",description:"Bristles raised during chewing will help clean teeth and prevent tartar build up. Designed for teething puppies.",img:"./photos/chewToy2.png",likes:50}]),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={data:[],filter:""},e.handleLike=function(t){var a=e.state.data.map((function(e){return e.id===t?Object.assign({},e,{likes:e.likes+1}):e}));e.setState({data:a})},e.alphabeticalSort=function(){e.setState(e.state.data.sort((function(e,t){return e.name.localeCompare(t.name)})))},e.likeSort=function(){e.setState(e.state.data.sort((function(e,t){return t.likes-e.likes})))},e.handleChangeSort=function(t){console.log(e.handleChange),e.setState({filter:t.target.value})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:d})}},{key:"render",value:function(){var e=this.state.filter;return i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Puppy Store"),i.a.createElement("div",{className:"searchComponents"},i.a.createElement("input",{className:"search",placeholder:"SEARCH",value:e,onChange:this.handleChangeSort}),i.a.createElement("button",{className:"searchButton",onClick:this.alphabeticalSort,value:"alpha"},"A_Z"),i.a.createElement("button",{className:"searchButton",onClick:this.likeSort,value:"likes"},"Popularity")),i.a.createElement("div",{className:"container"},i.a.createElement(p,{data:this.state.data,handleLike:this.handleLike,filter:this.state.filter})))}}]),a}(i.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data,a=this.props.filter.toLowerCase();return t.filter((function(e){return Object.keys(e).some((function(t){return"string"===typeof e[t]&&e[t].toLowerCase().includes(a)}))})).map((function(t){return i.a.createElement("div",{className:"card",key:t.id},i.a.createElement("div",{className:"name"},i.a.createElement("h2",null,t.name),i.a.createElement("button",{className:"likeButton",onClick:function(){return e.props.handleLike(t.id)}},i.a.createElement("p",{className:"totalLikes"},t.likes))),i.a.createElement("div",{className:"description"},i.a.createElement("h3",{className:"description-header"},"Description:"),i.a.createElement("br",null),i.a.createElement("br",null),t.description,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,t.price)),i.a.createElement("div",{className:"image"},i.a.createElement("img",{className:"images",src:t.img})),i.a.createElement("div",{className:"add-to-cart"},i.a.createElement("button",{className:"cart-button"},"Add To Cart")))}))}}]),a}(i.a.Component),m=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.44d11885.chunk.js.map