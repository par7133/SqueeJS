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
 * @version 1.0.5
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2016, 2024, 5 Mode
 * @license https://opensource.org/licenses/MIT 
 */

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
 * 
 * Highlight
 * 
 */

var gSQJZHighlightOriTop=[];
var gSQJZHighlightOriLeft=[];
var gSQJZHighlightOriHeight=[];
var gSQJZHighlightOriWidth=[];
var gSQJZHighlightOriFontSize=[];
var gSQJZHighlightOriBorder=[];
var gSQJZHighlightOriPosition=[];

/**
 * highlightDiv
 * 
 * highlight the current DIV element
 * 
 * Context:
 * - call this function in the onmouseenter event 
 * 
 * @param {Element} tthis the current DIV element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function highlightDiv(tthis) {
  if (tthis.tagName !== "DIV") {
    return;    
  }
  // --- saving original data
  myR = tthis.getBoundingClientRect();
  gSQJZHighlightOriTop[tthis.tabIndex] = parseInt(myR.top);
  gSQJZHighlightOriHeight[tthis.tabIndex] = parseInt(myR.height);
  gSQJZHighlightOriWidth[tthis.tabIndex] = parseInt(myR.width);
  gSQJZHighlightOriFontSize[tthis.tabIndex] = tthis.style.fontSize;
  gSQJZHighlightOriBorder[tthis.tabIndex] = tthis.style.border;
  gSQJZHighlightOriPosition[tthis.tabIndex] = tthis.style.position;
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
 * unlight the current DIV element
 * 
 * Context:
 * - call this function in the onmouseleave event 
 * 
 * @param {Element} tthis the current DIV element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function unlightDiv(tthis) {
  if (tthis.tagName !== "DIV") {
    return;    
  }
  // --- restoring original data  
  if (gSQJZHighlightOriTop[tthis.tabIndex]===null) {
    return;
  }  
  tthis.style.fontSize = gSQJZHighlightOriFontSize[tthis.tabIndex];
  tthis.style.border = gSQJZHighlightOriBorder[tthis.tabIndex];
  tthis.style.width = (gSQJZHighlightOriWidth[tthis.tabIndex]-6)+"px";
  tthis.style.height = (gSQJZHighlightOriHeight[tthis.tabIndex]-6)+"px";
  tthis.style.position = gSQJZHighlightOriPosition[tthis.tabIndex];
  // ---
  
  //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
}

/**
 * highlightInput
 * 
 * highlight the current INPUT element
 * 
 * Context:
 * - call this function in the onmouseenter event 
 * 
 * @param {Element} tthis the current INPUT element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function highlightInput(tthis) {
  if (tthis.tagName !== "INPUT") {
    return;    
  }
  // --- saving original data
  myR = tthis.getBoundingClientRect();
  gSQJZHighlightOriTop[tthis.tabIndex] = parseInt(myR.top);
  gSQJZHighlightOriHeight[tthis.tabIndex] = parseInt(myR.height);
  gSQJZHighlightOriWidth[tthis.tabIndex] = parseInt(myR.width);
  gSQJZHighlightOriFontSize[tthis.tabIndex] = tthis.style.fontSize;
  gSQJZHighlightOriBorder[tthis.tabIndex] = tthis.style.border;
  gSQJZHighlightOriPosition[tthis.tabIndex] = tthis.style.position;
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
 * unlight the current INPUT element
 * 
 * Context:
 * - call this function in the onmouseleave event 
 * 
 * @param {Element} tthis the current INPUT element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function unlightInput(tthis) {
  if (tthis.tagName !== "INPUT") {
    return;    
  }
  // --- restoring original data  
  if (gSQJZHighlightOriTop[tthis.tabIndex]===null) {
    return;
  }  
  tthis.style.fontSize = gSQJZHighlightOriFontSize[tthis.tabIndex];
  tthis.style.border = gSQJZHighlightOriBorder[tthis.tabIndex];
  tthis.style.width = (gSQJZHighlightOriWidth[tthis.tabIndex]-6)+"px";
  tthis.style.height = (gSQJZHighlightOriHeight[tthis.tabIndex]-6)+"px";
  tthis.style.position = gSQJZHighlightOriPosition[tthis.tabIndex];
  // ---
  
  //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
}

/**
 * highlightTextArea
 * 
 * highlight the current TEXTAREA element
 * 
 * Context:
 * - call this function in the onmouseenter event 
 * 
 * @param {Element} tthis the current TEXTAREA element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function highlightTextArea(tthis) {
  if (tthis.tagName !== "TEXTAREA") {
    return;    
  }
  // --- saving original data
  myR = tthis.getBoundingClientRect();
  gSQJZHighlightOriTop[tthis.tabIndex] = parseInt(myR.top);
  gSQJZHighlightOriHeight[tthis.tabIndex] = parseInt(myR.height);
  gSQJZHighlightOriWidth[tthis.tabIndex] = parseInt(myR.width);
  gSQJZHighlightOriFontSize[tthis.tabIndex] = tthis.style.fontSize;
  gSQJZHighlightOriBorder[tthis.tabIndex] = tthis.style.border;
  gSQJZHighlightOriPosition[tthis.tabIndex] = tthis.style.position;
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
 * highlight the current TEXTAREA element
 * 
 * Context:
 * - call this function in the onmouseleave event 
 * 
 * @param {Element} tthis the current TEXTAREA element (this on the function call)
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function unlightTextArea(tthis) {
  if (tthis.tagName !== "TEXTAREA") {
    return;    
  }
  // --- restoring original data  
  if (gSQJZHighlightOriTop[tthis.tabIndex]===null) {
    return;
  }  
  tthis.style.fontSize = gSQJZHighlightOriFontSize[tthis.tabIndex];
  tthis.style.border = gSQJZHighlightOriBorder[tthis.tabIndex];
  tthis.style.width = (gSQJZHighlightOriWidth[tthis.tabIndex]-6)+"px";
  tthis.style.height = (gSQJZHighlightOriHeight[tthis.tabIndex]-6)+"px";
  tthis.style.position = gSQJZHighlightOriPosition[tthis.tabIndex];
  // ---
  
  //document.getElementById("debug1").value=tthis.id+"-30-"+tthis.tabIndex+"Leave";
}

// --- End Highlight

/**
 * 
 * Splash Screen
 */

