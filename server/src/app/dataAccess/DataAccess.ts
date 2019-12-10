import Mongoose = require('mongoose');
Mongoose.Promise = Promise;

class DataAccess {
    static mongoosInstance: any;
    static mongoosConnection: Mongoose.Connection;

    constructor() {
        DataAccess.connect();
    }

    static connect(): Mongoose.Connection {
        if (this.mongoosInstance)
            return this.mongoosInstance;
        this.mongoosConnection = Mongoose.connection;
        this.mongoosInstance = Mongoose.connect('mongodb://localhost:27017/collegeDB', { useCreateIndex: true, useNewUrlParser: true });

        this.mongoosConnection.once("open", () => {
            console.log("Ready to Operate");
        });

        Mongoose.connection.on('connected', () => {
            console.log('Successfully connected: DBURL----');
        });

        Mongoose.connection.on('error', (err) => {
            console.log('Mongoose connection error: ' + err);
        });

        Mongoose.connection.on('disconnected', () => {
            console.log('-> lost connection');
        });

        Mongoose.connection.on('reconnect', () => {
            console.log('-> reconnected');
        });

        Mongoose.connection.on('reconnectFailed', () => {
            console.log('-> gave up reconnecting');
        });


        process.on('SIGINT', () => {
            Mongoose.connection.on('close', () => {
                console.log('Mongoose disconnected through app termination');
                process.exit(0);
            });
        });

        process.on('uncaughtException', (exception) => {
            console.log("----------------------------UncaughtException: -----------------------", exception);
        })
        return this.mongoosInstance;
    }
}
DataAccess.connect();
export = DataAccess;