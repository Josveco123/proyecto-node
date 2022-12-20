import express from "express";
import dotenv from "dotenv";
import { dirname, join } from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import indexRautes from "./routes/index.js";
const app = express();

// configuracion de rutas
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// configuracion del puerto
const PORT = process.env.PORT | 3000;

// definicion de req y respuesta del puerto

app.set("views", join(__dirname, "views"));

app.use(indexRautes);
app.use(express.static(join(__dirname, "public")));

app.listen(PORT);

console.log(`comunicado por el puerto ${PORT}`);
