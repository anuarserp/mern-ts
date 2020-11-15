import express from "express";
import morgan from "morgan";
import config from "./config";
import cors from "cors";
import videoRoutes from "./routes/videos.routes";
const app = express();

app.set("port", config.PORT);
//conexion entre servidores
app.use(cors());
//ver peticiones en consola
app.use(morgan("dev"));
//post json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(videoRoutes);

export default app;
