import React, { Component } from 'react';
import HomePicture from '../pictures/nice-house1.jpeg'

class HomeLayout extends Component {

    render() {
        return (
            <div>
                <div className="home-page-background">
                    <div className="home-page-background-image">
                        <div className="background-image-font">
                            <div className="home-page-background-grad">
                                <h1><span className='home-text'> Home Automation </span> <br /><span className="easy-text"> Easy. </span> </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HomeLayout;