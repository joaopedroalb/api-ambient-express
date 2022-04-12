const express = require('express')
const app = express()
app.use(express.json());
app.listen(9090,()=>{
    console.log("Server rodando")
})

app.get("/sum", (req, res) => {
    const {a,b} = req.query
    if(!a || !b || isNaN(a) || isNaN(b))
        return res.send({error:"Use valores validos"})
    return res.send({'soma':sum(+a,+b)})
});

app.post("/sumbody", (req, res) => {
    const {a,b} = req.body
    if(!a || !b || isNaN(a) || isNaN(b))
        return res.send({error:"Use valores validos"})
    return res.send({'soma':sum(+a,+b)})
});

const sum = (a,b) =>{
    return a + b
}