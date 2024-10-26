import React from 'react'

import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className='footer'>
            <h3>All Rights Reserved @2024</h3>
            <div className='icons'>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter} />
            </div>
            
        </div>
    )
}

export default Footer