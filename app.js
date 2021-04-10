var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var User = require('./models/user');
var router = express.Router();
const { Router } = require('express');
mongoose.connect('mongodb+srv://shravan:ravilata@cluster0.yyer7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=>{
    console.log(`connection succasaes`);
    
}).catch((err) => console.log(`no connection`));
 
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
    console.log(req.body);
	var personInfo = req.body;
    var newPerson = new User({
        screw : personInfo.screw,
        paperBag : personInfo.paperBag,
        clamp: personInfo.clamp,
        glass: personInfo.glass
    });
    newPerson.save(function(err, Person){
        if(err)
            console.log(err);
        else
            console.log('Success');
    });
    var sw;
    User.findOne({screw: "11"},function(err, data) {
        if(!data){
            console.log("problem");
        }
        else{
            console.log(data.screw, data.paperBag, data.glass, data.clamp);
            return res.render('in.ejs', {"screw": data.screw, "paperBag": data.paperBag, "clamp":data.clamp, "glass":data.glass});
        }
    }
);
    
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );