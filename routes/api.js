const ytdl = require('ytdl-core');
const express = require("express");
const router = express.Router();
const dir = process.cwd();

const {
  whois
} = require(dir + "/function/lainya");
const {
  igStalk,
  igDownload
} = require(dir + "/function/ig");
const {
  getApk,
  searchApk
} = require(dir + "/function/rexdl");
const {
  artiNama,
  artiMimpi,
  ramalJodoh
} = require(dir + "/function/primbon");
const {
  pShadow
} = require(dir + "/function/photooxy");

router.all("/", (req, res) => {
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.cookie('some_cross_domain_cookie', 'http://test.caranya.my.id', { domain: 'caranya.my.id', encode: String });
  res.sendfile(dir + "/public/index.html");
});

router.get("/primbon/artinama", (req, res) => {
  const nama = req.query.q;
  artiNama(nama)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/primbon/artimimpi", (req, res) => {
  const mimpi = req.query.q;
  artiMimpi(mimpi)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/primbon/jodoh", (req, res) => {
  const nama1 = req.query.nama1;
  const nama2 = req.query.nama2;
  ramalJodoh(nama1, nama2)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/ig/stalk", (req, res) => {
  const username = req.query.u || req.query.username || req.query.user || req.query.q;
  igStalk(username)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/ig/download", (req, res) => {
  const url = req.query.url || req.query.link;
  igDownload(url)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/whois", (req, res) => {
  const domain = req.query.q || req.query.domain;
  whois(domain)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/rexdl/search", (req, res) => {
  const apkname = req.query.q;
  searchApk(apkname)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/rexdl/get", (req, res) => {
  const url = req.query.url;
  getApk(url)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/photooxy/shadow", (req, res) => {
  const text1 = req.query.text1;
  pShadow(text1)
    .then((data) => {
      res.send(data)
    })
    .catch((error) => {
      res.send(error)
    });
});

router.use(function (req, res, next) {
  res
  .status(404)
  .set("Content-Type", "text/html")
  .sendfile(dir + "/public/404.html");
});

module.exports = router;