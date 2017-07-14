// import mongoose from 'mongoose';
// var connect = process.env.MONGODB_URI;
// var Schema = mongoose.Schema;
// mongoose.connect(connect);
// mongoose.connection.on('connected',function(){
//   console.log("connnected to mongodb")
// })
//
// var groupSchema = new Schema({
//   membbers: {
//     type: mongoose.Schema.ObjectId,
//     ref:"Student"
//   }
//   assignment: String,
//   purpose: String,
//   location: String
// })
//
// var studentSchema = new Schema({
//   name: String,
//   group: {
//     type: mongoose.Schema.ObjectId,
//     ref:"Group"
//   }
// })
//
//
//
// var models = {
//   Group: mongoose.model("Group",groupSchema),
//   Student: mongoose.model("Student",studentSchema)
// }
//
// export default models
