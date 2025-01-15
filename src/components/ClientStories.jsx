import  { useState } from 'react';
import PropTypes from "prop-types"
import './ClientStories.css'; 

const ClientStories = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const itemsToShow = 2;
   const handleNext = () => {
     setDirection('right');
    setCurrentIndex((prevIndex) => 
      (prevIndex + itemsToShow) % stories.length
    );
  };

  const handlePrevious = () => {
    setDirection('left'); 
    setCurrentIndex((prevIndex) => 
      (prevIndex - itemsToShow + stories.length) % stories.length
    );
  };

 
 
 const visibleStories = [
    stories[currentIndex],
    stories[(currentIndex + 1) % stories.length],
  ];

  return (
    <div className="client-stories">
      <div className="navigation">
        <button onClick={handlePrevious}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button onClick={handleNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>

      <div className="cards-container">
        {visibleStories.map((story, index) => (
          <div key={index} className={`card card-slide ${ direction === 'right' ? 'slide-in-right' : 'slide-in-left' }`}
          
          >
            <p className="stories-label">Stories</p>
            <div className="story-text"><p>{story.text}</p></div>
            <div className="client-info">
              <img src={story.picture} alt={story.name} className="client-pic" />
              <div className="client-name">
                {story.name}
                <span className="client-status">Customer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
ClientStories.propTypes = {
    stories: PropTypes.array,
    
};

export default ClientStories;


