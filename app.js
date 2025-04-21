import router from "router/index.js"
import express from "express"
const PORT=4000
const server=express()
server.use(express.json())
server.use(router)
server.listen(PORT,console.log("Server "+PORT+" da ishlamoqda"))
