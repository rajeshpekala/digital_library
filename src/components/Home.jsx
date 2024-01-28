import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className =" bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://r4.wallpaperflare.com/wallpaper/148/392/948/1920x1080-px-books-interior-design-interiors-knowledge-library-shelves-anime-pokemon-hd-art-wallpaper-f970182d511a9d8b26e7588f7021a6cd.jpg)" }}>
      <div>
        <h1 className='text-white font-bold text-4xl'>Welcome to Digital Library...Here You can explore Numerous Books for Free</h1>
        <button className='px-2 py-2 bg-gradient-to-t from-white to-slate-300 font-bold rounded-md  mt-10 text-2xl hover:scale-95 duration-200'>
         <Link to = "/body"> Lets Explore!</Link></button>
      </div>
    </div>
  )
}
export default Home