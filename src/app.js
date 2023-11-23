import express from "express";
import config from './config'
import cors from 'cors';
import userRoutes from './routes/users.routes'

const app = express()

// server settings
app.set('port', config.port)
app.use(cors())
// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(userRoutes)

export default app