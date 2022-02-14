
const express = require('express'); 
const app = express();              
const port = 5000; 

app.get('/', (req, res) => {
  res.type('text/html');
    res.sendFile('index.html', {root: __dirname});
});

app.get('/about', (req,res) => {
  res.type('text/html');
  res.sendFile('about.html', {root: __dirname});
});

app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
 });

app.listen(port, () => { 
  console.log('Express started');
});