var gSQJSSplashMainContainerId;
var gSQJSSplashMainContainerOriHeight;
var gSQJSSplashTitle;
var gSQJSSplashLogoURI;
var gSQJSSplashBG;
var SQJS_SPLASH_TIMEOUT = 6000;

/**
 * createSplash
 * 
 * create the tag DIV for the splash screen
 * 
 * Context:
 * - this function is for internal use 
 * 
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function createSplash() {
  var D = document;
  w = gfSQJZDocWidth();
  splashLeft = parseInt((w - 265) / 2);
  h = gfSQJZDocHeight();
  title = gSQJSSplashTitle;
  logoURI = gSQJSSplashLogoURI;
  BG = gSQJSSplashBG;

  splash = "";
  splash += "<br><br><br><br><br><br>";
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
function SPALSHstartApp() {

  //Splash
  document.getElementById("SQJSsplash").style.display = "none";

  //Main Container
  document.getElementById(gSQJSSplashMainContainerId).style.height = gSQJSSplashMainContainerOriHeight;
  document.getElementById(gSQJSSplashMainContainerId).style.display = "inline";
  
  window.scrollTo(0,0);

}			

/**
 * _SPALSHstartApp
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
function _SPALSHstartApp(time) {

  // Fisnished the Intro with the Splash we load the app..
  setTimeout("SPALSHstartApp()", time);

}

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
function _initAppWithSplash(mainContainerId, title, logoURI, BG, timeout) {

  gSQJSSplashMainContainerId = mainContainerId;
  gSQJSSplashTitle = title;
  gSQJSSplashLogoURI = logoURI;
  gSQJSSplashBG = BG;
  if (timeout!==null) {
    SQJS_SPLASH_TIMEOUT = timeout;
  }  

  //Main Container
  document.getElementById(gSQJSSplashMainContainerId).style.display = "none";

  //Splash
  createSplash();
  document.getElementById("SQJSsplash").style.display = "inline";

  //window.scrollTo(1,1);
  document.body.style.height = parseInt(window.innerHeight) + "px";
  gSQJSSplashMainContainerOriHeight = document.getElementById(gSQJSSplashMainContainerId).style.height;
  document.getElementById(gSQJSSplashMainContainerId).style.height = parseInt(window.innerHeight) + "px";

  _SPALSHstartApp(SQJS_SPLASH_TIMEOUT);

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
function _initAppWithoutSplash(mainContainerId) {

  gSQJSSplashMainContainerId = mainContainerId;

  //Main Container
  document.getElementById(gSQJSSplashMainContainerId).style.display = "inline";

  //Splash
  //document.getElementById("SQJSsplash").style.display = "none";

  _SPALSHstartApp(1);

}
// --- End Splash Screen

/**
 * 
 * Work in Progress
 */
