(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/chewie.885d867f.jpg"},function(e,a,t){e.exports=t.p+"static/media/kylo.7df6104e.jpg"},function(e,a,t){e.exports=t.p+"static/media/rex.96ec9a1c.jpg"},function(e,a,t){e.exports=t.p+"static/media/rey.5df76ae6.jpg"},function(e,a,t){e.exports=t.p+"static/media/stormtrooper.6f600635.jpg"},function(e,a,t){e.exports=t.p+"static/media/threepio.5c33b675.jpg"},function(e,a,t){e.exports=t.p+"static/media/vader.3f3d302a.jpg"},function(e,a,t){e.exports=t.p+"static/media/yoda.32eb534f.jpg"},,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(6),o=t.n(n),s=(t(21),t(1)),i=t(2),l=t(4),m=t(3),u=(t(22),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid header"},c.a.createElement("div",{className:"row bg-dark"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",{className:"text-light display-4"},"Memory Game")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h3",{className:"text-light text-right"},"Score: ",c.a.createElement("span",{className:"score"},this.props.score," "),"| Top Score: ",c.a.createElement("span",{className:"topScore"},this.props.topScore)))))}}]),t}(c.a.Component)),p=t(15),d=t(7),h=t.n(d),f=t(8),k=t.n(f),b=t(9),g=t.n(b),y=t(10),v=t.n(y),j=t(11),x=t.n(j),E=t(12),S=t.n(E),C=t(13),O=t.n(C),w=t(14),I=t.n(w);var N=function(e){var a={backgroundSize:"cover",backgroundPosition:"center",height:"200px",width:"200px",margin:"20px",border:"1px solid black",display:"inline-block"};switch(e.name){case"chewie":a.backgroundImage="url("+h.a+")";break;case"kylo":a.backgroundImage="url("+k.a+")";break;case"rex":a.backgroundImage="url("+g.a+")";break;case"rey":a.backgroundImage="url("+v.a+")";break;case"stormtrooper":a.backgroundImage="url("+x.a+")";break;case"threepio":a.backgroundImage="url("+S.a+")";break;case"vader":a.backgroundImage="url("+O.a+")";break;case"yoda":a.backgroundImage="url("+I.a+")";break;default:a.background="red"}return c.a.createElement("div",{style:a,onClick:e.onClick,className:"clicky"})},A=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={characters:[{name:"chewie"},{name:"kylo"},{name:"rex"},{name:"rey"},{name:"stormtrooper"},{name:"threepio"},{name:"vader"},{name:"yoda"}],clickedCharacters:[]},e.shuffleArray=function(e){e.sort((function(){return Math.random()-.5}))},e.shuffleCharacters=Object(p.a)(e.state.characters),e.clicked=function(a){var t=e.state.characters.findIndex((function(e){return e.name===a}));if(-1!==e.state.clickedCharacters.findIndex((function(e){return e.name===a})))alert("Game Over!"),e.setState({clickedCharacters:[]}),e.props.callback(!1);else{var r=e.state.characters[t],c=e.state.clickedCharacters.concat(r);e.setState({clickedCharacters:c}),e.props.callback(!0)}},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.shuffleArray(this.shuffleCharacters),c.a.createElement("div",{className:"container game"},this.shuffleCharacters.map((function(a){return c.a.createElement(N,{onClick:function(){return e.clicked(a.name)},name:a.name,key:a.name})})))}}]),t}(c.a.Component),M=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={score:0,topScore:0},e.clickyCallback=function(a){a?e.setState({score:e.state.score+1,topScore:e.state.score+1>e.state.topScore?e.state.topScore+1:e.state.topScore}):e.setState({score:0,topScore:e.state.topScore})},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Click on an image to earn points, but don't click the same image twice")),c.a.createElement(A,{callback:this.clickyCallback}))}}]),t}(c.a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.4c85400c.chunk.js.map