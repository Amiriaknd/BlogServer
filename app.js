var restify = require('restify')


function respond(req, res, next) {
    res.send(`hello ${req.params.name}`)
    next()
}

var server = restify.createServer()
server.get('/hello/:name', respond)

server.listen(2333, function() {
    console.log(`${server.name} is listeing at ${server.url}`)
})