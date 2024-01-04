import express from "express";
import dotEnv from 'dotenv'

const app = express();

dotEnv.config();

import Api from "./routes/index.js";

app.use('/api', Api)

app.listen(3000, () => {
    console.log(`Server on at: ${process.env.HOST}: ${process.env.PORT}`);
})