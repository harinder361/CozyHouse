const mongoose =  require('mongoose')

const PostSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    animal:{
        type: String
    },
    breed:{
        type: String
    },
    description: {
        type: String,
        required: false
    },
    imageURL: {
        type: String,
        required: false
    },
    age: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false
    }

},{timestamps: true})


module.exports = mongoose.model("Post", PostSchema);