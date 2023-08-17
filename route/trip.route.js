const express = require("express")
const { TripModel } = require("../model/trip.model")
const tripRoute = express.Router()


tripRoute.get("/retrieve",async(req,res)=>{
    try {
        let data = await TripModel.find()
        res.status(200).send({msg:"All Data get successful", data:data})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong", error:error.message})
    }
})


tripRoute.post("/post",async(req,res)=>{
    try {
        const newTrip = new TripModel({...req.body})
        await newTrip.save()
        
        res.status(200).send({msg:"New Trip created", data:newTrip})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong", error:error.message})
    }
})


tripRoute.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const data = await TripModel.findByIdAndDelete({_id:id})
        res.status(200).send({msg:"delete Successfull", data:data})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong", error:error.message})
    }
})

tripRoute.get("/sort/:criteria",async(req,res)=>{
    try {
        const {criteria} = req.params
        const sortOpt = {budget:criteria === "asc" ? 1 : -1}

        const sortData = await TripModel.find().sort(sortOpt)
        res.status(200).send({msg:"Sorting Successful", data:sortData})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong", error:error.message})
    }
})

tripRoute.get("/filter/:destination",async(req,res)=>{
    try {
        const {destination} = req.params
        const filterDestination = await TripModel.find({destination})
        res.status(200).send({msg:"Filtering Successful", data:filterDestination})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong", error:error.message})
    }
})


module.exports = {
    tripRoute
}