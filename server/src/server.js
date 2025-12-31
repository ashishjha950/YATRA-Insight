import 'dotenv/config'
import app from './app.js'
import connectDB from './config/db.js'

connectDB()

app.listen(process.env.PORT,"0.0.0.0", () =>
  console.log(`Server running on ${process.env.PORT}`)
)
