const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async (req,res)=>{

const {name,email,message} = req.body

const transporter = nodemailer.createTransport({
service: "gmail",
auth:{
user: "yourgmail@gmail.com",
pass: "your_app_password"
}
})

const mailOptions = {
from: email,
to: "yourgmail@gmail.com",
subject: "Portfolio Contact Message",
text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
}

try{
await transporter.sendMail(mailOptions)
res.json({message:"Message sent successfully!"})
}
catch(error){
res.json({message:"Error sending message"})
}

})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})