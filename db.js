const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/sheyjobsudemy' , {useNewUrlParser : true});
         //  await mongoose.connect('mongodb+srv://kartiknair:123Goku123@cluster0.zs6o8.mongodb.net/test' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose