import dotenv from "dotenv";
dotenv.config();

export default {
   MONGO_DATABASE: process.env.MONGO_DATABASE || "mern-database",
   MONGO_USER: process.env.MONGOUSER || "admin",
   MONGO_PASSWORD: process.env.MONGO_PASSWOORD || "admin",
   MONGO_HOST: process.env.MONGO_HOST || "localhost",
   PORT: process.env.PORT || 4000,
};
