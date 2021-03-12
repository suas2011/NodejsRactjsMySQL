

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');

const {createPool} = require('mysql');
const { json } = require('body-parser');
const mpool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:10
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/get',(req,res)=>{
  const sqlSelectShow="Select * from books";
  mpool.query(sqlSelectShow,(err,result)=>{
    console.log(result);
  });
});



app.post("/api/insert",(req,res)=>{
    const bookid=req.body.bookid
    const title=req.body.title
    const author=req.body.author
    const publisher=req.body.publisher
    const year=req.body.year
    const classlevel=req.body.classlevel
    const price=req.body.price
    const pages=req.body.pages
    const bookreview=req.body.bookreview
});

const sqlINSERT="INSERT INTO books(bookid,title,author,publisher,year,classlevel,price,pages,bookreview) VALUES(?,?,?,?,?,?,?,?,?)";

mpool.query(sqlINSERT,[bookid,title,author,publisher,year,classlevel,price,pages,bookreview],(err,result)=>{
  console.log(result);
});


//mpool.query(`select * from books`,(err,result,fields)=>{
  //  if(err) {
    //    return console.log(err)
   // }
   // return console.log(result);
   return console.log('MySql Connected Successfully!')
//})


//app.get('/',(req,res)=>{
  //  res.send('hello,world!');

//});
app.listen(3001, ()=>{
    console.log('Server running on port: 3001');
});
