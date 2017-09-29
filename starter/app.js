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

	socket.emit('message-from-server',{
		greeting: 'Hello from server'
	})

	socket.on('message-from-client', function(msg){
		console.log(msg);
	})
})

server.listen(port, function(){
	console.log("Listening on port : " + port);
})
