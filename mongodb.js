// Crud create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id  = new ObjectID();

// connect to the server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if(err){
        console.log('Unable to connect the database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').deleteMany({
        age: 63
    }).then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err);
    });
})  

