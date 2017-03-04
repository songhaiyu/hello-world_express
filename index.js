/**
 * Created by FL's PC on 2017/3/4.
 */
var express = require("express");

var app = express();
//app.use(express.static(__dirname+'/public'));

var routes = require("./routes")(app);

app.listen(8080);

