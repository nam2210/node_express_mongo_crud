require('./models/db')

const express = require('express')

const employeeController = require('./controllers/employeeController')

//create http server
var app = express()

app.listen(3000, () => {
    console.log('express server is started at 3000, Hello')
})

app.use('/employee', employeeController)
