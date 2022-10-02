import pino from "pino";
import utils from "../utils/Utils.js";

const logger = pino({
    level: "info",
    timestamp: () => `,"time":"${utils.getCurrentDateTime()}"`,
    prettyPrint: {
        colorize: true,
        levelFirst: true,
        timestampKey: "time",
        messageKey: "msg",
        ignore: "filename",
    },
});

export default logger;
