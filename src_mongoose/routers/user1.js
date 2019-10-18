// // const express =require('express')
// // const User =require('../models/user')

// // const router= new express.Router()
// // router.post('/users', async (req, res) => {
// //     const user = new User(req.body)

// // try{
// //     await user.save()
// //     const token = await user.generateAuthToken()
// //     res.status(201).send({user, token})
// // }    catch(e){
// //     res.status(400).send(e)
// // }
// //     // user.save().then(() => {
// //     //     res.status(201).send(user)
// //     // }).catch((e) => {
// //     //     res.status(400).send(e)
// //     // })
// // })
// // ////////   logging in users /////////////

// // // router.post('/users/login', async (req, res) => {
// // // try{
// // // const user = await User.findByCredentials(req.body.email, req.body.password)
// // // const token =await user.generateAuthToken()
// // //  res.send({user,token})
// // // }catch(e){
// // // res.status(400).send()

// // // }

// // // })
// // router.post('/users/login', async (req, res) => {
// //     try {
// //         const user = await User.findByCredentials(req.body.email, req.body.password)
// //         const token = await user.generateAuthToken()
// //         res.send({ user, token })
// //     } catch (e) {
// //         res.status(400).send()
// //     }
// // })

// // router.get('/users',async(req,res)=>{

// //     try{
// //         const users=await User.find({})
// //         res.send(users)
// //     }catch(e){
// //         res.status(500).send(e)
// //     }
// //     // User.find({}).then((users)=>{
// //     //   res.send(users)  
// //     // }).catch((e)=>{
// //     //     res.status(500).send()

// //     // })
// // })

// // router.get('/users/:id',async(req,res)=>{
// // const _id= req.params.id

// // try{
// //     const user=await User.findById(_id)
// //     if(!user){
// //        return  res.status(404).send()
// //     }    
// //     res.send(user)
// // }catch(e){
// //     res.status(500).send()
// // }
// // // User.findById(_id).then((user)=>{
// // // if(!user){
// // //   return  res.status(404).send()

// // // }
// // // res.send(user)
// // // }).catch((e)=>{
// // //     res.status(500).send()

// // // })
// // })

// // router.patch('/users/:id',async(req,res)=>{
// //     const updates=Object.keys(req.body)
// //     const allowdUpdates=['name','email','password','age']
// //     const isValidoperations=updates.every((update)=>allowdUpdates.includes(update))

// //     if(!isValidoperations){
// //         return res.status(400).send({error:'invalid updates'})
// //     }
// //     try{
// //         const user = await User.findByIdAndUpdate(req.params.id)

// //         user.name = 'Something else'
// //         updates.forEach((update)=> user[update]=req.body[update])
// // //const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})
// // if(!user){
// //     return  res.status(404).send()  
// // }
// // res.send(user)
// //     }catch(e){
// //         res.status(400).send()
// //     }
// // })

// // module.exports= router


// const express = require('express')
// const User = require('../models/user')
// const router = new express.Router()
// const auth=require('../middleware/auth')
// router.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         const token = await user.generateAuthToken()
//         res.status(201).send({ user, token })
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         const token = await user.generateAuthToken()
//         res.send({ user, token })
//     } catch (e) {
//         res.status(400).send()
//     }
// })

// router.get('/users/me',auth, async (req, res) => {


// res.send(req.user)




//     // try {
//     //     const users = await User.find({})
//     //     res.send(users)
//     // } catch (e) {
//     //     res.status(500).send()
//     // }
// })

// router.post('/users/logout',auth, async (req, res) => {
// try{
// req.user.tokens=req.user.tokens.filter(()=>{
//     return token.token !== req.token
// })
// await req.user.save()
// res.send()
// }catch(e){
// res.status(500).send()
// }

// })

// ///////// challenge/////////////
// router.post('/users/logoutAll',auth, async (req, res) => {
//     try{
//         req.user.tokens=[]
//     await req.user.tokens.save()
//     res.send()
//     }catch(e){
//     res.status(500).send()
//     }

//     })
// // router.get('/users/:id', async (req, res) => {
// //     const _id = req.params.id

// //     try {
// //         const user = await User.findById(_id)

// //         if (!user) {
// //             return res.status(404).send()
// //         }

// //         res.send(user)
// //     } catch (e) {
// //         res.status(500).send()
// //     }
// // })

// router.patch('/users/me',auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {

//         updates.forEach((update) => req.user[update] = req.body[update])
//         await req.user.save()


//         res.send(req.user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/users/me',auth, async (req, res) => {
//     try {

// await req.user.remove()
//         res.send(req.user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// module.exports = router


const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const sharp = require('sharp')
const { sendWelcomeEmail, deleteAccount } = require('../emails/account')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})
router.delete('/users', async (req, res) => {
    try {
        await req.user.remove()
        sendCancelationEmail(req.user.email, req.user.name)


        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

const multer = require('multer')
const upload = multer({
    //dest: 'avatar',
    limits: {
        fileSize: 1000000
    },
    //file filter est une méthode qui donne le type de fichier pdf, doc......
    fileFilter(req, file, cb) {
        // if(!file.originalname.endsWith('.pdf')){
        //  return cb(new Error('Please upload a PDF'))
        if (!file.originalname.match(/\.(jpg|bmp|png)$/)) {
            return cb(new Error('Please upload an image'))
        } else {
            cb(undefined, true)
        }

    }
})

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()

    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })

})
// challenge video 127
router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})
router.get('/users/:id/avatar', auth, async (req, res) => {
    try {
        const user = awaitUser.findById(req.params.id)
        if (!user || !user.avatar) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})
module.exports = router