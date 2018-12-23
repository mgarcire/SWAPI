import React, {Component} from "react";
import ModalInfo from "./ModalInfo";
import "./Modal.css"

class Modal extends Component {

    constructor() {
        super();

        this.state = {
            item : {}
        };
    }

    // Method that compares the episode ids of the results in case the item is a movie.
    compare(a,b) {
        if (a.episode_id < b.episode_id)
          return -1;
        if (a.episode_id > b.episode_id)
          return 1;
        return 0;
    }  

    componentDidMount() {
        this.setState({item : this.props.item}, () => {
            if (this.state.item.results !== null && this.state.item.results !== undefined && this.state.item.results.length <= 0) {
                fetch(this.props.item.link).then(response => {
                    return response.json();
                }).then(response => {
                    let item = {...this.state.item};
                    item.results = response.results;

                    if (item.name === "Movies" && item.results !== null && item.results !== undefined){
                        item.results.sort(this.compare);
                    }

                    this.setState({item});
                });
            }
        });
    }

    closeModal() {
        this.props.item.results = [];
        this.props.showHideModal('none', -1);
    }

    render() {
        const {display} = this.props;
        
        if (this.state.item.results !== null && this.state.item.results !== undefined && this.state.item.results.length > 0) {
            return (
                <div className='modal modal-container' style={{display:display}}>
                    <div className='row'>
                        <div className='col-12 modal-body modal-screen'>
                            <img src='images/cancel_icon.png' className='close-icon' onClick={() => this.closeModal()} alt='Close button'/>
                            <p className='modal-title tc'>{this.state.item.name}</p>
                            <div>
                                {this.state.item.results.map((element, i) => {
                                    return (
                                        <ModalInfo key={i} title={this.state.item.name} element={element}/>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='modal modal-container' style={{display:display}}>
                    <div className='row'>
                        <div className='col-12 modal-body modal-screen'>
                            <img src='images/cancel_icon.png' className='close-icon' onClick={() => this.closeModal()} alt='Close button'/>
                            <p className='modal-title tc'>{this.state.item.name}</p>
                            <div>
                                <p className='tc' id='modal-loading'>Loading...</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Modal;