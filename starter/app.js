var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io= require('socket.io')(server);
var port = 8581;

app.use(express.static(path.join(__dirname, "public")));


// On method in scoket.io and use connection whic is part of socket and its job is to open up 
// connections between client and server
io.on('connection', function(socket){
	console.log('new connection has been made');
})

server.listen(port, function(){
	console.log("Listening on port : " + port);
})
