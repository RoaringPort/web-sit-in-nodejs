const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

const port = 3000

app.set('views', './views')
app.set("view engine", 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Funciona")
})

app.listen(port, () => {
    console.log("Servidor en el puerto: " , port)
})