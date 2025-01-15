import Compact from "./Compact";
import ship_1 from '../assets/ship_1.jpg';
import ship_2 from '../assets/ship_2.jpg';
import packaging from '../assets/packaging.jpg';
import shipping from '../assets/shipping.jpg';
import '../index.css';
import { pStyles, imgstyles_short, imgstyles_long, h2Styles } from './styles.jsx'

const Offer= () => {
  
  return (
    <div className="offer">
        <section className="offer_one"  >
        <Compact
        img={ship_1}
        pStyles={pStyles}
        h2Styles={h2Styles}
        imgstyles={imgstyles_short }
        altText={'Ship one Image'}
        text={'Export Services'}
        largeText={'Comprehensive export solutions, from farm to port.'}        
        />

        <Compact
        img={ship_2}        
        pStyles={pStyles}
        h2Styles={h2Styles}
        imgstyles={imgstyles_long }
        altText={'Ship one Image'}
        text={'Import Services'}
        largeText={'We source and deliver premium agricultural produce worldwide with a focus on speed and reliability.'}    
        
        />
        </section>
         <section className="offer_one" >
        <Compact        
        img={packaging}
        pStyles={pStyles}
        h2Styles={h2Styles}
        imgstyles={imgstyles_long }
        altText={'Ship one Image'}
        text={'Custom Packaging'}
        largeText={'Our tailored packaging preserves freshness, aligns with branding, and includes eco-friendly options.'}        
        />

        <Compact
        img={shipping}        
        pStyles={pStyles}
        h2Styles={h2Styles}
        imgstyles={imgstyles_short }
        altText={'Ship one Image'}
        text={'Logistics and Shipping'}
        largeText={'Efficient, reliable, and timely delivery worldwide'}    
        
        />
        </section>
        

      
    </div>
  )
}

export default Offer




// import { useState } from 'react';
// import Compact from './Compact';
// import ship_1 from '../assets/ship_1.jpg';
// import ship_2 from '../assets/ship_2.jpg';
// import packaging from '../assets/packaging.jpg';
// import shipping from '../assets/shipping.jpg';
// import '../index.css';
// import { pStyles, h2Styles } from './styles.jsx';

// const Offer = () => {
//   const [hoveredSectionOne, setHoveredSectionOne] = useState(null);
//   const [isHovered, setIsHovered] = useState(false)
//   const [hoveredSectionTwo, setHoveredSectionTwo] = useState(null);

//   const handleMouseEnterSectionOne = (image) => {
//     setHoveredSectionOne(image);
//     setIsHovered(true)
//   };

//   const handleMouseLeaveSectionOne = () => {
//     setHoveredSectionOne(null);
//     setIsHovered(false)
//   };

//   const handleMouseEnterSectionTwo = (image) => {
//     setHoveredSectionTwo(image);
//     setIsHovered(true)

//   };

//   const handleMouseLeaveSectionTwo = () => {
//     setHoveredSectionTwo(null);
//     setIsHovered(false)

//   };

//   const imgstyles_short = (hovered) => ({
//     borderRadius: '20px',
//     cursor: 'pointer',
//     maxWidth: '100%',
//     width: hovered ? '800px' : '400px',
//     height: '400px',
//     transition: 'flex-basis 0.5s ease-in-out',
//   });

//   const imgstyles_long = (hovered) => ({
//     cursor: 'pointer',
//     borderRadius: '20px',
//     maxWidth: '100%',
//     width: hovered ? '400px' : '800px',
//     height: '400px',
//     transition: 'flex-basis 0.5s ease-in-out',
//     // marginLeft: hovered ? 'auto' : 0,
//   });

//   return (
//     <div className="offer">
//       {/* First section of images */}
//       <section className="offer_one">
//         <Compact
//           onMouseEnter={() => handleMouseEnterSectionOne('first')}
//           onMouseLeave={handleMouseLeaveSectionOne}
//           img={ship_1}
//           pStyles={pStyles}
//           h2Styles={h2Styles}
//           imgstyles={imgstyles_short(hoveredSectionOne === 'first')}
//           altText={'Ship one Image'}
//           text={'Export Services'}
//           largeText={'Comprehensive export solutions, from farm to port.'}
//         />

//         <Compact
//           onMouseEnter={() => handleMouseEnterSectionOne('second')}
//           onMouseLeave={handleMouseLeaveSectionOne}
//           img={ship_2}
//           pStyles={pStyles}
//           h2Styles={h2Styles}
//           imgstyles={imgstyles_long(hoveredSectionOne === 'second')}
//           altText={'Ship two Image'}
//           text={'Import Services'}
//           largeText={
//             'We source and deliver premium agricultural produce worldwide with a focus on speed and reliability.'
//           }
//         />
//       </section>

//       {/* Second section of images */}
//       <section className="offer_one">
//         <Compact
//           onMouseEnter={() => handleMouseEnterSectionTwo('third')}
//           onMouseLeave={handleMouseLeaveSectionTwo}
//           img={packaging}
//           pStyles={pStyles}
//           h2Styles={h2Styles}
//           imgstyles={imgstyles_long(hoveredSectionTwo === 'third')}
//           altText={'Packaging Image'}
//           text={'Custom Packaging'}
//           largeText={
//             'Our tailored packaging preserves freshness, aligns with branding, and includes eco-friendly options.'
//           }
//         />

//         <Compact
//           onMouseEnter={() => handleMouseEnterSectionTwo('fourth')}
//           onMouseLeave={handleMouseLeaveSectionTwo}
//           img={shipping}
//           pStyles={pStyles}
//           h2Styles={h2Styles}
//           imgstyles={imgstyles_short(hoveredSectionTwo === 'fourth')}
//           altText={'Shipping Image'}
//           text={'Logistics and Shipping'}
//           largeText={'Efficient, reliable, and timely delivery worldwide'}
//         />
//       </section>
//     </div>
//   );
// };

// export default Offer;
