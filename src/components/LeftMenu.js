import React from 'react'
import '../styles/LeftMenu.css'
import { RiHeadphoneLine } from 'react-icons/ri'
import { BiSearchAlt } from 'react-icons/bi'
import { Menu } from './Menu'
import { MenuList } from './MenuList'
import { MenuPlayList } from './MenuPlayList'
import { TrackList } from './TrackList'

function LeftMenu() {
    return (
        <div className='leftMenu'>
            <div className="logoContainer">
                <i><RiHeadphoneLine /></i>
                <h2>Music-Arena</h2>
            </div>
            <div className="searchBox">
                <input type="text" placeholder='Search...' />
                <i className='searchIcon'><BiSearchAlt /></i>
            </div>

            <Menu title={'Menu'} menuObject={MenuList} />
            <MenuPlayList />

            <TrackList />
        </div>
    )
}

export { LeftMenu }
