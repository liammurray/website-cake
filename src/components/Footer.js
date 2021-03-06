import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me on Instagram{' '}
      <a href="https://instagram.com/liam.c.murray/">@liam.c.murray</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Liam C
          Murray.
        </span>
      </div>
    </footer>
  </div>
)
