const mongoose = require("mongoose")

const tripSchema = mongoose.Schema({
    name : {type:String, require:true},
    email : {type:String, require:true,unique:true},
    destination : {type:String, require:true, enum:["India","Africa","Europe","America"]},
    no_of_travelers : {type:Number, require:true},
    budget : {type:Number, require:true},
})

const TripModel = mongoose.model("trip",tripSchema)

module.exports = {
    TripModel
}
