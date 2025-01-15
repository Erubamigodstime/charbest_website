import './HappyClient.css'
import psn_1 from '../assets/psn_1.jpg';
import psn_2 from '../assets/psn_6.jpg';
import psn_3 from '../assets/psn_9.jpg';
import psn_4 from '../assets/psn_4.jpg';
import FastCounter from './FastCounter';
import { counter_two_styles } from './styles';


const HappyClient = () => {
  return (
    <div className='main_sect'>
        <div className='img_sect'>
            <img  src={psn_1} alt=" person Image" />
            <img  src={psn_2} alt="person Image" />
            <img  src={psn_3} alt="person Image" />
            <img  src={psn_4} alt="person Image" />


        </div>
        <div className='counter_sect'>
            <FastCounter max={1500} text={'+'} styles={ counter_two_styles} />
            <p> Happy Clients and succesful transactions</p>

        </div>      
    </div>
  )
}

export default HappyClient
