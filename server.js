const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080

const app = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('./dist'))

app.listen(PORT, x => console.log(`Listening on for requests on port ${PORT}...`))
