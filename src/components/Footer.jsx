import React from 'react'

<<<<<<< HEAD
export default function Footer(props) {
  return (
    <footer style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div className="footer" style={{color: props.mode==='dark'?'white':'#042743'}} >
=======
export default function Footer() {
  return (
    <footer>
    <div className="footer">
>>>>>>> 183e73d371a5a0f4421728414ace2b41e1b7db9a
        <p>This is footer section.</p>
        <ul className="socials">
            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
<<<<<<< HEAD
            <li><a href="https://github.com/balwan-coding"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/balwansingh612/"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div className="footer-copyright">
            <p>copyright &copy;2024 </p>
=======
            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
        </ul>
        <div className="footer-copyright">
            <p>copyright &copy;2022 </p>
>>>>>>> 183e73d371a5a0f4421728414ace2b41e1b7db9a
        </div>
    </div>
</footer>

  )
}
