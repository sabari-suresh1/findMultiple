const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Welcome')
});

app.get('/findMultiple', (req, res) => {
  res.send('need to inmplement')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})