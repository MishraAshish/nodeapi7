let express = require("express"),
fs = require("fs"),
app = express(); // instantiates express application

//REST
app.get('/helloWorld', function (req, res) //Creating an api
{ 
    res.send('Hello World'); 
});

app.get('/hellostudents', function (req, res) //Creating an api
{ 
    console.log(req.query);    
    //fs = create the write stream and save the data
    var writerStream = fs.createWriteStream('output.json');
    writerStream.write(JSON.stringify({
        user:req.query,
        status: 200
    }) ,'UTF8'); 
    // Mark the end of file 
    writerStream.end(); 
    res.json({
        user:req.query,
        status: 200
    });
    //res.send('Hello Smart Students'); 
});

app.post("/sendmehtml",(req,res)=>{
    res.send("<h1>This is html from express route</h1>").status(400);
});

app.get("*",(req,res)=>{
    res.sendFile("index.html",{ root: __dirname });
});

let server = app.listen(9091, function () 
    { 
        let host = server.address().address;
        let port = server.address().port 
       console.log("Example app listening at http://:", host, port) 
    }
)