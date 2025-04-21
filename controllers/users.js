import fs from "fs"
let users=JSON.parse(fs.readFileSync("./database/users.json","utf-8"))
function GETALL(req,res){

}

function GETID(req,res){

}


function POST(req,res){
      
      const {firstname,lastname,cours,faculty}=req.body
      try{
            if(!firstname || !lastname || !faculty || !cours){
                  throw Error("Invalid something")
            }
            const newUser={
                  id:users.length ? users.at(-1).id+1:1,
                  firstname,
                  lastname,
                  faculty,
                  cours
            }
            users.push(newUser)
            fs.writeFileSync("./database/users.json",JSON.stringify(users,null,4))
            res.status(201)
            res.send("Success added")
      }
      catch(error){
            res.status(400)
            res.send(error.message)
      }
}

function PUT(req,res){

}


function DELETE(req,res){

}



export default{
      GETALL,
      GETID,
      POST,
      PUT,
      DELETE
}