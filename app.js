const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  const filePath = path.join(__dirname, 'public', 'homepage', 'index.html');
  res.sendFile(filePath);
});

app.listen(5000, function() {
  console.log('Server is running on localhost:5000');
});
