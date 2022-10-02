import "dotenv/config";
import app from "./App.js";
import logger from "./configs/logger.js";

app.listen(process.env.PORT || 3000, () => {
    logger.info("Server started on port 3000");
});
