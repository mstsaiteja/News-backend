const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv-safe').config()
require('./config/database-config')

const PORT = process.env.PORT

//middleware
app.use(express.json())

app.use(express.urlencoded({
    extended: false
}))

app.use(cors())

app.use('/',require('./routes/signup'))

app.use('/',require('./routes/login'))

app.use('/change',require('./routes/change'))

app.listen(PORT, (err) => {
    console.log(`Listening on port ${PORT}...!`)
});
