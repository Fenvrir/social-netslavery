"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[296],{2296:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var n=s(1413),r=s(5671),o=s(3144),i=s(136),a=s(5716),c=s(2791),l=s(364),u=s(1904),d={item:"Post_item__q6Qpm",content_feedback:"Post_content_feedback__tG+h-",avatar:"Post_avatar__GgJhl",content__user:"Post_content__user__Q481B"},p=s(184);var f=function(t){return(0,p.jsxs)("div",{className:d.content__list,children:[(0,p.jsxs)("div",{className:d.content__user,children:[(0,p.jsx)("div",{className:d.avatar,children:(0,p.jsx)("img",{src:t.avatar,alt:"Avatar"})}),(0,p.jsx)("div",{className:d.item,children:(0,p.jsx)("p",{children:t.message})})]}),(0,p.jsxs)("div",{className:d.content_feedback,children:[(0,p.jsx)("span",{children:(0,p.jsx)("button",{children:"Like"})}),(0,p.jsx)("span",{children:t.likesCount}),(0,p.jsx)("span",{children:(0,p.jsx)("button",{children:"Dislike"})})]})]})},_={content__btn:"MyPosts_content__btn__sWJ0A",content__textArea:"MyPosts_content__textArea__tYF+z"},h=s(6139),j=s(704),x=s(77),m=s(4059),v=(0,x.D)(150),b=(0,j.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,p.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,p.jsx)("div",{className:_.content__textArea,children:(0,p.jsx)(h.Z,{component:m.g,validate:[x.C,v],name:"newPostText",rows:"4",cols:"120"})}),(0,p.jsx)("div",{className:_.content__btn,children:(0,p.jsx)("button",{type:"submit",children:"Send"})})]})}));var g=function(t){var e=t.posts.map((function(t){return(0,p.jsx)(f,{message:t.message,likesCount:t.likesCount,avatar:t.avatar},t.id)}));return(0,p.jsxs)("div",{className:_.post__block,children:[(0,p.jsx)(b,{onSubmit:function(e){t.addPost(e.newPostText)}}),e]})},P=s(6070),k=(0,l.$j)((function(t){return{posts:t.profilePage.posts}}),{addPost:P.q2})(g),S={content__img:"Profile_content__img__X1TA-",content__user:"Profile_content__user__6K5lf",content__avatar:"Profile_content__avatar__gqI1P",content__description:"Profile_content__description__LtWFS",content__posts:"Profile_content__posts__flGXP",content__list:"Profile_content__list__0SOpK",item:"Profile_item__U0loT",item_gold:"Profile_item_gold__CeBFn",contacts:"Profile_contacts__Aalkx"},N=s(885),Z=function(t){var e=(0,c.useState)(!1),s=(0,N.Z)(e,2),n=s[0],r=s[1],o=(0,c.useState)(t.status),i=(0,N.Z)(o,2),a=i[0],l=i[1];(0,c.useEffect)((function(){l(t.status)}),[t.status]);var u=function(){r(!n)};return(0,p.jsx)("div",{children:(0,p.jsx)("div",{children:n?(0,p.jsx)("input",{value:a,autoFocus:!0,onBlur:function(){u(),t.updateUserStatus(a)},onChange:function(t){!function(t){l(t.target.value)}(t)}}):(0,p.jsx)("span",{onDoubleClick:u,children:t.status})})})},y=s(2217),U=(0,j.Z)({form:"edit-profile"})((function(t){return(0,p.jsxs)("form",{className:S.content__description,onSubmit:t.handleSubmit,children:[!t.isOwner&&(0,p.jsx)("div",{style:{float:"right"},children:(0,p.jsx)("button",{children:"Save"})}),t.error&&(0,p.jsx)("div",{className:y.Z.form_summary_error,children:t.error}),(0,p.jsxs)("ul",{children:[(0,p.jsx)(Z,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,p.jsxs)("li",{children:[(0,p.jsx)("b",{children:"Name:"}),(0,p.jsx)(h.Z,{placeholder:t.profile.fullName,name:"fullName",component:m.I})]}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["About me:",(0,p.jsx)(h.Z,{placeholder:t.profile.aboutMe,name:"aboutMe",component:m.g})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["Looking for a job:",(0,p.jsx)(h.Z,{name:"lookingForAJob",component:"input",type:"checkbox"})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["My professional skills:",(0,p.jsx)(h.Z,{placeholder:t.profile.lookingForAJobDescription,name:"lookingForAJobDescription",component:m.g})]})})]}),(0,p.jsxs)("div",{className:S.contacts,children:[(0,p.jsx)("b",{children:"Contacts: "})," ",Object.keys(t.profile.contacts).map((function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:e})," ",(0,p.jsx)(h.Z,{placeholder:t.profile.contacts[e],name:"contacts."+e.toLocaleLowerCase(),component:m.I},e)]})}))]})]})}));var A=function(t){Object.filter=function(t,e){return Object.keys(t).filter((function(s){return e(t[s])})).reduce((function(e,s){return e[s]=t[s],e}),{})};var e=Object.filter(t.profile.contacts,(function(t){return null!==t}));return(0,p.jsxs)("div",{className:S.content__description,children:[!t.isOwner&&(0,p.jsx)("div",{style:{float:"right"},children:(0,p.jsx)("button",{onClick:t.goToEditMode,children:"Edit"})}),(0,p.jsxs)("ul",{children:[(0,p.jsx)(Z,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["Name: ",t.profile.fullName]})}),t.profile.aboutMe&&(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["About: ",t.profile.aboutMe]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["Looking for a job: ",t.profile.lookingForAJob?"Yes":"No"]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("b",{children:["My professional skills: ",t.profile.lookingForAJobDescription]})})]}),(0,p.jsxs)("div",{className:S.contacts,children:[(0,p.jsx)("b",{children:"Contacts: "})," ",Object.keys(e).map((function(t){return(0,p.jsx)(C,{contactTitle:t,contactValue:e[t]},t)}))]})]})},C=function(t){var e=t.contactTitle,s=t.contactValue;return(0,p.jsxs)("div",{className:S.contact,children:[(0,p.jsx)("b",{children:e}),": ",(0,p.jsx)("b",{children:s})]})},w=function(t){var e=(0,c.useState)(!1),s=(0,N.Z)(e,2),n=s[0],r=s[1];return(0,p.jsxs)("div",{className:S.content__user,children:[(0,p.jsxs)("div",{className:S.content__avatar,children:[(0,p.jsx)("img",{style:{maxWidth:"250px"},alt:"Avatar",src:t.profile.photos.large?t.profile.photos.large:"https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"}),(0,p.jsx)("div",{children:t.isOwner&&(0,p.jsx)("input",{type:"file",onChange:function(e){return function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}(e)}})})]}),n?(0,p.jsx)(U,{onSubmit:function(e){t.saveProfile(e).then((function(){r(!n)}))},status:t.status,initialValues:t.profile,updateUserStatus:t.updateUserStatus,profile:t.profile}):(0,p.jsx)(A,{status:t.status,updateUserStatus:t.updateUserStatus,goToEditMode:function(){return r(!n)},profile:t.profile})]})};var M=function(t){return t.profile?(0,p.jsxs)("div",{className:S.content__container,children:[(0,p.jsx)(w,(0,n.Z)({},t)),(0,p.jsx)("div",{className:S.content__posts,children:(0,p.jsx)(k,{store:t.store})})]}):(0,p.jsx)(u.Z,{})},O=s(1468),F=s(6871),I=s(7781),T=function(t){(0,i.Z)(s,t);var e=(0,a.Z)(s);function s(){return(0,r.Z)(this,s),e.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var t=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;t||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(M,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:null===this.props.match,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(c.Component),D=(0,I.qC)((0,l.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId}}),{getUserProfile:P.et,getUserStatus:P.Tq,updateUserStatus:P.OL,savePhoto:P.Ju,saveProfile:P.Ii}),(function(t){return function(e){var s=(0,F.bS)("/profile/:userId/");return(0,p.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{match:s}))}}),O.D)(T)}}]);
//# sourceMappingURL=296.e0daa585.chunk.js.map