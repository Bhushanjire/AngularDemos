import express = require('express');


class UserController {
    url = "mongodb://localhost:27017/";
    MongoClient = require('mongodb').MongoClient;
    connection: any;
    constructor() {
    }

    dbConnect(callback: (error: any, result: any) => void){
        this.MongoClient.connect(this.url, function (err: any, db: any) {
            if (db) {
                let dbo = db.db("collegeDB");
                // dbo.createCollection("user", function(err :any, res :any) {
                //   if (err) throw err;
                //   console.log("Collection created!");
                //   db.close();
                // });
                console.log('Connected To DB');
                callback(null,dbo);
            }else {
                callback(err,null);
                console.log('Not Connected');
            }
        });
    }


    create(request: express.Request, responce: express.Response): void {
        console.log('request.body', request.body);
        try {
            console.log('in try');
            let UserObj = new UserController();
            UserObj.dbConnect((err : any,result: any) => {
                result.collection('user').insertOne({
                    "name": request.body.name,
                    "mobileNo": request.body.mobileNo
                });
            });
            responce.status(200).send({
                "Data": "User Created",
                "isSuccess": true
            });
        } catch (error) {
            console.log(error);
            responce.status(500).send(error);
        }
    }
}
export = UserController;