import React, {Component} from "react";
import Cardlist from "../components/Cardlist";

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            films : [],
            people : [],
            planets : [],
            spaceships : [],
            species : []
        };
    }

    maxFilms = 7;

    componentDidMount() {
        fetch("https://swapi.co/api/films/?format=json").then(response => {
            return response.json();
        }).then(films => {
            this.setState({films : films.results});
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 tc'>
                        <img src={require('./star_wars_title.png')} id='main-image'/>
                        <p id='main-text'>
                        "count":7,"next":null,"previous":null,"results":["title":"A New Hope","episode_id":4,"opening_crawl":"It is a period of civil war.\":
                        </p>
                    </div>
                </div>
                {/* List of items*/}
                <Cardlist list={this.state.films}/>
            </div>
        );
    }
}

export default App