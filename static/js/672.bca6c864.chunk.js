"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[672],{5672:function(a,s,e){e.r(s),e.d(s,{default:function(){return S}});var i=e(6139),n=e(704),l=e(4059),r=e(3504),d="Dialogs_dialogs__DStud",t="Dialogs_dialogsItems__TOujW",c="Dialogs_dialogsMessages__7mqOB",g="Dialogs_dialog__rRDtO",o="Dialogs_message__TyuDT",_="Dialogs_dialog__avatar__Ru8jt",m="Dialogs_message__owner__tiiIN",v="Dialogs_message__friend__CPVCT",u="Dialogs_dialog__name__QxgjI",x="Dialogs_textarea__container__tQLBl",j="Dialogs_dialogs__textarea__WwGUR",h="Dialogs_dialogs__btn__GYJWJ",D=e(184),f=function(a){var s="/dialogs/"+a.id;return(0,D.jsxs)("div",{className:g,children:[(0,D.jsx)("div",{className:_,children:(0,D.jsx)("img",{src:a.avatar,alt:"Avatar"})}),(0,D.jsx)("div",{className:u,children:(0,D.jsx)(r.OL,{to:s,className:a.active,children:a.name})})]})},N=function(a){var s=a.id%2===0?(0,D.jsxs)("div",{className:m,children:[(0,D.jsx)("div",{children:(0,D.jsx)("img",{src:a.avatar,alt:"Avatar"})}),(0,D.jsx)("div",{className:o,children:a.message})]}):(0,D.jsxs)("div",{className:v,children:[(0,D.jsx)("div",{className:o,children:a.message}),(0,D.jsx)("div",{children:(0,D.jsx)("img",{src:a.avatar,alt:"Avatar"})})]});return(0,D.jsx)(D.Fragment,{children:s})},w=e(77),b=(0,w.D)(10),M=(0,n.Z)({form:"dialogAddMessageForm"})((function(a){return(0,D.jsx)("form",{onSubmit:a.handleSubmit,children:(0,D.jsxs)("div",{className:x,children:[(0,D.jsx)("div",{className:j,children:(0,D.jsx)(i.Z,{rows:"4",cols:"120",name:"newMessage",placeholder:"Enter your message",validate:[w.C,b],component:l.g})}),(0,D.jsx)("div",{className:h,children:(0,D.jsx)("button",{type:"submit",children:"Send"})})]})})})),p=function(a){var s=a.dialogsPage.dialogs.map((function(a){return(0,D.jsx)(f,{id:a.id,name:a.name,active:a.active,avatar:a.avatar})})),e=a.dialogsPage.messages.map((function(a){return(0,D.jsx)(N,{message:a.message,id:a.id,avatar:a.avatar})}));return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:d,children:[(0,D.jsx)("div",{className:t,children:s}),(0,D.jsx)("div",{className:c,children:e})]}),(0,D.jsx)(M,{onSubmit:function(s){a.sendMessage(s.newMessage),console.log(s.newMessage)}})]})},C=e(2807),P=e(364),T=e(1468),S=(0,e(7781).qC)((0,P.$j)((function(a){return{dialogsPage:a.dialogsPage,newMessageText:a.dialogsPage.newMessageText}}),{sendMessage:C.b}),T.D)(p)}}]);
//# sourceMappingURL=672.bca6c864.chunk.js.map