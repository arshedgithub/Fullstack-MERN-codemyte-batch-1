const logger = {
    info:(message, file = "", functionName = "") => {
        const timestamp = new Date().toISOString();
        // const logMessage = timestamp + " [Info] " + file + " " + functionName;
        const logMessage = `${timestamp} [Info] ${message} file: ${file} function: ${functionName}`;
        console.log(logMessage);
    },

    error: (message, file = "", functionName = "", error = null) => {
        const timestamp = new Date().toISOString();
        // const logMessage = timestamp + " [Info] " + file + " " + functionName;
        const logMessage = `${timestamp} [Error] ${message} file: ${file} function: ${functionName}`;
        console.error(logMessage);
    },
}

module.exports = logger;
