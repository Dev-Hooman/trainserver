const mongoose = require('mongoose');

const db = 'mongodb+srv://train:niart@cluster0.37mrh84.mongodb.net/trainplotter?retryWrites=true&w=majority';

const mongodbConnection = async () => {
    try{
       await mongoose.connect(db)
       console.log("Connection Success !!!")

    }catch(err){
        console.log('Database connection failed.', err)
    }
}


module.exports = {mongodbConnection};