let mongooseObj = require("mongoose"),
Schema = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/dectraining");

let userSchema = new Schema({
    name: {type:String, required:true},
    age: Number,
    street: String,
    address: Object
});

let userObj = mongooseObj.model("user", userSchema);

module.exports = userObj;