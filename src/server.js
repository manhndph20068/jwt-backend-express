import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
require("dotenv").config();
import bodyParser from "body-parser";
//import connection from "./config/connectDB";

const app = express();
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connect db
//connection();
configCors(app);

initWebRoutes(app);
initApiRoutes(app);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("JWT is running");
});
