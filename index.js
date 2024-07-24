const express=require("express");
const bodyparser=require("body-parser");
const app=new express();
const port=5000
app.use(bodyparser.json());
app.get('/',(request,response)=>{
    const status={
        "status":"hi ananth this is your first express js project  feel free and do well"
    }
    response.send(status);
})
app.post('/Addition',(request,response)=>{
    const {a,b}=request.body;
    if(a===undefined||b===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const c=a+b;
        response.json({c})
    }
})
app.post('/Subtraction',(request,response)=>{
    const {a,b}=request.body;
    if(a===undefined||b===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const c=a-b;
        response.json({c})
    }
}) 
app.post('/Multiplication',(request,response)=>{
    const {a,b}=request.body;
    if(a===undefined||b===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const c=a*b;
        response.json({c})
    }
})
app.post('/Division',(request,response)=>{
    const {a,b}=request.body;
    if(a===undefined||b===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const c=a/b;
        response.json({c})
    }
})
app.post('/Remainder',(request,response)=>{
    const {a,b}=request.body;
    if(a===undefined||b===undefined){
        return response.status(404).json({"error": "enter valid input"});
    }else{
        const c=a%b;
        response.json({c})
    }
})
app.listen(port,()=>{
    console.log("listening this port "+port);
})