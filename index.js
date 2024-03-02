const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.listen(3000)

app.get('/', (request, response) => {
    response.send("heey aayush rock it!!nodemon installe...learn backend")

})
app.post('/', (request, response) => {
    const { name, course } = request.body
    console.log(name, course);
})