const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const serverMessage = 'Server running on port'
const messageArrow = '=>'

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/stories', require('./routes/storyRoutes'))

app.use(errorHandler)

app.listen(port, () =>
  console.log(
    `  ${serverMessage.yellow} ${messageArrow.white} ${port.bold.red}`
  )
)
