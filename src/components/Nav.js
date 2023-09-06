import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import './nav.css'

const Nav = () => {
    return (
        <>
            <div className="free">

                <div className="icon">=
                    <FaTruckMoving />
                </div>
                <p>Free SHipping when shopping upto $1000</p>
            </div>
            <div className='main-header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.svg' alt='logo'></img>
                    </div>
                    <div className='search-box'>
                        <input type='text' value='' placeholder='Search your product here...' autoComplete='off'></input>
                        <button>Search</button>
                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div className='user-icon'>
                                <AiOutlineUser />
                            </div>
                            <p>Hello, User</p>
                        </div>
                        <div className='second-icon'>
                            <p><AiOutlineHeart /></p>
                            <p><BsBagCheck /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav