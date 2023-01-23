import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="flat-button cta">DOWNLOAD CV</a>
    </div>
  )
}

export default CTA