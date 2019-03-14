require('./models/db')

const express = require('express')

const employeeController = require('./controllers/employeeController')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//create http server
var app = express()
//handle request body
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
//configure view module and view path for project
app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname + '/views/layouts/'}))
app.set('view engine', 'hbs')

app.listen(3000, () => {
    console.log('express server is started at 3000')
})

//configure router
app.use('/employee', employeeController)
