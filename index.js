/**
 * autor: Carlos Miguens
 */
var SOCKET_PORT = 3000;
var WEB_PORT    = 8080;

var express = require('express');
var app 	= express();

var lastStatus = 0;
var humidity = -1;
var processedData;

app.get('/setdata/', function (req, res) {
    humidity = req.query.humidity;
    var currentdate = new Date();
    lastStatus = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    res.send('id: ' + humidity);
});

app.get('/getInfo', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(humidity);
});

app.get('/lastStatus', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(lastStatus);
});
    
var serverWeb = app.listen(WEB_PORT, function () {

  var host = serverWeb.address().address;
  var port = serverWeb.address().port;

  console.log("Web service listing at %s...", port);

});
