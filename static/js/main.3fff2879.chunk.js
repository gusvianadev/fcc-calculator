(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,d,s,l,u=n(0),g=n.n(u),f=n(9),h=n.n(f),b=n(2),m=n(4),x=n(3),p=b.c.div(r||(r=Object(x.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tcolor: ",";\n\n\t& .calc-header__title {\n\t\tmargin: 0;\n\t\tdisplay: flex;\n\n\t\t& > * {\n\t\t\tmargin: auto;\n\t\t}\n\t}\n"])),(function(e){return e.theme.headerText})),j=b.c.div(a||(a=Object(x.a)(["\n\tbackground-color: ",";\n\tborder-radius: ",";\n\tmargin-bottom: 1rem;\n"])),(function(e){return e.bgColor}),(function(e){return e.borderRadius||"10px"})),k=b.c.div(c||(c=Object(x.a)(["\n\tdisplay: flex;\n\tfont-size: 0.7rem;\n\n\t& .theme-toggler__title {\n\t\tmargin-right: 1rem;\n\t\ttext-transform: uppercase;\n\t\tdisplay: flex;\n\n\t\t& > * {\n\t\t\tmargin: auto;\n\t\t}\n\t}\n\n\t& .theme-toggler__theme-list {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\twidth: 70px;\n\n\t\t& .theme-toggler__theme-list__number {\n\t\t\tflex: 1 1 33%;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t& .theme-toggler__selector-container {\n\t\t\tflex: 1 1 100%;\n\t\t\tmax-width: 100%;\n\t\t\theight: 25px;\n\t\t\tmargin-bottom: 0;\n\t\t\tpadding: 5px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: ",";\n\t\t\tcursor: pointer;\n\n\t\t\t& .theme-toggler__selector {\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 100%;\n\t\t\t\tbackground-color: ",";\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(e){return e.theme.togglerPosition}),(function(e){return e.theme.equalSignBackground})),O=n(1),S=function(e){var t=e.theme,n=e.toggleTheme;return Object(O.jsxs)(k,{children:[Object(O.jsx)("div",{className:"theme-toggler__title",children:Object(O.jsx)("div",{children:"theme"})}),Object(O.jsxs)("div",{className:"theme-toggler__theme-list",children:[[1,2,3].map((function(e){return Object(O.jsx)("div",{className:"theme-toggler__theme-list__number",children:e},e)})),Object(O.jsx)(j,{className:"theme-toggler__selector-container",bgColor:t.padAndTogglerBackground,borderRadius:"20px",onClick:n,children:Object(O.jsx)("div",{className:"theme-toggler__selector"})})]})]})},w=function(e){var t=e.theme,n=e.toggleTheme;return Object(O.jsxs)(p,{children:[Object(O.jsx)("h2",{className:"calc-header__title",children:Object(O.jsx)("div",{children:"calc"})}),Object(O.jsx)(S,{theme:t,toggleTheme:n})]})},y=function(e){var t=e.screen,n=e.setScreen,r=e.operation,a=e.setOperation,c=e.setOperationSymbol,i=function(e,t){return e+t},o=function(e,t){return e-t},d=function(e,t){return e*t},s=function(e,t){return e/t},l=Object(u.useState)(null),g=Object(m.a)(l,2),f=g[0],h=g[1],b=Object(u.useState)(!0),x=Object(m.a)(b,2),p=x[0],j=x[1];return{numPadBtns:[{btn:"7",id:"seven"},{btn:"8",id:"eight"},{btn:"9",id:"nine"},{btn:"del",id:"del"},{btn:"4",id:"four"},{btn:"5",id:"five"},{btn:"6",id:"six"},{btn:"+",id:"add"},{btn:"1",id:"one"},{btn:"2",id:"two"},{btn:"3",id:"three"},{btn:"-",id:"subtract"},{btn:".",id:"decimal"},{btn:"0",id:"zero"},{btn:"/",id:"divide"},{btn:"x",id:"multiply"},{btn:"reset",id:"clear"},{btn:"=",id:"equals"}],handleBtnClick:function(e){var l=e.target.innerHTML,u="."===l&&t.toString().split("").filter((function(e){return"."===e})).length>0,g=t&&"."===l,b=9999999999,m=!p&&t.toString().includes(".")&&t.toString().split(".")[1].length>1,x="0"===t.toString()&&"0"===l,k=function(e,i){var o=function(){var e=parseFloat(r(parseFloat(f),parseFloat(t)).toFixed(4));e<b?(h(e),n(e)):(h(b),n(b))};"-"!==t?p?"-"!==l||!r&&"0"!==t.toString()?(a((function(){return e})),c(i)):(n("-"),j(!1)):(!r&&e?(h(t),a((function(){return e})),c(i)):e?(o(),a((function(){return e})),c(i)):r&&(o(),a(null),c("=")),j(!0)):"-"===t&&e&&(a((function(){return e})),c(i),n(""))};switch(l){case"+":k(i,"+");break;case"-":k(o,"-");break;case"x":k(d,"x");break;case"/":k(s,"/");break;case"=":k();break;case"del":t.toString().length>1?n(t.toString().slice(0,-1)):(n("0"),j(!0));break;case"reset":n("0"),a(null),c(""),h(null),j(!0);break;default:!function(){if(u||m||x)return null;(parseFloat(t+l)<=b||p)&&(p?(n(g?"0.":l),j(!1)):n(t.toString()+l))}()}}}},v=b.c.div(i||(i=Object(x.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\tpadding: 1rem;\n"]))),_=b.c.button(o||(o=Object(x.a)(["\n\tflex: 1 1 20%;\n\theight: 60px;\n\tmargin: 0.3rem;\n\tborder: none;\n\tborder-radius: 5px;\n\tbackground-color: ",";\n\t-webkit-box-shadow: inset 0px -4px 0px 0px ",";\n\tbox-shadow: inset 0px -4px 0px 0px ",";\n\tfont-size: ",";\n\tfont-weight: bold;\n\tfont-family: inherit;\n\ttext-transform: uppercase;\n\tcolor: ",";\n\tcursor: pointer;\n\n\t:active {\n\t\ttransform: translate(1px, 1px);\n\t}\n"])),(function(e){var t=e.children,n=e.theme;switch(t){case"del":case"reset":return n.resetDelBackground;case"=":return n.equalSignBackground;default:return n.keyBackground}}),(function(e){var t=e.children,n=e.theme;switch(t){case"del":case"reset":return n.resetDelShadow;case"=":return n.equalSignShadow;default:return n.keyShadow}}),(function(e){var t=e.children,n=e.theme;switch(t){case"del":case"reset":return n.resetDelShadow;case"=":return n.equalSignShadow;default:return n.keyShadow}}),(function(e){switch(e.children){case"del":case"reset":case"=":return"1em";default:return"1.8em"}}),(function(e){var t=e.children,n=e.theme;switch(t){case"del":case"reset":return n.resetDelText;case"=":return n.equalSignText;default:return n.keyText}})),B=function(e){var t=e.screen,n=e.setScreen,r=e.operation,a=e.setOperation,c=e.setOperationSymbol,i=y({screen:t,setScreen:n,operation:r,setOperation:a,setOperationSymbol:c}),o=i.numPadBtns,d=i.handleBtnClick;return Object(O.jsx)(v,{children:o.map((function(e){var t=e.btn,n=e.id;return Object(O.jsx)(_,{id:n,type:"button",onClick:d,children:t},n)}))})},T=b.c.div(d||(d=Object(x.a)(["\n\tpadding: 1rem;\n\tfont-size: 1.8em;\n\tcolor: ",";\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tuser-select: text;\n\n\t& .screen__number {\n\t\ttext-align: right;\n\t}\n"])),(function(e){return e.theme.headerText})),q=function(e){var t=e.operationSymbol,n=e.screen;return Object(O.jsxs)(T,{children:[Object(O.jsx)("div",{className:"screen__operation",children:t}),Object(O.jsx)("div",{className:"screen__number",id:"display",children:n})]})},D={mainBackground:"#3a4764",padAndTogglerBackground:"#232c43",screenBackground:"#182034",keyBackground:"#eae3dc",keyShadow:"#b4a597",equalSignBackground:"#d03f2f",equalSignShadow:"#93261a",resetDelBackground:"#637097",resetDelShadow:"#404e72",headerText:"#ffffff",keyText:"#444b5a",equalSignText:"#ffffff",resetDelText:"#ffffff",togglerPosition:"flex-start"},N={mainBackground:"#e6e6e6",padAndTogglerBackground:"#d1cccc",screenBackground:"#ededed",keyBackground:"#e5e4e1",keyShadow:"#a69d91",equalSignBackground:"#ca5502",equalSignShadow:"#893901",resetDelBackground:"#377f86",resetDelShadow:"#1b5f65",headerText:"#35352c",keyText:"#35352c",equalSignText:"#ffffff",resetDelText:"#ffffff",togglerPosition:"center"},C={mainBackground:"#160628",padAndTogglerBackground:"#1d0934",screenBackground:"#1d0934",keyBackground:"#341c4f",keyShadow:"#871c9c",equalSignBackground:"#00e0d1",equalSignShadow:"#6cf9f2",resetDelBackground:"#58077d",resetDelShadow:"#bc15f4",headerText:"#ffe53d",keyText:"#ffe53d",equalSignText:"#1b2428",resetDelText:"#ffffff",togglerPosition:"flex-end"},z=function(){var e=Object(u.useState)(D),t=Object(m.a)(e,2),n=t[0],r=t[1],a=Object(u.useState)("0"),c=Object(m.a)(a,2),i=c[0],o=c[1],d=Object(u.useState)(null),s=Object(m.a)(d,2),l=s[0],g=s[1],f=Object(u.useState)(""),h=Object(m.a)(f,2),b=h[0],x=h[1];return{calcItems:[{name:"header",background:"transparent",content:Object(O.jsx)(w,{theme:n,toggleTheme:function(){switch(n){case D:r(N);break;case N:r(C);break;default:r(D)}}})},{name:"screen",background:n.screenBackground,content:Object(O.jsx)(q,{operationSymbol:b,screen:i})},{name:"pad",background:n.padAndTogglerBackground,content:Object(O.jsx)(B,{screen:i,setScreen:o,operation:l,setOperation:g,setOperationSymbol:x})}],theme:n}},P=b.c.div(s||(s=Object(x.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: ",";\n\tdisplay: flex;\n\tpadding: 1rem 0;\n\n\t.calculator {\n\t\twidth: 90%;\n\t\tmax-width: 576px;\n\t\tmargin: auto;\n\t}\n"])),(function(e){return e.theme.mainBackground})),A=Object(b.b)(l||(l=Object(x.a)(["\n    html {\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n    }\n\n    *, \n    *:before, \n    *:after {\n        box-sizing: inherit;\n    }\n\n    body,\n    #root {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        font-family: 'Spartan', sans-serif;\n        user-select: none;\n    }\n"]))),F=function(){var e=z(),t=e.calcItems,n=e.theme;return Object(O.jsxs)(b.a,{theme:n,children:[Object(O.jsx)(A,{}),Object(O.jsx)(P,{children:Object(O.jsx)("div",{className:"calculator",children:t.map((function(e){var t=e.name,n=e.background,r=e.content;return Object(O.jsx)(j,{bgColor:n,children:r},t)}))})})]})};h.a.render(Object(O.jsx)(g.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3fff2879.chunk.js.map