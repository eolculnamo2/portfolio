var mongo = require('mongodb');
var url = "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds235785.mlab.com:35785/singletempo";
module.exports = {
    gather: function(info,callback){
      mongo.MongoClient.connect(url,(err,db)=>{
           db.collection('inbox').insert(info,()=>{
             callback();
           })                     
        })
    }
}