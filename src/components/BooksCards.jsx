import React from 'react'

const BooksCards = (props) => {
  const {bookdata} = props
  console.log(bookdata);
  return (
    <div className ="m-4 p-2 h-60 w-[235px] rounded-lg bg-black bg-opacity-70 hover:bg-gray-100 hover:cursor-pointer ">
      <div className='font-bold flex justify-center'>
        <h1 className='py-4  text-sky-600 text-4xl  rounded-md '>{bookdata.bookname}</h1>
        </div>
       
    </div>
  )
}

export default BooksCards;