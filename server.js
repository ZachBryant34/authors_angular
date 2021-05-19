const express = require('express')
const mongoose = require('mongoose');
const flash = require('express-flash')
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true});
const app = express()

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(flash());

require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})