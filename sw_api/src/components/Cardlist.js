import React, {Component} from "react";
import Card from "./Card";

class Cardlist extends Component {
    render() {
        const {list} = this.props;

        return (
            <div className='row'>
                {list.map((user, i) => {
                    return (
                        <Card 
                            key={i}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Cardlist;