import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";
import { config } from "./config/config";

dotenv.config();

const app = express();
const port = config.appPort || 8080;

(async (app: express.Application) => {

  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  console.log("Database Connected");


  app.use(bodyParser.json());

  app.use(cors({
    origin: '*'
  }));


  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  
})(app);

setTimeout(() => {
  app.listen(port, () => {
    console.log(`server running ${process.env.URL}:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
}, 2000);



export default app;