/**
 * Copyright (c) 2021, 2024, 5 Mode and other contributors
 * Released under the MIT license
 *
 * This file is part of Squeejs.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software 
 * without restriction, including without limitation the rights to use, copy, modify, merge, publish, 
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * squeejs.js
 * 
 * Squeejs production release.
 *
 * @version 1.1.2
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2016, 2024, 5 Mode
 * @license https://opensource.org/licenses/MIT 
 */


function SqueeJS() {

  const SQJS_GEOURL = "https://ss.squeejs.com/";

  // Highlight
  this.highlightOriTop=[];
  this.highlightOriLeft=[];
  this.highlightOriHeight=[];
  this.highlightOriWidth=[];
  this.highlightOriFontSize=[];
  this.highlightOriBorder=[];
  this.highlightOriPosition=[];
   
  this.highlightDiv = myhighlightDiv;
  this.unlightDiv = myunlightDiv;
  this.highlightInput = myhighlightInput;
  this.unlightInput = myunlightInput;
  this.highlightTextArea = myhighlightTextArea;
  this.unlightTextArea = myunlightTextArea;

  // Splash
  this.splashMainContainerId = "";
  this.splashMainContainerOriHeight = 0;
  this.splashTitle = "";
  this.splashLogoURI = "";
  this.splashBG = "";
  this.splashTimeout = 6000;
  
  this.createSplash = mycreateSplash;
  this.splashStartApp = mySplashStartApp;
  this.initAppWithSplash = myinitAppWithSplash;
  this.initAppWithoutSplash = myinitAppWithoutSplash;
  
  // Work In Progress
  this.wipMainContainerId = "";
  this.wipMainContainerOriHeight = 0;
  this.wipBG = "";

  this.wipStartApp = myWIPStartApp;
  this.initAppWithWIP = myinitAppWithWIP;
  this.initAppWithoutWIP = myinitAppWithoutWIP;  
  
  //Banners
  this.bannerIndex = 0;
  this.bannerIMG = [];
  this.bannerURL = [];
  
  this.createBanner = mycreateBanner;
  this.closeBanner = mycloseBanner;
  
  //Footer
  this.footerHTML = "";
  this.footerBG = "";
  
  this.createFooter = mycreateFooter;
  
  //AppMenu
  this.appmenuContentContId = "";
  this.appmenuVisible = false;
  this.appmenuOnIco = false;

  this.appmenuPopUp = myappmenuPopUp;
  this.appmenuHide = myappmenuHide;
  this.appmenuCheckFlagIco = myappmenuCheckFlagIco;
  this.appmenuUnCheckFlagIco = myappmenuUnCheckFlagIco;
  this.appmenuBodyOnClick = myappmenuBodyOnClick;
  this.createAppMenu = mycreateAppMenu;
  
  //GeoLocation
  this.geoLocation = "";
  
  this.retrieveGeoLocation = myretrieveGeoLocation;
  this.hideElByGeoLocation = myhideElByGeoLocation;
  this.showElByGeoLocation = myshowElByGeoLocation;
  
  //UserTranslation
  this.usertransContentContId = "";
  this.usertransVisible = false;
  this.usertransOnIco = false;  
  this.tranSource = [];
  this.tranDest = [];
  
  this.usertransPopUp=myusertransPopUp;
  this.usertransHide=myusertransHide;
  this.usertransCheckFlagIco=myusertransCheckFlagIco;
  this.usertransUnCheckFlagIco=myusertransUnCheckFlagIco;
  this.usertransBodyOnClick=myusertransBodyOnClick;
  this.getTranslitarates = mygetTranslitarates;
  this.translate = mytranslate;
  this.createUserTrans = mycreateUserTrans;
  
  //Sideabar
  this.sidebarContentContId = "";
  this.sidebarVisible = false;
  this.sidebarOnIT = false;
  
  this.sidebarClose = mysidebarClose;
  this.sidebarShow = mysidebarShow;
  this.sidebarCheckFlag=mysidebarCheckFlag;
  this.sidebarUnCheckFlag=mysidebarUnCheckFlag;
  this.sidebarBodyOnClick=mysidebarBodyOnClick;  
  this.createSidebar = mycreateSidebar;
  
  /**
   * gfSQJZDocWidth
   * 
   * Get the width of the whole document
   * 
   * @returns {int} the document width
   * 
   * This function is part of SqueeJS.
   */
  function gfSQJZDocWidth() {
    var D = document;
    var scrollMaxX;
    if (window.scrollMaxX) {
      scrollMaxX = window.scrollMaxX;
    } else {
      scrollMaxX = D.documentElement.scrollWidth;
    }
    return Math.max(
        D.body.scrollWidth, scrollMaxX,
        D.body.offsetWidth, D.documentElement.offsetWidth,
        D.body.clientWidth, D.documentElement.clientWidth
    );
  }

  /**
   * gfSQJZgetAttrById
   * 
   * Get the value of the given element attribute
   * 
   * @param {string} id, the id selector of the document element
   * @param {string} attributeName, the attribute to retrieve
   * @returns {string} the attribute value
   */
  function gfSQJZgetAttrById(id, attributeName) {
    if (document.getElementById(id)) {
      return document.getElementById(id).getAttribute(attributeName);
    } else {
      return "";
    }
  }

  /**
   * gfSQJZsetAttrById
   * 
   * Set the value of the given element attribute
   * 
   * @param {string} id, the id selector of the document element
   * @param {string} attributeName, the attribute to retrieve
   * @param {string} value, the new attribute value
   * @returns {string} the attribute value
   */
  function gfSQJZsetAttrById(id, attributeName, value) {
    if (document.getElementById(id)) {
      document.getElementById(id).setAttribute(attributeName, value);
    }
  }

  /**
   * gfSQJZgetCSSById
   * 
   * Get the value for the given element style property
   * 
   * @param {string} id, the id selector of the document element
   * @param {string} cssName, the css property to retrieve
   * @returns {string} the property value
   */
  function gfSQJZgetCSSById(id, cssName) {
    if (document.getElementById(id)) {
      return document.getElementById(id).style[cssName];
    } else {
      return "";
    }
  }

  /**
   * gfSQJZsetCSSById
   * 
   * Set the value for the given element style property
   * 
   * @param {string} id, the id selector of the document element
   * @param {string} cssName, the css property to retrieve
   * @returns {string} the property value
   */
  function gfSQJZsetCSSById(id, cssName, value) {
    if (document.getElementById(id)) {
      document.getElementById(id).style[cssName] = value;
    }
  }

  /**
   * gfSQJZDocHeight
   * 
   * Get the height of the whole document
   * 
   * @returns {int} the document height
   * 
   * This function is part of SqueeJS.
   */
  function gfSQJZDocHeight() {
    var D = document;
    var scrollMaxY;
    if (window.scrollMaxY) {
      scrollMaxY = window.scrollMaxY;
    } else {
      scrollMaxY = D.documentElement.scrollHeight;
    }
    var height = Math.max(
        D.body.scrollHeight, scrollMaxY,    
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
    return height;
  }

  /**
   * gfSQJZLoad
   * 
   * Load the content of <url> in the given DIV element
   * 
   * @param {string} id, the DIV id to fill
   * @param {string} url, the url of the content to load
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function gfSQJZLoad(id, url) {
    try {
      var xhttp = new XMLHttpRequest();
      var xmluri = url;
      //alert(xmluri);
      xhttp.open("GET", xmluri, false);  
      xhttp.send();
      document.getElementById(id).innerHTML = xhttp.responseText;
    } catch(e) {
      throw new Error("404 or CORS error: check the resource availability and Access-Control-Allow-Origin of your site.");
    }  
  }

  /**
   * gfSQJZrnd
   * 
   * Generate a random number between the given limits
   * 
   * @param {int} min, the starting limit
   * @param {int} max, the max limit
   * @returns {int} the generated random value
   * 
   * This function is part of SqueeJS.
   */
  function gfSQJZrnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  /**
   * 
   * Highlight
   * 
   */

  /**
   * highlightDiv
   * 
   * Highlight the current DIV element
   * 
   * Context:
   * - call this function in the onmouseenter event 
   * 
   * @param {Element} tthis, the current DIV element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myhighlightDiv(tthis) {
    if (tthis.tagName !== "DIV") {
      return;    
    }
    // --- saving original data
    myR = tthis.getBoundingClientRect();
    highlightIndex = tthis.getAttribute("highlightIndex");
    this.highlightOriTop[highlightIndex] = parseInt(myR.top);
    this.highlightOriHeight[highlightIndex] = parseInt(myR.height);
    this.highlightOriWidth[highlightIndex] = parseInt(myR.width);
    this.highlightOriFontSize[highlightIndex] = tthis.style.fontSize;
    this.highlightOriBorder[highlightIndex] = tthis.style.border;
    this.highlightOriPosition[highlightIndex] = tthis.style.position;
    // ---

    tthis.style.position = "absolute";
    tthis.style.height = "480px";
    tthis.style.width = "650px";
    tthis.style.border = "3px dashed darkcyan";
    tthis.style.fontSize = "25px";

    //document.getElementById("debug1").value=tthis.id+"-100px-"+tthis.tabIndex+" Enter";
  }

  /**
   * unlightDiv
   * 
   * Unlight the current DIV element
   * 
   * Context:
   * - call this function in the onmouseleave event 
   * 
   * @param {Element} tthis, the current DIV element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myunlightDiv(tthis) {
    if (tthis.tagName !== "DIV") {
      return;    
    }
    // --- restoring original data  
    highlightIndex = tthis.getAttribute("highlightIndex");
    if (this.highlightOriTop[highlightIndex]===null) {  
      return;
    }  
    tthis.style.fontSize = this.highlightOriFontSize[highlightIndex];
    tthis.style.border = this.highlightOriBorder[highlightIndex];
    tthis.style.width = (this.highlightOriWidth[highlightIndex]-6)+"px";
    tthis.style.height = (this.highlightOriHeight[highlightIndex]-6)+"px";
    tthis.style.position = this.highlightOriPosition[highlightIndex];
    // ---

    //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
  }

  /**
   * highlightInput
   * 
   * Highlight the current INPUT element
   * 
   * Context:
   * - call this function in the onmouseenter event 
   * 
   * @param {Element} tthis, the current INPUT element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myhighlightInput(tthis) {
    if (tthis.tagName !== "INPUT") {
      return;    
    }
    // --- saving original data
    myR = tthis.getBoundingClientRect();
    highlightIndex = tthis.getAttribute("highlightIndex");
    this.highlightOriTop[highlightIndex] = parseInt(myR.top);
    this.highlightOriHeight[highlightIndex] = parseInt(myR.height);
    this.highlightOriWidth[highlightIndex] = parseInt(myR.width);
    this.highlightOriFontSize[highlightIndex] = tthis.style.fontSize;
    this.highlightOriBorder[highlightIndex] = tthis.style.border;
    this.highlightOriPosition[highlightIndex] = tthis.style.position;
    // ---

    tthis.style.position = "absolute";
    tthis.style.height = "40px";
    tthis.style.width = "400px";
    tthis.style.border = "3px solid lightblue";
    tthis.style.fontSize = "25px";

    //document.getElementById("debug1").value=tthis.id+"-100px-"+tthis.tabIndex+" Enter";
  }

  /**
   * unlightInput
   * 
   * Unlight the current INPUT element
   * 
   * Context:
   * - call this function in the onmouseleave event 
   * 
   * @param {Element} tthis, the current INPUT element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myunlightInput(tthis) {
    if (tthis.tagName !== "INPUT") {
      return;    
    }
    // --- restoring original data  
    highlightIndex = tthis.getAttribute("highlightIndex");
    if (this.highlightOriTop[highlightIndex]===null) {
      return;
    }  
    tthis.style.fontSize = this.highlightOriFontSize[highlightIndex];
    tthis.style.border = this.highlightOriBorder[highlightIndex];
    tthis.style.width = (this.highlightOriWidth[highlightIndex]-6)+"px";
    tthis.style.height = (this.highlightOriHeight[highlightIndex]-6)+"px";
    tthis.style.position = this.highlightOriPosition[highlightIndex];
    // ---

    //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
  }

  /**
   * highlightTextArea
   * 
   * Highlight the current TEXTAREA element
   * 
   * Context:
   * - call this function in the onmouseenter event 
   * 
   * @param {Element} tthis, the current TEXTAREA element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myhighlightTextArea(tthis) {
    if (tthis.tagName !== "TEXTAREA") {
      return;    
    }
    // --- saving original data
    myR = tthis.getBoundingClientRect();
    highlightIndex = tthis.getAttribute("highlightIndex");
    this.highlightOriTop[highlightIndex] = parseInt(myR.top);
    this.highlightOriHeight[highlightIndex] = parseInt(myR.height);
    this.highlightOriWidth[highlightIndex] = parseInt(myR.width);
    this.highlightOriFontSize[highlightIndex] = tthis.style.fontSize;
    this.highlightOriBorder[highlightIndex] = tthis.style.border;
    this.highlightOriPosition[highlightIndex] = tthis.style.position;
    // ---

    tthis.style.position = "absolute";
    tthis.style.height = "240px";
    tthis.style.width = "400px";
    tthis.style.border = "3px solid lightblue";
    tthis.style.fontSize = "25px";

    //document.getElementById("debug1").value=tthis.id+"-100px-"+tthis.tabIndex+" Enter";
  }

  /**
   * unlightTextArea
   * 
   * Unlight the current TEXTAREA element
   * 
   * Context:
   * - call this function in the onmouseleave event 
   * 
   * @param {Element} tthis, the current TEXTAREA element (this on the function call)
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myunlightTextArea(tthis) {
    if (tthis.tagName !== "TEXTAREA") {
      return;    
    }
    // --- restoring original data  
    highlightIndex = tthis.getAttribute("highlightIndex");
    if (this.highlightOriTop[highlightIndex]===null) {
      return;
    }  
    tthis.style.fontSize = this.highlightOriFontSize[highlightIndex];
    tthis.style.border = this.highlightOriBorder[highlightIndex];
    tthis.style.width = (this.highlightOriWidth[highlightIndex]-6)+"px";
    tthis.style.height = (this.highlightOriHeight[highlightIndex]-6)+"px";
    tthis.style.position = this.highlightOriPosition[highlightIndex];
    // ---

    //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
  }

  // --- End Highlight

  /**
   * 
   * Splash Screen
   */

  /**
   * createSplash
   * 
   * Create the tag DIV for the splash screen
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mycreateSplash() {
    var D = document;
    w = gfSQJZDocWidth();
    splashLeft = parseInt((w - 265) / 2);
    h = gfSQJZDocHeight();
    title = this.splashTitle;
    logoURI = this.splashLogoURI;
    BG = this.splashBG;
    //alert(this.splashTitle);
    //alert(this.splashLogoURI);
    //alert(this.splashBG);

    splash = "";
    splash += "<br><br><br><br>";
    splash += "<div style='width:267px;margin:auto;text-align:center;'>"+title+"</div><br>";
    splash += "<div style='width:267px;margin:auto;'><img src='"+logoURI+"' style='width:265px;'></div>";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSsplash";
    newdiv.style.background = BG;
    newdiv.style.width = w;
    newdiv.style.height = h;
    newdiv.style.textAlign = 'left';
    newdiv.style.fontFamily = 'Arial,Sans,Verdana';
    newdiv.style.fontSize = '35px';
    newdiv.style.fontWeight = '900';
    newdiv.style.paddingLeft = splashLeft+"px";
    newdiv.innerHTML = splash;
    D.body.appendChild(newdiv);
  }

  /**
   * SPALSHstartApp
   * 
   * Start the web app just after the Splash
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mySplashStartApp() {

    //alert("hello");

    //Splash
    //if (document.getElementById("SQJSsplash")) {
    //  document.getElementById("SQJSsplash").style.display = "none";
    //}  
    gfSQJZsetCSSById("SQJSsplash", "display", "none");

    //Main Container
    //document.getElementById(this.splashMainContainerId).style.height = this.splashMainContainerOriHeight;
    gfSQJZsetCSSById(this.splashMainContainerId, "height", this.splashMainContainerOriHeight);
    //document.getElementById(this.splashMainContainerId).style.display = "inline";
    gfSQJZsetCSSById(this.splashMainContainerId, "display", "inline");

    window.scrollTo(0,0);

  }			

  /**
   * _SPLASHstartApp
   * 
   * Set the timeout to start the web app just after the Splash
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @param {int} time, the interval of time to wait before to start the webapp
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  //function _SPLASHstartApp(time) {

    // Fisnished the Intro with the Splash we load the app..
    // setTimeout("SPLASHstartApp()", time);

  //}

  /**
   * _initAppWithSplash
   * 
   * Init the web app to start with the Splash
   * 
   * Context:
   * - Call this function in the load event (ie. by a window.AddEventListener) of the webpage 
   * 
   * @param {string} mainContainerId, the container ID for the webpage content
   * @param {string} title, the title of the splash screen
   * @param {string} logoURI, the logo to display in the splash screen
   * @param {string} BG, the background for the splash screen
   * @param {int} timeout, the splash screen timeout
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myinitAppWithSplash(mainContainerId, title, logoURI, BG, timeout) {

    this.splashMainContainerId = mainContainerId;
    this.splashTitle = title;
    this.splashLogoURI = logoURI;
    this.splashBG = BG;
    if (timeout!==null) {
      this.splashTimeout = timeout;
    }  

    //Main Container
    //document.getElementById(this.splashMainContainerId).style.display = "none";
    gfSQJZsetCSSById(this.splashMainContainerId, "display", "none");
    
    //Splash
    this.createSplash();
    document.getElementById("SQJSsplash").style.display = "inline";

    //window.scrollTo(1,1);
    document.body.style.height = parseInt(window.innerHeight) + "px";
    //this.splashMainContainerOriHeight = document.getElementById(this.splashMainContainerId).style.height;
    this.splashMainContainerOriHeight = gfSQJZgetCSSById(this.splashMainContainerId, "height");
    //document.getElementById(this.splashMainContainerId).style.height = parseInt(window.innerHeight) + "px";
    gfSQJZsetCSSById(this.splashMainContainerId, "height", parseInt(window.innerHeight) + "px");
    
    setTimeout("SQJS.splashStartApp()", this.splashTimeout);

  }

  /**
   * _initAppWithoutSplash
   * 
   * Init the web app to start withOUT the Splash
   * 
   * Context:
   * - Call this function in the load event (ie. by a window.AddEventListener) of the webpage 
   * 
   * @param {string} mainContainerId, the container ID for the webpage content
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myinitAppWithoutSplash(mainContainerId) {

    this.splashMainContainerId = mainContainerId;

    //Main Container
    //document.getElementById(this.splashMainContainerId).style.display = "inline";
    gfSQJZsetCSSById(this.splashMainContainerId, "display", "inline");

    //Splash
    //document.getElementById("SQJSsplash").style.display = "none";

    setTimeout("SQJS.splashStartApp()", 1);

  }
  // --- End Splash Screen

  /**
   * 
   * Work in Progress
   */

  /**
   * createWIP
   * 
   * Create the tag DIV for the Work In Progress Banner
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function _createWIP() {
    var D = document;
    w = gfSQJZDocWidth();
    wipLeft = parseInt((w - 450) / 2);
    h = gfSQJZDocHeight();
    bannerURI = "//squeejs.com/res/work-in-progress.png";
    BG = this.wipBG;

    wip = "";
    wip += "<br><br><br><br><br><br><br>";
    wip += "<div style='width:450px;margin:auto;'><img src='"+bannerURI+"' style='width:450px;'></div>";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSWIP";
    newdiv.style.background = BG;
    newdiv.style.width = w;
    newdiv.style.height = h;
    newdiv.style.textAlign = 'left';
    newdiv.style.fontFamily = 'Arial,Sans,Verdana';
    newdiv.style.fontSize = '35px';
    newdiv.style.fontWeight = '900';
    newdiv.style.paddingLeft = wipLeft+"px";
    newdiv.innerHTML = wip;
    D.body.appendChild(newdiv);
  }

  /**
   * WIPstartApp
   * 
   * Start the web app just after the WIP banner
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myWIPStartApp() {

    //Splash
    //if (document.getElementById("SQJSWIP")) {
    //  document.getElementById("SQJSWIP").style.display = "none";
    //}
    gfSQJZsetCSSById("SQJSWIP", "display", "none");

    //Main Container
    //document.getElementById(this.wipMainContainerId).style.height = this.wipMainContainerOriHeight;
    gfSQJZsetCSSById(this.wipMainContainerId, "height", this.wipMainContainerOriHeight);
    //document.getElementById(this.wipMainContainerId).style.display = "inline";
    gfSQJZsetCSSById(this.wipMainContainerId, "display", "inline");
    
    window.scrollTo(0,0);

  }			

  /**
   * _WIPstartApp
   * 
   * Set the timeout to start the web app just after the Splash
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @param {int} time, the interval of time to wait before to start the webapp
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  //function _WIPstartApp(time) {

    // Fisnished the Intro with the Splash we load the app..
    // setTimeout("WIPstartApp()", time);

  //}

  /**
   * _initAppWithWIP
   * 
   * Init the web app to start with the work in progress banner
   * 
   * Context:
   * - Call this function in the load event (ie. by a window.AddEventListener) of the webpage 
   * 
   * @param {string} mainContainerId, the container ID for the webpage content
   * @param {string} BG, the background for the wip banner
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myinitAppWithWIP(mainContainerId, BG) {

    this.wipMainContainerId = mainContainerId;
    this.wipBG = BG;

    //Main Container
    //document.getElementById(this.wipMainContainerId).style.display = "none";
    gfSQJZsetCSSById(this.wipMainContainerId, "display", "none");

    //Banner
    _createWIP();
    document.getElementById("SQJSWIP").style.display = "inline";

    //window.scrollTo(1,1);
    document.body.style.height = parseInt(window.innerHeight) + "px";
    //this.wipMainContainerOriHeight = document.getElementById(this.wipMainContainerId).style.height;
    this.wipMainContainerOriHeight = gfSQJZgetCSSById(this.wipMainContainerId, "height");
    //document.getElementById(this.wipMainContainerId).style.height = parseInt(window.innerHeight) + "px";
    gfSQJZsetCSSById(this.wipMainContainerId, "height", parseInt(window.innerHeight) + "px");
  }

  /**
   * _initAppWithoutWIP
   * 
   * Init the web app to start withOUT the WIP banner
   * 
   * Context:
   * - Call this function in the load event (ie. by a window.AddEventListener) of the webpage 
   * 
   * @param {string} mainContainerId, the container ID for the webpage content
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myinitAppWithoutWIP(mainContainerId) {

    this.wipMainContainerId = mainContainerId;

    //Main Container
    //document.getElementById(this.wipMainContainerId).style.display = "inline";
    gfSQJZsetCSSById(this.wipMainContainerId, "display", "inline");
    
    //Splash
    //document.getElementById("SQJSWIP").style.display = "none";

    setTimeout("SQJS.wipStartApp()", 1);

  }
  // --- Work in Progress

  /**
   * 
   * Banner
   */

  /**
   * createBanner
   * 
   * Create a new Banner
   * 
   * Context:
   * - Call in the body of your webpage 
   * 
   * @param {string} img, the banner img (471px width)
   * @param {string} url, the banner target url
   * @param {string} align, the banner horizontal alignment [left|middle|right]
   * @param {string} display, the banner display [fixed|absolute|relative|none]
   * @param {int} minScreenWidth, min screen width to display the banner
   * @returns {string} the id of the resulting banner
   * 
   * This function is part of SqueeJS.
   */
  function mycreateBanner(img, url, align, display, minScreenWidth) {
    this.bannerIndex++;

    this.bannerIMG[this.bannerIndex] = img;
    this.bannerURL[this.bannerIndex] = url;

    var D = document;
    w = gfSQJZDocWidth();
    switch (align) {
      case "middle":
        bannerLeft = parseInt((w - 473) / 2);
        break;
      case "left":
        bannerLeft = 0;
        break;
      case "right":
        bannerLeft = parseInt(w - 473);
        break;
      default:  
        bannerLeft = parseInt((w - 473) / 2);
        break;
    }
    bbannerIMG = this.bannerIMG[this.bannerIndex];
    bbannerURL = this.bannerURL[this.bannerIndex];

    banner = "";
    banner += "<button type='button' class='SQJSclose-button' onclick='SQJS.closeBanner(this);'>";
    banner += "<span style='font-weight:900;'>&times;</span>";
    banner += "</button>";  
    banner += "<a href='"+bbannerURL+"' target='_blank'><img src='"+bbannerIMG+"' style='width:471px;'></a>";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSBANNER" + this.bannerIndex;
    //newdiv.style.width = w;
    //newdiv.style.height = h;
    newdiv.style.textAlign = 'left';
    //newdiv.style.fontFamily = 'Arial,Sans,Verdana';
    //newdiv.style.fontSize = '35px';
    //newdiv.style.fontWeight = '900';
    newdiv.style.marginLeft = bannerLeft+"px";
    bannerDisplay = true;
    switch (display) {
      case "fixed":
        newdiv.className = "SQJSbanner-fixed";
        newdiv.style.top = (((35 +62) * (this.bannerIndex-1))) + "px";
        break;
      case "absolute":
        newdiv.className = "SQJSbanner-absolute";
        newdiv.style.top = (((35 +62) * (this.bannerIndex-1))) + "px";
        break;
      case "relative":
        newdiv.className = "SQJSbanner-relative";
        break;
      case "none":
        bannerDisplay = false;
        break;
    }  
    if (window.innerWidth < minScreenWidth) {
      bannerDisplay = false;
    }
    if (!bannerDisplay) {
      newdiv.style.display = "none";
    }  
    newdiv.innerHTML = banner;
    //D.body.appendChild(newdiv);
    D.write(newdiv.outerHTML);

    return "SQJSBANNER"+this.bannerIndex;
  }

  function mycloseBanner(tthis) {
    tthis.parentNode.style.display = "none";
  }
  // --- Banner

  /**
   * 
   * Footer
   */
  
  /**
   * createFooter
   * 
   * Create the tag DIV for the footer
   * 
   * Context:
   * - Call it in the body of your webpage
   * 
   * @param {string} html, the html to insert as footer 
   * @param {string} BG, the background of the footer
   * @param {string} align, the banner horizontal alignment [left|middle|right]
   * @param {string} display, the banner display [fixed|relative|none]
   * @returns {string}  the id of the footer DIV element 
   * 
   * This function is part of SqueeJS.
   */
  function mycreateFooter(html, BG, align, display) {
    htollerance = 12; 
    htollerance = 12; 
    footerContHeight = 35;
    footerHeight = 32;
    footerFloat = "";
    
    this.footerHTML = html;
    this.BG = BG;
    
    var D = document;
    w = gfSQJZDocWidth();
    h = window.innerHeight;
    footerDisplay = true;
    footerContClassName = "";
    footerClassName = "";
    switch (display) {
      case "fixed":
        footerContClassName = "SQJSfooterCont";
        footerClassName = "SQJSfooter";
        break;
      case "relative":
        footerContClassName = "SQJSfooterCont";
        footerClassName = "SQJSfooter";
        break;
      case "none":
        footerContClassName = "SQJSfooterCont";
        footerClassName = "SQJSfooter";
        footerDisplay = false;
        break;
      default:
        display="relative";
        footerContClassName = "SQJSfooterCont";
        footerClassName = "SQJSfooter";
        break;        
    }  

    footer = "";
    footer += "<div class='"+footerContClassName+"'>&nbsp;</div>";
    footer += "<div class='"+footerClassName+"'>"+html+"</div>	";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSfooter";
    newdiv.className = "footer";
    //newdiv.style.textAlign = 'left';
    newdiv.innerHTML = footer;
    D.body.appendChild(newdiv);
    
    document.getElementsByClassName(footerClassName)[0].style.background = BG;
    
    switch (align) {
      case "middle":
        footerLeft = parseInt((w - document.getElementsByClassName(footerClassName)[0].getBoundingClientRect().width) / 2);
        break;
      case "left":
        footerLeft = 0;
        footerFloat = "left";
        break;
      case "right":
        footerLeft = parseInt(w - document.getElementsByClassName(footerClassName)[0].getBoundingClientRect().width);
        footerFloat = "right";
        break;
      default:  
        align="left";
        footerLeft = 0;
        footerFloat = "left";
        break;
    }
    document.getElementsByClassName(footerClassName)[0].style.float = footerFloat;
    if (display === "relative") {
      //document.getElementsByClassName(footerClassName)[0].style.top = "-" + footerContHeight + "px";    
    } else if (display === "fixed") {
      document.getElementsByClassName("footer")[0].style.marginLeft = (footerLeft-wtollerance)+"px";
      document.getElementsByClassName("footer")[0].style.position = "fixed";
      document.getElementsByClassName("footer")[0].style.top = ""+parseInt(h - footerContHeight - htollerance) + "px";
      if (align === "right") {
        //document.getElementsByClassName("footer")[0].style.textAlign = "right";
      } else if (align === "middle") {
        //document.getElementsByClassName(footerClassName)[0].style.width = "800px";
        document.getElementsByClassName("footer")[0].style.textAlign = "center";
      }
    } else {
      newdiv.style.display = "none";
    }  
    return newdiv.id;
  }  
  // --- Footer

  /**
   * 
   * AppMenu
   */
  
  /**
   * myappmenuPopUp
   * 
   * Display/hide the appmenu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myappmenuPopUp() {
    if (!this.appmenuVisible) {
      document.getElementById("SQJSappMenu").style.display = "inline";
      document.getElementById("SQJSappMenu").style.zIndex = "99998";
      //document.getElementById(this.appmenuContentContId).style.zIndex = "99997";
      gfSQJZsetCSSById(this.appmenuContentContId, "zIndex", "99997");
      //document.getElementById(this.appmenuContentContId ).style.opacity = "0.3";
      gfSQJZsetCSSById(this.appmenuContentContId, "opacity", "0.3");
    } else {
      document.getElementById("SQJSappMenu").style.display = "none";
      document.getElementById("SQJSappMenu").style.zIndex = "99992";  
      //document.getElementById(this.appmenuContentContId).style.zIndex = "99993";
      gfSQJZsetCSSById(this.appmenuContentContId, "zIndex", "99993");
      //document.getElementById(this.appmenuContentContId).style.opacity = "1.0";
      gfSQJZsetCSSById(this.appmenuContentContId, "opacity", "1.0");
    }
    this.appmenuVisible=!this.appmenuVisible;
  } 
  
  /**
   * myappmenuHide
   * 
   * Hide the appmenu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myappmenuHide() {
    document.getElementById("SQJSappMenu").style.display = "none";
    this.appmenuVisible=false;
    //document.getElementById(this.appmenuContentContId).style.opacity = "1.0";
    gfSQJZsetCSSById(this.appmenuContentContId, "opacity", "1.0");
  } 

  /**
   * myappmenuCheckFlagIco
   * 
   * Check to true the menu icon flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myappmenuCheckFlagIco() {
    this.appmenuOnIco = true;
  }  

  /**
   * myappmenuUnCheckFlagIco
   * 
   * Check to false the menu icon flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myappmenuUnCheckFlagIco() {
    this.appmenuOnIco = false;
  }  
  
  /**
   * myappmenuBodyOnClick
   * 
   * Body click event function: if open, hide the menu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myappmenuBodyOnClick() {
		if (!this.appmenuOnIco) {
		  this.appmenuHide();
		}
	}	
  
  /**
   * mycreateAppMenu
   * 
   * Create the tag DIV of menu icon and app menu
   * 
   * Context:
   * - Call it in the body of your webpage 
   * 
   * @param {string} icoURI, the URI of the menu icon
   * @param {string} menuURL, the URL of the menu web page
   * @param {string} contentContId, the container of the body content (the menu will disable it)
   * @param {string} top, the y coord of the menu position 
   * @param {string} left, the x coord of the menu position 
   * @param {string} width, the width of the menu 
   * @param {string} height, the height of the menu
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mycreateAppMenu(icoURI, menuURL, contentContId, top, left, width, height) {
    
    if (typeof jQuery === 'undefined') {
      throw new Error('This SqueeJS\'s function requires jQuery');
    }
    
    var D = document;
    //w = gfSQJZDocWidth();
    //h = gfSQJZDocHeight();
    this.appmenuContentContId = contentContId

    menuico = "";
    menuico = "<img src='"+icoURI+"' style='width:48px;height:48px;' alt='app menu'>";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSappMenuIco";
    newdiv.style.width = "48px";
    newdiv.style.height = "48px";
    newdiv.innerHTML = menuico;
    //D.body.appendChild(newdiv);
    D.write(newdiv.outerHTML);

    //$("#SQJSappMenuIco").on("click",function(){SQJS.appmenuPopUp();});
    //$("#SQJSappMenuIco").on("mouseover",function(){SQJS.appmenuCheckFlagIco();});
    //$("#SQJSappMenuIco").on("mouseout",function(){SQJS.appmenuUnCheckFlagIco();});

    document.getElementById("SQJSappMenuIco").addEventListener("click", function() {
      SQJS.appmenuPopUp();
    });    
    document.getElementById("SQJSappMenuIco").addEventListener("mouseover", function() {
      SQJS.appmenuCheckFlagIco();
    });
    document.getElementById("SQJSappMenuIco").addEventListener("mouseout", function() {
      SQJS.appmenuUnCheckFlagIco();
    });    
    
    menu = "";
    menu += "<!-- Here goes the content of the AppMenu -->";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSappMenu";
    newdiv.style.top = top+"px";
    newdiv.style.left = left+"px";
    newdiv.style.width = width+"px";
    newdiv.style.height = height+"px";
    newdiv.innerHTML = menu;
    D.body.appendChild(newdiv);
    //D.write(newdiv.outerHTML);

    //$("#SQJSappMenu").on("mouseover",function(){SQJS.appmenuCheckFlagIco();});
    //$("#SQJSappMenu").on("mouseout",function(){SQJS.appmenuUnCheckFlagIco();});

    document.getElementById("SQJSappMenu").addEventListener("mouseover", function() {
      SQJS.appmenuCheckFlagIco();
    });
    document.getElementById("SQJSappMenu").addEventListener("mouseout", function() {
      SQJS.appmenuUnCheckFlagIco();
    });

    //$("#SQJSappMenu").load(menuURL+"?rrnd=" + gfSQJZrnd(50000, 99999));
    
    gfSQJZLoad("SQJSappMenu", menuURL+"?rrnd=" + gfSQJZrnd(50000, 99999));
    
    //$(document.body).on("click", function() {SQJS.appmenuBodyOnClick();});
    
    document.body.addEventListener("click", function() {
      SQJS.appmenuBodyOnClick();
    });
	}	
  // --- AppMenu
  
  /**
   * 
   * GeoLocation
   */
  
  /**
   * myretrieveGeoLocation
   * 
   * Retreive the geolocation (country name)
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myretrieveGeoLocation() {
    if (!this.geoLocation || this.geoLocation=="") {
      try {
        var xhttp = new XMLHttpRequest();
        var xmluri = SQJS_GEOURL;
        //alert(xmluri);
        xhttp.open("GET", xmluri, false);  
        xhttp.send();
        this.geoLocation = xhttp.responseText;
      } catch(e) {
        throw new Error("CORS error: check the resource availability and Access-Control-Allow-Origin of your site.");
      }          
    }
  }
  
  /**
   * myhideElByGeoLocation
   * 
   * Hide the given web page Element for the specified geolocation
   * 
   * Context:
   * - Call it in the body of your webpage 
   * 
   * @param {string} id, the id of the element to hide 
   * @param {string} geoloc, the geolocation (country name) to hide the el for
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myhideElByGeoLocation(id, geoloc) {
    this.retrieveGeoLocation();
    //alert("debug#2"+this.geoLocation);
    if (this.geoLocation) {
      if (geoloc.toLowerCase() === this.geoLocation.toLowerCase()) {
        //document.getElementById(id).style.display="none";
        gfSQJZsetCSSById(id, "display", "none");
      }
    }  
  }
  
  /**
   * myshowElByGeoLocation
   * 
   * Show the given web page Element for the specified geolocation
   * 
   * Context:
   * - Call it in the body of your webpage 
   * 
   * @param {string} id, the id of the element to show
   * @param {string} geoloc, the geolocation (country name) to show the el for
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myshowElByGeoLocation(id, geoloc) {
    this.retrieveGeoLocation();
    //alert("debug#3"+this.geoLocation);
    if (this.geoLocation) {
      if (geoloc.toLowerCase() === this.geoLocation.toLowerCase()) {
        //document.getElementById(id).style.display="inline";
        gfSQJZsetCSSById(id, "display", "inline");
      }
    } 
  }
  // --- GeoLocation
  
  /**
   * 
   * UserTranslation
   */
  
  /**
   * myusertransPopUp
   * 
   * Display/hide the user trans menu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myusertransPopUp() {
    if (!this.usertransVisible) {
      document.getElementById("SQJSuserTransMenu").style.display = "inline";
      document.getElementById("SQJSuserTransMenu").style.zIndex = "99998";
      document.getElementById(this.usertransContentContId).style.zIndex = "99997";
      gfSQJZsetCSSById(this.usertransContentContId, "zIndex", "99997");
      //document.getElementById(this.usertransContentContId ).style.opacity = "0.3";
      gfSQJZsetCSSById(this.usertransContentContId, "opacity", "0.3");
    } else {
      document.getElementById("SQJSuserTransMenu").style.display = "none";
      document.getElementById("SQJSuserTransMenu").style.zIndex = "99992";  
      //document.getElementById(this.usertransContentContId).style.zIndex = "99993";
      gfSQJZsetCSSById(this.usertransContentContId, "zIndex", "99993");
      //document.getElementById(this.usertransContentContId).style.opacity = "1.0";
      gfSQJZsetCSSById(this.usertransContentContId, "opacity", "1.0");
    }
    this.usertransVisible=!this.usertransVisible;
  } 
  
  /**
   * myusertransHide
   * 
   * Hide the client trans menu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myusertransHide() {
    //document.getElementById("SQJSuserTransMenu").style.display = "none";
    gfSQJZsetCSSById("SQJSuserTransMenu", "display", "none");
    this.usertransVisible=false;
    //document.getElementById(this.usertransContentContId).style.opacity = "1.0";
    gfSQJZsetCSSById(this.usertransContentContId, "opacity", "1.0");
  } 

  /**
   * myusertransCheckFlagIco
   * 
   * Check to true the menu icon flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myusertransCheckFlagIco() {
    this.usertransOnIco = true;
  }  

  /**
   * myusertransUnCheckFlagIco
   * 
   * Check to false the menu icon flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myusertransUnCheckFlagIco() {
    this.usertransOnIco = false;
  }  
  
  /**
   * myusertransBodyOnClick
   * 
   * Body click event function: if open, hide the menu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function myusertransBodyOnClick() {
		if (!this.usertransOnIco) {
		  this.usertransHide();
		}
	}	
  
  /**
   * mygetTranslitarates
   * 
   * Get the transliterates to use in the translation
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mygetTranslitarates() {
    v=document.getElementById("SQJSuserTransTB").value.trim();
    if (v!=="") {
		  if (v.substr(0,4).toLowerCase() === "http") {
		    transURL = v;
        try {
          var xhttp = new XMLHttpRequest();
          var xmluri = transURL;
          //alert(xmluri);
          xhttp.open("GET", xmluri, false);  
          xhttp.send();
          xml = xhttp.responseText;
        } catch(e) {
          throw new Error("404 or CORS error: check the resource availability and Access-Control-Allow-Origin of your site.");
        }    
		  } else {
		    xml = v;
		  }
      //cleaning
      xml = xml.trim("\n");
      xml = xml.trim();
      xml = xml.trim("\n");
      xml = xml.trim();
		  // parsing text
		  tl = xml.split("\n");
		  it=0;
		  for (t of tl) {
		    curt = t.split("|||");
        if (curt[0] && curt[0]!=="") {
          this.tranSource[it] = curt[0]; 
		      this.tranDest[it] = curt[1];        
        }  
		    it++;
		  }
		}  
  }
  
  /**
   * mytranslate
   * 
   * Make the client translation of the current web page
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mytranslate() {
    this.getTranslitarates();
		it=0;
		for (ts of this.tranSource) {
		  nl = document.getElementsByTagName("H1");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}
		  nl = document.getElementsByTagName("H2");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}
		  nl = document.getElementsByTagName("H3");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}
      nl = document.getElementsByTagName("A");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}
      nl = document.getElementsByTagName("DIV");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}
		  nl = document.getElementsByTagName("LABEL");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}			
		  nl = document.getElementsByTagName("SPAN");
			for (n of nl) {
				n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
			}			
			nl = document.getElementsByTagName("INPUT");
			for (n of nl) {
				n.value = n.value.replace(ts, this.tranDest[it]);
				n.setAttribute("placeholder", n.getAttribute("placeholder").replace(ts, this.tranDest[it]));
			}
			nl = document.getElementsByTagName("TEXTAREA");
			for (n of nl) {
        if (n.id !== "SQJSuserTransTB") {
			    n.innerHTML = n.innerHTML.replace(ts, this.tranDest[it]);
        }
			}
			it++;
		}	
  } 

  /**
   * mycreateUserTrans
   * 
   * Create the tag DIV of user trans icon and user trans menu
   * 
   * Context:
   * - Call it in the body of your webpage 
   * 
   * @param {string} icoURI, the URI of the menu icon
   * @param {string} contentContId, the container of the body content (the menu will disable it)
   * @param {string} top, the y coord of the menu position 
   * @param {string} left, the x coord of the menu position 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mycreateUserTrans(icoURI, contentContId, top, left) {
    
    //if (typeof jQuery === 'undefined') {
    //  throw new Error('This SqueeJS\'s function requires jQuery');
    //}
    
    var D = document;
    //w = gfSQJZDocWidth();
    //h = gfSQJZDocHeight();
    this.usertransContentContId = contentContId;

    menuico = "";
    menuico = "<img src='"+icoURI+"' style='width:48px;height:48px;' alt='user translation'>";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSuserTransIco";
    newdiv.style.width = "48px";
    newdiv.style.height = "48px";
    newdiv.innerHTML = menuico;
    //D.body.appendChild(newdiv);
    D.write(newdiv.outerHTML);

    //document.getElementById("SQJSuserTransIco").onclick = function(){SQJS.usertransPopUp();};
    //document.getElementById("SQJSuserTransIco").onmouseover = function(){SQJS.usertransCheckFlagIco();};
    //document.getElementById("SQJSuserTransIco").onmouseout = function(){SQJS.usertransUnCheckFlagIco();};

    document.getElementById("SQJSuserTransIco").addEventListener("click", function() {
      SQJS.usertransPopUp();
    });    
    document.getElementById("SQJSuserTransIco").addEventListener("mouseover", function() {
      SQJS.usertransCheckFlagIco();
    });
    document.getElementById("SQJSuserTransIco").addEventListener("mouseout", function() {
      SQJS.usertransUnCheckFlagIco();
    });
        
    menu = "";
    menu += "<span style='font-size:10px;'>text or link, use ||| to separate source from translation:</span>";
    menu += "<textarea id='SQJSuserTransTB'></textarea><br>";
    menu += "<button id='SQJSuserTransBUT' onclick='SQJS.translate();'><img src='//squeejs.com/res/trans.png' style='height:70px'></button><br>";
    menu += "<br>";
    
    newdiv=D.createElement("div");
    newdiv.id = "SQJSuserTransMenu";
    newdiv.style.top = top+"px";
    newdiv.style.left = left+"px";
    newdiv.style.width = "380px";
    newdiv.style.height = "515px";
    newdiv.innerHTML = menu;
    D.body.appendChild(newdiv);
    //D.write(newdiv.outerHTML);

    //document.getElementById("SQJSuserTransMenu").onmouseover = function(){SQJS.usertransCheckFlagIco();};
    //document.getElementById("SQJSuserTransMenu").onmouseout = function(){SQJS.usertransUnCheckFlagIco();};
    
    document.getElementById("SQJSuserTransMenu").addEventListener("mouseover", function() {
      SQJS.usertransCheckFlagIco();
    });
    document.getElementById("SQJSuserTransMenu").addEventListener("mouseout", function() {
      SQJS.usertransUnCheckFlagIco();
    });   
    
    //document.body.onclick = function(){SQJS.usertransBodyOnClick();};
    
    document.body.addEventListener("click", function() {
      SQJS.usertransBodyOnClick();
    });  
    
	}	
  // --- UserTranslation
  
  /**
   * 
   * Sidebar
   */
  
  /**
   * mysidebarCheckFlag
   * 
   * Check to true the sideabr flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mysidebarCheckFlag() {
    this.sidebarOnIT = true;
  }  

  /**
   * mysidebarUnCheckFlag
   * 
   * Check to false the sidebar flag
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mysidebarUnCheckFlag() {
    this.sidebarOnIT = false;
  }  
  
  /**
   * myusertransBodyOnClick
   * 
   * Body click event function: if open, hide the menu
   * 
   * Context:
   * - this function is for internal use
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mysidebarBodyOnClick() {
		if (!this.sidebarOnIT) {
		  this.sidebarClose();
		}
	}	
  
  /**
   * mysidebarShow
   * 
   * Show the sidebar
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mysidebarShow() {
    if (!this.sidebarVisible) {
      //if (document.getElementById(this.sidebarContentContId)) {
      //  document.getElementById(this.sidebarContentContId).style.width = "100%";
      //}
      gfSQJZsetCSSById(this.sidebarContentContId, "width", "100%");
      //$("#SQJSsidebar").show("slow");
      document.getElementById("SQJSsidebar").style.display = "inline";
    }  
    this.sidebarVisible = true; 
  }

  /**
   * mysidebarClose
   * 
   * Close the sidebar
   * 
   * Context:
   * - this function is for internal use 
   * 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mysidebarClose() {
    document.getElementById("SQJSsidebar").style.display = "none";
    //if (document.getElementById(this.sidebarContentContId)) {
    //  document.getElementById(this.sidebarContentContId).style.width = "100%";
    //}
    gfSQJZsetCSSById(this.sidebarContentContId, "width", "100%");
    this.sidebarVisible = false; 
  }
  
  /**
   * mycreateSidebar
   * 
   * Create the tag DIV of sidebar
   * 
   * Context:
   * - Call it in the body of your webpage 
   * 
   * @param {string} sidebarURL, the URI of the of the sidebar
   * @param {string} contentContId, the container of the body content
   * @param {string} width, the width of the sidebar 
   * @param {string} height, the height of the sidebar 
   * @returns {void}
   * 
   * This function is part of SqueeJS.
   */
  function mycreateSidebar(sidebarURL, contentContId, width, height) {
    
    if (typeof jQuery === 'undefined') {
      throw new Error('This SqueeJS\'s function requires jQuery');
    }
    
    var D = document;
    //w = gfSQJZDocWidth();
    //h = gfSQJZDocHeight();
    this.sidebarContentContId = contentContId;

    barcall = "";
    barcall = "&nbsp;";

    newdiv=D.createElement("div");
    newdiv.id = "SQJSsidebarCall";
    newdiv.innerHTML = barcall;
    D.body.appendChild(newdiv);
    //D.write(newdiv.outerHTML);

    //document.getElementById("SQJSsidebarCall").onmouseover = function(){SQJS.sidebarShow();};
    document.getElementById("SQJSsidebarCall").addEventListener("mouseover", function() {
      SQJS.sidebarShow();
    });
    document.getElementById("SQJSsidebarCall").addEventListener("touchstart", function() {
      SQJS.sidebarShow();
    });
        
    sidebar = "";
    sidebar += "<div style='text-align:right;'>";
    sidebar += "<button type='button' class='SQJSclose-button'  style='position:relative; left:-10px' onclick='SQJS.sidebarClose();'>";
    sidebar += "<span style='font-size:45px; font-weight:900;'>&times;</span>";
    sidebar += "</button>";
    sidebar += "</div>";
    sidebar += "<div id='SQJSsidebarContent'>";
    sidebar += "</div>";
    
    newdiv=D.createElement("div");
    newdiv.id = "SQJSsidebar";
    newdiv.style.width = width + "px";
    newdiv.style.height = height + "px";
    newdiv.innerHTML = sidebar;
    D.body.appendChild(newdiv);
    //D.write(newdiv.outerHTML);

    document.getElementById("SQJSsidebar").addEventListener("mouseover", function() {
      SQJS.sidebarCheckFlag();
    });
    document.getElementById("SQJSsidebar").addEventListener("mouseout", function() {
      SQJS.sidebarUnCheckFlag();
    });
    document.getElementById("SQJSsidebar").addEventListener("touchstart", function() {
      SQJS.sidebarCheckFlag();
    });
    document.getElementById("SQJSsidebar").addEventListener("touchend", function() {
      SQJS.sidebarUnCheckFlag();
    });
    
    //$("#SQJSsidebarContent").load(sidebarURL+"?rrnd="+ gfSQJZrnd(50000, 99999));
    gfSQJZLoad("SQJSsidebarContent", sidebarURL+"?rrnd="+ gfSQJZrnd(50000, 99999))
   
    document.body.addEventListener("click", function() {
      SQJS.sidebarBodyOnClick();
    });

	}	
  // --- Sidebar
  
}
window.SQJS = window.SqueeJS = new SqueeJS();

window.addEventListener("load", function() {
  nl = document.getElementsByTagName("DIV");
  i=0;
  for (n of nl) {
    n.setAttribute("highlightIndex", i);
    i++;
  }
  nl = document.getElementsByTagName("INPUT");
  for (n of nl) {
    n.setAttribute("highlightIndex", i);
    i++;
  }
  nl = document.getElementsByTagName("TEXTAREA");
  for (n of nl) {
    n.setAttribute("highlightIndex", i);
    i++;
  }
},true);