var gSQJSWIPMainContainerId;
var gSQJSWIPMainContainerOriHeight;
var gSQJSWIPBG;

/**
 * createWIP
 * 
 * create the tag DIV for the Work In Progress Banner
 * 
 * Context:
 * - this function is for internal use 
 * 
 * @returns {void}
 * 
 * This function is part of SqueeJS.
 */
function createWIP() {
  var D = document;
  w = gfSQJZDocWidth();
  wipLeft = parseInt((w - 450) / 2);
  h = gfSQJZDocHeight();
  bannerURI = "/res/work-in-progress.png";
  BG = gSQJSWIPBG;

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
function WIPstartApp() {

  //Splash
  if (document.getElementById("SQJSWIP")) {
    document.getElementById("SQJSWIP").style.display = "none";
  }  

  //Main Container
  document.getElementById(gSQJSWIPMainContainerId).style.height = gSQJSWIPMainContainerOriHeight;
  document.getElementById(gSQJSWIPMainContainerId).style.display = "inline";
  
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
function _WIPstartApp(time) {

  // Fisnished the Intro with the Splash we load the app..
  setTimeout("WIPstartApp()", time);

}

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
function _initAppWithWIP(mainContainerId, BG) {

  gSQJSWIPMainContainerId = mainContainerId;
  gSQJSWIPBG = BG;

  //Main Container
  document.getElementById(gSQJSWIPMainContainerId).style.display = "none";

  //Banner
  createWIP();
  document.getElementById("SQJSWIP").style.display = "inline";

  //window.scrollTo(1,1);
  document.body.style.height = parseInt(window.innerHeight) + "px";
  gSQJSWIPMainContainerOriHeight = document.getElementById(gSQJSWIPMainContainerId).style.height;
  document.getElementById(gSQJSWIPMainContainerId).style.height = parseInt(window.innerHeight) + "px";

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
function _initAppWithoutWIP(mainContainerId) {

  gSQJSWIPMainContainerId = mainContainerId;

  //Main Container
  document.getElementById(gSQJSWIPMainContainerId).style.display = "inline";

  //Splash
  //document.getElementById("SQJSWIP").style.display = "none";

  _WIPstartApp(1);

}
// --- Work in Progress

/**
 * 
 * Banner
 */
var gSQJSBannerIndex = 0;
var gSQJSBannerIMG = [];
var gSQJSBannerURL = [];

/**
 * createBanner
 * 
 * create a new Banner
 * 
 * Context:
 * - Call in the body of your webpage 
 * 
 * @param {string} img, the banner img
 * @param {string} url, the banner target url
 * @param {string} align, the banner horizontal alignment [left|middle|right]
 * @param {string} display, the banner display [fixed|absolute|relative|none]
 * @param {int} minScreenWidth, min screen width to display the banner
 * @returns {string} the id of the resulting banner
 * 
 * This function is part of SqueeJS.
 */
function createBanner(img, url, align, display, minScreenWidth) {
  gSQJSBannerIndex++;

  gSQJSBannerIMG[gSQJSBannerIndex] = img;
  gSQJSBannerURL[gSQJSBannerIndex] = url;
  
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
  bannerIMG = gSQJSBannerIMG[gSQJSBannerIndex];
  bannerURL = gSQJSBannerURL[gSQJSBannerIndex];

  banner = "";
  banner += "<button type='button' class='SQJSclose-button' onclick='_closeBanner(this);'>";
  banner += "<span style='font-weight:900;'>&times;</span>";
  banner += "</button>";  
  banner += "<a href='"+bannerURL+"' target='_blank'><img src='"+bannerIMG+"' style='width:471px;'></a>";

  newdiv=D.createElement("div");
  newdiv.id = "SQJSBANNER" + gSQJSBannerIndex;
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
      newdiv.style.top = (((35 +62) * (gSQJSBannerIndex-1))) + "px";
      break;
    case "absolute":
      newdiv.className = "SQJSbanner-absolute";
      newdiv.style.top = (((35 +62) * (gSQJSBannerIndex-1))) + "px";
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
  
  return "SQJSBANNER"+gSQJSBannerIndex;
}

function _closeBanner(tthis) {
  tthis.parentNode.style.display = "none";
}
// --- Banner

/**
 * 
 * Footer
 */

window.addEventListener("load", function() {
  nl = document.getElementsByTagName("*");
  i=0;
  for (n of nl) {
    n.tabIndex = i;
    i++;
  }
},true);