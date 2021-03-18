const express = require("express");
const router = express.Router();
const dir = process.cwd();

const {
  getApk,
  searchApk,
  artiNama,
  artiMimpi,
  igStalk,
  whois
} = require(dir + "/function");

router.all("/", (req, res) => {
  res.send("<iframe height='100%' width='100%' src='https://replit.com/@AgustD/api?lite=true' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals'></iframe>");
});

router.get("/artinama", (req, res) => {
  const nama = req.query.q;
  artiNama(nama)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/artimimpi", (req, res) => {
  const mimpi = req.query.q;
  artiMimpi(mimpi)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/igstalk", (req, res) => {
  const username = req.query.u || req.query.username || req.query.user || req.query.q;
  igStalk(username)
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

router.use(function (req, res, next) {
  res
  .status(404)
  .set("Content-Type", "text/html")
  .sendfile(dir + "/public/404.html");
});

module.exports = router;