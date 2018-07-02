import io from 'socket.io-client';
import fs from 'fs';

let file;

if(process.env.IS_DEV){
    file = fs.readFileSync('./config.json');
} else {
    file = fs.readFileSync('./../config.json');    
}

const { ID, SUBSCRIBE_TO, INTERVAL } = JSON.parse(file).config;

let socket = io.connect('http://localhost:3000', { reconnect: true });

socket.on('connect', () => {
    console.log('Connected to Host...')
    socket.emit('subscribe', {
        id: ID,
        subIds: SUBSCRIBE_TO
    }) 
    
    socket.on('data', obj => {
        // act on the data here
    })

    //this is where you would send updates
    setInterval(() => {
        socket.emit('publish', {
            id: ID,
            data: {
                //example data
                numbers: [1, 2, 3, 4]
            }
        })
    }, INTERVAL);
})

socket.on('connect_error', e => {
    console.error(e)
})