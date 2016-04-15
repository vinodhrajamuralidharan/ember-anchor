"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,a,r,n,o){var t=void 0;a["default"].MODEL_FACTORY_INJECTIONS=!0,t=a["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(t,o["default"].modulePrefix),e["default"]=t}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,a,r){var n=r["default"].APP.name,o=r["default"].APP.version;e["default"]=a["default"].extend({version:o,name:n})}),define("dummy/components/customized-page",["exports","ember","ember-anchor/mixins/view-support"],function(e,a,r){e["default"]=a["default"].Component.extend(r["default"],{anchorQueryParam:"custom"})}),define("dummy/components/ember-anchor",["exports","ember-anchor/components/ember-anchor"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a["default"]}})}),define("dummy/components/index-page",["exports","ember","ember-anchor/mixins/view-support"],function(e,a,r){e["default"]=a["default"].Component.extend(r["default"],{})}),define("dummy/controllers/array",["exports","ember"],function(e,a){e["default"]=a["default"].Controller}),define("dummy/controllers/customized",["exports","ember","ember-anchor/mixins/controller-support"],function(e,a,r){e["default"]=a["default"].Controller.extend(r["default"],{anchorQueryParam:"custom"})}),define("dummy/controllers/index",["exports","ember","ember-anchor/mixins/controller-support"],function(e,a,r){e["default"]=a["default"].Controller.extend(r["default"],{})}),define("dummy/controllers/object",["exports","ember"],function(e,a){e["default"]=a["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,a,r){e["default"]={name:"App Version",initialize:(0,a["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,a){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",a["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-anchor",["exports","dummy/config/environment"],function(e,a){function r(){var e=arguments[1]||arguments[0],r=a["default"].emberAnchor;e.register("config:ember-anchor",r,{instantiate:!1})}e.initialize=r,e["default"]={name:"ember-anchor",initialize:r}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,a,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,o=r["default"].exportApplicationGlobal;n="string"==typeof o?o:a["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/mixins/controller-support",["exports","ember-anchor/mixins/controller-support"],function(e,a){e["default"]=a["default"]}),define("dummy/mixins/view-support",["exports","ember-anchor/mixins/view-support"],function(e,a){e["default"]=a["default"]}),define("dummy/resolver",["exports","ember-resolver"],function(e,a){e["default"]=a["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,a,r){var n=a["default"].Router.extend({location:r["default"].locationType});n.map(function(){this.route("customized")}),e["default"]=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,a){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("Ember Anchor");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createTextNode("");return e.appendChild(a,r),a},render:function(e,a,r){var n=a.dom,o=a.hooks,t=o.content;n.detectNamespace(r);var i;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(i=this.build(n),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=n.cloneNode(this.cachedFragment,!0))):i=this.build(n),this.cachedFragment&&n.repairClonedNode(i,[2]);var l=n.createMorphAt(i,1,2,r);return t(a,l,e,"outlet"),i}}}())}),define("dummy/templates/customized",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),r=e.createTextNode("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-custom","first");var n=e.createTextNode("First");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-custom","second");var n=e.createTextNode("Second");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-custom","third");var n=e.createTextNode("Third");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n");return e.appendChild(a,r),a},render:function(e,a,r){var n=a.dom,o=a.hooks,t=o.get,i=o.inline,l=o.subexpr;n.detectNamespace(r);var s;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(s=this.build(n),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=n.cloneNode(this.cachedFragment,!0))):s=this.build(n),this.cachedFragment&&n.repairClonedNode(s,[0]);var c=n.createMorphAt(s,0,1,r),u=n.createMorphAt(s,1,2,r),d=n.createMorphAt(s,2,3,r),p=n.createMorphAt(s,3,4,r);return i(a,c,e,"customized-page",[],{a:t(a,e,"custom")}),i(a,u,e,"link-to",["Go to First","customized",l(a,e,"query-params",[],{custom:"first"})],{"class":"first-link"}),i(a,d,e,"link-to",["Go to Second","customized",l(a,e,"query-params",[],{custom:"second"})],{"class":"second-link"}),i(a,p,e,"link-to",["Go to Third","customized",l(a,e,"query-params",[],{custom:"third"})],{"class":"third-link"}),s}}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),r=e.createTextNode("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-anc","first");var n=e.createTextNode("First");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-anc","second");var n=e.createTextNode("Second");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n\n");e.appendChild(a,r);var r=e.createElement("h5");e.setAttribute(r,"data-anc","third");var n=e.createTextNode("Third");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\nBacon ipsum dolor amet tri-tip turkey doner meatloaf sirloin cupim pork belly shankle short ribs fatback t-bone meatball flank. Bacon turducken meatloaf, kielbasa hamburger tri-tip doner ham pig filet mignon. Pork chop jerky capicola salami jowl, cupim alcatra beef ball tip. Shankle brisket sirloin doner. Pancetta t-bone sausage, brisket bacon sirloin pork chop swine meatball alcatra boudin andouille pork. Porchetta turducken strip steak, pork loin kevin kielbasa ribeye cow pancetta.\n\nSpare ribs short ribs tongue, tenderloin kevin meatloaf venison prosciutto. Pork chop sausage beef ribs pancetta pastrami, short ribs swine shoulder. Pork belly chuck fatback pork, salami pastrami hamburger capicola biltong turducken tail frankfurter jerky prosciutto ham. Frankfurter salami ham tail shankle jerky ribeye corned beef rump.\n\nBiltong jowl tenderloin swine, ball tip brisket alcatra. Swine ribeye boudin shankle. Drumstick tenderloin alcatra tongue turducken jowl hamburger chicken t-bone capicola pork loin shank. Spare ribs andouille corned beef drumstick turducken pig shoulder tail bacon pork loin. Pork alcatra porchetta, bresaola meatball short ribs ham turkey shoulder cow beef ribs pancetta leberkas.\n\nHamburger boudin capicola jowl meatball, ball tip sirloin strip steak. Kielbasa capicola leberkas jerky sirloin short ribs salami pork loin. Alcatra fatback venison bresaola tri-tip turducken. Pork chop cow brisket, pork belly ground round boudin landjaeger. Leberkas short ribs flank doner boudin pork landjaeger tri-tip jowl ham bacon shank chicken pork chop venison. Jerky pork chop filet mignon, rump biltong sausage kielbasa chuck boudin andouille salami corned beef meatball.\n\nBacon sirloin ball tip boudin venison, jowl swine shoulder salami pork chop hamburger turducken tongue pork. Turkey cow t-bone tenderloin jowl filet mignon turducken, salami pastrami capicola porchetta tri-tip biltong spare ribs pork loin. Shank andouille landjaeger ham hock tail pork belly brisket boudin bresaola flank ground round. Bresaola frankfurter porchetta pork chop capicola leberkas. Frankfurter shank pastrami bresaola kevin venison pork. Tongue brisket tenderloin chuck flank bacon beef meatloaf. Biltong pork loin turducken meatloaf ribeye bresaola tail short loin shank tongue swine.\n");return e.appendChild(a,r),a},render:function(e,a,r){var n=a.dom,o=a.hooks,t=o.get,i=o.inline,l=o.subexpr;n.detectNamespace(r);var s;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(s=this.build(n),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=n.cloneNode(this.cachedFragment,!0))):s=this.build(n),this.cachedFragment&&n.repairClonedNode(s,[0]);var c=n.createMorphAt(s,0,1,r),u=n.createMorphAt(s,1,2,r),d=n.createMorphAt(s,2,3,r),p=n.createMorphAt(s,3,4,r);return i(a,c,e,"ember-anchor",[],{a:t(a,e,"anc")}),i(a,u,e,"link-to",["Go to First","index",l(a,e,"query-params",[],{anc:"first"})],{"class":"first-link"}),i(a,d,e,"link-to",["Go to Second","index",l(a,e,"query-params",[],{anc:"second"})],{"class":"second-link"}),i(a,p,e,"link-to",["Go to Third","index",l(a,e,"query-params",[],{anc:"third"})],{"class":"third-link"}),s}}}())}),define("dummy/config/environment",["ember"],function(e){var a="dummy";try{var r=a+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),o=JSON.parse(unescape(n));return{"default":o}}catch(t){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-anchor",version:"v0.1.2"});