import PropTypes from "prop-types";

const Txt = ({text}) => {
  return (
    <h1 style={{ marginTop: 60,
    marginBottom: 30,
      textAlign: 'center',
      fontSize: 44,
    }}> {text}</h1>
  )
}


export default Txt
Txt.propTypes = {
    text: PropTypes.string.isRequired
};