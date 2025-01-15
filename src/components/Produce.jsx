import Compact from "./Compact"
import fruits from '../assets/fruit.jpg';
import maize from '../assets/maize.jpg';
import cocoa from '../assets/cocoa.jpg';
import nuts from '../assets/nuts.jpg';
import spice from '../assets/spice.jpg';
import veges from '../assets/veges.jpg';
import { h2Styles, imgs, pStyles } from './styles.jsx';


const Produce = () => {
  return (
    <div className="produce">
        <section className="first_produce">
            <Compact
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}
            img={fruits}
            text={'Fresh Fruits'}
            largeText={'A variety of seasonal and exotic fruits, including mangoes, bananas, pineapples, etc.'}

            />
            <Compact
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}
            img={veges}
             text={'Vegetables'}
            largeText={'High-quality vegetables such as tomatoes, onions, potatoes, carrots, and peppers.'}
            
            />
            <Compact
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}
            img={maize}
             text={'Grains & Cereals'}
            largeText={'Essential grains like rice, maize, wheat, and millet for staple food production'}
            
            />

        </section>
         <section className="first_produce">
            <Compact  
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}          
            img={nuts}
             text={'Nuts & Seeds'}
            largeText={'A selection of nutritious nuts and seeds, including cashews, peanuts, sesame seeds, etc.'}
            
            />
            <Compact
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}
            img={spice}
             text={'Spices & Herbs'}
            largeText={'Premium spices and herbs, including ginger, turmeric, garlic, and dried chilies, etc.'}

            />
            <Compact
            imgstyles={imgs}
            h2Styles={h2Styles}
            pStyles={pStyles}
            img={cocoa}
             text={'Specialty Products'}
            largeText={'Unique offerings like cocoa, coffee beans, palm oil, and organic honey etc.'}
            
            />

        </section>
      
    </div>
  )
}

export default Produce
