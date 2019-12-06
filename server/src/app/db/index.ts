class DBConnect {
    url: string;
    MongoClient: any;
    conectionObject: any;
    constructor() {
        this.url = "mongodb://localhost:27017/";
        this.MongoClient = require('mongodb').MongoClient;
    }

    getConnection(callback: (result: any) => void) {
        this.MongoClient.connect(this.url, function (err: any, db: any) {
            if (db) {
                let dbo = db.db("collegeDB");
                 callback(dbo);
                // dbo.createCollection("user", function(err :any, res :any) {
                //   if (err) throw err;
                //   console.log("Collection created!");
                //   db.close();
                // });
                console.log('Connected To DB');
            } else {
                 callback(null);
                console.log('Not Connected');
            }
        });
    }
}
export = DBConnect;