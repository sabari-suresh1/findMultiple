const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Welcome')
});

app.get('/findMultiple', (req, res) => {

    let n1 = parseInt(req.query.a);
    let n2 = parseInt(req.query.b);
  res.send("Multiple of " + a + " and " + b + " is " + (n1*n2) )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})