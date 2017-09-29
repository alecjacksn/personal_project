import React, { Component } from 'react';
class AlexaSection extends Component {

    render() {
        return (
            <div>
                <div className="grad-container">
                    <div className="alexa-grad">
                        <div className="alexa-tab-homepage">
                            <h1 className="Alexa-header">Shop Alexa</h1>
                        </div>
                    </div>
                </div>
                <div className="grad-container">
                    <div className="google-grad">
                        <div className="google-tab-homepage">
                            <h1 className="google-header">Google Assistant</h1>
                        </div>
                    </div>
                </div>
                <div className="grad-container">
                    <div className="alexa-tab-homepage">
                        <h1 className="Alexa-header">Homekit</h1>
                    </div>
                </div>
            </div>
        );
    }
}


export default AlexaSection;