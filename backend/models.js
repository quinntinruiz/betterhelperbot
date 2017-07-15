
var connect=process.env.MONGODB_URI;
var mongoose = require ('mongoose');
var Schema=mongoose.Schema;
mongoose.connect(connect);
mongoose.connection.on('connected',function(){
  console.log("connnected to mongodb")
})

var groupSchema = new Schema({
  members: {
    type: mongoose.Schema.ObjectId,
    ref:"Student"
  },
  assignment: String,
  part: String,
  problem: String,
  location: String
})

var studentSchema = new Schema({
  name: String,
  email: String,
  password: String,
  group: {
    type: mongoose.Schema.ObjectId,
    ref:"Group"
  }
})




var models = {
  Group: mongoose.model("Group",groupSchema),
  Student: mongoose.model("Student",studentSchema)
}

module.exports=models

