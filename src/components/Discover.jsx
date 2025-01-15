import disover from '../assets/discover.jpg';
import BookNow from './BookNow';
import '../index.css';
import './bookNow.css';

const Discover = () => {
  return (
    <div className='discover_sect'>
    <div className='discover'>
        <img src={disover} alt=" Discover Image" />
        <div className='discover_mian_text'>
          <section className='discover_txt'>
          <p style={{fontSize: '1.0rem'}}> What Sets Charbest Agro Ventures Apart </p>
          </section>
          <p>Discover why Charbest Agro Ventures is the preferred partner for agricultural import and export solutions worldwide.</p> 
          <BookNow/>
        </div>  
    </div>
    
    <section className='txt_2 discover_text'>
          <p> Uncompromising Quality</p>
      </section>
      <section className='txt_3 discover_text'>
        <p style={{padding: "10px",
          height: '30px'
        }}> Global Reach</p>
      </section>
        <section className='txt_4 discover_text'>
        <p>Sustainbility Commitment</p>
      </section>
        <section className='txt_5 discover_text'>
        <p>Reliable Logistics</p>
      </section>
    </div>    
      
  )
}

export default Discover
