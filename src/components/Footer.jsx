import logo from '../assets/charbest.svg'
import '../index.css'
const Footer = () => {
  return (
    <footer >
        <div className="foot">
         <div className="footer_sect">       
            <img style={{width: '200px'}} src={logo} alt=" logo Image" />     
        
         <nav className="footer_nav">
            <ul >
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Why Us</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">contact Us</a> </li>
            </ul>
        </nav>
       
        </div>
        <div className="footer_sect">        
        <section className="footer_text">
            <p> Instagram</p>
            <p> Facebook</p>
            <p>whatsapp</p>
        </section>
        <section className="footer_text">
            <p> Copyright &#64; 2024 All Rights reserved</p>
        </section>
        </div>

        </div>
        
        
      
    </footer>
  )
}

export default Footer
