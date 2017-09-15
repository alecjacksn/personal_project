import React from 'react';
import ReactDOM from 'react-dom';

import Slider1 from '../components/slider/ImageSlider';



class Slider extends React.Component {

    render() {
        const images = [
            
            "https://images-na.ssl-images-amazon.com/images/I/31-Wo6Wkd9L._SL160_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51baS0ThjcL._SL160_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/51aZJDVdinL._SL160_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/312K9DD-TfL._SL160_.jpg",
        ];
    
        return (
          <Slider1 images={images} >
            {images.map((image, key) => <div key={key}><img src={image} alt="" /></div>)}
          </Slider1>
        );
      }
    }
export default Slider;