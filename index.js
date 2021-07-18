var  express = require ("express");
var  bodyparser = require ("body-parser");
var mongoose = require ("mongoose");

const app= express( )

app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
     extended:true
}))

mongoose.connect('mongodb://localhost:27017/testdb',{
     useNewUrlParser:true,
     useUnifiedTopology:true
});

var db = mongoose.connection;

db.on('err',()=>console.log("error in db connection"));
db.on('open',()=>console.log("connected to database"));

app.post("/appcomponent",(req,res)=>{
     var name= req.body.name
     var email= req.body.email
     var phno= req.body.phno
     var password= req.body.password

     var data = {
          "name":name,
          "email":email,
          "phno":phno,
          "password":password,
     }

     db.collection('users').insertOne(data,(err,collection)=>{
          if (err){
               throw err;

          }
          console.log("record inserted successfully");
          return res.redirect('app.component.html')
     })
})


app.get("/appcomponent",(req,res)=>{
     res.set({
          "Allow-access-Allow-origin":'*'
     })
     return res.redirect('app.component.html')
}).listen(4000);

console.log("listening on PORT 4000");