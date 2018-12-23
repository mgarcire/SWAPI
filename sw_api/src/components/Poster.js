import React, {Component} from "react";
import './Poster.css';

class Poster extends Component {
    // Method that is called when the poster is clicked.
    onCardClicked() {
        this.props.showHideModal('block', this.props.id);
    }

    render() {
        const {name, image} = this.props;

        return (
            <div className='col-md-3 col-sm-6 col-xs-12'>
                <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 poster' onClick={() => this.onCardClicked()}>
                    <img src={`${image}`} alt='poster' className='poster-image'/>
                    <div>
                        <p className='poster-name'>{`${name}`}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Poster;