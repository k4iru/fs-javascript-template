const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

// serve files in dist folder (this is the client)
app.use(express.static('dist'));


// client makes api call to server routes
app.get('/apicall', (req, res) => {
    console.log('test request to server');
})

app.listen(8080, () => {
    console.log('listening on 8080');
})