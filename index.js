const http = require('http')
const msg = require(`./message.js`)
const { loadUser } = require('./user_models')

const host ="localhost"
const PORT = process.env.PORT || 5000

const server = http.createServer((req,res) => {
    const jsoncontent = JSON.stringify(loadUser())
  
    res.writeHead(200 ,{ 'Content-Type':'Text/plain' })
    res.write(`${jsoncontent}`)
    res.end()
})

server.listen(PORT, () => {
    console.log(`Start server running at http://${host}:${PORT}`)
})