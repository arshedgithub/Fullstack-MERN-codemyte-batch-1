const winston = require('winston');

// Custom format that includes timestamp, level, file, function, and message
const customFormat = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message, stack, file, function: func }) => {
        const fileInfo = file ? ` [${file}${func ? `:${func}` : ""}]` : '';
        const logMessage = `${timestamp} [${level.toUpperCase()}]${fileInfo}: ${message}`;
        return stack ? `${logMessage}\n${stack}` : logMessage;
    })
);

// Create the logger
const logger = winston.createLogger({
    level: 'info',
    format: customFormat,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                customFormat
            )
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: customFormat
        }),
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: customFormat
        })
    ]
});

// Helper function to get caller information
function getCallerInfo() {
    const stack = new Error().stack;
    const callerLine = stack.split('\n')[3]; // Skip Error, getCallerInfo, and the calling function
    const match = callerLine.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
    
    if (match) {
        const functionName = match[1];
        const filePath = match[2];
        const fileName = filePath.split('/').pop().split('\\').pop(); // Get just the filename
        return { fileName, functionName };
    }
    
    return { fileName: 'unknown', functionName: 'unknown' };
}

// Simplified logger with only info and error methods
const enhancedLogger = {
    info: (message) => {
        const { fileName, functionName } = getCallerInfo();
        logger.info(message, { file: fileName, function: functionName });
    },
    
    error: (message, error = null) => {
        const { fileName, functionName } = getCallerInfo();
        logger.error(message, { 
            file: fileName, 
            function: functionName, 
            error: error?.stack || error
        });
    }
};

module.exports = enhancedLogger;