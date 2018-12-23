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

    componentDidMount() {
        this.setState({item : this.props.item}, () => {
            if (this.state.item.results !== null && this.state.item.results !== undefined && this.state.item.results.length <= 0) {
                fetch(this.props.item.link).then(response => {
                    return response.json();
                }).then(response => {
                    let item = {...this.state.item};
                    item.results = response.results;
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