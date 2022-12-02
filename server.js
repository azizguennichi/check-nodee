const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('<h1>hello node!!!</h1>')
    res.end()
})


server.listen(3000,()=>{console.log('server running')})