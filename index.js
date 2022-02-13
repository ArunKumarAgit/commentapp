var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('commentapp'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var number = req.body.number;

    var data = {
        "email": email,
        "password": password,
        "number": number
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('textarea.html')

})
app.post("/sign_in", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "email": email,
        "password": password
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('textarea.html')

})

app.post("/textarea", (req, res) => {
    var email = req.body.email;
    var comment = req.body.comment;

    var data = {
        "email": email,
        "comment": comment
    }

    db.collection('comments').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('textarea.html')

})
app.get("/reset",async (req,res)=>{
    
    try {

        const collection = await mydb.collection('users').find({});

        return res.json(collection);

    } catch(e) {

        return res.json({});

    }


})

app.get("/sign_up",async (req,res)=>{
    
    try {

        const collection = await mydb.collection('users').find({});

        return res.json(collection);

    } catch(e) {

        return res.json({});

    }


})
app.get("/sign_in",async (req,res)=>{
    
    try {

        const collection = await mydb.collection('users').find({});

        return res.json(collection);

    } catch(e) {

        return res.json({});

    }


})

app.get("/textarea",async (req,res)=>{

    try {

        const collection = await mydb.collection('comments').find({});

        return res.json(collection);

    } catch(e) {
        return res.json({});

    }


})
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('signin.html');
}).listen(3000);

console.log("Listening on PORT 3000");
