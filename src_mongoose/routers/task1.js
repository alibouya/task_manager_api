// const express =require('express')
// const Task =require('../models/task')
// const auth=require("../middleware/auth")
// const router= new express.Router()

// router.patch('/tasks/:id',auth,async(req,res)=>{
//     const _completed= req.params.id
//    const updates=Object.keys(req.body)
//     const allowdUpdates=['description','completed']
//     const isValidoperations=updates.every((update)=>allowdUpdates.includes(update))
//     if(!isValidoperations){
//         return res.status(400).send({error:'invalid updates'})
//     }

//     try{
//         const task= await Task.findOne({_id:req.params.id, owner: req.user._id})
//         //const task = await Task.findByIdAndUpdate(req.params.id)


//        // const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
//         if(!task){
//             return  res.status(404).send({error : 'oh my god'})  
//         }
//         updates.forEach((update)=> task[update]=req.body[update])
// await task.save()
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
// //  GET/Tasks?completed=true
// router.get('/tasks',auth, async (req, res) => {
//   const match={  } 
//    if(req.query.completed){
//        match.completed=req.query.completed
//    }
//     try {
//       await req.user.populate({
//           path: 'tasks',
//         match :{
//             completed :true
//         }}).execPopulate() // 
//       res.send(req.user.tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
// ///////////////////////////////////////////////////////
// router.get('/tasks/:id',auth,async(req,res)=>{
//     const _id= req.params.id

//     try{

//      const task=await Task.findOne({_id, owner : req.user._id})
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
// router.post('/tasks',auth, async (req, res) => {
//     const task =new Task({
//         ...req.body,
//         owners:req.user._id
//     })
//     try{
//         await task.save()
//          res.status(201).send(task)
//     }catch(e){
//         res.status(400).send(e) 
//     }
// })
//     // const task = new Task(req.body)

//     // task.save().then(() => {
//     //     res.status(201).send(task)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })


// ////////////// Ressources deleting endpoints for user //////////////////////

// router.delete('/tasks/:id',auth,async(req,res)=>{


//     try{
// const task = await Task.findByIdAndDelete({_id:req.params.id, owner: req.user._id})
// if(!task){
//     return  res.status(404).send({error :'oh my god'})  
// }
// res.send(task)
//     }catch(e){
//         res.status(500).send()

//     }
// })

// module.exports= router

const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=10
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts= req.query.sortBy.split(':')
        sort[parts[0]]=parts[1]==='desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            },
            sort: {
                //createdAt: -1
                completed: -1

            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router