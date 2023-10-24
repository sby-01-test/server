const express =  require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.get('/products', function(req, res) {
    res.json([{}])
})

app.listen(PORT, function() {
    console.log('Listening on port', PORT)
})