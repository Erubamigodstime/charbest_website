import BookNow from "./BookNow"
import onion from '../assets/onion-img.avif';
import spring_onion from '../assets/spring_onion.jpg';
import FastCounter from '../components/FastCounter';
import HappyClient from "./HappyClient";
import { counter_one_styles } from "./styles";
const Connect = () => {
  return (
    <>
    <div className="connect-sect">
          <h1 className="text" >CONNECTING FARMERS TO THE WOLRD, ONE SHIPMENT AT A TIME</h1>
          <p className="paragraph">Your trusted partner in importing and exporting premium-quality agricultural produce globally. </p>
          <div className="book">
          <BookNow/>
          </div>
          <img className="img_one" src={onion} alt=" onion Image" />
          <img className="img_two" src={spring_onion} alt=" spring onion image" />      
      </div>
      <section className="count">
      <FastCounter max={3000} plus={'+'} text={'Imported Cargo'} styles={counter_one_styles}/>
      </section>
      <section className="happy_client">
        <HappyClient/>
      </section>
    </>
    
  )
}

export default Connect
