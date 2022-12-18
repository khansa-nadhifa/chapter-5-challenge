const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(express.static('public'))  

const route = require("./routes/route")
app.use(route)

//internal server error
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})

app.use((req, res, next) => {
    res.status(401).json({
        status: 'fail',
        errors: 'Are you lost?'
    })
})

app.listen(port, () => {
    console.log(`Web started at port : ${port}`)
})
