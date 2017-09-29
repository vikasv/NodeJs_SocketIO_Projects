var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io= require('socket.io')(server);
var port = 8582;

app.use(express.static(path.join(__dirname, "public")));

// On method in scoket.io and use connection whic is part of socket and its job is to open up 
// connections between client and server
server.listen(port, function(){
	console.log("Listening on port : " + port);
})
