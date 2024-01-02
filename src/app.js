import express from "express";
import dotEnv from 'dotenv'

const app = express();

dotEnv.config();

app.get("/hello", (req, res) => {
    return res.status(200).json({
        message: "Hello World"
    })
})

app.listen(3000, () => {
    console.log(`Server on at: ${process.env.HOST}: ${process.env.PORT}`);
})