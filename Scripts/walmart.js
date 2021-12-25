const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.walmart.com/search?q=christmas%20cap";

request(url, cb);
function cb(err, response, html){
    if(err) console.error(err);
    else handleHtml(html);
}

function handleHtml(html){
    const $ = cheerio.load(html);
    let pricesArray = $('.b.f5.f4-l.black.mr1.lh-copy');
    console.log(pricesArray);
    // for(let i=0; i<pricesArray.length; i++) console.log($(pricesArray[i]).text());
}
