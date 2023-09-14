const express=require('express');
const app=express();
const contractDb=require('./server');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.get('/',(req,res)=>{
res.render('index');
});


app.post('/submit', async (req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    };
 
    const result= new contractDb(data);
    const saveResult=await result.save();

   console.log(saveResult);
   res.send(result);
});
app.listen(3000,()=>{
    console.log('App is running at port 3000');
});