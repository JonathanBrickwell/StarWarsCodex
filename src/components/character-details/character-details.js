import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/img/star-wars-logo.png";

const CharacterDetails = (props) => {

    const [selectedCharacter, setSelectedCharacter] = useState(props.location.selectedCharacter);
    const [homeworldPlanet, setHomeworldPlanet] = useState();
    const [listOfFilms, setListOfFilms] = useState([]);

    useEffect(() => {
        getHomeworldPlanet();
    }, []);

    const getHomeworldPlanet = () => {
        fetch(props.location.selectedCharacter.homeworld)
            .then(response => response.json())
            .then(data => {
                setHomeworldPlanet(data.name);
            })
            .catch(console.log)
    }

    return(
        <div className="container character-details">
            <div className="row">
                    <div className="col d-flex justify-content-center mt-4 mb-4">
                        <img src={logo} alt="Star Wars Logo"></img>
                    </div>
                </div>
            <div className="row">
                <div className="col d-flex flex-column align-items-center mt-4 mb-4">
                    <h1>Character Details</h1>
                    <ul>
                        <li>Name: {selectedCharacter.name}</li>
                        <li>Height: {selectedCharacter.height} </li>
                        <li>Weight: {selectedCharacter.mass} </li>
                        <li>Birth Year: {selectedCharacter.birth_year} </li>
                        <li>Gender: {selectedCharacter.gender} </li>
                        <li>Homeworld: {homeworldPlanet} </li>
                    </ul>
                    <Link className="btn btn-dark" to={{pathname: "/"}}>Back</Link>
                </div>
                
            </div>
        </div>
    )

}

export default CharacterDetails;