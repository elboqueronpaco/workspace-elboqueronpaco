import express, {json, urlencoded} from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

//intializations
const app = express()
const port = process.env.PORT || 3333
const host = process.env.HOST || 'http://localhost'
//settings
app.set('port', port)
app.set('host', host)

//middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(urlencoded({ extended: false}))
app.use(json())
//routes

app.get('/', (req, res) => {
    res.send(`The API is at ${app.get('host')}:${app.get('port')}/api`)
})

export default app