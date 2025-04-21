import fs from "fs"
let users=JSON.parse(fs.readFileSync("./database/users.json","utf-8"))
function GETALL(req,res){

}

function GETID(req,res){

}


function POST(req,res){

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