let express = require("express"),
app = express(); // instantiates express

app.get('/helloWorld', function (req, res) //Creating an api
{ 
    res.send('Hello World'); 
});

//http://localhost:9091/hellostudents?name=Any&age=22
//{ name: 'Any', age: '22' }
app.get('/hellostudents', function (req, res) //Creating an api
{ 
    console.log(req.query);
    res.send('Hello Smart Students'); 
});

let server = app.listen(9091, function () 
    { 
        let host = server.address().address;
        let port = server.address().port 
       console.log("Example app listening at http://:", host, port) 
    }
)