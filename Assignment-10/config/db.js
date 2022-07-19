const mongoose=require('mongoose');
exports.dbConn=async()=>{
    try{
       const dbURL ="mongodb+srv://JyotiNayak:jyoti123@cluster0.vkwqp.mongodb.net/testdb?retryWrites=true&w=majority";
       await mongoose.connect(dbURL)
       console.log(`Database connected`);
    
    }catch(err){
        console.log(`Database connection error ${err.message}`);
    }
}