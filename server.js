var express = require('express');
var app = express();
var response_object = {
    IP: "0",
    user_Agent: "",
}

app.get('/', function (req, res) {
    
   for (var key of Object.keys(req.headers)) {
    if (key == 'x-forwarded-for') {
        console.log("IP is " + req.headers[key]);
        response_object.IP = req.headers[key];
    }
    if (key == 'user-agent') {
        console.log('User agent is ' + req.headers[key]);
        response_object.user_Agent = req.headers[key];
    }
}

    res.send(response_object);
    
});

app.listen(8080, function() {
    
    console.log("app running on port 8080!")
    
})