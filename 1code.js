const http=require('http');

var dt= require('./module')

http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/plain '})
    res.end("I'm Muskan\n today is "+ dt.giveDate())
}

).listen(8080,()=>{
    console.log("Port number is 8080")
})

function sayHello(name){

    console.log("Hey"+name)
}
sayHello("Muskan");