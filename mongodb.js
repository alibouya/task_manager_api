//CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID=mongodb.ObjectID
const {MongoClient,ObjectID}=require('mongodb')
/*const Id =new ObjectID()
console.log(Id.id.length)
console.log(Id.toHexString().length)*/
//console.log(Id.getTimestamp())
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

     const db = client.db(databaseName)
     //////////////////////////////////////////////////////////////////////////
     //////////**** read ****//////////////////////
    // db.collection('users').findOne({_id :new ObjectID('5d8fd64cf8398f1464db2a91')},(error,user)=>{
    //     if(error){
    //         console.log('Unable to find what are you looking for')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').findOne({_id :new ObjectID('5d9106f73f5de046484db87d')},(error,task)=>{
        
    //     console.log(task)
    // })
    
    // db.collection('tasks').find({ completed : false }).toArray((error,tasks)=>{
    //  console.log(tasks)
    // })
//     db.collection('users').find({ age : 33 }).toArray((error,users)=>{
// console.log(users)
//     })

//     db.collection('users').find({ age : 33 }).count((error,count)=>{
//         console.log(count)
//             })

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////***** create ******//////////////////////////////////////////////////////////

     /*db.collection('users').insertOne({
         _id: Id,
        name: 'Ali Bouyahya',
         age: 33,
         adress : "ariana"
      },(error, result)=>{
          if(error){
             return console.log("Unable to insert document")
          }
         console.log(result.ops)
      })*/
    
    // db.collection('users').insertMany([{
    //     name: 'Ali Bouyahya',
    //     age: 33,
    //     adress : 'ariana'
    // },{
    //     name: 'Yassine',
    //     age: 29,
    //     location : 'Borj louzir'
    // }],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert document')
    //     }
    //     console.log(result.ops)
    // })
    //console.log("connected well")

    /*db.collection('tasks').insertMany([{
        desciption: 'batata',
       completed: true
    },{
        desciption: 'temateme',
        completed: true
    },{
        desciption: 'fa99ouss',
        completed: false
    }],(error, result)=>{
        if(error){
            return console.log('Unable to insert document')
        }
        console.log(result.ops)
    })*/
    ////////////////////////******* update *****//////////////////
//    db.collection('users').updateOne({ 
//       _id: new ObjectID("5d8fcb245e7e5f24f427a350")
//     },{
//       // $set:{ name :"Kamel" }
//       $inc:{ age :5 }
//    }).then((result)=>{
// console.log(result)
//    }).catch((error)=>{
//        console.log(error)
//    })  

// db.collection('tasks').updateMany({ 
//     completed : false
//   },{
//     // $set:{ name :"Kamel" }
//     $set:{ completed :true }
//  }).then((result)=>{
// console.log(result)
//  }).catch((error)=>{
//      console.log(error)
//  })  
 // db.collection('users').updateOne({
    //     _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


   
 ///////////////////********Delete **************/////////////////

    // db.collection('users').deleteMany({ 
    //        age : 33
             
    //     }).then((result)=>{
    //  console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })  
        
    
         db.collection('tasks').deleteOne({ 
             desciption : "batata"
              
          }).then((result)=>{
       console.log(result)
          }).catch((error)=>{
              console.log(error)
          })  
         


})
 