const express =  require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.send('Hello world')
})

app.post('/login', function(req, res) {
    res.json({
        access_token: 'abcdef'
    })
})

app.listen(PORT, function() {
    console.log('Listening on port', PORT)
})