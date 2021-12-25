const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.amazon.com/s?k=christmas+cap&ref=nb_sb_noss";

request(url, cb);
function cb(err, respone, html){
    if(err) console.error(err);
    else handleHtml(html);
}

function handleHtml(html){
    let $ = cheerio.load(html);
    console.log("line 14");
    let productsArray = $(".sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20");
    let pricesArray = $(".a-price>.a-offscreen");
    console.log($(pricesArray).text());
    let min_price, product;
    for(let i=0; i<productsArray.length; i++){
        let price = $(productsArray[i]).find(".a-size-base.a-link-normal.s-link-style.a-text-normal");
        console.log(price.text);
    }

}
