import React, {Component} from "react";
import './Card.css';

class Card extends Component {
    render() {
        const {title, image} = this.props;
        return (
            <div className='col-md-3 col-sm-6'>
                <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 card'>
                    <img src={this.props.image} alt='card'/>
                    <div>
                        <h3>title</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card