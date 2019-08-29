/* var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)

app.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})

 */
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
//var multer = require('multer')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGODB_URI = 'mongodb://localhost:27017/mcq';

var app = express();
const router = express.Router();
const Data = require('../model');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



mongoose
    .connect(MONGODB_URI,{ useNewUrlParser: true })
    .then(result => {
        app.listen( () => {
            console.log("Server is running on port: " );
        })
    })
    .catch(err => {
        console.log(err);
    });
    let db = mongoose.connection;
    db.once('open', () => {console.log('connected to the database');
});


   
router.get("/working",function(req,res,next){
	console.log("Api is working");
	//return res.json(land.lands);
	
  })

  router.use("/add", (req, res) =>{
    console.log(req.body);
    var myData = new Data(req.body);
    myData.save()
          .then(item => {
        res.send("item saved to database");
      })
       .catch(err => {
         res.status(400).send("unable to save to database");
      });
   });

  
  app.use('/api', router);

  app.listen(9000, function(){
	console.log('Server is running on Port:',9000);
  });

  

