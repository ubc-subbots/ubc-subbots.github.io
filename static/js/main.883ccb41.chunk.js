(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,a,t){},139:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},151:function(e,a,t){},156:function(e,a,t){},157:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(27),s=t.n(o),i=(t(90),t(25)),l=t(7),c=t(8),m=t(10),u=t(9),d=t(11),h=t(39),p=t.n(h),g=t(15),b=t.n(g),f=t(2),E=t.n(f),w=t(18),y=t(40),v=(t(96),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"FooterContainer"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(b.a,{className:"IconRow"},r.a.createElement(E.a,{sm:3,className:"my-auto"},r.a.createElement("div",{className:"CopyrightText"},"Copyright \xa9 UBC Subbots 2018")),r.a.createElement(E.a,null,r.a.createElement("a",{href:"https://www.facebook.com/ubc.subbots/"},r.a.createElement(w.a,{className:"SocialIcon",icon:y.a,size:"2x"})),r.a.createElement("a",{href:"https://github.com/ubc-subbots"},r.a.createElement(w.a,{className:"SocialIcon",icon:y.b,size:"2x"})),r.a.createElement("a",{href:"https://ca.linkedin.com/company/ubc-subbots"},r.a.createElement(w.a,{className:"SocialIcon",icon:y.c,size:"2x"}))),r.a.createElement(E.a,{sm:3}))))}}]),a}(r.a.Component)),j=t(41),C=t.n(j),k=t(81),N=t.n(k),S=t(82),O=t.n(S),T=t(21),I=t.n(T),B=t(24),M=t.n(B),L=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(M.a,{show:this.props.isOpen},r.a.createElement(M.a.Header,{closeButton:!0},r.a.createElement(M.a.Title,null,"Modal title")),r.a.createElement(M.a.Body,null,r.a.createElement("p",null,"Modal body text goes here.")),r.a.createElement(M.a.Footer,null,r.a.createElement(I.a,{variant:"secondary"},"Close"),r.a.createElement(I.a,{variant:"primary"},"Save changes")))}}]),a}(r.a.Component),A=t(19),_=(t(126),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={navbarClass:"HeaderContainer",navbrandClass:"NavBrand",isSignInOpened:!1},window.onscroll=function(){document.body.scrollTop>60||document.documentElement.scrollTop>60?(t.setState({navbarClass:"HeaderContainerShrunk"}),t.setState({navbrandClass:"NavBrandShrunk"})):(t.setState({navbarClass:"HeaderContainer"}),t.setState({navbrandClass:"NavBrand"}))},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{fixed:"top",expand:"lg",className:this.state.navbarClass},r.a.createElement(C.a.Brand,{className:"NavBrandContainer"},r.a.createElement(i.b,{to:"/",className:this.state.navbrandClass},r.a.createElement(w.a,{className:"HeaderLogo",icon:A.b,size:"lg"}),"UBC Subbots")),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto"},r.a.createElement(i.b,{to:"/",className:"NavLink"},"Home"),r.a.createElement(i.b,{to:"/teams",className:"NavLink"},"The Teams"),r.a.createElement(i.b,{to:"/join",className:"NavLink"},"Join Us"),r.a.createElement(i.b,{to:"/sponsors",className:"NavLink"},"Sponsorship")),r.a.createElement(I.a,{className:"SignInButton",variant:"outline-warning",onClick:function(){return e.setState({isSignInOpened:!0})}},"Member Sign In"),r.a.createElement(L,{show:this.state.isSignInOpened}),r.a.createElement("a",{href:"https://www.ubc.ca/"},r.a.createElement(O.a,{className:"UBCLogo",src:"/images/ubc-logo.png"}))))}}]),a}(r.a.Component));t(139);function x(e){var a="/"+(e.folder?e.folder:"images")+"/";return r.a.createElement("div",{className:"ImageContainer"},r.a.createElement("img",{className:"Image",src:""+a+e.src,alt:"Error!"}))}t(33);var H={home:{image:"software.jpg",title:"Welcome To UBC Subbots",blurb:"UBC Subbots is an engineering student design team dedicated to             making an autonomous underwater vehicle (AUV) for the RoboSub competition             in San Diego, California each year. This competition challenges us to make             a robot that can navigate and interact with underwater obstacles without any            human intervention whatsoever. The team was founded in 2017 and is made up of             engineering and computer science students from multiple disciplines who have full            control over the design, manufacturing and testing of the robot. Since becoming            a team, we have learned a lot about designing for the underwater environment and             are continuously improving upon our existing designs. ",pitch:{image:"mechanical.jpg",header:"Why Subbots?",body:" Subbots provides the chance for students to work on unique design                problems that can\u2019t be found anywhere else at UBC. The team originated from                 two existing designs teams: UBC SUBC who focuses on the design of human powered                submarines, and UBC Snowbots who designs autonomous land robots for various                 applications. Combining these two together brings a variety of challenges such                 as autonomous underwater navigation, hydrodynamics and buoyancy, electronics                 waterproofing, actuation of mechanical systems and many more. Since Subbots is a                 relatively new design team, there is plenty of opportunity to improve upon existing                designs and be a part of building the team. "},goal:{image:"electrical.jpg",header:"Our Goal",body:"As a UBC engineering design team we look to create an interesting and                 engaging environment for all of our members. The team believes our project is a                way for students to take what they have learned in the classroom and apply it to                real world problems. We do our best to inspire interest in subsea and robotic                design while maintaining a fun atmosphere that promotes learning and team bonding.                 Each year we hope to grow as a team by recruiting motivated and hard working students                 who share a passion for our project. \n\n On the technical side, our teams goal is to                build a robot that is capable of competing in the RoboSub competition each year. To                 do this our members must learn how to work within a team and multidisciplinary                 environment to tackle unique design challenges. The teams goal is to facilitate                 learning in all aspects of AUV design and encourage good engineering practices that                 can be passed onto future generations of team members. "},projects:{header:"The Robots",body:"Since becoming a team in 2017, Subbots has had the chance to work on two robots.                Our first robot for the 2017-2018 year was a huge learning curve for the team, but it                 successfully competed at RoboSub which taught the team a lot about what goes into making                 an AUV. We are currently on a two year design cycle for our second robot but we are                 building off of our original design and on track to compete in the 2020 RoboSub competition.                 More information about the robots can be found below!",carousels:{first:{images:["first_1.jpg","first_2.jpg","first_3.jpg","first_4.jpg"],caption:"2017-2018"},second:{images:["second_1.jpg","second_2.jpg","second_3.jpg","second_4.jpg","second_5.jpg","second_6.jpg"],caption:"2018-2019"}}}},teams:{image:"electrical.jpg",title:"See What Our Members Do",blurb:"  Whether you\u2019re interested in software, electrical, or mechanical            design, Subbots offers many unique design challenges that forces our members             to come up with creative solutions for building autonomous underwater robots",software:{blurb:" Create and refine subaquatic artificial intelligence",body:" The Software will run on the embedded computer that                 the robot carries in its chassis. It defines every movement and decision that                the robot makes. Without the software, the robot is a potato.",items:{images:{do:["crosshair.jpg","crosshair.jpg","crosshair.jpg"],learn:["crosshair.jpg","crosshair.jpg","crosshair.jpg"]},names:{do:["Machine Learning","Computer Vision","Linux Development"],learn:["ROS","Python","C++"]},descriptions:{do:["Use libraries such as Tensorflow for object detection","Process raw camera signals into meaningful information","Develop in the open-source wonder that is Linux"],learn:["Work on a widely used platform that combines modularity and efficiency","Learn one of the most widely used languages in the world today","Wow your friends with your new C++ skills"]}}},electrical:{blurb:"Design the interface between the computer and the sea",body:" The electrical team develops the electrical systems that                 allow the robot to read and respond to the world. The team designs                 circuits to control thrusters, process hydrophone signal, read sensor                information, and protect valuable electrical components from unexpected                power surges. Robust and reliable electrical systems are critical for                 allowing a robot to react well to a dynamic environment.",items:{images:{do:["crosshair.jpg","crosshair.jpg","crosshair.jpg"],learn:["crosshair.jpg","crosshair.jpg","crosshair.jpg"]},names:{do:["Signal Processing","Circuit Design","Comm Systems"],learn:["Verification","Design","Fabrication"]},descriptions:{do:[" Transformation and interpretation of sensor data","Robust and accurate electronic hardware","Facilitating communication between different systems"],learn:["Ensuring design and implementation meet specifications","How to make a system of electronic components safe and robust","Implementing ideas into the real world"]}}},mechanical:{blurb:"Push the physical limits of underwater mechanics",body:"The mechanical team is responsible for making the body of the robot                that the electrical and software systems control. We handle buoyancy and static                 stability, hydrodynamics, frame and enclosure design, actuation, electronics                 integration, waterproofing and the overall esthetic of the robot. Designing mechanical                 systems for underwater applications brings many design challenges and is critical in                 allowing robots to exist underwater. ",items:{images:{do:["crosshair.jpg","crosshair.jpg","crosshair.jpg"],learn:["crosshair.jpg","crosshair.jpg","crosshair.jpg"]},names:{do:["Structure","Accuation","Hydrodynamics"],learn:["Design","Fabrication","Testing"]},descriptions:{do:["Robot body and electronics integration","Interaction with the underwater environment ","Physical stability and control through the water"],learn:["How to design parts for a multidisciplinary project ","Hands on skills needed to make designs into reality","How designs perform in practical application"]}}}},join:{image:"software.jpg",title:"Become Part Of The Team",blurb:" We are always looking for new members to fill the many challenges            that come with designing underwater robots. Whether you\u2019re new to engineering             or have previous design experience we encourage everyone who is interested in             the project to apply. Our team is built around mentoring new students so that             they can eventually take over as team leaders, so students of all skill levels             are welcome. Recruitment is primarily done at the start of the school year in             September but we continuously recruit throughout the year to fill roles as needed.            Our recruitment process consists of an application form that is reviewed by our             senior members and a potential interview if we feel you\u2019d be a good fit for the             team. If you have a passion for subsea and robotic design feel free to fill out             the application below! "},sponsors:{image:"electrical.jpg",title:"See Who Makes Us Possible",blurb:" To make our designs a reality Subbots relies on the support            of our many sponsors. Through in-kind and monetary contributions            our members are able to develop the skills necessary to become            engineering professionals. They also gain experience working            with our sponsor\u2019s wonderful products, allowing them to more            effectively design with similar components in the future. We are             always open to new partners, and if you would like to sponsor our            team please reach out to us for our sponsorship package.",sponsor_list:[{image:"ubc_walter_gage.png",link:"http://waltergagebook.engineering.ubc.ca/walter-gage-memorial-bursary-in-engineering/"},{image:"subc.png",link:"https://subc.ca/"},{image:"ubc-applied-sciences-footer-logo.png",link:"https://apsc.ubc.ca/"},{image:"4imprint.png",link:"https://www.4imprint.ca/"},{image:"ECE.jpg",link:"https://www.ece.ubc.ca/"},{image:"IEEE_logo.png",link:"http://www.ubcieee.org/"},{image:"MATLAB-Logo.png",link:"https://www.mathworks.com/products/matlab.html"},{image:"mech.png",link:"https://mech.ubc.ca/"},{image:"phidgets_logo.png",link:"https://www.phidgets.com/?"},{image:"Shell-Logo.png",link:"https://www.shell.ca/"},{image:"SNAME.png",link:"https://www.sname.org/home"},{image:"snowbots.png",link:"http://snowbots.ca/"},{image:"solidworks-logo.png",link:"https://www.solidworks.com/"},{image:"spaenaur_logo.jpg",link:"https://spaenaur.com/"},{image:"ubc_forestry.png",link:"https://forestry.ubc.ca/"},{image:"venom_logo.png",link:"https://www.venompower.com/"},{image:"vp.jpg",link:"https://apsc.ubc.ca/"}]},emails:{Subbots:"info.subbots@gmail.com",Electrical:"info.subbots@gmail.com",Mechanical:"logan.fillo@gmail.com",Software:""}},F=t(14),P=t.n(F),R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",message:""},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"onFormSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"render",value:function(){return r.a.createElement(P.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.onFormSubmit.bind(this),className:"JoinForm",action:"https://formspree.io/".concat(H.emails.Subbots),method:"POST"},r.a.createElement("input",{type:"hidden",name:"_subject",value:"Someone is requesting additional information"}),r.a.createElement("input",{type:"hidden",name:"NOTE",value:"THIS IS AN AUTO GENERATED MESSAGE:\n\n You are recieving this email because someone has requested to contact Subbots for additional information. Their details are as followed below:"}),r.a.createElement(P.a.Row,null,r.a.createElement(P.a.Group,{as:E.a},r.a.createElement(P.a.Label,null,"First Name *"),r.a.createElement(P.a.Control,{onChange:this.onFirstNameChange.bind(this),placeholder:"Enter first name",required:!0,name:"First Name"}),r.a.createElement(P.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(P.a.Group,{as:E.a},r.a.createElement(P.a.Label,null,"Last Name * "),r.a.createElement(P.a.Control,{onChange:this.onLastNameChange.bind(this),placeholder:"Enter last name",required:!0,name:"Last Name"}),r.a.createElement(P.a.Control.Feedback,{type:"invalid"},"Required Field"))),r.a.createElement(P.a.Group,{controlId:"formBasicEmail"},r.a.createElement(P.a.Label,null,"Email address * "),r.a.createElement(P.a.Control,{onChange:this.onEmailChange.bind(this),type:"email",placeholder:"Enter email",required:!0,name:"Email"}),r.a.createElement(P.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(P.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(P.a.Label,null,"Message *"),r.a.createElement(P.a.Control,{onChange:this.onMessageChange.bind(this),style:{resize:"none"},as:"textarea",rows:"6",placeholder:"Message",required:!0,name:"Contact Message"}),r.a.createElement(P.a.Control.Feedback,{type:"invalid"},"Required Field")),r.a.createElement(I.a,{className:"PrimaryButton",variant:"warning",type:"submit"},r.a.createElement("div",{className:"ApplyButtonText"},"Submit")))}}]),a}(r.a.Component);t(147);function U(e){return r.a.createElement(I.a,{className:"ContactButton",variant:"warning",onClick:e.onClick},r.a.createElement("div",{className:"ContactText"},r.a.createElement(w.a,{className:"MailIcon",icon:A.c,size:"lg"}),"Contact Us"))}var D=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).showModal=function(){t.setState({showModal:!0})},t.hideModal=function(){t.setState({showModal:!1})},t.state={showModal:!1},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{onClick:this.showModal}),r.a.createElement(M.a,{className:"ContactModal",show:this.state.showModal,onHide:this.hideModal,onEscapeKeyDown:this.hideModal,shouldcloseonoverlayclick:"true",size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(M.a.Header,{closeButton:!0},r.a.createElement(M.a.Title,{id:"contained-modal-title-vcenter"},"Contact Us")),r.a.createElement(M.a.Body,{className:"ContactModalBody"},r.a.createElement(R,null))))}}]),a}(r.a.Component),W=(t(148),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:1}),!this.props.disableImage&&r.a.createElement(E.a,{sm:10},r.a.createElement("div",{className:"ViewImageContainer"},r.a.createElement(x,{src:this.props.image}))),r.a.createElement(E.a,{sm:1}),r.a.createElement("div",{className:"ViewHeaderTitle"},this.props.title)),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:1}),r.a.createElement(E.a,{s:10},r.a.createElement("div",{className:"ViewHeaderBlurb"},this.props.blurb)),r.a.createElement(E.a,{sm:1})),r.a.createElement("div",{className:"HeaderSeperator"}))}}]),a}(r.a.Component)),q=t(33),V=t(83),G=t.n(V),Z=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ViewContainer"},r.a.createElement(G.a,{bottom:!0,duration:q.default.FADE_DURATION},r.a.createElement(p.a,{fluid:!0,className:"p-0"},this.props.children)))}}]),a}(r.a.Component),z=t(30),J=t(84),Y=t(37),K=t.n(Y),Q=(t(151),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Z,null,r.a.createElement("svg",{className:"Logo",id:"Layer_2","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 216 216"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},r.a.createElement("stop",{offset:"25%","stop-color":"#fed136"}),r.a.createElement("stop",{offset:"100%","stop-color":"#ffba38"}))),r.a.createElement("title",null,"subbots-logo-rgb-svg-white-large"),r.a.createElement("path",{class:"LogoSpin",d:"M194.85,129.49a89.84,89.84,0,0,0-.43-44.67l8.9-3.47a99,99,0,0,0-28.44-46.28l-7.52,6A89.21,89.21,0,0,0,134,22.39l-.14,0H134l1.44-9.44v0a99.53,99.53,0,0,0-54.76,0v0l1.44,9.44h.14l-.14,0A89.33,89.33,0,0,0,47.68,42l-7.49-6A98.78,98.78,0,0,0,12.43,82.51L21.34,86a89.75,89.75,0,0,0-.18,43.29l-8.93,3.48a99,99,0,0,0,27.48,46.79l7.5-6a89.41,89.41,0,0,0,34.65,20l.17.05h-.17L80.42,203v.05a99.56,99.56,0,0,0,54.94.09v-.05l-1.44-9.44h-.17l.17,0a89.19,89.19,0,0,0,34.77-19.89l7.49,6A98.91,98.91,0,0,0,203.77,133ZM183.4,111.78a75.46,75.46,0,0,1-68.32,71.36q-3.48.33-7,.33t-7-.33a75.47,75.47,0,0,1-68.33-71.36c-.07-1.25-.1-2.51-.1-3.78s0-2.53.1-3.78a75.47,75.47,0,0,1,150.75,0c.07,1.25.1,2.51.1,3.78S183.47,110.53,183.4,111.78Z"}),r.a.createElement("path",{class:"cls-1",d:"M178,98.13,142.39,94.2v0c-2.3-12.43-9.64-22.73-19.46-28H150v-5H114.93l-1.72-15h-9.82l-1.72,15H66.6v5H93.67c-9.82,5.26-17.16,15.56-19.46,28v0L38.59,98.13a68.86,68.86,0,0,0-.59,8.78l5-2.09a29.24,29.24,0,0,1,22.78,0l4.14,1.75a27.6,27.6,0,0,0,3.87,1.32L74,108c.33.09.67.17,1,.24a29.11,29.11,0,0,0,12.6,0l2.7-.73c.74-.31,1.48-.58,2.2-.89l4.14-1.75a29.08,29.08,0,0,1,10-2.27c.45,0,.91,0,1.36,0h.6c.45,0,.91,0,1.36,0a29.08,29.08,0,0,1,10,2.27l4.14,1.75c.72.31,1.46.58,2.2.89l2.7.73a29.11,29.11,0,0,0,12.6,0c.33-.07.67-.15,1-.24l.22-.06a27.6,27.6,0,0,0,3.87-1.32l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.95,2.09A68.86,68.86,0,0,0,178,98.13ZM91.48,85.52c-2.65,4.6-6.22,7.52-8,6.51s-1-5.55,1.67-10.15,6.21-7.51,8-6.51S94.14,80.92,91.48,85.52ZM133.08,92c-1.74,1-5.31-1.91-8-6.51s-3.4-9.14-1.66-10.15,5.3,1.91,8,6.51S134.81,91,133.08,92Z"}),r.a.createElement("path",{class:"cls-1",d:"M178.29,115.7a69.66,69.66,0,0,1-3.68,15.45l-.77-.33a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.2,29.2,0,0,1-17.42,1.67,27.93,27.93,0,0,1-5.36-1.67L120,130.82a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.31,29.31,0,0,1-22.78,0l-4.14-1.75a29.24,29.24,0,0,0-22.78,0l-.75.32A69.19,69.19,0,0,1,39,115.68l.29-.11,4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75a28.53,28.53,0,0,0,5,1.6,29.17,29.17,0,0,0,17.75-1.6l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75a29.15,29.15,0,0,0,16.5,1.85,28.6,28.6,0,0,0,6.28-1.85l4.14-1.75a29.24,29.24,0,0,1,22.78,0Z"}),r.a.createElement("path",{class:"cls-1",d:"M170.83,139.74a69.75,69.75,0,0,1-10.42,14.85,28.85,28.85,0,0,0-9.35,2.23l-4.14,1.75a29.24,29.24,0,0,1-22.78,0L120,156.82a29.24,29.24,0,0,0-22.78,0l-4.14,1.75a29.24,29.24,0,0,1-22.78,0l-4.14-1.75a28.93,28.93,0,0,0-9.33-2.23,69.75,69.75,0,0,1-10.42-14.85,29.19,29.19,0,0,1,19.75,1.08l4.14,1.75a29.24,29.24,0,0,0,22.78,0l4.14-1.75.18-.07c.16-.06.31-.13.47-.18a2.65,2.65,0,0,1,.44-.17,29,29,0,0,1,20-.2,2.5,2.5,0,0,1,.43.16l.48.17c.25.08.5.19.75.29l4.14,1.75a29.24,29.24,0,0,0,22.78,0l4.14-1.75A29.25,29.25,0,0,1,170.83,139.74Z"}),r.a.createElement("path",{class:"cls-1",d:"M136,171.87a70.41,70.41,0,0,1-54.8,0,29.19,29.19,0,0,0,11.86-2.3l4.14-1.75a29.24,29.24,0,0,1,22.78,0l4.14,1.75A29.11,29.11,0,0,0,136,171.87Z"}),r.a.createElement("path",{class:"cls-1",d:"M126.34,107.46c-.81-.26-1.61-.56-2.39-.89l-4.14-1.75a29,29,0,0,0-9.85-2.27,29.08,29.08,0,0,1,10,2.27l4.14,1.75C124.86,106.88,125.6,107.15,126.34,107.46Z"}),r.a.createElement("path",{class:"cls-1",d:"M129,108.19c-.42-.09-.84-.2-1.26-.31s-1-.27-1.44-.42Z"})),r.a.createElement(W,{title:H.home.title,blurb:H.home.blurb,disableImage:!0}),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:1}),r.a.createElement(E.a,{sm:4},r.a.createElement("div",{className:"PitchImageContainer"},r.a.createElement(x,{src:H.home.pitch.image}))),r.a.createElement(E.a,null,r.a.createElement("div",{className:"PitchHeader"},H.home.pitch.header),r.a.createElement("div",{className:"PitchBody"},H.home.pitch.body)),r.a.createElement(E.a,{sm:2})),r.a.createElement("div",{className:"ContentSeperatorTop"}),r.a.createElement("div",{className:"ContentContainer"},r.a.createElement("h4",{className:"GoalHeader"},r.a.createElement(w.a,{icon:A.e}),"  "+H.home.goal.header),r.a.createElement("hr",null),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:6},r.a.createElement("div",{className:"GoalBody"},H.home.goal.body)),r.a.createElement(E.a,{sm:6},r.a.createElement("div",{className:"GoalImageContainer"},r.a.createElement(x,{src:H.home.goal.image}))))),r.a.createElement("div",{className:"ContentSeperatorBottom"}),r.a.createElement("div",{className:"ProjectsContainer"},r.a.createElement("h3",{className:"ProjectsHeader"},H.home.projects.header),r.a.createElement("div",{className:"ProjectsBody"},H.home.projects.body),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:6},r.a.createElement(K.a,{className:"ProjectsCarousel",fade:"true"},H.home.projects.carousels.first.images.map(function(e,a){return r.a.createElement(K.a.Item,{key:a},r.a.createElement("div",{className:"ProjectsImageContainer"},r.a.createElement(x,{src:e,folder:"robots"})))})),r.a.createElement("h4",{className:"ProjectsImageCaption"},H.home.projects.carousels.first.caption)),r.a.createElement(E.a,{sm:6},r.a.createElement(K.a,{className:"ProjectsCarousel",fade:"true"},H.home.projects.carousels.second.images.map(function(e,a){return r.a.createElement(K.a.Item,{key:a},r.a.createElement("div",{className:"ProjectsImageContainer"},r.a.createElement(x,{src:e,folder:"robots"})))})),r.a.createElement("h4",{className:"ProjectsImageCaption"},H.home.projects.carousels.second.caption)))))}}]),a}(r.a.Component)),X=(t(156),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={validated:!1,first_name:"",last_name:"",email:"",year:0,team:"",reason:""},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"onFirstNameChange",value:function(e){this.setState({first_name:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({last_name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onYearChange",value:function(e){this.setState({year:e.target.value})}},{key:"onTeamChange",value:function(e){this.setState({team:e.target.value})}},{key:"onReasonChange",value:function(e){this.setState({reason:e.target.value})}},{key:"onFormSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"render",value:function(){var e=H.emails[this.state.team];return e||(e=H.emails.Subbots),r.a.createElement(Z,null,r.a.createElement(W,{title:H.join.title,blurb:H.join.blurb,image:H.join.image}),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:3}),r.a.createElement(E.a,{sm:6},r.a.createElement("div",null,r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSd_5SyFlRlOgkAdsBL4DZvq-q7WtePwKH0_ODg_4Pa4p7EVQg/viewform?embedded=true",width:"690",height:"2486",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"))),r.a.createElement(E.a,{sm:3})))}}]),a}(r.a.Component)),$=(t(157),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Z,null,r.a.createElement(W,{title:H.projects.title,blurb:H.projects.blurb,image:H.projects.image}))}}]),a}(r.a.Component)),ee=t(29),ae=t.n(ee),te=(t(76),function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{sm:3},r.a.createElement("a",{href:this.props.link},r.a.createElement(ae.a,{className:"SponsorCard"},r.a.createElement(ae.a.Body,{className:"SponsorCardBody"},r.a.createElement("img",{className:"SponsorImage",src:"/sponsors/"+this.props.image,alt:"Sponsor"})))))}}]),a}(r.a.Component)),ne=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=H.sponsors.sponsor_list.map(function(e,a){return r.a.createElement(te,{key:a,image:e.image,link:e.link})});return r.a.createElement(Z,null,r.a.createElement(W,{title:H.sponsors.title,blurb:H.sponsors.blurb,image:H.sponsors.image}),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:2}),r.a.createElement(E.a,{sm:8},r.a.createElement(b.a,{className:"SponsorRow"},e)),r.a.createElement(E.a,{sm:2})))}}]),a}(r.a.Component),re=(t(77),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={software:A.d,mechanical:A.f,electrical:A.a},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"scrollToTeam",value:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return console.log(window.location.hash),r.a.createElement(E.a,null,r.a.createElement(ae.a,{className:"TeamCard"},r.a.createElement(ae.a.Header,{className:"TeamCardHeader"},this.props.team.charAt(0).toUpperCase()+this.props.team.slice(1)),r.a.createElement(ae.a.Body,null,r.a.createElement(w.a,{className:"TeamIconLarge",icon:this.icons[this.props.team],size:"6x"}),r.a.createElement(ae.a.Text,{className:"TeamCardText"},H.teams[this.props.team.toLowerCase()].blurb),r.a.createElement(I.a,{className:"SecondaryButton",variant:"primary",onClick:function(){return e.scrollToTeam(e.props.team)}},"Learn More"))))}}]),a}(r.a.Component)),oe=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).icons={software:A.d,mechanical:A.f,electrical:A.a},t.text={software:"Software Team",mechanical:"Mechanical Team",electrical:"Electrical Team"},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:this.props.team,className:"HeaderBuffer"}),r.a.createElement(E.a,null,r.a.createElement("h3",{className:"TeamBodyHeader my-auto"},r.a.createElement(w.a,{className:"TeamIconSmall",icon:this.icons[this.props.team],size:"lg"}),this.text[this.props.team]),r.a.createElement("hr",null),r.a.createElement(b.a,null,r.a.createElement(se,{title:"What We Do",images:H.teams[this.props.team].items.images.do,names:H.teams[this.props.team].items.names.do,descriptions:H.teams[this.props.team].items.descriptions.do}),r.a.createElement(se,{title:"What You'll Learn",images:H.teams[this.props.team].items.images.learn,names:H.teams[this.props.team].items.names.learn,descriptions:H.teams[this.props.team].items.descriptions.learn})),r.a.createElement("div",{className:"TeamBodyText"},H.teams[this.props.team.toLowerCase()].body)))}}]),a}(r.a.Component);function se(e){return r.a.createElement(E.a,{sm:6},r.a.createElement("h4",{className:"TeamBodyItemHeader text-center"},e.title),r.a.createElement("div",{className:"TeamBodyItemFrame"},r.a.createElement("div",{className:"TeamBodyItemContainer"},r.a.createElement(ie,{image:e.images[0],name:e.names[0],description:e.descriptions[0]}),r.a.createElement(ie,{image:e.images[1],name:e.names[1],description:e.descriptions[1]}),r.a.createElement(ie,{image:e.images[2],name:e.names[2],description:e.descriptions[2]}))))}function ie(e){return r.a.createElement("div",{className:"TeamBodyItemContainer"},r.a.createElement("div",{className:"TeamBodyItem"},r.a.createElement("div",{className:"TeamBodyItemIconContainer"},r.a.createElement("img",{className:"TeamBodyItemIcon",src:"/images/"+e.image,alt:"Error!"})),r.a.createElement("div",{className:"TeamBodyItemTextPrimary"},e.name),r.a.createElement("div",{className:"TeamBodyItemTextSecondary"},e.description)))}var le=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Z,null,r.a.createElement(W,{title:H.teams.title,blurb:H.teams.blurb,image:H.teams.image}),r.a.createElement(b.a,null,r.a.createElement(E.a,{sm:2}),r.a.createElement(E.a,{sm:8},r.a.createElement(b.a,null,r.a.createElement(re,{team:"software"}),r.a.createElement(re,{team:"electrical"}),r.a.createElement(re,{team:"mechanical"}))),r.a.createElement(E.a,{sm:2})),r.a.createElement("div",{className:"ContentSeperatorTop"}),r.a.createElement("div",{className:"ContentContainer"},r.a.createElement(oe,{team:"software"}),r.a.createElement(oe,{team:"electrical"}),r.a.createElement(oe,{team:"mechanical"})),r.a.createElement("div",{className:"ContentSeperatorBottom"}))}}]),a}(r.a.Component);function ce(){return r.a.createElement("main",null,r.a.createElement(J.a,null),r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/",component:Q}),r.a.createElement(z.a,{path:"/teams",component:le}),r.a.createElement(z.a,{path:"/projects",component:$}),r.a.createElement(z.a,{path:"/sponsors",component:ne}),r.a.createElement(z.a,{path:"/join",component:X})))}t(159);s.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/"},r.a.createElement(_,null),r.a.createElement(ce,null),r.a.createElement(D,null),r.a.createElement(v,null)))},null),document.getElementById("root"))},33:function(e,a,t){"use strict";t.r(a),a.default={FADE_DURATION:1600,ELECTRICAL_TEAM:"Electrical",SOFTWARE_TEAM:"Software",MECHANICAL_TEAM:"Mechanical"}},76:function(e,a,t){},77:function(e,a,t){},85:function(e,a,t){e.exports=t(160)},90:function(e,a,t){},96:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.883ccb41.chunk.js.map