import React, { useState } from 'react'
import{RxHamburgerMenu} from"react-icons/rx"
import{Link,useNavigate} from"react-router-dom"

const Navbar=()=>{
    const [navHeight,setNavHeight]=useState(false);
    const navigate =useNavigate();
    const gotoHome =() =>{
        navigate("/")
    }
  return (
    <>
    <nav className={navHeight ? "show nav":"nav"}>
<div className='logo' onClick={()=> gotoHome}>LUXURY RENTAL </div>
  <ul>
    <li>
        <Link to ="/aboutus">abouts us</Link>
    </li>
    <li>
        <Link to ="/villas">villas</Link>
    </li>
    <li>
        <Link to ="/contact">contact</Link>
    </li>
  </ul>
  <RxHamburgerMenu className='hamburger' onClick={()=>setNavHeight(!navHeight)}/>
  

    </nav>
    </>
  )
}

export default Navbar