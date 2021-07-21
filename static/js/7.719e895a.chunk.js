(this.webpackJsonpfinancial_management_frontend=this.webpackJsonpfinancial_management_frontend||[]).push([[7],{114:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(28),c=n(2),s=n.n(c),u=n(5),i=n(0),o=n.n(i),l=n(4),d=n(11),p=n(12),b=n(19),f=n(57),h=n(17),m=n(52),j=(n(55),n(59)),v=n(64),O=n(62),g=n(58),_=n(61),x=n(36),y=n(66),C=n.n(y),V=n(56),N=n.n(V),B=n(3),E=function(e){Object(d.b)();var t=Object(d.c)((function(e){return e.auth})).userId,n=Object(i.useState)(""),a=Object(r.a)(n,2),c=a[0],s=a[1],u=Object(i.useState)(""),o=Object(r.a)(u,2),l=(o[0],o[1]),p=Object(i.useState)("thu"),b=Object(r.a)(p,2),f=b[0],h=b[1],y=Object(i.useState)(!1),V=Object(r.a)(y,2),E=V[0],S=V[1],w=Object(g.a)(_.a.nameValidate),k=w.enteredValue,H=w.valueIsValid,I=w.hasError,L=w.valueChangeHandler,F=w.inputBlurHandler,D=w.fetchValueHandler,A=w.reset,R=Object(g.a)(_.a.amountValidate),M=R.enteredValue,T=R.valueIsValid,q=R.hasError,G=R.valueChangeHandler,U=R.inputBlurHandler,X=R.fetchValueHandler,Z=R.reset,J=Object(g.a)((function(e){return!0})),P=J.enteredValue,Q=J.valueIsValid,z=J.valueChangeHandler,K=J.inputBlurHandler,W=J.fetchValueHandler,Y=J.reset,$=!1;H&&T&&Q&&($=!0);var ee=e.transaction;Object(i.useEffect)((function(){var e=ee.id,t=ee.name,n=ee.amount,a=ee.type,r=ee.date,c=ee.description;s(e),D(t),X(n),W(c),h(a||"thu"),l(r||x.a.getCurrentTimestamp())}),[ee]);var te=e.error,ne=e.status;Object(i.useEffect)((function(){"completed"===ne&&(te?e.notify({message:te,type:"danger"}):e.notify({message:"L\u01b0u th\xf4ng tin th\xe0nh c\xf4ng!",type:"success"}))}),[te,ne]);var ae=Object(i.useRef)(),re=Object(i.useRef)(),ce=Object(i.useCallback)((function(e){h(e.target.value)}),[]);return Object(B.jsxs)(m.a,{className:"".concat(C.a.card," ").concat(e.className),children:[Object(B.jsx)("h2",{children:"Th\xf4ng tin giao d\u1ecbch"}),Object(B.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),$){var a={name:k,transaction_type:f,amount:parseInt(M),description:P,user_id:t};c?E?(e.onDeleteTransaction(c),S(!1)):e.onUpdateTransaction(c,a):e.onCreateTransaction(a),A(),Z(),h("thu"),Y()}else e.notify({message:"Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!",type:"danger"})},children:[Object(B.jsxs)("div",{className:"".concat(C.a.input," "),children:[Object(B.jsx)(j.a,{id:"name",type:"text",ref:ae,label:"T\xean giao d\u1ecbch",isValid:H,hasError:I,value:k,onChange:L,onBlur:F,className:C.a["card-input"],errorMessage:"Vui l\xf2ng nh\u1eadp l\u1ea1i t\xean giao d\u1ecbch!"}),Object(B.jsx)(j.a,{id:"amount",type:"text",ref:re,label:"S\u1ed1 ti\u1ec1n",isValid:T,hasError:q,value:M,onChange:G,onBlur:U,className:C.a["card-input"],errorMessage:"Vui l\xf2ng nh\u1eadp l\u1ea1i s\u1ed1 ti\u1ec1n (L\u1edbn h\u01a1n 1000 VND)"})]}),Object(B.jsxs)("div",{className:"".concat(C.a.input," "),children:[Object(B.jsx)(v.a,{id:"type",label:"Lo\u1ea1i giao d\u1ecbch",valuesList:[{textField:"Thu",valueField:"thu"},{textField:"Chi",valueField:"chi"}],value:f,onChange:ce,className:C.a["card-input"]}),Object(B.jsx)(j.a,{id:"description",type:"text",value:P,isValid:!0,hasError:!1,label:"M\xf4 t\u1ea3",onChange:z,onBlur:K,className:C.a["card-input"]})]}),Object(B.jsx)(O.a,{btnList:[{className:N.a["button-light"],onClick:e.onGoBack,name:"Quay l\u1ea1i",isShown:!0},{className:N.a["button-success"],type:"submit",name:"L\u01b0u th\xf4ng tin",isShown:!0},{className:N.a["button-danger"],name:"Xo\xe1 th\xf4ng tin",type:"submit",onClick:function(){return S(!0)},isShown:!!c}],className:C.a.action})]})]})},S=o.a.memo(E);t.default=function(e){var t="transaction",n=Object(l.g)(),c=Object(l.f)(),o=Object(d.b)(),m=n.transactionId,j=(Object(d.c)((function(e){return e.balance})),Object(f.a)(h.d.bind(null,t))),v=j.sendRequest,O=j.error,g=j.status,_=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=t.amount,"thu"===(a=t.transaction_type)?o(b.a.add({amount:n})):"chi"===a&&o(b.a.sub({amount:n})),console.log("BALANCE CHANGED"),c.push("/transactions");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=Object(i.useState)({}),y=Object(r.a)(x,2),C=y[0],V=y[1],N=Object(f.a)(h.c.bind(null,t)),E=N.sendRequest,w=N.data;Object(i.useEffect)((function(){m?w?V(w):E(m):V({})}),[m,E,w]);var k=Object(f.a)(h.e.bind(null,t)),H=k.sendRequest,I=k.error,L=k.status,F=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,u,i,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(Object(a.a)(Object(a.a)({},n),{},{id:t}));case 2:e.sent,r=C.amount,u=C.transaction_type,i=parseInt(r),l=n.amount,d=n.transaction_type,o("thu"===d&&"thu"===u?b.a.add({amount:l-i}):"thu"===d&&"chi"===u?b.a.add({amount:l+i}):"chi"===d&&"thu"===u?b.a.sub({amount:l-i}):b.a.sub({amount:l+i})),console.log("BALANCE CHANGED"),c.push("/transactions");case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=Object(f.a)(h.a.bind(null,t)),A=D.sendRequest,R=D.error,M=D.status,T=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:n=C.amount,a=C.transaction_type,r=parseInt(n),"thu"===a?o(b.a.sub({amount:r})):"chi"===a&&o(b.a.add({amount:r})),console.log("BALANCE CHANGED"),c.push("/transactions");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(i.Fragment,{children:Object(B.jsx)(S,{transaction:C,error:O||I||R,status:"completed"===g||"completed"===L||"completed"===M?"completed":"pending",onCreateTransaction:_,onUpdateTransaction:F,onDeleteTransaction:T,notify:function(e){e.id;var t=e.message,n=e.type;o(p.b.notify({message:t,type:n}))},onGoBack:function(){return c.goBack()}})})}},52:function(e,t,n){"use strict";n(0);var a=n(53),r=n.n(a),c=n(3);t.a=function(e){return Object(c.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})}},53:function(e,t,n){e.exports={card:"Card_card__b7d4V"}},57:function(e,t,n){"use strict";var a=n(22),r=n(2),c=n.n(r),s=n(5),u=n(28),i=n(0),o=function(e,t){return"SUCCESS"===t.type?{status:"completed",data:t.responseData,error:null}:"FAILED"===t.type?{status:"completed",data:null,error:t.errorMessage}:{status:"pending",error:null,data:null}};t.a=function(e){var t=Object(i.useReducer)(o,{status:"pending",data:null,error:null}),n=Object(u.a)(t,2),r=n[0],l=n[1],d=Object(i.useCallback)(function(){var t=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(n);case 3:a=t.sent,l({type:"SUCCESS",responseData:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l({type:"FAILED",errorMessage:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(a.a)(Object(a.a)({},r),{},{sendRequest:d})}},58:function(e,t,n){"use strict";var a=n(28),r=n(0);t.a=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],s=n[1],u=Object(r.useState)(!1),i=Object(a.a)(u,2),o=i[0],l=i[1],d=e(c.length?c.trim():c);return{enteredValue:c,valueIsValid:d,hasError:!d&&o,valueChangeHandler:function(e){s(e.target.value)},inputBlurHandler:function(e){l(!0)},fetchValueHandler:function(e){s(e||"")},reset:function(){s(""),l(!1)}}}},59:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(60),s=n.n(c),u=n(3),i=r.a.forwardRef((function(e,t){var n=Object(a.useRef)(),r=function(){return n.current.focus()};return Object(a.useImperativeHandle)(t,(function(){return{focus:r}})),Object(u.jsxs)("div",{className:"".concat(s.a.control," ").concat(e.className," ").concat(e.hasError?s.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:e.id,children:e.label}),Object(u.jsx)("input",{id:e.id,type:e.type,value:e.value,placeholder:e.placeholder,onChange:e.onChange,onBlur:e.onBlur,ref:n,disabled:!!e.disabled}),e.hasError&&Object(u.jsx)("p",{className:s.a.error,children:e.errorMessage})]})}));t.a=i},60:function(e,t,n){e.exports={control:"Input_control__3fhd9",invalid:"Input_invalid__376Oq",error:"Input_error__1CLDt"}},61:function(e,t,n){"use strict";var a=n(30),r=function e(){Object(a.a)(this,e)};r.usernameValidate=function(e){return!!e&&e.trim().length>5},r.passwordValidate=function(e){return!!e&&e.trim().length>5},r.fullnameValidate=function(e){return!!e&&e.trim().length>8},r.emailValidate=function(e){return!!e&&(e.trim().length>10&&e.includes("@"))},r.phoneValidate=function(e){if(e){var t=e.trim();return["032","033","034","035","036","037","038","039","092"].filter((function(e){return t.includes(e)})).length>0&&10===e.length}return!1},r.nameValidate=function(e){return!!e&&e.trim().length>0},r.amountValidate=function(e){if(e){var t=parseInt(e);return!!t&&(t>1e3&&!(t%1e3))}return!1},t.a=r},62:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=(n(13),n(55)),s=n(63),u=n.n(s),i=n(3),o=function(e){return Object(i.jsx)("div",{className:"".concat(u.a.btnGroup," ").concat(e.className),children:e.btnList.map((function(e){return e.isShown&&Object(i.jsx)(c.b,{type:e.type||"button",className:e.className,handleClick:e.onClick,children:e.name},e.name)}))})};t.a=r.a.memo(o)},63:function(e,t,n){e.exports={button:"Buttons_button__2ziV1",portalBtn:"Buttons_portalBtn___Z6CZ"}},64:function(e,t,n){"use strict";var a=n(0),r=n(65),c=n.n(r),s=n(3);t.a=function(e){var t=Object(a.useRef)();return Object(s.jsxs)("div",{className:"".concat(c.a.control," ").concat(e.className),children:[Object(s.jsx)("label",{htmlFor:e.id,children:e.label}),Object(s.jsx)("select",{id:"type",value:e.value,ref:t,onChange:e.onChange,onBlur:e.onBlur,children:e.valuesList.map((function(e,t){return Object(s.jsx)("option",{value:e.valueField,children:e.textField},e.valueField)}))})]})}},65:function(e,t,n){e.exports={control:"SelectBox_control__2UFPm",invalid:"SelectBox_invalid__1naWs"}},66:function(e,t,n){e.exports={card:"ModelView_card__Y-Q85","card-input":"ModelView_card-input__3cZPU",input:"ModelView_input__2XBfK",action:"ModelView_action__22eXL"}}}]);
//# sourceMappingURL=7.719e895a.chunk.js.map