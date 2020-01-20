const express = require('express')
var route = require('./routes/route')
const app = express()
const bodyparser = require('body-parser');

const port = process.env.PORT || 3000;
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,x-client-key,x-client-token,x-client-secret,Authorization");
    next();
});
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use('/Api/Employee', route);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))