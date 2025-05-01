import React from 'react'
import{ Link,useLocation} from 'react-router-dom'

const Footer=()=> {
    const location = useLocation();
    const isHomepage = location.pathname === '/';
  return (
    <>
    <footer className= {isHomepage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
            <h4>LUXURY RENTALS</h4>
           <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Impedit rerum libero eveniet
             corrupti modi eaque non fuga iure quasi labore consequatur
              accusamus optio sequi, provident ipsum 
            ipsam dolorem consequuntur voluptates.</p>
        
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/termsandcondition'}>Terms and condition</Link>
            </li>
            <li>
                <Link to={'/contact'}>contact</Link>
            </li>
        </ul>
        </div>
        <div className="container">
            <h4>connect with us</h4>
            <p>+91 000 356 8532</p>
            <p>harshal@gmail.com</p>
            <p> ALL Rights Reserved By harshal dhumane</p>
        </div>

    </footer>
    </>
  )
  
}

export default Footer