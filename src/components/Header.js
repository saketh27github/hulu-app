import React from 'react'
import {MdHome, MdTrendingUp, MdLiveTv, MdCollectionsBookmark, MdSearch, MdPerson} from 'react-icons/md'
import'./css/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__icons'>
                <div className='header__icons'>
                    <MdHome size={'30px'}/>
                    <p>Home</p>
                </div>

                <div className='header__icons'>
                    <MdTrendingUp size={'30px'}/>
                   <p>Trending</p>
                </div>

                <div className='header__icons'>
                  <MdLiveTv size={'30px'}/>
                   <p>Verified</p>
                </div>

                <div className='header__icons'>
                <MdCollectionsBookmark size={'30px'}/>
                   <p>Collections</p>
                </div>

                <div className='header__icons'>
                    <MdSearch size={'30px'}/>
                   <p>Search</p>
                </div>

                <div className='header__icons'>
                    <MdPerson size={'30px'}/>
                   <p>Account</p>
                </div>
            </div>
            <img src= {'https://logos-world.net/wp-content/uploads/2020/11/Hulu-Emblem.jpg'} alt='hulu' />
        </div>
    )
}

export default Header