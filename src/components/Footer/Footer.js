import { Typography } from '@material-ui/core'
import React from 'react'
import './footer.css'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
            </div>
            <div className='footer_right'>
            <Typography className='footer_copyright'>
                Developed by <a href="https://www.linkedin.com/in/samarthshah20/" target="_blank" rel='noreferrer'>Samarth Shah</a>
                <br/>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
