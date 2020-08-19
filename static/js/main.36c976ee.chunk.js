(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),i=t.n(r),c=(t(41),t(3)),o=t(4),m=t(6),s=t(5),d=t(105),b=t(106),h=[{name:"Bloom",type:"FULLSTACK PROJECT",tech:"React, Redux HTML, CSS, Rails, Action Cable, PostgreSQL, Material UI",description:"Bloom is a web application that helps you develop your professional network in a meaningful way by creating a direct path between mentor and mentee relationships",live:"bloom-frontend.herokuapp.com.",picture:"https://i.imgur.com/kLIvPAN.png",github:"https://github.com/jschack94/Bloom-Frontend"},{name:"Take a Hike",type:"RUBY ON RAILS",tech:"Ruby, Rails, CSS, HTML, MySQL, OAUTH",description:"A hiking app that allows users to search, create, edit and delete trails from a mySQL database. Users are able to also interact with other users using a comment section.",picture:"https://i.imgur.com/170tUmO.png",live:"take-a-hike-web.herokuapp.com/",github:"https://github.com/jschack94/Take-a-Hike-Ruby-on-Rails"},{name:"Noted",type:"FULLSTACK PROJECT",tech:"React, React Routers, Ruby on Rails, Boostrap UI",description:"A web application that allows you to better keep track of tasks, projects and todos",picture:"https://i.imgur.com/fjCNF9D.png",live:"https://jschack94.github.io/Noted-frontend/",github:"https://github.com/jschack94/Noted-frontend"},{name:"My MD",type:"FULL STACK PROJECT",tech:"Vanilla Javascript, Ruby on Rails, Material UI",description:"This app was built using vanilla javascript, and allows doctors to manage the entire lifeycle of their patient",picture:"https://i.imgur.com/07copMJ.png",live:"https://jschack94.github.io/My-Md-Frontend/",github:"https://github.com/jschack94/My-Md-Frontend"}],p=(t(42),t(18)),u=t(104),f=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e,a={navColor:{background:"rgb(72,61,139)"},textColor:{color:"rgb(255,165,0)"}};return l.a.createElement("nav",{style:a.navColor,className:"db dt-l w-100 border-box pa3 ph5-l myNav"},l.a.createElement(u.a,{id:"home",className:"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l",to:"/home",title:"Home"}),l.a.createElement("div",{className:"db dtc-l v-mid w-100 w-75-l tc tr-l"},l.a.createElement(u.a,{id:"about",style:a.textColor,className:"link dim  f6 f5-l dib mr3 mr4-l",to:"/about",title:"About"},"About Me"),l.a.createElement(u.a,(e={to:"/",style:a.textColor,className:"link dim  f6 f5-l dib mr3 mr4-l"},Object(p.a)(e,"to","/skill"),Object(p.a)(e,"title","Skills"),e),"My Skills"),l.a.createElement(u.a,{id:"projects",style:a.textColor,className:"link dim  f6 f5-l dib mr3 mr4-l",to:"/project",title:"Projects"},"Projects")))}}]),t}(n.Component),v=t(2),E=t(31),k=t.n(E),g={landing:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",margin:"auto"},textStyle:{textAlign:"center",color:"rgb(72,61,139)"},textHighLight:{color:"rgb(255,165,0)"},socialLink:{display:"flex",flexDirection:"row",justifyContent:"center",paddingRight:"10px",paddingLeft:"10px"}},y=l.a.createElement("div",{style:g.socialLink},l.a.createElement(v.Animated,{className:"pa2",animationIn:"zoomIn",animationOut:"fadeOut",isVisible:!0},l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/jonathan-schack/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",className:"link dim"},"Linkedin"))),l.a.createElement(v.Animated,{className:"pa2",animationIn:"zoomIn",animationOut:"fadeOut",isVisible:!0},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/jschack94",target:"_blank",rel:"noopener noreferrer",className:"link dim"},"GitHub")))),N=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isLoaded:!1,displaySocial:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.isLoaded=!0,setTimeout((function(){e.setState({displaySocial:y})}),2500)}},{key:"render",value:function(){return l.a.createElement("div",{id:"introPage",className:"mw7 br3 pa2 mv2",style:g.landing},l.a.createElement("div",{className:"landingtext animated fadeIn"},l.a.createElement(v.Animated,{animationIn:"fadeInRight",isVisible:this.isLoaded,animationInDelay:500,style:g.textStyle},l.a.createElement("h1",{className:"f-subheadline"},"Jonathan ",l.a.createElement("span",{style:g.textHighLight}," Schack "))),l.a.createElement(v.Animated,{animationIn:"fadeInLeft",isVisible:this.isLoaded,animationInDelay:1e3,style:g.textStyle},l.a.createElement("h3",{className:"f2 lh-title"}," Fullstack Software Developer ")),l.a.createElement(v.Animated,{animationIn:"shake"},l.a.createElement("img",{id:"loadImg",src:k.a,alt:""}))),this.state.displaySocial)}}]),t}(n.Component),w=function(e){return l.a.createElement("footer",{className:"pv2 ph3 tc "},l.a.createElement("a",{className:"link near-black hover-silver dib mh3 tc",href:"https://github.com/jschack94",target:"_blank",rel:"noopener noreferrer",title:"GitHub"},l.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},l.a.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})),l.a.createElement("span",{className:"f6 db"},"GitHub")),l.a.createElement("a",{className:"link hover-silver near-black dib mh3 tc",href:"https://www.linkedin.com/in/jonathan-schack",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn"},l.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},l.a.createElement("path",{d:"M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z",fillRule:"nonzero"})),l.a.createElement("span",{className:"f6 db"},"LinkedIn")),l.a.createElement("a",{className:"link hover-silver near-black dib mh3 tc",href:"https://medium.com/jonathanschack",rel:"noopener noreferrer",target:"_blank",title:""},l.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},l.a.createElement("path",{d:"M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z",fillRule:"nonzero"})),l.a.createElement("span",{className:"f6 db"},"Medium")),l.a.createElement("section",{class:"alt"},l.a.createElement("h3",null,"Address"),l.a.createElement("p",null,"1400 N Lake Shore Drive",l.a.createElement("br",null),"Chicago, IL 60610"),l.a.createElement("h3",null,"Phone"),l.a.createElement("a",{href:"#"},"(262) 894-0630"),l.a.createElement("h3",null,"Email"),l.a.createElement("p",null,l.a.createElement("a",{href:"#"},"jschack94@gmail.com"))))},x=t(32),j=t.n(x),C=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"tc pa3 pa5-ns"},l.a.createElement("article",{className:"hide-child relative b--black-20 mw5 center mySoc"},l.a.createElement("img",{src:j.a,className:"db br4 dib myPic",alt:"my logo"}),l.a.createElement("div",{className:"pa2 bt b--black-20"},l.a.createElement("h1",{className:"f4 animated pulse infinite"},"Jonathan Schack"),l.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),l.a.createElement(w,null)))}}]),t}(n.Component),O=[{schoolName:"Flatiron School",program:"Full-Stack Development",date:"2019-2020",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2TzGNqgAWATirXEzQCz6IW-RXdpQ98sBZ2C95DfEUr0LUghOmA"},{schoolName:"University of Missouri-Columbia",program:"Bachelor of Arts in Journalism, Minor in Economics",date:"2012-2016",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2TzGNqgAWATirXEzQCz6IW-RXdpQ98sBZ2C95DfEUr0LUghOmA"}],I=function(e){var a=e.logo,t=e.schoolName,n=e.program,r=e.date;return l.a.createElement("main",{className:"mw6 center "},l.a.createElement(v.Animated,{animationIn:"flipInX",animationOut:"zoomOutDown",isVisible:!0},l.a.createElement("article",null,l.a.createElement("a",{className:"link dt w-100 bb b--black-10 pb2 mt2 dim blue",href:"#0"},l.a.createElement("div",{className:"dtc w3"},l.a.createElement("img",{src:a,className:"db w-100",alt:"education logo"})),l.a.createElement("div",{className:"dtc v-top pl2"},l.a.createElement("h1",{className:"f6 f5-ns fw6 lh-title black mv0"},t),l.a.createElement("h2",{className:"f6 fw4 mt2 mb0 black-60"},n),l.a.createElement("dl",{className:"mt2 f6"},l.a.createElement("dt",{className:"clip"},"Price"),l.a.createElement("dd",{className:"ml0"},r)))))))},S=t(33),A=t.n(S),R={textStyle:{textAlign:"left"},eduStyle:{width:"100%",height:"200px"}},L=function(){return l.a.createElement("div",{style:R.textStyle},l.a.createElement("h1",null,"About me"),l.a.createElement("h2",null,"Hello!"),l.a.createElement("p",null,"I am a full stack web developer with several years of experience as a consultant in the digital media and technology software industries. After completing my bachelor's degree at the University of Missouri School of Journalism and stops at Cars.com and Cision, I realized that I wanted more out of my career. After a bit of introspection, I came to the conclusion that I had a desire to build, and I made the decision to transition into the technology space after completing Flatiron School\u2019s immersive software engineering bootcamp. Because of Flatiron, I have been propelled into a fresh career path that I am extremely excited to learn and grow in. I am eager to apply my deep knowledge in marketing and communication, combined with my background in technology and coding to help facilitate connections between organizations and consumers. The intersection of these two areas is what I know best, and I am eager to start contributing to a team with likeminded goals and values. "),l.a.createElement("hr",null),l.a.createElement("h1",null,"Education "),l.a.createElement("div",{className:"eduBlip",style:R.eduStyle},O.map((function(e){return l.a.createElement(I,{schoolName:e.schoolName,program:e.program,date:e.date,logo:e.logo})}))),l.a.createElement("h1",null,"My",l.a.createElement("br",null),"Resume"),l.a.createElement("img",{id:"loadImg",src:A.a,alt:""}))},M=(t(99),{layout:{display:"flex",margin:"auto"},center:{margin:"auto"}}),D=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"aboutpager",style:M.layout},l.a.createElement(v.Animated,{animationIn:"fadeInLeftBig",animationOut:"zoomOutDown",isVisible:!0,animationInDelay:10},l.a.createElement(C,null)),l.a.createElement("article",{id:"aboutPage",className:"mw7 center br3 pa4 pa4-ns mv2",style:M.center},l.a.createElement(v.Animated,{animationIn:"fadeInDownBig",animationOut:"zoomOutDown",isVisible:!0,animationInDelay:10},l.a.createElement(L,null))))}}]),t}(n.Component),z={btnColor:{backgroundColor:"#4A3F89",width:"80px",textAlign:"center"}},B=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={emailAddress:"",message:""},e}return Object(o.a)(t,[{key:"handleEmail",value:function(e){this.setState({emailAddress:e.target.value})}},{key:"handleMessage",value:function(e){this.setState({message:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("email sent"),console.log(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"w-100 pa3 mh2"},l.a.createElement("form",{className:"measure center"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Contact Me!"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:function(a){return e.handleEmail(a)}})),l.a.createElement("div",{className:"pt2"},l.a.createElement("label",{htmlFor:"mail",className:"f6 b db mb2"},"Email Body"),l.a.createElement("textarea",{id:"mail",name:"mail",className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100","aria-describedby":"mail-desc",onChange:function(a){return e.handleMessage(a)}}))),l.a.createElement("div",{className:""},l.a.createElement("input",{style:z.btnColor,className:"input-reset bg-transparent grow pointer f6 link dim br-pill ph3 pv2 mb2 dib white",type:"submit",value:"Send",onClick:function(a){return e.onSubmit(a)}}))))}}]),t}(n.Component),T=(t(100),{layout:{display:"flex",flexDirection:"column",alignItems:"center","max-width":"500px",minHeight:"450px",minWidth:"300px"},flexy:{display:"flex",flexDirection:"column"},pic:{maxWidth:"498px",maxHeight:"332px"},btnColor:{backgroundColor:"#4A3F89",width:"80px",textAlign:"center"}}),H=function(e){return l.a.createElement("article",{style:T.layout,className:"br2 ba dark-gray b--black-10 mv4 w-40 center"},l.a.createElement("img",{style:T.pic,src:e.item.picture,className:"db w-100 br2 br--top",alt:"project logo"}),l.a.createElement("div",{className:"pa2 ph3-ns pb3-ns",id:"myHover","data-hover":e.item.tech},l.a.createElement("div",{style:T.flexy,className:"dt w-100 mt1"},l.a.createElement("div",{className:"dtc"},l.a.createElement("h1",{className:"f5 f4-ns mv0"},e.item.name)),l.a.createElement("div",{className:"dtc tr"},l.a.createElement("h2",{className:"f5 mv0"},e.item.type))),l.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-gray"},e.item.description)),l.a.createElement("div",{className:"center pa2 ph3-ns pb3-ns"},l.a.createElement("a",{style:T.btnColor,href:e.item.live,className:"f6 link dim br-pill ph3 pv2 mb2 dib white mr3",target:"_blank"},"Live"),l.a.createElement("a",{style:T.btnColor,href:e.item.github,className:"f6 link dim br-pill ph3 pv2 mb2 dib white",target:"_blank"},"Github")))},U=function(){return l.a.createElement(v.Animated,{animationIn:"fadeInLeftBig",animationOut:"zoomOutDown",isVisible:!0},l.a.createElement("article",{className:"mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},l.a.createElement("div",{className:"tc"},l.a.createElement("h2",null,"Front-end"),l.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),l.a.createElement("div",null,l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"HTML"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"CSS"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"JavaScript (ES6)"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"Material UI"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"Boostrap UI"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"React.js"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"Redux"),l.a.createElement("a",{className:"f4 db black link hover-green pv1"},"React Router"))))},V=function(){return l.a.createElement(v.Animated,{animationIn:"fadeInUpBig",animationOut:"zoomOutDown",isVisible:!0},l.a.createElement("article",{className:"mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},l.a.createElement("div",{className:"tc"},l.a.createElement("h2",null,"Back-end"),l.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),l.a.createElement("div",null,l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"Node.js"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"MySQL"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"Postgresql"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"MongoDB"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"Express"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"Ruby on Rails"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"Sinatra"),l.a.createElement("a",{className:"f4 db black link hover-red pv1"},"OAuth and JWT"))))},F=function(){return l.a.createElement(v.Animated,{animationIn:"fadeInRightBig",animationOut:"zoomOutDown",isVisible:!0},l.a.createElement("article",{className:"mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},l.a.createElement("div",{className:"tc"},l.a.createElement("h2",null,"Other"),l.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),l.a.createElement("div",null,l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"GIT"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"RESTful APIs"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Responsive Design"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Microsoft Office"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Adobe"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Strategic Communications"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Wireframing"),l.a.createElement("a",{className:"f4 db black link hover-hot-pink pv1"},"Storyboarding"))))},J={layout:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",margin:"auto"},topSkill:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"}},P=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pt5"},l.a.createElement("article",{className:"mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center tc w-90",style:J.backgroundimg},l.a.createElement("h2",null,"Top 5 Skills"),l.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"}),l.a.createElement("div",{style:J.topSkill,className:"pa1 w-100"},l.a.createElement("a",{className:"f4 db black link hover-blue pv1 ph2"},"JavaScript"),l.a.createElement("a",{className:"f4 db black link hover-blue pv1 ph2"},"React.js"),l.a.createElement("a",{className:"f4 db black link hover-blue pv1 ph2"},"Ruby on Rails"),l.a.createElement("a",{className:"f4 db black link hover-blue pv1 ph2"},"CSS"),l.a.createElement("a",{className:"f4 db black link hover-blue pv1 ph2"},"HTML"))),l.a.createElement("div",{style:J.layout},l.a.createElement(U,null),l.a.createElement(V,null),l.a.createElement(F,null)))}}]),t}(n.Component),W=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"handleConsole",value:function(){console.log("%c Welcome to my console. \n This is a work in progress =] ","background: #222; color: #bada55; font-size:20px; ")}},{key:"componentWillMount",value:function(){this.handleConsole()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement("div",{className:""},l.a.createElement(f,null),l.a.createElement("div",{className:"contentBody"},l.a.createElement(b.a,{exact:!0,path:"/home",component:N}),l.a.createElement(b.a,{exact:!0,path:"/about",component:D}),l.a.createElement(b.a,{exact:!0,path:"/project",render:function(e){return h.map((function(a){return l.a.createElement(H,Object.assign({},e,{item:a}))}))}}),l.a.createElement(b.a,{exact:!0,path:"/skill",component:P}),l.a.createElement(b.a,{exact:!0,path:"/contact",component:B})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,a,t){e.exports=t.p+"static/media/rocket1.029ea0d7.gif"},32:function(e,a,t){e.exports=t.p+"static/media/hi.9321aaca.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/me.a7656881.jpg"},36:function(e,a,t){e.exports=t(102)},41:function(e,a,t){},42:function(e,a,t){},99:function(e,a,t){}},[[36,1,2]]]);
//# sourceMappingURL=main.36c976ee.chunk.js.map