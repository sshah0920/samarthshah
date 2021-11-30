import { Typography } from '@material-ui/core'
import React from 'react'
import './footer.css'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>
                    {resumeData.Name}
                </Typography>
            </div>
            <div className='footer_right'>
            <Typography className='footer_copyright'>
                Developed by <a href="https://www.linkedin.com/in/samarthshah20/" target="_blank" rel='noreferrer'>Samarth Shah.</a>
                <br/>
                Designed by <a href="./">Tavonline.</a>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
