const express = require('express')
const axios = require('axios')
const cors = require('cors')
const Redis = require('redis')
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

const app = express()
app.use(cors())

const redisClient = Redis.createClient(
    {
    password: 'c8QqDXDQ6NWCFNU6Ja15a7XoDZa3fiHB',
    socket: {
        host: 'redis-13865.c322.us-east-1-2.ec2.cloud.redislabs.com',
        port: 13865
    }
}
);

redisClient.on('error', (error) => console.log(error));
redisClient.on('connect', ()=>console.log("Redis Connected"))

app.get("/photos", async (req, res)=>{
    try{
        await redisClient.connect()
    }catch(ex){console.log(ex.message)}

    const photos = await redisClient.get("photos");

    if(photos != null){
        return res.json(JSON.parse(photos))
    }
    else{
        const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
        )

        redisClient.set('photos', JSON.stringify(data), { EX: 30, NX: true })
        res.json(data)
        }
})
app.get("/photos/:id", async (req, res)=>{
    console.log(req.params.id)
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )
    res.json(data)
})
app.get("/", (req, res) => {
    res.send({message:"Hello World"}); 
})

app.listen(3000, (err)=>{
    if(err == null){
        console.log("Connected")
    }
})