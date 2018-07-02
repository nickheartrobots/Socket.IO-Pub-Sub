import http from 'http';
import SocketIO from 'socket.io';

const server = http.createServer();
const io = new SocketIO(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log(`Connected ${socket.id}`)
    socket.on('publish', obj => {
        socket.broadcast.to(obj.id).emit('data', obj);
    })

    socket.on('subscribe', obj => {
        obj.subIds.forEach(id => socket.join(id));
    })

    socket.on('unsubscribe', obj => {
        obj.subIds.forEach(id => socket.leave(id));
    })
})

server.listen(PORT, () => {
    console.info('Server is running on Port: ', PORT);
})