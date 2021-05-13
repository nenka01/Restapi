---
description: Dokumentasi ExpressJS API
---

# Dokumentasi

{% api-method method="get" host="https://api.caranya.my.id/" path="whois?q=caranya.my.id" %}
{% api-method-summary %}
WHOIS Domain
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" %}
caranya.my.id
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": "\nID ccTLD whois server\nPlease see 'whois -h whois.id help' for usage.\n\nDomain ID: PANDI-DO3264621\nDomain Name: caranya.my.id\nCreated On: 2020-09-12 07:09:09\nLast Updated On: 2021-04-09 03:09:04 \nExpiration Date: 2023-09-12 00:09:09\nStatus: serverTransferProhibited\nStatus: clientTransferProhibited\n\n====================================================\nSponsoring Registrar Organization: PT Registrasi Nama Domain\nSponsoring Registrar URL: https://daftarnama.id\nSponsoring Registrar Street: Jl. Kuningan Barat No.8 Gedung Elektrindo (Cyber1 ), Lantai 10  \nSponsoring Registrar City: Jakarta Selatan\nSponsoring Registrar State/Province: Jakarta\nSponsoring Registrar Postal Code: 12710\nSponsoring Registrar Country: ID\nSponsoring Registrar Phone: 0215269311\nSponsoring Registrar Email: info@daftarnama.id\nName Server: elle.ns.cloudflare.com\nName Server: uriah.ns.cloudflare.com\nDNSSEC: Unsigned\n\nAbuse Domain Report https://pandi.id/domain-abuse-form/?lang=en\nFor more information on Whois status codes, please visit https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en\n"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="gen-password" %}
{% api-method-summary %}
Password Generator
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "low": "lCj96VBw",
  "medium": "nxyZVoSFskLN",
  "strong": "rUbByC)Zqe$_BXDF",
  "verStrong": "S98kBE@t*sbIxVLcBsQDdF8B"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="ig/stalk?q=instagram" %}
{% api-method-summary %}
Instagram Stalking
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
agus.dwiss
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "data": {
    "profile": "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/s150x150/153964975_497159151687396_1807589481139046943_n.jpg?tp=1&_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=36WxTjGBX9YAX8cdXni&edm=ABfd0MgBAAAA&ccb=7-4&oh=46237a2e8904857a9685251d798927bc&oe=60BFCB80&_nc_sid=7bff83",
    "profilehd": "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/s320x320/153964975_497159151687396_1807589481139046943_n.jpg?tp=1&_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=36WxTjGBX9YAX8cdXni&edm=ABfd0MgBAAAA&ccb=7-4&oh=7c0014f37d5e0811a98db7e9c6546a0b&oe=60C04248&_nc_sid=7bff83",
    "fullname": "Agus Dwi S",
    "private": false,
    "verified": false,
    "bio": "Makhluk Absurd",
    "follower": 100,
    "following": 110,
    "conneted_fb": null,
    "videotimeline": 0,
    "timeline": 0,
    "savedmedia": 0,
    "collections": 0
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="ig/download?url=https://www.instagram.com/p/CG4qI0aDoyP" %}
{% api-method-summary %}
Instagram Download
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="url" type="string" required=false %}
https://www.instagram.com/p/CG4qI0aDoyP
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "id": "2429877322947398799",
  "shortCode": "CG4qI0aDoyP",
  "caption": "#광고 💘💘💘 @celine",
  "url": "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/122930063_414775919514920_5911936734032391307_n.jpg?tp=1&_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=1bEjNgSUdyQAX9vtPNI&edm=AABBvjUBAAAA&ccb=7-4&oh=e70b5e4ea89e67c33072b2cc2101b5a2&oe=60C240D8&_nc_sid=83d603"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="rexdl/search?q=pou" %}
{% api-method-summary %}
REXDL Search
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
pou
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": [
    {
      "title": "Pou 1.4.84 Apk + Mod (Full/Money/Coins) for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2016/01/pou-android-thumb.jpg",
      "url": "https://rexdl.com/android/pou-apk-download.html/",
      "url_download": "https://rexdlfile.com/index.php?id=pou-apk-download",
      "desc": "Pou 1.4.84 Apk + Mod for Android Offline Do you have what it takes to take care of your very own alien pet?! Feed it, clean it, play with it and watch it grow up..."
    },
    {
      "title": "Mobile Legends Bang bang 1.5.78.6331 Apk MOD (Money/One Hit/Map) Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2017/03/mobile-legends-android-thumb.jpg",
      "url": "https://rexdl.com/android/mobile-legends-apk-download-ill.html/",
      "url_download": "https://rexdlfile.com/index.php?id=mobile-legends-apk-download-ill",
      "desc": "Mobile Legends Bang bang 1.5.78.6331 Apk + Mod for Android Online Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends! Choose your favorite heroes and build the..."
    },
    {
      "title": "BitLife – Life Simulator 2.2.1 Apk + Mod (Bitizenship) Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2019/12/bitlife-life-simulator-android-thumb-200x200.jpg",
      "url": "https://rexdl.com/android/bitlife-life-simulator-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=bitlife-life-simulator-apk",
      "desc": "BitLife – Life Simulator 2.2.1 Apk + Mod (Bitizenship) Android Offline How will you live your BitLife? Will you try to make all the right choices in an attempt to become a model citizen sometime..."
    },
    {
      "title": "Zombie Frontier 4 MOD APK 1.0.19 (Ammo) for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2021/03/zombie-frontier-4-android-200x200.jpg",
      "url": "https://rexdl.com/android/zombie-frontier-4-mod-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=zombie-frontier-4-mod-apk",
      "desc": "Zombie Frontier 4 MOD APK 1.0.19 (Ammo) for Android Online Zombie Frontier 4 is latest established sequel of the zombie frontier series, it is a classical first-person zombie shooting game. Players can collect materials, blueprints..."
    },
    {
      "title": "Homicide Squad: New York Cases 2.34.4400 Apk + Mod (Money) Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2020/08/homicide-squad-android-thumb-200x200.jpg",
      "url": "https://rexdl.com/android/homicide-squad-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=homicide-squad-apk",
      "desc": "Homicide Squad: New York Cases 2.34.4400 Apk + Mod (Money) Android Online The BEST crime-solving game is calling players for duty! Are you ready to prove your detective skills and step into a riveting world of..."
    },
    {
      "title": "Make More! 3.0.3 Full Apk + MOD (Unlimited Money) for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2019/05/make-more-android-thumb.jpg",
      "url": "https://rexdl.com/android/make-more-apk-download.html/",
      "url_download": "https://rexdlfile.com/index.php?id=make-more-apk-download",
      "desc": "Make More! 3.0.3 Full Apk + MOD (Unlimited Money) for Android Offline Welcome to the world of factory business! Start with just one factory and an employee in this silly work simulator. Hire more, build..."
    },
    {
      "title": "Armajet 1.59.7 (Full Arm/Arm64) Apk + Mod for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2020/01/armajet-android-thumb-200x200.jpg",
      "url": "https://rexdl.com/android/armajet-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=armajet-apk",
      "desc": "Armajet 1.59.7 (Full Arm/Arm64) Apk + Mod for Android Online Welcome to the future, Pilot! Armajet is a 4v4 arena shooter with quick three minute rounds! Team up with friends or go solo in this fast-paced..."
    },
    {
      "title": "Oxford Dictionary of English Premium 11.9.753 Apk + Mod for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2017/02/oxford-dictionary-of-english-premium-android-thumb.jpg",
      "url": "https://rexdl.com/android/oxford-dictionary-of-english-premium-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=oxford-dictionary-of-english-premium-apk",
      "desc": "Oxford Dictionary of English Premium 11.9.753 Apk + Mod for Android The leading and most trusted single-volume English dictionary is now available for FREE! WHAT MAKES OXFORD DICTIONARY OF ENGLISH BETTER THAN OTHER DICTIONARIES? •..."
    },
    {
      "title": "Ace Fishing: Wild Catch 6.4.1 Apk + MOD (Full) for Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2016/05/ace-fishing-wild-catch-android-thumb.jpg",
      "url": "https://rexdl.com/android/ace-fishing-wild-catch-apk.html/",
      "url_download": "https://rexdlfile.com/index.php?id=ace-fishing-wild-catch-apk",
      "desc": "Ace Fishing: Wild Catch 6.4.1 Apk Android Online The download link has been Removed Journey to the world’s most beautiful destinations and fish for real in paradise! Jump into paradise blue and experience the ultimate..."
    },
    {
      "title": "The Greedy Cave 3.1.7 Apk + MOD (Unlimited Money) Android",
      "thumb": "https://rexdl.com/wp-content/uploads/2016/04/the-greedy-cave-android-thumb.jpg",
      "url": "https://rexdl.com/android/the-greedy-cave-apk-download.html/",
      "url_download": "https://rexdlfile.com/index.php?id=the-greedy-cave-apk-download",
      "desc": "The Greedy Cave 3.1.7 Apk Mod Money Android Offline Download last version The Greedy Cave Apk Andorid from Rexdl. In a land far, far away there once was a vast continent called Milton. It was..."
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="rexdl/get?url=https://rexdlfile.com/index.php?id=pou-apk-download" %}
{% api-method-summary %}
REXDL Download
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="url" type="string" required=false %}
https://rexdlfile.com/index.php?id=pou-apk-download
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "title": "pou apk download",
  "version": "1.4.84",
  "size": "22 MB | 23 MB",
  "updated": "2021-02-04",
  "download": [
    {
      "title": "Download APK File [Original] v1.4.84",
      "url": "https://s3.rexdl.com/android/game/Pou-v1.4.84-www.ReXdl.com.apk"
    },
    {
      "title": "Download APK File [MOD] v1.4.81",
      "url": "https://s3.rexdl.com/android/game/Pou-v1.4.81-Mod-www.ReXdl.com.apk"
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="yt/download?url=https://www.youtube.com/watch?v=ecH\_4GqjKYc" %}
{% api-method-summary %}
Download Audio, Video Youtube
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="url" type="string" required=false %}
https://www.youtube.com/watch?v=ecH\_4GqjKYc
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "title": "Shot on iPhone meme",
  "thumb": "https://i.ytimg.com/vi/ecH_4GqjKYc/hqdefault.jpg",
  "channel": "Just Subscribe Linda H",
  "published": "2021-03-09",
  "views": "2055931",
  "video": [
    {
      "quality": "360p",
      "url": "https://r2---sn-qxo7rn7l.googlevideo.com/videoplayback?expire=1620806358&ei=djabYODTDZqO2_gP2eSsuAY&ip=34.123.78.181&id=o-AG8rAU875zVjiMOxHetRH8I0v1_ZjLFw7dhdpQOZs5OH&itag=18&source=youtube&requiressl=yes&mh=OH&mm=31%2C26&mn=sn-qxo7rn7l%2Csn-5goeen7d&ms=au%2Conr&mv=m&mvi=2&pl=21&initcwndbps=792500&vprv=1&mime=video%2Fmp4&ns=AJxdJPWd5hfgS3kuRl5592oF&gir=yes&clen=886099&ratebypass=yes&dur=16.718&lmt=1616388832779310&mt=1620784363&fvip=2&fexp=24001373%2C24007246&c=WEB&txp=5430432&n=BIKie0ItZrOIDl3Up&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgdfWhZlI6sR2-kPcFwDA1X0HRgvSH14Vpy0rVxpGXYGkCIB01yh-H7eXHd86Vq1DuuTjxgGb7dGaRHqmaCvsVAdtT&sig=AOq0QJ8wRQIhAPnUo_QGT4k1nJec3f_6u59Q4oYXEurzXRwOkkjbDqcIAiBFG_eotE4H-WKFk8_X-UGHLDg597Pq45AAF0x6RelXlQ%3D%3D"
    },
    {
      "quality": "720p",
      "url": "https://r2---sn-qxo7rn7l.googlevideo.com/videoplayback?expire=1620806358&ei=djabYODTDZqO2_gP2eSsuAY&ip=34.123.78.181&id=o-AG8rAU875zVjiMOxHetRH8I0v1_ZjLFw7dhdpQOZs5OH&itag=22&source=youtube&requiressl=yes&mh=OH&mm=31%2C26&mn=sn-qxo7rn7l%2Csn-5goeen7d&ms=au%2Conr&mv=m&mvi=2&pl=21&initcwndbps=792500&vprv=1&mime=video%2Fmp4&ns=AJxdJPWd5hfgS3kuRl5592oF&cnr=14&ratebypass=yes&dur=16.718&lmt=1616388848010436&mt=1620784363&fvip=2&fexp=24001373%2C24007246&c=WEB&txp=5432432&n=BIKie0ItZrOIDl3Up&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMgYQJ45IuWsopF6xRs5KQBTBJkUKcTqGjoN4NrGGb_pAiEA5CCVyliaPXTl-oHHGeIuEgGZyCzkMC3-RK2xGLbqOk8%3D&sig=AOq0QJ8wRQIgCsqwUDpTNU2Mgu-5wLEseuJP8aJ1Z7wB5FVBO24RFwMCIQDAX1tXjkxKT-xHh5CQL4mcBEwHCtc2vf9xUDvXnfU66Q%3D%3D"
    }
  ],
  "audio": [
    {
      "bitrate": 160,
      "url": "https://r2---sn-qxo7rn7l.googlevideo.com/videoplayback?expire=1620806358&ei=djabYODTDZqO2_gP2eSsuAY&ip=34.123.78.181&id=o-AG8rAU875zVjiMOxHetRH8I0v1_ZjLFw7dhdpQOZs5OH&itag=251&source=youtube&requiressl=yes&mh=OH&mm=31%2C26&mn=sn-qxo7rn7l%2Csn-5goeen7d&ms=au%2Conr&mv=m&mvi=2&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=XGxBv90IkWHi47VI3Oo0TbsF&gir=yes&clen=282759&dur=16.681&lmt=1616388823279985&mt=1620784363&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5431432&n=JqIuv0o60IjtHs0lk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgTBpHWLJqfc_sGzrxGDqDxOuD8xwWqmLmLuEJBoCb3dMCIBqKD9r_foEbv5IrFsjZCOGPsQBEQJkouWDij6W9Y1do&ratebypass=yes&sig=AOq0QJ8wRQIhAMfpDZFyaC3zX0XSjUMKuzvXbaqIf0vuHa4EYWWjI6erAiB_7ZRc_dOGMaGHjW4V4KjBYio0jYSQLLromFkndg7s9w%3D%3D"
    },
    {
      "bitrate": 64,
      "url": "https://r2---sn-qxo7rn7l.googlevideo.com/videoplayback?expire=1620806358&ei=djabYODTDZqO2_gP2eSsuAY&ip=34.123.78.181&id=o-AG8rAU875zVjiMOxHetRH8I0v1_ZjLFw7dhdpQOZs5OH&itag=250&source=youtube&requiressl=yes&mh=OH&mm=31%2C26&mn=sn-qxo7rn7l%2Csn-5goeen7d&ms=au%2Conr&mv=m&mvi=2&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=XGxBv90IkWHi47VI3Oo0TbsF&gir=yes&clen=147006&dur=16.681&lmt=1616388823190977&mt=1620784363&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5431432&n=JqIuv0o60IjtHs0lk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgDZJCJ3uqZlcV8xYx72sSqS7NXHNOou_Ue5oOlirFLs8CIQCUGQPzJLATQbZyQNlWh--18LxtDmBoipwXYPGJZqwJKg%3D%3D&ratebypass=yes&sig=AOq0QJ8wRgIhANYavD-FZlQsHnPgfGRWrEEmk_Zv_5oam-P8nrU2KnooAiEAzeJVpOfDCK31MEWgOkrzPBp-pIJecPo_YtWQYT1oOow%3D"
    },
    {
      "bitrate": 48,
      "url": "https://r2---sn-qxo7rn7l.googlevideo.com/videoplayback?expire=1620806358&ei=djabYODTDZqO2_gP2eSsuAY&ip=34.123.78.181&id=o-AG8rAU875zVjiMOxHetRH8I0v1_ZjLFw7dhdpQOZs5OH&itag=249&source=youtube&requiressl=yes&mh=OH&mm=31%2C26&mn=sn-qxo7rn7l%2Csn-5goeen7d&ms=au%2Conr&mv=m&mvi=2&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=XGxBv90IkWHi47VI3Oo0TbsF&gir=yes&clen=111439&dur=16.681&lmt=1616388823283700&mt=1620784363&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5431432&n=JqIuv0o60IjtHs0lk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgMACOb7iySUVhy4a9d0NkAwu2lnieiW8Ac0ZWhgmXZAwCIG28h_6CKk8GrSGQi0t9WBn5tCMk6sLV_3NwaSBbqAp-&ratebypass=yes&sig=AOq0QJ8wRAIgUhgTSRX61LvjYDAyTEWEy7mOmDvA_X--oIRYsc3YNFICIB7CyBGX9Su_ammLQnTpUlbhrnT_ow9-_ya4jvvyiNuI"
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="yt/play?q=jamet" %}
{% api-method-summary %}
Download Audio, Video Youtube by Query
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
jamet
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "title": "JAMET KUPROY VIRAL !!!",
  "thumb": "https://i.ytimg.com/vi/tTa-SjFDMGE/hqdefault.jpg",
  "channel": "Eqy Darmawan",
  "published": "2020-04-18",
  "views": "3400825",
  "video": [
    {
      "quality": "360p",
      "url": "https://r3---sn-qxoedn7z.googlevideo.com/videoplayback?expire=1620806411&ei=qzabYNfXCNqO2_gP3-OD4AU&ip=34.123.78.181&id=o-ANrEOWi7o5liQXXKcY7T3p7lagu1P6h1H3wJFsernKP9&itag=18&source=youtube&requiressl=yes&mh=ct&mm=31%2C29&mn=sn-qxoedn7z%2Csn-qxo7rn7l&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=792500&vprv=1&mime=video%2Fmp4&ns=0CgqvZyHq-24Pawl-ZBGH9wF&gir=yes&clen=40746786&ratebypass=yes&dur=601.187&lmt=1587223693158607&mt=1620784363&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=G9xLCUwHra1ltDXBb&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhALPfI8x8ASVxvmHokBrpyJByjVuI2pHBb1NpIGtUJVPGAiAcs2RCQOHR_psnuWSGBPxK3_cir090mcdWl_i31jVEsQ%3D%3D&sig=AOq0QJ8wRQIhAPiqc6IcrUfE1FbmVJh98datFCXR9mhY_ci9_bgSxQbvAiAsQq1qSfyVmN7wJKIS4muaD7OOlVTy40A4Osc8VgqhSw%3D%3D"
    },
    {
      "quality": "720p",
      "url": "https://r3---sn-qxoedn7z.googlevideo.com/videoplayback?expire=1620806411&ei=qzabYNfXCNqO2_gP3-OD4AU&ip=34.123.78.181&id=o-ANrEOWi7o5liQXXKcY7T3p7lagu1P6h1H3wJFsernKP9&itag=22&source=youtube&requiressl=yes&mh=ct&mm=31%2C29&mn=sn-qxoedn7z%2Csn-qxo7rn7l&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=792500&vprv=1&mime=video%2Fmp4&ns=0CgqvZyHq-24Pawl-ZBGH9wF&cnr=14&ratebypass=yes&dur=601.187&lmt=1587227675821627&mt=1620784363&fvip=3&fexp=24001373%2C24007246&c=WEB&txp=5535432&n=G9xLCUwHra1ltDXBb&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgfxFCkLzDyJ1hMUXpk2UVAUKLkmJVssteqOIy0D0--LQCIAevXNQS-MRaJwHnAk0C4xC7dWcHRxPiKlhu4Rq9__Kw&sig=AOq0QJ8wRgIhAJYFV1QQuyVJMkLTRYZhhWJHaI1_4non_B98d7QCSMI5AiEA4B-O77KO3orJahE7d79eOXf1ETQPBsXMr3gAYvEVlTk%3D"
    }
  ],
  "audio": [
    {
      "bitrate": 160,
      "url": "https://r3---sn-qxoedn7z.googlevideo.com/videoplayback?expire=1620806411&ei=qzabYNfXCNqO2_gP3-OD4AU&ip=34.123.78.181&id=o-ANrEOWi7o5liQXXKcY7T3p7lagu1P6h1H3wJFsernKP9&itag=251&source=youtube&requiressl=yes&mh=ct&mm=31%2C29&mn=sn-qxoedn7z%2Csn-qxo7rn7l&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=psJtaBQ8FKMFbS4dhKBEyxIF&gir=yes&clen=9397038&dur=601.161&lmt=1587225408098276&mt=1620784363&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=MkEsxVVstEwobFuLG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKQylRrSuxZniA_RfcwpJlP1QNV8vmvm8JUtllx0AtF5AiAVZrkRnkXx6pA7roXvXv2yl02DE9tdTMqarSu8w-ly3A%3D%3D&ratebypass=yes&sig=AOq0QJ8wRAIgBZJQNXExxMD2E1ZNbTyeh7zbCK5D2vSJiSGQK134ZoECIGic2JOQouOKFZOC0m2NO1Kjkkp91mGUOvGen3Mi5JQO"
    },
    {
      "bitrate": 64,
      "url": "https://r3---sn-qxoedn7z.googlevideo.com/videoplayback?expire=1620806411&ei=qzabYNfXCNqO2_gP3-OD4AU&ip=34.123.78.181&id=o-ANrEOWi7o5liQXXKcY7T3p7lagu1P6h1H3wJFsernKP9&itag=250&source=youtube&requiressl=yes&mh=ct&mm=31%2C29&mn=sn-qxoedn7z%2Csn-qxo7rn7l&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=psJtaBQ8FKMFbS4dhKBEyxIF&gir=yes&clen=4853010&dur=601.161&lmt=1587225406602683&mt=1620784363&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=MkEsxVVstEwobFuLG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKiZirHb5vTaHsXDYvLZhjx40j3S1AUXa-i4h6WV8DrdAiEA4Qbc1mIrfGy6C4JXXM5K9iUm5boeuL177Oy2u7dv8bA%3D&ratebypass=yes&sig=AOq0QJ8wRgIhAMNiRk9LsZH6SPCIH1CMfbK51LcXRRVK7SGj_lpTFNrfAiEAoWCkYzfDn3pzDzkTW7Ra183f_5WKuWJnxuss11lsVoA%3D"
    },
    {
      "bitrate": 48,
      "url": "https://r3---sn-qxoedn7z.googlevideo.com/videoplayback?expire=1620806411&ei=qzabYNfXCNqO2_gP3-OD4AU&ip=34.123.78.181&id=o-ANrEOWi7o5liQXXKcY7T3p7lagu1P6h1H3wJFsernKP9&itag=249&source=youtube&requiressl=yes&mh=ct&mm=31%2C29&mn=sn-qxoedn7z%2Csn-qxo7rn7l&ms=au%2Crdu&mv=m&mvi=3&pl=21&initcwndbps=792500&vprv=1&mime=audio%2Fwebm&ns=psJtaBQ8FKMFbS4dhKBEyxIF&gir=yes&clen=3807220&dur=601.161&lmt=1587225405993047&mt=1620784363&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=MkEsxVVstEwobFuLG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMz4EQHnAwUn0k1Njq20v_8h4q68D52kQXDRHloSwM4GAiEAq4dsD6ws9iNTot9PeOXM4gTho_HL-FsMfE8EcDER9MY%3D&ratebypass=yes&sig=AOq0QJ8wRQIhAJe0Ag5X-fFWXOnJmDWbm-0HW9RNo-e72STM0ep7XDv1AiBGRrvpVJduGkfsJirBsiJWVtAQ62avO9HKBYox6v60WA%3D%3D"
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="yt/search?q=jamet" %}
{% api-method-summary %}
Search Video, Channel
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
jamet
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": [
    {
      "type": "video",
      "videoId": "tTa-SjFDMGE",
      "url": "https://youtube.com/watch?v=tTa-SjFDMGE",
      "title": "JAMET KUPROY VIRAL !!!",
      "description": "Tongton ajah udah.",
      "image": "https://i.ytimg.com/vi/tTa-SjFDMGE/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/tTa-SjFDMGE/hqdefault.jpg",
      "seconds": 602,
      "timestamp": "10:02",
      "duration": {
        "seconds": 602,
        "timestamp": "10:02"
      },
      "ago": "1 year ago",
      "views": 3400447,
      "author": {
        "name": "Eqy Darmawan",
        "url": "https://youtube.com/channel/UCVuf8uH0e2MQlsJO0ncroEA"
      }
    },
    {
      "type": "video",
      "videoId": "CM8x-sJcRx8",
      "url": "https://youtube.com/watch?v=CM8x-sJcRx8",
      "title": "goyangan jamet  viral seluruh dunia",
      "description": "goyangan jamet #jamet #tiktok #viral #trending #goyang.",
      "image": "https://i.ytimg.com/vi/CM8x-sJcRx8/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/CM8x-sJcRx8/hq720.jpg",
      "seconds": 232,
      "timestamp": "3:52",
      "duration": {
        "seconds": 232,
        "timestamp": "3:52"
      },
      "ago": "2 months ago",
      "views": 473227,
      "author": {
        "name": "Ghofur Luppa Official",
        "url": "https://youtube.com/channel/UCPVWDFfDbNKOrixQpkH-iww"
      }
    },
    {
      "type": "video",
      "videoId": "CT1D3ga9No8",
      "url": "https://youtube.com/watch?v=CT1D3ga9No8",
      "title": "JAMET IDENTITAS MADURA(?) | MC Talks",
      "description": "Instagram : https://www.instagram.com/m_ceka21/",
      "image": "https://i.ytimg.com/vi/CT1D3ga9No8/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/CT1D3ga9No8/hq720.jpg",
      "seconds": 820,
      "timestamp": "13:40",
      "duration": {
        "seconds": 820,
        "timestamp": "13:40"
      },
      "ago": "3 weeks ago",
      "views": 3279,
      "author": {
        "name": "M Ceka",
        "url": "https://youtube.com/channel/UCB7fj4_ur928z8DhTW9d5wg"
      }
    },
    {
      "type": "video",
      "videoId": "L2jcMF8AOdI",
      "url": "https://youtube.com/watch?v=L2jcMF8AOdI",
      "title": "A Day In My Life With Jamet || TAUFIK ASOBAH",
      "description": "Bukber with JAMET Don't forget for like, Comment, share, and subscribe ! Thank u ✨ Follow my instagram @taufikaa16.",
      "image": "https://i.ytimg.com/vi/L2jcMF8AOdI/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/L2jcMF8AOdI/hq720.jpg",
      "seconds": 517,
      "timestamp": "8:37",
      "duration": {
        "seconds": 517,
        "timestamp": "8:37"
      },
      "ago": "4 hours ago",
      "views": 9,
      "author": {
        "name": "Taufik Asobah",
        "url": "https://youtube.com/channel/UCKCC2isD6sBnAPeuwekQWUQ"
      }
    },
    {
      "type": "video",
      "videoId": "aREajbCPlH4",
      "url": "https://youtube.com/watch?v=aREajbCPlH4",
      "title": "JAMET SMA joget di Attack On Titan meme jar of heart | Attack on Jamet",
      "description": "Sorry absurd Episode 2 Jut Ah https://youtu.be/N0X62yxBpi4 episode 3 Jut Ah https://youtu.be/6KXCbDd90iU Episode 4 ...",
      "image": "https://i.ytimg.com/vi/aREajbCPlH4/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/aREajbCPlH4/hq720.jpg",
      "seconds": 146,
      "timestamp": "2:26",
      "duration": {
        "seconds": 146,
        "timestamp": "2:26"
      },
      "ago": "2 months ago",
      "views": 80619,
      "author": {
        "name": "eb",
        "url": "https://youtube.com/channel/UCM1y3_07gfoX0SsDE7LgUxw"
      }
    },
    {
      "type": "video",
      "videoId": "NV2lFdbOsiU",
      "url": "https://youtube.com/watch?v=NV2lFdbOsiU",
      "title": "JAMET KUPROY",
      "description": "",
      "image": "https://i.ytimg.com/vi/NV2lFdbOsiU/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/NV2lFdbOsiU/hq720.jpg",
      "seconds": 413,
      "timestamp": "6:53",
      "duration": {
        "seconds": 413,
        "timestamp": "6:53"
      },
      "ago": "11 months ago",
      "views": 2101,
      "author": {
        "name": "Top Viral",
        "url": "https://youtube.com/channel/UCKIOuFqWw6X9bCb8CI8V4uQ"
      }
    },
    {
      "type": "video",
      "videoId": "u7pY-9FV5OY",
      "url": "https://youtube.com/watch?v=u7pY-9FV5OY",
      "title": "Jamet Arizona 2003",
      "description": "",
      "image": "https://i.ytimg.com/vi/u7pY-9FV5OY/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/u7pY-9FV5OY/hq720.jpg",
      "seconds": 71,
      "timestamp": "1:11",
      "duration": {
        "seconds": 71,
        "timestamp": "1:11"
      },
      "ago": "2 years ago",
      "views": 947,
      "author": {
        "name": "2ehandsvouwwagens_nl",
        "url": "https://youtube.com/channel/UC9_22YetaSEhkgWJ65MgwZg"
      }
    },
    {
      "type": "video",
      "videoId": "8v_4O44sfjM",
      "url": "https://youtube.com/watch?v=8v_4O44sfjM",
      "title": "Christina Perri - Jar of Hearts [Official Music Video]",
      "description": "AHHHH ITS HERE!!! please enjoy the heart + soul + guts in my official music video for jar of hearts!!!!!!! special thanks to atlantic ...",
      "image": "https://i.ytimg.com/vi/8v_4O44sfjM/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/8v_4O44sfjM/hq720.jpg",
      "seconds": 272,
      "timestamp": "4:32",
      "duration": {
        "seconds": 272,
        "timestamp": "4:32"
      },
      "ago": "10 years ago",
      "views": 394048655,
      "author": {
        "name": "Christina Perri",
        "url": "https://youtube.com/channel/UC2gMECGMn5TVbRN5S5tKb8Q"
      }
    },
    {
      "type": "video",
      "videoId": "RnVPsFLDma0",
      "url": "https://youtube.com/watch?v=RnVPsFLDma0",
      "title": "Jamet kuproy angkat bicara",
      "description": "akhirnya jamet kuproy angkat biacara masalah tentang gayanya yang banyak di komentari banyak masarakat Indonesia.",
      "image": "https://i.ytimg.com/vi/RnVPsFLDma0/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/RnVPsFLDma0/hq720.jpg",
      "seconds": 589,
      "timestamp": "9:49",
      "duration": {
        "seconds": 589,
        "timestamp": "9:49"
      },
      "ago": "8 months ago",
      "views": 600333,
      "author": {
        "name": "Droy And",
        "url": "https://youtube.com/channel/UCHq0iPjS8UA3kJTXeNLth9w"
      }
    },
    {
      "type": "video",
      "videoId": "32GQZLh5nes",
      "url": "https://youtube.com/watch?v=32GQZLh5nes",
      "title": "Udin Jamet Hebohkan Kantor Polisi | LAPOR PAK! (04/03/21) Part 3",
      "description": "LAPOR PAK! Kamis, 4 Maret 2021 PART 1 : https://youtu.be/8IZoTa9tFtA PART 2 : https://youtu.be/iree8msKreY PART 3 ...",
      "image": "https://i.ytimg.com/vi/32GQZLh5nes/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/32GQZLh5nes/hq720.jpg",
      "seconds": 621,
      "timestamp": "10:21",
      "duration": {
        "seconds": 621,
        "timestamp": "10:21"
      },
      "ago": "2 months ago",
      "views": 1846615,
      "author": {
        "name": "TRANS7 OFFICIAL",
        "url": "https://youtube.com/user/TRANS7indonesia"
      }
    },
    {
      "type": "video",
      "videoId": "uPX4vwPg8Sc",
      "url": "https://youtube.com/watch?v=uPX4vwPg8Sc",
      "title": "Jamet Kuproy 【Attack On Titan】",
      "description": "Anime: Attack On Titan ۰Instagram۰ https://instagram.com/miuyuza?igshid=r9ukgzk7u4yu #attakontitan #jametkuproy.",
      "image": "https://i.ytimg.com/vi/uPX4vwPg8Sc/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/uPX4vwPg8Sc/hq720.jpg",
      "seconds": 21,
      "timestamp": "0:21",
      "duration": {
        "seconds": 21,
        "timestamp": "0:21"
      },
      "ago": "2 months ago",
      "views": 3814,
      "author": {
        "name": "Miuyuza",
        "url": "https://youtube.com/channel/UCnpefQeP6bCwuCxuGes78ug"
      }
    },
    {
      "type": "video",
      "videoId": "UDqt3DMZ8s4",
      "url": "https://youtube.com/watch?v=UDqt3DMZ8s4",
      "title": "Colossal Titan - Goyang Jamet",
      "description": "Instagram: @Sidaivan.",
      "image": "https://i.ytimg.com/vi/UDqt3DMZ8s4/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/UDqt3DMZ8s4/hq720.jpg",
      "seconds": 14,
      "timestamp": "0:14",
      "duration": {
        "seconds": 14,
        "timestamp": "0:14"
      },
      "ago": "3 months ago",
      "views": 2155951,
      "author": {
        "name": "Sidaivan",
        "url": "https://youtube.com/channel/UC-8RrQ6HkGuvhdoN6JCRiBQ"
      }
    },
    {
      "type": "video",
      "videoId": "dAtCmJwEiMo",
      "url": "https://youtube.com/watch?v=dAtCmJwEiMo",
      "title": "Attack On Titan Size Comparison 2021 / ANIMATION",
      "description": "Happy New year Everyone . Wish you all the best of Luck-Health-Happiness ...Ini adalah sken kematian Mike, tetapi dia berhasil di selamatkan oleh Titan misterius yg tidak diketahui darimana datangnya.Diadaptasi dari postingan Facebook : Soedahman GANK ALIRAN BARU DESTAKDES BIKIN MALU? @Qorygore @Picky Picks.video ini bercerita tentang sesorang Jamet kuproy ikut Indonesian Idol di suruh pulang oleh para juri idol dan hanya parodi.HERO BARU JAMET MOBILE LEGENDS ! Kreatif banget yang bikin hero jamet nya, lucu dan sangat menghibur, semoga next ...HERO BARU JAMET YANG VIRAL DI TITIDTOK ! KALIAN WAJIB TAU HERO INI Subscribe juga ya Jika ada video yang mau di ...Jamet kuproy joget madura yang dulu hingga sekarang.FOLLOW @NiuBlockSHUFFLE & like our facebook: NiuBlock~Shuffle [NBS] thx ;)Jika kalian suka, jangan lupa like dan subscribe ya☺ #jamet #jametsma #viraltiktok.Green Screen Joget Tiktok Viral || Green Screen Jamet Part II hi gays, divideo ini saya membagikan kumpulan Green screen joget ...",
      "image": "https://i.ytimg.com/vi/dAtCmJwEiMo/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/dAtCmJwEiMo/hq720.jpg",
      "seconds": 420,
      "timestamp": "7:00",
      "duration": {
        "seconds": 420,
        "timestamp": "7:00"
      },
      "ago": "3 months ago",
      "views": 24453833,
      "author": {
        "name": "Evolution Films",
        "url": "https://youtube.com/channel/UCHqyV9ahSkK8nIiWf-K8_vw"
      }
    },
    {
      "type": "video",
      "videoId": "p3ILFlCyBPc",
      "url": "https://youtube.com/watch?v=p3ILFlCyBPc",
      "title": "Jamet Louisiana 2013",
      "description": "",
      "image": "https://i.ytimg.com/vi/p3ILFlCyBPc/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/p3ILFlCyBPc/hq720.jpg",
      "seconds": 69,
      "timestamp": "1:09",
      "duration": {
        "seconds": 69,
        "timestamp": "1:09"
      },
      "ago": "3 years ago",
      "views": 5161,
      "author": {
        "name": "2ehandsvouwwagens_nl",
        "url": "https://youtube.com/channel/UC9_22YetaSEhkgWJ65MgwZg"
      }
    },
    {
      "type": "video",
      "videoId": "fOebc-oZZts",
      "url": "https://youtube.com/watch?v=fOebc-oZZts",
      "title": "Free fire EXE Mabar sama Jamet",
      "description": "subscribe guys.",
      "image": "https://i.ytimg.com/vi/fOebc-oZZts/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/fOebc-oZZts/hq720.jpg",
      "seconds": 277,
      "timestamp": "4:37",
      "duration": {
        "seconds": 277,
        "timestamp": "4:37"
      },
      "ago": "10 hours ago",
      "views": null,
      "author": {
        "name": "Cyber GaminG",
        "url": "https://youtube.com/channel/UCqUSBmq4IOz6xG1Hv3Ran4Q"
      }
    },
    {
      "type": "video",
      "videoId": "JMZAOwJQd8w",
      "url": "https://youtube.com/watch?v=JMZAOwJQd8w",
      "title": "Kumpulan Meme Dj Jar Of heart - Jamet dance | Meme Compilation",
      "description": "kali ini gua ngumpulin video dj jar of heart meme yg lagi viral. thanks for watching #viral #memejarofheart #meme.",
      "image": "https://i.ytimg.com/vi/JMZAOwJQd8w/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/JMZAOwJQd8w/hq720.jpg",
      "seconds": 218,
      "timestamp": "3:38",
      "duration": {
        "seconds": 218,
        "timestamp": "3:38"
      },
      "ago": "2 months ago",
      "views": 2154,
      "author": {
        "name": "Random meme",
        "url": "https://youtube.com/channel/UCMDEcWf4nT8FdIvwPLNoN8g"
      }
    },
    {
      "type": "video",
      "videoId": "mILm6XwbDPg",
      "url": "https://youtube.com/watch?v=mILm6XwbDPg",
      "title": "Jamet Louisiana 2001",
      "description": "",
      "image": "https://i.ytimg.com/vi/mILm6XwbDPg/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/mILm6XwbDPg/hq720.jpg",
      "seconds": 68,
      "timestamp": "1:08",
      "duration": {
        "seconds": 68,
        "timestamp": "1:08"
      },
      "ago": "3 years ago",
      "views": 1924,
      "author": {
        "name": "2ehandsvouwwagens_nl",
        "url": "https://youtube.com/channel/UC9_22YetaSEhkgWJ65MgwZg"
      }
    },
    {
      "type": "video",
      "videoId": "jwGXuDLkDoY",
      "url": "https://youtube.com/watch?v=jwGXuDLkDoY",
      "title": "KUMPULAN VIDEO JAMET KUPROY",
      "description": "jametkuproy#tiktokjamet#dingdingbadingding#tiktok Jamet generasi baru https://youtu.be/Y1swvdLUuL0.",
      "image": "https://i.ytimg.com/vi/jwGXuDLkDoY/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/jwGXuDLkDoY/hqdefault.jpg",
      "seconds": 138,
      "timestamp": "2:18",
      "duration": {
        "seconds": 138,
        "timestamp": "2:18"
      },
      "ago": "1 year ago",
      "views": 1868095,
      "author": {
        "name": "ini pariss",
        "url": "https://youtube.com/channel/UCAgAZ4jPtKx1lFukqu_g1yg"
      }
    },
    {
      "type": "video",
      "videoId": "_v5VzLW43kc",
      "url": "https://youtube.com/watch?v=_v5VzLW43kc",
      "title": "Jamet Louisiana trailer tent",
      "description": "Jamet Louisiana.",
      "image": "https://i.ytimg.com/vi/_v5VzLW43kc/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/_v5VzLW43kc/hq720.jpg",
      "seconds": 94,
      "timestamp": "1:34",
      "duration": {
        "seconds": 94,
        "timestamp": "1:34"
      },
      "ago": "5 years ago",
      "views": 6032,
      "author": {
        "name": "Jason Mcgarry",
        "url": "https://youtube.com/user/titanium123456"
      }
    },
    {
      "type": "video",
      "videoId": "ez578KvhuTk",
      "url": "https://youtube.com/watch?v=ez578KvhuTk",
      "title": "Joget Jamet Lagu Jar Of Heart Koplo",
      "description": "awali hari mu yang tidak berguna dengan tawa, walaupun tak berguna kita harus bahagia!!",
      "image": "https://i.ytimg.com/vi/ez578KvhuTk/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/ez578KvhuTk/hq720.jpg",
      "seconds": 308,
      "timestamp": "5:08",
      "duration": {
        "seconds": 308,
        "timestamp": "5:08"
      },
      "ago": "3 months ago",
      "views": 391760,
      "author": {
        "name": "Nub Player",
        "url": "https://youtube.com/channel/UCcNRWyf8U4noFjUhZNQH5sQ"
      }
    },
    {
      "type": "video",
      "videoId": "QaGqTDHOe7w",
      "url": "https://youtube.com/watch?v=QaGqTDHOe7w",
      "title": "got talent JAMET full video",
      "description": "thanks for watching like and subscribe now preset alight motion free fire wajah asli ▶️https://youtu.be/3Bh4qPtGS6I slowmo ff DJ ...",
      "image": "https://i.ytimg.com/vi/QaGqTDHOe7w/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/QaGqTDHOe7w/hq720.jpg",
      "seconds": 206,
      "timestamp": "3:26",
      "duration": {
        "seconds": 206,
        "timestamp": "3:26"
      },
      "ago": "1 year ago",
      "views": 107008,
      "author": {
        "name": "Pink guy",
        "url": "https://youtube.com/channel/UCSPelDeS0ugWEzHrQOnQZBw"
      }
    }
  ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="primbon/artimimpi?q=mati" %}
{% api-method-summary %}
Primbon Arti Mimpi
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
mati
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": "Mimpi dirinya bercakap-cakap dengan orang mati = Akan sia-sia pekerjaannya dan cita-citanya gagal.Mimpi mati (dirinya mati) = Akan lanjut usia.Mimpi mati lalu hidup kembali = Segala hajatnya akan berhasil.Mimpi melihat orang mati atau orang yang telah mati = Akan muncul bantuan yang tidak disangka-sangka dalam keadaan yang sulit atau akan datang berita baik.Mimpi melihat ulama banyak yang mati = Alamat binasanya agama Islam di daerah anda.Mimpi melihat orang yang dihukum mati = Pertanda harus waspada terhadap perkataan dan perbuatan dalam pekerjaan.Mimpi mati = Pertanda akan berada dalam keadaan sehat wal afiat.Mimpi memegang seekor tikus yang terluka atau mati = Pertanda akan mendapatkan aib atau malu.Solusi - Menanggulangi akibat buruk dari mimpi      Jika anda bermimpi sesuatu yang dapat berakibat buruk bagi anda dan keluarga(seperti mimpi gigi copot dll) anda di harapkan melakukan hal-hal sebagai       berikut untuk menanggulanginya:      Ambillah sapu lidi (bisa juga tusuk gigi, bambu kecil dll). Lalu potong       atau patahkan dengan tangan anda menjadi 7 (tujuh) batang, kecil-kecil,       kira-kira 3 sentimeter. Sediakan selembar kertas atau tissue. Siapkan       garam dapur, sedikit saja. Taruhlah potongan ke tujuh sapu lidi dan garam       dapur tadi ke dalam tissue atau kertas. Lipat kertas tersebut dan kuburkan       ke dalam tanah (pekarangan, halaman rumah anda). Kalimat yang anda harus       ucapkan ketika akan mengubur/membenam kertas (yang berisi 7 potong sapu       lidi dan garam) tersebut adalah kalimat yang meminta kepada Yang Maha       Kuasa agar di jauhi dari akibat buruk mimpi anda.      Contoh kalimat:Ya Tuhan. Jauhkanlah saya dan keluarga saya dari       malapetaka. Tidak akan tumbuh/jadi, garam yang saya kubur ini. Seperti       halnya mimpi saya yang dapat berakibat buruk bagi kami tidak akan menjadi       kenyataan atau tidak akan terjadi. Amien."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="primbon/artinama?q=jamal" %}
{% api-method-summary %}
Primbon Arti Nama
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
jamal
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": "Nama jamal, memiliki arti: Pemrakarsa, pelopor, pemimpin, bebas, pekerja keras, individualis.Anda mempunyai kepercayaan diri, intelektualitas, dan daya kepemimpinan yang sangat tinggi. Anda juga termasuk orang yang mempunyai pandangan hidup yang luas. Ide-ide kreatif dapat menjadikan anda sebagai pencetus dan penentu suatu kreasi atau tindakan. Cobalah untuk tidak mudah bosan, berubah-ubah pikiran, kehilangan harapan, atau menjadi terlalu agresif dalam menindak-lanjuti hal yang sudah anda mulai atau rintis. Raihlah apa yang menjadi tujuan hidup anda. Anda penyuka petualangan dan hal-hal yang memicu adrenalin. Anda harus mempunyai hobi yang menarik dan menyenangkan. Karena anda mudah bosan, anda tidak menyukai hal-hal yang bersifat monoton dan biasa saja. Hindari emosi, keras kepala, dan mau menang sendiri karena kesuksesan anda terletak pada bagaimana cara anda dapat bersabar dan berdiplomasi dalam meraih apapun tanpa harus bertindak bosy (berlagak seperti bos) atau memaksakan kehendak karena anda sudah mempunyai daya kepemimpinan sejati yang harus diarahkan secara positif."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="primbon/jodoh?nama1=jamal&nama2=kemal" %}
{% api-method-summary %}
Primbon Ramal Jodoh
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="nama1" type="string" required=false %}
jamal
{% endapi-method-parameter %}

