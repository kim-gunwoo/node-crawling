var rp = require("request-promise");
var cheerio = require("cheerio"); // Basically jQuery for node.js

var options = {
  uri: "http://www.google.com",
  transform: function (body) {
    return cheerio.load(
      body,
      { decodeEntities: false } //한글 변환
    );
  },
};

rp(options)
  .then(function ($) {
    const ele = $("#hplogo");
    console.log(ele[0].attribs);
    //var a = $(",hOoLGe");
    //console.log(a);
  })
  .catch(function (err) {
    console.log(err);
  });
