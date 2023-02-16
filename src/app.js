import express from 'express'
import conf from './conf.js'
import pantheonsRoutes from './routes/pantheons.routes.js'
const app = express()


// setings
app.set('port', conf.port)
//middlwares (no se si los necesitare para un futuro)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(pantheonsRoutes)
export default app