const mongoose=require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/').then(()=>{
    console.log("Connected!");
});



const contractSchema=new  mongoose.Schema({
    name:{
        type:"string",

    },
    email:{
        type:"string"
    },
    subject:{
        type:'string',
        require:true
    },
    message:{
        type:'string'
    }
});



const contractDb=new mongoose.model("contract",contractSchema);
module.exports=contractDb;