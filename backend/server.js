const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

const userRouter=require("./Routes/userRoute")
app.use(cors())
app.use(express.json());
// for checking connectionss
(async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to the database");
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on PORT number ${process.env.PORT || 8000}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
})();
 app.use("/",userRouter)