const router = require("express").Router()

route.get("/", (req, res) => {
    return res.send("Inside the user router")
})

module.exports = router