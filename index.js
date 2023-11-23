require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('HelloWorld!')
})
app.get('/name', (req, res) => {
    res.send('Vaibhav')
  })

app.get('/login',(req,res)=>{
    res.send('<h1> Please login</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})