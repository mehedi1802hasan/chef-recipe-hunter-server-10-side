const express=require('express');
const app=express();
const cors=require('cors');
const port= process.env.PORT || 5000;

const chefs=require('./data/chefs.json');
app.use(cors());
app.get('/',(req,res)=>{
    res.send("chefs data is running")
});
app.get('/chefs',(req,res)=>{
    res.send(chefs);
});
app.get('/chefs/:id',(req,res)=>{
    const id=req.params.id;
    const item=chefs.find((pd)=>pd.id==id)
  console.log(item)
    res.send(item);
});

app.listen(port,()=>{
    console.log(`Chefs APi is runnign on port:${port}`)
})