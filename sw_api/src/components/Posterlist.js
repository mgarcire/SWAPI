import React, {Component} from "react";
import Poster from "./Poster";

class Posterlist extends Component {
    render() {
        const {list, showHideModal} = this.props;

        return (
            <div className='row'>
                {list.map((element, i) => {
                    return (
                        <Poster 
                            key={i}
                            id={i}
                            name={element.name}
                            image={element.image}
                            showHideModal={showHideModal}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Posterlist;