const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()

const port = 3000

app.listen(port, () => {
    console.log("Servidor en le puerto: " , port)
})