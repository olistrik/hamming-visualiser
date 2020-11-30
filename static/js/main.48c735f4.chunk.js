(this["webpackJsonphamming-visualiser"]=this["webpackJsonphamming-visualiser"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),i=a.n(s),c=a(9),l=a.n(c),r=(a(16),a(4)),h=a(5),o=a(2),b=a(7),u=a(6),j=(a(17),a(3));a(18);var A=function(e){for(var t=Math.min.apply(Math,Object(j.a)(e.data.map((function(e){return Math.min.apply(Math,Object(j.a)(e))})))),a=Math.max.apply(Math,Object(j.a)(e.data.map((function(e){return Math.max.apply(Math,Object(j.a)(e))})))),s=[Object(n.jsxs)("div",{className:"row xLabels",children:[Object(n.jsx)("div",{className:"col"}),e.xLabels.map((function(e){return Object(n.jsx)("label",{className:"col xLabel",children:e})}))]})],i=0;i<e.yLabels.length;i++){var c=[Object(n.jsxs)("label",{className:"row yLabel",children:[" ",e.yLabels[i]," "]})];c.push(e.data[i].map((function(s){return Object(n.jsx)("div",{className:"col dataCol dataRow data",style:{backgroundColor:e.scale((a-s)/(a-t))},children:Object(n.jsx)("label",{className:"center",children:s})})}))),s.push(Object(n.jsx)("div",{className:"row",children:c}))}return Object(n.jsx)("div",{className:"col",children:s})},d=(a(19),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.onClick=n.onClick.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onKeyPress",value:function(e){/[0-9]|Enter/.test(e.key)||e.preventDefault()}},{key:"onPaste",value:function(e){/[0-9\n]*/.test(e.target.value)||e.preventDefault()}},{key:"onClick",value:function(e){var t=this.state.value.split("\n"),a=[],n=new Set;t.forEach((function(e,t){""!==e&&(/^[0-9]{5}$/.test(e)?n.add(e):a.push(t))})),0===a.length?this.props.onVisualise(Array.from(n).sort((function(e,t){return parseInt(e)-parseInt(t)}))):alert("Errors on lines: "+a)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("textarea",{className:"row textarea",value:this.state.value,onChange:this.handleChange,onPaste:this.onPaste,onKeyPress:this.onKeyPress}),Object(n.jsx)("div",{className:"row visualise",children:Object(n.jsx)("button",{onClick:this.onClick,children:"Visualise"})})]})}}]),a}(s.Component)),g=a(10),m=a.n(g),v=["#fafa6e","#9cdf7c","#4abd8c","#00968e","#106e7c","#2a4858"];function x(e,t){for(var a=Math.min(e.length,t.length),n=Math.abs(e.length-t.length),s=0;s<a;s++)e.charAt(s)!==t.charAt(s)&&n++;return n}var O=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={strings:[],hammingMatrix:[],scale:m.a.scale(v)},n.handleVisualise=n.handleVisualise.bind(Object(o.a)(n)),n}return Object(h.a)(a,[{key:"handleVisualise",value:function(e){for(var t=e.length,a=[],n=0;n<t;n++)a.push(Array(t).fill(0));for(n=0;n<t;n++)for(var s=n+1;s<t;s++)a[n][s]=a[s][n]=x(e[n],e[s]);console.log(a),this.setState({strings:e,hammingMatrix:a})}},{key:"render",value:function(){this.state.strings.map((function(e){return Object(n.jsx)("li",{children:e},e)}));return Object(n.jsxs)("div",{fluid:!0,className:"container col App",children:[Object(n.jsxs)("div",{className:"row header",children:[Object(n.jsx)("h2",{className:"col title",children:" Hamming Visualiser "}),Object(n.jsx)("a",{className:"col link",href:"https://github.com/kranex/hamming-Visualiser",children:Object(n.jsx)("img",{className:"gitLogo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub"})})]}),Object(n.jsxs)("div",{className:"row content",children:[Object(n.jsx)("div",{className:"col input",children:Object(n.jsx)(d,{onVisualise:this.handleVisualise})}),Object(n.jsx)("div",{className:"col visualiser",children:Object(n.jsx)(A,{xLabels:this.state.strings,yLabels:this.state.strings,data:this.state.hammingMatrix,scale:this.state.scale})})]})]})}}]),a}(s.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.48c735f4.chunk.js.map