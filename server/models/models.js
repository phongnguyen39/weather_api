var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/cakeschema");
mongoose.Promise = global.Promise;
// mongoose.connection.on("Mongoose Connected", function () {
//     console.log("********** Mongoose Connected")
// })

const FeedbackSchema = new mongoose.Schema({
    comment: {type: String},
    rating: {type: Number}
})
mongoose.model("Feedback", FeedbackSchema);
// var FeedbackCollection = mongoose.model("FeedbackCollection")
// mongoose.Promise = global.Promise;

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true},
    url: {type: String, required: true},
    feedback: [FeedbackSchema]
}, {timestamps: true})
mongoose.model("Cake", CakeSchema);
// var CakeCollection = monogoose.model("CakeCollection")

module.exports = {
    cake: mongoose.model("Cake"),
    feedback: mongoose.model("Feedback")
};
