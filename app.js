import  express  from "express";
import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const app = express();

mongoose
  .connect(
    "mongodb+srv://jinx:jiljiljiga@birthdays.eexug.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));

app.use("/api",(req,res)=>{
    res.send("Hello");
})



