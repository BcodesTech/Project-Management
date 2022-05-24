const express = require("express");
const session = require("express-session");
const router = express.Router();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/channels/user.js');
const attach = require('./routes/channels/excel.js');
const bio = require('./routes/channels/bio_data.js');
const irrevocable = require('./routes/channels/irrevocable.js');
const oath = require('./routes/channels/oath.js');
const education = require('./routes/channels/educationn.js');
const home = require('./routes/channels/home.js');
const refree = require('./routes/channels/refre.js');
const employer = require('./routes/channels/employer.js');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.set('view engine', 'ejs');

const duration = 1000 * 60 * 60 * 24;
app.use(session(
    {
        name : "fantasy",
        secret : "T51oAKERKt1D470KYja35YAAxo5yOsbBOxnyNm92QU3hf",
        resave : false,
        saveUninitialized : false,
        cookie : { maxAge : duration }
    }
)); 

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index');
});

app.use('/api', routes);
app.use('/api/file', attach);
app.use('/api/irr', irrevocable);
app.use('/api/oath', oath);
app.use('/api/education', education);
app.use('/api/home', home);
app.use('/api/refree', refree);
app.use('/api/employer', employer);

port = process.env.port || 8371;
app.listen(port, function(){
    console.log("Listening to requests on port " + port);
});