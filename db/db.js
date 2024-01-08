
const mongoose =  require('mongoose');

const mongourl = "mongodb+srv://krishnachaithanya6085:B3ymOA0XemLpGijo@cluster0.hsfrvea.mongodb.net/"
mongoose.connect(mongourl)

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})


const todo = mongoose.model('todo',todoSchema);

module.exports = {
    todo
}