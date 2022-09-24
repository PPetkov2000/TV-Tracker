import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <h3 className="footer__text">&copy; TV Tracker {new Date().getFullYear().toString()}</h3>
      </div>
    </footer>
  )
}

export default Footer
