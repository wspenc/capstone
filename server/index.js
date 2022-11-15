
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
})


const port = process.env.PORT || 5000

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
