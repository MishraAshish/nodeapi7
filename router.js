let express = require('express'),
router = express.Router({caseSensitive:false}),
userModel = require("./DataModel/UserModel");


router.get("/createuser",(req, res)=>{
    console.log(req.query);

    let objUserModel = new userModel(req.query);

    console.log(objUserModel);

    objUserModel.save((err, data, next)=>{        
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(data);
      });

    //res.send(req.query);
});

//REST
router.get('/helloWorld', function (req, res) //Creating an api
{ 
    res.send('Hello World'); 
});

router.get('/getstudnts',(req, res)=>{
    var outputfile = require("./output.json");
    console.log(outputfile);
    res.send(outputfile);
})

router.get('/hellostudents', function (req, res) //Creating an api
{ 
    console.log(req.query);    
    //fs = create the write stream and save the data
    var path = "output.json";
    fs.stat(path, function(err, stat) {
        console.log("Test", err);
        if(err == null) {
            fs.appendFile('output.json'," ,"+JSON.stringify({
            user:req.query,
            status: 200
        }),"UTF8",()=>{});
      }else{
        fs.appendFile('output.json',JSON.stringify({
            user:req.query,
            status: 200
        }),"UTF8",()=>{});
      }
    });
    
    // Mark the end of file 
    
    res.json({
        user:req.query,
        status: 200
    });
    //res.send('Hello Smart Students'); 
});

router.post("/sendmehtml",(req,res)=>{
    res.send("<h1>This is html from express route</h1>").status(400);
});

router.get("*",(req,res)=>{
    res.sendFile("index.html",{ root: __dirname });
});

// let server = app.listen(9091, function () 
//     { 
//         let host = server.address().address;
//         let port = server.address().port 
//        console.log("Example app listening at http://:", host, port) 
//     }
// )


module.exports = router;