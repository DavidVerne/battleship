(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,r,t){},16:function(e,r,t){},17:function(e,r,t){"use strict";t.r(r);var a=t(0),s=t.n(a),n=t(7),i=t.n(n),u=(t(15),t(16),t(8)),l=t(1),o=t(2),c=t(4),h=t(3),d=t(5);function m(e){return s.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var q=function(e){function r(){return Object(l.a)(this,r),Object(c.a)(this,Object(h.a)(r).apply(this,arguments))}return Object(d.a)(r,e),Object(o.a)(r,[{key:"renderSquare",value:function(e){var r=this;return s.a.createElement(m,{value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"board-block"},s.a.createElement("div",{className:"board-box"},s.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6)),s.a.createElement("div",{className:"board-row"},this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13)),s.a.createElement("div",{className:"board-row"},this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20)),s.a.createElement("div",{className:"board-row"},this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27)),s.a.createElement("div",{className:"board-row"},this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34)),s.a.createElement("div",{className:"board-row"},this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41)),s.a.createElement("div",{className:"board-row"},this.renderSquare(42),this.renderSquare(43),this.renderSquare(44),this.renderSquare(45),this.renderSquare(46),this.renderSquare(47),this.renderSquare(48))))}}]),r}(s.a.Component),S=function(e){function r(e){var t;return Object(l.a)(this,r),(t=Object(c.a)(this,Object(h.a)(r).call(this,e))).state={history:[{squares:Array(48).fill(null)}],stepNumber:0,xIsNext:!0,lines:[[]]},t}return Object(d.a)(r,e),Object(o.a)(r,[{key:"componentDidMount",value:function(){for(var e=[],r=0;r<48;r++)e.push(r);console.log("arr: ",e);var t=Math.floor(45*Math.random());console.log("rand: ",t);var a=e.indexOf(t),s=[a,a+1,a+2];console.log("location: ",s),this.state.lines=[s],console.log("lines: ",this.state.lines),this.setState({lines:this.state.lines})}},{key:"calculateWinner",value:function(e){for(var r=0;r<this.state.lines.length;r++){var t=Object(u.a)(this.state.lines[r],3),a=t[0],s=t[1],n=t[2];if(console.log("[a, b, c]: ",[a,s,n]),e[a]&&e[a]===e[s]&&e[a]===e[n])return console.log("squares[a]: ",e[a]),e[a]}return null}},{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1].squares.slice();if(!this.calculateWinner(t)&&!t[e]){t[e]="missiles";var a=e;switch(console.log("i: ",e),!0){case e===this.state.lines[0][0]:t[e]="HIT",console.log("first hit: ",a);break;case e===this.state.lines[0][1]:t[e]="HIT",console.log("second hit: ",a);break;case e===this.state.lines[0][2]:t[e]="HIT",console.log("third hit: ",a);break;default:t[e]="MISS"}this.setState({history:r.concat([{squares:t}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,r=this,t=this.state.history,a=t[this.state.stepNumber],n=this.calculateWinner(a.squares),i=t.map(function(e,t){var a=t?"Missiles fired #"+t:"Find that ship!";return s.a.createElement("div",{key:t},s.a.createElement("button",{className:"restartButton",onClick:function(){return r.jumpTo(t)}},a))});return e=n?"Good shot! You sank the battleship with "+this.state.stepNumber+" missiles! Hit Restart Game to play again":"Click on the squares to sink the battleship",s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"game-board"},s.a.createElement(q,{squares:a.squares,onClick:function(e){return r.handleClick(e)}})),s.a.createElement("div",{className:"game-info"},s.a.createElement("div",{className:"game-headline"},e),s.a.createElement("p",null,i),s.a.createElement("button",{className:"restartButton",onClick:function(){return window.location.reload()}},"Restart Game")))}}]),r}(s.a.Component);var b=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S,null))};i.a.render(s.a.createElement(b,null),document.getElementById("root"))},9:function(e,r,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.beb83e7a.chunk.js.map