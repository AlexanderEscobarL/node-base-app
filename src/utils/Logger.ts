import winston from 'winston';

export class Logger {
    public logger: winston.Logger;
    public static INFO = 'info'
    public static WARN = 'warn'
    public static ERROR = 'error'

    constructor(){
        this.logger = winston.createLogger()
        this.logger.add(new winston.transports.Console({
            format: winston.format.simple(),
        }))
    }

    log(level: string, message: string, error?: Error): void {
        this.logger.log({
            level,
            '@timestamp': new Date(),
            message,
            error: error?.message,
            stack: error?.stack
        })
    }

    info(message: string): void {
        this.log(Logger.INFO, message)
    }

    warn(message: string): void {
        this.log(Logger.WARN, message)
    }

    error(message: string, error: Error): void {
        this.log(Logger.ERROR, message, error)
    }
    
}