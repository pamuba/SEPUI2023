require('dotenv').config()
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())


let refreshTokens = []

app.post('/token', (req, res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) 
        return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken))
        return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err){
            return sendStatus(403)
        }
        const accessToken = generateAccessToken({name:user.name})
        res.json({accessToken:accessToken})
    })
})

app.post("/login", (req, res) => {
    //Login Code here
  
    const username = req.body.username
    const user = {name: username}

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken:accessToken, refreshToken:refreshToken})

})

// //Bearer  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTcwMDYwNTU1Mn0.mQeKFxrnwZNpZPeMZ4FEb-B7b5-lydPhcmebfeSTcDU"
// function authenticateToken(req, res, next){
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if(token == null) return res.sendStatus(401)


//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
//         if(err) return res.sendStatus(403)
        
//         req.user = user
//         next()
//     })

// }

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30s'})
}





app.listen(4000);