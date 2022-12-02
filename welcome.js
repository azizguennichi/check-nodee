const http = require('http')
const fs = require('fs')
var path = "welcome.txt"
var data = "Hello Node"

var welcome = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/html;charset=utf8"})
    fs.writeFile(path,data,'utf8',(err)=>{
        if(err) throw err
         console.log("Hello Node")
         res.write('Hello Node')
         res.end()
    })
})
console.log('connected')
welcome.listen(3000)