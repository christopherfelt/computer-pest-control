(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],d=0,m=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b5c":function(t,e,a){},"120e":function(t,e,a){"use strict";var s=a("770c"),i=a.n(s);i.a},"56bf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",attrs:{id:"app"}},[a("nav-panel"),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary"},[a("router-link",{staticClass:"navbar-brand text-light",attrs:{to:{name:"Home"}}},[t._v("Computer Pest Control")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item ",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-outline-warning",on:{click:t.logout}},[t._v(" logout ")]):a("button",{staticClass:"btn btn-outline-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},m=d,g=(a("cfa4"),a("2877")),p=Object(g["a"])(m,r,n,!1,null,null,null),v=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"bg-panel",attrs:{id:"sidebar"}},[t._m(0),a("div",{staticClass:"d-flex justify-content-start ml-5"},[a("ul",{staticClass:"list-unstyled components "},[a("li",{staticClass:"active "},[a("router-link",{staticClass:"remove-underline font-weight-bolder",attrs:{to:{name:"Home"}}},[t._v("Reports")])],1),a("li",[a("router-link",{staticClass:"remove-underline font-weight-bolder",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1)])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-header m-3"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://cdn1.iconfinder.com/data/icons/internet-and-security-outline-1/64/internet-and-security-outline-1-14-512.png",alt:""}}),a("h5",{},[t._v("Computer Pest Control")])])}],f={name:"NavPanel",data(){return{}},computed:{},methods:{},components:{}},C=f,_=(a("8783"),Object(g["a"])(C,h,b,!1,null,"15d5fb7e",null)),y=_.exports,w={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:v,NavPanel:y}},B=w,F=(a("5c0b"),Object(g["a"])(B,i,o,!1,null,null,null)),$=F.exports,x=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid home-container",class:{disabled:t.createFormVisible}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"float-right m-3"},[a("button",{staticClass:"btn btn-info m-1",on:{click:function(e){t.createFormVisible=!t.createFormVisible}}},[a("i",{staticClass:"fas fa-plus"})]),t._m(0)])])]),t.createFormVisible?a("div",{staticClass:" card bg-light border shadow create-form overlay-form"},[a("div",{staticClass:"card-body"},[a("h4",[t._v("Submit Report")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.createReport(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Title"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.title,expression:"createForm.title"}],staticClass:"form-control",attrs:{type:"text",name:"Title",placeholder:"Enter a title"},domProps:{value:t.createForm.title},on:{input:function(e){e.target.composing||t.$set(t.createForm,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Title"}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.createForm.description,expression:"createForm.description"}],staticClass:"form-control",attrs:{name:"Description",placeholder:"Explain the issue",rows:"4",cols:"50"},domProps:{value:t.createForm.description},on:{input:function(e){e.target.composing||t.$set(t.createForm,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Title"}},[t._v("Add a Tech (Optional)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.tech,expression:"createForm.tech"}],staticClass:"form-control",attrs:{type:"email",name:"Tech",placeholder:"Enter a email to assign a tech"},domProps:{value:t.createForm.tech},on:{input:function(e){e.target.composing||t.$set(t.createForm,"tech",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Title"}},[t._v("Add Collaborators (Optional)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.collaborators,expression:"createForm.collaborators"}],staticClass:"form-control",attrs:{type:"text",name:"Collaborators",placeholder:"Enter a emails (comma seperated)"},domProps:{value:t.createForm.collaborators},on:{input:function(e){e.target.composing||t.$set(t.createForm,"collaborators",e.target.value)}}})]),a("div",{staticClass:"form-group float-right"},[a("button",{staticClass:"btn btn-primary mx-1",attrs:{type:"submit"}},[t._v(" Submit ")]),a("button",{staticClass:"btn btn-primary mx-1",attrs:{type:"button"},on:{click:function(e){t.createFormVisible=!t.createFormVisible}}},[t._v(" Cancel ")])])])])]):t._e(),a("div",{staticClass:"row d-flex justify-content-center mt-5 home-row"},[a("div",{staticClass:"col-10 d-flex justify-content-center align-self-center"},[a("div",{staticClass:"card w-100 long"},[t.$auth.isAuthenticated?a("div",{staticClass:"card-body"},[a("div",{staticClass:"row title-bar border-bottom p-0"},[a("div",{staticClass:"col-2"},[t._v("Title")]),a("div",{staticClass:"col-2"},[t._v("Reported By")]),a("div",{staticClass:"col-2"},[t._v("Bug Type")]),a("div",{staticClass:"col-2 filterStatus",on:{click:function(e){return t.changeFilterStatus()}}},[t._v(" Status "),"all"==t.bugFilter?a("span",[t._v("(All)")]):"closed"==t.bugFilter?a("span",{staticStyle:{color:"green"}},[t._v("(Closed)")]):a("span",{staticStyle:{color:"red"}},[t._v("(Unresolved)")])]),a("div",{staticClass:"col-2"},[t._v("Assigned Tech")]),a("div",{staticClass:"col-2"},[t._v("Last Modified")])]),"all"==t.bugFilter?a("ul",{staticClass:"list-group mt-2"},t._l(t.bugs,(function(t){return a("bug",{key:t.id,attrs:{bug:t}})})),1):t._e(),"closed"==t.bugFilter?a("ul",{staticClass:"list-group mt-2"},t._l(t.closedBugs,(function(t){return a("bug",{key:t.id,attrs:{bug:t}})})),1):t._e(),"open"==t.bugFilter?a("ul",{staticClass:"list-group mt-2"},t._l(t.openBugs,(function(t){return a("bug",{key:t.id,attrs:{bug:t}})})),1):t._e()]):a("div",{staticClass:"card-body text-center"},[a("h2",[t._v("Login or Register")]),a("div",[a("button",{staticClass:"btn btn-primary m-2",on:{click:t.login}},[t._v(" Sign Up ")]),a("button",{staticClass:"m-2 btn btn-primary",on:{click:t.login}},[t._v(" Login ")])])])])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-dark m-1"},[a("i",{staticClass:"fas fa-search"})])}],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("router-link",{staticClass:"remove-underline",attrs:{to:{name:"BugDetail",params:{id:t.bug._id}}}},[a("li",{staticClass:"row border rounded buglist rounded-0",class:{closed:t.bug.closed,unresolved:!t.bug.closed}},[a("div",{staticClass:"col-2 buglist-item"},[t._v(t._s(t.bug.title))]),a("div",{staticClass:"col-2 buglist-item"},[t._v(t._s(t.bug.creatorEmail))]),a("div",{staticClass:"col-2 buglist-item"},[t._v(t._s(t.bug.bugType))]),t.bug.closed?a("div",{staticClass:"col-2 buglist-item"},[t._v("Closed")]):a("div",{staticClass:"col-2 buglist-item"},[t._v("Unresolved")]),t.bug.tech?a("div",{staticClass:"col-2 buglist-item"},[t._v(t._s(t.bug.tech))]):a("div",{staticClass:"col-2 buglist-item"},[t._v("Unassigned")]),a("div",{staticClass:"col-2 buglist-item"},[t._v(t._s(t.bug.modified))])])])],1)},P=[],D={name:"Bug",data(){return{}},props:["bug"],computed:{},methods:{},components:{}},E=D,j=(a("f0e1"),Object(g["a"])(E,N,P,!1,null,"61d79e26",null)),A=j.exports,O={name:"home",mounted(){this.$store.dispatch("getAllBugs")},data(){return{createFormVisible:!1,createForm:{},bugFilter:"all"}},computed:{bugs(){return this.$store.state.BugStore.bugs},closedBugs(){let t=this.bugs.filter(t=>1==t.closed);return t},openBugs(){let t=this.bugs.filter(t=>0==t.closed);return t}},methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},createReport(){this.$store.dispatch("createBugReport",this.createForm),this.createForm={},this.createFormVisible=!1},changeFilterStatus(){console.log("change filter status"),console.log(this.bugFilter),"all"==this.bugFilter?this.bugFilter="closed":"closed"==this.bugFilter?this.bugFilter="open":this.bugFilter="all"}},components:{Bug:A}},V=O,T=(a("120e"),Object(g["a"])(V,S,k,!1,null,null,null)),R=T.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-container "},[a("div",{staticClass:"card profile-card float-right m-2 shadow-sm"},[a("div",{staticClass:"img-div"},[a("img",{staticClass:"profile-img",attrs:{src:t.profile.picture,alt:"Generic placeholder image"}}),a("span",[t._v(" "+t._s(t.profile.email)+" ")])]),a("div",[a("button",{staticClass:"btn btn-danger btn-sm float-right m-1",on:{click:t.logout}},[t._v(" logout ")])])])])},L=[],z={name:"Profile",computed:{profile(){return this.$store.state.profile}},methods:{async logout(){console.log("here"),this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},I=z,H=(a("aefc"),Object(g["a"])(I,U,L,!1,null,"579c260a",null)),M=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid detail-container"},[a("div",{staticClass:"row d-flex justify-content-center mb-3 mt-5"},[a("div",{staticClass:"col-10"},[t.titleFormVisible&&t.activeBug.creatorEmail==this.$auth.user.email&&0==t.activeBug.closed?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBugReport(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.activeBug.title,expression:"activeBug.title"}],staticStyle:{"font-size":"25px"},attrs:{type:"text"},domProps:{value:t.activeBug.title},on:{input:function(e){e.target.composing||t.$set(t.activeBug,"title",e.target.value)}}}),a("div",{staticClass:"d-inline"},[a("button",{staticClass:"btn btn-primary btn-sm mx-1",attrs:{type:"submit"}},[t._v(" Submit ")]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){t.titleFormVisible=!1}}},[t._v(" Cancel ")])])]):a("h1",{staticClass:"mr-2 d-inline",on:{click:function(e){t.titleFormVisible=!0}}},[t._v(" "+t._s(t.activeBug.title)+" ")]),t.activeBug.closed?a("span",{staticClass:"float-right status text-success"},[t._v("Closed")]):a("span",{staticClass:"float-right status text-danger font-weight-bolder"},[t._v("Unresolved")]),a("div",[a("h6",{staticClass:"d-inline"},[t._v("Reported by:")]),a("span",[t._v(" "+t._s(t.activeBug.creatorEmail)+" ")])])])]),a("div",{staticClass:"row d-flex justify-content-center"},[a("div",{staticClass:"col-10 border description-box d-flex align-items-center"},[t.descriptionFormVisible&&t.activeBug.creatorEmail==this.$auth.user.email&&0==t.activeBug.closed?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBugReport(e)}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeBug.description,expression:"activeBug.description"}],staticClass:"mt-1",attrs:{name:"",id:"",cols:"135",rows:"9"},domProps:{value:t.activeBug.description},on:{input:function(e){e.target.composing||t.$set(t.activeBug,"description",e.target.value)}}}),a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-primary m-1",attrs:{type:"submit"}},[t._v(" Submit ")]),a("button",{staticClass:"btn btn-danger m-1",on:{click:function(e){t.descriptionFormVisible=!1}}},[t._v(" Cancel ")])])]):a("p",{on:{click:function(e){t.descriptionFormVisible=!0}}},[t._v(" "+t._s(t.activeBug.description)+" ")])])]),a("div",{staticClass:"row d-flex justify-content-center mt-2"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",[a("h6",{staticClass:"d-inline"},[t._v("Tech Assign to Report:")]),a("span",[t._v(" "+t._s(t.activeBug.tech?t.activeBug.tech:"unassigned")+" ")])]),a("div",[a("h6",{staticClass:"d-inline"},[t._v("Collaborators:")]),t._l(t.activeBug.collaborators,(function(e){return a("span",{key:e},[t._v(" "+t._s(e)+", ")])}))],2),a("div",[a("h6",{staticClass:"d-inline"},[t._v("Bug Type:")]),a("span",[t._v(" "+t._s(t.activeBug.bugType)+" ")])]),a("div",[a("h6",{staticClass:"d-inline"},[t._v("Creation Date:")]),a("span",[t._v(" "+t._s(t.activeBug.creation)+" ")])]),a("div",[a("h6",{staticClass:"d-inline"},[t._v("Last Modified Date:")]),a("span",[t._v(" "+t._s(t.activeBug.modified)+" ")])])]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-success btn-lg float-right",on:{click:t.closeBugReport}},[t._v(" Close ")])])])])]),a("div",{staticClass:"row d-flex justify-content-center mt-3"},[a("div",{staticClass:"col-10 "},[a("div",{staticClass:"text-right float-right"},[a("button",{staticClass:"btn btn-info",on:{click:function(e){t.noteFormVisible=!t.noteFormVisible}}},[a("i",{staticClass:"fas fa-plus"})])]),a("div",{staticClass:"notes-box mt-2"},[a("h3",[t._v("Notes")]),t._l(t.notes,(function(t){return a("note",{key:t.id,attrs:{note:t}})}))],2)])]),t.noteFormVisible?a("div",{staticClass:"card p-3 note-form",on:{submit:function(e){return e.preventDefault(),t.createNote(e)}}},[a("form",[a("div",{staticClass:"form-group mb-0"},[a("h6",[t._v("Add a note")]),a("label",{attrs:{for:"content"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteForm.content,expression:"noteForm.content"}],staticClass:"form-control",attrs:{title:"content",rows:"2",cols:"30"},domProps:{value:t.noteForm.content},on:{input:function(e){e.target.composing||t.$set(t.noteForm,"content",e.target.value)}}})])]),t._m(0)])]):t._e()])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group float-right"},[a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[t._v("Submit")])])}],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item"},[t.note.creatorEmail==this.$auth.user.email?a("div",{staticClass:"float-right text-danger",on:{click:t.deleteNote}},[a("i",{staticClass:"fas fa-trash-alt "})]):t._e(),a("div",[a("h6",[t._v(t._s(t.note.creatorEmail))]),a("p",[t._v(t._s(t.note.content))])])])},K=[],X=a("3d20"),Z=a.n(X);class q{static async deleteUnauthorized(){await Z.a.fire({title:"Sorry you are not authorized to close this bug",icon:"error"})}static async closeConfirm(){let t=await Z.a.fire({title:"Are you sure you want to close?",icon:"warning"});return t.value}static async deleteConfirm(){let t=await Z.a.fire({title:"Are you sure you want to delete?",icon:"warning"});return t.value}}var Q={name:"Note",data(){return{}},props:["note"],computed:{},methods:{async deleteNote(){let t=await q.deleteConfirm();console.log(t),t&&this.$store.dispatch("deleteNote",this.note)}},components:{}},Y=Q,tt=Object(g["a"])(Y,G,K,!1,null,"7cb1aca4",null),et=tt.exports,at={name:"BugDetail",mounted(){this.$store.dispatch("getBugById",this.$route.params.id),this.$store.dispatch("getNotesByBugId",this.$route.params.id)},data(){return{noteForm:{},noteFormVisible:!1,titleFormVisible:!1,descriptionFormVisible:!1}},computed:{activeBug(){return this.$store.state.BugStore.activeBug},notes(){return this.$store.state.NoteStore.notes}},methods:{createNote(){this.$store.dispatch("createNote",{content:this.noteForm.content,bugId:this.activeBug._id}),this.noteForm={},this.noteFormVisible=!1},async closeBugReport(){this.activeBug.creatorEmail==this.$auth.user.email?await q.closeConfirm()&&this.$store.dispatch("editBugReport",{_id:this.activeBug._id,closed:!0}):await q.deleteUnauthorized()},async editBugReport(){this.$store.dispatch("editBugReport",this.activeBug),this.descriptionFormVisible=!1,this.titleFormVisible=!1}},components:{Note:et}},st=at,it=(a("c18d"),Object(g["a"])(st,J,W,!1,null,"bd5b8e56",null)),ot=it.exports;s["a"].use(x["a"]);const rt=[{path:"/",name:"Home",component:R},{path:"/profile",name:"Profile",component:M,beforeEnter:u["b"]},{path:"/:id",name:"BugDetail",component:ot,beforeEnter:u["b"]}],nt=new x["a"]({routes:rt});var lt=nt,ct=a("2f62");let ut=location.host.includes("localhost")?"http://localhost:3000/":"/";const dt=c.a.create({baseURL:ut+"api",timeout:3e3,withCredentials:!0}),mt={state:{bugs:[],activeBug:{}},mutations:{setAllBugs(t,e){t.bugs=e},addNewBug(t,e){t.bugs.push(e)},activeBug(t,e){t.activeBug=e}},actions:{setBearer({},t){dt.defaults.headers.authorization=t},resetBearer(){dt.defaults.headers.authorization=""},async getAllBugs({commit:t,dispatch:e}){try{let e=await dt.get("bugs");const a={year:"numeric",month:"long",day:"numeric"};e.data.forEach(t=>{let e=new Date(t.updatedAt);t.modified=e.toLocaleDateString("en-US",a)}),t("setAllBugs",e.data)}catch(a){console.error(a)}},async getBugById({commit:t,dispatch:e},a){try{let e=await dt.get("bugs/"+a);const s={year:"numeric",month:"long",day:"numeric"};let i=new Date(e.data.updatedAt),o=new Date(e.data.createdAt);e.data.modified=i.toLocaleDateString("en-US",s),e.data.creation=o.toLocaleDateString("en-US",s),t("activeBug",e.data)}catch(s){console.error(s)}},async createBugReport({commit:t,dispatch:e},a){try{let e=await dt.post("bugs",a),s=new Date;const i={year:"numeric",month:"long",day:"numeric"};e.data.modified=s.toLocaleDateString("en-US",i),t("addNewBug",e.data),lt.push({name:"BugDetail",params:{id:e.data._id}})}catch(s){console.error(s)}},async editBugReport({commit:t,dispatch:e},a){try{let e=await dt.put("bugs/"+a._id,a);const s={year:"numeric",month:"long",day:"numeric"};let i=new Date(e.data.updatedAt),o=new Date(e.data.createdAt);e.data.modified=i.toLocaleDateString("en-US",s),e.data.creation=o.toLocaleDateString("en-US",s),t("activeBug",e.data)}catch(s){console.error(s)}}}},gt={state:{notes:[]},mutations:{setNotes(t,e){t.notes=e},addNewNote(t,e){t.notes.push(e)}},actions:{setBearer({},t){dt.defaults.headers.authorization=t},resetBearer(){dt.defaults.headers.authorization=""},async getNotesByBugId({commit:t,dispatch:e},a){try{let e=await dt.get("bugs/"+a+"/notes");console.log(e.data);const s={year:"numeric",month:"long",day:"numeric"};let i=new Date(e.data.updatedAt),o=new Date(e.data.createdAt);e.data.modified=i.toLocaleDateString("en-US",s),e.data.creation=o.toLocaleDateString("en-US",s),t("setNotes",e.data)}catch(s){console.error(s)}},async createNote({commit:t,dispatch:e},a){try{let e=await dt.post("bugs/"+a.bugId+"/notes",a),s=new Date;const i={year:"numeric",month:"long",day:"numeric"};e.data.modified=s.toLocaleDateString("en-US",i),t("addNewNote",e.data)}catch(s){console.error(s)}},async deleteNote({commit:t,dispatch:e},a){try{await dt.delete("notes/"+a._id);e("getNotesByBugId",a.bug)}catch(s){console.error(s)}}}};s["a"].use(ct["a"]);let pt=location.host.includes("localhost")?"http://localhost:3000/":"/",vt=c.a.create({baseURL:pt+"api",timeout:3e3,withCredentials:!0});var ht=new ct["a"].Store({state:{profile:{},bugs:[]},mutations:{setProfile(t,e){t.profile=e}},actions:{setBearer({},t){vt.defaults.headers.authorization=t},resetBearer(){vt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await vt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}}},modules:{BugStore:mt,NoteStore:gt}});const bt="chris-felt-auth.auth0.com",ft="https://chris-felt-auth",Ct="MiPxIZ6GhkX9wfHnk0p2O8VOJ3C7W1FK";s["a"].use(u["a"],{domain:bt,clientId:Ct,audience:ft,onRedirectCallback:t=>{lt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:lt,store:ht,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"770c":function(t,e,a){},8783:function(t,e,a){"use strict";var s=a("c3af"),i=a.n(s);i.a},"93b4":function(t,e,a){},"9c0c":function(t,e,a){},aefc:function(t,e,a){"use strict";var s=a("93b4"),i=a.n(s);i.a},c18d:function(t,e,a){"use strict";var s=a("56bf"),i=a.n(s);i.a},c3af:function(t,e,a){},cfa4:function(t,e,a){"use strict";var s=a("0b5c"),i=a.n(s);i.a},d298:function(t,e,a){},f0e1:function(t,e,a){"use strict";var s=a("d298"),i=a.n(s);i.a}});