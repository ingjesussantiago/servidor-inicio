import express from "express"
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")


app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) =>{
    res.render("home")
})

const PORT = 8080


app.listen(PORT, () => {
    console.log("escuchando puerto con htpp")
      
      
})

