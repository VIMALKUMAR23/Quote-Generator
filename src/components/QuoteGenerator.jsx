import axios from 'axios'
import React, { useEffect, useState } from 'react'

function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  const getQuote = () => {
    // using axios 
    axios.get('https://dummyjson.com/quotes')
      .then((res) => {
        const quotes = res.data.quotes;
    // getting random value 
        const newIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[newIndex].quote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //every inital state value will generated
  useEffect(() => {
    getQuote(); 
  }, []);
  return (
    <>
    <div className='flex justify-center items-center mt-10 '>
    <div className='bg-pink-200 w-[600px] h-[500px] border rounded-md flex justify-center items-center flex-col'>
        <div className=' border border-white p-2 rounded-lg m-5 '>
            {/* quotes here  */}
             <p>{quote}</p>
             
        </div>
        <div>
            <button onClick={getQuote} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' >
                NEXT
            </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default QuoteGenerator
