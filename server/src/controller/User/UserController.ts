import express = require('express');
import dbo = require('../../app/db/index');

class UserController {
    dbObject: any;
    constructor() {

    }

    create(request: express.Request, responce: express.Response): void {
        console.log('request.body', request.body);
        try {
            new dbo().getConnection((result: any) => {
                result.collection('user').insertOne({
                    "name": request.body.name,
                    "mobileNo": request.body.mobileNo
                });
                responce.status(200).send({
                    "Data": "User Created",
                    "isSuccess": true
                });
            });


        } catch (error) {
            console.log(error);
            responce.status(500).send(error);
        }
    }

    retrive(responce: express.Response): void {
        try {
            new dbo().getConnection((result: any) => {
                result.collection('user').find({
                }, (err: any, res: any) => {
                    if(res){
                         console.log('res',res);
                        
                        
                    }else{
                        console.log('Error',err);
                    }
                });
                // responce.status(200).send({
                //     "Data": 'All List',
                //     "isSuccess": true
                // });

            });

        } catch (error) {

        }

    }

}
export = UserController;