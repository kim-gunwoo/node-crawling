const request = require("request-promise");
//const request = require("request");
const cheerio = require("cheerio");

// 네이버 주소 가져오기
const url = "https://www.naver.com";

request(url, async (error, response, body) => {
  const html = await request(url);
  console.log(html);

  const $ = cheerio.load(
    html,
    { decodeEntities: false } //한글 변환
  );
  console.log($(".blind"));

  //   const $ = cheerio.load(
  //     body,
  //     { decodeEntities: false } //한글 변환
  //   );

  //   console.log(body);
  //   console.log($(".board_area").find("table.mb15 tbody tr td"));
  //console.log($(".timesquare"));
});
