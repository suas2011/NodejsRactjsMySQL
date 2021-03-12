import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import axios from 'axios';

function App() {
const [bookid,setBookId]=useState("");
const [title,setTitle]=useState("");
const [author,setAuthor]=useState("");
const [publisher,setPublisher]=useState("");
const [year,setYear]=useState("");
const [classlevel,setClasslevel]=useState("");
const [price,setPrice]=useState("");
const [pages,setPages]=useState("");
const [bookreview,setBookreview]=useState("");

const [bookid,setBookIdList]=useState([]);
const [title,setTitleList]=useState([]);
const [author,setAuthorList]=useState([]);
const [publisher,setPublisherList]=useState([]);
const [year,setYearList]=useState([]);
const [classlevel,setClasslevelList]=useState([]);
const [price,setPriceList]=useState([]);
const [pages,setPagesList]=useState([]);
const [bookreview,setBookreviewList]=useState([]);

useEffect(()=>{

  Axios.get("http://localhost:3001/api/get").then((response)=>{
    setBookIdList(response.data)
    setTitleList(response.data)
    setAuthorList(response.data)
    setPublisherList(response.data)
    setYearList(response.data)
    setClasslevelList(response.data)
    setPriceList(response.data)
    setPagesList(response.data)
    setBookreviewList(response.data)
  });
},[]);


const submitInsert=()=>{
  Axios.post('http://localhost:3001/api/insert',{

    bookid:bookId,
    title:Title,
    author:Author,
    publisher:Publisher,
    year:pyear,
    classlevel:classLevel,
    price:tprice,
    pages:tpages,
    bookreview:bookReview

  }).then(()=>{
    alert('Successful Insert!');
  });
};

  return (
    <div className="App">
      <h1>Books Store</h1>
      
      <div className="form">
      <label>Enter Book Id</label>
      <input type="text" name="bookid" placeholder="BookId 4-Digits" onChange={(e)=>{setBookId(e.target.value)}}/>
      <label>Enter Title</label>
      <input type="text" name="title" placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}}/>
      <label>Enter Author</label>
      <input type="text" name="author" placeholder="Author Name" onChange={(e)=>{setAuthor(e.target.value)}}/>
      <label>Enter Publisher</label>
      <input type="text" name="publisher" placeholder="Publisher" onChange={(e)=>{setPublisher(e.target.value)}}/>
      <label>Enter Year</label>
      <input type="text" name="year" placeholder="Year" onChange={(e)=>{setYear(e.target.value)}}/>
      <label>Enter Classlevel</label>
      <input type="text" name="classlevel" placeholder="Class Level" onChange={(e)=>{setClasslevel(e.target.value)}}/>
      <label>Enter Price</label>
      <input type="text" name="price" placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}}/>
      <label>Enter Pages</label>
      <input type="text" name="pages" placeholder="Pages" onChange={(e)=>{setPages(e.target.value)}}/>
      <label>Enter Book Review</label>
      <input type="text" name="bookreview" placeholder="Book Review" onChange={(e)=>{setBookreview(e.target.value)}}/>
     
     <button onClick={submitInsert}>Submit</button>
     {bookid.map((val)=>{
       return(

        <div className="card">
          <h1>{val.bookId}|Title:{val.title}</h1>
          <p>{val.author}</p>

        <button>Delete</button>
        <input type="text" id="updateInput"/>
        <button>Update</button>



        </div>
       )

         
       
     })}
     </div>
    </div>
  );
}

export default App;
