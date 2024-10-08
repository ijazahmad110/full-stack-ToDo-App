const ToDoModel = require("../models/ToDoModel");

module.exports.geToDo = async(req,res)=>{
    const toDo = await ToDoModel.find();
    res.send(toDo)
};

module.exports.saveToDo = async(req,res)=>{
    const {text} =req.body;

    ToDoModel.create({text})
    .then((data)=>{
        console.log("added successfully");
        // console.log(data);
        res.send(data);
    })
};

module.exports.updateToDo= async(req,res)=>{
    const {_id,text}=req.body;
    ToDoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{res.send("update successfully")})
    .catch((error)=>console.log(error))
};

module.exports.deleteToDo= async(req,res)=>{
    const {_id}=req.body;
    ToDoModel.findByIdAndDelete(_id)
    .then(()=>{res.send("deleted successfully")})
    .catch((error)=>console.log(error))
};
