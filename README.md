# README

## API

> API ini adalah API yang API nya API

* Gratis
* Sumber Terbuka

## Deploy Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mbahagus/ExpressJs-API)

## Instalasi

```text
git clone https://www.github.com/mbahagus/ExpressJS-API
cd ExpressJS-API
npm install
npm start
```

## Demo

[API Caranya My Id](https://api.caranya.my.id/)

## Contoh Request

{% api-method method="get" host="https://api.caranya.my.id/whois?q=caranya.my.id" path="" %}
{% api-method-summary %}
WHOIS Domain
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="q" type="string" required=false %}
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



Blog saia [Caranya My Id](https://www.caranya.my.id) 

Web APP saia [APP Caranya My Id](https://app.caranya.my.id/)



