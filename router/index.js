import control from "./controllers/users.js"
import { Router } from "express"



const router=Router()
router
      .get("/api/students",control.GETALL)
      .get("/api/students/:id",control.GETID)
      .delete("/api/students/:id",control.DELETE)
      .post("/api/students/",control.POST)
      .put("/api/students/:id",control.PUT)
export default {
      router
}