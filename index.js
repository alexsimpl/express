import express from 'express';
import path from 'path';
import {requestTime, logger} from './middlewares.js'; 
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
// console.log(app.get('views'))


const port = process.env.PORT || 4000 

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)

app.get('/', (req, res) => {
  res.render('index', {title:'main page', active: 'main'})
})

app.get('/features', (req, res) => {
  res.render('features', {title: 'features page', active: 'features'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
