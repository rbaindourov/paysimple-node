
var crypto =  require('crypto')
var request = require('request');

var userName = "";
var superSecretCode = "";
var url = "https://sandbox-api.paysimple.com/v4/payment";

var iso =  new Date().toISOString()
var hmac = crypto.createHmac('sha256', superSecretCode).update(new Buffer( iso ).toString() ).digest('base64')

var headers = {
  "Authorization":"PSSERVER AccessId = " + userName + "; Timestamp = " + iso + "; Signature = " + hmac
}

function httpsHandler(err, response, body) {

    if( err ) {
      console.error('to err is human', err)
      process.exit(1);
    }

    console.log( body );

}

request.get( {url:url, strictSSL: false, headers:headers}, httpsHandler);
