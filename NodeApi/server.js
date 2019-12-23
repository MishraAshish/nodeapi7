let express = require("express"),
fs = require("fs"),
app = express(), // instantiates express application
router = require("./router"),
port = process.env.PORT || 9090,
bodyParser = require("body-parser");

//app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'200mb', extended:false}));

app.use('/',router);

console.log("we are listening at", port);
app.listen(port);

