(window.webpackJsonptestapp=window.webpackJsonptestapp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(7),o=n.n(a),c=(n(14),n(1)),s=n(2),l=n(4),u=n(3),m=n(5),h=n(8),k=n.n(h),p=(n(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,"This is awesome"),i.a.createElement("p",null,"Why the fuck no text is getting printed ? ?"))}}]),t}(i.a.Component)),f=(n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).interval=void 0,n.interval=null,n.state={time:new Date,seconds:0,minutes:0,hours:12},n.dump(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"tick",value:function(){this.setState({time:new Date}),this.setState(function(e){var t=e.seconds,n=e.minutes,r=e.hours;return++t>=60&&(t=0,n++),n>=60&&(n=0,r++),r>=13&&(r=1),{seconds:t,minutes:n,hours:r}},this.dump)}},{key:"dump",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.interval=window.setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&window.clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement(function(e){var t=30*e.little+e.big/2||0,n=6*e.big||0,r=6*e.fast||0,a=function(e){return"rotate("+e+",80,80)"};return i.a.createElement("svg",{viewBox:"0 0 160 160",width:"160pt",height:"160pt"},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf"},i.a.createElement("rect",{width:"160",height:"160"}))),i.a.createElement("g",{"clip-path":"url(#_clipPath_IAv25CjndUvOTDrZhLzZ3EkaVHrkuZNf)"},i.a.createElement("circle",{"vector-effect":"non-scaling-stroke",cx:"79.99999999999999",cy:"79.99999999999999",r:"70",fill:"rgb(49,101,128)","stroke-width":"1",stroke:"rgb(0,0,0)","stroke-opacity":"0.75","stroke-linejoin":"miter","stroke-linecap":"square","stroke-miterlimit":"3"}),i.a.createElement("circle",{"vector-effect":"non-scaling-stroke",cx:"80",cy:"80",r:"1",fill:"none","stroke-width":"1",stroke:"rgb(202,233,246)","stroke-linejoin":"miter","stroke-linecap":"butt","stroke-miterlimit":"3"}),i.a.createElement("line",{x1:"80",y1:"80",x2:"80",y2:"20",transform:a(r),"vector-effect":"non-scaling-stroke","stroke-width":"1",stroke:"rgb(218,240,253)","stroke-linejoin":"miter","stroke-linecap":"square","stroke-miterlimit":"3"}),i.a.createElement("line",{x1:"80",y1:"80",x2:"80",y2:"20",transform:a(n),"vector-effect":"non-scaling-stroke","stroke-width":"2",stroke:"rgb(218,240,253)","stroke-linejoin":"miter","stroke-linecap":"square","stroke-miterlimit":"3"}),i.a.createElement("line",{x1:"80",y1:"40",x2:"80",y2:"80",transform:a(t),"vector-effect":"non-scaling-stroke","stroke-width":"2",stroke:"rgb(202,233,246)","stroke-linejoin":"miter","stroke-linecap":"square","stroke-miterlimit":"3"})))},{fast:this.state.seconds,big:this.state.minutes,little:this.state.hours})}}]),t}(r.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"})),i.a.createElement("div",{className:"App-main"},i.a.createElement(f,null),i.a.createElement(p,null)))}}]),t}(i.a.Component),v=function(){return i.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.16f2ff72.chunk.js.map