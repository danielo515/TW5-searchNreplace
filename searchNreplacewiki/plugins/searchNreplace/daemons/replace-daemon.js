/*\
title: $:/danielo515/modules/startup/replace.js
type: application/javascript
module-type: startup
Search and replace text

Requires TW >= 5.1.4

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

// Export name and synchronous status
exports.name = "password";
exports.platforms = ["browser"];
exports.after = ["startup"];
exports.synchronous = true;

exports.startup = function() {
  $tw.rootWidget.addEventListener("tm-replace",function(event){
  console.log(JSON.stringify(event));
  var text=$tw.wiki.getTiddlerText(event.paramObject.source) || "",
      doGlobal = event.paramObject.global || "yes", // by default do global search and replace
      modifiers = ( doGlobal.toLowerCase() === "no" ? '' : 'g'),
      doRegex= event.paramObject.regex === "yes",
      regex = new RegExp(doRegex ? event.paramObject.search : $tw.utils.escapeRegExp(event.paramObject.search), modifiers),
      //Tiddler to store the result, if not provided use the source
      destination = event.paramObject.destination || event.paramObject.source;
      $tw.wiki.setText(destination,"text",null,text.replace(regex,event.paramObject.replace));

  });
};

})();