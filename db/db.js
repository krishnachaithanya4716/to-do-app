const { default: mongoose } = require('mongoose');
const mongosoe =  require('mongoose');
const { boolean } = require('zod');

const mongourl = "mongodb+srv://krishnachaithanya6085:B3ymOA0XemLpGijo@cluster0.hsfrvea.mongodb.net/"
mongoose.connect(mongourl)

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:boolean

})


const todo = mongoose.model(todoSchema);

module.exports({
    todo
})