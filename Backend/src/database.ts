import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

//mongoose connection
(async () => {
   try {
      const mongooseOptions: ConnectionOptions = {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         /*
         user: config.MONGO_USER
         password: config.MONGO_PASSWORD
         
        */
      };
      const db = await mongoose.connect(
         `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
         mongooseOptions
      );
      console.log("conectada la base de datos:", db.connection.name);
   } catch (error) {
      console.error(error);
   }
})();
