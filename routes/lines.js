const router = require('express').Router();
const Lines = require('../models/lines')

router.get('/', (req, res)=>{
    res.send('lines running')
})

router.post('/create', async (req, res)=>{
    // console.log(req.body)
    try{
        const linesStore =  new Lines({TrainName : req.body.TrainName , distance : [{ Xaxis: req.body.Xaxis, Yaxis: req.body.Yaxis}]})
        await linesStore.save()
        res.status(200).json({message: "Lines data has been saved.."})

    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
    }
})

router.get('/view', async (req,res)=>{
    try{

        const LinesData = await Lines.find();
        res.status(200).json(LinesData);

        

    }catch(err){
        console.log(err)
        res.status(500).json({message: err})
        
    }
})


module.exports = router