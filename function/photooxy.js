const request = require("request");
const cheerio = require("cheerio");

const base = "https://photooxy.com"
const tema = [
  "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html"
]

function pShadow(text1) {
  return new Promise((resolve, reject) => {
    try {
      const option = {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        url: base + tema[0],
        form: {
          'text_1' : text1,
          'login' : 'OK'
        }
      }

      request.post(option, (error, respon, body) => {
        const $ = cheerio.load(body);
        const res = $('div.thumbnail > img').attr('src');
        const result = {
          teks: text1,
          url: base + res
        }
        resolve(result)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  pShadow
};