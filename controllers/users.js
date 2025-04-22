import fs from "fs"
let users=JSON.parse(fs.readFileSync("./database/users.json","utf-8"))
function GETALL(req,res){
      return res.status(200).send(JSON.stringify(users))
}

function GETID(req,res){
   try {
      let { id } = req.query;
      let user = users.find(el => el.id == id);
  
      if (user) {
          res.status(200).json(user);
      } else {
          res.status(404).json({ message: "User not found" });
      }
   } catch(error) {
           res.status(400).json({
            status: 400,
            message: "Error",
            error: error.message
       })
    
}
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
      try {
            const { id } = req.params;
            const index = users.findIndex(user => user.id === parseInt(id));
    
    
            users[index] = { ...users[index], ...req.body };
            fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 4));
    
            res.json({ message: "User updated successfully" });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
}


function DELETE(req, res) {
      try {
        const { id, firstname, lastname, course, faculty } = req.query;
        users = users.filter(el => {
            return (
              String(el.id) !== String(id) ||
              String(el.firstname) !== String(firstname) ||
              String(el.lastname) !== String(lastname) ||
              String(el.course) !== String(course) ||
              String(el.faculty) !== String(faculty)
            );
          });          

        fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2));
    
        res.status(200).json({
          status: 200,
          message: "Successfully deleted"
        });
      } catch (error) {
        res.status(500).json({
          status: 500,
          message: "Error Xaltos",
          error: error.message
        });
      }
    }




export default{
      GETALL,
      GETID,
      POST,
      PUT,
      DELETE
}