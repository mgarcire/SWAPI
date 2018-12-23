import React, {Component} from "react";
import "./ModalInfo.css"

class ModalInfo extends Component {
    
    constructor() {
        super();

        this.state = {
            showing : false,
            display : 'none',
            image : 'images/plus.png'
        }
    }

    createElement() {
        const el = this.props.element;
        
        let element = {
            name : "",
            data1 : "",
            data2 : "",
            data3 : "",
            data4 : "" 
        };

        if (el.name !== undefined) {
            element.name = el.name;
        } else {
            element.name = el.title;
        }
        
        // Select data from the element.
        switch(this.props.title) {
            case "Movies":
                element.data1 = <span>Director: <b>{el.director}</b></span>;

                if (el.producer.split(',').length > 1) {
                    element.data2 = <span>Producers: <b>{el.producer}</b></span>;
                } else {
                    element.data2 = <span>Producer: <b>{el.producer}</b></span>;
                }
                
                element.data3 = <span>Release Data: <b>{el.release_date}</b></span>;
                break;
            case "Characters":
                element.data1 = <span>Birth Year: <b>{el.birth_year}</b></span>;
                element.data2 = <span>Gender: <b>{el.gender}</b></span>;
                element.data3 = <span>Height: <b>{el.height/100} m</b></span>;
                element.data4 = <span>Weight: <b>{el.mass} kg</b></span>;
                break;
            case "Planets":
                element.data1 = <span>Population: <b>{el.population}</b></span>;
                element.data2 = <span>Terrain: <b>{el.terrain}</b></span>;
                element.data3 = <span>Surface Water: <b>{el.surface_water}%</b></span>;
                break;
            case "Spaceships":
                element.data1 = <span>Model: <b>{el.model}</b></span>;
                element.data2 = <span>Manufacturer: <b>{el.manufacturer}</b></span>;
                element.data3 = <span>Available Space: <b>{el.crew + el.passengers} people</b></span>;
                element.data4 = <span>Cost: <b>{el.cost_in_credits} ₹</b></span>;
                break;
            case "Species":
                element.data1 = <span>Classification: <b>{el.classification}</b></span>;
                element.data2 = <span>Language: <b>{el.language}</b></span>;
                element.data3 = <span>Average Height: <b>{el.average_height/100} m</b></span>;
                element.data4 = <span>Average Lifespan: <b>{el.average_lifespan} years</b></span>;
                break;
        }

        return element;
    }

    showHideData() {
        if (this.state.showing) {
            this.setState({showing : false, display : 'none', image : 'images/plus.png'});
        } else {
            this.setState({showing : true, display : 'block', image : 'images/minus.png'}); 
        }
    }

    render() {
        const element = this.createElement();

        return (
                <div className='col-10 modal-info-background' onClick={() => this.showHideData()}>
                    <div className='row'>
                        <div className='col-12 tc modal-info-header'>
                            <p className='modal-info-title'>{element.name}
                                <span>
                                    <img src={this.state.image} className='open-close-element-img' alt='open_close'/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='row modal-info-data' style={{display: this.state.display}}>
                        <div className='col-12 tc'>
                            <p className='modal-info-paragraph'>{element.data1}</p>
                        </div>
                        <div className='col-12 tc'>
                            <p className='modal-info-paragraph'>{element.data2}</p>
                        </div>
                        <div className='col-12 tc'>
                            <p className='modal-info-paragraph'>{element.data3}</p>
                        </div>
                        { /* Show data4 in case it has information */
                        element.data4 !== "" ? 
                            <div className='col-12 tc'>
                                <p className='modal-info-paragraph'>{element.data4}</p>
                            </div> 
                        : ""
                        }
                    </div>
                </div>
        );
    }
}

export default ModalInfo;