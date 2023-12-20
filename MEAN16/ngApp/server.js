const express = require('express')
const path = require('path')

const api = require('./server/routes/api')
const port = 3000
const app = express()

app.use(express.json())
//foler for AN compiled code
app.use(express.static(path.join(__dirname, 'dist')))
//localhost:3000/api
app.use('/api', api);

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, function(){
    console.log("Server running at:"+port)
})