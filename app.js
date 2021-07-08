const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const cookieparser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(
    session(
        {
            secret: 'This key is used for encryption.',
            resave: false,
            saveUninitialized: false
        }
    ));

app.use(cookieparser());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const user_module = require('./routes/user_module');
app.use('/usuario',user_module);

const register_module = require('./routes/register_module');
app.use('/autenticacao',register_module);

const system_module = require('./routes/system_module');
app.use(system_module);

app.listen(3000, () => { console.log("Listening on port 3000...") });