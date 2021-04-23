import { React, Component } from 'react';
import Card from "../character-card/card";
import logo from "../../assets/img/star-wars-logo.png";

class StarWarsDictionary extends Component {

    constructor() {
        super();
        this.state = {
            url: "https://swapi.dev/api/people/?page=1",
            characters: [],
            page: 1,
            loading: true
        }
    }

    componentDidMount() {
        this.getStarWarsCharacters(this.state.url);
    }

    getStarWarsCharacters = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    this.setState({
                        characters: data, 
                        loading: false});
                } else {
                    console.log("No data was able to be retrieved.")
                }
            })
            .catch(console.log)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center mt-4 mb-4">
                        <img src={logo} alt="Star Wars Logo"></img>
                    </div>
                </div>
                {
                    this.state.loading ? <p>Loading</p> : <Card props={this.state.characters.results}></Card>
                }
                <div className="row mt-4">
                    <div className="col d-flex justify-content-center pb-4">
                        {
                            this.state.characters && 
                            (this.state.characters.next || this.state.characters.previous) ?
                            <div className="pagination">

                                <button disabled={!this.state.characters.previous} className="btn btn-outline-light" onClick={() => this.getStarWarsCharacters(this.state.characters.previous)}>Previous</button>

                                <button disabled={!this.state.characters.next} className="btn btn-outline-light" onClick={() => this.getStarWarsCharacters(this.state.characters.next)}>Next</button>

                            </div> : null
                        }
                    </div>
                </div>
            </div>
               
        )
    }
}

export default StarWarsDictionary;