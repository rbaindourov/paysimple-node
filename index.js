'use strict'
let crypto =  require('crypto')
let request = require('request');

let userName = "";
let superSecretCode = "";
let url = "https://sandbox-api.paysimple.com/v4/payment";

let iso =  new Date().toISOString()
let hmac = crypto.createHmac('sha256', superSecretCode).update(new Buffer( iso ).toString() ).digest('base64')

let headers = {
  "Authorization":"PSSERVER AccessId = " + userName + "; Timestamp = " + iso + "; Signature = " + hmac
}


request.get( {url:url, strictSSL: false, headers:headers}, (err, response, body) => {

    if( err ) {
      console.error('to err is human', err)
      process.exit(1);
    }

    console.log( body );

});
