import React, {Component} from "react";

class ModalInfo extends Component {
    
    createElement() {
        const el = this.props.element;
        
        let element = {
            name : "",
            data1 : "",
            data2 : "",
            data3 : ""
        };

        if (el.name !== undefined) {
            element.name = el.name;
        } else {
            element.name = el.title;
        }
        
        // TODO.

        return element;
    }

    render() {
        const element = this.createElement();

        return (
            <div>
                <p>{element.name}</p>
            </div>
        );
    }
}

export default ModalInfo;