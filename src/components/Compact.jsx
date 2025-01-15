import '../index.css'
import PropTypes from "prop-types";


const Compact = ({imgstyles, h2Styles, altText, pStyles, img, text, onMouseEnter, onMouseLeave, largeText}) => {
  return (
    <div className='comp'>
        <img src={img} alt={altText} style={imgstyles} loading='lazy' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        <h2 style={h2Styles}>{text}</h2>
        <p style={pStyles} > {largeText} </p>

      
    </div>
  )
}
Compact.propTypes = {
    imgstyles: PropTypes.object,
    pStyles: PropTypes.object,
    h2Styles: PropTypes.object,
    img: PropTypes.string,
    text: PropTypes.string,
    largeText: PropTypes.string,
    altText: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};




export default Compact

