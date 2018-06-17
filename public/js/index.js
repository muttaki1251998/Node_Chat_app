var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    // message received from server
    socket.on('newMessage', function(msg){
        console.log('newMessage', msg);
    });

    // message sent to server
    socket.emit('createMessage', {
    from: "Client",    
    text: "Hello. This is the client"
    });
});


socket.on('disconnect', function(){
    console.log('Disconnected from server');
});