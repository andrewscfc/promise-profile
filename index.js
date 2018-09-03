const express = require('express');
const app = express();
const crypto  = require('crypto');

const getRandomBytes = () => {
  for(let i = 0 ; i<100000; i++){
    crypto.randomBytes(1000).toString('base64');
  }
  return crypto.randomBytes(1000).toString('base64');
};

app.get('/', (req, res) =>{
  const someBytes = getRandomBytes();
  res.send(someBytes);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));


