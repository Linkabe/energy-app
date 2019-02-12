var express = require('express');
//var path = require('path');
//var gpio = require('rpi-gpio');
//var Gpio = require('onoff').Gpio;
//var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false
//  }));

var usersRouter = require('./Router/users.js');
//var authRouter = require('./Router/authentication.js');
var textRouter = require('./Router/textapp.js');
var heatingRouter = require('./Router/heating.js');
var energyRouter = require('./Router/energy.js');
var deviceRouter = require('./Router/device.js');

// gpio.setup(18, gpio.DIR_OUT);
// app.set('views', path.resolve(__dirname, '../Public/'));
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.get('/heatingtable.html', function(req, res){
//   res.render('heatingtable',{status:"Press Button"});
// });

// app.post('/heating/on', function(req, res){
// gpio.write(18, true, function(err) {

//         if (err) throw err;
//         console.log('Written True to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('heatingtable', {status: "Heating is On"});
//     });
// });

// app.post('/heating/off', function(req, res){
// gpio.write(18, false, function(err) {

//         if (err) throw err;
//         console.log('Written False to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('heatingtable',{status: "Heating is Off"});
//     });
// });

// gpio.setup(18, gpio.DIR_OUT);
// app.set('views', path.resolve(__dirname, '../Public/'));
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.get('/devicetable.html', function(req, res){
//   res.render('devicetable',{status:"Press Button"});
// });

// app.post('/heating1/on', function(req, res){
// gpio.write(18, true, function(err) {

//         if (err) throw err;
//         console.log('Written True to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable', {status: " On"});
//     });
// });

// app.post('/heating1/off', function(req, res){
// gpio.write(18, false, function(err) {

//         if (err) throw err;
//         console.log('Written False to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable',{status: " Off"});
//     });
// });

// gpio.setup(7, gpio.DIR_OUT);
// app.set('views', path.resolve(__dirname, '../Public/'));
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.get('/devicetable.html', function(req, res){
//   res.render('devicetable',{status:"Press Button"});
// });

// app.post('/lights/on', function(req, res){
// gpio.write(7, true, function(err) {

//         if (err) throw err;
//         console.log('Written True to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable', {status: " On"});
//     });
// });

// app.post('/lights/off', function(req, res){
// gpio.write(7, false, function(err) {

//         if (err) throw err;
//         console.log('Written False to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable',{status: "Off"});
//     });
// });

// gpio.setup(37, gpio.DIR_OUT);
// app.set('views', path.resolve(__dirname, '../Public/'));
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.get('/devicetable.html', function(req, res){
//   res.render('devicetable',{status:"Press Button"});
// });

// app.post('/tv/on', function(req, res){
// gpio.write(37, true, function(err) {

//         if (err) throw err;
//         console.log('Written True to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable', {status: " On"});
//     });
// });

// app.post('/tv/off', function(req, res){
// gpio.write(37, false, function(err) {

//         if (err) throw err;
//         console.log('Written False to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('devicetable',{status: "Off"});
//     });
// });

// gpio.setup(17, gpio.DIR_OUT);
// app.set('views', path.resolve(__dirname, '../Public/'));
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.get('/energytable.html', function(req, res){
//   res.render('energytable',{status:"Press Button"});
// });


// app.post('/mainpower/on', function(req, res){  
//     // Switch relays every 1 sec
//     // relay is active low
//     var rly2 = new Gpio(17, 'out');
//     var rly1= new Gpio(27, 'out');
        
//           //if (rly1.readSync() === 1) {
//            //rly1.writeSync(1); // If pin is 0, write 1
//            rly2.writeSync(0);
//            rly1.writeSync(0); 
        
//         console.log('Written True to pin');
// console.log(path.join(__dirname, 'public'));
// return res.render('energytable', {status: "Main Power is On"});
//     });

// app.post('/mainpower/off', function(req, res){  
//         // Switch relays every 1 sec
//         // relay is active low
//         //var rly1 = new Gpio(17, 'out');
//         var rly2 = new Gpio(17, 'out');
//         var rly1= new Gpio(27, 'out');
        
//           //if (rly1.readSync() === 1) {
//            //rly1.writeSync(1); // If pin is 0, write 1
//            rly2.writeSync(0); // If pin is 1, write 0
//            rly1.writeSync(0);
            
//             console.log('Written False to pin');
//     console.log(path.join(__dirname, 'public'));
//     return res.render('energytable', {status: "Main Power is Off"});
//         });




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.all( '/createuser.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });

// app.all( '/admintables.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });
//
// app.all( '/contactus.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });
//
// app.all( '/thetextapp.html', function(req,res, next){
//     console.log("checking welcome");
//     if (req.session && req.session.check){
//         next();
//     }
//     else{
//         res.redirect('/login.html');
//     }
// });

app.use(express.static('../Public/'));
app.use("/users", usersRouter);
// app.use("/authentication", authRouter);
app.use("/textapp", textRouter);
app.use("/heating", heatingRouter);
app.use("/device", deviceRouter);
app.use("/energy", energyRouter);



const server = app.listen(3003, function () {
    const port = server.address().port;
    console.log("Example app listening at :%s", port)
});
