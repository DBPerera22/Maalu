
import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [movieName, setMovieName] = useState('')
   const [review, setReview] = useState('')

   const submitReview = () => {
    Axios.post("http://localhost/api/insert",{movieName: movieName, movieReview: review}).then(()=>{
      alert("Successfully inserted");
    })
   };
  return (
    <div className="App">
      <h1>Fisherman Registration</h1>

      <div className='form'>
      <label> Name: </label>
        <input type='text' className='name' onChange={(e)=> {
          setMovieName(e.target.value)
        }} />
      <label> Review: </label>
        <input type='text' className='review' onChange={(e)=> {
          setReview(e.target.value)
        }} />
        <button onClick={submitReview}>Submit</button>
      </div>


    </div>
  );
}

export default App;
