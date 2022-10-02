import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logger from "./configs/logger.js";
import router from "./routes.js";

class App {
    #_app;

    constructor() {
        this.#_app = express();
        this.#middlewares();
        this.#database();
        this.#routes();
    }

    #middlewares() {
        this.#_app.use(cors());
        this.#_app.use(express.json());
        this.#_app.use(express.urlencoded({ extended: true }));
    }

    #database() {
        logger.info("Connecting to database...");
        mongoose
            .connect(process.env.MONGO_URL)
            .then(() => logger.info("MongoDB connected ✅"))
            .catch((error) => {
                logger.error("Error connecting to MongoDB ❌");
                logger.error(error);
                logger.info("MongoDB disconnected");
            });
    }

    #routes() {
        this.#_app.use(router);
    }

    get app() {
        return this.#_app;
    }
}

export default new App().app;
