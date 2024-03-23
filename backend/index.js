const express=require('express');
const app =express();
const db=require('./config/db');
const Post = require('./Models/Post');
const cors=require("cors");
app.use(express.json());
app.use(cors());



const port =4500;

db().then(()=>{
    console.log('conected to db');
}).catch(err => console.log(err));

app.get('/all',async (req,res)=>{
    try{
        res.json({
            title:"cookie",
            subtitle:"69,840/110,000-Estimated rank up in 1h",
            weapons:{
                title:"WEAPONS",
                score:"134/185"
            },
            kits:{
                title:"KITS",
                score:"46/64"
            },
            vehicles:{
                title:"VEHICLES",
                score:"77/102"
            },
            medals:{
                title:"MEDALS",
                score:"11/64"
            },
            assigement:{
                title:"ASSIGEMENTS",
                score:"21/100"
            },  
            dog:{
                title:"DOG TAGS",
                score:"361/720"
            },
            battlepacks:{
                title:"BATTLEPACKS",
                score:""
            },
            wins:{
                title:"WINS",
                percentage:"44%"
            },
            score:{
                title:"SCORE/MIN"
                ,value:"592"
            },
            kills:{
                title:"KILLS/MIN",
                value:"0.60"
            }
        })
    }
    catch(err){
        console.log(err),
        res.status(500).json({message:'Server error'})
    }
})

app.listen(port,(err)=>{

    if (!err) {
        console.log(`server is up and running at ${port}`);
        
    }
})

