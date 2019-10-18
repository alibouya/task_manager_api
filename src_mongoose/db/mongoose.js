const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    //useFinfAndModify:true,
})

// const mongoose =require('mongoose')
// //const validator=require('validator')
// mongoose.connect('mongodb://127.0.0.1:27017/task_manager_api',{
//     "UseNewUrlParser": "true",
//     "UseCreateIndex" : "true"
// })
//   const User=mongoose.model('User',{
//   name :{
//   type : String,
//   required :true,
//   trim : true
//   },
//   email: {
//     type: String,
//     required :true,
//      trim: true,
//     lowercase:true,
//      validate(value){
//  if(!validator.isEmail(value)){
//     throw new error('Email invalide')
//  }
//      }
//  },
//  passeword :{
//      type : String,
//      required :true,
//      trim : true,
//      minlength: 7,
//      validate(value){
//          if(value.includes("passeword"))
//          throw new error('passeword cannot contain passeword')
//              }
//      },
//   age :{
//   type : Number,
//   default: 0,
//   validate(value){if(value<0){
//       throw new error('age non valide, veuillez entrer un nombre positif ') }

//  }
//   }
//   })

//  const moi = new User({
//      name:'   Ali le fils de taher',
     
//      email: '  ALI.BOUYAHYA@GMAIL.COM',
//      passeword: '    mplokijik'
//   })
//   moi.save().then(()=>{
//   console.log("new user added",moi)
//   }).catch((error)=>{
//   console.log('error!',error)
//   })
////////////////////********new task for challenge**********///////
// const Task=mongoose.model('Tasks',{
//     description :{
//     type : String,
//     required: true,
//     trim : true
//      },
//      completed :{
//     type : Boolean,
//     //required : false
//     default: false
//      }
//      })
//       const task2 = new Task({
//      description : '   Move to the kitchen',
//  })
//   task2.save().then(()=>{
//  console.log("new task added",task2)
//  }).catch((error)=>{
//       console.log('error!',error)
//       })

//////////////******** challeng for passeword**********///////////////


    
    
    
   



// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })