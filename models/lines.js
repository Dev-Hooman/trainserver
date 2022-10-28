const mongoose = require('mongoose')

const linesSchema = new mongoose.Schema({
    TrainName : String,
    distance :[{
        Xaxis : Number,
        Yaxis : Number
    }],

},
{timestamps: true}
)

const lines = mongoose.model('lines', linesSchema);
module.exports = lines