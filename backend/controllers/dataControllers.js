const { default: mongoose } = require('mongoose')
const Osadnicy = require('../models/resourcesModel')


const getData = async (req, res) => {
    const data = await Osadnicy.find({})
    res.status(200).json(data)
}
const createResources = async (req, res) => {
    const resourceObj = req.body
    try{
        const addedDocument = await Osadnicy.create(resourceObj)
        res.status(200).json(addedDocument)
    } catch(err){
        res.status(400).json({mssg: 'ajajaj', error: err.message})
    }
}
const updateResoruce = async (req, res) => {
    const { id } = req.params
    const resourceObj = req.body
    console.log(resourceObj)
    let updatedResource = null
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid id'})
    }
    try{
        //updatedResource = await Osadnicy.findOneAndUpdate({name: id}, resourceObj)
        updatedResource = await Osadnicy.findOneAndUpdate({_id: id}, resourceObj)
        
    } catch(err){
        return res.status(404).json({error: err.message})
    }
    if(!updatedResource) return res.status(404).json({error: 'Resource not found'})
    res.status(200).json(updatedResource)
}
module.exports = {
    getData,
    createResources,
    updateResoruce
}