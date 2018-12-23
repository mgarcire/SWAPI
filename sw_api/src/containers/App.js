import React, {Component} from "react";
import Posterlist from "../components/Posterlist";
import Modal from "../components/Modal";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            items : [
                {
                    name : "Movies",
                    image : "images/movies.png",
                    link : "https://swapi.co/api/films/?format=json",
                    results : []
                },
                {
                    name : "Characters",
                    image : "images/characters.jpg",
                    link : "https://swapi.co/api/people/?format=json",
                    results : []
                },
                {
                    name : "Planets",
                    image : "images/planets.png",
                    link : "https://swapi.co/api/planets/?format=json",
                    results : []
                },
                {
                    name : "Spaceships",
                    image : "images/spaceships.jpg",
                    link : "https://swapi.co/api/starships/?format=json",
                    results : []
                },
                {
                    name : "Species",
                    image : "images/species.png",
                    link : "https://swapi.co/api/species/?format=json",
                    results : []
                }
            ],
            selectedPosterId : -1,
            displayModal : 'none'
        };

        this.showHideModal = this.showHideModal.bind(this);
    }

    showHideModal(display, id) {
        this.setState({displayModal : display, selectedPosterId : id});
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 tc'>
                        <img src={require('./star_wars_title.png')} id='main-image' alt='main'/>
                        <p id='main-text'>
                        This website contains some information of the movies of the <i>Star Wars</i> saga - taken from <a href='https://swapi.co'>https://swapi.co</a>. You can find the list of movies, the most important characters, the planets in the universe, the relevant spacechips and species. With all of that, be aware this website can contain <b>SPOILERS</b>! Enjoy it :)
                        <br/>
                        <br/>
                        “Do. Or do not. There is no try.” — Master Yoda
                        </p>
                    </div>
                </div>
                {/* List of items*/}
                <Posterlist list={this.state.items} showHideModal={this.showHideModal}/>
                <div className='row'>
                    <div className='col-12 tc'>
                        <p id='footer-text'>Star Wars API - 2018</p>
                    </div>
                </div>
                            
                { /* Show the modal in case the id is greater or equal than 0.*/
                this.state.selectedPosterId >= 0 ? <Modal display={this.state.displayModal} item={this.state.items[this.state.selectedPosterId]} showHideModal={this.showHideModal}/> : ""
                }
            </div>
        );
    }
}

export default App