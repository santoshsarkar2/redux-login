import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
                © 2023 My App:
                <a className="text-dark" href="https://myapp.com"> myapp.com</a>
            </div>
        </footer>
        <div className="text-center p-3">
            <p>Follow us on social media</p>
            <a href="https://facebook.com" className="me-2">Facebook</a>
            <a href="https://twitter.com" className="me-2">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
        </div>
        
      
    </div>
  )
}

export default Footer
