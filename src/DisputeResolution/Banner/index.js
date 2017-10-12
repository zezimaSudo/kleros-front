import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const DisputeResolutionBanner = (props) => {
  return (
    <div className="dispute-resolution-banner">
      <div className="banner-container">
        <Link to="/disputes">Go back to the list</Link>
        <div className="dispute-title">
          { props.title }
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}

export default DisputeResolutionBanner
