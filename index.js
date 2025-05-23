const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})

    res.end(JSON.stringify({ name: "hello world" }));
})

server.listen(80)
server.listen(3000,()=>{
    console.log("server is running on 30000")
})