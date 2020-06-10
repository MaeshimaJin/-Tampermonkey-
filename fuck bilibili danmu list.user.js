// ==UserScript==
// @name         fuck bilibili danmu list
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fuck bilibili
// @author       金帅ABC
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==
window.onload = function(){
    var run = setInterval(function(){
        var a = document.getElementsByClassName("bui-collapse-arrow-text");
        if(a.length>0){
            document.getElementsByClassName("bui-collapse-arrow-text")[0].click();
            clearInterval(run);
        }
    },1000);
}
