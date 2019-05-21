webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <div class=\"row\t\">\n        <div class=\"col-md-3 col-md-offset-2 text-center col-sm-4  col-xs-12 content \">\n            <img [src]=\"LOGO\" class=\"profilepic img-thumbnail \">\n        </div>\n        <div class=\"col-md-5 col-sm-8  col-xs-12 content\">\n            <p>Hey,</p>\n            <p>\n                I am a Software Development Engineer with 2 years of experience in Frontend Development and Javascript.\n                Currently working as a Frontend Developer at <a href=\"http://www.innovaccer.com/\">Innovaccer</a>, a healthcare startup.\n                The challenges of scaling and improving UI is my motivation for learning new things.\n                I’m dedicated to focus on UX and writing clean, modular code.\n            </p>\n            <p>Being an Open Source Enthusiast, I have also contributed to <a href=\"https://verdaccio.org\">Verdaccio</a> (npm proxy registry). \n                <a href=\"http://ashishsurana.in/Resume.pdf\">Here</a> is my Resume that contains details of all interesting work I have done.\n                <!-- I maintain this page as a documentation of my work. -->\n            </p>\n            <!-- <div style=\"margin-top: 36px;\">\n                <h4>Links-</h4>\n                <div style=\"text-align:center;\">\n                    <span *ngFor=\"let contact of contacts\" class=\"fa-stack fa-lg\">\n                        <a [href]=\"contact.url\" target=\"_blank\">\n                            <i class=\"fa fa-stack-1x\" [ngClass]=\"contact.class\"></i>\n                        </a>\n                    </span>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#example-navbar-collapse\">\n            <span class=\"sr-only\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/about\" routerLinkActive=\"active\" >ASHISH SURANA</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"example-navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right hidden-xs\">\n            <li><a href=\"https://github.com/ashishsurana/ashishsurana.github.io\" target=\"_blank\"><i class=\"fa fa-github-alt  \"></i></a></li>\n        </ul>\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\" style=\"color:#40B58A;\">ABOUT</a></li>\n            <!-- <li><a routerLink=\"/skills\" routerLinkActive=\"active\" style=\"color:#40B58A;\">SKILLS</a></li> -->\n            <li><a routerLink=\"/projects\" routerLinkActive=\"active\" style=\"color:#40B58A;\">PROJECTS</a></li>\n            <li><a routerLink=\"/resume\" routerLinkActive=\"active\" style=\"color:#40B58A;\">RESUME</a></li>\n            <li><a routerLink=\"/contact\" routerLinkActive=\"active\" style=\"color:#40B58A;\">CONTACT</a></li>\n        </ul>\n    </div>\n</nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "        <div class=\"contact\">\n            <h3 class=\"heading\">Contact</h3>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 well\">\n                    <h4><i class=\"fa fa-phone fa-1x\"></i> : (+91) 9784-878727</h4>\n                    <h4><i class=\"fa fa-envelope fa-1x\"></i> : ashishsurana.in@gmail.com </h4>\n                    <hr>\n                    <div style=\"text-align:center;\">\n                        <span *ngFor=\"let contact of contacts\" class=\"fa-stack fa-lg\">\n                            <a [href]=\"contact.url\" target=\"_blank\">\n                                <i class=\"fa fa-stack-1x\" [ngClass]=\"contact.class\"></i>\n                            </a>\n\t\t\t\t\t\t</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"project\">\n    <h3 class=\"heading\">Projects</h3>\n    <hr>\n    <div class=\"row\">\n\n        <div *ngFor=\"let project of projects\" class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 well\">\n\n            <div class=\"col-lg-3 col-md-4 col-sm-3 \">\n                <img [src]=\"project.icon\" class=\"img-responsive img-thumbnail \">\n            </div>\n            <h3>\n                <a [href]=\"project.titlehref\">{{project.title}}</a><small>{{project.subtitle}}</small>\n            </h3>\n            <hr>\n            <p>{{project.description}}</p>\n            <h5><b>Technologies: </b>{{project.technologies}}</h5>\n            <div class=\"box\">\n                <span *ngIf=\"project.giturl\" class=\"fa-stack fa-lg\">\n                        <a [href]=\"project.giturl\" target=\"_blank\">\n                            <i class=\"fa fa-github fa-stack-1x\"></i>\n                        </a>\n                    </span>\n                <span *ngIf=\"project.giturl\" class=\"fa-stack fa-lg\">\n                        <a [href]=\"project.screenshoturl\" target=\"_blank\">\n                            <i class=\"fa fa-picture-o fa-stack-1x   \"></i>\n                        </a>\n                    </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "        <div class=\"resume\">\n            <h3 class=\"heading\">Resume</h3>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-lg-10 col-md-10  col-sm-10 col-sm-offset-1  well \" style=\"text-align:center;\">\n                    <div class=\"hidden-xs\">\n                        <embed [src]=\"path\" width=\"86%\" height=\"750px\">\n                    </div>\n                    <div style=\"margin :auto;text-align: center;\" class=\"visible-xs\">\n                        <span class=\"fa fa-lg icons col-lg-1 \t\">\n\t  \t\t\t\t\t<a [href]=\"path\" target=\"_blank\">\n\t  \t\t\t\t\t\t<i class=\"fa fa-file-pdf-o fa-3x\"></i>\n\t  \t\t\t\t\t</a>\n\t\t\t\t\t</span>\n                        <span class=\"fa fa-lg icons col-lg-1 \">\n\t  \t\t\t\t\t<a [href]=\"path\" download=\"Ashish_Surana_Resume.pdf\">\n\t  \t\t\t\t\t\t<i class=\"fa fa-download fa-3x\"></i>\n\t  \t\t\t\t\t</a>\n\t\t\t\t\t</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div class=\"skills\">\n    <h3 class=\"heading\">Skills</h3>\n    <hr>\n    <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1\">\n        <h3 class=\"heading\">Programming Languages</h3>\n        <hr>\n        <img *ngFor=\"let obj of programming\" [src]=\"obj.path\" class=\"col-lg-2 skillImages\">\n    </div>\n    <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 \">\n        <h3 class=\"heading\">Other</h3>\n        <hr>\n        <img *ngFor=\"let obj of other\" [src]=\"obj.path\" class=\"col-lg-2 skillImages\">\n    </div>\n    <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 \" style=\"margin-bottom: 20px\">\n        <h3 class=\"heading\">Certifications</h3>\n        <hr>\n        <img *ngFor=\"let obj of certs\" [src]=\"obj.path\" title=\"{{obj.title}}\" class=\"col-lg-2 \">\n        \n        <!--<img src=\"./assets/cad.png\" class=\"col-lg-2\" title=\"AutoCad\">-->\n    </div>\n    <!--<div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 \" style=\"margin-bottom: 20px\">\n        <h3 class=\"heading\">Operating Systems</h3>\n        <hr>\n        <img src=\"./assets/ubuntu.png\" class=\"col-lg-2 \">\n        <img src=\"./assets/redhat.png\" class=\"col-lg-2\">\n        <img src=\"./assets/windows.png\" class=\"col-lg-2\">\n    </div>-->\n</div>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 81;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.name = 'Angular';
        this.LOGO = "";
        this.contacts = [
            {
                class: "fa-github",
                url: "htp://github.com/ashishsurana/"
            }, {
                class: "fa-linkedin",
                url: "https://in.linkedin.com/in/ashishsurana1"
            }, {
                //   class : "fa-skype",
                //   url : "ashish.surana1"
                // },{
                class: "fa-twitter",
                url: "https://twitter.com/ashishsurana1"
            }, {
                //   class : "fa-facebook",
                //   url : "https://facebook.com/ashish.surana1"
                // },{
                class: "fa-stack-overflow ",
                url: "http://stackoverflow.com/users/3950481/ashish-surana"
            }, {
                //   class : "fa-instagram",
                //   url : "https://instagram.com/ashishsurana1/"
                // },{
                class: "fa-envelope-o",
                url: "mailto:ashishsurana.in@gmail.com"
            }
        ];
        this.LOGO = 'assets/pic.png';
    }
    ;
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(152)
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(151)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skill_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_project_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__(93);
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_6__skills_skill_component__["a" /* SkillComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_8__projects_project_component__["a" /* ProjectComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_6__skills_skill_component__["a" /* SkillComponent */], __WEBPACK_IMPORTED_MODULE_8__projects_project_component__["a" /* ProjectComponent */], __WEBPACK_IMPORTED_MODULE_9__resume_resume_component__["a" /* ResumeComponent */], __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.contacts = [
            {
                class: "fa-github",
                url: "htp://github.com/ashishsurana/"
            }, {
                class: "fa-linkedin",
                url: "https://in.linkedin.com/in/ashishsurana1"
            }, {
                //   class : "fa-skype",
                //   url : "ashish.surana1"
                // },{
                class: "fa-twitter",
                url: "https://twitter.com/ashishsurana1"
            }, {
                //   class : "fa-facebook",
                //   url : "https://facebook.com/ashish.surana1"
                // },{
                class: "fa-stack-overflow ",
                url: "http://stackoverflow.com/users/3950481/ashish-surana"
            }, {
                //   class : "fa-instagram",
                //   url : "https://instagram.com/ashishsurana1/"
                // },{
                class: "fa-envelope-o",
                url: "mailto:ashishsurana.in@gmail.com"
            }
        ];
    }
    ;
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-skills',
        template: __webpack_require__(154)
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
        this.projects = [{
                icon: 'assets/cal.png',
                title: "Leave Management App",
                titlehref: "",
                subtitle: " Smart India Hackathon, Grand Finale",
                description: "After getting selected in Finale, This project was build overnight and team of 6 people was leaded by me. My roles were building REST APIs using express and graphql, database designing.",
                technologies: "Node js, MongoDB, HTML5, CSS3, jQuery",
                giturl: "https://github.com/ashishsurana/leave-app-server",
            }, {
                icon: "assets/app-logo.png",
                title: "Arya Alucon",
                titlehref: "https://play.google.com/store/apps/details?id=in.surana.ashish.alucon",
                subtitle: " August - November 2016",
                description: "A Native Android Application made for the College, dedicated to the Alumni, where they can see their friends and get to know about the recent college activities.",
                technologies: "Android, Sqlite , Node.js, mongodb",
                giturl: "https://github.com/ashishsurana/Alumni",
                screenshoturl: "https://drive.google.com/open?id=0B1VhjwFcJ03cWk5LMER4YnF5Z2M"
            }, {
                icon: "assets/wisflux.png",
                title: "Wisflux Edtech Labs, Jaipur",
                titlehref: "www.wisflux.com",
                subtitle: " Internship",
                description: "I worked as full stack developer. My roles were building REST APIs using express and graphql, database designing, Automated tasks using gitlab for deployment and backups , Interface designing using angular2, deployed AWS Lambda Services.",
                technologies: "Node.js, Graphql, MongoDB, typescript, AWS, Angular 2, Gitlab CI",
            }, {
                icon: "assets/parkzap.jpg",
                title: "Parkzap Labs, Gurgaon",
                titlehref: "http://parkzap.com/",
                subtitle: " Internship",
                description: "I contributed to Application made for the Parkzap Labs for smart parking solutions. I did the integration of NFC cards, RFID reader, custom hardware connection with android, designing advance UI for controlling the ioio board, cloud communication through efficient libraries",
                technologies: "Android, Java, Sqlite, IOIO Board, IOT",
            }, {
                icon: "assets/med.png",
                title: "Medicine Stock Management",
                titlehref: "https://github.com/ashishsurana/Drug_mgmt",
                subtitle: " November 2015",
                description: "A desktop based application having simple UI, that maintains the stock of Shedule H1 drugs with the help of conventional Billing System.",
                technologies: "JAVA, MySql",
                giturl: "https://github.com/ashishsurana/Drug_mgmt",
                screenshoturl: "https://photos.google.com/share/AF1QipOTUSZDaFDtIky6wEZb7brNBKan2IFsDdUNgsICkFZUimvFSXD4vIqMoKi22Sq_WA/photo/AF1QipPnTCr4mX3HYQIA9snIL1qLQ5cb5Fn6Xarnk0po?key=X1V6dkhJbUVtOTBQSWs0ZGVCYjhIN2RlTm1hMWd3"
            }, {
                icon: "assets/mini.png",
                title: "Quick Mini Statement",
                titlehref: "https://github.com/ashishsurana/mini-statement",
                subtitle: " september 2014",
                description: "An app that generates the mini statement of bank account from existing bank transaction text messages in our mobile phones.",
                technologies: "JAVA, Sqlite, Android",
                giturl: "https://github.com/ashishsurana/mini-statement",
                screenshoturl: "https://photos.google.com/share/AF1QipMuW--Sxh0IXXTwUXwfZFNX4O1p0WjTCNvhsd4wsbfLFQ8ev57h9zi4RYRGzBLhTA/photo/AF1QipNVnGrPm3knbc8yqTO-17XSQ7Z5FJPaqLoKpvX_?key=THRPeWg2Qll0d3kyV2R0Yko2X1dPZkNkRkl5eDRR"
            }, {
                icon: "assets/epilepsy.png",
                title: "pragyaepilepsycare.in",
                titlehref: "http://pragyaepilepsycare.in/",
                subtitle: " January - March, 2015",
                description: "A website for an NGO that is serving for epilepsy in rural area from last 36 years.",
                technologies: "HTML, CSS, JavaScript",
                giturl: "https://github.com/ashishsurana/epilepsy",
                screenshoturl: "https://photos.google.com/share/AF1QipP-7bLrxiHa0khvC4jff1zBmhoHhkHL1ZaZ3v1Vs7Xr-h5gelKiy_DJBoovmEQSxw/photo/AF1QipOC2rYBdWm7W8IHLHCez4T-CJ92sXqWU_fkoFSg?key=ZDN5Rk9EczFqV21ieUo5eWM0djhEQ3pkdzV1Qkl3"
            }];
    }
    ;
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-skills',
        template: __webpack_require__(155)
    }),
    __metadata("design:paramtypes", [])
], ProjectComponent);

