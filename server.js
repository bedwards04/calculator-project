const express = require('express');
const app = express();

const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.use(express.static(path.join(__dirname, '/public')));
app.use('/js', express.static(path.join(__dirname, 'public/script.js')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles.css')));



const port = process.env.PORT || 4550;
app.listen(port, () => {console.log(`Server running on ${port}`)});