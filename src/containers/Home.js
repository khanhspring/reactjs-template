import React, {Component} from 'react';
import Countdown from "../components/Countdown";

class Home extends Component {
    render() {
        return (
            <div className="banner-wrap">
                <div className="banner">
                    <Countdown date={'2018-12-25'}/>
                </div>
            </div>
        );
    }
}

export default Home;