//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = (function () {
    function ResumeComponent(sanitizer) {
        this.ath = "Resume.pdf";
        console.log(this.path);
        this.path = sanitizer.bypassSecurityTrustResourceUrl(this.ath);
    }
    ;
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-resume',
        template: __webpack_require__(156)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], ResumeComponent);

var _a;
//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = (function () {
    function SkillComponent() {
        this.programming = [{
                path: 'assets/java.png'
            },
            {
                path: 'assets/html.png'
            },
            {
                path: 'assets/css.png'
            },
            {
                path: 'assets/python.png'
            },
            {
                path: 'assets/js.png'
            }];
        this.other = [{
                path: "assets/git.png",
                title: "Git / Github"
            },
            {
                path: 'assets/androids.jpg',
                title: "Android"
            },
            {
                path: 'assets/mysql.png',
                title: "MySql"
            },
            {
                path: 'assets/bootstrap.png',
                title: "Bootstrap"
            },
            {
                path: 'assets/jq.png',
                title: "JQuery"
            },
            {
                path: 'assets/node.png',
                title: "Node.js"
            },
            {
                path: 'assets/mongodb.png',
                title: "Node.js"
            },
            {
                path: 'assets/angular.png',
                title: "Angular2"
            },
            {
                path: 'assets/openstack.png',
                title: "Open Stack"
            },
            {
                path: 'assets/linux.png',
                title: "Linux"
            },
            {
                path: 'assets/digital-ocean.png',
                title: "Digital Ocean"
            },
            {
                path: 'assets/aws.png',
                title: "AWS"
            }];
        this.certs = [{
                path: 'assets/rhce.png'
            },
            {
                path: 'assets/rhcsa.png'
            },
            {
                path: 'assets/cad.png'
            }];
    }
    ;
    return SkillComponent;
}());
SkillComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'my-skills',
        template: __webpack_require__(157)
    }),
    __metadata("design:paramtypes", [])
], SkillComponent);

//# sourceMappingURL=skill.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[188]);
//# sourceMappingURL=main.bundle.js.map