import cargo from '../assets/ship_3.jpg'


const Cargo = () => {
  return (
    <div className='cargo'>
        <img src={cargo} alt=" cargo Image" />
        <div className='cargo_text'>
            <h1> Who We Are </h1>
            <p> We are Charbest Ventures Limited, a leading importer and exporter of agricultural produce, dedicated to bridging the gap between farmers and international markets. With years of experience and a commitment to excellence, we ensure that only the finest products reach your table.</p>
        </div>      
    </div>
  )
}

export default Cargo
