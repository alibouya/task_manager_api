const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user1')
const userRouter_task = require('./routers/task1')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(userRouter_task)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const express =require('express')
// require ('./db/mongoose.js')
// //  const User = require("./models/user.js")
// //  const app =express()
// //  const port = process.env.PORT || 3000
// //  app.use(express.json())
// //  app.post('/users',(req,res)=>{
// //     const user= new User(req.body)

// //   user.save().then(()=>{
// // res.send(user)
// //    }).catch((e)=>{
// //        res.status(400).send(e)
// //    })
// //  })
// // app.listen(port, ()=>{
// //     console.log("Server is up on port")
// // })

// const Task = require("./models/task.js")
// const app =express()
// const port = process.env.PORT || 3000
// app.use(express.json())
// app.post('/tasks',(req,res)=>{
// const task= new Task(req.body)

//   task.save().then(()=>{
// res.send(task)
//    }).catch((e)=>{
//        res.status(400).send(e)
//    })
// })

// app.listen(port, ()=>{
//     console.log("Server is up on port")
// })

// ////////// multer is user to upload files or images
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         // if(!file.originalname.endsWith('.pdf')){
//         //  return cb(new Error('Please upload a PDF'))
//         if(!file.originalname.match(/\.(doc|docx|pdf|jpg|bmp|png)$/)){
//             return cb(new Error('Please upload a word document'))
//         }else{
//             cb(undefined, true)
//         }

//         ///////////// three ways to call cb=callback
        
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()

// })


////////// multer is user to upload files or images
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         // if(!file.originalname.endsWith('.pdf')){
//         //  return cb(new Error('Please upload a PDF'))
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }else{
//             cb(undefined, true)
//         }
// }
// })
        ///////////// three ways to call cb=callback
        
        // cb(new Error('File must be a PDF'))
        // cb(undefined,true)
        // cb(undefined,false)
 
//middleware function 
// const errorMiddleware=(req,res,next)=>{
//     throw new Error('From my middleware')
// }
// app.post('/upload',upload.single('upload') , (req, res) => {
//     res.send()

// },(error,req,res,next)=>{
//     res.status(400).send({error: error.message})

// })




// app.use((req,res,next)=>{

// if(req.method==='GET'){
//     res.send('GET request is disable')
// }else{
//     next()

// }
// console.log(req.method, req.path)
// next()
// })
// challenge ; 
// app.use((req,res,next)=>{

//         res.status(503).send('Server is under maintenance')
// })






//////////// create new router //////////////
// const router =new express.Router()

// router.get('/test',(req,res)=>{
//     res.send('this is from a new router')
// })

// app.use(router)





// ////////////// Ressources deleting endpoints for user //////////////////////

// app.delete('/users/:id',async(req,res)=>{


//     try{
// const user = await User.findByIdAndDelete(req.params.id)
// if(!user){
//     return  res.status(404).send()  
// }
// res.send(user)
//     }catch(e){
//         res.status(500).send()

//     }
// })

// //////////////***********************fetch all tasks and tasks by id********** */


// app.patch('/tasks/:id',async(req,res)=>{
//     const _completed= req.params.id
//    const updates=Object.keys(req.body)
//     const allowdUpdates=['description','completed']
//     const isValidoperations=updates.every((update)=>allowdUpdates.includes(update))
//     if(!isValidoperations){
//         return res.status(400).send({error:'invalid updates'})
//     }

//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
//         if(!task){
//             return  res.status(404).send({error : 'oh my god'})  
//         }
//         res.send(task)
//                 }catch(e){
//                     res.status(400).send()
//                 }

//     // try{
//     //     const tasks = await Task.find({})
//     //        res.send(tasks) 
//     //    }catch(e){
//     //     res.status(500).send()
//     //    }

//     // Task.find({}).then((tasks)=>{
//     //   res.send(tasks)  
//     // }).catch((e)=>{
//     //     res.status(500).send()

//     // })
// })

// // app.get('/tasks/:description',(req,res)=>{
// // //const _completed= req.params.completed
// // Task.findOne({description:'Move to the kitchen'}).then((task)=>{
// // if(!task){
// //   return  res.status(404).send()

// // }
// // res.send(task)
// // }).catch((e)=>{
// //     res.status(500).send()

// // })
// // })


// app.get('/tasks/:id',async(req,res)=>{
//     const _id= req.params.id

//     try{
//      const task=await Task.findById(_id)
//      if(!task){
//          return  res.status(404).send()

//          }
//          res.send(task)
//     }catch(e){
//         res.status(500).send()
//     }
//     // Task.findById(_id).then((task)=>{
//     // if(!task){
//     //   return  res.status(404).send()

//     // }
//     // res.send(task)
//     // }).catch((e)=>{
//     //     res.status(500).send()

//     // })
//     })
// //////////////////////********************************************************** */
// app.post('/tasks', async (req, res) => {
//     try{
//         const task = await new Task(req.body)
//         task.save()
//          res.status(201).send(task)
//     }catch(e){
//         res.status(400).send(e) 
//     }

//     // const task = new Task(req.body)

//     // task.save().then(() => {
//     //     res.status(201).send(task)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
// })

// ////////////// Ressources deleting endpoints for user //////////////////////

// app.delete('/tasks/:id',async(req,res)=>{


//     try{
// const task = await Task.findByIdAndDelete(req.params.id)
// if(!task){
//     return  res.status(404).send({error :'oh my god'})  
// }
// res.send(task)
//     }catch(e){
//         res.status(500).send()

//     }
// })
// //////////////////////////////////



// ////////////////////////////////////////////////////////////////
// const main =async()=>{
// // const task =await Task.findById('5d8fd82db3eab40324567178')
// // await task.populate('owner').excePopulate()
// // console.log(task.owner)
// const user =User.findById('5d8fcb245e7e5f24f427a350')
// await user.populate('tasks').execPopulate
// console.log(user.tasks)
// }
// main()
//////////////////////////////////////////////////////////////

















//const bcrypt =require('bcryptjs')
// const jwt =require('jsonwebtoken')

// const MyFunction = async()=>{
// ////////// old function with bcrypt  /////////////////

// //const password='alibouya1986'
// // const hashedpassword=await bcrypt.hash(password,8)
// // console.log(password)
// // console.log(hashedpassword)
// // const isMatch = await bcrypt.compare('alibouya1986', hashedpassword)
// // console.log(isMatch)

// /////////////// New function with jasonwebtoken /////////////

// const token= jwt.sign({_id:'abs123'},'thisismynewcourse',{expiresIn : '7 days'})

// console.log(token)
// const data= jwt.verify(token,'thisismynewcourse')
// console.log(data)


// }
// MyFunction ()