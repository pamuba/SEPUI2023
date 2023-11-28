require('dotenv').config()
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())

const posts = [
    {
        username:"John",
        title:"Post 1"
    },
    {
        username:"Jimmy",
        title:"Post 2"
    }
]

app.get("/posts", authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})


//Bearer  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTcwMDYwNTU1Mn0.mQeKFxrnwZNpZPeMZ4FEb-B7b5-lydPhcmebfeSTcDU"
function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)


    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
        if(err) return res.sendStatus(403)
        
        req.user = user
        next()
    })

}

app.listen(3000);