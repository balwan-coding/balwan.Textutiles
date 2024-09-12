import React from 'react'

export default function Footer(props) {
  return (
    <footer style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div className="footer" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <p>This is footer section.</p>
        <ul className="socials">
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://github.com/balwan-coding"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/balwansingh612/"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div className="footer-copyright">
            <p>copyright &copy;2024 </p>
        </div>
    </div>
</footer>

  )
}
