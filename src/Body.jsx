import React from 'react'
import BooksCards from './components/BooksCards'



const Body = () => {

  const books = [{
    id:1,
    bookname: "Fantasy"

  },
  {
    id:2,
    bookname: "Science"

  },{
    id:3,
    bookname: "Novels"

  },{
    id:4,
    bookname: "Mathematics"

  },{
    id:5,
    bookname: "Computers"

  },
  {
    id:6,
    bookname: "Physics"

  },
  {
    id:7,
    bookname: "Horror"

  },
  {
    id:8,
    bookname: "Fiction"

  },
  {
    id:9,
    bookname: "Literature"

  }]
  console.log(books)
  return (
    <div className =" bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://r4.wallpaperflare.com/wallpaper/148/392/948/1920x1080-px-books-interior-design-interiors-knowledge-library-shelves-anime-pokemon-hd-art-wallpaper-f970182d511a9d8b26e7588f7021a6cd.jpg)" }}>
      <div className='flex flex-wrap justify-center'>
        {books.map(book => 
       <BooksCards key={book.id} bookdata = {book}/>
        )}
        
       

       </div>
    </div>
  )
}

export default Body