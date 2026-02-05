import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHeart } from 'react-icons/fa';

const Header = ({login}) => {
  return (
    <header style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Link to={'/'}>
      <span style={{fontSize:'30px', color:'black', fontFamily:'Syne, sans-serif', fontWeight:'700',}}>TopFlex</span>
      </Link>
      <nav>
        <ul style={{display:'flex', gap:"30px", alignItems:'center'}}>
          <li>
            <Link style={{fontFamily:'Syne, sans-serif', color:'black', fontWeight:'500', }} to={'/practice'}>Item</Link>
          </li>
          <li>
            <Link style={{fontFamily:'Syne, sans-serif', color:'black', fontWeight:'500', }} to={'/gym-master'}>Style</Link>
          </li>
          <li>
            <Link style={{fontFamily:'Syne, sans-serif', color:'black', fontWeight:'500', }} to={'/membership'}>Store</Link>
          </li>
          <li>
            <Link style={{fontFamily:'Syne, sans-serif', color:'black', fontWeight:'500', }} to={'/products'}>About</Link>
          </li>
        </ul>
      </nav>
      <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
        <HiOutlineShoppingBag style={{width:'30px', height:'30px', cursor:'pointer'}} />
        <FaHeart style={{width:'25px', height:'30px', cursor:'pointer'}} />  
        <button style={{background:'#FF9D0B', borderRadius:'42px', padding:'10px 20px', border:'none', color:'white', fontFamily:'Syne, sans-serif', fontWeight:'600', fontSize:'20px', cursor:'pointer'}}>{login}</button>
      </div>
    </header>
  )
}

export default Header
