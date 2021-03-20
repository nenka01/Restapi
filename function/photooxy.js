const request = require("request");
const cheerio = require("cheerio");

const tema = [
  "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
  "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
  "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html"
]

async function pShadow(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema[0],
      headers: { 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pRomantic(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema[1],
      headers: { 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pSmoke(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema[2],
      headers: { 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

module.exports = {
  pShadow,
  pRomantic,
  pSmoke
};