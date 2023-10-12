import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import "./navbar.scss"
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open,setOpen] = useState(false)


  return (
    <div className='navbar'>
        <div className="wrapper">
        
        <div className='left'>
            <div className="item">
                <Link className='link' to="/products/1">Men</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/2">Women</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/3">Children</Link>
            </div>
            <div className="item">
                <Link className='link' to="/products/4">Accessories</Link>
            </div>
        </div>

        <div className='center'>
            <Link className='link' to="/">M&H</Link>
        </div>

        <div className='right'>
        <div className="item">
            <Link className ="link" to="/">About</Link>
        </div>
        <div className="item">
            <Link className ="link" to="/">Contact</Link>
        </div>
            <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                </div>
            </div>
        </div>   
        </div>   
        {open && <Cart/>}
    </div>
  )
}

export default Navbar