import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SearchInput, { createFilter } from 'react-search-input';

const Card = (props) => {

    const [characters, setCharacters] = useState(props.props);
    const [favoriteCharacter, setFavoriteCharacter] = useState([]);

    useEffect(() => { setCharacters(props.props) }, [props.props]);

    const updatedSearch = (term) => {
        const filteredCharacters = props.props.filter(
            createFilter(term, "name")
        );
        setCharacters(filteredCharacters);
    }

    return (
        <div className="row gy-4">
            <SearchInput placeholder="Search characters..." className="search-input" onChange={updatedSearch}></SearchInput>
            {
                characters.map(result => {
                    return <div key={result.name} className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <p className="lead">
                                    <Link
                                        to={{
                                            pathname: `/character-details/${result.name}`,
                                            selectedCharacter: result
                                        }}>
                                        {result.name}
                                    </Link>
                                </p>
                            </div>  
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Card;