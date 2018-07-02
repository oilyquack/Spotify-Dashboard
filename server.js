const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('static'));
app.set('view engine', 'hbs');

app.listen(8080, function(){
  console.log('Listening on port 8080');
});
