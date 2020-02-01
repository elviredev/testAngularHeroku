const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('./dist/testAngularHeroku'));

app.get('/*', function(req, res){
    res.sendfile(path.join(__dirname, '/dist/testAngularHeroku/index.html'));
});

app.listen(process.env.PORT || 8080);