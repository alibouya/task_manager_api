const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email, name)=>{
sgMail.send({
    to : email,
    from: 'ali.bouyahya@gmail.com',
    subject:'Thank you',
    text: 'welcome to the app, ${name}. Let me know how you get along with the app',
    
})
}

const     sendCancelationEmail=(email, name)=>{
    sgMail.send({
        to : email,
        from: 'ali.bouyahya@gmail.com',
        subject:'Deleting account',
        text: 'Sorry for deleting your account, ${name}. Can you tell us why you unsubscribe?',
        
    })
    }
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail

}


// sgMail.send({
//     to: 'ali.bouyahya@gmail.com',
//     from:'ali.bouyahya@gmail.com',
//     subject:'this is my first app',
//     text:'i hope this one actuallt to you.'
// })

