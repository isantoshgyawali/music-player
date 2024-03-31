import React
// ,{ useEffect, useState, useRef } 
 from 'react'

import '../styles/MainContainer.css'

import { Banner } from './Banner';
import { FcMusic } from 'react-icons/fc'
import { AudioList } from './AudioList';

import { FavouriteList } from './languageBasedSong/Favourites'
import { Hindi } from './languageBasedSong/Hindi'
import { English } from './languageBasedSong/English'
import { Nepali } from './languageBasedSong/Nepali'

import { BrowserRouter as Router , Route, Link, Routes } from 'react-router-dom';

function MainContainer() {

  return (
    <div className='mainContainer'>
      <Banner/>

      <div className= "menuList">
        <Link to="/"><i><FcMusic /></i></Link>
        <ul>
          <li><Link to="/Favourites">Favourites</Link></li>
          <li><Link to="/Nepali">Nepali</Link></li>
          <li><Link to="/English">English</Link></li>
          <li><Link to="/Hindi">Hindi</Link></li>
        </ul>
      </div>

        <Routes>
            <Route exact path='/' element={<AudioList/>}/>
            <Route exact path='/Favorites' element={<FavouriteList/>}/>
            <Route exact path='/Nepali' element={<Nepali/>}/>
            <Route exact path='/English' element={<English/>}/>
            <Route exact path='/Hindi' element={<Hindi/>}/>
        </Routes>
    </div>
  )
}

export { MainContainer };       

