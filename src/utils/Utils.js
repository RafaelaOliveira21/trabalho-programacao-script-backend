import moment from "moment-timezone";

class Utils {
    static DATA_TIME_FORMAT = "DD/MM/yyyy HH:mm:ss";
    static TIME_ZONE = "America/Sao_Paulo";

    static getCurrentDateTime() {
        return moment().tz(Utils.TIME_ZONE).format(Utils.DATA_TIME_FORMAT);
    }
}

export default Utils;
