import React from 'react'
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
export const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer-title'>Coded with <span role='img' aria-label='heart'>&#128153;</span> by <a href='https://mk-portfolio.vercel.app/' target='_blank' rel="noopener noreferrer">Pythagoras-Dev</a></p>
            {/* <div classNAme='footer-social'>
                <a href='#'>
                    
                </a>
                <a href='https://github/pythagoras-dev.com'>
                  <FaGithub/>
                </a>
            </div> */}
            <p>&#169; 2021 copyright all right reserved</p>
            
        </footer>
    )
}
