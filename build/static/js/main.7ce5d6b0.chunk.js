(this.webpackJsonpCheArt=this.webpackJsonpCheArt||[]).push([[0],{355:function(e,t,a){e.exports=a(672)},672:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),o=a.n(l),i=a(696),s=a(307),c=function(e){return e.children},u=a(38),m=a(212),d=function(e,t){return Object(m.a)(Object(m.a)({},e),t)},E=Object(n.createContext)(),g={assignments:[],error:null,loading:!1,currentAssignment:{},token:null,username:null,is_student:null,is_teacher:null,userId:null,message:null},p=function(e,t){switch(t.type){case"AUTH_START":return function(e,t){return console.log("started"),d(e,{error:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return d(e,{token:t.user.token,username:t.user.username,is_student:t.user.is_student,is_teacher:t.user.is_teacher,userId:t.user.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return d(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return d(e,g)}(e);case"GET_ASSIGNMENT_LIST_START":return function(e,t){return d(e,{error:null,loading:!0})}(e);case"GET_ASSIGNMENTS_LIST_SUCCESS":return function(e,t){return d(e,{assignments:t.assignments,error:null,loading:!1,message:null})}(e,t);case"GET_ASSIGNMENTS_LIST_FAIL":return function(e,t){return d(e,{error:t.error,loading:!1})}(e,t);case"GET_ASSIGNMENT_DETAIL_START":return function(e,t){return d(e,{error:null,loading:!0})}(e);case"GET_ASSIGNMENT_DETAIL_SUCCESS":return function(e,t){return d(e,{currentAssignment:t.assignment,error:null,loading:!1})}(e,t);case"GET_ASSIGNMENT_DETAIL_FAIL":return function(e,t){return d(e,{error:t.error,loading:!1})}(e,t);case"CREATE_ASSIGNMENT_START":return function(e,t){return d(e,{error:null,loading:!0})}(e);case"CREATE_ASSIGNMENT_SUCCESS":return function(e,t){return d(e,{error:null,loading:!1})}(e);case"CREATE_ASSIGNMENT_FAIL":return function(e,t){return d(e,{error:t.error,loading:!1})}(e,t);case"GET_GRADED_ASSIGNMENT_LIST_START":return function(e,t){return d(e,{error:null,loading:!0})}(e);case"GET_GRADED_ASSIGNMENTS_LIST_SUCCESS":return function(e,t){return d(e,{assignments:t.assignments,error:null,loading:!1})}(e,t);case"GET_GRADED_ASSIGNMENTS_LIST_FAIL":return function(e,t){return d(e,{error:t.error,loading:!1})}(e,t);case"CREATE_GRADED_ASSIGNMENT_LIST_START":return function(e,t){return d(e,{error:null,loading:!0,message:null})}(e);case"CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS":return function(e,t){return d(e,{message:t.message,loading:!1})}(e,t);case"CREATE_GRADED_ASSIGNMENTS_LIST_FAIL":return function(e,t){return d(e,{error:t.error,message:null,loading:!1})}(e,t);default:return e}},f=function(e){var t=Object(n.useReducer)(p,g),a=Object(u.a)(t,2),l=a[0],o=a[1];return r.a.createElement(E.Provider,{value:{state:l,dispatch:o}},e.children)},h=a(701),S=a(697),T=a(698),y=a(699),v=Object(h.a)((function(e){return r.a.createElement(S.a,{style:{padding:"3em 0em"},vertical:!0},r.a.createElement(T.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(T.a.Row,null,r.a.createElement(T.a.Column,null,r.a.createElement(y.a,{as:"h3",style:{fontSize:"2em"}},"We Help you Expand your mind and Intuition"),r.a.createElement("p",{style:{fontSize:"1.33em",fontVariant:"small-caps",padding:"3em 0em"}},"We can give you superpowers to imagine and build processes that they never thought possible."),r.a.createElement("p",{style:{fontSize:"1.33em",fontVariant:"small-caps",padding:"3em 0em"}},"Let us feed your wild imaginations and whet your passion... through pure chemical engineering.")))))})),_=a(686),A=a(16),I=a(691),b=a(304),C=a(688),w=a(210),N=a(681),k=a(32),G=a.n(k),D=function(e){return{type:"AUTH_SUCCESS",user:e}},L=function(e){return{type:"AUTH_FAIL",error:e}},R=function(e){localStorage.removeItem("user"),e({type:"AUTH_LOGOUT"})},O=function(e,t){return setTimeout((function(){R(t)}),1e3*e)},x=_.a.Item,j=r.a.createElement(A.a,{type:"loading",style:{fontSize:24},spin:!0}),M=_.a.create()((function(e){var t=Object(n.useContext)(E),a=t.state,l=t.dispatch,o=null;r.a.useEffect((function(){a.error&&(o=I.a.error(a.error))}),[a.error]);var i=e.form.getFieldDecorator;return r.a.createElement("div",null,o,a.loading?r.a.createElement(b.a,{indicator:j}):r.a.createElement(_.a,{onSubmit:function(t){t.preventDefault(),e.form.validateFields((function(e,t){e||function(e,t,a){a({type:"AUTH_START"}),G.a.post("/rest-auth/login/",{username:e,password:t}).then((function(t){var n={token:t.data.key,username:e,userId:t.data.user,is_student:t.data.user_type.is_student,is_teacher:t.data.user_type.is_teacher,expirationDate:new Date((new Date).getTime()+36e5),error:null};localStorage.setItem("user",JSON.stringify(n)),a(D(n)),O(3600,a)})).catch((function(e){a(L(e.response.data.non_field_errors))}))}(t.userName,t.password,l)})),a.error&&!a.token||e.history.push("/")},className:"login-form"},r.a.createElement(x,null,i("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(x,null,i("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(x,null,r.a.createElement(w.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Login"),"Or",r.a.createElement(N.a,{style:{marginRight:"10px"},to:"/signup/"}," ","Signup"))))})),q=Object(h.a)(M),F=a(111),U=_.a.Item,P=F.a.Option,z=_.a.create()((function(e){var t=Object(n.useContext)(E).dispatch,a=Object(n.useState)(!1),l=Object(u.a)(a,2),o=l[0],i=l[1],s=e.form.getFieldDecorator;return r.a.createElement(_.a,{onSubmit:function(a){a.preventDefault(),e.form.validateFieldsAndScroll((function(a,n){if(!a){var r=!1,l=!1;"student"===n.userType&&(r=!0),"teacher"===n.userType&&(l=!0),function(e,t,a,n,r,l,o){o({type:"AUTH_START"});var i={username:e,email:t,password1:a,password2:n,is_student:r,is_teacher:l};G.a.post("/rest-auth/registration/",i).then((function(t){var a={token:t.data.key,username:e,userId:t.data.user,is_student:r,is_teacher:l,expirationDate:new Date((new Date).getTime()+36e5)};localStorage.setItem("user",JSON.stringify(a)),o(D(a)),O(3600,o)})).catch((function(e){o(L(e.response.data.non_field_errors))}))}(n.userName,n.email,n.password,n.confirm,r,l,t),e.history.push("/")}}))}},r.a.createElement(U,null,s("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(U,null,s("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(U,null,s("password",{rules:[{required:!0,message:"Please input your password!"},{pattern:/^(?=.*\d)(?=.*[a-z]).{8,}$/,message:"Must contain at least one number and lowercase letter, and at least 8 characters"},{validator:function(t,a,n){var r=e.form;a&&o&&r.validateFields(["confirm"],{force:!0}),n()}}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(U,null,s("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:function(t,a,n){var r=e.form;a&&a!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()}}]})(r.a.createElement(C.a,{prefix:r.a.createElement(A.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",onBlur:function(e){var t=e.target.value;i(o||!!t)}}))),r.a.createElement(U,null,s("userType",{rules:[{required:!0,message:"Please select a user!"}]})(r.a.createElement(F.a,{placeholder:"Select a user type"},r.a.createElement(P,{value:"student"},"Student"),r.a.createElement(P,{value:"teacher"},"Teacher")))),r.a.createElement(U,null,r.a.createElement(w.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Signup"),"Or ","",r.a.createElement(N.a,{style:{marginRight:"10px"},to:"/login/"},"Login")))})),H=a(692),W=a(685),B=a(687),V=function(e){return r.a.createElement(B.a,{type:"dashboard",percent:e.grade,width:80,strokeColor:{"0%":"#108ee9","100%":"#87d068"}})},J=a(51),K=function(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,l=t.token,o=t.username,i=t.assignments,s=t.loading;if(i.length>=10)var u=i.slice(-10);else u=i;if(i.length>=5)var m=i.slice(-5).reverse();else m=i;return Object(n.useEffect)((function(){void 0!==l&&null!==l&&function(e,t,a){a({type:"GET_GRADED_ASSIGNMENT_LIST_START"}),G.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(t)},G.a.get("/graded-assignments/?username=".concat(e)).then((function(e){var t=e.data;a(function(e){return{type:"GET_GRADED_ASSIGNMENTS_LIST_SUCCESS",assignments:e}}(t)),console.log(t)})).catch((function(e){a({type:"GET_GRADED_ASSIGNMENTS_LIST_FAIL",error:e.response.data.message})}))}(o,l,a)}),[l]),r.a.createElement(c,null,s?r.a.createElement(H.a,{active:!0}):r.a.createElement(c,null,r.a.createElement("h1",null,"Welcome  ",o),r.a.createElement("br",null),r.a.createElement(J.c,{width:.8*window.innerWidth,height:400,data:u,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(J.b,{stroke:"#f5f5f5"}),r.a.createElement(J.h,{dataKey:"data"}),r.a.createElement(J.i,null),r.a.createElement(J.g,null),r.a.createElement(J.d,null),r.a.createElement(J.a,{dataKey:"grade",barSize:40,fill:"#413ea0"}),r.a.createElement(J.e,{type:"monotone",dataKey:"grade",stroke:"#ff7300"}),r.a.createElement(J.f,{dataKey:"grade",fill:"red"})),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:"large"}},"Previous submissions"),r.a.createElement(W.a,{size:"large",dataSource:m.slice(-5),renderItem:function(e){return r.a.createElement("div",null,r.a.createElement(V,{key:e.id,grade:e.grade,title:e.assignment}),r.a.createElement("span",null,"  ",e.assignment))}})))},Q=a(207),$=function(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,l=t.token,o=t.loading,i=t.assignments,s=null;return Object(n.useEffect)((function(){void 0!==l&&null!==l&&function(e,t){t({type:"GET_ASSIGNMENT_LIST_START"}),G.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e)},G.a.get("/assignments/").then((function(a){var n=a.data;console.log(e,n),t(function(e){return{type:"GET_ASSIGNMENTS_LIST_SUCCESS",assignments:e}}(n))})).catch((function(e){t({type:"GET_ASSIGNMENTS_LIST_FAIL",error:e.response.data.message})}))}(l,a),t.error&&(s=I.a.error(t.error)),t.message&&(s=I.a.success(t.message))}),[l,t.error,t.message]),r.a.createElement(c,null,s,o?r.a.createElement(H.a,{active:!0}):r.a.createElement("div",null,r.a.createElement("h3",{style:{margin:"5px 0"}},"Assignment List"),r.a.createElement(W.a,{style:{minHeight:500},size:"large",bordered:!0,dataSource:i,renderItem:function(e){return r.a.createElement(W.a.Item,null,r.a.createElement("div",{class:"ui cards"},r.a.createElement("div",{class:"card",style:{minWidth:"400px"}},r.a.createElement("div",{class:"content"},r.a.createElement("div",{class:"description"},e.title)),r.a.createElement("div",{class:"ui bottom attached button"},r.a.createElement(Q.a,{to:"/assignments/".concat(e.id)},r.a.createElement("i",{class:"play icon"}),"Take Test")))))}})))},X=a(684),Y=a(690),Z=Y.a.Step,ee=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),l=a[0],o=a[1],i=e.questions;return r.a.createElement("div",null,r.a.createElement(Y.a,{progressDot:!0,current:l},i.map((function(e,t){return r.a.createElement(Z,{key:t})}))),r.a.createElement("div",null,i[l]),r.a.createElement("div",null,l<i.length-1&&r.a.createElement(w.a,{type:"primary",onClick:function(){o(l+1)}},"Next"),l===i.length-1&&r.a.createElement(w.a,{type:"primary",onClick:e.submit},"Submit"),l>0&&r.a.createElement(w.a,{style:{marginLeft:8},onClick:function(){o(l-1)}},"Previous")))},te=a(689),ae=te.a.Group,ne={display:"block",height:"30px",lineHeight:"30px"},re=function(e){var t=e.questionId,a=e.usersAnswers;return r.a.createElement(ae,{onChange:function(a,n){return e.change(a,t)},value:void 0!==a[t]&&null!==a[t]?a[t]:null},e.choices.map((function(e,t){return r.a.createElement("div",{style:{paddingRight:"20px"}},r.a.createElement(te.a,{style:ne,value:e,key:t},e))})))},le={marginTop:"20px",marginBottom:"20px"},oe=function(e){var t=Object(n.useContext)(E),a=t.state,l=t.dispatch,o=a.token,i=a.currentAssignment,s=a.loading,m=a.username,d=Object(n.useState)({}),g=Object(u.a)(d,2),p=g[0],f=g[1],h=null;Object(n.useEffect)((function(){void 0!==o&&null!==o&&function(e,t,a){a({type:"GET_ASSIGNMENT_DETAIL_START"}),G.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e)},G.a.get("/assignments/".concat(t,"/")).then((function(t){var n=t.data;a(function(e){return{type:"GET_ASSIGNMENT_DETAIL_SUCCESS",assignment:e}}(n)),console.log(e,n)})).catch((function(e){a({type:"GET_ASSIGNMENT_DETAIL_FAIL",error:e.response.data.message})}))}(o,e.match.params.id,l),a.error&&(h=I.a.error(a.error)),a.message&&(h=I.a.success(a.message))}),[o,a.error,a.message]);var S=function(e,t){p[t]=e.target.value,f(p)},T=i.title;return r.a.createElement(c,null,h,Object.keys(i).length>0?r.a.createElement(c,null,s?r.a.createElement(H.a,{active:!0}):r.a.createElement(X.a,{title:T},r.a.createElement(ee,{submit:function(){I.a.success("Submitting your assignment!");var t={username:m,asntId:i.id,answers:p};!function(e,t,a){a({type:"CREATE_GRADED_ASSIGNMENT_LIST_START"}),G.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e)},G.a.post("/graded-assignments/create/",t).then((function(e){a({type:"CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS",message:"Submitted"})})).catch((function(e){console.log("now",e),a({type:"CREATE_GRADED_ASSIGNMENTS_LIST_FAIL",error:e})}))}(o,t,l),e.history.push("/assignment")},questions:i.questions.map((function(e){return r.a.createElement(X.a,{style:le,type:"inner",key:e.id,title:"".concat(e.order,". ").concat(e.question)},r.a.createElement(re,{questionId:e.order,choices:e.choices,change:S,usersAnswers:p}))}))}))):null)},ie=a(682),se=_.a.Item,ce=0,ue=function(e){var t=e.form,a=t.getFieldDecorator,n=t.getFieldValue;a("keys",{initialValue:[]});var l=n("keys"),o=l.map((function(t,n){return r.a.createElement(se,{label:0===n?"Choices":"",key:t},a("questions[".concat(e.id,"]choices[").concat(t,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input a choice to the question"}]})(r.a.createElement(C.a,{placeholder:"Answer choice"})),l.length>1?r.a.createElement(A.a,{className:"dynamic-delete-button",type:"minus-circle-o",disabled:1===l.length,onClick:function(){return function(t){var a=e.form,n=a.getFieldValue("keys");1!==n.length&&a.setFieldsValue({keys:n.filter((function(e){return e!==t}))})}(t)}}):null)}));return r.a.createElement(c,null,r.a.createElement(se,{label:"Question: "},a("question[".concat(e.id,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input a question"}]})(r.a.createElement(C.a,{placeholder:"Add a question"}))),r.a.createElement(se,{label:"Answer: "},a("answers[".concat(e.id,"]"),{validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input an answer to this question"}]})(r.a.createElement(C.a,{placeholder:"What is the answer?"}))),o,r.a.createElement(se,null,r.a.createElement(w.a,{type:"dashed",onClick:function(){var t=e.form,a=t.getFieldValue("keys").concat(++ce);t.setFieldsValue({keys:a})},style:{width:"60%"}},r.a.createElement(A.a,{type:"plus"})," Add an answer choice")))},me=_.a.Item,de=_.a.create()((function(e){for(var t=Object(n.useState)(1),a=Object(u.a)(t,2),l=a[0],o=a[1],i=Object(n.useContext)(E),s=i.state,m=i.dispatch,d=s.token,g=s.username,p=function(){o(l-1)},f=e.form.getFieldDecorator,h=[],S=0;S<l;S+=1)h.push(r.a.createElement(c,{key:S},h.length>0?r.a.createElement(A.a,{className:"dynamic-delete-button",type:"minus-circle-o",disabled:0===h.length,onClick:p}):null,r.a.createElement(ue,Object.assign({id:S},e)),r.a.createElement(ie.a,null)));return r.a.createElement(_.a,{onSubmit:function(t){t.preventDefault(),e.form.validateFields((function(e,t){if(!e){for(var a=[],n=0;n<t.questions.length;n+=1)a.push({title:t.question[n],choices:t.questions[n].choices.filter((function(e){return null!==e})),answer:t.answers[n]});var r={teacher:g,title:t.title,questions:a};!function(e,t,a){a({type:"CREATE_ASSIGNMENT_START"}),console.log(e,t),G.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e)},G.a.post("/assignments/",t).then((function(e){a({type:"CREATE_ASSIGNMENT_SUCCESS"})})).catch((function(e){a({type:"CREATE_ASSIGNMENT_FAIL",error:e.response.data.message})}))}(d,r,m)}}))}},r.a.createElement("h1",null,"Create an assignment"),r.a.createElement(me,{label:"Title: "},f("title",{validateTrigger:["onChange","onBlur"],rules:[{required:!0,message:"Please input a title"}]})(r.a.createElement(C.a,{placeholder:"Add a title"}))),h,r.a.createElement(me,null,r.a.createElement(w.a,{type:"secondary",onClick:function(){o(l+1)}},r.a.createElement(A.a,{type:"plus"})," Add question")),r.a.createElement(me,null,r.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Submit")))})),Ee=function(){return r.a.createElement(c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{exact:!0,path:"/assignment/",component:$}),r.a.createElement(s.a,{exact:!0,path:"/create/",component:de}),r.a.createElement(s.a,{exact:!0,path:"/login/",component:q}),r.a.createElement(s.a,{exact:!0,path:"/signup/",component:z}),r.a.createElement(s.a,{exact:!0,path:"/assignments/:id",component:oe}),r.a.createElement(s.a,{exact:!0,path:"/profile/:id",component:K}))},ge=(a(651),a(652),a(149)),pe=a(683),fe=a(700),he=a(695),Se=a(96),Te=a(693),ye=function(e){var t=e.mobile;return r.a.createElement(pe.a,{text:!0},r.a.createElement(y.a,{as:"h1",content:"Che-Art",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"1em"}}),r.a.createElement(y.a,{as:"h2",content:"In a chemical engineering world",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em",fontFamily:"Lucida Console"}}))},ve=Object(ge.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}).Media,_e=Object(h.a)((function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],o=a[1],i=Object(n.useContext)(E),s=i.state,c=i.dispatch,m=null!==s.token,d=e.children;return r.a.createElement(ve,{as:fe.a.Pushable,at:"mobile"},r.a.createElement(fe.a.Pushable,null,r.a.createElement(fe.a,{as:he.a,animation:"overlay",inverted:!0,onHide:function(){return o(!1)},vertical:!0,visible:l},r.a.createElement(he.a.Item,{as:"a"},r.a.createElement(Q.a,{to:"/"},"Home")),m?r.a.createElement(he.a.Item,null,r.a.createElement(Q.a,{to:"/profile/".concat(s.userId)},"Dashboard")):null,m&&s.is_teacher?r.a.createElement(he.a.Item,null,r.a.createElement(Q.a,{to:"/create"},"Create")):null,m?r.a.createElement(he.a.Item,null,r.a.createElement(Q.a,{to:"/assignment"},"Assignments")):null,r.a.createElement(he.a.Item,{as:"a"},"Work"),r.a.createElement(he.a.Item,{as:"a"},"Company"),r.a.createElement(he.a.Item,{as:"a"},"Careers")),r.a.createElement(fe.a.Pusher,{dimmed:l},r.a.createElement(S.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},r.a.createElement(he.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(he.a.Item,{onClick:function(){return o(!0)}},r.a.createElement(Se.a,{name:"sidebar"})),r.a.createElement(he.a.Item,{as:"a"},r.a.createElement(Q.a,{to:"/"},"Home")),m?r.a.createElement(he.a.Item,null,r.a.createElement(Q.a,{to:"/profile/".concat(s.userId)},"Dashboard")):null,r.a.createElement(he.a.Item,{position:"right"},m?r.a.createElement(Te.a,{as:"a",inverted:!0,style:{marginLeft:"0.5em"},onClick:function(){R(c),e.history.push("/")}},"Logout"):r.a.createElement(he.a.Item,{position:"right"},r.a.createElement(Te.a,{as:"a",inverted:!0},r.a.createElement(Q.a,{to:"/login"},"Login"))))),r.a.createElement(ye,{mobile:!0})),d)))})),Ae=Object(ge.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),Ie=Ae.MediaContextProvider,be=(Ae.Media,function(e){var t=e.children;return r.a.createElement(Ie,null,r.a.createElement(_e,null,t))}),Ce=function(e){var t=Object(n.useContext)(E),a=t.state,l=(t.dispatch,null);return r.a.useEffect((function(){a.error&&(l=I.a.error(a.error))}),[a.error]),r.a.createElement(be,null,l,r.a.createElement(S.a,{style:{minHeight:1e3,fontWeight:"normal",marginTop:"2em",padding:"3em 0em"}},r.a.createElement(pe.a,null,r.a.createElement(T.a.Row,{textAlign:"center"},e.children))),r.a.createElement(S.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(pe.a,null,r.a.createElement(T.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(T.a.Row,null,r.a.createElement(T.a.Column,{width:7},r.a.createElement(y.a,{as:"h4",inverted:!0},r.a.createElement("p",null," CheArt for Chemical Engineering Students"))))))))},we=function(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){!function(e){var t=JSON.parse(localStorage.getItem("user"));if(void 0===t||null===t)R(e);else{var a=new Date(t.expirationDate);a<=new Date?R(e):(e(D(t)),O((a.getTime()-(new Date).getTime())/1e3,e))}}(a)}),[t.token]),r.a.createElement(i.a,null,r.a.createElement(Ce,null,r.a.createElement(Ee,null)))},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ge=r.a.createElement(f,null,r.a.createElement(we,null));o.a.render(Ge,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Ne?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ke(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ke(e)}))}}()}},[[355,1,2]]]);
//# sourceMappingURL=main.7ce5d6b0.chunk.js.map