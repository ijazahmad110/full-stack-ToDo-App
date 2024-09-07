const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const routes = require ("./routes/ToDoRoute");
const cors = require ("cors");

dotenv.config();

const app =express();
const port = 3000;

app.use(express.json());
app.use(cors());

  const dbconnection= ()=>{
    

try{
    mongoose.connect(process.env.MONGODB_URL)
    console.log("database connected")
}
catch(error){
console.log("database not connected")
}
  }
  dbconnection();
 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
app.use(routes)

