const express = require('express');
const bodyParser = require('body-parser');
const path = require = require('path');

// app init
const app = express();

const publicPath = path.join(__dirname, ('./public'));

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log("Server is running");
})