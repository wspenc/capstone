
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {createGrocery, deleteAll, getMeal} = require('./controller')

app.post("/api/create", createGrocery);
app.delete("/api/delete-all", deleteAll)
app.get("/api/meal", getMeal)
app.listen(4000, () => console.log("Server running on 4000"));