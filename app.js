const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const frontRoutes = require('./routes/front');

app.set('view engine' , 'ejs');
app.set('views' , 'views');
app.use(express.static(path.join(__dirname, 'public')))

app.use(frontRoutes);

app.listen(3000)



