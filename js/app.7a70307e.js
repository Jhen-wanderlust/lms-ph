(function(){"use strict";var e={3217:function(e,a,n){var o=n(5130),t=n(6768);function r(e,a,n,o,r,i){const s=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.Wv)(s)}var i={name:"App"},s=n(1241);const l=(0,s.A)(i,[["render",r],["__scopeId","data-v-91f210a6"]]);var c=l,u=n(973);function d(e,a,n,o,r,i){const s=(0,t.g2)("HeroSection"),l=(0,t.g2)("FeaturesSection"),c=(0,t.g2)("UserTypeSelector"),u=(0,t.g2)("TestimonialsSection"),d=(0,t.g2)("ContactForm"),m=(0,t.g2)("AppFooter");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(s,{class:"reveal"}),(0,t.bF)(l,{class:"reveal"}),(0,t.bF)(c,{class:"reveal"}),(0,t.bF)(u,{class:"reveal"}),(0,t.bF)(d,{class:"reveal"}),(0,t.bF)(m)])}const m={class:"hero"};function v(e,a,n,o,r,i){return(0,t.uX)(),(0,t.CE)("section",m,[a[1]||(a[1]=(0,t.Lk)("h1",null,"Welcome to PH Learning Management System",-1)),a[2]||(a[2]=(0,t.Lk)("p",null,"Your gateway to quality online learning and professional development.",-1)),(0,t.Lk)("button",{onClick:a[0]||(a[0]=a=>e.$scrollTo("#features"))},"Explore Features")])}var p={};const b=(0,s.A)(p,[["render",v],["__scopeId","data-v-65cb66c7"]]);var h=b;const g={id:"features",class:"features"};function f(e,a,n,o,r,i){return(0,t.uX)(),(0,t.CE)("section",g,a[0]||(a[0]=[(0,t.Lk)("h2",null,"Why Choose Our LMS?",-1),(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("i",{class:"fas fa-book-open"}),(0,t.eW)(" Comprehensive course catalog")]),(0,t.Lk)("li",null,[(0,t.Lk)("i",{class:"fas fa-chart-line"}),(0,t.eW)(" Progress tracking and reporting")]),(0,t.Lk)("li",null,[(0,t.Lk)("i",{class:"fas fa-certificate"}),(0,t.eW)(" Certification management")]),(0,t.Lk)("li",null,[(0,t.Lk)("i",{class:"fas fa-question-circle"}),(0,t.eW)(" Interactive quizzes and assessments")])],-1)]))}var k={};const C=(0,s.A)(k,[["render",f],["__scopeId","data-v-412c908a"]]);var y=C,L=n(4232);const M={class:"testimonials"};function S(e,a,n,o,r,i){return(0,t.uX)(),(0,t.CE)("section",M,[a[2]||(a[2]=(0,t.Lk)("h2",null,"What Our Users Say",-1)),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(r.testimonials,(e=>((0,t.uX)(),(0,t.CE)("div",{class:"testimonial",key:e.id},[(0,t.Lk)("p",null,[a[0]||(a[0]=(0,t.Lk)("i",{class:"fas fa-quote-left"},null,-1)),(0,t.eW)(" "+(0,L.v_)(e.text)+" ",1),a[1]||(a[1]=(0,t.Lk)("i",{class:"fas fa-quote-right"},null,-1))]),(0,t.Lk)("h4",null,"- "+(0,L.v_)(e.author),1)])))),128))])}var A={data(){return{testimonials:[{id:1,text:"Amazing LMS with a great user experience!",author:"Alice"},{id:2,text:"The courses are comprehensive and well-organized.",author:"Bob"}]}}};const w=(0,s.A)(A,[["render",S],["__scopeId","data-v-0d0ad9ac"]]);var P=w;const _={class:"contact"};function E(e,a,n,r,i,s){return(0,t.uX)(),(0,t.CE)("section",_,[a[5]||(a[5]=(0,t.Lk)("h2",null,"Contact Us",-1)),(0,t.Lk)("form",{onSubmit:a[3]||(a[3]=(0,o.D$)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>i.name=e),placeholder:"Your Name",required:""},null,512),[[o.Jo,i.name]]),(0,t.bo)((0,t.Lk)("input",{type:"email","onUpdate:modelValue":a[1]||(a[1]=e=>i.email=e),placeholder:"Your Email",required:""},null,512),[[o.Jo,i.email]]),(0,t.bo)((0,t.Lk)("textarea",{"onUpdate:modelValue":a[2]||(a[2]=e=>i.message=e),placeholder:"Your Message",required:""},null,512),[[o.Jo,i.message]]),a[4]||(a[4]=(0,t.Lk)("button",{type:"submit"},"Send Message",-1))],32)])}var F=n(2669),I={data(){return{name:"",email:"",message:""}},methods:{submitForm(){const e="service_ucjb5fb",a="template_6s5ittg",n="yB5es5OgVwDupXF4E",o={from_name:this.name,from_email:this.email,message:this.message};F.Ay.send(e,a,o,n).then((()=>{alert("Message sent successfully!"),this.name="",this.email="",this.message=""})).catch((e=>{console.error("Failed to send message:",e),alert("Failed to send message. Please try again later.")}))}}};const q=(0,s.A)(I,[["render",E],["__scopeId","data-v-8c2c1fca"]]);var T=q;const U={class:"user-type-selector"},B={class:"options"},R={key:0,class:"provider-option"},X={class:"whatsapp-form"},x={class:"phone-input"},O=["value"],N={key:1,class:"learner-option"},W={class:"provider-cards"},z=["onClick"],G=["src"],V={class:"category"},j=["href"];function K(e,a,n,r,i,s){return(0,t.uX)(),(0,t.CE)("div",U,[a[16]||(a[16]=(0,t.Lk)("h2",null,"What kind of user are you?",-1)),(0,t.Lk)("div",B,[(0,t.Lk)("button",{onClick:a[0]||(a[0]=e=>s.selectUserType("learningProvider"))},"Learning Provider"),(0,t.Lk)("button",{onClick:a[1]||(a[1]=e=>s.selectUserType("learner"))},"Learner")]),"learningProvider"===i.userType?((0,t.uX)(),(0,t.CE)("div",R,[a[13]||(a[13]=(0,t.Lk)("h3",null,"Request a Demo of Our LMS",-1)),a[14]||(a[14]=(0,t.Lk)("p",null,"As a learning provider, you can request a demo to see how our LMS works.",-1)),(0,t.Lk)("div",X,[(0,t.Lk)("label",null,[a[10]||(a[10]=(0,t.eW)(" Name: ")),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>i.demoRequest.name=e),type:"text",placeholder:"Your Name",required:""},null,512),[[o.Jo,i.demoRequest.name]])]),(0,t.Lk)("label",null,[a[11]||(a[11]=(0,t.eW)(" Phone Number: ")),(0,t.Lk)("div",x,[(0,t.bo)((0,t.Lk)("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>i.demoRequest.countryCode=e)},[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.countryCodes,((e,a)=>((0,t.uX)(),(0,t.CE)("option",{key:a,value:e},(0,L.v_)(a)+" ("+(0,L.v_)(e)+") ",9,O)))),128))],512),[[o.u1,i.demoRequest.countryCode]]),(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>i.demoRequest.phone=e),type:"tel",placeholder:"Phone Number",required:""},null,512),[[o.Jo,i.demoRequest.phone]])])]),(0,t.Lk)("label",null,[a[12]||(a[12]=(0,t.eW)(" Message: ")),(0,t.bo)((0,t.Lk)("textarea",{"onUpdate:modelValue":a[5]||(a[5]=e=>i.demoRequest.message=e),placeholder:"Your Message",required:""},null,512),[[o.Jo,i.demoRequest.message]])]),(0,t.Lk)("button",{onClick:a[6]||(a[6]=(...e)=>s.sendWhatsAppMessage&&s.sendWhatsAppMessage(...e))},"Send via WhatsApp")])])):(0,t.Q3)("",!0),"learner"===i.userType?((0,t.uX)(),(0,t.CE)("div",N,[a[15]||(a[15]=(0,t.Lk)("h3",null,"Available Courses from Our Learning Providers",-1)),(0,t.Lk)("div",W,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.providers,(e=>((0,t.uX)(),(0,t.CE)("div",{key:e.id,class:"card",onClick:a=>s.openModal(e)},[(0,t.Lk)("img",{src:e.logo,alt:"Provider Logo"},null,8,G),(0,t.Lk)("h4",null,(0,L.v_)(e.name),1),(0,t.Lk)("p",V,(0,L.v_)(e.category),1),(0,t.Lk)("a",{href:e.link,target:"_blank",class:"show-more"},"Courses",8,j)],8,z)))),128))])])):(0,t.Q3)("",!0),i.showModal?((0,t.uX)(),(0,t.CE)("div",{key:2,class:"modal-overlay",onClick:a[9]||(a[9]=(...e)=>s.closeModal&&s.closeModal(...e))},[(0,t.Lk)("div",{class:"modal-content",onClick:a[8]||(a[8]=(0,o.D$)((()=>{}),["stop"]))},[(0,t.Lk)("h3",null,"Courses Offered by "+(0,L.v_)(i.selectedProvider.name),1),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.selectedProvider.courses,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.id},(0,L.v_)(e.name),1)))),128))]),(0,t.Lk)("button",{onClick:a[7]||(a[7]=(...e)=>s.closeModal&&s.closeModal(...e))},"Close")])])):(0,t.Q3)("",!0)])}var H={data(){return{userType:null,showModal:!1,selectedProvider:null,providers:[{id:1,name:"AftadGlobal",logo:"https://firebasestorage.googleapis.com/v0/b/aftad-lms.appspot.com/o/website%2Flogoaftad.png?alt=media&token=0b24720c-196d-4851-bcc2-223929fd3c5c",link:"https://aftadglobal.com/CoursesView",category:"Accounting Firm",courses:[{id:1,name:"Chartered General Accountant (CGA)"},{id:2,name:"Chartered Management Accountant (CMA)"},{id:3,name:"Chartered Financial Accountant (CFA)"}]},{id:2,name:"Provider B",logo:"@/assets/providerB-logo.jpg",link:"https://example.com/provider-b",category:"Educational Institution",courses:[{id:1,name:"Course 1 from Provider B"},{id:2,name:"Course 2 from Provider B"}]},{id:3,name:"Provider C",logo:"@/assets/providerC-logo.jpg",link:"https://example.com/provider-c",category:"Training Center",courses:[{id:1,name:"Course 1 from Provider C"},{id:2,name:"Course 2 from Provider C"}]}],demoRequest:{name:"",countryCode:"+1",phone:"",message:""},countryCodes:{Afghanistan:"+93",Albania:"+355",Algeria:"+213","American Samoa":"+1-684",Andorra:"+376",Angola:"+244",Argentina:"+54",Armenia:"+374",Australia:"+61",Austria:"+43",Azerbaijan:"+994",Bahamas:"+1-242",Bahrain:"+973",Bangladesh:"+880",Barbados:"+1-246",Belarus:"+375",Belgium:"+32",Belize:"+501",Benin:"+229",Bhutan:"+975",Bolivia:"+591","Bosnia and Herzegovina":"+387",Botswana:"+267",Brazil:"+55",Brunei:"+673",Bulgaria:"+359","Burkina Faso":"+226",Burundi:"+257",Cambodia:"+855",Cameroon:"+237",Canada:"+1","Cape Verde":"+238","Central African Republic":"+236",Chad:"+235",Chile:"+56",China:"+86",Colombia:"+57",Comoros:"+269","Congo (DRC)":"+243","Congo (Republic)":"+242","Costa Rica":"+506",Croatia:"+385",Cuba:"+53",Cyprus:"+357","Czech Republic":"+420",Denmark:"+45",Djibouti:"+253",Dominica:"+1-767","Dominican Republic":"+1-809",Ecuador:"+593",Egypt:"+20","El Salvador":"+503","Equatorial Guinea":"+240",Eritrea:"+291",Estonia:"+372",Eswatini:"+268",Ethiopia:"+251",Fiji:"+679",Finland:"+358",France:"+33",Gabon:"+241",Gambia:"+220",Georgia:"+995",Germany:"+49",Ghana:"+233",Greece:"+30",Grenada:"+1-473",Guatemala:"+502",Guinea:"+224",Guyana:"+592",Haiti:"+509",Honduras:"+504","Hong Kong":"+852",Hungary:"+36",Iceland:"+354",India:"+91",Indonesia:"+62",Iran:"+98",Iraq:"+964",Ireland:"+353",Israel:"+972",Italy:"+39",Jamaica:"+1-876",Japan:"+81",Jordan:"+962",Kazakhstan:"+7",Kenya:"+254",Kiribati:"+686",Kuwait:"+965",Kyrgyzstan:"+996",Laos:"+856",Latvia:"+371",Lebanon:"+961",Lesotho:"+266",Liberia:"+231",Libya:"+218",Liechtenstein:"+423",Lithuania:"+370",Luxembourg:"+352",Madagascar:"+261",Malawi:"+265",Malaysia:"+60",Maldives:"+960",Mali:"+223",Malta:"+356","Marshall Islands":"+692",Mauritania:"+222",Mauritius:"+230",Mexico:"+52",Micronesia:"+691",Moldova:"+373",Monaco:"+377",Mongolia:"+976",Montenegro:"+382",Morocco:"+212",Mozambique:"+258",Myanmar:"+95",Namibia:"+264",Nauru:"+674",Nepal:"+977",Netherlands:"+31","New Zealand":"+64",Nicaragua:"+505",Niger:"+227",Nigeria:"+234","North Macedonia":"+389",Norway:"+47",Oman:"+968",Pakistan:"+92",Palau:"+680",Panama:"+507","Papua New Guinea":"+675",Paraguay:"+595",Peru:"+51",Philippines:"+63",Poland:"+48",Portugal:"+351",Qatar:"+974",Romania:"+40",Russia:"+7",Rwanda:"+250","Saint Kitts and Nevis":"+1-869","Saint Lucia":"+1-758","Saint Vincent and the Grenadines":"+1-784",Samoa:"+685","San Marino":"+378","Saudi Arabia":"+966",Senegal:"+221",Serbia:"+381",Seychelles:"+248","Sierra Leone":"+232",Singapore:"+65",Slovakia:"+421",Slovenia:"+386","Solomon Islands":"+677",Somalia:"+252","South Africa":"+27","South Korea":"+82",Spain:"+34","Sri Lanka":"+94",Sudan:"+249",Suriname:"+597",Sweden:"+46",Switzerland:"+41",Syria:"+963",Taiwan:"+886",Tajikistan:"+992",Tanzania:"+255",Thailand:"+66",Togo:"+228",Tonga:"+676","Trinidad and Tobago":"+1-868",Tunisia:"+216",Turkey:"+90",Turkmenistan:"+993",Tuvalu:"+688",Uganda:"+256",Ukraine:"+380","United Arab Emirates":"+971","United Kingdom":"+44","United States":"+1",Uruguay:"+598",Uzbekistan:"+998",Vanuatu:"+678","Vatican City":"+379",Venezuela:"+58",Vietnam:"+84",Yemen:"+967",Zambia:"+260",Zimbabwe:"+263"}}},methods:{selectUserType(e){this.userType=e},sendWhatsAppMessage(){const{name:e,countryCode:a,phone:n,message:o}=this.demoRequest;if(!e||!a||!n||!o)return void alert("Please fill in all required fields: Name, Phone, and Message.");const t=`${a}${n}`,r="639665385452",i=`https://wa.me/${r}?text=Hello, my name is ${encodeURIComponent(e)}. My contact number is ${encodeURIComponent(t)}. ${encodeURIComponent(o)}`;window.open(i,"_blank")},openModal(e){this.selectedProvider=e,this.showModal=!0},closeModal(){this.showModal=!1,this.selectedProvider=null}}};const D=(0,s.A)(H,[["render",K],["__scopeId","data-v-7bd2ba1c"]]);var J=D;function $(e,a,n,o,r,i){return(0,t.uX)(),(0,t.CE)("footer",null,a[0]||(a[0]=[(0,t.Fv)('<div class="footer-content" data-v-3e767bc2><div class="footer-section about" data-v-3e767bc2><h2 data-v-3e767bc2>LMS-PH</h2><p data-v-3e767bc2> LMS-PH is a leading learning management system dedicated to delivering high-quality education resources, interactive learning modules, and comprehensive course management features to enhance student engagement and simplify the learning process. </p></div><div class="footer-section links" data-v-3e767bc2><h2 data-v-3e767bc2>Quick Links</h2><ul data-v-3e767bc2><li data-v-3e767bc2><a href="#courses" data-v-3e767bc2>Courses</a></li><li data-v-3e767bc2><a href="#features" data-v-3e767bc2>Features</a></li><li data-v-3e767bc2><a href="#testimonials" data-v-3e767bc2>Testimonials</a></li><li data-v-3e767bc2><a href="#contact" data-v-3e767bc2>Contact Us</a></li><li data-v-3e767bc2><a href="#faq" data-v-3e767bc2>FAQ</a></li></ul></div><div class="footer-section contact" data-v-3e767bc2><h2 data-v-3e767bc2>Contact Us</h2><p data-v-3e767bc2>Email: support@lms-ph.com</p><p data-v-3e767bc2>Phone: +63 907 432 3746</p><p data-v-3e767bc2>Address: 123 LMS Avenue, Manila, Philippines</p></div><div class="footer-section social" data-v-3e767bc2><h2 data-v-3e767bc2>Follow Us</h2><div class="social-icons" data-v-3e767bc2><a href="https://facebook.com" target="_blank" aria-label="Facebook" data-v-3e767bc2><i class="fab fa-facebook-f" data-v-3e767bc2></i></a><a href="https://twitter.com" target="_blank" aria-label="Twitter" data-v-3e767bc2><i class="fab fa-twitter" data-v-3e767bc2></i></a><a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" data-v-3e767bc2><i class="fab fa-linkedin-in" data-v-3e767bc2></i></a><a href="https://instagram.com" target="_blank" aria-label="Instagram" data-v-3e767bc2><i class="fab fa-instagram" data-v-3e767bc2></i></a></div></div></div><div class="footer-bottom" data-v-3e767bc2><p data-v-3e767bc2>© 2024 Learning Management System LMS-PH. All rights reserved.</p></div>',2)]))}var Y={};const Q=(0,s.A)(Y,[["render",$],["__scopeId","data-v-3e767bc2"]]);var Z=Q,ee={components:{HeroSection:h,FeaturesSection:y,UserTypeSelector:J,TestimonialsSection:P,ContactForm:T,AppFooter:Z},mounted(){const e={root:null,threshold:.1},a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("visible"),a.unobserve(e.target))}))}),e),n=document.querySelectorAll(".reveal");n.forEach((e=>{a.observe(e)}))}};const ae=(0,s.A)(ee,[["render",d],["__scopeId","data-v-6e392bbc"]]);var ne=ae;const oe=[{path:"/",component:ne}],te=(0,u.aE)({history:(0,u.LA)(),routes:oe});var re=te,ie=n(8654),se=n.n(ie);const le=(0,o.Ef)(c);le.use(re),le.use(se()),le.mount("#app")}},a={};function n(o){var t=a[o];if(void 0!==t)return t.exports;var r=a[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(a,o,t,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],t=e[u][1],r=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=t();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,t,r]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var o in a)n.o(a,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};n.O.j=function(a){return 0===e[a]};var a=function(a,o){var t,r,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(a){return 0!==e[a]}))){for(t in s)n.o(s,t)&&(n.m[t]=s[t]);if(l)var u=l(n)}for(a&&a(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunklms_website"]=self["webpackChunklms_website"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3217)}));o=n.O(o)})();
//# sourceMappingURL=app.7a70307e.js.map