const express = require('express');
/* const { appendFile } = require('fs'); */
const path = require('path')

const app = express();

/* appendFile.use(express) */
app.use(express.static('public'));

app.listen(process.env.PORT || 3030,() => {
    console.log('Servidor funcionando');
});

/* app.get('/', ( req, res) => {
    res.sendFile(path.resolve('./views/home.html'));
} ); */

app.get("/", (req, res) => {
    console.log(__dirname);

    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});
