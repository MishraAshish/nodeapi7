let express = require("express"),
app = express(); // instantiates express

app.get('/helloWorld', function (req, res) //Creating an api
{ 
    res.send('Hello World'); 
});

app.get('/hellostudents', function (req, res) //Creating an api
{ 
    res.send('Hello Smart'); 
});

let server = app.listen(8081, function () 
    { 
        let host = server.address().address;
        let port = server.address().port 
       console.log("Example app listening at http://:", host, port) 
    }
)