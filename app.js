const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const system_module = require('./routes/system_module');
app.use(system_module);

app.listen(3000, () => { console.log("Listening on port 3000...") });