{% api-method-parameter name="nama2" type="string" required=false %}
kemal
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "namaKamu": "jamal",
  "namaPasangan": "kemal",
  "thumbnail": "https://www.primbon.com/ramalan_kecocokan_cinta2.png",
  "positif": "Pemimpin, Penggagas ide-ide baru, Pemberani, Individualis, Mandiri",
  "negatif": "Egois, Keras kepala, Pemarah, Mudah bosanAnda akan mendapatkan pasangan yang cukup bertanggung jawab untuk keluarga, bisa mengatur rumah, dan membesarkan anak-anak dengan baik. Namun, seringkali pasangan Anda merasa tidak tenang dan selalu gelisah dengan sepak terjang Anda yang selalu emosional dan banyak menuntut. Sebenarnya, hubungan Anda dan dia tidak buruk. Hanya saja, Anda perlu sedikit lebih dewasa dalam menyikapi banyak hal, apalagi yang berkenaan dengan keluarga pasangan."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.caranya.my.id/" path="primbon/nomor-hoki?nomor=08811223344" %}
{% api-method-summary %}
Primbon Nomor Hoki
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="nomor" type="number" required=false %}
08811223344
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
  "result": "POTENSI HOKI NOMOR HP METODE BAGUA SHUZI\n\nNo. HP : 08811223344\n% Angka Bagua Shuzi : 100%\nENERGI POSITIF\nKekayaan = 0\nKesehatan = 0\nCinta/Relasi = 1\nKestabilan = 6\n% = 70%ENERGI NEGATIF\nPerselisihan = 1\nKehilangan = 0\nMalapetaka = 1\nKehancuran = 1\n% = 30%\n\n\n\n\n\n\n\n\n\n\n\n* Suatu nomor dianggap baik jika persentase Energi Positif diatas 60%. Semakin besar persentase Energi Positif, semakin membawa hoki nomornya, dengan syarat persentase Angka Bagua Shuzi harus minimal 60%. Meskipun persentase Energi Positif besar, tetapi persentase Angka Bagua Shuzi kurang dari 60%, nomor tersebut kurang baik digunakan.* Persentase Angka Bagua Shuzi tidak mencerminkan tingkat hoki suatu nomor, melainkan hanya sebagai syarat bahwa suatu nomor dianggap memiliki elemen karakter yang cukup jika persentase Angka Bagua Shuzi nilainya antara 60% sampai 100%.* Hindari nomor yang berakhiran dengan angka 0 (nol), meskipun persentase Energi Positif dan persentase Angka Bagua Shuzi diatas 60%."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

Cape gw, contoh request di atas tuh udah lumayan lah ya, jadi tinggal kalian sesuaikan aja yang lain, thanks :D

