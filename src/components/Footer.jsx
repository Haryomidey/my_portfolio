import React from 'react';
import '../styles/Footer.css';

function Footer({darkMode}) {
  return (
    <footer>
        <div className='form-name' id ="subscribe">
            <h1>OLADIIPO AYANLEKAN AYOMIDE</h1>
            <form>
                <p>Fill in the spaces below to subscribe to my blog page and get updated my new projects and posts</p>
                <div className='form-inputs'>
                    <input type="text" placeholder='Name' required/>
                    <input type="email" placeholder='Email' required/>
                    <textarea placeholder='Message' required></textarea>
                    <div className='form-button'>
                        <button type="submit" className='pointer'>Submit</button>
                    </div>
                </div>  
            </form>
        </div>
        <p className='footer-p'> &copy; Oladiipo Ayanlekan Ayomide with react - 2023</p>
        <div className='social-media-icon'>
            <a href="https://twitter.com/Ayotech11?t=3MuYOQtW5ads4XLLTUcrQw&s=09">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082080325504">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+2348130771867&text=Hello%20"><i
                className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/oladiipo-ayomide-059a04247">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Haryomidey">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        <a href='#home' className='back-to-top'>
            <span className ="material-symbols-outlined pointer">
                arrow_upward
            </span>
        </a>
    </footer>
  )
}

export default Footer;