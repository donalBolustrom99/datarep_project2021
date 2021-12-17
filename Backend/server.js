const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const path = require('path')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//provided code from week7
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//code to run the appllication from the same port and build
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')))

//mongoose link to grab my infomation from the server default password admin
mongoose.connect('mongodb+srv://admin:admin@cluster0.t4zju.mongodb.net/holdingDeadlines?retryWrites=true&w=majority', {useNewUrlParser: true});

//schema just declaring it
const Schema = mongoose.Schema;

//declaring the type of information we want and the variable types
const deadlineSchema = new Schema({
    modName:String,
    endDate:String,
    endTime:String,
    extraText:String
});

//declaring collection, similiar to folders in the explorer 
const deadlineModel = mongoose.model("deadlineCollection", deadlineSchema);

//res.json will send the json info instead of boring text with .send
app.get('/deadline', (req, res)=>{

    deadlineModel.find((err, data)=>{
        res.json(data);
    })
});

//posting the infomation needed, grabs and sends infomation
app.post('/deadline', (req, res)=>{

    deadlineModel.create({
        modName:req.body.modName,
        endDate:req.body.endDate,
        endTime:req.body.endTime,
        extraText:req.body.extraText
    })
    //prevent double adding in mongo
    res.send('Deadline Added');
})

//code for single port running
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

//searches for id from mongo
app.get('/deadline/:id', (req, res, next)=>{
    console.log(req.params.id);

    deadlineModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

//update code
app.put('/deadline/:id', (req, res)=>{
    console.log("Update Deadline: "+ req.params.id);
    console.log(req.body);

    deadlineModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, 
        (err,data)=>{
            res.send(data);
    })
})

//delete code
app.delete('/deadline/:id', (req, res)=>{
    console.log("Delete Deadline: "+req.params.id);

    deadlineModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})