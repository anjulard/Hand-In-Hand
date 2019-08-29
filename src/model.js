const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let mcq= new Schema({
    question: {
        type: String
    },
    answer_a: {
        type:String
    },
    answer_b:{
        type:Number
    },
    answer_c:{
        type:Number
    },
    answer_d: {
        type:String
    },

    
});
module.exports = mongoose.model('mcq', mcq);
