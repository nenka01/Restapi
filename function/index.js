const axios = require("axios");
const ig = require("instatouch");
const cheerio = require("cheerio");
const request = require("request");
const sID = "38420191934%3A43Y602oEBoI9SJ%3A21";

const options = {
  count: 0,
  mediaType: "all",
  timeout: 0,
  session: "sessionid=" + sID
};

function artiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`
      )
      .then(({ data }) => {
        const c = cheerio.load(data);
        const cek = c("#body > font > i").text();
        const adaga = /Tidak ditemukan/g.test(cek) ? false : true;
        if (adaga) {
          const isi = c("#body")
            .text()
            .split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1]
            .replace(/\n\n\n\n\n\n\n\n\n/gi, "\n");
          const result = {
            result: isi.replace(/\n/gi, "").replace("\"                ", "")
          };
          resolve(result);
        } else {
          const result = {
            result: `Arti mimpi ${mimpi} tidak di temukan`
          };
          resolve(result);
        }
      })
      .catch(reject);
  });
}

function artiNama(nama) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
      )
      .then(({ data }) => {
        const c = cheerio.load(data);
        const isi = c("#body").text().split("Nama:")[0];
        const result = {
          result: isi.replace(/\n/gi, "").replace("ARTI NAMA", "").replace("                                ", "")
        };
        resolve(result);
      })
      .catch(reject);
  });
}

function whois(domain = 'caranya.my.id') {
  return new Promise((resolve, reject) => {
    var options = { 
      method: 'POST',
      url: 'https://www.hostinger.co.id/whois',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded'
      },
      form: { 
        domain: `${domain}`, 
        submit: 'search' 
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const result = JSON.parse(body);
      resolve({
        result: result["domain"]
      });
    });
  });
}

function igStalk(username = 'instagram') {
  return new Promise((resolve, reject) => {
    try {
      ig.getUserMeta(username, options)
        .then((data) => {
          resolve({
            data: {
              profile: data.graphql.user.profile_pic_url,
              profilehd: data.graphql.user.profile_pic_url_hd,
              fullname: data.graphql.user.full_name,
              private: data.graphql.user.is_private,
              verified: data.graphql.user.is_verified,
              bio: data.graphql.user.biography,
              follower: data.graphql.user.edge_followed_by.count,
              following: data.graphql.user.edge_follow.count,
              conneted_fb: data.graphql.user.connected_fb_page,
              videotimeline: data.graphql.user.edge_felix_video_timeline.count,
              timeline: data.graphql.user.edge_owner_to_timeline_media.count,
              savedmedia: data.graphql.user.edge_saved_media.count,
              collections: data.graphql.user.edge_media_collections.count
            }
          });
        })
        .catch((err) =>
          reject({
            message: "akun tidak di temukan"
          })
        );
    } catch (err) {
      reject(err);
    }
  });
}

function getApk(url) {
     return new Promise((resolve, reject) => {
          if (!/rexdlfile.com/g.test(url)) return resolve({ status: false, message: 'Not A Valid Download Url!' })
          axios.get(url)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const updated = $('li.dl-update > span:nth-child(2)').text()
                    const size = $('li.dl-size > span:nth-child(2)').text()
                    const version = $('li.dl-version > span:nth-child(2)').text()
                    let name = []
                    let dl_url = []
                    let link_download = []
                    let promiss = []
                    $('li.download > span').get().map((rest) => {
                         name.push($(rest).text())
                    })
                    $('div#dlbox > ul.dl > a').get().map((rest) => {
                         dl_url.push($(rest).attr('href'))
                    })
                    let download = []
                    for (let i = 0; i < name.length; i++) {
                         download.push({
                              name: name[i],
                              dl_url: dl_url[i]
                         })
                    }
                    for (let i = 0; i < dl_url.length; i++) {
                         promiss.push(
                              axios.get('https://tinyurl.com/api-create.php?url=' + dl_url[i])
                              .then(({ data }) => {
                                   link_download.push({ 
                                        title: name[i],
                                        url: data
                                   })
                              })
                         )
                    }
                    Promise.all(promiss).then(() => {
                         resolve({
                              title: url.split('=')[1].replace(/-/gi, ' '),
                              version: version,
                              size: size,
                              updated: updated,
                              download: link_download
                         })
                    })
               }).catch(reject)
     })
}

function searchApk(apkname) {
     return new Promise((resolve, reject) => {
          const apk = apkname
          const index = 'https://rexdl.com'
          axios.get(`${index}/?s=${apk}`)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let name = []
                    let url = []
                    let dl_url = []
                    let thumb = []
                    let desc = []
                    $('h2.post-title > a').get().map((rest) => {
                         name.push($(rest).text())
                    })
                    $('div > div.post-thumbnail > a').get().map((rest) => {
                         url.push($(rest).attr('href'))
                    })
                    $('div > div.post-thumbnail > a').get().map((rest) => {
                         dl_url.push('https://rexdlfile.com/index.php?id=' + $(rest).attr('href').split('/')[4].replace('.html', ''))
                    })
                    $('div > div.post-thumbnail > a > img').get().map((rest) => {
                         thumb.push($(rest).attr('data-src'))
                    })
                    $('div.entry.excerpt > p').get().map((rest) => {
                         desc.push($(rest).text())
                    })
                    let result = []
                    for (let i = 0; i < name.length; i++) {
                         result.push({
                              title: name[i],
                              thumb: thumb[i],
                              url: url[i],
                              url_download: dl_url[i],
                              desc: desc[i]
                         })
                    }
                    resolve(result)
               }).catch(reject)
     })
}

module.exports = {
  artiMimpi,
  artiNama,
  igStalk,
  searchApk,
  getApk,
  whois
};